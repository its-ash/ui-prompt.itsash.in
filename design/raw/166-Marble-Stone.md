# Marble / Stone

- Source: <https://designmd.app/library/marble>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:40.230Z

Claude Artisan · Textura, material & renderizaçãoTimeless

# Marble / Stone

Reference for textura, material & renderização Marble / Stone. Natural stone as luxury material reference.

Marble / Stonemarbledstone textureVeined marble surfaces and swirlsCream, black, green, gold veiningPremium, weighty, classicalFluid ink-marble variantstexture

Use case: hero, superfície, conteúdo e grade responsiva; Veined marble surfaces and swirls; Cream, black, green, gold veining

![Marble / Stone](https://designmd.app/images/library/677.png)

## Historical Context

Natural stone as luxury material reference. Example: Luxury/beauty branding; classical museum sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Marble / Stone"
description: "Marble / Stone visual system, translated from the Claude Artisan catalog for use in digital products. Veined marble surfaces and swirls; Cream, black, green, gold veining"
colors:
primary: "#1f3d33"
background: "#f7f4ee"
surface: "#fdfcf9"
text: "#241f1a"
accent: "#b08a3e"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Didot', 'Playfair Display', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'Georgia', serif"
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

Marble / Stone visual system, translated from the Claude Artisan catalog for use in digital products. Veined marble surfaces and swirls; Cream, black, green, gold veining

- **Category:** texture
- **Era:** Timeless
- **Origin:** Natural stone as luxury material reference.
- **Reference:** Luxury/beauty branding; classical museum sites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Veined marble surfaces and swirls
- Cream, black, green, gold veining
- Premium, weighty, classical
- Fluid ink-marble variants

## Colors

- **bg** — #f7f4ee
- **surface** — #fdfcf9
- **surface-strong** — #efe9dd
- **border** — #d8cfbd
- **text** — #241f1a
- **text-muted** — #5c5346
- **primary** — #1f3d33
- **accent** — #b08a3e
- **vein** — #8a8272
- **vein-dark** — #38332b

## Typography

- Display: 'Didot', 'Playfair Display', 'Georgia', serif
- Body: 'Cormorant Garamond', 'Georgia', serif
- Mono: ui-monospace, 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Veined marble surfaces and swirls; Cream, black, green, gold veining; Premium, weighty, classical; Fluid ink-marble variants; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/marble/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Marble / Stone — design tokens */
/* Timeless | Natural stone as luxury material reference, condensed */
:root {
/* color */
--color-bg: #f7f4ee;
--color-surface: #fdfcf9;
--color-surface-strong: #efe9dd;
--color-border: #d8cfbd;
--color-text: #241f1a;
--color-text-muted: #5c5346;
--color-primary: #1f3d33;
--color-accent: #b08a3e;
--color-vein: #8a8272;
--color-vein-dark: #38332b;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(36,31,26,0.10);
--shadow-md: 0 6px 18px rgba(36,31,26,0.14);
--shadow-lg: 0 16px 40px rgba(36,31,26,0.18);
/* font */
--font-sans: 'Cormorant Garamond', 'Georgia', serif;
--font-display: 'Didot', 'Playfair Display', 'Georgia', serif;
--font-mono: ui-monospace, 'Courier New', monospace;
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
/* extra: veined marble surface — thin diagonal vein lines composited via
conic/linear gradients, plus a gold-leaf hairline border for premium weight */
--marble-veins: linear-gradient(115deg, transparent 22%, rgba(138,130,114,0.35) 23%, transparent 24%,
transparent 47%, rgba(56,51,43,0.28) 48%, transparent 49%,
transparent 71%, rgba(138,130,114,0.30) 72%, transparent 73%);
--gold-hairline: 1px solid rgba(176,138,62,0.55);
}

/* ============================================================
Base component classes — Marble / Stone
Signature move: --marble-veins (diagonal vein streaks) composited under a
stone-cream fill on every raised surface, edged by a thin gold hairline.
Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--marble-veins), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--marble-veins), var(--color-surface);
border-bottom: var(--gold-hairline); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--marble-veins), var(--color-surface-strong); border: var(--gold-hairline);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f7f4ee; border-color: var(--color-primary); }
.card { background: var(--marble-veins), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(176,138,62,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #241f1a; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/marble.md */
```

### Variables

```
--bg: #f7f4ee, --fg: #241f1a, --accent: #1f3d33, --surface: #fdfcf9, --radius: 4px, --spacing: 16px, --font-display: 'Didot', 'Playfair Display', 'Georgia', serif, --font-body: 'Cormorant Garamond', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f4ee

#fdfcf9

#efe9dd

#d8cfbd

Secondary

#241f1a

#5c5346

#1f3d33

#b08a3e

#8a8272

#38332b

### Effects

Veined marble surfaces and swirls, Cream, black, green, gold veining, Premium, weighty, classical, Fluid ink-marble variants, shadow

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

- **Name:** Marble / Stone
- **Type:** claude-artisan/texture
- **Keywords:** Marble / Stone, marbled, stone texture, Veined marble surfaces and swirls, Cream, black, green, gold veining, Premium, weighty, classical, Fluid ink-marble variants, texture
- **Era:** Timeless
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f4ee, surface: #fdfcf9, surface-strong: #efe9dd, border: #d8cfbd
- **Secondary:** text: #241f1a, text-muted: #5c5346, primary: #1f3d33, accent: #b08a3e, vein: #8a8272, vein-dark: #38332b

## Visual Effects

Veined marble surfaces and swirls, Cream, black, green, gold veining, Premium, weighty, classical, Fluid ink-marble variants, shadow

## AI Visual Direction

Marble / Stone, Veined marble surfaces and swirls, Cream, black, green, gold veining, Premium, weighty, classical, Fluid ink-marble variants, Luxury/beauty branding; classical museum sites.

## CSS Technical

```css
/* Marble / Stone — design tokens */
/* Timeless | Natural stone as luxury material reference, condensed */
:root {
/* color */
--color-bg: #f7f4ee;
--color-surface: #fdfcf9;
--color-surface-strong: #efe9dd;
--color-border: #d8cfbd;
--color-text: #241f1a;
--color-text-muted: #5c5346;
--color-primary: #1f3d33;
--color-accent: #b08a3e;
--color-vein: #8a8272;
--color-vein-dark: #38332b;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(36,31,26,0.10);
--shadow-md: 0 6px 18px rgba(36,31,26,0.14);
--shadow-lg: 0 16px 40px rgba(36,31,26,0.18);
/* font */
--font-sans: 'Cormorant Garamond', 'Georgia', serif;
--font-display: 'Didot', 'Playfair Display', 'Georgia', serif;
--font-mono: ui-monospace, 'Courier New', monospace;
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
/* extra: veined marble surface — thin diagonal vein lines composited via
conic/linear gradients, plus a gold-leaf hairline border for premium weight */
--marble-veins: linear-gradient(115deg, transparent 22%, rgba(138,130,114,0.35) 23%, transparent 24%,
transparent 47%, rgba(56,51,43,0.28) 48%, transparent 49%,
transparent 71%, rgba(138,130,114,0.30) 72%, transparent 73%);
--gold-hairline: 1px solid rgba(176,138,62,0.55);
}

/* ============================================================
Base component classes — Marble / Stone
Signature move: --marble-veins (diagonal vein streaks) composited under a
stone-cream fill on every raised surface, edged by a thin gold hairline.
Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--marble-veins), var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--marble-veins), var(--color-surface);
border-bottom: var(--gold-hairline); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-display); letter-spacing: .02em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--marble-veins), var(--color-surface-strong); border: var(--gold-hairline);
cursor: pointer; transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f7f4ee; border-color: var(--color-primary); }
.card { background: var(--marble-veins), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(176,138,62,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #241f1a; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/marble.md */
```

## Design System Variables

```css
--bg: #f7f4ee, --fg: #241f1a, --accent: #1f3d33, --surface: #fdfcf9, --radius: 4px, --spacing: 16px, --font-display: 'Didot', 'Playfair Display', 'Georgia', serif, --font-body: 'Cormorant Garamond', 'Georgia', serif
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

[![Engraving / Line Art](https://designmd.app/images/library/632.png) Claude Artisan · Textura, material & renderização ### Engraving / Line Art](https://designmd.app/library/engraving)[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)

Last synced: 8/30/2026
