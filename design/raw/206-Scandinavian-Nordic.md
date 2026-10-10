# Scandinavian / Nordic

- Source: <https://designmd.app/library/scandinavian>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:44.304Z

Claude Artisan · Minimal, maximal & orgânico1930s–present

# Scandinavian / Nordic

Reference for minimal, maximal & orgânico Scandinavian / Nordic. Nordic modernism (Alvar Aalto, Arne Jacobsen).

Scandinavian / NordicNordic designhyggeWarm minimalism: light woods, soft neutralsFunctional, cozy (hygge), unclutteredNatural materials and muted accentsHuman-centered simplicityminimal-organic

Use case: superfície material com conteúdo em camadas; Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered

![Scandinavian / Nordic](https://designmd.app/images/library/712.png)

## Historical Context

Nordic modernism (Alvar Aalto, Arne Jacobsen). Example: IKEA; Muuto; HAY..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Scandinavian / Nordic"
description: "Scandinavian / Nordic visual system, translated from the Claude Artisan catalog for use in digital products. Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered"
colors:
primary: "#3a5a40"
background: "#f7f4ef"
surface: "#ffffff"
text: "#2b2b2b"
accent: "#c98a6a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fraunces', 'Poppins', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Work Sans', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Work Sans', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "12px"
lg: "20px"
spacing:
sm: "16px"
md: "32px"
lg: "64px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "32px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "32px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "48px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "32px"
---
## Overview

Scandinavian / Nordic visual system, translated from the Claude Artisan catalog for use in digital products. Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered

- **Category:** minimal-organic
- **Era:** 1930s–present
- **Origin:** Nordic modernism (Alvar Aalto, Arne Jacobsen).
- **Reference:** IKEA; Muuto; HAY.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Warm minimalism: light woods, soft neutrals
- Functional, cozy (hygge), uncluttered
- Natural materials and muted accents
- Human-centered simplicity

## Colors

- **bg** — #f7f4ef
- **surface** — #ffffff
- **surface-2** — #efe9e1
- **text** — #2b2b2b
- **text-muted** — #6f6a63
- **primary** — #3a5a40
- **accent** — #c98a6a
- **sky** — #a8c5d6
- **wood** — #d8b8a0

## Typography

- Display: 'Fraunces', 'Poppins', serif
- Body: 'Poppins', 'Work Sans', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warm minimalism: light woods, soft neutrals; Functional, cozy (hygge), uncluttered; Natural materials and muted accents; Human-centered simplicity; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/scandinavian/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Scandinavian / Nordic — design tokens (generated from style_catalog.json) */
/* 1930s–present | Nordic modernism (Alvar Aalto, Arne Jacobsen). */
:root {
/* color */
--color-bg: #f7f4ef;
--color-surface: #ffffff;
--color-surface-2: #efe9e1;
--color-text: #2b2b2b;
--color-text-muted: #6f6a63;
--color-primary: #3a5a40;
--color-accent: #c98a6a;
--color-sky: #a8c5d6;
--color-wood: #d8b8a0;
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-soft: 0 6px 20px rgba(43,43,43,0.06);
/* font */
--font-sans: 'Poppins', 'Work Sans', system-ui, sans-serif;
--font-display: 'Fraunces', 'Poppins', serif;
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
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 128px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--hairline: 1px solid #e4ddd2;
}

/* ============================================================
Base component classes — Scandinavian / Nordic (token-driven).
Signature move lives in references/00-flagship-implementation-specs/scandinavian.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-soft);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-soft); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-soft); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/scandinavian.md */
```

### Variables

```
--bg: #f7f4ef, --fg: #2b2b2b, --accent: #3a5a40, --surface: #ffffff, --radius: 12px, --spacing: 32px, --font-display: 'Fraunces', 'Poppins', serif, --font-body: 'Poppins', 'Work Sans', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f4ef

#ffffff

#efe9e1

#2b2b2b

Secondary

#6f6a63

#3a5a40

#c98a6a

#a8c5d6

#d8b8a0

### Effects

Warm minimalism: light woods, soft neutrals, Functional, cozy (hygge), uncluttered, Natural materials and muted accents, Human-centered simplicity, shadow, blur

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

- **Name:** Scandinavian / Nordic
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Scandinavian / Nordic, Nordic design, hygge, Warm minimalism: light woods, soft neutrals, Functional, cozy (hygge), uncluttered, Natural materials and muted accents, Human-centered simplicity, minimal-organic
- **Era:** 1930s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f4ef, surface: #ffffff, surface-2: #efe9e1, text: #2b2b2b
- **Secondary:** text-muted: #6f6a63, primary: #3a5a40, accent: #c98a6a, sky: #a8c5d6, wood: #d8b8a0

## Visual Effects

Warm minimalism: light woods, soft neutrals, Functional, cozy (hygge), uncluttered, Natural materials and muted accents, Human-centered simplicity, shadow, blur

## AI Visual Direction

Scandinavian / Nordic, Warm minimalism: light woods, soft neutrals, Functional, cozy (hygge), uncluttered, Natural materials and muted accents, Human-centered simplicity, IKEA; Muuto; HAY.

## CSS Technical

```css
/* Scandinavian / Nordic — design tokens (generated from style_catalog.json) */
/* 1930s–present | Nordic modernism (Alvar Aalto, Arne Jacobsen). */
:root {
/* color */
--color-bg: #f7f4ef;
--color-surface: #ffffff;
--color-surface-2: #efe9e1;
--color-text: #2b2b2b;
--color-text-muted: #6f6a63;
--color-primary: #3a5a40;
--color-accent: #c98a6a;
--color-sky: #a8c5d6;
--color-wood: #d8b8a0;
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-soft: 0 6px 20px rgba(43,43,43,0.06);
/* font */
--font-sans: 'Poppins', 'Work Sans', system-ui, sans-serif;
--font-display: 'Fraunces', 'Poppins', serif;
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
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
--space-12: 96px;
--space-16: 128px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra (signature gradients, composite borders, filters) */
--hairline: 1px solid #e4ddd2;
}

/* ============================================================
Base component classes — Scandinavian / Nordic (token-driven).
Signature move lives in references/00-flagship-implementation-specs/scandinavian.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-soft);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-soft); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-soft); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #ffffff; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/scandinavian.md */
```

## Design System Variables

```css
--bg: #f7f4ef, --fg: #2b2b2b, --accent: #3a5a40, --surface: #ffffff, --radius: 12px, --spacing: 32px, --font-display: 'Fraunces', 'Poppins', serif, --font-body: 'Poppins', 'Work Sans', system-ui, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)[![Mid-Century Modern](https://designmd.app/images/library/327.png) Retro & Pop ### Mid-Century Modern](https://designmd.app/library/mid-century-modern)

Last synced: 8/30/2026
