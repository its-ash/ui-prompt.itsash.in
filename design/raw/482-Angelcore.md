# Angelcore

- Source: <https://designmd.app/library/angelcore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:17.403Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Angelcore

Reference for subculturas & estéticas de nicho Angelcore. Ethereal celestial/religious-art aesthetic.

Angelcoreethereal coreCherubs, clouds, soft gold lightWhite/cream/pale gold, halosRenaissance-painting referencesDivine, soft, romanticniche

Use case: hero, superfície, conteúdo e grade responsiva; Cherubs, clouds, soft gold light; White/cream/pale gold, halos

![Angelcore](https://designmd.app/images/library/572.png)

## Historical Context

Ethereal celestial/religious-art aesthetic. Example: Angelcore moodboards; Renaissance-cherub edits..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Angelcore"
description: "Angelcore visual system, translated from the Claude Artisan catalog for use in digital products. Cherubs, clouds, soft gold light; White/cream/pale gold, halos"
colors:
primary: "#c9a24b"
background: "#fdf9f0"
surface: "#ffffff"
text: "#4a3f2a"
accent: "#f2c98a"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Playfair Display', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Cormorant Garamond', 'Georgia', serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Cormorant Garamond', 'Georgia', serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "18px"
lg: "28px"
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

Angelcore visual system, translated from the Claude Artisan catalog for use in digital products. Cherubs, clouds, soft gold light; White/cream/pale gold, halos

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Ethereal celestial/religious-art aesthetic.
- **Reference:** Angelcore moodboards; Renaissance-cherub edits.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Cherubs, clouds, soft gold light
- White/cream/pale gold, halos
- Renaissance-painting references
- Divine, soft, romantic

## Colors

- **bg** — #fdf9f0
- **surface** — #ffffff
- **surface-strong** — #fbf1dc
- **border** — #e8d5a8
- **text** — #4a3f2a
- **text-muted** — #7a6849
- **primary** — #c9a24b
- **accent** — #f2c98a
- **halo** — #fff4d6

## Typography

- Display: 'Cormorant Garamond', 'Playfair Display', serif
- Body: 'Cormorant Garamond', 'Georgia', serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cherubs, clouds, soft gold light; White/cream/pale gold, halos; Renaissance-painting references; Divine, soft, romantic; sombras e elevação

## Shapes

- Radius scale: 10px, 18px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/angelcore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Angelcore — design tokens */
/* 2019–present | Ethereal celestial/religious-art aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf9f0;
--color-surface: #ffffff;
--color-surface-strong: #fbf1dc;
--color-border: #e8d5a8;
--color-text: #4a3f2a;
--color-text-muted: #7a6849;
--color-primary: #c9a24b;
--color-accent: #f2c98a;
--color-halo: #fff4d6;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 12px rgba(201,162,75,0.15);
--shadow-md: 0 10px 30px rgba(201,162,75,0.2);
--shadow-lg: 0 24px 60px rgba(201,162,75,0.25);
--shadow-halo: 0 0 0 8px rgba(242,201,138,0.22), 0 0 40px rgba(242,201,138,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'Georgia', serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1.05rem;
--text-lg: 1.2rem;
--text-xl: 1.5rem;
--text-2xl: 1.9rem;
--text-3xl: 2.5rem;
--text-4xl: 3.4rem;
--text-5xl: 4.6rem;
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
/* extra: gold halo glow + soft cloud gradient */
--bg-image: radial-gradient(60% 40% at 50% 0%, #fff4d6 0%, transparent 65%), var(--color-bg);
--halo-ring: radial-gradient(circle, rgba(242,201,138,0.5) 0%, rgba(242,201,138,0) 70%);
}

/* ============================================================
Base component classes — Angelcore
Signature move: a soft gold halo glow (a feathered radial ring)
surrounding interactive elements, echoing a painted halo of light.
Repeats on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-halo);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-halo); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); color: #4a3f2a; box-shadow: var(--shadow-halo); border: none; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md), var(--shadow-halo);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-halo); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-style: italic;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-halo); border: 1px solid var(--color-border); color: var(--color-text);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/angelcore.md */
```

### Variables

```
--bg: #fdf9f0, --fg: #4a3f2a, --accent: #c9a24b, --surface: #ffffff, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Cormorant Garamond', 'Georgia', serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fdf9f0

#ffffff

#fbf1dc

#e8d5a8

Secondary

#4a3f2a

#7a6849

#c9a24b

#f2c98a

#fff4d6

### Effects

Cherubs, clouds, soft gold light, White/cream/pale gold, halos, Renaissance-painting references, Divine, soft, romantic, shadow

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

- **Name:** Angelcore
- **Type:** claude-artisan/niche
- **Keywords:** Angelcore, ethereal core, Cherubs, clouds, soft gold light, White/cream/pale gold, halos, Renaissance-painting references, Divine, soft, romantic, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fdf9f0, surface: #ffffff, surface-strong: #fbf1dc, border: #e8d5a8
- **Secondary:** text: #4a3f2a, text-muted: #7a6849, primary: #c9a24b, accent: #f2c98a, halo: #fff4d6

## Visual Effects

Cherubs, clouds, soft gold light, White/cream/pale gold, halos, Renaissance-painting references, Divine, soft, romantic, shadow

## AI Visual Direction

Angelcore, Cherubs, clouds, soft gold light, White/cream/pale gold, halos, Renaissance-painting references, Divine, soft, romantic, Angelcore moodboards; Renaissance-cherub edits.

## CSS Technical

```css
/* Angelcore — design tokens */
/* 2019–present | Ethereal celestial/religious-art aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf9f0;
--color-surface: #ffffff;
--color-surface-strong: #fbf1dc;
--color-border: #e8d5a8;
--color-text: #4a3f2a;
--color-text-muted: #7a6849;
--color-primary: #c9a24b;
--color-accent: #f2c98a;
--color-halo: #fff4d6;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 12px rgba(201,162,75,0.15);
--shadow-md: 0 10px 30px rgba(201,162,75,0.2);
--shadow-lg: 0 24px 60px rgba(201,162,75,0.25);
--shadow-halo: 0 0 0 8px rgba(242,201,138,0.22), 0 0 40px rgba(242,201,138,0.35);
/* font */
--font-sans: 'Cormorant Garamond', 'Georgia', serif;
--font-display: 'Cormorant Garamond', 'Playfair Display', serif;
--font-mono: ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.9rem;
--text-base: 1.05rem;
--text-lg: 1.2rem;
--text-xl: 1.5rem;
--text-2xl: 1.9rem;
--text-3xl: 2.5rem;
--text-4xl: 3.4rem;
--text-5xl: 4.6rem;
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
/* extra: gold halo glow + soft cloud gradient */
--bg-image: radial-gradient(60% 40% at 50% 0%, #fff4d6 0%, transparent 65%), var(--color-bg);
--halo-ring: radial-gradient(circle, rgba(242,201,138,0.5) 0%, rgba(242,201,138,0) 70%);
}

/* ============================================================
Base component classes — Angelcore
Signature move: a soft gold halo glow (a feathered radial ring)
surrounding interactive elements, echoing a painted halo of light.
Repeats on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-halo);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: box-shadow .3s var(--ease-standard), transform .3s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-halo); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: linear-gradient(135deg, var(--color-accent), var(--color-primary)); color: #4a3f2a; box-shadow: var(--shadow-halo); border: none; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md), var(--shadow-halo);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-halo); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-style: italic;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-halo); border: 1px solid var(--color-border); color: var(--color-text);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/angelcore.md */
```

## Design System Variables

```css
--bg: #fdf9f0, --fg: #4a3f2a, --accent: #c9a24b, --surface: #ffffff, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Playfair Display', serif, --font-body: 'Cormorant Garamond', 'Georgia', serif
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

[![Fairycore](https://designmd.app/images/library/633.png) Claude Artisan · Subculturas & estéticas de nicho ### Fairycore](https://designmd.app/library/fairycore)[![Light Academia](https://designmd.app/images/library/667.png) Claude Artisan · Subculturas & estéticas de nicho ### Light Academia](https://designmd.app/library/light-academia)

Last synced: 8/30/2026
