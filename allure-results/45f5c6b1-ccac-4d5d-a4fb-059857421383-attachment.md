# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:12:7

# Error details

```
Error: expect(locator).toHaveClass(expected) failed

Locator: locator('[role="radio"][data-value="M"]')
Expected pattern: /selected/
Received string:  "variable-item button-variable-item button-variable-item-M"
Timeout: 5000ms

Call log:
  - Expect "toHaveClass" with timeout 5000ms
  - waiting for locator('[role="radio"][data-value="M"]')
    - locator resolved to <li title="M" role="radio" tabindex="0" data-title="M" data-value="M" data-wvstooltip="M" aria-checked="false" class="variable-item button-variable-item button-variable-item-M ">…</li>
    - unexpected value "variable-item button-variable-item button-variable-item-M "
    13 × locator resolved to <li title="M" role="radio" tabindex="0" data-title="M" data-value="M" data-wvstooltip="M" aria-checked="false" class="variable-item button-variable-item button-variable-item-M">…</li>
       - unexpected value "variable-item button-variable-item button-variable-item-M"

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
> 20 |     await expect(sizeOption).toHaveClass(/selected/);
     |                              ^ Error: expect(locator).toHaveClass(expected) failed
  21 |   }
  22 |
  23 |   async selectColor(color: string): Promise<void> {
  24 |     const colorOption = this.page.locator(
  25 |       `[role="radio"][data-value="${color}"]`
  26 |     );
  27 |
  28 |     await expect(colorOption).toBeVisible();
  29 |
  30 |     await colorOption.click();
  31 |
  32 |     await expect(colorOption).toHaveClass(/selected/);
  33 |   }
  34 |
  35 |   async addToCart(): Promise<void> {
  36 |     await this.page
  37 |       .getByRole('button', { name: 'Comprar' })
  38 |       .click();
  39 |   }
  40 |
  41 |   async expectVariationSelected(value: string): Promise<void> {
  42 |     const variation = this.page.locator(
  43 |       `[role="radio"][data-value="${value}"]`
  44 |     );
  45 |
  46 |     await expect(variation).toHaveClass(/selected/);
  47 |   }
  48 |
  49 |   async expectProductAdded(productName: string): Promise<void> {
  50 |     await expect(
  51 |       this.page.getByText(
  52 |         new RegExp(`${productName}.*adicionado no seu carrinho`, 'i')
  53 |       )
  54 |     ).toBeVisible();
  55 |   }
  56 | }
```
