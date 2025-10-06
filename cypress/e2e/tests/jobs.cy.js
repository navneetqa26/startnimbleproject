import jobprocess from '../pages/job';
import LoginPage from '../pages/LoginPage';

const bill = new jobprocess();
const login = new LoginPage();
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false
})
describe('Job Creation', () => {
  let testData;

  // Load fixture before all tests
  before(() => {
    cy.fixture('jobsData').then((data) => {
      testData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/index.htm'); 
    login.usernametype(testData.validUser.username)
    login.passwordtype(testData.validUser.password)
    login.loginclick()  // loads home page
    login.verifyloginpage();
    login.dashboardverify();
  });

  
  it('New Job Creation', () => {
   bill.jobclick();
   bill.manageassertion();
   bill.Createjobclick();
   bill.creationmethod();
   bill.useatemplateclick();
   bill.choosetemplatevisible();
   bill.parttimeclick();
   bill.templateclick();
   bill.clickpublishjob();
   bill.verifyjobcreation();
   
  });

  it('Delete Created Job', () => {
  cy.viewport(1280, 720),
  bill.jobclicksidebar();
   
  });

  it.only('Edit Created Job', () => {
  cy.viewport(1280, 720),
  bill.editjobs();
  bill.jobTitle(testData.validUser.enterjob)
  bill.jobdescription(testData.validUser.jobdescriptions)
  bill.savechanges()
  bill.jobTitle().should('have.value', testData.validUser.enterjob)
  bill.jobdescription().should('have.value', testData.validUser.jobdescriptions)

   
  });

});
