# CRT / Scanline / Retro Monitor

- Source: <https://designmd.app/library/crt>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:36.278Z

Claude Artisan · Textura, material & renderizaçãoEvokes 1970s–90s

# CRT / Scanline / Retro Monitor

Reference for textura, material & renderização CRT / Scanline / Retro Monitor. Emulation of cathode-ray-tube displays.

CRT / Scanline / Retro Monitorscanlinesphosphorretro monitorHorizontal scanlines and screen curvaturePhosphor glow and bloomRGB subpixel/aperture-grille textureFlicker, vignette, chromatic edgestexture

Use case: superfície material com conteúdo em camadas; Horizontal scanlines and screen curvature; Phosphor glow and bloom

![CRT / Scanline / Retro Monitor](https://designmd.app/images/library/606.png)

## Historical Context

Emulation of cathode-ray-tube displays. Example: Retro game emulators; Fallout terminals; VHS/CRT web filters..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "CRT / Scanline / Retro Monitor"
description: "CRT / Scanline / Retro Monitor visual system, translated from the Claude Artisan catalog for use in digital products. Horizontal scanlines and screen curvature; Phosphor glow and bloom"
colors:
primary: "#39ff88"
background: "#06110a"
surface: "#0b1f13"
text: "#7dffb0"
accent: "#ff5fa2"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Press Start 2P', 'VT323', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'VT323', 'Share Tech Mono', ui-monospace, monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'VT323', 'Share Tech Mono', ui-monospace, monospace"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

CRT / Scanline / Retro Monitor visual system, translated from the Claude Artisan catalog for use in digital products. Horizontal scanlines and screen curvature; Phosphor glow and bloom

- **Category:** texture
- **Era:** Evokes 1970s–90s
- **Origin:** Emulation of cathode-ray-tube displays.
- **Reference:** Retro game emulators; Fallout terminals; VHS/CRT web filters.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Horizontal scanlines and screen curvature
- Phosphor glow and bloom
- RGB subpixel/aperture-grille texture
- Flicker, vignette, chromatic edges

## Colors

- **bg** — #06110a
- **surface** — #0b1f13
- **surface-strong** — #123020
- **border** — #2f6b45
- **text** — #7dffb0
- **text-muted** — #4fbf82
- **primary** — #39ff88
- **accent** — #ff5fa2
- **phosphor-glow** — rgba(57, 255, 136, 0.45)

## Typography

- Display: 'Press Start 2P', 'VT323', monospace
- Body: 'VT323', 'Share Tech Mono', ui-monospace, monospace
- Mono: 'Share Tech Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Horizontal scanlines and screen curvature; Phosphor glow and bloom; RGB subpixel/aperture-grille texture; Flicker, vignette, chromatic edges; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/crt/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* CRT / Scanline / Retro Monitor — design tokens */
/* Evokes 1970s–90s | Emulation of cathode-ray-tube displays, condensed */
:root {
/* color */
--color-bg: #06110a;
--color-surface: #0b1f13;
--color-surface-strong: #123020;
--color-border: #2f6b45;
--color-text: #7dffb0;
--color-text-muted: #4fbf82;
--color-primary: #39ff88;
--color-accent: #ff5fa2;
--color-phosphor-glow: rgba(57, 255, 136, 0.45);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 4px var(--color-phosphor-glow);
--shadow-md: 0 0 12px var(--color-phosphor-glow);
--shadow-lg: 0 0 28px var(--color-phosphor-glow);
/* font */
--font-sans: 'VT323', 'Share Tech Mono', ui-monospace, monospace;
--font-display: 'Press Start 2P', 'VT323', monospace;
--font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
--ease-standard: steps(3, end);
/* extra: scanline overlay + text glow */
--scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px);
--text-glow: 0 0 2px var(--color-text), 0 0 8px var(--color-phosphor-glow);
}

/* ============================================================
Base component classes — CRT / Scanline
Signature move: a repeating horizontal scanline overlay + phosphor
glow on text, repeated across the whole body, nav and card surfaces.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--scanlines); text-shadow: var(--text-glow);
}
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--scanlines); border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.btn {
font: 400 var(--text-base)/1 var(--font-sans); letter-spacing: .05em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { box-shadow: var(--shadow-sm); transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; text-shadow: none; }
.btn--primary { background: var(--color-primary); color: #06110a; text-shadow: none; box-shadow: var(--shadow-md); }
.card {
background: var(--color-surface); background-image: var(--scanlines);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border); text-shadow: var(--text-glow);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/crt.md */
```

### Variables

```
--bg: #06110a, --fg: #7dffb0, --accent: #39ff88, --surface: #0b1f13, --radius: 4px, --spacing: 16px, --font-display: 'Press Start 2P', 'VT323', monospace, --font-body: 'VT323', 'Share Tech Mono', ui-monospace, monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#06110a

