import { test, expect } from "@playwright/test";

import { LoginPage } from "../../pages/login.page";
import { ProductPage } from "../../pages/product.page";
import { CartPage } from "../../pages/cart.page";
import { CheckoutPage } from "../../pages/checkout.page";

import { products } from "../../data/products";
import { registeredCustomer } from "../../data/customers";

const product = products.cassiaFunnelSweatshirt;

const cartProductName = `${product.name} - ${product.size}, ${product.color}`;

const REFERENCE_CHECKOUT_TIME_MS = 5_000;

test.describe("Performance - checkout", () => {
  test("deve finalizar o pedido em até 5 segundos @performance", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await test.step("Preparar carrinho e checkout", async () => {
      await page.goto("/minha-conta/");

      await loginPage.login(
        registeredCustomer.username,
        registeredCustomer.password,
      );

      await loginPage.expectLoggedIn(registeredCustomer.username);

      await page.goto(product.slug);

      await productPage.selectSize(product.size);
      await productPage.selectColor(product.color);
      await productPage.addToCart();

      await page.goto("/carrinho/");

      await cartPage.expectProduct(
        cartProductName,
        "R$48,00",
        product.initialQuantity,
        "R$48,00",
      );

      await cartPage.proceedToCheckout();

      await checkoutPage.fillBillingDetails(registeredCustomer);

      await checkoutPage.selectCashOnDelivery();
      await checkoutPage.acceptTerms();
    });

    await test.step("Medir tempo de processamento do pedido", async () => {
      const startTime = Date.now();

      await checkoutPage.placeOrder();

      const checkoutTime = Date.now() - startTime;

      console.log(`Tempo de processamento do checkout: ${checkoutTime} ms`);

      console.log(`Tempo de processamento do checkout: ${checkoutTime} ms`);

      test.info().annotations.push({
        type: "performance",
        description: `Checkout processado em ${checkoutTime} ms. Referência exploratória: ${REFERENCE_CHECKOUT_TIME_MS} ms.`,
      });

      if (checkoutTime > REFERENCE_CHECKOUT_TIME_MS) {
        console.warn(
          `⚠ Checkout acima da referência exploratória de ${REFERENCE_CHECKOUT_TIME_MS} ms: ${checkoutTime} ms`,
        );
      }

      await expect(page).toHaveURL(/\/checkout\/order-received\/\d+\//);
    });
  });
});
