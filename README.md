# 🧪 Primeiros Passos com Cypress

Este repositório contém meus primeiros exercícios práticos de automação de testes utilizando o **Cypress**, como parte do meu processo de aprendizado em **Qualidade de Software** e **Testes Automatizados**.

## 🚀 Objetivo

Automatizar cenários simples de autenticação no sistema de simulação **OrangeHRM**, explorando os principais recursos e comandos do Cypress.


## 🗂️ Estratégia Object Page

O projeto utiliza a estratégia de **Object Page**, que consiste em organizar o código de automação criando uma pasta chamada `pages`. Nessa pasta, cada arquivo representa uma página do sistema, encapsulando os seletores e métodos de interação com os elementos daquela página. Isso facilita a manutenção, reutilização e legibilidade dos testes, permitindo que as ações e elementos de cada página fiquem centralizados em um único local.

Por exemplo, para a tela de login, existe um arquivo `LoginPage.js` dentro da pasta `pages`, onde são definidos os comandos para preencher o usuário, senha e realizar o login. Os testes então utilizam esses métodos, tornando o código mais limpo e modular.


## 📂 Utilização da pasta `fixtures`

A pasta `fixtures` é utilizada para armazenar arquivos com dados estáticos que podem ser reutilizados nos testes automatizados. No contexto deste projeto, ela contém arquivos como `userData.json`, que guarda informações de usuários (como nome de usuário e senha) utilizadas durante a execução dos testes.

Esses dados são carregados nos scripts de teste por meio dos comandos do Cypress, permitindo separar a lógica dos testes dos dados de entrada. Isso facilita a manutenção, possibilita a criação de diferentes cenários de teste e torna o código mais organizado e reutilizável.

Por exemplo, ao realizar o teste de login, os dados de usuário e senha são lidos diretamente do arquivo `userData.json` localizado na pasta `fixtures`, garantindo que os testes sejam mais flexíveis e fáceis de atualizar.


## ⚙️ Utilização do arquivo `cypress.config`

O arquivo `cypress.config` é responsável por centralizar as principais configurações do Cypress no projeto. Nele, você pode definir opções como a URL base do sistema a ser testado (`baseUrl`), diretórios de testes, configurações de tempo limite, entre outros parâmetros importantes para a execução dos testes.

No contexto deste projeto, o `cypress.config` foi utilizado para:

- Definir a URL base do OrangeHRM, facilitando o uso de caminhos relativos nos comandos `cy.visit()`.
- Configurar caminhos personalizados para as pastas de testes, fixtures e suporte, caso necessário.
- Ajustar opções de execução, como tempo limite de comandos e viewport padrão.

Essas configurações tornam o ambiente de testes mais flexível, padronizado e fácil de manter, permitindo que todos os testes utilizem as mesmas definições sem a necessidade de repetição de código.


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
