# Modern Gradient SaaS

- Source: <https://designmd.app/library/gradient-saas>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:57.257Z

Claude Artisan · Flat, material & plataformas2019–present

# Modern Gradient SaaS

Reference for flat, material & plataformas Modern Gradient SaaS. Ubiquitous startup landing-page look.

Modern Gradient SaaSstartup gradientSaaS landingVibrant gradient hero + soft blurred blobsRounded cards, subtle shadows, gradient buttonsFriendly geometric sansOptimistic, clean, conversion-focusedflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons

![Modern Gradient SaaS](https://designmd.app/images/library/653.png)

## Historical Context

Ubiquitous startup landing-page look. Example: Countless YC/startup landing pages..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Modern Gradient SaaS"
description: "Modern Gradient SaaS visual system, translated from the Claude Artisan catalog for use in digital products. Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons"
colors:
primary: "#6d5bf6"
background: "#ffffff"
surface: "#ffffff"
text: "#1a1533"
accent: "#ff6fa5"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Manrope', 'Inter', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "16px"
lg: "24px"
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

Modern Gradient SaaS visual system, translated from the Claude Artisan catalog for use in digital products. Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons

- **Category:** flat-platform
- **Era:** 2019–present
- **Origin:** Ubiquitous startup landing-page look.
- **Reference:** Countless YC/startup landing pages.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Vibrant gradient hero + soft blurred blobs
- Rounded cards, subtle shadows, gradient buttons
- Friendly geometric sans
- Optimistic, clean, conversion-focused

## Colors

- **bg** — #ffffff
- **surface** — #ffffff
- **surface-strong** — #f5f4ff
- **border** — #e6e3fb
- **text** — #1a1533
- **text-muted** — #635f7a
- **primary** — #6d5bf6
- **accent** — #ff6fa5
- **blob-a** — #8b7bff
- **blob-b** — #ff9ac2
- **blob-c** — #6fe3ff

## Typography

- Display: 'Manrope', 'Inter', system-ui, sans-serif
- Body: 'Manrope', 'Inter', system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Vibrant gradient hero + soft blurred blobs; Rounded cards, subtle shadows, gradient buttons; Friendly geometric sans; Optimistic, clean, conversion-focused; sombras e elevação

## Shapes

- Radius scale: 10px, 16px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/gradient-saas/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Modern Gradient SaaS — design tokens */
/* 2019–present | Ubiquitous startup landing-page look, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f5f4ff;
--color-border: #e6e3fb;
--color-text: #1a1533;
--color-text-muted: #635f7a;
--color-primary: #6d5bf6;
--color-accent: #ff6fa5;
--color-blob-a: #8b7bff;
--color-blob-b: #ff9ac2;
--color-blob-c: #6fe3ff;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(109,91,246,0.08);
--shadow-md: 0 10px 30px rgba(109,91,246,0.14);
--shadow-lg: 0 24px 60px rgba(109,91,246,0.20);
/* font */
--font-sans: 'Manrope', 'Inter', system-ui, sans-serif;
--font-display: 'Manrope', 'Inter', system-ui, sans-serif;
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
/* extra: soft blurred gradient blobs behind a white canvas, and a matching
gradient repeated as the primary button fill + accent border glow */
--btn-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent));
--blob-field: radial-gradient(38% 30% at 8% 8%, color-mix(in srgb, var(--color-blob-a) 55%, transparent) 0%, transparent 70%),
radial-gradient(32% 28% at 95% 10%, color-mix(in srgb, var(--color-blob-b) 50%, transparent) 0%, transparent 70%),
radial-gradient(30% 26% at 50% 100%, color-mix(in srgb, var(--color-blob-c) 45%, transparent) 0%, transparent 70%);
}

/* ============================================================
Base component classes — Modern Gradient SaaS
Signature move: a two-stop purple-to-pink gradient — the same gradient
used for the blurred hero blobs is reused verbatim as the primary
button fill and as an accent ring on focused inputs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--blob-field) var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: rgba(255,255,255,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
border: 1px solid var(--color-border); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: #fff; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--btn-gradient); color: #fff; border-color: transparent; }
.card { background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: #fff; border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--btn-gradient); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gradient-saas.md */
```

### Variables

```
--bg: #ffffff, --fg: #1a1533, --accent: #6d5bf6, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Manrope', 'Inter', system-ui, sans-serif, --font-body: 'Manrope', 'Inter', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#ffffff

#f5f4ff

#e6e3fb

Secondary

#1a1533

#635f7a

#6d5bf6

#ff6fa5

#8b7bff

#ff9ac2

