# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:12:7

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator:  locator('[role="radio"][data-value="M"]')
Expected: "true"
Received: "false"
Timeout:  5000ms

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('[role="radio"][data-value="M"]')
    - locator resolved to <li title="M" role="radio" tabindex="0" data-title="M" data-value="M" data-wvstooltip="M" aria-checked="false" class="variable-item button-variable-item button-variable-item-M ">…</li>
    13 × unexpected value "false"
       - locator resolved to <li title="M" role="radio" tabindex="0" data-title="M" data-value="M" data-wvstooltip="M" aria-checked="false" class="variable-item button-variable-item button-variable-item-M">…</li>
    - unexpected value "false"

```

```yaml
- radio "M M"
```

# Test source

```ts
  1  | import { expect, type Page } from '@playwright/test';
  2  | import type { Product } from '../data/products';
  3  |
  4  | export class ProductPage {
  5  |   constructor(private readonly page: Page) {}
  6  |
  7  |   async open(product: Product): Promise<void> {
  8  |     await this.page.goto(product.slug);
  9  |   }
  10 |
  11 |   async selectSize(size: string): Promise<void> {
  12 |     const sizeOption = this.page.locator(
  13 |       `[role="radio"][data-value="${size}"]`
  14 |     );
  15 |
  16 |     await expect(sizeOption).toBeVisible();
  17 |
  18 |     await sizeOption.click();
  19 |
> 20 |     await expect(sizeOption).toHaveAttribute(
     |                              ^ Error: expect(locator).toHaveAttribute(expected) failed
  21 |       'aria-checked',
  22 |       'true'
  23 |     );
  24 |   }
  25 |
  26 |   async selectColor(color: string): Promise<void> {
  27 |     const colorOption = this.page.locator(
  28 |       `[role="radio"][data-value="${color}"]`
  29 |     );
  30 |
  31 |     await expect(colorOption).toBeVisible();
  32 |
  33 |     await colorOption.click();
  34 |
  35 |     await expect(colorOption).toHaveAttribute(
  36 |       'aria-checked',
  37 |       'true'
  38 |     );
  39 |   }
  40 |
  41 |   async addToCart(): Promise<void> {
  42 |     await this.page
  43 |       .getByRole('button', { name: 'Comprar' })
  44 |       .click();
  45 |   }
  46 |
  47 |   async expectVariationSelected(value: string): Promise<void> {
  48 |     await expect(
  49 |       this.page.locator(`[role="radio"][data-value="${value}"]`)
  50 |     ).toHaveAttribute('aria-checked', 'true');
  51 |   }
  52 |
  53 |   async expectProductAdded(productName: string): Promise<void> {
  54 |     await expect(
  55 |       this.page.getByText(
  56 |         new RegExp(`${productName}.*adicionado no seu carrinho`, 'i')
  57 |       )
  58 |     ).toBeVisible();
  59 |   }
  60 | }
```
