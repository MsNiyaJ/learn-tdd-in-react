describe('Creating a message', () => {
  it('Displays the message in the list', () => {
    // 1. Go to the home page
    cy.visit('http://localhost:3000');

    // 2. Type a message in the input field
    cy.get('[data-testid="messageText"]').type('New message');

    // 3. Click the send button
    cy.get('[data-testid="sendButton"]').click();

    // 4. Clear the input field
    cy.get('[data-testid="messageText"]').should('have.value', '');

    // 5. Check that the message is in the list
    cy.contains('New message');
  });
});
