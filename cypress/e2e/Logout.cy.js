describe("Login Form", () => {
  it("successfully logs in with correct credentials", () => {
    cy.visit("http://localhost:3000/Auth");

    cy.get("#email").type("joe123@gmail.com");
    cy.get("#password").type("123");
    cy.get("button").contains("Sign In").click();

    cy.url().should("not.eq", "http://localhost:3000/Auth");
    cy.get("#logout").click();
    cy.url().should("eq", "http://localhost:3000/Auth");
  });

});