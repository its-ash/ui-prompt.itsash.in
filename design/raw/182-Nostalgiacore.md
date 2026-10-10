# Nostalgiacore

- Source: <https://designmd.app/library/nostalgiacore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:06.311Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Nostalgiacore

Reference for subculturas & estéticas de nicho Nostalgiacore. Broad nostalgia for the recent past.

NostalgiacorememorycoreFaded photos of childhood/00s ephemeraWarm degraded color, timestampsFamiliar objects and placesWistful, comfortingniche

Use case: hero, superfície, conteúdo e grade responsiva; Faded photos of childhood/00s ephemera; Warm degraded color, timestamps

![Nostalgiacore](https://designmd.app/images/library/691.png)

## Historical Context

Broad nostalgia for the recent past. Example: Nostalgiacore compilations..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Nostalgiacore"
description: "Nostalgiacore visual system, translated from the Claude Artisan catalog for use in digital products. Faded photos of childhood/00s ephemera; Warm degraded color, timestamps"
colors:
primary: "#c17a4e"
background: "#e8dcc8"
surface: "#f2e9d8"
text: "#4a3d2c"
accent: "#8a9a6b"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Courier New', 'Trebuchet MS', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Trebuchet MS', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "6px"
lg: "10px"
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

Nostalgiacore visual system, translated from the Claude Artisan catalog for use in digital products. Faded photos of childhood/00s ephemera; Warm degraded color, timestamps

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Broad nostalgia for the recent past.
- **Reference:** Nostalgiacore compilations.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Faded photos of childhood/00s ephemera
- Warm degraded color, timestamps
- Familiar objects and places
- Wistful, comforting

## Colors

- **bg** — #e8dcc8
- **surface** — #f2e9d8
- **surface-strong** — #ede0c4
- **border** — #b8a37e
- **text** — #4a3d2c
- **text-muted** — #7a6a52
- **primary** — #c17a4e
- **accent** — #8a9a6b
- **sepia-tint** — rgba(163, 120, 63, 0.18)
- **timestamp** — #e8622c

## Typography

- Display: 'Courier New', 'Trebuchet MS', monospace
- Body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Faded photos of childhood/00s ephemera; Warm degraded color, timestamps; Familiar objects and places; Wistful, comforting; sombras e elevação

## Shapes

- Radius scale: 3px, 6px, 10px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/nostalgiacore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Nostalgiacore — design tokens */
/* 2019–present | Broad nostalgia for the recent past, condensed */
:root {
/* color */
--color-bg: #e8dcc8;
--color-surface: #f2e9d8;
--color-surface-strong: #ede0c4;
--color-border: #b8a37e;
--color-text: #4a3d2c;
--color-text-muted: #7a6a52;
--color-primary: #c17a4e;
--color-accent: #8a9a6b;
--color-sepia-tint: rgba(163, 120, 63, 0.18);
--color-timestamp: #e8622c;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(74, 61, 44, 0.22);
--shadow-md: 0 4px 10px rgba(74, 61, 44, 0.26);
--shadow-lg: 0 10px 24px rgba(74, 61, 44, 0.3);
/* font */
--font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
--font-display: 'Courier New', 'Trebuchet MS', monospace;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: sepia grain overlay + faded-photo vignette + timestamp stamp */
--grain-overlay: repeating-radial-gradient(circle at 20% 30%, rgba(74,61,44,0.04) 0px, transparent 2px), repeating-radial-gradient(circle at 70% 80%, rgba(74,61,44,0.03) 0px, transparent 2px);
--photo-vignette: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(74,61,44,0.14) 100%);
--timestamp-font: 'Courier New', monospace;
}

/* ============================================================
Base component classes — Nostalgiacore
Signature move: faded-photo sepia tint + film-grain overlay + an orange
digital-camera timestamp stamp in the corner of raised surfaces.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg) var(--grain-overlay); background-blend-mode: multiply;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--photo-vignette); border-bottom: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-primary); }
.card {
position: relative; background: var(--color-surface); background-image: var(--photo-vignette);
border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.card::after {
content: attr(data-stamp, "'00 SUMMER"); position: absolute; right: var(--space-3); bottom: var(--space-2);
font: 700 var(--text-xs)/1 var(--timestamp-font); color: var(--color-timestamp); letter-spacing: .05em;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(193, 122, 78, 0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #2c331f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/nostalgiacore.md */
```

### Variables

```
--bg: #e8dcc8, --fg: #4a3d2c, --accent: #c17a4e, --surface: #f2e9d8, --radius: 6px, --spacing: 16px, --font-display: 'Courier New', 'Trebuchet MS', monospace, --font-body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#e8dcc8

