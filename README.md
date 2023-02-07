# cypress-sandbox-example
Web UI Example automated test by using Cypress

* Install after checkout repo: 
    * >`yarn install`

* Setup .env file: 
    * >`yarn init:env`

* Command for open Cypress GUI: 
    * >`yarn cy:open --config-file cyress.config.ts`
    * >`yarn cy:open --config-file staging.cyress.config.ts`
    * >`yarn cy:open --config-file prod.config.ts`

* Command for run without open Cypress GUI:
    * >`yarn cy:run --config-file cyress.config.ts --spec **/${featureName}.feature --headed --browser chrome -e TAGS='@${tag}'`

* Feature: The purpose of the Feature keyword is to provide a high-level description of a software feature
    * >`Given user input username with "<user>"`

* Step definition(${feature}.steps.js): Each step starts with Given, When, Then, And, or But.
    * Cucumber executes each step in a scenario one at a time, in the sequence you’ve written them in. When Cucumber tries to execute a step, it looks for a matching step definition to execute. 
    
    ``` typescript   
        Given('user input username with ${string}',(username: string)=>{
            LoginCommands.inputUsername(username);
        });
    ```
* Custom commands: is Cypress command. The only difference is it is defined by the user, as opposed to the default commands that Cypress supplies out of the box. You can overwriting, combine default commands for any objective to use.
    ``` typescript   
        static clickLoginButton() {
            cy.xpath(loginPageElements.loginComponent.btnLogin).click();
        }
    ```

---
Project structure
---

[![](https://mermaid.ink/img/pako:eNqNlE1vozAQhv8K8rkgNXvLrQ20u-lut6LtXkwUuXhCSPCHbLNJVPW_72BoNwFS1Qdk5n14Z8bYfiW54kCmpDBMr4OnOJMBjiv6YNQGchekSrkgLg3OlTksgjAMg2uaH7QBaxcd7aPWsaKURZgruSqLyNljURvFx5XOKuL9eJ3X4gVMuHaiCg1oZVy0OUGc7Rw3VsmTbCzfsgIG8TS5in8lkeDHwQjk3_a9Gdc-NqO21k3GRV-JKUxgEE2ormrs3g6UG7oq967GFgfSLdVY5HG8Gbde-04rhX5hQ-DCjDI_qIGitA7XaBybeWx-2XrNlBBMcnuWm9C08zuPzi9b9hvNkVGfmM4nXyXb9He0lBz2Qznx8s9zcuzle7qDl55y75XfbffRCljzG0aZh4-V_BRLW6uelnrtsUuDJtpG-WFYaOvx_JGqJz97-c__Ss473Xj0ya-IBnxIt8RNvOTMsZMjuaMST_dSKF5X_ZZ2nti_H-VQgGOC2e0odqDKrZt91u1yckEEGMFKjlfHa_NFRhAQkJEpTjkz24xk8g25WmNZkPAS7w8yXbHKwgVhtVOPB5mTqTM1vENxyfAaEm3w7R8xJkw_?type=png)](https://mermaid.live/edit#pako:eNqNlE1vozAQhv8K8rkgNXvLrQ20u-lut6LtXkwUuXhCSPCHbLNJVPW_72BoNwFS1Qdk5n14Z8bYfiW54kCmpDBMr4OnOJMBjiv6YNQGchekSrkgLg3OlTksgjAMg2uaH7QBaxcd7aPWsaKURZgruSqLyNljURvFx5XOKuL9eJ3X4gVMuHaiCg1oZVy0OUGc7Rw3VsmTbCzfsgIG8TS5in8lkeDHwQjk3_a9Gdc-NqO21k3GRV-JKUxgEE2ormrs3g6UG7oq967GFgfSLdVY5HG8Gbde-04rhX5hQ-DCjDI_qIGitA7XaBybeWx-2XrNlBBMcnuWm9C08zuPzi9b9hvNkVGfmM4nXyXb9He0lBz2Qznx8s9zcuzle7qDl55y75XfbffRCljzG0aZh4-V_BRLW6uelnrtsUuDJtpG-WFYaOvx_JGqJz97-c__Ss473Xj0ya-IBnxIt8RNvOTMsZMjuaMST_dSKF5X_ZZ2nti_H-VQgGOC2e0odqDKrZt91u1yckEEGMFKjlfHa_NFRhAQkJEpTjkz24xk8g25WmNZkPAS7w8yXbHKwgVhtVOPB5mTqTM1vENxyfAaEm3w7R8xJkw_)