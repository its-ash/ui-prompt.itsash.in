# Fantasy Cartography

- Source: <https://designmd.app/library/fantasy-cartography>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:24.292Z

Claude Artisan · Textura, material & renderizaçãocontemporary

# Fantasy Cartography

Reference for textura, material & renderização Fantasy Cartography. Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain.

Fantasy Cartographymapmaker fantasyillustrated map UIParchment with ink contours and terrain marksSerif place names and compass geometryRoutes, legends, and coordinate-like interfacestexture

Use case: shell de aplicação com navegação e cartões; Parchment with ink contours and terrain marks; Serif place names and compass geometry

![Fantasy Cartography](https://designmd.app/images/library/634.png)

## Historical Context

Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain. Example: Tabletop RPG campaign maps and illustrated fantasy atlases..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Fantasy Cartography"
description: "Fantasy Cartography visual system, translated from the Claude Artisan catalog for use in digital products. Parchment with ink contours and terrain marks; Serif place names and compass geometry"
colors:
primary: "#3f693f"
background: "#e8d6ad"
surface: "#f6e8c7"
text: "#382b1b"
accent: "#a94832"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Georgia, 'Times New Roman', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "3px"
lg: "8px"
spacing:
sm: "8px"
md: "16px"
lg: "32px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "16px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "16px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "24px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "16px"
---
## Overview

Fantasy Cartography visual system, translated from the Claude Artisan catalog for use in digital products. Parchment with ink contours and terrain marks; Serif place names and compass geometry

- **Category:** texture
- **Era:** contemporary
- **Origin:** Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain.
- **Reference:** Tabletop RPG campaign maps and illustrated fantasy atlases.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Parchment with ink contours and terrain marks
- Serif place names and compass geometry
- Routes, legends, and coordinate-like interfaces

## Colors

- **bg** — #e8d6ad
- **surface** — #f6e8c7
- **surface-2** — #d8c08c
- **text** — #382b1b
- **text-muted** — #755e3b
- **primary** — #3f693f
- **accent** — #a94832
- **ink** — #293e48

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: Georgia, serif
- Mono: 'Courier New', monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Parchment with ink contours and terrain marks; Serif place names and compass geometry; Routes, legends, and coordinate-like interfaces; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 3px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/fantasy-cartography/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Fantasy Cartography — design tokens (generated from style_catalog.json) */
/* contemporary | Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain. */
:root {
/* color */
--color-bg: #e8d6ad;
--color-surface: #f6e8c7;
--color-surface-2: #d8c08c;
--color-text: #382b1b;
--color-text-muted: #755e3b;
--color-primary: #3f693f;
--color-accent: #a94832;
--color-ink: #293e48;
/* radius */
--radius-sm: 0;
--radius-md: 3px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-paper: 0 1px 0 rgba(255,255,255,.5) inset, 0 8px 18px rgba(56,43,27,.18);
--shadow-ink: 0 0 0 1px #382b1b;
/* font */
--font-sans: Georgia, serif;
--font-display: Georgia, 'Times New Roman', serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(.2,.75,.3,1);
/* extra (signature gradients, composite borders, filters) */
--contours: repeating-radial-gradient(ellipse at 48% 56%, transparent 0 12px, rgba(41,62,72,.16) 13px 14px, transparent 15px 23px);
}

/* Reusable component primitives: Fantasy Cartography. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--contours);opacity:.45}.nav,.card{border:1px solid var(--color-ink);box-shadow:var(--shadow-paper)}.btn--primary{background:var(--color-primary);color:var(--color-surface)}.badge{color:var(--color-accent);border:1px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/fantasy-cartography.md */
```

### Variables

```
--bg: #e8d6ad, --fg: #382b1b, --accent: #3f693f, --surface: #f6e8c7, --radius: 3px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8d6ad

#f6e8c7

#d8c08c

#382b1b

Secondary

#755e3b

#3f693f

#a94832

#293e48

### Effects

Parchment with ink contours and terrain marks, Serif place names and compass geometry, Routes, legends, and coordinate-like interfaces, shadow, blur

### Light/Dark

Fonte não declara modos; validar em light e dark antes de publicar

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Fantasy Cartography
- **Type:** claude-artisan/texture
- **Keywords:** Fantasy Cartography, mapmaker fantasy, illustrated map UI, Parchment with ink contours and terrain marks, Serif place names and compass geometry, Routes, legends, and coordinate-like interfaces, texture
- **Era:** contemporary
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8d6ad, surface: #f6e8c7, surface-2: #d8c08c, text: #382b1b
- **Secondary:** text-muted: #755e3b, primary: #3f693f, accent: #a94832, ink: #293e48

## Visual Effects

Parchment with ink contours and terrain marks, Serif place names and compass geometry, Routes, legends, and coordinate-like interfaces, shadow, blur

## AI Visual Direction

Fantasy Cartography, Parchment with ink contours and terrain marks, Serif place names and compass geometry, Routes, legends, and coordinate-like interfaces, Tabletop RPG campaign maps and illustrated fantasy atlases.

## CSS Technical

```css
/* Fantasy Cartography — design tokens (generated from style_catalog.json) */
/* contemporary | Illustrated fantasy maps and tabletop-world guides that use parchment, contour lines, compass marks, and hand-inked terrain. */
:root {
/* color */
--color-bg: #e8d6ad;
--color-surface: #f6e8c7;
--color-surface-2: #d8c08c;
--color-text: #382b1b;
--color-text-muted: #755e3b;
--color-primary: #3f693f;
--color-accent: #a94832;
--color-ink: #293e48;
/* radius */
--radius-sm: 0;
--radius-md: 3px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-paper: 0 1px 0 rgba(255,255,255,.5) inset, 0 8px 18px rgba(56,43,27,.18);
--shadow-ink: 0 0 0 1px #382b1b;
/* font */
--font-sans: Georgia, serif;
--font-display: Georgia, 'Times New Roman', serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.75rem;
--text-3xl: 2.25rem;
--text-4xl: 3rem;
--text-5xl: 4rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-24: 96px;
/* ease */
--ease-standard: cubic-bezier(.2,.75,.3,1);
/* extra (signature gradients, composite borders, filters) */
--contours: repeating-radial-gradient(ellipse at 48% 56%, transparent 0 12px, rgba(41,62,72,.16) 13px 14px, transparent 15px 23px);
}

/* Reusable component primitives: Fantasy Cartography. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--contours);opacity:.45}.nav,.card{border:1px solid var(--color-ink);box-shadow:var(--shadow-paper)}.btn--primary{background:var(--color-primary);color:var(--color-surface)}.badge{color:var(--color-accent);border:1px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/fantasy-cartography.md */
```

## Design System Variables

```css
--bg: #e8d6ad, --fg: #382b1b, --accent: #3f693f, --surface: #f6e8c7, --radius: 3px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: Georgia, serif
```

## Implementation Checklist

- Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Execution Rules

1. Strictly follow the defined visual style.
2. Use high-quality inline SVG icons (Heroicons or Lucide style) — NEVER use emojis as icons.
3. Add `cursor-pointer` and smooth `hover` states (transition-all) on all interactive elements.
4. Required Page Structure:
   - Navbar (Logo + Links + CTA)
   - Hero Section (Impactful Headline + Subtitle + 2 buttons + 3D/Abstract visual element via CSS)
   - Features (3 cards with icons)
   - Testimonials (3 cards)
   - Pricing (3 tiers, highlight the middle one)
   - Final CTA
   - Full Footer with social links, privacy policy, terms of use, contact and SEO links.
5. All text content must be in English.
6. The visual must be CLEARLY distinct — do not create a "default Bootstrap" design. Force the use of the provided design system variables.
7. Use `<style>` tags in the head for custom classes (especially for complex backdrop-filter effects and animations) that Tailwind CDN doesn't cover.
8. Full Responsiveness: Layout must adapt perfectly to Mobile, Tablet and Desktop (vertical stack on mobile).
9. Include basic SEO, Viewport and Open Graph meta tags in `<head>`.
10. Footer must contain: Copyright 2026, Secondary navigation links and Social media icons.
11. Make the creative decisions needed to deliver the complete, functional result now.
```

Copy Prompt

## Related

[![Steampunk](https://designmd.app/images/library/322.png) Retro & Pop ### Steampunk](https://designmd.app/library/steampunk)[![Illuminated Manuscript](https://designmd.app/images/library/660.png) Claude Artisan · Movimentos históricos ### Illuminated Manuscript](https://designmd.app/library/illuminated-manuscript)[![Blueprint / Technical Drawing](https://designmd.app/images/library/591.png) Claude Artisan · Textura, material & renderização ### Blueprint / Technical Drawing](https://designmd.app/library/blueprint)

Last synced: 8/30/2026
