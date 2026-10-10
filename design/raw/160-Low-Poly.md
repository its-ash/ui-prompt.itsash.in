# Low Poly

- Source: <https://designmd.app/library/low-poly>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:30.326Z

Claude Artisan · Textura, material & renderização2012–present

# Low Poly

Reference for textura, material & renderização Low Poly. Stylized faceted 3D from real-time graphics constraints.

Low Polylowpolyfaceted 3DVisible triangular facets and flat shadingCrystalline geometric formsGradient facet lightingStylized, game-adjacenttexture

Use case: hero, superfície, conteúdo e grade responsiva; Visible triangular facets and flat shading; Crystalline geometric forms

![Low Poly](https://designmd.app/images/library/671.png)

## Historical Context

Stylized faceted 3D from real-time graphics constraints. Example: Indie game art; low-poly hero backgrounds..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Low Poly"
description: "Low Poly visual system, translated from the Claude Artisan catalog for use in digital products. Visible triangular facets and flat shading; Crystalline geometric forms"
colors:
primary: "#ff7f5c"
background: "#1b2a4a"
surface: "#24365c"
text: "#eef3fb"
accent: "#46e0c8"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Space Grotesk', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Rajdhani', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Rajdhani', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "6px"
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

Low Poly visual system, translated from the Claude Artisan catalog for use in digital products. Visible triangular facets and flat shading; Crystalline geometric forms

- **Category:** texture
- **Era:** 2012–present
- **Origin:** Stylized faceted 3D from real-time graphics constraints.
- **Reference:** Indie game art; low-poly hero backgrounds.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Visible triangular facets and flat shading
- Crystalline geometric forms
- Gradient facet lighting
- Stylized, game-adjacent

## Colors

- **bg** — #1b2a4a
- **surface** — #24365c
- **surface-strong** — #2f4570
- **border** — #3c5480
- **text** — #eef3fb
- **text-muted** — #aebedc
- **primary** — #ff7f5c
- **accent** — #46e0c8
- **facet-dark** — #16223c

## Typography

- Display: 'Space Grotesk', system-ui, sans-serif
- Body: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Visible triangular facets and flat shading; Crystalline geometric forms; Gradient facet lighting; Stylized, game-adjacent; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/low-poly/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Low Poly — design tokens */
/* 2012–present | Stylized faceted 3D from real-time graphics constraints, condensed */
:root {
/* color */
--color-bg: #1b2a4a;
--color-surface: #24365c;
--color-surface-strong: #2f4570;
--color-border: #3c5480;
--color-text: #eef3fb;
--color-text-muted: #aebedc;
--color-primary: #ff7f5c;
--color-accent: #46e0c8;
--color-facet-dark: #16223c;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
--shadow-md: 0 8px 20px rgba(0,0,0,0.4);
--shadow-lg: 0 18px 40px rgba(0,0,0,0.45);
/* font */
--font-sans: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif;
--font-display: 'Space Grotesk', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: hard-edged faceted gradient (no smoothing) is the signature move */
--facet-gradient: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent) 33%,
var(--color-primary) 33%, var(--color-primary) 66%, var(--color-surface-strong) 66%);
--facet-corner: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 70%);
}

/* ============================================================
Base component classes — low poly
Signature move: a hard-stopped (non-smooth) triangular facet gradient
clipped to a crystalline corner, repeated as a corner accent on nav and
card, and as the fill on primary buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: linear-gradient(160deg, var(--color-bg) 0%, var(--color-facet-dark) 100%); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; top: 0; right: 0; width: 90px; height: 100%;
background: var(--facet-gradient); clip-path: var(--facet-corner); opacity: .35; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--facet-gradient); color: #10192c; border-color: transparent; font-weight: 700; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::after { content: ""; position: absolute; bottom: 0; left: 0; width: 70px; height: 70px;
background: var(--facet-gradient); clip-path: polygon(0 100%, 100% 100%, 0 0); opacity: .3; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--facet-gradient); color: #10192c; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/low-poly.md */
```

### Variables

```
--bg: #1b2a4a, --fg: #eef3fb, --accent: #ff7f5c, --surface: #24365c, --radius: 4px, --spacing: 16px, --font-display: 'Space Grotesk', system-ui, sans-serif, --font-body: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#1b2a4a

