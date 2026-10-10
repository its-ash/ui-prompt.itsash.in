# Y2K Futurism

- Source: <https://designmd.app/library/y2k-futurism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:03.301Z

Claude Artisan · Retrofuturismo & ficção especulativa1995–2004

# Y2K Futurism

Reference for retrofuturismo & ficção especulativa Y2K Futurism. Turn-of-millennium optimistic tech aesthetic.

Y2K FuturismY2Kmillennium bug aestheticcyber-y2kGlossy translucent 'blobjects' and chromeMetallic silver, icy blues, hot pink accentsBubble/inflatable UI, lens flares, starburstsTechno-optimism, iMac G3 / bubble techretrofuturism

Use case: grade modular responsiva; Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents

![Y2K Futurism](https://designmd.app/images/library/758.png)

## Historical Context

Turn-of-millennium optimistic tech aesthetic. Example: iMac G3; The Matrix marketing; early Windows XP era ads..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Y2K Futurism"
description: "Y2K Futurism visual system, translated from the Claude Artisan catalog for use in digital products. Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents"
colors:
primary: "#8ab6ff"
background: "#dfe9f5"
surface: "#ffffff"
text: "#1b2a4a"
accent: "#c0f0ff"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Michroma', 'Orbitron', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Michroma', 'Eurostile', 'Arial', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Michroma', 'Eurostile', 'Arial', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "18px"
lg: "999px"
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

Y2K Futurism visual system, translated from the Claude Artisan catalog for use in digital products. Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents

- **Category:** retrofuturism
- **Era:** 1995–2004
- **Origin:** Turn-of-millennium optimistic tech aesthetic.
- **Reference:** iMac G3; The Matrix marketing; early Windows XP era ads.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Glossy translucent 'blobjects' and chrome
- Metallic silver, icy blues, hot pink accents
- Bubble/inflatable UI, lens flares, starbursts
- Techno-optimism, iMac G3 / bubble tech

## Colors

- **bg** — #dfe9f5
- **surface** — #ffffff
- **text** — #1b2a4a
- **text-muted** — #5a6b8c
- **primary** — #8ab6ff
- **accent** — #c0f0ff
- **silver** — #c7d2df
- **lilac** — #d6c7ff
- **hotpink** — #ff8fd6

## Typography

- Display: 'Michroma', 'Orbitron', sans-serif
- Body: 'Michroma', 'Eurostile', 'Arial', sans-serif
- Mono: ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Glossy translucent 'blobjects' and chrome; Metallic silver, icy blues, hot pink accents; Bubble/inflatable UI, lens flares, starbursts; Techno-optimism, iMac G3 / bubble tech; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 18px, 999px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/y2k-futurism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Y2K Futurism — design tokens (generated from style_catalog.json) */
/* 1995–2004 | Turn-of-millennium optimistic tech aesthetic. */
:root {
/* color */
--color-bg: #dfe9f5;
--color-surface: #ffffff;
--color-text: #1b2a4a;
--color-text-muted: #5a6b8c;
--color-primary: #8ab6ff;
--color-accent: #c0f0ff;
--color-silver: #c7d2df;
--color-lilac: #d6c7ff;
--color-hotpink: #ff8fd6;
/* radius */
--radius-sm: 8px;
--radius-md: 18px;
--radius-lg: 999px;
--radius-pill: 999px;
/* shadow */
--shadow-bubble: inset 0 2px 6px rgba(255,255,255,0.9), 0 6px 14px rgba(120,160,220,0.4);
--shadow-chrome: inset 0 1px 0 #ffffff, inset 0 -3px 6px rgba(0,0,0,0.15);
/* font */
--font-sans: 'Michroma', 'Eurostile', 'Arial', sans-serif;
--font-display: 'Michroma', 'Orbitron', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra (signature gradients, composite borders, filters) */
--aqua-gel: linear-gradient(180deg, #ffffff 0%, #c0f0ff 45%, #8ab6ff 100%);
--chrome-metal: linear-gradient(180deg, #f4f8ff, #c7d2df 50%, #9fb0c4 51%, #eef3fb);
}

/* ============================================================
Base component classes — Y2K Futurism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/y2k-futurism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-bubble);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-bubble); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-bubble); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/y2k-futurism.md */
```

### Variables

```
--bg: #dfe9f5, --fg: #1b2a4a, --accent: #8ab6ff, --surface: #ffffff, --radius: 18px, --spacing: 16px, --font-display: 'Michroma', 'Orbitron', sans-serif, --font-body: 'Michroma', 'Eurostile', 'Arial', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#dfe9f5

#ffffff

#1b2a4a

#5a6b8c

Secondary

#8ab6ff

#c0f0ff

#c7d2df

#d6c7ff

#ff8fd6

### Effects

Glossy translucent 'blobjects' and chrome, Metallic silver, icy blues, hot pink accents, Bubble/inflatable UI, lens flares, starbursts, Techno-optimism, iMac G3 / bubble tech, shadow, blur

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

- **Name:** Y2K Futurism
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Y2K Futurism, Y2K, millennium bug aesthetic, cyber-y2k, Glossy translucent 'blobjects' and chrome, Metallic silver, icy blues, hot pink accents, Bubble/inflatable UI, lens flares, starbursts, Techno-optimism, iMac G3 / bubble tech, retrofuturism
- **Era:** 1995–2004
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #dfe9f5, surface: #ffffff, text: #1b2a4a, text-muted: #5a6b8c
- **Secondary:** primary: #8ab6ff, accent: #c0f0ff, silver: #c7d2df, lilac: #d6c7ff, hotpink: #ff8fd6

## Visual Effects

Glossy translucent 'blobjects' and chrome, Metallic silver, icy blues, hot pink accents, Bubble/inflatable UI, lens flares, starbursts, Techno-optimism, iMac G3 / bubble tech, shadow, blur

## AI Visual Direction

Y2K Futurism, Glossy translucent 'blobjects' and chrome, Metallic silver, icy blues, hot pink accents, Bubble/inflatable UI, lens flares, starbursts, Techno-optimism, iMac G3 / bubble tech, iMac G3; The Matrix marketing; early Windows XP era ads.

## CSS Technical

```css
/* Y2K Futurism — design tokens (generated from style_catalog.json) */
/* 1995–2004 | Turn-of-millennium optimistic tech aesthetic. */
:root {
/* color */
--color-bg: #dfe9f5;
--color-surface: #ffffff;
--color-text: #1b2a4a;
--color-text-muted: #5a6b8c;
--color-primary: #8ab6ff;
--color-accent: #c0f0ff;
--color-silver: #c7d2df;
--color-lilac: #d6c7ff;
--color-hotpink: #ff8fd6;
/* radius */
--radius-sm: 8px;
--radius-md: 18px;
--radius-lg: 999px;
--radius-pill: 999px;
/* shadow */
--shadow-bubble: inset 0 2px 6px rgba(255,255,255,0.9), 0 6px 14px rgba(120,160,220,0.4);
--shadow-chrome: inset 0 1px 0 #ffffff, inset 0 -3px 6px rgba(0,0,0,0.15);
/* font */
--font-sans: 'Michroma', 'Eurostile', 'Arial', sans-serif;
--font-display: 'Michroma', 'Orbitron', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra (signature gradients, composite borders, filters) */
--aqua-gel: linear-gradient(180deg, #ffffff 0%, #c0f0ff 45%, #8ab6ff 100%);
--chrome-metal: linear-gradient(180deg, #f4f8ff, #c7d2df 50%, #9fb0c4 51%, #eef3fb);
}

/* ============================================================
Base component classes — Y2K Futurism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/y2k-futurism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-bubble);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-bubble); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-bubble); cursor: pointer; border: 1px solid var(--color-border, transparent);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: transparent; }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 1px solid var(--color-border, transparent); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/y2k-futurism.md */
```

## Design System Variables

```css
--bg: #dfe9f5, --fg: #1b2a4a, --accent: #8ab6ff, --surface: #ffffff, --radius: 18px, --spacing: 16px, --font-display: 'Michroma', 'Orbitron', sans-serif, --font-body: 'Michroma', 'Eurostile', 'Arial', sans-serif
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

[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)[![Chromecore](https://designmd.app/images/library/597.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Chromecore](https://designmd.app/library/chromecore)

Last synced: 8/30/2026
