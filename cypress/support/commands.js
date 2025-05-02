Cypress.Commands.add('addtocard', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('.cart_item')
      .should('include.text', 'Sauce Labs Backpack') 
      .and('include.text', 'Sauce Labs Bike Light');
      
      cy.get('.shopping_cart_badge').should('have.text', '2');

  });

  Cypress.Commands.add('removeitem', () => {

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    
  });

  