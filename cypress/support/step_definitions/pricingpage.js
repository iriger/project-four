import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";


import { PricingPage } from "../../pages/pricing-page";
import { MessagingPage } from "../../pages/messaging-page";
const pricingPage = new PricingPage();
const messagingPage = new MessagingPage();

Given("User in on the Pricing page",()=>{
    pricingPage.visitPricingPage();
})

Then ("Users sees the first section with title Pay as you go with green background colour", ()=>{
    pricingPage
    .firstSection()
    .should("have.css", "background-color", "rgba(0, 227, 170, 0.95)");
  pricingPage.firstSectionTitle().should("have.text", "Pay as you go");
})
Then ("User sees the second section with title Volume-based pricing with white background colour", ()=>{
    pricingPage
      .secondSection()
      .should("have.css", "background-color", "rgb(254, 253, 245)");
    pricingPage
      .secondSectionTitle()
      .should("have.text", "Volume-based pricing");
})

When("User scrolls to Enjoy all the benefits sections", () => {
  pricingPage
  .allBenefitsSection()
  .scrollIntoView()
  .should("include.text", "benefits");
});
Then("User sees three blocks in the section with titles 'Free in-house support', 'Portal access', 'Automatic discounts'", () => {
  pricingPage.allBenefitsBlocks().should("have.length", 3);
  pricingPage
    .firstBenefitBlockTitle()
    .should("include.text", "Free in-house support");
  pricingPage
    .secondBenefitBlockTitle()
    .should("include.text", "Portal access");
  pricingPage
    .thirdBenefitBlockTitle()
    .should("include.text", "Automatic discounts");
});

When("User scrolls to Communications section", () => {
  pricingPage
  .communicationsSection()
  .scrollIntoView()
  .should("have.text", "Communications");
});
When("User chooses any Communications option by clicking on it", () => {
  pricingPage.messagingApiSelect();
});
Then("User is redirected to Messaging API page and sees title Messaging API pricing", () => {
  messagingPage.messagingPageTitle().should("include.text", "API pricing");
});

