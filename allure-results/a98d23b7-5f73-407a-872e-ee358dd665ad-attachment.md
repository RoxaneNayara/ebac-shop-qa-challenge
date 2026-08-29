# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:74:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('+5511998741582')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('+5511998741582')

```

```yaml
- banner:
    - 'button " Cart : R$0,00 0" [expanded]'
    - link "0":
        - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
    - list:
        - listitem:
            - text: 
            - link "Sign up":
                - /url: http://lojaebac.ebaconline.art.br/minha-conta/
        - listitem:
            - link "Login":
                - /url: http://lojaebac.ebaconline.art.br/minha-conta/
    - link "EBAC – Shop":
        - /url: http://lojaebac.ebaconline.art.br/
        - img "EBAC – Shop"
    - combobox:
        - option "Selecione uma categoria" [selected]
        - option "Clothing"
        - option "Men"
        - option "Bottoms"
        - option "Pants|Clothing"
        - option "Promotions"
        - option "Pants|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Erin Recommends|Clothing"
        - option "New Luma Yoga Collection|Clothing"
        - option "Collections"
        - option "Erin Recommends|Clothing"
        - option "Performance Fabrics|Clothing"
        - option "Shorts"
        - option "Shorts|Clothing"
        - option "Collections"
        - option "Erin Recommends|Clothing"
        - option "New Luma Yoga Collection|Clothing"
        - option "Performance Fabrics|Clothing"
        - option "Promotions"
        - option "Men Sale|Clothing"
        - option "Collections"
        - option "Erin Recommends|Clothing"
        - option "Tops"
        - option "Hoodies & Sweatshirts"
        - option "Hoodies & Sweatshirts|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Jackets"
        - option "Jackets|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Tanks"
        - option "Tanks|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Tees"
        - option "Tees|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Women"
        - option "Tops"
        - option "Bras & Tanks"
        - option "Bras & Tanks|Clothing"
        - option "Collections"
        - option "New Luma Yoga Collection|Clothing"
        - option "Collections"
        - option "Performance Fabrics|Clothing"
        - option "Promotions"
        - option "Women Sale|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Hoodies & Sweatshirts"
        - option "Hoodies & Sweatshirts|Clothing"
        - option "Collections"
        - option "Eco Friendly|Clothing"
        - option "Erin Recommends|Clothing"
        - option "New Luma Yoga Collection|Clothing"
        - option "Collections"
        - option "Erin Recommends|Clothing"
        - option "Performance Fabrics|Clothing"
        - option "Promotions"
        - option "Women Sale|Clothing"
        - option "Collections"
        - option "Performance Fabrics|Clothing"
        - option "Jackets"
        - option "Jackets|Clothing"
        - option "Collections"
        - option "New Luma Yoga Collection|Clothing"
        - option "Collections"
        - option "Erin Recommends|Clothing"
        - option "Performance Fabrics|Clothing"
        - option "Promotions"
        - option "Women Sale|Clothing"
        - option "Uncategorized"
    - paragraph: Selecione uma categoria
    - textbox "Enter your search ..."
    - button "Search "
    - heading " All Categories" [level=3]
    - navigation:
        - list:
            - listitem:
                - link "Home":
                    - /url: http://lojaebac.ebaconline.art.br/home/
            - listitem:
                - link "Comprar":
                    - /url: http://lojaebac.ebaconline.art.br/produtos/
            - listitem:
                - link "Blog":
                    - /url: "#"
            - listitem:
                - link "Categorias":
                    - /url: "#"
            - listitem:
                - link "Mais vendidos":
                    - /url: "#"
- list:
    - listitem:
        - link "Home":
            - /url: http://lojaebac.ebaconline.art.br
        - text: /
    - listitem: Checkout
