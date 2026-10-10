# Solarpunk

- Source: <https://designmd.app/library/solarpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:55.304Z

Claude Artisan · Retrofuturismo & ficção especulativa2008–present

# Solarpunk

Reference for retrofuturismo & ficção especulativa Solarpunk. Emerged online ~2008 as optimistic counter to cyberpunk.

Solarpunkeco-futurismLush greenery fused with clean technologyWarm sunlit palette: greens, gold, sky blue, terracottaArt-Nouveau-influenced organic lineworkHopeful, sustainable, community-centeredretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta

![Solarpunk](https://designmd.app/images/library/719.png)

## Historical Context

Emerged online ~2008 as optimistic counter to cyberpunk. Example: Solarpunk art collections; 'Chobani' Solarpunk ad (2021)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Solarpunk"
description: "Solarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta"
colors:
primary: "#2f9e6e"
background: "#f5f9e8"
surface: "#ffffff"
text: "#1f3a2e"
accent: "#f4b23e"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fraunces', 'Quicksand', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "20px"
lg: "32px"
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

Solarpunk visual system, translated from the Claude Artisan catalog for use in digital products. Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta

- **Category:** retrofuturism
- **Era:** 2008–present
- **Origin:** Emerged online ~2008 as optimistic counter to cyberpunk.
- **Reference:** Solarpunk art collections; 'Chobani' Solarpunk ad (2021).
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Lush greenery fused with clean technology
- Warm sunlit palette: greens, gold, sky blue, terracotta
- Art-Nouveau-influenced organic linework
- Hopeful, sustainable, community-centered

## Colors

- **bg** — #f5f9e8
- **surface** — #ffffff
- **text** — #1f3a2e
- **text-muted** — #4f6f5f
- **primary** — #2f9e6e
- **accent** — #f4b23e
- **leaf** — #6cbf6c
- **sky** — #8fd0e6
- **clay** — #d98a5c

## Typography

- Display: 'Fraunces', 'Quicksand', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Lush greenery fused with clean technology; Warm sunlit palette: greens, gold, sky blue, terracotta; Art-Nouveau-influenced organic linework; Hopeful, sustainable, community-centered; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 10px, 20px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/solarpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Solarpunk — design tokens (generated from style_catalog.json) */
/* 2008–present | Emerged online ~2008 as optimistic counter to cyberpunk. */
:root {
/* color */
--color-bg: #f5f9e8;
--color-surface: #ffffff;
--color-text: #1f3a2e;
--color-text-muted: #4f6f5f;
--color-primary: #2f9e6e;
--color-accent: #f4b23e;
--color-leaf: #6cbf6c;
--color-sky: #8fd0e6;
--color-clay: #d98a5c;
/* radius */
--radius-sm: 10px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-soft: 0 8px 24px rgba(47,158,110,0.15);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', 'Quicksand', serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
/* extra (signature gradients, composite borders, filters) */
--foliage: radial-gradient(circle at 20% 10%, rgba(108,191,108,0.25), transparent 40%);
--art-nouveau-line: 2px solid #2f9e6e;
}

/* ============================================================
Base component classes — Solarpunk (token-driven).
Signature move lives in references/00-flagship-implementation-specs/solarpunk.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-soft);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-soft); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-soft); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/solarpunk.md */
```

### Variables

```
--bg: #f5f9e8, --fg: #1f3a2e, --accent: #2f9e6e, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Fraunces', 'Quicksand', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f9e8

#ffffff

#1f3a2e

#4f6f5f

Secondary

#2f9e6e

#f4b23e

#6cbf6c

#8fd0e6

#d98a5c

### Effects

Lush greenery fused with clean technology, Warm sunlit palette: greens, gold, sky blue, terracotta, Art-Nouveau-influenced organic linework, Hopeful, sustainable, community-centered, shadow, blur

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

- **Name:** Solarpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Solarpunk, eco-futurism, Lush greenery fused with clean technology, Warm sunlit palette: greens, gold, sky blue, terracotta, Art-Nouveau-influenced organic linework, Hopeful, sustainable, community-centered, retrofuturism
- **Era:** 2008–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f9e8, surface: #ffffff, text: #1f3a2e, text-muted: #4f6f5f
- **Secondary:** primary: #2f9e6e, accent: #f4b23e, leaf: #6cbf6c, sky: #8fd0e6, clay: #d98a5c

## Visual Effects

Lush greenery fused with clean technology, Warm sunlit palette: greens, gold, sky blue, terracotta, Art-Nouveau-influenced organic linework, Hopeful, sustainable, community-centered, shadow, blur

## AI Visual Direction

Solarpunk, Lush greenery fused with clean technology, Warm sunlit palette: greens, gold, sky blue, terracotta, Art-Nouveau-influenced organic linework, Hopeful, sustainable, community-centered, Solarpunk art collections; 'Chobani' Solarpunk ad (2021).

## CSS Technical

```css
/* Solarpunk — design tokens (generated from style_catalog.json) */
/* 2008–present | Emerged online ~2008 as optimistic counter to cyberpunk. */
:root {
/* color */
--color-bg: #f5f9e8;
--color-surface: #ffffff;
--color-text: #1f3a2e;
--color-text-muted: #4f6f5f;
--color-primary: #2f9e6e;
--color-accent: #f4b23e;
--color-leaf: #6cbf6c;
--color-sky: #8fd0e6;
--color-clay: #d98a5c;
/* radius */
--radius-sm: 10px;
--radius-md: 20px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-soft: 0 8px 24px rgba(47,158,110,0.15);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', 'Quicksand', serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
/* extra (signature gradients, composite borders, filters) */
--foliage: radial-gradient(circle at 20% 10%, rgba(108,191,108,0.25), transparent 40%);
--art-nouveau-line: 2px solid #2f9e6e;
}

/* ============================================================
Base component classes — Solarpunk (token-driven).
Signature move lives in references/00-flagship-implementation-specs/solarpunk.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-soft);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-soft); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-soft); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/solarpunk.md */
```

## Design System Variables

```css
--bg: #f5f9e8, --fg: #1f3a2e, --accent: #2f9e6e, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Fraunces', 'Quicksand', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
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

[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)

Last synced: 8/30/2026
