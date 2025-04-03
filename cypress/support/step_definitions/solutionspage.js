import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

import { SolutionsPage } from "../../pages/solutions-page";
import { NotificationsPage } from "../../pages/notifications-page";
const solutionsPage = new SolutionsPage();
const notificationsPage = new NotificationsPage();

Given("User is on Solutions page", () => {
	solutionsPage.solutionsPageVisit();
});

When("User clicks on  See use cases button", () => {
	solutionsPage.useCasesButtonClick();
});
When("User clicks on Filter by button", () => {
	solutionsPage.filterButtonClick();
});
When("User selects any option from dropdown menu", () => {
	solutionsPage.travelFilterSelected();
});
When("User clicks on Close filter icon", () => {
	solutionsPage.closeFilter();
});
Then("User sees that button text changes to '1 filter selected'", () => {
	solutionsPage
	.selectedFilterButton()
	.should("have.text", "1 filter selected");
});

When("User clicks on  'See use cases' button", () => {
	solutionsPage.useCasesButtonClick();
});
When("User chooses any use case by clicking on 'See use case' link at the bottom of use case card", () => {
	solutionsPage.accountNotificationsClick();
});
Then("User is redirected to Account notifications page and sees title 'Account notifications'", () => {
	notificationsPage
	.notificationsTitle()
	.should("contain.text", "Account notifications");
});


