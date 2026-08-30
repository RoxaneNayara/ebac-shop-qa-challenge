import { expect, type Page } from "@playwright/test";

export class ProductPage {
  constructor(private readonly page: Page) {}

  async selectSize(size: string): Promise<void> {
    const sizeSelect = this.page.locator('select[name="attribute_size"]');

    await sizeSelect.selectOption({ value: size }, { force: true });

    await expect(sizeSelect).toHaveValue(size);
  }

  async selectColor(color: string): Promise<void> {
    const colorSelect = this.page.locator('select[name="attribute_color"]');

    await colorSelect.selectOption({ value: color }, { force: true });

    await expect(colorSelect).toHaveValue(color);
  }

  async addToCart(): Promise<void> {
    const variationId = this.page.locator('input[name="variation_id"]');

    const outOfStockMessage = this.page.getByText(/fora de estoque/i);

    const addToCartButton = this.page.getByRole("button", { name: "Comprar" });

    await expect(variationId).not.toHaveValue("", {
      timeout: 10_000,
    });

    await expect(variationId).not.toHaveValue("0", {
      timeout: 10_000,
    });

    await expect(outOfStockMessage).not.toBeVisible();

    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();

    await addToCartButton.click();
  }
}
