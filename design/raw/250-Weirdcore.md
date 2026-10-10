# Weirdcore

- Source: <https://designmd.app/library/weirdcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:52.243Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Weirdcore

Reference for subculturas & estéticas de nicho Weirdcore. Unsettling amateur-photo internet aesthetic.

WeirdcorestrangecoreLow-quality nostalgic photos, distortedDeliberately 'off', eerie, uncannyText overlays, arrows, dream-logicNostalgic dreadniche

Use case: hero, superfície, conteúdo e grade responsiva; Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny

![Weirdcore](https://designmd.app/images/library/752.png)

## Historical Context

Unsettling amateur-photo internet aesthetic. Example: Weirdcore image boards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Weirdcore"
description: "Weirdcore visual system, translated from the Claude Artisan catalog for use in digital products. Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny"
colors:
primary: "#c23b3b"
background: "#d8d3c4"
surface: "#eae5d6"
text: "#201f1a"
accent: "#3b6fc2"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Impact', 'Arial Narrow', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Times New Roman', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Times New Roman', 'Georgia', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "2px"
lg: "2px"
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

Weirdcore visual system, translated from the Claude Artisan catalog for use in digital products. Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Unsettling amateur-photo internet aesthetic.
- **Reference:** Weirdcore image boards.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Low-quality nostalgic photos, distorted
- Deliberately 'off', eerie, uncanny
- Text overlays, arrows, dream-logic
- Nostalgic dread

## Colors

- **bg** — #d8d3c4
- **surface** — #eae5d6
- **surface-strong** — #f4f0e4
- **border** — #6b6558
- **text** — #201f1a
- **text-muted** — #55523f
- **primary** — #c23b3b
- **accent** — #3b6fc2
- **sickly** — #a8b23f

## Typography

- Display: 'Impact', 'Arial Narrow', sans-serif
- Body: 'Times New Roman', 'Georgia', serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Low-quality nostalgic photos, distorted; Deliberately 'off', eerie, uncanny; Text overlays, arrows, dream-logic; Nostalgic dread; sombras e elevação

## Shapes

- Radius scale: 2px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/weirdcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Weirdcore — design tokens */
/* 2020–present | Unsettling amateur-photo internet aesthetic, condensed */
:root {
/* color */
--color-bg: #d8d3c4;
--color-surface: #eae5d6;
--color-surface-strong: #f4f0e4;
--color-border: #6b6558;
--color-text: #201f1a;
--color-text-muted: #55523f;
--color-primary: #c23b3b;
--color-accent: #3b6fc2;
--color-sickly: #a8b23f;
/* radius */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(0,0,0,0.3);
--shadow-md: 0 3px 0 rgba(0,0,0,0.3);
--shadow-lg: 0 6px 10px rgba(0,0,0,0.35);
/* font */
--font-sans: 'Times New Roman', 'Georgia', serif;
--font-display: 'Impact', 'Arial Narrow', sans-serif;
--font-mono: 'Courier New', monospace;
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
--ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
/* extra (signature gradients, composite borders, filters) */
--grain-filter: contrast(1.05) saturate(0.75) brightness(0.98);
--tilt-off: rotate(-0.6deg);
--arrow-overlay: "→";
}

/* ============================================================
Base component classes — Weirdcore
Signature move: a very slight off-kilter rotation (--tilt-off) and a
desaturated/contrasty filter (--grain-filter) applied to raised
surfaces, making the layout feel like a scanned, slightly-wrong photo.
Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); filter: var(--grain-filter); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 1px solid var(--color-border); transform: var(--tilt-off); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard); }
.btn:hover { transform: rotate(0.8deg) translateY(-1px); }
.btn:active { transform: rotate(-0.4deg); }
.btn:focus-visible { outline: 2px dashed var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f4f0e4; border-color: var(--color-primary); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); transform: var(--tilt-off); position: relative; }
.card::after { content: var(--arrow-overlay); position: absolute; top: 8px; right: 12px; color: var(--color-primary); opacity: .5; font-size: var(--text-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 2px rgba(194,59,59,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-sickly); color: #1a1c07;
transform: var(--tilt-off); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: var(--tilt-off); } }

/* Especificação de referência: references/00-flagship-implementation-specs/weirdcore.md */
```

### Variables

```
--bg: #d8d3c4, --fg: #201f1a, --accent: #c23b3b, --surface: #eae5d6, --radius: 2px, --spacing: 16px, --font-display: 'Impact', 'Arial Narrow', sans-serif, --font-body: 'Times New Roman', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#d8d3c4

#eae5d6

#f4f0e4

#6b6558

Secondary

#201f1a

#55523f

#c23b3b

#3b6fc2

#a8b23f

### Effects

Low-quality nostalgic photos, distorted, Deliberately 'off', eerie, uncanny, Text overlays, arrows, dream-logic, Nostalgic dread, shadow

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

- **Name:** Weirdcore
- **Type:** claude-artisan/niche
- **Keywords:** Weirdcore, strangecore, Low-quality nostalgic photos, distorted, Deliberately 'off', eerie, uncanny, Text overlays, arrows, dream-logic, Nostalgic dread, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #d8d3c4, surface: #eae5d6, surface-strong: #f4f0e4, border: #6b6558
- **Secondary:** text: #201f1a, text-muted: #55523f, primary: #c23b3b, accent: #3b6fc2, sickly: #a8b23f

## Visual Effects

Low-quality nostalgic photos, distorted, Deliberately 'off', eerie, uncanny, Text overlays, arrows, dream-logic, Nostalgic dread, shadow

## AI Visual Direction

Weirdcore, Low-quality nostalgic photos, distorted, Deliberately 'off', eerie, uncanny, Text overlays, arrows, dream-logic, Nostalgic dread, Weirdcore image boards.

## CSS Technical

```css
/* Weirdcore — design tokens */
/* 2020–present | Unsettling amateur-photo internet aesthetic, condensed */
:root {
/* color */
--color-bg: #d8d3c4;
--color-surface: #eae5d6;
--color-surface-strong: #f4f0e4;
--color-border: #6b6558;
--color-text: #201f1a;
--color-text-muted: #55523f;
--color-primary: #c23b3b;
--color-accent: #3b6fc2;
--color-sickly: #a8b23f;
/* radius */
--radius-sm: 2px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 0 rgba(0,0,0,0.3);
--shadow-md: 0 3px 0 rgba(0,0,0,0.3);
--shadow-lg: 0 6px 10px rgba(0,0,0,0.35);
/* font */
--font-sans: 'Times New Roman', 'Georgia', serif;
--font-display: 'Impact', 'Arial Narrow', sans-serif;
--font-mono: 'Courier New', monospace;
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
--ease-standard: cubic-bezier(0.6, 0, 0.4, 1);
/* extra (signature gradients, composite borders, filters) */
--grain-filter: contrast(1.05) saturate(0.75) brightness(0.98);
--tilt-off: rotate(-0.6deg);
--arrow-overlay: "→";
}

/* ============================================================
Base component classes — Weirdcore
Signature move: a very slight off-kilter rotation (--tilt-off) and a
desaturated/contrasty filter (--grain-filter) applied to raised
surfaces, making the layout feel like a scanned, slightly-wrong photo.
Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); filter: var(--grain-filter); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border: 1px solid var(--color-border); transform: var(--tilt-off); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard); }
.btn:hover { transform: rotate(0.8deg) translateY(-1px); }
.btn:active { transform: rotate(-0.4deg); }
.btn:focus-visible { outline: 2px dashed var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f4f0e4; border-color: var(--color-primary); }
.card { background: var(--color-surface); color: var(--color-text); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-lg); transform: var(--tilt-off); position: relative; }
.card::after { content: var(--arrow-overlay); position: absolute; top: 8px; right: 12px; color: var(--color-primary); opacity: .5; font-size: var(--text-lg); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 2px rgba(194,59,59,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-sickly); color: #1a1c07;
transform: var(--tilt-off); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: var(--tilt-off); } }

/* Especificação de referência: references/00-flagship-implementation-specs/weirdcore.md */
```

## Design System Variables

```css
--bg: #d8d3c4, --fg: #201f1a, --accent: #c23b3b, --surface: #eae5d6, --radius: 2px, --spacing: 16px, --font-display: 'Impact', 'Arial Narrow', sans-serif, --font-body: 'Times New Roman', 'Georgia', serif
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

[![Dreamcore](https://designmd.app/images/library/624.png) Claude Artisan · Subculturas & estéticas de nicho ### Dreamcore](https://designmd.app/library/dreamcore)[![Liminal Spaces](https://designmd.app/images/library/669.png) Claude Artisan · Subculturas & estéticas de nicho ### Liminal Spaces](https://designmd.app/library/liminal-spaces)

Last synced: 8/30/2026
