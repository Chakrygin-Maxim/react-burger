describe('make order', () => {
  before(() => {
    cy.visit('/')
    cy.viewport(1280, 720)
  })

  it('should add ingredients and click order button', () => {
    window.localStorage.setItem(
      'refreshToken',
      JSON.stringify('test-refreshToken')
    )
    window.localStorage.setItem('token', JSON.stringify('test-token'))

    cy.intercept('GET', 'https://norma.nomoreparties.space/api/auth/user', {
      fixture: 'user.json',
    }).as('user-data')

    cy.intercept('GET', 'https://norma.nomoreparties.space/api/ingredients', {
      fixture: 'ingredietns.json',
    }).as('ingredients-data')

    cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders', {
      fixture: 'order.json',
    }).as('order-data')

    cy.get('#dragElement').first().trigger('dragstart')
    cy.get('#dropArea').trigger('drop')
    cy.get('li').contains('Соус Spicy-X').trigger('dragstart')
    cy.get('#dropArea').trigger('drop')
    cy.get('li')
      .contains('Филе Люминесцентного тетраодонтимформа')
      .trigger('dragstart')
    cy.get('#dropArea').trigger('drop')
    cy.get('button').contains('Оформить заказ').click()
    cy.wait('@order-data')
    cy.get('#modal').contains('идентификатор заказа')
    cy.get('#modal').find('#close-icon').click()
  })
})
