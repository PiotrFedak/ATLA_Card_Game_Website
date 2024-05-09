it("register new user", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.get("button").contains("Sign up now").click();
  cy.get("#name").type("joeTest12");
  cy.get("#email").type("joeTest12@wp.pl");
  cy.get("#password").type("123");

  cy.get("button").contains("Sign Up").click();

  cy.url().should("not.eq", "http://localhost:3000/Auth");
});
