# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:74:7

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "5511998741582"
Received string:    "000001123728202648001480048004800"
```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
    - generic [ref=f4e2]:
        - text:           
        - banner [ref=f4e3]:
            - generic [ref=f4e7]:
                - generic [ref=f4e8]:
                    - 'button " Cart : R$0,00 0" [expanded] [ref=f4e12] [cursor=pointer]':
                        - generic [ref=f4e13]: 
                        - generic [ref=f4e15]:
                            - text: "Cart :"
                            - generic [ref=f4e16]: R$0,00
                        - generic [ref=f4e18]: "0"
                    - link "0" [ref=f4e20] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
                        - generic [ref=f4e21]: 
                - list [ref=f4e23]:
                    - listitem [ref=f4e24]:
                        - generic [ref=f4e25]: 
                        - link "Sign up" [ref=f4e26] [cursor=pointer]:
                            - /url: http://lojaebac.ebaconline.art.br/minha-conta/
                    - listitem [ref=f4e27]:
                        - link "Login" [ref=f4e28] [cursor=pointer]:
                            - /url: http://lojaebac.ebaconline.art.br/minha-conta/
            - generic [ref=f4e32]:
                - link [ref=f4e35] [cursor=pointer]:
                    - /url: http://lojaebac.ebaconline.art.br/
                    - img "EBAC – Shop" [ref=f4e36]
                - generic [ref=f4e41]:
                    - generic [ref=f4e43]:
                        - combobox [ref=f4e44] [cursor=pointer]:
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
                        - paragraph [ref=f4e45]:
                            - generic [ref=f4e46] [cursor=pointer]: Selecione uma categoria
                    - textbox "Enter your search ..." [ref=f4e49]
                    - button "Search " [ref=f4e51] [cursor=pointer]:
                        - text: Search
                        - generic [ref=f4e52]: 
                    - generic [ref=f4e53] [cursor=pointer]
            - generic [ref=f4e55]:
                - generic [ref=f4e57]:
                    - heading " All Categories" [level=3] [ref=f4e58] [cursor=pointer]
                    - text:     
                - navigation [ref=f4e59]:
                    - list [ref=f4e61]:
                        - listitem [ref=f4e62]:
                            - link "Home" [ref=f4e63] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/home/
                        - listitem [ref=f4e65]:
                            - link "Comprar" [ref=f4e66] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/
                                - generic [ref=f4e67]: 
                                - text: Comprar
                        - listitem [ref=f4e68]:
                            - link "Blog" [ref=f4e69] [cursor=pointer]:
                                - /url: "#"
                        - listitem [ref=f4e71]:
                            - link "Categorias" [ref=f4e72] [cursor=pointer]:
                                - /url: "#"
                        - listitem [ref=f4e73]:
                            - link "Mais vendidos" [ref=f4e74] [cursor=pointer]:
                                - /url: "#"
        - generic [ref=f4e75]:
            - list [ref=f4e79]:
                - listitem [ref=f4e80]:
                    - link "Home" [ref=f4e81] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br
                    - text: /
                - listitem [ref=f4e82]: Checkout
            - main [ref=f4e86]:
                - heading "Pedido recebido" [level=1] [ref=f4e88]
                - generic [ref=f4e90]:
                    - paragraph [ref=f4e91]: Obrigado. Seu pedido foi recebido.
                    - list [ref=f4e92]:
                        - listitem [ref=f4e93]:
                            - text: "Número do pedido:"
                            - strong [ref=f4e94]: "11237"
                        - listitem [ref=f4e95]:
                            - text: "Data:"
                            - strong [ref=f4e96]: 28 de agosto de 2026
                        - listitem [ref=f4e97]:
                            - text: "Total:"
                            - strong [ref=f4e98]:
                                - generic [ref=f4e99]: R$48,00
                        - listitem [ref=f4e101]:
                            - text: "Método de pagamento:"
                            - strong [ref=f4e102]: Pagamento na entrega
                    - paragraph [ref=f4e103]: Pagar em dinheiro na entrega.
                    - generic [ref=f4e104]:
                        - heading "Detalhes do pedido" [level=2] [ref=f4e105]
                        - table [ref=f4e106]:
                            - rowgroup [ref=f4e107]:
                                - row [ref=f4e108]:
                                    - columnheader "Produto" [ref=f4e109]
                                    - columnheader "Total" [ref=f4e110]
                            - rowgroup [ref=f4e111]:
                                - row [ref=f4e112]:
                                    - cell [ref=f4e113]:
                                        - link "Cassia Funnel Sweatshirt - M, Orange" [ref=f4e114] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/cassia-funnel-sweatshirt/?attribute_size=M&attribute_color=Orange
                                        - strong [ref=f4e115]: × 1
                                    - cell "R$48,00" [ref=f4e116]
                            - rowgroup [ref=f4e119]:
                                - row [ref=f4e120]:
                                    - rowheader "Subtotal:" [ref=f4e121]
                                    - cell "R$48,00" [ref=f4e122]
                                - row [ref=f4e124]:
                                    - rowheader "Método de pagamento:" [ref=f4e125]
                                    - cell "Pagamento na entrega" [ref=f4e126]
                                - row [ref=f4e127]:
                                    - rowheader "Total:" [ref=f4e128]
                                    - cell "R$48,00" [ref=f4e129]
        - contentinfo
        - text:     
    - text: 
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
  61 |     const normalizedPhone = expectedPhone.replace(/\D/g, '');
  62 |
  63 |     const pageText = await this.page.locator('body').innerText();
  64 |     const normalizedPageText = pageText.replace(/\D/g, '');
  65 |
> 66 |     expect(normalizedPageText).toContain(normalizedPhone);
     |                                ^ Error: expect(received).toContain(expected) // indexOf
  67 |
  68 |     await expect(
  69 |       this.page.getByText(expectedEmail, { exact: true })
  70 |     ).toBeVisible();
  71 |   }
  72 | }
```
