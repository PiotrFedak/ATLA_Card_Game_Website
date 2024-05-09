  it("Should display error toast after failed login attempt", () => {
    cy.visit("http://localhost:3000/Auth");

    cy.get("#email").type("joeTest123@wp.pl");
    cy.get("#password").type("WrongPassword");
    cy.get("button").contains("Sign In").click();

    cy.contains('Login failed', { timeout: 10000 }).should('be.visible');
  });