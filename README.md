# Axus Engenharia — Site (base)

Projeto Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Como rodar no Cursor / localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Onde editar o conteúdo

Quase todo o texto do site está centralizado em `lib/content.ts`.
Os itens marcados com `[VALIDAR COM GABRIEL]` são placeholders provisórios
(números da empresa, cases do portfólio, frase do Hero, depoimentos,
WhatsApp, e-mail, CNPJ, vídeo de apresentação) e precisam ser substituídos
pelos dados reais antes do lançamento.

## Estrutura

- `app/page.tsx` — home (single page com âncoras)
- `app/portfolio/page.tsx` — página de portfólio com filtro
- `app/blog/page.tsx` — página inicial do blog ("em breve")
- `components/` — todos os blocos visuais (Header, Hero, Services, etc.)
- `lib/content.ts` — conteúdo textual e dados (edite aqui primeiro)
- `public/` — logos da Axus já com fundo transparente

## Imagens do portfólio

As imagens usadas agora em `lib/content.ts` são placeholders do Unsplash
(fotos genéricas de construção/reforma) para que o layout já fique visível.
Substitua pelos links/arquivos das obras reais da Axus assim que possível —
o componente `next/image` já está configurado para isso, bastando trocar a
propriedade `image` de cada item.

## Fontes

Montserrat e Ubuntu estão instaladas via `@fontsource` (self-hosted, sem
depender do Google Fonts em tempo de build/execução).
