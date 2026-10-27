# Cenário 2 — VitaConsulta (telemedicina)

## Negócio
**VitaConsulta** conecta pacientes a médicos por **videochamada**. O paciente agenda, entra na consulta, envia exames e consulta o histórico. O médico atende e escreve no **prontuário eletrônico**.

## Atores
| Ator | O que faz |
|---|---|
| **Paciente** | Agenda, entra na consulta de vídeo, envia e baixa exames |
| **Médico da clínica** | Atende, lê e escreve o prontuário do paciente |
| **Médico externo (parceiro)** | Atende pela plataforma, a partir da própria rede, conectado por VPN |
| **Administrador da clínica** | Cadastra médicos e vê relatórios |

## Componentes
- **Web Paciente** e **Web Médico** (SPAs).
- **API** (Node.js): regras de negócio e emissão do token de vídeo.
- **postgres-prontuario**: dados de saúde.
- **minio-exames**: armazenamento de exames e laudos (PDF e imagens).
- **Serviço de vídeo** (SaaS de terceiro): hospeda a sala; a API emite um token de acesso à sala.
- **vpn-gateway**: acesso dos médicos externos à plataforma.

## Requisitos que importam
- Login com **e-mail e senha** para todos os perfis.
- O **serviço de vídeo** tem a **gravação das consultas habilitada por padrão**, com retenção de 5 anos. Os servidores do provedor ficam **no exterior**.
- Exames são compartilhados por **link temporário** (o paciente pode encaminhá-lo a outro médico).
- Dados de saúde são **dados pessoais sensíveis** (LGPD).

## Fora do escopo
Infraestrutura interna do provedor de vídeo.
