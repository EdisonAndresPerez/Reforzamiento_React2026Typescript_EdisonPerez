# AGENTS.md

## Current checkout

- Active branch: `02-primerosPasos_React`. The only tracked app is `02-PrimerosPasosReact/PrimerosPasosReact/` (React 19, Vite 8, TypeScript 6).
- `01-Reforzamiento2025/` was deleted from this branch; any local copy is untracked leftovers (`node_modules`, `.env.local`, `.vite`). That module and its own instructions live on `origin/main` / `origin/01-reforzamiento_typescript`.
- Root `README.md` is stale here: it documents module 01 and the old branch. The nested `README.md` is unmodified Vite boilerplate. Trust `package.json`, tsconfigs, and ESLint config instead.
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

Build and lint both pass cleanly on this branch, so any new error is a regression.

## App wiring

- `src/main.tsx` is the only ReactDOM entry: `<App />` in `<StrictMode>` mounted into `#root` from `index.html`.
- `src/App.tsx` is the Vite starter page with a local `useState` counter; `src/App.css`, `src/index.css`, `public/icons.svg`, and `public/favicon.svg` support it. There is no routing, state library, env config, or API code.
- `vite.config.ts` enables `@vitejs/plugin-react`; there is no custom Vite config.

## Config constraints

- Both `tsconfig.app.json` and `tsconfig.node.json` enable `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, and `allowImportingTsExtensions`; there is no `strict` flag.
- Avoid `enum`, namespaces, and parameter properties (`erasableSyntaxOnly`); use `import type { ... }` for type-only imports.
- `main.tsx` imports `./App.tsx` with the `.tsx` extension intentionally; both extensionless and explicit-extension imports resolve.
- ESLint applies `eslint-plugin-react-hooks` and the react-refresh Vite config to all `*.ts`/`*.tsx` files.
