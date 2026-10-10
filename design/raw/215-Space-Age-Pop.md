# Space Age Pop

- Source: <https://designmd.app/library/space-age>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:58.309Z

Claude Artisan · Retrofuturismo & ficção especulativa1957–1972

# Space Age Pop

Reference for retrofuturismo & ficção especulativa Space Age Pop. Space-race-era design optimism.

Space Age Popspace age1960s futurismSleek white + primary pops, molded plasticSpherical/pod forms, chromeOp-art and geometric patternsAstronaut-era optimismretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome

![Space Age Pop](https://designmd.app/images/library/720.png)

## Historical Context

Space-race-era design optimism. Example: 2001: A Space Odyssey interiors; Panton furniture..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Space Age Pop"
description: "Space Age Pop visual system, translated from the Claude Artisan catalog for use in digital products. Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome"
colors:
primary: "#e8542a"
background: "#f4f2ec"
surface: "#ffffff"
text: "#1c1b17"
accent: "#2f8fd4"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "12px"
md: "24px"
lg: "48px"
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

Space Age Pop visual system, translated from the Claude Artisan catalog for use in digital products. Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome

- **Category:** retrofuturism
- **Era:** 1957–1972
- **Origin:** Space-race-era design optimism.
- **Reference:** 2001: A Space Odyssey interiors; Panton furniture.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Sleek white + primary pops, molded plastic
- Spherical/pod forms, chrome
- Op-art and geometric patterns
- Astronaut-era optimism

## Colors

- **bg** — #f4f2ec
- **surface** — #ffffff
- **surface-strong** — #eceae2
- **border** — #d8d4c6
- **text** — #1c1b17
- **text-muted** — #5a564a
- **primary** — #e8542a
- **accent** — #2f8fd4
- **chrome** — #c7ccd1
- **sun** — #f2b705

## Typography

- Display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif
- Body: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Sleek white + primary pops, molded plastic; Spherical/pod forms, chrome; Op-art and geometric patterns; Astronaut-era optimism; sombras e elevação

## Shapes

- Radius scale: 12px, 24px, 48px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/space-age/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Space Age Pop — design tokens */
/* 1957–1972 | Space-race-era design optimism, condensed */
:root {
/* color */
--color-bg: #f4f2ec;
--color-surface: #ffffff;
--color-surface-strong: #eceae2;
--color-border: #d8d4c6;
--color-text: #1c1b17;
--color-text-muted: #5a564a;
--color-primary: #e8542a;
--color-accent: #2f8fd4;
--color-chrome: #c7ccd1;
--color-sun: #f2b705;
/* radius: pod/orb forms, everything rounds toward a sphere */
--radius-sm: 12px;
--radius-md: 24px;
--radius-lg: 48px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(28,27,23,0.10);
--shadow-md: 0 8px 20px rgba(28,27,23,0.14);
--shadow-lg: 0 18px 40px rgba(28,27,23,0.18);
--shadow-chrome: inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -6px 10px rgba(0,0,0,0.08);
/* font */
--font-sans: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif;
--font-display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: op-art starburst ring + chrome bevel, the signature pod-and-chrome move */
--starburst: repeating-conic-gradient(from 0deg, var(--color-sun) 0deg 8deg, transparent 8deg 20deg);
--chrome-gradient: linear-gradient(135deg, #fdfdfd, #c7ccd1 45%, #fdfdfd 55%, #a9afb5);
}

/* ============================================================
Base component classes — Space Age Pop
Signature move: molded "pod" radius (sphere-derived) + a chrome bevel
highlight, repeated on nav, buttons and cards, plus an op-art starburst
accent used sparingly on badges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-md), var(--shadow-chrome);
border: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--chrome-gradient); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-chrome);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md), var(--shadow-chrome); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-chrome);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-chrome);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); color: #1c1b17;
background: var(--starburst), var(--color-sun); background-blend-mode: overlay; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/space-age.md */
```

### Variables

```
--bg: #f4f2ec, --fg: #1c1b17, --accent: #e8542a, --surface: #ffffff, --radius: 24px, --spacing: 16px, --font-display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif, --font-body: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f4f2ec

#ffffff

#eceae2

#d8d4c6

Secondary

#1c1b17

#5a564a

#e8542a

#2f8fd4

#c7ccd1

#f2b705

### Effects

Sleek white + primary pops, molded plastic, Spherical/pod forms, chrome, Op-art and geometric patterns, Astronaut-era optimism, shadow

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

- **Name:** Space Age Pop
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Space Age Pop, space age, 1960s futurism, Sleek white + primary pops, molded plastic, Spherical/pod forms, chrome, Op-art and geometric patterns, Astronaut-era optimism, retrofuturism
- **Era:** 1957–1972
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f4f2ec, surface: #ffffff, surface-strong: #eceae2, border: #d8d4c6
- **Secondary:** text: #1c1b17, text-muted: #5a564a, primary: #e8542a, accent: #2f8fd4, chrome: #c7ccd1, sun: #f2b705

## Visual Effects

Sleek white + primary pops, molded plastic, Spherical/pod forms, chrome, Op-art and geometric patterns, Astronaut-era optimism, shadow

## AI Visual Direction

Space Age Pop, Sleek white + primary pops, molded plastic, Spherical/pod forms, chrome, Op-art and geometric patterns, Astronaut-era optimism, 2001: A Space Odyssey interiors; Panton furniture.

## CSS Technical

```css
/* Space Age Pop — design tokens */
/* 1957–1972 | Space-race-era design optimism, condensed */
:root {
/* color */
--color-bg: #f4f2ec;
--color-surface: #ffffff;
--color-surface-strong: #eceae2;
--color-border: #d8d4c6;
--color-text: #1c1b17;
--color-text-muted: #5a564a;
--color-primary: #e8542a;
--color-accent: #2f8fd4;
--color-chrome: #c7ccd1;
--color-sun: #f2b705;
/* radius: pod/orb forms, everything rounds toward a sphere */
--radius-sm: 12px;
--radius-md: 24px;
--radius-lg: 48px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(28,27,23,0.10);
--shadow-md: 0 8px 20px rgba(28,27,23,0.14);
--shadow-lg: 0 18px 40px rgba(28,27,23,0.18);
--shadow-chrome: inset 0 1px 0 rgba(255,255,255,0.8), inset 0 -6px 10px rgba(0,0,0,0.08);
/* font */
--font-sans: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif;
--font-display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.2, 0.64, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: op-art starburst ring + chrome bevel, the signature pod-and-chrome move */
--starburst: repeating-conic-gradient(from 0deg, var(--color-sun) 0deg 8deg, transparent 8deg 20deg);
--chrome-gradient: linear-gradient(135deg, #fdfdfd, #c7ccd1 45%, #fdfdfd 55%, #a9afb5);
}

/* ============================================================
Base component classes — Space Age Pop
Signature move: molded "pod" radius (sphere-derived) + a chrome bevel
highlight, repeated on nav, buttons and cards, plus an op-art starburst
accent used sparingly on badges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-md), var(--shadow-chrome);
border: 1px solid var(--color-border); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--chrome-gradient); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-chrome);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md), var(--shadow-chrome); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff; border-color: var(--color-primary); }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-chrome);
border: 1px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-chrome);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); color: #1c1b17;
background: var(--starburst), var(--color-sun); background-blend-mode: overlay; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/space-age.md */
```

## Design System Variables

```css
--bg: #f4f2ec, --fg: #1c1b17, --accent: #e8542a, --surface: #ffffff, --radius: 24px, --spacing: 16px, --font-display: 'Cooper Black', 'Baloo 2', 'Poppins', system-ui, sans-serif, --font-body: 'Century Gothic', 'Poppins', 'Futura', system-ui, sans-serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Mid-Century Modern](https://designmd.app/images/library/327.png) Retro & Pop ### Mid-Century Modern](https://designmd.app/library/mid-century-modern)

Last synced: 8/30/2026
