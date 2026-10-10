# U.S. Web Design System

- Source: <https://designmd.app/library/uswds>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:42.380Z

Claude Artisan · Flat, material & plataformas2017–present

# U.S. Web Design System

Reference for flat, material & plataformas U.S. Web Design System. U.S. General Services Administration (18F).

U.S. Web Design SystemUSWDSAccessibility- and trust-first (Section 508)Government blue/red/neutral palettePublic Sans typefacePlain-language, high-legibilityflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Accessibility- and trust-first (Section 508); Government blue/red/neutral palette

![U.S. Web Design System](https://designmd.app/images/library/745.png)

## Historical Context

U.S. General Services Administration (18F). Example: US federal government websites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "U.S. Web Design System"
description: "U.S. Web Design System visual system, translated from the Claude Artisan catalog for use in digital products. Accessibility- and trust-first (Section 508); Government blue/red/neutral palette"
colors:
primary: "#005ea2"
background: "#ffffff"
surface: "#f0f0f0"
text: "#1b1b1b"
accent: "#b50909"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Public Sans', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Public Sans', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Public Sans', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "6px"
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

U.S. Web Design System visual system, translated from the Claude Artisan catalog for use in digital products. Accessibility- and trust-first (Section 508); Government blue/red/neutral palette

- **Category:** flat-platform
- **Era:** 2017–present
- **Origin:** U.S. General Services Administration (18F).
- **Reference:** US federal government websites.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Accessibility- and trust-first (Section 508)
- Government blue/red/neutral palette
- Public Sans typeface
- Plain-language, high-legibility

## Colors

- **bg** — #ffffff
- **surface** — #f0f0f0
- **surface-strong** — #e6e6e6
- **border** — #a9aeb1
- **text** — #1b1b1b
- **text-muted** — #565c65
- **primary** — #005ea2
- **accent** — #b50909
- **primary-dark** — #1a4480
- **focus** — #2491ff

## Typography

- Display: 'Public Sans', system-ui, sans-serif
- Body: 'Public Sans', system-ui, -apple-system, sans-serif
- Mono: 'Roboto Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Accessibility- and trust-first (Section 508); Government blue/red/neutral palette; Public Sans typeface; Plain-language, high-legibility; sombras e elevação

## Shapes

- Radius scale: 4px, 6px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/uswds/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* U.S. Web Design System — design tokens (generated from style_catalog.json) */
/* 2017–present | U.S. General Services Administration (18F). */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f0f0f0;
--color-surface-strong: #e6e6e6;
--color-border: #a9aeb1;
--color-text: #1b1b1b;
--color-text-muted: #565c65;
--color-primary: #005ea2;
--color-accent: #b50909;
--color-primary-dark: #1a4480;
--color-focus: #2491ff;
/* radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.12);
--shadow-md: 0 2px 6px rgba(0, 0, 0, 0.14);
--shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.16);
--shadow-none: none;
/* font */
--font-sans: 'Public Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Public Sans', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
/* extra: a trust-first federal top band (deep blue bar + thin red hairline)
signaling an official .gov context, echoed as a left rule on cards and
a bottom rule under primary buttons */
--gov-band: linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%);
--trust-rule: 4px solid var(--color-primary);
}

/* ============================================================
Base component classes — U.S. Web Design System
Signature move: a trust-first "gov band" — a deep federal-blue rule with a
thin red hairline — repeated as the nav's top edge and every card's left
border, plus plain, high-legibility Public Sans throughout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-top: 6px solid var(--color-primary-dark);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: transparent; border: 1px solid var(--color-primary);
cursor: pointer; transition: background-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: color-mix(in srgb, var(--color-primary) 10%, transparent); }
.btn:active { background: color-mix(in srgb, var(--color-primary) 18%, transparent); }
.btn:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary-dark);
border-bottom: 3px solid var(--color-accent); }
.btn--primary:hover { background: var(--color-primary-dark); }
.card {
background: var(--color-surface); border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-6); border-left: var(--trust-rule);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 3px solid var(--color-focus); outline-offset: 0; border-color: var(--color-focus); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: color-mix(in srgb, var(--color-primary) 12%, var(--color-bg));
color: var(--color-primary-dark); border: 1px solid var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/uswds.md */
```

### Variables

```
--bg: #ffffff, --fg: #1b1b1b, --accent: #005ea2, --surface: #f0f0f0, --radius: 6px, --spacing: 16px, --font-display: 'Public Sans', system-ui, sans-serif, --font-body: 'Public Sans', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f0f0f0

