# Acid Graphics / Acid Design

- Source: <https://designmd.app/library/acid-graphics>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:01.303Z

Claude Artisan · Subculturas & estéticas de nicho2019–present (evokes 90s rave)

# Acid Graphics / Acid Design

Reference for subculturas & estéticas de nicho Acid Graphics / Acid Design. Revival of 90s rave/acid-house flyer graphics.

Acid Graphics / Acid Designacid designpsybient graphicsY2K acidMelted chrome type, distorted 3D blobsToxic greens, purples, chromeTrippy warped compositionsRave/underground energyniche

Use case: composição editorial com grade tipográfica; Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome

![Acid Graphics / Acid Design](https://designmd.app/images/library/563.png)

## Historical Context

Revival of 90s rave/acid-house flyer graphics. Example: Techno/rave posters; 2020s fashion (Balenciaga-adjacent)..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Acid Graphics / Acid Design"
description: "Acid Graphics / Acid Design visual system, translated from the Claude Artisan catalog for use in digital products. Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome"
colors:
primary: "#ccff00"
background: "#0a0510"
surface: "#1a0f2e"
text: "#eafff0"
accent: "#ff2ee0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Chrome', 'Arial Black', 'Space Grotesk', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
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

Acid Graphics / Acid Design visual system, translated from the Claude Artisan catalog for use in digital products. Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome

- **Category:** niche
- **Era:** 2019–present (evokes 90s rave)
- **Origin:** Revival of 90s rave/acid-house flyer graphics.
- **Reference:** Techno/rave posters; 2020s fashion (Balenciaga-adjacent).
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- Melted chrome type, distorted 3D blobs
- Toxic greens, purples, chrome
- Trippy warped compositions
- Rave/underground energy

## Colors

- **bg** — #0a0510
- **surface** — #1a0f2e
- **surface-strong** — #2a1a45
- **border** — #ccff00
- **text** — #eafff0
- **text-muted** — rgba(234, 255, 240, 0.68)
- **primary** — #ccff00
- **accent** — #ff2ee0
- **toxic-green** — #7cff2e

## Typography

- Display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif
- Body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Melted chrome type, distorted 3D blobs; Toxic greens, purples, chrome; Trippy warped compositions; Rave/underground energy; sombras e elevação

## Shapes

- Radius scale: 4px, 10px, 18px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/acid-graphics/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Acid Graphics — design tokens */
/* 2019–present (evokes 90s rave) | Revival of 90s rave/acid-house flyer graphics, condensed */
:root {
/* color */
--color-bg: #0a0510;
--color-surface: #1a0f2e;
--color-surface-strong: #2a1a45;
--color-border: #ccff00;
--color-text: #eafff0;
--color-text-muted: rgba(234, 255, 240, 0.68);
--color-primary: #ccff00;
--color-accent: #ff2ee0;
--color-toxic-green: #7cff2e;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(204, 255, 0, 0.18);
--shadow-md: 0 8px 28px rgba(255, 46, 224, 0.25), 0 0 0 1px rgba(204,255,0,0.15);
--shadow-lg: 0 18px 48px rgba(124, 255, 46, 0.22), 0 0 0 1px rgba(255,46,224,0.2);
/* font */
--font-sans: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif;
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
--ease-standard: cubic-bezier(0.6, 0, 0.2, 1.4);
--ease-entrance: cubic-bezier(0.2, 1.4, 0.4, 1);
--ease-exit: cubic-bezier(0.6, 0, 1, 1);
/* extra: melted chrome gradient + acid warp */
--chrome-gradient: linear-gradient(120deg, #eafff0 0%, #ccff00 22%, #ff2ee0 50%, #7cff2e 74%, #eafff0 100%);
--bg-image: radial-gradient(140% 100% at 10% -10%, #2a1a45 0%, #0a0510 55%, #150826 100%);
--warp: skewY(-1.4deg) rotate(-0.6deg);
}

/* ============================================================
Base component classes — Acid Graphics
Signature move: a melted chrome gradient (green→magenta→acid-green)
painted onto type/borders, plus a slight warp/skew on raised surfaces
to evoke distorted rave-flyer 3D blobs. Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent;
border-image: var(--chrome-gradient) 1;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-toxic-green);
color: var(--color-text);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: var(--warp) translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary {
background: var(--chrome-gradient); background-size: 220% 220%;
color: #0a0510; border: 2px solid #0a0510; font-weight: 800;
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 2px solid transparent;
border-image: var(--chrome-gradient) 1;
box-shadow: var(--shadow-md);
transform: var(--warp);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-toxic-green);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,46,224,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--chrome-gradient); color: #0a0510;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .card { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/acid-graphics.md */
```

### Variables

```
--bg: #0a0510, --fg: #eafff0, --accent: #ccff00, --surface: #1a0f2e, --radius: 10px, --spacing: 16px, --font-display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif, --font-body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0510

#1a0f2e

#2a1a45

#ccff00

Secondary

#eafff0

#ccff00

#ff2ee0

#7cff2e

### Effects

Melted chrome type, distorted 3D blobs, Toxic greens, purples, chrome, Trippy warped compositions, Rave/underground energy, shadow

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

- **Name:** Acid Graphics / Acid Design
- **Type:** claude-artisan/niche
- **Keywords:** Acid Graphics / Acid Design, acid design, psybient graphics, Y2K acid, Melted chrome type, distorted 3D blobs, Toxic greens, purples, chrome, Trippy warped compositions, Rave/underground energy, niche
- **Era:** 2019–present (evokes 90s rave)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0510, surface: #1a0f2e, surface-strong: #2a1a45, border: #ccff00
- **Secondary:** text: #eafff0, text-muted: rgba(234, 255, 240, 0.68), primary: #ccff00, accent: #ff2ee0, toxic-green: #7cff2e

## Visual Effects

Melted chrome type, distorted 3D blobs, Toxic greens, purples, chrome, Trippy warped compositions, Rave/underground energy, shadow

## AI Visual Direction

Acid Graphics / Acid Design, Melted chrome type, distorted 3D blobs, Toxic greens, purples, chrome, Trippy warped compositions, Rave/underground energy, Techno/rave posters; 2020s fashion (Balenciaga-adjacent).

## CSS Technical

```css
/* Acid Graphics — design tokens */
/* 2019–present (evokes 90s rave) | Revival of 90s rave/acid-house flyer graphics, condensed */
:root {
/* color */
--color-bg: #0a0510;
--color-surface: #1a0f2e;
--color-surface-strong: #2a1a45;
--color-border: #ccff00;
--color-text: #eafff0;
--color-text-muted: rgba(234, 255, 240, 0.68);
--color-primary: #ccff00;
--color-accent: #ff2ee0;
--color-toxic-green: #7cff2e;
/* radius */
--radius-sm: 4px;
--radius-md: 10px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 10px rgba(204, 255, 0, 0.18);
--shadow-md: 0 8px 28px rgba(255, 46, 224, 0.25), 0 0 0 1px rgba(204,255,0,0.15);
--shadow-lg: 0 18px 48px rgba(124, 255, 46, 0.22), 0 0 0 1px rgba(255,46,224,0.2);
/* font */
--font-sans: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif;
--font-display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif;
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
--ease-standard: cubic-bezier(0.6, 0, 0.2, 1.4);
--ease-entrance: cubic-bezier(0.2, 1.4, 0.4, 1);
--ease-exit: cubic-bezier(0.6, 0, 1, 1);
/* extra: melted chrome gradient + acid warp */
--chrome-gradient: linear-gradient(120deg, #eafff0 0%, #ccff00 22%, #ff2ee0 50%, #7cff2e 74%, #eafff0 100%);
--bg-image: radial-gradient(140% 100% at 10% -10%, #2a1a45 0%, #0a0510 55%, #150826 100%);
--warp: skewY(-1.4deg) rotate(-0.6deg);
}

/* ============================================================
Base component classes — Acid Graphics
Signature move: a melted chrome gradient (green→magenta→acid-green)
painted onto type/borders, plus a slight warp/skew on raised surfaces
to evoke distorted rave-flyer 3D blobs. Repeats on nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 2px solid transparent;
border-image: var(--chrome-gradient) 1;
box-shadow: var(--shadow-sm);
}
.btn {
font: 700 var(--text-base)/1 var(--font-display); color: var(--color-bg);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-toxic-green);
color: var(--color-text);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: var(--warp) translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 3px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary {
background: var(--chrome-gradient); background-size: 220% 220%;
color: #0a0510; border: 2px solid #0a0510; font-weight: 800;
}
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 2px solid transparent;
border-image: var(--chrome-gradient) 1;
box-shadow: var(--shadow-md);
transform: var(--warp);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 2px solid var(--color-toxic-green);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(255,46,224,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--chrome-gradient); color: #0a0510;
}
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn:hover, .card { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/acid-graphics.md */
```

## Design System Variables

```css
--bg: #0a0510, --fg: #eafff0, --accent: #ccff00, --surface: #1a0f2e, --radius: 10px, --spacing: 16px, --font-display: 'Chrome', 'Arial Black', 'Space Grotesk', sans-serif, --font-body: 'Space Grotesk', 'Helvetica Neue', system-ui, sans-serif
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

[![Chromecore](https://designmd.app/images/library/597.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Chromecore](https://designmd.app/library/chromecore)[![Psychedelic Art](https://designmd.app/images/library/703.png) Claude Artisan · Movimentos históricos ### Psychedelic Art](https://designmd.app/library/psychedelic)[![Holographic / Iridescent](https://designmd.app/images/library/658.png) Claude Artisan · Textura, material & renderização ### Holographic / Iridescent](https://designmd.app/library/holographic)

Last synced: 8/30/2026
