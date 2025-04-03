import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";

import { HomePage } from "../../pages/home-page";
import { PricingPage } from "../../pages/pricing-page";
import { SolutionsPage } from "../../pages/solutions-page";

const homePage = new HomePage();
const pricingPage = new PricingPage();
const solutionsPage = new SolutionsPage();

Given("User is on the main page", () => {
  homePage.visitHomePage();
});

When("User clicks on Pricing button in the header", () => {
  homePage.navigateToPricingPage();
});
Then("User sees title Pricing", () => {
  pricingPage.pricingPageTitle().should("have.text", "Pricing");
  pricingPage
    .pricingPageDescription()
    .should("contain.text", "Flexible, transparent");
});

When("User clicks on Products button in the header", () => {
  homePage.productsLinkClick();
});
Then("User sees that title Products changes colour from white to green", () => {
  homePage.productsButton().should("have.css", "color", "rgb(0, 227, 170)");
  homePage.productsModal().should("be.visible");
});

When("User clicks on Solutions button in the header", () => {
  homePage.solutionsButtonClick();
});
When("Modal with all solutions is displayed and visible", () => {
  homePage.solutionsModal().should("be.visible");
});
When("User clicks on See all solutions link at the bottom of modal", () => {
  homePage.allSolutionsLinkClick();
});
Then("User is redirected to Solutions page", () => {
  solutionsPage
    .solutionsTitle()
    .should("have.text", "Solutions for scaling your business");
});

When("User scrolls to Need more information section", () => {
  homePage.moreInfoSection().scrollIntoView();
});
When("User clicks on title of any article", () => {
  homePage.selectArtile();
});
Then(
  "User is redirected to the page of selected article and sees selected article title",
  () => {
    homePage
      .selectedArtileTitle()
      .should("contain.text", "How to improve customer");
  }
);

When("User scrolls to the footer", () => {
  homePage.footer().scrollIntoView();
});
When("User selects any link in the footer by clicking on it", () => {
  homePage.selectLinkFooter();
});
Then(
  "User is redirected to the appropriate page and sees the title of the page that matches to the chosen link",
  () => {
    homePage.selectedLinkFooterTitle().should("contain.text", "Privacy Policy");
  }
);
