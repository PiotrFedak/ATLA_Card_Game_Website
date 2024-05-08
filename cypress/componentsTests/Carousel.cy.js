import React from 'react'
import Carousel from '../../src/components/Carousel';

describe('<Carousel />', () => {
  it('renders', () => {
    cy.viewport(1600, 1020);
    cy.mount(<Carousel />);
    cy.get('.text-2xl').first().invoke('text').as('initialCharacterName');
    cy.get('#carousel').should('be.visible');
    cy.get('#Left').click();
    cy.wait(500);
    cy.contains('@initialCharacterName').should('not.exist');
    cy.contains('Aang').should('be.visible');
  });

  it('displays character abilities', () => {
    cy.mount(<Carousel />);
    cy.get('#Left').click();
    cy.contains('Regenerates energy').should('be.visible');
    cy.contains('...').should('be.visible');
    cy.contains('...').should('be.visible');
  });
});