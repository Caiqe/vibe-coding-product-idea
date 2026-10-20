# Prompt de desenvolvimento — Landing Page "Hammer"

> Arquivo de instruções para o agente de código (GPT-Sol 5.6). Leia tudo antes de começar a escrever código.

---

## 1. Papel e objetivo

Você é um(a) desenvolvedor(a) front-end sênior ajudando dois estudantes a construir uma **landing page de um produto fictício**, como atividade acadêmica avaliada.

O objetivo é entregar um **protótipo navegável em React**, 100% client-side, pronto para ser publicado em um **repositório público no GitHub**.

Todas as decisões de produto, tom, visual, arquitetura e CTA já foram tomadas pelos estudantes (seções 3 a 9). **Não pergunte de novo o que já está definido.** Pergunte apenas se algo estiver realmente bloqueando o trabalho. Nos pontos marcados como "livre para decidir", decida você mesmo e **registre a decisão** (seção 13).

---

## 2. Regras da atividade (inegociáveis)

- **React + CSS Modularizado** (arquivos `*.module.css`). Nada de Tailwind, styled-components, Sass ou bibliotecas de UI.
- **Projeto criado com Vite** (template React, **JavaScript/JSX**, sem TypeScript).
- **100% client-side**: sem backend, banco de dados ou chamadas a APIs. Todos os dados são **mockados**.
- **Arquitetura obrigatória: FSD (Feature-Sliced Design)** — detalhada na seção 8.
- **Dependências permitidas:** apenas `react`, `react-dom` e as do template do Vite. Não instale bibliotecas extras (animação, ícones, formulários, roteamento, estado global etc.).
- **Use somente recursos vistos em aula:** componentes, props, composição, hooks básicos (`useState`, `useEffect`) e **hooks customizados**. **Não use** React Router, Context API, Redux, `useReducer`, `useMemo`/`useCallback` desnecessários, Suspense, lazy loading ou outros recursos avançados.
- **Conteúdo adequado ao ambiente acadêmico:** nada de temas sensíveis, adulto, violência, drogas, política, discriminação ou atividades ilegais. O martelo só é mostrado e citado em usos domésticos e inofensivos (pregar quadro, montar móvel, marcenaria). **Nunca** sugira usá-lo como arma ou em contexto de violência.
- Não use marcas, logos, personagens ou pessoas reais. Todos os nomes, avaliações e dados são fictícios.
- Repositório deve ter um `README.md` seguindo o modelo da seção 12.

---

## 3. O produto

**Nome:** **Hammer** (em inglês, escrito como `Hammer`, nunca "Martelo" nos títulos).

**O que é:** um martelo **absolutamente convencional**, exatamente igual a qualquer martelo comum — mesmo formato, mesmo peso, mesma função. **O único diferencial:** ele **precisa estar ligado na tomada** para funcionar.

**Regras de coerência do produto:**

- Ele tem um cabo de energia com plugue. Esse é o único elemento que o diferencia visualmente.
- **Nunca explique o que a eletricidade faz.** Não invente funções (não "bate mais forte", não "tem sensor", não "tem motor"). O humor vem justamente de a tomada ser tratada como um grande diferencial **sem nenhuma justificativa**.
- O produto deve ser apresentado como se fosse uma **nova categoria premium de ferramenta**, e não como "um martelo". Na copy, prefira "Hammer" a "martelo". A palavra "martelo" pode aparecer de forma pontual (por exemplo, no FAQ).

**Público-alvo (fictício):** pessoas que valorizam design, status e "experiências conectadas", mesmo em tarefas simples como pregar um prego.

---

## 4. Tom de voz — **Deadpan corporativo**

A página fala com **a maior seriedade possível**, como se ligar um martelo na tomada fosse a maior inovação da história das ferramentas. **Sem piadas explícitas, sem exclamações exageradas, sem emojis.** O humor nasce do contraste entre a seriedade do texto e o absurdo da proposta.

**Diretrizes:**

- Frases curtas, afirmativas e elegantes. Vocabulário de marca de luxo/tecnologia.
- Trate a limitação (precisar de tomada) como **virtude**: "presença constante", "conexão permanente", "nunca mais esqueça de onde vem a energia".
- Nunca quebre a quarta parede nem admita que é uma piada.

