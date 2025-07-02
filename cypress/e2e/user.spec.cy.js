import UserData from "../fixtures/userData.json";
import DashboardPage from "./pages/dashboardPage.js";
import LoginPage from "./pages/loginPage.js";
import MenuPage from "./pages/menuPage.js";
import MyInfoPage from "./pages/myInfoPage.js";

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Orange HRM Testes", () => {
  
  it("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(UserData.UserSuccess.username,UserData.UserSuccess.password);
    dashboardPage.verifyDashboardPage();
    menuPage.accessMyInfoPage();
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last());
    myInfoPage.fillEmployeeDetails('12345', '67890', 'DL123456', '2025-12-31', '1990-01-01', 'Test Field');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

});
