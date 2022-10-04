describe('expense delete test', () => {

    it('visits the root', () => {

        cy.visit('/');

    });

    it('clicks the menu button expenses option', () => {

        cy.get('mat-icon').click();

        cy.contains('a', 'expenses').click();

    });

    it('selects April 25th expense', () => {

        cy.contains('2022-04-25').click();

    });

    it('clicks the delete button', () => {

        cy.get('button').contains('Delete').click();

    });

    it('confirms delete', () => {

        cy.contains('deleted!');

    });

});