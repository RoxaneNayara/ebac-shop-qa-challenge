import { expect, type Locator, type Page } from "@playwright/test";

import { formatItemCount } from "../helpers/item-count.helper";

export class OrdersPage {
  private readonly ordersLink: Locator;
  private readonly ordersTable: Locator;

  constructor(private readonly page: Page) {
    this.ordersLink = page.locator(
      ".woocommerce-MyAccount-navigation-link--orders a",
    );

    this.ordersTable = page.locator(".woocommerce-orders-table");
  }

  async goToMyAccount(): Promise<void> {
    await this.page.goto("/minha-conta/");
  }

  async openOrders(): Promise<void> {
    await expect(this.ordersLink).toBeVisible();

    await this.ordersLink.click();

    await expect(this.page).toHaveURL(/\/minha-conta\/orders\/?$/);

    await expect(this.ordersTable).toBeVisible();
  }

  private orderRow(orderNumber: string): Locator {
    return this.ordersTable.locator("tbody tr").filter({
      has: this.page
        .locator(".woocommerce-orders-table__cell-order-number")
        .getByText(`#${orderNumber}`, {
          exact: true,
        }),
    });
  }

  async expectOrderListed(
    orderNumber: string,
    expectedTotal: string,
    expectedItems: number,
  ): Promise<void> {
    const row = this.orderRow(orderNumber);

    const totalCell = row.locator(
      ".woocommerce-orders-table__cell-order-total",
    );

    await expect(row).toBeVisible();

    await expect(
      row.locator(".woocommerce-orders-table__cell-order-number"),
    ).toContainText(`#${orderNumber}`);

    await expect(
      row.locator(".woocommerce-orders-table__cell-order-date"),
    ).not.toBeEmpty();

    await expect(
      row.locator(".woocommerce-orders-table__cell-order-status"),
    ).not.toBeEmpty();

    await expect(totalCell).toContainText(expectedTotal);

    await expect(totalCell).toContainText(formatItemCount(expectedItems));
  }

  async viewOrder(orderNumber: string): Promise<void> {
    const row = this.orderRow(orderNumber);

    await expect(row).toBeVisible();

    await row
      .getByRole("link", {
        name: /visualizar/i,
      })
      .click();

    await expect(this.page).toHaveURL(
      new RegExp(`/minha-conta/view-order/${orderNumber}/?$`),
    );
  }

  async expectOrderDetails(
    orderNumber: string,
    productName: string,
    quantity: number,
    expectedTotal: string,
    paymentMethod: string,
  ): Promise<void> {
    await expect(this.page.locator("h1.page-title")).toContainText(
      `#${orderNumber}`,
    );

    const orderDetails = this.page.locator(".woocommerce-order-details");

    await expect(orderDetails).toContainText(productName);

    await expect(orderDetails).toContainText(String(quantity));

    await expect(orderDetails).toContainText(expectedTotal);

    await expect(orderDetails).toContainText(paymentMethod);
  }

  async getFirstOrderNumber(): Promise<string> {
    const orderNumber = this.ordersTable
      .locator(".woocommerce-orders-table__cell-order-number a")
      .first();

    await expect(orderNumber).toBeVisible();

    const text = await orderNumber.textContent();

    if (!text) {
      throw new Error("Número do pedido não encontrado.");
    }

    return text.replace("#", "").trim();
  }
}
