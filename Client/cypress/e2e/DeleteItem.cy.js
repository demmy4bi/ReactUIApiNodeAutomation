import ItemPage from "../PageObjects/ItemPage";

const itm = new ItemPage();
const now = new Date();
const formatted = now.toISOString().replace(/[:.]/g, '-');

describe('Delete Item Scenarios', () => {

    it('Should delete a new item and verify it is deleted', () => {
        cy.visit('/')
        cy.LoginUser();
        itm.clickAddNewItemBtn();
        itm.setItemName();
        itm.setItemDescription();
        itm.clickCreateBtn();

        // Snapshot before deletion
        cy.get('.item-card').first().screenshot(`Item-Before-Delete-${formatted}`);

        itm.verifyItemVisible();
        itm.deleteCreatedItem();
        itm.verifyItemDeleted();
    })

    it('Should not allow deletion of a non-existent item', () => {
        cy.visit('/')
        cy.LoginUser();
        const fakeItemName = 'Item-DoesNotExist123';
        itm.deleteNonExistentItem(fakeItemName);
    });

})