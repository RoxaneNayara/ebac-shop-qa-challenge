import type { Page } from "@playwright/test";
import { HomePage } from "../pages/home.page";
import { ProductPage } from "../pages/product.page";

export class ProductFlow {
  private readonly homePage: HomePage;
  private readonly productPage: ProductPage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.productPage = new ProductPage(page);
  }

  async openProduct(productName: string, productSlug: string): Promise<void> {
    await this.homePage.goToHome();
    await this.homePage.goToShop();
    await this.homePage.searchProduct(productName);
    await this.homePage.expectProductPage(productSlug);
  }

  async configureAndAddToCart(size: string, color: string): Promise<void> {
    await this.productPage.selectSize(size);
    await this.productPage.selectColor(color);
    await this.productPage.addToCart();
  }
}
