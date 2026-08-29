# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:74:7

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#place_order')

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
                            - strong [ref=f4e94]: "11231"
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
  19  |   private readonly cashOnDelivery: Locator;
  20  |
  21  |   private readonly terms: Locator;
  22  |   private readonly placeOrderButton: Locator;
  23  |   private readonly checkoutOverlay: Locator;
  24  |
  25  |   constructor(private readonly page: Page) {
  26  |     // Billing
  27  |     this.firstName = page.locator('#billing_first_name');
  28  |     this.lastName = page.locator('#billing_last_name');
  29  |     this.company = page.locator('#billing_company');
  30  |     this.country = page.locator('#billing_country');
  31  |     this.address = page.locator('#billing_address_1');
  32  |     this.city = page.locator('#billing_city');
  33  |     this.state = page.locator('#billing_state');
  34  |     this.postcode = page.locator('#billing_postcode');
  35  |     this.phone = page.locator('#billing_phone');
  36  |     this.email = page.locator('#billing_email');
  37  |     this.orderComments = page.locator('#order_comments');
  38  |
  39  |     // Payment
  40  |     this.bankTransfer = page.locator('#payment_method_bacs');
  41  |     this.cheque = page.locator('#payment_method_cheque');
  42  |     this.cashOnDelivery = page.locator('#payment_method_cod');
  43  |
  44  |     // Terms and order
  45  |     this.terms = page.locator('#terms');
  46  |     this.placeOrderButton = page.locator('#place_order');
  47  |
  48  |     // WooCommerce processing overlay
  49  |     this.checkoutOverlay = page.locator('.blockUI.blockOverlay');
  50  |   }
  51  |
  52  |   private async waitForCheckoutReady(): Promise<void> {
  53  |     await this.checkoutOverlay
  54  |       .waitFor({
  55  |         state: 'detached',
  56  |         timeout: 10_000,
  57  |       })
  58  |       .catch(() => {});
  59  |   }
  60  |
  61  |   async fillBillingDetails(customer: Customer): Promise<void> {
  62  |     await this.firstName.fill(customer.firstName);
  63  |     await this.lastName.fill(customer.lastName);
  64  |     await this.company.fill(customer.company);
  65  |
  66  |     await this.country.selectOption({
  67  |       label: customer.country,
  68  |     });
  69  |
  70  |     await this.address.fill(customer.address);
  71  |     await this.city.fill(customer.city);
  72  |
  73  |     await this.state.selectOption({
  74  |       label: customer.state,
  75  |     });
  76  |
  77  |     await this.postcode.fill(customer.postcode);
  78  |     await this.phone.fill(customer.phone);
  79  |     await this.email.fill(customer.email);
  80  |
  81  |     await this.waitForCheckoutReady();
  82  |   }
  83  |
  84  |   async selectBankTransfer(): Promise<void> {
  85  |     await this.bankTransfer.check();
  86  |     await expect(this.bankTransfer).toBeChecked();
  87  |     await this.waitForCheckoutReady();
  88  |   }
  89  |
  90  |   async selectCheque(): Promise<void> {
  91  |     await this.cheque.check();
  92  |     await expect(this.cheque).toBeChecked();
  93  |     await this.waitForCheckoutReady();
  94  |   }
  95  |
  96  |   async selectCashOnDelivery(): Promise<void> {
  97  |     await this.cashOnDelivery.check();
  98  |     await expect(this.cashOnDelivery).toBeChecked();
  99  |     await this.waitForCheckoutReady();
  100 |   }
  101 |
  102 |   async acceptTerms(): Promise<void> {
  103 |     await this.terms.check();
  104 |     await expect(this.terms).toBeChecked();
  105 |   }
  106 |
  107 |   async addOrderNote(note: string): Promise<void> {
  108 |     await this.orderComments.fill(note);
  109 |   }
  110 |
  111 |   async placeOrder(): Promise<void> {
  112 |     await this.waitForCheckoutReady();
  113 |
  114 |     await Promise.all([
  115 |       this.page.waitForURL(
  116 |         /\/checkout\/order-received\/\d+\//,
  117 |         { timeout: 15_000 }
  118 |       ),
> 119 |       this.placeOrderButton.click(),
      |                             ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  120 |     ]);
  121 |   }
  122 | }
```
