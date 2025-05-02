/// <reference path="./commands.d.ts" />

Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {

  cy.session([username, password], () => {
    cy.visit('https://www.saucedemo.com/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');

  })
  
});
