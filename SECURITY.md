# Segurança

## Relatar um problema

Não publique vulnerabilidades, tokens, credenciais, arquivos de progresso ou dados pessoais em issues públicas. Use o [formulário privado de vulnerabilidade do GitHub](https://github.com/giancarlo-23-gc/aif-c01-navigator/security/advisories/new), habilitado na distribuição oficial. É necessário entrar em uma conta GitHub.

Informe a versão do aplicativo, o navegador e os passos mínimos para reproduzir, sem segredos nem dados reais de terceiros. O relato fica privado para avaliação do mantenedor; a publicação de detalhes deve aguardar a correção coordenada. Não há prazo de resposta garantido.

Erros de enunciado, gabarito ou explicação continuam no botão **Reportar problema** da questão; não use uma issue pública para uma falha de segurança.

## Modelo de segurança

- O aplicativo é estático e não recebe senhas, pagamentos ou dados pessoais.
- Histórico, respostas e sessões ficam no armazenamento local do navegador.
- O código executado no navegador não contém credenciais.
- A publicação passa por validação de conteúdo, testes e build reproduzível.
- Dependências de GitHub Actions são fixadas por hash de commit.
- Os arquivos de conteúdo publicados possuem hashes SHA-256 em `content/latest.json` na distribuição (`public/content/latest.json` no código-fonte).

## Proteções da versão 2026.11.18-aif.1

A versão adiciona CSP ao build estático para limitar scripts e conexões à própria origem, valida identificadores importados, restringe o worker e o precache à pasta do AIF e recusa arquivos sensíveis e padrões de credenciais antes de empacotar. Os workflows restringem publicação ao histórico de `main`, exigem auditorias completas de dependências, limitam o repasse de secrets e removem a chave temporária após o uso. A publicação exige aprovação de todos os gates. Detalhes técnicos e evidências são mantidos no repositório-fonte privado.

No GitHub já foram habilitados os alertas e as atualizações de segurança do Dependabot e uma regra da distribuição que impede exclusão e force push da branch principal. O canal privado de relatos e a proteção de push contra segredos da distribuição foram conferidos.

## Limites

Links externos para documentação são operados pelos respectivos sites. O projeto não controla disponibilidade, políticas ou conteúdo carregado fora do aplicativo.

Uma varredura por padrões não comprova ausência de todos os tipos de segredo ou vulnerabilidade. Os hashes detectam alterações, mas não são assinatura independente contra comprometimento do repositório. Pastas no mesmo domínio compartilham a origem do navegador; prefixos de storage/cache evitam colisões, mas não isolam aplicações hostis. GitHub Pages não aplica arquivos `_headers`; a CSP preparada usa meta HTML e não oferece `frame-ancestors` por esse mecanismo. A política permite estilos inline necessários à interface, sem permitir scripts inline ou eval.
