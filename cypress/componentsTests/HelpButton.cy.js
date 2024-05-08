import React from 'react'
import HelpButton from '../../src/components/ui/HelpButton'

describe('<HelpButton />', () => {
  it('renders', () => {
    cy.mount(<HelpButton />)

    cy.get('#help-button').should('be.visible');
    cy.get('#help-button').click();

  })
})