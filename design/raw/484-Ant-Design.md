# Ant Design

- Source: <https://designmd.app/library/ant-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:18.308Z

Claude Artisan · Flat, material & plataformas2015–present

# Ant Design

Reference for flat, material & plataformas Ant Design. Ant Group / Alibaba (Chinese enterprise ecosystem).

Ant DesignantdDense, component-rich enterprise UIBlue primary, subtle shadows, 6px radius defaultComprehensive form/table componentsPragmatic, information-heavyflat-platform

Use case: hero, superfície, conteúdo e grade responsiva; Dense, component-rich enterprise UI; Blue primary, subtle shadows, 6px radius default

![Ant Design](https://designmd.app/images/library/574.png)

## Historical Context

Ant Group / Alibaba (Chinese enterprise ecosystem). Example: Alibaba enterprise consoles; many admin panels..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

Nome e vocabulário de uma plataforma/sistema de terceiros; use como referência e verifique marcas e licenças antes de publicar.

## DESIGN.md

```
---
version: "alpha"
name: "Ant Design"
description: "Ant Design visual system, translated from the Claude Artisan catalog for use in digital products. Dense, component-rich enterprise UI; Blue primary, subtle shadows, 6px radius default"
colors:
primary: "#1677ff"
background: "#f5f5f5"
surface: "#ffffff"
text: "#1f1f1f"
accent: "#13c2c2"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "-apple-system, 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "-apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "-apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "6px"
lg: "8px"
spacing:
sm: "8px"
md: "16px"
lg: "24px"
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
padding: "20px"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "16px"
---
## Overview

Ant Design visual system, translated from the Claude Artisan catalog for use in digital products. Dense, component-rich enterprise UI; Blue primary, subtle shadows, 6px radius default

- **Category:** flat-platform
- **Era:** 2015–present
- **Origin:** Ant Group / Alibaba (Chinese enterprise ecosystem).
- **Reference:** Alibaba enterprise consoles; many admin panels.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dense, component-rich enterprise UI
- Blue primary, subtle shadows, 6px radius default
- Comprehensive form/table components
- Pragmatic, information-heavy

## Colors

- **bg** — #f5f5f5
- **surface** — #ffffff
- **surface-strong** — #fafafa
- **border** — #d9d9d9
- **text** — #1f1f1f
- **text-muted** — #595959
- **primary** — #1677ff
- **accent** — #13c2c2

## Typography

- Display: -apple-system, 'Segoe UI', sans-serif
- Body: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif
- Mono: 'SFMono-Regular', Consolas, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dense, component-rich enterprise UI; Blue primary, subtle shadows, 6px radius default; Comprehensive form/table components; Pragmatic, information-heavy; sombras e elevação

## Shapes

- Radius scale: 4px, 6px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/ant-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Ant Design — design tokens */
/* 2015–present | Ant Group / Alibaba (Chinese enterprise ecosystem), condensed */
:root {
/* color */
--color-bg: #f5f5f5;
--color-surface: #ffffff;
--color-surface-strong: #fafafa;
--color-border: #d9d9d9;
--color-text: #1f1f1f;
--color-text-muted: #595959;
--color-primary: #1677ff;
--color-accent: #13c2c2;
/* radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 2px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 6px 16px rgba(0,0,0,0.1);
/* font */
--font-sans: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
--font-display: -apple-system, 'Segoe UI', sans-serif;
--font-mono: 'SFMono-Regular', Consolas, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 20px;
--space-8: 24px;
--space-12: 32px;
--space-16: 48px;
--space-24: 64px;
/* ease */
--ease-standard: cubic-bezier(0.645, 0.045, 0.355, 1);
/* extra: compact density + blue focus ring */
--focus-ring: 0 0 0 3px rgba(22,119,255,0.16);
}

/* ============================================================
Base component classes — Ant Design
Signature move: dense, compact spacing with a uniform 6px radius
and a subtle 1px border + shadow-sm applied to every surface —
the pragmatic enterprise "component-rich" density. Repeats on
nav, card, input, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; font-size: var(--text-base); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 400 var(--text-base)/1.5 var(--font-sans); color: var(--color-text);
padding: 6px var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: color .2s var(--ease-standard), border-color .2s var(--ease-standard);
}
.btn:hover { color: var(--color-primary); border-color: var(--color-primary); }
.btn:active { color: #0958d9; border-color: #0958d9; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; color: var(--color-text-muted); border-color: var(--color-border); }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #4096ff; border-color: #4096ff; color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: 6px var(--space-3); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: 0 var(--space-2); height: 20px; border-radius: var(--radius-pill);
background: color-mix(in srgb, var(--color-primary) 10%, white); color: var(--color-primary); border: 1px solid color-mix(in srgb, var(--color-primary) 30%, white);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ant-design.md */
```

### Variables

```
--bg: #f5f5f5, --fg: #1f1f1f, --accent: #1677ff, --surface: #ffffff, --radius: 6px, --spacing: 16px, --font-display: -apple-system, 'Segoe UI', sans-serif, --font-body: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f5f5f5

#ffffff

#fafafa

#d9d9d9

Secondary

#1f1f1f

#595959

#1677ff

#13c2c2

### Effects

Dense, component-rich enterprise UI, Blue primary, subtle shadows, 6px radius default, Comprehensive form/table components, Pragmatic, information-heavy, shadow

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

- **Name:** Ant Design
- **Type:** claude-artisan/flat-platform
- **Keywords:** Ant Design, antd, Dense, component-rich enterprise UI, Blue primary, subtle shadows, 6px radius default, Comprehensive form/table components, Pragmatic, information-heavy, flat-platform
- **Era:** 2015–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f5f5f5, surface: #ffffff, surface-strong: #fafafa, border: #d9d9d9
- **Secondary:** text: #1f1f1f, text-muted: #595959, primary: #1677ff, accent: #13c2c2

## Visual Effects

Dense, component-rich enterprise UI, Blue primary, subtle shadows, 6px radius default, Comprehensive form/table components, Pragmatic, information-heavy, shadow

## AI Visual Direction

Ant Design, Dense, component-rich enterprise UI, Blue primary, subtle shadows, 6px radius default, Comprehensive form/table components, Pragmatic, information-heavy, Alibaba enterprise consoles; many admin panels.

## CSS Technical

```css
/* Ant Design — design tokens */
/* 2015–present | Ant Group / Alibaba (Chinese enterprise ecosystem), condensed */
:root {
/* color */
--color-bg: #f5f5f5;
--color-surface: #ffffff;
--color-surface-strong: #fafafa;
--color-border: #d9d9d9;
--color-text: #1f1f1f;
--color-text-muted: #595959;
--color-primary: #1677ff;
--color-accent: #13c2c2;
/* radius */
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 2px 8px rgba(0,0,0,0.08);
--shadow-lg: 0 6px 16px rgba(0,0,0,0.1);
/* font */
--font-sans: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif;
--font-display: -apple-system, 'Segoe UI', sans-serif;
--font-mono: 'SFMono-Regular', Consolas, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.8125rem;
--text-base: 0.875rem;
--text-lg: 1rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3.25rem;
/* space */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 20px;
--space-8: 24px;
--space-12: 32px;
--space-16: 48px;
--space-24: 64px;
/* ease */
--ease-standard: cubic-bezier(0.645, 0.045, 0.355, 1);
/* extra: compact density + blue focus ring */
--focus-ring: 0 0 0 3px rgba(22,119,255,0.16);
}

/* ============================================================
Base component classes — Ant Design
Signature move: dense, compact spacing with a uniform 6px radius
and a subtle 1px border + shadow-sm applied to every surface —
the pragmatic enterprise "component-rich" density. Repeats on
nav, card, input, and btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; font-size: var(--text-base); }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-2) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.btn {
font: 400 var(--text-base)/1.5 var(--font-sans); color: var(--color-text);
padding: 6px var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
cursor: pointer; transition: color .2s var(--ease-standard), border-color .2s var(--ease-standard);
}
.btn:hover { color: var(--color-primary); border-color: var(--color-primary); }
.btn:active { color: #0958d9; border-color: #0958d9; }
.btn:focus-visible { outline: none; box-shadow: var(--focus-ring); }
.btn[disabled] { opacity: .5; cursor: not-allowed; color: var(--color-text-muted); border-color: var(--color-border); }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #4096ff; border-color: #4096ff; color: #ffffff; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
padding: var(--space-6); border: 1px solid var(--color-border); box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: 6px var(--space-3); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: var(--focus-ring); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: 0 var(--space-2); height: 20px; border-radius: var(--radius-pill);
background: color-mix(in srgb, var(--color-primary) 10%, white); color: var(--color-primary); border: 1px solid color-mix(in srgb, var(--color-primary) 30%, white);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ant-design.md */
```

## Design System Variables

```css
--bg: #f5f5f5, --fg: #1f1f1f, --accent: #1677ff, --surface: #ffffff, --radius: 6px, --spacing: 16px, --font-display: -apple-system, 'Segoe UI', sans-serif, --font-body: -apple-system, 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif
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

[![Carbon Design System](https://designmd.app/images/library/594.png) Claude Artisan · Flat, material & plataformas ### Carbon Design System](https://designmd.app/library/carbon-design)[![Material Design (M2)](https://designmd.app/images/library/678.png) Claude Artisan · Flat, material & plataformas ### Material Design (M2)](https://designmd.app/library/material-design)

Last synced: 8/30/2026
