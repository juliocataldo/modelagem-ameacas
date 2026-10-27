# Dados — EntregaJá

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| Nome, telefone, endereço do cliente | `postgres` | Pessoal (LGPD) | |
| Localização do entregador | `redis-geo`, `postgres` | Pessoal (LGPD) | Histórico guardado |
| Dados bancários do entregador | `postgres` | Financeira | Para o repasse |
| Pedidos e preços | `postgres` | Média | |

## Regras de tratamento
- **Telefones:** ficam visíveis ao entregador e ao cliente durante o pedido, e **não são ocultados depois que o pedido é concluído**. O histórico permanece acessível nos apps.
- **Retenção:** o histórico de pedidos e de localização é mantido **sem prazo definido**.
- **Mapas:** o app usa a chave de API do serviço de mapas **incluída no pacote do app** (cota paga por uso).
- **Cancelamento:** o pedido pode ser cancelado por cliente, restaurante ou suporte; o sistema registra o novo status, sem registrar quem cancelou.
- **Repasse:** o `repasse-service` usa o `distanciaKm` recebido do app para calcular o valor.