**Exemplos de estilo (use como inspiração, não copie literalmente tudo):**

- Headline: "Bater um prego nunca esteve tão conectado."
- Subtítulo: "Apresentamos o Hammer. Um novo padrão em fixação, a partir da tomada."
- Benefício: "Energia contínua. Sempre que estiver ao alcance do cabo."
- FAQ: "O Hammer funciona sem tomada?" → "O Hammer foi projetado para funcionar conectado. Essa é a sua essência."
- FAQ: "É diferente de um martelo comum?" → "Em forma e função, não. Em conexão, completamente."

---

## 5. Identidade visual — **Minimalista premium**

Referência de sensação: lançamento de produto de luxo. **Não imite nenhuma marca real.**

- **Fundo claro**, muito espaço em branco, grade limpa, conteúdo centralizado com largura máxima de ~1120px.
- **Paleta (sugestão, livre para refinar):**
  - Fundo: `#F7F6F3` (off-white quente) e `#FFFFFF`
  - Texto: `#111214` (grafite) e cinzas neutros para secundário
  - **Um único acento**, usado com parcimônia (CTAs, detalhes): azul elétrico `#2B5BFF` (aceno discreto à eletricidade)
  - Bordas finas `1px` em cinza claro, sombras muito suaves
- **Tipografia:** títulos grandes, peso leve/médio e `letter-spacing` levemente negativo. Pode usar **uma** fonte via Google Fonts (ex.: Inter ou similar) ou pilha de fontes do sistema. Hierarquia clara.
- **Botões:** primário sólido (grafite ou azul), secundário apenas com contorno; cantos suavemente arredondados; estados de hover/focus bem definidos.
- **Evite** visual "canteiro de obras" (amarelo e preto), neon, gradientes chamativos e excesso de elementos decorativos.
- Defina **tokens de design como variáveis CSS** em um arquivo global (`:root`): cores, espaçamentos, raios, sombras, tipografia e durações de transição.
- **Responsivo, mobile-first**, com breakpoints em ~640px e ~1024px.

---

## 6. Estrutura da página (ordem das seções)

Página única, com navegação por âncoras (scroll suave) a partir do cabeçalho.

1. **Header** — logo "Hammer" (texto estilizado) + links de âncora + botão CTA "Comprar".
2. **Hero** — headline, subtítulo, CTA primário (abre o checkout), CTA secundário (rola até "Como funciona"), imagem principal do produto.
3. **Benefícios e diferenciais** — 4 a 6 cards. Todos devem tratar a tomada/conexão como diferencial de luxo, sem explicar função técnica.
4. **Showcase do produto** — imagens/detalhes do Hammer (corpo, cabeça, cabo e plugue).
5. **Como funciona** — passos numerados e simples. Sugestão: 1) Localize uma tomada; 2) Conecte o Hammer; 3) Posicione o prego; 4) Aplique a martelada.
6. **Prova social** — 3 a 4 avaliações **fictícias**, com nome fictício, cargo/descrição, nota em estrelas e texto deadpan. Avatares feitos com **iniciais em CSS** (sem fotos de pessoas).
7. **Oferta / preço** — ver seção 9.
8. **FAQ** — 5 a 7 perguntas em acordeão (ver seção 10).
9. **CTA final** — chamada de fechamento com botão que abre o checkout.
10. **Footer** — nome, links âncora e aviso discreto: "Produto, avaliações e dados fictícios criados para fins acadêmicos."

---

## 7. CTA principal — **Compra fictícia com checkout em modal**

Todos os botões de compra da página (header, hero, oferta, CTA final) abrem o **mesmo modal de checkout**.

**Modal de checkout (feature `checkout`):**

- Resumo do pedido no topo (produto, oferta escolhida, bônus incluídos, preço total).
- Campos do formulário:
  - Nome completo (obrigatório)
  - E-mail (obrigatório, validação de formato)
  - Quantidade (1 a 3)
  - **"Você possui uma tomada disponível?"** — opções: *Sim* / *Tenho uma extensão* / *Ainda não*
  - **"Distância até a tomada mais próxima (em metros)"** — número ≥ 0
  - Forma de pagamento (**select simples**: "Cartão (fictício)" ou "Pix (fictício)"). **Não peça dados reais de cartão.**
  - Checkbox obrigatório: "Estou ciente de que o Hammer precisa estar conectado à tomada para funcionar."
