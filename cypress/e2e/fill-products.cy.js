describe('Filtrando produtos por preço', () => {

    beforeEach(() => {

        cy.login()
        
    })
          
    it('Deve filtrar produtos com valor menor', () => {
    
        cy.fillPriceLow()


    });

    
    it('Deve filtrar produtos com valor maior', () => {
    
        cy.fillPriceHigh()


    });
  
  

    
    
  });
  