export class MessagingPage {
  messagingPageTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }
  seePlanPayAsYouGoButton() {
    return cy.get("#4Aleqhv3ifOe5enB5M89yI");
  }
  payAsYouGoSectionTitle() {
    return cy.get("#pay-as-you-go");
  }
  seePlanVolumeBasedButton() {
    return cy.get("#1wWhbQ2vAf1NeG3uaoEl4K");
  }
  volumeBasedSection() {
    return cy.get(".c-PJLV-kDbYnL-backgroundColor-black");
  }
  tollFreeTab() {
    return cy.get('[id$="-trigger-toll-free"]');
  }
  servicesTollFree() {
    return cy.get("#Services > .c-foWUMn > .c-gHhhyB");
  }
  shortCodeTab() {
    return cy.get('[id$="-trigger-short-code"]');
  }
  servicesShortCode() {
    return cy.get("#Services > :nth-child(1) > .c-gHhhyB");
  }
  countryFilterButton() {
    return cy.get("#country-filter");
  }
  countryDropdown() {
    return cy.get('[data-state="open"]');
  }
  countrySelection() {
    return cy.get('[role="option"]');
  }
  countrySelectedName() {
    return cy.get('[aria-label="Country"]');
  }
  currencyFilterButton() {
    return cy.get("#currency-filter");
  }
  currencyDropdown() {
    return cy.get('[data-state="open"]');
  }
  currencySelection() {
    return cy.get('[role="option"]');
  }
  currencySelectedName() {
    return cy.get('[aria-label="Currency"]');
  }
faqSection(){
  return cy.get("#faq-messaging");
}
selectedQuestion(){
  return cy.get("[id*='R2r7rdm'] > .c-lLVGP");
}
answerSelectedQuestion(){
  return cy.get("[id*='Rar7rdm'] > :nth-child(1)");
}

  visitMessagingPage() {
    cy.visit("/pricing/messaging");
  }
  seePlanPayAsYouGoClick() {
    this.seePlanPayAsYouGoButton().click();
  }
  seePlanVolumeBasedClick() {
    this.seePlanVolumeBasedButton().click();
  }
  tollFreeTabSelected() {
    this.tollFreeTab().click();
  }
  shortCodeTabSelected() {
    this.shortCodeTab().click();
  }
  countryFilterClick() {
    this.countryFilterButton().click();
  }
  countrySelected() {
    this.countrySelection().contains("France").click();
  }
  currencyFilterClick() {
    this.currencyFilterButton().click();
  }
  currencySelected() {
    this.currencySelection().contains("EUR").click();
  }
  selectQuestion(){
    this.selectedQuestion().click();
  }
}
