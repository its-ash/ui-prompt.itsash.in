# Sumi-e (Japanese Ink Wash)

- Source: <https://designmd.app/library/sumi-e>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:11.321Z

Claude Artisan · Movimentos históricos14th century–present

# Sumi-e (Japanese Ink Wash)

Reference for movimentos históricos Sumi-e (Japanese Ink Wash). Traditional East Asian ink wash painting, brought to Japan via Zen Buddhist monks from Song-dynasty China.

Sumi-e (Japanese Ink Wash)ink wash paintingsuibokugabrush ink styleMonochrome black ink gradients (bokashi) on cream rice-paper backgroundsVisible brush-stroke texture and ink-bleed edgesDeliberate negative space (ma) as a compositional elementAsymmetric, organic compositions with a single red seal (hanko) accenthistorical

Use case: superfície material com conteúdo em camadas; Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges

![Sumi-e (Japanese Ink Wash)](https://designmd.app/images/library/728.png)

## Historical Context

Traditional East Asian ink wash painting, brought to Japan via Zen Buddhist monks from Song-dynasty China. Example: Sesshu Toyo's landscape scrolls; Hasegawa Tohaku 'Pine Trees' screen..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Sumi-e (Japanese Ink Wash)"
description: "Sumi-e (Japanese Ink Wash) visual system, translated from the Claude Artisan catalog for use in digital products. Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges"
colors:
primary: "#232323"
background: "#f4efe4"
surface: "#faf6ec"
text: "#1c1c1c"
accent: "#b13d2c"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Zen Old Mincho', 'Shippori Mincho', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "6px"
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

Sumi-e (Japanese Ink Wash) visual system, translated from the Claude Artisan catalog for use in digital products. Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges

- **Category:** historical
- **Era:** 14th century–present
- **Origin:** Traditional East Asian ink wash painting, brought to Japan via Zen Buddhist monks from Song-dynasty China.
- **Reference:** Sesshu Toyo's landscape scrolls; Hasegawa Tohaku 'Pine Trees' screen.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds
- Visible brush-stroke texture and ink-bleed edges
- Deliberate negative space (ma) as a compositional element
- Asymmetric, organic compositions with a single red seal (hanko) accent

## Colors

- **bg** — #f4efe4
- **surface** — #faf6ec
- **surface-2** — #ede5d3
- **text** — #1c1c1c
- **text-muted** — #5a564c
- **primary** — #232323
- **accent** — #b13d2c
- **ink-grey** — #8c8676
- **ink-wash** — #3d3a33

## Typography

- Display: 'Zen Old Mincho', 'Shippori Mincho', serif
- Body: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds; Visible brush-stroke texture and ink-bleed edges; Deliberate negative space (ma) as a compositional element; Asymmetric, organic compositions with a single red seal (hanko) accent; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/sumi-e/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Sumi-e — design tokens */
/* 14th century–present | Traditional East Asian ink wash painting */
:root {
/* color */
--color-bg: #f4efe4;
--color-surface: #faf6ec;
--color-surface-2: #ede5d3;
--color-text: #1c1c1c;
--color-text-muted: #5a564c;
--color-primary: #232323;
--color-accent: #b13d2c;
--color-ink-grey: #8c8676;
--color-ink-wash: #3d3a33;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-ink-bleed: 0 6px 18px rgba(28,28,28,0.14);
--shadow-ink-bleed-sm: 0 2px 8px rgba(28,28,28,0.10);
/* font */
--font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif;
--font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: ink gradient + seal stamp */
--ink-gradient: linear-gradient(160deg, #232323 0%, #5a564c 55%, transparent 100%);
--seal-stamp: 0 0 0 2px #b13d2c;
}

/* ============================================================
Base component classes — Sumi-e
Signature move: one ink value graded from wet to dry (bokashi)
on a cream rice-paper ground, deliberate empty space (ma), and
a single red seal accent. Repeats on card, badge, and headings.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-bg);
border-bottom: 1px solid var(--color-ink-grey);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-ink-grey);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), border-color .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-ink-bleed-sm); border-color: var(--color-primary); }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--ink-gradient), var(--color-primary); background-blend-mode: normal;
color: var(--color-surface); border: 1px solid var(--color-primary); font-weight: 600;
}
.btn--primary:hover { box-shadow: var(--shadow-ink-bleed); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-8) var(--space-6); border: none;
box-shadow: var(--shadow-ink-bleed-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-2); border-radius: 0;
background: transparent; border: none; border-bottom: 1px solid var(--color-ink-grey);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .35em .75em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-surface);
box-shadow: var(--seal-stamp);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/sumi-e.md */
```

### Variables

```
--bg: #f4efe4, --fg: #1c1c1c, --accent: #232323, --surface: #faf6ec, --radius: 6px, --spacing: 16px, --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif, --font-body: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f4efe4

#faf6ec

#ede5d3

#1c1c1c

Secondary

#5a564c

#232323

#b13d2c

#8c8676

#3d3a33

### Effects

Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds, Visible brush-stroke texture and ink-bleed edges, Deliberate negative space (ma) as a compositional element, Asymmetric, organic compositions with a single red seal (hanko) accent, shadow, blur

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

- **Name:** Sumi-e (Japanese Ink Wash)
- **Type:** claude-artisan/historical
- **Keywords:** Sumi-e (Japanese Ink Wash), ink wash painting, suibokuga, brush ink style, Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds, Visible brush-stroke texture and ink-bleed edges, Deliberate negative space (ma) as a compositional element, Asymmetric, organic compositions with a single red seal (hanko) accent, historical
- **Era:** 14th century–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f4efe4, surface: #faf6ec, surface-2: #ede5d3, text: #1c1c1c
- **Secondary:** text-muted: #5a564c, primary: #232323, accent: #b13d2c, ink-grey: #8c8676, ink-wash: #3d3a33

## Visual Effects

Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds, Visible brush-stroke texture and ink-bleed edges, Deliberate negative space (ma) as a compositional element, Asymmetric, organic compositions with a single red seal (hanko) accent, shadow, blur

## AI Visual Direction

Sumi-e (Japanese Ink Wash), Monochrome black ink gradients (bokashi) on cream rice-paper backgrounds, Visible brush-stroke texture and ink-bleed edges, Deliberate negative space (ma) as a compositional element, Asymmetric, organic compositions with a single red seal (hanko) accent, Sesshu Toyo's landscape scrolls; Hasegawa Tohaku 'Pine Trees' screen.

## CSS Technical

```css
/* Sumi-e — design tokens */
/* 14th century–present | Traditional East Asian ink wash painting */
:root {
/* color */
--color-bg: #f4efe4;
--color-surface: #faf6ec;
--color-surface-2: #ede5d3;
--color-text: #1c1c1c;
--color-text-muted: #5a564c;
--color-primary: #232323;
--color-accent: #b13d2c;
--color-ink-grey: #8c8676;
--color-ink-wash: #3d3a33;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-ink-bleed: 0 6px 18px rgba(28,28,28,0.14);
--shadow-ink-bleed-sm: 0 2px 8px rgba(28,28,28,0.10);
/* font */
--font-sans: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif;
--font-display: 'Zen Old Mincho', 'Shippori Mincho', serif;
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
--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1);
/* extra: ink gradient + seal stamp */
--ink-gradient: linear-gradient(160deg, #232323 0%, #5a564c 55%, transparent 100%);
--seal-stamp: 0 0 0 2px #b13d2c;
}

/* ============================================================
Base component classes — Sumi-e
Signature move: one ink value graded from wet to dry (bokashi)
on a cream rice-paper ground, deliberate empty space (ma), and
a single red seal accent. Repeats on card, badge, and headings.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-bg);
border-bottom: 1px solid var(--color-ink-grey);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-ink-grey);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), border-color .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-ink-bleed-sm); border-color: var(--color-primary); }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--ink-gradient), var(--color-primary); background-blend-mode: normal;
color: var(--color-surface); border: 1px solid var(--color-primary); font-weight: 600;
}
.btn--primary:hover { box-shadow: var(--shadow-ink-bleed); }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-8) var(--space-6); border: none;
box-shadow: var(--shadow-ink-bleed-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-2); border-radius: 0;
background: transparent; border: none; border-bottom: 1px solid var(--color-ink-grey);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .35em .75em; border-radius: var(--radius-pill);
background: var(--color-accent); color: var(--color-surface);
box-shadow: var(--seal-stamp);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/sumi-e.md */
```

## Design System Variables

```css
--bg: #f4efe4, --fg: #1c1c1c, --accent: #232323, --surface: #faf6ec, --radius: 6px, --spacing: 16px, --font-display: 'Zen Old Mincho', 'Shippori Mincho', serif, --font-body: 'Shippori Mincho', 'Noto Serif JP', 'Zen Old Mincho', serif
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

[![Ukiyo-e](https://designmd.app/images/library/744.png) Claude Artisan · Movimentos históricos ### Ukiyo-e](https://designmd.app/library/ukiyo-e)[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)

Last synced: 8/30/2026
