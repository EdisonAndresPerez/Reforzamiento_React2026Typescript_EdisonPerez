# React 2026 · TypeScript — Reforzamiento y primeros pasos

Apuntes y ejercicios del curso **React de cero a experto** de Fernando Herrera (DevTalles). Cada módulo tiene su propia carpeta y rama; `main` reúne ambos.

**Autor:** Edison Andrés Pérez Martínez

## Ramas

| Rama | Contenido |
| --- | --- |
| `01-reforzamiento_typescript` | Módulo 01 — JavaScript moderno y TypeScript |
| `02-primerosPasos_React` | Módulo 02 — fundamentos de React con Vite + TypeScript |
| `main` | Oficial: ambos módulos juntos |

## Módulo 01 — Reforzamiento (`01-Reforzamiento2025/`)

JavaScript moderno y TypeScript antes de entrar de lleno a React.

### Qué se está aprendiendo

| # | Tema | Archivo | Puntos clave |
|---|------|---------|--------------|
| 01 | Variables y tipos | `src/bases/01-const-let.ts` | `const` por defecto, tipos explícitos, inferencia, operaciones y template strings. |
| 02 | Template strings | `src/bases/02-template-string.ts` | Interpolación, expresiones, ternarios y textos multilínea. |
| 03 | Objetos e interfaces | `src/bases/03-object-literal.ts` | Objetos literales, objetos anidados, spread y creación de interfaces. |
| 04 | Arreglos | `src/bases/04-arrays.ts` | Tipado de arreglos, copias con spread, `for...of`, `map`, `filter` y `reduce`. |
| 05 | Funciones | `src/bases/05-functions.ts` | Funciones declaradas y flecha, parámetros/retorno tipados y retorno de objetos. |
| 06 | Desestructuración de objetos | `src/bases/06-obj-desestructuring.ts` | Desestructuración simple, renombrado, anidada y en parámetros. |
| 07 | Desestructuración de arreglos | `src/bases/07-array-destructuring.ts` | Posiciones, valores omitidos, `as const` y retorno tipo tupla. |
| 08 | Import/export | `src/bases/08-imp-exp.ts` | Módulos, `import type`, `find`, `filter` y datos compartidos. |
| 09 | Promesas | `src/bases/09-promesas.ts` | `Promise`, `resolve`/`reject`, `then`, `catch`, `finally` y asincronía. |
| 10 | Fetch API | `src/bases/10-fetch-api.ts` | Peticiones HTTP, encadenamiento de promesas, JSON y manipulación del DOM. |
| 11 | Async/await | `src/bases/11-async-await.ts` | Funciones asíncronas, `await`, desestructuración de respuestas y tipos de API. |

Los tipos de apoyo están en `src/data/heroes.data.ts` y `src/data/giphy.response.ts`.

### Estructura

```text
01-Reforzamiento2025/
├── src/
│   ├── bases/       # ejercicios numerados del módulo
│   ├── data/        # datos y tipos de apoyo
│   └── main.tsx     # activa un ejercicio a la vez
├── .env.example
└── package.json
```

### Cómo ejecutar

```bash
cd 01-Reforzamiento2025
npm install
npm run dev
npm run build   # tsc -b && vite build
npm run lint    # eslint .
npx tsc -b      # solo chequeo de tipos
```

Para probar otro ejercicio, abre `src/main.tsx` y deja una sola importación de `./bases/...` activa. Cada archivo ejecuta sus propios `console.log`, `fetch` o cambios en el DOM al importarse.

### Variable de entorno (Giphy)

Los ejercicios 10 y 11 consumen la API de Giphy. La clave se lee desde `VITE_GIPHY_API_KEY`:

```bash
cp .env.example .env.local
```

Luego completa `.env.local` con tu API key. Ese archivo está ignorado por Git y no se publica.

## Módulo 02 — Primeros pasos con React (`02-PrimerosPasosReact/PrimerosPasosReact/`)

Fundamentos de React usando Vite + TypeScript.

### Qué se está aprendiendo

- Componentes
- Estructura y nomenclatura
- Hook `useState`
- CSS condicional
- Módulos de CSS
- Impresión de variables
- Props
- Mucho más

El objetivo es establecer una base sólida de los fundamentos de React sobre la cual continuar desarrollando.

### Estructura

```text
02-PrimerosPasosReact/
└── PrimerosPasosReact/
    ├── public/                 # favicon.svg e icons.svg
    └── src/
        ├── main.tsx            # punto de entrada; monta el componente activo
        ├── PrimerComponente.tsx
        ├── ComponenteTarea.tsx
        └── carrito-de-compras/
            ├── ContadorProducto.tsx
            └── ContadorProducto.css
```

`main.tsx` monta `PrimerComponente` dentro de `<StrictMode>` en `#root`. Para probar otro componente, cambia su import y su JSX en `main.tsx` (por ejemplo `ComponenteTarea`, que están comentados).

### Cómo ejecutar

```bash
cd 02-PrimerosPasosReact/PrimerosPasosReact
npm install
npm run dev
npm run build   # tsc -b && vite build
npm run lint    # eslint .
npx tsc -b      # solo chequeo de tipos
```

## Estado

- `main` concentra ambos módulos; las ramas 01 y 02 se mantienen separadas para trabajar cada módulo por aparte.
- Algunos ejercicios del módulo 01 conservan variables sin usar de forma intencional y `src/data/heroes.data.ts` usa `enum Owner`, incompatible con `erasableSyntaxOnly`; por eso `build`/`lint` aún reportan errores docentes.
- En el módulo 02 el ejercicio del carrito está en progreso (`cantidadProducto` y `handleSubtract` sin usar), así que `build`/`lint` también fallan. Trata cualquier error nuevo como una regresión.
- Los PDFs del curso no se versionan en este repositorio.
