import type { Page } from "@playwright/test";
import type { Customer } from "../data/customers";
import { CheckoutPage } from "../pages/checkout.page";

export class CheckoutFlow {
  private readonly checkoutPage: CheckoutPage;

  constructor(page: Page) {
    this.checkoutPage = new CheckoutPage(page);
  }

  async prepareCheckout(customer: Customer): Promise<void> {
    await this.checkoutPage.fillBillingDetails(customer);
    await this.checkoutPage.selectCashOnDelivery();
    await this.checkoutPage.acceptTerms();
  }
}
