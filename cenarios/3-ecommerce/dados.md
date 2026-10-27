# Dados — LojaViva

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| Nome, e-mail, CPF, endereço do cliente | `postgres` | Pessoal (LGPD) | |
| **Número do cartão** | **Não é armazenado nem trafega pela API** | Crítica | Apenas o token do gateway |
| Pedidos e valores | `postgres` | Média | |
| Cupons | `postgres` | Baixa | Código de 6 caracteres alfanuméricos |
| Carrinho | `redis` | Baixa | |

## Regras de tratamento
- **Estoque:** ao receber o pagamento, o worker lê o estoque atual, subtrai a quantidade e grava o novo valor (sem controle de concorrência).
- **Logs:** a API registra o **corpo completo** de cada webhook recebido (inclui e-mail e CPF do pagador); retenção de 180 dias.
- **Cupons:** a API não limita quantas tentativas de cupom um usuário pode fazer.
- **Segredos:** `GATEWAY_SECRET`, senhas de banco e fila vêm de variáveis de ambiente.
