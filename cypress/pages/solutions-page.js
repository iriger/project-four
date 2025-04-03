export class SolutionsPage {
  solutionsTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }
  useCasesButton() {
    return cy.get("#7nZfryiE5nWZ5TSwg6oaYx");
  }
  useCasesSectionTitle() {
    return cy.get(".c-kkaQeY > :nth-child(1) > .c-PJLV");
  }
  filterButton() {
    return cy.get("[id*='Rqdrdm']");
  }
  travelFilter() {
    return cy.get("input[name='Travel-and-hospitality']");
  }
  closeFilterIcon() {
    return cy.get(".PJLV.c-gruYud");
  }
  selectedFilterButton() {
    return cy.get("button[id*='Rqdrdm'] > .c-PJLV.c-ihLeEO");
  }
  accountNotificationsLink() {
    return cy.get(
      ":nth-child(1) > .c-ciZnv > .c-flfFMq > .c-ewUecD > .c-khZXrc > .c-PJLV-gxwHoW-noUnderline-false"
    );
  }

  solutionsPageVisit() {
    cy.visit("/solutions");
  }
  useCasesButtonClick() {
    this.useCasesButton().click();
  }
  filterButtonClick() {
    this.filterButton().click();
  }
  travelFilterSelected() {
    this.travelFilter().click();
  }
  closeFilter() {
    this.closeFilterIcon().click();
  }
  accountNotificationsClick() {
    this.accountNotificationsLink().click();
  }
}
