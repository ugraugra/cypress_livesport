const homepage_url = 'https://www.flashscore.com'
const headerLogoElement = '.header__logoWrapper > a'
const headerButton = '.header__button'
const contactUsLink = '.page-contact'
const privacyButton = '.footer__privacyButton'
const oneTrustContainer = 'div.otPcTab'

describe('FAQ', () => {
	before(function() {
		// hack kvůli typeerroru na stránce
		Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
	  	})
	  	cy.setCookies()
	 })
	
	it('Zobrazení stránky FAQ', () => {
		cy.visit(`${homepage_url}/faq`)
		//cy.screenshot('FAQ_page')
		// Note - poslední verze cypress-image-snapshot pluginu je z 2021/01 a je třeba použít fork pro cypress 10
		cy.matchImageSnapshot('FAQ_page')
		cy.get(headerLogoElement).should('have.css', 'cursor', 'pointer')
		cy.get(headerLogoElement).parent().click()
		cy.url().should('contain', homepage_url)
		cy.go('back')
		cy.get(headerButton)
		  .realHover()
		  .should('have.css', 'opacity', '0.7')
		  .and('have.css', 'cursor', 'pointer')
		  .click()
		cy.url().should('contain', homepage_url)
		cy.get(contactUsLink)
		  .realHover()
		  .should('have.css', 'cursor', 'pointer')
		  .and('have.css', 'text-decoration-line', 'underline')
		  .click()
		cy.url().should('contain', `${homepage_url}/contact/`)
		cy.get(privacyButton)
		  .realHover()
		  .should('have.css', 'cursor', 'pointer')
		  .and('have.css', 'text-decoration-line', 'none')
		  .and('be.visible')
		  .click()
		  .get(oneTrustContainer)
		  .should('be.visible')
	})
  })