import UserData from '../fixtures/userData.json'


describe('Orange HRM Testes', () => {

  const selectorList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialsAlert: "[role='alert']"

  }

  it('Login - Success', () => { 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(UserData.UserSuccess.username)
    cy.get(selectorList.passwordField).type(UserData.UserSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(UserData.UserFail.username)
    cy.get(selectorList.passwordField).type(UserData.UserFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialsAlert)
  })
})