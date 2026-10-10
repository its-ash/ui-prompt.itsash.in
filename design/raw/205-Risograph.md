# Risograph

- Source: <https://designmd.app/library/risograph>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:42.314Z

Claude Artisan · Textura, material & renderização1980s stencil printing → 2010s revival

# Risograph

Reference for textura, material & renderização Risograph. Riso Kagaku duplicator; indie print revival.

Risographrisoriso printLimited bright spot-ink palette (fluoro pink, blue)Visible misregistration and grainOverprint multiply blendsHandmade, imperfect, zine-liketexture

Use case: composição editorial com grade tipográfica; Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain

![Risograph](https://designmd.app/images/library/711.png)

## Historical Context

Riso Kagaku duplicator; indie print revival. Example: Indie zines; risograph art prints; event posters..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Risograph"
description: "Risograph visual system, translated from the Claude Artisan catalog for use in digital products. Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain"
colors:
primary: "#ff5b45"
background: "#f3ecde"
surface: "#f3ecde"
text: "#1a1a1a"
accent: "#0078bf"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Archivo Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Archivo', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Archivo', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "4px"
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

Risograph visual system, translated from the Claude Artisan catalog for use in digital products. Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain

- **Category:** texture
- **Era:** 1980s stencil printing → 2010s revival
- **Origin:** Riso Kagaku duplicator; indie print revival.
- **Reference:** Indie zines; risograph art prints; event posters.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Limited bright spot-ink palette (fluoro pink, blue)
- Visible misregistration and grain
- Overprint multiply blends
- Handmade, imperfect, zine-like

## Colors

- **bg** — #f3ecde
- **surface** — #f3ecde
- **text** — #1a1a1a
- **text-muted** — #444444
- **primary** — #ff5b45
- **accent** — #0078bf
- **yellow** — #ffd200
- **green** — #00a95c
- **pink** — #ff48b0

## Typography

- Display: 'Archivo Black', sans-serif
- Body: 'Space Grotesk', 'Archivo', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Limited bright spot-ink palette (fluoro pink, blue); Visible misregistration and grain; Overprint multiply blends; Handmade, imperfect, zine-like; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/risograph/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Risograph — design tokens (generated from style_catalog.json) */
/* 1980s stencil printing → 2010s revival | Riso Kagaku duplicator; indie print revival. */
:root {
/* color */
--color-bg: #f3ecde;
--color-surface: #f3ecde;
--color-text: #1a1a1a;
--color-text-muted: #444444;
--color-primary: #ff5b45;
--color-accent: #0078bf;
--color-yellow: #ffd200;
--color-green: #00a95c;
--color-pink: #ff48b0;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Space Grotesk', 'Archivo', system-ui, sans-serif;
--font-display: 'Archivo Black', sans-serif;
--font-mono: 'Space Mono', monospace;
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
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--grain: url('data:image/svg+xml;...noise');
--halftone: radial-gradient(#ff5b45 30%, transparent 31%) 0 0 / 6px 6px;
--multiply: multiply;
}

/* ============================================================
Base component classes — Risograph (token-driven).
Signature move lives in references/00-flagship-implementation-specs/risograph.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-none);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-none); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/risograph.md */
```

### Variables

```
--bg: #f3ecde, --fg: #1a1a1a, --accent: #ff5b45, --surface: #f3ecde, --radius: 2px, --spacing: 16px, --font-display: 'Archivo Black', sans-serif, --font-body: 'Space Grotesk', 'Archivo', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3ecde

#1a1a1a

#444444

Secondary

#ff5b45

#0078bf

#ffd200

#00a95c

#ff48b0

### Effects

Limited bright spot-ink palette (fluoro pink, blue), Visible misregistration and grain, Overprint multiply blends, Handmade, imperfect, zine-like, shadow, blur

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

- **Name:** Risograph
- **Type:** claude-artisan/texture
- **Keywords:** Risograph, riso, riso print, Limited bright spot-ink palette (fluoro pink, blue), Visible misregistration and grain, Overprint multiply blends, Handmade, imperfect, zine-like, texture
- **Era:** 1980s stencil printing → 2010s revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3ecde, surface: #f3ecde, text: #1a1a1a, text-muted: #444444
- **Secondary:** primary: #ff5b45, accent: #0078bf, yellow: #ffd200, green: #00a95c, pink: #ff48b0

## Visual Effects

Limited bright spot-ink palette (fluoro pink, blue), Visible misregistration and grain, Overprint multiply blends, Handmade, imperfect, zine-like, shadow, blur

## AI Visual Direction

Risograph, Limited bright spot-ink palette (fluoro pink, blue), Visible misregistration and grain, Overprint multiply blends, Handmade, imperfect, zine-like, Indie zines; risograph art prints; event posters.

## CSS Technical

```css
/* Risograph — design tokens (generated from style_catalog.json) */
/* 1980s stencil printing → 2010s revival | Riso Kagaku duplicator; indie print revival. */
:root {
/* color */
--color-bg: #f3ecde;
--color-surface: #f3ecde;
--color-text: #1a1a1a;
--color-text-muted: #444444;
--color-primary: #ff5b45;
--color-accent: #0078bf;
--color-yellow: #ffd200;
--color-green: #00a95c;
--color-pink: #ff48b0;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-none: none;
/* font */
--font-sans: 'Space Grotesk', 'Archivo', system-ui, sans-serif;
--font-display: 'Archivo Black', sans-serif;
--font-mono: 'Space Mono', monospace;
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
--ease-standard: linear;
/* extra (signature gradients, composite borders, filters) */
--grain: url('data:image/svg+xml;...noise');
--halftone: radial-gradient(#ff5b45 30%, transparent 31%) 0 0 / 6px 6px;
--multiply: multiply;
}

/* ============================================================
Base component classes — Risograph (token-driven).
Signature move lives in references/00-flagship-implementation-specs/risograph.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-none);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-none); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/risograph.md */
```

## Design System Variables

```css
--bg: #f3ecde, --fg: #1a1a1a, --accent: #ff5b45, --surface: #f3ecde, --radius: 2px, --spacing: 16px, --font-display: 'Archivo Black', sans-serif, --font-body: 'Space Grotesk', 'Archivo', system-ui, sans-serif
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

[![Halftone](https://designmd.app/images/library/656.png) Claude Artisan · Textura, material & renderização ### Halftone](https://designmd.app/library/halftone)[![Duotone](https://designmd.app/images/library/626.png) Claude Artisan · Textura, material & renderização ### Duotone](https://designmd.app/library/duotone)[![WPA / Vintage Poster](https://designmd.app/images/library/757.png) Claude Artisan · Movimentos históricos ### WPA / Vintage Poster](https://designmd.app/library/wpa-poster)

Last synced: 8/30/2026
