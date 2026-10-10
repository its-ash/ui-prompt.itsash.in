# Samsung One UI

- Source: <https://designmd.app/library/one-ui>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:08.309Z

Claude Artisan · Flat, material & plataformas2018–present

# Samsung One UI

Reference for flat, material & plataformas Samsung One UI. Samsung, One UI (2018).

Samsung One UIOne UISamsung designLarge rounded content zones, reachable UIBottom-weighted layouts for one-handed useSoft neutral surfaces, clear colorCalm, spacious Android skinflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use

![Samsung One UI](https://designmd.app/images/library/693.png)

## Historical Context

Samsung, One UI (2018). Example: Samsung Galaxy phones..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Samsung One UI"
description: "Samsung One UI visual system, translated from the Claude Artisan catalog for use in digital products. Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use"
colors:
primary: "#1259e3"
background: "#f5f6f8"
surface: "#ffffff"
text: "#1c1c1e"
accent: "#0091ff"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'SamsungOne', -apple-system, system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "14px"
md: "20px"
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

Samsung One UI visual system, translated from the Claude Artisan catalog for use in digital products. Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use

- **Category:** flat-platform
- **Era:** 2018–present
- **Origin:** Samsung, One UI (2018).
- **Reference:** Samsung Galaxy phones.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Large rounded content zones, reachable UI
- Bottom-weighted layouts for one-handed use
- Soft neutral surfaces, clear color
- Calm, spacious Android skin

## Colors

- **bg** — #f5f6f8
- **surface** — #ffffff
- **surface-strong** — #eef1f6
- **border** — #e1e5ec
- **text** — #1c1c1e
- **text-muted** — #6b7079
- **primary** — #1259e3
- **accent** — #0091ff

## Typography

- Display: 'SamsungOne', -apple-system, system-ui, sans-serif
- Body: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Large rounded content zones, reachable UI; Bottom-weighted layouts for one-handed use; Soft neutral surfaces, clear color; Calm, spacious Android skin; sombras e elevação

## Shapes

- Radius scale: 14px, 20px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/one-ui/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Samsung One UI — design tokens */
/* 2018–present | Samsung, One UI, condensed */
:root {
/* color */
--color-bg: #f5f6f8;
--color-surface: #ffffff;
--color-surface-strong: #eef1f6;
--color-border: #e1e5ec;
--color-text: #1c1c1e;
--color-text-muted: #6b7079;
--color-primary: #1259e3;
--color-accent: #0091ff;
/* radius: large rounded reachable zones */
--radius-sm: 14px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(28, 28, 30, 0.06);
--shadow-md: 0 6px 18px rgba(28, 28, 30, 0.08);
--shadow-lg: 0 16px 36px rgba(28, 28, 30, 0.1);
/* font */
--font-sans: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif;
--font-display: 'SamsungOne', -apple-system, system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: bottom-weighted reachable zone + oversized content-zone radius */
--reach-zone-radius: 32px;
--bottom-safe-pad: 28px;
}

/* ============================================================
Base component classes — Samsung One UI
Signature move: very large rounded content zones (oversized radius) that
repeat across nav, card, input and btn — softness for reachable one-handed UI.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-radius: var(--reach-zone-radius); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--reach-zone-radius);
box-shadow: var(--shadow-md); padding: var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-4); border-radius: var(--radius-lg);
background: var(--color-surface-strong); border: 1px solid transparent;
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(18, 89, 227, 0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/one-ui.md */
```

### Variables

```
--bg: #f5f6f8, --fg: #1c1c1e, --accent: #1259e3, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'SamsungOne', -apple-system, system-ui, sans-serif, --font-body: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f6f8

#ffffff

#eef1f6

#e1e5ec

Secondary

#1c1c1e

#6b7079

#1259e3

#0091ff

### Effects

Large rounded content zones, reachable UI, Bottom-weighted layouts for one-handed use, Soft neutral surfaces, clear color, Calm, spacious Android skin, shadow

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

- **Name:** Samsung One UI
- **Type:** claude-artisan/flat-platform
- **Keywords:** Samsung One UI, One UI, Samsung design, Large rounded content zones, reachable UI, Bottom-weighted layouts for one-handed use, Soft neutral surfaces, clear color, Calm, spacious Android skin, flat-platform
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f6f8, surface: #ffffff, surface-strong: #eef1f6, border: #e1e5ec
- **Secondary:** text: #1c1c1e, text-muted: #6b7079, primary: #1259e3, accent: #0091ff

## Visual Effects

Large rounded content zones, reachable UI, Bottom-weighted layouts for one-handed use, Soft neutral surfaces, clear color, Calm, spacious Android skin, shadow

## AI Visual Direction

Samsung One UI, Large rounded content zones, reachable UI, Bottom-weighted layouts for one-handed use, Soft neutral surfaces, clear color, Calm, spacious Android skin, Samsung Galaxy phones.

## CSS Technical

```css
/* Samsung One UI — design tokens */
/* 2018–present | Samsung, One UI, condensed */
:root {
/* color */
--color-bg: #f5f6f8;
--color-surface: #ffffff;
--color-surface-strong: #eef1f6;
--color-border: #e1e5ec;
--color-text: #1c1c1e;
--color-text-muted: #6b7079;
--color-primary: #1259e3;
--color-accent: #0091ff;
/* radius: large rounded reachable zones */
--radius-sm: 14px;
--radius-md: 20px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(28, 28, 30, 0.06);
--shadow-md: 0 6px 18px rgba(28, 28, 30, 0.08);
--shadow-lg: 0 16px 36px rgba(28, 28, 30, 0.1);
/* font */
--font-sans: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif;
--font-display: 'SamsungOne', -apple-system, system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: bottom-weighted reachable zone + oversized content-zone radius */
--reach-zone-radius: 32px;
--bottom-safe-pad: 28px;
}

/* ============================================================
Base component classes — Samsung One UI
Signature move: very large rounded content zones (oversized radius) that
repeat across nav, card, input and btn — softness for reachable one-handed UI.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-radius: var(--reach-zone-radius); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--reach-zone-radius);
box-shadow: var(--shadow-md); padding: var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-4); border-radius: var(--radius-lg);
background: var(--color-surface-strong); border: 1px solid transparent;
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(18, 89, 227, 0.18); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/one-ui.md */
```

## Design System Variables

```css
--bg: #f5f6f8, --fg: #1c1c1e, --accent: #1259e3, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'SamsungOne', -apple-system, system-ui, sans-serif, --font-body: 'SamsungOne', 'SF Pro', -apple-system, system-ui, sans-serif
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

[![Material Design 3 / Material You](https://designmd.app/images/library/679.png) Claude Artisan · Flat, material & plataformas ### Material Design 3 / Material You](https://designmd.app/library/material-design-3)[![Fluent Design 2 (Fluent 2)](https://designmd.app/images/library/639.png) Claude Artisan · Flat, material & plataformas ### Fluent Design 2 (Fluent 2)](https://designmd.app/library/fluent-design-2)

Last synced: 8/30/2026
