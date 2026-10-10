# Mesh Gradient

- Source: <https://designmd.app/library/mesh-gradient>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:50.372Z

Claude Artisan · Morphism & profundidade tátil2021–present

# Mesh Gradient

Reference for morphism & profundidade tátil Mesh Gradient. Popularized by design tools (Mesh Gradient generators, Figma plugins).

Mesh Gradientgradient meshfluid gradientMulti-point smooth gradients that blend many huesOrganic, cloud-like color transitionsUsed as hero backgroundsOften animated/shiftingmorphism

Use case: shell de aplicação com navegação e cartões; Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions

![Mesh Gradient](https://designmd.app/images/library/682.png)

## Historical Context

Popularized by design tools (Mesh Gradient generators, Figma plugins). Example: Stripe backgrounds; Apple event key art..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Mesh Gradient"
description: "Mesh Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions"
colors:
primary: "#7c6bff"
background: "#0b0b16"
surface: "#0b0b16"
text: "#f5f4fb"
accent: "#ff8fd6"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Cabinet Grotesk', 'Inter', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "16px"
lg: "26px"
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

Mesh Gradient visual system, translated from the Claude Artisan catalog for use in digital products. Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions

- **Category:** morphism
- **Era:** 2021–present
- **Origin:** Popularized by design tools (Mesh Gradient generators, Figma plugins).
- **Reference:** Stripe backgrounds; Apple event key art.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Multi-point smooth gradients that blend many hues
- Organic, cloud-like color transitions
- Used as hero backgrounds
- Often animated/shifting

## Colors

- **bg** — #0b0b16
- **surface** — rgba(255, 255, 255, 0.06)
- **surface-strong** — rgba(255, 255, 255, 0.11)
- **border** — rgba(255, 255, 255, 0.14)
- **text** — #f5f4fb
- **text-muted** — rgba(245, 244, 251, 0.70)
- **primary** — #7c6bff
- **accent** — #ff8fd6
- **mesh-a** — #4f46e5
- **mesh-b** — #06b6d4
- **mesh-c** — #f472b6
- **mesh-d** — #fbbf24

## Typography

- Display: 'Cabinet Grotesk', 'Inter', sans-serif
- Body: 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Multi-point smooth gradients that blend many hues; Organic, cloud-like color transitions; Used as hero backgrounds; Often animated/shifting; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 26px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/mesh-gradient/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Mesh Gradient — design tokens */
/* 2021–present | Popularized by design tools (Mesh Gradient generators, Figma plugins), condensed */
:root {
/* color */
--color-bg: #0b0b16;
--color-surface: rgba(255, 255, 255, 0.06);
--color-surface-strong: rgba(255, 255, 255, 0.11);
--color-border: rgba(255, 255, 255, 0.14);
--color-text: #f5f4fb;
--color-text-muted: rgba(245, 244, 251, 0.70);
--color-primary: #7c6bff;
--color-accent: #ff8fd6;
--color-mesh-a: #4f46e5;
--color-mesh-b: #06b6d4;
--color-mesh-c: #f472b6;
--color-mesh-d: #fbbf24;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 26px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 14px rgba(0,0,0,0.30);
--shadow-md: 0 10px 30px rgba(0,0,0,0.36);
--shadow-lg: 0 22px 56px rgba(0,0,0,0.42);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Cabinet Grotesk', 'Inter', sans-serif;
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
--ease-entrance: cubic-bezier(0, 0, 0, 1);
/* extra: multi-point mesh — several radial gradients at different anchor
points blended into one organic cloud-like field, animated to drift slowly */
--mesh-field: radial-gradient(at 12% 18%, var(--color-mesh-a) 0px, transparent 55%),
radial-gradient(at 82% 12%, var(--color-mesh-b) 0px, transparent 50%),
radial-gradient(at 88% 78%, var(--color-mesh-c) 0px, transparent 55%),
radial-gradient(at 15% 85%, var(--color-mesh-d) 0px, transparent 50%),
radial-gradient(at 50% 50%, #1b1830 0px, transparent 70%);
--mesh-field-soft: radial-gradient(at 20% 20%, rgba(79,70,229,0.55) 0px, transparent 60%),
radial-gradient(at 80% 80%, rgba(244,114,182,0.45) 0px, transparent 60%);
}

/* ============================================================
Base component classes — Mesh Gradient
Signature move: --mesh-field, a multi-anchor radial-gradient blend, used
as the full-bleed hero background AND echoed at low opacity on nav/card
surfaces so panels feel cut from the same drifting cloud.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--mesh-field), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--mesh-field-soft), var(--color-surface); border: 1px solid var(--color-border);
backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: linear-gradient(120deg, var(--color-mesh-a), var(--color-mesh-c));
border-color: transparent; color: #fff; }
.card { background: var(--mesh-field-soft), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: linear-gradient(120deg, var(--color-mesh-b), var(--color-mesh-d)); color: #08131a; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card { background: #17162a; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mesh-gradient.md */
```

### Variables

```
--bg: #0b0b16, --fg: #f5f4fb, --accent: #7c6bff, --surface: #0b0b16, --radius: 16px, --spacing: 16px, --font-display: 'Cabinet Grotesk', 'Inter', sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0b0b16

Secondary

#f5f4fb

#7c6bff

#ff8fd6

#4f46e5

#06b6d4

#f472b6

#fbbf24

### Effects

Multi-point smooth gradients that blend many hues, Organic, cloud-like color transitions, Used as hero backgrounds, Often animated/shifting, shadow

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

- **Name:** Mesh Gradient
- **Type:** claude-artisan/morphism
- **Keywords:** Mesh Gradient, gradient mesh, fluid gradient, Multi-point smooth gradients that blend many hues, Organic, cloud-like color transitions, Used as hero backgrounds, Often animated/shifting, morphism
- **Era:** 2021–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0b0b16, surface: rgba(255, 255, 255, 0.06), surface-strong: rgba(255, 255, 255, 0.11), border: rgba(255, 255, 255, 0.14)
- **Secondary:** text: #f5f4fb, text-muted: rgba(245, 244, 251, 0.70), primary: #7c6bff, accent: #ff8fd6, mesh-a: #4f46e5, mesh-b: #06b6d4, mesh-c: #f472b6, mesh-d: #fbbf24

## Visual Effects

Multi-point smooth gradients that blend many hues, Organic, cloud-like color transitions, Used as hero backgrounds, Often animated/shifting, shadow

## AI Visual Direction

Mesh Gradient, Multi-point smooth gradients that blend many hues, Organic, cloud-like color transitions, Used as hero backgrounds, Often animated/shifting, Stripe backgrounds; Apple event key art.

## CSS Technical

```css
/* Mesh Gradient — design tokens */
/* 2021–present | Popularized by design tools (Mesh Gradient generators, Figma plugins), condensed */
:root {
/* color */
--color-bg: #0b0b16;
--color-surface: rgba(255, 255, 255, 0.06);
--color-surface-strong: rgba(255, 255, 255, 0.11);
--color-border: rgba(255, 255, 255, 0.14);
--color-text: #f5f4fb;
--color-text-muted: rgba(245, 244, 251, 0.70);
--color-primary: #7c6bff;
--color-accent: #ff8fd6;
--color-mesh-a: #4f46e5;
--color-mesh-b: #06b6d4;
--color-mesh-c: #f472b6;
--color-mesh-d: #fbbf24;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 26px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 4px 14px rgba(0,0,0,0.30);
--shadow-md: 0 10px 30px rgba(0,0,0,0.36);
--shadow-lg: 0 22px 56px rgba(0,0,0,0.42);
/* font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'Cabinet Grotesk', 'Inter', sans-serif;
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
--ease-entrance: cubic-bezier(0, 0, 0, 1);
/* extra: multi-point mesh — several radial gradients at different anchor
points blended into one organic cloud-like field, animated to drift slowly */
--mesh-field: radial-gradient(at 12% 18%, var(--color-mesh-a) 0px, transparent 55%),
radial-gradient(at 82% 12%, var(--color-mesh-b) 0px, transparent 50%),
radial-gradient(at 88% 78%, var(--color-mesh-c) 0px, transparent 55%),
radial-gradient(at 15% 85%, var(--color-mesh-d) 0px, transparent 50%),
radial-gradient(at 50% 50%, #1b1830 0px, transparent 70%);
--mesh-field-soft: radial-gradient(at 20% 20%, rgba(79,70,229,0.55) 0px, transparent 60%),
radial-gradient(at 80% 80%, rgba(244,114,182,0.45) 0px, transparent 60%);
}

/* ============================================================
Base component classes — Mesh Gradient
Signature move: --mesh-field, a multi-anchor radial-gradient blend, used
as the full-bleed hero background AND echoed at low opacity on nav/card
surfaces so panels feel cut from the same drifting cloud.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--mesh-field), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--mesh-field-soft), var(--color-surface); border: 1px solid var(--color-border);
backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); box-shadow: var(--shadow-sm); }
.btn { font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: linear-gradient(120deg, var(--color-mesh-a), var(--color-mesh-c));
border-color: transparent; color: #fff; }
.card { background: var(--mesh-field-soft), var(--color-surface); border: 1px solid var(--color-border);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md); padding: var(--space-6);
backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: linear-gradient(120deg, var(--color-mesh-b), var(--color-mesh-d)); color: #08131a; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card { background: #17162a; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/mesh-gradient.md */
```

## Design System Variables

```css
--bg: #0b0b16, --fg: #f5f4fb, --accent: #7c6bff, --surface: #0b0b16, --radius: 16px, --spacing: 16px, --font-display: 'Cabinet Grotesk', 'Inter', sans-serif, --font-body: 'Inter', system-ui, -apple-system, sans-serif
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

[![Aurora UI](https://designmd.app/images/library/10.png) Futurista & Tech ### Aurora UI](https://designmd.app/library/aurora-ui)[![Holographic / Iridescent](https://designmd.app/images/library/658.png) Claude Artisan · Textura, material & renderização ### Holographic / Iridescent](https://designmd.app/library/holographic)

Last synced: 8/30/2026
