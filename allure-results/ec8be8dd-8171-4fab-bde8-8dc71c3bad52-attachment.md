# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:74:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.woocommerce-customer-details--phone')
Expected substring: "+5511998741582"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.woocommerce-customer-details--phone')

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
            - strong: "11233"
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
  8  |   private readonly phone: Locator;
  9  |   private readonly email: Locator;
  10 |
  11 |   constructor(private readonly page: Page) {
  12 |     this.orderReceivedTitle = page.getByRole('heading', {
  13 |       name: 'Pedido recebido',
  14 |     });
  15 |
  16 |     this.orderNumber = page.locator(
  17 |       '.woocommerce-order-overview__order strong'
  18 |     );
  19 |
  20 |     this.orderTotal = page.locator(
  21 |       '.woocommerce-order-overview__total strong'
  22 |     );
  23 |
  24 |     this.paymentMethod = page.locator(
  25 |       '.woocommerce-order-overview__payment-method strong'
  26 |     );
  27 |
  28 |     this.phone = page.locator(
  29 |       '.woocommerce-customer-details--phone'
  30 |     );
  31 |
  32 |     this.email = page.locator(
  33 |       '.woocommerce-customer-details--email'
  34 |     );
  35 |   }
  36 |
  37 |   async expectOrderReceived(): Promise<void> {
  38 |     await expect(this.orderReceivedTitle).toBeVisible();
  39 |   }
  40 |
  41 |   async expectOrderNumber(): Promise<void> {
  42 |     await expect(this.orderNumber).toBeVisible();
  43 |     await expect(this.orderNumber).not.toBeEmpty();
  44 |   }
  45 |
  46 |   async expectOrderTotal(expectedTotal: string): Promise<void> {
  47 |     await expect(this.orderTotal).toContainText(expectedTotal);
  48 |   }
  49 |
  50 |   async expectPaymentMethod(expectedMethod: string): Promise<void> {
  51 |     await expect(this.paymentMethod).toContainText(expectedMethod);
  52 |   }
  53 |
  54 |   async expectProduct(
  55 |     productName: string,
  56 |     quantity: number
  57 |   ): Promise<void> {
  58 |     const row = this.page
  59 |       .locator('.woocommerce-table__line-item')
  60 |       .filter({ hasText: productName });
  61 |
  62 |     await expect(row).toBeVisible();
  63 |     await expect(row).toContainText(productName);
  64 |     await expect(row).toContainText(String(quantity));
  65 |   }
  66 |
  67 |   async expectCustomerContact(
  68 |     expectedPhone: string,
  69 |     expectedEmail: string
  70 |   ): Promise<void> {
> 71 |     await expect(this.phone).toContainText(expectedPhone);
     |                              ^ Error: expect(locator).toContainText(expected) failed
  72 |     await expect(this.email).toContainText(expectedEmail);
  73 |   }
  74 | }
```
