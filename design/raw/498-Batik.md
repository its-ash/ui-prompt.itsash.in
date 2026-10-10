# Batik

- Source: <https://designmd.app/library/batik>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:40.276Z

Claude Artisan · Textura, material & renderização6th century-present

# Batik

Reference for textura, material & renderização Batik. Wax-resist textile dyeing practiced across Indonesia (especially Java), Malaysia, and West Africa, in which molten wax is applied to cloth before dyeing to resist color and then boiled away.

Batikwax-resist dyeingtuliscap batikIntricate repeating organic/geometric pattern (florals, parang, kawung motifs)Fine crackle/veining lines from wax-resist cracking during dyeingWarm indigo/rust/ochre dye palette on a natural cloth groundtexture

Use case: composição editorial com grade tipográfica; Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing

![Batik](https://designmd.app/images/library/587.png)

## Historical Context

Wax-resist textile dyeing practiced across Indonesia (especially Java), Malaysia, and West Africa, in which molten wax is applied to cloth before dyeing to resist color and then boiled away. Example: Javanese tulis (hand-drawn) batik sarongs; Yogyakarta and Solo court batik patterns; West African wax-print cloth..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Batik"
description: "Batik visual system, translated from the Claude Artisan catalog for use in digital products. Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing"
colors:
primary: "#2c4a6e"
background: "#f3e6cd"
surface: "#faf1de"
text: "#2b1c12"
accent: "#b5501f"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Marcellus', 'Cormorant Garamond', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'Marcellus', system-ui, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'Marcellus', system-ui, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "14px"
lg: "26px"
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

Batik visual system, translated from the Claude Artisan catalog for use in digital products. Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing

- **Category:** texture
- **Era:** 6th century-present
- **Origin:** Wax-resist textile dyeing practiced across Indonesia (especially Java), Malaysia, and West Africa, in which molten wax is applied to cloth before dyeing to resist color and then boiled away.
- **Reference:** Javanese tulis (hand-drawn) batik sarongs; Yogyakarta and Solo court batik patterns; West African wax-print cloth.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Intricate repeating organic/geometric pattern (florals, parang, kawung motifs)
- Fine crackle/veining lines from wax-resist cracking during dyeing
- Warm indigo/rust/ochre dye palette on a natural cloth ground

## Colors

- **bg** — #f3e6cd
- **surface** — #faf1de
- **surface-2** — #e7d3ab
- **text** — #2b1c12
- **text-muted** — #6b5335
- **primary** — #2c4a6e
- **accent** — #b5501f
- **ochre** — #c68a2e
- **indigo-deep** — #1c3350

## Typography

- Display: 'Marcellus', 'Cormorant Garamond', serif
- Body: 'Cormorant Garamond', 'Marcellus', system-ui, serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Intricate repeating organic/geometric pattern (florals, parang, kawung motifs); Fine crackle/veining lines from wax-resist cracking during dyeing; Warm indigo/rust/ochre dye palette on a natural cloth ground; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 14px, 26px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/batik/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Batik — design tokens */
/* 6th century–present | Wax-resist textile dyeing across Indonesia, Malaysia, West Africa */
:root {
/* color */
--color-bg: #f3e6cd;
--color-surface: #faf1de;
--color-surface-2: #e7d3ab;
--color-text: #2b1c12;
--color-text-muted: #6b5335;
--color-primary: #2c4a6e;
--color-accent: #b5501f;
--color-ochre: #c68a2e;
--color-indigo-deep: #1c3350;
/* radius */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 26px;
--radius-pill: 999px;
/* shadow */
--shadow-cloth: 0 10px 26px rgba(43,28,18,0.18);
--shadow-cloth-sm: 0 4px 12px rgba(43,28,18,0.14);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Cormorant Garamond', 'Marcellus', system-ui, serif;
--font-display: 'Marcellus', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.33, 0.0, 0.2, 1);
/* extra: wax-crackle veining + repeating motif border */
--crackle-veins: repeating-conic-gradient(from 20deg at 30% 40%, rgba(43,28,18,0.05) 0deg 4deg, transparent 4deg 26deg);
--motif-border: repeating-linear-gradient(90deg, #2c4a6e 0 6px, #c68a2e 6px 8px, transparent 8px 22px);
}

/* ============================================================
Base component classes — Batik
Signature move: fine crackle/veining lines (where the wax
resist cracked during dyeing) layered over a warm indigo/rust/
ochre dye palette on a natural cloth ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--crackle-veins); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-indigo-deep);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-ochre);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-cloth-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); border: 1px solid var(--color-indigo-deep);
box-shadow: var(--shadow-cloth-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-cloth); }
.card {
background: var(--color-surface); background-image: var(--crackle-veins);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-cloth);
border-top: 4px solid var(--color-accent);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-ochre);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-cloth-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-ochre); color: var(--color-text); border: 1px solid var(--color-accent);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/batik.md */
```

### Variables

```
--bg: #f3e6cd, --fg: #2b1c12, --accent: #2c4a6e, --surface: #faf1de, --radius: 14px, --spacing: 16px, --font-display: 'Marcellus', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'Marcellus', system-ui, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3e6cd

#faf1de

#e7d3ab

#2b1c12

Secondary

#6b5335

#2c4a6e

#b5501f

#c68a2e

#1c3350

### Effects

Intricate repeating organic/geometric pattern (florals, parang, kawung motifs), Fine crackle/veining lines from wax-resist cracking during dyeing, Warm indigo/rust/ochre dye palette on a natural cloth ground, shadow, blur

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

- **Name:** Batik
- **Type:** claude-artisan/texture
- **Keywords:** Batik, wax-resist dyeing, tulis, cap batik, Intricate repeating organic/geometric pattern (florals, parang, kawung motifs), Fine crackle/veining lines from wax-resist cracking during dyeing, Warm indigo/rust/ochre dye palette on a natural cloth ground, texture
- **Era:** 6th century-present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3e6cd, surface: #faf1de, surface-2: #e7d3ab, text: #2b1c12
- **Secondary:** text-muted: #6b5335, primary: #2c4a6e, accent: #b5501f, ochre: #c68a2e, indigo-deep: #1c3350

## Visual Effects

Intricate repeating organic/geometric pattern (florals, parang, kawung motifs), Fine crackle/veining lines from wax-resist cracking during dyeing, Warm indigo/rust/ochre dye palette on a natural cloth ground, shadow, blur

## AI Visual Direction

Batik, Intricate repeating organic/geometric pattern (florals, parang, kawung motifs), Fine crackle/veining lines from wax-resist cracking during dyeing, Warm indigo/rust/ochre dye palette on a natural cloth ground, Javanese tulis (hand-drawn) batik sarongs; Yogyakarta and Solo court batik patterns; West African wax-print cloth.

## CSS Technical

```css
/* Batik — design tokens */
/* 6th century–present | Wax-resist textile dyeing across Indonesia, Malaysia, West Africa */
:root {
/* color */
--color-bg: #f3e6cd;
--color-surface: #faf1de;
--color-surface-2: #e7d3ab;
--color-text: #2b1c12;
--color-text-muted: #6b5335;
--color-primary: #2c4a6e;
--color-accent: #b5501f;
--color-ochre: #c68a2e;
--color-indigo-deep: #1c3350;
/* radius */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 26px;
--radius-pill: 999px;
/* shadow */
--shadow-cloth: 0 10px 26px rgba(43,28,18,0.18);
--shadow-cloth-sm: 0 4px 12px rgba(43,28,18,0.14);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Cormorant Garamond', 'Marcellus', system-ui, serif;
--font-display: 'Marcellus', 'Cormorant Garamond', serif;
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
--ease-standard: cubic-bezier(0.33, 0.0, 0.2, 1);
/* extra: wax-crackle veining + repeating motif border */
--crackle-veins: repeating-conic-gradient(from 20deg at 30% 40%, rgba(43,28,18,0.05) 0deg 4deg, transparent 4deg 26deg);
--motif-border: repeating-linear-gradient(90deg, #2c4a6e 0 6px, #c68a2e 6px 8px, transparent 8px 22px);
}

/* ============================================================
Base component classes — Batik
Signature move: fine crackle/veining lines (where the wax
resist cracked during dyeing) layered over a warm indigo/rust/
ochre dye palette on a natural cloth ground.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--crackle-veins); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid var(--color-indigo-deep);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-2); border: 1px solid var(--color-ochre);
cursor: pointer; transition: box-shadow .2s var(--ease-standard), transform .2s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-cloth-sm); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-surface); border: 1px solid var(--color-indigo-deep);
box-shadow: var(--shadow-cloth-sm);
}
.btn--primary:hover { box-shadow: var(--shadow-cloth); }
.card {
background: var(--color-surface); background-image: var(--crackle-veins);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-cloth);
border-top: 4px solid var(--color-accent);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-ochre);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-cloth-sm); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-ochre); color: var(--color-text); border: 1px solid var(--color-accent);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/batik.md */
```

## Design System Variables

```css
--bg: #f3e6cd, --fg: #2b1c12, --accent: #2c4a6e, --surface: #faf1de, --radius: 14px, --spacing: 16px, --font-display: 'Marcellus', 'Cormorant Garamond', serif, --font-body: 'Cormorant Garamond', 'Marcellus', system-ui, serif
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

[![Terrazzo](https://designmd.app/images/library/735.png) Claude Artisan · Textura, material & renderização ### Terrazzo](https://designmd.app/library/terrazzo)[![Marble / Stone](https://designmd.app/images/library/677.png) Claude Artisan · Textura, material & renderização ### Marble / Stone](https://designmd.app/library/marble)

Last synced: 8/30/2026
