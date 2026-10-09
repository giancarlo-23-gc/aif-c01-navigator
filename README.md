# AIF Navigator

Simulador em português para AWS Certified AI Practitioner (AIF-C01), com a experiência e a estrutura do SAA Navigator em um projeto independente.

**Conteúdo e validação concluídos; publicação do aplicativo ainda não ativada.** Este repositório recebe a distribuição compilada e feedback. O código-fonte e os registros editoriais permanecem privados.

O banco tem **800 questões originais**, cinco domínios e quatro formatos: resposta única, seleção múltipla, ordenação e correspondência. Há 800 revisões individuais por Codex, sem revisão humana independente, e 142 leituras específicas de fontes primárias vinculadas aos snapshots atuais. Cada questão tem explicações, exemplo e referências.

A experiência inclui simulado de 65 itens em 90 minutos, treino completo e treino rápido. A seleção foi validada para 12 simulados de 65 sem sobreposição e 20 itens restantes para treino rápido quando outras sessões ainda não consumiram questões. Os modos compartilham as exclusões. O aplicativo é gratuito, sem cadastro, com PWA offline, progresso local e controles de exportação/importação/exclusão.

A [validação final no CI](https://github.com/giancarlo-23-gc/aif-c01-navigator-source/actions/runs/37969543245), commit `7113dc0`, passou com 50 testes de navegador sem retry, critérios editoriais completos e auditoria de produção sem vulnerabilidades conhecidas. Lighthouse: 95/100/100/100; desempenho pela mediana de três perfis novos (95/90/96), demais categorias pelo mínimo, mantendo os limites 80/95/95/90. A matriz local passou em 71 testes sem retry, Lighthouse 96/100/100/100. O link do CI exige acesso ao repositório privado. Testes emulados não são testes em aparelhos físicos.

A publicação depende da confirmação do destino e da configuração exclusiva do AIF. A documentação deste repositório não significa que já existe um site publicado. Projeto independente, sem afiliação AWS e sem promessa de aprovação ou ausência absoluta de erros.
