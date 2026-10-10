# Streamline Moderne

- Source: <https://designmd.app/library/streamline-moderne>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:08.407Z

Claude Artisan · Movimentos históricos1930s

# Streamline Moderne

Reference for movimentos históricos Streamline Moderne. Late Art Deco offshoot, US industrial design.

Streamline ModerneArt ModerneStreamlineAerodynamic curves and horizontal speed linesRounded corners, nautical/machine formsSilver, cream, chrome accentsSleek, futuristic-for-its-timehistorical

Use case: hero, superfície, conteúdo e grade responsiva; Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms

![Streamline Moderne](https://designmd.app/images/library/726.png)

## Historical Context

Late Art Deco offshoot, US industrial design. Example: Chrysler Airflow; diners; ocean-liner graphics..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Streamline Moderne"
description: "Streamline Moderne visual system, translated from the Claude Artisan catalog for use in digital products. Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms"
colors:
primary: "#16414d"
background: "#f2efe9"
surface: "#ffffff"
text: "#1c2226"
accent: "#c9a34b"
on-primary: "#FFFFFF"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Century Gothic', 'Poppins', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Century Gothic', 'Poppins', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "10px"
md: "20px"
lg: "40px"
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

Streamline Moderne visual system, translated from the Claude Artisan catalog for use in digital products. Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms

- **Category:** historical
- **Era:** 1930s
- **Origin:** Late Art Deco offshoot, US industrial design.
- **Reference:** Chrysler Airflow; diners; ocean-liner graphics.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Aerodynamic curves and horizontal speed lines
- Rounded corners, nautical/machine forms
- Silver, cream, chrome accents
- Sleek, futuristic-for-its-time

## Colors

- **bg** — #f2efe9
- **surface** — #ffffff
- **surface-strong** — #e6e2d8
- **border** — #b9c1c6
- **text** — #1c2226
- **text-muted** — #52605f
- **primary** — #16414d
- **accent** — #c9a34b
- **chrome** — #9aa7ac

## Typography

- Display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif
- Body: 'Century Gothic', 'Poppins', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Aerodynamic curves and horizontal speed lines; Rounded corners, nautical/machine forms; Silver, cream, chrome accents; Sleek, futuristic-for-its-time; sombras e elevação

## Shapes

- Radius scale: 10px, 20px, 40px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/streamline-moderne/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Streamline Moderne — design tokens */
/* 1930s | Late Art Deco offshoot, US industrial design, condensed */
:root {
/* color */
--color-bg: #f2efe9;
--color-surface: #ffffff;
--color-surface-strong: #e6e2d8;
--color-border: #b9c1c6;
--color-text: #1c2226;
--color-text-muted: #52605f;
--color-primary: #16414d;
--color-accent: #c9a34b;
--color-chrome: #9aa7ac;
/* radius: aerodynamic, fully rounded ends like a locomotive nose */
--radius-sm: 10px;
--radius-md: 20px;
--radius-lg: 40px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 5px rgba(28,34,38,0.14);
--shadow-md: 0 6px 16px rgba(28,34,38,0.16);
--shadow-lg: 0 16px 36px rgba(28,34,38,0.2);
/* font: geometric sans with confident, speedy character */
--font-sans: 'Century Gothic', 'Poppins', system-ui, sans-serif;
--font-display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: repeating horizontal speed-lines, the defining streamline motif */
--speed-lines: repeating-linear-gradient(180deg, var(--color-chrome) 0px, var(--color-chrome) 2px, transparent 2px, transparent 7px);
--chrome-band: linear-gradient(180deg, #fdfdfd, var(--color-chrome) 50%, #7c898d);
}

/* ============================================================
Base component classes — Streamline Moderne
Signature move: repeating horizontal "speed line" bands (chrome stripes)
paired with fully-rounded aerodynamic ends, repeated on nav, card and
btn to evoke a streamlined ocean-liner or locomotive silhouette.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-8); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-md);
border-left: 6px solid var(--color-primary); position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 40px;
background: var(--speed-lines); background-size: 100% 7px; opacity: .5; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateX(3px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f2efe9; border-color: var(--color-primary); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6) var(--space-6) var(--space-6) var(--space-8);
overflow: hidden; }
.card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 28px;
background: var(--speed-lines); background-size: 100% 7px; opacity: .35; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); color: #f2efe9; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/streamline-moderne.md */
```

### Variables

```
--bg: #f2efe9, --fg: #1c2226, --accent: #16414d, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif, --font-body: 'Century Gothic', 'Poppins', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2efe9

#ffffff

#e6e2d8

#b9c1c6

Secondary

#1c2226

#52605f

#16414d

#c9a34b

#9aa7ac

### Effects

Aerodynamic curves and horizontal speed lines, Rounded corners, nautical/machine forms, Silver, cream, chrome accents, Sleek, futuristic-for-its-time, shadow

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

- **Name:** Streamline Moderne
- **Type:** claude-artisan/historical
- **Keywords:** Streamline Moderne, Art Moderne, Streamline, Aerodynamic curves and horizontal speed lines, Rounded corners, nautical/machine forms, Silver, cream, chrome accents, Sleek, futuristic-for-its-time, historical
- **Era:** 1930s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2efe9, surface: #ffffff, surface-strong: #e6e2d8, border: #b9c1c6
- **Secondary:** text: #1c2226, text-muted: #52605f, primary: #16414d, accent: #c9a34b, chrome: #9aa7ac

## Visual Effects

Aerodynamic curves and horizontal speed lines, Rounded corners, nautical/machine forms, Silver, cream, chrome accents, Sleek, futuristic-for-its-time, shadow

## AI Visual Direction

Streamline Moderne, Aerodynamic curves and horizontal speed lines, Rounded corners, nautical/machine forms, Silver, cream, chrome accents, Sleek, futuristic-for-its-time, Chrysler Airflow; diners; ocean-liner graphics.

## CSS Technical

```css
/* Streamline Moderne — design tokens */
/* 1930s | Late Art Deco offshoot, US industrial design, condensed */
:root {
/* color */
--color-bg: #f2efe9;
--color-surface: #ffffff;
--color-surface-strong: #e6e2d8;
--color-border: #b9c1c6;
--color-text: #1c2226;
--color-text-muted: #52605f;
--color-primary: #16414d;
--color-accent: #c9a34b;
--color-chrome: #9aa7ac;
/* radius: aerodynamic, fully rounded ends like a locomotive nose */
--radius-sm: 10px;
--radius-md: 20px;
--radius-lg: 40px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 5px rgba(28,34,38,0.14);
--shadow-md: 0 6px 16px rgba(28,34,38,0.16);
--shadow-lg: 0 16px 36px rgba(28,34,38,0.2);
/* font: geometric sans with confident, speedy character */
--font-sans: 'Century Gothic', 'Poppins', system-ui, sans-serif;
--font-display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif;
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
--ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
/* extra: repeating horizontal speed-lines, the defining streamline motif */
--speed-lines: repeating-linear-gradient(180deg, var(--color-chrome) 0px, var(--color-chrome) 2px, transparent 2px, transparent 7px);
--chrome-band: linear-gradient(180deg, #fdfdfd, var(--color-chrome) 50%, #7c898d);
}

/* ============================================================
Base component classes — Streamline Moderne
Signature move: repeating horizontal "speed line" bands (chrome stripes)
paired with fully-rounded aerodynamic ends, repeated on nav, card and
btn to evoke a streamlined ocean-liner or locomotive silhouette.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-8); background: var(--color-surface);
border-radius: var(--radius-pill); box-shadow: var(--shadow-md);
border-left: 6px solid var(--color-primary); position: relative; overflow: hidden; }
.nav::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 40px;
background: var(--speed-lines); background-size: 100% 7px; opacity: .5; }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); letter-spacing: .04em; color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateX(3px); box-shadow: var(--shadow-md); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #f2efe9; border-color: var(--color-primary); }
.card { position: relative; background: var(--color-surface); color: var(--color-text);
border-radius: var(--radius-lg); box-shadow: var(--shadow-md);
border: 1px solid var(--color-border); padding: var(--space-6) var(--space-6) var(--space-6) var(--space-8);
overflow: hidden; }
.card::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 28px;
background: var(--speed-lines); background-size: 100% 7px; opacity: .35; }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-weight: 700; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); color: #f2efe9; background: var(--color-accent); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/streamline-moderne.md */
```

## Design System Variables

```css
--bg: #f2efe9, --fg: #1c2226, --accent: #16414d, --surface: #ffffff, --radius: 20px, --spacing: 16px, --font-display: 'Broadway', 'Bebas Neue', 'Poppins', system-ui, sans-serif, --font-body: 'Century Gothic', 'Poppins', system-ui, sans-serif
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

[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)

Last synced: 8/30/2026
