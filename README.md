# site-statsights

Consulting company website built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- [Vite](https://vite.dev) — build tool and dev server
- [React](https://react.dev) — UI framework
- [TypeScript](https://www.typescriptlang.org) — language
- [Tailwind CSS](https://tailwindcss.com) — styling
- [shadcn/ui](https://ui.shadcn.com) — component library

## Requirements

- Node.js 20+

## Getting started

### 1. Clone the repo

```bash
git clone <repo-url>
cd site-statsights
```

### 2. Restore dependencies

```bash
npm install
```

This reads `package-lock.json` and installs the exact same versions used in development.

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Adding shadcn/ui components

Components are added individually into `src/components/ui/` and owned by this repo:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add navigation-menu
```

See the full component list at [ui.shadcn.com/docs/components](https://ui.shadcn.com/docs/components).

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

## Dependency management

Dependencies are managed with npm. The lockfile (`package-lock.json`) is committed to git and ensures reproducible installs.

```bash
npm install <package>       # add a dependency
npm install -D <package>    # add a dev dependency
npm uninstall <package>     # remove a dependency
```

The lockfile is updated automatically after any of these commands.
