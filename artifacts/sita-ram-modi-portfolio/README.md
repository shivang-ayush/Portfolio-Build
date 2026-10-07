# Sita Ram Modi — Academic Portfolio

This is a small, standalone website made with plain HTML, CSS, and JavaScript.

## Files

- `index.html` — page content, sections, navigation, and metadata.
- `style.css` — colors, typography, responsive layout, and animations.
- `script.js` — mobile navigation and accessible publication tabs.
- `favicon.svg` — browser tab icon.
- `README.md` — setup and editing notes.

## Run it

**No installation is needed to view the website.** Extract the downloaded ZIP and open `index.html` in a modern web browser.

The selected typefaces load from Google Fonts when an internet connection is available. System-font fallbacks are included, so the site still works offline.

If you want to run a local development server instead, install Node.js 20.19+ (or 22.12+), open a terminal in this folder, and run:

```sh
npm install
npm run dev
```

Vite is the only optional development dependency. It is not needed to open `index.html` directly.

## Editing

- Change text and section order in `index.html`.
- Change colors, spacing, and responsive styles in `style.css`.
- Change the mobile menu or publication-tab behavior in `script.js`.

## Technologies

The final downloadable site uses HTML5, CSS3, vanilla JavaScript, and inline SVG. The earlier Replit version used React, TypeScript, Vite, Tailwind CSS, Radix UI, Lucide React, TanStack Query, and Wouter, plus Replit's Vite development plugins. Those libraries and plugins have been removed from this simplified version.