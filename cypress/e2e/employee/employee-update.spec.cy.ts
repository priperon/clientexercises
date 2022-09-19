describe("employee update test", () => {
    it("visits the root", () => {
        cy.visit("/");
    });
    it("clicks the menu button employees option", () => {
        cy.get('mat-icon').click();
        cy.contains('a', 'employees').click();
    });
    it("selects Peron", () => {
        cy.contains('Peron').click()
    });
    it("updates Peron email", () => {
        cy.get("[type='email']").clear();
        cy.get("[type='email']").type('pper@domain.com');
    });
    it("submits the update", () => {
        cy.get('form').submit();
    });
    it("confirms update", () => {
        cy.contains('updated!');
    })
});