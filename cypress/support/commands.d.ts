// cypress/support/commands.d.ts

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in using username and password.
       * @example cy.login('standard_user', 'secret_sauce')
       */
      login(username: string, password: string): Chainable<void>;
    }
  }
  