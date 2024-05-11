describe('Display carousel correctly', () => {
    it('displays the carousel correctly', () => {
        cy.visit('http://localhost:3000');
        cy.window().scrollTo(0, 3045);
        cy.contains('Toph').should('be.visible');
        cy.get(':nth-child(1) > .absolute > .indicator > .indicator-item').should('exist').and('have.class', 'badge').and('have.class', 'badge-primary');
        cy.get(':nth-child(2) > .image-container > .w-220').should('be.visible');
        cy.get(':nth-child(3) > .absolute > .indicator > .indicator-item').should('exist').and('have.class', 'badge').and('have.class', 'badge-primary');
        cy.get('#fastForward > svg > path').should('be.visible');
    })
})