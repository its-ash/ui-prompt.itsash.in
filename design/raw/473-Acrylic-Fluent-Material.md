# Acrylic (Fluent Material)

- Source: <https://designmd.app/library/acrylic-fluent>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:02.277Z

Claude Artisan · Vidro & transparência2017–present

# Acrylic (Fluent Material)

Reference for vidro & transparência Acrylic (Fluent Material). Microsoft Fluent Design System.

Acrylic (Fluent Material)Fluent acrylicWindows 11 acrylicTranslucency + blur + subtle noise textureLight-dismiss transient surfaces (menus, flyouts)Mode-aware (light/dark)Sits beneath interactive UI as a base layerglass

Use case: grade modular responsiva; Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts)

![Acrylic (Fluent Material)](https://designmd.app/images/library/564.png)

## Historical Context

Microsoft Fluent Design System. Example: Windows 11 flyouts, command bars, context menus..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Acrylic (Fluent Material)"
description: "Acrylic (Fluent Material) visual system, translated from the Claude Artisan catalog for use in digital products. Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts)"
colors:
primary: "#0067c0"
background: "#f3f3f3"
surface: "#f3f3f3"
text: "#1b1b1b"
accent: "#744da9"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Segoe UI Variable Display', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "12px"
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

Acrylic (Fluent Material) visual system, translated from the Claude Artisan catalog for use in digital products. Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts)

- **Category:** glass
- **Era:** 2017–present
- **Origin:** Microsoft Fluent Design System.
- **Reference:** Windows 11 flyouts, command bars, context menus.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Translucency + blur + subtle noise texture
- Light-dismiss transient surfaces (menus, flyouts)
- Mode-aware (light/dark)
- Sits beneath interactive UI as a base layer

## Colors

- **bg** — #f3f3f3
- **surface** — rgba(255, 255, 255, 0.65)
- **surface-strong** — rgba(255, 255, 255, 0.85)
- **border** — rgba(0, 0, 0, 0.08)
- **text** — #1b1b1b
- **text-muted** — #5c5c5c
- **primary** — #0067c0
- **accent** — #744da9

## Typography

- Display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif
- Body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
- Mono: 'Cascadia Code', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Translucency + blur + subtle noise texture; Light-dismiss transient surfaces (menus, flyouts); Mode-aware (light/dark); Sits beneath interactive UI as a base layer; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 4px, 8px, 12px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/acrylic-fluent/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Acrylic (Fluent Material) — design tokens */
/* 2017–present | Microsoft Fluent Design System, condensed */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: rgba(255, 255, 255, 0.65);
--color-surface-strong: rgba(255, 255, 255, 0.85);
--color-border: rgba(0, 0, 0, 0.08);
--color-text: #1b1b1b;
--color-text-muted: #5c5c5c;
--color-primary: #0067c0;
--color-accent: #744da9;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.14);
/* blur */
--blur-backdrop: 30px;
--blur-backdrop-strong: 40px;
/* font */
--font-sans: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif;
--font-mono: 'Cascadia Code', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.8, 0, 0.2, 1);
--ease-entrance: cubic-bezier(0.1, 0.9, 0.2, 1);
--ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
/* extra: acrylic tint + noise texture layer */
--acrylic-tint: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
--acrylic-noise: repeating-conic-gradient(rgba(0,0,0,0.015) 0% 0.5%, transparent 0% 1%);
--acrylic-border: 1px solid rgba(255,255,255,0.5);
}

/* ============================================================
Base component classes — Acrylic (Fluent Material)
Signature move: a translucent tinted layer + faint noise texture
sitting beneath interactive UI as a light-dismiss base material.
Repeats on nav (command bar) and card (flyout) surfaces.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--acrylic-tint), var(--acrylic-noise), var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--acrylic-border); box-shadow: var(--shadow-md);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .15s var(--ease-standard), transform .1s var(--ease-standard);
}
.btn:hover { background: #ffffff; }
.btn:active { transform: scale(0.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #005aa8; }
.card {
background: var(--acrylic-tint), var(--acrylic-noise), var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--acrylic-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: rgba(255,255,255,0.9); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(0,103,192,0.25); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card { background: #ffffff; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card { background: #ffffff; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/acrylic-fluent.md */
```

### Variables

```
--bg: #f3f3f3, --fg: #1b1b1b, --accent: #0067c0, --surface: #f3f3f3, --radius: 8px, --spacing: 16px, --font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif, --font-body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f3f3f3

