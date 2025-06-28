# 🧪 Primeiros Passos com Cypress

Este repositório contém meus primeiros exercícios práticos de automação de testes utilizando o **Cypress**, como parte do meu processo de aprendizado em **Qualidade de Software** e **Testes Automatizados**.

## 🚀 Objetivo

Automatizar cenários simples de autenticação no sistema de simulação **OrangeHRM**, explorando os principais recursos e comandos do Cypress.

## 🧩 Cenários Automatizados

Este projeto contém dois cenários principais de testes automatizados utilizando o Cypress no sistema **OrangeHRM**:



### ✅ 1. Atualização de Informações do Usuário (Login com Sucesso)

**Objetivo:**  
Garantir que um usuário válido consiga fazer login e atualizar suas informações pessoais com sucesso.

**Passos automatizados:**

1. Acessar a tela de login (`/auth/login`)
2. Preencher **usuário e senha válidos** a partir do arquivo `userData.json`
3. Validar o redirecionamento para o **Dashboard**
4. Navegar até a aba **“My Info”**
5. Preencher e atualizar:
   - Nome (Primeiro, do meio e último)
   - IDs (Employee ID, Other ID, Driver License)
   - Campo adicional (`Test_FieldTest`)
   - Datas (utilizando `placeholder='yyyy-dd-mm'`)
6. Selecionar **Nacionalidade** e **Estado civil** via combobox
7. Submeter as alterações
8. Verificar a exibição da mensagem: `"Successfully Updated"`

**Resultado esperado:**  
Todas as informações são salvas com sucesso e uma notificação de confirmação é exibida.



### ❌ 2. Login com Falha

**Objetivo:**  
Verificar o comportamento do sistema quando o usuário tenta logar com credenciais inválidas.

**Passos automatizados:**

1. Acessar a tela de login (`/auth/login`)
2. Preencher **usuário e senha inválidos**
3. Clicar no botão de login
4. Verificar a exibição do alerta de erro (`[role='alert']`)

**Resultado esperado:**  
Uma mensagem de erro é exibida informando que as credenciais estão incorretas.

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
