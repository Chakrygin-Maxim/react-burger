/* eslint-disable cypress/no-unnecessary-waiting */

describe('open modal window with ingredient', () => {
  before('should be available on localhost:3000', () => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('should open and close modal', () => {
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', {
      fixture: 'ingredietns.json',
    })
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', {
      fixture: 'user.json',
    })
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    )
    window.localStorage.setItem('token', JSON.stringify('test-token'))
    cy.wait(2000)
    cy.get('[alt="Краторная булка N-200i"]').click()
    cy.contains('Детали ингредиента').should('be.visible')
    cy.get('#modal').find('img').should('be.visible')
    cy.get('#modal')
      .find('h3')
      .contains('Краторная булка N-200i')
      .should('be.visible')
    cy.get('#modal').contains('Калории, ккал').should('be.visible')
    cy.get('#modal').contains('420').should('be.visible')
    cy.get('#modal').contains('Белки, г').should('be.visible')
    cy.get('#modal').contains('80').should('be.visible')
    cy.get('#modal').contains('Жиры, г').should('be.visible')
    cy.get('#modal').contains('24').should('be.visible')
    cy.get('#modal').contains('Углеводы, г').should('be.visible')
    cy.get('#modal').contains('53').should('be.visible')

    cy.get('#modal').find('#close-icon').click()
  })
})
