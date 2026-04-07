# CLAUDE.md

## Project

**site-statsights** — Consulting company website.

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
    sections/    # page sections: Hero, Services, CaseStudies, Testimonials, Contact
    layout/      # Header, Footer, Navigation
  pages/         # page-level components
  lib/           # utility functions (cn helper etc.)
  styles/        # global CSS
```

## Style guidelines

- Prefer clean, minimal design over heavy visual elements.
- Use Tailwind utility classes directly — do not write custom CSS unless necessary.
- Keep components composable and small.
- Do not add unused dependencies.
- Font: Figtree Variable (already configured via shadcn preset).
