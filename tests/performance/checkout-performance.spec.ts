import { expect, test } from "../../fixtures/test.fixture";

import { registeredCustomer } from "../../data/customers";
import { products } from "../../data/products";

import { formatBRL } from "../../helpers/currency.helper";

const product = products.cassiaFunnelSweatshirt;

const unitPrice = formatBRL(product.unitPrice);

const initialTotal = formatBRL(product.unitPrice * product.initialQuantity);

const REFERENCE_CHECKOUT_TIME_MS = 5_000;

test.describe("Performance - checkout", () => {
  test("deve finalizar o pedido em até 5 segundos @performance", async ({
    page,
    authFlow,
    cartFlow,
    productFlow,
    checkoutFlow,
    cartPage,
    checkoutPage,
  }) => {
    await test.step("Preparar carrinho e checkout", async () => {
      await authFlow.loginAsRegisteredCustomer();

      await cartFlow.prepareEmptyCart();

      await productFlow.openProduct(product.name, product.slug);

      await productFlow.configureAndAddToCart(
        product.size,
        product.color,
        product.initialQuantity,
      );

      await page.goto("/carrinho/");

      await cartPage.expectProduct(
        product.name,
        product.size,
        product.color,
        unitPrice,
        product.initialQuantity,
        initialTotal,
      );

      await cartPage.proceedToCheckout();

      await checkoutFlow.prepareCheckout(registeredCustomer);
    });

    await test.step("Medir tempo de processamento do pedido", async () => {
      const startTime = Date.now();

      await checkoutPage.placeOrder();

      const checkoutTime = Date.now() - startTime;

      console.log(`Tempo de processamento do checkout: ${checkoutTime} ms`);

      test.info().annotations.push({
        type: "performance",
        description: `Checkout processado em ${checkoutTime} ms. Referência exploratória: ${REFERENCE_CHECKOUT_TIME_MS} ms.`,
      });

      // Decisão intencional: 5s é uma referência exploratória, não um SLA.
      // Ultrapassar gera warning informativo, não falha o teste (ver README).
      // eslint-disable-next-line playwright/no-conditional-in-test
      if (checkoutTime > REFERENCE_CHECKOUT_TIME_MS) {
        console.warn(
          `⚠ Checkout acima da referência exploratória de ${REFERENCE_CHECKOUT_TIME_MS} ms: ${checkoutTime} ms`,
        );
      }

      await expect(page).toHaveURL(/\/checkout\/order-received\/\d+\//);
    });
  });
});
