import ItemPage from "../PageObjects/ItemPage";

const itm = new ItemPage();
const now = new Date();
const formatted = now.toISOString().replace(/[:.]/g, '-');

describe('Create Item Scenarios', () => {

    it('should create a new item with valid inputs and verify it appears', () => {
        cy.visit('/')
        cy.LoginUser();
        itm.clickAddNewItemBtn();

        //SnapShot before filling the form
        cy.get('form').screenshot(`CreateItem-Form-Empty-${formatted}`);

        itm.setItemName();
        itm.setItemDescription();

        //SnapShot before submission

        cy.get('form').screenshot(`CreateItem-Form-Filled-${formatted}`);

        itm.clickCreateBtn();
        itm.verifyItemVisible();

        //SnapShot after item creation

        cy.get('.item-card').first().screenshot(`Item-Created-${formatted}`);

    })

    it('should not allow creating an item with an empty title field', () => {
        cy.visit('/')
        cy.LoginUser();
        itm.clickAddNewItemBtn();
        itm.setItemDescription();

        // Snapshot before clicking create
        cy.get('form').screenshot(`CreateItem-EmptyTitle-${formatted}`);

        itm.clickCreateBtn();
        itm.EmptyTitleFieldAssertion();

        // Snapshot error state
        cy.get('.error-message').screenshot(`CreateItem-TitleError-${formatted}`);
    })

    it('should not allow creating an item with an empty description field', () => {
        cy.visit('/')
        cy.LoginUser();
        itm.clickAddNewItemBtn();
        itm.setItemName();

        // Snapshot before clicking create
        cy.get('form').screenshot(`CreateItem-EmptyDescription-${formatted}`);

        itm.clickCreateBtn();
        itm.EmptyDescriptionFieldAssertion();

        // Snapshot error state
        cy.get('.error-message').screenshot(`CreateItem-DescriptionError-${formatted}`);
    })


})