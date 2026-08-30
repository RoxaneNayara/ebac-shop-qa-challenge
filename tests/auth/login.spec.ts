import { test } from "@playwright/test";

import { LoginPage } from "../../pages/login.page";
import { registeredCustomer } from "../../data/customers";

test.describe("Login", () => {
  test("deve autenticar cliente cadastrado @smoke @auth", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("/minha-conta/");

    await loginPage.login(
      registeredCustomer.username,
      registeredCustomer.password,
    );

    await loginPage.expectLoggedIn(registeredCustomer.username);
  });
});
