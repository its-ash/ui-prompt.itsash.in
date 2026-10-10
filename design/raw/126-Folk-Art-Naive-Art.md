# Folk Art / Naive Art

- Source: <https://designmd.app/library/folk-art-naive>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:36.319Z

Claude Artisan · Movimentos históricos18th–20th century

# Folk Art / Naive Art

Reference for movimentos históricos Folk Art / Naive Art. Self-taught, untrained visual traditions worldwide — rural painters, sign-makers, and craftspeople outside academic art institutions.

Folk Art / Naive Artnaive artoutsider folk paintingself-taught artFlattened perspective with no attempt at photographic realismBold, saturated flat color fieldsDecorative repeating motifs: flowers, animals, everyday scenesThick, confident hand-drawn outlines and warm handmade charmhistorical

Use case: hero, superfície, conteúdo e grade responsiva; Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields

![Folk Art / Naive Art](https://designmd.app/images/library/640.png)

## Historical Context

Self-taught, untrained visual traditions worldwide — rural painters, sign-makers, and craftspeople outside academic art institutions. Example: Grandma Moses farm scenes; Henri Rousseau jungle paintings; Pennsylvania Dutch hex signs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Folk Art / Naive Art"
description: "Folk Art / Naive Art visual system, translated from the Claude Artisan catalog for use in digital products. Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields"
colors:
primary: "#d63b2f"
background: "#fbf1de"
surface: "#fff8ec"
text: "#3a2317"
accent: "#2f7a63"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Baloo 2', 'Fredoka', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Fredoka', 'Baloo 2', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "14px"
lg: "24px"
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

Folk Art / Naive Art visual system, translated from the Claude Artisan catalog for use in digital products. Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields

- **Category:** historical
- **Era:** 18th–20th century
- **Origin:** Self-taught, untrained visual traditions worldwide — rural painters, sign-makers, and craftspeople outside academic art institutions.
- **Reference:** Grandma Moses farm scenes; Henri Rousseau jungle paintings; Pennsylvania Dutch hex signs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Flattened perspective with no attempt at photographic realism
- Bold, saturated flat color fields
- Decorative repeating motifs: flowers, animals, everyday scenes
- Thick, confident hand-drawn outlines and warm handmade charm

## Colors

- **bg** — #fbf1de
- **surface** — #fff8ec
- **surface-2** — #f3e2bf
- **text** — #3a2317
- **text-muted** — #6b4a35
- **primary** — #d63b2f
- **accent** — #2f7a63
- **mustard** — #e0a629
- **outline-ink** — #2b1a10

## Typography

- Display: 'Baloo 2', 'Fredoka', sans-serif
- Body: 'Fredoka', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flattened perspective with no attempt at photographic realism; Bold, saturated flat color fields; Decorative repeating motifs: flowers, animals, everyday scenes; Thick, confident hand-drawn outlines and warm handmade charm; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 14px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/folk-art-naive/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Folk Art / Naive Art — design tokens */
/* 18th–20th century | Self-taught, untrained visual traditions worldwide */
:root {
/* color */
--color-bg: #fbf1de;
--color-surface: #fff8ec;
--color-surface-2: #f3e2bf;
--color-text: #3a2317;
--color-text-muted: #6b4a35;
--color-primary: #d63b2f;
--color-accent: #2f7a63;
--color-mustard: #e0a629;
--color-outline-ink: #2b1a10;
/* radius */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-outline: 0 3px 0 #2b1a10;
--shadow-outline-sm: 0 2px 0 #2b1a10;
/* font */
--font-sans: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Fredoka', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: repeating quilt-motif border + thick ink outline stroke */
--motif-border: repeating-linear-gradient(45deg, #d63b2f 0 6px, #e0a629 6px 12px, #2f7a63 12px 18px);
--outline-stroke: 3px solid #2b1a10;
}

/* ============================================================
Base component classes — Folk Art / Naive Art
Signature move: flattened perspective, bold flat saturated
color, thick confident hand-drawn outlines, repeating motifs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-primary);
border-bottom: var(--outline-stroke);
position: relative;
}
.nav::after {
content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 6px;
background: var(--motif-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-outline-ink);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-mustard); border: var(--outline-stroke);
box-shadow: var(--shadow-outline);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(2px); box-shadow: var(--shadow-outline-sm); }
.btn:focus-visible { outline: 3px solid var(--color-outline-ink); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: #fff8ec;
border: var(--outline-stroke); box-shadow: var(--shadow-outline);
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: var(--outline-stroke); padding: var(--space-6);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; top: 0; left: 0; right: 0; height: 8px;
background: var(--motif-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--outline-stroke);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-mustard); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .35em .9em; border-radius: var(--radius-pill);
background: var(--color-accent); border: 2px solid var(--color-outline-ink); color: #fff8ec;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/folk-art-naive.md */
```

### Variables

```
--bg: #fbf1de, --fg: #3a2317, --accent: #d63b2f, --surface: #fff8ec, --radius: 14px, --spacing: 16px, --font-display: 'Baloo 2', 'Fredoka', sans-serif, --font-body: 'Fredoka', 'Baloo 2', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fbf1de

#fff8ec

#f3e2bf

#3a2317

Secondary

#6b4a35

#d63b2f

#2f7a63

#e0a629

#2b1a10

### Effects

Flattened perspective with no attempt at photographic realism, Bold, saturated flat color fields, Decorative repeating motifs: flowers, animals, everyday scenes, Thick, confident hand-drawn outlines and warm handmade charm, shadow, blur

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

- **Name:** Folk Art / Naive Art
- **Type:** claude-artisan/historical
- **Keywords:** Folk Art / Naive Art, naive art, outsider folk painting, self-taught art, Flattened perspective with no attempt at photographic realism, Bold, saturated flat color fields, Decorative repeating motifs: flowers, animals, everyday scenes, Thick, confident hand-drawn outlines and warm handmade charm, historical
- **Era:** 18th–20th century
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fbf1de, surface: #fff8ec, surface-2: #f3e2bf, text: #3a2317
- **Secondary:** text-muted: #6b4a35, primary: #d63b2f, accent: #2f7a63, mustard: #e0a629, outline-ink: #2b1a10

## Visual Effects

Flattened perspective with no attempt at photographic realism, Bold, saturated flat color fields, Decorative repeating motifs: flowers, animals, everyday scenes, Thick, confident hand-drawn outlines and warm handmade charm, shadow, blur

## AI Visual Direction

Folk Art / Naive Art, Flattened perspective with no attempt at photographic realism, Bold, saturated flat color fields, Decorative repeating motifs: flowers, animals, everyday scenes, Thick, confident hand-drawn outlines and warm handmade charm, Grandma Moses farm scenes; Henri Rousseau jungle paintings; Pennsylvania Dutch hex signs.

## CSS Technical

```css
/* Folk Art / Naive Art — design tokens */
/* 18th–20th century | Self-taught, untrained visual traditions worldwide */
:root {
/* color */
--color-bg: #fbf1de;
--color-surface: #fff8ec;
--color-surface-2: #f3e2bf;
--color-text: #3a2317;
--color-text-muted: #6b4a35;
--color-primary: #d63b2f;
--color-accent: #2f7a63;
--color-mustard: #e0a629;
--color-outline-ink: #2b1a10;
/* radius */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-outline: 0 3px 0 #2b1a10;
--shadow-outline-sm: 0 2px 0 #2b1a10;
/* font */
--font-sans: 'Fredoka', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Fredoka', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: repeating quilt-motif border + thick ink outline stroke */
--motif-border: repeating-linear-gradient(45deg, #d63b2f 0 6px, #e0a629 6px 12px, #2f7a63 12px 18px);
--outline-stroke: 3px solid #2b1a10;
}

/* ============================================================
Base component classes — Folk Art / Naive Art
Signature move: flattened perspective, bold flat saturated
color, thick confident hand-drawn outlines, repeating motifs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-primary);
border-bottom: var(--outline-stroke);
position: relative;
}
.nav::after {
content: ""; position: absolute; left: 0; right: 0; bottom: -6px; height: 6px;
background: var(--motif-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-outline-ink);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-mustard); border: var(--outline-stroke);
box-shadow: var(--shadow-outline);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(2px); box-shadow: var(--shadow-outline-sm); }
.btn:focus-visible { outline: 3px solid var(--color-outline-ink); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: #fff8ec;
border: var(--outline-stroke); box-shadow: var(--shadow-outline);
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
border: var(--outline-stroke); padding: var(--space-6);
position: relative; overflow: hidden;
}
.card::before {
content: ""; position: absolute; top: 0; left: 0; right: 0; height: 8px;
background: var(--motif-border);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: var(--outline-stroke);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: 0 0 0 3px var(--color-mustard); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .35em .9em; border-radius: var(--radius-pill);
background: var(--color-accent); border: 2px solid var(--color-outline-ink); color: #fff8ec;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/folk-art-naive.md */
```

## Design System Variables

```css
--bg: #fbf1de, --fg: #3a2317, --accent: #d63b2f, --surface: #fff8ec, --radius: 14px, --spacing: 16px, --font-display: 'Baloo 2', 'Fredoka', sans-serif, --font-body: 'Fredoka', 'Baloo 2', system-ui, sans-serif
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

[![Chalkboard Lettering](https://designmd.app/images/library/595.png) Claude Artisan · Movimentos históricos ### Chalkboard Lettering](https://designmd.app/library/chalkboard-lettering)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)

Last synced: 8/30/2026