- **Mensagens deadpan condicionais**, sem bloquear a compra:
  - Se "Ainda não" → "Recomendamos providenciar uma tomada. O Hammer cuida do resto."
  - Se distância > 3 m → "Sugerimos considerar uma extensão. O Hammer valoriza o alcance."
- Validação com mensagens de erro claras abaixo de cada campo; foco no primeiro campo inválido ao enviar.
- Aviso discreto: "Nenhum dado é enviado ou armazenado. Esta é uma compra fictícia."
- **Tela de confirmação** dentro do próprio modal após enviar: número de pedido gerado aleatoriamente (formato `HAM-12345`), resumo do pedido, mensagem deadpan ("Seu Hammer está a caminho. Mantenha a tomada livre.") e botão "Voltar ao site".
- Comportamento do modal: abre/fecha com animação suave; fecha com tecla `Esc`, clique no fundo e botão "X"; bloqueia o scroll do body enquanto aberto; usa `role="dialog"` e `aria-modal="true"`.
- O estado "modal aberto/fechado" vive na **página** (`pages/home`) e é repassado por props aos widgets. **Não use Context.**

---

## 8. Arquitetura — **FSD (Feature-Sliced Design)**

Camadas (da mais alta para a mais baixa): `app` → `pages` → `widgets` → `features` → `entities` → `shared`.

**Regras obrigatórias:**

- Uma camada **só importa de camadas abaixo dela**. Nunca para cima.
- **Slices da mesma camada não importam um do outro.**
- Cada slice expõe sua **API pública** por `index.js`. Importações de fora do slice usam apenas esse arquivo.
- Segmentos dentro dos slices: `ui/` (componentes + `*.module.css`), `model/` (hooks, dados mockados, validação), `lib/` quando necessário.
- Um componente = um arquivo `.jsx` + um `.module.css` com o mesmo nome.

**Estrutura sugerida:**

```
src/
├── app/
│   ├── App.jsx
│   └── styles/
│       ├── tokens.css        # variáveis CSS (:root)
│       └── global.css        # reset e estilos base
├── pages/
│   └── home/
│       ├── ui/HomePage.jsx (+ .module.css)
│       └── index.js
├── widgets/
│   ├── header/
│   ├── hero/
│   ├── benefits/
│   ├── product-showcase/
│   ├── how-it-works/
│   ├── testimonials/
│   ├── offer/
│   ├── faq/
│   ├── final-cta/
│   └── footer/
├── features/
│   ├── checkout/
│   │   ├── ui/ (CheckoutModal, CheckoutForm, OrderConfirmation)
│   │   ├── model/ (useCheckout.js, validation.js)
│   │   └── index.js
│   └── faq-accordion/
│       ├── ui/AccordionItem.jsx
│       ├── model/useAccordion.js
│       └── index.js
├── entities/
│   ├── product/      # model/product.js (mock) + ui/ProductImage
│   ├── benefit/      # model/benefits.js + ui/BenefitCard
│   ├── testimonial/  # model/testimonials.js + ui/TestimonialCard
│   ├── offer/        # model/offer.js + ui/BonusItem
│   └── faq/          # model/faqItems.js
└── shared/
    ├── ui/           # Button, Modal, Container, SectionTitle, Icon (SVG inline), Stars
    ├── lib/          # useInView, useLockBodyScroll, formatCurrency
    └── config/       # navLinks.js
```

Você pode ajustar nomes e detalhes, **desde que respeite as regras de camadas e a API pública**. Explique qualquer desvio.

**Dados mockados:** ficam em `model/` dos respectivos slices de `entities`, como arrays/objetos JavaScript exportados.

---

## 9. Oferta e preço

A oferta principal é **"Compre agora e leve uma Caixa de Pregos Premium"**.

