# Baroque / Rococo

- Source: <https://designmd.app/library/baroque-rococo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:39.319Z

Claude Artisan · Movimentos históricos1600–1780

# Baroque / Rococo

Reference for movimentos históricos Baroque / Rococo. European Baroque (17th c.) and Rococo (18th c.).

Baroque / Rococobaroquerococoornate classicalLavish ornament, scrollwork, gildingDramatic light/shadow (Baroque) or pastel frivolity (Rococo)Curved cartouches and flourishesOpulent, theatrical, aristocratichistorical

Use case: hero, superfície, conteúdo e grade responsiva; Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)

![Baroque / Rococo](https://designmd.app/images/library/585.png)

## Historical Context

European Baroque (17th c.) and Rococo (18th c.). Example: Versailles interiors; Fragonard paintings..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Baroque / Rococo"
description: "Baroque / Rococo visual system, translated from the Claude Artisan catalog for use in digital products. Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)"
colors:
primary: "#8c1c2b"
background: "#2a1116"
surface: "#3a1a20"
text: "#f3e6d0"
accent: "#c9a24b"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cinzel Decorative', 'Playfair Display', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'EB Garamond', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "14px"
lg: "16px"
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

Baroque / Rococo visual system, translated from the Claude Artisan catalog for use in digital products. Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)

- **Category:** historical
- **Era:** 1600–1780
- **Origin:** European Baroque (17th c.) and Rococo (18th c.).
- **Reference:** Versailles interiors; Fragonard paintings.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Lavish ornament, scrollwork, gilding
- Dramatic light/shadow (Baroque) or pastel frivolity (Rococo)
- Curved cartouches and flourishes
- Opulent, theatrical, aristocratic

## Colors

- **bg** — #2a1116
- **surface** — #3a1a20
- **surface-strong** — #4a232b
- **border** — #c9a24b
- **text** — #f3e6d0
- **text-muted** — #d8bfa0
- **primary** — #8c1c2b
- **accent** — #c9a24b

## Typography

- Display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif
- Body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Lavish ornament, scrollwork, gilding; Dramatic light/shadow (Baroque) or pastel frivolity (Rococo); Curved cartouches and flourishes; Opulent, theatrical, aristocratic; sombras e elevação

## Shapes

- Radius scale: 6px, 14px, 34px 8px 34px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/baroque-rococo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Baroque / Rococo — design tokens */
/* 1600–1780 | European Baroque (17th c.) and Rococo (18th c.), condensed */
:root {
/* color */
--color-bg: #2a1116;
--color-surface: #3a1a20;
--color-surface-strong: #4a232b;
--color-border: #c9a24b;
--color-text: #f3e6d0;
--color-text-muted: #d8bfa0;
--color-primary: #8c1c2b;
--color-accent: #c9a24b;
/* radius — cartouche curves, ornate scrollwork */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 34px 8px 34px 8px;
--radius-pill: 999px;
/* shadow — dramatic Baroque chiaroscuro */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 10px 24px rgba(0,0,0,0.5);
--shadow-lg: 0 22px 48px rgba(0,0,0,0.6);
--shadow-inset-gilt: inset 0 0 0 1px rgba(201,162,75,0.5);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra — signature gilded double-frame border, echoing Versailles molding */
--gilt-frame: 3px double var(--color-accent);
--gilt-glow: linear-gradient(180deg, rgba(201,162,75,0.18), transparent 40%);
}

/* ============================================================
Base component classes — Baroque / Rococo
Signature move: a gilded double-line border (--gilt-frame) with a top-down
gold glow, echoing gilt molding on dark aristocratic wall panels. Repeated
on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--gilt-glow), var(--color-surface); border-bottom: var(--gilt-frame); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--gilt-glow), var(--color-surface); border: var(--gilt-frame);
box-shadow: var(--shadow-sm), var(--shadow-inset-gilt); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-gilt); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f3e6d0; border-color: var(--color-accent); }
.card { background: var(--gilt-glow), var(--color-surface); border-radius: var(--radius-lg); border: var(--gilt-frame);
box-shadow: var(--shadow-lg), var(--shadow-inset-gilt); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: var(--gilt-frame); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(201,162,75,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/baroque-rococo.md */
```

### Variables

```
--bg: #2a1116, --fg: #f3e6d0, --accent: #8c1c2b, --surface: #3a1a20, --radius: 14px, --spacing: 16px, --font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#2a1116

