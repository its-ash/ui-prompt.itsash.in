# Grunge Design

- Source: <https://designmd.app/library/grunge>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:02.302Z

Claude Artisan · Brutalismo & anti-design1990s

# Grunge Design

Reference for brutalismo & anti-design Grunge Design. David Carson (Ray Gun magazine); reaction to clean corporate design.

Grunge Designdirty designdistressed designDistressed textures, dirt, splatter, torn edgesChaotic overlapping type, broken legibilityPhotocopied, degraded, layered collageAnti-grid experimental layoutbrutalist

Use case: shell de aplicação com navegação e cartões; Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility

![Grunge Design](https://designmd.app/images/library/655.png)

## Historical Context

David Carson (Ray Gun magazine); reaction to clean corporate design. Example: David Carson, Ray Gun magazine (1990s)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Grunge Design"
description: "Grunge Design visual system, translated from the Claude Artisan catalog for use in digital products. Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility"
colors:
primary: "#c1391f"
background: "#1a1815"
surface: "#24211c"
text: "#ece6d8"
accent: "#d9b23c"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Oswald', 'Impact', 'Arial Narrow', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Courier New', 'Special Elite', monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Courier New', 'Special Elite', monospace"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "0px"
spacing:
sm: "7px"
md: "15px"
lg: "30px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "15px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "15px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "22px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "15px"
---
## Overview

Grunge Design visual system, translated from the Claude Artisan catalog for use in digital products. Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility

- **Category:** brutalist
- **Era:** 1990s
- **Origin:** David Carson (Ray Gun magazine); reaction to clean corporate design.
- **Reference:** David Carson, Ray Gun magazine (1990s).
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Distressed textures, dirt, splatter, torn edges
- Chaotic overlapping type, broken legibility
- Photocopied, degraded, layered collage
- Anti-grid experimental layout

## Colors

- **bg** — #1a1815
- **surface** — #24211c
- **surface-strong** — #2e2a23
- **border** — #55503f
- **text** — #ece6d8
- **text-muted** — #a89f8a
- **primary** — #c1391f
- **accent** — #d9b23c
- **ink** — #0c0b09

## Typography

- Display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif
- Body: 'Courier New', 'Special Elite', monospace
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Distressed textures, dirt, splatter, torn edges; Chaotic overlapping type, broken legibility; Photocopied, degraded, layered collage; Anti-grid experimental layout; sombras e elevação

## Shapes

- Radius scale: 0px, 2px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/grunge/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Grunge Design — design tokens */
/* 1990s | David Carson (Ray Gun magazine); reaction to clean corporate design, condensed */
:root {
/* color */
--color-bg: #1a1815;
--color-surface: #24211c;
--color-surface-strong: #2e2a23;
--color-border: #55503f;
--color-text: #ece6d8;
--color-text-muted: #a89f8a;
--color-primary: #c1391f;
--color-accent: #d9b23c;
--color-ink: #0c0b09;
/* radius: torn/rough, no clean rounding */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-ink);
--shadow-md: 4px 4px 0 var(--color-ink);
--shadow-lg: 6px 6px 0 var(--color-ink);
/* font */
--font-sans: 'Courier New', 'Special Elite', monospace;
--font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.9rem;
--text-3xl: 2.6rem;
--text-4xl: 3.6rem;
--text-5xl: 5rem;
/* space */
--space-1: 4px;
--space-2: 7px;
--space-3: 11px;
--space-4: 15px;
--space-6: 22px;
--space-8: 30px;
--space-12: 44px;
--space-16: 60px;
--space-24: 90px;
/* ease */
--ease-standard: steps(4, end);
/* extra: a grain/scratch SVG noise filter, torn-paper jagged clip-path,
and a slight random rotation on cards — the "photocopied degraded" move */
--grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--torn-clip: polygon(0% 2%, 3% 0%, 8% 3%, 15% 0%, 22% 2%, 30% 0%, 40% 3%, 50% 0%, 60% 2%, 70% 0%, 80% 3%, 90% 0%, 100% 2%, 100% 98%, 92% 100%, 85% 97%, 75% 100%, 65% 98%, 55% 100%, 45% 97%, 35% 100%, 25% 98%, 15% 100%, 8% 97%, 0% 100%);
}

/* ============================================================
Base component classes — Grunge
Signature move: a fractal-noise grain overlay (scratches/dirt) layered
on the nav and card backgrounds, plus a jagged torn-edge clip-path on
cards and a hard offset "photocopy" shadow instead of a soft blur.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); position: relative; }
body::before { content: ""; position: fixed; inset: 0; background-image: var(--grain-svg); mix-blend-mode: overlay; opacity: 0.6; pointer-events: none; }
.nav { position: relative; z-index: 1; display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); background-image: var(--grain-svg); background-blend-mode: overlay;
border-bottom: 3px solid var(--color-ink); transform: rotate(-0.4deg); }
.btn { position: relative; z-index: 1; font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-ink); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .1s var(--ease-standard); }
.btn:hover { transform: translate(-1px,-1px) rotate(-0.5deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff2e0; border-color: var(--color-ink); }
.card { position: relative; z-index: 1; background: var(--color-surface); background-image: var(--grain-svg);
background-blend-mode: overlay; border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6) var(--space-6) calc(var(--space-6) + 6px);
clip-path: var(--torn-clip); transform: rotate(0.3deg); }
.input { position: relative; z-index: 1; width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
font-family: var(--font-display); text-transform: uppercase; padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-ink); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn, .nav, .card, .badge { transition: none; transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/grunge.md */
```

### Variables

```
--bg: #1a1815, --fg: #ece6d8, --accent: #c1391f, --surface: #24211c, --radius: 2px, --spacing: 15px, --font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif, --font-body: 'Courier New', 'Special Elite', monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1a1815

