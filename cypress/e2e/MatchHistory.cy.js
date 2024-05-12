describe("MatchHistory", () => {
  it("displays the table headers correctly", () => {
    cy.visit("http://localhost:3000/Auth");

    cy.get("#email").type("StatsUser@wp.pl");
    cy.get("#password").type("********");
    cy.get("button").contains("Sign In").click();

    cy.url().should("not.eq", "http://localhost:3000/Auth");
    cy.get('#MatchHistory').click();
    cy.get("th").eq(0).should("contain.text", "Game");
    cy.get("th").eq(1).should("contain.text", "Player hero");
    cy.get("th").eq(2).should("contain.text", "Deck name");
    cy.get("th").eq(3).should("contain.text", "Player element");
    cy.get("th").eq(4).should("contain.text", "Match length");
    cy.get("th").eq(5).should("contain.text", "Winner");
    cy.get("th").eq(6).should("contain.text", "Enemy hero");
    cy.get("th").eq(7).should("contain.text", "Enemy deck");
    cy.get("th").eq(8).should("contain.text", "Enemy element");

  });
});