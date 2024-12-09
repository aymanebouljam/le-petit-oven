# Le Petit Oven

Premium bakery showcase website built with SolidStart, Bun, TypeScript, and Tailwind CSS v4.

## Run with Bun

```bash
bun install
bun run dev
```

## Production

```bash
bun run build
bun run preview
```

## Architecture

- `src/routes/index.tsx`: page composition and page-level interaction state
- `src/data/site.ts`: reusable demo content arrays
- `src/components/layout`: navbar and footer
- `src/components/sections`: all landing page sections
- `src/components/ui`: shared primitives
- `public/images`: local bakery-themed SVG placeholders
