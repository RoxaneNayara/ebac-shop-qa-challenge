import { test, expect } from "../../fixtures/test.fixture";

test.describe("Segurança - controle de acesso ao pedido", () => {
  test("não deve permitir visualizar pedido sem autenticação @security", async ({
    page,
    authFlow,
    ordersPage,
  }) => {
    await authFlow.loginAsRegisteredCustomer();

    await ordersPage.openOrders();
    const orderNumber = await ordersPage.getFirstOrderNumber();

    await authFlow.logout();

    await page.goto(`/minha-conta/view-order/${orderNumber}/`);

    await expect(page.locator(".woocommerce-order-details")).toBeHidden();
    await expect(page.locator(".woocommerce-table__line-item")).toHaveCount(0);
    await expect(page.locator(".woocommerce-customer-details")).toHaveCount(0);
  });
});
