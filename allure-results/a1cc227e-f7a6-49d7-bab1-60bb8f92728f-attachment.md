# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: checkout/purchase-flow.spec.ts >> Fluxo de compra >> deve adicionar produto com variação ao carrinho e validar os valores
- Location: tests/checkout/purchase-flow.spec.ts:12:7

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('input[name="s"]') resolved to 4 elements:
    1) <input name="s" type="text" placeholder="I’m searching for..." class="tbay-search form-control input-sm"/> aka getByPlaceholder('I’m searching for...')
    2) <input name="s" type="text" placeholder="Enter your search ..." class="tbay-search form-control input-sm"/> aka locator('#searchformshow-sqjat').getByPlaceholder('Enter your search')
    3) <input name="s" type="text" placeholder="Enter your search ..." class="tbay-search form-control input-sm"/> aka locator('#searchformshow-dAqAb').getByPlaceholder('Enter your search')
    4) <input name="s" type="text" placeholder="Enter your search ..." class="tbay-search form-control input-sm"/> aka locator('#searchformshow-HGjTn').getByPlaceholder('Enter your search')

Call log:
  - waiting for locator('input[name="s"]')

```

# Page snapshot

```yaml
- generic [active] [ref=f4e1]:
    - generic [ref=f4e2]:
        - text:            
        - banner [ref=f4e3]:
            - generic [ref=f4e5]:
                - generic:
                    - link [ref=f4e8] [cursor=pointer]:
                        - /url: http://lojaebac.ebaconline.art.br/
                        - img "EBAC – Shop" [ref=f4e9]
                    - navigation [ref=f4e10]:
                        - list [ref=f4e12]:
                            - listitem [ref=f4e13]:
                                - link "Home" [ref=f4e14] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/home/
                            - listitem [ref=f4e16]:
                                - link "Comprar" [ref=f4e17] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/produtos/
                                    - generic [ref=f4e18]: 
                                    - text: Comprar
                            - listitem [ref=f4e19]:
                                - link "Blog" [ref=f4e20] [cursor=pointer]:
                                    - /url: "#"
                            - listitem [ref=f4e22]:
                                - link "Categorias" [ref=f4e23] [cursor=pointer]:
                                    - /url: "#"
                            - listitem [ref=f4e24]:
                                - link "Mais vendidos" [ref=f4e25] [cursor=pointer]:
                                    - /url: "#"
                    - generic [ref=f4e26]:
                        - generic:
                            - generic [ref=f4e27]: 
                            - generic [ref=f4e31]:
                                - 'button " Cart : R$0,00 0" [expanded] [ref=f4e36] [cursor=pointer]':
                                    - generic [ref=f4e37]: 
                                    - generic [ref=f4e39]:
                                        - text: "Cart :"
                                        - generic [ref=f4e40]: R$0,00
                                    - generic [ref=f4e42]: "0"
                                - link "0" [ref=f4e44] [cursor=pointer]:
                                    - /url: http://lojaebac.ebaconline.art.br/lista-de-desejos/
                                    - generic [ref=f4e45]: 
                            - link "" [ref=f4e49] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/minha-conta/
                            - generic [ref=f4e52]:
                                - button "" [ref=f4e54] [cursor=pointer]
                                - text: 
        - main [ref=f4e60]:
            - generic [ref=f4e63]:
                - figure [ref=f4e68]:
                    - link [ref=f4e69] [cursor=pointer]:
                        - /url: "#"
                - generic [ref=f4e72]:
                    - figure [ref=f4e74]:
                        - link [ref=f4e75] [cursor=pointer]:
                            - /url: "#"
                    - figure [ref=f4e77]:
                        - link [ref=f4e78] [cursor=pointer]:
                            - /url: "#"
                - generic [ref=f4e81]:
                    - figure [ref=f4e83]:
                        - link [ref=f4e84] [cursor=pointer]:
                            - /url: "#"
                    - figure [ref=f4e86]:
                        - link [ref=f4e87] [cursor=pointer]:
                            - /url: "#"
            - heading "Produtos sugeridos" [level=3] [ref=f4e97]
            - generic [ref=f4e104]:
                - heading "Produtos em destaque" [level=3] [ref=f4e105]
                - generic [ref=f4e106]:
                    - tablist [ref=f4e107]:
                        - listitem [ref=f4e108]:
                            - link "All Categories" [ref=f4e109]:
                                - /url: "#tab-VIfCB-0"
                        - listitem [ref=f4e110]:
                            - link "All Categories" [ref=f4e111] [cursor=pointer]:
                                - /url: "#tab-VIfCB-1"
                        - listitem [ref=f4e112]:
                            - link "All Categories" [ref=f4e113] [cursor=pointer]:
                                - /url: "#tab-VIfCB-2"
                    - generic [ref=f4e116]:
                        - generic [ref=f4e117]:
                            - generic [ref=f4e119]:
                                - generic [ref=f4e121]:
                                    - figure [ref=f4e123]:
                                        - link "Produto Ebac" [ref=f4e124] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-4/
                                        - generic [ref=f4e126]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=11216&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e129]:
                                        - heading [level=3] [ref=f4e130]:
                                            - link "Produto Ebac" [ref=f4e131] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-4/
                                        - generic [ref=f4e132]:
                                            - generic [ref=f4e133]: sssss
                                            - generic [ref=f4e134]: (0)
                                - generic [ref=f4e136]:
                                    - figure [ref=f4e138]:
                                        - link "Produto Ebac" [ref=f4e139] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-3/
                                        - generic [ref=f4e141]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=11215&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e144]:
                                        - heading [level=3] [ref=f4e145]:
                                            - link "Produto Ebac" [ref=f4e146] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-3/
                                        - generic [ref=f4e147]:
                                            - generic [ref=f4e148]: sssss
                                            - generic [ref=f4e149]: (0)
                                - generic [ref=f4e151]:
                                    - figure [ref=f4e153]:
                                        - link "Produto Ebac" [ref=f4e154] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-2/
                                        - generic [ref=f4e156]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=11214&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e159]:
                                        - heading [level=3] [ref=f4e160]:
                                            - link "Produto Ebac" [ref=f4e161] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac-2/
                                        - generic [ref=f4e162]:
                                            - generic [ref=f4e163]: sssss
                                            - generic [ref=f4e164]: (0)
                                - generic [ref=f4e166]:
                                    - figure [ref=f4e168]:
                                        - link "Produto Ebac" [ref=f4e169] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac/
                                        - generic [ref=f4e171]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=11213&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e174]:
                                        - heading [level=3] [ref=f4e175]:
                                            - link "Produto Ebac" [ref=f4e176] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/produto-ebac/
                                        - generic [ref=f4e177]:
                                            - generic [ref=f4e178]: sssss
                                            - generic [ref=f4e179]: (0)
                                - generic [ref=f4e181]:
                                    - figure [ref=f4e183]:
                                        - generic: "-33%"
                                        - link "[66665692] Produto Lgc2" [ref=f4e184] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                        - generic [ref=f4e186]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=10988&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e189]:
                                        - heading [level=3] [ref=f4e190]:
                                            - link "[66665692] Produto Lgc2" [ref=f4e191] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/66665692-produto-lgc2/
                                        - generic [ref=f4e192]:
                                            - generic [ref=f4e193]: sssss
                                            - generic [ref=f4e194]: (0)
                                        - generic [ref=f4e195]:
                                            - deletion [ref=f4e196]:
                                                - generic [ref=f4e197]: R$1.500,00
                                            - insertion [ref=f4e199]:
                                                - generic [ref=f4e200]: R$1.000,00
                                - generic [ref=f4e203]:
                                    - figure [ref=f4e205]:
                                        - generic: "-33%"
                                        - link "[73395368] Produto Lgc2" [ref=f4e206] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                        - generic [ref=f4e208]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=10987&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e211]:
                                        - heading [level=3] [ref=f4e212]:
                                            - link "[73395368] Produto Lgc2" [ref=f4e213] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/73395368-produto-lgc2/
                                        - generic [ref=f4e214]:
                                            - generic [ref=f4e215]: sssss
                                            - generic [ref=f4e216]: (0)
                                        - generic [ref=f4e217]:
                                            - deletion [ref=f4e218]:
                                                - generic [ref=f4e219]: R$1.500,00
                                            - insertion [ref=f4e221]:
                                                - generic [ref=f4e222]: R$1.000,00
                                - generic [ref=f4e225]:
                                    - figure [ref=f4e227]:
                                        - link "Ingrid Running Jacket" [ref=f4e228] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/
                                        - generic [ref=f4e229]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=4104&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e232]:
                                        - heading [level=3] [ref=f4e233]:
                                            - link "Ingrid Running Jacket" [ref=f4e234] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/ingrid-running-jacket/
                                        - generic [ref=f4e235]:
                                            - generic [ref=f4e236]: sssss
                                            - generic [ref=f4e237]: (0)
                                        - generic [ref=f4e238]: R$84,00
                                - generic [ref=f4e242]:
                                    - figure [ref=f4e244]:
                                        - link "Augusta Pullover Jacket" [ref=f4e245] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/
                                        - generic [ref=f4e246]:
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
                                                    - /url: /?action=yith-woocompare-add-product&id=4078&_wpnonce=5163370737
                                                    - generic: 
                                                    - text: 
                                    - generic [ref=f4e249]:
                                        - heading [level=3] [ref=f4e250]:
                                            - link "Augusta Pullover Jacket" [ref=f4e251] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/
                                        - generic [ref=f4e252]:
                                            - generic [ref=f4e253]: sssss
                                            - generic [ref=f4e254]: (0)
                                        - generic [ref=f4e255]: R$57,00
                            - link "view all" [ref=f4e258] [cursor=pointer]:
                                - /url: http://lojaebac.ebaconline.art.br/produtos/
                        - text:       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss       sssss
            - generic [ref=f4e261]:
                - generic [ref=f4e265]:
                    - heading "Notícias recentes" [level=3] [ref=f4e266]
                    - generic [ref=f4e268]:
                        - generic [ref=f4e270]:
                            - article [ref=f4e273]:
                                - figure:
                                    - link:
                                        - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                - generic [ref=f4e274]:
                                    - heading [level=4] [ref=f4e276]:
                                        - link "Olá, mundo!" [ref=f4e277] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                    - generic [ref=f4e278]:
                                        - generic [ref=f4e279]:
                                            - generic [ref=f4e280]: 
                                            - generic [ref=f4e281]: Posted on
                                            - link [ref=f4e282] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/
                                                - time [ref=f4e283]: 8 de maio de 2021
                                        - generic [ref=f4e284]:
                                            - generic [ref=f4e285]: 
                                            - link "1 Comment" [ref=f4e286] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2021/05/08/ola-mundo/#comments
                                        - generic [ref=f4e287]:
                                            - generic [ref=f4e288]: 
                                            - link "qe" [ref=f4e289] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                            - article [ref=f4e292]:
                                - figure [ref=f4e293]:
                                    - link [ref=f4e294] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                - generic [ref=f4e295]:
                                    - heading [level=4] [ref=f4e297]:
                                        - link "Donec laoreet massa varius elit ullamco" [ref=f4e298] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                    - generic [ref=f4e299]:
                                        - generic [ref=f4e300]:
                                            - generic [ref=f4e301]: 
                                            - generic [ref=f4e302]: Posted on
                                            - link [ref=f4e303] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                                                - time [ref=f4e304]: 28 de janeiro de 2016
                                        - generic [ref=f4e305]:
                                            - generic [ref=f4e306]: 
                                            - link "6 Comments" [ref=f4e307] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/#comments
                                        - generic [ref=f4e308]:
                                            - generic [ref=f4e309]: 
                                            - link "qe" [ref=f4e310] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f4e311]:
                                        - text: Etiam consectetur nulla sed tempus finibus. Phasellus egestas arcu massa, id commodo est dignissim id. Donec euismod faucibus augue vitae porttitor.
                                        - link "" [ref=f4e312] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/donec-laoreet-massa-varius-elit-ullamco/
                            - article [ref=f4e316]:
                                - figure [ref=f4e317]:
                                    - link [ref=f4e318] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                - generic [ref=f4e319]:
                                    - heading [level=4] [ref=f4e321]:
                                        - link "Proin velit metus placerat quis enim ve, posuere" [ref=f4e322] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                    - generic [ref=f4e323]:
                                        - generic [ref=f4e324]:
                                            - generic [ref=f4e325]: 
                                            - generic [ref=f4e326]: Posted on
                                            - link [ref=f4e327] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                                                - time [ref=f4e328]: 28 de janeiro de 2016
                                        - generic [ref=f4e329]:
                                            - generic [ref=f4e330]: 
                                            - link "3 Comments" [ref=f4e331] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/#comments
                                        - generic [ref=f4e332]:
                                            - generic [ref=f4e333]: 
                                            - link "qe" [ref=f4e334] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f4e335]:
                                        - text: Phasellus aliquam libero semper, lobortis tortor eu, ultrices augue. Donec ut elit sit amet est tincidunt rutrum. Aenean elementum mi a nisi consequat aliquet. [...]
                                        - link "" [ref=f4e336] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/proin-velit-metus-placerat-quis-enim-ve-posuere/
                            - article [ref=f4e340]:
                                - figure [ref=f4e341]:
                                    - link [ref=f4e342] [cursor=pointer]:
                                        - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                - generic [ref=f4e343]:
                                    - heading [level=4] [ref=f4e345]:
                                        - link "Nam ante nibh, facilisis et diam utante" [ref=f4e346] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                    - generic [ref=f4e347]:
                                        - generic [ref=f4e348]:
                                            - generic [ref=f4e349]: 
                                            - generic [ref=f4e350]: Posted on
                                            - link [ref=f4e351] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                                                - time [ref=f4e352]: 28 de janeiro de 2016
                                        - generic [ref=f4e353]:
                                            - generic [ref=f4e354]: 
                                            - link "0 comment" [ref=f4e355] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/#respond
                                        - generic [ref=f4e356]:
                                            - generic [ref=f4e357]: 
                                            - link "qe" [ref=f4e358] [cursor=pointer]:
                                                - /url: http://lojaebac.ebaconline.art.br/author/qe/
                                    - generic [ref=f4e359]:
                                        - text: Donec mollis tristique dolor, id ultricies lorem laoreet eu. Sed porttitor leo eget felis aliquam, eu facilisis mauris ornare.
                                        - link "" [ref=f4e360] [cursor=pointer]:
                                            - /url: http://lojaebac.ebaconline.art.br/2016/01/28/nam-ante-nibh-facilisis-et-diam-utante/
                        - generic:  
                - heading "Depoimentos" [level=3] [ref=f4e367]
        - contentinfo [ref=f4e376]:
            - generic [ref=f4e380]:
                - text: Copyright © 2021 - cena. All Rights Reserved. Powered by
                - link "ThemBay" [ref=f4e381] [cursor=pointer]:
                    - /url: //thembay.com
        - text:     
    - text: 
```

# Test source

```ts
  1  | import { expect, type Locator, type Page } from '@playwright/test';
  2  |
  3  | export class HomePage {
  4  |   private readonly searchInput: Locator;
  5  |   private readonly searchButton: Locator;
  6  |
  7  |   constructor(private readonly page: Page) {
  8  |     this.searchInput = page.locator('input[name="s"]');
  9  |     this.searchButton = page.locator('button.button-search');
  10 |   }
  11 |
  12 |   async goToHome(): Promise<void> {
  13 |     await this.page.goto('/');
  14 |   }
  15 |
  16 |   async searchProduct(productName: string): Promise<void> {
> 17 |     await this.searchInput.fill(productName);
     |                            ^ Error: locator.fill: Error: strict mode violation: locator('input[name="s"]') resolved to 4 elements:
  18 |
  19 |     await expect(
  20 |       this.page.getByText(productName, { exact: true })
  21 |     ).toBeVisible();
  22 |
  23 |     await this.searchButton.click();
  24 |   }
  25 |
  26 |   async expectProductPage(productSlug: string): Promise<void> {
  27 |     await expect(this.page).toHaveURL(
  28 |       new RegExp(`/product/${productSlug}/`)
  29 |     );
  30 |   }
  31 | }
```
