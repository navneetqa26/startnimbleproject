class LoginPage {
  elements = {

    usernameInput: () => cy.get("input[id='identifier']"),
    passwordInput: () => cy.get("input[id='password']"),
    loginclick: () => cy.get("button[type='submit']"),
    verifylogin: () => cy.contains('Welcome back!'),
    dashboardvisible:()=> cy.contains('Dashboard')
    
    };

  usernametype(username) {
    this.elements.usernameInput().type(username);
}
passwordtype(password) {
    this.elements.passwordInput().type(password);
}
loginclick() {
    this.elements.loginclick().click();
}
verifyloginpage() {
    this.elements.verifylogin().should('be.visible');
}
dashboardverify(){
    this.elements.dashboardvisible().should('be.visible');
}
}

export default LoginPage;
