<p align="center">
  <img src="./docs/banner-qa-challenge.png" alt="Banner do desafio técnico de QA da Aarin com a EBAC Shop" width="100%">
</p>

Este projeto automatiza o fluxo de compra da EBAC Shop e documenta o raciocínio por trás de cada decisão de teste — o que foi coberto, o que ficou de fora e por quê.

Antes de iniciar a automação, percorri a aplicação manualmente algumas vezes. Essa exploração foi importante para entender o comportamento real da plataforma, observar particularidades do ambiente e decidir quais cenários realmente agregariam cobertura.

A partir disso, priorizei os testes considerando risco, impacto para o usuário e relevância para o fluxo de negócio.

---

## Sumário

- [Estratégia de qualidade](#estratégia-de-qualidade)
- [Stack utilizada e por quê](#stack-utilizada-e-por-quê)
- [Cenários automatizados](#cenários-automatizados)
- [Cenários considerados mais críticos](#cenários-considerados-mais-críticos)
- [O que decidi não automatizar](#o-que-decidi-não-automatizar)
- [Achados e pontos de atenção](#achados-e-pontos-de-atenção)
- [Cenário de investigação](#cenário-de-investigação)
- [Arquitetura e organização da automação](#arquitetura-e-organização-da-automação)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Instalação e configuração do ambiente](#instalação-e-configuração-do-ambiente)
- [Execução dos testes](#execução-dos-testes-playwright)
- [Relatórios e evidências](#relatórios)
- [CI/CD](#cicd)
- [Considerações finais](#considerações-finais)

---

## Estratégia de qualidade

A exploração manual cobriu o fluxo inteiro antes de qualquer linha de automação: navegação pela loja, seleção de produto e variações, carrinho, alteração de quantidade, checkout, criação do pedido e consulta posterior em **Meus Pedidos**.

Foi nessa etapa que apareceram os comportamentos que mais influenciaram o desenho dos testes — elementos responsivos duplicados no DOM, particularidades na seleção de tamanho e cor, dependência de sessão no carrinho e um comportamento assíncrono perceptível no checkout. Só depois de entender isso a cobertura automatizada foi definida, priorizando risco, impacto para o usuário e relevância para o fluxo de negócio.

---

## Stack utilizada e por quê

| Ferramenta                                                | Papel no projeto                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Playwright**                                            | Framework de automação E2E. Escolhido pela API de auto-wait (menos flakiness que Selenium em SPAs com carregamento assíncrono), suporte nativo a interceptação de rede — usado para validar a resposta do checkout — e integração direta com TypeScript.                                                                   |
| **TypeScript**                                            | Tipagem estática nos Page Objects, Flows e dados de teste. Reduz erro de digitação em seletor e nome de propriedade, e deixa o autocomplete do editor guiar quem for dar manutenção depois.                                                                                                                                |
| **Node.js 20**                                            | Runtime exigido pelo Playwright e pelas ferramentas de tooling (ESLint, Prettier).                                                                                                                                                                                                                                         |
| **Allure**                                                | Relatório visual dos testes Playwright — histórico de execuções, agrupamento por comportamento (behaviors) e timeline de execução, úteis para comunicar resultado a quem não vai ler código.                                                                                                                               |
| **K6**                                                    | Smoke test de carga leve em produto e carrinho. Ferramenta separada do Playwright, focada em performance/carga, não em interface.                                                                                                                                                                                          |
| **ESLint + typescript-eslint + eslint-plugin-playwright** | Lint com verificação de tipos habilitada (`recommendedTypeChecked`) e regras específicas de Playwright, além das genéricas de TypeScript. Pega problemas que o compilador sozinho não vê — por exemplo, uma Promise que não foi aguardada (`no-floating-promises`), o que em teste E2E costuma virar flakiness silenciosa. |
| **Prettier**                                              | Formatação consistente, sem debate de estilo em code review.                                                                                                                                                                                                                                                               |
| **GitHub Actions**                                        | CI. Roda formatação, tipos, lint e testes funcionais a cada push/PR; o teste de performance fica separado, sob demanda, porque cada execução gera um pedido real no ambiente.                                                                                                                                              |
| **dotenv**                                                | Carrega credenciais de teste a partir de `.env`, mantendo dado sensível fora do código versionado.                                                                                                                                                                                                                         |

---

## Cenários automatizados

### Login

Autentica um cliente cadastrado e confirma que a sessão foi estabelecida. Esse cenário existe como **pré-condição técnica**, não como cobertura do módulo de autenticação em si: ele garante a base necessária para os fluxos que dependem de sessão, como o checkout completo e a consulta em "Meus Pedidos". Por isso, cenários negativos de login (credenciais inválidas, por exemplo) ficaram fora do escopo — validação de credenciais é uma regra de negócio da autenticação, não do fluxo de compra que o desafio pede.

```text
tests/auth/login.spec.ts
```

### Fluxo de compra E2E

Cobre a jornada principal do desafio, do início ao fim:

1. autenticação do cliente;
2. acesso à loja;
3. seleção de um produto;
4. escolha das variações de tamanho e cor;
5. adição ao carrinho;
6. validação inicial de preço e quantidade;
7. alteração da quantidade;
8. validação do recálculo;
9. avanço para checkout;
10. preenchimento dos dados;
11. escolha do método de pagamento;
12. finalização do pedido;
13. confirmação da compra;
14. validação do pedido em **Meus Pedidos**;
15. abertura e conferência dos detalhes persistidos.

```text
tests/checkout/purchase-flow.spec.ts
```

### Integração do checkout com o backend

Além da validação visual, o teste acompanha a requisição responsável pelo processamento do checkout, identificada durante a exploração:

```text
POST /?wc-ajax=checkout
```

A automação confirma que essa chamada retorna HTTP `200` e que o pedido criado permanece disponível na área do cliente. Sem isso, a interface poderia indicar sucesso enquanto o pedido não foi de fato persistido — um falso positivo que só uma asserção de rede captura.

### Segurança — controle de acesso ao pedido

Verifica o que acontece com um pedido depois que a sessão é encerrada:

1. autentica um cliente;
2. consulta um pedido existente;
3. encerra a sessão;
4. tenta acessar diretamente a URL daquele pedido;
5. confirma que detalhes da compra, itens e dados do cliente deixam de estar disponíveis.

```text
tests/security/order-access.spec.ts
```

### Performance exploratória do checkout

Mede o intervalo entre a confirmação da compra e a conclusão do processamento, usando **5 segundos** como referência exploratória — não um SLA definido pelo negócio.

```text
tests/performance/checkout-performance.spec.ts
```

As execuções ficaram consistentemente próximas de 8,3 segundos:

```text
8.137 ms
8.525 ms
8.289 ms
8.272 ms
```

Sem uma referência oficial de tempo aceitável para concluir uma compra, não classifico isso como defeito — é um ponto para validar com Produto e Engenharia. Por esse motivo, a referência de 5s não bloqueia o CI: quando ultrapassada, o teste registra um warning informativo, sem falhar.

### Smoke test com K6

Teste leve de carga em duas etapas anteriores ao checkout — produto e carrinho:

```text
2 usuários virtuais, 10 segundos
Thresholds: taxa de erro < 1% | p95 < 2 segundos
```

Resultado observado:

```text
20 requisições
20 checks aprovados
0% de falhas
p95: 929,53 ms | média: 512,44 ms
```

Comportamento estável sob carga leve nos pontos avaliados. Vale reforçar: isso é um **smoke test de performance**, não teste de capacidade, stress ou volume — a proposta é detectar regressão grosseira, não caracterizar limites do sistema.

```text
tests/k6/smoke-test.js
```

Por padrão, o smoke test aponta para o ambiente da EBAC Shop. Para rodar contra outro ambiente:

```bash
k6 run -e BASE_URL=http://outro-ambiente.com tests/k6/smoke-test.js
```

---

## Cenários considerados mais críticos

**Finalização do checkout** — é o ponto em que a intenção de compra vira, de fato, um pedido. Uma falha aqui pode custar a venda, gerar inconsistência de dados ou dar ao cliente uma falsa sensação de sucesso. Por isso recebeu cobertura funcional, de integração e de performance.

**Alteração de quantidade e recálculo** — quantidade e valor estão diretamente ligados à cobrança. Um erro de recálculo tem impacto financeiro direto, tanto para o cliente quanto para a empresa.

**Persistência do pedido** — validar só a mensagem "Pedido recebido" não me pareceu suficiente. O teste confirma que o pedido continua disponível depois, em "Meus Pedidos", e que seus detalhes podem ser consultados.

**Controle de acesso** — um pedido carrega dados de compra e dados pessoais. Por isso existe um cenário dedicado a confirmar que essas informações somem da tela depois do logout.

---

## O que decidi não automatizar

Nem tudo que dava pra testar virou automação — algumas decisões foram intencionais, e explico o porquê de cada uma.

**Compra com dois produtos diferentes.** O comportamento crítico de carrinho já é exercitado com um produto só: inclusão, variação, quantidade, subtotal, total e checkout. Um segundo produto aumentaria o tempo de execução sem reduzir de forma relevante a incerteza sobre o fluxo obrigatório. Faria sentido incluir se existissem regras específicas de promoção, frete ou estoque combinando itens — o que não é o caso aqui.

**Matriz completa de tamanho e cor.** Usei uma combinação válida representativa. Não identifiquei, na exploração manual, nenhuma regra que mudasse entre tamanhos ou cores diferentes — se existisse (preço ou disponibilidade variando por variação, por exemplo), aí sim valeria parametrizar.

**Todos os meios de pagamento.** Explorei os métodos disponíveis manualmente, mas para a automação principal priorizei "Pagamento na entrega", por ser o único que permite finalizar a jornada de forma previsível nesse ambiente. Os demais são candidatos naturais para regressão, caso surjam regras de negócio ou integrações específicas por método.

**Carga agressiva no checkout.** Cada finalização de compra gera um pedido real — rodar carga pesada nessa etapa poluiria a base de dados do ambiente compartilhado sem necessidade. Por isso a carga do K6 ficou restrita a produto e carrinho, que não têm esse efeito colateral.

**Concorrência e duplicidade de pedidos.** Cheguei a considerar um cenário de finalizações simultâneas da mesma compra, interessante para investigar idempotência. Não executei porque geraria efeitos colaterais reais no ambiente compartilhado — mas num ambiente controlado, esse é um teste que eu recomendaria.

---

## Achados e pontos de atenção

**Checkout perto de 8 segundos.** O tempo de processamento ficou consistente em torno de 8,3s nas execuções. Sem SLA documentado, não trato isso como bug — mas registro como ponto a confirmar com Produto: existe uma expectativa de experiência para essa etapa? Há requisito não funcional documentado em algum lugar? Se o tempo importa, vale investigar em qual parte do processamento ele se concentra.

**Navegação rápida, transação lenta.** O K6 mediu p95 abaixo de 1 segundo em produto e carrinho sob carga leve, enquanto o checkout ficou perto de 8s. Isso sugere que a etapa transacional tem um comportamento diferente da navegação comum — não dá pra concluir a causa só com esses testes, mas seria o primeiro ponto que eu investigaria numa análise de performance mais profunda.

**Ambiente em HTTP.** A inspeção pelo Network mostrou que o ambiente trafega dados do checkout sem TLS. Num ambiente de produção real, dado pessoal e credencial deveriam estar protegidos em trânsito. Como este é um ambiente de teste, registro isso como risco potencial documentado, não como vulnerabilidade de produção confirmada.

**Elementos duplicados no DOM.** As versões responsivas do layout coexistem no DOM — algumas visíveis, outras ocultas. Isso exigiu seletores mais específicos para a automação não interagir com componentes que o usuário não está de fato vendo. Ficaria bom rever a semântica desses componentes duplicados no front-end.

**Estado das variações de produto não é confiável via atributo.** Os componentes de tamanho e cor não refletem de forma consistente o estado selecionado via `aria-checked` ou classe CSS — por isso a automação passou a validar o valor efetivamente enviado no formulário, não o estado visual do componente. Isso também é um sinal de acessibilidade que vale revisar.

**Compra sem autenticação é permitida.** Não é necessariamente um problema — checkout como convidado é comum em e-commerce. Mas como existe uma área autenticada de pedidos, fica em aberto uma regra que Produto precisaria definir: se um cliente compra como convidado e depois cria (ou acessa) uma conta, esse pedido deveria aparecer no histórico?

---

## Cenário de investigação

### "Às vezes, o cliente paga, mas o pedido não aparece em Meus Pedidos"

**Primeira ação:** buscar contexto antes de qualquer teste. Verificaria se existe documentação funcional ou técnica desse fluxo, histórico de incidentes semelhantes e bugs já reportados (e resolvidos) com essa mesma natureza. Se houver, isso já me dá uma resposta antecipada — ou pelo menos reduz o espaço de hipóteses antes de eu gastar tempo reproduzindo o problema do zero.

Então eu reproduziria a compra ponta a ponta, acompanhando a aba Network e registrando, para a mesma transação: usuário, horário, método de pagamento, resposta HTTP do checkout e o identificador de pedido retornado pela interface. Sem acesso ao código-fonte, esse é o jeito mais rápido de conseguir um sinal objetivo de onde o estado deixa de ser consistente, em vez de investigar várias hipóteses em paralelo sem dado nenhum.

**Hipótese inicial:** o problema está em algum ponto entre a confirmação do checkout e a exibição em "Meus Pedidos" — não necessariamente na cobrança em si. Durante a exploração deste desafio, identifiquei uma variável relevante: o ambiente permite finalizar compras como convidado. Isso levanta a primeira pergunta a confirmar com Produto: **o cliente estava autenticado no momento da compra, ou o pedido foi feito como convidado e depois associado (ou não) à conta?**

**Redução de incerteza:** em vez de investigar todo o funil de uma vez, prefiro isolar o dado mais específico primeiro — a existência (ou não) do pedido no backend — e usar isso pra decidir a direção certa:

| Sintoma confirmado                                      | Direção da investigação                                                                  |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Checkout retornou sucesso, mas não há pedido no backend | Logs de criação/persistência: erro de banco, timeout, falha de integração                |
| Pedido existe no backend, mas não aparece na listagem   | Query do histórico, associação pedido↔usuário, sessão, cache, processamento assíncrono   |
| Pedido foi criado como convidado                        | Regra de associação entre pedido de convidado e conta cadastrada — a definir com Produto |
| Pedido aparece depois de um tempo                       | Indício de processamento assíncrono ou consistência eventual                             |
| Comportamento varia por meio de pagamento               | Isolar a investigação por integração/gateway                                             |

Essa tabela funciona como um filtro: um único dado concreto (o pedido existe no backend ou não) já elimina metade das hipóteses, em vez de eu precisar checar tudo ao mesmo tempo.

---

## Sugestões de melhoria

Essas sugestões se aplicam em caso de ambiente real.

- definir um SLA ou referência oficial para o tempo de processamento do checkout;
- disponibilizar métricas de latência e erro do checkout para observabilidade;
- melhorar a rastreabilidade entre a requisição de compra e o pedido persistido, com identificador de correlação entre frontend e backend;
- documentar a regra de associação de pedidos feitos como convidado;
- revisar atributos de acessibilidade dos componentes de variação (tamanho/cor);
- usar HTTPS/TLS em ambientes que manipulem dado real;
- disponibilizar ambiente ou massa de dados própria para testes de carga, sem o risco de poluir dados reais.

---

## Arquitetura e organização da automação

A estrutura separa responsabilidades pra reduzir duplicação e manter os testes legíveis:

- **`pages/`** — interação com a página e asserções específicas de interface (Page Object Model);
- **`flows/`** — sequências reutilizáveis de negócio: autenticação, preparação de carrinho, seleção de produto, preparação de checkout;
- **`fixtures/`** — injeta Page Objects e Flows nos testes via fixture do Playwright, sem instanciação manual repetida;
- **`helpers/`** — utilidades técnicas isoladas, como formatação de moeda (`currency.helper.ts`) e contagem de itens (`item-count.helper.ts`);
- **`data/`** — massa de teste: cliente, produto, método de pagamento;
- **`tests/`** — os cenários em si, com os passos de negócio e as asserções que fazem sentido ficar visíveis no teste.

A ideia por trás dessa separação: o teste E2E não precisa saber como o login funciona por dentro, ou como o carrinho é esvaziado — mas continua deixando explícitas as validações que importam pro cenário, como a checagem do status HTTP do checkout.

Tags foram adicionadas para permitir execução seletiva:

```text
@smoke @auth
@e2e
@security
@performance
```

Considerei usar `storageState` com um `beforeEach` global para pular o login em todo teste, mas descartei essa ideia neste contexto: o ambiente demonstrou manter estado associado ao usuário entre sessões (principalmente no carrinho), então preferi preparar cada pré-condição de forma explícita em vez de compartilhar estado entre testes — isso custa um pouco mais de tempo de execução, mas garante isolamento e previsibilidade.

### Qualidade de código

Além de Prettier e verificação de tipos (`tsc --noEmit`), o projeto usa ESLint com regras que analisam tipo (`typescript-eslint` no modo `recommendedTypeChecked`) e regras específicas de Playwright (`eslint-plugin-playwright`). Os poucos warnings que fazem sentido manter — como o uso de `{ force: true }` em seletores com DOM duplicado, ou a ausência de asserção direta em testes que delegam a validação para a camada de `flow` — foram suprimidos linha a linha, com o motivo documentado no comentário ao lado. Nenhuma regra foi silenciada globalmente.

---

## Estrutura do projeto

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── data/
│   ├── customers.ts
│   ├── payment-methods.ts
│   └── products.ts
│
├── fixtures/
│   └── test.fixture.ts
│
├── flows/
│   ├── auth.flow.ts
│   ├── cart.flow.ts
│   ├── checkout.flow.ts
│   └── product.flow.ts
│
├── helpers/
│   ├── currency.helper.ts
│   └── item-count.helper.ts
│
├── pages/
│   ├── cart.page.ts
│   ├── checkout.page.ts
│   ├── home.page.ts
│   ├── login.page.ts
│   ├── order.page.ts
│   ├── orders.page.ts
│   └── product.page.ts
│
├── tests/
│   ├── auth/
│   │   └── login.spec.ts
│   ├── checkout/
│   │   └── purchase-flow.spec.ts
│   ├── security/
│   │   └── order-access.spec.ts
│   ├── performance/
│   │   └── checkout-performance.spec.ts
│   └── k6/
│       └── smoke-test.js
│
├── .env.example
├── eslint.config.mjs
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

---

## Instalação e configuração do ambiente

As instruções abaixo cobrem todas as ferramentas usadas. Pra rodar só os testes funcionais com Playwright, Java e K6 não são obrigatórios — eles entram em cena apenas para o relatório Allure e o smoke test de performance, respectivamente.

### Pré-requisitos

- Git;
- Node.js 20 ou superior;
- npm;
- Java, para o relatório Allure;
- K6, para o smoke test de performance.

### 1. Clonar o repositório

```bash
git clone https://github.com/RoxaneNayara/ebac-shop-qa-challenge.git
cd ebac-shop-qa-challenge
```

### 2. Instalar as dependências

```bash
npm ci
```

Instala tudo que está travado no `package-lock.json`: Playwright, TypeScript, ESLint, Prettier, Allure e dotenv.

### 3. Instalar o Chromium do Playwright

```bash
npx playwright install chromium
```

Em Linux ou CI, se faltar dependência do sistema para o navegador:

```bash
npx playwright install --with-deps chromium
```

### 4. Configurar as variáveis de ambiente

```bash
cp .env.example .env
```

Preencha com os dados do usuário de teste. O `.env` não é versionado — está no `.gitignore` — porque contém dados sensíveis, mesmo sendo credenciais de um ambiente de teste, não de produção.

---

## Execução dos testes Playwright

**Suíte inteira** (inclui a performance exploratória, que gera um pedido real):

```bash
npm test
```

**Suíte funcional e de segurança** — é a que roda automaticamente no CI:

```bash
npx playwright test --project=chromium --grep-invert @performance
```

**Por tag:**

```bash
npx playwright test --grep @smoke
npx playwright test --grep @auth
npx playwright test --grep @e2e
npx playwright test --grep @security
npx playwright test --grep @performance
```

Listar sem executar:

```bash
npx playwright test --list --grep @security
```

**Outros modos:**

```bash
npm run test:headed   # navegador visível
npm run test:ui        # UI mode do Playwright
npm run test:debug     # modo debug
npm run test:login     # só o login
npm run test:purchase  # só o fluxo de compra E2E
npm run test:k6        # smoke test de carga (K6, fora do Playwright)
```

**Segurança e performance isoladamente:**

```bash
npx playwright test tests/security/order-access.spec.ts --project=chromium
npx playwright test tests/performance/checkout-performance.spec.ts --project=chromium
```

O limite de 5s usado no teste de performance é referência exploratória, não SLA — ultrapassar gera warning, não falha o teste.

---

## Relatórios

### Relatório HTML do Playwright

```bash
npm run report
```

ou

```bash
npx playwright show-report
```

### Relatório Allure

Depende de Java. No macOS com Homebrew:

```bash
brew install openjdk
```

Se o sistema não reconhecer o Java depois de instalado:

```bash
sudo ln -sfn /usr/local/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
java -version
```

Gerar evidência limpa (remove resultados anteriores):

```bash
rm -rf allure-results allure-report
npx playwright test --project=chromium
npm run allure:generate
npm run allure:open
```

Ou gerar e abrir direto a partir dos resultados, sem etapa intermediária:

```bash
npm run allure:serve
```

> O Allure cobre os testes Playwright (login, compra E2E, segurança). O smoke test do K6 não aparece nesse relatório — é uma ferramenta independente, com seu próprio formato de saída — e sua evidência fica no output do terminal, documentado na seção de evidências abaixo.

### Smoke test com K6

```bash
brew install k6
k6 version
```

```bash
npm run test:k6
```

ou

```bash
k6 run tests/k6/smoke-test.js
```

Não realiza checkout nem cria pedidos — só mede tempo de resposta e taxa de falha em produto e carrinho.

### Validações de qualidade de código

```bash
npx prettier --check .   # verificar formatação
npx prettier --write .   # aplicar formatação
npx tsc --noEmit         # checar tipos
npm run lint             # ESLint (typescript-eslint + eslint-plugin-playwright)
npx playwright test --list  # listar os testes disponíveis
```

---

## CI/CD

Workflow em `.github/workflows/playwright.yml`. A cada `push` e `pull_request` na `main`, o pipeline roda, em ordem:

1. instalação de dependências e do Chromium;
2. verificação de formatação (Prettier);
3. checagem de tipos (`tsc`);
4. lint (ESLint);
5. testes funcionais, incluindo o fluxo E2E completo e o de segurança;
6. upload do relatório do Playwright como artefato.

Cada etapa bloqueia a seguinte — se a formatação falha, o pipeline para ali, antes mesmo de rodar teste.

O teste de performance do checkout fica fora dessa esteira automática porque, ao validar a jornada completa, ele cria um pedido a cada execução — rodá-lo em todo push geraria pedidos desnecessários no ambiente. Ele roda separadamente, sob demanda, via `workflow_dispatch`.

Credenciais usadas no GitHub Actions ficam em **Repository Secrets**, nunca no código.

---

## Evidências

### Execução automatizada — Relatório Allure

- [Overview](./docs/evidences/allure/Allure-overview.png)
- [Behaviors](./docs/evidences/allure/Allure-behaviors.png)
- [Suites](./docs/evidences/allure/Allure-suites.png)
- [Graphs](./docs/evidences/allure/Allure-graphs.png)
- [Timeline](./docs/evidences/allure/Allure-timeline.png)
- [Packages](./docs/evidences/allure/Allure-packages.png)

### Vídeos da execução

- [▶️ Suíte funcional Playwright (login, compra E2E, segurança)](./docs/evidences/video/ebac-shop-qa-challenge-evidencia-e2e.mov)
- [▶️ Smoke test K6](./docs/evidences/video/ebac-shop-qa-challenge-evidencia-k6.mov)

### Achados

- [Performance do checkout](./docs/evidences/achados/01_checkout_performance_warning.png)
- [Smoke test com K6](./docs/evidences/achados/02_k6_smoke_result.png)
- [Resposta do checkout no Network](./docs/evidences/achados/03_network_checkout_response.png)
- [Headers da requisição de checkout](./docs/evidences/achados/04_network_checkout_headers_http.png)
- [Compra realizada sem autenticação](./docs/evidences/achados/05_guest_checkout_order_received.png)
- [Validação de segurança do acesso ao pedido](./docs/evidences/achados/06_security_order_access_passed.png)
- [Seleção de variação do produto](./docs/evidences/achados/07_product_variation_selected.png)

---

## Considerações finais

A proposta aqui foi cobrir o fluxo de checkout automatizando o que realmente agregava sinal, não o máximo de cenários possível. A exploração manual veio primeiro — entender o produto e onde estavam os riscos — e a automação foi construída em cima disso, mirando os pontos de maior impacto na jornada de compra.

Alguns achados são evidência objetiva de comportamento; outros são sinais que ainda precisam ser confrontados com regra de negócio, documentação ou observabilidade antes de virarem defeito confirmado. Mantive essa distinção clara ao longo do documento porque, pra mim, qualidade não é só detectar quando algo falha — é saber qual pergunta ainda falta responder antes de dizer que existe um problema.
