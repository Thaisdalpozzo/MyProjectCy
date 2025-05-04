Cypress.Commands.add('fillPriceLow', () => {

  // seleciona a opção de ordenar os produtos do mais barato para o mais caro ('lohi')
  cy.get('[data-test="product-sort-container"]').select('lohi');

  // obtém todos os preços dos produtos na página
  cy.get('.inventory_item_price').then(($prices) => {
    // mapeia os preços e os converte de string para número, removendo o símbolo '$'
    const actualPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
    
    // cria uma cópia dos preços e os ordena em ordem crescente
    const sortedPrices = [...actualPrices].sort((a, b) => a - b);

    // compara os preços reais com os preços ordenados para verificar se a ordenação está correta
    expect(actualPrices).to.deep.equal(sortedPrices);
  });

});

Cypress.Commands.add('fillPriceHigh', () => {

  // seleciona a opção de ordenar os produtos do mais caro para o mais barato ('hilo')
  cy.get('[data-test="product-sort-container"]').select('hilo');

  // obtém todos os preços dos produtos na página
  cy.get('.inventory_item_price').then(($prices) => {
    // mapeia os preços e os converte de string para número, removendo o símbolo '$'
    const actualPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')));
    
    // cria uma cópia dos preços e os ordena em ordem decrescente
    const sortedPrices = [...actualPrices].sort((a, b) => b - a);

    // compara os preços reais com os preços ordenados para verificar se a ordenação está correta
    expect(actualPrices).to.deep.equal(sortedPrices);
  });

});

