# Kintsugi

- Source: <https://designmd.app/library/kintsugi>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:18.328Z

Claude Artisan · Movimentos históricos15th century–present

# Kintsugi

Reference for movimentos históricos Kintsugi. Japanese art of repairing broken ceramics with gold-dusted lacquer (urushi), rooted in wabi-sabi philosophy — the break and its repair become part of the object's history.

Kintsugigolden joinerykintsukuroiDark matte ceramic/glaze surfaces (charcoal, near-black) as the base materialLuminous gold seam lines marking every join, division, or repair — imperfection as a visible featureWarm charcoal-and-gold palette only, with slightly irregular hand-drawn seam pathshistorical

Use case: superfície material com conteúdo em camadas; Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature

![Kintsugi](https://designmd.app/images/library/665.png)

## Historical Context

Japanese art of repairing broken ceramics with gold-dusted lacquer (urushi), rooted in wabi-sabi philosophy — the break and its repair become part of the object's history. Example: Muromachi-period repaired tea bowls (chawan) in the Freer Gallery and Tokyo National Museum collections..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Kintsugi"
description: "Kintsugi visual system, translated from the Claude Artisan catalog for use in digital products. Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature"
colors:
primary: "#d4a53d"
background: "#1c1a18"
surface: "#262320"
text: "#f0e6d2"
accent: "#8a6a3a"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Shippori Mincho, Noto Serif JP, serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Noto Serif JP, Shippori Mincho, Georgia, serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Noto Serif JP, Shippori Mincho, Georgia, serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "3px"
md: "10px"
lg: "18px"
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

Kintsugi visual system, translated from the Claude Artisan catalog for use in digital products. Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature

- **Category:** historical
- **Era:** 15th century–present
- **Origin:** Japanese art of repairing broken ceramics with gold-dusted lacquer (urushi), rooted in wabi-sabi philosophy — the break and its repair become part of the object's history.
- **Reference:** Muromachi-period repaired tea bowls (chawan) in the Freer Gallery and Tokyo National Museum collections.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material
- Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature
- Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths

## Colors

- **bg** — #1c1a18
- **surface** — #262320
- **surface-2** — #322d28
- **text** — #f0e6d2
- **text-muted** — #b8ab94
- **primary** — #d4a53d
- **accent** — #8a6a3a
- **seam** — #f0c04d
- **lacquer** — #100e0c

## Typography

- Display: Shippori Mincho, Noto Serif JP, serif
- Body: Noto Serif JP, Shippori Mincho, Georgia, serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material; Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature; Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 3px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/kintsugi/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Kintsugi — design tokens */
/* 15th century–present | Dark ceramic surfaces joined by luminous gold seams */
:root {
/* color */
--color-bg: #1c1a18;
--color-surface: #262320;
--color-surface-2: #322d28;
--color-text: #f0e6d2;
--color-text-muted: #b8ab94;
--color-primary: #d4a53d;
--color-accent: #8a6a3a;
--color-seam: #f0c04d;
--color-lacquer: #100e0c;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-seam-glow: 0 0 10px rgba(240,192,77,0.45);
--shadow-vessel: 0 10px 26px rgba(0,0,0,0.5);
/* blur */
--blur-soft: 6px;
/* font */
--font-sans: 'Noto Serif JP', 'Shippori Mincho', 'Georgia', serif;
--font-display: 'Shippori Mincho', 'Noto Serif JP', serif;
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
/* extra: gold seam path + glaze sheen */
--seam-gradient: linear-gradient(90deg, transparent, var(--color-seam) 15%, var(--color-primary) 50%, var(--color-seam) 85%, transparent);
--glaze-sheen: radial-gradient(circle at 25% 0%, rgba(240,230,210,0.06), transparent 55%);
--bg-image: radial-gradient(120% 90% at 20% -10%, #262320 0%, #1c1a18 55%, #100e0c 100%);
}

/* ============================================================
Base component classes — Kintsugi
Signature move: dark matte ceramic surfaces crossed by
luminous gold seams marking every join or division.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent; border-image: var(--seam-gradient) 1;
}
.nav a { color: var(--color-text); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-surface-2);
position: relative; cursor: pointer; transition: box-shadow .25s var(--ease-standard);
}
.btn::after {
content: ""; position: absolute; left: var(--space-3); right: var(--space-3); bottom: 4px; height: 2px;
background: var(--seam-gradient); opacity: .6;
}
.btn:hover { box-shadow: var(--shadow-seam-glow); }
.btn:hover::after { opacity: 1; }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-seam); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-lacquer); color: var(--color-seam); font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-seam-glow);
}
.card {
background: var(--color-surface); background-image: var(--glaze-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-vessel);
position: relative;
}
.card::before {
content: ""; position: absolute; top: 0; right: var(--space-8); bottom: 0; width: 2px;
background: var(--seam-gradient); transform: rotate(8deg); opacity: .7;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: none; border-bottom: 2px solid var(--color-accent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-seam); box-shadow: 0 2px 0 0 var(--color-seam); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-seam); color: var(--color-seam);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/kintsugi.md */
```

### Variables

```
--bg: #1c1a18, --fg: #f0e6d2, --accent: #d4a53d, --surface: #262320, --radius: 10px, --spacing: 16px, --font-display: Shippori Mincho, Noto Serif JP, serif, --font-body: Noto Serif JP, Shippori Mincho, Georgia, serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1c1a18

#262320

#322d28

#f0e6d2

Secondary

#b8ab94

#d4a53d

#8a6a3a

#f0c04d

#100e0c

### Effects

Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material, Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature, Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths, shadow, blur

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

- **Name:** Kintsugi
- **Type:** claude-artisan/historical
- **Keywords:** Kintsugi, golden joinery, kintsukuroi, Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material, Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature, Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths, historical
- **Era:** 15th century–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1c1a18, surface: #262320, surface-2: #322d28, text: #f0e6d2
- **Secondary:** text-muted: #b8ab94, primary: #d4a53d, accent: #8a6a3a, seam: #f0c04d, lacquer: #100e0c

## Visual Effects

Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material, Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature, Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths, shadow, blur

## AI Visual Direction

Kintsugi, Dark matte ceramic/glaze surfaces (charcoal, near-black) as the base material, Luminous gold seam lines marking every join, division, or repair — imperfection as a visible feature, Warm charcoal-and-gold palette only, with slightly irregular hand-drawn seam paths, Muromachi-period repaired tea bowls (chawan) in the Freer Gallery and Tokyo National Museum collections.

## CSS Technical

```css
/* Kintsugi — design tokens */
/* 15th century–present | Dark ceramic surfaces joined by luminous gold seams */
:root {
/* color */
--color-bg: #1c1a18;
--color-surface: #262320;
--color-surface-2: #322d28;
--color-text: #f0e6d2;
--color-text-muted: #b8ab94;
--color-primary: #d4a53d;
--color-accent: #8a6a3a;
--color-seam: #f0c04d;
--color-lacquer: #100e0c;
/* radius */
--radius-sm: 3px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-seam-glow: 0 0 10px rgba(240,192,77,0.45);
--shadow-vessel: 0 10px 26px rgba(0,0,0,0.5);
/* blur */
--blur-soft: 6px;
/* font */
--font-sans: 'Noto Serif JP', 'Shippori Mincho', 'Georgia', serif;
--font-display: 'Shippori Mincho', 'Noto Serif JP', serif;
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
/* extra: gold seam path + glaze sheen */
--seam-gradient: linear-gradient(90deg, transparent, var(--color-seam) 15%, var(--color-primary) 50%, var(--color-seam) 85%, transparent);
--glaze-sheen: radial-gradient(circle at 25% 0%, rgba(240,230,210,0.06), transparent 55%);
--bg-image: radial-gradient(120% 90% at 20% -10%, #262320 0%, #1c1a18 55%, #100e0c 100%);
}

/* ============================================================
Base component classes — Kintsugi
Signature move: dark matte ceramic surfaces crossed by
luminous gold seams marking every join or division.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent; border-image: var(--seam-gradient) 1;
}
.nav a { color: var(--color-text); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-surface-2);
position: relative; cursor: pointer; transition: box-shadow .25s var(--ease-standard);
}
.btn::after {
content: ""; position: absolute; left: var(--space-3); right: var(--space-3); bottom: 4px; height: 2px;
background: var(--seam-gradient); opacity: .6;
}
.btn:hover { box-shadow: var(--shadow-seam-glow); }
.btn:hover::after { opacity: 1; }
.btn:active { box-shadow: none; }
.btn:focus-visible { outline: 2px solid var(--color-seam); outline-offset: 3px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; box-shadow: none; }
.btn--primary {
background: var(--color-lacquer); color: var(--color-seam); font-weight: 700;
border: 1px solid var(--color-primary); box-shadow: var(--shadow-seam-glow);
}
.card {
background: var(--color-surface); background-image: var(--glaze-sheen);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-surface-2); box-shadow: var(--shadow-vessel);
position: relative;
}
.card::before {
content: ""; position: absolute; top: 0; right: var(--space-8); bottom: 0; width: 2px;
background: var(--seam-gradient); transform: rotate(8deg); opacity: .7;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface); border: none; border-bottom: 2px solid var(--color-accent);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-bottom-color: var(--color-seam); box-shadow: 0 2px 0 0 var(--color-seam); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: transparent; border: 1px solid var(--color-seam); color: var(--color-seam);
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/kintsugi.md */
```

## Design System Variables

```css
--bg: #1c1a18, --fg: #f0e6d2, --accent: #d4a53d, --surface: #262320, --radius: 10px, --spacing: 16px, --font-display: Shippori Mincho, Noto Serif JP, serif, --font-body: Noto Serif JP, Shippori Mincho, Georgia, serif
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

[![Zen / Wabi-Sabi / Ma](https://designmd.app/images/library/759.png) Claude Artisan · Minimal, maximal & orgânico ### Zen / Wabi-Sabi / Ma](https://designmd.app/library/zen-wabisabi)[![Ukiyo-e](https://designmd.app/images/library/744.png) Claude Artisan · Movimentos históricos ### Ukiyo-e](https://designmd.app/library/ukiyo-e)[![Dark Academia](https://designmd.app/images/library/617.png) Claude Artisan · Subculturas & estéticas de nicho ### Dark Academia](https://designmd.app/library/dark-academia)

Last synced: 8/30/2026
