# Frosted Glass

- Source: <https://designmd.app/library/frosted-glass>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:38.315Z

Claude Artisan · Vidro & transparência2013–present

# Frosted Glass

Reference for vidro & transparência Frosted Glass. Generic pattern popularized by iOS 7 blur layers.

Frosted Glassfrosted panelblur overlaySimple backdrop-filter blur behind modals/overlaysSemi-opaque white or dark scrimContent legibility via blur + tintNo strong refraction or edge lightingglass

Use case: hero, superfície, conteúdo e grade responsiva; Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim

![Frosted Glass](https://designmd.app/images/library/642.png)

## Historical Context

Generic pattern popularized by iOS 7 blur layers. Example: iOS Control Center; modal backdrops across the web..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Frosted Glass"
description: "Frosted Glass visual system, translated from the Claude Artisan catalog for use in digital products. Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim"
colors:
primary: "#1f6feb"
background: "#7c8a99"
surface: "#7c8a99"
text: "#16202b"
accent: "#1a1f26"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'SF Pro Display', -apple-system, system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'SF Pro Text', -apple-system, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'SF Pro Text', -apple-system, system-ui, sans-serif"
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

Frosted Glass visual system, translated from the Claude Artisan catalog for use in digital products. Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim

- **Category:** glass
- **Era:** 2013–present
- **Origin:** Generic pattern popularized by iOS 7 blur layers.
- **Reference:** iOS Control Center; modal backdrops across the web.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Simple backdrop-filter blur behind modals/overlays
- Semi-opaque white or dark scrim
- Content legibility via blur + tint
- No strong refraction or edge lighting

## Colors

- **bg** — #7c8a99
- **bg-photo-a** — #93a2b0
- **bg-photo-b** — #5c6b7a
- **surface** — rgba(255, 255, 255, 0.55)
- **surface-strong** — rgba(255, 255, 255, 0.72)
- **border** — rgba(255, 255, 255, 0.4)
- **text** — #16202b
- **text-muted** — #3d4a58
- **primary** — #1f6feb
- **accent** — #1a1f26

## Typography

- Display: 'SF Pro Display', -apple-system, system-ui, sans-serif
- Body: 'SF Pro Text', -apple-system, system-ui, sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Simple backdrop-filter blur behind modals/overlays; Semi-opaque white or dark scrim; Content legibility via blur + tint; No strong refraction or edge lighting; sombras e elevação; transparência e blur

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

[Download DESIGN.md](https://designmd.app/library/frosted-glass/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Frosted Glass — design tokens */
/* 2013–present | Generic pattern popularized by iOS 7 blur layers, condensed */
:root {
/* color: a neutral photo-toned backdrop (not a vivid gradient like
glassmorphism) with a plain white/dark scrim doing all the work */
--color-bg: #7c8a99;
--color-bg-photo-a: #93a2b0;
--color-bg-photo-b: #5c6b7a;
--color-surface: rgba(255, 255, 255, 0.55);
--color-surface-strong: rgba(255, 255, 255, 0.72);
--color-border: rgba(255, 255, 255, 0.4);
--color-text: #16202b;
--color-text-muted: #3d4a58;
--color-primary: #1f6feb;
--color-accent: #1a1f26;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(10,16,24,0.18);
--shadow-md: 0 6px 20px rgba(10,16,24,0.22);
--shadow-lg: 0 14px 36px rgba(10,16,24,0.26);
/* blur: moderate, uniform — no refraction/edge-lighting, just legibility */
--blur-backdrop: 12px;
/* font */
--font-sans: 'SF Pro Text', -apple-system, system-ui, sans-serif;
--font-display: 'SF Pro Display', -apple-system, system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: the background is a plain diagonal photo-like gradient (no color
mixing), and every raised surface is a flat semi-opaque white scrim +
blur — the signature move, deliberately simpler than glassmorphism's
tinted refractive panel */
--bg-image: linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%);
}

/* ============================================================
Base component classes — frosted-glass
Signature move: a flat semi-opaque white scrim + backdrop blur (no tint,
no gradient fill, no edge highlight) — repeated identically on nav, card
and input so it reads as one uniform "frosted pane" material.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(31,111,235,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #ffffff; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .btn, .card { background: #eef2f6; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .btn, .card { background: #eef2f6; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/frosted-glass.md */
```

### Variables

```
--bg: #7c8a99, --fg: #16202b, --accent: #1f6feb, --surface: #7c8a99, --radius: 14px, --spacing: 16px, --font-display: 'SF Pro Display', -apple-system, system-ui, sans-serif, --font-body: 'SF Pro Text', -apple-system, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#7c8a99

#93a2b0

#5c6b7a

Secondary

#16202b

#3d4a58

#1f6feb

#1a1f26

### Effects

Simple backdrop-filter blur behind modals/overlays, Semi-opaque white or dark scrim, Content legibility via blur + tint, No strong refraction or edge lighting, shadow, blur

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

- **Name:** Frosted Glass
- **Type:** claude-artisan/glass
- **Keywords:** Frosted Glass, frosted panel, blur overlay, Simple backdrop-filter blur behind modals/overlays, Semi-opaque white or dark scrim, Content legibility via blur + tint, No strong refraction or edge lighting, glass
- **Era:** 2013–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #7c8a99, bg-photo-a: #93a2b0, bg-photo-b: #5c6b7a, surface: rgba(255, 255, 255, 0.55)
- **Secondary:** surface-strong: rgba(255, 255, 255, 0.72), border: rgba(255, 255, 255, 0.4), text: #16202b, text-muted: #3d4a58, primary: #1f6feb, accent: #1a1f26

## Visual Effects

Simple backdrop-filter blur behind modals/overlays, Semi-opaque white or dark scrim, Content legibility via blur + tint, No strong refraction or edge lighting, shadow, blur

## AI Visual Direction

Frosted Glass, Simple backdrop-filter blur behind modals/overlays, Semi-opaque white or dark scrim, Content legibility via blur + tint, No strong refraction or edge lighting, iOS Control Center; modal backdrops across the web.

## CSS Technical

```css
/* Frosted Glass — design tokens */
/* 2013–present | Generic pattern popularized by iOS 7 blur layers, condensed */
:root {
/* color: a neutral photo-toned backdrop (not a vivid gradient like
glassmorphism) with a plain white/dark scrim doing all the work */
--color-bg: #7c8a99;
--color-bg-photo-a: #93a2b0;
--color-bg-photo-b: #5c6b7a;
--color-surface: rgba(255, 255, 255, 0.55);
--color-surface-strong: rgba(255, 255, 255, 0.72);
--color-border: rgba(255, 255, 255, 0.4);
--color-text: #16202b;
--color-text-muted: #3d4a58;
--color-primary: #1f6feb;
--color-accent: #1a1f26;
/* radius */
--radius-sm: 8px;
--radius-md: 14px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(10,16,24,0.18);
--shadow-md: 0 6px 20px rgba(10,16,24,0.22);
--shadow-lg: 0 14px 36px rgba(10,16,24,0.26);
/* blur: moderate, uniform — no refraction/edge-lighting, just legibility */
--blur-backdrop: 12px;
/* font */
--font-sans: 'SF Pro Text', -apple-system, system-ui, sans-serif;
--font-display: 'SF Pro Display', -apple-system, system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
/* extra: the background is a plain diagonal photo-like gradient (no color
mixing), and every raised surface is a flat semi-opaque white scrim +
blur — the signature move, deliberately simpler than glassmorphism's
tinted refractive panel */
--bg-image: linear-gradient(160deg, var(--color-bg-photo-a) 0%, var(--color-bg-photo-b) 100%);
}

/* ============================================================
Base component classes — frosted-glass
Signature move: a flat semi-opaque white scrim + backdrop blur (no tint,
no gradient fill, no edge highlight) — repeated identically on nav, card
and input so it reads as one uniform "frosted pane" material.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6);
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .18s var(--ease-standard), box-shadow .18s var(--ease-standard);
}
.btn:hover { background: var(--color-surface-strong); box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: var(--color-primary); }
.card {
background: var(--color-surface);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(31,111,235,0.28); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent);
color: #ffffff; }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .btn, .card { background: #eef2f6; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .btn, .card { background: #eef2f6; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/frosted-glass.md */
```

## Design System Variables

```css
--bg: #7c8a99, --fg: #16202b, --accent: #1f6feb, --surface: #7c8a99, --radius: 14px, --spacing: 16px, --font-display: 'SF Pro Display', -apple-system, system-ui, sans-serif, --font-body: 'SF Pro Text', -apple-system, system-ui, sans-serif
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

[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)

Last synced: 8/30/2026
