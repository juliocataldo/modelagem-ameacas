# Cenário 6 — AgendaPet (exemplo resolvido)

> Este é o cenário de **exemplo resolvido**. A análise completa está em [`exemplo-resolvido.md`](exemplo-resolvido.md) e mostra o formato e o nível de detalhe esperados. Os demais cenários (`cenarios/1-` a `5-`) não têm análise publicada, para servirem de prática.

## Negócio
**AgendaPet** é o sistema de uma rede de pet shops (banho e tosa). O tutor agenda pelo site, recebe lembretes por SMS e paga na loja. Não há pagamento online.

## Atores
| Ator | O que faz |
|---|---|
| **Tutor** | Agenda, reagenda e cancela; vê o histórico e as fotos do pet |
| **Atendente** | Cria e reagenda agendamentos **em nome do tutor** (por telefone) |
| **Groomer** | Vê a agenda do dia e anexa a foto do pet "depois" |
| **Gerente** | Relatórios e cadastro de funcionários (rotas `/admin`) |

## Componentes
- **Web App** (SPA): usado por tutor, atendente e groomer.
- **API** (Node.js/Express): toda a regra de negócio.
- **Banco** (PostgreSQL): tutores, pets, agendamentos.
- **Storage de fotos** (MinIO): fotos dos pets.
- **Provedor de SMS** (SaaS de terceiro): envia o link de login e os lembretes; chama um webhook de status de entrega.

## Requisitos que importam
- **Login sem senha:** o tutor informa o telefone e recebe por SMS um **link mágico** de acesso.
- O lembrete é enviado 24 h antes do horário.
- O atendente pode reagendar por telefone, em nome do tutor.
- O menu "Admin" só aparece para o gerente.

## Fora do escopo
Infraestrutura do provedor de SMS e rede da loja.
