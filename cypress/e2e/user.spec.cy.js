import UserData from '../fixtures/userData.json'


describe('Orange HRM Testes', () => {

  const selectorList ={
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialsAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']", 
    middleNameField: "[name='middleName']", 
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dataField: "[placeholder='yyyy-dd-mm']",
    dataCloseButton: ".--close",
    subimitButton: "[type='submit']",
    genericCombobox: ".oxd-select-text--arrow",
    genericItemCombobox: ".oxd-select-dropdown",

  }

  it.only('User Info Update - Success', () => { 

    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(UserData.UserSuccess.username)
    cy.get(selectorList.passwordField).type(UserData.UserSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIDTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorList.genericField).eq(8).clear().type('Test_FieldTest')
    cy.get(selectorList.dataField).eq(0).clear().type('2024-06-26')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.dataField).eq(1).clear().type('2024-06-26')
    cy.get(selectorList.dataCloseButton).click()
    cy.get(selectorList.subimitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorList.genericCombobox).eq(0).click()
    cy.get(selectorList.genericItemCombobox).contains('Brazilian').click()
    cy.get(selectorList.genericCombobox).eq(1).click()
    cy.get('.oxd-select-text-input').contains('Single').click()    






  })


  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorList.usernameField).type(UserData.UserFail.username)
    cy.get(selectorList.passwordField).type(UserData.UserFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialsAlert)
  })
})