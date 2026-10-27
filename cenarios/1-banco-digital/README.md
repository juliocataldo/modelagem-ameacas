# Cenário 1 — Coopera Pix (banco digital)

## Negócio
**Coopera Pix** é uma cooperativa de crédito 100% digital. O associado usa o app para entrar, consultar o saldo e fazer **transferências via Pix**. O time de antifraude e o suporte usam um painel interno.

## Atores
| Ator | O que faz |
|---|---|
| **Associado** | Login, saldo, extrato, Pix (envio e recebimento), cadastro de chaves |
| **Analista de antifraude** | Revisa transações marcadas e bloqueia contas no painel interno |
| **Agente de suporte** | Atende associados; pode **assumir a visão da conta** do associado para ajudar |
| **Rede Pix (SPI)** | Sistema externo que liquida as transferências e avisa o resultado por callback |

## Componentes
- **App mobile** (Flutter): usado pelo associado.
- **API Gateway** (nginx): ponto de entrada das chamadas do app.
- **auth-service**: login, OTP por SMS, emissão de tokens.
- **pix-service**: regras de transferência, chaves e limites.
- **painel-antifraude**: aplicação web interna da equipe de antifraude e suporte.
- **postgres-core**: contas, saldos, transações.
- **redis**: sessões e contadores.
- **SPI simulado** (terceiro): liquida o Pix e chama o callback.

## Requisitos que importam
- Login com CPF + senha, mais **OTP de 6 dígitos** por SMS para operações.
- Transferências noturnas (20h-6h) têm **limite reduzido** por regra de negócio.
- O suporte precisa "ver o app como o associado vê".
- O resultado de cada Pix chega por **callback** do SPI.

## Fora do escopo
Infraestrutura do SPI e a rede da cooperativa.
