/// <reference types="cypress" />
// Above line needed as indicator for Cypress
// Commands: This layer is contains Cypress default command, custom command.
// Please follow conditions below.
// 1.Can access locators directly.
// 2.Locator should access via page object model.
// 3.Do not access variables directly except timeout.
// 4.Use Cypress.Commands.add for declare your custom command.

// import CommonCommands from './commonCommands';     // Not use now.
// import homePageElements from '../pages/home-page'; // Not use now.

class HomeCommands {
    // Function need to be called by Step definition files
    static verifyCurrentLocationIsHomePage() {
        cy.url().should('include', 'https://sandbox.moodledemo.net/')
    }
}
// Export as Module for re-usability
export default HomeCommands