# Le Petit Oven

Le Petit Oven is a polished bakery showcase website built with SolidStart, TypeScript, Bun, and Tailwind CSS. The project is structured as a single-page marketing site with reusable UI primitives, section-based composition, and content-driven data stored in one central file.

## Project Demo

<p>Click the preview below to watch the demo. Use Ctrl + Click or open in a new tab if needed.</p>

<a href="https://youtu.be/Qcgyh_rN-Qk">
  <img src="https://img.youtube.com/vi/Qcgyh_rN-Qk/maxresdefault.jpg" alt="Project Demo" width="100%" />
</a>

## Stack

- SolidStart
- SolidJS
- TypeScript
- Vite
- Tailwind CSS
- Biome
- Bun

## Getting Started

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

Build for production:

```bash
bun run build
```

Preview the production build:

```bash
bun run preview
```

## Scripts

- `bun run dev` starts the local Vite dev server
- `bun run build` creates the production client and server build
- `bun run preview` previews the production build locally
- `bun run lint` runs Biome checks
- `bun run format` formats the codebase with Biome

## Project Structure

```text
src/
  components/
    layout/      Navbar and footer
    sections/    Landing page sections
    ui/          Shared UI primitives
  data/
    site.ts      Central content and section data
  routes/
    index.tsx    Homepage composition
```

## Page Sections

The homepage is composed from the following section components:

- Hero
- Featured Menu
- About
- Signature Specialties
- Values
- Gallery
- Testimonials
- Visit

## Content Model

Most editable content lives in `src/data/site.ts`, including:

- navigation links
- menu categories and menu items
- specialties
- values
- gallery entries
- testimonials

This keeps copy and media changes separate from component logic.

## Development Notes

- Styling lives primarily in `src/app.css`
- Shared brand elements such as buttons, cards, tabs, modals, and the logo live in `src/components/ui`
- The homepage animation and section observer behavior is coordinated from `src/routes/index.tsx`
- Remote images are currently referenced directly in the content data

## Production Output

After building, the production server output is generated under `.output/`, and the static client build is generated under `dist/`.
