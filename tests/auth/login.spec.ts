import { test } from "../../fixtures/test.fixture";

test.describe("Login", () => {
  // A asserção ocorre dentro de authFlow.loginAsRegisteredCustomer(),
  // que chama loginPage.expectLoggedIn() internamente.
  // eslint-disable-next-line playwright/expect-expect
  test("deve autenticar cliente cadastrado @smoke @auth", async ({
    authFlow,
  }) => {
    await authFlow.loginAsRegisteredCustomer();
  });
});
