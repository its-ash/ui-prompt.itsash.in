# Thermal / Infrared

- Source: <https://designmd.app/library/thermal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:28.310Z

Claude Artisan · Textura, material & renderização2020s aesthetic use

# Thermal / Infrared

Reference for textura, material & renderização Thermal / Infrared. Thermal-camera color mapping as style.

Thermal / Infraredheatmap aestheticthermal camHeat-map gradient (black-purple-red-yellow-white)Glowing edges, body-heat blobsSci-fi surveillance vibeHigh-tech, eerietexture

Use case: hero, superfície, conteúdo e grade responsiva; Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs

![Thermal / Infrared](https://designmd.app/images/library/739.png)

## Historical Context

Thermal-camera color mapping as style. Example: Sci-fi/security UI motifs; experimental fashion..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Thermal / Infrared"
description: "Thermal / Infrared visual system, translated from the Claude Artisan catalog for use in digital products. Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs"
colors:
primary: "#ff6a1a"
background: "#0a0014"
surface: "#1a0a2e"
text: "#f5f0e8"
accent: "#ffd23f"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Rajdhani', 'Oswald', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Rajdhani', 'Barlow Condensed', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
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

Thermal / Infrared visual system, translated from the Claude Artisan catalog for use in digital products. Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs

- **Category:** texture
- **Era:** 2020s aesthetic use
- **Origin:** Thermal-camera color mapping as style.
- **Reference:** Sci-fi/security UI motifs; experimental fashion.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Heat-map gradient (black-purple-red-yellow-white)
- Glowing edges, body-heat blobs
- Sci-fi surveillance vibe
- High-tech, eerie

## Colors

- **bg** — #0a0014
- **surface** — #1a0a2e
- **surface-strong** — #26123f
- **border** — #5b1a6b
- **text** — #f5f0e8
- **text-muted** — #c9a8d9
- **primary** — #ff6a1a
- **accent** — #ffd23f
- **heat-cold** — #3a0ca3

## Typography

- Display: 'Rajdhani', 'Oswald', sans-serif
- Body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Heat-map gradient (black-purple-red-yellow-white); Glowing edges, body-heat blobs; Sci-fi surveillance vibe; High-tech, eerie; sombras e elevação

## Shapes

- Radius scale: 4px, 8px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/thermal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Thermal / Infrared — design tokens */
/* 2020s aesthetic use | Thermal-camera color mapping as style, condensed */
:root {
/* color */
--color-bg: #0a0014;
--color-surface: #1a0a2e;
--color-surface-strong: #26123f;
--color-border: #5b1a6b;
--color-text: #f5f0e8;
--color-text-muted: #c9a8d9;
--color-primary: #ff6a1a;
--color-accent: #ffd23f;
--color-heat-cold: #3a0ca3;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(255,106,26,0.25);
--shadow-md: 0 0 24px rgba(255,106,26,0.35);
--shadow-lg: 0 0 48px rgba(255,106,26,0.45);
/* font */
--font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
--font-display: 'Rajdhani', 'Oswald', sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: infrared heat-map ramp — black > purple > red > yellow > white — used
as the glowing edge on every surface, from cold border to hot highlight */
--heat-ramp: linear-gradient(90deg, #0a0014 0%, #3a0ca3 30%, #ff1a4a 55%, #ff6a1a 75%, #ffd23f 90%, #fff8e7 100%);
--heat-glow-edge: linear-gradient(90deg, var(--color-heat-cold), var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — thermal
Signature move: a heat-map gradient (cold purple -> hot yellow-white) glows
as a 2px edge/underline on raised surfaces, with a soft outer glow shadow —
like a false-color thermal camera reading body heat off each element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid transparent;
border-image: var(--heat-glow-edge) 1; box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--heat-glow-edge); color: #170003; border-color: transparent; font-weight: 700; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--heat-ramp) 1;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--heat-glow-edge);
color: #170003; font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/thermal.md */
```

### Variables

```
--bg: #0a0014, --fg: #f5f0e8, --accent: #ff6a1a, --surface: #1a0a2e, --radius: 8px, --spacing: 16px, --font-display: 'Rajdhani', 'Oswald', sans-serif, --font-body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0014

#1a0a2e

#26123f

#5b1a6b

Secondary

#f5f0e8

#c9a8d9

#ff6a1a

#ffd23f

#3a0ca3

### Effects

Heat-map gradient (black-purple-red-yellow-white), Glowing edges, body-heat blobs, Sci-fi surveillance vibe, High-tech, eerie, shadow

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

- **Name:** Thermal / Infrared
- **Type:** claude-artisan/texture
- **Keywords:** Thermal / Infrared, heatmap aesthetic, thermal cam, Heat-map gradient (black-purple-red-yellow-white), Glowing edges, body-heat blobs, Sci-fi surveillance vibe, High-tech, eerie, texture
- **Era:** 2020s aesthetic use
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0014, surface: #1a0a2e, surface-strong: #26123f, border: #5b1a6b
- **Secondary:** text: #f5f0e8, text-muted: #c9a8d9, primary: #ff6a1a, accent: #ffd23f, heat-cold: #3a0ca3

## Visual Effects

Heat-map gradient (black-purple-red-yellow-white), Glowing edges, body-heat blobs, Sci-fi surveillance vibe, High-tech, eerie, shadow

## AI Visual Direction

Thermal / Infrared, Heat-map gradient (black-purple-red-yellow-white), Glowing edges, body-heat blobs, Sci-fi surveillance vibe, High-tech, eerie, Sci-fi/security UI motifs; experimental fashion.

## CSS Technical

```css
/* Thermal / Infrared — design tokens */
/* 2020s aesthetic use | Thermal-camera color mapping as style, condensed */
:root {
/* color */
--color-bg: #0a0014;
--color-surface: #1a0a2e;
--color-surface-strong: #26123f;
--color-border: #5b1a6b;
--color-text: #f5f0e8;
--color-text-muted: #c9a8d9;
--color-primary: #ff6a1a;
--color-accent: #ffd23f;
--color-heat-cold: #3a0ca3;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 0 8px rgba(255,106,26,0.25);
--shadow-md: 0 0 24px rgba(255,106,26,0.35);
--shadow-lg: 0 0 48px rgba(255,106,26,0.45);
/* font */
--font-sans: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif;
--font-display: 'Rajdhani', 'Oswald', sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: infrared heat-map ramp — black > purple > red > yellow > white — used
as the glowing edge on every surface, from cold border to hot highlight */
--heat-ramp: linear-gradient(90deg, #0a0014 0%, #3a0ca3 30%, #ff1a4a 55%, #ff6a1a 75%, #ffd23f 90%, #fff8e7 100%);
--heat-glow-edge: linear-gradient(90deg, var(--color-heat-cold), var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — thermal
Signature move: a heat-map gradient (cold purple -> hot yellow-white) glows
as a 2px edge/underline on raised surfaces, with a soft outer glow shadow —
like a false-color thermal camera reading body heat off each element.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid transparent;
border-image: var(--heat-glow-edge) 1; box-shadow: var(--shadow-sm); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); letter-spacing: .03em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: box-shadow .25s var(--ease-standard), transform .25s var(--ease-standard);
}
.btn:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; box-shadow: none; }
.btn--primary { background: var(--heat-glow-edge); color: #170003; border-color: transparent; font-weight: 700; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
border-top: 3px solid transparent; border-image: var(--heat-ramp) 1;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--shadow-sm); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--heat-glow-edge);
color: #170003; font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/thermal.md */
```

## Design System Variables

```css
--bg: #0a0014, --fg: #f5f0e8, --accent: #ff6a1a, --surface: #1a0a2e, --radius: 8px, --spacing: 16px, --font-display: 'Rajdhani', 'Oswald', sans-serif, --font-body: 'Rajdhani', 'Barlow Condensed', system-ui, sans-serif
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

[![Holographic / Iridescent](https://designmd.app/images/library/658.png) Claude Artisan · Textura, material & renderização ### Holographic / Iridescent](https://designmd.app/library/holographic)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)

Last synced: 8/30/2026
