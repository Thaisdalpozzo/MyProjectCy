Cypress.Commands.add('addtocart', () => {

  // clica no botão para adicionar a mochila ao carrinho
  cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  
  // clica no botão para adicionar a luz de bicicleta ao carrinho
  cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  
  // clica no link do carrinho de compras para visualizar os itens
  cy.get('[data-test="shopping-cart-link"]').click();
  
  // verifica se os itens adicionados estão presentes no carrinho
  cy.get('.cart_item')
    .should('include.text', 'Sauce Labs Backpack')  // verifica se a mochila está no carrinho
    .and('include.text', 'Sauce Labs Bike Light');  // verifica se a luz de bicicleta está no carrinho
  
  // verifica se o número de itens no carrinho é 2 (mochila + luz)
  cy.get('.shopping_cart_badge').should('have.text', '2');
});

Cypress.Commands.add('removeitem', () => {

  // clica no botão para remover a mochila do carrinho
  cy.get('[data-test="remove-sauce-labs-backpack"]').click();

});

Cypress.Commands.add('checkPerformance', (maxLoadTime = 2000, tolerance = 0.2) => {
  
  // espera o objeto 'performance' estar disponível no 'window' (usado para obter métricas de desempenho)
  cy.window().should('have.property', 'performance').then((performance) => {
    
    // coleta os tempos de início e fim do carregamento da página
    const { navigationStart, loadEventEnd } = performance.timing;
    const loadTime = loadEventEnd - navigationStart;  // calcula o tempo total de carregamento
  
    // loga o tempo de carregamento para depuração
    cy.log(`Tempo de carregamento: ${loadTime}ms`);
    
    // calcula o limite máximo aceitável com uma margem de tolerância (por exemplo, 20%)
    const maxTimeWithTolerance = maxLoadTime + (maxLoadTime * tolerance);
  
    // verifica se o tempo de carregamento é inferior ao limite com tolerância
    expect(loadTime).to.be.lessThan(maxTimeWithTolerance, 
      `O tempo de carregamento (${loadTime}ms) ultrapassou o limite aceitável com margem de tolerância (${maxTimeWithTolerance}ms)`);
    
    // exibe as métricas detalhadas de performance no console para depuração
    console.log('Métricas de performance:', performance.timing);
  });
});

  