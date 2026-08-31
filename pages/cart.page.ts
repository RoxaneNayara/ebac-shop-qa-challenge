import { expect, type Locator, type Page } from "@playwright/test";

export class CartPage {
  constructor(private readonly page: Page) {}

  private productRow(productName: string): Locator {
    return this.page.locator("tr.cart_item").filter({
      has: this.page
        .locator(".product-name a")
        .filter({ hasText: productName }),
    });
  }

  async clearCart(): Promise<void> {
    await this.page.goto("/carrinho/");
    await this.page.waitForLoadState("domcontentloaded");

    const cartItems = this.page.locator("tr.cart_item");

    let remaining = await cartItems.count();

    while (remaining > 0) {
      const removeButton = cartItems.first().locator("a.remove");

      await expect(removeButton).toBeVisible();

      await removeButton.click();

      remaining -= 1;

      await expect(cartItems).toHaveCount(remaining, {
        timeout: 15_000,
      });
    }
  }

  async expectProduct(
    productName: string,
    size: string,
    color: string,
    unitPrice: string,
    quantity: number,
    subtotal: string,
  ): Promise<void> {
    const row = this.productRow(productName);

    await expect(row.locator(".product-name a")).toContainText(productName);

    await expect(row.locator(".product-name")).toContainText(size);

    await expect(row.locator(".product-name")).toContainText(color);

    await expect(row.locator(".product-price")).toContainText(unitPrice);

    await expect(row.locator("input.qty")).toHaveValue(String(quantity));

    await expect(row.locator(".product-subtotal")).toContainText(subtotal);
  }

  async increaseQuantity(productName: string): Promise<void> {
    const row = this.productRow(productName);

    await row.locator("input.plus").click();
  }

  async expectQuantity(productName: string, quantity: number): Promise<void> {
    const row = this.productRow(productName);

    await expect(row.locator("input.qty")).toHaveValue(String(quantity));
  }

  async expectCartSubtotal(expectedSubtotal: string): Promise<void> {
    await expect(this.page.locator(".cart-subtotal")).toContainText(
      expectedSubtotal,
    );
  }

  async expectCartTotal(expectedTotal: string): Promise<void> {
    await expect(this.page.locator(".order-total")).toContainText(
      expectedTotal,
    );
  }

  async proceedToCheckout(): Promise<void> {
    await this.page
      .getByRole("link", {
        name: "Concluir compra",
      })
      .click();
  }
}
