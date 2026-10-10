# Maximalism

- Source: <https://designmd.app/library/maximalism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:46.319Z

Claude Artisan · Minimal, maximal & orgânico2018–present

# Maximalism

Reference for minimal, maximal & orgânico Maximalism. Reaction against flat minimalism; 'more is more'.

Maximalismmore is moremaximalDense layering, clashing color and patternBig expressive type, many focal pointsOrnament, texture, collage, saturationBold, joyful visual overloadminimal-organic

Use case: composição editorial com grade tipográfica; Dense layering, clashing color and pattern; Big expressive type, many focal points

![Maximalism](https://designmd.app/images/library/680.png)

## Historical Context

Reaction against flat minimalism; 'more is more'. Example: Gucci editorial; many 2020s portfolio/agency sites..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Maximalism"
description: "Maximalism visual system, translated from the Claude Artisan catalog for use in digital products. Dense layering, clashing color and pattern; Big expressive type, many focal points"
colors:
primary: "#ff007a"
background: "#14002e"
surface: "#2a0a52"
text: "#fff6d5"
accent: "#ffd400"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Rubik Mono One', 'Fraunces', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Fraunces', 'Poppins', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Fraunces', 'Poppins', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "16px"
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

Maximalism visual system, translated from the Claude Artisan catalog for use in digital products. Dense layering, clashing color and pattern; Big expressive type, many focal points

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Reaction against flat minimalism; 'more is more'.
- **Reference:** Gucci editorial; many 2020s portfolio/agency sites.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Dense layering, clashing color and pattern
- Big expressive type, many focal points
- Ornament, texture, collage, saturation
- Bold, joyful visual overload

## Colors

- **bg** — #14002e
- **surface** — #2a0a52
- **text** — #fff6d5
- **text-muted** — #f2c9ff
- **primary** — #ff007a
- **accent** — #ffd400
- **lime** — #aaff00
- **cyan** — #00e5ff
- **orange** — #ff6a00

## Typography

- Display: 'Rubik Mono One', 'Fraunces', serif
- Body: 'Fraunces', 'Poppins', system-ui, sans-serif
- Mono: 'Space Mono', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense layering, clashing color and pattern; Big expressive type, many focal points; Ornament, texture, collage, saturation; Bold, joyful visual overload; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/maximalism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Maximalism — design tokens (generated from style_catalog.json) */
/* 2018–present | Reaction against flat minimalism; 'more is more'. */
:root {
/* color */
--color-bg: #14002e;
--color-surface: #2a0a52;
--color-text: #fff6d5;
--color-text-muted: #f2c9ff;
--color-primary: #ff007a;
--color-accent: #ffd400;
--color-lime: #aaff00;
--color-cyan: #00e5ff;
--color-orange: #ff6a00;
/* radius */
--radius-sm: 6px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-pop: 8px 8px 0 #ffd400, 16px 16px 0 #ff007a;
--shadow-glow: 0 0 24px rgba(255,0,122,0.6);
/* font */
--font-sans: 'Fraunces', 'Poppins', system-ui, sans-serif;
--font-display: 'Rubik Mono One', 'Fraunces', serif;
--font-mono: 'Space Mono', monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 1rem;
--text-base: 1.15rem;
--text-lg: 1.5rem;
--text-xl: 2.1rem;
--text-2xl: 3rem;
--text-3xl: 4.2rem;
--text-4xl: 6rem;
--text-5xl: 8.5rem;
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
--clash: linear-gradient(135deg, #ff007a, #ffd400, #00e5ff);
}

/* ============================================================
Base component classes — Maximalism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/maximalism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-glow);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-glow); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-glow); cursor: pointer; border: 1px solid var(--color-border, transparent);
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

/* Especificação de referência: references/00-flagship-implementation-specs/maximalism.md */
```

### Variables

```
--bg: #14002e, --fg: #fff6d5, --accent: #ff007a, --surface: #2a0a52, --radius: 16px, --spacing: 16px, --font-display: 'Rubik Mono One', 'Fraunces', serif, --font-body: 'Fraunces', 'Poppins', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#14002e

#2a0a52

#fff6d5

#f2c9ff

Secondary

#ff007a

#ffd400

#aaff00

#00e5ff

#ff6a00

### Effects

Dense layering, clashing color and pattern, Big expressive type, many focal points, Ornament, texture, collage, saturation, Bold, joyful visual overload, shadow, blur

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

- **Name:** Maximalism
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Maximalism, more is more, maximal, Dense layering, clashing color and pattern, Big expressive type, many focal points, Ornament, texture, collage, saturation, Bold, joyful visual overload, minimal-organic
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #14002e, surface: #2a0a52, text: #fff6d5, text-muted: #f2c9ff
- **Secondary:** primary: #ff007a, accent: #ffd400, lime: #aaff00, cyan: #00e5ff, orange: #ff6a00

## Visual Effects

Dense layering, clashing color and pattern, Big expressive type, many focal points, Ornament, texture, collage, saturation, Bold, joyful visual overload, shadow, blur

## AI Visual Direction

Maximalism, Dense layering, clashing color and pattern, Big expressive type, many focal points, Ornament, texture, collage, saturation, Bold, joyful visual overload, Gucci editorial; many 2020s portfolio/agency sites.

## CSS Technical

```css
/* Maximalism — design tokens (generated from style_catalog.json) */
/* 2018–present | Reaction against flat minimalism; 'more is more'. */
:root {
/* color */
--color-bg: #14002e;
--color-surface: #2a0a52;
--color-text: #fff6d5;
--color-text-muted: #f2c9ff;
--color-primary: #ff007a;
--color-accent: #ffd400;
--color-lime: #aaff00;
--color-cyan: #00e5ff;
--color-orange: #ff6a00;
/* radius */
--radius-sm: 6px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-pop: 8px 8px 0 #ffd400, 16px 16px 0 #ff007a;
--shadow-glow: 0 0 24px rgba(255,0,122,0.6);
/* font */
--font-sans: 'Fraunces', 'Poppins', system-ui, sans-serif;
--font-display: 'Rubik Mono One', 'Fraunces', serif;
--font-mono: 'Space Mono', monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 1rem;
--text-base: 1.15rem;
--text-lg: 1.5rem;
--text-xl: 2.1rem;
--text-2xl: 3rem;
--text-3xl: 4.2rem;
--text-4xl: 6rem;
--text-5xl: 8.5rem;
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
--clash: linear-gradient(135deg, #ff007a, #ffd400, #00e5ff);
}

/* ============================================================
Base component classes — Maximalism (token-driven).
Signature move lives in references/00-flagship-implementation-specs/maximalism.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-glow);
padding: var(--space-6, 24px); border: 1px solid var(--color-border, transparent); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
box-shadow: var(--shadow-glow); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-glow); cursor: pointer; border: 1px solid var(--color-border, transparent);
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

/* Especificação de referência: references/00-flagship-implementation-specs/maximalism.md */
```

## Design System Variables

```css
--bg: #14002e, --fg: #fff6d5, --accent: #ff007a, --surface: #2a0a52, --radius: 16px, --spacing: 16px, --font-display: 'Rubik Mono One', 'Fraunces', serif, --font-body: 'Fraunces', 'Poppins', system-ui, sans-serif
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

[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)[![Neubrutalism](https://designmd.app/images/library/38.png) Brutalismo ### Neubrutalism](https://designmd.app/library/neubrutalism)

Last synced: 8/30/2026
