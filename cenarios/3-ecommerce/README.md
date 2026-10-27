# Cenário 3 — LojaViva (e-commerce)

## Negócio
**LojaViva** é um marketplace: vários **lojistas** vendem pelo mesmo site. O cliente monta o carrinho, aplica cupom e paga por cartão ou boleto. O pagamento é feito por um **gateway de terceiro**; o sistema só recebe o resultado.

## Atores
| Ator | O que faz |
|---|---|
| **Cliente** | Navega, usa o carrinho, aplica cupom, paga e acompanha o pedido |
| **Lojista** | Gerencia produtos, estoque e **os pedidos da própria loja** no painel |
| **Gateway de pagamento** | Processa o cartão e avisa o resultado por webhook |
| **Operações da LojaViva** | Gerenciam a fila de pedidos e cupons |

## Componentes
- **Web Loja** (SPA) e **Painel do Lojista** (SPA).
- **API** (Node.js): carrinho, pedidos, cupons, estoque.
- **worker-pedidos**: consome a fila e processa os pedidos pagos (estoque, envio de e-mail).
- **RabbitMQ**: fila entre a API e o worker.
- **postgres**: produtos, pedidos, clientes.
- **redis**: carrinho e cache.
- **Gateway de pagamento** (terceiro): tokeniza o cartão no navegador do cliente e processa o pagamento.

## Requisitos que importam
- O número do cartão é enviado **direto do navegador ao gateway**, que devolve um **token**. A API da LojaViva nunca vê o cartão.
- Quando o pagamento é aprovado, o gateway chama um **webhook** e o pedido passa a "pago".
- Cupons de desconto são códigos digitados pelo cliente.
- Cada lojista deve ver **apenas** os pedidos da sua loja.

## Fora do escopo
Infraestrutura do gateway de pagamento.
