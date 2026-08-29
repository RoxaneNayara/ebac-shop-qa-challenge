# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:12:7

# Error details

```
TimeoutError: locator.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('form.form-ajax-search').first().locator('input.tbay-search[name="s"]')
    - locator resolved to <input name="s" type="text" placeholder="I’m searching for..." class="tbay-search form-control input-sm"/>
    - fill("Cassia Funnel Sweatshirt")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    20 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
    - generic [ref=f3e2]:
        - text:            
        - banner [ref=f3e3]:
            - generic [ref=f3e5]:
                - generic:
                    - link [ref=f3e8] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br/
                        - img "EBAC – Shop" [ref=f3e9]
                    - navigation [ref=f3e10]:
                        - list [ref=f3e12]:
                            - listitem [ref=f3e13]:
                                - link "Home" [ref=f3e14] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/home/
                            - listitem [ref=f3e16]:
                                - link "Comprar" [ref=f3e17] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/produtos/
                                    - generic [ref=f3e18]: 
                                    - text: Comprar
                            - listitem [ref=f3e19]:
                                - link "Blog" [ref=f3e20] [cursor=pointer]:
                                    - /url: "#"
                            - listitem [ref=f3e22]:
                                - link "Categorias" [ref=f3e23] [cursor=pointer]:
                                    - /url: "#"
                            - listitem [ref=f3e24]:
                                - link "Mais vendidos" [ref=f3e25] [cursor=pointer]:
                                    - /url: "#"
                    - generic [ref=f3e26]:
                        - generic:
                            - generic [ref=f3e27]: 
                            - generic [ref=f3e31]:
                                - 'button " Cart : R$0,00 0" [expanded] [ref=f3e36] [cursor=pointer]':
                                    - generic [ref=f3e37]: 
                                    - generic [ref=f3e39]:
                                        - text: "Cart :"
                                        - generic [ref=f3e40]: R$0,00
                                    - generic [ref=f3e42]: "0"
                                - link "0" [ref=f3e44] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
                                    - generic [ref=f3e45]: 
                            - link "" [ref=f3e49] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/minha-conta/
                            - generic [ref=f3e52]:
                                - button "" [ref=f3e54] [cursor=pointer]
                                - text: 
        - main [ref=f3e60]:
            - generic [ref=f3e63]:
                - figure [ref=f3e68]:
                    - link [ref=f3e69] [cursor=pointer]:
                        - /url: "#"
                - generic [ref=f3e72]:
                    - figure [ref=f3e74]:
                        - link [ref=f3e75] [cursor=pointer]:
                            - /url: "#"
                    - figure [ref=f3e77]:
                        - link [ref=f3e78] [cursor=pointer]:
                            - /url: "#"
                - generic [ref=f3e81]:
                    - figure [ref=f3e83]:
                        - link [ref=f3e84] [cursor=pointer]:
                            - /url: "#"
                    - figure [ref=f3e86]:
                        - link [ref=f3e87] [cursor=pointer]:
                            - /url: "#"
            - heading "Produtos sugeridos" [level=3] [ref=f3e97]
            - generic [ref=f3e104]:
                - heading "Produtos em destaque" [level=3] [ref=f3e105]
                - generic [ref=f3e106]:
                    - tablist [ref=f3e107]:
                        - listitem [ref=f3e108]:
                            - link "All Categories" [ref=f3e109]:
                                - /url: "#tab-GmXQr-0"
                        - listitem [ref=f3e110]:
                            - link "All Categories" [ref=f3e111] [cursor=pointer]:
                                - /url: "#tab-GmXQr-1"
                        - listitem [ref=f3e112]:
                            - link "All Categories" [ref=f3e113] [cursor=pointer]:
                                - /url: "#tab-GmXQr-2"
                    - generic [ref=f3e116]:
                        - generic [ref=f3e117]:
                            - generic [ref=f3e119]:
                                - generic [ref=f3e121]:
                                    - figure [ref=f3e123]:
                                        - link "Produto Ebac" [ref=f3e124] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-4/
                                        - generic [ref=f3e126]:
                                            - generic:
                                                - link "Leia mais sobre “Produto Ebac”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-4/
                                                    - generic: 
                                                    - text: Leia mais
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=11216"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=11216&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e129]:
                                        - heading [level=3] [ref=f3e130]:
                                            - link "Produto Ebac" [ref=f3e131] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-4/
                                        - generic [ref=f3e132]:
                                            - generic [ref=f3e133]: sssss
                                            - generic [ref=f3e134]: (0)
                                - generic [ref=f3e136]:
                                    - figure [ref=f3e138]:
                                        - link "Produto Ebac" [ref=f3e139] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-3/
                                        - generic [ref=f3e141]:
                                            - generic:
                                                - link "Leia mais sobre “Produto Ebac”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-3/
                                                    - generic: 
                                                    - text: Leia mais
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=11215"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=11215&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e144]:
                                        - heading [level=3] [ref=f3e145]:
                                            - link "Produto Ebac" [ref=f3e146] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-3/
                                        - generic [ref=f3e147]:
                                            - generic [ref=f3e148]: sssss
                                            - generic [ref=f3e149]: (0)
                                - generic [ref=f3e151]:
                                    - figure [ref=f3e153]:
                                        - link "Produto Ebac" [ref=f3e154] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-2/
                                        - generic [ref=f3e156]:
                                            - generic:
                                                - link "Leia mais sobre “Produto Ebac”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-2/
                                                    - generic: 
                                                    - text: Leia mais
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=11214"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=11214&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e159]:
                                        - heading [level=3] [ref=f3e160]:
                                            - link "Produto Ebac" [ref=f3e161] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-2/
                                        - generic [ref=f3e162]:
                                            - generic [ref=f3e163]: sssss
                                            - generic [ref=f3e164]: (0)
                                - generic [ref=f3e166]:
                                    - figure [ref=f3e168]:
                                        - link "Produto Ebac" [ref=f3e169] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac/
                                        - generic [ref=f3e171]:
                                            - generic:
                                                - link "Leia mais sobre “Produto Ebac”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac/
                                                    - generic: 
                                                    - text: Leia mais
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=11213"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=11213&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e174]:
                                        - heading [level=3] [ref=f3e175]:
                                            - link "Produto Ebac" [ref=f3e176] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac/
                                        - generic [ref=f3e177]:
                                            - generic [ref=f3e178]: sssss
                                            - generic [ref=f3e179]: (0)
                                - generic [ref=f3e181]:
                                    - figure [ref=f3e183]:
                                        - generic: "-33%"
                                        - link "[66665692] Produto Lgc2" [ref=f3e184] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                        - generic [ref=f3e186]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=10988&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e189]:
                                        - heading [level=3] [ref=f3e190]:
                                            - link "[66665692] Produto Lgc2" [ref=f3e191] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                        - generic [ref=f3e192]:
                                            - generic [ref=f3e193]: sssss
                                            - generic [ref=f3e194]: (0)
                                        - generic [ref=f3e195]:
                                            - deletion [ref=f3e196]:
                                                - generic [ref=f3e197]: R$1.500,00
                                            - insertion [ref=f3e199]:
                                                - generic [ref=f3e200]: R$1.000,00
                                - generic [ref=f3e203]:
                                    - figure [ref=f3e205]:
                                        - generic: "-33%"
                                        - link "[73395368] Produto Lgc2" [ref=f3e206] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                        - generic [ref=f3e208]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=10987&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e211]:
                                        - heading [level=3] [ref=f3e212]:
                                            - link "[73395368] Produto Lgc2" [ref=f3e213] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                        - generic [ref=f3e214]:
                                            - generic [ref=f3e215]: sssss
                                            - generic [ref=f3e216]: (0)
                                        - generic [ref=f3e217]:
                                            - deletion [ref=f3e218]:
                                                - generic [ref=f3e219]: R$1.500,00
                                            - insertion [ref=f3e221]:
                                                - generic [ref=f3e222]: R$1.000,00
                                - generic [ref=f3e225]:
                                    - figure [ref=f3e227]:
                                        - link "Ingrid Running Jacket" [ref=f3e228] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/
                                        - generic [ref=f3e229]:
                                            - generic:
                                                - link "Selecione as opções para “Ingrid Running Jacket”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/
                                                    - generic: 
                                                    - text: Ver opções
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=4104"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=4104&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e232]:
                                        - heading [level=3] [ref=f3e233]:
                                            - link "Ingrid Running Jacket" [ref=f3e234] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/
                                        - generic [ref=f3e235]:
                                            - generic [ref=f3e236]: sssss
                                            - generic [ref=f3e237]: (0)
                                        - generic [ref=f3e238]: R$84,00
                                - generic [ref=f3e242]:
                                    - figure [ref=f3e244]:
                                        - link "Augusta Pullover Jacket" [ref=f3e245] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/
                                        - generic [ref=f3e246]:
                                            - generic:
                                                - link "Selecione as opções para “Augusta Pullover Jacket”":
                                                    - /url: http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/
                                                    - generic: 
                                                    - text: Ver opções
                                            - link "":
                                                - /url: "#"
                                            - generic:
                                                - generic:
                                                    - link "":
                                                        - /url: "?add_to_wishlist=4078"
                                            - generic:
                                                - link " ":
                                                    - /url: /?action=yith-woocompare-add-product&id=4078&_wpnonce=aafeaf9faa
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f3e249]:
                                        - heading [level=3] [ref=f3e250]:
                                            - link "Augusta Pullover Jacket" [ref=f3e251] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/
                                        - generic [ref=f3e252]:
                                            - generic [ref=f3e253]: sssss
                                            - generic [ref=f3e254]: (0)
                                        - generic [ref=f3e255]: R$57,00
                            - link "view all" [ref=f3e258] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/
                        - text:       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss
            - generic [ref=f3e261]:
                - generic [ref=f3e265]:
                    - heading "Notícias recentes" [level=3] [ref=f3e266]
                    - generic [ref=f3e268]:
                        - generic [ref=f3e270]:
                            - article [ref=f3e273]:
                                - figure:
                                    - link:
                                        - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                - generic [ref=f3e274]:
                                    - heading [level=4] [ref=f3e276]:
                                        - link "Olá, mundo!" [ref=f3e277] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                    - generic [ref=f3e278]:
                                        - generic [ref=f3e279]:
                                            - generic [ref=f3e280]: 
                                            - generic [ref=f3e281]: Posted on
                                            - link [ref=f3e282] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                                - time [ref=f3e283]: 8 de maio de 2021
                                        - generic [ref=f3e284]:
                                            - generic [ref=f3e285]: 
                                            - link "1 Comment" [ref=f3e286] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/#comments
                                        - generic [ref=f3e287]:
                                            - generic [ref=f3e288]: 
                                            - link "qe" [ref=f3e289] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                            - article [ref=f3e292]:
                                - figure [ref=f3e293]:
                                    - link [ref=f3e294] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                - generic [ref=f3e295]:
                                    - heading [level=4] [ref=f3e297]:
                                        - link "Donec laoreet massa varius elit ullamco" [ref=f3e298] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                    - generic [ref=f3e299]:
                                        - generic [ref=f3e300]:
                                            - generic [ref=f3e301]: 
                                            - generic [ref=f3e302]: Posted on
                                            - link [ref=f3e303] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                                - time [ref=f3e304]: 28 de janeiro de 2016
                                        - generic [ref=f3e305]:
                                            - generic [ref=f3e306]: 
                                            - link "6 Comments" [ref=f3e307] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/#comments
                                        - generic [ref=f3e308]:
                                            - generic [ref=f3e309]: 
                                            - link "qe" [ref=f3e310] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f3e311]:
                                        - text: Etiam consectetur nulla sed tempus finibus. Phasellus egestas arcu massa, id commodo est dignissim id. Donec euismod faucibus augue vitae porttitor.
                                        - link "" [ref=f3e312] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                            - article [ref=f3e316]:
                                - figure [ref=f3e317]:
                                    - link [ref=f3e318] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                - generic [ref=f3e319]:
                                    - heading [level=4] [ref=f3e321]:
                                        - link "Proin velit metus placerat quis enim ve, posuere" [ref=f3e322] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                    - generic [ref=f3e323]:
                                        - generic [ref=f3e324]:
                                            - generic [ref=f3e325]: 
                                            - generic [ref=f3e326]: Posted on
                                            - link [ref=f3e327] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                                - time [ref=f3e328]: 28 de janeiro de 2016
                                        - generic [ref=f3e329]:
                                            - generic [ref=f3e330]: 
                                            - link "3 Comments" [ref=f3e331] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/#comments
                                        - generic [ref=f3e332]:
                                            - generic [ref=f3e333]: 
                                            - link "qe" [ref=f3e334] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f3e335]:
                                        - text: Phasellus aliquam libero semper, lobortis tortor eu, ultrices augue. Donec ut elit sit amet est tincidunt rutrum. Aenean elementum mi a nisi consequat aliquet. [...]
                                        - link "" [ref=f3e336] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                            - article [ref=f3e340]:
                                - figure [ref=f3e341]:
                                    - link [ref=f3e342] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                - generic [ref=f3e343]:
                                    - heading [level=4] [ref=f3e345]:
                                        - link "Nam ante nibh, facilisis et diam utante" [ref=f3e346] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                    - generic [ref=f3e347]:
                                        - generic [ref=f3e348]:
                                            - generic [ref=f3e349]: 
                                            - generic [ref=f3e350]: Posted on
                                            - link [ref=f3e351] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                                - time [ref=f3e352]: 28 de janeiro de 2016
                                        - generic [ref=f3e353]:
                                            - generic [ref=f3e354]: 
                                            - link "0 comment" [ref=f3e355] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/#respond
                                        - generic [ref=f3e356]:
                                            - generic [ref=f3e357]: 
                                            - link "qe" [ref=f3e358] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f3e359]:
                                        - text: Donec mollis tristique dolor, id ultricies lorem laoreet eu. Sed porttitor leo eget felis aliquam, eu facilisis mauris ornare.
                                        - link "" [ref=f3e360] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                        - generic:  
                - heading "Depoimentos" [level=3] [ref=f3e367]
        - contentinfo [ref=f3e376]:
            - generic [ref=f3e380]:
                - text: Copyright © 2021 - cena. All Rights Reserved. Powered by
                - link "ThemBay" [ref=f3e381] [cursor=pointer]:
                    - /url: //thembay.com
        - text:     
    - text: 
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class HomePage {
  4  |   private readonly searchForm: Locator;
  5  |   private readonly searchInput: Locator;
  6  |   private readonly searchButton: Locator;
  7  |
  8  |   constructor(private readonly page: Page) {
  9  |     this.searchForm = page.locator('form.form-ajax-search').first();
  10 |
  11 |     this.searchInput = this.searchForm.locator(
  12 |       'input.tbay-search[name="s"]'
  13 |     );
  14 |
  15 |     this.searchButton = this.searchForm.locator(
  16 |       'button.button-search'
  17 |     );
  18 |   }
  19 |
  20 |   async goToHome(): Promise<void> {
  21 |     await this.page.goto('/');
  22 |   }
  23 |
  24 |   async searchProduct(productName: string): Promise<void> {
> 25 |     await this.searchInput.fill(productName);
     |                            ^ TimeoutError: locator.fill: Timeout 10000ms exceeded.
  26 |
  27 |     await expect(
  28 |       this.searchForm.getByText(productName, { exact: true })
  29 |     ).toBeVisible();
  30 |
  31 |     await this.searchButton.click();
  32 |   }
  33 |
  34 |   async expectProductPage(productSlug: string): Promise<void> {
  35 |     await expect(this.page).toHaveURL(
  36 |       new RegExp(`/product/${productSlug}/`)
  37 |     );
  38 |   }
  39 | }
```
