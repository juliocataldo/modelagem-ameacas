# Dados — Portal Horizonte

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| RM, nome, CPF, e-mail do aluno | `postgres` | Pessoal (LGPD) | |
| Notas e frequência | `postgres` | Média (valor acadêmico) | Base para aprovação e diploma |
| Senhas | `sso-legado` | Crítica | |
| Planilhas CSV de notas | pasta compartilhada `notas` | Média | Lidas pelo importador a cada 10 min |

## Regras de tratamento
- **Alteração de nota:** a secretaria edita diretamente a nota; não há segunda aprovação nem histórico das mudanças.
- **Recuperação de senha:** o sistema envia por e-mail uma **senha temporária em texto**.
- **Importador:** processa todo arquivo `.csv` que aparecer na pasta, sem checar quem enviou nem a integridade.
- **Pasta compartilhada:** o grupo `docentes` tem permissão de escrita; ela é acessível pela rede da faculdade e pelo Wi-Fi dos alunos.
- **Sessão:** o token da sessão vale 30 dias.
