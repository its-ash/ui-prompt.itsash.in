# Airbrush / 70s-80s Illustration

- Source: <https://designmd.app/library/airbrush>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:09.317Z

Claude Artisan · Textura, material & renderização1970s–1980s

# Airbrush / 70s-80s Illustration

Reference for textura, material & renderização Airbrush / 70s-80s Illustration. Airbrush illustration golden age (sci-fi/van art).

Airbrush / 70s-80s Illustrationairbrushedvan artSmooth gradient shading and soft glowsChrome, lasers, fantasy sci-fi scenesHighly polished rendered surfacesRetro album/poster illustrationtexture

Use case: composição editorial com grade tipográfica; Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes

![Airbrush / 70s-80s Illustration](https://designmd.app/images/library/568.png)

## Historical Context

Airbrush illustration golden age (sci-fi/van art). Example: 70s-80s sci-fi paperback covers; van murals..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Airbrush / 70s-80s Illustration"
description: "Airbrush / 70s-80s Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes"
colors:
primary: "#ff6b35"
background: "#1a0f2e"
surface: "#2b1b3d"
text: "#fdf3e7"
accent: "#ff2e88"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Eurostile', 'Century Gothic', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Avenir Next', 'Century Gothic', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Avenir Next', 'Century Gothic', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "32px"
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

Airbrush / 70s-80s Illustration visual system, translated from the Claude Artisan catalog for use in digital products. Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes

- **Category:** texture
- **Era:** 1970s–1980s
- **Origin:** Airbrush illustration golden age (sci-fi/van art).
- **Reference:** 70s-80s sci-fi paperback covers; van murals.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Smooth gradient shading and soft glows
- Chrome, lasers, fantasy sci-fi scenes
- Highly polished rendered surfaces
- Retro album/poster illustration

## Colors

- **bg** — #1a0f2e
- **surface** — #2b1b3d
- **surface-strong** — #3d2554
- **border** — #6b4a8a
- **text** — #fdf3e7
- **text-muted** — rgba(253, 243, 231, 0.72)
- **primary** — #ff6b35
- **accent** — #ff2e88
- **chrome** — #cbd5e1

## Typography

- Display: 'Eurostile', 'Century Gothic', sans-serif
- Body: 'Avenir Next', 'Century Gothic', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Smooth gradient shading and soft glows; Chrome, lasers, fantasy sci-fi scenes; Highly polished rendered surfaces; Retro album/poster illustration; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/airbrush/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Airbrush / 70s-80s Illustration — design tokens */
/* 1970s–1980s | Airbrush illustration golden age (sci-fi/van art), condensed */
:root {
/* color */
--color-bg: #1a0f2e;
--color-surface: #2b1b3d;
--color-surface-strong: #3d2554;
--color-border: #6b4a8a;
--color-text: #fdf3e7;
--color-text-muted: rgba(253, 243, 231, 0.72);
--color-primary: #ff6b35;
--color-accent: #ff2e88;
--color-chrome: #cbd5e1;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(255,107,53,0.25);
--shadow-md: 0 10px 30px rgba(255,46,136,0.28);
--shadow-lg: 0 24px 60px rgba(255,107,53,0.3);
/* font */
--font-sans: 'Avenir Next', 'Century Gothic', system-ui, sans-serif;
--font-display: 'Eurostile', 'Century Gothic', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
/* extra: sunset airbrush glow + polished specular highlight */
--bg-image: radial-gradient(80% 60% at 80% 0%, #ff6b35 0%, transparent 55%),
radial-gradient(70% 50% at 10% 100%, #ff2e88 0%, transparent 60%),
linear-gradient(160deg, #2b1b3d 0%, #1a0f2e 60%);
--airbrush-glow: radial-gradient(120% 140% at 20% -20%, rgba(255,255,255,0.25) 0%, transparent 45%),
linear-gradient(135deg, #3d2554, #2b1b3d);
}

/* ============================================================
Base component classes — Airbrush
Signature move: a soft radial "airbrushed" highlight (a glowing
sunset arc, feathered to transparent) painted over every raised
surface to simulate polished, rendered sci-fi shading. Repeats
on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--airbrush-glow); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-chrome); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary {
background: var(--airbrush-glow), linear-gradient(135deg, var(--color-primary), var(--color-accent));
border: none; color: #1a0f2e; font-weight: 800;
}
.card {
background: var(--airbrush-glow); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,46,136,0.3); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: #1a0f2e;
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/airbrush.md */
```

### Variables

```
--bg: #1a0f2e, --fg: #fdf3e7, --accent: #ff6b35, --surface: #2b1b3d, --radius: 16px, --spacing: 16px, --font-display: 'Eurostile', 'Century Gothic', sans-serif, --font-body: 'Avenir Next', 'Century Gothic', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1a0f2e

#2b1b3d

#3d2554

#6b4a8a

Secondary

#fdf3e7

#ff6b35

#ff2e88

#cbd5e1

### Effects

Smooth gradient shading and soft glows, Chrome, lasers, fantasy sci-fi scenes, Highly polished rendered surfaces, Retro album/poster illustration, shadow

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

- **Name:** Airbrush / 70s-80s Illustration
- **Type:** claude-artisan/texture
- **Keywords:** Airbrush / 70s-80s Illustration, airbrushed, van art, Smooth gradient shading and soft glows, Chrome, lasers, fantasy sci-fi scenes, Highly polished rendered surfaces, Retro album/poster illustration, texture
- **Era:** 1970s–1980s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1a0f2e, surface: #2b1b3d, surface-strong: #3d2554, border: #6b4a8a
- **Secondary:** text: #fdf3e7, text-muted: rgba(253, 243, 231, 0.72), primary: #ff6b35, accent: #ff2e88, chrome: #cbd5e1

## Visual Effects

Smooth gradient shading and soft glows, Chrome, lasers, fantasy sci-fi scenes, Highly polished rendered surfaces, Retro album/poster illustration, shadow

## AI Visual Direction

Airbrush / 70s-80s Illustration, Smooth gradient shading and soft glows, Chrome, lasers, fantasy sci-fi scenes, Highly polished rendered surfaces, Retro album/poster illustration, 70s-80s sci-fi paperback covers; van murals.

## CSS Technical

```css
/* Airbrush / 70s-80s Illustration — design tokens */
/* 1970s–1980s | Airbrush illustration golden age (sci-fi/van art), condensed */
:root {
/* color */
--color-bg: #1a0f2e;
--color-surface: #2b1b3d;
--color-surface-strong: #3d2554;
--color-border: #6b4a8a;
--color-text: #fdf3e7;
--color-text-muted: rgba(253, 243, 231, 0.72);
--color-primary: #ff6b35;
--color-accent: #ff2e88;
--color-chrome: #cbd5e1;
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(255,107,53,0.25);
--shadow-md: 0 10px 30px rgba(255,46,136,0.28);
--shadow-lg: 0 24px 60px rgba(255,107,53,0.3);
/* font */
--font-sans: 'Avenir Next', 'Century Gothic', system-ui, sans-serif;
--font-display: 'Eurostile', 'Century Gothic', sans-serif;
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
--ease-standard: cubic-bezier(0.3, 0, 0.15, 1);
/* extra: sunset airbrush glow + polished specular highlight */
--bg-image: radial-gradient(80% 60% at 80% 0%, #ff6b35 0%, transparent 55%),
radial-gradient(70% 50% at 10% 100%, #ff2e88 0%, transparent 60%),
linear-gradient(160deg, #2b1b3d 0%, #1a0f2e 60%);
--airbrush-glow: radial-gradient(120% 140% at 20% -20%, rgba(255,255,255,0.25) 0%, transparent 45%),
linear-gradient(135deg, #3d2554, #2b1b3d);
}

/* ============================================================
Base component classes — Airbrush
Signature move: a soft radial "airbrushed" highlight (a glowing
sunset arc, feathered to transparent) painted over every raised
surface to simulate polished, rendered sci-fi shading. Repeats
on nav, card, and btn--primary.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--airbrush-glow); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-chrome); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary {
background: var(--airbrush-glow), linear-gradient(135deg, var(--color-primary), var(--color-accent));
border: none; color: #1a0f2e; font-weight: 800;
}
.card {
background: var(--airbrush-glow); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,46,136,0.3); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: linear-gradient(135deg, var(--color-primary), var(--color-accent)); color: #1a0f2e;
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/airbrush.md */
```

## Design System Variables

```css
--bg: #1a0f2e, --fg: #fdf3e7, --accent: #ff6b35, --surface: #2b1b3d, --radius: 16px, --spacing: 16px, --font-display: 'Eurostile', 'Century Gothic', sans-serif, --font-body: 'Avenir Next', 'Century Gothic', system-ui, sans-serif
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

[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)[![Chrome / Liquid Metal](https://designmd.app/images/library/596.png) Claude Artisan · Textura, material & renderização ### Chrome / Liquid Metal](https://designmd.app/library/chrome-metal)

Last synced: 8/30/2026
