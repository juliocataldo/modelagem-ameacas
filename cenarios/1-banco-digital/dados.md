# Dados — Coopera Pix

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| CPF, nome, telefone | `postgres-core` | Pessoal (LGPD) | CPF é o identificador de login |
| Saldo e extrato | `postgres-core` | Financeira | |
| Chaves Pix | `postgres-core` | Pessoal | |
| Senha | `postgres-core` | Crítica | Armazenada com hash |
| Sessões e contadores de limite | `redis` | Média | |

## Regras de tratamento
- **Tokens:** o acesso dura 15 min; o refresh token tem **rotação** a cada uso.
- **Limite noturno:** o app mobile aplica o limite reduzido entre 20h e 6h e bloqueia o botão de envio acima dele.
- **Logs:** os serviços registram cada transação com CPF e chave Pix completos; retenção de 1 ano.
- **Suporte:** a ação "assumir visão" gera o token do associado. Os logs de uso do painel de suporte não são retidos.
- **Segredos:** todos via variáveis de ambiente, nunca no código.
