# Silkpunk

- Source: <https://designmd.app/library/silkpunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:52.305Z

Claude Artisan · Retrofuturismo & ficção especulativa2015–present

# Silkpunk

Reference for retrofuturismo & ficção especulativa Silkpunk. Coined by Ken Liu; East-Asian-inspired bio/mechanical tech.

SilkpunkEast-Asian retrofuturismBamboo, silk, paper, lacquer materialsOrganic bio-mechanics (airships, kites)Classical Chinese/Asian motifsElegant, flowing, nature-integrated techretrofuturism

Use case: superfície material com conteúdo em camadas; Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites)

![Silkpunk](https://designmd.app/images/library/717.png)

## Historical Context

Coined by Ken Liu; East-Asian-inspired bio/mechanical tech. Example: Ken Liu 'The Grace of Kings'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Silkpunk"
description: "Silkpunk visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites)"
colors:
primary: "#a3282c"
background: "#f3ead9"
surface: "#faf6ec"
text: "#2b241c"
accent: "#4f7a67"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Noto Serif SC', 'Songti SC', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Noto Sans SC', 'Noto Sans', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Noto Sans SC', 'Noto Sans', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "14px"
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

Silkpunk visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites)

- **Category:** retrofuturism
- **Era:** 2015–present
- **Origin:** Coined by Ken Liu; East-Asian-inspired bio/mechanical tech.
- **Reference:** Ken Liu 'The Grace of Kings'.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bamboo, silk, paper, lacquer materials
- Organic bio-mechanics (airships, kites)
- Classical Chinese/Asian motifs
- Elegant, flowing, nature-integrated tech

## Colors

- **bg** — #f3ead9
- **surface** — #faf6ec
- **surface-strong** — #ece0c6
- **border** — #cbb98c
- **text** — #2b241c
- **text-muted** — #6c5f4c
- **primary** — #a3282c
- **accent** — #4f7a67
- **lacquer** — #7a1518

## Typography

- Display: 'Noto Serif SC', 'Songti SC', Georgia, serif
- Body: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bamboo, silk, paper, lacquer materials; Organic bio-mechanics (airships, kites); Classical Chinese/Asian motifs; Elegant, flowing, nature-integrated tech; sombras e elevação

## Shapes

- Radius scale: 4px, 14px, 32px 8px 32px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/silkpunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Silkpunk — design tokens */
/* 2015–present | Coined by Ken Liu; East-Asian-inspired bio/mechanical tech, condensed */
:root {
/* color */
--color-bg: #f3ead9;
--color-surface: #faf6ec;
--color-surface-strong: #ece0c6;
--color-border: #cbb98c;
--color-text: #2b241c;
--color-text-muted: #6c5f4c;
--color-primary: #a3282c;
--color-accent: #4f7a67;
--color-lacquer: #7a1518;
/* radius: asymmetric, brush-like, never a hard rectangle */
--radius-sm: 4px;
--radius-md: 14px;
--radius-lg: 32px 8px 32px 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(43, 36, 28, 0.12);
--shadow-md: 0 8px 18px rgba(43, 36, 28, 0.14);
--shadow-lg: 0 18px 36px rgba(43, 36, 28, 0.16);
/* font */
--font-sans: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif;
--font-display: 'Noto Serif SC', 'Songti SC', Georgia, serif;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
/* extra: a lacquer-red left accent bar and a silk-sheen diagonal gradient repeat as signature moves */
--lacquer-bar: 4px solid var(--color-lacquer);
--silk-sheen: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%);
}

/* ============================================================
Base component classes — Silkpunk
Signature move: a lacquer-red vertical bar on the leading edge,
overlaid with a diagonal silk-sheen gradient, repeated on the nav,
card, and primary button; asymmetric brush-stroke corner radii
throughout instead of uniform rounding.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border-left: var(--lacquer-bar); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border: 1px solid var(--color-border); border-left: var(--lacquer-bar);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateX(2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-lacquer); background-image: var(--silk-sheen), linear-gradient(var(--color-lacquer), var(--color-lacquer));
color: #fbe9df; border-color: var(--color-lacquer); border-left: 4px solid #f0c9a0; }
.card { background: var(--color-surface); background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-8); border-left: var(--lacquer-bar); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border-radius: var(--radius-sm);
border: 1px solid var(--color-border); border-left: var(--lacquer-bar); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 22%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #f4fbf7; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/silkpunk.md */
```

### Variables

```
--bg: #f3ead9, --fg: #2b241c, --accent: #a3282c, --surface: #faf6ec, --radius: 14px, --spacing: 16px, --font-display: 'Noto Serif SC', 'Songti SC', Georgia, serif, --font-body: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3ead9

