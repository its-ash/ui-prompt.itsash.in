# Blobmorphism

- Source: <https://designmd.app/library/blobmorphism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:06.308Z

Claude Artisan · Minimal, maximal & orgânico2019–present

# Blobmorphism

Reference for minimal, maximal & orgânico Blobmorphism. Trend of amorphous blob shapes as UI/decoration.

Blobmorphismblob designblob shapesIrregular gooey blob backgrounds and masksBright gradient-filled blobsPlayful, friendly, softAnimated morphing shapesminimal-organic

Use case: hero, superfície, conteúdo e grade responsiva; Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs

![Blobmorphism](https://designmd.app/images/library/590.png)

## Historical Context

Trend of amorphous blob shapes as UI/decoration. Example: Dribbble blob illustration sets; startup hero backgrounds..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Blobmorphism"
description: "Blobmorphism visual system, translated from the Claude Artisan catalog for use in digital products. Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs"
colors:
primary: "#ff6b6b"
background: "#fef6ef"
surface: "#ffffff"
text: "#2c1e3a"
accent: "#4ecdc4"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Baloo 2', 'Fredoka', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Quicksand', 'Baloo 2', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Quicksand', 'Baloo 2', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "14px"
md: "8px"
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

Blobmorphism visual system, translated from the Claude Artisan catalog for use in digital products. Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs

- **Category:** minimal-organic
- **Era:** 2019–present
- **Origin:** Trend of amorphous blob shapes as UI/decoration.
- **Reference:** Dribbble blob illustration sets; startup hero backgrounds.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Irregular gooey blob backgrounds and masks
- Bright gradient-filled blobs
- Playful, friendly, soft
- Animated morphing shapes

## Colors

- **bg** — #fef6ef
- **surface** — #ffffff
- **surface-strong** — #fff0e0
- **border** — #ffd9b8
- **text** — #2c1e3a
- **text-muted** — #6b5a7d
- **primary** — #ff6b6b
- **accent** — #4ecdc4
- **yellow** — #ffd93d

## Typography

- Display: 'Baloo 2', 'Fredoka', system-ui, sans-serif
- Body: 'Quicksand', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Irregular gooey blob backgrounds and masks; Bright gradient-filled blobs; Playful, friendly, soft; Animated morphing shapes; sombras e elevação

## Shapes

- Radius scale: 14px, 32px 48px 28px 40px, 56px 40px 64px 36px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/blobmorphism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Blobmorphism — design tokens */
/* 2019–present | Trend of amorphous blob shapes as UI/decoration, condensed */
:root {
/* color */
--color-bg: #fef6ef;
--color-surface: #ffffff;
--color-surface-strong: #fff0e0;
--color-border: #ffd9b8;
--color-text: #2c1e3a;
--color-text-muted: #6b5a7d;
--color-primary: #ff6b6b;
--color-accent: #4ecdc4;
--color-yellow: #ffd93d;
/* radius: irregular "blob" corners via mismatched values */
--radius-sm: 14px;
--radius-md: 32px 48px 28px 40px;
--radius-lg: 56px 40px 64px 36px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 12px rgba(255,107,107,0.18);
--shadow-md: 0 12px 28px rgba(78,205,196,0.22);
--shadow-lg: 0 20px 44px rgba(255,107,107,0.24);
/* font */
--font-sans: 'Quicksand', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif;
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
/* ease: bouncy, gooey motion */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-entrance: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-exit: cubic-bezier(0.5, 0, 0.75, 0);
/* extra: gradient blob fill + morphing corner set for animation */
--blob-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
--blob-shape-a: 32px 48px 28px 40px;
--blob-shape-b: 48px 28px 40px 32px;
}

/* ============================================================
Base component classes — Blobmorphism
Signature move: asymmetric "blob" border-radius (four unequal corner
values, not a plain rounded rect) that gently morphs on hover, applied
to every raised surface — nav, card, button, badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .3s var(--ease-standard), border-radius .3s var(--ease-standard), box-shadow .3s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.03); border-radius: var(--blob-shape-b); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(0.98); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--blob-gradient); color: #2c1e3a; border: none; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-8); box-shadow: var(--shadow-md);
transition: border-radius .4s var(--ease-standard), transform .4s var(--ease-standard); }
.card:hover { border-radius: var(--blob-shape-b); transform: translateY(-3px); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 4px rgba(78,205,196,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .4em .9em; border-radius: var(--radius-pill); background: var(--color-yellow); color: #2c1e3a; }
@media (prefers-reduced-motion: reduce) {
.btn, .card { transition: none; }
.btn:hover, .card:hover { transform: none; border-radius: var(--radius-md); }
}

/* Especificação de referência: references/00-flagship-implementation-specs/blobmorphism.md */
```

### Variables

```
--bg: #fef6ef, --fg: #2c1e3a, --accent: #ff6b6b, --surface: #ffffff, --radius: 32px 48px 28px 40px, --spacing: 16px, --font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif, --font-body: 'Quicksand', 'Baloo 2', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fef6ef

#ffffff

#fff0e0

#ffd9b8

Secondary

#2c1e3a

#6b5a7d

#ff6b6b

#4ecdc4

#ffd93d

### Effects

Irregular gooey blob backgrounds and masks, Bright gradient-filled blobs, Playful, friendly, soft, Animated morphing shapes, shadow

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

- **Name:** Blobmorphism
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Blobmorphism, blob design, blob shapes, Irregular gooey blob backgrounds and masks, Bright gradient-filled blobs, Playful, friendly, soft, Animated morphing shapes, minimal-organic
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fef6ef, surface: #ffffff, surface-strong: #fff0e0, border: #ffd9b8
- **Secondary:** text: #2c1e3a, text-muted: #6b5a7d, primary: #ff6b6b, accent: #4ecdc4, yellow: #ffd93d

## Visual Effects

Irregular gooey blob backgrounds and masks, Bright gradient-filled blobs, Playful, friendly, soft, Animated morphing shapes, shadow

## AI Visual Direction

Blobmorphism, Irregular gooey blob backgrounds and masks, Bright gradient-filled blobs, Playful, friendly, soft, Animated morphing shapes, Dribbble blob illustration sets; startup hero backgrounds.

## CSS Technical

```css
/* Blobmorphism — design tokens */
/* 2019–present | Trend of amorphous blob shapes as UI/decoration, condensed */
:root {
/* color */
--color-bg: #fef6ef;
--color-surface: #ffffff;
--color-surface-strong: #fff0e0;
--color-border: #ffd9b8;
--color-text: #2c1e3a;
--color-text-muted: #6b5a7d;
--color-primary: #ff6b6b;
--color-accent: #4ecdc4;
--color-yellow: #ffd93d;
/* radius: irregular "blob" corners via mismatched values */
--radius-sm: 14px;
--radius-md: 32px 48px 28px 40px;
--radius-lg: 56px 40px 64px 36px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 12px rgba(255,107,107,0.18);
--shadow-md: 0 12px 28px rgba(78,205,196,0.22);
--shadow-lg: 0 20px 44px rgba(255,107,107,0.24);
/* font */
--font-sans: 'Quicksand', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif;
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
/* ease: bouncy, gooey motion */
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-entrance: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-exit: cubic-bezier(0.5, 0, 0.75, 0);
/* extra: gradient blob fill + morphing corner set for animation */
--blob-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffd93d 50%, #4ecdc4 100%);
--blob-shape-a: 32px 48px 28px 40px;
--blob-shape-b: 48px 28px 40px 32px;
}

/* ============================================================
Base component classes — Blobmorphism
Signature move: asymmetric "blob" border-radius (four unequal corner
values, not a plain rounded rect) that gently morphs on hover, applied
to every raised surface — nav, card, button, badge.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--color-bg); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-md); box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .3s var(--ease-standard), border-radius .3s var(--ease-standard), box-shadow .3s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.03); border-radius: var(--blob-shape-b); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(0.98); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--blob-gradient); color: #2c1e3a; border: none; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-8); box-shadow: var(--shadow-md);
transition: border-radius .4s var(--ease-standard), transform .4s var(--ease-standard); }
.card:hover { border-radius: var(--blob-shape-b); transform: translateY(-3px); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 4px rgba(78,205,196,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .4em .9em; border-radius: var(--radius-pill); background: var(--color-yellow); color: #2c1e3a; }
@media (prefers-reduced-motion: reduce) {
.btn, .card { transition: none; }
.btn:hover, .card:hover { transform: none; border-radius: var(--radius-md); }
}

/* Especificação de referência: references/00-flagship-implementation-specs/blobmorphism.md */
```

## Design System Variables

```css
--bg: #fef6ef, --fg: #2c1e3a, --accent: #ff6b6b, --surface: #ffffff, --radius: 32px 48px 28px 40px, --spacing: 16px, --font-display: 'Baloo 2', 'Fredoka', system-ui, sans-serif, --font-body: 'Quicksand', 'Baloo 2', system-ui, sans-serif
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

[![Organic / Biomorphic](https://designmd.app/images/library/695.png) Claude Artisan · Minimal, maximal & orgânico ### Organic / Biomorphic](https://designmd.app/library/organic-design)[![Claymorphism](https://designmd.app/images/library/9.png) Flat & Soft UI ### Claymorphism](https://designmd.app/library/claymorphism)

Last synced: 8/30/2026
