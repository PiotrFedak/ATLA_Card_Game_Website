describe('template spec', () => {
  it('Screenshots navigation exist, is visible and works', () => {
    cy.visit('http://localhost:3000');

    cy.get("#LeftScreenArrow").should("exist");
    cy.get("#RightScreenArrow").should("exist");

    cy.window().scrollTo(0, 4005);
    cy.get("#LeftScreenArrow").should("be.visible");
    cy.get("#RightScreenArrow").should("be.visible");
    cy.get("#LeftScreenArrow").click();

  });
});
