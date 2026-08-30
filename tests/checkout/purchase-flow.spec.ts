import { expect, test } from "../../fixtures/test.fixture";

import { registeredCustomer } from "../../data/customers";
import { paymentMethods } from "../../data/payment-methods";
import { products } from "../../data/products";

import { formatBRL } from "../../helpers/currency.helper";

const product = products.cassiaFunnelSweatshirt;

const cartProductName = `${product.name} - ${product.size}, ${product.color}`;

const unitPrice = formatBRL(product.unitPrice);

const initialTotal = formatBRL(product.unitPrice * product.initialQuantity);

const finalTotal = formatBRL(product.unitPrice * product.finalQuantity);

test.describe("Fluxo de compra E2E", () => {
  test("deve realizar o fluxo completo de compra com alteração de quantidade e pagamento na entrega @e2e", async ({
    page,
    authFlow,
    cartFlow,
    productFlow,
    checkoutFlow,
    cartPage,
    checkoutPage,
    orderPage,
    ordersPage,
  }) => {
    await test.step("Autenticar cliente cadastrado", async () => {
      await authFlow.loginAsRegisteredCustomer();
    });

    await test.step("Garantir carrinho vazio antes da jornada", async () => {
      await cartFlow.prepareEmptyCart();
    });

    await test.step("Acessar a loja e selecionar o produto", async () => {
      await productFlow.openProduct(product.name, product.slug);
    });

    await test.step("Configurar produto e adicionar ao carrinho", async () => {
      await productFlow.configureAndAddToCart(product.size, product.color);
    });

    await test.step("Validar o produto no carrinho", async () => {
      await page.goto("/carrinho/");

      await cartPage.expectProduct(
        product.name,
        product.size,
        product.color,
        unitPrice,
        product.initialQuantity,
        initialTotal,
      );

      await cartPage.expectCartSubtotal(initialTotal);
      await cartPage.expectCartTotal(initialTotal);
    });

    await test.step("Alterar a quantidade e validar o recálculo", async () => {
      await cartPage.increaseQuantity(product.name);

      await cartPage.expectQuantity(product.name, product.finalQuantity);

      await cartPage.expectProduct(
        product.name,
        product.size,
        product.color,
        unitPrice,
        product.finalQuantity,
        finalTotal,
      );

      await cartPage.expectCartSubtotal(finalTotal);
      await cartPage.expectCartTotal(finalTotal);
    });

    await test.step("Realizar o checkout e validar a integração com o backend", async () => {
      await cartPage.proceedToCheckout();

      await checkoutFlow.prepareCheckout(registeredCustomer);

      const checkoutResponsePromise = page.waitForResponse(
        (response) =>
          response.url().includes("wc-ajax=checkout") &&
          response.request().method() === "POST",
      );

      await checkoutPage.placeOrder();

      const checkoutResponse = await checkoutResponsePromise;

      expect(checkoutResponse.status()).toBe(200);
    });

    let orderNumber: string;

    await test.step("Validar a confirmação do pedido", async () => {
      await orderPage.expectOrderReceived();

      await orderPage.expectProduct(cartProductName, product.finalQuantity);

      await orderPage.expectOrderTotal(finalTotal);

      await orderPage.expectPaymentMethod(paymentMethods.cashOnDelivery);

      await orderPage.expectCartEmpty();

      orderNumber = await orderPage.getOrderNumber();
    });

    await test.step("Validar o pedido na área do cliente", async () => {
      await ordersPage.goToMyAccount();

      await ordersPage.openOrders();

      await ordersPage.expectOrderListed(
        orderNumber,
        finalTotal,
        product.finalQuantity,
      );

      await ordersPage.viewOrder(orderNumber);
    });

    await test.step("Validar os detalhes do pedido persistido", async () => {
      await ordersPage.expectOrderDetails(
        orderNumber,
        cartProductName,
        product.finalQuantity,
        finalTotal,
        paymentMethods.cashOnDelivery,
      );
    });
  });
});
