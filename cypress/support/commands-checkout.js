Cypress.Commands.add('checkout', () => {

    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type('Testando')
    cy.get('[data-test="lastName"]').type('com cypress')
    cy.get('[data-test="postalCode"]').type('90450-034')
    cy.get('[data-test="continue"]').click();
  });

  Cypress.Commands.add('checkoutOverview', () => {

    cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
  
    cy.get('[data-test="payment-info-label"]').should('have.text', 'Payment Information:')
    cy.get('[data-test="payment-info-value"]').should('contain', 'SauceCard')
  
    cy.get('[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:')
    cy.get('[data-test="shipping-info-value"]').should('contain', 'Pony Express')
  })
  
  Cypress.Commands.add('priceTotal', () => {
    
    cy.get('.inventory_item_price').then(($els) => {
      const prices = [...$els].map(el => parseFloat(el.innerText.replace('$', '')))
      const itemTotal = prices.reduce((acc, val) => acc + val, 0)
      const tax = +(itemTotal * 0.08).toFixed(2)
      const total = +(itemTotal + tax).toFixed(2)
  
      cy.get('[data-test="subtotal-label"]').should('contain', `Item total: $${itemTotal.toFixed(2)}`)
      cy.get('[data-test="tax-label"]').should('contain', `Tax: $${tax.toFixed(2)}`)
      cy.get('[data-test="total-label"]').should('contain', `Total: $${total.toFixed(2)}`)
    })
  })
   

  Cypress.Commands.add('finishCheckout', () => {

    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete')
  })
  
Cypress.Commands.add('checkoutSucess', () => {

  cy.url().should('include', '/checkout-complete')

  cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
  cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
  cy.get('[data-test="complete-text"]').should('contain', 'Your order has been dispatched')
})



