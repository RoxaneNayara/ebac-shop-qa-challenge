import { expect, test } from "@playwright/test";

import { registeredCustomer } from "../../data/customers";
import { products } from "../../data/products";

import { CartPage } from "../../pages/cart.page";
import { CheckoutPage } from "../../pages/checkout.page";
import { HomePage } from "../../pages/home.page";
import { LoginPage } from "../../pages/login.page";
import { OrderPage } from "../../pages/order.page";
import { OrdersPage } from "../../pages/orders.page";
import { ProductPage } from "../../pages/product.page";

const product = products.cassiaFunnelSweatshirt;

const paymentMethod = "Pagamento na entrega";

const cartProductName = `${product.name} - ${product.size}, ${product.color}`;

const unitPrice = `R$${product.unitPrice.toFixed(2).replace(".", ",")}`;

const initialTotal = `R$${(product.unitPrice * product.initialQuantity)
  .toFixed(2)
  .replace(".", ",")}`;

const finalTotal = `R$${(product.unitPrice * product.finalQuantity)
  .toFixed(2)
  .replace(".", ",")}`;

test.describe("Fluxo de compra E2E", () => {
  test("deve realizar o fluxo completo de compra com alteração de quantidade e pagamento na entrega", async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderPage = new OrderPage(page);
    const ordersPage = new OrdersPage(page);

    await test.step("Autenticar cliente cadastrado", async () => {
      await page.goto("/minha-conta/");

      await loginPage.login(
        registeredCustomer.username,
        registeredCustomer.password,
      );

      await loginPage.expectLoggedIn(registeredCustomer.username);
    });

    await test.step("Acessar a loja e selecionar o produto", async () => {
      await homePage.goToHome();
      await homePage.goToShop();

      await homePage.searchProduct(product.name);

      await homePage.expectProductPage(product.slug);
    });

    await test.step("Selecionar as variações e adicionar ao carrinho", async () => {
      await productPage.selectSize(product.size);

      await productPage.selectColor(product.color);

      await productPage.addToCart();

      await productPage.expectProductAdded(product.name);
    });

    await test.step("Validar o produto no carrinho", async () => {
      await page.goto("/carrinho/");

      await cartPage.expectProduct(
        cartProductName,
        unitPrice,
        product.initialQuantity,
        initialTotal,
      );

      await cartPage.expectCartSubtotal(initialTotal);

      await cartPage.expectCartTotal(initialTotal);
    });

    await test.step("Alterar a quantidade e validar o recálculo", async () => {
      await cartPage.increaseQuantity(cartProductName);

      await cartPage.expectQuantity(cartProductName, product.finalQuantity);

      await cartPage.expectProduct(
        cartProductName,
        unitPrice,
        product.finalQuantity,
        finalTotal,
      );

      await cartPage.expectCartSubtotal(finalTotal);

      await cartPage.expectCartTotal(finalTotal);
    });

    await test.step("Realizar o checkout e validar a integração com o backend", async () => {
      await cartPage.proceedToCheckout();

      await checkoutPage.fillBillingDetails(registeredCustomer);

      await checkoutPage.selectCashOnDelivery();
      await checkoutPage.acceptTerms();

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

      await orderPage.expectPaymentMethod(paymentMethod);

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
        paymentMethod,
      );
    });
  });
});
