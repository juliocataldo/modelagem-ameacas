# Modelagem de Ameaças (STRIDE + DREAD)

Trabalho para aplicar **STRIDE** e **DREAD** num sistema fictício.
Existem 5 cenários diferentes. Todos os sistemas, dados e pessoas deste repositório são **fictícios**.

> Este repositório **não** contém sistemas para atacar. É o desenho de um sistema (arquitetura, API, dados). O objetivo é entregar um material para analisar o **design** e prever o que pode dar errado.

## Cenários

| # | Pasta | Sistema |
|---|---|---|
| 1 | `cenarios/1-banco-digital` | Coopera Pix, cooperativa de crédito digital (login + Pix) |
| 2 | `cenarios/2-telemedicina` | VitaConsulta, telemedicina (prontuário + vídeo) |
| 3 | `cenarios/3-ecommerce` | LojaViva, e-commerce (checkout + cartão) |
| 4 | `cenarios/4-delivery` | EntregaJá, delivery (pedido + rastreio) |
| 5 | `cenarios/5-portal-academico` | Portal Horizonte, portal acadêmico (notas + matrícula) |
| 6 | `cenarios/6-exemplo-agendapet` | **Exemplo resolvido** que o professor demonstra em aula. Veja o formato esperado. |


## Como ler um cenário

Cada pasta tem os mesmos artefatos. **Monte o DFD a partir deles**, como faria numa empresa:

| Arquivo | O que revela |
|---|---|
| `README.md` | Negócio, atores, componentes, requisitos |
| `docker-compose.yml` | Componentes, redes (fronteiras de confiança) e portas expostas |
| `openapi.yaml` | Endpoints, quem pode chamar, que dados trafegam |
| `dados.md` | Quais dados existem, como são tratados e por quanto tempo |
| `src/` | Esqueleto do código (só assinaturas, sem lógica) |

Nada precisa rodar. O `docker-compose.yml` é documentação; **não é necessário subir containers**.

## O que criar em cima desse material para treinar os seus conhecimentos

1. **Planilha** `entrega/modelo-ameacas.xlsx` preenchida. Abas: DFD, STRIDE, DREAD, Top 5.
2. **DFD nível 1** com as fronteiras de confiança (imagem ou PDF; draw.io, Excalidraw, papel fotografado, o que preferir).
3. **Bônus opcional:** o mesmo modelo no [OWASP Threat Dragon](https://www.threatdragon.com) Entregue o arquivo `.json` exportado.

Critérios e pesos: `entrega/RUBRICA.md`.

## Escala DREAD 

Para contexto acadêmico, nota de 1 a 10 em cada critério: **D**amage, **R**eproducibility, **E**xploitability, **A**ffected users, **D**iscoverability.
Média: **Baixo** (< 4), **Médio** (4 a 6,9), **Alto** (≥ 7).
**Pontue no mínimo 8 ameaças** e escolha o seu Top 5 entre elas, pela média.
**Cada nota precisa de uma justificativa de uma linha.** Nota sem justificativa não conta.

## Dicas

- Leia cada artefato como atacante: "e se isso for abusado?"
- **Fronteiras de confiança** primeiro: onde os dados passam de um nível de confiança para outro?
- Uma ameaça tem **quem, como e qual o impacto**. "Falta segurança" não é ameaça.
- Reconheça também o que **está bem feito**; isso conta na avaliação.
- Mitigação concreta: "validar no servidor que a conta pertence ao usuário", e não "melhorar a segurança".
- DREAD é subjetivo. O que vale é a sua justificativa.

## Revise antes 

Se ainda não fez, refaça o [lab OrbitaPay](https://github.com/juliocataldo/threat-modeling-lab) para aquecer.

## Bônus: conteúdo de apoio

Material **opcional** para aprofundar (não é o bônus de pontos do Threat Dragon). Quase tudo está em inglês.

- **Fundamentos e manifesto:** [Threat Modeling Manifesto](https://www.threatmodelingmanifesto.org/)
- **Comece por aqui:**
  - [OWASP Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
  - [OWASP Threat Modeling Process](https://owasp.org/www-community/Threat_Modeling_Process)
  - [OWASP Threat Model Cookbook](https://github.com/OWASP/threat-model-cookbook) (exemplos de modelos prontos)
- **Lista completa**, com vídeos, tutoriais e artigos, exemplos de threat models e ferramentas: [`BONUS.md`](BONUS.md)

## Combinados

- Tudo aqui é fictício. **Não teste nada contra sistemas reais.**
