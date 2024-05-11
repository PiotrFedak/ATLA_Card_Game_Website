import React from 'react';
import Screens from '../../src/components/Screens';

describe('<Screens />', () => {
  it('renders correctly', () => {
    cy.mount(<Screens />);

    cy.contains('Screenshots from game').should('exist');
    cy.get('.left-5').should('exist');
    cy.get('.right-5').should('exist');
    cy.get('.group').should('exist');
    cy.get('.text-2xl').should('exist');
    cy.get('.text-2xl').eq(1).click();
    cy.get('.flex > :nth-child(3)').should('exist');
  });
});
