# Formicapunk

- Source: <https://designmd.app/library/formicapunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:38.311Z

Claude Artisan · Retrofuturismo & ficção especulativa2010s (evokes 1980s)

# Formicapunk

Reference for retrofuturismo & ficção especulativa Formicapunk. Neon-lit 1980s corporate/consumer futurism.

Formicapunk1980s corporate futurismFormica, neon, geometric 80s corporate styleMiami-Vice pastels + chromeGrid patterns, glass towersOptimistic 80s consumer futureretrofuturism

Use case: grade modular responsiva; Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome

![Formicapunk](https://designmd.app/images/library/641.png)

## Historical Context

Neon-lit 1980s corporate/consumer futurism. Example: Miami Vice; 80s corporate design..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Formicapunk"
description: "Formicapunk visual system, translated from the Claude Artisan catalog for use in digital products. Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome"
colors:
primary: "#ff5fa2"
background: "#170f2e"
surface: "#241a44"
text: "#f4eefe"
accent: "#2fe6d8"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Formicapunk visual system, translated from the Claude Artisan catalog for use in digital products. Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome

- **Category:** retrofuturism
- **Era:** 2010s (evokes 1980s)
- **Origin:** Neon-lit 1980s corporate/consumer futurism.
- **Reference:** Miami Vice; 80s corporate design.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Formica, neon, geometric 80s corporate style
- Miami-Vice pastels + chrome
- Grid patterns, glass towers
- Optimistic 80s consumer future

## Colors

- **bg** — #170f2e
- **surface** — #241a44
- **surface-strong** — #2e2158
- **border** — #5b4b96
- **text** — #f4eefe
- **text-muted** — #b6a7dd
- **primary** — #ff5fa2
- **accent** — #2fe6d8
- **chrome** — #c9c3e0

## Typography

- Display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif
- Body: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif
- Mono: 'Space Mono', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Formica, neon, geometric 80s corporate style; Miami-Vice pastels + chrome; Grid patterns, glass towers; Optimistic 80s consumer future; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/formicapunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Formicapunk — design tokens */
/* 2010s (evokes 1980s) | Neon-lit 1980s corporate/consumer futurism, condensed */
:root {
/* color */
--color-bg: #170f2e;
--color-surface: #241a44;
--color-surface-strong: #2e2158;
--color-border: #5b4b96;
--color-text: #f4eefe;
--color-text-muted: #b6a7dd;
--color-primary: #ff5fa2;
--color-accent: #2fe6d8;
--color-chrome: #c9c3e0;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 1px rgba(255,95,162,0.3), 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 0 18px rgba(255,95,162,0.35), 0 8px 24px rgba(0,0,0,0.5);
--shadow-lg: 0 0 32px rgba(47,230,216,0.3), 0 16px 40px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif;
--font-display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif;
--font-mono: 'Space Mono', ui-monospace, monospace;
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
/* extra: a neon Miami-sunset gradient plus a fine perspective grid,
the two signature moves of 80s corporate-futurism, repeated across
the page background and every raised surface's border glow */
--bg-image: linear-gradient(180deg, #170f2e 0%, #291a4e 55%, #170f2e 100%);
--grid-lines: repeating-linear-gradient(90deg, rgba(47,230,216,0.08) 0 1px, transparent 1px 40px),
repeating-linear-gradient(0deg, rgba(255,95,162,0.06) 0 1px, transparent 1px 40px);
--neon-edge: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — formicapunk
Signature move: a neon pink-to-cyan gradient edge (--neon-edge) used as a
top border/underline, plus a faint perspective grid (--grid-lines) behind
surfaces — repeated on nav, card and btn for that Miami-Vice glass-tower feel.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image), var(--grid-lines), var(--color-bg);
min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid; border-image: var(--neon-edge) 1;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-image: var(--neon-edge); background-color: transparent; color: #170f2e; border-color: transparent; }
.card {
background: var(--color-surface); border-top: 3px solid transparent;
border-image: var(--neon-edge) 1; border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(47,230,216,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #0c1f1c; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/formicapunk.md */
```

### Variables

```
--bg: #170f2e, --fg: #f4eefe, --accent: #ff5fa2, --surface: #241a44, --radius: 4px, --spacing: 16px, --font-display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif, --font-body: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#170f2e

#241a44

#2e2158

#5b4b96

Secondary

#f4eefe

#b6a7dd

#ff5fa2

#2fe6d8

#c9c3e0

### Effects

Formica, neon, geometric 80s corporate style, Miami-Vice pastels + chrome, Grid patterns, glass towers, Optimistic 80s consumer future, shadow

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

- **Name:** Formicapunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Formicapunk, 1980s corporate futurism, Formica, neon, geometric 80s corporate style, Miami-Vice pastels + chrome, Grid patterns, glass towers, Optimistic 80s consumer future, retrofuturism
- **Era:** 2010s (evokes 1980s)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #170f2e, surface: #241a44, surface-strong: #2e2158, border: #5b4b96
- **Secondary:** text: #f4eefe, text-muted: #b6a7dd, primary: #ff5fa2, accent: #2fe6d8, chrome: #c9c3e0

## Visual Effects

Formica, neon, geometric 80s corporate style, Miami-Vice pastels + chrome, Grid patterns, glass towers, Optimistic 80s consumer future, shadow

## AI Visual Direction

Formicapunk, Formica, neon, geometric 80s corporate style, Miami-Vice pastels + chrome, Grid patterns, glass towers, Optimistic 80s consumer future, Miami Vice; 80s corporate design.

## CSS Technical

```css
/* Formicapunk — design tokens */
/* 2010s (evokes 1980s) | Neon-lit 1980s corporate/consumer futurism, condensed */
:root {
/* color */
--color-bg: #170f2e;
--color-surface: #241a44;
--color-surface-strong: #2e2158;
--color-border: #5b4b96;
--color-text: #f4eefe;
--color-text-muted: #b6a7dd;
--color-primary: #ff5fa2;
--color-accent: #2fe6d8;
--color-chrome: #c9c3e0;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 1px rgba(255,95,162,0.3), 0 2px 8px rgba(0,0,0,0.4);
--shadow-md: 0 0 18px rgba(255,95,162,0.35), 0 8px 24px rgba(0,0,0,0.5);
--shadow-lg: 0 0 32px rgba(47,230,216,0.3), 0 16px 40px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif;
--font-display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif;
--font-mono: 'Space Mono', ui-monospace, monospace;
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
/* extra: a neon Miami-sunset gradient plus a fine perspective grid,
the two signature moves of 80s corporate-futurism, repeated across
the page background and every raised surface's border glow */
--bg-image: linear-gradient(180deg, #170f2e 0%, #291a4e 55%, #170f2e 100%);
--grid-lines: repeating-linear-gradient(90deg, rgba(47,230,216,0.08) 0 1px, transparent 1px 40px),
repeating-linear-gradient(0deg, rgba(255,95,162,0.06) 0 1px, transparent 1px 40px);
--neon-edge: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — formicapunk
Signature move: a neon pink-to-cyan gradient edge (--neon-edge) used as a
top border/underline, plus a faint perspective grid (--grid-lines) behind
surfaces — repeated on nav, card and btn for that Miami-Vice glass-tower feel.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image), var(--grid-lines), var(--color-bg);
min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid; border-image: var(--neon-edge) 1;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer; text-transform: uppercase;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-image: var(--neon-edge); background-color: transparent; color: #170f2e; border-color: transparent; }
.card {
background: var(--color-surface); border-top: 3px solid transparent;
border-image: var(--neon-edge) 1; border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(47,230,216,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #0c1f1c; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/formicapunk.md */
```

## Design System Variables

```css
--bg: #170f2e, --fg: #f4eefe, --accent: #ff5fa2, --surface: #241a44, --radius: 4px, --spacing: 16px, --font-display: 'Eurostile Extended', 'Bank Gothic', 'Arial Narrow', sans-serif, --font-body: 'Eurostile', 'Avenir Next', 'Century Gothic', sans-serif
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

[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)

Last synced: 8/30/2026
