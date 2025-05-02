# 🧪 Projeto de Testes Automatizados com Cypress

Este repositório faz parte do meu plano de estudos como **QA Automation Engineer**, onde pratico automações de testes com [Cypress](https://www.cypress.io/) em sites públicos e cenários variados.

## 🚀 Projeto Atual: Teste de Login

Este projeto automatiza o fluxo de login no site [saucedemo.com](https://www.saucedemo.com), utilizando o Cypress.

### 🔒 Dados de acesso para teste

- **Usuário:** `standard_user`  
- **Senha:** `secret_sauce`

---

## 🧰 Tecnologias usadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- Node.js

---

## 📁 Estrutura do Projeto

cypress/ ├── e2e/ # Testes de ponta a ponta │ ├── login.cy.js │ ├── add-to-cart.cy.js │ └── fill-products.cy.js ├── fixtures/ │ └── example.json # Dados simulados ├── support/ │ ├── commands.js # Registro dos comandos customizados │ ├── e2e.js # Importação de todos os comandos │ ├── commands-login.js # Comando: login │ ├── commands-checkout.js # Comandos: etapas de checkout │ ├── commands-filter.js # Comandos: filtros e verificações │ └── commands.d.ts # Tipagem para comandos (opcional)

---

## 🔧 Comandos Customizados

Comandos criados para reutilização e clareza dos testes:

| Comando | Descrição |
|--------|-----------|
| `cy.login()` | Realiza o login com `cy.session()` |
| `cy.addtocard()` | Adiciona produtos ao carrinho |
| `cy.removeitem()` | Remove um item do carrinho |
| `cy.checkout()` | Preenche informações de checkout |
| `cy.checkoutOverview()` | Valida informações de envio e pagamento |
| `cy.priceTotal()` | Valida subtotal, taxa e total final |
| `cy.finishCheckout()` | Finaliza a compra |
| `cy.checkoutSucess()` | Verifica tela de sucesso da compra |
| `cy.fillPriceLow()` | Verifica filtro "Preço: menor para maior" |
| `cy.fillPriceHigh()` | Verifica filtro "Preço: maior para menor" |

---


## 🧪 Funcionalidades Testadas

- Login com usuário padrão
- Adição e remoção de produtos no carrinho
- Filtros de ordenação por preço
- Preenchimento de checkout
- Validação de valores (subtotal, taxa, total)
- Finalização da compra

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
![Demonstração do login](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/login-test.gif)
![Demonstração do filtro](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/fill-products.gif)
![Demonstração do carrinho](https://raw.githubusercontent.com/Thaisdalpozzo/MyProjectCy/main/images/add-to-cart.gif.gif)


🎯 O que é testado
Acesso à página de login

Preenchimento correto dos campos de usuário e senha

Verificação de redirecionamento após login bem-sucedido

💡 Objetivo
Este projeto faz parte dos meus estudos de automação de testes.
Pretendo adicionar mais testes com diferentes fluxos e sites públicos.

👩‍💻 Autor
Thaís Dal Pozzo

