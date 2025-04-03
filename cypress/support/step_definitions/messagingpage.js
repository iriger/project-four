import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


import { MessagingPage } from "../../pages/messaging-page";
const messagingPage = new MessagingPage();


Given("User in on the Messaging API pricing page", () => {
	messagingPage.visitMessagingPage();
});

When("User scrolls to 'Pay as you go' section", () => {
    messagingPage.seePlanPayAsYouGoClick();
});
When("User selects 'Toll-Free' sender type tab by clicking on it", () => {
    messagingPage.tollFreeTabSelected();
});
Then("User sees that 'Service' table for 'Toll-Free' type is displayed", () => {
    messagingPage.servicesTollFree().should("be.visible");
});


When("User clicks on 'Country' button", () => {
    messagingPage.countryFilterClick();
    messagingPage.countryDropdown().should("be.visible");
});
When("User chooses any country from the dropdown menu by clicking on it", () => {
    messagingPage.countrySelected();
});
Then("Selected country is displayed on 'Country' button", () => {
    messagingPage.countrySelectedName().should("contain", "France");
});


When("User scrolls to FAQ section", () => {
	messagingPage.faqSection().scrollIntoView();
});
When("User clicks on any question", () => {
	messagingPage.selectQuestion();
});
Then("User sees the answer on this question", () => {
	messagingPage.answerSelectedQuestion().should("be.visible");
});

