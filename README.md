#  Automação de Testes Web – OrangeHRM

Este repositório reúne meus primeiros exercícios práticos de automação de testes utilizando o **Cypress**, com foco em aprendizado de **Qualidade de Software** e **Testes Automatizados**.

---

## Objetivo

Automatizar cenários de autenticação e atualização de informações no sistema de simulação **OrangeHRM**, explorando recursos essenciais do Cypress.

---

## Estrutura do Projeto

- `/e2e`: Scripts de automação
- `/pages`: Page Objects para facilitar a manutenção
- `/fixtures`: Dados de teste
- `/cypress.config`:  baseUrl do site automatizado

---

##  Cenários Automatizados

- Login com sucesso e falha com credenciais inválidas
- Atualização de Informações do Usuário

---

## Tecnologias Utilizadas

- **Linguagem:** JavaScript
- **Framework de Testes:** Cypress
- **Plataforma de testes:** OrangeHRM

---

##  Como Executar

1. Clone o repositório `git clone: https://github.com/Darleneleao/primeiros-passos-cypress.git`
2. Instale as dependências com `npm init` e `npm install cypress --save-dev`
3. Execute os testes com `npx cypress open`

