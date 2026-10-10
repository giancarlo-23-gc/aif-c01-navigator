const CACHE_VERSION = 'aif-navigator-fb5527d3a66c10257ba6';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const CONTENT_CACHE = `${CACHE_VERSION}-content`;
const BASE_URL = self.registration.scope;
const resolveUrl = (path = '') =>
  new URL(path.replace(/^\//, ''), BASE_URL).toString();
const PRECACHE_MANIFEST = resolveUrl('precache-manifest.json');
const APP_ROOT = resolveUrl('');
const CONTENT_PATH = new URL('content/', BASE_URL).pathname;
const LATEST_CONTENT_PATH = new URL('content/latest.json', BASE_URL).pathname;
const APP_SHELL = [
  '',
  'index.html',
  'manifest.webmanifest',
  'favicon.svg',
  'app-icon-192.png',
  'app-icon-512.png',
  'content/latest.json',
  'content/source-manifest.json',
  'content/review-queue.json',
  'content/content-policy.json',
].map(resolveUrl);

function rememberResponse(event, cacheName, response) {
  if (!response.ok) return;
  // Clonar antes que o consumidor leia o body e manter o worker vivo até salvar.
  const copy = response.clone();
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.put(event.request, copy))
      .catch(() => undefined),
  );
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      const manifestResponse = await fetch(PRECACHE_MANIFEST, {
        cache: 'no-store',
      });
      if (!manifestResponse.ok)
        throw new Error('Manifesto offline indisponível.');
      const manifest = await manifestResponse.clone().json();
      const files = Array.isArray(manifest.files) ? manifest.files : [];
      const urls = [...new Set([...APP_SHELL, ...files.map(resolveUrl)])];
      await Promise.all(
        urls.map(async (url) => {
          const response = await fetch(url, { cache: 'reload' });
          if (!response.ok) throw new Error(`Falha ao armazenar ${url}.`);
          await cache.put(url, response);
        }),
      );
      await cache.put(PRECACHE_MANIFEST, manifestResponse);
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (key) =>
              key.startsWith('aif-navigator-') &&
              ![STATIC_CACHE, CONTENT_CACHE].includes(key),
          )
          .map((key) => caches.delete(key)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      // O HTML e os chunks pertencem à mesma release. Só a ativação de um
      // worker completamente instalado troca o shell, inclusive ao recarregar.
      caches
        .open(STATIC_CACHE)
        .then(
          async (cache) =>
            (await cache.match(APP_ROOT)) ??
            (await cache.match(resolveUrl('index.html'))) ??
            fetch(event.request, { cache: 'no-store' }),
        ),
    );
    return;
  }

  if (url.pathname === LATEST_CONTENT_PATH) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then((response) => {
          rememberResponse(event, CONTENT_CACHE, response);
          return response;
        })
        .catch(
          async () =>
            (await (await caches.open(CONTENT_CACHE)).match(event.request)) ??
            (await (await caches.open(STATIC_CACHE)).match(event.request)),
        ),
    );
    return;
  }

  if (url.pathname.startsWith(CONTENT_PATH)) {
    event.respondWith(
      caches.open(CONTENT_CACHE).then(async (cache) => {
        const cached =
          (await cache.match(event.request)) ??
          (await (await caches.open(STATIC_CACHE)).match(event.request));
        return fetch(event.request, { cache: 'no-store' })
          .then((response) => {
            rememberResponse(event, CONTENT_CACHE, response);
            return response;
          })
          .catch(
            () =>
              cached ??
              new Response('Conteúdo indisponível offline.', { status: 503 }),
          );
      }),
    );
    return;
  }

  event.respondWith(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.match(url.toString(), { ignoreSearch: true }))
      .then(
        (cached) =>
          cached ??
          fetch(event.request).then((response) => {
            rememberResponse(event, STATIC_CACHE, response);
            return response;
          }),
      ),
  );
});
