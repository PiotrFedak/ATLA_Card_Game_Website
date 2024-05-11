describe('Correct Steps Display', () => {
    it('displays the steps correctly', () => {
        cy.visit('http://localhost:3000');
        cy.window().scrollTo(0, 615);
        cy.get('.steps').should('exist');
        cy.get('.step').should('have.length', 4);
        cy.contains('.step', 'Downloand game').should('exist');
        cy.contains('.step', 'register an account either in the game or on the website').should('exist');
        cy.contains('.step', 'Chose your character').should('exist');
        cy.contains('.step', 'Play!').should('exist').and('have.attr', 'data-content', '★');
    })
})
