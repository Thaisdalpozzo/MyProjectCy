describe('Validar diversos usuários', () => {
    it('Deve validar usuário bloqueado', () => {

        cy.userLocked();

    });

    it('Deve logar com usuário que está com a imagem correta', () => {

        cy.login();
        cy.verifyWrongImage();

    });

    it('Deve logar com usuário que está com a imagem errada', () => {

        cy.problemUser();
        cy.verifyWrongImage();

    });


});