# eBox - CLAUDE.md

## What is eBox?

eBox is a B2B SaaS product by Open Box Group (a global real estate software consultancy). It provides structured forms (eForms) and workflows for real estate teams using MRI software, eliminating manual data entry and spreadsheet management. The second product, eConnect, is upcoming.

## Tech Stack

- **React 19** + **TypeScript 5.8** (JSX automatic transform)
- **Vite 6** — dev server on port 3000, host 0.0.0.0
- **Tailwind CSS** — loaded via CDN in index.html (not installed as a dependency)
- **Lucide React** — icon library
- No backend — this is a static marketing site
- No router library — client-side routing via React state in App.tsx

## Commands

- `npm run dev` — start dev server (http://localhost:3000)
- `npm run build` — production build to dist/
- `npm run preview` — preview production build

## Project Structure

```
App.tsx              — Main app: holds currentPage state, renders Header + page + Footer
index.tsx            — React entry point (createRoot)
index.html           — HTML shell, CDN imports (React, Tailwind, fonts)
types.ts             — PageRoute, NavItem, Testimonial, Feature types
vite.config.ts       — Vite config with @/ path alias
components/
  Header.tsx         — Sticky nav with mobile hamburger menu
  Footer.tsx         — 4-column footer with nav links
  Button.tsx         — Reusable button (variants: primary/secondary/outline/ghost)
  Logos.tsx          — EBoxLogo, EFormsLogo, OpenBoxLogo components
pages/
  Home.tsx           — Landing page (hero, problem/solution, features, products, testimonial, CTA)
  EFormsPage.tsx     — eForms product detail page
  AboutUs.tsx        — Company story and values
  ContactUs.tsx      — Contact form
  BookDemo.tsx       — Demo booking (Calendly placeholder)
public/images/       — Static assets served by Vite
  ebox-logo.svg      — Official eBox logo (SVG)
  eforms-logo.png    — Official eForms logo (grey text, light backgrounds)
  eforms-logo-white.png — eForms logo white variant (dark backgrounds)
```

## Resources Folder

`resources/` is NOT part of the website build. It contains reference materials, brand assets, copy documents, and inspiration files. Use these for context when writing copy or working with brand assets. Logo source files live here — when adding logos to the site, copy them to `public/images/`.

## Design System

- **Colors** (defined as Tailwind extensions in index.html):
  - `ebox-lime`: #BCD632 (primary brand green)
  - `ebox-teal`: #A0C9C9 (secondary teal)
  - `ebox-dark`: #1A1A1A (text/dark backgrounds)
  - `ebox-gray`: #F3F4F6 (light backgrounds)
  - `ebox-light`: #FAFAF9 (lighter backgrounds)
- **Font**: Inter (Google Fonts, weights 300-800)
- **Patterns**: rounded-full buttons, rounded-2xl cards, mobile-first with md:/lg: breakpoints

## Navigation

All routing is state-based in App.tsx via `currentPage: PageRoute`. Components receive an `onNavigate` callback. PageRoute values: `home`, `eforms`, `about`, `contact`, `book-demo`.

## Logos

Managed in `components/Logos.tsx`:
- `EBoxLogo` — renders from `/images/ebox-logo.svg`
- `EFormsLogo` — accepts `variant` prop: `"default"` (grey) or `"white"` (for dark backgrounds)
- `OpenBoxLogo` — still inline SVG placeholder (no official SVG file yet)

## GitHub

- **Repo**: github.com/Growth-Experts/ebox-website (private)
- **Default branch**: main
