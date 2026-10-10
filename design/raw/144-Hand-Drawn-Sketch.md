# Hand-Drawn / Sketch

- Source: <https://designmd.app/library/hand-drawn>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:03.309Z

Claude Artisan · Textura, material & renderização2016–present

# Hand-Drawn / Sketch

Reference for textura, material & renderização Hand-Drawn / Sketch. Humanizing counter to sterile flat UI.

Hand-Drawn / Sketchdoodlesketchyhand-illustratedRough, wobbly hand-drawn strokesSketch-style borders and arrowsMarker/pencil texturesFriendly, approachable, humantexture

Use case: shell de aplicação com navegação e cartões; Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows

![Hand-Drawn / Sketch](https://designmd.app/images/library/657.png)

## Historical Context

Humanizing counter to sterile flat UI. Example: Excalidraw; Basecaseinvest-style doodle sites; tldraw..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Hand-Drawn / Sketch"
description: "Hand-Drawn / Sketch visual system, translated from the Claude Artisan catalog for use in digital products. Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows"
colors:
primary: "#ff6b4a"
background: "#fffdf7"
surface: "#ffffff"
text: "#2b2b2b"
accent: "#3b7dd8"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Caveat', 'Kalam', 'Patrick Hand', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif"
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

Hand-Drawn / Sketch visual system, translated from the Claude Artisan catalog for use in digital products. Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows

- **Category:** texture
- **Era:** 2016–present
- **Origin:** Humanizing counter to sterile flat UI.
- **Reference:** Excalidraw; Basecaseinvest-style doodle sites; tldraw.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Rough, wobbly hand-drawn strokes
- Sketch-style borders and arrows
- Marker/pencil textures
- Friendly, approachable, human

## Colors

- **bg** — #fffdf7
- **surface** — #ffffff
- **surface-strong** — #fff5e0
- **border** — #2b2b2b
- **text** — #2b2b2b
- **text-muted** — #5c5c54
- **primary** — #ff6b4a
- **accent** — #3b7dd8
- **marker** — #ffd93b

## Typography

- Display: 'Caveat', 'Kalam', 'Patrick Hand', cursive
- Body: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Rough, wobbly hand-drawn strokes; Sketch-style borders and arrows; Marker/pencil textures; Friendly, approachable, human; sombras e elevação

## Shapes

- Radius scale: 6px 9px 7px 10px, 12px 16px 13px 18px, 22px 28px 24px 30px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/hand-drawn/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Hand-Drawn / Sketch — design tokens */
/* 2016–present | Humanizing counter to sterile flat UI, condensed */
:root {
/* color */
--color-bg: #fffdf7;
--color-surface: #ffffff;
--color-surface-strong: #fff5e0;
--color-border: #2b2b2b;
--color-text: #2b2b2b;
--color-text-muted: #5c5c54;
--color-primary: #ff6b4a;
--color-accent: #3b7dd8;
--color-marker: #ffd93b;
/* radius: uneven, hand-set radii read as sketchy */
--radius-sm: 6px 9px 7px 10px;
--radius-md: 12px 16px 13px 18px;
--radius-lg: 22px 28px 24px 30px;
--radius-pill: 999px;
/* shadow: a scratchy offset like a pencil double-line */
--shadow-sm: 2px 3px 0 rgba(43,43,43,0.5);
--shadow-md: 3px 5px 0 rgba(43,43,43,0.4);
--shadow-lg: 5px 8px 0 rgba(43,43,43,0.3);
/* font */
--font-sans: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif;
--font-display: 'Caveat', 'Kalam', 'Patrick Hand', cursive;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 0.95rem;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a wobbly hand-inked border (double outline via layered box-shadow
border simulation) and a highlighter-marker underline swipe */
--sketch-border: 2px solid var(--color-border);
--sketch-wobble: 2px 2px 0 -1px var(--color-bg), 2px 2px 0 0 var(--color-border);
--marker-swipe: linear-gradient(180deg, transparent 55%, var(--color-marker) 55%, var(--color-marker) 85%, transparent 85%);
}

/* ============================================================
Base component classes — Hand-Drawn / Sketch
Signature move: rough, slightly uneven border-radius corners paired
with a scratchy pencil-double-line shadow, repeated on nav, card,
button and input so every shape reads as inked-by-hand rather than
machine-drawn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border: var(--sketch-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--sketch-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .18s var(--ease-standard); }
.btn:hover { transform: rotate(-1deg) translateY(-1px); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px dashed var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffaf0; border-color: var(--color-border); }
.card { background: var(--color-surface); border: var(--sketch-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.card h3 { background-image: var(--marker-swipe); background-repeat: no-repeat; display: inline; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--sketch-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-family: var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-marker);
border: var(--sketch-border); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/hand-drawn.md */
```

### Variables

```
--bg: #fffdf7, --fg: #2b2b2b, --accent: #ff6b4a, --surface: #ffffff, --radius: 12px 16px 13px 18px, --spacing: 16px, --font-display: 'Caveat', 'Kalam', 'Patrick Hand', cursive, --font-body: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#fffdf7

#ffffff

#fff5e0

#2b2b2b

Secondary

#2b2b2b

#5c5c54

#ff6b4a

#3b7dd8

#ffd93b

### Effects

Rough, wobbly hand-drawn strokes, Sketch-style borders and arrows, Marker/pencil textures, Friendly, approachable, human, shadow

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

- **Name:** Hand-Drawn / Sketch
- **Type:** claude-artisan/texture
- **Keywords:** Hand-Drawn / Sketch, doodle, sketchy, hand-illustrated, Rough, wobbly hand-drawn strokes, Sketch-style borders and arrows, Marker/pencil textures, Friendly, approachable, human, texture
- **Era:** 2016–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #fffdf7, surface: #ffffff, surface-strong: #fff5e0, border: #2b2b2b
- **Secondary:** text: #2b2b2b, text-muted: #5c5c54, primary: #ff6b4a, accent: #3b7dd8, marker: #ffd93b

## Visual Effects

Rough, wobbly hand-drawn strokes, Sketch-style borders and arrows, Marker/pencil textures, Friendly, approachable, human, shadow

## AI Visual Direction

Hand-Drawn / Sketch, Rough, wobbly hand-drawn strokes, Sketch-style borders and arrows, Marker/pencil textures, Friendly, approachable, human, Excalidraw; Basecaseinvest-style doodle sites; tldraw.

## CSS Technical

```css
/* Hand-Drawn / Sketch — design tokens */
/* 2016–present | Humanizing counter to sterile flat UI, condensed */
:root {
/* color */
--color-bg: #fffdf7;
--color-surface: #ffffff;
--color-surface-strong: #fff5e0;
--color-border: #2b2b2b;
--color-text: #2b2b2b;
--color-text-muted: #5c5c54;
--color-primary: #ff6b4a;
--color-accent: #3b7dd8;
--color-marker: #ffd93b;
/* radius: uneven, hand-set radii read as sketchy */
--radius-sm: 6px 9px 7px 10px;
--radius-md: 12px 16px 13px 18px;
--radius-lg: 22px 28px 24px 30px;
--radius-pill: 999px;
/* shadow: a scratchy offset like a pencil double-line */
--shadow-sm: 2px 3px 0 rgba(43,43,43,0.5);
--shadow-md: 3px 5px 0 rgba(43,43,43,0.4);
--shadow-lg: 5px 8px 0 rgba(43,43,43,0.3);
/* font */
--font-sans: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif;
--font-display: 'Caveat', 'Kalam', 'Patrick Hand', cursive;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.8rem;
--text-sm: 0.95rem;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a wobbly hand-inked border (double outline via layered box-shadow
border simulation) and a highlighter-marker underline swipe */
--sketch-border: 2px solid var(--color-border);
--sketch-wobble: 2px 2px 0 -1px var(--color-bg), 2px 2px 0 0 var(--color-border);
--marker-swipe: linear-gradient(180deg, transparent 55%, var(--color-marker) 55%, var(--color-marker) 85%, transparent 85%);
}

/* ============================================================
Base component classes — Hand-Drawn / Sketch
Signature move: rough, slightly uneven border-radius corners paired
with a scratchy pencil-double-line shadow, repeated on nav, card,
button and input so every shape reads as inked-by-hand rather than
machine-drawn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-4) var(--space-6);
background: var(--color-surface); border: var(--sketch-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm); margin: var(--space-4); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--sketch-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .18s var(--ease-standard); }
.btn:hover { transform: rotate(-1deg) translateY(-1px); }
.btn:active { transform: translate(1px,1px); box-shadow: none; }
.btn:focus-visible { outline: 3px dashed var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #fffaf0; border-color: var(--color-border); }
.card { background: var(--color-surface); border: var(--sketch-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.card h3 { background-image: var(--marker-swipe); background-repeat: no-repeat; display: inline; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: var(--sketch-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-family: var(--font-display);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-marker);
border: var(--sketch-border); transform: rotate(-2deg); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/hand-drawn.md */
```

## Design System Variables

```css
--bg: #fffdf7, --fg: #2b2b2b, --accent: #ff6b4a, --surface: #ffffff, --radius: 12px 16px 13px 18px, --spacing: 16px, --font-display: 'Caveat', 'Kalam', 'Patrick Hand', cursive, --font-body: 'Patrick Hand', 'Comic Neue', 'Segoe Print', sans-serif
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

[![Papercut / Paper Collage](https://designmd.app/images/library/696.png) Claude Artisan · Textura, material & renderização ### Papercut / Paper Collage](https://designmd.app/library/papercut)[![Blueprint / Technical Drawing](https://designmd.app/images/library/591.png) Claude Artisan · Textura, material & renderização ### Blueprint / Technical Drawing](https://designmd.app/library/blueprint)

Last synced: 8/30/2026