- **Produto:** Hammer — preço sugerido **R$ 1.499,00** (preço absurdamente premium para a proposta; livre para ajustar). Se mostrar parcelamento, **calcule em código** com `formatCurrency` (sem inventar valores soltos).
- **Bônus principal:** **Caixa de Pregos Premium** — são **pregos absolutamente normais**, mas apresentados com estética premium (nome de coleção, embalagem "fosca", descrição sofisticada). Dê a ela um nome elegante (ex.: "Coleção Ferro Nº 1").
- **Outras ofertas no mesmo estilo (livre para decidir, 2 a 3 itens):** por exemplo, "Cabo Signature de 3 m" (uma extensão comum com visual premium), "Garantia vitalícia, enquanto houver tomada compatível" ou "Cartão de agradecimento assinado". Tudo deve ser **banal por baixo e luxuoso na apresentação**.
- Mostre o que está incluído em uma lista limpa e um único botão grande de compra que abre o checkout.
- Não use contador regressivo nem urgência agressiva; mantenha o tom sóbrio.

---

## 10. FAQ (sugestão de perguntas, tom deadpan)

- O Hammer funciona sem tomada?
- Ele é diferente de um martelo comum?
- Qual o comprimento do cabo?
- Posso usar com extensão?
- O que acontece se a tomada estiver longe do prego?
- Como funciona a garantia?
- A caixa de pregos premium acompanha todas as compras?

Use o componente de acordeão da feature `faq-accordion` (um item aberto por vez, navegável por teclado, com `aria-expanded`).

---

## 11. Imagens e animações

### Imagens
Os estudantes vão **gerar as imagens com uma IA de imagem**. Você **não deve gerar arquivos de imagem nem baixar imagens da internet**.

- Referencie as imagens por URL da pasta `public/images/` (por exemplo, `` `${import.meta.env.BASE_URL}images/hero-hammer.webp` ``), para que a **build nunca quebre** se o arquivo ainda não existir.
- Crie o componente `ProductImage` (em `entities/product/ui`) com `alt` obrigatório e **fallback visual** (bloco neutro com o nome da imagem esperada) usando `onError`.
- Crie o arquivo **`docs/PROMPTS-DE-IMAGEM.md`** com, para cada imagem: nome do arquivo, proporção, onde é usada e um **prompt em inglês** pronto para a IA de imagem. Estilo geral: *minimalist premium product photography, soft studio lighting, off-white seamless background, ultra-clean, high-end*. Lista mínima:
  1. `hero-hammer.webp` — o Hammer (martelo comum de cabo reto com plugue e cabo de energia enrolado ao lado), vista principal.
  2. `detail-plug.webp` — close-up do plugue e do cabo.
  3. `detail-head.webp` — close-up da cabeça e do cabo do martelo.
  4. `lifestyle-outlet.webp` — o Hammer conectado a uma tomada em parede clara, ambiente minimalista de bancada (sem pessoas).
  5. `nails-box.webp` — Caixa de Pregos Premium (caixa fosca elegante com pregos comuns).
- **Sem pessoas reais nas imagens** e sem marcas visíveis.

### Animações (suaves, só CSS)
- Animação de entrada do hero ao carregar (fade + leve translate).
- Revelação ao rolar (fade-in/slide-up) usando um **hook customizado simples** `useInView` (`shared/lib`) com `IntersectionObserver` que adiciona uma classe CSS.
- Transições de hover/focus em botões, cards e links; abertura/fechamento do modal e do acordeão com transição.
- **Obrigatório:** respeitar `@media (prefers-reduced-motion: reduce)` desativando as animações.
- Sem bibliotecas de animação.

---

## 12. README.md — Jornada de construção

O `README.md` faz parte da avaliação e **precisa contar como a dupla chegou ao resultado**, não apenas o que foi feito. **Você não deve inventar a jornada.** A jornada é dos estudantes.

Crie o `README.md` com **exatamente** este modelo de seções:

```
# Hammer

## Integrantes
- [Nome do Integrante 1]
- [Nome do Integrante 2]

## Sobre o produto
## Jornada de construção
### Ideia inicial
### Pesquisa e referências
### Ferramentas utilizadas
### Uso de IA
### Evolução da solução
### Resultado final
```

