import React from 'react'
import About from '../../src/components/About';

describe('<About />', () => {
  it('renders About component', () => {
    cy.mount(<About />)

    cy.get('.text-5xl').contains('Elements').should('exist');
    cy.get('#Elements').should('exist');

    cy.get('.grid').children().should('have.length', 4);

    cy.get('.grid').children().each((card, index) => {
      switch (index) {
        case 0:
          cy.wrap(card).contains('Airbending').should('exist');
          break;
        case 1:
          cy.wrap(card).contains('Firebending').should('exist');
          break;
        case 2:
          cy.wrap(card).contains('Earthbending').should('exist');
          break;
        case 3:
          cy.wrap(card).contains('Waterbending').should('exist');
          break;
        default:
          break;
      }
    });
  });
});
