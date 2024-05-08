it("After log in display stats ", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.visit("http://localhost:3000/Auth");

  cy.get("#email").type("StatsUser@wp.pl");
  cy.get("#password").type("123");
  cy.get("button").contains("Sign In").click();

  cy.url().should("not.eq", "http://localhost:3000/Auth");
  cy.url().should("eq", "http://localhost:3000/Stats");
  cy.get("#PieChart").should("exist");
  cy.contains('User: StatsUser').should('be.visible');
  cy.contains('Win Rate:').should('be.visible');
});