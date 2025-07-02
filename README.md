# 🧪 Primeiros Passos com Cypress

Este repositório reúne meus primeiros exercícios práticos de automação de testes utilizando o **Cypress**, com foco em aprendizado de **Qualidade de Software** e **Testes Automatizados**.

---

## 🚀 Objetivo

Automatizar cenários de autenticação e atualização de informações no sistema de simulação **OrangeHRM**, explorando recursos essenciais do Cypress.

---

## 🗂️ Estrutura do Projeto

- **Object Page Pattern:**  
    O código de automação está organizado utilizando o padrão **Object Page**. Cada página do sistema possui um arquivo correspondente na pasta `pages`, centralizando seletores e métodos de interação. Isso facilita a manutenção, reutilização e clareza dos testes.

- **Fixtures:**  
    A pasta `fixtures` armazena dados estáticos reutilizáveis, como o arquivo `userData.json` com informações de usuários. Esses dados são carregados dinamicamente nos testes, separando lógica de dados e permitindo cenários flexíveis.

- **Configuração:**  
    O arquivo `cypress.config` centraliza as configurações do Cypress, como `baseUrl`, caminhos de diretórios, timeouts e viewport padrão, tornando o ambiente de testes padronizado e fácil de manter.

- **Testes:**  
    Os scripts de teste estão no arquivo `user.spec.cy.js`, que valida os principais fluxos do sistema utilizando métodos das páginas e dados das fixtures.

---

## 🧩 Cenários Automatizados

### ✅ 1. Atualização de Informações do Usuário (Login com Sucesso)

- **Objetivo:** Garantir que um usuário válido consiga fazer login e atualizar suas informações pessoais.
- **Passos:**
    1. Acessar `/auth/login`
    2. Preencher usuário e senha válidos (do `userData.json`)
    3. Validar redirecionamento para o Dashboard
    4. Navegar até “My Info”
    5. Atualizar campos pessoais (nome, IDs, datas, nacionalidade, estado civil)
    6. Submeter alterações
    7. Verificar mensagem de sucesso `"Successfully Updated"`
- **Resultado esperado:** Informações salvas e notificação de confirmação exibida.

---

### ❌ 2. Login com Falha

- **Objetivo:** Verificar o comportamento ao tentar logar com credenciais inválidas.
- **Passos:**
    1. Acessar `/auth/login`
    2. Preencher usuário e senha inválidos
    3. Clicar em login
    4. Verificar alerta de erro (`[role='alert']`)
- **Resultado esperado:** Mensagem de erro informando credenciais incorretas.

---

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) (Testes end-to-end)
- [Node.js](https://nodejs.org/)
- OrangeHRM (Ambiente de simulação)

---

## 📁 Como Executar

1. **Clone o repositório**
        ```bash
        git clone https://github.com/Darleneleao/primeiros-passos-cypress.git
        cd primeiros-passos-cypress
        ```

2. **Instale as dependências**
        ```bash
        npm install
        ```

3. **Execute os testes**
        ```bash
        npx cypress open
        ```
4. Na interface do Cypress, selecione os testes desejados.

---

## 📚 Referências

- [Documentação Cypress](https://docs.cypress.io/)
- [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com/)