#24211c

#2e2a23

#55503f

Secondary

#ece6d8

#a89f8a

#c1391f

#d9b23c

#0c0b09

### Effects

Distressed textures, dirt, splatter, torn edges, Chaotic overlapping type, broken legibility, Photocopied, degraded, layered collage, Anti-grid experimental layout, shadow

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

- **Name:** Grunge Design
- **Type:** claude-artisan/brutalist
- **Keywords:** Grunge Design, dirty design, distressed design, Distressed textures, dirt, splatter, torn edges, Chaotic overlapping type, broken legibility, Photocopied, degraded, layered collage, Anti-grid experimental layout, brutalist
- **Era:** 1990s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1a1815, surface: #24211c, surface-strong: #2e2a23, border: #55503f
- **Secondary:** text: #ece6d8, text-muted: #a89f8a, primary: #c1391f, accent: #d9b23c, ink: #0c0b09

## Visual Effects

Distressed textures, dirt, splatter, torn edges, Chaotic overlapping type, broken legibility, Photocopied, degraded, layered collage, Anti-grid experimental layout, shadow

## AI Visual Direction

Grunge Design, Distressed textures, dirt, splatter, torn edges, Chaotic overlapping type, broken legibility, Photocopied, degraded, layered collage, Anti-grid experimental layout, David Carson, Ray Gun magazine (1990s).

## CSS Technical

```css
/* Grunge Design — design tokens */
/* 1990s | David Carson (Ray Gun magazine); reaction to clean corporate design, condensed */
:root {
/* color */
--color-bg: #1a1815;
--color-surface: #24211c;
--color-surface-strong: #2e2a23;
--color-border: #55503f;
--color-text: #ece6d8;
--color-text-muted: #a89f8a;
--color-primary: #c1391f;
--color-accent: #d9b23c;
--color-ink: #0c0b09;
/* radius: torn/rough, no clean rounding */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 0px;
--radius-pill: 2px;
/* shadow */
--shadow-sm: 2px 2px 0 var(--color-ink);
--shadow-md: 4px 4px 0 var(--color-ink);
--shadow-lg: 6px 6px 0 var(--color-ink);
/* font */
--font-sans: 'Courier New', 'Special Elite', monospace;
--font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.9rem;
--text-3xl: 2.6rem;
--text-4xl: 3.6rem;
--text-5xl: 5rem;
/* space */
--space-1: 4px;
--space-2: 7px;
--space-3: 11px;
--space-4: 15px;
--space-6: 22px;
--space-8: 30px;
--space-12: 44px;
--space-16: 60px;
--space-24: 90px;
/* ease */
--ease-standard: steps(4, end);
/* extra: a grain/scratch SVG noise filter, torn-paper jagged clip-path,
and a slight random rotation on cards — the "photocopied degraded" move */
--grain-svg: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--torn-clip: polygon(0% 2%, 3% 0%, 8% 3%, 15% 0%, 22% 2%, 30% 0%, 40% 3%, 50% 0%, 60% 2%, 70% 0%, 80% 3%, 90% 0%, 100% 2%, 100% 98%, 92% 100%, 85% 97%, 75% 100%, 65% 98%, 55% 100%, 45% 97%, 35% 100%, 25% 98%, 15% 100%, 8% 97%, 0% 100%);
}

/* ============================================================
Base component classes — Grunge
Signature move: a fractal-noise grain overlay (scratches/dirt) layered
on the nav and card backgrounds, plus a jagged torn-edge clip-path on
cards and a hard offset "photocopy" shadow instead of a soft blur.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); position: relative; }
body::before { content: ""; position: fixed; inset: 0; background-image: var(--grain-svg); mix-blend-mode: overlay; opacity: 0.6; pointer-events: none; }
.nav { position: relative; z-index: 1; display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); background-image: var(--grain-svg); background-blend-mode: overlay;
border-bottom: 3px solid var(--color-ink); transform: rotate(-0.4deg); }
.btn { position: relative; z-index: 1; font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .02em;
color: var(--color-text); padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-ink); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .1s var(--ease-standard); }
.btn:hover { transform: translate(-1px,-1px) rotate(-0.5deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff2e0; border-color: var(--color-ink); }
.card { position: relative; z-index: 1; background: var(--color-surface); background-image: var(--grain-svg);
background-blend-mode: overlay; border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6) var(--space-6) calc(var(--space-6) + 6px);
clip-path: var(--torn-clip); transform: rotate(0.3deg); }
.input { position: relative; z-index: 1; width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { position: relative; z-index: 1; display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
font-family: var(--font-display); text-transform: uppercase; padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-ink); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn, .nav, .card, .badge { transition: none; transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/grunge.md */
```

## Design System Variables

```css
--bg: #1a1815, --fg: #ece6d8, --accent: #c1391f, --surface: #24211c, --radius: 2px, --spacing: 15px, --font-display: 'Oswald', 'Impact', 'Arial Narrow', sans-serif, --font-body: 'Courier New', 'Special Elite', monospace
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

[![Swiss Punk / New Wave](https://designmd.app/images/library/731.png) Claude Artisan · Brutalismo & anti-design ### Swiss Punk / New Wave](https://designmd.app/library/swiss-punk)[![Glitch Art](https://designmd.app/images/library/646.png) Claude Artisan · Textura, material & renderização ### Glitch Art](https://designmd.app/library/glitch-art)

Last synced: 8/30/2026
