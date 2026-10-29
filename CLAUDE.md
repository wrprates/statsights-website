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
- Every route is prerendered to static HTML at build time for SEO: `npm run build` also runs an SSR build of `src/entry-server.tsx` and `scripts/prerender.js`, which writes `<route>.html`, `404.html`, and `sitemap.xml` into `dist/`. The browser hydrates that HTML (`src/main.tsx`).
- Production is https://statsights.com on GitHub Pages, deployed by `.github/workflows/main.yml` (build + `actions/deploy-pages`; repo Settings → Pages → Source = GitHub Actions). GitHub Pages serves `/services` from the prerendered `services.html` natively; `public/CNAME` holds the custom domain and `public/.nojekyll` disables Jekyll. DNS (A records to GitHub Pages IPs, `www` CNAME to `wrprates.github.io`) lives at the domain's DNS provider, not in this repo. All canonical/OG/sitemap URLs point to statsights.com (`src/seo.ts`, `index.html`).

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
    NotFound.tsx             # 404 page
  lib/           # utility functions (cn helper etc.)
  seo.ts         # per-page title, description, lang (used by RouteMeta and the prerender script)
  i18n.ts        # locale helpers: useLocale, useLocalizedPath, localizePath
  entry-server.tsx           # build-time render entry for scripts/prerender.js
scripts/
  prerender.js   # writes static HTML per route + sitemap.xml after `vite build`
```

## Pages & routes

| Route                   | Component                  | Description                              |
|-------------------------|----------------------------|------------------------------------------|
| `/`                     | `Home`                     | Main homepage                            |
| `/services`             | `Services`                 | Services overview                        |
| `/contact`              | `Contact`                  | Contact form / info                      |
| `/pt`, `/pt/services`, `/pt/contact` | same components | Portuguese (pt-BR) versions   |
| `/dealpath-consorcios`  | `DealpathConsorcios`       | Landing page for DealPath CRM product    |

Routes are handled by React Router with `BrowserRouter`, so each page has a real, indexable URL (e.g. `/dealpath-consorcios`). Old `/#/...` links are redirected by a script in `index.html`. When adding a route, add it to both `src/App.tsx` and `PAGES` in `src/seo.ts`.

## Languages

- English lives at the root, Portuguese (pt-BR) under `/pt` with the same paths (`/services` <-> `/pt/services`). The locale is derived from the URL (`useLocale()` in `src/i18n.ts`); there is no stored preference or auto-redirect.
- Translatable strings sit next to the component that uses them as `{ en: '...', pt: '...' }` objects, read with `copy.key[locale]`. Build internal links with `useLocalizedPath()` so they stay in the current language.
- To translate a new page: add both routes to `App.tsx` and both entries to `PAGES`. The header switcher (`LanguageSwitcher`) and hreflang tags only appear when both versions exist in `PAGES`.
- Each language has its own 404 (`404.html`, `pt/404.html`). GitHub Pages only serves the root `404.html`, but after hydration the page re-renders in the URL's language.
- The DealPath page is Portuguese-only and stays at `/dealpath-consorcios`.

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
