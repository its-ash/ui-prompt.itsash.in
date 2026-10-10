# Chalkboard Lettering

- Source: <https://designmd.app/library/chalkboard-lettering>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:14.366Z

Claude Artisan · Movimentos históricos20th century–present (modern chalk-art revival)

# Chalkboard Lettering

Reference for movimentos históricos Chalkboard Lettering. Café and market chalkboard signage, revived as a hand-lettering art form in the 2010s.

Chalkboard Letteringchalk artcafe chalkboard stylehand-lettered chalkMatte near-black or slate backgrounds with textured chalk-dust strokesPlayful hand-drawn display lettering with varied stroke weightDoodled flourishes, underlines, and borders framing textSlightly uneven, hand-drawn edges on every shapehistorical

Use case: superfície material com conteúdo em camadas; Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight

![Chalkboard Lettering](https://designmd.app/images/library/595.png)

## Historical Context

Café and market chalkboard signage, revived as a hand-lettering art form in the 2010s. Example: Dana Tanamachi chalk lettering; neighborhood café menu boards..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Chalkboard Lettering"
description: "Chalkboard Lettering visual system, translated from the Claude Artisan catalog for use in digital products. Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight"
colors:
primary: "#f5f5f0"
background: "#1f2421"
surface: "#262b27"
text: "#f5f5f0"
accent: "#f4a6c1"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Caveat', 'Kalam', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Patrick Hand', 'Comic Neue', cursive"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Patrick Hand', 'Comic Neue', cursive"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
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

Chalkboard Lettering visual system, translated from the Claude Artisan catalog for use in digital products. Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight

- **Category:** historical
- **Era:** 20th century–present (modern chalk-art revival)
- **Origin:** Café and market chalkboard signage, revived as a hand-lettering art form in the 2010s.
- **Reference:** Dana Tanamachi chalk lettering; neighborhood café menu boards.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Matte near-black or slate backgrounds with textured chalk-dust strokes
- Playful hand-drawn display lettering with varied stroke weight
- Doodled flourishes, underlines, and borders framing text
- Slightly uneven, hand-drawn edges on every shape

## Colors

- **bg** — #1f2421
- **surface** — #262b27
- **surface-2** — #323830
- **text** — #f5f5f0
- **text-muted** — #b8bdb4
- **primary** — #f5f5f0
- **accent** — #f4a6c1
- **chalk-teal** — #8fd9c4
- **chalk-yellow** — #f5e08a

## Typography

- Display: 'Caveat', 'Kalam', cursive
- Body: 'Patrick Hand', 'Comic Neue', cursive
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Matte near-black or slate backgrounds with textured chalk-dust strokes; Playful hand-drawn display lettering with varied stroke weight; Doodled flourishes, underlines, and borders framing text; Slightly uneven, hand-drawn edges on every shape; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 8px, 16px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/chalkboard-lettering/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Chalkboard Lettering — design tokens */
/* 20th century–present | Café/market chalkboard signage revived as hand-lettering art */
:root {
/* color */
--color-bg: #1f2421;
--color-surface: #262b27;
--color-surface-2: #323830;
--color-text: #f5f5f0;
--color-text-muted: #b8bdb4;
--color-primary: #f5f5f0;
--color-accent: #f4a6c1;
--color-chalk-teal: #8fd9c4;
--color-chalk-yellow: #f5e08a;
/* radius */
--radius-sm: 3px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-chalk-dust: 0 2px 6px rgba(0,0,0,0.40);
--shadow-chalk-glow: 0 0 8px rgba(245,245,240,0.18);
/* blur */
--blur-dust: 0.4px;
/* font */
--font-sans: 'Patrick Hand', 'Comic Neue', cursive;
--font-display: 'Caveat', 'Kalam', cursive;
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
/* extra: subtle chalk-dust grain + slight hand-drawn wobble */
--chalk-texture: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.025) 0 1px, transparent 1px);
--wobble: rotate(-0.4deg);
}

/* ============================================================
Base component classes — Chalkboard Lettering
Signature move: matte slate ground, textured chalk-white and
pastel strokes, hand-drawn display lettering, uneven edges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--chalk-texture); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px dashed var(--color-text-muted);
}
.btn {
font: 500 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: transparent; border: 2px solid var(--color-text);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
transform: var(--wobble);
}
.btn:hover { box-shadow: var(--shadow-chalk-glow); transform: rotate(0.3deg) translateY(-1px); }
.btn:active { transform: var(--wobble) translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--color-chalk-yellow); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-text); color: var(--color-bg); font-weight: 700;
border: 2px solid var(--color-text); box-shadow: var(--shadow-chalk-dust);
}
.card {
background: var(--color-surface); background-image: var(--chalk-texture);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-surface-2); box-shadow: var(--shadow-chalk-dust);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-2); border-radius: 0;
background: transparent; border: none; border-bottom: 2px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-chalk-yellow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill);
background: transparent; border: 2px solid var(--color-chalk-teal); color: var(--color-chalk-teal);
font-family: var(--font-display); transform: rotate(1deg);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: var(--wobble); }
}

/* Especificação de referência: references/00-flagship-implementation-specs/chalkboard-lettering.md */
```

### Variables

```
--bg: #1f2421, --fg: #f5f5f0, --accent: #f5f5f0, --surface: #262b27, --radius: 8px, --spacing: 16px, --font-display: 'Caveat', 'Kalam', cursive, --font-body: 'Patrick Hand', 'Comic Neue', cursive
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1f2421

