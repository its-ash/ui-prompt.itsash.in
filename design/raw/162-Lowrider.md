# Lowrider

- Source: <https://designmd.app/library/lowrider>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:34.312Z

Claude Artisan · Subculturas & estéticas de nicho1940s-present

# Lowrider

Reference for subculturas & estéticas de nicho Lowrider. Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering.

Lowriderlowrider artChicano lowriderCandy paint, chrome, and deep sunset colorPinstripes, ornamental frames, and hand-lettered display typeCelebratory crafted detail rather than generic retro decorationniche

Use case: hero, superfície, conteúdo e grade responsiva; Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type

![Lowrider](https://designmd.app/images/library/673.png)

## Historical Context

Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering. Example: Southern California lowrider car shows, custom paint, and Chicano mural traditions..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Lowrider"
description: "Lowrider visual system, translated from the Claude Artisan catalog for use in digital products. Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type"
colors:
primary: "#f05a9f"
background: "#25071c"
surface: "#3c0d30"
text: "#fff1d6"
accent: "#48d7df"
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
md: "8px"
lg: "18px"
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

Lowrider visual system, translated from the Claude Artisan catalog for use in digital products. Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type

- **Category:** niche
- **Era:** 1940s-present
- **Origin:** Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering.
- **Reference:** Southern California lowrider car shows, custom paint, and Chicano mural traditions.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Candy paint, chrome, and deep sunset color
- Pinstripes, ornamental frames, and hand-lettered display type
- Celebratory crafted detail rather than generic retro decoration

## Colors

- **bg** — #25071c
- **surface** — #3c0d30
- **surface-2** — #64143e
- **text** — #fff1d6
- **text-muted** — #e2b8c8
- **primary** — #f05a9f
- **accent** — #48d7df
- **gold** — #e6bc55

## Typography

- Display: Georgia, serif
- Body: Arial, Helvetica, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Candy paint, chrome, and deep sunset color; Pinstripes, ornamental frames, and hand-lettered display type; Celebratory crafted detail rather than generic retro decoration; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 8px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/lowrider/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Lowrider — design tokens (generated from style_catalog.json) */
/* 1940s-present | Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering. */
:root {
/* color */
--color-bg: #25071c;
--color-surface: #3c0d30;
--color-surface-2: #64143e;
--color-text: #fff1d6;
--color-text-muted: #e2b8c8;
--color-primary: #f05a9f;
--color-accent: #48d7df;
--color-gold: #e6bc55;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-candy: 0 2px 0 rgba(255,255,255,.35) inset, 0 12px 28px rgba(0,0,0,.35);
--shadow-chrome: 0 0 0 1px #e6bc55, 0 0 0 4px #3c0d30, 0 0 0 5px #48d7df;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
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
--ease-standard: cubic-bezier(.2,.8,.2,1);
/* extra (signature gradients, composite borders, filters) */
--candy-gradient: linear-gradient(135deg, #f05a9f, #64143e 52%, #48d7df);
}

/* Reusable component primitives: Lowrider. */
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
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--candy-gradient);opacity:.12}.card,.nav{border:1px solid var(--color-gold);box-shadow:var(--shadow-candy)}.btn--primary{background:var(--candy-gradient);color:var(--color-text);border:1px solid var(--color-gold)}.badge{box-shadow:var(--shadow-chrome);color:var(--color-gold)}

/* Especificação de referência: references/00-flagship-implementation-specs/lowrider.md */
```

### Variables

```
--bg: #25071c, --fg: #fff1d6, --accent: #f05a9f, --surface: #3c0d30, --radius: 8px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#25071c

#3c0d30

#64143e

#fff1d6

Secondary

#e2b8c8

#f05a9f

#48d7df

#e6bc55

### Effects

Candy paint, chrome, and deep sunset color, Pinstripes, ornamental frames, and hand-lettered display type, Celebratory crafted detail rather than generic retro decoration, shadow, blur

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

- **Name:** Lowrider
- **Type:** claude-artisan/niche
- **Keywords:** Lowrider, lowrider art, Chicano lowrider, Candy paint, chrome, and deep sunset color, Pinstripes, ornamental frames, and hand-lettered display type, Celebratory crafted detail rather than generic retro decoration, niche
- **Era:** 1940s-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #25071c, surface: #3c0d30, surface-2: #64143e, text: #fff1d6
- **Secondary:** text-muted: #e2b8c8, primary: #f05a9f, accent: #48d7df, gold: #e6bc55

## Visual Effects

Candy paint, chrome, and deep sunset color, Pinstripes, ornamental frames, and hand-lettered display type, Celebratory crafted detail rather than generic retro decoration, shadow, blur

## AI Visual Direction

Lowrider, Candy paint, chrome, and deep sunset color, Pinstripes, ornamental frames, and hand-lettered display type, Celebratory crafted detail rather than generic retro decoration, Southern California lowrider car shows, custom paint, and Chicano mural traditions.

## CSS Technical

```css
/* Lowrider — design tokens (generated from style_catalog.json) */
/* 1940s-present | Chicano car culture and visual art, especially custom cars, pinstriping, murals, and Old English lettering. */
:root {
/* color */
--color-bg: #25071c;
--color-surface: #3c0d30;
--color-surface-2: #64143e;
--color-text: #fff1d6;
--color-text-muted: #e2b8c8;
--color-primary: #f05a9f;
--color-accent: #48d7df;
--color-gold: #e6bc55;
/* radius */
--radius-sm: 2px;
--radius-md: 8px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-candy: 0 2px 0 rgba(255,255,255,.35) inset, 0 12px 28px rgba(0,0,0,.35);
--shadow-chrome: 0 0 0 1px #e6bc55, 0 0 0 4px #3c0d30, 0 0 0 5px #48d7df;
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, serif;
--font-mono: ui-monospace, monospace;
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
--ease-standard: cubic-bezier(.2,.8,.2,1);
/* extra (signature gradients, composite borders, filters) */
--candy-gradient: linear-gradient(135deg, #f05a9f, #64143e 52%, #48d7df);
}

/* Reusable component primitives: Lowrider. */
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
.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--candy-gradient);opacity:.12}.card,.nav{border:1px solid var(--color-gold);box-shadow:var(--shadow-candy)}.btn--primary{background:var(--candy-gradient);color:var(--color-text);border:1px solid var(--color-gold)}.badge{box-shadow:var(--shadow-chrome);color:var(--color-gold)}

/* Especificação de referência: references/00-flagship-implementation-specs/lowrider.md */
```

## Design System Variables

```css
--bg: #25071c, --fg: #fff1d6, --accent: #f05a9f, --surface: #3c0d30, --radius: 8px, --spacing: 16px, --font-display: Georgia, serif, --font-body: Arial, Helvetica, sans-serif
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

[![Retro Americana / Diner](https://designmd.app/images/library/569.png) Claude Artisan · Subculturas & estéticas de nicho ### Retro Americana / Diner](https://designmd.app/library/americana-diner)[![McBling](https://designmd.app/images/library/681.png) Claude Artisan · Retrofuturismo & ficção especulativa ### McBling](https://designmd.app/library/mcbling)[![Chrome / Liquid Metal](https://designmd.app/images/library/596.png) Claude Artisan · Textura, material & renderização ### Chrome / Liquid Metal](https://designmd.app/library/chrome-metal)

Last synced: 8/30/2026
