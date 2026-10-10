# Circus / Carnival Poster

- Source: <https://designmd.app/library/circus-carnival>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:20.318Z

Claude Artisan · Subculturas & estéticas de nicho1870s–1950s (revival ongoing)

# Circus / Carnival Poster

Reference for subculturas & estéticas de nicho Circus / Carnival Poster. Vintage traveling-circus and carnival midway advertising posters and handbills, especially American circus lithography of the Strobridge / Barnum & Bailey era.

Circus / Carnival Postercircus postercarnival midwaybig top letteringshowman advertisingBold red/gold/cream striped and starburst backgroundsTall theatrical condensed display lettering (bill/showman type)Ornate double-line scrolled bordersHigh-energy showman excitement — 'step right up' urgencyniche

Use case: composição editorial com grade tipográfica; Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type)

![Circus / Carnival Poster](https://designmd.app/images/library/598.png)

## Historical Context

Vintage traveling-circus and carnival midway advertising posters and handbills, especially American circus lithography of the Strobridge / Barnum & Bailey era. Example: Barnum & Bailey circus posters; Strobridge Lithographing Co. bills; state-fair midway signage..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Circus / Carnival Poster"
description: "Circus / Carnival Poster visual system, translated from the Claude Artisan catalog for use in digital products. Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type)"
colors:
primary: "#c81d25"
background: "#f2e6c9"
surface: "#fdf8ec"
text: "#241812"
accent: "#d4a017"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Josefin Sans', 'Oswald', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Josefin Sans', 'Oswald', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "6px"
lg: "14px"
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

Circus / Carnival Poster visual system, translated from the Claude Artisan catalog for use in digital products. Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type)

- **Category:** niche
- **Era:** 1870s–1950s (revival ongoing)
- **Origin:** Vintage traveling-circus and carnival midway advertising posters and handbills, especially American circus lithography of the Strobridge / Barnum & Bailey era.
- **Reference:** Barnum & Bailey circus posters; Strobridge Lithographing Co. bills; state-fair midway signage.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Bold red/gold/cream striped and starburst backgrounds
- Tall theatrical condensed display lettering (bill/showman type)
- Ornate double-line scrolled borders
- High-energy showman excitement — 'step right up' urgency

## Colors

- **bg** — #f2e6c9
- **surface** — #fdf8ec
- **surface-2** — #e8d6a8
- **text** — #241812
- **text-muted** — #5c4429
- **primary** — #c81d25
- **accent** — #d4a017
- **navy** — #1c2a52
- **cream** — #f2e6c9

## Typography

- Display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif
- Body: 'Josefin Sans', 'Oswald', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bold red/gold/cream striped and starburst backgrounds; Tall theatrical condensed display lettering (bill/showman type); Ornate double-line scrolled borders; High-energy showman excitement — 'step right up' urgency; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 6px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/circus-carnival/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Circus / Carnival Poster — design tokens */
/* 1870s–1950s (revival ongoing) | Vintage traveling-circus and carnival midway advertising */
:root {
/* color */
--color-bg: #f2e6c9;
--color-surface: #fdf8ec;
--color-surface-2: #e8d6a8;
--color-text: #241812;
--color-text-muted: #5c4429;
--color-primary: #c81d25;
--color-accent: #d4a017;
--color-navy: #1c2a52;
--color-cream: #f2e6c9;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-poster: 0 6px 0 var(--color-navy), 0 10px 18px rgba(28,19,10,0.35);
--shadow-poster-sm: 0 3px 0 var(--color-navy), 0 4px 10px rgba(28,19,10,0.3);
/* font */
--font-sans: 'Josefin Sans', 'Oswald', system-ui, sans-serif;
--font-display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif;
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
/* extra: red/cream barber stripe + starburst wash + scrolled border */
--stripe-pattern: repeating-linear-gradient(135deg, var(--color-primary) 0 22px, var(--color-cream) 22px 44px);
--starburst-gradient: radial-gradient(circle at 50% 0%, rgba(212,160,23,0.35), transparent 55%);
--scroll-border: 3px double var(--color-navy);
}

/* ============================================================
Base component classes — Circus / Carnival Poster
Signature move: bold red/cream barber-pole stripes and a gold
starburst wash behind tall condensed bill lettering, framed by
a heavy double-scroll border. Repeat on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--starburst-gradient); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--scroll-border);
box-shadow: var(--shadow-poster-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-navy);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) rotate(-0.5deg); box-shadow: var(--shadow-poster-sm); }
.btn:active { transform: translateY(0) rotate(0); }
.btn:focus-visible { outline: 3px solid var(--color-navy); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-cream); border: 2px solid var(--color-navy);
box-shadow: var(--shadow-poster);
}
.btn--primary:hover { box-shadow: 0 8px 0 var(--color-navy), 0 14px 22px rgba(28,19,10,0.4); }
.card {
background: var(--color-surface); background-image: var(--starburst-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border: var(--scroll-border); box-shadow: var(--shadow-poster-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-navy);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(200,29,37,0.25); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display); letter-spacing: .04em;
padding: .4em .9em; border-radius: var(--radius-pill);
background: var(--stripe-pattern); background-size: 200% 200%; color: var(--color-cream);
border: 2px solid var(--color-navy); text-shadow: 0 1px 0 rgba(0,0,0,.35);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/circus-carnival.md */
```

### Variables

```
--bg: #f2e6c9, --fg: #241812, --accent: #c81d25, --surface: #fdf8ec, --radius: 6px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif, --font-body: 'Josefin Sans', 'Oswald', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2e6c9

