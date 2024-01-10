describe('browserstack assignment', () => {
  it('login test', () => {
    cy.visit('https://www.browserstack.com/users/sign_in')
    cy.wait(20000)
    cy.get('#user_email_login').type('kavishagupta20340@gmail.com')
    cy.get('#user_password').type('rckaak890')
    cy.get('#user_submit').click()
    cy.wait(30000)
    // check for dashboard display
    cy.url().should('include', '/dashboard')
    // click on windows 10
    cy.get('.accordion__content > :nth-child(2) > .os-section__list').click()
    // click on Firefox latest
    cy.get('[data-test-browser="firefox"] > .dnd__droppable > :nth-child(1) > [data-rbd-draggable-context-id="1"] > .browser-version-list__element').click()
    cy.wait(30000)

  })
  

})