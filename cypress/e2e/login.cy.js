describe("Login Form", () => {
  it("login fail with wrong/incorrect credentials", () => {
    cy.visit("http://localhost:3000/Auth");

    cy.get("#email").type("invalid_user@example.com");
    cy.get("#password").type("incorrect_password");
    cy.get("button").contains("Sign In").click();

    cy.getCookie("token").should("not.exist");
  });

  it("successfully logs in with correct credentials", () => {
    cy.visit("http://localhost:3000/Auth");

    cy.get("#email").type("1234@wp.pl");
    cy.get("#password").type("123");
    cy.get("button").contains("Sign In").click();

    cy.url().should("eq", "http://localhost:3000/Stats");
    cy.get("#PieChart").should("exist");
  });

});