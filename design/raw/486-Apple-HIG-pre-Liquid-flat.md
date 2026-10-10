# Apple HIG (pre-Liquid flat)

- Source: <https://designmd.app/library/apple-hig>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:23.312Z

Claude Artisan · Flat, material & plataformas2013–2025

# Apple HIG (pre-Liquid flat)

Reference for flat, material & plataformas Apple HIG (pre-Liquid flat). Apple, iOS 7 through iOS 18.

Apple HIG (pre-Liquid flat)Human Interface GuidelinesiOS flatCupertinoDeference: content over chromeSF Pro type, generous spacing, subtle depthBlur/vibrancy accents, clarityConsistent system controlsflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Deference: content over chrome; SF Pro type, generous spacing, subtle depth

![Apple HIG (pre-Liquid flat)](https://designmd.app/images/library/576.png)

## Historical Context

Apple, iOS 7 through iOS 18. Example: iOS 7–18; macOS pre-Tahoe..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Apple HIG (pre-Liquid flat)"
description: "Apple HIG (pre-Liquid flat) visual system, translated from the Claude Artisan catalog for use in digital products. Deference: content over chrome; SF Pro type, generous spacing, subtle depth"
colors:
primary: "#007aff"
background: "#f2f2f7"
surface: "#ffffff"
text: "#1c1c1e"
accent: "#34c759"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "-apple-system, 'SF Pro Display', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "14px"
lg: "20px"
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

Apple HIG (pre-Liquid flat) visual system, translated from the Claude Artisan catalog for use in digital products. Deference: content over chrome; SF Pro type, generous spacing, subtle depth

- **Category:** flat-platform
- **Era:** 2013–2025
- **Origin:** Apple, iOS 7 through iOS 18.
- **Reference:** iOS 7–18; macOS pre-Tahoe.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Deference: content over chrome
- SF Pro type, generous spacing, subtle depth
- Blur/vibrancy accents, clarity
- Consistent system controls

## Colors

- **bg** — #f2f2f7
- **surface** — #ffffff
- **surface-strong** — #f9f9fb
- **border** — rgba(60, 60, 67, 0.29)
- **text** — #1c1c1e
- **text-muted** — #6e6e73
- **primary** — #007aff
- **accent** — #34c759

## Typography

- Display: -apple-system, 'SF Pro Display', sans-serif
- Body: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Deference: content over chrome; SF Pro type, generous spacing, subtle depth; Blur/vibrancy accents, clarity; Consistent system controls; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 14px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/apple-hig/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Apple HIG (pre-Liquid flat) — design tokens */
/* 2013–2025 | Apple, iOS 7 through iOS 18, condensed */
:root {
/* color */
--color-bg: #f2f2f7;
--color-surface: #ffffff;
--color-surface-strong: #f9f9fb;
--color-border: rgba(60, 60, 67, 0.29);
--color-text: #1c1c1e;
--color-text-muted: #6e6e73;
--color-primary: #007aff;
--color-accent: #34c759;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 14px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
/* blur */
--blur-backdrop: 20px;
/* font */
--font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif;
--font-display: -apple-system, 'SF Pro Display', sans-serif;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: vibrancy blur navbar + hairline separators */
--vibrancy: rgba(255,255,255,0.72);
--hairline: 0.5px solid var(--color-border);
}

/* ============================================================
Base component classes — Apple HIG
Signature move: deference — content leads, chrome recedes. A
frosted vibrancy blur on the nav (system material) plus a hairline
0.5px separator instead of a heavy border, repeated on nav and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; -webkit-font-smoothing: antialiased; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background: var(--vibrancy); backdrop-filter: blur(var(--blur-backdrop)) saturate(1.8); -webkit-backdrop-filter: blur(var(--blur-backdrop)) saturate(1.8);
border-bottom: var(--hairline);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none;
cursor: pointer; transition: opacity .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { opacity: 0.85; }
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 3px solid color-mix(in srgb, var(--color-primary) 50%, transparent); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); box-shadow: var(--shadow-md); border: var(--hairline);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 20%, transparent); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: color-mix(in srgb, var(--color-accent) 15%, white); color: #1a7a34;
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav { background: var(--color-surface); }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/apple-hig.md */
```

### Variables

```
--bg: #f2f2f7, --fg: #1c1c1e, --accent: #007aff, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: -apple-system, 'SF Pro Display', sans-serif, --font-body: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2f2f7

#ffffff

#f9f9fb

Secondary

#1c1c1e

#6e6e73

#007aff

#34c759

### Effects

Deference: content over chrome, SF Pro type, generous spacing, subtle depth, Blur/vibrancy accents, clarity, Consistent system controls, shadow, blur

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

- **Name:** Apple HIG (pre-Liquid flat)
- **Type:** claude-artisan/flat-platform
- **Keywords:** Apple HIG (pre-Liquid flat), Human Interface Guidelines, iOS flat, Cupertino, Deference: content over chrome, SF Pro type, generous spacing, subtle depth, Blur/vibrancy accents, clarity, Consistent system controls, flat-platform
- **Era:** 2013–2025
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2f2f7, surface: #ffffff, surface-strong: #f9f9fb, border: rgba(60, 60, 67, 0.29)
- **Secondary:** text: #1c1c1e, text-muted: #6e6e73, primary: #007aff, accent: #34c759

## Visual Effects

Deference: content over chrome, SF Pro type, generous spacing, subtle depth, Blur/vibrancy accents, clarity, Consistent system controls, shadow, blur

## AI Visual Direction

Apple HIG (pre-Liquid flat), Deference: content over chrome, SF Pro type, generous spacing, subtle depth, Blur/vibrancy accents, clarity, Consistent system controls, iOS 7–18; macOS pre-Tahoe.

## CSS Technical

```css
/* Apple HIG (pre-Liquid flat) — design tokens */
/* 2013–2025 | Apple, iOS 7 through iOS 18, condensed */
:root {
/* color */
--color-bg: #f2f2f7;
--color-surface: #ffffff;
--color-surface-strong: #f9f9fb;
--color-border: rgba(60, 60, 67, 0.29);
--color-text: #1c1c1e;
--color-text-muted: #6e6e73;
--color-primary: #007aff;
--color-accent: #34c759;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06);
--shadow-md: 0 4px 14px rgba(0,0,0,0.08);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.12);
/* blur */
--blur-backdrop: 20px;
/* font */
--font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif;
--font-display: -apple-system, 'SF Pro Display', sans-serif;
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
--ease-standard: cubic-bezier(0.25, 0.1, 0.25, 1);
/* extra: vibrancy blur navbar + hairline separators */
--vibrancy: rgba(255,255,255,0.72);
--hairline: 0.5px solid var(--color-border);
}

/* ============================================================
Base component classes — Apple HIG
Signature move: deference — content leads, chrome recedes. A
frosted vibrancy blur on the nav (system material) plus a hairline
0.5px separator instead of a heavy border, repeated on nav and card.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; -webkit-font-smoothing: antialiased; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background: var(--vibrancy); backdrop-filter: blur(var(--blur-backdrop)) saturate(1.8); -webkit-backdrop-filter: blur(var(--blur-backdrop)) saturate(1.8);
border-bottom: var(--hairline);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: none;
cursor: pointer; transition: opacity .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { opacity: 0.85; }
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 3px solid color-mix(in srgb, var(--color-primary) 50%, transparent); outline-offset: 2px; }
.btn[disabled] { opacity: .4; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); box-shadow: var(--shadow-md); border: var(--hairline);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 20%, transparent); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill);
background: color-mix(in srgb, var(--color-accent) 15%, white); color: #1a7a34;
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav { background: var(--color-surface); }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/apple-hig.md */
```

## Design System Variables

```css
--bg: #f2f2f7, --fg: #1c1c1e, --accent: #007aff, --surface: #ffffff, --radius: 14px, --spacing: 16px, --font-display: -apple-system, 'SF Pro Display', sans-serif, --font-body: -apple-system, 'SF Pro Text', 'Helvetica Neue', sans-serif
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

[![Liquid Glass](https://designmd.app/images/library/14.png) Flat & Soft UI ### Liquid Glass](https://designmd.app/library/liquid-glass)[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)

Last synced: 8/30/2026
