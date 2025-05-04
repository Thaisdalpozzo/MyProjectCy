
describe('Validar performance do site', () => {
    it('Deve verificar o tempo de carregamento do site', () => {

        cy.performanceUser();
        cy.checkPerformance(2000, 0.2);
    
      });
});
