# Atompunk

- Source: <https://designmd.app/library/atompunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:33.312Z

Claude Artisan · Retrofuturismo & ficção especulativa1998–present

# Atompunk

Reference for retrofuturismo & ficção especulativa Atompunk. Retrofuturism of the atomic age (1945–1965).

Atompunkatomic ageraygun gothic-adjacentGoogie curves, boomerangs, starburstsSpace-race optimism, atoms and rocketsTeal, orange, chrome, formicaPopuluxe consumer futurismretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets

![Atompunk](https://designmd.app/images/library/582.png)

## Historical Context

Retrofuturism of the atomic age (1945–1965). Example: Fallout series UI; The Jetsons; mid-century ads..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Atompunk"
description: "Atompunk visual system, translated from the Claude Artisan catalog for use in digital products. Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets"
colors:
primary: "#e0692b"
background: "#f7ecd2"
surface: "#ffffff"
text: "#14262b"
accent: "#1c8c8c"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
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

Atompunk visual system, translated from the Claude Artisan catalog for use in digital products. Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets

- **Category:** retrofuturism
- **Era:** 1998–present
- **Origin:** Retrofuturism of the atomic age (1945–1965).
- **Reference:** Fallout series UI; The Jetsons; mid-century ads.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Googie curves, boomerangs, starbursts
- Space-race optimism, atoms and rockets
- Teal, orange, chrome, formica
- Populuxe consumer futurism

## Colors

- **bg** — #f7ecd2
- **surface** — #ffffff
- **surface-strong** — #fdd9a5
- **border** — #1c3f4a
- **text** — #14262b
- **text-muted** — #3d5a61
- **primary** — #e0692b
- **accent** — #1c8c8c
- **chrome** — #9fb4b8

## Typography

- Display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif
- Body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Googie curves, boomerangs, starbursts; Space-race optimism, atoms and rockets; Teal, orange, chrome, formica; Populuxe consumer futurism; sombras e elevação

## Shapes

- Radius scale: 4px, 40px 4px 40px 4px, 60px 8px 60px 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/atompunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Atompunk — design tokens */
/* 1998–present | Retrofuturism of the atomic age (1945–1965), condensed */
:root {
/* color */
--color-bg: #f7ecd2;
--color-surface: #ffffff;
--color-surface-strong: #fdd9a5;
--color-border: #1c3f4a;
--color-text: #14262b;
--color-text-muted: #3d5a61;
--color-primary: #e0692b;
--color-accent: #1c8c8c;
--color-chrome: #9fb4b8;
/* radius — Googie boomerang curves: one round end, one sharp */
--radius-sm: 4px;
--radius-md: 40px 4px 40px 4px;
--radius-lg: 60px 8px 60px 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(20,38,43,0.2);
--shadow-md: 0 6px 16px rgba(20,38,43,0.24);
--shadow-lg: 0 14px 30px rgba(20,38,43,0.28);
/* font */
--font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
--font-display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
/* extra — signature starburst gradient + chrome highlight stripe */
--starburst: radial-gradient(circle at 20% 20%, var(--color-accent) 0%, transparent 45%),
radial-gradient(circle at 85% 75%, var(--color-primary) 0%, transparent 40%);
--chrome-stripe: linear-gradient(180deg, #ffffff 0%, var(--color-chrome) 50%, #ffffff 100%);
}

/* ============================================================
Base component classes — Atompunk
Signature move: boomerang-curve radii (one round corner, one sharp) plus a
thin chrome highlight stripe capping surfaces, echoing atomic-age Formica
counters. Repeated on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 4px solid var(--color-border); position: relative; }
.nav::before { content:""; position:absolute; top:0; left:0; right:0; height:4px; background: var(--chrome-stripe); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::after { content:""; position:absolute; inset:0; background: var(--starburst); opacity:.12; pointer-events:none; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(28,140,140,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 2px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/atompunk.md */
```

### Variables

```
--bg: #f7ecd2, --fg: #14262b, --accent: #e0692b, --surface: #ffffff, --radius: 40px 4px 40px 4px, --spacing: 16px, --font-display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif, --font-body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7ecd2

#ffffff

#fdd9a5

#1c3f4a

Secondary

#14262b

#3d5a61

#e0692b

#1c8c8c

#9fb4b8

### Effects

Googie curves, boomerangs, starbursts, Space-race optimism, atoms and rockets, Teal, orange, chrome, formica, Populuxe consumer futurism, shadow

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

- **Name:** Atompunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Atompunk, atomic age, raygun gothic-adjacent, Googie curves, boomerangs, starbursts, Space-race optimism, atoms and rockets, Teal, orange, chrome, formica, Populuxe consumer futurism, retrofuturism
- **Era:** 1998–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7ecd2, surface: #ffffff, surface-strong: #fdd9a5, border: #1c3f4a
- **Secondary:** text: #14262b, text-muted: #3d5a61, primary: #e0692b, accent: #1c8c8c, chrome: #9fb4b8

## Visual Effects

Googie curves, boomerangs, starbursts, Space-race optimism, atoms and rockets, Teal, orange, chrome, formica, Populuxe consumer futurism, shadow

## AI Visual Direction

Atompunk, Googie curves, boomerangs, starbursts, Space-race optimism, atoms and rockets, Teal, orange, chrome, formica, Populuxe consumer futurism, Fallout series UI; The Jetsons; mid-century ads.

## CSS Technical

```css
/* Atompunk — design tokens */
/* 1998–present | Retrofuturism of the atomic age (1945–1965), condensed */
:root {
/* color */
--color-bg: #f7ecd2;
--color-surface: #ffffff;
--color-surface-strong: #fdd9a5;
--color-border: #1c3f4a;
--color-text: #14262b;
--color-text-muted: #3d5a61;
--color-primary: #e0692b;
--color-accent: #1c8c8c;
--color-chrome: #9fb4b8;
/* radius — Googie boomerang curves: one round end, one sharp */
--radius-sm: 4px;
--radius-md: 40px 4px 40px 4px;
--radius-lg: 60px 8px 60px 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(20,38,43,0.2);
--shadow-md: 0 6px 16px rgba(20,38,43,0.24);
--shadow-lg: 0 14px 30px rgba(20,38,43,0.28);
/* font */
--font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
--font-display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.4, 0.64, 1);
/* extra — signature starburst gradient + chrome highlight stripe */
--starburst: radial-gradient(circle at 20% 20%, var(--color-accent) 0%, transparent 45%),
radial-gradient(circle at 85% 75%, var(--color-primary) 0%, transparent 40%);
--chrome-stripe: linear-gradient(180deg, #ffffff 0%, var(--color-chrome) 50%, #ffffff 100%);
}

/* ============================================================
Base component classes — Atompunk
Signature move: boomerang-curve radii (one round corner, one sharp) plus a
thin chrome highlight stripe capping surfaces, echoing atomic-age Formica
counters. Repeated on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 4px solid var(--color-border); position: relative; }
.nav::before { content:""; position:absolute; top:0; left:0; right:0; height:4px; background: var(--chrome-stripe); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 3px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff8ec; border-color: var(--color-border); }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 3px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::after { content:""; position:absolute; inset:0; background: var(--starburst); opacity:.12; pointer-events:none; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm); background: var(--color-surface);
border: 3px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(28,140,140,0.25); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
border: 2px solid var(--color-border); color: var(--color-text); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/atompunk.md */
```

## Design System Variables

```css
--bg: #f7ecd2, --fg: #14262b, --accent: #e0692b, --surface: #ffffff, --radius: 40px 4px 40px 4px, --spacing: 16px, --font-display: 'Trend Sans', 'Bank Gothic', 'Century Gothic', sans-serif, --font-body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
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

[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)[![Raygun Gothic](https://designmd.app/images/library/708.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Raygun Gothic](https://designmd.app/library/raygun-gothic)[![Space Age Pop](https://designmd.app/images/library/720.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Space Age Pop](https://designmd.app/library/space-age)

Last synced: 8/30/2026
