# Spatial / visionOS

- Source: <https://designmd.app/library/spatial-visionos>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:03.309Z

Claude Artisan · Vidro & transparência2023–present

# Spatial / visionOS

Reference for vidro & transparência Spatial / visionOS. Apple visionOS (Vision Pro, 2023–2024).

Spatial / visionOSspatial designvisionOSmixed reality UIFloating glass panels in 3D spaceDepth, parallax, and light-based hierarchyEye/hand-driven interaction affordancesTranslucent materials over the real worldglass

Use case: shell de aplicação com navegação e cartões; Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy

![Spatial / visionOS](https://designmd.app/images/library/722.png)

## Historical Context

Apple visionOS (Vision Pro, 2023–2024). Example: Apple Vision Pro visionOS UI..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Spatial / visionOS"
description: "Spatial / visionOS visual system, translated from the Claude Artisan catalog for use in digital products. Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy"
colors:
primary: "#4da3ff"
background: "#05070c"
surface: "#05070c"
text: "#f5f7fa"
accent: "#b98cff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'SF Pro Display', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "14px"
md: "22px"
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

Spatial / visionOS visual system, translated from the Claude Artisan catalog for use in digital products. Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy

- **Category:** glass
- **Era:** 2023–present
- **Origin:** Apple visionOS (Vision Pro, 2023–2024).
- **Reference:** Apple Vision Pro visionOS UI.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Floating glass panels in 3D space
- Depth, parallax, and light-based hierarchy
- Eye/hand-driven interaction affordances
- Translucent materials over the real world

## Colors

- **bg** — #05070c
- **bg-gradient-a** — #0a1220
- **bg-gradient-b** — #141b2e
- **surface** — rgba(255, 255, 255, 0.08)
- **surface-strong** — rgba(255, 255, 255, 0.14)
- **border** — rgba(255, 255, 255, 0.16)
- **text** — #f5f7fa
- **text-muted** — rgba(245, 247, 250, 0.70)
- **primary** — #4da3ff
- **accent** — #b98cff
- **glow** — rgba(77, 163, 255, 0.35)

## Typography

- Display: 'SF Pro Display', system-ui, sans-serif
- Body: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Floating glass panels in 3D space; Depth, parallax, and light-based hierarchy; Eye/hand-driven interaction affordances; Translucent materials over the real world; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 14px, 22px, 32px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/spatial-visionos/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Spatial / visionOS — design tokens */
/* 2023–present | Apple visionOS (Vision Pro), condensed */
:root {
/* color */
--color-bg: #05070c;
--color-bg-gradient-a: #0a1220;
--color-bg-gradient-b: #141b2e;
--color-surface: rgba(255, 255, 255, 0.08);
--color-surface-strong: rgba(255, 255, 255, 0.14);
--color-border: rgba(255, 255, 255, 0.16);
--color-text: #f5f7fa;
--color-text-muted: rgba(245, 247, 250, 0.70);
--color-primary: #4da3ff;
--color-accent: #b98cff;
--color-glow: rgba(77, 163, 255, 0.35);
/* radius: continuous "squircle" curvature, very soft */
--radius-sm: 14px;
--radius-md: 22px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow: floating panels cast a soft ambient shadow into real space */
--shadow-sm: 0 6px 18px rgba(0,0,0,0.35);
--shadow-md: 0 16px 40px rgba(0,0,0,0.45);
--shadow-lg: 0 32px 80px rgba(0,0,0,0.55);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.28);
/* blur */
--blur-backdrop: 24px;
--blur-backdrop-strong: 40px;
/* font */
--font-sans: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'SF Pro Display', system-ui, sans-serif;
--font-mono: 'SF Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: depth-layer parallax — each z-layer gets a bigger blur + shadow to imply distance */
--bg-image: radial-gradient(90% 70% at 30% 0%, var(--color-bg-gradient-b) 0%, var(--color-bg-gradient-a) 45%, var(--color-bg) 100%);
--glass-fill: linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
--glass-border: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Spatial / visionOS
Signature move: floating translucent glass panels with a soft ambient
glow + deep drop shadow implying real depth in space, repeated on
nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--glass-border); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-fill); border: var(--glass-border);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.015); box-shadow: var(--shadow-md), var(--shadow-inset-hi), 0 0 24px var(--color-glow); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 40%, transparent);
border-color: color-mix(in srgb, var(--color-primary) 65%, transparent); }
.card { background: var(--glass-fill); color: var(--color-text);
backdrop-filter: blur(var(--blur-backdrop-strong)); -webkit-backdrop-filter: blur(var(--blur-backdrop-strong));
border: var(--glass-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg), var(--shadow-inset-hi); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: rgba(255,255,255,0.06); border: var(--glass-border);
backdrop-filter: blur(var(--blur-backdrop));
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent), 0 0 20px var(--color-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: var(--color-text);
background: var(--glass-fill); border: var(--glass-border); box-shadow: var(--shadow-inset-hi); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn, .input { background: #101828; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card, .btn, .input { background: #101828; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/spatial-visionos.md */
```

### Variables

```
--bg: #05070c, --fg: #f5f7fa, --accent: #4da3ff, --surface: #05070c, --radius: 22px, --spacing: 16px, --font-display: 'SF Pro Display', system-ui, sans-serif, --font-body: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#05070c

#0a1220

#141b2e

Secondary

#f5f7fa

#4da3ff

#b98cff

### Effects

Floating glass panels in 3D space, Depth, parallax, and light-based hierarchy, Eye/hand-driven interaction affordances, Translucent materials over the real world, shadow, blur

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

- **Name:** Spatial / visionOS
- **Type:** claude-artisan/glass
- **Keywords:** Spatial / visionOS, spatial design, visionOS, mixed reality UI, Floating glass panels in 3D space, Depth, parallax, and light-based hierarchy, Eye/hand-driven interaction affordances, Translucent materials over the real world, glass
- **Era:** 2023–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #05070c, bg-gradient-a: #0a1220, bg-gradient-b: #141b2e, surface: rgba(255, 255, 255, 0.08)
- **Secondary:** surface-strong: rgba(255, 255, 255, 0.14), border: rgba(255, 255, 255, 0.16), text: #f5f7fa, text-muted: rgba(245, 247, 250, 0.70), primary: #4da3ff, accent: #b98cff, glow: rgba(77, 163, 255, 0.35)

## Visual Effects

Floating glass panels in 3D space, Depth, parallax, and light-based hierarchy, Eye/hand-driven interaction affordances, Translucent materials over the real world, shadow, blur

## AI Visual Direction

Spatial / visionOS, Floating glass panels in 3D space, Depth, parallax, and light-based hierarchy, Eye/hand-driven interaction affordances, Translucent materials over the real world, Apple Vision Pro visionOS UI.

## CSS Technical

```css
/* Spatial / visionOS — design tokens */
/* 2023–present | Apple visionOS (Vision Pro), condensed */
:root {
/* color */
--color-bg: #05070c;
--color-bg-gradient-a: #0a1220;
--color-bg-gradient-b: #141b2e;
--color-surface: rgba(255, 255, 255, 0.08);
--color-surface-strong: rgba(255, 255, 255, 0.14);
--color-border: rgba(255, 255, 255, 0.16);
--color-text: #f5f7fa;
--color-text-muted: rgba(245, 247, 250, 0.70);
--color-primary: #4da3ff;
--color-accent: #b98cff;
--color-glow: rgba(77, 163, 255, 0.35);
/* radius: continuous "squircle" curvature, very soft */
--radius-sm: 14px;
--radius-md: 22px;
--radius-lg: 32px;
--radius-pill: 999px;
/* shadow: floating panels cast a soft ambient shadow into real space */
--shadow-sm: 0 6px 18px rgba(0,0,0,0.35);
--shadow-md: 0 16px 40px rgba(0,0,0,0.45);
--shadow-lg: 0 32px 80px rgba(0,0,0,0.55);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.28);
/* blur */
--blur-backdrop: 24px;
--blur-backdrop-strong: 40px;
/* font */
--font-sans: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif;
--font-display: 'SF Pro Display', system-ui, sans-serif;
--font-mono: 'SF Mono', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.4, 0, 1, 1);
/* extra: depth-layer parallax — each z-layer gets a bigger blur + shadow to imply distance */
--bg-image: radial-gradient(90% 70% at 30% 0%, var(--color-bg-gradient-b) 0%, var(--color-bg-gradient-a) 45%, var(--color-bg) 100%);
--glass-fill: linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
--glass-border: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Spatial / visionOS
Signature move: floating translucent glass panels with a soft ambient
glow + deep drop shadow implying real depth in space, repeated on
nav, card, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-fill); backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--glass-border); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-fill); border: var(--glass-border);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .25s var(--ease-standard), box-shadow .25s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.015); box-shadow: var(--shadow-md), var(--shadow-inset-hi), 0 0 24px var(--color-glow); }
.btn:active { transform: translateY(0) scale(1); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 40%, transparent);
border-color: color-mix(in srgb, var(--color-primary) 65%, transparent); }
.card { background: var(--glass-fill); color: var(--color-text);
backdrop-filter: blur(var(--blur-backdrop-strong)); -webkit-backdrop-filter: blur(var(--blur-backdrop-strong));
border: var(--glass-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-lg), var(--shadow-inset-hi); padding: var(--space-6); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: rgba(255,255,255,0.06); border: var(--glass-border);
backdrop-filter: blur(var(--blur-backdrop));
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 30%, transparent), 0 0 20px var(--color-glow); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); color: var(--color-text);
background: var(--glass-fill); border: var(--glass-border); box-shadow: var(--shadow-inset-hi); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn, .input { background: #101828; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card, .btn, .input { background: #101828; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/spatial-visionos.md */
```

## Design System Variables

```css
--bg: #05070c, --fg: #f5f7fa, --accent: #4da3ff, --surface: #05070c, --radius: 22px, --spacing: 16px, --font-display: 'SF Pro Display', system-ui, sans-serif, --font-body: 'SF Pro Display', 'Inter', system-ui, -apple-system, sans-serif
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

[![Liquid Glass](https://designmd.app/images/library/14.png) Flat & Soft UI ### Liquid Glass](https://designmd.app/library/liquid-glass)[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)

Last synced: 8/30/2026
