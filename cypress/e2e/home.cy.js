//test suite
describe('Login Page', () => {
  //pre-conditions. alternatively, we can use afterEach for post-conditions
  beforeEach(() => {

    cy.visit('http://localhost:4000');
  });


  //Positive testing
  it('should login with valid credentials', () => {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Login Successful!')
    });
  });

  //Negative testing
  it('should display error message if wrong credentials', () => {
    //Arrange
    cy.get('#email').type('test@examples.com');
    cy.get('#password').type('password123');

    //Act
    cy.get('#login-button').click();

    //Assert
    cy.get('#error-message').should(
      'contain',
      'Invalid email or password'
    );
  });

  it('if submitted more than once, raise exception', () => {
    //Arrange
    cy.get('#email').type('test@example.com');
    cy.get('#password').type('password123');

    //Act
    for (var i = 0; i > 3; i++) {
      cy.get('#login-button').click();
    }

    //Assertion  
    expect(loginSubmit).should('throw', Error)
  });
});