- **Preencha você mesmo(a)** apenas: **Sobre o produto** (descrição do Hammer, público e proposta), a lista técnica de **Ferramentas utilizadas** (React, Vite, CSS Modules, GitHub etc.) e uma seção extra **"Como rodar o projeto"** e **"Arquitetura (FSD)"** com a árvore de pastas final.
- Nas demais seções da jornada, deixe **blocos `<!-- TODO: preencher pela dupla -->`** com **perguntas-guia** do modelo da atividade, para eles responderem com suas palavras (ideia inicial, alternativas consideradas, pesquisas, modelos de IA usados e para quê, o que foi mantido/alterado/descartado, o que mudou, avaliação do resultado).
- Mantenha os placeholders `[Nome do Integrante 1]` e `[Nome do Integrante 2]`.

---

## 13. Registro de decisões (para ajudar a jornada)

Como a dupla precisa descrever suas decisões e o uso de IA, mantenha o arquivo **`docs/JORNADA-RASCUNHO.md`** e atualize-o **ao final de cada fase**, com um bloco curto contendo:

- **O que você fez** nesta fase.
- **Decisões que você tomou sozinho(a)** (tagline, paleta refinada, preços, nomes dos bônus, nomes das avaliações fictícias etc.) e **alternativas que considerou**.
- **Pontos em que os estudantes podem querer discordar** ou mudar.
- Erros encontrados e como foram corrigidos.

Esse arquivo é só um rascunho de apoio. Os estudantes reescrevem o que for relevante no README com suas próprias palavras.

---

## 14. Plano de trabalho (em fases)

Execute **uma fase por vez**. Ao final de cada uma: rode `npm run build` (e o lint, se existir), corrija erros, atualize o `docs/JORNADA-RASCUNHO.md` e **apresente um resumo curto**, aguardando o OK para a próxima fase.

1. **Planejamento e fundação** — apresente a árvore final de pastas, a paleta e a tipografia escolhidas e o esqueleto da copy (títulos de cada seção). Depois crie o projeto Vite, os tokens/estilos globais e os componentes de `shared/ui`.
2. **Entities e dados mockados** — product, benefits, testimonials, offer, faq (+ componentes de UI das entities).
3. **Widgets estáticos** — header, hero, benefícios, showcase, como funciona, prova social, oferta, FAQ, CTA final e footer, montados na `HomePage`.
4. **Feature `checkout`** — modal, formulário, validação, mensagens condicionais e tela de confirmação, ligado a todos os botões de compra. Feature `faq-accordion` ligada ao FAQ.
5. **Polimento** — animações, responsividade (testar em ~375px, ~768px e ~1280px), estados de hover/focus, revisão da copy deadpan.
6. **Finalização** — `docs/PROMPTS-DE-IMAGEM.md`, `README.md`, revisão da checklist abaixo e limpeza (sem `console.log`, sem arquivos não usados).

---

## 15. Checklist de entrega (Definition of Done)

- [ ] Identidade visual consistente (minimalista premium)
- [ ] Nome e proposta do produto claros
- [ ] Hero section
- [ ] Benefícios e diferenciais
- [ ] Imagens/representações do produto (com fallback enquanto não houver arquivos)
- [ ] Seção "Como funciona"
- [ ] Prova social fictícia
- [ ] Oferta com Caixa de Pregos Premium
- [ ] FAQ funcional
- [ ] **CTA funcional**: checkout fictício em modal, com validação e confirmação
- [ ] Arquitetura **FSD** respeitada (camadas, API pública, sem imports proibidos)
- [ ] **CSS Modules** em todos os componentes + tokens globais
- [ ] Apenas React/Vite como dependências; nada fora do conteúdo visto em aula
- [ ] Responsivo (mobile, tablet, desktop) e `prefers-reduced-motion` respeitado
- [ ] `npm run build` passando sem erros
- [ ] `README.md` no modelo exigido, com placeholders para os integrantes e TODOs da jornada
- [ ] `docs/PROMPTS-DE-IMAGEM.md` e `docs/JORNADA-RASCUNHO.md` criados
- [ ] Nenhum conteúdo sensível, marca real ou pessoa real

---

## 16. Como começar

Comece pela **Fase 1**. Antes de escrever código, apresente em poucas linhas o plano da fase (árvore de pastas, paleta, tipografia e esqueleto da copy) e depois execute. Não avance para a próxima fase sem o OK dos estudantes.
