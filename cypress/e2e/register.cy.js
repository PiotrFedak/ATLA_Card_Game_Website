it("register new user", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.get("button").contains("Sign up now").click();
  cy.get("#name").type("joe2");
  cy.get("#email").type("Joe2140@gmail.com");
  cy.get("#password").type("123");

  cy.get("button").contains("Sign Up").click();

  cy.url().should("not.eq", "http://localhost:3000/Auth");
});
