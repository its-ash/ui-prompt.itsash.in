# Populuxe

- Source: <https://designmd.app/library/populuxe>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:19.324Z

Claude Artisan · Movimentos históricos1950s–early 1960s

# Populuxe

Reference for movimentos históricos Populuxe. Postwar American consumer design — the optimistic mass-market graphic language of appliance ads, diner menus, and car showrooms during the atomic-age boom (term coined by Thomas Hine).

Populuxeatomic populuxejet-age consumer styleboomerang modernTwo-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silverAtomic starburst and boomerang accent shapes used sparingly as optimistic punctuationBold italic wedge-shaped display type evoking tailfins and forward motionhistorical

Use case: composição editorial com grade tipográfica; Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation

![Populuxe](https://designmd.app/images/library/699.png)

## Historical Context

Postwar American consumer design — the optimistic mass-market graphic language of appliance ads, diner menus, and car showrooms during the atomic-age boom (term coined by Thomas Hine). Example: 1950s Frigidaire and Chevrolet print ads; Googie coffee-shop signage; boomerang-pattern Formica..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Populuxe"
description: "Populuxe visual system, translated from the Claude Artisan catalog for use in digital products. Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation"
colors:
primary: "#ff6f61"
background: "#f4ede0"
surface: "#fffaf3"
text: "#2b2320"
accent: "#1fb5a3"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "Futura, Century Gothic, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Futura, Century Gothic, Trebuchet MS, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Futura, Century Gothic, Trebuchet MS, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "10px"
lg: "20px"
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

Populuxe visual system, translated from the Claude Artisan catalog for use in digital products. Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation

- **Category:** historical
- **Era:** 1950s–early 1960s
- **Origin:** Postwar American consumer design — the optimistic mass-market graphic language of appliance ads, diner menus, and car showrooms during the atomic-age boom (term coined by Thomas Hine).
- **Reference:** 1950s Frigidaire and Chevrolet print ads; Googie coffee-shop signage; boomerang-pattern Formica.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver
- Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation
- Bold italic wedge-shaped display type evoking tailfins and forward motion

## Colors

- **bg** — #f4ede0
- **surface** — #fffaf3
- **surface-2** — #ffe3ec
- **text** — #2b2320
- **text-muted** — #6b5f56
- **primary** — #ff6f61
- **accent** — #1fb5a3
- **chrome** — #c8ccd0
- **gold** — #d4af37

## Typography

- Display: Futura, Century Gothic, sans-serif
- Body: Futura, Century Gothic, Trebuchet MS, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver; Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation; Bold italic wedge-shaped display type evoking tailfins and forward motion; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 10px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/populuxe/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Populuxe — design tokens */
/* 1950s–early 1960s | Two-tone pastel-and-chrome atomic-age consumer optimism */
:root {
/* color */
--color-bg: #f4ede0;
--color-surface: #fffaf3;
--color-surface-2: #ffe3ec;
--color-text: #2b2320;
--color-text-muted: #6b5f56;
--color-primary: #ff6f61;
--color-accent: #1fb5a3;
--color-chrome: #c8ccd0;
--color-gold: #d4af37;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-chrome: 0 0 0 1px #ffffff, 0 0 0 2px var(--color-chrome), 0 8px 20px rgba(43,35,32,0.18);
--shadow-starburst: 0 10px 24px rgba(255,111,97,0.25);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
--font-display: 'Futura', 'Century Gothic', sans-serif;
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
/* extra: starburst motif + boomerang sweep */
--starburst: conic-gradient(from 0deg, var(--color-primary) 0 6deg, transparent 6deg 30deg, var(--color-accent) 30deg 36deg, transparent 36deg 60deg, var(--color-gold) 60deg 66deg, transparent 66deg 90deg);
--boomerang-sweep: linear-gradient(100deg, var(--color-surface-2) 0 38%, transparent 38% 62%, rgba(31,181,163,0.16) 62% 100%);
}

/* ============================================================
Base component classes — Populuxe
Signature move: two-tone pastel blocking trimmed in chrome,
with sparse atomic starburst/boomerang accents.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid var(--color-chrome);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); font-style: italic; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); box-shadow: var(--shadow-chrome);
border: none; cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-ivory, #fffaf3);
box-shadow: var(--shadow-chrome), var(--shadow-starburst);
}
.card {
background: var(--color-surface-2); background-image: var(--boomerang-sweep);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--shadow-chrome);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-chrome);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(31,181,163,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-gold); color: var(--color-text);
box-shadow: var(--shadow-chrome);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/populuxe.md */
```

### Variables

```
--bg: #f4ede0, --fg: #2b2320, --accent: #ff6f61, --surface: #fffaf3, --radius: 10px, --spacing: 16px, --font-display: Futura, Century Gothic, sans-serif, --font-body: Futura, Century Gothic, Trebuchet MS, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f4ede0

#fffaf3

#ffe3ec

#2b2320

Secondary

#6b5f56

#ff6f61

#1fb5a3

#c8ccd0

#d4af37

### Effects

Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver, Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation, Bold italic wedge-shaped display type evoking tailfins and forward motion, shadow, blur

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

- **Name:** Populuxe
- **Type:** claude-artisan/historical
- **Keywords:** Populuxe, atomic populuxe, jet-age consumer style, boomerang modern, Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver, Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation, Bold italic wedge-shaped display type evoking tailfins and forward motion, historical
- **Era:** 1950s–early 1960s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f4ede0, surface: #fffaf3, surface-2: #ffe3ec, text: #2b2320
- **Secondary:** text-muted: #6b5f56, primary: #ff6f61, accent: #1fb5a3, chrome: #c8ccd0, gold: #d4af37

## Visual Effects

Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver, Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation, Bold italic wedge-shaped display type evoking tailfins and forward motion, shadow, blur

## AI Visual Direction

Populuxe, Two-tone pastel blocking (turquoise/pink/coral/mint) on warm cream, trimmed in chrome silver, Atomic starburst and boomerang accent shapes used sparingly as optimistic punctuation, Bold italic wedge-shaped display type evoking tailfins and forward motion, 1950s Frigidaire and Chevrolet print ads; Googie coffee-shop signage; boomerang-pattern Formica.

## CSS Technical

```css
/* Populuxe — design tokens */
/* 1950s–early 1960s | Two-tone pastel-and-chrome atomic-age consumer optimism */
:root {
/* color */
--color-bg: #f4ede0;
--color-surface: #fffaf3;
--color-surface-2: #ffe3ec;
--color-text: #2b2320;
--color-text-muted: #6b5f56;
--color-primary: #ff6f61;
--color-accent: #1fb5a3;
--color-chrome: #c8ccd0;
--color-gold: #d4af37;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-chrome: 0 0 0 1px #ffffff, 0 0 0 2px var(--color-chrome), 0 8px 20px rgba(43,35,32,0.18);
--shadow-starburst: 0 10px 24px rgba(255,111,97,0.25);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
--font-display: 'Futura', 'Century Gothic', sans-serif;
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
/* extra: starburst motif + boomerang sweep */
--starburst: conic-gradient(from 0deg, var(--color-primary) 0 6deg, transparent 6deg 30deg, var(--color-accent) 30deg 36deg, transparent 36deg 60deg, var(--color-gold) 60deg 66deg, transparent 66deg 90deg);
--boomerang-sweep: linear-gradient(100deg, var(--color-surface-2) 0 38%, transparent 38% 62%, rgba(31,181,163,0.16) 62% 100%);
}

/* ============================================================
Base component classes — Populuxe
Signature move: two-tone pastel blocking trimmed in chrome,
with sparse atomic starburst/boomerang accents.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid var(--color-chrome);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); font-style: italic; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); box-shadow: var(--shadow-chrome);
border: none; cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-ivory, #fffaf3);
box-shadow: var(--shadow-chrome), var(--shadow-starburst);
}
.card {
background: var(--color-surface-2); background-image: var(--boomerang-sweep);
border-radius: var(--radius-lg); padding: var(--space-6);
box-shadow: var(--shadow-chrome);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-chrome);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(31,181,163,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-gold); color: var(--color-text);
box-shadow: var(--shadow-chrome);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/populuxe.md */
```

## Design System Variables

```css
--bg: #f4ede0, --fg: #2b2320, --accent: #ff6f61, --surface: #fffaf3, --radius: 10px, --spacing: 16px, --font-display: Futura, Century Gothic, sans-serif, --font-body: Futura, Century Gothic, Trebuchet MS, sans-serif
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

[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)[![Streamline Moderne](https://designmd.app/images/library/726.png) Claude Artisan · Movimentos históricos ### Streamline Moderne](https://designmd.app/library/streamline-moderne)[![Mid-Century Modern](https://designmd.app/images/library/327.png) Retro & Pop ### Mid-Century Modern](https://designmd.app/library/mid-century-modern)

Last synced: 8/30/2026