#f2e9d8

#ede0c4

#b8a37e

Secondary

#4a3d2c

#7a6a52

#c17a4e

#8a9a6b

#e8622c

### Effects

Faded photos of childhood/00s ephemera, Warm degraded color, timestamps, Familiar objects and places, Wistful, comforting, shadow

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

- **Name:** Nostalgiacore
- **Type:** claude-artisan/niche
- **Keywords:** Nostalgiacore, memorycore, Faded photos of childhood/00s ephemera, Warm degraded color, timestamps, Familiar objects and places, Wistful, comforting, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #e8dcc8, surface: #f2e9d8, surface-strong: #ede0c4, border: #b8a37e
- **Secondary:** text: #4a3d2c, text-muted: #7a6a52, primary: #c17a4e, accent: #8a9a6b, sepia-tint: rgba(163, 120, 63, 0.18), timestamp: #e8622c

## Visual Effects

Faded photos of childhood/00s ephemera, Warm degraded color, timestamps, Familiar objects and places, Wistful, comforting, shadow

## AI Visual Direction

Nostalgiacore, Faded photos of childhood/00s ephemera, Warm degraded color, timestamps, Familiar objects and places, Wistful, comforting, Nostalgiacore compilations.

## CSS Technical

```css
/* Nostalgiacore — design tokens */
/* 2019–present | Broad nostalgia for the recent past, condensed */
:root {
/* color */
--color-bg: #e8dcc8;
--color-surface: #f2e9d8;
--color-surface-strong: #ede0c4;
--color-border: #b8a37e;
--color-text: #4a3d2c;
--color-text-muted: #7a6a52;
--color-primary: #c17a4e;
--color-accent: #8a9a6b;
--color-sepia-tint: rgba(163, 120, 63, 0.18);
--color-timestamp: #e8622c;
/* radius */
--radius-sm: 3px;
--radius-md: 6px;
--radius-lg: 10px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(74, 61, 44, 0.22);
--shadow-md: 0 4px 10px rgba(74, 61, 44, 0.26);
--shadow-lg: 0 10px 24px rgba(74, 61, 44, 0.3);
/* font */
--font-sans: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif;
--font-display: 'Courier New', 'Trebuchet MS', monospace;
--font-mono: 'Courier New', ui-monospace, monospace;
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
/* extra: sepia grain overlay + faded-photo vignette + timestamp stamp */
--grain-overlay: repeating-radial-gradient(circle at 20% 30%, rgba(74,61,44,0.04) 0px, transparent 2px), repeating-radial-gradient(circle at 70% 80%, rgba(74,61,44,0.03) 0px, transparent 2px);
--photo-vignette: radial-gradient(120% 100% at 50% 40%, transparent 55%, rgba(74,61,44,0.14) 100%);
--timestamp-font: 'Courier New', monospace;
}

/* ============================================================
Base component classes — Nostalgiacore
Signature move: faded-photo sepia tint + film-grain overlay + an orange
digital-camera timestamp stamp in the corner of raised surfaces.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg) var(--grain-overlay); background-blend-mode: multiply;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--photo-vignette); border-bottom: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-primary); }
.card {
position: relative; background: var(--color-surface); background-image: var(--photo-vignette);
border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.card::after {
content: attr(data-stamp, "'00 SUMMER"); position: absolute; right: var(--space-3); bottom: var(--space-2);
font: 700 var(--text-xs)/1 var(--timestamp-font); color: var(--color-timestamp); letter-spacing: .05em;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(193, 122, 78, 0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #2c331f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/nostalgiacore.md */
```

## Design System Variables

```css
--bg: #e8dcc8, --fg: #4a3d2c, --accent: #c17a4e, --surface: #f2e9d8, --radius: 6px, --spacing: 16px, --font-display: 'Courier New', 'Trebuchet MS', monospace, --font-body: 'Century Gothic', 'Trebuchet MS', system-ui, sans-serif
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

[![Webcore / Old Web](https://designmd.app/images/library/751.png) Claude Artisan · Subculturas & estéticas de nicho ### Webcore / Old Web](https://designmd.app/library/webcore)[![VHS / Analog Video](https://designmd.app/images/library/747.png) Claude Artisan · Textura, material & renderização ### VHS / Analog Video](https://designmd.app/library/vhs)[![Mallsoft](https://designmd.app/images/library/676.png) Claude Artisan · Subculturas & estéticas de nicho ### Mallsoft](https://designmd.app/library/mallsoft)

Last synced: 8/30/2026
