import { expect, type Locator, type Page } from "@playwright/test";

import type { Customer } from "../data/customers";

export class CheckoutPage {
  private readonly firstName: Locator;
  private readonly lastName: Locator;
  private readonly company: Locator;
  private readonly country: Locator;
  private readonly address: Locator;
  private readonly city: Locator;
  private readonly state: Locator;
  private readonly postcode: Locator;
  private readonly phone: Locator;
  private readonly email: Locator;
  private readonly orderComments: Locator;

  private readonly bankTransfer: Locator;
  private readonly cheque: Locator;
  private readonly cashOnDelivery: Locator;

  private readonly terms: Locator;
  private readonly placeOrderButton: Locator;
  private readonly checkoutOverlay: Locator;

  constructor(private readonly page: Page) {
    this.firstName = page.locator("#billing_first_name");
    this.lastName = page.locator("#billing_last_name");
    this.company = page.locator("#billing_company");
    this.country = page.locator("#billing_country");
    this.address = page.locator("#billing_address_1");
    this.city = page.locator("#billing_city");
    this.state = page.locator("#billing_state");
    this.postcode = page.locator("#billing_postcode");
    this.phone = page.locator("#billing_phone");
    this.email = page.locator("#billing_email");
    this.orderComments = page.locator("#order_comments");

    this.bankTransfer = page.locator("#payment_method_bacs");

    this.cheque = page.locator("#payment_method_cheque");

    this.cashOnDelivery = page.locator("#payment_method_cod");

    this.terms = page.locator("#terms");
    this.placeOrderButton = page.locator("#place_order");

    this.checkoutOverlay = page.locator(".blockUI.blockOverlay");
  }

  private async waitForCheckoutReady(): Promise<void> {
    await expect(this.checkoutOverlay).toHaveCount(0, {
      timeout: 15_000,
    });
  }

  async fillBillingDetails(customer: Customer): Promise<void> {
    await this.firstName.fill(customer.firstName);
    await this.lastName.fill(customer.lastName);
    await this.company.fill(customer.company);

    await this.country.selectOption({
      label: customer.country,
    });

    await this.address.fill(customer.address);
    await this.city.fill(customer.city);

    await this.state.selectOption({
      label: customer.state,
    });

    await this.postcode.fill(customer.postcode);
    await this.phone.fill(customer.phone);
    await this.email.fill(customer.email);

    await this.waitForCheckoutReady();
  }

  async selectBankTransfer(): Promise<void> {
    await this.bankTransfer.check();
    await expect(this.bankTransfer).toBeChecked();

    await this.waitForCheckoutReady();
  }

  async selectCheque(): Promise<void> {
    await this.cheque.check();
    await expect(this.cheque).toBeChecked();

    await this.waitForCheckoutReady();
  }

  async selectCashOnDelivery(): Promise<void> {
    await this.cashOnDelivery.check();
    await expect(this.cashOnDelivery).toBeChecked();

    await this.waitForCheckoutReady();
  }

  async acceptTerms(): Promise<void> {
    await this.terms.check();
    await expect(this.terms).toBeChecked();
  }

  async addOrderNote(note: string): Promise<void> {
    await this.orderComments.fill(note);
  }

  async submitOrder(): Promise<void> {
    await this.waitForCheckoutReady();

    await this.placeOrderButton.click();
  }

  async placeOrder(): Promise<void> {
    await this.waitForCheckoutReady();

    await Promise.all([
      this.page.waitForURL(/\/checkout\/order-received\/\d+\//, {
        timeout: 15_000,
      }),
      this.placeOrderButton.click(),
    ]);
  }
}
