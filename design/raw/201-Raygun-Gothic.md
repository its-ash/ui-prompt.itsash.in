# Raygun Gothic

- Source: <https://designmd.app/library/raygun-gothic>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:36.289Z

Claude Artisan · Retrofuturismo & ficção especulativa1930s–1960s (revived)

# Raygun Gothic

Reference for retrofuturismo & ficção especulativa Raygun Gothic. Term popularized by William Gibson; pulp sci-fi + Googie.

Raygun Gothicretro sci-figoogie sci-fiSleek rockets, ray guns, chrome finsStreamlined optimistic space ageBold geometric sans + starbursts1950s 'World of Tomorrow' futurismretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age

![Raygun Gothic](https://designmd.app/images/library/708.png)

## Historical Context

Term popularized by William Gibson; pulp sci-fi + Googie. Example: The Jetsons; Forbidden Planet; Tomorrowland..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Raygun Gothic"
description: "Raygun Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age"
colors:
primary: "#ff5a36"
background: "#0b1e3d"
surface: "#12315e"
text: "#f2f6ff"
accent: "#2ee6d0"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Broadway', 'Futura', 'Arial Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Futura', 'Poppins', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "12px"
lg: "999px"
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

Raygun Gothic visual system, translated from the Claude Artisan catalog for use in digital products. Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age

- **Category:** retrofuturism
- **Era:** 1930s–1960s (revived)
- **Origin:** Term popularized by William Gibson; pulp sci-fi + Googie.
- **Reference:** The Jetsons; Forbidden Planet; Tomorrowland.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Sleek rockets, ray guns, chrome fins
- Streamlined optimistic space age
- Bold geometric sans + starbursts
- 1950s 'World of Tomorrow' futurism

## Colors

- **bg** — #0b1e3d
- **surface** — #12315e
- **surface-strong** — #1a4180
- **border** — #8fb4e6
- **text** — #f2f6ff
- **text-muted** — #aac2e8
- **primary** — #ff5a36
- **accent** — #2ee6d0
- **chrome** — #c9d6e8

## Typography

- Display: 'Broadway', 'Futura', 'Arial Black', sans-serif
- Body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Sleek rockets, ray guns, chrome fins; Streamlined optimistic space age; Bold geometric sans + starbursts; 1950s 'World of Tomorrow' futurism; sombras e elevação

## Shapes

- Radius scale: 4px, 12px, 999px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/raygun-gothic/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Raygun Gothic — design tokens */
/* 1930s–1960s (revived) | Pulp sci-fi + Googie, popularized by William Gibson, condensed */
:root {
/* color */
--color-bg: #0b1e3d;
--color-surface: #12315e;
--color-surface-strong: #1a4180;
--color-border: #8fb4e6;
--color-text: #f2f6ff;
--color-text-muted: #aac2e8;
--color-primary: #ff5a36;
--color-accent: #2ee6d0;
--color-chrome: #c9d6e8;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 999px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
--shadow-md: 0 6px 18px rgba(0,0,0,0.4);
--shadow-lg: 0 14px 36px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
--font-display: 'Broadway', 'Futura', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a chrome-fin gradient + a starburst radial the browser draws behind headline surfaces */
--chrome-gradient: linear-gradient(135deg, #eef3ff 0%, #9fb6d8 45%, #4a6a9c 55%, #eef3ff 100%);
--starburst: repeating-conic-gradient(from 0deg, rgba(46,230,208,0.10) 0deg 8deg, transparent 8deg 20deg);
}

/* ============================================================
Base component classes — Raygun Gothic
Signature move: a polished chrome-fin gradient stripe on the leading
edge of raised surfaces (nav, card, primary button), plus a starburst
radial behind the page — sleek streamlined "World of Tomorrow" optimism.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--starburst), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid; border-image: var(--chrome-gradient) 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--color-surface-strong); border: 2px solid var(--color-chrome);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); border-color: #ffd7c9; color: #1a0800; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-md);
padding: var(--space-6); border-top: 4px solid; border-image: var(--chrome-gradient) 1; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-lg);
border: 2px solid var(--color-chrome); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #04211d; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/raygun-gothic.md */
```

### Variables

```
--bg: #0b1e3d, --fg: #f2f6ff, --accent: #ff5a36, --surface: #12315e, --radius: 12px, --spacing: 16px, --font-display: 'Broadway', 'Futura', 'Arial Black', sans-serif, --font-body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0b1e3d

#12315e

#1a4180

#8fb4e6

Secondary

#f2f6ff

#aac2e8

#ff5a36

#2ee6d0

#c9d6e8

### Effects

Sleek rockets, ray guns, chrome fins, Streamlined optimistic space age, Bold geometric sans + starbursts, 1950s 'World of Tomorrow' futurism, shadow

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

- **Name:** Raygun Gothic
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Raygun Gothic, retro sci-fi, googie sci-fi, Sleek rockets, ray guns, chrome fins, Streamlined optimistic space age, Bold geometric sans + starbursts, 1950s 'World of Tomorrow' futurism, retrofuturism
- **Era:** 1930s–1960s (revived)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0b1e3d, surface: #12315e, surface-strong: #1a4180, border: #8fb4e6
- **Secondary:** text: #f2f6ff, text-muted: #aac2e8, primary: #ff5a36, accent: #2ee6d0, chrome: #c9d6e8

## Visual Effects

Sleek rockets, ray guns, chrome fins, Streamlined optimistic space age, Bold geometric sans + starbursts, 1950s 'World of Tomorrow' futurism, shadow

## AI Visual Direction

Raygun Gothic, Sleek rockets, ray guns, chrome fins, Streamlined optimistic space age, Bold geometric sans + starbursts, 1950s 'World of Tomorrow' futurism, The Jetsons; Forbidden Planet; Tomorrowland.

## CSS Technical

```css
/* Raygun Gothic — design tokens */
/* 1930s–1960s (revived) | Pulp sci-fi + Googie, popularized by William Gibson, condensed */
:root {
/* color */
--color-bg: #0b1e3d;
--color-surface: #12315e;
--color-surface-strong: #1a4180;
--color-border: #8fb4e6;
--color-text: #f2f6ff;
--color-text-muted: #aac2e8;
--color-primary: #ff5a36;
--color-accent: #2ee6d0;
--color-chrome: #c9d6e8;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 999px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
--shadow-md: 0 6px 18px rgba(0,0,0,0.4);
--shadow-lg: 0 14px 36px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Century Gothic', 'Futura', 'Poppins', sans-serif;
--font-display: 'Broadway', 'Futura', 'Arial Black', sans-serif;
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
--ease-standard: cubic-bezier(0.34, 1.56, 0.64, 1);
/* extra: a chrome-fin gradient + a starburst radial the browser draws behind headline surfaces */
--chrome-gradient: linear-gradient(135deg, #eef3ff 0%, #9fb6d8 45%, #4a6a9c 55%, #eef3ff 100%);
--starburst: repeating-conic-gradient(from 0deg, rgba(46,230,208,0.10) 0deg 8deg, transparent 8deg 20deg);
}

/* ============================================================
Base component classes — Raygun Gothic
Signature move: a polished chrome-fin gradient stripe on the leading
edge of raised surfaces (nav, card, primary button), plus a starburst
radial behind the page — sleek streamlined "World of Tomorrow" optimism.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--starburst), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 3px solid; border-image: var(--chrome-gradient) 1; }
.btn {
font: 700 var(--text-base)/1 var(--font-display); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--color-surface-strong); border: 2px solid var(--color-chrome);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0) scale(1); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); border-color: #ffd7c9; color: #1a0800; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-md);
padding: var(--space-6); border-top: 4px solid; border-image: var(--chrome-gradient) 1; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-lg);
border: 2px solid var(--color-chrome); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-sans);
padding: .35em .9em; border-radius: var(--radius-pill); background: var(--color-accent); color: #04211d; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/raygun-gothic.md */
```

## Design System Variables

```css
--bg: #0b1e3d, --fg: #f2f6ff, --accent: #ff5a36, --surface: #12315e, --radius: 12px, --spacing: 16px, --font-display: 'Broadway', 'Futura', 'Arial Black', sans-serif, --font-body: 'Century Gothic', 'Futura', 'Poppins', sans-serif
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

[![Atompunk](https://designmd.app/images/library/582.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Atompunk](https://designmd.app/library/atompunk)[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)[![Space Age Pop](https://designmd.app/images/library/720.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Space Age Pop](https://designmd.app/library/space-age)

Last synced: 8/30/2026
