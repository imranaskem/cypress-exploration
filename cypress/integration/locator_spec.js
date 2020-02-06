describe('The application', function() {
    it('loads', function() {
        cy.visit('/')
    })
})

describe('The title', function() {
    it('exists', function() {
        cy.visit('/')

        cy.get('h1').should('contain', 'DrawLocator')
    })
})

describe('The search', function() {
    it('works', function() {
        cy.visit('/')

        cy.get('input').type('imran')

        cy.get('table').find('tr').should('have.length', 2)
    })
})

describe('The location selector', function() {
    it('changes location', function() {
        cy.visit('/')

        cy.get('select').first().select('Weston Street')

        cy.get('table').children().find('td#location').first().should('contain', 'Weston Street')
    })
})