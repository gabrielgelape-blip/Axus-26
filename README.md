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

Texto institucional em `lib/content.ts`.
Catálogo de obras (títulos anônimos, fotos, vídeos) em `lib/obras.ts`.

Itens marcados com `[VALIDAR COM GABRIEL]` ainda são provisórios
(números da empresa, depoimentos, e-mail, vídeo de apresentação).

## Estrutura

- `app/page.tsx` — home (single page com âncoras)
- `app/portfolio/page.tsx` — lista de obras com filtro
- `app/portfolio/[slug]/page.tsx` — case de cada obra
- `app/blog/page.tsx` — página inicial do blog ("em breve")
- `components/` — blocos visuais
- `lib/content.ts` — texto institucional
- `lib/obras.ts` — portfólio real
- `public/obras/` — fotos WebP e vídeos curados (sem nomes de cliente)
- `_inbox/` — dump original do WhatsApp (não vai ao ar; gitignored)

## Imagens do portfólio

As obras no site vêm de `public/obras/` e `lib/obras.ts`.
Para reprocessar a partir do dump em `_inbox/obras`:

```bash
npm run obras:process
```

Não publique a pasta de WhatsApp. Títulos são anônimos
(“Reforma residencial — Belo Horizonte”), salvo obra pública
(Zoológico de BH).

## Fontes

Montserrat e Ubuntu estão instaladas via `@fontsource` (self-hosted, sem
depender do Google Fonts em tempo de build/execução).
