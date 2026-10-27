# Dados — AgendaPet

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| Nome e telefone do tutor | `db` | Pessoal (LGPD) | Telefone é o identificador de login |
| Endereço do tutor | `db` | Pessoal (LGPD) | Necessário para o serviço de busca/entrega do pet |
| Dados do pet (nome, raça, observações) | `db` | Baixa | |
| Fotos do pet | `storage` (MinIO) | Baixa | Acessadas pela API |
| Histórico de agendamentos | `db` | Média | Mantido por 5 anos |
| Token do link mágico | `db` | Alta (dá acesso à conta) | |

## Regras de tratamento
- **Logs da API:** registram cada requisição com a URL completa e o corpo; ficam 90 dias.
- **Perfis:** o papel do usuário (`tutor`, `atendente`, `groomer`, `gerente`) vem na resposta de login, e o Web App usa esse papel para decidir quais menus exibir.
- **Backup:** o banco é copiado para o mesmo servidor toda noite.
