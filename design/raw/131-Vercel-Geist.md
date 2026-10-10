# Vercel Geist

- Source: <https://designmd.app/library/geist>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:44.307Z

Claude Artisan · Flat, material & plataformas2023–present

# Vercel Geist

Reference for flat, material & plataformas Vercel Geist. Vercel Geist design system + Geist typeface.

Vercel GeistGeistVercel designHigh-contrast black/white, precise geometryGeist Sans/Mono, tight gridSubtle gradients and grain accentsDeveloper-premium minimalismflat-platform

Use case: grade modular responsiva; High-contrast black/white, precise geometry; Geist Sans/Mono, tight grid

![Vercel Geist](https://designmd.app/images/library/645.png)

## Historical Context

Vercel Geist design system + Geist typeface. Example: Vercel.com; Next.js docs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Vercel Geist"
description: "Vercel Geist visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black/white, precise geometry; Geist Sans/Mono, tight grid"
colors:
primary: "#fafafa"
background: "#0a0a0a"
surface: "#111111"
text: "#fafafa"
accent: "#0072f5"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Geist', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif"
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

Vercel Geist visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black/white, precise geometry; Geist Sans/Mono, tight grid

- **Category:** flat-platform
- **Era:** 2023–present
- **Origin:** Vercel Geist design system + Geist typeface.
- **Reference:** Vercel.com; Next.js docs.
- **Structural base:** grade modular responsiva

**Defining traits:**
- High-contrast black/white, precise geometry
- Geist Sans/Mono, tight grid
- Subtle gradients and grain accents
- Developer-premium minimalism

## Colors

- **bg** — #0a0a0a
- **surface** — #111111
- **surface-strong** — #191919
- **border** — #2a2a2a
- **text** — #fafafa
- **text-muted** — #a1a1a1
- **primary** — #fafafa
- **accent** — #0072f5

## Typography

- Display: 'Geist', system-ui, sans-serif
- Body: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif
- Mono: 'Geist Mono', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- High-contrast black/white, precise geometry; Geist Sans/Mono, tight grid; Subtle gradients and grain accents; Developer-premium minimalism; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/geist/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Vercel Geist — design tokens */
/* 2023–present | Vercel Geist design system + Geist typeface, condensed */
:root {
/* color */
--color-bg: #0a0a0a;
--color-surface: #111111;
--color-surface-strong: #191919;
--color-border: #2a2a2a;
--color-text: #fafafa;
--color-text-muted: #a1a1a1;
--color-primary: #fafafa;
--color-accent: #0072f5;
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 4px 16px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Geist', system-ui, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: a razor-thin 1px hairline grid plus a faint radial grain — the
signature "precise geometry + grain accent" combination, repeated on
nav, card and btn borders so the whole page reads as one tight system */
--hairline: 1px solid var(--color-border);
--grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>");
}

/* ============================================================
Base component classes — geist
Signature move: a precise 1px hairline border (--hairline) on every
surface edge, plus a faint grain texture overlay — repeated on nav,
card and btn for the "developer-premium minimalism" read.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--grain-image);
background-size: 90px 90px;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-bg);
border-bottom: var(--hairline);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--hairline);
cursor: pointer; transition: background .16s var(--ease-standard), border-color .16s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); border-color: #3a3a3a; }
.btn:active { background: var(--color-surface); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #0a0a0a; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border: var(--hairline);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(0,114,245,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: var(--hairline); color: var(--color-text-muted); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/geist.md */
```

### Variables

```
--bg: #0a0a0a, --fg: #fafafa, --accent: #fafafa, --surface: #111111, --radius: 8px, --spacing: 16px, --font-display: 'Geist', system-ui, sans-serif, --font-body: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0a0a

#111111

#191919

#2a2a2a

Secondary

#fafafa

#a1a1a1

#0072f5

### Effects

High-contrast black/white, precise geometry, Geist Sans/Mono, tight grid, Subtle gradients and grain accents, Developer-premium minimalism, shadow

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

- **Name:** Vercel Geist
- **Type:** claude-artisan/flat-platform
- **Keywords:** Vercel Geist, Geist, Vercel design, High-contrast black/white, precise geometry, Geist Sans/Mono, tight grid, Subtle gradients and grain accents, Developer-premium minimalism, flat-platform
- **Era:** 2023–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0a0a, surface: #111111, surface-strong: #191919, border: #2a2a2a
- **Secondary:** text: #fafafa, text-muted: #a1a1a1, primary: #fafafa, accent: #0072f5

## Visual Effects

High-contrast black/white, precise geometry, Geist Sans/Mono, tight grid, Subtle gradients and grain accents, Developer-premium minimalism, shadow

## AI Visual Direction

Vercel Geist, High-contrast black/white, precise geometry, Geist Sans/Mono, tight grid, Subtle gradients and grain accents, Developer-premium minimalism, Vercel.com; Next.js docs.

## CSS Technical

```css
/* Vercel Geist — design tokens */
/* 2023–present | Vercel Geist design system + Geist typeface, condensed */
:root {
/* color */
--color-bg: #0a0a0a;
--color-surface: #111111;
--color-surface-strong: #191919;
--color-border: #2a2a2a;
--color-text: #fafafa;
--color-text-muted: #a1a1a1;
--color-primary: #fafafa;
--color-accent: #0072f5;
/* radius */
--radius-sm: 6px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.5);
--shadow-md: 0 4px 16px rgba(0,0,0,0.55);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.6);
/* font */
--font-sans: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Geist', system-ui, sans-serif;
--font-mono: 'Geist Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: a razor-thin 1px hairline grid plus a faint radial grain — the
signature "precise geometry + grain accent" combination, repeated on
nav, card and btn borders so the whole page reads as one tight system */
--hairline: 1px solid var(--color-border);
--grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='90' height='90'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/></svg>");
}

/* ============================================================
Base component classes — geist
Signature move: a precise 1px hairline border (--hairline) on every
surface edge, plus a faint grain texture overlay — repeated on nav,
card and btn for the "developer-premium minimalism" read.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--grain-image);
background-size: 90px 90px;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-bg);
border-bottom: var(--hairline);
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--hairline);
cursor: pointer; transition: background .16s var(--ease-standard), border-color .16s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); border-color: #3a3a3a; }
.btn:active { background: var(--color-surface); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #0a0a0a; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border: var(--hairline);
border-radius: var(--radius-lg); box-shadow: var(--shadow-sm); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(0,114,245,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: var(--hairline); color: var(--color-text-muted); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/geist.md */
```

## Design System Variables

```css
--bg: #0a0a0a, --fg: #fafafa, --accent: #fafafa, --surface: #111111, --radius: 8px, --spacing: 16px, --font-display: 'Geist', system-ui, sans-serif, --font-body: 'Geist', 'Geist Sans', system-ui, -apple-system, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![shadcn/ui (New York)](https://designmd.app/images/library/715.png) Claude Artisan · Flat, material & plataformas ### shadcn/ui (New York)](https://designmd.app/library/shadcn-ui)[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)

Last synced: 8/30/2026
