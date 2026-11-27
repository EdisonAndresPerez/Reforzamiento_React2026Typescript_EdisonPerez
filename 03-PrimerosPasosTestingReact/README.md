# Testing React 2026 · TypeScript

Rama independiente `03-PrimerosPasosTestingReact`. Contiene una copia de la app del módulo 02 en esta carpeta, con Vitest configurado.

**Autor:** Edison Andrés Pérez Martínez

## Comandos

```bash
npm install
npm run dev
npm test            # vitest run
npm run test:watch
npm run build       # tsc -b && vite build
npm run lint
npx tsc -b
```

## Pruebas

- `vite.config.ts` usa `defineConfig` de `vitest/config`, entorno `jsdom` y `setupFiles: './src/test/setup.ts'`.
- `src/test/setup.ts` registra los matchers de `@testing-library/jest-dom/vitest` y limpia el DOM tras cada prueba.
- `src/PrimerComponente.test.tsx` es la prueba smoke; agrega nuevas pruebas junto al componente que cubren.
- Las pruebas importan `describe`, `it` y `expect` desde `vitest` (no usan globals).

## Estado

`test`, `lint`, `tsc -b` y `build` pasan. El único cambio respecto a la rama 02 es que `ContadorProducto` ya no desestructura `cantidadProducto` (sigue en la interface y el contador sigue empezando en 0).
