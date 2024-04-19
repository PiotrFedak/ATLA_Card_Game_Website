import React from 'react'
import Email from '../../src/components/Email'
it('sends email when form is submitted', () => {
    cy.mount(<Email />);

    cy.get('input[name="user_name"]').type('John Doe');
    cy.get('input[name="user_email"]').type('john.doe@example.com');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get('textarea[name="message"]').type('Test Message');

    cy.get('button[type="submit"]').click();
});