- main:
    - heading "Pedido recebido" [level=1]
    - paragraph: Obrigado. Seu pedido foi recebido.
    - list:
        - listitem:
            - text: "Número do pedido:"
            - strong: "11236"
        - listitem:
            - text: "Data:"
            - strong: 28 de agosto de 2026
        - listitem:
            - text: "Total:"
            - strong: R$48,00
        - listitem:
            - text: "Método de pagamento:"
            - strong: Pagamento na entrega
    - paragraph: Pagar em dinheiro na entrega.
    - heading "Detalhes do pedido" [level=2]
    - table:
        - rowgroup:
            - row "Produto Total":
                - columnheader "Produto"
                - columnheader "Total"
        - rowgroup:
            - row "Cassia Funnel Sweatshirt - M, Orange × 1 R$48,00":
                - cell "Cassia Funnel Sweatshirt - M, Orange × 1":
                    - link "Cassia Funnel Sweatshirt - M, Orange":
                        - /url: http://lojaebac.ebaconline.art.br/product/cassia-funnel-sweatshirt/?attribute_size=M&attribute_color=Orange
                    - strong: × 1
                - cell "R$48,00"
        - rowgroup:
            - 'row "Subtotal: R$48,00"':
                - rowheader "Subtotal:"
                - cell "R$48,00"
            - 'row "Método de pagamento: Pagamento na entrega"':
                - rowheader "Método de pagamento:"
                - cell "Pagamento na entrega"
            - 'row "Total: R$48,00"':
                - rowheader "Total:"
                - cell "R$48,00"
- contentinfo
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class OrderPage {
  4  |   private readonly orderReceivedTitle: Locator;
  5  |   private readonly orderNumber: Locator;
  6  |   private readonly orderTotal: Locator;
  7  |   private readonly paymentMethod: Locator;
  8  |
  9  |   constructor(private readonly page: Page) {
  10 |     this.orderReceivedTitle = page.getByRole('heading', {
  11 |       name: 'Pedido recebido',
  12 |     });
  13 |
  14 |     this.orderNumber = page.locator(
  15 |       '.woocommerce-order-overview__order strong'
  16 |     );
  17 |
  18 |     this.orderTotal = page.locator(
  19 |       '.woocommerce-order-overview__total strong'
  20 |     );
  21 |
  22 |     this.paymentMethod = page.locator(
  23 |       '.woocommerce-order-overview__payment-method strong'
  24 |     );
  25 |   }
  26 |
  27 |   async expectOrderReceived(): Promise<void> {
  28 |     await expect(this.orderReceivedTitle).toBeVisible();
  29 |   }
  30 |
  31 |   async expectOrderNumber(): Promise<void> {
  32 |     await expect(this.orderNumber).toBeVisible();
  33 |     await expect(this.orderNumber).not.toBeEmpty();
  34 |   }
  35 |
  36 |   async expectOrderTotal(expectedTotal: string): Promise<void> {
  37 |     await expect(this.orderTotal).toContainText(expectedTotal);
  38 |   }
  39 |
  40 |   async expectPaymentMethod(expectedMethod: string): Promise<void> {
  41 |     await expect(this.paymentMethod).toContainText(expectedMethod);
  42 |   }
  43 |
  44 |   async expectProduct(
  45 |     productName: string,
  46 |     quantity: number
  47 |   ): Promise<void> {
  48 |     const row = this.page
  49 |       .locator('.woocommerce-table__line-item')
  50 |       .filter({ hasText: productName });
  51 |
  52 |     await expect(row).toBeVisible();
  53 |     await expect(row).toContainText(productName);
  54 |     await expect(row).toContainText(String(quantity));
  55 |   }
  56 |
  57 |   async expectCustomerContact(
  58 |     expectedPhone: string,
  59 |     expectedEmail: string
  60 |   ): Promise<void> {
  61 |     await expect(
  62 |       this.page.getByText(expectedPhone, { exact: false })
> 63 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  64 |
  65 |     await expect(
  66 |       this.page.getByText(expectedEmail, { exact: true })
  67 |     ).toBeVisible();
  68 |   }
  69 | }
```
