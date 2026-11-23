# AGENTS.md

## Checkout / layout

- Active branch `02-primerosPasos_React`: the only app is `02-PrimerosPasosReact/PrimerosPasosReact/` (React 19, Vite 8, TypeScript 6). The root has no `package.json`; the parent `02-PrimerosPasosReact/package-lock.json` is a tracked leftover — use the nested lockfile.
- Module 01 is absent from this branch and not on disk locally. It lives on `main` / `origin/01-reforzamiento_typescript`; those branches have their own AGENTS.md, read it before touching that module.
- Root README describes module 02 but is partly stale (it says `ComponenteTarea` is mounted). Trust `package.json`, tsconfigs, `eslint.config.js` and the source over either README; the nested README is unmodified Vite boilerplate.
- No CI, tests, or test framework. Do not invent test commands.

## Commands

Run from `02-PrimerosPasosReact/PrimerosPasosReact`:

```bash
npm install       # deps are gitignored; node_modules may be absent
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build (also typechecks)
npm run lint      # eslint .
npm run preview
npx tsc -b        # typecheck only; no typecheck script
```

- `build` and `lint` currently fail on WIP in the cart exercise (`src/carrito-de-compras/ContadorProducto.tsx`: unused `cantidadProducto` and `handleSubtract`). Treat *new* errors as regressions rather than expecting a clean baseline.

## App wiring / exercise switching

- `index.html` → `/src/main.tsx`, the only ReactDOM entry. It mounts `<PrimerComponente />` in `<StrictMode>` into `#root`.
- `ComponenteTarea` is an alternative exercise: its import and JSX in `main.tsx` are commented out. To demo another component, change the imports/JSX in `main.tsx` (not `App.tsx` — it does not exist here).
- `src/PrimerComponente.tsx` (not `.jsx`) renders a cart list using `src/carrito-de-compras/ContadorProducto.tsx` plus a plain CSS import.
- `main.tsx` imports `./PrimerComponente.js`; the `.js` extension resolving to `.tsx` is intentional under bundler resolution — don't "fix" it. The commented `./index.css` import points at a deleted file.
- Starter `App.tsx`, `App.css`, `index.css` and `src/assets/` were removed; `public/favicon.svg` and `public/icons.svg` remain. No routing, state library, env config or API code.

## TypeScript / lint constraints

- Both tsconfigs enable `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, `allowImportingTsExtensions`; `strict` is off.
- `erasableSyntaxOnly` rejects `enum`, namespaces and parameter properties (prefer union types); `verbatimModuleSyntax` requires `import type { ... }` for type-only imports.
- ESLint flat config applies recommended JS/TS, react-hooks and react-refresh rules to `**/*.{ts,tsx}` and ignores `dist`.
