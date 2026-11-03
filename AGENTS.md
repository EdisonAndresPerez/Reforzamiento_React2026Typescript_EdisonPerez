# AGENTS.md

## Layout

- The actual app is `01-Reforzamiento2025/` (React 19 + Vite 6 + TypeScript). The repo root only contains course PDFs (gitignored) and this project.
- Run all npm commands from `01-Reforzamiento2025/`, not the repo root.
- Git repo; module work lives on `01-reforzamiento_typescript`. No CI, no tests, no test framework. Do not invent test commands.

## Commands

```bash
cd 01-Reforzamiento2025
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build (typecheck + build)
npm run lint      # eslint .
npm run preview   # preview production build
npx tsc -b        # typecheck only, no separate typecheck script
```

## Exercise-script workflow

- `src/bases/*.ts` are standalone course notes, not React modules. They execute top-level `console.log`, `fetch`, and DOM code on import.
- To run a lesson, edit the import list in `src/main.tsx` and keep only one `./bases/...` import uncommented. Currently `05-functions.ts` is active.
- `src/main.tsx` renders JSX inline; there is no `App.tsx`. `src/App.css` is unused.
- Giphy exercises 10/11 read `VITE_GIPHY_API_KEY` from `.env.local` (gitignored); `.env.example` documents the key.

## TypeScript constraints

- `strict`, `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, and `erasableSyntaxOnly` are on.
- Use `import type { ... }` for types (the codebase already follows this).
- `erasableSyntaxOnly` rejects `enum`, namespaces, and parameter properties. `src/data/heroes.data.ts` still uses `enum Owner`, so it fails typecheck; prefer union types for new code.

## Known baseline failures

`npm run build` and `npm run lint` already fail on existing exercise code; do not treat these as regressions you introduced:

- Unused vars: `src/bases/01-const-let.ts`, `03-object-literal.ts`, `07-array-destructuring.ts`
- `enum Owner` violates `erasableSyntaxOnly` in `src/data/heroes.data.ts`
- `react-hooks/rules-of-hooks` false positives on locally defined `useContextt`/`useState` in `src/bases/06-obj-desestructuring.ts` and `07-array-destructuring.ts`

When verifying your own change, check that these existing errors are unchanged rather than expecting a clean build.