#24365c

#2f4570

#3c5480

Secondary

#eef3fb

#aebedc

#ff7f5c

#46e0c8

#16223c

### Effects

Visible triangular facets and flat shading, Crystalline geometric forms, Gradient facet lighting, Stylized, game-adjacent, shadow

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

- **Name:** Low Poly
- **Type:** claude-artisan/texture
- **Keywords:** Low Poly, lowpoly, faceted 3D, Visible triangular facets and flat shading, Crystalline geometric forms, Gradient facet lighting, Stylized, game-adjacent, texture
- **Era:** 2012–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #1b2a4a, surface: #24365c, surface-strong: #2f4570, border: #3c5480
- **Secondary:** text: #eef3fb, text-muted: #aebedc, primary: #ff7f5c, accent: #46e0c8, facet-dark: #16223c

## Visual Effects

Visible triangular facets and flat shading, Crystalline geometric forms, Gradient facet lighting, Stylized, game-adjacent, shadow

## AI Visual Direction

Low Poly, Visible triangular facets and flat shading, Crystalline geometric forms, Gradient facet lighting, Stylized, game-adjacent, Indie game art; low-poly hero backgrounds.

## CSS Technical

```css
/* Low Poly — design tokens */
/* 2012–present | Stylized faceted 3D from real-time graphics constraints, condensed */
:root {
/* color */
--color-bg: #1b2a4a;
--color-surface: #24365c;
--color-surface-strong: #2f4570;
--color-border: #3c5480;
--color-text: #eef3fb;
--color-text-muted: #aebedc;
--color-primary: #ff7f5c;
--color-accent: #46e0c8;
--color-facet-dark: #16223c;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.35);
--shadow-md: 0 8px 20px rgba(0,0,0,0.4);
--shadow-lg: 0 18px 40px rgba(0,0,0,0.45);
/* font */
--font-sans: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif;
--font-display: 'Space Grotesk', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: hard-edged faceted gradient (no smoothing) is the signature move */
--facet-gradient: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent) 33%,
var(--color-primary) 33%, var(--color-primary) 66%, var(--color-surface-strong) 66%);
--facet-corner: polygon(0 0, 100% 0, 100% 100%, 22% 100%, 0 70%);
}

/* ============================================================
Base component classes — low poly
Signature move: a hard-stopped (non-smooth) triangular facet gradient
clipped to a crystalline corner, repeated as a corner accent on nav and
card, and as the fill on primary buttons.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: linear-gradient(160deg, var(--color-bg) 0%, var(--color-facet-dark) 100%); min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border: 1px solid var(--color-border); border-radius: var(--radius-lg); box-shadow: var(--shadow-sm);
position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; top: 0; right: 0; width: 90px; height: 100%;
background: var(--facet-gradient); clip-path: var(--facet-corner); opacity: .35; }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--facet-gradient); color: #10192c; border-color: transparent; font-weight: 700; }
.card { background: var(--color-surface); border-radius: var(--radius-lg); border: 1px solid var(--color-border);
box-shadow: var(--shadow-md); padding: var(--space-6); position: relative; overflow: hidden; }
.card::after { content: ""; position: absolute; bottom: 0; left: 0; width: 70px; height: 70px;
background: var(--facet-gradient); clip-path: polygon(0 100%, 100% 100%, 0 0); opacity: .3; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--facet-gradient); color: #10192c; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/low-poly.md */
```

## Design System Variables

```css
--bg: #1b2a4a, --fg: #eef3fb, --accent: #ff7f5c, --surface: #24365c, --radius: 4px, --spacing: 16px, --font-display: 'Space Grotesk', system-ui, sans-serif, --font-body: 'Space Grotesk', 'Rajdhani', system-ui, sans-serif
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

[![Isometric](https://designmd.app/images/library/663.png) Claude Artisan · Textura, material & renderização ### Isometric](https://designmd.app/library/isometric)[![Voxel Art](https://designmd.app/images/library/749.png) Claude Artisan · Textura, material & renderização ### Voxel Art](https://designmd.app/library/voxel)

Last synced: 8/30/2026
