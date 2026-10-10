# Winamp Skin

- Source: <https://designmd.app/library/winamp-skin>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:55.314Z

Claude Artisan · Subculturas & estéticas de nicholate-1990s/early-2000s

# Winamp Skin

Reference for subculturas & estéticas de nicho Winamp Skin. Winamp's classic skin engine (1997 onward); a vast fan skinning economy produced thousands of brushed-metal and chrome hardware-panel skins through the early 2000s.

Winamp Skinskinnable media player UIbrushed-metal player chromeBrushed-metal or chrome-gradient panel chrome throughoutTiny, pixel-precise controls (buttons, sliders, knobs)Neon-green LED-style level meters/visualizer accentsDense, more-controls-than-space skeuomorphic hardware-panel layoutniche

Use case: superfície material com conteúdo em camadas; Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs)

![Winamp Skin](https://designmd.app/images/library/753.png)

## Historical Context

Winamp's classic skin engine (1997 onward); a vast fan skinning economy produced thousands of brushed-metal and chrome hardware-panel skins through the early 2000s. Example: Classic Winamp 2.x default skin; Winamp Skin Museum archive; Sonique-era hardware-panel skins..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Winamp Skin"
description: "Winamp Skin visual system, translated from the Claude Artisan catalog for use in digital products. Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs)"
colors:
primary: "#39ff6a"
background: "#0c0d10"
surface: "#26292e"
text: "#d8dde3"
accent: "#ffb347"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Arial Narrow', 'Tahoma', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Arial', 'Tahoma', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Arial', 'Tahoma', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "3px"
lg: "6px"
spacing:
sm: "4px"
md: "10px"
lg: "22px"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "10px"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "10px"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "16px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "10px"
---
## Overview

Winamp Skin visual system, translated from the Claude Artisan catalog for use in digital products. Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs)

- **Category:** niche
- **Era:** late-1990s/early-2000s
- **Origin:** Winamp's classic skin engine (1997 onward); a vast fan skinning economy produced thousands of brushed-metal and chrome hardware-panel skins through the early 2000s.
- **Reference:** Classic Winamp 2.x default skin; Winamp Skin Museum archive; Sonique-era hardware-panel skins.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Brushed-metal or chrome-gradient panel chrome throughout
- Tiny, pixel-precise controls (buttons, sliders, knobs)
- Neon-green LED-style level meters/visualizer accents
- Dense, more-controls-than-space skeuomorphic hardware-panel layout

## Colors

- **bg** — #0c0d10
- **surface** — #26292e
- **surface-2** — #34383f
- **text** — #d8dde3
- **text-muted** — #8b929c
- **primary** — #39ff6a
- **primary-dim** — #1c8f3b
- **accent** — #ffb347
- **led-red** — #ff4d4d
- **chrome-hi** — #eef1f4
- **chrome-lo** — #14161a

## Typography

