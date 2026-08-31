import { expect, type Page } from "@playwright/test";

export class ProductPage {
  constructor(private readonly page: Page) {}

  async expectSufficientStock(minimumQuantity: number): Promise<void> {
    const stockLabel = this.page.locator("p.stock.in-stock:visible").first();

    await expect(stockLabel).toBeVisible({ timeout: 10_000 });

    const stockText = (await stockLabel.textContent()) ?? "";
    const match = stockText.match(/(\d+)/);
    const availableStock = match ? Number(match[1]) : 0;

    if (availableStock < minimumQuantity) {
      throw new Error(
        `Estoque insuficiente para executar o teste: ${availableStock} unidade(s) disponível(is), ${minimumQuantity} necessária(s). Isso é uma condição do ambiente compartilhado, não uma falha da automação.`,
      );
    }
  }

  async selectSize(size: string): Promise<void> {
    const sizeSelect = this.page.locator('select[name="attribute_size"]');

    // Necessário: o DOM mantém elementos duplicados das versões responsivas
    // do layout (ver README).
    // eslint-disable-next-line playwright/no-force-option
    await sizeSelect.selectOption({ value: size }, { force: true });

    await expect(sizeSelect).toHaveValue(size);
  }

  async selectColor(color: string): Promise<void> {
    const colorSelect = this.page.locator('select[name="attribute_color"]');

    // Necessário: o DOM mantém elementos duplicados das versões responsivas
    // do layout (ver README).
    // eslint-disable-next-line playwright/no-force-option
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

    await expect(outOfStockMessage).toBeHidden();

    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();

    await addToCartButton.click();
  }
}
