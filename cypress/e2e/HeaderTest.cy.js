describe('Header component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('navigates to auth page when clicked Login link', () => {
        cy.get('.p-4 > a').contains('Login').click();
        cy.url().should('include', '/Auth');

    });

});
