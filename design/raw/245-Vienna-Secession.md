# Vienna Secession

- Source: <https://designmd.app/library/vienna-secession>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:44.325Z

Claude Artisan · Movimentos históricos1897–1905

# Vienna Secession

Reference for movimentos históricos Vienna Secession. Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann).

Vienna SecessionSecessionistWiener WerkstätteGeometric grids of squares married to ornamentGold leaf, decorative symbolismCustom geometric letteringBridge between Art Nouveau and Decohistorical

Use case: grade modular responsiva; Geometric grids of squares married to ornament; Gold leaf, decorative symbolism

![Vienna Secession](https://designmd.app/images/library/748.png)

## Historical Context

Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann). Example: Klimt Beethoven Frieze; Ver Sacrum journal..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Vienna Secession"
description: "Vienna Secession visual system, translated from the Claude Artisan catalog for use in digital products. Geometric grids of squares married to ornament; Gold leaf, decorative symbolism"
colors:
primary: "#b8942f"
background: "#f2ede1"
surface: "#ffffff"
text: "#1a1a1a"
accent: "#6b1f2a"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Cinzel', 'Josefin Sans', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Josefin Sans', 'Century Gothic', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Josefin Sans', 'Century Gothic', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Vienna Secession visual system, translated from the Claude Artisan catalog for use in digital products. Geometric grids of squares married to ornament; Gold leaf, decorative symbolism

- **Category:** historical
- **Era:** 1897–1905
- **Origin:** Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann).
- **Reference:** Klimt Beethoven Frieze; Ver Sacrum journal.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Geometric grids of squares married to ornament
- Gold leaf, decorative symbolism
- Custom geometric lettering
- Bridge between Art Nouveau and Deco

## Colors

- **bg** — #f2ede1
- **surface** — #ffffff
- **surface-strong** — #e9e1cd
- **border** — #1a1a1a
- **text** — #1a1a1a
- **text-muted** — #5c5647
- **primary** — #b8942f
- **accent** — #6b1f2a
- **violet** — #4b3a63

## Typography

- Display: 'Cinzel', 'Josefin Sans', serif
- Body: 'Josefin Sans', 'Century Gothic', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Geometric grids of squares married to ornament; Gold leaf, decorative symbolism; Custom geometric lettering; Bridge between Art Nouveau and Deco; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/vienna-secession/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Vienna Secession — design tokens */
/* 1897–1905 | Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann), condensed */
:root {
/* color */
--color-bg: #f2ede1;
--color-surface: #ffffff;
--color-surface-strong: #e9e1cd;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #5c5647;
--color-primary: #b8942f;
--color-accent: #6b1f2a;
--color-violet: #4b3a63;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(26,26,26,0.2);
--shadow-md: 0 2px 0 rgba(26,26,26,0.25);
--shadow-lg: 0 4px 0 rgba(26,26,26,0.3);
/* font */
--font-sans: 'Josefin Sans', 'Century Gothic', sans-serif;
--font-display: 'Cinzel', 'Josefin Sans', serif;
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
/* extra (signature gradients, composite borders, filters) */
--grid-squares: repeating-linear-gradient(90deg, var(--color-primary) 0 6px, transparent 6px 18px);
--gold-border: 4px solid var(--color-primary);
--square-corner: 10px;
}

/* ============================================================
Base component classes — Vienna Secession
Signature move: a row of small gold squares (--grid-squares)
as a border-top/bottom band, echoing Klimt/Hoffmann's geometric grids.
Repeats on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--gold-border);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 6px; background-position: bottom; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text); letter-spacing: .04em;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-text);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #1a1a1a; border-color: var(--color-text);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 4px; background-position: bottom; }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 2px solid var(--color-text); border-radius: var(--radius-md);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 6px; background-position: top; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-text); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 2px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-violet); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vienna-secession.md */
```

### Variables

```
--bg: #f2ede1, --fg: #1a1a1a, --accent: #b8942f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Cinzel', 'Josefin Sans', serif, --font-body: 'Josefin Sans', 'Century Gothic', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2ede1

#ffffff

#e9e1cd

#1a1a1a

Secondary

#1a1a1a

#5c5647

#b8942f

#6b1f2a

#4b3a63

### Effects

Geometric grids of squares married to ornament, Gold leaf, decorative symbolism, Custom geometric lettering, Bridge between Art Nouveau and Deco, shadow

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

- **Name:** Vienna Secession
- **Type:** claude-artisan/historical
- **Keywords:** Vienna Secession, Secessionist, Wiener Werkstätte, Geometric grids of squares married to ornament, Gold leaf, decorative symbolism, Custom geometric lettering, Bridge between Art Nouveau and Deco, historical
- **Era:** 1897–1905
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2ede1, surface: #ffffff, surface-strong: #e9e1cd, border: #1a1a1a
- **Secondary:** text: #1a1a1a, text-muted: #5c5647, primary: #b8942f, accent: #6b1f2a, violet: #4b3a63

## Visual Effects

Geometric grids of squares married to ornament, Gold leaf, decorative symbolism, Custom geometric lettering, Bridge between Art Nouveau and Deco, shadow

## AI Visual Direction

Vienna Secession, Geometric grids of squares married to ornament, Gold leaf, decorative symbolism, Custom geometric lettering, Bridge between Art Nouveau and Deco, Klimt Beethoven Frieze; Ver Sacrum journal.

## CSS Technical

```css
/* Vienna Secession — design tokens */
/* 1897–1905 | Vienna (Gustav Klimt, Koloman Moser, Josef Hoffmann), condensed */
:root {
/* color */
--color-bg: #f2ede1;
--color-surface: #ffffff;
--color-surface-strong: #e9e1cd;
--color-border: #1a1a1a;
--color-text: #1a1a1a;
--color-text-muted: #5c5647;
--color-primary: #b8942f;
--color-accent: #6b1f2a;
--color-violet: #4b3a63;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(26,26,26,0.2);
--shadow-md: 0 2px 0 rgba(26,26,26,0.25);
--shadow-lg: 0 4px 0 rgba(26,26,26,0.3);
/* font */
--font-sans: 'Josefin Sans', 'Century Gothic', sans-serif;
--font-display: 'Cinzel', 'Josefin Sans', serif;
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
/* extra (signature gradients, composite borders, filters) */
--grid-squares: repeating-linear-gradient(90deg, var(--color-primary) 0 6px, transparent 6px 18px);
--gold-border: 4px solid var(--color-primary);
--square-corner: 10px;
}

/* ============================================================
Base component classes — Vienna Secession
Signature move: a row of small gold squares (--grid-squares)
as a border-top/bottom band, echoing Klimt/Hoffmann's geometric grids.
Repeats on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--gold-border);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 6px; background-position: bottom; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text); letter-spacing: .04em;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-text);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translate(-1px,-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(0,0); box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #1a1a1a; border-color: var(--color-text);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 4px; background-position: bottom; }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 2px solid var(--color-text); border-radius: var(--radius-md);
background-image: var(--grid-squares); background-repeat: no-repeat; background-size: 100% 6px; background-position: top; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-text); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 2px var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-violet); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vienna-secession.md */
```

## Design System Variables

```css
--bg: #f2ede1, --fg: #1a1a1a, --accent: #b8942f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Cinzel', 'Josefin Sans', serif, --font-body: 'Josefin Sans', 'Century Gothic', sans-serif
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

[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)

Last synced: 8/30/2026