#6fe3ff

### Effects

Vibrant gradient hero + soft blurred blobs, Rounded cards, subtle shadows, gradient buttons, Friendly geometric sans, Optimistic, clean, conversion-focused, shadow

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

- **Name:** Modern Gradient SaaS
- **Type:** claude-artisan/flat-platform
- **Keywords:** Modern Gradient SaaS, startup gradient, SaaS landing, Vibrant gradient hero + soft blurred blobs, Rounded cards, subtle shadows, gradient buttons, Friendly geometric sans, Optimistic, clean, conversion-focused, flat-platform
- **Era:** 2019–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #ffffff, surface: #ffffff, surface-strong: #f5f4ff, border: #e6e3fb
- **Secondary:** text: #1a1533, text-muted: #635f7a, primary: #6d5bf6, accent: #ff6fa5, blob-a: #8b7bff, blob-b: #ff9ac2, blob-c: #6fe3ff

## Visual Effects

Vibrant gradient hero + soft blurred blobs, Rounded cards, subtle shadows, gradient buttons, Friendly geometric sans, Optimistic, clean, conversion-focused, shadow

## AI Visual Direction

Modern Gradient SaaS, Vibrant gradient hero + soft blurred blobs, Rounded cards, subtle shadows, gradient buttons, Friendly geometric sans, Optimistic, clean, conversion-focused, Countless YC/startup landing pages.

## CSS Technical

```css
/* Modern Gradient SaaS — design tokens */
/* 2019–present | Ubiquitous startup landing-page look, condensed */
:root {
/* color */
--color-bg: #ffffff;
--color-surface: #ffffff;
--color-surface-strong: #f5f4ff;
--color-border: #e6e3fb;
--color-text: #1a1533;
--color-text-muted: #635f7a;
--color-primary: #6d5bf6;
--color-accent: #ff6fa5;
--color-blob-a: #8b7bff;
--color-blob-b: #ff9ac2;
--color-blob-c: #6fe3ff;
/* radius */
--radius-sm: 10px;
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(109,91,246,0.08);
--shadow-md: 0 10px 30px rgba(109,91,246,0.14);
--shadow-lg: 0 24px 60px rgba(109,91,246,0.20);
/* font */
--font-sans: 'Manrope', 'Inter', system-ui, sans-serif;
--font-display: 'Manrope', 'Inter', system-ui, sans-serif;
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
/* extra: soft blurred gradient blobs behind a white canvas, and a matching
gradient repeated as the primary button fill + accent border glow */
--btn-gradient: linear-gradient(120deg, var(--color-primary), var(--color-accent));
--blob-field: radial-gradient(38% 30% at 8% 8%, color-mix(in srgb, var(--color-blob-a) 55%, transparent) 0%, transparent 70%),
radial-gradient(32% 28% at 95% 10%, color-mix(in srgb, var(--color-blob-b) 50%, transparent) 0%, transparent 70%),
radial-gradient(30% 26% at 50% 100%, color-mix(in srgb, var(--color-blob-c) 45%, transparent) 0%, transparent 70%);
}

/* ============================================================
Base component classes — Modern Gradient SaaS
Signature move: a two-stop purple-to-pink gradient — the same gradient
used for the blurred hero blobs is reused verbatim as the primary
button fill and as an accent ring on focused inputs.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--blob-field) var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: rgba(255,255,255,0.75); backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
border: 1px solid var(--color-border); border-radius: var(--radius-pill); box-shadow: var(--shadow-sm); }
.btn { font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: #fff; border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard); }
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--btn-gradient); color: #fff; border-color: transparent; }
.card { background: #fff; border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: #fff; border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 4px color-mix(in srgb, var(--color-primary) 18%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 700;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--btn-gradient); color: #fff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/gradient-saas.md */
```

## Design System Variables

```css
--bg: #ffffff, --fg: #1a1533, --accent: #6d5bf6, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Manrope', 'Inter', system-ui, sans-serif, --font-body: 'Manrope', 'Inter', system-ui, sans-serif
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

[![Aurora UI](https://designmd.app/images/library/10.png) Futurista & Tech ### Aurora UI](https://designmd.app/library/aurora-ui)[![Corporate Memphis](https://designmd.app/images/library/604.png) Claude Artisan · Minimal, maximal & orgânico ### Corporate Memphis](https://designmd.app/library/corporate-memphis)[![Mesh Gradient](https://designmd.app/images/library/682.png) Claude Artisan · Morphism & profundidade tátil ### Mesh Gradient](https://designmd.app/library/mesh-gradient)

Last synced: 8/30/2026
