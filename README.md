# Reforzamiento React 2026 · TypeScript

Apuntes y ejercicios del curso **React de cero a experto** de Fernando Herrera (DevTalles), enfocados en JavaScript moderno y TypeScript antes de entrar de lleno a React.

**Autor:** Edison Andrés Pérez Martínez
**Rama:** `01-reforzamiento_typescript`

## Qué se está aprendiendo

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

## Estructura del repositorio

```text
.
├── 01-Reforzamiento2025/
│   ├── src/
│   │   ├── bases/       # ejercicios numerados del módulo
│   │   ├── data/        # datos y tipos de apoyo
│   │   └── main.tsx     # activa un ejercicio a la vez
│   ├── .env.example
│   └── package.json
├── AGENTS.md
└── README.md
```

Los PDFs del curso no se versionan en este repositorio.

## Cómo ejecutar

```bash
cd 01-Reforzamiento2025
npm install
npm run dev
```

Para probar otro ejercicio, abre `src/main.tsx` y deja una sola importación de `./bases/...` activa. Cada archivo ejecuta sus propios `console.log`, `fetch` o cambios en el DOM al importarse.

Comandos de verificación:

```bash
npm run build   # tsc -b && vite build
npm run lint    # eslint .
npx tsc -b      # solo chequeo de tipos
```

## Variable de entorno (Giphy)

Los ejercicios 10 y 11 consumen la API de Giphy. La clave se lee desde `VITE_GIPHY_API_KEY`:

```bash
cp .env.example .env.local
```

Luego completa `.env.local` con tu API key. Ese archivo está ignorado por Git y no se publica.

## Estado y pendientes

- Algunos ejercicios conservan variables sin usar de forma intencional; por eso `npm run build` y `npm run lint` todavía reportan errores docentes.
- `src/data/heroes.data.ts` usa `enum Owner`, que no es compatible con `erasableSyntaxOnly`; el siguiente paso es reemplazarlo por un union type.
- Las funciones locales llamadas `useContextt` y `useState` generan falsos positivos de `react-hooks/rules-of-hooks`; se renombrarán al migrar a React.
