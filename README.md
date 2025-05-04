## 🧪 Projeto de Testes Automatizados com Cypress

Este repositório faz parte do meu plano de estudos como **QA Automation Engineer**, onde pratico automações de testes com [Cypress](https://www.cypress.io/) em sites públicos e cenários variados.

## 🚀 Projeto Atual: Testes de Funcionalidades no Saucedemo

Este projeto automatiza diversos fluxos de interação no site [saucedemo.com](https://www.saucedemo.com), utilizando o Cypress. Além do teste de login, o projeto cobre a adição e remoção de itens no carrinho, filtros de preços, checkout, validação de totais, e outros fluxos de usuários com diferentes cenários.

---

## 🧰 Tecnologias usadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

---
![Demonstração do login](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/login-test.gif)
![Demonstração do filtro](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/fill-products.gif)
![Demonstração do carrinho](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/add-to-cart.gif)
![Demonstração dos erros](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/login-errors.gif)
![Demonstração do logout](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/logout.gif)
![Demonstração dos users](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/users.gif)
![Demonstração da performance](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/performance.gif)

## 📁 Estrutura do Projeto

```text
cypress/
├── downloads/                  # (Pasta reservada, sem testes no momento)
├── e2e/                        # Testes de ponta a ponta
│   ├── add-to-cart.cy.js       # Testes de adicionar/remover itens do carrinho
│   ├── fill-products.cy.js     # Testes de filtro por preço
│   ├── login-errors.cy.js      # Testes de login com erros
│   ├── login.cy.js             # Testes de login com usuário válido
│   ├── logout.cy.js            # Teste de logout
│   ├── performance.cy.js       # Teste de performance
│   └── users.cy.js             # Testes com usuários bloqueado, problemático, etc.
├── fixtures/
│   └── example.json            # Dados simulados para testes
├── support/
│   ├── commands-checkout.js    # Comandos para etapas do checkout
│   ├── commands-filter.js      # Comandos para filtros de produtos
│   ├── commands-login.js       # Comandos de login
│   ├── commands-users.js       # Comandos para testes com diferentes usuários
│   ├── commands.d.ts           # Tipagem dos comandos (opcional)
│   ├── commands.js             # Registro central dos comandos customizados
│   └── e2e.js                  # Carregamento dos comandos no ambiente de testes



---

## 🧪 Funcionalidades Testadas

- **Login**: Testes com diferentes usuários (usuário padrão, bloqueado, com problemas de performance, e imagem trocada).
- **Carrinho de Compras**: Adição e remoção de produtos, validação de itens no carrinho.
- **Filtros de Produtos**: Ordenação dos produtos por preço (menor para maior e maior para menor), verificação de preços.
- **Checkout**: Preenchimento de informações de pagamento, validação de subtotal, taxa, total, e finalização da compra.
- **Validação de Performance**: Teste de tempo de carregamento da página (performance do site).
- **Usuários Específicos**: Testes com usuários bloqueados, com problemas de imagem e usuários de performance.
- **Login com Dados Inválidos**: Verificação de comportamentos de erro com dados inválidos ou ausentes.
- **Logout**: Verificação do fluxo de logout e retorno à página inicial.
- **Verificação de Imagens**: Validação da imagem do produto para garantir que está correta (como a imagem do "Sauce Labs Backpack").
- **Erro de Login**: Testes de falha de login, como quando o nome de usuário ou senha estão incorretos.


## ▶️ Como executar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repo.git

2. Instale as dependências:

npm install

3. Execute os testes:
*Com interface (modo interativo):
npx cypress open

*Em modo headless (sem interface):
npx cypress run

----------

💡 Objetivo
Este projeto faz parte dos meus estudos de automação de testes.
Pretendo adicionar mais testes com diferentes fluxos e sites públicos.

👩‍💻 Autor
Thaís Dal Pozzo

