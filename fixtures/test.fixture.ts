import { test as base } from "@playwright/test";

import { AuthFlow } from "../flows/auth.flow";
import { CartFlow } from "../flows/cart.flow";
import { ProductFlow } from "../flows/product.flow";
import { CheckoutFlow } from "../flows/checkout.flow";

import { CartPage } from "../pages/cart.page";
import { CheckoutPage } from "../pages/checkout.page";
import { OrderPage } from "../pages/order.page";
import { OrdersPage } from "../pages/orders.page";

type TestFixtures = {
  authFlow: AuthFlow;
  cartFlow: CartFlow;
  productFlow: ProductFlow;
  checkoutFlow: CheckoutFlow;

  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  orderPage: OrderPage;
  ordersPage: OrdersPage;
};

export const test = base.extend<TestFixtures>({
  authFlow: async ({ page }, use) => {
    await use(new AuthFlow(page));
  },

  cartFlow: async ({ page }, use) => {
    await use(new CartFlow(page));
  },

  productFlow: async ({ page }, use) => {
    await use(new ProductFlow(page));
  },

  checkoutFlow: async ({ page }, use) => {
    await use(new CheckoutFlow(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },

  ordersPage: async ({ page }, use) => {
    await use(new OrdersPage(page));
  },
});

export { expect } from "@playwright/test";
