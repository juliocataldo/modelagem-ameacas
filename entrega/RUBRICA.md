# Rubrica de avaliação

| Critério | Peso | Excelente | Insuficiente |
|---|---|---|---|
| **DFD com fronteiras de confiança** | 20% | Todos os componentes e fluxos dos artefatos; fronteiras nos lugares certos; dados nos fluxos | Componentes faltando; sem fronteiras ou no lugar errado |
| **STRIDE: cobertura e qualidade** | 35% | Mín. 12 ameaças; as 6 categorias; cada uma diz quem, como e impacto; ligada a um elemento do DFD | Ameaças genéricas ("falta segurança"); só 1 ou 2 categorias |
| **DREAD com justificativas** | 30% | Mín. 8 ameaças pontuadas, nota 1-10 nos 5 critérios com justificativa de uma linha; notas coerentes entre si | Notas sem justificativa ou todas iguais |
| **Mitigações do Top 5** | 15% | Mitigação concreta e verificável para cada uma das 5 ameaças priorizadas | Mitigação vaga ("usar criptografia") |
| **Bônus: modelo no Threat Dragon** | +10% | `.json` exportado coerente com a planilha | Não entregue (não penaliza) |

## O que se espera ver

- **Ameaças ligadas a evidências** dos artefatos (cite o arquivo: "no `openapi.yaml`, o endpoint X...").
- **Controles bem implementados reconhecidos** (uma coluna na aba STRIDE).
- **Priorização defensável**: o Top 5 sai da média DREAD, e você explica quando discorda dela.
