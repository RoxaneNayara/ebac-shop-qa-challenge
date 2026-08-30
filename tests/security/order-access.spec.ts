import { test, expect } from "@playwright/test";

import { LoginPage } from "../../pages/login.page";
import { OrdersPage } from "../../pages/orders.page";
import { registeredCustomer } from "../../data/customers";

test.describe("Segurança - controle de acesso ao pedido", () => {
  test("não deve permitir visualizar pedido sem autenticação @security", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const ordersPage = new OrdersPage(page);

    await page.goto("/minha-conta/");

    await loginPage.login(
      registeredCustomer.username,
      registeredCustomer.password,
    );

    await loginPage.expectLoggedIn(registeredCustomer.username);

    await ordersPage.openOrders();

    const orderNumber = await ordersPage.getFirstOrderNumber();

    await loginPage.logout();

    await loginPage.expectLoggedOut();

    await page.goto(`/minha-conta/view-order/${orderNumber}/`);

    await expect(page.locator(".woocommerce-order-details")).not.toBeVisible();

    await expect(page.locator(".woocommerce-table__line-item")).toHaveCount(0);

    await expect(page.locator(".woocommerce-customer-details")).toHaveCount(0);
  });
});
