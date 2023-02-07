/// <reference types="cypress" />
// Above line needed as indicator for Cypress
// Commands: This layer is contains Cypress default command, custom command.
// Please follow conditions below.
// 1.Can access locators directly.
// 2.Locator should access via page object model.
// 3.Do not access variables directly except timeout.
// 4.Use Cypress.Commands.add for declare your custom command.
import CommonCommands from './commonCommands';
import loginPageElements from '../pages/login-page';

class LoginCommands {
    // Function need to be called by Step definition files
    static inputUsername(username: string) {
        CommonCommands.inputTextAndRetryIfFail(loginPageElements.loginComponent.txtInputUsername,username)
    }

    static inputPassword(password: string) {
        CommonCommands.inputTextAndRetryIfFail(loginPageElements.loginComponent.txtInputPassword,password)
    }
    
    static clickLoginButton() {
        cy.xpath(loginPageElements.loginComponent.btnLogin).click();
    }

}
// Export as Module for re-usability
export default LoginCommands