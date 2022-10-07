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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('closeCookies', () => {
	const cookiesWindow = '#onetrust-banner-sdk'
	const cookiesAcceptButton = '#onetrust-accept-btn-handler'
	
	cy.get(cookiesAcceptButton).click().should('not.be.visible')
	cy.get(cookiesWindow).should('not.be.visible')
})

Cypress.Commands.add('setCookies', () => {
	cy.setCookie('eupubconsent-v2', 'CPggobiPggqX0AcABBENCkCgAAAAAAAAAChQAAAAAADBIAIC8xUAEBeYyACAvMdABAXmSgAgLzKQAQF5gAAA.YAAAAAAAAAAA')
	cy.setCookie('OptanonAlertBoxClosed', '2022-10-07T15:20:43.614Z')
})


import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand({
	failureThreshold: 10, // threshold for entire image
	failureThresholdType: 'percent', // percent of image or number of pixels
	customDiffConfig: { threshold: 10 }, // threshold for each pixel
	capture: 'viewport', // capture viewport in screenshot
  });