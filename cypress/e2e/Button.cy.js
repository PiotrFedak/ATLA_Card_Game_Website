describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Play Now!').should('exist');

    cy.get('[data-testid="button-test"]').should('exist');

    cy.get('[data-testid="button-test"]').click();
    cy.get('.hidden > div.p-4').click();
  })
})