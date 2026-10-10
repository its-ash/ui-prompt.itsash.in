# Stonepunk

- Source: <https://designmd.app/library/stonepunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:06.309Z

Claude Artisan · Retrofuturismo & ficção especulativa2000s–present

# Stonepunk

Reference for retrofuturismo & ficção especulativa Stonepunk. Punk genre using stone-age technology.

Stonepunkprehistoric punkStone, bone, wood 'technology'Earthy, rough, primitive materialsCave-painting motifsAnachronistic prehistoric techretrofuturism

Use case: superfície material com conteúdo em camadas; Stone, bone, wood 'technology'; Earthy, rough, primitive materials

![Stonepunk](https://designmd.app/images/library/725.png)

## Historical Context

Punk genre using stone-age technology. Example: The Flintstones; The Croods..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Stonepunk"
description: "Stonepunk visual system, translated from the Claude Artisan catalog for use in digital products. Stone, bone, wood 'technology'; Earthy, rough, primitive materials"
colors:
primary: "#8a3b1f"
background: "#d8c9a8"
surface: "#cabb96"
text: "#2c2013"
accent: "#4a6b4a"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Rock Salt', 'Kalam', 'Rockwell', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Rockwell', 'Roboto Slab', Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Rockwell', 'Roboto Slab', Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "5px"
lg: "9px"
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

Stonepunk visual system, translated from the Claude Artisan catalog for use in digital products. Stone, bone, wood 'technology'; Earthy, rough, primitive materials

- **Category:** retrofuturism
- **Era:** 2000s–present
- **Origin:** Punk genre using stone-age technology.
- **Reference:** The Flintstones; The Croods.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Stone, bone, wood 'technology'
- Earthy, rough, primitive materials
- Cave-painting motifs
- Anachronistic prehistoric tech

## Colors

- **bg** — #d8c9a8
- **surface** — #cabb96
- **surface-strong** — #b8a67d
- **border** — #7a6242
- **text** — #2c2013
- **text-muted** — #52422b
- **primary** — #8a3b1f
- **accent** — #4a6b4a
- **ochre** — #b5772b
- **char** — #2c2013

## Typography

- Display: 'Rock Salt', 'Kalam', 'Rockwell', serif
- Body: 'Rockwell', 'Roboto Slab', Georgia, serif
- Mono: 'Courier Prime', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Stone, bone, wood 'technology'; Earthy, rough, primitive materials; Cave-painting motifs; Anachronistic prehistoric tech; sombras e elevação

## Shapes

- Radius scale: 2px, 5px, 9px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/stonepunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Stonepunk — design tokens */
/* 2000s–present | Punk genre using stone-age technology, condensed */
:root {
/* color */
--color-bg: #d8c9a8;
--color-surface: #cabb96;
--color-surface-strong: #b8a67d;
--color-border: #7a6242;
--color-text: #2c2013;
--color-text-muted: #52422b;
--color-primary: #8a3b1f;
--color-accent: #4a6b4a;
--color-ochre: #b5772b;
--color-char: #2c2013;
/* radius: chipped stone, irregular but we approximate with small soft rounds */
--radius-sm: 2px;
--radius-md: 5px;
--radius-lg: 9px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 3px rgba(44,32,19,0.35);
--shadow-md: 0 5px 10px rgba(44,32,19,0.4);
--shadow-lg: 0 12px 22px rgba(44,32,19,0.45);
--shadow-carve: inset 0 2px 3px rgba(44,32,19,0.4), inset 0 -1px 0 rgba(255,247,224,0.15);
/* font: rough hand-carved feel via slab/mono */
--font-sans: 'Rockwell', 'Roboto Slab', Georgia, serif;
--font-display: 'Rock Salt', 'Kalam', 'Rockwell', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: cave-painting ochre daub texture + a carved-stone inset, the signature move */
--daub-texture: repeating-linear-gradient(115deg, rgba(44,32,19,0.06) 0px, rgba(44,32,19,0.06) 2px, transparent 2px, transparent 6px);
--char-mark: linear-gradient(180deg, rgba(44,32,19,0.08), transparent 60%);
}

/* ============================================================
Base component classes — Stonepunk
Signature move: a carved-stone inset bevel (dark upper shadow, light
lower rim) plus a rough daub texture overlay, repeated on nav, card
and btn so every surface reads as hewn rock, not a smooth screen.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--daub-texture), var(--color-surface);
border: 2px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md), var(--shadow-carve); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--daub-texture), var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-carve);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-carve); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--daub-texture), var(--color-primary); color: #f4e9cf; border-color: #5a2413; }
.card { background: var(--daub-texture), var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-carve);
border: 2px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-carve);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-ochre);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-ochre) 35%, transparent), var(--shadow-carve); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: #f4e9cf; background: var(--color-ochre);
border: 1px solid #5a3d16; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/stonepunk.md */
```

### Variables

```
--bg: #d8c9a8, --fg: #2c2013, --accent: #8a3b1f, --surface: #cabb96, --radius: 5px, --spacing: 16px, --font-display: 'Rock Salt', 'Kalam', 'Rockwell', serif, --font-body: 'Rockwell', 'Roboto Slab', Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#d8c9a8

#cabb96

#b8a67d

#7a6242

Secondary

#2c2013

#52422b

#8a3b1f

#4a6b4a

#b5772b

### Effects

Stone, bone, wood 'technology', Earthy, rough, primitive materials, Cave-painting motifs, Anachronistic prehistoric tech, shadow

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

- **Name:** Stonepunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Stonepunk, prehistoric punk, Stone, bone, wood 'technology', Earthy, rough, primitive materials, Cave-painting motifs, Anachronistic prehistoric tech, retrofuturism
- **Era:** 2000s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #d8c9a8, surface: #cabb96, surface-strong: #b8a67d, border: #7a6242
- **Secondary:** text: #2c2013, text-muted: #52422b, primary: #8a3b1f, accent: #4a6b4a, ochre: #b5772b, char: #2c2013

## Visual Effects

Stone, bone, wood 'technology', Earthy, rough, primitive materials, Cave-painting motifs, Anachronistic prehistoric tech, shadow

## AI Visual Direction

Stonepunk, Stone, bone, wood 'technology', Earthy, rough, primitive materials, Cave-painting motifs, Anachronistic prehistoric tech, The Flintstones; The Croods.

## CSS Technical

```css
/* Stonepunk — design tokens */
/* 2000s–present | Punk genre using stone-age technology, condensed */
:root {
/* color */
--color-bg: #d8c9a8;
--color-surface: #cabb96;
--color-surface-strong: #b8a67d;
--color-border: #7a6242;
--color-text: #2c2013;
--color-text-muted: #52422b;
--color-primary: #8a3b1f;
--color-accent: #4a6b4a;
--color-ochre: #b5772b;
--color-char: #2c2013;
/* radius: chipped stone, irregular but we approximate with small soft rounds */
--radius-sm: 2px;
--radius-md: 5px;
--radius-lg: 9px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 3px rgba(44,32,19,0.35);
--shadow-md: 0 5px 10px rgba(44,32,19,0.4);
--shadow-lg: 0 12px 22px rgba(44,32,19,0.45);
--shadow-carve: inset 0 2px 3px rgba(44,32,19,0.4), inset 0 -1px 0 rgba(255,247,224,0.15);
/* font: rough hand-carved feel via slab/mono */
--font-sans: 'Rockwell', 'Roboto Slab', Georgia, serif;
--font-display: 'Rock Salt', 'Kalam', 'Rockwell', serif;
--font-mono: 'Courier Prime', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: cave-painting ochre daub texture + a carved-stone inset, the signature move */
--daub-texture: repeating-linear-gradient(115deg, rgba(44,32,19,0.06) 0px, rgba(44,32,19,0.06) 2px, transparent 2px, transparent 6px);
--char-mark: linear-gradient(180deg, rgba(44,32,19,0.08), transparent 60%);
}

/* ============================================================
Base component classes — Stonepunk
Signature move: a carved-stone inset bevel (dark upper shadow, light
lower rim) plus a rough daub texture overlay, repeated on nav, card
and btn so every surface reads as hewn rock, not a smooth screen.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--daub-texture), var(--color-surface);
border: 2px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md), var(--shadow-carve); }
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--daub-texture), var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-carve);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-carve); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--daub-texture), var(--color-primary); color: #f4e9cf; border-color: #5a2413; }
.card { background: var(--daub-texture), var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md), var(--shadow-carve);
border: 2px solid var(--color-border); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
box-shadow: var(--shadow-carve);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-ochre);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-ochre) 35%, transparent), var(--shadow-carve); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: #f4e9cf; background: var(--color-ochre);
border: 1px solid #5a3d16; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/stonepunk.md */
```

## Design System Variables

```css
--bg: #d8c9a8, --fg: #2c2013, --accent: #8a3b1f, --surface: #cabb96, --radius: 5px, --spacing: 16px, --font-display: 'Rock Salt', 'Kalam', 'Rockwell', serif, --font-body: 'Rockwell', 'Roboto Slab', Georgia, serif
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

[![Steampunk](https://designmd.app/images/library/322.png) Retro & Pop ### Steampunk](https://designmd.app/library/steampunk)

Last synced: 8/30/2026
