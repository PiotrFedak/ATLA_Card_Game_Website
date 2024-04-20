describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Download for Desktop').should('exist');
    cy.contains('Download for Mobile').should('exist');

    cy.get('[data-testid="button-test"]').should('exist');

    cy.get('[data-testid="button-test"]').click();

  })
})