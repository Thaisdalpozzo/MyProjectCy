describe('Fazer logout', () => {
    it('Deve fazer logout com sucesso', () => {

        cy.login();
        cy.logout();
        
    });
})