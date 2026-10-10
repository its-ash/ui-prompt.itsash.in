# Psychedelic Art

- Source: <https://designmd.app/library/psychedelic>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:28.299Z

Claude Artisan · Movimentos históricos1965–1971

# Psychedelic Art

Reference for movimentos históricos Psychedelic Art. San Francisco (Wes Wilson, Victor Moscoso).

Psychedelic Art1960s psychedeliaacid posterWarped, melting, hand-drawn letteringIntense vibrating complementary colorsSwirling Art-Nouveau-derived formsKaleidoscopic symmetryhistorical

Use case: composição editorial com grade tipográfica; Warped, melting, hand-drawn lettering; Intense vibrating complementary colors

![Psychedelic Art](https://designmd.app/images/library/703.png)

## Historical Context

San Francisco (Wes Wilson, Victor Moscoso). Example: Fillmore concert posters (Wes Wilson)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Psychedelic Art"
description: "Psychedelic Art visual system, translated from the Claude Artisan catalog for use in digital products. Warped, melting, hand-drawn lettering; Intense vibrating complementary colors"
colors:
primary: "#00c2a8"
background: "#ff5f9e"
surface: "#ffe14d"
text: "#1a0b2e"
accent: "#6a1fd0"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Cooper Black', 'Baloo 2', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cooper Black', 'Baloo 2', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cooper Black', 'Baloo 2', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "12px"
md: "8px"
lg: "16px"
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

Psychedelic Art visual system, translated from the Claude Artisan catalog for use in digital products. Warped, melting, hand-drawn lettering; Intense vibrating complementary colors

- **Category:** historical
- **Era:** 1965–1971
- **Origin:** San Francisco (Wes Wilson, Victor Moscoso).
- **Reference:** Fillmore concert posters (Wes Wilson).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Warped, melting, hand-drawn lettering
- Intense vibrating complementary colors
- Swirling Art-Nouveau-derived forms
- Kaleidoscopic symmetry

## Colors

- **bg** — #ff5f9e
- **surface** — #ffe14d
- **surface-strong** — #ff8a3d
- **border** — #1a0b2e
- **text** — #1a0b2e
- **text-muted** — #4b2c63
- **primary** — #00c2a8
- **accent** — #6a1fd0
- **vibrate-a** — #ff5f9e
- **vibrate-b** — #00c2a8

## Typography

- Display: 'Cooper Black', 'Baloo 2', cursive
- Body: 'Cooper Black', 'Baloo 2', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Warped, melting, hand-drawn lettering; Intense vibrating complementary colors; Swirling Art-Nouveau-derived forms; Kaleidoscopic symmetry; sombras e elevação

## Shapes

- Radius scale: 12px, 40% 60% 55% 45% / 50% 40% 60% 50%, 60% 40% 30% 70% / 60% 30% 70% 40%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/psychedelic/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Psychedelic Art — design tokens */
/* 1965–1971 | San Francisco (Wes Wilson, Victor Moscoso), condensed */
:root {
/* color: intense vibrating complementary pairs */
--color-bg: #ff5f9e;
--color-surface: #ffe14d;
--color-surface-strong: #ff8a3d;
--color-border: #1a0b2e;
--color-text: #1a0b2e;
--color-text-muted: #4b2c63;
--color-primary: #00c2a8;
--color-accent: #6a1fd0;
--color-vibrate-a: #ff5f9e;
--color-vibrate-b: #00c2a8;
/* radius: melting, warped forms */
--radius-sm: 12px;
--radius-md: 40% 60% 55% 45% / 50% 40% 60% 50%;
--radius-lg: 60% 40% 30% 70% / 60% 30% 70% 40%;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 4px var(--color-vibrate-a);
--shadow-md: 0 0 0 4px var(--color-vibrate-b), 0 8px 24px rgba(26,11,46,0.3);
--shadow-lg: 0 0 0 6px var(--color-accent), 0 16px 40px rgba(26,11,46,0.35);
/* font: warped hand-drawn lettering feel */
--font-sans: 'Cooper Black', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Cooper Black', 'Baloo 2', cursive;
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
--ease-standard: cubic-bezier(0.65, 0, 0.35, 1);
/* extra: kaleidoscopic swirl background + vibrating outline ring */
--swirl-bg: radial-gradient(circle at 20% 30%, #ffe14d 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00c2a8 0%, transparent 45%), radial-gradient(circle at 50% 80%, #6a1fd0 0%, transparent 50%), var(--color-bg);
}

/* ============================================================
Base component classes — Psychedelic Art
Signature move: a vibrating solid-color outline ring (complementary hue,
no blur) plus melting asymmetric border-radius, repeated on card, btn
and input so every shape looks like it's warping.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--swirl-bg); background-attachment: fixed; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: none; box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .3s var(--ease-standard), box-shadow .3s var(--ease-standard);
}
.btn:hover { transform: scale(1.05) rotate(-2deg); box-shadow: var(--shadow-md); }
.btn:active { transform: scale(.97); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 4px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff4e0; }
.card {
background: var(--color-surface-strong); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none; color: #1a0b2e;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface); border: none; box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff4e0; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/psychedelic.md */
```

### Variables

```
--bg: #ff5f9e, --fg: #1a0b2e, --accent: #00c2a8, --surface: #ffe14d, --radius: 40% 60% 55% 45% / 50% 40% 60% 50%, --spacing: 16px, --font-display: 'Cooper Black', 'Baloo 2', cursive, --font-body: 'Cooper Black', 'Baloo 2', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ff5f9e

#ffe14d

#ff8a3d

#1a0b2e

Secondary

#1a0b2e

#4b2c63

#00c2a8

#6a1fd0

#ff5f9e

### Effects

Warped, melting, hand-drawn lettering, Intense vibrating complementary colors, Swirling Art-Nouveau-derived forms, Kaleidoscopic symmetry, shadow

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

- **Name:** Psychedelic Art
- **Type:** claude-artisan/historical
- **Keywords:** Psychedelic Art, 1960s psychedelia, acid poster, Warped, melting, hand-drawn lettering, Intense vibrating complementary colors, Swirling Art-Nouveau-derived forms, Kaleidoscopic symmetry, historical
- **Era:** 1965–1971
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ff5f9e, surface: #ffe14d, surface-strong: #ff8a3d, border: #1a0b2e
- **Secondary:** text: #1a0b2e, text-muted: #4b2c63, primary: #00c2a8, accent: #6a1fd0, vibrate-a: #ff5f9e, vibrate-b: #00c2a8

## Visual Effects

Warped, melting, hand-drawn lettering, Intense vibrating complementary colors, Swirling Art-Nouveau-derived forms, Kaleidoscopic symmetry, shadow

## AI Visual Direction

Psychedelic Art, Warped, melting, hand-drawn lettering, Intense vibrating complementary colors, Swirling Art-Nouveau-derived forms, Kaleidoscopic symmetry, Fillmore concert posters (Wes Wilson).

## CSS Technical

```css
/* Psychedelic Art — design tokens */
/* 1965–1971 | San Francisco (Wes Wilson, Victor Moscoso), condensed */
:root {
/* color: intense vibrating complementary pairs */
--color-bg: #ff5f9e;
--color-surface: #ffe14d;
--color-surface-strong: #ff8a3d;
--color-border: #1a0b2e;
--color-text: #1a0b2e;
--color-text-muted: #4b2c63;
--color-primary: #00c2a8;
--color-accent: #6a1fd0;
--color-vibrate-a: #ff5f9e;
--color-vibrate-b: #00c2a8;
/* radius: melting, warped forms */
--radius-sm: 12px;
--radius-md: 40% 60% 55% 45% / 50% 40% 60% 50%;
--radius-lg: 60% 40% 30% 70% / 60% 30% 70% 40%;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 0 4px var(--color-vibrate-a);
--shadow-md: 0 0 0 4px var(--color-vibrate-b), 0 8px 24px rgba(26,11,46,0.3);
--shadow-lg: 0 0 0 6px var(--color-accent), 0 16px 40px rgba(26,11,46,0.35);
/* font: warped hand-drawn lettering feel */
--font-sans: 'Cooper Black', 'Baloo 2', system-ui, sans-serif;
--font-display: 'Cooper Black', 'Baloo 2', cursive;
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
--ease-standard: cubic-bezier(0.65, 0, 0.35, 1);
/* extra: kaleidoscopic swirl background + vibrating outline ring */
--swirl-bg: radial-gradient(circle at 20% 30%, #ffe14d 0%, transparent 40%), radial-gradient(circle at 80% 20%, #00c2a8 0%, transparent 45%), radial-gradient(circle at 50% 80%, #6a1fd0 0%, transparent 50%), var(--color-bg);
}

/* ============================================================
Base component classes — Psychedelic Art
Signature move: a vibrating solid-color outline ring (complementary hue,
no blur) plus melting asymmetric border-radius, repeated on card, btn
and input so every shape looks like it's warping.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--swirl-bg); background-attachment: fixed; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: none; box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .3s var(--ease-standard), box-shadow .3s var(--ease-standard);
}
.btn:hover { transform: scale(1.05) rotate(-2deg); box-shadow: var(--shadow-md); }
.btn:active { transform: scale(.97); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 4px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff4e0; }
.card {
background: var(--color-surface-strong); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-8) var(--space-6); border: none; color: #1a0b2e;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-pill);
background: var(--color-surface); border: none; box-shadow: var(--shadow-sm);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; box-shadow: var(--shadow-md); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #fff4e0; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/psychedelic.md */
```

## Design System Variables

```css
--bg: #ff5f9e, --fg: #1a0b2e, --accent: #00c2a8, --surface: #ffe14d, --radius: 40% 60% 55% 45% / 50% 40% 60% 50%, --spacing: 16px, --font-display: 'Cooper Black', 'Baloo 2', cursive, --font-body: 'Cooper Black', 'Baloo 2', system-ui, sans-serif
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

[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)[![Op Art](https://designmd.app/images/library/694.png) Claude Artisan · Movimentos históricos ### Op Art](https://designmd.app/library/op-art)

Last synced: 8/30/2026
