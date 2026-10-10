# Android Holo

- Source: <https://designmd.app/library/android-holo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:15.312Z

Claude Artisan · Flat, material & plataformas2011–2014

# Android Holo

Reference for flat, material & plataformas Android Holo. Google's Android 3.0 Honeycomb (2011); carried through Ice Cream Sandwich and Jelly Bean until Material Design replaced it in 2014.

Android HoloHoloHoneycomb UIIce Cream Sandwich UINear-black backgrounds, minimal flat chromeSingle glowing cyan/holo-blue accent for all interactive highlightsThin geometric condensed sans type, often uppercase labelsGlow (not shadow) substitutes for elevationflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights

![Android Holo](https://designmd.app/images/library/571.png)

## Historical Context

Google's Android 3.0 Honeycomb (2011); carried through Ice Cream Sandwich and Jelly Bean until Material Design replaced it in 2014. Example: Android 3.0-4.4 stock UI; Google Now on Jelly Bean; Holo Light/Dark system themes..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Android Holo"
description: "Android Holo visual system, translated from the Claude Artisan catalog for use in digital products. Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights"
colors:
primary: "#33b5e5"
background: "#000000"
surface: "#0c0f10"
text: "#e8f7fa"
accent: "#33b5e5"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Roboto Condensed', 'Droid Sans', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "2px"
lg: "2px"
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

Android Holo visual system, translated from the Claude Artisan catalog for use in digital products. Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights

- **Category:** flat-platform
- **Era:** 2011–2014
- **Origin:** Google's Android 3.0 Honeycomb (2011); carried through Ice Cream Sandwich and Jelly Bean until Material Design replaced it in 2014.
- **Reference:** Android 3.0-4.4 stock UI; Google Now on Jelly Bean; Holo Light/Dark system themes.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Near-black backgrounds, minimal flat chrome
- Single glowing cyan/holo-blue accent for all interactive highlights
- Thin geometric condensed sans type, often uppercase labels
- Glow (not shadow) substitutes for elevation

## Colors

- **bg** — #000000
- **surface** — #0c0f10
- **surface-2** — #171b1c
- **text** — #e8f7fa
- **text-muted** — #8a9a9d
- **primary** — #33b5e5
- **primary-bright** — #8fdce8
- **divider** — #2a2f30
- **danger** — #ff4444

## Typography

- Display: 'Roboto Condensed', 'Droid Sans', sans-serif
- Body: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif
- Mono: 'Droid Sans Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Near-black backgrounds, minimal flat chrome; Single glowing cyan/holo-blue accent for all interactive highlights; Thin geometric condensed sans type, often uppercase labels; Glow (not shadow) substitutes for elevation; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 2px, 2px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/android-holo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Android Holo — design tokens */
/* 2011–2014 | Pre-Material Android: near-black chrome, single glowing cyan accent */
:root {
/* color */
--color-bg: #000000;
--color-surface: #0c0f10;
--color-surface-2: #171b1c;
--color-text: #e8f7fa;
--color-text-muted: #8a9a9d;
--color-primary: #33b5e5;
--color-primary-bright: #8fdce8;
--color-divider: #2a2f30;
--color-danger: #ff4444;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-glow: 0 0 8px rgba(51,181,229,0.55), 0 0 1px rgba(51,181,229,0.9);
--shadow-glow-strong: 0 0 16px rgba(51,181,229,0.75), 0 0 2px rgba(143,220,232,0.9);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Roboto Condensed', 'Droid Sans', sans-serif;
--font-mono: 'Droid Sans Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.6875rem;
--text-sm: 0.8125rem;
--text-base: 0.9375rem;
--text-lg: 1.0625rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.75rem;
--text-5xl: 3.5rem;
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
--ease-standard: linear;
/* extra: holo underline + focus glow */
--holo-underline: linear-gradient(90deg, transparent, var(--color-primary), transparent);
--bg-image: none;
}

/* ============================================================
Base component classes — Android Holo
Signature move: near-black flat chrome, thin geometric sans
type, and one glowing cyan accent used for every interactive
highlight — never a shadow, always a glow.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-divider);
}
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .04em;
color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: transparent; border: 1px solid var(--color-divider);
cursor: pointer; transition: color .15s var(--ease-standard), border-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { border-color: var(--color-primary); color: var(--color-primary-bright); }
.btn:active { background: rgba(51,181,229,0.12); }
.btn:focus-visible { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-glow); }
.btn[disabled] { opacity: .35; cursor: not-allowed; border-color: var(--color-divider); color: var(--color-text-muted); }
.btn--primary {
background: transparent; color: var(--color-primary-bright);
border: 1px solid var(--color-primary); box-shadow: var(--shadow-glow);
}
.btn--primary:hover { box-shadow: var(--shadow-glow-strong); }
.card {
background: var(--color-surface);
border-radius: var(--radius-md); padding: var(--space-6);
border: 1px solid var(--color-divider);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-1); border-radius: 0;
background: transparent; border: none; border-bottom: 1px solid var(--color-divider);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); box-shadow: 0 1px 0 0 var(--color-primary), var(--shadow-glow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .05em;
padding: .25em .7em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary-bright);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/android-holo.md */
```

### Variables

```
--bg: #000000, --fg: #e8f7fa, --accent: #33b5e5, --surface: #0c0f10, --radius: 2px, --spacing: 16px, --font-display: 'Roboto Condensed', 'Droid Sans', sans-serif, --font-body: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#000000

#0c0f10

#171b1c

#e8f7fa

Secondary

#8a9a9d

#33b5e5

#8fdce8

#2a2f30

#ff4444

### Effects

Near-black backgrounds, minimal flat chrome, Single glowing cyan/holo-blue accent for all interactive highlights, Thin geometric condensed sans type, often uppercase labels, Glow (not shadow) substitutes for elevation, shadow, blur

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

- **Name:** Android Holo
- **Type:** claude-artisan/flat-platform
- **Keywords:** Android Holo, Holo, Honeycomb UI, Ice Cream Sandwich UI, Near-black backgrounds, minimal flat chrome, Single glowing cyan/holo-blue accent for all interactive highlights, Thin geometric condensed sans type, often uppercase labels, Glow (not shadow) substitutes for elevation, flat-platform
- **Era:** 2011–2014
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #000000, surface: #0c0f10, surface-2: #171b1c, text: #e8f7fa
- **Secondary:** text-muted: #8a9a9d, primary: #33b5e5, primary-bright: #8fdce8, divider: #2a2f30, danger: #ff4444

## Visual Effects

Near-black backgrounds, minimal flat chrome, Single glowing cyan/holo-blue accent for all interactive highlights, Thin geometric condensed sans type, often uppercase labels, Glow (not shadow) substitutes for elevation, shadow, blur

## AI Visual Direction

Android Holo, Near-black backgrounds, minimal flat chrome, Single glowing cyan/holo-blue accent for all interactive highlights, Thin geometric condensed sans type, often uppercase labels, Glow (not shadow) substitutes for elevation, Android 3.0-4.4 stock UI; Google Now on Jelly Bean; Holo Light/Dark system themes.

## CSS Technical

```css
/* Android Holo — design tokens */
/* 2011–2014 | Pre-Material Android: near-black chrome, single glowing cyan accent */
:root {
/* color */
--color-bg: #000000;
--color-surface: #0c0f10;
--color-surface-2: #171b1c;
--color-text: #e8f7fa;
--color-text-muted: #8a9a9d;
--color-primary: #33b5e5;
--color-primary-bright: #8fdce8;
--color-divider: #2a2f30;
--color-danger: #ff4444;
/* radius */
--radius-sm: 0px;
--radius-md: 2px;
--radius-lg: 2px;
--radius-pill: 999px;
/* shadow */
--shadow-glow: 0 0 8px rgba(51,181,229,0.55), 0 0 1px rgba(51,181,229,0.9);
--shadow-glow-strong: 0 0 16px rgba(51,181,229,0.75), 0 0 2px rgba(143,220,232,0.9);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Roboto Condensed', 'Droid Sans', sans-serif;
--font-mono: 'Droid Sans Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.6875rem;
--text-sm: 0.8125rem;
--text-base: 0.9375rem;
--text-lg: 1.0625rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.75rem;
--text-5xl: 3.5rem;
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
--ease-standard: linear;
/* extra: holo underline + focus glow */
--holo-underline: linear-gradient(90deg, transparent, var(--color-primary), transparent);
--bg-image: none;
}

/* ============================================================
Base component classes — Android Holo
Signature move: near-black flat chrome, thin geometric sans
type, and one glowing cyan accent used for every interactive
highlight — never a shadow, always a glow.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-divider);
}
.btn {
font: 600 var(--text-sm)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .04em;
color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-md);
background: transparent; border: 1px solid var(--color-divider);
cursor: pointer; transition: color .15s var(--ease-standard), border-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { border-color: var(--color-primary); color: var(--color-primary-bright); }
.btn:active { background: rgba(51,181,229,0.12); }
.btn:focus-visible { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-glow); }
.btn[disabled] { opacity: .35; cursor: not-allowed; border-color: var(--color-divider); color: var(--color-text-muted); }
.btn--primary {
background: transparent; color: var(--color-primary-bright);
border: 1px solid var(--color-primary); box-shadow: var(--shadow-glow);
}
.btn--primary:hover { box-shadow: var(--shadow-glow-strong); }
.card {
background: var(--color-surface);
border-radius: var(--radius-md); padding: var(--space-6);
border: 1px solid var(--color-divider);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-2) var(--space-1); border-radius: 0;
background: transparent; border: none; border-bottom: 1px solid var(--color-divider);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom: 2px solid var(--color-primary); box-shadow: 0 1px 0 0 var(--color-primary), var(--shadow-glow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
text-transform: uppercase; letter-spacing: .05em;
padding: .25em .7em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-primary); color: var(--color-primary-bright);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/android-holo.md */
```

## Design System Variables

```css
--bg: #000000, --fg: #e8f7fa, --accent: #33b5e5, --surface: #0c0f10, --radius: 2px, --spacing: 16px, --font-display: 'Roboto Condensed', 'Droid Sans', sans-serif, --font-body: 'Roboto Condensed', 'Droid Sans', 'Helvetica Neue', Arial, sans-serif
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

[![Material Design (M2)](https://designmd.app/images/library/678.png) Claude Artisan · Flat, material & plataformas ### Material Design (M2)](https://designmd.app/library/material-design)[![Material Design 3 / Material You](https://designmd.app/images/library/679.png) Claude Artisan · Flat, material & plataformas ### Material Design 3 / Material You](https://designmd.app/library/material-design-3)

Last synced: 8/30/2026
