# Organic / Biomorphic

- Source: <https://designmd.app/library/organic-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:12.314Z

Claude Artisan · Minimal, maximal & orgânico2018–present

# Organic / Biomorphic

Reference for minimal, maximal & orgânico Organic / Biomorphic. Reaction to rigid grids; nature-derived forms.

Organic / Biomorphicbiomorphicnature-inspiredFlowing curves and asymmetric blobsSoft natural palettesFluid, hand-tuned layoutsWave dividers, rounded everythingminimal-organic

Use case: hero, superfície, conteúdo e grade responsiva; Flowing curves and asymmetric blobs; Soft natural palettes

![Organic / Biomorphic](https://designmd.app/images/library/695.png)

## Historical Context

Reaction to rigid grids; nature-derived forms. Example: Wellness/beauty brand sites; many 2020s landing pages..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Organic / Biomorphic"
description: "Organic / Biomorphic visual system, translated from the Claude Artisan catalog for use in digital products. Flowing curves and asymmetric blobs; Soft natural palettes"
colors:
primary: "#6f8f4e"
background: "#f6f1e7"
surface: "#ffffff"
text: "#2f3b2a"
accent: "#d98b5f"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fraunces', Georgia, serif"
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
sm: "16px"
md: "28px"
lg: "44px"
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

Organic / Biomorphic visual system, translated from the Claude Artisan catalog for use in digital products. Flowing curves and asymmetric blobs; Soft natural palettes

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Reaction to rigid grids; nature-derived forms.
- **Reference:** Wellness/beauty brand sites; many 2020s landing pages.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Flowing curves and asymmetric blobs
- Soft natural palettes
- Fluid, hand-tuned layouts
- Wave dividers, rounded everything

## Colors

- **bg** — #f6f1e7
- **surface** — #ffffff
- **surface-strong** — #eee6d6
- **border** — #dccdb0
- **text** — #2f3b2a
- **text-muted** — #5c6b53
- **primary** — #6f8f4e
- **accent** — #d98b5f
- **clay** — #e7c9a9

## Typography

- Display: 'Fraunces', Georgia, serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Flowing curves and asymmetric blobs; Soft natural palettes; Fluid, hand-tuned layouts; Wave dividers, rounded everything; sombras e elevação

## Shapes

- Radius scale: 16px, 28px, 44px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/organic-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Organic / Biomorphic — design tokens */
/* 2018–present | Reaction to rigid grids; nature-derived forms, condensed */
:root {
/* color: soft natural palette */
--color-bg: #f6f1e7;
--color-surface: #ffffff;
--color-surface-strong: #eee6d6;
--color-border: #dccdb0;
--color-text: #2f3b2a;
--color-text-muted: #5c6b53;
--color-primary: #6f8f4e;
--color-accent: #d98b5f;
--color-clay: #e7c9a9;
/* radius: rounded everything, asymmetric blob feel via border-radius mixes */
--radius-sm: 16px;
--radius-md: 28px;
--radius-lg: 44px;
--radius-pill: 999px;
--radius-blob: 60% 40% 55% 45% / 45% 55% 40% 60%;
/* shadow */
--shadow-sm: 0 2px 8px rgba(47, 59, 42, 0.08);
--shadow-md: 0 8px 24px rgba(47, 59, 42, 0.12);
--shadow-lg: 0 20px 48px rgba(47, 59, 42, 0.16);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', Georgia, serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.4, 1);
/* extra: wave divider + blob radius */
--wave-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 V20 H0 Z' fill='%23f6f1e7'/%3E%3C/svg%3E");
}

/* ============================================================
Base component classes — Organic / Biomorphic
Signature move: asymmetric blob border-radius (--radius-blob) applied to
raised surfaces, plus soft natural greens/clay accents, so nothing reads
as a rigid rectangle.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none; cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f6f1e7; }
.card {
background: var(--color-surface); border-radius: var(--radius-blob);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(111, 143, 78, 0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-clay); color: #4a3520; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/organic-design.md */
```

### Variables

```
--bg: #f6f1e7, --fg: #2f3b2a, --accent: #6f8f4e, --surface: #ffffff, --radius: 28px, --spacing: 16px, --font-display: 'Fraunces', Georgia, serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f6f1e7

#ffffff

#eee6d6

#dccdb0

Secondary

#2f3b2a

#5c6b53

#6f8f4e

#d98b5f

#e7c9a9

### Effects

Flowing curves and asymmetric blobs, Soft natural palettes, Fluid, hand-tuned layouts, Wave dividers, rounded everything, shadow

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

- **Name:** Organic / Biomorphic
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Organic / Biomorphic, biomorphic, nature-inspired, Flowing curves and asymmetric blobs, Soft natural palettes, Fluid, hand-tuned layouts, Wave dividers, rounded everything, minimal-organic
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f6f1e7, surface: #ffffff, surface-strong: #eee6d6, border: #dccdb0
- **Secondary:** text: #2f3b2a, text-muted: #5c6b53, primary: #6f8f4e, accent: #d98b5f, clay: #e7c9a9

## Visual Effects

Flowing curves and asymmetric blobs, Soft natural palettes, Fluid, hand-tuned layouts, Wave dividers, rounded everything, shadow

## AI Visual Direction

Organic / Biomorphic, Flowing curves and asymmetric blobs, Soft natural palettes, Fluid, hand-tuned layouts, Wave dividers, rounded everything, Wellness/beauty brand sites; many 2020s landing pages.

## CSS Technical

```css
/* Organic / Biomorphic — design tokens */
/* 2018–present | Reaction to rigid grids; nature-derived forms, condensed */
:root {
/* color: soft natural palette */
--color-bg: #f6f1e7;
--color-surface: #ffffff;
--color-surface-strong: #eee6d6;
--color-border: #dccdb0;
--color-text: #2f3b2a;
--color-text-muted: #5c6b53;
--color-primary: #6f8f4e;
--color-accent: #d98b5f;
--color-clay: #e7c9a9;
/* radius: rounded everything, asymmetric blob feel via border-radius mixes */
--radius-sm: 16px;
--radius-md: 28px;
--radius-lg: 44px;
--radius-pill: 999px;
--radius-blob: 60% 40% 55% 45% / 45% 55% 40% 60%;
/* shadow */
--shadow-sm: 0 2px 8px rgba(47, 59, 42, 0.08);
--shadow-md: 0 8px 24px rgba(47, 59, 42, 0.12);
--shadow-lg: 0 20px 48px rgba(47, 59, 42, 0.16);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', Georgia, serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.4, 1);
/* extra: wave divider + blob radius */
--wave-divider: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 20' preserveAspectRatio='none'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10 T 150 10 T 200 10 V20 H0 Z' fill='%23f6f1e7'/%3E%3C/svg%3E");
}

/* ============================================================
Base component classes — Organic / Biomorphic
Signature move: asymmetric blob border-radius (--radius-blob) applied to
raised surfaces, plus soft natural greens/clay accents, so nothing reads
as a rigid rectangle.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none; cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f6f1e7; }
.card {
background: var(--color-surface); border-radius: var(--radius-blob);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(111, 143, 78, 0.2); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-clay); color: #4a3520; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/organic-design.md */
```

## Design System Variables

```css
--bg: #f6f1e7, --fg: #2f3b2a, --accent: #6f8f4e, --surface: #ffffff, --radius: 28px, --spacing: 16px, --font-display: 'Fraunces', Georgia, serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
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

[![Blobmorphism](https://designmd.app/images/library/590.png) Claude Artisan · Minimal, maximal & orgânico ### Blobmorphism](https://designmd.app/library/blobmorphism)[![Solarpunk](https://designmd.app/images/library/719.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Solarpunk](https://designmd.app/library/solarpunk)

Last synced: 8/30/2026
