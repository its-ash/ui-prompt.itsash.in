# Textile / Knit / Embroidery

- Source: <https://designmd.app/library/textile>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:27.297Z

Claude Artisan · Textura, material & renderizaçãoCraft heritage

# Textile / Knit / Embroidery

Reference for textura, material & renderização Textile / Knit / Embroidery. Simulated fabric/stitch textures.

Textile / Knit / EmbroideryknitembroideredstitchedWoven, knitted, or embroidered texturesVisible thread and stitch detailWarm tactile materialityCozy, craftedtexture

Use case: shell de aplicação com navegação e cartões; Woven, knitted, or embroidered textures; Visible thread and stitch detail

![Textile / Knit / Embroidery](https://designmd.app/images/library/737.png)

## Historical Context

Simulated fabric/stitch textures. Example: Apparel brands; cozy holiday campaigns..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Textile / Knit / Embroidery"
description: "Textile / Knit / Embroidery visual system, translated from the Claude Artisan catalog for use in digital products. Woven, knitted, or embroidered textures; Visible thread and stitch detail"
colors:
primary: "#b5502f"
background: "#efe6d8"
surface: "#f7f1e6"
text: "#3a2a20"
accent: "#4a6b4d"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Fraunces', 'Georgia', serif"
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
sm: "6px"
md: "10px"
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

Textile / Knit / Embroidery visual system, translated from the Claude Artisan catalog for use in digital products. Woven, knitted, or embroidered textures; Visible thread and stitch detail

- **Category:** texture
- **Era:** Craft heritage
- **Origin:** Simulated fabric/stitch textures.
- **Reference:** Apparel brands; cozy holiday campaigns.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Woven, knitted, or embroidered textures
- Visible thread and stitch detail
- Warm tactile materiality
- Cozy, crafted

## Colors

- **bg** — #efe6d8
- **surface** — #f7f1e6
- **surface-strong** — #ece0cd
- **border** — #c9b28c
- **text** — #3a2a20
- **text-muted** — #6b5744
- **primary** — #b5502f
- **accent** — #4a6b4d
- **thread** — #d9c299

## Typography

- Display: 'Fraunces', 'Georgia', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Woven, knitted, or embroidered textures; Visible thread and stitch detail; Warm tactile materiality; Cozy, crafted; sombras e elevação

## Shapes

- Radius scale: 6px, 10px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/textile/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Textile / Knit / Embroidery — design tokens */
/* Craft heritage | Simulated fabric/stitch textures, condensed */
:root {
/* color */
--color-bg: #efe6d8;
--color-surface: #f7f1e6;
--color-surface-strong: #ece0cd;
--color-border: #c9b28c;
--color-text: #3a2a20;
--color-text-muted: #6b5744;
--color-primary: #b5502f;
--color-accent: #4a6b4d;
--color-thread: #d9c299;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(58,42,32,0.12);
--shadow-md: 0 4px 12px rgba(58,42,32,0.16);
--shadow-lg: 0 10px 28px rgba(58,42,32,0.20);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', 'Georgia', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: stitch texture — repeating dashed thread border + woven cross-hatch fill */
--stitch-border: repeating-linear-gradient(90deg, var(--color-thread) 0 8px, transparent 8px 16px);
--weave-fill: repeating-linear-gradient(45deg, rgba(181,80,47,0.05) 0 6px, rgba(74,107,77,0.05) 6px 12px);
--stitch-dash: 2px dashed var(--color-thread);
}

/* ============================================================
Base component classes — textile
Signature move: a running stitch (dashed thread line, offset inset) traces
the edge of every raised surface, and a faint cross-hatch weave fills them —
evoking hand-embroidered borders on woven cloth.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--stitch-dash);
box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--stitch-dash);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fdf6ea; border: 2px dashed #e8c9a8; }
.card {
background: var(--color-surface); background-image: var(--weave-fill);
border: var(--stitch-dash); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--stitch-dash);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(181,80,47,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #fbf6e9; border: 1px dashed rgba(255,255,255,0.5); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/textile.md */
```

### Variables

```
--bg: #efe6d8, --fg: #3a2a20, --accent: #b5502f, --surface: #f7f1e6, --radius: 10px, --spacing: 16px, --font-display: 'Fraunces', 'Georgia', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#efe6d8

#f7f1e6

#ece0cd

#c9b28c

Secondary

#3a2a20

#6b5744

#b5502f

#4a6b4d

#d9c299

### Effects

Woven, knitted, or embroidered textures, Visible thread and stitch detail, Warm tactile materiality, Cozy, crafted, shadow

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

- **Name:** Textile / Knit / Embroidery
- **Type:** claude-artisan/texture
- **Keywords:** Textile / Knit / Embroidery, knit, embroidered, stitched, Woven, knitted, or embroidered textures, Visible thread and stitch detail, Warm tactile materiality, Cozy, crafted, texture
- **Era:** Craft heritage
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #efe6d8, surface: #f7f1e6, surface-strong: #ece0cd, border: #c9b28c
- **Secondary:** text: #3a2a20, text-muted: #6b5744, primary: #b5502f, accent: #4a6b4d, thread: #d9c299

## Visual Effects

Woven, knitted, or embroidered textures, Visible thread and stitch detail, Warm tactile materiality, Cozy, crafted, shadow

## AI Visual Direction

Textile / Knit / Embroidery, Woven, knitted, or embroidered textures, Visible thread and stitch detail, Warm tactile materiality, Cozy, crafted, Apparel brands; cozy holiday campaigns.

## CSS Technical

```css
/* Textile / Knit / Embroidery — design tokens */
/* Craft heritage | Simulated fabric/stitch textures, condensed */
:root {
/* color */
--color-bg: #efe6d8;
--color-surface: #f7f1e6;
--color-surface-strong: #ece0cd;
--color-border: #c9b28c;
--color-text: #3a2a20;
--color-text-muted: #6b5744;
--color-primary: #b5502f;
--color-accent: #4a6b4d;
--color-thread: #d9c299;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(58,42,32,0.12);
--shadow-md: 0 4px 12px rgba(58,42,32,0.16);
--shadow-lg: 0 10px 28px rgba(58,42,32,0.20);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Fraunces', 'Georgia', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: stitch texture — repeating dashed thread border + woven cross-hatch fill */
--stitch-border: repeating-linear-gradient(90deg, var(--color-thread) 0 8px, transparent 8px 16px);
--weave-fill: repeating-linear-gradient(45deg, rgba(181,80,47,0.05) 0 6px, rgba(74,107,77,0.05) 6px 12px);
--stitch-dash: 2px dashed var(--color-thread);
}

/* ============================================================
Base component classes — textile
Signature move: a running stitch (dashed thread line, offset inset) traces
the edge of every raised surface, and a faint cross-hatch weave fills them —
evoking hand-embroidered borders on woven cloth.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: var(--stitch-dash);
box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: var(--stitch-dash);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fdf6ea; border: 2px dashed #e8c9a8; }
.card {
background: var(--color-surface); background-image: var(--weave-fill);
border: var(--stitch-dash); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--stitch-dash);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(181,80,47,0.22); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #fbf6e9; border: 1px dashed rgba(255,255,255,0.5); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/textile.md */
```

## Design System Variables

```css
--bg: #efe6d8, --fg: #3a2a20, --accent: #b5502f, --surface: #f7f1e6, --radius: 10px, --spacing: 16px, --font-display: 'Fraunces', 'Georgia', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
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

[![Skeuomorphism](https://designmd.app/images/library/13.png) Flat & Soft UI ### Skeuomorphism](https://designmd.app/library/skeuomorphism)[![Papercut / Paper Collage](https://designmd.app/images/library/696.png) Claude Artisan · Textura, material & renderização ### Papercut / Paper Collage](https://designmd.app/library/papercut)

Last synced: 8/30/2026