#fdf8ec

#e8d6a8

#241812

Secondary

#5c4429

#c81d25

#d4a017

#1c2a52

#f2e6c9

### Effects

Bold red/gold/cream striped and starburst backgrounds, Tall theatrical condensed display lettering (bill/showman type), Ornate double-line scrolled borders, High-energy showman excitement — 'step right up' urgency, shadow, blur

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

- **Name:** Circus / Carnival Poster
- **Type:** claude-artisan/niche
- **Keywords:** Circus / Carnival Poster, circus poster, carnival midway, big top lettering, showman advertising, Bold red/gold/cream striped and starburst backgrounds, Tall theatrical condensed display lettering (bill/showman type), Ornate double-line scrolled borders, High-energy showman excitement — 'step right up' urgency, niche
- **Era:** 1870s–1950s (revival ongoing)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2e6c9, surface: #fdf8ec, surface-2: #e8d6a8, text: #241812
- **Secondary:** text-muted: #5c4429, primary: #c81d25, accent: #d4a017, navy: #1c2a52, cream: #f2e6c9

## Visual Effects

Bold red/gold/cream striped and starburst backgrounds, Tall theatrical condensed display lettering (bill/showman type), Ornate double-line scrolled borders, High-energy showman excitement — 'step right up' urgency, shadow, blur

## AI Visual Direction

Circus / Carnival Poster, Bold red/gold/cream striped and starburst backgrounds, Tall theatrical condensed display lettering (bill/showman type), Ornate double-line scrolled borders, High-energy showman excitement — 'step right up' urgency, Barnum & Bailey circus posters; Strobridge Lithographing Co. bills; state-fair midway signage.

## CSS Technical

```css
/* Circus / Carnival Poster — design tokens */
/* 1870s–1950s (revival ongoing) | Vintage traveling-circus and carnival midway advertising */
:root {
/* color */
--color-bg: #f2e6c9;
--color-surface: #fdf8ec;
--color-surface-2: #e8d6a8;
--color-text: #241812;
--color-text-muted: #5c4429;
--color-primary: #c81d25;
--color-accent: #d4a017;
--color-navy: #1c2a52;
--color-cream: #f2e6c9;
/* radius */
--radius-sm: 2px;
--radius-md: 6px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-poster: 0 6px 0 var(--color-navy), 0 10px 18px rgba(28,19,10,0.35);
--shadow-poster-sm: 0 3px 0 var(--color-navy), 0 4px 10px rgba(28,19,10,0.3);
/* font */
--font-sans: 'Josefin Sans', 'Oswald', system-ui, sans-serif;
--font-display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif;
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
/* extra: red/cream barber stripe + starburst wash + scrolled border */
--stripe-pattern: repeating-linear-gradient(135deg, var(--color-primary) 0 22px, var(--color-cream) 22px 44px);
--starburst-gradient: radial-gradient(circle at 50% 0%, rgba(212,160,23,0.35), transparent 55%);
--scroll-border: 3px double var(--color-navy);
}

/* ============================================================
Base component classes — Circus / Carnival Poster
Signature move: bold red/cream barber-pole stripes and a gold
starburst wash behind tall condensed bill lettering, framed by
a heavy double-scroll border. Repeat on nav, card, and buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--starburst-gradient); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: var(--scroll-border);
box-shadow: var(--shadow-poster-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 2px solid var(--color-navy);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) rotate(-0.5deg); box-shadow: var(--shadow-poster-sm); }
.btn:active { transform: translateY(0) rotate(0); }
.btn:focus-visible { outline: 3px solid var(--color-navy); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; box-shadow: none; }
.btn--primary {
background: var(--color-primary); color: var(--color-cream); border: 2px solid var(--color-navy);
box-shadow: var(--shadow-poster);
}
.btn--primary:hover { box-shadow: 0 8px 0 var(--color-navy), 0 14px 22px rgba(28,19,10,0.4); }
.card {
background: var(--color-surface); background-image: var(--starburst-gradient);
border-radius: var(--radius-lg); padding: var(--space-6);
border: var(--scroll-border); box-shadow: var(--shadow-poster-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-navy);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(200,29,37,0.25); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs)/1 var(--font-display); letter-spacing: .04em;
padding: .4em .9em; border-radius: var(--radius-pill);
background: var(--stripe-pattern); background-size: 200% 200%; color: var(--color-cream);
border: 2px solid var(--color-navy); text-shadow: 0 1px 0 rgba(0,0,0,.35);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/circus-carnival.md */
```

## Design System Variables

```css
--bg: #f2e6c9, --fg: #241812, --accent: #c81d25, --surface: #fdf8ec, --radius: 6px, --spacing: 16px, --font-display: 'Bebas Neue', 'Oswald', 'Arial Narrow', sans-serif, --font-body: 'Josefin Sans', 'Oswald', system-ui, sans-serif
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

[![WPA / Vintage Poster](https://designmd.app/images/library/757.png) Claude Artisan · Movimentos históricos ### WPA / Vintage Poster](https://designmd.app/library/wpa-poster)[![Retro Americana / Diner](https://designmd.app/images/library/569.png) Claude Artisan · Subculturas & estéticas de nicho ### Retro Americana / Diner](https://designmd.app/library/americana-diner)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)

Last synced: 8/30/2026
