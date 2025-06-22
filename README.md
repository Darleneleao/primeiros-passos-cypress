# 🧪 Primeiros Passos com Cypress

Este repositório contém meus primeiros exercícios práticos de automação de testes utilizando o **Cypress**, como parte do meu processo de aprendizado em **Qualidade de Software** e **Testes Automatizados**.

## 🚀 Objetivo

Automatizar cenários simples de autenticação no sistema de simulação **OrangeHRM**, explorando os principais recursos e comandos do Cypress.

## 🧩 Cenários Automatizados

🔹 **Login com falha**  
- Acesso com credenciais inválidas  
- Validação da mensagem de erro apresentada na tela  

🔹 **Login com sucesso**  
- Acesso com credenciais válidas  
- Validação do redirecionamento para o dashboard após o login

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) (Framework de testes end-to-end)
- [Node.js](https://nodejs.org/)
- OrangeHRM (Sistema utilizado como ambiente de simulação)

## 📁 Como executar

1. **Clone o repositório**
    ```bash
    git clone https://github.com/Darleneleao/primeiros-passos-cypress.git

2. **Instale as dependências**
    ```bash
    npm install

3. **Execute os testes**
    ```bash
    npx cypress open

4. Na interface do Cypress, selecione os testes que deseja rodar.
