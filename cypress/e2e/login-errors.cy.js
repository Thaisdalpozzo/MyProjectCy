describe('Validar campos de erro', () => {
    it('Deve validar mensagens de erro no login', () => {
        
        cy.visit('https://www.saucedemo.com/');
        cy.loginWithoutCredentials();
        cy.loginWithoutPassword();
        cy.loginWithInvalidData();

    });

})