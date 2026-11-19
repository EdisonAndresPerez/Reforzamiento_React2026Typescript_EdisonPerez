# Primeros pasos con React 2026 · TypeScript

Apuntes y ejercicios del curso **React de cero a experto** de Fernando Herrera (DevTalles), enfocados en los fundamentos de React usando **Vite + TypeScript**.

**Autor:** Edison Andrés Pérez Martínez

**Rama:** `02-primerosPasos_React`

## Qué se está aprendiendo

En esta sección se abordan los fundamentos de React y conceptos esenciales como:

- Componentes
- Estructura y nomenclatura
- Hook `useState`
- CSS condicional
- Módulos de CSS
- Impresión de variables
- Props
- Mucho más

El objetivo de esta sección es establecer una base sólida en los fundamentos de React, sobre la cual podamos continuar desarrollando.

## Estructura del proyecto

```text
.
├── 02-PrimerosPasosReact/
│   └── PrimerosPasosReact/
│       ├── public/                 # favicon.svg e icons.svg
│       └── src/
│           ├── main.tsx            # punto de entrada; monta el componente activo
│           ├── PrimerComponente.jsx
│           └── ComponenteTarea.tsx
├── AGENTS.md
└── README.md
```

`main.tsx` monta `ComponenteTarea` dentro de `<StrictMode>` en `#root`. Para probar otro componente, descomenta su import y su JSX en `main.tsx`.

## Cómo ejecutar

```bash
cd 02-PrimerosPasosReact/PrimerosPasosReact
npm install
npm run dev
```

Comandos de verificación:

```bash
npm run build   # tsc -b && vite build
npm run lint    # eslint .
npx tsc -b      # solo chequeo de tipos
```

## Estado

- El módulo 01 vive en su propia rama `01-reforzamiento_typescript` y no forma parte de esta rama.
- La plantilla inicial de Vite se simplificó: `App.tsx`, los CSS de ejemplo y los assets de ejemplo ya no están en `src/`.
- Trata cualquier error nuevo de `build`/`lint` como una regresión; comprueba primero si tienes cambios sin confirmar en los componentes.
