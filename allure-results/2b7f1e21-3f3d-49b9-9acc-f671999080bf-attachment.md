# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Checkout - pagamento na entrega >> deve concluir uma compra com pagamento na entrega
- Location: tests/checkout/purchase-flow.spec.ts:75:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/welcome|olá/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/welcome|olá/i)

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
    - listitem: Minha conta
- main:
    - heading "Minha conta" [level=1]
    - alert:
        - text: 
        - listitem:
            - strong: Erro
            - text: ": A senha informada para o usuário"
            - strong: luna.oliveira
            - text: está incorreta.
            - link "Perdeu a senha?":
                - /url: http://lojaebac.ebaconline.art.br/minha-conta/lost-password/
    - heading "Login" [level=2]
    - paragraph:
        - text: Username or email address *
        - textbox "Username or email address *": luna.oliveira
    - paragraph:
        - text: Password *
        - textbox "Password *"
    - paragraph
    - paragraph:
        - checkbox
        - text: Remember me
    - button "Login"
    - paragraph
    - paragraph:
        - link "Lost your password?":
            - /url: http://lojaebac.ebaconline.art.br/minha-conta/lost-password/
    - heading "Register" [level=2]
    - paragraph:
        - text: Email address *
        - textbox "Email address *"
    - paragraph:
        - text: Password *
        - textbox "Password *"
    - paragraph:
        - text: Seus dados pessoais serão usados para apoiar sua experiência em todo este site, para gerenciar o acesso à sua conta e para outros fins descritos em nossa
        - link "política de privacidade":
            - /url: http://lojaebac.ebaconline.art.br/?page_id=3
        - text: .
    - paragraph:
        - button "Register"
- contentinfo:
    - text: Copyright © 2021 - cena. All Rights Reserved. Powered by
    - link "ThemBay":
        - /url: //thembay.com
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class LoginPage {
  4  |   private readonly username: Locator;
  5  |   private readonly password: Locator;
  6  |   private readonly loginButton: Locator;
  7  |
  8  |   constructor(private readonly page: Page) {
  9  |     this.username = page.locator('#username');
  10 |     this.password = page.locator('#password');
  11 |     this.loginButton = page.getByRole('button', { name: /login|entrar/i });
  12 |   }
  13 |
  14 |   async login(username: string, password: string): Promise<void> {
  15 |     await this.username.fill(username);
  16 |     await this.password.fill(password);
  17 |     await this.loginButton.click();
  18 |   }
  19 |
  20 |   async expectLoggedIn(): Promise<void> {
  21 |     await expect(
  22 |       this.page.getByText(/welcome|olá/i)
> 23 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  24 |   }
  25 | }
```
