require('cypress-xpath');
class LoginPage {

    //Email
    setEmail(email) {
        cy.xpath("//input[@name='email']").clear().type(email);
    }

    //Password
    setPassword(password) {
        cy.xpath("//input[@name='password']").clear().type(password);
    }

    //LoginButtton
    clickSignIn() {
        cy.xpath("//button[@type='submit']").click();
    }


    // Assertion for successful login by checking if "Logout" is visible
    verifyLoginPage() {
        cy.contains('Logout', { matchCase: false }) // case-insensitive match
            .should('be.visible');
    }

    //Assertion for Empty Email Field
    EmptyEmailFieldAssertion() {
        const expectederrormessage = "Email is required";

        cy.xpath("//small[contains(.,'Email is required')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

    //Assertion for Empty Password Field
    EmptyPasswordFieldAssertion() {
        const expectederrormessage = "Password is required";

        cy.xpath("//small[contains(.,'Password is required')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

    //Assertion for Invalid Password Field
    InvalidPasswordFieldAssertion() {
        const expectederrormessage = "Invalid Password";

        cy.xpath("//small[contains(.,'Invalid Password')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

    //Assertion for Invalid Email Field
    InvalidEmailFieldAssertion() {
        const expectederrormessage = "email must be a valid emailEmail does not exist";

        cy.xpath("//small[contains(.,'email must be a valid email')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

    //Assertion for Unregistered Email 
    UnregisteredEmailAssertion() {
        const expectederrormessage = "Email does not exist";

        cy.xpath("//small[contains(.,'Email does not exist')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

}
export default LoginPage;