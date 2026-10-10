# Windows Aero Glass

- Source: <https://designmd.app/library/aero-glass>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:05.308Z

Claude Artisan · Vidro & transparência2006–2012

# Windows Aero Glass

Reference for vidro & transparência Windows Aero Glass. Microsoft Windows Vista (2006) and Windows 7 Aero.

Windows Aero GlassAeroVista glassAero GlassTranslucent window chrome with Gaussian blurColored glass tint with reflective sheenRounded window corners and glowLive thumbnails / Flip 3Dglass

Use case: grade modular responsiva; Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen

![Windows Aero Glass](https://designmd.app/images/library/566.png)

## Historical Context

Microsoft Windows Vista (2006) and Windows 7 Aero. Example: Windows Vista / 7 title bars and taskbar..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Windows Aero Glass"
description: "Windows Aero Glass visual system, translated from the Claude Artisan catalog for use in digital products. Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen"
colors:
primary: "#3d8eeb"
background: "#0d2a4a"
surface: "#0d2a4a"
text: "#f3faff"
accent: "#8fd7ff"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Segoe UI', Tahoma, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI', Tahoma, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI', Tahoma, system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "10px"
lg: "14px"
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

Windows Aero Glass visual system, translated from the Claude Artisan catalog for use in digital products. Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen

- **Category:** glass
- **Era:** 2006–2012
- **Origin:** Microsoft Windows Vista (2006) and Windows 7 Aero.
- **Reference:** Windows Vista / 7 title bars and taskbar.
- **Structural base:** grade modular responsiva

**Defining traits:**
- Translucent window chrome with Gaussian blur
- Colored glass tint with reflective sheen
- Rounded window corners and glow
- Live thumbnails / Flip 3D

## Colors

- **bg** — #0d2a4a
- **bg-gradient-a** — #14406e
- **bg-gradient-b** — #0a1c33
- **surface** — rgba(173, 216, 255, 0.22)
- **surface-strong** — rgba(173, 216, 255, 0.35)
- **border** — rgba(255, 255, 255, 0.55)
- **text** — #f3faff
- **text-muted** — rgba(243, 250, 255, 0.78)
- **primary** — #3d8eeb
- **accent** — #8fd7ff

## Typography

- Display: 'Segoe UI', Tahoma, sans-serif
- Body: 'Segoe UI', Tahoma, system-ui, sans-serif
- Mono: 'Consolas', ui-monospace, monospace

## Layout

- grade modular responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Translucent window chrome with Gaussian blur; Colored glass tint with reflective sheen; Rounded window corners and glow; Live thumbnails / Flip 3D; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 6px, 10px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/aero-glass/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Windows Aero Glass — design tokens */
/* 2006–2012 | Microsoft Windows Vista (2006) and Windows 7 Aero, condensed */
:root {
/* color */
--color-bg: #0d2a4a;
--color-bg-gradient-a: #14406e;
--color-bg-gradient-b: #0a1c33;
--color-surface: rgba(173, 216, 255, 0.22);
--color-surface-strong: rgba(173, 216, 255, 0.35);
--color-border: rgba(255, 255, 255, 0.55);
--color-text: #f3faff;
--color-text-muted: rgba(243, 250, 255, 0.78);
--color-primary: #3d8eeb;
--color-accent: #8fd7ff;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
--shadow-md: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(141,206,255,0.3);
--shadow-lg: 0 20px 50px rgba(0,0,0,0.45), 0 0 24px rgba(141,206,255,0.35);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.7);
/* blur */
--blur-backdrop: 12px;
/* font */
--font-sans: 'Segoe UI', Tahoma, system-ui, sans-serif;
--font-display: 'Segoe UI', Tahoma, sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0.1, 1);
/* extra: glossy specular sheen band + glass fill */
--bg-image: radial-gradient(120% 100% at 50% -20%, #1f5794 0%, #0d2a4a 55%, #071829 100%);
--glass-fill: linear-gradient(180deg, rgba(210,235,255,0.4) 0%, rgba(173,216,255,0.15) 45%, rgba(120,170,220,0.1) 100%);
--glass-sheen: linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%);
}

/* ============================================================
Base component classes — Windows Aero Glass
Signature move: a glossy top-half specular sheen laid over
translucent blue-tinted glass, with a bright 1px highlight edge.
Repeats on nav (title bar), card (window panel), and btn (glossy pill).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--glass-sheen), var(--glass-fill);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); box-shadow: var(--shadow-md), var(--shadow-inset-hi);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-sheen), var(--glass-fill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
text-shadow: 0 1px 1px rgba(0,0,0,0.35);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--glass-sheen), linear-gradient(180deg, rgba(120,190,255,0.55), rgba(61,142,235,0.35)); border-color: rgba(255,255,255,0.7); }
.card {
background: var(--glass-sheen), var(--glass-fill);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: #0d2a4a; font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: rgba(255,255,255,0.85); border: 1px solid var(--color-border);
}
.input::placeholder { color: rgba(13,42,74,0.6); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(61,142,235,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--glass-sheen), var(--glass-fill); border: 1px solid var(--color-border);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn { background: #1c4066; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card, .btn { background: #1c4066; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/aero-glass.md */
```

### Variables

```
--bg: #0d2a4a, --fg: #f3faff, --accent: #3d8eeb, --surface: #0d2a4a, --radius: 10px, --spacing: 16px, --font-display: 'Segoe UI', Tahoma, sans-serif, --font-body: 'Segoe UI', Tahoma, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0d2a4a

