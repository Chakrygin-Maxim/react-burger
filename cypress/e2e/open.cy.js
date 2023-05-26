describe('service is available', () => {
  before('should be available on localhost:3000', () => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('should open burger constructor', () => {
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', {
      fixture: 'ingredietns.json',
    })
    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', {
      fixture: 'user.json',
    }).as('user-data')

    cy.contains('Соберите бургер')
  })
})
