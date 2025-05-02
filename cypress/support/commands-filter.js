Cypress.Commands.add('fillPriceLow', () => {
  cy.get('[data-test="product-sort-container"]').select('lohi')

  cy.get('.inventory_item_price').then(($prices) => {
    const actualPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
    const sortedPrices = [...actualPrices].sort((a, b) => a - b)

    expect(actualPrices).to.deep.equal(sortedPrices)
  })
})

Cypress.Commands.add('fillPriceHigh', () => {
  cy.get('[data-test="product-sort-container"]').select('hilo')

  cy.get('.inventory_item_price').then(($prices) => {
    const actualPrices = [...$prices].map(el => parseFloat(el.innerText.replace('$', '')))
    const sortedPrices = [...actualPrices].sort((a, b) => b - a)

    expect(actualPrices).to.deep.equal(sortedPrices)
  })
})
