# Linear Style

- Source: <https://designmd.app/library/linear-dark>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:27.302Z

Claude Artisan · Flat, material & plataformas2020–present

# Linear Style

Reference for flat, material & plataformas Linear Style. Linear (issue tracker) product aesthetic.

Linear StyleLinear app styleproduct dark gradientDark UI with subtle purple/blue gradientsCrisp small type, hairline bordersGlow accents, fast micro-interactionsRefined, fast, premium SaaSflat-platform

Use case: shell de aplicação com navegação e cartões; Dark UI with subtle purple/blue gradients; Crisp small type, hairline borders

![Linear Style](https://designmd.app/images/library/670.png)

## Historical Context

Linear (issue tracker) product aesthetic. Example: Linear.app; many 2020s dev-tool sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Linear Style"
description: "Linear Style visual system, translated from the Claude Artisan catalog for use in digital products. Dark UI with subtle purple/blue gradients; Crisp small type, hairline borders"
colors:
primary: "#5e6ad2"
background: "#08090a"
surface: "#101113"
text: "#f7f8f8"
accent: "#4ea7fc"
on-primary: "#FFFFFF"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "8px"
lg: "12px"
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

Linear Style visual system, translated from the Claude Artisan catalog for use in digital products. Dark UI with subtle purple/blue gradients; Crisp small type, hairline borders

- **Category:** flat-platform
- **Era:** 2020–present
- **Origin:** Linear (issue tracker) product aesthetic.
- **Reference:** Linear.app; many 2020s dev-tool sites.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Dark UI with subtle purple/blue gradients
- Crisp small type, hairline borders
- Glow accents, fast micro-interactions
- Refined, fast, premium SaaS

## Colors

- **bg** — #08090a
- **surface** — #101113
- **surface-strong** — #17181b
- **border** — rgba(255,255,255,0.09)
- **text** — #f7f8f8
- **text-muted** — #8a8f98
- **primary** — #5e6ad2
- **accent** — #4ea7fc
- **glow** — rgba(94,106,210,0.5)

## Typography

- Display: 'Inter', system-ui, sans-serif
- Body: 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'Berkeley Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark UI with subtle purple/blue gradients; Crisp small type, hairline borders; Glow accents, fast micro-interactions; Refined, fast, premium SaaS; sombras e elevação

## Shapes

- Radius scale: 6px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/linear-dark/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Linear Style — design tokens */
/* 2020–present | Linear (issue tracker) product aesthetic, condensed */
:root {
/* color */
--color-bg: #08090a;
--color-surface: #101113;
--color-surface-strong: #17181b;
--color-border: rgba(255,255,255,0.09);
--color-text: #f7f8f8;
--color-text-muted: #8a8f98;
--color-primary: #5e6ad2;
--color-accent: #4ea7fc;
--color-glow: rgba(94,106,210,0.5);
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 4px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'Berkeley Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.9375rem;
--text-lg: 1.0625rem;
--text-xl: 1.25rem;
--text-2xl: 1.625rem;
--text-3xl: 2.125rem;
--text-4xl: 2.75rem;
--text-5xl: 3.75rem;
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
/* extra: subtle radial indigo glow + hairline borders are the signature move */
--bg-image: radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%), var(--color-bg);
}

/* ============================================================
Base component classes — Linear style
Signature move: near-invisible 1px hairline borders on every surface,
plus a soft indigo glow that appears behind the primary action on
hover — crisp, dark, premium SaaS repeated on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); font-size: var(--text-base);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { border-color: rgba(255,255,255,0.18); box-shadow: var(--shadow-sm); }
.btn:active { background: var(--color-surface); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { box-shadow: 0 0 0 4px var(--color-glow); border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px var(--color-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 500;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/linear-dark.md */
```

### Variables

```
--bg: #08090a, --fg: #f7f8f8, --accent: #5e6ad2, --surface: #101113, --radius: 8px, --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#08090a

#101113

#17181b

Secondary

#f7f8f8

#8a8f98

#5e6ad2

#4ea7fc

### Effects

Dark UI with subtle purple/blue gradients, Crisp small type, hairline borders, Glow accents, fast micro-interactions, Refined, fast, premium SaaS, shadow

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

- **Name:** Linear Style
- **Type:** claude-artisan/flat-platform
- **Keywords:** Linear Style, Linear app style, product dark gradient, Dark UI with subtle purple/blue gradients, Crisp small type, hairline borders, Glow accents, fast micro-interactions, Refined, fast, premium SaaS, flat-platform
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #08090a, surface: #101113, surface-strong: #17181b, border: rgba(255,255,255,0.09)
- **Secondary:** text: #f7f8f8, text-muted: #8a8f98, primary: #5e6ad2, accent: #4ea7fc, glow: rgba(94,106,210,0.5)

## Visual Effects

Dark UI with subtle purple/blue gradients, Crisp small type, hairline borders, Glow accents, fast micro-interactions, Refined, fast, premium SaaS, shadow

## AI Visual Direction

Linear Style, Dark UI with subtle purple/blue gradients, Crisp small type, hairline borders, Glow accents, fast micro-interactions, Refined, fast, premium SaaS, Linear.app; many 2020s dev-tool sites.

## CSS Technical

```css
/* Linear Style — design tokens */
/* 2020–present | Linear (issue tracker) product aesthetic, condensed */
:root {
/* color */
--color-bg: #08090a;
--color-surface: #101113;
--color-surface-strong: #17181b;
--color-border: rgba(255,255,255,0.09);
--color-text: #f7f8f8;
--color-text-muted: #8a8f98;
--color-primary: #5e6ad2;
--color-accent: #4ea7fc;
--color-glow: rgba(94,106,210,0.5);
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 4px 16px rgba(0,0,0,0.5);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'Berkeley Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.9375rem;
--text-lg: 1.0625rem;
--text-xl: 1.25rem;
--text-2xl: 1.625rem;
--text-3xl: 2.125rem;
--text-4xl: 2.75rem;
--text-5xl: 3.75rem;
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
/* extra: subtle radial indigo glow + hairline borders are the signature move */
--bg-image: radial-gradient(60% 45% at 50% -5%, rgba(94,106,210,0.18) 0%, transparent 60%), var(--color-bg);
}

/* ============================================================
Base component classes — Linear style
Signature move: near-invisible 1px hairline borders on every surface,
plus a soft indigo glow that appears behind the primary action on
hover — crisp, dark, premium SaaS repeated on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); font-size: var(--text-base);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: border-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { border-color: rgba(255,255,255,0.18); box-shadow: var(--shadow-sm); }
.btn:active { background: var(--color-surface); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { box-shadow: 0 0 0 4px var(--color-glow); border-color: var(--color-primary); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px var(--color-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 500;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/linear-dark.md */
```

## Design System Variables

```css
--bg: #08090a, --fg: #f7f8f8, --accent: #5e6ad2, --surface: #101113, --radius: 8px, --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
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

[![Dark Mode](https://designmd.app/images/library/618.png) Claude Artisan · Minimal, maximal & orgânico ### Dark Mode](https://designmd.app/library/dark-mode)[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)[![Vercel Geist](https://designmd.app/images/library/645.png) Claude Artisan · Flat, material & plataformas ### Vercel Geist](https://designmd.app/library/geist)

Last synced: 8/30/2026
