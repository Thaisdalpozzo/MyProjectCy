Cypress.Commands.add('checkout', () => {

  // clica no botão de checkout
  cy.get('[data-test="checkout"]').click();
  
  // preenche o campo do primeiro nome
  cy.get('[data-test="firstName"]').type('Testando');
  
  // preenche o campo do sobrenome
  cy.get('[data-test="lastName"]').type('com cypress');
  
  // preenche o campo do código postal
  cy.get('[data-test="postalCode"]').type('90450-034');
  
  // clica no botão de continuar para avançar para a próxima etapa
  cy.get('[data-test="continue"]').click();

});

Cypress.Commands.add('checkoutOverview', () => {

  // verifica se o título da página está correto
  cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview');

  // verifica se o rótulo de "Payment Information" está correto
  cy.get('[data-test="payment-info-label"]').should('have.text', 'Payment Information:');
  
  // verifica se o valor do pagamento contém 'SauceCard'
  cy.get('[data-test="payment-info-value"]').should('contain', 'SauceCard');
  
  // verifica se o rótulo de "Shipping Information" está correto
  cy.get('[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:');
  
  // verifica se o valor do envio contém 'Pony Express'
  cy.get('[data-test="shipping-info-value"]').should('contain', 'Pony Express');

});
  
Cypress.Commands.add('priceTotal', () => {

  // coleta todos os preços dos itens no carrinho
  cy.get('.inventory_item_price').then(($els) => {
    // mapeia os preços para convertê-los de string para número
    const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')));
    
    // calcula o total dos itens
    const itemTotal = prices.reduce((acc, val) => acc + val, 0);
    
    // calcula o imposto (8% do total dos itens)
    const tax = +(itemTotal * 0.08).toFixed(2);
    
    // calcula o total final (total dos itens + imposto)
    const total = +(itemTotal + tax).toFixed(2);

    // verifica se o subtotal está correto
    cy.get('[data-test="subtotal-label"]').should('contain', `Item total: $${itemTotal.toFixed(2)}`);
    
    // verifica se o imposto está correto
    cy.get('[data-test="tax-label"]').should('contain', `Tax: $${tax.toFixed(2)}`);
    
    // verifica se o total está correto
    cy.get('[data-test="total-label"]').should('contain', `Total: $${total.toFixed(2)}`);
  });

});

Cypress.Commands.add('finishCheckout', () => {

  // clica no botão de finalizar compra
  cy.get('[data-test="finish"]').click();
  
  // verifica se a URL da página de conclusão de checkout está correta
  cy.url().should('include', '/checkout-complete');

});
  
Cypress.Commands.add('checkoutSucess', () => {

  // verifica se a URL contém 'checkout-complete', indicando que a compra foi concluída
  cy.url().should('include', '/checkout-complete');

  // verifica se o título da página de sucesso é o esperado
  cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!');
  
  // verifica se a mensagem de sucesso está correta
  cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
  
  // verifica se a mensagem adicional contém 'Your order has been dispatched'
  cy.get('[data-test="complete-text"]').should('contain', 'Your order has been dispatched');

});




