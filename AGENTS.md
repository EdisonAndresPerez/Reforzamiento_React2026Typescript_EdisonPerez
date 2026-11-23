# AGENTS.md

## Layout

- Official branch is `main`; it contains both course modules. Branches `01-reforzamiento_typescript` and `02-primerosPasos_React` stay separate for individual module work.
- Two independent Vite + React + TS apps, each with its own `package.json` and lockfile. Run npm commands inside the module dir, never at the repo root:
  - `01-Reforzamiento2025/` — module 01: JS/TS reinforcement (React 19, Vite 6, TS 5.8).
  - `02-PrimerosPasosReact/PrimerosPasosReact/` — module 02: React fundamentals (React 19, Vite 8, TS 6). The parent `02-PrimerosPasosReact/package-lock.json` is a tracked leftover; use the nested one.
- No CI, tests, or test framework. Do not invent test commands. Root PDFs are gitignored course material.

## Commands

Module 01:

```bash
cd 01-Reforzamiento2025
npm install
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build (typecheck + build)
npm run lint       # eslint .
npm run preview
npx tsc -b         # typecheck only; no typecheck script
```

Module 02:

```bash
cd 02-PrimerosPasosReact/PrimerosPasosReact
npm install
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build (also typechecks)
npm run lint       # eslint .
npm run preview
npx tsc -b         # typecheck only; no typecheck script
```

Neither module has a clean build/lint baseline; treat *new* errors as regressions. See "Known baseline failures" below.

## Module 01 workflow

- `src/bases/*.ts` are standalone course notes, not React modules. They execute top-level `console.log`, `fetch` and DOM code on import.
- To run a lesson, edit the imports in `src/main.tsx` and keep only one `./bases/...` import uncommented (`05-functions.ts` is active). `src/main.tsx` renders JSX inline; there is no `App.tsx`; `src/App.css` is unused.
- Giphy exercises 10/11 read `VITE_GIPHY_API_KEY` from gitignored `.env.local`; `.env.example` documents it.

## Module 02 wiring

- `index.html` → `/src/main.tsx`, the only ReactDOM entry. It mounts `<PrimerComponente />` in `<StrictMode>` into `#root`; `ComponenteTarea` import/JSX is commented out — edit `main.tsx` to switch exercises.
- `src/PrimerComponente.tsx` (not `.jsx`) renders a cart list using `src/carrito-de-compras/ContadorProducto.tsx` plus a plain CSS import.
- `main.tsx` imports `./PrimerComponente.js`; the `.js` extension resolving to `.tsx` is intentional under bundler resolution — don't "fix" it. The commented `./index.css` import points at a deleted file.
- Starter `App.tsx`, `App.css`, `index.css` and `src/assets/` were removed; `public/favicon.svg` and `public/icons.svg` remain. No routing, state library, env config or API code.

## TypeScript / lint constraints

- Both modules: `verbatimModuleSyntax`, `noUnusedLocals`, `noUnusedParameters`, `erasableSyntaxOnly`, `allowImportingTsExtensions`, `noFallthroughCasesInSwitch`. Use `import type { ... }` for type-only imports; `enum`, namespaces and parameter properties are rejected (prefer union types).
- Module 01 also has `strict: true` and `noUncheckedSideEffectImports`; module 02 has `strict` off.
- Each module's ESLint flat config applies recommended JS/TS, react-hooks and react-refresh rules to `**/*.{ts,tsx}`.

## Known baseline failures

- Module 01: unused vars in `src/bases/01-const-let.ts`, `03-object-literal.ts`, `07-array-destructuring.ts`; `enum Owner` in `src/data/heroes.data.ts` violates `erasableSyntaxOnly`; react-hooks false positives from local `useContextt`/`useState` in `src/bases/06-obj-desestructuring.ts` and `07-array-destructuring.ts`.
- Module 02: unused `cantidadProducto` and `handleSubtract` in `src/carrito-de-compras/ContadorProducto.tsx` (WIP cart exercise) break both build and lint.
