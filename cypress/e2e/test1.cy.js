/// <reference types ="cypress" />

const urlMatchSummary = '/match/runqgBqi/#/match-summary/match-summary'
const tooltipElement = '#tooltip-1'
const incidents = [
  {
    "name": "Goal",
    "iconLocator": "div .smv__incidentIcon > div",
    "elementIndex": 0,
    "tooltip": `Goal! Florian Tardieu (Troyes) runs up tothe ball, stops and waits for Leo Jardimto commit before slotting the penalty intothe bottom left corner.`
  },
  {
    "name": "Substitution",
    "iconLocator": "div .smv__incidentIconSub",
    "elementIndex": 0,
    "tooltip": `The referee signals that it is time fora substitution and Eric N'jo (Troyes) willreplace Youssouf Kone.`
  },
  {
    "name": "Yellow Card",
    "iconLocator": "div .smv__incidentIcon > div",
    "elementIndex": 2,
    "tooltip": `A yellow card for a tackle by Renato Sanches(Lille). Willy Delajod doesn't hesitateat all to make this decision.`
  },
  {
    "name": "Second Yellow Card",
    "iconLocator": "div .smv__incidentIcon > div",
    "elementIndex": 3,
    "tooltip": `It's the second caution for Renato Sanches(Lille) and that's the last we'll see ofhim in this game. There was no other optionfor Willy Delajod.`
  },
  {
    "name": "Red Card",
    "iconLocator": "div .smv__incidentIcon > div",
    "elementIndex": 8,
    "tooltip": `Burak Yilmaz (Lille) receives his marchingorders. Even some of the opposing playersare surprised with the strictness of thereferee's decision, but he has to leavethe pitch immediately.`
  }
]


describe('Match Summary', { scrollBehavior: 'center' }, () => {
  before(function() {
	  	cy.setCookies()
	 })

  it('Záložka Match a správné zobrazení elementů', () => {
    cy.visit(urlMatchSummary)
    incidents.forEach(incident => {
      cy.get(incident.iconLocator).eq(incident.elementIndex).realHover()
      cy.get(tooltipElement).should('have.text', incident.tooltip)
    });
  })
})
