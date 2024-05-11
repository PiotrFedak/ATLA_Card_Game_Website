describe('User Can enter to auth page from home site', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('navigates to auth page when clicked Login link', () => {
        cy.get('.p-4 > a').contains('Login').click();
        cy.url().should('include', '/Auth');
        cy.contains('Email').should('be.visible');
        cy.get('.border.shadow-lg').should('be.visible');
        cy.contains('Facebook').should('be.visible');
        cy.contains('Google').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('Toggle switch button to register form', () => {
        cy.get('.p-4 > a').contains('Login').click();
        cy.contains('Not a member?').find('button').click();
        cy.contains('Username').should('be.visible');
        cy.contains('Email').should('be.visible');
        cy.contains('Password').should('be.visible');
    });

});
