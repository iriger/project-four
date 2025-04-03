import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


import { NotificationsPage } from "../../pages/notifications-page";
const notificationsPage = new NotificationsPage();

Given("User is on the Account notifications page", () => {
	notificationsPage.visitNotificationsPage();
});

When("User scrolls to 'Products' section", () => {
    notificationsPage.productsSection().scrollIntoView();
});
When("User clicks on 'See all products' button", () => {
    notificationsPage.seeAllProductsClick();
});
Then("User is redirected to 'Products' page and sees title 'Your one-stop shop for distributed infrastructure.'", () => {
    notificationsPage.productsTitle().should("include.text", "one-stop shop");
});


When("User clicks on company logo on the right side of the header", () => {
	notificationsPage.logoHeaderClick();
});
Then("User is redirected to the home page", () => {
	cy.url().should("eq","https://telnyx.com/");
});
