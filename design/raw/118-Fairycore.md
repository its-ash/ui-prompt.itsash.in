# Fairycore

- Source: <https://designmd.app/library/fairycore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:23.304Z

Claude Artisan · Subculturas & estéticas de nicho2020–present

# Fairycore

Reference for subculturas & estéticas de nicho Fairycore. Whimsical fairy-tale nature aesthetic.

FairycorefaeriecoreEthereal pastels, wings, flowers, glowEnchanted-forest whimsySparkle and soft lightDreamy, magical, delicateniche

Use case: hero, superfície, conteúdo e grade responsiva; Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy

![Fairycore](https://designmd.app/images/library/633.png)

## Historical Context

Whimsical fairy-tale nature aesthetic. Example: Fairycore Pinterest/TikTok..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Fairycore"
description: "Fairycore visual system, translated from the Claude Artisan catalog for use in digital products. Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy"
colors:
primary: "#c9679a"
background: "#fdf3f8"
surface: "#fffdfb"
text: "#4a2b45"
accent: "#8fb98a"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cormorant Garamond', 'Parisienne', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Quicksand', 'Nunito', system-ui, sans-serif"
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

Fairycore visual system, translated from the Claude Artisan catalog for use in digital products. Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy

- **Category:** niche
- **Era:** 2020–present
- **Origin:** Whimsical fairy-tale nature aesthetic.
- **Reference:** Fairycore Pinterest/TikTok.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Ethereal pastels, wings, flowers, glow
- Enchanted-forest whimsy
- Sparkle and soft light
- Dreamy, magical, delicate

## Colors

- **bg** — #fdf3f8
- **bg-gradient-a** — #f6e3f5
- **bg-gradient-b** — #e3f0e6
- **surface** — #fffdfb
- **surface-strong** — #fbeaf3
- **border** — #e7bfd9
- **text** — #4a2b45
- **text-muted** — #7a5573
- **primary** — #c9679a
- **accent** — #8fb98a
- **glow** — #fff3c4

## Typography

- Display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif
- Body: 'Quicksand', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Ethereal pastels, wings, flowers, glow; Enchanted-forest whimsy; Sparkle and soft light; Dreamy, magical, delicate; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/fairycore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Fairycore — design tokens */
/* 2020–present | Whimsical fairy-tale nature aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf3f8;
--color-bg-gradient-a: #f6e3f5;
--color-bg-gradient-b: #e3f0e6;
--color-surface: #fffdfb;
--color-surface-strong: #fbeaf3;
--color-border: #e7bfd9;
--color-text: #4a2b45;
--color-text-muted: #7a5573;
--color-primary: #c9679a;
--color-accent: #8fb98a;
--color-glow: #fff3c4;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(201,103,154,0.16);
--shadow-md: 0 8px 24px rgba(201,103,154,0.20);
--shadow-lg: 0 16px 40px rgba(201,103,154,0.24);
--shadow-glow: 0 0 24px rgba(255,243,196,0.55);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
/* extra: sparkle dot field + a soft glow halo, the two signature moves
that repeat across nav/card/btn to read as "enchanted", not just pastel */
--bg-image: radial-gradient(60% 50% at 15% 0%, var(--color-bg-gradient-b) 0%, transparent 60%),
radial-gradient(70% 60% at 100% 20%, var(--color-bg-gradient-a) 0%, transparent 65%),
var(--color-bg);
--sparkle-field: radial-gradient(circle, rgba(255,255,255,0.9) 0 1px, transparent 1.5px) 0 0/26px 26px,
radial-gradient(circle, rgba(255,243,196,0.8) 0 1px, transparent 1.5px) 13px 13px/26px 26px;
}

/* ============================================================
Base component classes — fairycore
Signature move: a soft golden glow halo (--shadow-glow) plus a scattered
sparkle-dot field (--sparkle-field), repeated across nav, card and btn
so surfaces feel lit from within rather than merely pastel-colored.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); background-image: var(--sparkle-field);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm), var(--shadow-glow);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-glow); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff7fb; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--sparkle-field);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-glow); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(201,103,154,0.22), var(--shadow-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #24361f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/fairycore.md */
```

### Variables

```
--bg: #fdf3f8, --fg: #4a2b45, --accent: #c9679a, --surface: #fffdfb, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fdf3f8