- Display: 'Arial Narrow', 'Tahoma', sans-serif
- Body: 'Arial', 'Tahoma', sans-serif
- Mono: 'Fixedsys', 'Courier New', monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Brushed-metal or chrome-gradient panel chrome throughout; Tiny, pixel-precise controls (buttons, sliders, knobs); Neon-green LED-style level meters/visualizer accents; Dense, more-controls-than-space skeuomorphic hardware-panel layout; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 2px, 3px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/winamp-skin/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Winamp Skin — design tokens */
/* late-90s/early-2000s | Brushed metal / chrome player-skin chrome, neon LED meters */
:root {
/* color */
--color-bg: #0c0d10;
--color-surface: #26292e;
--color-surface-2: #34383f;
--color-text: #d8dde3;
--color-text-muted: #8b929c;
--color-primary: #39ff6a;
--color-primary-dim: #1c8f3b;
--color-accent: #ffb347;
--color-led-red: #ff4d4d;
--color-chrome-hi: #eef1f4;
--color-chrome-lo: #14161a;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-panel: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.5);
--shadow-inset: inset 0 2px 3px rgba(0,0,0,0.7), inset 0 -1px 0 rgba(255,255,255,0.06);
--shadow-led: 0 0 6px rgba(57,255,106,0.8);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Arial', 'Tahoma', sans-serif;
--font-display: 'Arial Narrow', 'Tahoma', sans-serif;
--font-mono: 'Fixedsys', 'Courier New', monospace;
/* text */
--text-xs: 0.625rem;
--text-sm: 0.6875rem;
--text-base: 0.75rem;
--text-lg: 0.875rem;
--text-xl: 1rem;
--text-2xl: 1.25rem;
--text-3xl: 1.75rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
/* space */
--space-1: 2px;
--space-2: 4px;
--space-3: 6px;
--space-4: 10px;
--space-6: 16px;
--space-8: 22px;
--space-12: 32px;
--space-16: 48px;
--space-24: 72px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: brushed metal + LED meter gradients */
--brushed-metal: repeating-linear-gradient(180deg, #2d3037 0 1px, #24272c 1px 2px);
--chrome-gradient: linear-gradient(180deg, var(--color-chrome-hi) 0%, #9aa1ab 45%, var(--color-chrome-lo) 51%, #3a3e46 100%);
--led-meter: linear-gradient(90deg, #1c8f3b 0%, #39ff6a 70%, #ffb347 88%, #ff4d4d 100%);
--bg-image: none;
}

/* ============================================================
Base component classes — Winamp Skin
Signature move: brushed-metal/chrome panel chrome, tiny
pixel-precise controls, neon-green LED meter accents, and a
dense "more controls than space" hardware-skin layout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; font-size: var(--text-base); }
.nav {
display: flex; gap: var(--space-3); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--brushed-metal), var(--color-surface);
border-bottom: 1px solid var(--color-chrome-lo); box-shadow: var(--shadow-panel);
}
.btn {
font: 700 var(--text-xs)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .03em;
color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-chrome-lo);
box-shadow: var(--shadow-panel);
cursor: pointer; transition: box-shadow .1s var(--ease-standard);
}
.btn:hover { background: #3d424a; }
.btn:active { box-shadow: var(--shadow-inset); }
.btn:focus-visible { outline: 1px dotted var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary-dim); color: #0a1c0e;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-led), var(--shadow-panel);
}
.btn--primary:hover { background: var(--color-primary); }
.card {
background: var(--brushed-metal), var(--color-surface);
border-radius: var(--radius-md); padding: var(--space-4);
border: 1px solid var(--color-chrome-lo); box-shadow: var(--shadow-panel);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-primary); font: var(--text-sm) var(--font-mono);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: #05130a; border: 1px solid var(--color-chrome-lo);
box-shadow: var(--shadow-inset);
}
.input::placeholder { color: var(--color-primary-dim); }
.input:focus { outline: none; box-shadow: var(--shadow-inset), var(--shadow-led); }
.badge {
display: inline-flex; align-items: center; gap: .3em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .6em; border-radius: var(--radius-sm);
background: #05130a; border: 1px solid var(--color-primary-dim); color: var(--color-primary);
box-shadow: var(--shadow-led);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/winamp-skin.md */
```

### Variables

```
--bg: #0c0d10, --fg: #d8dde3, --accent: #39ff6a, --surface: #26292e, --radius: 3px, --spacing: 10px, --font-display: 'Arial Narrow', 'Tahoma', sans-serif, --font-body: 'Arial', 'Tahoma', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0c0d10

#26292e

#34383f

#d8dde3

Secondary

#8b929c

#39ff6a

#1c8f3b

#ffb347

#ff4d4d

#eef1f4

#14161a

### Effects

Brushed-metal or chrome-gradient panel chrome throughout, Tiny, pixel-precise controls (buttons, sliders, knobs), Neon-green LED-style level meters/visualizer accents, Dense, more-controls-than-space skeuomorphic hardware-panel layout, shadow, blur

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

- **Name:** Winamp Skin
- **Type:** claude-artisan/niche
- **Keywords:** Winamp Skin, skinnable media player UI, brushed-metal player chrome, Brushed-metal or chrome-gradient panel chrome throughout, Tiny, pixel-precise controls (buttons, sliders, knobs), Neon-green LED-style level meters/visualizer accents, Dense, more-controls-than-space skeuomorphic hardware-panel layout, niche
- **Era:** late-1990s/early-2000s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0c0d10, surface: #26292e, surface-2: #34383f, text: #d8dde3
- **Secondary:** text-muted: #8b929c, primary: #39ff6a, primary-dim: #1c8f3b, accent: #ffb347, led-red: #ff4d4d, chrome-hi: #eef1f4, chrome-lo: #14161a

## Visual Effects

Brushed-metal or chrome-gradient panel chrome throughout, Tiny, pixel-precise controls (buttons, sliders, knobs), Neon-green LED-style level meters/visualizer accents, Dense, more-controls-than-space skeuomorphic hardware-panel layout, shadow, blur

## AI Visual Direction

Winamp Skin, Brushed-metal or chrome-gradient panel chrome throughout, Tiny, pixel-precise controls (buttons, sliders, knobs), Neon-green LED-style level meters/visualizer accents, Dense, more-controls-than-space skeuomorphic hardware-panel layout, Classic Winamp 2.x default skin; Winamp Skin Museum archive; Sonique-era hardware-panel skins.

## CSS Technical

```css
/* Winamp Skin — design tokens */
/* late-90s/early-2000s | Brushed metal / chrome player-skin chrome, neon LED meters */
:root {
/* color */
--color-bg: #0c0d10;
--color-surface: #26292e;
--color-surface-2: #34383f;
--color-text: #d8dde3;
--color-text-muted: #8b929c;
--color-primary: #39ff6a;
--color-primary-dim: #1c8f3b;
--color-accent: #ffb347;
--color-led-red: #ff4d4d;
--color-chrome-hi: #eef1f4;
--color-chrome-lo: #14161a;
/* radius */
--radius-sm: 2px;
--radius-md: 3px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-panel: inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 2px 4px rgba(0,0,0,0.5);
--shadow-inset: inset 0 2px 3px rgba(0,0,0,0.7), inset 0 -1px 0 rgba(255,255,255,0.06);
--shadow-led: 0 0 6px rgba(57,255,106,0.8);
/* blur */
--blur-none: 0px;
/* font */
--font-sans: 'Arial', 'Tahoma', sans-serif;
--font-display: 'Arial Narrow', 'Tahoma', sans-serif;
--font-mono: 'Fixedsys', 'Courier New', monospace;
/* text */
--text-xs: 0.625rem;
--text-sm: 0.6875rem;
--text-base: 0.75rem;
--text-lg: 0.875rem;
--text-xl: 1rem;
--text-2xl: 1.25rem;
--text-3xl: 1.75rem;
--text-4xl: 2.25rem;
--text-5xl: 3rem;
/* space */
--space-1: 2px;
--space-2: 4px;
--space-3: 6px;
--space-4: 10px;
--space-6: 16px;
--space-8: 22px;
--space-12: 32px;
--space-16: 48px;
--space-24: 72px;
/* ease */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: brushed metal + LED meter gradients */
--brushed-metal: repeating-linear-gradient(180deg, #2d3037 0 1px, #24272c 1px 2px);
--chrome-gradient: linear-gradient(180deg, var(--color-chrome-hi) 0%, #9aa1ab 45%, var(--color-chrome-lo) 51%, #3a3e46 100%);
--led-meter: linear-gradient(90deg, #1c8f3b 0%, #39ff6a 70%, #ffb347 88%, #ff4d4d 100%);
--bg-image: none;
}

/* ============================================================
Base component classes — Winamp Skin
Signature move: brushed-metal/chrome panel chrome, tiny
pixel-precise controls, neon-green LED meter accents, and a
dense "more controls than space" hardware-skin layout.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; font-size: var(--text-base); }
.nav {
display: flex; gap: var(--space-3); align-items: center;
padding: var(--space-2) var(--space-4); background: var(--brushed-metal), var(--color-surface);
border-bottom: 1px solid var(--color-chrome-lo); box-shadow: var(--shadow-panel);
}
.btn {
font: 700 var(--text-xs)/1 var(--font-sans); text-transform: uppercase; letter-spacing: .03em;
color: var(--color-text);
padding: var(--space-2) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-2); border: 1px solid var(--color-chrome-lo);
box-shadow: var(--shadow-panel);
cursor: pointer; transition: box-shadow .1s var(--ease-standard);
}
.btn:hover { background: #3d424a; }
.btn:active { box-shadow: var(--shadow-inset); }
.btn:focus-visible { outline: 1px dotted var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-primary-dim); color: #0a1c0e;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-led), var(--shadow-panel);
}
.btn--primary:hover { background: var(--color-primary); }
.card {
background: var(--brushed-metal), var(--color-surface);
border-radius: var(--radius-md); padding: var(--space-4);
border: 1px solid var(--color-chrome-lo); box-shadow: var(--shadow-panel);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-primary); font: var(--text-sm) var(--font-mono);
padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm);
background: #05130a; border: 1px solid var(--color-chrome-lo);
box-shadow: var(--shadow-inset);
}
.input::placeholder { color: var(--color-primary-dim); }
.input:focus { outline: none; box-shadow: var(--shadow-inset), var(--shadow-led); }
.badge {
display: inline-flex; align-items: center; gap: .3em; font-size: var(--text-xs); font-weight: 700;
padding: .25em .6em; border-radius: var(--radius-sm);
background: #05130a; border: 1px solid var(--color-primary-dim); color: var(--color-primary);
box-shadow: var(--shadow-led);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/winamp-skin.md */
```

## Design System Variables

```css
--bg: #0c0d10, --fg: #d8dde3, --accent: #39ff6a, --surface: #26292e, --radius: 3px, --spacing: 10px, --font-display: 'Arial Narrow', 'Tahoma', sans-serif, --font-body: 'Arial', 'Tahoma', sans-serif
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

[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Acid Graphics / Acid Design](https://designmd.app/images/library/563.png) Claude Artisan · Subculturas & estéticas de nicho ### Acid Graphics / Acid Design](https://designmd.app/library/acid-graphics)[![Amiga Workbench](https://designmd.app/images/library/570.png) Claude Artisan · Subculturas & estéticas de nicho ### Amiga Workbench](https://designmd.app/library/amiga-workbench)

Last synced: 8/30/2026
