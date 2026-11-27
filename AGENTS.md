# AGENTS.md

## Branches / checkout

- Module branches are independent, not feature branches off `main`:
  - `01-reforzamiento_typescript` → `01-Reforzamiento2025/`
  - `02-primerosPasos_React` → `02-PrimerosPasosReact/PrimerosPasosReact/`
  - `03-PrimerosPasosTestingReact` (current) → `03-PrimerosPasosTestingReact/`: module 02 app plus Vitest.
- `main` integrates modules 01 + 02 only; it is not the base for module work. The old integrated 03 history remains in `main`, not in this branch.
- Before editing run `git branch --show-current` and `git status --short`. Each branch carries its own `AGENTS.md` / `README.md`; read the active ones.
- `origin/03-PrimerosPasosTestingReact` matches this independent branch (pushed with `--force-with-lease`); the local branch tracks it.
- Root PDFs are gitignored course material, not source. No stale `02-...` folder remains in this branch.

## Commands

No root `package.json`, no CI. Run npm commands only inside the active module folder.

Module 03 (current):

```bash
cd 03-PrimerosPasosTestingReact
npm install
npm run dev         # Vite dev server
npm test            # vitest run
npm run test:watch  # watch mode
npm run build       # tsc -b && vite build
npm run lint        # eslint .
npx tsc -b          # typecheck only
```

`test`, `lint`, `tsc -b` and `build` all pass on the committed baseline.

Modules 01/02 (only when checked out):

```bash
cd 01-Reforzamiento2025                              # or 02-PrimerosPasosReact/PrimerosPasosReact
npm install && npm run dev
npm run build && npm run lint && npx tsc -b
```

They have no test framework; do not invent test commands there.

## Module 03 wiring

- App files are copied from module 02. Only source delta: `ContadorProducto` no longer destructures the unused `cantidadProducto` prop; the prop stays in `DatosProductos` and the counter still starts at 0.
- `index.html` → `/src/main.tsx` is the only entry; it mounts `<PrimerComponente />` in `<StrictMode>` into `#root`. `ComponenteTarea` is commented out — edit `main.tsx` to switch.
- `main.tsx` imports `./PrimerComponente.js` even though the file is `.tsx`; intentional under bundler resolution, do not "fix" it. The commented `./index.css` import points at a deleted file.
- Vitest config lives in `vite.config.ts` using `defineConfig` from `vitest/config` with `environment: 'jsdom'` and `setupFiles: './src/test/setup.ts'`.
- `src/test/setup.ts` imports `@testing-library/jest-dom/vitest` and registers `cleanup` after each test. Tests do not use globals: import `describe`, `it`, `expect` from `vitest`.
- Existing smoke test: `src/PrimerComponente.test.tsx`. Add new tests beside the component they cover.
- Stack: React 19, Vite 8, TS 6, Vitest 5, jsdom 31, Testing Library React 16 and jest-dom 8.

## Notes for modules 01 / 02

- Module 01: `src/bases/*.ts` are standalone lesson scripts that run `console.log`, `fetch` and DOM code on import; keep one `./bases/...` import uncommented in `src/main.tsx`. `src/main.tsx` renders JSX inline; no `App.tsx`; Giphy lessons need `VITE_GIPHY_API_KEY` in gitignored `.env.local`.
- Module 02: baseline `build`/`lint` fail on unused `cantidadProducto` in `src/carrito-de-compras/ContadorProducto.tsx` (`handleSubtract` is used). Module 01 also has intentional unused vars, `enum Owner` and react-hooks false positives. Treat only new errors as regressions there.

## TypeScript / lint

- Module 03 / 02: `strict` off. Module 01: `strict: true` and `noUncheckedSideEffectImports`.
- All modules: `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`, `noFallthroughCasesInSwitch`, `allowImportingTsExtensions`. Use `import type { ... }`; `enum`, namespaces and parameter properties are rejected.
- ESLint flat config applies recommended JS/TS, react-hooks and react-refresh rules to `**/*.{ts,tsx}` and ignores `dist`.
