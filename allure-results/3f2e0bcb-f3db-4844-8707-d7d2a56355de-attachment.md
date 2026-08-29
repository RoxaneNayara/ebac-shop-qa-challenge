# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:95:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('tr.cart_item').filter({ has: locator('.product-name a').filter({ hasText: 'Cassia Funnel Sweatshirt - M, Orange' }) }).locator('input.qty')
Expected: "1"
Received: "2"
Timeout:  5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('tr.cart_item').filter({ has: locator('.product-name a').filter({ hasText: 'Cassia Funnel Sweatshirt - M, Orange' }) }).locator('input.qty')
    14 × locator resolved to <input min="0" step="1" max="79" size="4" value="2" title="Qty" type="number" placeholder="" inputmode="numeric" class="input-text qty text" name="cart[9315279a2db450632bfb9913444ef6a2][qty]"/>
       - unexpected value "2"

```

```yaml
- spinbutton "Qty": "2"
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class CartPage {
  4  |   constructor(private readonly page: Page) {}
  5  |
  6  |   private productRow(productName: string): Locator {
  7  |     return this.page
  8  |       .locator('tr.cart_item')
  9  |       .filter({
  10 |         has: this.page
  11 |           .locator('.product-name a')
  12 |           .filter({ hasText: productName }),
  13 |       });
  14 |   }
  15 |
  16 |   async expectProduct(
  17 |     productName: string,
  18 |     unitPrice: string,
  19 |     quantity: number,
  20 |     subtotal: string
  21 |   ): Promise<void> {
  22 |     const row = this.productRow(productName);
  23 |
  24 |     await expect(row.locator('.product-name a')).toContainText(productName);
  25 |     await expect(row.locator('.product-price')).toContainText(unitPrice);
  26 |     await expect(row.locator('input.qty')).toHaveValue(String(quantity));
  27 |     await expect(row.locator('.product-subtotal')).toContainText(subtotal);
  28 |   }
  29 |
  30 |   async setQuantity(
  31 |     productName: string,
  32 |     quantity: number
  33 |   ): Promise<void> {
  34 |     const row = this.productRow(productName);
  35 |
  36 |     await row.locator('input.qty').fill(String(quantity));
  37 |   }
  38 |
  39 |   async increaseQuantity(productName: string): Promise<void> {
  40 |     const row = this.productRow(productName);
  41 |
  42 |     await row.locator('input.plus').click();
  43 |   }
  44 |
  45 |   async decreaseQuantity(productName: string): Promise<void> {
  46 |     const row = this.productRow(productName);
  47 |
  48 |     await row.locator('input.minus').click();
  49 |   }
  50 |
  51 |   async expectQuantity(
  52 |     productName: string,
  53 |     quantity: number
  54 |   ): Promise<void> {
  55 |     const row = this.productRow(productName);
  56 |
> 57 |     await expect(row.locator('input.qty')).toHaveValue(String(quantity));
     |                                            ^ Error: expect(locator).toHaveValue(expected) failed
  58 |   }
  59 |
  60 |   async expectCartSubtotal(expectedSubtotal: string): Promise<void> {
  61 |     await expect(
  62 |       this.page.locator('.cart-subtotal')
  63 |     ).toContainText(expectedSubtotal);
  64 |   }
  65 |
  66 |   async expectCartTotal(expectedTotal: string): Promise<void> {
  67 |     await expect(
  68 |       this.page.locator('.order-total')
  69 |     ).toContainText(expectedTotal);
  70 |   }
  71 |
  72 |   async proceedToCheckout(): Promise<void> {
  73 |     await this.page
  74 |       .getByRole('link', { name: 'Concluir compra' })
  75 |       .click();
  76 |   }
  77 | }
```
