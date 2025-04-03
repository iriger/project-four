export class HomePage {
  pricingLink() {
    return cy.get("a > .c-ghTrAK > .c-swQxl");
  }
  productsLink() {
    return cy.get("#main-menu-content > button:first");
  }
  productsButton() {
    return cy.get("#main-menu-content > button:first > .c-swQxl");
  }
  productsModal() {
    return cy.get(".c-jLWzSx");
  }
  solutionsButton() {
    return cy.get("#main-menu-content > button").eq(1);
  }
  solutionsModal() {
    return cy.get(".c-jLWzSx");
  }
  allSolutionsLink() {
    return cy.get("#vlQzwhQtDzbGJZ28xmtRy > .c-EICMy > .c-gSgpnm");
  }
  moreInfoSection(){
    return cy.get('.c-gvjiJA > .c-jpDoWL');
  }
  selectedArtile(){
    return cy.get("[id*='ai-self-service-system']");
  }
  selectedArtileTitle(){
    return cy.get('.c-hfgiSY > :nth-child(3) > .c-PJLV')
  }
  footer(){
    return cy.get('.c-hfgiSY-ildsFlb-css');
  }
  selectedLinkFooter(){
    return cy.get(':nth-child(5) > .c-cTLmKz > :nth-child(4) > .c-fZcwcz');
  }
  selectedLinkFooterTitle(){
    return cy.get("h1.c-PJLV.c-fGbiyG.c-PJLV-cHtIMp-dark-false");
  }

  visitHomePage() {
    cy.visit("/");
  }
  navigateToPricingPage() {
    this.pricingLink().click();
  }
  productsLinkClick() {
    this.productsLink().click();
  }
  solutionsButtonClick() {
    this.solutionsButton().click();
  }
  allSolutionsLinkClick() {
    this.allSolutionsLink().click();
  }
  selectArtile(){
    this.selectedArtile().click();
  }
  selectLinkFooter(){
    this.selectedLinkFooter().click();
  }
}
