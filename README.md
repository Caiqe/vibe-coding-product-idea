# Hammer

## Integrantes
- Caique Gomes de Souza
- Isak de Amorim Almeida

## Sobre o produto

Hammer é uma ferramenta convencional em forma e função, apresentada como uma nova categoria premium por seu diferencial essencial: precisa permanecer conectada à tomada. A proposta é dirigida a pessoas que valorizam design, status e experiências conectadas até mesmo em tarefas domésticas simples.

## Jornada de construção

### Ideia inicial

A ideia foi escolher um produto não convencional e ver o potencial criativo da IA para conseguir vender isso como uma boa ideia. Outras ideias consideradas foram: Porta-cheques, Capa de chuva com furos estéticos ou até mesmo Planta que não morre (planta de plástico).

### Pesquisa e referências

Foram buscadas referências em produtos premiuns, a ideia era vender o Hammer como um artigo de luxo e passar a ideia que aquilo é um privilégio. Foram buscadas infomações em referências como: Apple, Gucci e Prada.

O Resultado foi um site minimalista e com estética agrádavel.

### Ferramentas utilizadas

- React 19 e JavaScript/JSX
- Vite
- CSS Modules e CSS nativo
- ESLint
- Git e GitHub
- Ferramentas de IA generativa descritas pela dupla na seção seguinte

### Uso de IA

Foi utilizado o Claude (Internet Chat) para geração de plano e levantamento de requisitos em arquivo MarkDown.
Foi utilizado GPT (Internet Chat) para geração de imagens personalizadas.
Foi Utilizado o modelo GPT-5.6-sol para implementação da ideia e incremento de funcionalidades.

### Evolução da solução

A solução surgiu de uma conversa incremental por meio do Claude, de forma que foi realizado o planejamento por meio de uma conversa, ele me mandava dúvidas e nós decidiamos o que devia ser feito. Isso nos gerou o .md responsável pela implementação da ideia.

- Foram alterados o tom das escritas da página para que fosse vendido com um produto sério e não uma piada.
- Foram alteradas as cores durante o desenvolvimento.

### Resultado final

O resultado foi surpreendente e satisfatório.

O resultado final foi uma landing page profissional para a apresentação e venda de um produto. A aplicação conta com uma apresentação moderna e com UX agrádavel, além de um formulário de venda fícticio para concluir a compra do produto.

Com mais tempo, gostariamos de ajustar alguns detalhes pontuais em questão de layout e implementar mais funcionalidades para explorar o uso da IA.

## Como rodar o projeto

```bash
npm install
npm run dev
```

Para validar a versão de entrega:

```bash
npm run lint
npm run build
```

## Arquitetura (FSD)

```text
src/
├── app/                  # inicialização e estilos globais
├── pages/home/           # composição e estado da página
├── widgets/              # seções independentes da landing page
├── features/
│   ├── checkout/         # modal, formulário e confirmação
│   └── faq-accordion/    # comportamento do acordeão
├── entities/             # produto, oferta e dados mockados
└── shared/               # UI, hooks, utilitários e configurações
```
