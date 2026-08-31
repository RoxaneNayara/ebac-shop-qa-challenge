import { expect, type Locator, type Page } from "@playwright/test";

import { formatBRL } from "../helpers/currency.helper";

export class OrderPage {
  private readonly orderReceivedTitle: Locator;
  private readonly orderNumber: Locator;
  private readonly orderTotal: Locator;
  private readonly paymentMethod: Locator;
  private readonly cart: Locator;
  private readonly cartAmount: Locator;
  private readonly cartItems: Locator;

  constructor(private readonly page: Page) {
    this.orderReceivedTitle = page.getByRole("heading", {
      name: "Pedido recebido",
    });

    this.orderNumber = page.locator(
      ".woocommerce-order-overview__order strong",
    );

    this.orderTotal = page.locator(".woocommerce-order-overview__total strong");

    this.paymentMethod = page.locator(
      ".woocommerce-order-overview__payment-method strong",
    );

    this.cart = page.locator(".pull-right.top-cart.hidden-xs");

    this.cartAmount = this.cart
      .locator(".sub-title")
      .locator(".woocommerce-Price-amount.amount");

    this.cartItems = this.cart.locator(".mini-cart-items");
  }

  async expectOrderReceived(): Promise<void> {
    await expect(this.orderReceivedTitle).toBeVisible();
  }

  async getOrderNumber(): Promise<string> {
    await expect(this.orderNumber).toBeVisible();

    const orderNumber = (await this.orderNumber.textContent())?.trim();

    if (!orderNumber || !/^\d+$/.test(orderNumber)) {
      throw new Error(`Número do pedido inválido: ${orderNumber}`);
    }

    return orderNumber;
  }

  async expectOrderTotal(expectedTotal: string): Promise<void> {
    await expect(this.orderTotal).toContainText(expectedTotal);
  }

  async expectPaymentMethod(expectedMethod: string): Promise<void> {
    await expect(this.paymentMethod).toContainText(expectedMethod);
  }

  async expectProduct(productName: string, quantity: number): Promise<void> {
    const row = this.page.locator(".woocommerce-table__line-item").filter({
      hasText: productName,
    });

    await expect(row).toBeVisible();
    await expect(row).toContainText(productName);
    await expect(row).toContainText(String(quantity));
  }

  async expectCartEmpty(): Promise<void> {
    await expect(this.cart).toBeVisible();

    await expect(this.cartItems).toHaveText("0");

    await expect(this.cartAmount).toContainText(formatBRL(0));
  }
}
