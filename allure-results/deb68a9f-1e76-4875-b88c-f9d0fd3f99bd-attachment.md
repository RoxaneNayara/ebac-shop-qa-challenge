# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:14:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('a[href*="/product/cassia-funnel-sweatshirt/"]').filter({ hasText: 'Cassia Funnel Sweatshirt' }).first()
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('a[href*="/product/cassia-funnel-sweatshirt/"]').filter({ hasText: 'Cassia Funnel Sweatshirt' }).first()
    13 × locator resolved to <a class="product-name" href="http://lojaebac.ebaconline.art.br/product/cassia-funnel-sweatshirt/?attribute_size=M&attribute_color=Orange">Cassia Funnel Sweatshirt - M, Orange</a>
       - unexpected value "hidden"

```

```yaml
- banner:
    - 'button " Cart : R$96,00 2" [expanded]'
    - link "0":
        - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
    - list:
        - listitem:
            - link " Welcome luna.oliveira !":
                - /url: http://lojaebac.ebaconline.art.br/minha-conta/
        - listitem:
            - link "Logout":
                - /url: http://lojaebac.ebaconline.art.br/wp-login.php?action=logout&redirect_to=http%3A%2F%2Flojaebac.ebaconline.art.br&_wpnonce=cb4bf27564
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
    - textbox "Enter your search ...": Cassia Funnel Sweatshirt
    - button "Search "
    - list:
        - listitem:
            - link "Cassia Funnel Sweatshirt":
                - /url: http://lojaebac.ebaconline.art.br/product/cassia-funnel-sweatshirt/
                - img
            - link "Cassia Funnel Sweatshirt":
                - /url: http://lojaebac.ebaconline.art.br/product/cassia-funnel-sweatshirt/
            - text: R$48,00
        - listitem: 1 result found with "Cassia Funnel Sweatshirt"
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
        - link "Início":
            - /url: http://lojaebac.ebaconline.art.br
    - listitem: / Produtos
