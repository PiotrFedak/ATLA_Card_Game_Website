import React from 'react'
import UserProfile from '../../src/components/UserProfile'

describe('<UserProfile />', () => {
  it('toggles help text on click', () => {
    cy.mount(<UserProfile />)

    cy.get('.cursor-pointer').click();
    cy.contains('click on the gear to edit your profile settings').should('exist');
  });

  it('opens profile editing panel on gear icon click', () => {
    cy.mount(<UserProfile />)
    cy.get('[id="Gear"]').click();

    cy.contains('Profile Pictures').should('exist');
    cy.contains('Username:').should('exist');
    cy.contains('Email:').should('exist');
    cy.contains('Password:').should('exist');
    cy.contains('Save').should('exist');
  });
});
