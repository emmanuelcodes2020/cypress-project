
describe('Login Test', () => {
  
  afterEach(() => {
    if (Cypress.currentTest.state === 'failed') {
      cy.screenshot(); // Capture screenshot on failure
    }
  });
  
  it('should log in successfully with valid credentials', () => {
    cy.visit('https://www.saucedemo.com/'); // Visit login page

    cy.get('#user-name').type('standard_user'); // Enter username
    cy.get('#password').type('secret_sauce');   // Enter password
    cy.get('#login-button').click();           // Click login button

    // Assertion: Verify successful login by checking if the inventory page is visible
    cy.url().should('include', '/inventory');
    cy.get('.inventory_list').should('be.visible');
  });
});
