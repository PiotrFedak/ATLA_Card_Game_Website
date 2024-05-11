describe('Hero display', () => {
  it('should render correctly', () => {
    cy.visit('http://localhost:3000')
    cy.get('#about').should('be.visible');

    cy.contains('Are you tired of Hearthstone?').should('be.visible');
    cy.contains('ATLA CARD GAME.').should('be.visible');
    cy.contains('Game inside the World of Avatar The Last Airbender').should('be.visible');
    cy.contains('Available on both mobile and desktop devices!').should('be.visible');
    cy.contains('Play Now!').should('be.visible');

  })
})