- main:
    - heading "Produtos" [level=1]
    - list
    - button ""
    - button ""
    - combobox "Pedido da loja":
        - option "Ordenação padrão" [selected]
        - option "Ordenar por popularidade"
        - option "Ordenar por média de classificação"
        - option "Ordenar por mais recente"
        - 'option "Ordenar por preço: menor para maior"'
        - 'option "Ordenar por preço: maior para menor"'
    - figure:
        - text: "-33%"
        - link "[66665692] Produto Lgc2":
            - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
            - img
        - link "Adicionar “[66665692] Produto Lgc2” no seu carrinho":
            - /url: "?add-to-cart=10988"
            - text:  Comprar
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=10988"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=10988&_wpnonce=50df1dae75
    - heading "[66665692] Produto Lgc2" [level=3]:
        - link "[66665692] Produto Lgc2":
            - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
    - text: sssss (0)
    - insertion: R$1.000,00
    - figure:
        - text: "-33%"
        - link "[73395368] Produto Lgc2":
            - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
            - img
        - link "Adicionar “[73395368] Produto Lgc2” no seu carrinho":
            - /url: "?add-to-cart=10987"
            - text:  Comprar
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=10987"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=10987&_wpnonce=50df1dae75
    - heading "[73395368] Produto Lgc2" [level=3]:
        - link "[73395368] Produto Lgc2":
            - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
    - text: sssss (0)
    - insertion: R$1.000,00
    - figure:
        - link "Abominable Hoodie":
            - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
        - link "Selecione as opções para “Abominable Hoodie”":
            - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=2559"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=2559&_wpnonce=50df1dae75
    - heading "Abominable Hoodie" [level=3]:
        - link "Abominable Hoodie":
            - /url: http://lojaebac.ebaconline.art.br/product/abominable-hoodie/
    - text: sssss (0) R$69,00
    - figure:
        - link "Aero Daily Fitness Tee":
            - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
        - link "Selecione as opções para “Aero Daily Fitness Tee”":
            - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=3111"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=3111&_wpnonce=50df1dae75
    - heading "Aero Daily Fitness Tee" [level=3]:
        - link "Aero Daily Fitness Tee":
            - /url: http://lojaebac.ebaconline.art.br/product/aero-daily-fitness-tee/
    - text: sssss (0) R$24,00
    - figure:
        - link "Aether Gym Pant":
            - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
        - link "Selecione as opções para “Aether Gym Pant”":
            - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=3073"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=3073&_wpnonce=50df1dae75
    - heading "Aether Gym Pant" [level=3]:
        - link "Aether Gym Pant":
            - /url: http://lojaebac.ebaconline.art.br/product/aether-gym-pant/
    - text: sssss (0) R$74,00
    - figure:
        - link "Ajax Full-Zip Sweatshirt":
            - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
        - link "Selecione as opções para “Ajax Full-Zip Sweatshirt”":
            - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=2622"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=2622&_wpnonce=50df1dae75
    - heading "Ajax Full-Zip Sweatshirt" [level=3]:
        - link "Ajax Full-Zip Sweatshirt":
            - /url: http://lojaebac.ebaconline.art.br/product/ajax-full-zip-sweatshirt/
    - text: sssss (0) R$69,00
    - figure:
        - link "Apollo Running Short":
            - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
        - link "Selecione as opções para “Apollo Running Short”":
            - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=3374"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=3374&_wpnonce=50df1dae75
    - heading "Apollo Running Short" [level=3]:
        - link "Apollo Running Short":
            - /url: http://lojaebac.ebaconline.art.br/product/apollo-running-short/
    - text: sssss (0) R$32,50
    - figure:
        - link "Arcadio Gym Short":
            - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
        - link "Selecione as opções para “Arcadio Gym Short”":
            - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=3528"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=3528&_wpnonce=50df1dae75
    - heading "Arcadio Gym Short" [level=3]:
        - link "Arcadio Gym Short":
            - /url: http://lojaebac.ebaconline.art.br/product/arcadio-gym-short/
    - text: sssss (0) R$20,00
    - figure:
        - link "Argus All-Weather Tank":
            - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
        - link "Selecione as opções para “Argus All-Weather Tank”":
            - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
            - text:  Ver opções
        - link "":
            - /url: "#"
        - link "":
            - /url: "?add_to_wishlist=3647"
        - link " ":
            - /url: /produtos/?action=yith-woocompare-add-product&id=3647&_wpnonce=50df1dae75
    - heading "Argus All-Weather Tank" [level=3]:
        - link "Argus All-Weather Tank":
            - /url: http://lojaebac.ebaconline.art.br/product/argus-all-weather-tank/
    - text: sssss (0) R$22,00
    - list:
        - listitem: "1"
        - listitem:
            - link "2":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/2/
        - listitem:
            - link "3":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/3/
        - listitem:
            - link "4":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/4/
        - listitem: …
        - listitem:
            - link "9":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/9/
        - listitem:
            - link "10":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/10/
        - listitem:
            - link "11":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/11/
        - listitem:
            - link "→":
                - /url: http://lojaebac.ebaconline.art.br/produtos/page/2/
- complementary
- contentinfo:
    - text: Copyright © 2021 - cena. All Rights Reserved. Powered by
    - link "ThemBay":
        - /url: //thembay.com
- status: 1 result is available, use up and down arrow keys to navigate.
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
  28 |     await expect(this.searchInput).toBeVisible();
  29 |
  30 |     await this.searchInput.fill(productName);
  31 |
  32 |     const productLink = this.page
  33 |       .locator(
  34 |         'a[href*="/product/cassia-funnel-sweatshirt/"]'
  35 |       )
  36 |       .filter({
  37 |         hasText: productName,
  38 |       })
  39 |       .first();
  40 |
> 41 |     await expect(productLink).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  42 |
  43 |     await productLink.click();
  44 |   }
  45 |
  46 |     async expectProductPage(productSlug: string): Promise<void> {
  47 |     await expect(this.page).toHaveURL(
  48 |       new RegExp(`/product/${productSlug}/`)
  49 |     );
  50 |
  51 |     await expect(
  52 |       this.page.locator('[role="radio"][data-value="M"]')
  53 |     ).toBeVisible({
  54 |       timeout: 10_000,
  55 |     });
  56 |   }
  57 | }
```
