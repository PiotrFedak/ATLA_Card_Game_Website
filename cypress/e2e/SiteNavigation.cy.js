describe('template spec', () => {
  it('Moving around the site', () => {
    cy.visit('http://localhost:3000');

    cy.window().scrollTo(0, 4005);
    cy.get("#ArrowUP").should("be.visible");
    cy.get("#ArrowUP").click();

    cy.get('#about').should('be.visible');
    cy.contains('Are you tired of Hearthstone?').should('be.visible');
    cy.contains('Play Now!').should('be.visible');

    cy.window().scrollTo(0, 10005);

    cy.get('#Footer').should('be.visible');
    cy.contains('A student project aimed at creating a card game, in the world of avatar the last airbender').should('be.visible');
  });
});
