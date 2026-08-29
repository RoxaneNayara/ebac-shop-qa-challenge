# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:14:7

# Error details

```
Error: Produto visível não encontrado na busca: Cassia Funnel Sweatshirt
```

# Page snapshot

```yaml
- generic [ref=f7e1]:
    - generic [ref=f7e2]:
        - text:           
        - banner [ref=f7e3]:
            - generic [ref=f7e7]:
                - generic [ref=f7e8]:
                    - 'button " Cart : R$96,00 2" [expanded] [ref=f7e12] [cursor=pointer]':
                        - generic [ref=f7e13]: 
                        - generic [ref=f7e15]:
                            - text: "Cart :"
                            - generic [ref=f7e16]: R$96,00
                        - generic [ref=f7e18]: "2"
                    - link "0" [ref=f7e20] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
                        - generic [ref=f7e21]: 
                - list [ref=f7e23]:
                    - listitem [ref=f7e24]:
                        - link " Welcome luna.oliveira !" [ref=f7e25] [cursor=pointer]:
                            - /url: http://lojaebac.ebaconline.art.br/minha-conta/
                            - generic [ref=f7e26]: 
                            - text: Welcome luna.oliveira !
                    - listitem [ref=f7e27]:
                        - link "Logout" [ref=f7e28] [cursor=pointer]:
                            - /url: http://lojaebac.ebaconline.art.br/wp-login.php?action=logout&redirect_to=http%3A%2F%2Flojaebac.ebaconline.art.br&_wpnonce=df2b3007c4
            - generic [ref=f7e32]:
                - link [ref=f7e35] [cursor=pointer]:
                    - /url: http://lojaebac.ebaconline.art.br/
                    - img "EBAC – Shop" [ref=f7e36]
                - generic [ref=f7e41]:
                    - combobox [ref=f7e43] [cursor=pointer]:
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
                    - textbox "Enter your search ..." [active] [ref=f7e44]: Cassia Funnel Sweatshirt
                    - button "Search " [ref=f7e46] [cursor=pointer]:
                        - text: Search
                        - generic [ref=f7e47]: 
                    - generic [ref=f7e48] [cursor=pointer]
            - generic [ref=f7e50]:
                - generic [ref=f7e52]:
                    - heading " All Categories" [level=3] [ref=f7e53] [cursor=pointer]
                    - text:     
                - navigation [ref=f7e54]:
                    - list [ref=f7e56]:
                        - listitem [ref=f7e57]:
                            - link "Home" [ref=f7e58] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/home/
                        - listitem [ref=f7e60]:
                            - link "Comprar" [ref=f7e61] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/
                                - generic [ref=f7e62]: 
                                - text: Comprar
                        - listitem [ref=f7e63]:
                            - link "Blog" [ref=f7e64] [cursor=pointer]:
                                - /url: "#"
                        - listitem [ref=f7e66]:
                            - link "Categorias" [ref=f7e67] [cursor=pointer]:
                                - /url: "#"
                        - listitem [ref=f7e68]:
                            - link "Mais vendidos" [ref=f7e69] [cursor=pointer]:
                                - /url: "#"
        - generic [ref=f7e70]:
            - list [ref=f7e74]:
                - listitem [ref=f7e75]:
                    - link "Início" [ref=f7e76] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br
                - listitem [ref=f7e77]: / Produtos
            - generic [ref=f7e79]:
                - main [ref=f7e82]:
                    - heading "Produtos" [level=1] [ref=f7e83]
                    - list
                    - generic [ref=f7e84]:
                        - generic [ref=f7e85]:
                            - button "" [ref=f7e86] [cursor=pointer]
                            - button "" [ref=f7e88] [cursor=pointer]
                        - combobox "Pedido da loja" [ref=f7e91]:
                            - option "Ordenação padrão" [selected]
                            - option "Ordenar por popularidade"
                            - option "Ordenar por média de classificação"
                            - option "Ordenar por mais recente"
                            - 'option "Ordenar por preço: menor para maior"'
                            - 'option "Ordenar por preço: maior para menor"'
                    - generic [ref=f7e93]:
                        - generic [ref=f7e95]:
                            - figure [ref=f7e97]:
                                - generic: "-33%"
                                - link "[66665692] Produto Lgc2" [ref=f7e98] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                - generic [ref=f7e100]:
                                    - generic:
                                        - link "Adicionar “[66665692] Produto Lgc2” no seu carrinho":
                                            - /url: "?add-to-cart=10988"
                                            - generic: 
                                            - text: Comprar
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=10988"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=10988&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e103]:
                                - heading [level=3] [ref=f7e104]:
                                    - link "[66665692] Produto Lgc2" [ref=f7e105] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                - generic [ref=f7e106]:
                                    - generic [ref=f7e107]: sssss
                                    - generic [ref=f7e108]: (0)
                                - generic [ref=f7e109]:
                                    - deletion [ref=f7e110]:
                                        - generic [ref=f7e111]: R$1.500,00
                                    - insertion [ref=f7e113]:
                                        - generic [ref=f7e114]: R$1.000,00
                        - generic [ref=f7e117]:
                            - figure [ref=f7e119]:
                                - generic: "-33%"
                                - link "[73395368] Produto Lgc2" [ref=f7e120] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                - generic [ref=f7e122]:
                                    - generic:
                                        - link "Adicionar “[73395368] Produto Lgc2” no seu carrinho":
                                            - /url: "?add-to-cart=10987"
                                            - generic: 
                                            - text: Comprar
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=10987"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=10987&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e125]:
                                - heading [level=3] [ref=f7e126]:
                                    - link "[73395368] Produto Lgc2" [ref=f7e127] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                - generic [ref=f7e128]:
                                    - generic [ref=f7e129]: sssss
                                    - generic [ref=f7e130]: (0)
                                - generic [ref=f7e131]:
                                    - deletion [ref=f7e132]:
                                        - generic [ref=f7e133]: R$1.500,00
                                    - insertion [ref=f7e135]:
                                        - generic [ref=f7e136]: R$1.000,00
                        - generic [ref=f7e139]:
                            - figure [ref=f7e141]:
                                - link "Abominable Hoodie" [ref=f7e142] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
                                - generic [ref=f7e143]:
                                    - generic:
                                        - link "Selecione as opções para “Abominable Hoodie”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=2559"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=2559&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e146]:
                                - heading [level=3] [ref=f7e147]:
                                    - link "Abominable Hoodie" [ref=f7e148] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
                                - generic [ref=f7e149]:
                                    - generic [ref=f7e150]: sssss
                                    - generic [ref=f7e151]: (0)
                                - generic [ref=f7e152]: R$69,00
                        - generic [ref=f7e156]:
                            - figure [ref=f7e158]:
                                - link "Aero Daily Fitness Tee" [ref=f7e159] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
                                - generic [ref=f7e160]:
                                    - generic:
                                        - link "Selecione as opções para “Aero Daily Fitness Tee”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=3111"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=3111&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e163]:
                                - heading [level=3] [ref=f7e164]:
                                    - link "Aero Daily Fitness Tee" [ref=f7e165] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
                                - generic [ref=f7e166]:
                                    - generic [ref=f7e167]: sssss
                                    - generic [ref=f7e168]: (0)
                                - generic [ref=f7e169]: R$24,00
                        - generic [ref=f7e173]:
                            - figure [ref=f7e175]:
                                - link "Aether Gym Pant" [ref=f7e176] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
                                - generic [ref=f7e177]:
                                    - generic:
                                        - link "Selecione as opções para “Aether Gym Pant”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=3073"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=3073&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e180]:
                                - heading [level=3] [ref=f7e181]:
                                    - link "Aether Gym Pant" [ref=f7e182] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
                                - generic [ref=f7e183]:
                                    - generic [ref=f7e184]: sssss
                                    - generic [ref=f7e185]: (0)
                                - generic [ref=f7e186]: R$74,00
                        - generic [ref=f7e190]:
                            - figure [ref=f7e192]:
                                - link "Ajax Full-Zip Sweatshirt" [ref=f7e193] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
                                - generic [ref=f7e194]:
                                    - generic:
                                        - link "Selecione as opções para “Ajax Full-Zip Sweatshirt”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=2622"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=2622&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e197]:
                                - heading [level=3] [ref=f7e198]:
                                    - link "Ajax Full-Zip Sweatshirt" [ref=f7e199] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
                                - generic [ref=f7e200]:
                                    - generic [ref=f7e201]: sssss
                                    - generic [ref=f7e202]: (0)
                                - generic [ref=f7e203]: R$69,00
                        - generic [ref=f7e207]:
                            - figure [ref=f7e209]:
                                - link "Apollo Running Short" [ref=f7e210] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
                                - generic [ref=f7e211]:
                                    - generic:
                                        - link "Selecione as opções para “Apollo Running Short”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=3374"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=3374&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e214]:
                                - heading [level=3] [ref=f7e215]:
                                    - link "Apollo Running Short" [ref=f7e216] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
                                - generic [ref=f7e217]:
                                    - generic [ref=f7e218]: sssss
                                    - generic [ref=f7e219]: (0)
                                - generic [ref=f7e220]: R$32,50
                        - generic [ref=f7e224]:
                            - figure [ref=f7e226]:
                                - link "Arcadio Gym Short" [ref=f7e227] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
                                - generic [ref=f7e228]:
                                    - generic:
                                        - link "Selecione as opções para “Arcadio Gym Short”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=3528"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=3528&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e231]:
                                - heading [level=3] [ref=f7e232]:
                                    - link "Arcadio Gym Short" [ref=f7e233] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
                                - generic [ref=f7e234]:
                                    - generic [ref=f7e235]: sssss
                                    - generic [ref=f7e236]: (0)
                                - generic [ref=f7e237]: R$20,00
                        - generic [ref=f7e241]:
                            - figure [ref=f7e243]:
                                - link "Argus All-Weather Tank" [ref=f7e244] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
                                - generic [ref=f7e245]:
                                    - generic:
                                        - link "Selecione as opções para “Argus All-Weather Tank”":
                                            - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
                                            - generic: 
                                            - text: Ver opções
                                    - link "":
                                        - /url: "#"
                                    - generic:
                                        - generic:
                                            - link "":
                                                - /url: "?add_to_wishlist=3647"
                                    - generic:
                                        - link " ":
                                            - /url: /produtos/?action=yith-woocompare-add-product&id=3647&_wpnonce=300f092ffe
                                            - generic: 
                                            - text: 
                            - generic [ref=f7e248]:
                                - heading [level=3] [ref=f7e249]:
                                    - link "Argus All-Weather Tank" [ref=f7e250] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
                                - generic [ref=f7e251]:
                                    - generic [ref=f7e252]: sssss
                                    - generic [ref=f7e253]: (0)
                                - generic [ref=f7e254]: R$22,00
                    - list [ref=f7e258]:
                        - listitem [ref=f7e259]:
                            - generic [ref=f7e260]: "1"
                        - listitem [ref=f7e261]:
                            - link "2" [ref=f7e262] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/2/
                        - listitem [ref=f7e263]:
                            - link "3" [ref=f7e264] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/3/
                        - listitem [ref=f7e265]:
                            - link "4" [ref=f7e266] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/4/
                        - listitem [ref=f7e267]:
                            - generic [ref=f7e268]: …
                        - listitem [ref=f7e269]:
                            - link "9" [ref=f7e270] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/9/
                        - listitem [ref=f7e271]:
                            - link "10" [ref=f7e272] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/10/
                        - listitem [ref=f7e273]:
                            - link "11" [ref=f7e274] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/11/
                        - listitem [ref=f7e275]:
                            - link "→" [ref=f7e276] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/page/2/
                - generic [ref=f7e277]:
                    - complementary
        - contentinfo [ref=f7e278]:
            - generic [ref=f7e282]:
                - text: Copyright © 2021 - cena. All Rights Reserved. Powered by
                - link "ThemBay" [ref=f7e283] [cursor=pointer]:
                    - /url: //thembay.com
        - text:     
    - text: 
    - status
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class HomePage {
  4  |   private readonly buyMenu: Locator;
  5  |   private readonly searchInput: Locator;
  6  |
  7  |   constructor(private readonly page: Page) {
  8  |     this.buyMenu = page.getByRole('link', {
  9  |       name: /comprar/i,
  10 |     });
  11 |
  12 |     this.searchInput = page
  13 |       .locator('input.tbay-search[name="s"]:visible')
  14 |       .first();
  15 |   }
  16 |
  17 |   async goToHome(): Promise<void> {
  18 |     await this.page.goto('/');
  19 |   }
  20 |
  21 |   async goToShop(): Promise<void> {
  22 |     await this.buyMenu.click();
  23 |
  24 |     await expect(this.page).toHaveURL(/\/produtos\/?/);
  25 |   }
  26 |
  27 |   async searchProduct(productName: string): Promise<void> {
  28 |     await this.searchInput.fill(productName);
  29 |
  30 |     const productLinks = this.page.locator(
  31 |       'a[href*="/product/cassia-funnel-sweatshirt/"]'
  32 |     );
  33 |
  34 |     const count = await productLinks.count();
  35 |
  36 |     for (let i = 0; i < count; i++) {
  37 |       const productLink = productLinks.nth(i);
  38 |
  39 |       if (await productLink.isVisible()) {
  40 |         await expect(productLink).toContainText(productName);
  41 |         await productLink.click();
  42 |         return;
  43 |       }
  44 |     }
  45 |
> 46 |     throw new Error(
     |           ^ Error: Produto visível não encontrado na busca: Cassia Funnel Sweatshirt
  47 |       `Produto visível não encontrado na busca: ${productName}`
  48 |     );
  49 |   }
  50 |
  51 |     async expectProductPage(productSlug: string): Promise<void> {
  52 |     await expect(this.page).toHaveURL(
  53 |       new RegExp(`/product/${productSlug}/`)
  54 |     );
  55 |
  56 |     await expect(
  57 |       this.page.locator('[role="radio"][data-value="M"]')
  58 |     ).toBeVisible({
  59 |       timeout: 10_000,
  60 |     });
  61 |   }
  62 | }
```
