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
- Os arquivos de conteúdo publicados possuem hashes SHA-256 em `public/content/latest.json`.

## Limites

Links externos para documentação são operados pelos respectivos sites. O projeto não controla disponibilidade, políticas ou conteúdo carregado fora do aplicativo.