Secondary

#1b1b1b

#5c5c5c

#0067c0

#744da9

### Effects

Translucency + blur + subtle noise texture, Light-dismiss transient surfaces (menus, flyouts), Mode-aware (light/dark), Sits beneath interactive UI as a base layer, shadow, blur

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

- **Name:** Acrylic (Fluent Material)
- **Type:** claude-artisan/glass
- **Keywords:** Acrylic (Fluent Material), Fluent acrylic, Windows 11 acrylic, Translucency + blur + subtle noise texture, Light-dismiss transient surfaces (menus, flyouts), Mode-aware (light/dark), Sits beneath interactive UI as a base layer, glass
- **Era:** 2017–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f3f3f3, surface: rgba(255, 255, 255, 0.65), surface-strong: rgba(255, 255, 255, 0.85), border: rgba(0, 0, 0, 0.08)
- **Secondary:** text: #1b1b1b, text-muted: #5c5c5c, primary: #0067c0, accent: #744da9

## Visual Effects

Translucency + blur + subtle noise texture, Light-dismiss transient surfaces (menus, flyouts), Mode-aware (light/dark), Sits beneath interactive UI as a base layer, shadow, blur

## AI Visual Direction

Acrylic (Fluent Material), Translucency + blur + subtle noise texture, Light-dismiss transient surfaces (menus, flyouts), Mode-aware (light/dark), Sits beneath interactive UI as a base layer, Windows 11 flyouts, command bars, context menus.

## CSS Technical

```css
/* Acrylic (Fluent Material) — design tokens */
/* 2017–present | Microsoft Fluent Design System, condensed */
:root {
/* color */
--color-bg: #f3f3f3;
--color-surface: rgba(255, 255, 255, 0.65);
--color-surface-strong: rgba(255, 255, 255, 0.85);
--color-border: rgba(0, 0, 0, 0.08);
--color-text: #1b1b1b;
--color-text-muted: #5c5c5c;
--color-primary: #0067c0;
--color-accent: #744da9;
/* radius */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.08);
--shadow-md: 0 4px 16px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04);
--shadow-lg: 0 12px 32px rgba(0,0,0,0.14);
/* blur */
--blur-backdrop: 30px;
--blur-backdrop-strong: 40px;
/* font */
--font-sans: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif;
--font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif;
--font-mono: 'Cascadia Code', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.8, 0, 0.2, 1);
--ease-entrance: cubic-bezier(0.1, 0.9, 0.2, 1);
--ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
/* extra: acrylic tint + noise texture layer */
--acrylic-tint: linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.45));
--acrylic-noise: repeating-conic-gradient(rgba(0,0,0,0.015) 0% 0.5%, transparent 0% 1%);
--acrylic-border: 1px solid rgba(255,255,255,0.5);
}

/* ============================================================
Base component classes — Acrylic (Fluent Material)
Signature move: a translucent tinted layer + faint noise texture
sitting beneath interactive UI as a light-dismiss base material.
Repeats on nav (command bar) and card (flyout) surfaces.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--acrylic-tint), var(--acrylic-noise), var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--acrylic-border); box-shadow: var(--shadow-md);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: background .15s var(--ease-standard), transform .1s var(--ease-standard);
}
.btn:hover { background: #ffffff; }
.btn:active { transform: scale(0.98); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.btn--primary:hover { background: #005aa8; }
.card {
background: var(--acrylic-tint), var(--acrylic-noise), var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: var(--acrylic-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: rgba(255,255,255,0.9); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(0,103,192,0.25); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card { background: #ffffff; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card { background: #ffffff; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/acrylic-fluent.md */
```

## Design System Variables

```css
--bg: #f3f3f3, --fg: #1b1b1b, --accent: #0067c0, --surface: #f3f3f3, --radius: 8px, --spacing: 16px, --font-display: 'Segoe UI Variable Display', 'Segoe UI', sans-serif, --font-body: 'Segoe UI Variable', 'Segoe UI', system-ui, sans-serif
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

[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Liquid Glass](https://designmd.app/images/library/14.png) Flat & Soft UI ### Liquid Glass](https://designmd.app/library/liquid-glass)

Last synced: 8/30/2026
