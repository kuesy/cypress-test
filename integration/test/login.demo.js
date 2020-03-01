context('Yahoo Login Test', () => {
    beforeEach(() => {})

    it('normal login', () => {
        cy.log('login excution')
        cy.yLogin('', '')
        cy.log('login success')
        cy.title().should('eq', 'Yahoo! JAPAN')
    })
})