#faf6ec

#ece0c6

#cbb98c

Secondary

#2b241c

#6c5f4c

#a3282c

#4f7a67

#7a1518

### Effects

Bamboo, silk, paper, lacquer materials, Organic bio-mechanics (airships, kites), Classical Chinese/Asian motifs, Elegant, flowing, nature-integrated tech, shadow

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

- **Name:** Silkpunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Silkpunk, East-Asian retrofuturism, Bamboo, silk, paper, lacquer materials, Organic bio-mechanics (airships, kites), Classical Chinese/Asian motifs, Elegant, flowing, nature-integrated tech, retrofuturism
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3ead9, surface: #faf6ec, surface-strong: #ece0c6, border: #cbb98c
- **Secondary:** text: #2b241c, text-muted: #6c5f4c, primary: #a3282c, accent: #4f7a67, lacquer: #7a1518

## Visual Effects

Bamboo, silk, paper, lacquer materials, Organic bio-mechanics (airships, kites), Classical Chinese/Asian motifs, Elegant, flowing, nature-integrated tech, shadow

## AI Visual Direction

Silkpunk, Bamboo, silk, paper, lacquer materials, Organic bio-mechanics (airships, kites), Classical Chinese/Asian motifs, Elegant, flowing, nature-integrated tech, Ken Liu 'The Grace of Kings'.

## CSS Technical

```css
/* Silkpunk — design tokens */
/* 2015–present | Coined by Ken Liu; East-Asian-inspired bio/mechanical tech, condensed */
:root {
/* color */
--color-bg: #f3ead9;
--color-surface: #faf6ec;
--color-surface-strong: #ece0c6;
--color-border: #cbb98c;
--color-text: #2b241c;
--color-text-muted: #6c5f4c;
--color-primary: #a3282c;
--color-accent: #4f7a67;
--color-lacquer: #7a1518;
/* radius: asymmetric, brush-like, never a hard rectangle */
--radius-sm: 4px;
--radius-md: 14px;
--radius-lg: 32px 8px 32px 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(43, 36, 28, 0.12);
--shadow-md: 0 8px 18px rgba(43, 36, 28, 0.14);
--shadow-lg: 0 18px 36px rgba(43, 36, 28, 0.16);
/* font */
--font-sans: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif;
--font-display: 'Noto Serif SC', 'Songti SC', Georgia, serif;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
/* extra: a lacquer-red left accent bar and a silk-sheen diagonal gradient repeat as signature moves */
--lacquer-bar: 4px solid var(--color-lacquer);
--silk-sheen: linear-gradient(120deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0.25) 55%, rgba(255,255,255,0) 80%);
}

/* ============================================================
Base component classes — Silkpunk
Signature move: a lacquer-red vertical bar on the leading edge,
overlaid with a diagonal silk-sheen gradient, repeated on the nav,
card, and primary button; asymmetric brush-stroke corner radii
throughout instead of uniform rounding.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border-left: var(--lacquer-bar); box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
border: 1px solid var(--color-border); border-left: var(--lacquer-bar);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateX(2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-lacquer); background-image: var(--silk-sheen), linear-gradient(var(--color-lacquer), var(--color-lacquer));
color: #fbe9df; border-color: var(--color-lacquer); border-left: 4px solid #f0c9a0; }
.card { background: var(--color-surface); background-image: var(--silk-sheen), linear-gradient(var(--color-surface), var(--color-surface));
color: var(--color-text); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-8); border-left: var(--lacquer-bar); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border-radius: var(--radius-sm);
border: 1px solid var(--color-border); border-left: var(--lacquer-bar); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 22%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #f4fbf7; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/silkpunk.md */
```

## Design System Variables

```css
--bg: #f3ead9, --fg: #2b241c, --accent: #a3282c, --surface: #faf6ec, --radius: 14px, --spacing: 16px, --font-display: 'Noto Serif SC', 'Songti SC', Georgia, serif, --font-body: 'Noto Sans SC', 'Noto Sans', system-ui, sans-serif
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

[![Steampunk](https://designmd.app/images/library/322.png) Retro & Pop ### Steampunk](https://designmd.app/library/steampunk)[![Biopunk](https://designmd.app/images/library/588.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Biopunk](https://designmd.app/library/biopunk)

Last synced: 8/30/2026
