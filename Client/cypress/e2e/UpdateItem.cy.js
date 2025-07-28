import ItemPage from "../PageObjects/ItemPage";

const itm = new ItemPage();
const now = new Date();
const formatted = now.toISOString().replace(/[:.]/g, '-');

describe('Update Item Scenarios', () => {

    it('should reject invalid inputs, update item with valid data, and verify it is updated', () => {
        cy.visit('/')
        cy.LoginUser();
        itm.clickAddNewItemBtn();
        itm.setItemName();
        itm.setItemDescription();
        itm.clickCreateBtn();
        itm.verifyItemVisible();
        // Snapshot after creating item
        cy.get('.item-card').first().screenshot(`Item-Created-${formatted}`);

        itm.clickUpdateCreatedItem();

        // Snapshot update modal open
        cy.get('.update-form').screenshot(`Item-Update-Modal-Opened-${formatted}`);

        //Update with empty title field
        itm.clearItemName();
        itm.setItemDescription();
        itm.submitUpdateBtn();
        itm.EmptyTitleFieldAssertion();

        // Snapshot for empty title error
        cy.get('.update-form').screenshot(`Item-Update-EmptyTitle-${formatted}`);

        //Update with empty description field
        itm.setItemName();
        itm.clearDescription();
        itm.submitUpdateBtn();
        itm.EmptyDescriptionFieldAssertion();
        // Snapshot for empty description error
        cy.get('.update-form').screenshot(`Item-Update-EmptyDescription-${formatted}`);

        //Update with Valid Input
        itm.setItemName();
        itm.setItemDescription();
        itm.submitUpdateBtn();
        itm.verifyItemVisible();  //Verify data is updated

        // Final snapshot after successful update
        cy.get('.item-card').first().screenshot(`Item-Updated-${formatted}`);
    })

})