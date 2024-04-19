import React from 'react'
import Email from './Email'

describe('<Email />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Email />)
  })
})