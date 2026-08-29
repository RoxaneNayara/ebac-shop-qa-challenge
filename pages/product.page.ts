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
    await this.page.getByRole("button", { name: "Comprar" }).click();
  }

  async expectProductAdded(productName: string): Promise<void> {
    await expect(
      this.page.getByText(
        new RegExp(`${productName}.*adicionado no seu carrinho`, "i"),
      ),
    ).toBeVisible();
  }
}
