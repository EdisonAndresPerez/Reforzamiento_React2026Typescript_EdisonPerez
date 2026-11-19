# AGENTS.md

## Current checkout

- Active branch: `02-primerosPasos_React`. The only tracked app is `02-PrimerosPasosReact/PrimerosPasosReact/` (React 19, Vite 8, TypeScript 6).
- `01-Reforzamiento2025/` was deleted from this branch; any local copy is untracked leftovers (`node_modules`, `.env.local`, `.vite`). That module and its own instructions live on `origin/main` / `origin/01-reforzamiento_typescript`.
- Root `README.md` now documents module 02. The nested `README.md` is unmodified Vite boilerplate. Trust `package.json`, tsconfigs, and ESLint config for toolchain details.
- No CI, tests, or test framework. Do not invent test commands.

## Commands

Run from `02-PrimerosPasosReact/PrimerosPasosReact`:

```bash
npm install       # deps are gitignored; node_modules may be absent
npm run dev       # Vite dev server
npm run build     # tsc -b && vite build
npm run lint      # eslint .
npm run preview
npx tsc -b        # typecheck only; no typecheck script
```

Treat new build/lint errors as regressions; local WIP in components may temporarily break them.

## App wiring

- `src/main.tsx` is the only ReactDOM entry: `<ComponenteTarea />` in `<StrictMode>` mounted into `#root` from `index.html`.
- `src/ComponenteTarea.tsx` is the mounted component; `src/PrimerComponente.jsx` exists but its import and JSX in `main.tsx` are commented out. The starter `App.tsx`, `App.css`, `index.css`, and `src/assets/` were removed; `public/icons.svg` and `public/favicon.svg` remain.
- No routing, state library, env config, or API code. `vite.config.ts` enables `@vitejs/plugin-react`; there is no custom Vite config.

## Config constraints

- Both `tsconfig.app.json` and `tsconfig.node.json` enable `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, and `allowImportingTsExtensions`; there is no `strict` flag.
- Avoid `enum`, namespaces, and parameter properties (`erasableSyntaxOnly`); use `import type { ... }` for type-only imports.
- `main.tsx` imports `./App.tsx` with the `.tsx` extension intentionally; both extensionless and explicit-extension imports resolve.
- ESLint applies `eslint-plugin-react-hooks` and the react-refresh Vite config to all `*.ts`/`*.tsx` files.
