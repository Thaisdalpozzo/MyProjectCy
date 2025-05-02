describe('Fazendo uma compra', () => {

    beforeEach(() => {

        cy.login()
        
    })

    //todo: por causa do site sauce, o estado do carrinho não é persistido fora da memória, separar por it() quebra o fluxo.
    it('Deve adicionar 2 produtos ao carrinho', () => {
    
        cy.addtocard();
        cy.removeitem();
        cy.checkout();
        cy.checkoutOverview();
        cy.priceTotal();
        cy.finishCheckout();
        cy.checkoutSucess();
        
    });
    
  });
  