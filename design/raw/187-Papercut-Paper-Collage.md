# Papercut / Paper Collage

- Source: <https://designmd.app/library/papercut>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:14.317Z

Claude Artisan · Textura, material & renderização2016–present

# Papercut / Paper Collage

Reference for textura, material & renderização Papercut / Paper Collage. Digital simulation of layered cut paper.

Papercut / Paper Collagepaper craftlayered paperkirigamiLayered paper with soft realistic shadowsTorn/cut edges, fold linesWarm matte pastel stockCraft, tactile, storybooktexture

Use case: grade modular responsiva; Layered paper with soft realistic shadows; Torn/cut edges, fold lines

![Papercut / Paper Collage](https://designmd.app/images/library/696.png)

## Historical Context

Digital simulation of layered cut paper. Example: Google paper-craft doodles; kids'-brand sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Papercut / Paper Collage"
description: "Papercut / Paper Collage visual system, translated from the Claude Artisan catalog for use in digital products. Layered paper with soft realistic shadows; Torn/cut edges, fold lines"
colors:
primary: "#e8623d"
background: "#fbf3e7"
surface: "#fff9f0"
text: "#3b2c22"
accent: "#4f9c8e"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Caveat', 'Comic Neue', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Quicksand', 'Comic Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "14px"
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

Papercut / Paper Collage visual system, translated from the Claude Artisan catalog for use in digital products. Layered paper with soft realistic shadows; Torn/cut edges, fold lines

- **Category:** texture
- **Era:** 2016–present
- **Origin:** Digital simulation of layered cut paper.
- **Reference:** Google paper-craft doodles; kids'-brand sites.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Layered paper with soft realistic shadows
- Torn/cut edges, fold lines
- Warm matte pastel stock
- Craft, tactile, storybook

## Colors

- **bg** — #fbf3e7
- **surface** — #fff9f0
- **surface-strong** — #ffe8cc
- **border** — #e3c9a3
- **text** — #3b2c22
- **text-muted** — #6b5847
- **primary** — #e8623d
- **accent** — #4f9c8e
- **torn-shadow** — rgba(59, 44, 34, 0.18)

## Typography

- Display: 'Caveat', 'Comic Neue', cursive
- Body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Layered paper with soft realistic shadows; Torn/cut edges, fold lines; Warm matte pastel stock; Craft, tactile, storybook; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/papercut/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Papercut / Paper Collage — design tokens */
/* 2016–present | Digital simulation of layered cut paper, condensed */
:root {
/* color: warm matte pastel stock */
--color-bg: #fbf3e7;
--color-surface: #fff9f0;
--color-surface-strong: #ffe8cc;
--color-border: #e3c9a3;
--color-text: #3b2c22;
--color-text-muted: #6b5847;
--color-primary: #e8623d;
--color-accent: #4f9c8e;
--color-torn-shadow: rgba(59, 44, 34, 0.18);
/* radius: cut/torn paper is mostly straight-edged with slight softness */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow: layered paper needs soft realistic offset shadows */
--shadow-sm: 2px 3px 0 rgba(59, 44, 34, 0.12), 0 2px 6px rgba(59,44,34,0.1);
--shadow-md: 4px 6px 0 rgba(59, 44, 34, 0.14), 0 6px 14px rgba(59,44,34,0.12);
--shadow-lg: 6px 10px 0 rgba(59, 44, 34, 0.16), 0 12px 28px rgba(59,44,34,0.14);
/* font */
--font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Caveat', 'Comic Neue', cursive;
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
/* extra: torn edge clip-path + fold-line */
--torn-edge-clip: polygon(0% 2%, 3% 0%, 8% 3%, 14% 0%, 20% 2%, 27% 0%, 34% 3%, 41% 0%, 48% 2%, 55% 0%, 62% 3%, 69% 0%, 76% 2%, 83% 0%, 90% 3%, 97% 0%, 100% 2%, 100% 98%, 96% 100%, 90% 98%, 83% 100%, 76% 98%, 69% 100%, 62% 98%, 55% 100%, 48% 98%, 41% 100%, 34% 98%, 27% 100%, 20% 98%, 14% 100%, 8% 98%, 3% 100%, 0% 98%);
--fold-line: linear-gradient(90deg, transparent 0%, rgba(59,44,34,0.08) 50%, transparent 100%);
}

/* ============================================================
Base component classes — Papercut / Paper Collage
Signature move: soft layered drop shadows that simulate real paper depth,
plus a torn-edge clip-path silhouette repeated on card and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
box-shadow: var(--shadow-sm); clip-path: var(--torn-edge-clip); border-radius: var(--radius-md);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: none; box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) rotate(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff9f0; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none;
clip-path: var(--torn-edge-clip); position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px dashed var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(232, 98, 61, 0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff9f0;
box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/papercut.md */
```

### Variables

```
--bg: #fbf3e7, --fg: #3b2c22, --accent: #e8623d, --surface: #fff9f0, --radius: 8px, --spacing: 16px, --font-display: 'Caveat', 'Comic Neue', cursive, --font-body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fbf3e7

#fff9f0

#ffe8cc

#e3c9a3

Secondary

#3b2c22

#6b5847

#e8623d

#4f9c8e

### Effects

Layered paper with soft realistic shadows, Torn/cut edges, fold lines, Warm matte pastel stock, Craft, tactile, storybook, shadow

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

- **Name:** Papercut / Paper Collage
- **Type:** claude-artisan/texture
- **Keywords:** Papercut / Paper Collage, paper craft, layered paper, kirigami, Layered paper with soft realistic shadows, Torn/cut edges, fold lines, Warm matte pastel stock, Craft, tactile, storybook, texture
- **Era:** 2016–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fbf3e7, surface: #fff9f0, surface-strong: #ffe8cc, border: #e3c9a3
- **Secondary:** text: #3b2c22, text-muted: #6b5847, primary: #e8623d, accent: #4f9c8e, torn-shadow: rgba(59, 44, 34, 0.18)

## Visual Effects

Layered paper with soft realistic shadows, Torn/cut edges, fold lines, Warm matte pastel stock, Craft, tactile, storybook, shadow

## AI Visual Direction

Papercut / Paper Collage, Layered paper with soft realistic shadows, Torn/cut edges, fold lines, Warm matte pastel stock, Craft, tactile, storybook, Google paper-craft doodles; kids'-brand sites.

## CSS Technical

```css
/* Papercut / Paper Collage — design tokens */
/* 2016–present | Digital simulation of layered cut paper, condensed */
:root {
/* color: warm matte pastel stock */
--color-bg: #fbf3e7;
--color-surface: #fff9f0;
--color-surface-strong: #ffe8cc;
--color-border: #e3c9a3;
--color-text: #3b2c22;
--color-text-muted: #6b5847;
--color-primary: #e8623d;
--color-accent: #4f9c8e;
--color-torn-shadow: rgba(59, 44, 34, 0.18);
/* radius: cut/torn paper is mostly straight-edged with slight softness */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow: layered paper needs soft realistic offset shadows */
--shadow-sm: 2px 3px 0 rgba(59, 44, 34, 0.12), 0 2px 6px rgba(59,44,34,0.1);
--shadow-md: 4px 6px 0 rgba(59, 44, 34, 0.14), 0 6px 14px rgba(59,44,34,0.12);
--shadow-lg: 6px 10px 0 rgba(59, 44, 34, 0.16), 0 12px 28px rgba(59,44,34,0.14);
/* font */
--font-sans: 'Quicksand', 'Comic Neue', system-ui, sans-serif;
--font-display: 'Caveat', 'Comic Neue', cursive;
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
/* extra: torn edge clip-path + fold-line */
--torn-edge-clip: polygon(0% 2%, 3% 0%, 8% 3%, 14% 0%, 20% 2%, 27% 0%, 34% 3%, 41% 0%, 48% 2%, 55% 0%, 62% 3%, 69% 0%, 76% 2%, 83% 0%, 90% 3%, 97% 0%, 100% 2%, 100% 98%, 96% 100%, 90% 98%, 83% 100%, 76% 98%, 69% 100%, 62% 98%, 55% 100%, 48% 98%, 41% 100%, 34% 98%, 27% 100%, 20% 98%, 14% 100%, 8% 98%, 3% 100%, 0% 98%);
--fold-line: linear-gradient(90deg, transparent 0%, rgba(59,44,34,0.08) 50%, transparent 100%);
}

/* ============================================================
Base component classes — Papercut / Paper Collage
Signature move: soft layered drop shadows that simulate real paper depth,
plus a torn-edge clip-path silhouette repeated on card and nav.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
box-shadow: var(--shadow-sm); clip-path: var(--torn-edge-clip); border-radius: var(--radius-md);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: none; box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) rotate(-1deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) rotate(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff9f0; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none;
clip-path: var(--torn-edge-clip); position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px dashed var(--color-border); box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(232, 98, 61, 0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff9f0;
box-shadow: var(--shadow-sm); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/papercut.md */
```

## Design System Variables

```css
--bg: #fbf3e7, --fg: #3b2c22, --accent: #e8623d, --surface: #fff9f0, --radius: 8px, --spacing: 16px, --font-display: 'Caveat', 'Comic Neue', cursive, --font-body: 'Quicksand', 'Comic Neue', system-ui, sans-serif
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

[![Hand-Drawn / Sketch](https://designmd.app/images/library/657.png) Claude Artisan · Textura, material & renderização ### Hand-Drawn / Sketch](https://designmd.app/library/hand-drawn)[![Claymorphism](https://designmd.app/images/library/9.png) Flat & Soft UI ### Claymorphism](https://designmd.app/library/claymorphism)

Last synced: 8/30/2026
