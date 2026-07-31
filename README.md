# Veetrag Choudhary — Portfolio

A single-page personal portfolio for a backend engineer.
Minimal glassmorphism, one warm accent, light/dark themes with a smooth
toggle-origin theme transition.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **lucide-react** for icons
- No routing, no backend, no CMS — content is authored directly in components.

## Scripts

```bash
npm run dev       # start the dev server (Vite)
npm run build     # type-check (tsc -b) + production build
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project structure

```
src/
  App.tsx                 # layout, theme state, and the theme-toggle transition
  main.tsx                # React entry
  index.css               # Tailwind import + design tokens + glass/theme CSS
  hooks/
    useScrollAnimation.ts # IntersectionObserver reveal-on-scroll (motion-safe)
  components/
    Navbar.tsx            # sticky top nav: mark, section anchors, theme toggle
    Identity.tsx          # hero pane (name, role, status, primary actions)
    About.tsx  Experience.tsx  Skills.tsx        # profile zone sections
    Projects.tsx  ProjectCard.tsx               # selected work
    Education.tsx  Contact.tsx                   # footer zone sections
    Tile.tsx             # shared glass primitives (Tile, TileLabel, NmButton, Groove)
  assets/
    logo.png             # Krane apps logo
```

## Theming

The entire accent colour lives in **four CSS variables** at the top of
[`src/index.css`](src/index.css) — `--accent`, `--accent-dark`, `--accent-rgb`,
`--accent-motif`. Changing those four values re-themes the whole UI (buttons,
links, background wash, and the SVG project motifs). Alternate palettes are noted
in a comment there.

Light/dark is class-based (`.dark` on `<html>`), persisted to `localStorage`, and
falls back to `prefers-color-scheme`. The theme toggle plays a circular reveal
that originates from the toggle button, using the View Transitions API (with a
graceful instant fallback where unsupported or when `prefers-reduced-motion` is set).

## Notes

Some content is intentionally placeholder pending real values (marked with `🔧`
comments in the components): contact email, GitHub/LinkedIn/X handles, project
links, the "currently building" line, experience bullets, and a résumé PDF.
