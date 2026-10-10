# Engraving / Line Art

- Source: <https://designmd.app/library/engraving>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:22.317Z

Claude Artisan · Textura, material & renderizaçãoPrint heritage

# Engraving / Line Art

Reference for textura, material & renderização Engraving / Line Art. Old-master engraving/etching revival.

Engraving / Line ArtetchingwoodcuthatchingFine hatching and cross-hatching for toneMonochrome, high detail line workVintage currency/certificate feelPremium, heritage, editorialtexture

Use case: composição editorial com grade tipográfica; Fine hatching and cross-hatching for tone; Monochrome, high detail line work

![Engraving / Line Art](https://designmd.app/images/library/632.png)

## Historical Context

Old-master engraving/etching revival. Example: Financial/whisky brand illustration; Ivan Ramen-style menus..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Engraving / Line Art"
description: "Engraving / Line Art visual system, translated from the Claude Artisan catalog for use in digital products. Fine hatching and cross-hatching for tone; Monochrome, high detail line work"
colors:
primary: "#5a2e12"
background: "#f2ead9"
surface: "#ece1cb"
text: "#1c140b"
accent: "#8a6d3b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Playfair Display', 'Didot', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Freight Text', 'Georgia', 'Iowan Old Style', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Freight Text', 'Georgia', 'Iowan Old Style', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "2px"
lg: "3px"
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

Engraving / Line Art visual system, translated from the Claude Artisan catalog for use in digital products. Fine hatching and cross-hatching for tone; Monochrome, high detail line work

- **Category:** texture
- **Era:** Print heritage
- **Origin:** Old-master engraving/etching revival.
- **Reference:** Financial/whisky brand illustration; Ivan Ramen-style menus.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Fine hatching and cross-hatching for tone
- Monochrome, high detail line work
- Vintage currency/certificate feel
- Premium, heritage, editorial

## Colors

- **bg** — #f2ead9
- **surface** — #ece1cb
- **surface-strong** — #e4d5b8
- **border** — #2b2013
- **text** — #1c140b
- **text-muted** — #4a3a24
- **primary** — #5a2e12
- **accent** — #8a6d3b
- **ink** — #241a0e

## Typography

- Display: 'Playfair Display', 'Didot', 'Georgia', serif
- Body: 'Freight Text', 'Georgia', 'Iowan Old Style', serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Fine hatching and cross-hatching for tone; Monochrome, high detail line work; Vintage currency/certificate feel; Premium, heritage, editorial; sombras e elevação

## Shapes

- Radius scale: 2px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/engraving/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Engraving / Line Art — design tokens */
/* Print heritage | Old-master engraving/etching revival, condensed */
:root {
/* color */
--color-bg: #f2ead9;
--color-surface: #ece1cb;
--color-surface-strong: #e4d5b8;
--color-border: #2b2013;
--color-text: #1c140b;
--color-text-muted: #4a3a24;
--color-primary: #5a2e12;
--color-accent: #8a6d3b;
--color-ink: #241a0e;
/* radius */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(36,26,14,0.3);
--shadow-md: 0 2px 0 rgba(36,26,14,0.28), 0 4px 8px rgba(36,26,14,0.18);
--shadow-lg: 0 4px 0 rgba(36,26,14,0.26), 0 10px 20px rgba(36,26,14,0.22);
/* font */
--font-sans: 'Freight Text', 'Georgia', 'Iowan Old Style', serif;
--font-display: 'Playfair Display', 'Didot', 'Georgia', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: cross-hatch texture (repeating fine lines at two angles) used on
nav/card/input to mimic engraved tonal shading; a certificate-style
double-rule border for the "currency/certificate" heritage feel */
--hatch-fine: repeating-linear-gradient(115deg, rgba(28,20,11,0.09) 0 1px, transparent 1px 4px),
repeating-linear-gradient(25deg, rgba(28,20,11,0.05) 0 1px, transparent 1px 6px);
--border-certificate: 3px double var(--color-ink);
}

/* ============================================================
Base component classes — engraving
Signature move: fine cross-hatch line texture (var(--hatch-fine)) layered
under every surface, plus a certificate double-rule border repeated on
nav, card and input to read as "engraved plate" rather than flat print.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg);
background-image: var(--hatch-fine);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background-color: var(--color-surface); background-image: var(--hatch-fine);
border-bottom: var(--border-certificate);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-ink);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background-color: var(--color-surface); background-image: var(--hatch-fine);
border: 1.5px solid var(--color-ink);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-color: var(--color-primary); background-image: none; color: #f2ead9; border-color: var(--color-ink); }
.card {
background-color: var(--color-surface); background-image: var(--hatch-fine);
border: var(--border-certificate); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-ink);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background-color: var(--color-surface-strong); background-image: var(--hatch-fine);
border: 1.5px solid var(--color-ink);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(90,46,18,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background-color: var(--color-ink);
color: var(--color-bg); border: 1px solid var(--color-ink); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/engraving.md */
```

### Variables

```
--bg: #f2ead9, --fg: #1c140b, --accent: #5a2e12, --surface: #ece1cb, --radius: 2px, --spacing: 16px, --font-display: 'Playfair Display', 'Didot', 'Georgia', serif, --font-body: 'Freight Text', 'Georgia', 'Iowan Old Style', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2ead9

#ece1cb

#e4d5b8

#2b2013

Secondary

#1c140b

#4a3a24

#5a2e12

#8a6d3b

#241a0e

### Effects

Fine hatching and cross-hatching for tone, Monochrome, high detail line work, Vintage currency/certificate feel, Premium, heritage, editorial, shadow

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

- **Name:** Engraving / Line Art
- **Type:** claude-artisan/texture
- **Keywords:** Engraving / Line Art, etching, woodcut, hatching, Fine hatching and cross-hatching for tone, Monochrome, high detail line work, Vintage currency/certificate feel, Premium, heritage, editorial, texture
- **Era:** Print heritage
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2ead9, surface: #ece1cb, surface-strong: #e4d5b8, border: #2b2013
- **Secondary:** text: #1c140b, text-muted: #4a3a24, primary: #5a2e12, accent: #8a6d3b, ink: #241a0e

## Visual Effects

Fine hatching and cross-hatching for tone, Monochrome, high detail line work, Vintage currency/certificate feel, Premium, heritage, editorial, shadow

## AI Visual Direction

Engraving / Line Art, Fine hatching and cross-hatching for tone, Monochrome, high detail line work, Vintage currency/certificate feel, Premium, heritage, editorial, Financial/whisky brand illustration; Ivan Ramen-style menus.

## CSS Technical

```css
/* Engraving / Line Art — design tokens */
/* Print heritage | Old-master engraving/etching revival, condensed */
:root {
/* color */
--color-bg: #f2ead9;
--color-surface: #ece1cb;
--color-surface-strong: #e4d5b8;
--color-border: #2b2013;
--color-text: #1c140b;
--color-text-muted: #4a3a24;
--color-primary: #5a2e12;
--color-accent: #8a6d3b;
--color-ink: #241a0e;
/* radius */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(36,26,14,0.3);
--shadow-md: 0 2px 0 rgba(36,26,14,0.28), 0 4px 8px rgba(36,26,14,0.18);
--shadow-lg: 0 4px 0 rgba(36,26,14,0.26), 0 10px 20px rgba(36,26,14,0.22);
/* font */
--font-sans: 'Freight Text', 'Georgia', 'Iowan Old Style', serif;
--font-display: 'Playfair Display', 'Didot', 'Georgia', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: cross-hatch texture (repeating fine lines at two angles) used on
nav/card/input to mimic engraved tonal shading; a certificate-style
double-rule border for the "currency/certificate" heritage feel */
--hatch-fine: repeating-linear-gradient(115deg, rgba(28,20,11,0.09) 0 1px, transparent 1px 4px),
repeating-linear-gradient(25deg, rgba(28,20,11,0.05) 0 1px, transparent 1px 6px);
--border-certificate: 3px double var(--color-ink);
}

/* ============================================================
Base component classes — engraving
Signature move: fine cross-hatch line texture (var(--hatch-fine)) layered
under every surface, plus a certificate double-rule border repeated on
nav, card and input to read as "engraved plate" rather than flat print.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg);
background-image: var(--hatch-fine);
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background-color: var(--color-surface); background-image: var(--hatch-fine);
border-bottom: var(--border-certificate);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-ink);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background-color: var(--color-surface); background-image: var(--hatch-fine);
border: 1.5px solid var(--color-ink);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-color: var(--color-primary); background-image: none; color: #f2ead9; border-color: var(--color-ink); }
.card {
background-color: var(--color-surface); background-image: var(--hatch-fine);
border: var(--border-certificate); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-ink);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background-color: var(--color-surface-strong); background-image: var(--hatch-fine);
border: 1.5px solid var(--color-ink);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(90,46,18,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background-color: var(--color-ink);
color: var(--color-bg); border: 1px solid var(--color-ink); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/engraving.md */
```

## Design System Variables

```css
--bg: #f2ead9, --fg: #1c140b, --accent: #5a2e12, --surface: #ece1cb, --radius: 2px, --spacing: 16px, --font-display: 'Playfair Display', 'Didot', 'Georgia', serif, --font-body: 'Freight Text', 'Georgia', 'Iowan Old Style', serif
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

[![Blueprint / Technical Drawing](https://designmd.app/images/library/591.png) Claude Artisan · Textura, material & renderização ### Blueprint / Technical Drawing](https://designmd.app/library/blueprint)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
