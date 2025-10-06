import LoginPage from '../pages/LoginPage';

const login = new LoginPage();

describe('Signup Test Suite', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('login').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/index.htm');   // loads home page
  });

  it.only('Verify that user can login successfully with valid credentials', () => {
    login.usernametype(testData.validUser.username);
    login.passwordtype(testData.validUser.password);
    login.loginclick();
    login.verifyloginpage();
  });
  

});
