# Quiet Luxury / Old Money

- Source: <https://designmd.app/library/quiet-luxury>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:32.303Z

Claude Artisan · Subculturas & estéticas de nicho2022–present

# Quiet Luxury / Old Money

Reference for subculturas & estéticas de nicho Quiet Luxury / Old Money. Anti-logo luxury minimalism (post-'Succession').

Quiet Luxury / Old Moneyold moneystealth wealthUnderstated neutral tones: camel, cream, navyNo visible branding; quality materialsSerif type, restrained eleganceTimeless, expensive-looking calmniche

Use case: superfície material com conteúdo em camadas; Understated neutral tones: camel, cream, navy; No visible branding; quality materials

![Quiet Luxury / Old Money](https://designmd.app/images/library/706.png)

## Historical Context

Anti-logo luxury minimalism (post-'Succession'). Example: 'Succession' costuming; Loro Piana-adjacent..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Quiet Luxury / Old Money"
description: "Quiet Luxury / Old Money visual system, translated from the Claude Artisan catalog for use in digital products. Understated neutral tones: camel, cream, navy; No visible branding; quality materials"
colors:
primary: "#1f2a44"
background: "#f6f2e9"
surface: "#fffdf8"
text: "#2a2620"
accent: "#a9825c"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Canela', 'Times New Roman', Georgia, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "6px"
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

Quiet Luxury / Old Money visual system, translated from the Claude Artisan catalog for use in digital products. Understated neutral tones: camel, cream, navy; No visible branding; quality materials

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Anti-logo luxury minimalism (post-'Succession').
- **Reference:** 'Succession' costuming; Loro Piana-adjacent.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Understated neutral tones: camel, cream, navy
- No visible branding; quality materials
- Serif type, restrained elegance
- Timeless, expensive-looking calm

## Colors

- **bg** — #f6f2e9
- **surface** — #fffdf8
- **surface-strong** — #ece3d1
- **border** — #d9cdad
- **text** — #2a2620
- **text-muted** — #6b6153
- **primary** — #1f2a44
- **accent** — #a9825c
- **hairline** — #b8a575

## Typography

- Display: 'Canela', 'Times New Roman', Georgia, serif
- Body: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Understated neutral tones: camel, cream, navy; No visible branding; quality materials; Serif type, restrained elegance; Timeless, expensive-looking calm; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/quiet-luxury/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Quiet Luxury / Old Money — design tokens */
/* 2022–present | Anti-logo luxury minimalism (post-'Succession'), condensed */
:root {
/* color */
--color-bg: #f6f2e9;
--color-surface: #fffdf8;
--color-surface-strong: #ece3d1;
--color-border: #d9cdad;
--color-text: #2a2620;
--color-text-muted: #6b6153;
--color-primary: #1f2a44;
--color-accent: #a9825c;
--color-hairline: #b8a575;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(42, 38, 32, 0.06);
--shadow-md: 0 4px 12px rgba(42, 38, 32, 0.08);
--shadow-lg: 0 12px 28px rgba(42, 38, 32, 0.10);
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Canela', 'Times New Roman', Georgia, serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a single restrained hairline in muted gold, repeated as the only ornament */
--hairline: 1px solid var(--color-hairline);
--letterspace-label: 0.08em;
}

/* ============================================================
Base component classes — Quiet Luxury
Signature move: one thin, muted-gold hairline as the sole ornament
(never a heavy border, never a shadow that shouts) repeated on nav,
card, and input; small-caps serif labels; no visible branding weight.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border-bottom: var(--hairline); }
.btn {
font: 500 var(--text-sm)/1 var(--font-sans); letter-spacing: var(--letterspace-label);
text-transform: uppercase; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .2s var(--ease-standard), color .2s var(--ease-standard);
}
.btn:hover { border-color: var(--color-hairline); color: var(--color-primary); }
.btn:active { transform: translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f6f2e9; border-color: var(--color-primary); }
.btn--primary:hover { background: #172038; }
.card { background: var(--color-surface); color: var(--color-text);
border: var(--hairline); border-radius: var(--radius-md);
box-shadow: var(--shadow-sm); padding: var(--space-8); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border: none; border-bottom: var(--hairline);
border-radius: 0; }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
letter-spacing: var(--letterspace-label); text-transform: uppercase;
padding: .35em .9em; border-radius: var(--radius-pill); color: var(--color-text-muted);
border: 1px solid var(--color-border); background: transparent; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/quiet-luxury.md */
```

### Variables

```
--bg: #f6f2e9, --fg: #2a2620, --accent: #1f2a44, --surface: #fffdf8, --radius: 4px, --spacing: 16px, --font-display: 'Canela', 'Times New Roman', Georgia, serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f6f2e9

#fffdf8

#ece3d1

#d9cdad

Secondary

#2a2620

#6b6153

#1f2a44

#a9825c

#b8a575

### Effects

Understated neutral tones: camel, cream, navy, No visible branding; quality materials, Serif type, restrained elegance, Timeless, expensive-looking calm, shadow

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

- **Name:** Quiet Luxury / Old Money
- **Type:** claude-artisan/niche
- **Keywords:** Quiet Luxury / Old Money, old money, stealth wealth, Understated neutral tones: camel, cream, navy, No visible branding; quality materials, Serif type, restrained elegance, Timeless, expensive-looking calm, niche
- **Era:** 2022–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f6f2e9, surface: #fffdf8, surface-strong: #ece3d1, border: #d9cdad
- **Secondary:** text: #2a2620, text-muted: #6b6153, primary: #1f2a44, accent: #a9825c, hairline: #b8a575

## Visual Effects

Understated neutral tones: camel, cream, navy, No visible branding; quality materials, Serif type, restrained elegance, Timeless, expensive-looking calm, shadow

## AI Visual Direction

Quiet Luxury / Old Money, Understated neutral tones: camel, cream, navy, No visible branding; quality materials, Serif type, restrained elegance, Timeless, expensive-looking calm, 'Succession' costuming; Loro Piana-adjacent.

## CSS Technical

```css
/* Quiet Luxury / Old Money — design tokens */
/* 2022–present | Anti-logo luxury minimalism (post-'Succession'), condensed */
:root {
/* color */
--color-bg: #f6f2e9;
--color-surface: #fffdf8;
--color-surface-strong: #ece3d1;
--color-border: #d9cdad;
--color-text: #2a2620;
--color-text-muted: #6b6153;
--color-primary: #1f2a44;
--color-accent: #a9825c;
--color-hairline: #b8a575;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(42, 38, 32, 0.06);
--shadow-md: 0 4px 12px rgba(42, 38, 32, 0.08);
--shadow-lg: 0 12px 28px rgba(42, 38, 32, 0.10);
/* font */
--font-sans: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Canela', 'Times New Roman', Georgia, serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a single restrained hairline in muted gold, repeated as the only ornament */
--hairline: 1px solid var(--color-hairline);
--letterspace-label: 0.08em;
}

/* ============================================================
Base component classes — Quiet Luxury
Signature move: one thin, muted-gold hairline as the sole ornament
(never a heavy border, never a shadow that shouts) repeated on nav,
card, and input; small-caps serif labels; no visible branding weight.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-6); align-items: center;
padding: var(--space-4) var(--space-8); background: var(--color-surface);
border-bottom: var(--hairline); }
.btn {
font: 500 var(--text-sm)/1 var(--font-sans); letter-spacing: var(--letterspace-label);
text-transform: uppercase; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .2s var(--ease-standard), color .2s var(--ease-standard);
}
.btn:hover { border-color: var(--color-hairline); color: var(--color-primary); }
.btn:active { transform: translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #f6f2e9; border-color: var(--color-primary); }
.btn--primary:hover { background: #172038; }
.card { background: var(--color-surface); color: var(--color-text);
border: var(--hairline); border-radius: var(--radius-md);
box-shadow: var(--shadow-sm); padding: var(--space-8); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface); border: none; border-bottom: var(--hairline);
border-radius: 0; }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-primary); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
letter-spacing: var(--letterspace-label); text-transform: uppercase;
padding: .35em .9em; border-radius: var(--radius-pill); color: var(--color-text-muted);
border: 1px solid var(--color-border); background: transparent; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/quiet-luxury.md */
```

## Design System Variables

```css
--bg: #f6f2e9, --fg: #2a2620, --accent: #1f2a44, --surface: #fffdf8, --radius: 4px, --spacing: 16px, --font-display: 'Canela', 'Times New Roman', Georgia, serif, --font-body: 'Neue Haas Grotesk', 'Helvetica Neue', system-ui, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Scandinavian / Nordic](https://designmd.app/images/library/712.png) Claude Artisan · Minimal, maximal & orgânico ### Scandinavian / Nordic](https://designmd.app/library/scandinavian)

Last synced: 8/30/2026
