describe('template spec', () => {
  it('Find email form on the site then send email', () => {
    cy.visit('http://localhost:3000');
    cy.window().scrollTo(0, 4755);

    cy.contains('Name').should('be.visible');
    cy.get('input[name="user_name"]').type('Joe');
    cy.get('input[name="user_email"]').type('joe.doe@example.com');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get('textarea[name="message"]').type('Test Message');
    cy.get('button[type="submit"]').click();
    cy.contains('Email sent successfully!', { timeout: 10000 }).should('be.visible');
  })
})