import LoginPage from "../PageObjects/LoginPage";

const ln = new LoginPage();
const now = new Date();
const formatted = now.toISOString().replace(/[:.]/g, '-');

describe('Login Scenarios', () => {

    it('Should login user with valid credentials successfully', () => {
        cy.visit('/')
        ln.setEmail("ridwan1@mailinator.com");
        ln.setPassword("123456");
        ln.clickSignIn();
        ln.verifyLoginPage();

        // Snapshot the success state
        // Wait for posts to load
        cy.get('.item-card', { timeout: 10000 }).should('have.length.at.least', 1);

        // Then ensure the container is visible and has height
        cy.get('.all-posts').should('be.visible').screenshot(`Login-Success-${formatted}`);
    })


    it('Should not allow login attempt with invalid password', () => {
        cy.visit('/')
        ln.setEmail("ridwan1@example.com");
        ln.setPassword("102977");
        ln.clickSignIn();
        ln.InvalidPasswordFieldAssertion

        // Snapshot failed login due to invalid password
        cy.get('form').screenshot(`Login-InvalidPassword-${formatted}`);
    })


    it('Should not allow login attempt with invalid email', () => {
        cy.visit('/')
        ln.setEmail("useer");
        ln.setPassword("123456");
        ln.clickSignIn();
        ln.InvalidEmailFieldAssertion

        // Snapshot failed login due to invalid email
        cy.get('form').screenshot(`Login-InvalidEmail-${formatted}`);
    })


    it('Should not allow login attempt with empty email field', () => {
        cy.visit('/')
        ln.setPassword("123456");
        ln.clickSignIn();
        ln.EmptyEmailFieldAssertion

        // Snapshot failed login due to empty email
        cy.get('form').screenshot(`Login-EmptyEmail-${formatted}`);
    })


    it('Should not allow login attempt with empty password field', () => {
        cy.visit('/')
        ln.setEmail("ridwan1@example.com");
        ln.clickSignIn();
        ln.EmptyPasswordFieldAssertion();

        // Snapshot failed login due to unregistered email
        cy.get('form').screenshot(`Login-UnregisteredEmail-${formatted}`);
    })

    it('Should not allow login attempt with unregistered email', () => {
        cy.visit('/')
        ln.setEmail("wyeuhdnd12@example.com");
        ln.setPassword("123456");
        ln.clickSignIn();
        ln.UnregisteredEmailAssertion

        // Snapshot failed login due to unregistered email
        cy.get('form').screenshot(`Login-UnregisteredEmail-${formatted}`);
    })




})