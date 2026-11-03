# 01 · Reforzamiento JavaScript moderno y TypeScript

Proyecto base del módulo 01 del curso **React de cero a experto** (Fernando Herrera / DevTalles). Aquí se practican los fundamentos de JavaScript moderno y TypeScript antes de empezar con React.

La explicación completa de los temas, la estructura del repositorio y los pendientes está en el [README principal](../README.md).

## Stack

- React 19
- Vite 6
- TypeScript 5.8 con `strict` y `erasableSyntaxOnly`
- ESLint 9

## Ejecutar

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run build   # tsc -b && vite build
npm run lint    # eslint .
npm run preview # vista previa del build
npx tsc -b      # solo chequeo de tipos
```

## Ejercicios

Los apuntes están en `src/bases/` y están numerados por tema:

1. Variables, tipos y template strings
2. Objetos, interfaces y spread
3. Arreglos y métodos como `map`, `filter` y `reduce`
4. Funciones y retorno de objetos
5. Desestructuración de objetos y arreglos
6. Módulos, promesas, `fetch` y `async/await`

Para ejecutar un ejercicio, deja una sola importación de `./bases/...` activa en `src/main.tsx`. Cada archivo produce sus propios logs o efectos al importarse.

## API de Giphy

Los ejercicios de `fetch` y `async/await` usan `VITE_GIPHY_API_KEY`. Crea tu archivo local a partir de `.env.example`:

```bash
cp .env.example .env.local
```

`.env.local` no se versiona.
