describe('template spec', () => {
  it('It should toggle between light and dark mode', () => {
    cy.visit('http://localhost:3000');
    cy.get('body').should('not.have.class', 'dark-mode');
    cy.get("#darkModeSwitch").click();
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
  });
})