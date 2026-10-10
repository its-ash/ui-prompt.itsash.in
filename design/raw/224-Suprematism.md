# Suprematism

- Source: <https://designmd.app/library/suprematism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:12.252Z

Claude Artisan · Movimentos históricos1913–1920s

# Suprematism

Reference for movimentos históricos Suprematism. Russia (Kazimir Malevich).

SuprematismMalevich stylePure geometric abstraction floating in spaceLimited palette, often on white groundFeeling over representationCircles, rectangles, crosses, tilted planeshistorical

Use case: hero, superfície, conteúdo e grade responsiva; Pure geometric abstraction floating in space; Limited palette, often on white ground

![Suprematism](https://designmd.app/images/library/729.png)

## Historical Context

Russia (Kazimir Malevich). Example: Malevich 'Black Square'; 'Suprematist Composition'..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Suprematism"
description: "Suprematism visual system, translated from the Claude Artisan catalog for use in digital products. Pure geometric abstraction floating in space; Limited palette, often on white ground"
colors:
primary: "#d21f1f"
background: "#f7f7f5"
surface: "#ffffff"
text: "#16161a"
accent: "#1c4fa0"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Futura', 'Helvetica Neue', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Futura', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Futura', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
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

Suprematism visual system, translated from the Claude Artisan catalog for use in digital products. Pure geometric abstraction floating in space; Limited palette, often on white ground

- **Category:** historical
- **Era:** 1913–1920s
- **Origin:** Russia (Kazimir Malevich).
- **Reference:** Malevich 'Black Square'; 'Suprematist Composition'.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Pure geometric abstraction floating in space
- Limited palette, often on white ground
- Feeling over representation
- Circles, rectangles, crosses, tilted planes

## Colors

- **bg** — #f7f7f5
- **surface** — #ffffff
- **surface-strong** — #efefec
- **border** — #16161a
- **text** — #16161a
- **text-muted** — #55555c
- **primary** — #d21f1f
- **accent** — #1c4fa0
- **black** — #16161a
- **ochre** — #e0a415

## Typography

- Display: 'Futura', 'Helvetica Neue', sans-serif
- Body: 'Futura', 'Helvetica Neue', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Pure geometric abstraction floating in space; Limited palette, often on white ground; Feeling over representation; Circles, rectangles, crosses, tilted planes; sombras e elevação

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/suprematism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Suprematism — design tokens */
/* 1913–1920s | Russia (Kazimir Malevich), condensed */
:root {
/* color: pure limited palette floating on white ground */
--color-bg: #f7f7f5;
--color-surface: #ffffff;
--color-surface-strong: #efefec;
--color-border: #16161a;
--color-text: #16161a;
--color-text-muted: #55555c;
--color-primary: #d21f1f;
--color-accent: #1c4fa0;
--color-black: #16161a;
--color-ochre: #e0a415;
/* radius: pure geometry — no rounding, circles are the only curve */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: flat forms floating in space, no depth cues */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Futura', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Futura', 'Helvetica Neue', sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: tilted geometric plane accent — a rotated rectangle floating behind content, the signature move */
--tilt-plane: 8deg;
--plane-red: var(--color-primary);
}

/* ============================================================
Base component classes — Suprematism
Signature move: a tilted solid-color rectangle "floating" behind/beside
an element (rotation, no shadow, hard flat edges) — repeated as a
background accent on nav and card, and as the btn's own tilted shape.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-black); position: relative; }
.nav::before { content: ""; position: absolute; right: var(--space-6); top: 50%; width: 26px; height: 26px;
background: var(--plane-red); transform: translateY(-50%) rotate(var(--tilt-plane)); z-index: 0; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-black);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard);
}
.btn:hover { transform: rotate(-1.5deg); }
.btn:active { transform: rotate(0deg); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-black); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 2px solid var(--color-black); padding: var(--space-6); overflow: visible; z-index: 1; }
.card::after { content: ""; position: absolute; left: -10px; bottom: -10px; width: 60px; height: 14px;
background: var(--color-ochre); transform: rotate(calc(var(--tilt-plane) * -1)); z-index: -1; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-black);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: #ffffff; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/suprematism.md */
```

### Variables

```
--bg: #f7f7f5, --fg: #16161a, --accent: #d21f1f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Futura', 'Helvetica Neue', sans-serif, --font-body: 'Futura', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f7f7f5

#ffffff

#efefec

#16161a

Secondary

#16161a

#55555c

#d21f1f

#1c4fa0

#e0a415

### Effects

Pure geometric abstraction floating in space, Limited palette, often on white ground, Feeling over representation, Circles, rectangles, crosses, tilted planes, shadow

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

- **Name:** Suprematism
- **Type:** claude-artisan/historical
- **Keywords:** Suprematism, Malevich style, Pure geometric abstraction floating in space, Limited palette, often on white ground, Feeling over representation, Circles, rectangles, crosses, tilted planes, historical
- **Era:** 1913–1920s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f7f7f5, surface: #ffffff, surface-strong: #efefec, border: #16161a
- **Secondary:** text: #16161a, text-muted: #55555c, primary: #d21f1f, accent: #1c4fa0, black: #16161a, ochre: #e0a415

## Visual Effects

Pure geometric abstraction floating in space, Limited palette, often on white ground, Feeling over representation, Circles, rectangles, crosses, tilted planes, shadow

## AI Visual Direction

Suprematism, Pure geometric abstraction floating in space, Limited palette, often on white ground, Feeling over representation, Circles, rectangles, crosses, tilted planes, Malevich 'Black Square'; 'Suprematist Composition'.

## CSS Technical

```css
/* Suprematism — design tokens */
/* 1913–1920s | Russia (Kazimir Malevich), condensed */
:root {
/* color: pure limited palette floating on white ground */
--color-bg: #f7f7f5;
--color-surface: #ffffff;
--color-surface-strong: #efefec;
--color-border: #16161a;
--color-text: #16161a;
--color-text-muted: #55555c;
--color-primary: #d21f1f;
--color-accent: #1c4fa0;
--color-black: #16161a;
--color-ochre: #e0a415;
/* radius: pure geometry — no rounding, circles are the only curve */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 999px;
/* shadow: flat forms floating in space, no depth cues */
--shadow-sm: none;
--shadow-md: none;
--shadow-lg: none;
/* font */
--font-sans: 'Futura', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Futura', 'Helvetica Neue', sans-serif;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: tilted geometric plane accent — a rotated rectangle floating behind content, the signature move */
--tilt-plane: 8deg;
--plane-red: var(--color-primary);
}

/* ============================================================
Base component classes — Suprematism
Signature move: a tilted solid-color rectangle "floating" behind/beside
an element (rotation, no shadow, hard flat edges) — repeated as a
background accent on nav and card, and as the btn's own tilted shape.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 2px solid var(--color-black); position: relative; }
.nav::before { content: ""; position: absolute; right: var(--space-6); top: 50%; width: 26px; height: 26px;
background: var(--plane-red); transform: translateY(-50%) rotate(var(--tilt-plane)); z-index: 0; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 2px solid var(--color-black);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard);
}
.btn:hover { transform: rotate(-1.5deg); }
.btn:active { transform: rotate(0deg); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-black); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 2px solid var(--color-black); padding: var(--space-6); overflow: visible; z-index: 1; }
.card::after { content: ""; position: absolute; left: -10px; bottom: -10px; width: 60px; height: 14px;
background: var(--color-ochre); transform: rotate(calc(var(--tilt-plane) * -1)); z-index: -1; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: 2px solid var(--color-black);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: #ffffff; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/suprematism.md */
```

## Design System Variables

```css
--bg: #f7f7f5, --fg: #16161a, --accent: #d21f1f, --surface: #ffffff, --radius: 0px, --spacing: 16px, --font-display: 'Futura', 'Helvetica Neue', sans-serif, --font-body: 'Futura', 'Helvetica Neue', system-ui, sans-serif
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

[![Constructivism](https://designmd.app/images/library/603.png) Claude Artisan · Movimentos históricos ### Constructivism](https://designmd.app/library/constructivism)[![De Stijl / Neoplasticism](https://designmd.app/images/library/620.png) Claude Artisan · Movimentos históricos ### De Stijl / Neoplasticism](https://designmd.app/library/de-stijl)

Last synced: 8/30/2026
