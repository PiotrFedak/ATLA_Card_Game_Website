it("Should display error toast after failed login attempt", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.get("#email").type("joeTest123@wp.pl");
  cy.get("#password").type("WrongPassword");
  cy.get("button").contains("Sign In").click();

  cy.contains('Login failed', { timeout: 10000 }).should('be.visible');
});

it("Should display error message after failed register", () => {
  cy.visit("http://localhost:3000/Auth");

  cy.get("button").contains("Sign up now").click();
  cy.get("#name").type("joeTest1");
  cy.get("#email").type("joeTest1@wp.pl");
  cy.get("#password").type("123");

  cy.get("button").contains("Sign Up").click();
  cy.contains('Register failed', { timeout: 10000 }).should('be.visible');
});