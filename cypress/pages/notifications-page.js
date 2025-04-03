export class NotificationsPage {
  notificationsTitle() {
    return cy.get(".c-iOVFXp > .c-PJLV");
  }
  productsSection() {
    return cy.get(".c-buvHyO.c-buvHyO-ibEXZBm-css").eq(2);
  }
  seeAllProductsLink() {
    return cy.get("#7It7SzWVavT8lcF5GFzvbz");
  }
  productsTitle() {
    return cy.get(".c-fGbiyG > .c-PJLV");
  }
logoHeader(){
  return cy.get('div.c-UazGY > [href="/"]');
}


  visitNotificationsPage() {
    cy.visit("/use-cases/customer-notifications-system");
  }
  seeAllProductsClick() {
    this.seeAllProductsLink().click();
  }
  logoHeaderClick(){
    this.logoHeader().click()
  }
}


