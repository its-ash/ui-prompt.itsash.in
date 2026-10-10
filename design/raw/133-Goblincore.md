# Goblincore

- Source: <https://designmd.app/library/goblincore>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:46.311Z

Claude Artisan · Subculturas & estéticas de nicho2019–present

# Goblincore

Reference for subculturas & estéticas de nicho Goblincore. Earthy 'ugly-cute' nature subculture.

GoblincoregremlincoreMushrooms, moss, frogs, snails, shiny trinketsMuddy greens and brownsChaotic natural collectingAnti-perfection, whimsicalniche

Use case: hero, superfície, conteúdo e grade responsiva; Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns

![Goblincore](https://designmd.app/images/library/647.png)

## Historical Context

Earthy 'ugly-cute' nature subculture. Example: Goblincore Tumblr/TikTok..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Goblincore"
description: "Goblincore visual system, translated from the Claude Artisan catalog for use in digital products. Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns"
colors:
primary: "#7c9a4a"
background: "#3a3222"
surface: "#4a4128"
text: "#f1ead2"
accent: "#d4a72c"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Fredericka the Great', 'Amatic SC', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
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

Goblincore visual system, translated from the Claude Artisan catalog for use in digital products. Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns

- **Category:** niche
- **Era:** 2019–present
- **Origin:** Earthy 'ugly-cute' nature subculture.
- **Reference:** Goblincore Tumblr/TikTok.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Mushrooms, moss, frogs, snails, shiny trinkets
- Muddy greens and browns
- Chaotic natural collecting
- Anti-perfection, whimsical

## Colors

- **bg** — #3a3222
- **surface** — #4a4128
- **surface-strong** — #574c2e
- **border** — #6b5c34
- **text** — #f1ead2
- **text-muted** — #c9bd97
- **primary** — #7c9a4a
- **accent** — #d4a72c
- **moss** — #556b2f

## Typography

- Display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif
- Body: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Mushrooms, moss, frogs, snails, shiny trinkets; Muddy greens and browns; Chaotic natural collecting; Anti-perfection, whimsical; sombras e elevação

## Shapes

- Radius scale: 6px, 40% 60% 55% 45% / 45% 40% 60% 55%, 55% 45% 40% 60% / 50% 55% 45% 50%.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/goblincore/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Goblincore — design tokens */
/* 2019–present | Earthy "ugly-cute" nature subculture, condensed */
:root {
/* color */
--color-bg: #3a3222;
--color-surface: #4a4128;
--color-surface-strong: #574c2e;
--color-border: #6b5c34;
--color-text: #f1ead2;
--color-text-muted: #c9bd97;
--color-primary: #7c9a4a;
--color-accent: #d4a72c;
--color-moss: #556b2f;
/* radius: irregular, organic blob shapes instead of clean rounding */
--radius-sm: 6px;
--radius-md: 40% 60% 55% 45% / 45% 40% 60% 55%;
--radius-lg: 55% 45% 40% 60% / 50% 55% 45% 50%;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(20,17,8,0.35);
--shadow-md: 0 8px 20px rgba(20,17,8,0.4);
--shadow-lg: 0 16px 36px rgba(20,17,8,0.45);
/* font */
--font-sans: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif;
--font-display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif;
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
/* extra: mottled moss/mud texture (radial spots) plus the irregular blob
border-radius — the two signature moves that resist "clean" corners,
repeated on card, btn and nav for the anti-perfection collector feel */
--mottle: radial-gradient(circle at 20% 30%, rgba(124,154,74,0.25) 0 12px, transparent 13px),
radial-gradient(circle at 70% 65%, rgba(212,167,44,0.18) 0 8px, transparent 9px),
radial-gradient(circle at 45% 85%, rgba(124,154,74,0.2) 0 10px, transparent 11px);
}

/* ============================================================
Base component classes — goblincore
Signature move: irregular "found object" blob radius (--radius-md/lg)
plus a mottled moss-and-mud spot texture (--mottle), repeated on nav,
card and btn so nothing lines up into a tidy grid — deliberately.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--mottle); border-bottom: 2px solid var(--color-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); background-image: var(--mottle);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) translateY(-1px); }
.btn:active { transform: rotate(0) translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); background-image: none; color: #1c2410; border-color: var(--color-moss); }
.card {
background: var(--color-surface); background-image: var(--mottle);
border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(212,167,44,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2c2205; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/goblincore.md */
```

### Variables

```
--bg: #3a3222, --fg: #f1ead2, --accent: #7c9a4a, --surface: #4a4128, --radius: 40% 60% 55% 45% / 45% 40% 60% 55%, --spacing: 16px, --font-display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif, --font-body: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#3a3222

#4a4128

#574c2e

#6b5c34

Secondary

#f1ead2

#c9bd97

#7c9a4a

#d4a72c

#556b2f

### Effects

Mushrooms, moss, frogs, snails, shiny trinkets, Muddy greens and browns, Chaotic natural collecting, Anti-perfection, whimsical, shadow

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

- **Name:** Goblincore
- **Type:** claude-artisan/niche
- **Keywords:** Goblincore, gremlincore, Mushrooms, moss, frogs, snails, shiny trinkets, Muddy greens and browns, Chaotic natural collecting, Anti-perfection, whimsical, niche
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #3a3222, surface: #4a4128, surface-strong: #574c2e, border: #6b5c34
- **Secondary:** text: #f1ead2, text-muted: #c9bd97, primary: #7c9a4a, accent: #d4a72c, moss: #556b2f

## Visual Effects

Mushrooms, moss, frogs, snails, shiny trinkets, Muddy greens and browns, Chaotic natural collecting, Anti-perfection, whimsical, shadow

## AI Visual Direction

Goblincore, Mushrooms, moss, frogs, snails, shiny trinkets, Muddy greens and browns, Chaotic natural collecting, Anti-perfection, whimsical, Goblincore Tumblr/TikTok.

## CSS Technical

```css
/* Goblincore — design tokens */
/* 2019–present | Earthy "ugly-cute" nature subculture, condensed */
:root {
/* color */
--color-bg: #3a3222;
--color-surface: #4a4128;
--color-surface-strong: #574c2e;
--color-border: #6b5c34;
--color-text: #f1ead2;
--color-text-muted: #c9bd97;
--color-primary: #7c9a4a;
--color-accent: #d4a72c;
--color-moss: #556b2f;
/* radius: irregular, organic blob shapes instead of clean rounding */
--radius-sm: 6px;
--radius-md: 40% 60% 55% 45% / 45% 40% 60% 55%;
--radius-lg: 55% 45% 40% 60% / 50% 55% 45% 50%;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(20,17,8,0.35);
--shadow-md: 0 8px 20px rgba(20,17,8,0.4);
--shadow-lg: 0 16px 36px rgba(20,17,8,0.45);
/* font */
--font-sans: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif;
--font-display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif;
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
/* extra: mottled moss/mud texture (radial spots) plus the irregular blob
border-radius — the two signature moves that resist "clean" corners,
repeated on card, btn and nav for the anti-perfection collector feel */
--mottle: radial-gradient(circle at 20% 30%, rgba(124,154,74,0.25) 0 12px, transparent 13px),
radial-gradient(circle at 70% 65%, rgba(212,167,44,0.18) 0 8px, transparent 9px),
radial-gradient(circle at 45% 85%, rgba(124,154,74,0.2) 0 10px, transparent 11px);
}

/* ============================================================
Base component classes — goblincore
Signature move: irregular "found object" blob radius (--radius-md/lg)
plus a mottled moss-and-mud spot texture (--mottle), repeated on nav,
card and btn so nothing lines up into a tidy grid — deliberately.
============================================================ */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--mottle); border-bottom: 2px solid var(--color-border);
}
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); background-image: var(--mottle);
border: 2px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard);
}
.btn:hover { transform: rotate(-1deg) translateY(-1px); }
.btn:active { transform: rotate(0) translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); background-image: none; color: #1c2410; border-color: var(--color-moss); }
.card {
background: var(--color-surface); background-image: var(--mottle);
border: 2px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px rgba(212,167,44,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #2c2205; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/goblincore.md */
```

## Design System Variables

```css
--bg: #3a3222, --fg: #f1ead2, --accent: #7c9a4a, --surface: #4a4128, --radius: 40% 60% 55% 45% / 45% 40% 60% 55%, --spacing: 16px, --font-display: 'Fredericka the Great', 'Amatic SC', 'Georgia', serif, --font-body: 'Atkinson Hyperlegible', 'Nunito', system-ui, sans-serif
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

[![Cottagecore](https://designmd.app/images/library/605.png) Claude Artisan · Subculturas & estéticas de nicho ### Cottagecore](https://designmd.app/library/cottagecore)[![Fairycore](https://designmd.app/images/library/633.png) Claude Artisan · Subculturas & estéticas de nicho ### Fairycore](https://designmd.app/library/fairycore)

Last synced: 8/30/2026
