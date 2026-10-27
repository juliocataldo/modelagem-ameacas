# Cenário 5 — Portal Horizonte (portal acadêmico)

## Negócio
A **Faculdade Horizonte** (fictícia) tem um portal onde o aluno vê **notas e frequência** e faz a **matrícula**. Os professores lançam notas e a secretaria faz ajustes. O login usa o **SSO legado** da faculdade.

## Atores
| Ator | O que faz |
|---|---|
| **Aluno** | Consulta notas, frequência, boletos; faz a matrícula |
| **Professor** | Lança notas (pelo portal ou por **planilha CSV** em lote) |
| **Secretaria** | Corrige notas, emite relatórios e exportações |
| **Coordenação** | Aprova matrículas |

## Componentes
- **Portal Web** (SPA).
- **API** (Node.js): notas, matrícula, relatórios.
- **sso-legado**: serviço de autenticação antigo da faculdade (usa **LDAP**).
- **importador-notas**: processo agendado que lê CSVs de notas de uma **pasta compartilhada** e grava no banco.
- **postgres**: alunos, notas, matrículas.
- **filas de e-mail**: avisos e recuperação de senha.

## Requisitos que importam
- O **RM** do aluno (matrícula, número sequencial de 6 dígitos) identifica o aluno nas telas e na API.
- Professores podem **enviar o CSV de notas** para uma pasta compartilhada de rede; o importador processa a cada 10 min.
- A secretaria pode **corrigir qualquer nota**.
- Existem apenas dois papéis amplos: **docente** (professores e coordenação) e **administrativo** (secretaria e financeiro).

## Fora do escopo
Infraestrutura da rede da faculdade.