#0b1f13

#123020

#2f6b45

Secondary

#7dffb0

#4fbf82

#39ff88

#ff5fa2

### Effects

Horizontal scanlines and screen curvature, Phosphor glow and bloom, RGB subpixel/aperture-grille texture, Flicker, vignette, chromatic edges, shadow

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

- **Name:** CRT / Scanline / Retro Monitor
- **Type:** claude-artisan/texture
- **Keywords:** CRT / Scanline / Retro Monitor, scanlines, phosphor, retro monitor, Horizontal scanlines and screen curvature, Phosphor glow and bloom, RGB subpixel/aperture-grille texture, Flicker, vignette, chromatic edges, texture
- **Era:** Evokes 1970s–90s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #06110a, surface: #0b1f13, surface-strong: #123020, border: #2f6b45
- **Secondary:** text: #7dffb0, text-muted: #4fbf82, primary: #39ff88, accent: #ff5fa2, phosphor-glow: rgba(57, 255, 136, 0.45)

## Visual Effects

Horizontal scanlines and screen curvature, Phosphor glow and bloom, RGB subpixel/aperture-grille texture, Flicker, vignette, chromatic edges, shadow

## AI Visual Direction

CRT / Scanline / Retro Monitor, Horizontal scanlines and screen curvature, Phosphor glow and bloom, RGB subpixel/aperture-grille texture, Flicker, vignette, chromatic edges, Retro game emulators; Fallout terminals; VHS/CRT web filters.

## CSS Technical

```css
/* CRT / Scanline / Retro Monitor — design tokens */
/* Evokes 1970s–90s | Emulation of cathode-ray-tube displays, condensed */
:root {
/* color */
--color-bg: #06110a;
--color-surface: #0b1f13;
--color-surface-strong: #123020;
--color-border: #2f6b45;
--color-text: #7dffb0;
--color-text-muted: #4fbf82;
--color-primary: #39ff88;
--color-accent: #ff5fa2;
--color-phosphor-glow: rgba(57, 255, 136, 0.45);
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 4px var(--color-phosphor-glow);
--shadow-md: 0 0 12px var(--color-phosphor-glow);
--shadow-lg: 0 0 28px var(--color-phosphor-glow);
/* font */
--font-sans: 'VT323', 'Share Tech Mono', ui-monospace, monospace;
--font-display: 'Press Start 2P', 'VT323', monospace;
--font-mono: 'Share Tech Mono', ui-monospace, monospace;
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
--ease-standard: steps(3, end);
/* extra: scanline overlay + text glow */
--scanlines: repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px);
--text-glow: 0 0 2px var(--color-text), 0 0 8px var(--color-phosphor-glow);
}

/* ============================================================
Base component classes — CRT / Scanline
Signature move: a repeating horizontal scanline overlay + phosphor
glow on text, repeated across the whole body, nav and card surfaces.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg);
background-image: var(--scanlines); text-shadow: var(--text-glow);
}
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--scanlines); border: 1px solid var(--color-border); border-radius: var(--radius-md); }
.btn {
font: 400 var(--text-base)/1 var(--font-sans); letter-spacing: .05em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: box-shadow .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { box-shadow: var(--shadow-sm); transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; text-shadow: none; }
.btn--primary { background: var(--color-primary); color: #06110a; text-shadow: none; box-shadow: var(--shadow-md); }
.card {
background: var(--color-surface); background-image: var(--scanlines);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-bg); border: 1px solid var(--color-border); text-shadow: var(--text-glow);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-sm); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/crt.md */
```

## Design System Variables

```css
--bg: #06110a, --fg: #7dffb0, --accent: #39ff88, --surface: #0b1f13, --radius: 4px, --spacing: 16px, --font-display: 'Press Start 2P', 'VT323', monospace, --font-body: 'VT323', 'Share Tech Mono', ui-monospace, monospace
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

[![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png) Claude Artisan · Textura, material & renderização ### ASCII / Terminal / TUI](https://designmd.app/library/ascii-terminal)[![Glitch Art](https://designmd.app/images/library/646.png) Claude Artisan · Textura, material & renderização ### Glitch Art](https://designmd.app/library/glitch-art)[![VHS / Analog Video](https://designmd.app/images/library/747.png) Claude Artisan · Textura, material & renderização ### VHS / Analog Video](https://designmd.app/library/vhs)

Last synced: 8/30/2026
