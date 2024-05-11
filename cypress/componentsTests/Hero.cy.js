import React from 'react'
import Hero from '../../src/components/Hero'

describe('<Hero />', () => {
  it('renders correctly hero component', () => {
    cy.mount(<Hero />)

    cy.get('.items-center').should('exist');
    cy.contains('Are you tired of Hearthstone?').should('exist');
    cy.contains('ATLA CARD GAME.').should('exist');
    cy.contains('Play Now!').should('exist');
    cy.get('.dropdown-content').should('not.be.visible');
  });

  it('opens download menu when "Play Now!" button is clicked', () => {
    cy.mount(<Hero />)
    cy.contains('Play Now!').should('exist');
    cy.contains('Play Now!').click();
    cy.get('.dropdown-content').should('be.visible');
    cy.contains('Download for Desktop').should('exist');
    cy.contains('Download for Mobile').should('exist');

  })
})