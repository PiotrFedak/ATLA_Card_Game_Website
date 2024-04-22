import React from 'react'
import Footer from '../../src/components/Footer';

describe('<Footer />', () => {
  it('Navigates to correct GitHub profiles', () => {
    cy.mount(<Footer />)
    cy.get('[id="FooterText"]').should('contain.text', 'A student project aimed at creating a card game, in the world of avatar the last airbender');
    cy.get('ul li:nth-child(1) a').should('have.attr', 'href', 'https://github.com/PiotrFedak');
    cy.get('ul li:nth-child(2) a').should('have.attr', 'href', 'https://github.com/KacperWojdak');
    cy.get('ul li:nth-child(3) a').should('have.attr', 'href', 'https://github.com/AndrzejBudzyn');
    cy.get('ul li:nth-child(4) a').should('have.attr', 'href', 'https://github.com/maciek12323').click();
  });
});