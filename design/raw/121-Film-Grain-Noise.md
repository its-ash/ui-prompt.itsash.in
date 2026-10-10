# Film Grain / Noise

- Source: <https://designmd.app/library/film-grain>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:28.318Z

Claude Artisan · Textura, material & renderizaçãoAnalog film heritage

# Film Grain / Noise

Reference for textura, material & renderização Film Grain / Noise. Adding grain/noise to fight digital sterility.

Film Grain / Noisegrainnoise texturegrainySubtle photographic grain over flat colorAnalog warmth and textureReduces banding on gradientsCinematic, tactiletexture

Use case: composição editorial com grade tipográfica; Subtle photographic grain over flat color; Analog warmth and texture

![Film Grain / Noise](https://designmd.app/images/library/636.png)

## Historical Context

Adding grain/noise to fight digital sterility. Example: A24 film sites; premium editorial (grainy gradients)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Film Grain / Noise"
description: "Film Grain / Noise visual system, translated from the Claude Artisan catalog for use in digital products. Subtle photographic grain over flat color; Analog warmth and texture"
colors:
primary: "#d98c4a"
background: "#211d1a"
surface: "#2b2622"
text: "#f2ece2"
accent: "#7fa08f"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Canela', 'Georgia', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Suisse Int\\'l', 'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Suisse Int\\'l', 'Helvetica Neue', Arial, sans-serif"
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

Film Grain / Noise visual system, translated from the Claude Artisan catalog for use in digital products. Subtle photographic grain over flat color; Analog warmth and texture

- **Category:** texture
- **Era:** Analog film heritage
- **Origin:** Adding grain/noise to fight digital sterility.
- **Reference:** A24 film sites; premium editorial (grainy gradients).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Subtle photographic grain over flat color
- Analog warmth and texture
- Reduces banding on gradients
- Cinematic, tactile

## Colors

- **bg** — #211d1a
- **surface** — #2b2622
- **surface-strong** — #35302a
- **border** — #4a423a
- **text** — #f2ece2
- **text-muted** — #bdb2a3
- **primary** — #d98c4a
- **accent** — #7fa08f

## Typography

- Display: 'Canela', 'Georgia', serif
- Body: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Subtle photographic grain over flat color; Analog warmth and texture; Reduces banding on gradients; Cinematic, tactile; sombras e elevação

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

[Download DESIGN.md](https://designmd.app/library/film-grain/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Film Grain / Noise — design tokens */
/* Analog film heritage | Adding grain/noise to fight digital sterility, condensed */
:root {
/* color */
--color-bg: #211d1a;
--color-surface: #2b2622;
--color-surface-strong: #35302a;
--color-border: #4a423a;
--color-text: #f2ece2;
--color-text-muted: #bdb2a3;
--color-primary: #d98c4a;
--color-accent: #7fa08f;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
--shadow-md: 0 8px 20px rgba(0,0,0,0.42);
--shadow-lg: 0 18px 40px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Canela', 'Georgia', serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
/* extra: an SVG fractal-noise grain layered as a repeating background-image
over flat color — the signature move — applied to body, nav and card so
every surface carries the same analog texture instead of looking flat-digital */
--grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--grain-opacity: 0.16;
}

/* ============================================================
Base component classes — film-grain
Signature move: subtle photographic noise (--grain-image) laid over flat
color at low opacity, repeated on body, nav and card so texture reads
as one continuous analog surface, not a single decorative sticker.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg);
background-image: var(--grain-image); background-size: 120px 120px;
position: relative;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background-color: var(--color-surface); background-image: var(--grain-image);
background-size: 120px 120px; border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background-color: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-color: var(--color-primary); color: #211d1a; border-color: var(--color-primary); }
.card {
background-color: var(--color-surface); background-image: var(--grain-image);
background-size: 120px 120px; border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background-color: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(217,140,74,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background-color: var(--color-accent);
color: #16241d; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/film-grain.md */
```

### Variables

```
--bg: #211d1a, --fg: #f2ece2, --accent: #d98c4a, --surface: #2b2622, --radius: 8px, --spacing: 16px, --font-display: 'Canela', 'Georgia', serif, --font-body: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#211d1a

#2b2622

#35302a

#4a423a

Secondary

#f2ece2

#bdb2a3

#d98c4a

#7fa08f

### Effects

Subtle photographic grain over flat color, Analog warmth and texture, Reduces banding on gradients, Cinematic, tactile, shadow

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

- **Name:** Film Grain / Noise
- **Type:** claude-artisan/texture
- **Keywords:** Film Grain / Noise, grain, noise texture, grainy, Subtle photographic grain over flat color, Analog warmth and texture, Reduces banding on gradients, Cinematic, tactile, texture
- **Era:** Analog film heritage
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #211d1a, surface: #2b2622, surface-strong: #35302a, border: #4a423a
- **Secondary:** text: #f2ece2, text-muted: #bdb2a3, primary: #d98c4a, accent: #7fa08f

## Visual Effects

Subtle photographic grain over flat color, Analog warmth and texture, Reduces banding on gradients, Cinematic, tactile, shadow

## AI Visual Direction

Film Grain / Noise, Subtle photographic grain over flat color, Analog warmth and texture, Reduces banding on gradients, Cinematic, tactile, A24 film sites; premium editorial (grainy gradients).

## CSS Technical

```css
/* Film Grain / Noise — design tokens */
/* Analog film heritage | Adding grain/noise to fight digital sterility, condensed */
:root {
/* color */
--color-bg: #211d1a;
--color-surface: #2b2622;
--color-surface-strong: #35302a;
--color-border: #4a423a;
--color-text: #f2ece2;
--color-text-muted: #bdb2a3;
--color-primary: #d98c4a;
--color-accent: #7fa08f;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
--shadow-md: 0 8px 20px rgba(0,0,0,0.42);
--shadow-lg: 0 18px 40px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Canela', 'Georgia', serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
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
/* extra: an SVG fractal-noise grain layered as a repeating background-image
over flat color — the signature move — applied to body, nav and card so
every surface carries the same analog texture instead of looking flat-digital */
--grain-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--grain-opacity: 0.16;
}

/* ============================================================
Base component classes — film-grain
Signature move: subtle photographic noise (--grain-image) laid over flat
color at low opacity, repeated on body, nav and card so texture reads
as one continuous analog surface, not a single decorative sticker.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg);
background-image: var(--grain-image); background-size: 120px 120px;
position: relative;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background-color: var(--color-surface); background-image: var(--grain-image);
background-size: 120px 120px; border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background-color: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background-color: var(--color-primary); color: #211d1a; border-color: var(--color-primary); }
.card {
background-color: var(--color-surface); background-image: var(--grain-image);
background-size: 120px 120px; border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background-color: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(217,140,74,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background-color: var(--color-accent);
color: #16241d; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/film-grain.md */
```

## Design System Variables

```css
--bg: #211d1a, --fg: #f2ece2, --accent: #d98c4a, --surface: #2b2622, --radius: 8px, --spacing: 16px, --font-display: 'Canela', 'Georgia', serif, --font-body: 'Suisse Int\'l', 'Helvetica Neue', Arial, sans-serif
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

[![Risograph](https://designmd.app/images/library/711.png) Claude Artisan · Textura, material & renderização ### Risograph](https://designmd.app/library/risograph)[![Mesh Gradient](https://designmd.app/images/library/682.png) Claude Artisan · Morphism & profundidade tátil ### Mesh Gradient](https://designmd.app/library/mesh-gradient)

Last synced: 8/30/2026
