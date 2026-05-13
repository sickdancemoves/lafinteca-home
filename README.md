# LaFinteca Home

Static landing page for **LaFinteca** — a Brazilian fintech *Conta PJ* (business
account) product. Implemented from a Claude Design handoff bundle as plain
HTML/CSS.

## Stack

- Plain HTML/CSS (no build step)
- Locked to a 1366px desktop canvas
- IBM Plex Sans (local TTFs) + Urbanist (Google Fonts) — design tokens in
  `colors_and_type.css`, page styles in `styles.css`

## Run it

Open `index.html` in a browser, or serve the directory:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Layout

```
index.html              ← page markup
colors_and_type.css     ← design tokens (palette, fonts, scale, radii, shadows)
styles.css              ← page-level styles
assets/                 ← raster + SVG art (hero, CTA bg, logos, textures)
fonts/                  ← IBM Plex Sans family (TTF)
```

The page is composed of four sections: **Hero**, **Features**, **CTA**, and
**Footer**.