#f6e3f5

#e3f0e6

#fffdfb

Secondary

#fbeaf3

#e7bfd9

#4a2b45

#7a5573

#c9679a

#8fb98a

#fff3c4

### Effects

Ethereal pastels, wings, flowers, glow, Enchanted-forest whimsy, Sparkle and soft light, Dreamy, magical, delicate, shadow

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

- **Name:** Fairycore
- **Type:** claude-artisan/niche
- **Keywords:** Fairycore, faeriecore, Ethereal pastels, wings, flowers, glow, Enchanted-forest whimsy, Sparkle and soft light, Dreamy, magical, delicate, niche
- **Era:** 2020–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fdf3f8, bg-gradient-a: #f6e3f5, bg-gradient-b: #e3f0e6, surface: #fffdfb
- **Secondary:** surface-strong: #fbeaf3, border: #e7bfd9, text: #4a2b45, text-muted: #7a5573, primary: #c9679a, accent: #8fb98a, glow: #fff3c4

## Visual Effects

Ethereal pastels, wings, flowers, glow, Enchanted-forest whimsy, Sparkle and soft light, Dreamy, magical, delicate, shadow

## AI Visual Direction

Fairycore, Ethereal pastels, wings, flowers, glow, Enchanted-forest whimsy, Sparkle and soft light, Dreamy, magical, delicate, Fairycore Pinterest/TikTok.

## CSS Technical

```css
/* Fairycore — design tokens */
/* 2020–present | Whimsical fairy-tale nature aesthetic, condensed */
:root {
/* color */
--color-bg: #fdf3f8;
--color-bg-gradient-a: #f6e3f5;
--color-bg-gradient-b: #e3f0e6;
--color-surface: #fffdfb;
--color-surface-strong: #fbeaf3;
--color-border: #e7bfd9;
--color-text: #4a2b45;
--color-text-muted: #7a5573;
--color-primary: #c9679a;
--color-accent: #8fb98a;
--color-glow: #fff3c4;
/* radius */
--radius-sm: 10px;
--radius-md: 18px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(201,103,154,0.16);
--shadow-md: 0 8px 24px rgba(201,103,154,0.20);
--shadow-lg: 0 16px 40px rgba(201,103,154,0.24);
--shadow-glow: 0 0 24px rgba(255,243,196,0.55);
/* font */
--font-sans: 'Quicksand', 'Nunito', system-ui, sans-serif;
--font-display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
/* extra: sparkle dot field + a soft glow halo, the two signature moves
that repeat across nav/card/btn to read as "enchanted", not just pastel */
--bg-image: radial-gradient(60% 50% at 15% 0%, var(--color-bg-gradient-b) 0%, transparent 60%),
radial-gradient(70% 60% at 100% 20%, var(--color-bg-gradient-a) 0%, transparent 65%),
var(--color-bg);
--sparkle-field: radial-gradient(circle, rgba(255,255,255,0.9) 0 1px, transparent 1.5px) 0 0/26px 26px,
radial-gradient(circle, rgba(255,243,196,0.8) 0 1px, transparent 1.5px) 13px 13px/26px 26px;
}

/* ============================================================
Base component classes — fairycore
Signature move: a soft golden glow halo (--shadow-glow) plus a scattered
sparkle-dot field (--sparkle-field), repeated across nav, card and btn
so surfaces feel lit from within rather than merely pastel-colored.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); background-image: var(--sparkle-field);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm), var(--shadow-glow);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-glow); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fff7fb; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--sparkle-field);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-glow); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(201,103,154,0.22), var(--shadow-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #24361f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/fairycore.md */
```

## Design System Variables

```css
--bg: #fdf3f8, --fg: #4a2b45, --accent: #c9679a, --surface: #fffdfb, --radius: 18px, --spacing: 16px, --font-display: 'Cormorant Garamond', 'Parisienne', 'Georgia', serif, --font-body: 'Quicksand', 'Nunito', system-ui, sans-serif
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

[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)[![Angelcore](https://designmd.app/images/library/572.png) Claude Artisan · Subculturas & estéticas de nicho ### Angelcore](https://designmd.app/library/angelcore)

Last synced: 8/30/2026
