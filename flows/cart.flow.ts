import type { Page } from "@playwright/test";
import { CartPage } from "../pages/cart.page";

export class CartFlow {
  private readonly cartPage: CartPage;

  constructor(page: Page) {
    this.cartPage = new CartPage(page);
  }

  async prepareEmptyCart(): Promise<void> {
    await this.cartPage.clearCart();
  }
}
