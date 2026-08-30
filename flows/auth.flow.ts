import type { Page } from "@playwright/test";
import { registeredCustomer } from "../data/customers";
import { LoginPage } from "../pages/login.page";

export class AuthFlow {
  private readonly loginPage: LoginPage;

  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async loginAsRegisteredCustomer(): Promise<void> {
    await this.page.goto("/minha-conta/");

    await this.loginPage.login(
      registeredCustomer.username,
      registeredCustomer.password,
    );

    await this.loginPage.expectLoggedIn(registeredCustomer.username);
  }

  async logout(): Promise<void> {
    await this.loginPage.logout();
    await this.loginPage.expectLoggedOut();
  }
}