#e6e6e6

#a9aeb1

Secondary

#1b1b1b

#565c65

#005ea2

#b50909

#1a4480

#2491ff

### Effects

Accessibility- and trust-first (Section 508), Government blue/red/neutral palette, Public Sans typeface, Plain-language, high-legibility, shadow

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

- **Name:** U.S. Web Design System
- **Type:** claude-artisan/flat-platform
- **Keywords:** U.S. Web Design System, USWDS, Accessibility- and trust-first (Section 508), Government blue/red/neutral palette, Public Sans typeface, Plain-language, high-legibility, flat-platform
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #f0f0f0, surface-strong: #e6e6e6, border: #a9aeb1
- **Secondary:** text: #1b1b1b, text-muted: #565c65, primary: #005ea2, accent: #b50909, primary-dark: #1a4480, focus: #2491ff

## Visual Effects

Accessibility- and trust-first (Section 508), Government blue/red/neutral palette, Public Sans typeface, Plain-language, high-legibility, shadow

## AI Visual Direction

U.S. Web Design System, Accessibility- and trust-first (Section 508), Government blue/red/neutral palette, Public Sans typeface, Plain-language, high-legibility, US federal government websites.

## CSS Technical

```css
/* U.S. Web Design System — design tokens (generated from style_catalog.json) */
/* 2017–present | U.S. General Services Administration (18F). */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #f0f0f0;
--color-surface-strong: #e6e6e6;
--color-border: #a9aeb1;
--color-text: #1b1b1b;
--color-text-muted: #565c65;
--color-primary: #005ea2;
--color-accent: #b50909;
--color-primary-dark: #1a4480;
--color-focus: #2491ff;
/* radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.12);
--shadow-md: 0 2px 6px rgba(0, 0, 0, 0.14);
--shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.16);
--shadow-none: none;
/* font */
--font-sans: 'Public Sans', system-ui, -apple-system, sans-serif;
--font-display: 'Public Sans', system-ui, sans-serif;
--font-mono: 'Roboto Mono', ui-monospace, monospace;
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
/* extra: a trust-first federal top band (deep blue bar + thin red hairline)
signaling an official .gov context, echoed as a left rule on cards and
a bottom rule under primary buttons */
--gov-band: linear-gradient(180deg, var(--color-primary-dark) 0%, var(--color-primary-dark) 70%, var(--color-accent) 70%, var(--color-accent) 100%);
--trust-rule: 4px solid var(--color-primary);
}

/* ============================================================
Base component classes — U.S. Web Design System
Signature move: a trust-first "gov band" — a deep federal-blue rule with a
thin red hairline — repeated as the nav's top edge and every card's left
border, plus plain, high-legibility Public Sans throughout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-top: 6px solid var(--color-primary-dark);
border-bottom: 1px solid var(--color-border); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: transparent; border: 1px solid var(--color-primary);
cursor: pointer; transition: background-color .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { background: color-mix(in srgb, var(--color-primary) 10%, transparent); }
.btn:active { background: color-mix(in srgb, var(--color-primary) 18%, transparent); }
.btn:focus-visible { outline: 3px solid var(--color-focus); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary-dark);
border-bottom: 3px solid var(--color-accent); }
.btn--primary:hover { background: var(--color-primary-dark); }
.card {
background: var(--color-surface); border-radius: var(--radius-sm);
box-shadow: var(--shadow-sm); padding: var(--space-6); border-left: var(--trust-rule);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: 3px solid var(--color-focus); outline-offset: 0; border-color: var(--color-focus); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .3em .8em; border-radius: var(--radius-pill); background: color-mix(in srgb, var(--color-primary) 12%, var(--color-bg));
color: var(--color-primary-dark); border: 1px solid var(--color-primary); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/uswds.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #1b1b1b, --accent: #005ea2, --surface: #f0f0f0, --radius: 6px, --spacing: 16px, --font-display: 'Public Sans', system-ui, sans-serif, --font-body: 'Public Sans', system-ui, -apple-system, sans-serif
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

[![GOV.UK Design System](https://designmd.app/images/library/651.png) Claude Artisan · Flat, material & plataformas ### GOV.UK Design System](https://designmd.app/library/govuk-design)

Last synced: 8/30/2026
