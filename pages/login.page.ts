import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
  private readonly loggedUserArea: Locator;

  constructor(page: Page) {
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.loginButton = page.locator('input[name="login"]');
    this.loggedUserArea = page.locator("#tbay-topbar");
  }

  async login(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async expectLoggedIn(username: string): Promise<void> {
    await expect(this.loggedUserArea).toBeVisible();

    await expect(this.loggedUserArea).toContainText(username, {
      timeout: 10_000,
    });

    await expect(this.loggedUserArea).toContainText(/logout/i);
  }
}
