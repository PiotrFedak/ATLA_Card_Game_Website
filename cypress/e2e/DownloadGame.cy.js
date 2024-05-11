describe('Hero component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('displays "ATLA CARD GAME" heading', () => {
    cy.contains('ATLA CARD GAME').should('be.visible');
  });

  it('contains a download button for desktop', () => {
    cy.get('[data-testid="button-test"]').should('exist');
    cy.get('[data-testid="button-test"]').click();
    cy.contains('Download for Desktop').should('be.visible');
    cy.get('#Desktop').click();
  });

  it('contains a download button for mobile', () => {
    cy.get('[data-testid="button-test"]').should('exist');
    cy.get('[data-testid="button-test"]').click();
    cy.contains('Download for Mobile').should('be.visible');
  });

  it('clicks the "Play Now!" button', () => {
    cy.get('[data-testid="button-test"]').click();
    cy.get('.dropdown-content').should('be.visible');
  });

});
