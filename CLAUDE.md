# CLAUDE.md

## Project

**statsights-website** — Consulting company website.

Goal: a premium, modern marketing website for a consulting company. Must look credible, polished, and professional.

## Stack

- **Vite** — build tool and dev server
- **React** — UI framework
- **TypeScript** — language
- **Tailwind CSS v4** — styling (configured via CSS imports, no `tailwind.config.js`)
- **shadcn/ui** — component library (Radix + Maia preset, components live in `src/components/ui/`)

## Key decisions

- Using Vite (not Next.js) because this is a pure presentation website with no SSR or backend needs.
- Using shadcn/ui over MUI because visual quality and brand polish are the priority for a consulting site.
- shadcn components are owned by this repo — they live in `src/components/ui/` and are editable directly.
- `.npmrc` has `legacy-peer-deps=true` due to peer dependency conflicts in the Vite template's eslint setup.

## Commands

```bash
npm install      # restore dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build (outputs to dist/)
npm run preview  # preview production build
npm run lint     # run ESLint
```

## Adding shadcn components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
```

## Project structure

```
src/
  components/
    ui/          # shadcn/ui components (owned, editable)
    sections/    # page sections: Hero, Services, WhyUs, CTA
    layout/      # Header, Footer
  pages/         # page-level components
    Home.tsx
    Services.tsx
    Contact.tsx
    DealpathConsorcios.tsx   # landing page for the DealPath CRM product
  lib/           # utility functions (cn helper etc.)
```

## Pages & routes

| Route                   | Component                  | Description                              |
|-------------------------|----------------------------|------------------------------------------|
| `/`                     | `Home`                     | Main homepage                            |
| `/services`             | `Services`                 | Services overview                        |
| `/contact`              | `Contact`                  | Contact form / info                      |
| `/dealpath-consorcios`  | `DealpathConsorcios`       | Landing page for DealPath CRM product    |

Routes are handled by React Router with `HashRouter` (e.g. `/#/dealpath-consorcios`).

## DealPath Consorcios page

`src/pages/DealpathConsorcios.tsx` is a standalone sales/landing page for the **DealPath** product — a CRM built specifically for the consórcios (Brazilian installment purchase) sales market.

- Purchase link goes to Hotmart: `https://pay.hotmart.com/Q103816584I` (defined as `HOTMART_URL` constant at the top of the file)
- Page is in Brazilian Portuguese
- Sections: Hero → Pain points → Solution intro → Features grid → Trust signals → Pricing → FAQ → Final CTA
- No header/footer nav links point to this page by default — it is meant to be accessed directly via URL or external links

## Style guidelines

- Prefer clean, minimal design over heavy visual elements.
- Use Tailwind utility classes directly — do not write custom CSS unless necessary.
- Keep components composable and small.
- Do not add unused dependencies.
- Font: Figtree Variable (already configured via shadcn preset).
