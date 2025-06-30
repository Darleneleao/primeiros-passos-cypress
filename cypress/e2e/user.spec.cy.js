import UserData from "../fixtures/userData.json";
import DashboardPage from "./pages/dashboardPage.js";
import LoginPage from "./pages/loginPage.js";
import MenuPage from "./pages/menuPage.js";
import MyInfoPage from "./pages/myInfoPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Testes", () => {
  
  it.only("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(UserData.UserSuccess.username,UserData.UserSuccess.password);
    dashboardPage.verifyDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.fillPersonalDetails('firstName', 'middleName', 'lastName');
    myInfoPage.fillEmployeeDetails('12345', '67890', 'DL123456', '2025-12-31', '1990-01-01', 'Test Field');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

  it("Login - Fail", () => {
    cy.visit("auth/login");
    cy.get(selectorList.usernameField).type(UserData.UserFail.username);
    cy.get(selectorList.passwordField).type(UserData.UserFail.password);
    cy.get(selectorList.loginButton).click();
    cy.get(selectorList.wrongCredentialsAlert);
  });

});
