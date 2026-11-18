# Revisão de conteúdo AWS

Alterações pendentes: **9**. As questões afetadas permanecem fora de novas sessões até a aprovação.

## Modelos de cobrança Bedrock

- Fonte: https://aws.amazon.com/bedrock/pricing/
- Detectada em: 2026-11-17T19:12:41.107Z
- Questões afetadas: aif-d2-131, aif-d2-132, aif-d2-133, aif-d3-001, aif-d5-002, aif-d5-007, aif-d5-008, aif-d5-013, aif-d5-014, aif-d2-cur-retry-unit-cost-calculation, aif-d2-cur-throughput-output-length, aif-d2-cur-total-application-cost, aif-d2-cur-cost-distribution, aif-d2-cur-benchmark-portability, aif-d2-cur-language-token-budget, aif-d2-cur-provisioned-demand-forecast, aif-d2-cur-provisioned-idle-cost, aif-d2-cur-hypothetical-token-price-calculation, aif-d2-cur-cache-observed-billing, aif-d2-cur-input-output-token-estimate, aif-d2-cur-custom-model-serving-check, aif-d3-cur-quality-cost-constraint, aif-d3-cur-task-routing, aif-d3-cur-customization-cost-calculation, aif-d3-cur-customization-cost-horizon, aif-d3-cur-distillation-economics, aif-d3-cur-distillation-generation-expense

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## AWS CloudTrail

- Fonte: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d4-013, aif-d5-003, aif-d5-006, aif-d5-009, aif-d5-010, aif-d5-011, aif-d5-012, aif-d5-m02, aif-d5-p01, aif-d5-cur-config-historical-question, aif-d5-cur-invocation-logging-disabled, aif-d5-cur-source-log-vs-processing-region, aif-d5-cur-consent-change-record

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## KMS: políticas de chave e habilitação de acesso

- Fonte: https://docs.aws.amazon.com/kms/latest/developerguide/key-policies.html
- Detectada em: 2026-11-17T19:12:41.107Z
- Questões afetadas: aif-d5-003, aif-d5-cur-kms-policy-enablement, aif-d5-cur-key-creator-permissions, aif-d5-cur-decrypt-vs-manage

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## MCP: arquitetura e primitivas do protocolo

- Fonte: https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture
- Detectada em: 2026-11-16T20:30:56.036Z
- Questões afetadas: aif-d2-020, aif-d2-cur-mcp-components, aif-d2-cur-tool-contract, aif-d2-cur-mcp-primitives, aif-d2-cur-mcp-reasoning-boundary, aif-d2-cur-kiro-mcp-integration, aif-d2-cur-kiro-controls, aif-d2-cur-agentcore-gateway

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## Amazon Bedrock Knowledge Bases

- Fonte: https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d2-003, aif-d3-002, aif-d3-033, aif-d3-m01, aif-d3-m02, aif-d3-p01, aif-d1-cur-pretrained-freshness, aif-d2-cur-bedrock-knowledge-bases-service, aif-d3-cur-citation-support, aif-d3-cur-ingestion-refresh, aif-d3-cur-source-conflict, aif-d3-cur-missing-evidence-contract, aif-d3-cur-table-parsing-failure, aif-d3-cur-multimodal-rag-design, aif-d3-cur-retrieve-without-generate, aif-d3-cur-structured-live-data, aif-d3-cur-combine-rag-finetuning, aif-d3-cur-temporal-context, aif-d3-cur-adaptation-combination

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## Configuração de recuperação, filtros e geração

- Fonte: https://docs.aws.amazon.com/bedrock/latest/userguide/kb-test-config.html
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d3-008, aif-d3-009, aif-d3-010, aif-d3-cur-top-k-two-meanings, aif-d3-cur-streaming-latency, aif-d3-cur-source-conflict, aif-d3-cur-retrieval-context-budget, aif-d3-cur-query-decomposition, aif-d3-cur-retrieve-without-generate, aif-d3-cur-retrieval-result-count

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## Compatibilidade de índices para Knowledge Bases

- Fonte: https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base-setup.html
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d3-004, aif-d3-cur-embedding-space-consistency, aif-d3-cur-embedding-dimension-migration, aif-d3-cur-vector-original-text, aif-d3-cur-aurora-vector-choice

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## Strands Agents: componentes do agente

- Fonte: https://strandsagents.com/docs/user-guide/sdk/agents/
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d2-017, aif-d2-019, aif-d2-021, aif-d3-011, aif-d3-022, aif-d2-m01, aif-d2-p01, aif-d2-cur-conversation-advantage, aif-d2-cur-agent-goal-success, aif-d2-cur-parameters-not-context, aif-d2-cur-conversation-reference, aif-d2-cur-agent-plan-execution, aif-d2-cur-agent-tool-feedback, aif-d2-cur-agent-termination, aif-d2-cur-handoff-context, aif-d2-cur-agent-output-contract, aif-d2-cur-checkpoint-versus-memory, aif-d2-cur-context-compression, aif-d2-cur-memory-correction, aif-d2-cur-tool-failure-observation, aif-d2-cur-strands-sdk, aif-d2-cur-strands-model-choice, aif-d2-cur-strands-custom-tools, aif-d2-cur-strands-runtime-choice, aif-d2-cur-aws-service-layer-map, aif-d3-cur-tool-failure-state, aif-d3-cur-conversation-history, aif-d3-cur-context-pruning, aif-d3-cur-summary-state-risk

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

## Strands Agents: coordenação de agentes

- Fonte: https://strandsagents.com/docs/user-guide/sdk/multi-agent/multi-agent-patterns/
- Detectada em: 2026-11-18T18:52:18.496Z
- Questões afetadas: aif-d2-022, aif-d2-023, aif-d2-cur-agent-versus-fixed-automation, aif-d2-cur-parallel-dependent-tools, aif-d2-cur-workflow-autonomy, aif-d2-cur-supervisor-handoff, aif-d2-cur-handoff-context, aif-d2-cur-agent-output-contract, aif-d2-cur-multiagent-complexity, aif-d2-cur-strands-agent-patterns, aif-d3-cur-fixed-flow-versus-agent, aif-d3-cur-task-decomposition

Checklist:

- [ ] Ler a alteração na fonte oficial e identificar impactos no objetivo AIF-C01.
- [ ] Atualizar enunciado, alternativas, resposta, explicação e takeaway quando necessário.
- [ ] Executar pnpm verify:release e revisar o simulado no navegador.
- [ ] Aprovar a fonte somente depois de registrar a decisão editorial.

O monitor apenas sinaliza mudanças. Nenhuma resposta é alterada automaticamente sem revisão editorial e validação.
