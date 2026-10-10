# Balletcore

- Source: <https://designmd.app/library/balletcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:34.309Z

Claude Artisan · Subculturas & estéticas de nicho2022–present

# Balletcore

Reference for subculturas & estéticas de nicho Balletcore. Ballet-inspired soft feminine aesthetic.

Balletcorecoquette balletSoft pinks, cream, tulle, ribbonDelicate, graceful, romanticSerif/script accentsEthereal femininityniche

Use case: hero, superfície, conteúdo e grade responsiva; Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic

![Balletcore](https://designmd.app/images/library/583.png)

## Historical Context

Ballet-inspired soft feminine aesthetic. Example: Balletcore fashion moodboards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Balletcore"
description: "Balletcore visual system, translated from the Claude Artisan catalog for use in digital products. Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic"
colors:
primary: "#c98a9c"
background: "#fdf3f1"
surface: "#fffbfa"
text: "#5a3a3f"
accent: "#b9a6d9"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Nunito', 'Quicksand', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "18px"
lg: "28px"
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

Balletcore visual system, translated from the Claude Artisan catalog for use in digital products. Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Ballet-inspired soft feminine aesthetic.
- **Reference:** Balletcore fashion moodboards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Soft pinks, cream, tulle, ribbon
- Delicate, graceful, romantic
- Serif/script accents
- Ethereal femininity

## Colors

- **bg** — #fdf3f1
- **surface** — #fffbfa
- **surface-strong** — #fbe4e3
- **border** — #e7b8bd
- **text** — #5a3a3f
- **text-muted** — #8a6266
- **primary** — #c98a9c
- **accent** — #b9a6d9

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Nunito', 'Quicksand', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Soft pinks, cream, tulle, ribbon; Delicate, graceful, romantic; Serif/script accents; Ethereal femininity; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/balletcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Balletcore — design tokens */
/* 2022–present | Ballet-inspired soft feminine aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf3f1;
--color-surface: #fffbfa;
--color-surface-strong: #fbe4e3;
--color-border: #e7b8bd;
--color-text: #5a3a3f;
--color-text-muted: #8a6266;
--color-primary: #c98a9c;
--color-accent: #b9a6d9;
/* radius — soft tulle, everything rounded like a dancer's silhouette */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(90,58,63,0.1);
--shadow-md: 0 8px 20px rgba(90,58,63,0.12);
--shadow-lg: 0 16px 36px rgba(90,58,63,0.14);
/* font */
--font-sans: 'Nunito', 'Quicksand', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
/* extra — signature satin ribbon: a dashed silk-tie border and soft blush gradient */
--ribbon-border: 2px dashed var(--color-border);
--satin-fill: linear-gradient(160deg, #fffbfa 0%, #fce8e7 100%);
}

/* ============================================================
Base component classes — Balletcore
Signature move: a dashed "ribbon-tie" border plus a soft satin gradient
fill, echoing pointe-shoe ribbons. Repeated on nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--satin-fill); border-bottom: var(--ribbon-border); border-radius: 0 0 var(--radius-lg) var(--radius-lg); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--ribbon-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffbfa; border-color: var(--color-primary); }
.card { background: var(--satin-fill); border-radius: var(--radius-lg); border: var(--ribbon-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill); background: var(--color-surface);
border: var(--ribbon-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(201,138,156,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); color: var(--color-text); font-family: var(--font-display); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/balletcore.md */
```

### Variables

```
--bg: #fdf3f1, --fg: #5a3a3f, --accent: #c98a9c, --surface: #fffbfa, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Nunito', 'Quicksand', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fdf3f1

#fffbfa

#fbe4e3

#e7b8bd

Secondary

#5a3a3f

#8a6266

#c98a9c

#b9a6d9

### Effects

Soft pinks, cream, tulle, ribbon, Delicate, graceful, romantic, Serif/script accents, Ethereal femininity, shadow

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

- **Name:** Balletcore
- **Type:** claude-artisan/niche
- **Keywords:** Balletcore, coquette ballet, Soft pinks, cream, tulle, ribbon, Delicate, graceful, romantic, Serif/script accents, Ethereal femininity, niche
- **Era:** 2022–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fdf3f1, surface: #fffbfa, surface-strong: #fbe4e3, border: #e7b8bd
- **Secondary:** text: #5a3a3f, text-muted: #8a6266, primary: #c98a9c, accent: #b9a6d9

## Visual Effects

Soft pinks, cream, tulle, ribbon, Delicate, graceful, romantic, Serif/script accents, Ethereal femininity, shadow

## AI Visual Direction

Balletcore, Soft pinks, cream, tulle, ribbon, Delicate, graceful, romantic, Serif/script accents, Ethereal femininity, Balletcore fashion moodboards.

## CSS Technical

```css
/* Balletcore — design tokens */
/* 2022–present | Ballet-inspired soft feminine aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf3f1;
--color-surface: #fffbfa;
--color-surface-strong: #fbe4e3;
--color-border: #e7b8bd;
--color-text: #5a3a3f;
--color-text-muted: #8a6266;
--color-primary: #c98a9c;
--color-accent: #b9a6d9;
/* radius — soft tulle, everything rounded like a dancer's silhouette */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(90,58,63,0.1);
--shadow-md: 0 8px 20px rgba(90,58,63,0.12);
--shadow-lg: 0 16px 36px rgba(90,58,63,0.14);
/* font */
--font-sans: 'Nunito', 'Quicksand', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
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
/* extra — signature satin ribbon: a dashed silk-tie border and soft blush gradient */
--ribbon-border: 2px dashed var(--color-border);
--satin-fill: linear-gradient(160deg, #fffbfa 0%, #fce8e7 100%);
}

/* ============================================================
Base component classes — Balletcore
Signature move: a dashed "ribbon-tie" border plus a soft satin gradient
fill, echoing pointe-shoe ribbons. Repeated on nav, card, and input.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--satin-fill); border-bottom: var(--ribbon-border); border-radius: 0 0 var(--radius-lg) var(--radius-lg); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--ribbon-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffbfa; border-color: var(--color-primary); }
.card { background: var(--satin-fill); border-radius: var(--radius-lg); border: var(--ribbon-border);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill); background: var(--color-surface);
border: var(--ribbon-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(201,138,156,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 1px solid var(--color-border); color: var(--color-text); font-family: var(--font-display); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/balletcore.md */
```

## Design System Variables

```css
--bg: #fdf3f1, --fg: #5a3a3f, --accent: #c98a9c, --surface: #fffbfa, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Nunito', 'Quicksand', system-ui, sans-serif
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

[![Coquette](https://designmd.app/images/library/324.png) Arte & Ilustracao ### Coquette](https://designmd.app/library/coquette)[![Light Academia](https://designmd.app/images/library/667.png) Claude Artisan · Subculturas & estéticas de nicho ### Light Academia](https://designmd.app/library/light-academia)

Last synced: 8/30/2026
