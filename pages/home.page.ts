import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage {
  private readonly buyMenu: Locator;

  constructor(private readonly page: Page) {
    this.buyMenu = page.getByRole("link", {
      name: /comprar/i,
    });
  }

  async goToHome(): Promise<void> {
    await this.page.goto("/");
  }

  async goToShop(): Promise<void> {
    await this.buyMenu.click();

    await expect(this.page).toHaveURL(/\/produtos\/?/);
  }

  async searchProduct(productName: string): Promise<void> {
    const searchInput = this.page.locator('input[name="s"]:visible').first();

    const searchButton = this.page
      .locator("button.button-search:visible")
      .first();

    await expect(searchInput).toBeVisible();

    await searchInput.fill(productName);

    await expect(searchInput).toHaveValue(productName);

    await expect(searchButton).toBeVisible();

    await searchButton.click();

    await this.page.waitForLoadState("domcontentloaded");
  }

  async expectProductPage(productSlug: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(productSlug));
  }
}
