

describe("Linked In Connection builder", () => {
    it('Send Connections Request', () => {
        cy.fixture('user').then(user => {
            cy.visit("/mynetwork/");
            cy.get('[data-tracking-control-name="cold_join_sign_in"]').click();
            cy.get('#username').type(user.username);
            cy.get('#password').type(user.password);
            cy.get('[aria-label="Sign in"]').click()
            cy.wait(10000);
            cy.get('.mt2').within(el => cy.get('button').click({ multiple: true }));
        });
    });
});