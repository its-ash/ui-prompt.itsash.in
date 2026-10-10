# Space Western

- Source: <https://designmd.app/library/space-western>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:00.308Z

Claude Artisan · Retrofuturismo & ficção especulativa1950s-present

# Space Western

Reference for retrofuturismo & ficção especulativa Space Western. Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft.

Space Westerncosmic westernsci-fi westernDusty desert neutrals against nocturnal spaceStenciled utility type and star-map detailsWeathered panels, stamped labels, and frontier redretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details

![Space Western](https://designmd.app/images/library/721.png)

## Historical Context

Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft. Example: Cowboy Bebop, Firefly, and the lived-in machinery of frontier science fiction..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Space Western"
description: "Space Western visual system, translated from the Claude Artisan catalog for use in digital products. Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details"
colors:
primary: "#d56b3e"
background: "#17151a"
surface: "#272129"
text: "#f5e5c8"
accent: "#74bcc1"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "6px"
lg: "12px"
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

Space Western visual system, translated from the Claude Artisan catalog for use in digital products. Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details

- **Category:** retrofuturism
- **Era:** 1950s-present
- **Origin:** Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft.
- **Reference:** Cowboy Bebop, Firefly, and the lived-in machinery of frontier science fiction.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dusty desert neutrals against nocturnal space
- Stenciled utility type and star-map details
- Weathered panels, stamped labels, and frontier red

## Colors

- **bg** — #17151a
- **surface** — #272129
- **surface-2** — #44363a
- **text** — #f5e5c8
- **text-muted** — #c6ae91
- **primary** — #d56b3e
- **accent** — #74bcc1
- **dust** — #b58b61

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dusty desert neutrals against nocturnal space; Stenciled utility type and star-map details; Weathered panels, stamped labels, and frontier red; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/space-western/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Space Western — design tokens (generated from style_catalog.json) */
/* 1950s-present | Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft. */
:root {
/* color */
--color-bg: #17151a;
--color-surface: #272129;
--color-surface-2: #44363a;
--color-text: #f5e5c8;
--color-text-muted: #c6ae91;
--color-primary: #d56b3e;
--color-accent: #74bcc1;
--color-dust: #b58b61;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-panel: 0 1px 0 rgba(255,255,255,.18) inset, 0 8px 18px rgba(0,0,0,.3);
--shadow-stamp: 3px 3px 0 #17151a;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
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
--dust-gradient: linear-gradient(160deg, rgba(181,139,97,.28), transparent 52%);
}

/* Reusable component primitives: Space Western. */
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
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--dust-gradient)}.nav,.card{border:1px solid var(--color-dust);box-shadow:var(--shadow-panel)}.btn--primary{background:var(--color-primary);color:var(--color-text);box-shadow:var(--shadow-stamp)}.badge{border:1px dashed var(--color-accent);font-family:var(--font-mono)}

/* Especificação de referência: references/00-flagship-implementation-specs/space-western.md */
```

### Variables

```
--bg: #17151a, --fg: #f5e5c8, --accent: #d56b3e, --surface: #272129, --radius: 6px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#17151a

#272129

#44363a

#f5e5c8

Secondary

#c6ae91

#d56b3e

#74bcc1

#b58b61

### Effects

Dusty desert neutrals against nocturnal space, Stenciled utility type and star-map details, Weathered panels, stamped labels, and frontier red, shadow, blur

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

- **Name:** Space Western
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Space Western, cosmic western, sci-fi western, Dusty desert neutrals against nocturnal space, Stenciled utility type and star-map details, Weathered panels, stamped labels, and frontier red, retrofuturism
- **Era:** 1950s-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #17151a, surface: #272129, surface-2: #44363a, text: #f5e5c8
- **Secondary:** text-muted: #c6ae91, primary: #d56b3e, accent: #74bcc1, dust: #b58b61

## Visual Effects

Dusty desert neutrals against nocturnal space, Stenciled utility type and star-map details, Weathered panels, stamped labels, and frontier red, shadow, blur

## AI Visual Direction

Space Western, Dusty desert neutrals against nocturnal space, Stenciled utility type and star-map details, Weathered panels, stamped labels, and frontier red, Cowboy Bebop, Firefly, and the lived-in machinery of frontier science fiction.

## CSS Technical

```css
/* Space Western — design tokens (generated from style_catalog.json) */
/* 1950s-present | Science-fiction storytelling that borrows frontier motifs: dusty horizons, saloons, wanted posters, and practical spacecraft. */
:root {
/* color */
--color-bg: #17151a;
--color-surface: #272129;
--color-surface-2: #44363a;
--color-text: #f5e5c8;
--color-text-muted: #c6ae91;
--color-primary: #d56b3e;
--color-accent: #74bcc1;
--color-dust: #b58b61;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-panel: 0 1px 0 rgba(255,255,255,.18) inset, 0 8px 18px rgba(0,0,0,.3);
--shadow-stamp: 3px 3px 0 #17151a;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
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
--dust-gradient: linear-gradient(160deg, rgba(181,139,97,.28), transparent 52%);
}

/* Reusable component primitives: Space Western. */
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
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--dust-gradient)}.nav,.card{border:1px solid var(--color-dust);box-shadow:var(--shadow-panel)}.btn--primary{background:var(--color-primary);color:var(--color-text);box-shadow:var(--shadow-stamp)}.badge{border:1px dashed var(--color-accent);font-family:var(--font-mono)}

/* Especificação de referência: references/00-flagship-implementation-specs/space-western.md */
```

## Design System Variables

```css
--bg: #17151a, --fg: #f5e5c8, --accent: #d56b3e, --surface: #272129, --radius: 6px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Cassette Futurism](https://designmd.app/images/library/113.png) Retro & Pop ### Cassette Futurism](https://designmd.app/library/cassette-futurism)[![Dieselpunk](https://designmd.app/images/library/623.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Dieselpunk](https://designmd.app/library/dieselpunk)

Last synced: 8/30/2026
