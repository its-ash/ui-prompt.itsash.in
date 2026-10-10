# Old West / Saloon

- Source: <https://designmd.app/library/old-west-saloon>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:07.317Z

Claude Artisan · Subculturas & estéticas de nicho1860s-1900s

# Old West / Saloon

Reference for subculturas & estéticas de nicho Old West / Saloon. The American frontier's own visual output — wanted posters, saloon signage, trading-post notices — produced with wood type and weathered by sun and handling.

Old West / Saloonwanted poster stylewild westfrontier designDistressed wood-grain and aged-paper textures on every surfaceDeep burnt-sienna and dusty-gold paletteTall condensed wood-type display lettering, star-badge and rope-border motifsniche

Use case: composição editorial com grade tipográfica; Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette

![Old West / Saloon](https://designmd.app/images/library/692.png)

## Historical Context

The American frontier's own visual output — wanted posters, saloon signage, trading-post notices — produced with wood type and weathered by sun and handling. Example: 19th-century wanted posters; hand-lettered saloon signage; frontier trading-post notices printed with wood type..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Old West / Saloon"
description: "Old West / Saloon visual system, translated from the Claude Artisan catalog for use in digital products. Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette"
colors:
primary: "#7a2e17"
background: "#e8d9b8"
surface: "#f0e4c8"
text: "#2c1608"
accent: "#c99a3b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Rye', 'Ultra', 'Impact', 'Arial Black', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Roboto Slab', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Roboto Slab', 'Georgia', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
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

Old West / Saloon visual system, translated from the Claude Artisan catalog for use in digital products. Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette

- **Category:** niche
- **Era:** 1860s-1900s
- **Origin:** The American frontier's own visual output — wanted posters, saloon signage, trading-post notices — produced with wood type and weathered by sun and handling.
- **Reference:** 19th-century wanted posters; hand-lettered saloon signage; frontier trading-post notices printed with wood type.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Distressed wood-grain and aged-paper textures on every surface
- Deep burnt-sienna and dusty-gold palette
- Tall condensed wood-type display lettering, star-badge and rope-border motifs

## Colors

- **bg** — #e8d9b8
- **surface** — #f0e4c8
- **surface-2** — #d8c397
- **text** — #2c1608
- **text-muted** — #6b4a28
- **primary** — #7a2e17
- **accent** — #c99a3b
- **sienna** — #8a3d1f
- **star** — #3a3226

## Typography

- Display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif
- Body: 'Roboto Slab', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Distressed wood-grain and aged-paper textures on every surface; Deep burnt-sienna and dusty-gold palette; Tall condensed wood-type display lettering, star-badge and rope-border motifs; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/old-west-saloon/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Old West / Saloon — design tokens */
/* 1860s–1900s | American frontier wanted-poster and saloon-sign aesthetic */
:root {
/* color */
--color-bg: #e8d9b8;
--color-surface: #f0e4c8;
--color-surface-2: #d8c397;
--color-text: #2c1608;
--color-text-muted: #6b4a28;
--color-primary: #7a2e17;
--color-accent: #c99a3b;
--color-sienna: #8a3d1f;
--color-star: #3a3226;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-weathered: 0 8px 20px rgba(44,22,8,0.28);
--shadow-weathered-sm: 0 3px 10px rgba(44,22,8,0.24);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Roboto Slab', 'Georgia', serif;
--font-display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra: distressed paper grain + rope-border frame */
--paper-grain: repeating-radial-gradient(circle at 25% 30%, rgba(44,22,8,0.06) 0px, transparent 3px, transparent 9px), repeating-linear-gradient(4deg, rgba(44,22,8,0.04) 0 1px, transparent 1px 6px);
--rope-frame: repeating-linear-gradient(135deg, #7a2e17 0 3px, #c99a3b 3px 6px);
}

/* ============================================================
Base component classes — Old West / Saloon
Signature move: distressed wood-grain / aged-paper texture,
burnt-sienna and dusty-gold palette, tall condensed wood-type
display lettering like a WANTED poster, and star-badge / rope
border motifs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--paper-grain); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-primary);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-primary);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-weathered-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px dashed var(--color-star); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-bg); border: 2px solid var(--color-sienna);
box-shadow: var(--shadow-weathered-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-weathered); }
.card {
background: var(--color-surface); background-image: var(--paper-grain);
border-radius: var(--radius-md); padding: var(--space-6);
border: 2px solid var(--color-sienna); box-shadow: var(--shadow-weathered);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-primary);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-weathered-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .06em;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-accent); color: var(--color-text); border: 2px solid var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/old-west-saloon.md */
```

### Variables

```
--bg: #e8d9b8, --fg: #2c1608, --accent: #7a2e17, --surface: #f0e4c8, --radius: 4px, --spacing: 16px, --font-display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif, --font-body: 'Roboto Slab', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8d9b8

#f0e4c8

#d8c397

#2c1608

Secondary

#6b4a28

#7a2e17

#c99a3b

#8a3d1f

#3a3226

### Effects

Distressed wood-grain and aged-paper textures on every surface, Deep burnt-sienna and dusty-gold palette, Tall condensed wood-type display lettering, star-badge and rope-border motifs, shadow, blur

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

- **Name:** Old West / Saloon
- **Type:** claude-artisan/niche
- **Keywords:** Old West / Saloon, wanted poster style, wild west, frontier design, Distressed wood-grain and aged-paper textures on every surface, Deep burnt-sienna and dusty-gold palette, Tall condensed wood-type display lettering, star-badge and rope-border motifs, niche
- **Era:** 1860s-1900s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8d9b8, surface: #f0e4c8, surface-2: #d8c397, text: #2c1608
- **Secondary:** text-muted: #6b4a28, primary: #7a2e17, accent: #c99a3b, sienna: #8a3d1f, star: #3a3226

## Visual Effects

Distressed wood-grain and aged-paper textures on every surface, Deep burnt-sienna and dusty-gold palette, Tall condensed wood-type display lettering, star-badge and rope-border motifs, shadow, blur

## AI Visual Direction

Old West / Saloon, Distressed wood-grain and aged-paper textures on every surface, Deep burnt-sienna and dusty-gold palette, Tall condensed wood-type display lettering, star-badge and rope-border motifs, 19th-century wanted posters; hand-lettered saloon signage; frontier trading-post notices printed with wood type.

## CSS Technical

```css
/* Old West / Saloon — design tokens */
/* 1860s–1900s | American frontier wanted-poster and saloon-sign aesthetic */
:root {
/* color */
--color-bg: #e8d9b8;
--color-surface: #f0e4c8;
--color-surface-2: #d8c397;
--color-text: #2c1608;
--color-text-muted: #6b4a28;
--color-primary: #7a2e17;
--color-accent: #c99a3b;
--color-sienna: #8a3d1f;
--color-star: #3a3226;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-weathered: 0 8px 20px rgba(44,22,8,0.28);
--shadow-weathered-sm: 0 3px 10px rgba(44,22,8,0.24);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Roboto Slab', 'Georgia', serif;
--font-display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
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
--ease-standard: cubic-bezier(0.3, 0, 0.2, 1);
/* extra: distressed paper grain + rope-border frame */
--paper-grain: repeating-radial-gradient(circle at 25% 30%, rgba(44,22,8,0.06) 0px, transparent 3px, transparent 9px), repeating-linear-gradient(4deg, rgba(44,22,8,0.04) 0 1px, transparent 1px 6px);
--rope-frame: repeating-linear-gradient(135deg, #7a2e17 0 3px, #c99a3b 3px 6px);
}

/* ============================================================
Base component classes — Old West / Saloon
Signature move: distressed wood-grain / aged-paper texture,
burnt-sienna and dusty-gold palette, tall condensed wood-type
display lettering like a WANTED poster, and star-badge / rope
border motifs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--paper-grain); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 4px solid var(--color-primary);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-primary);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-weathered-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px dashed var(--color-star); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-bg); border: 2px solid var(--color-sienna);
box-shadow: var(--shadow-weathered-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-weathered); }
.card {
background: var(--color-surface); background-image: var(--paper-grain);
border-radius: var(--radius-md); padding: var(--space-6);
border: 2px solid var(--color-sienna); box-shadow: var(--shadow-weathered);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-primary);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-weathered-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .06em;
padding: .3em .8em; border-radius: var(--radius-sm);
background: var(--color-accent); color: var(--color-text); border: 2px solid var(--color-primary);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/old-west-saloon.md */
```

## Design System Variables

```css
--bg: #e8d9b8, --fg: #2c1608, --accent: #7a2e17, --surface: #f0e4c8, --radius: 4px, --spacing: 16px, --font-display: 'Rye', 'Ultra', 'Impact', 'Arial Black', serif, --font-body: 'Roboto Slab', 'Georgia', serif
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

[![Retro Americana / Diner](https://designmd.app/images/library/569.png) Claude Artisan · Subculturas & estéticas de nicho ### Retro Americana / Diner](https://designmd.app/library/americana-diner)[![Woodcut / Linocut](https://designmd.app/images/library/756.png) Claude Artisan · Textura, material & renderização ### Woodcut / Linocut](https://designmd.app/library/woodcut-linocut)[![Nautical / Maritime](https://designmd.app/images/library/687.png) Claude Artisan · Subculturas & estéticas de nicho ### Nautical / Maritime](https://designmd.app/library/nautical-maritime)

Last synced: 8/30/2026
