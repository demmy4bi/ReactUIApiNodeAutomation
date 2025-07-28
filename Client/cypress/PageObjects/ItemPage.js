require('cypress-xpath');
class ItemPage {

    //AddNewItemBotton
    clickAddNewItemBtn() {
        cy.xpath("//b[contains(.,'+')]").click();
    }

    // Add Item using random value and store as alias
    setItemName() {
        const randomItemName = `Item-${Math.random().toString(36).substring(2, 8)}`;
        cy.wrap(randomItemName).as('createdItemName'); // Store the name for later use
        cy.xpath("//input[@name='title']").clear().type(randomItemName);
    }

    // Add Item using random value and store as alias
    clearItemName() {
        cy.xpath("//input[@name='title']").clear();
    }

    // Verify the item created is visible on the page
    verifyItemVisible() {
        cy.get('@createdItemName').then((itemName) => {
            cy.contains(itemName, { matchCase: false }).should('be.visible');
        });
    }

    //Description
    setItemDescription() {
        const randomDesc = `This is a test description.`;
        cy.xpath("//textarea[@name='description']").clear().type(randomDesc);
    }

    //ClearDescriptionField
    clearDescription() {
        cy.xpath("//textarea[@name='description']").clear();
    }


    //CreateButtton
    clickCreateBtn() {
        cy.xpath("//button[contains(.,'Create')]").click();
    }

    //UpdateButton
    clickUpdateBtn() {
        cy.xpath("//button[contains(.,'Update')]").click();
    }

    //SubmitUpdateButton
    submitUpdateBtn() {
        cy.xpath("//button[text()='Update']").click();
    }

    //DeleteButton
    // Deletes the item stored in @createdItemName
    deleteCreatedItem() {
        cy.get('@createdItemName').then((itemName) => {
            cy.contains('h4', itemName, { matchCase: false }) // Find the h4 with item name
                .parents('.w-96.bg-slate-500')                // Traverse to the item card
                .within(() => {
                    cy.contains('button', 'Delete', { matchCase: false }).click(); // Click Delete in that card
                });
        });
    }

    clickUpdateCreatedItem() {
        cy.get('@createdItemName').then((itemName) => {
            cy.contains('h4', itemName, { matchCase: false }) // Find the h4 with item name
                .parents('.w-96.bg-slate-500')                // Traverse to the item card
                .within(() => {
                    cy.contains('button', 'Update', { matchCase: false }).click(); // Click Delete in that card
                });
        });
    }

    //Verify Item deleted successfully
    verifyItemDeleted() {
        cy.get('@createdItemName').then((itemName) => {
            cy.contains(itemName, { matchCase: false }).should('not.exist');
        });
    }

    deleteNonExistentItem(itemName) {
        cy.contains('h4', itemName, { matchCase: false }).should('not.exist');
    }

    //Assertion for Empty Title Field
    EmptyTitleFieldAssertion() {
        const expectederrormessage = "Title is required";

        cy.xpath("//small[contains(.,'Title is required')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }

    //Assertion for Empty Description Field
    EmptyDescriptionFieldAssertion() {
        const expectederrormessage = "Just add a few words";

        cy.xpath("//small[contains(.,'Just add a few words')]", { timeout: 30000 })
            .should('be.visible')
            .invoke('text')
            .then((actualMessage) => {
                expect(actualMessage.trim()).to.equal(expectederrormessage);
            });
    }


}
export default ItemPage;