# Seapunk

- Source: <https://designmd.app/library/seapunk>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:48.366Z

Claude Artisan · Retrofuturismo & ficção especulativa2011–2013

# Seapunk

Reference for retrofuturismo & ficção especulativa Seapunk. Tumblr-born internet microgenre.

Seapunkaquatic vaporwaveAquatic teal/cyan, dolphins, waves90s CGI/Web 1.0 nostalgiaYin-yang, glitch, holographicWatery, kitschy, ironicretrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia

![Seapunk](https://designmd.app/images/library/714.png)

## Historical Context

Tumblr-born internet microgenre. Example: Seapunk Tumblr; Rihanna 2012 SNL visuals..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Seapunk"
description: "Seapunk visual system, translated from the Claude Artisan catalog for use in digital products. Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia"
colors:
primary: "#00e5ff"
background: "#062c31"
surface: "#0d4750"
text: "#eafffc"
accent: "#ff6ec7"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Papyrus', 'Herculanum', 'Verdana', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Verdana', 'Geneva', sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Verdana', 'Geneva', sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "12px"
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

Seapunk visual system, translated from the Claude Artisan catalog for use in digital products. Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia

- **Category:** retrofuturism
- **Era:** 2011–2013
- **Origin:** Tumblr-born internet microgenre.
- **Reference:** Seapunk Tumblr; Rihanna 2012 SNL visuals.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aquatic teal/cyan, dolphins, waves
- 90s CGI/Web 1.0 nostalgia
- Yin-yang, glitch, holographic
- Watery, kitschy, ironic

## Colors

- **bg** — #062c31
- **surface** — #0d4750
- **surface-strong** — #135b66
- **border** — #00e5ff
- **text** — #eafffc
- **text-muted** — #9fd9d4
- **primary** — #00e5ff
- **accent** — #ff6ec7
- **lime** — #a6ff3d

## Typography

- Display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif
- Body: 'Verdana', 'Geneva', sans-serif
- Mono: 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aquatic teal/cyan, dolphins, waves; 90s CGI/Web 1.0 nostalgia; Yin-yang, glitch, holographic; Watery, kitschy, ironic; sombras e elevação

## Shapes

- Radius scale: 4px, 12px, 24px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/seapunk/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Seapunk — design tokens */
/* 2011–2013 | Tumblr-born internet microgenre, condensed */
:root {
/* color */
--color-bg: #062c31;
--color-surface: #0d4750;
--color-surface-strong: #135b66;
--color-border: #00e5ff;
--color-text: #eafffc;
--color-text-muted: #9fd9d4;
--color-primary: #00e5ff;
--color-accent: #ff6ec7;
--color-lime: #a6ff3d;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,229,255,0.25);
--shadow-md: 0 8px 20px rgba(0,229,255,0.28);
--shadow-lg: 0 18px 40px rgba(0,229,255,0.32);
/* font */
--font-sans: 'Verdana', 'Geneva', sans-serif;
--font-display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif;
--font-mono: 'Courier New', monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a holographic gradient border and a rippling wave-gradient background, both repeated */
--holo-gradient: linear-gradient(120deg, #00e5ff, #ff6ec7, #a6ff3d, #00e5ff);
--wave-bg: radial-gradient(120% 90% at 20% 0%, rgba(0,229,255,0.18), transparent 55%),
radial-gradient(100% 80% at 90% 100%, rgba(255,110,199,0.14), transparent 55%);
}

/* ============================================================
Base component classes — Seapunk
Signature move: a 2px holographic gradient border (cyan → pink → lime)
wrapping the nav, cards, and the primary button, over a rippling
teal wave-gradient page background — watery, kitschy, ironic Web 1.0.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--wave-bg), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface), var(--color-surface)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface-strong), var(--color-surface-strong)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background-image: linear-gradient(90deg, #00b8cc, #0d4750), var(--holo-gradient); color: #04181b; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface), var(--color-surface)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-lime); color: #0a1f00; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/seapunk.md */
```

### Variables

```
--bg: #062c31, --fg: #eafffc, --accent: #00e5ff, --surface: #0d4750, --radius: 12px, --spacing: 16px, --font-display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif, --font-body: 'Verdana', 'Geneva', sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#062c31

#0d4750

#135b66

#00e5ff

Secondary

#eafffc

#9fd9d4

#00e5ff

#ff6ec7

#a6ff3d

### Effects

Aquatic teal/cyan, dolphins, waves, 90s CGI/Web 1.0 nostalgia, Yin-yang, glitch, holographic, Watery, kitschy, ironic, shadow

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

- **Name:** Seapunk
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Seapunk, aquatic vaporwave, Aquatic teal/cyan, dolphins, waves, 90s CGI/Web 1.0 nostalgia, Yin-yang, glitch, holographic, Watery, kitschy, ironic, retrofuturism
- **Era:** 2011–2013
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #062c31, surface: #0d4750, surface-strong: #135b66, border: #00e5ff
- **Secondary:** text: #eafffc, text-muted: #9fd9d4, primary: #00e5ff, accent: #ff6ec7, lime: #a6ff3d

## Visual Effects

Aquatic teal/cyan, dolphins, waves, 90s CGI/Web 1.0 nostalgia, Yin-yang, glitch, holographic, Watery, kitschy, ironic, shadow

## AI Visual Direction

Seapunk, Aquatic teal/cyan, dolphins, waves, 90s CGI/Web 1.0 nostalgia, Yin-yang, glitch, holographic, Watery, kitschy, ironic, Seapunk Tumblr; Rihanna 2012 SNL visuals.

## CSS Technical

```css
/* Seapunk — design tokens */
/* 2011–2013 | Tumblr-born internet microgenre, condensed */
:root {
/* color */
--color-bg: #062c31;
--color-surface: #0d4750;
--color-surface-strong: #135b66;
--color-border: #00e5ff;
--color-text: #eafffc;
--color-text-muted: #9fd9d4;
--color-primary: #00e5ff;
--color-accent: #ff6ec7;
--color-lime: #a6ff3d;
/* radius */
--radius-sm: 4px;
--radius-md: 12px;
--radius-lg: 24px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(0,229,255,0.25);
--shadow-md: 0 8px 20px rgba(0,229,255,0.28);
--shadow-lg: 0 18px 40px rgba(0,229,255,0.32);
/* font */
--font-sans: 'Verdana', 'Geneva', sans-serif;
--font-display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif;
--font-mono: 'Courier New', monospace;
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
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
/* extra: a holographic gradient border and a rippling wave-gradient background, both repeated */
--holo-gradient: linear-gradient(120deg, #00e5ff, #ff6ec7, #a6ff3d, #00e5ff);
--wave-bg: radial-gradient(120% 90% at 20% 0%, rgba(0,229,255,0.18), transparent 55%),
radial-gradient(100% 80% at 90% 100%, rgba(255,110,199,0.14), transparent 55%);
}

/* ============================================================
Base component classes — Seapunk
Signature move: a 2px holographic gradient border (cyan → pink → lime)
wrapping the nav, cards, and the primary button, over a rippling
teal wave-gradient page background — watery, kitschy, ironic Web 1.0.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--wave-bg), var(--color-bg); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-radius: var(--radius-pill); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface), var(--color-surface)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface-strong); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface-strong), var(--color-surface-strong)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box;
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background-image: linear-gradient(90deg, #00b8cc, #0d4750), var(--holo-gradient); color: #04181b; }
.card { background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
padding: var(--space-6); border: 2px solid transparent;
background-image: linear-gradient(var(--color-surface), var(--color-surface)), var(--holo-gradient);
background-origin: border-box; background-clip: padding-box, border-box; }
.input { width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans); padding: var(--space-3) var(--space-4);
background: var(--color-surface-strong); border-radius: var(--radius-md); border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-accent) 30%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-lime); color: #0a1f00; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/seapunk.md */
```

## Design System Variables

```css
--bg: #062c31, --fg: #eafffc, --accent: #00e5ff, --surface: #0d4750, --radius: 12px, --spacing: 16px, --font-display: 'Papyrus', 'Herculanum', 'Verdana', sans-serif, --font-body: 'Verdana', 'Geneva', sans-serif
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

[![Vectordelia](https://designmd.app/images/library/746.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Vectordelia](https://designmd.app/library/vectordelia)[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)

Last synced: 8/30/2026