#3a1a20

#4a232b

#c9a24b

Secondary

#f3e6d0

#d8bfa0

#8c1c2b

#c9a24b

### Effects

Lavish ornament, scrollwork, gilding, Dramatic light/shadow (Baroque) or pastel frivolity (Rococo), Curved cartouches and flourishes, Opulent, theatrical, aristocratic, shadow

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

- **Name:** Baroque / Rococo
- **Type:** claude-artisan/historical
- **Keywords:** Baroque / Rococo, baroque, rococo, ornate classical, Lavish ornament, scrollwork, gilding, Dramatic light/shadow (Baroque) or pastel frivolity (Rococo), Curved cartouches and flourishes, Opulent, theatrical, aristocratic, historical
- **Era:** 1600–1780
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #2a1116, surface: #3a1a20, surface-strong: #4a232b, border: #c9a24b
- **Secondary:** text: #f3e6d0, text-muted: #d8bfa0, primary: #8c1c2b, accent: #c9a24b

## Visual Effects

Lavish ornament, scrollwork, gilding, Dramatic light/shadow (Baroque) or pastel frivolity (Rococo), Curved cartouches and flourishes, Opulent, theatrical, aristocratic, shadow

## AI Visual Direction

Baroque / Rococo, Lavish ornament, scrollwork, gilding, Dramatic light/shadow (Baroque) or pastel frivolity (Rococo), Curved cartouches and flourishes, Opulent, theatrical, aristocratic, Versailles interiors; Fragonard paintings.

## CSS Technical

```css
/* Baroque / Rococo — design tokens */
/* 1600–1780 | European Baroque (17th c.) and Rococo (18th c.), condensed */
:root {
/* color */
--color-bg: #2a1116;
--color-surface: #3a1a20;
--color-surface-strong: #4a232b;
--color-border: #c9a24b;
--color-text: #f3e6d0;
--color-text-muted: #d8bfa0;
--color-primary: #8c1c2b;
--color-accent: #c9a24b;
/* radius — cartouche curves, ornate scrollwork */
--radius-sm: 6px;
--radius-md: 14px;
--radius-lg: 34px 8px 34px 8px;
--radius-pill: 999px;
/* shadow — dramatic Baroque chiaroscuro */
--shadow-sm: 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 10px 24px rgba(0,0,0,0.5);
--shadow-lg: 0 22px 48px rgba(0,0,0,0.6);
--shadow-inset-gilt: inset 0 0 0 1px rgba(201,162,75,0.5);
/* font */
--font-sans: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
--font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra — signature gilded double-frame border, echoing Versailles molding */
--gilt-frame: 3px double var(--color-accent);
--gilt-glow: linear-gradient(180deg, rgba(201,162,75,0.18), transparent 40%);
}

/* ============================================================
Base component classes — Baroque / Rococo
Signature move: a gilded double-line border (--gilt-frame) with a top-down
gold glow, echoing gilt molding on dark aristocratic wall panels. Repeated
on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--gilt-glow), var(--color-surface); border-bottom: var(--gilt-frame); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--gilt-glow), var(--color-surface); border: var(--gilt-frame);
box-shadow: var(--shadow-sm), var(--shadow-inset-gilt); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-gilt); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f3e6d0; border-color: var(--color-accent); }
.card { background: var(--gilt-glow), var(--color-surface); border-radius: var(--radius-lg); border: var(--gilt-frame);
box-shadow: var(--shadow-lg), var(--shadow-inset-gilt); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); background: var(--color-surface);
border: var(--gilt-frame); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(201,162,75,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-accent); color: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/baroque-rococo.md */
```

## Design System Variables

```css
--bg: #2a1116, --fg: #f3e6d0, --accent: #8c1c2b, --surface: #3a1a20, --radius: 14px, --spacing: 16px, --font-display: 'Cinzel Decorative', 'Playfair Display', Georgia, serif, --font-body: 'Cormorant Garamond', 'EB Garamond', Georgia, serif
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

[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)[![Grandmillennial](https://designmd.app/images/library/654.png) Claude Artisan · Subculturas & estéticas de nicho ### Grandmillennial](https://designmd.app/library/grandmillennial)

Last synced: 8/30/2026
