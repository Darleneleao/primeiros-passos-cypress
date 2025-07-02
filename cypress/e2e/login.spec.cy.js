import UserData from "../fixtures/userData.json";
import DashboardPage from "./pages/dashboardPage.js";
import LoginPage from "./pages/loginPage.js";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Login Orange HRM Testes", () => {
  
  it("Login - Fail", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(UserData.UserFail.username, UserData.UserFail.password);
    loginPage.checkAccessInvalid();

  });

  it("Login - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(UserData.UserSuccess.username, UserData.UserSuccess.password);
    dashboardPage.verifyDashboardPage();

  });

});
