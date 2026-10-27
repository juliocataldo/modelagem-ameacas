# Dados — VitaConsulta

| Dado | Onde fica | Sensibilidade | Observação |
|---|---|---|---|
| Nome, CPF, e-mail do paciente | `postgres-prontuario` | Pessoal (LGPD) | |
| Prontuário (diagnóstico, receitas) | `postgres-prontuario` | **Sensível (saúde)** | |
| Exames e laudos | `minio-exames` | **Sensível (saúde)** | |
| Gravação das consultas | Serviço de vídeo (terceiro, exterior) | **Sensível (saúde)** | 5 anos |
| Senha | `postgres-prontuario` | Crítica | Hash argon2 |

## Regras de tratamento
- **Transporte:** todo tráfego externo usa TLS 1.2+.
- **Disco e backup:** o disco do servidor de banco **não é criptografado**; o backup diário vai para a pasta `./backup`, no mesmo servidor.
- **Sala de vídeo:** o identificador da sala é `sala-` mais o **id sequencial** da consulta.
- **Consentimento:** no cadastro, o paciente marca um checkbox "li e aceito os termos". Nada além disso é guardado.
- **Médico externo:** conecta pela VPN e, com a conexão ativa, acessa a plataforma como qualquer médico da clínica.