#262b27

#323830

#f5f5f0

Secondary

#b8bdb4

#f5f5f0

#f4a6c1

#8fd9c4

#f5e08a

### Effects

Matte near-black or slate backgrounds with textured chalk-dust strokes, Playful hand-drawn display lettering with varied stroke weight, Doodled flourishes, underlines, and borders framing text, Slightly uneven, hand-drawn edges on every shape, shadow, blur

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

- **Name:** Chalkboard Lettering
- **Type:** claude-artisan/historical
- **Keywords:** Chalkboard Lettering, chalk art, cafe chalkboard style, hand-lettered chalk, Matte near-black or slate backgrounds with textured chalk-dust strokes, Playful hand-drawn display lettering with varied stroke weight, Doodled flourishes, underlines, and borders framing text, Slightly uneven, hand-drawn edges on every shape, historical
- **Era:** 20th century–present (modern chalk-art revival)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1f2421, surface: #262b27, surface-2: #323830, text: #f5f5f0
- **Secondary:** text-muted: #b8bdb4, primary: #f5f5f0, accent: #f4a6c1, chalk-teal: #8fd9c4, chalk-yellow: #f5e08a

## Visual Effects

Matte near-black or slate backgrounds with textured chalk-dust strokes, Playful hand-drawn display lettering with varied stroke weight, Doodled flourishes, underlines, and borders framing text, Slightly uneven, hand-drawn edges on every shape, shadow, blur

## AI Visual Direction

Chalkboard Lettering, Matte near-black or slate backgrounds with textured chalk-dust strokes, Playful hand-drawn display lettering with varied stroke weight, Doodled flourishes, underlines, and borders framing text, Slightly uneven, hand-drawn edges on every shape, Dana Tanamachi chalk lettering; neighborhood café menu boards.

## CSS Technical

```css
/* Chalkboard Lettering — design tokens */
/* 20th century–present | Café/market chalkboard signage revived as hand-lettering art */
:root {
/* color */
--color-bg: #1f2421;
--color-surface: #262b27;
--color-surface-2: #323830;
--color-text: #f5f5f0;
--color-text-muted: #b8bdb4;
--color-primary: #f5f5f0;
--color-accent: #f4a6c1;
--color-chalk-teal: #8fd9c4;
--color-chalk-yellow: #f5e08a;
/* radius */
--radius-sm: 3px;
--radius-md: 8px;
--radius-lg: 16px;
--radius-pill: 999px;
/* shadow */
--shadow-chalk-dust: 0 2px 6px rgba(0,0,0,0.40);
--shadow-chalk-glow: 0 0 8px rgba(245,245,240,0.18);
/* blur */
--blur-dust: 0.4px;
/* font */
--font-sans: 'Patrick Hand', 'Comic Neue', cursive;
--font-display: 'Caveat', 'Kalam', cursive;
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
/* extra: subtle chalk-dust grain + slight hand-drawn wobble */
--chalk-texture: radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0 1px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.025) 0 1px, transparent 1px);
--wobble: rotate(-0.4deg);
}

/* ============================================================
Base component classes — Chalkboard Lettering
Signature move: matte slate ground, textured chalk-white and
pastel strokes, hand-drawn display lettering, uneven edges.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); background-image: var(--chalk-texture); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px dashed var(--color-text-muted);
}
.btn {
font: 500 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: transparent; border: 2px solid var(--color-text);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
transform: var(--wobble);
}
.btn:hover { box-shadow: var(--shadow-chalk-glow); transform: rotate(0.3deg) translateY(-1px); }
.btn:active { transform: var(--wobble) translateY(1px); }
.btn:focus-visible { outline: 2px solid var(--color-chalk-yellow); outline-offset: 3px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-text); color: var(--color-bg); font-weight: 700;
border: 2px solid var(--color-text); box-shadow: var(--shadow-chalk-dust);
}
.card {
background: var(--color-surface); background-image: var(--chalk-texture);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 2px solid var(--color-surface-2); box-shadow: var(--shadow-chalk-dust);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-2); border-radius: 0;
background: transparent; border: none; border-bottom: 2px solid var(--color-text-muted);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-chalk-yellow); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-sm); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill);
background: transparent; border: 2px solid var(--color-chalk-teal); color: var(--color-chalk-teal);
font-family: var(--font-display); transform: rotate(1deg);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .btn:active { transform: var(--wobble); }
}

/* Especificação de referência: references/00-flagship-implementation-specs/chalkboard-lettering.md */
```

## Design System Variables

```css
--bg: #1f2421, --fg: #f5f5f0, --accent: #f5f5f0, --surface: #262b27, --radius: 8px, --spacing: 16px, --font-display: 'Caveat', 'Kalam', cursive, --font-body: 'Patrick Hand', 'Comic Neue', cursive
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

[![Folk Art / Naive Art](https://designmd.app/images/library/640.png) Claude Artisan · Movimentos históricos ### Folk Art / Naive Art](https://designmd.app/library/folk-art-naive)[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)

Last synced: 8/30/2026
