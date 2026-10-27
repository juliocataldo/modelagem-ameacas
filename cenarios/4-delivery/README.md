# Cenário 4 — EntregaJá (delivery)

## Negócio
**EntregaJá** liga clientes, restaurantes e entregadores. O cliente pede, acompanha o entregador **no mapa em tempo real**, e o entregador recebe um **repasse** calculado pela distância percorrida.

## Atores
| Ator | O que faz |
|---|---|
| **Cliente** | Faz o pedido, acompanha o rastreio, avalia |
| **Restaurante** | Recebe o pedido, atualiza o status e o cardápio |
| **Entregador** | Aceita corridas, envia a localização, recebe o repasse |
| **Time financeiro** | Aprova e executa os repasses |

## Componentes
- **App Cliente**, **App Entregador**, **App Restaurante** (mobile).
- **API** (Node.js): pedidos, cardápio, status.
- **ws-tracking**: servidor WebSocket que transmite a posição do entregador.
- **repasse-service**: calcula e agenda o pagamento dos entregadores.
- **postgres**: pedidos, usuários, repasses.
- **redis-geo**: posições recentes dos entregadores.
- **Serviço de mapas** (SaaS de terceiro): rotas e mapa exibido nos apps.

## Requisitos que importam
- O **app do entregador** envia a posição GPS a cada 5 s.
- O **repasse** é calculado com base na **distância informada pelo app do entregador**.
- Durante o pedido, o cliente vê o **telefone do entregador**, e o entregador vê o do cliente.
- O restaurante pode **ajustar o preço** de itens enquanto o pedido está em preparo.

## Fora do escopo
Infraestrutura do serviço de mapas.