#14406e

#0a1c33

Secondary

#f3faff

#3d8eeb

#8fd7ff

### Effects

Translucent window chrome with Gaussian blur, Colored glass tint with reflective sheen, Rounded window corners and glow, Live thumbnails / Flip 3D, shadow, blur

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

- **Name:** Windows Aero Glass
- **Type:** claude-artisan/glass
- **Keywords:** Windows Aero Glass, Aero, Vista glass, Aero Glass, Translucent window chrome with Gaussian blur, Colored glass tint with reflective sheen, Rounded window corners and glow, Live thumbnails / Flip 3D, glass
- **Era:** 2006–2012
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0d2a4a, bg-gradient-a: #14406e, bg-gradient-b: #0a1c33, surface: rgba(173, 216, 255, 0.22)
- **Secondary:** surface-strong: rgba(173, 216, 255, 0.35), border: rgba(255, 255, 255, 0.55), text: #f3faff, text-muted: rgba(243, 250, 255, 0.78), primary: #3d8eeb, accent: #8fd7ff

## Visual Effects

Translucent window chrome with Gaussian blur, Colored glass tint with reflective sheen, Rounded window corners and glow, Live thumbnails / Flip 3D, shadow, blur

## AI Visual Direction

Windows Aero Glass, Translucent window chrome with Gaussian blur, Colored glass tint with reflective sheen, Rounded window corners and glow, Live thumbnails / Flip 3D, Windows Vista / 7 title bars and taskbar.

## CSS Technical

```css
/* Windows Aero Glass — design tokens */
/* 2006–2012 | Microsoft Windows Vista (2006) and Windows 7 Aero, condensed */
:root {
/* color */
--color-bg: #0d2a4a;
--color-bg-gradient-a: #14406e;
--color-bg-gradient-b: #0a1c33;
--color-surface: rgba(173, 216, 255, 0.22);
--color-surface-strong: rgba(173, 216, 255, 0.35);
--color-border: rgba(255, 255, 255, 0.55);
--color-text: #f3faff;
--color-text-muted: rgba(243, 250, 255, 0.78);
--color-primary: #3d8eeb;
--color-accent: #8fd7ff;
/* radius */
--radius-sm: 6px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0,0,0,0.3);
--shadow-md: 0 8px 24px rgba(0,0,0,0.4), 0 0 12px rgba(141,206,255,0.3);
--shadow-lg: 0 20px 50px rgba(0,0,0,0.45), 0 0 24px rgba(141,206,255,0.35);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.7);
/* blur */
--blur-backdrop: 12px;
/* font */
--font-sans: 'Segoe UI', Tahoma, system-ui, sans-serif;
--font-display: 'Segoe UI', Tahoma, sans-serif;
--font-mono: 'Consolas', ui-monospace, monospace;
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
--ease-standard: cubic-bezier(0.2, 0, 0.1, 1);
/* extra: glossy specular sheen band + glass fill */
--bg-image: radial-gradient(120% 100% at 50% -20%, #1f5794 0%, #0d2a4a 55%, #071829 100%);
--glass-fill: linear-gradient(180deg, rgba(210,235,255,0.4) 0%, rgba(173,216,255,0.15) 45%, rgba(120,170,220,0.1) 100%);
--glass-sheen: linear-gradient(to bottom, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0) 70%);
}

/* ============================================================
Base component classes — Windows Aero Glass
Signature move: a glossy top-half specular sheen laid over
translucent blue-tinted glass, with a bright 1px highlight edge.
Repeats on nav (title bar), card (window panel), and btn (glossy pill).
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); border-radius: var(--radius-lg);
background: var(--glass-sheen), var(--glass-fill);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); box-shadow: var(--shadow-md), var(--shadow-inset-hi);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glass-sheen), var(--glass-fill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
text-shadow: 0 1px 1px rgba(0,0,0,0.35);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--glass-sheen), linear-gradient(180deg, rgba(120,190,255,0.55), rgba(61,142,235,0.35)); border-color: rgba(255,255,255,0.7); }
.card {
background: var(--glass-sheen), var(--glass-fill);
backdrop-filter: blur(var(--blur-backdrop)); -webkit-backdrop-filter: blur(var(--blur-backdrop));
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: #0d2a4a; font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: rgba(255,255,255,0.85); border: 1px solid var(--color-border);
}
.input::placeholder { color: rgba(13,42,74,0.6); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(61,142,235,0.35); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .8em; border-radius: var(--radius-pill);
background: var(--glass-sheen), var(--glass-fill); border: 1px solid var(--color-border);
}
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .card, .btn { background: #1c4066; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .card, .btn { background: #1c4066; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/aero-glass.md */
```

## Design System Variables

```css
--bg: #0d2a4a, --fg: #f3faff, --accent: #3d8eeb, --surface: #0d2a4a, --radius: 10px, --spacing: 16px, --font-display: 'Segoe UI', Tahoma, sans-serif, --font-body: 'Segoe UI', Tahoma, system-ui, sans-serif
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

[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)

Last synced: 8/30/2026
