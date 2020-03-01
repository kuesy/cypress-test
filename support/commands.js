// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * yahoo login and move ytop
 */
Cypress.Commands.add('yLogin', (yid, pwd) => {
    cy.visit("https://login.yahoo.co.jp/config/login")
    cy.get('#username').type(yid)
    cy.get('#btnNext').contains('次へ').click()
    cy.wait(3000)
    cy.get('#passwd').type(pwd)
    cy.get('#btnSubmit').contains('ログイン').click()
})