it("successfully changing data in profile ", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.get("button").contains("Sign up now").click();
  cy.get("#name").type("joe211");
  cy.get("#email").type("Joe214123@gmail.com");
  cy.get("#password").type("123");
  cy.get("button").contains("Sign Up").click();

  cy.url().should("not.eq", "http://localhost:3000/Auth");
  cy.url().should("eq", "http://localhost:3000/Stats");
  cy.get("#PieChart").should("exist");

  cy.get('[data-testid="Profile-test"]').click();
  cy.url().should("eq", "http://localhost:3000/Profile");

  cy.get("#Gear").should("exist").click();;

  cy.get("#email").type("newEmailTest@wp.pl");
  cy.get("#name").type("newNickname");
  cy.get("#saveProfile").click();

  cy.contains('newNickname').should('be.visible');
  cy.contains('newEmailTest@wp.pl').should('be.visible');
});