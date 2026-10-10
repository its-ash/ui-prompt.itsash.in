# Film Noir

- Source: <https://designmd.app/library/film-noir>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:17:30.377Z

Claude Artisan · Movimentos históricos1940s-1950s revival

# Film Noir

Reference for movimentos históricos Film Noir. Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows.

Film Noirnoirdetective noirHigh-contrast black, smoke, and creamVenetian-blind stripes and hard pools of lightEditorial crime-file typography and precise red evidence markshistorical

Use case: composição editorial com grade tipográfica; High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light

![Film Noir](https://designmd.app/images/library/637.png)

## Historical Context

Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows. Example: The Third Man, Double Indemnity, and Saul Bass-inspired title treatments..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Film Noir"
description: "Film Noir visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light"
colors:
primary: "#e8dfc9"
background: "#111111"
surface: "#1b1b1b"
text: "#f5eedc"
accent: "#bb342f"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "Georgia, 'Times New Roman', serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "Arial, Helvetica, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "2px"
lg: "4px"
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

Film Noir visual system, translated from the Claude Artisan catalog for use in digital products. High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light

- **Category:** historical
- **Era:** 1940s-1950s revival
- **Origin:** Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows.
- **Reference:** The Third Man, Double Indemnity, and Saul Bass-inspired title treatments.
- **Structural base:** composição editorial com grade tipográfica

**Defining traits:**
- High-contrast black, smoke, and cream
- Venetian-blind stripes and hard pools of light
- Editorial crime-file typography and precise red evidence marks

## Colors

- **bg** — #111111
- **surface** — #1b1b1b
- **surface-2** — #292929
- **text** — #f5eedc
- **text-muted** — #c9c0ac
- **primary** — #e8dfc9
- **accent** — #bb342f
- **smoke** — #78736a

## Typography

- Display: Georgia, 'Times New Roman', serif
- Body: Arial, Helvetica, sans-serif
- Mono: 'Courier New', monospace

## Layout

- composição editorial com grade tipográfica
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- High-contrast black, smoke, and cream; Venetian-blind stripes and hard pools of light; Editorial crime-file typography and precise red evidence marks; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0, 2px, 4px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/film-noir/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Film Noir — design tokens (generated from style_catalog.json) */
/* 1940s-1950s revival | Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows. */
:root {
/* color */
--color-bg: #111111;
--color-surface: #1b1b1b;
--color-surface-2: #292929;
--color-text: #f5eedc;
--color-text-muted: #c9c0ac;
--color-primary: #e8dfc9;
--color-accent: #bb342f;
--color-smoke: #78736a;
/* radius */
--radius-sm: 0;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-hard: 8px 8px 0 #050505;
--shadow-light: 0 0 0 1px rgba(245,238,220,.28);
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, 'Times New Roman', serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
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
--ease-standard: cubic-bezier(.2,.8,.2,1);
/* extra (signature gradients, composite borders, filters) */
--blind-stripes: repeating-linear-gradient(145deg, transparent 0 15px, rgba(245,238,220,.08) 16px 18px);
}

/* Reusable component primitives: Film Noir. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--blind-stripes)}.card,.nav{border:1px solid rgba(245,238,220,.3);box-shadow:var(--shadow-hard)}.btn--primary{background:var(--color-accent);color:var(--color-text);text-transform:uppercase;letter-spacing:.08em}.badge{border-left:4px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/film-noir.md */
```

### Variables

```
--bg: #111111, --fg: #f5eedc, --accent: #e8dfc9, --surface: #1b1b1b, --radius: 2px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: Arial, Helvetica, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#111111

#1b1b1b

#292929

#f5eedc

Secondary

#c9c0ac

#e8dfc9

#bb342f

#78736a

### Effects

High-contrast black, smoke, and cream, Venetian-blind stripes and hard pools of light, Editorial crime-file typography and precise red evidence marks, shadow, blur

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

- **Name:** Film Noir
- **Type:** claude-artisan/historical
- **Keywords:** Film Noir, noir, detective noir, High-contrast black, smoke, and cream, Venetian-blind stripes and hard pools of light, Editorial crime-file typography and precise red evidence marks, historical
- **Era:** 1940s-1950s revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #111111, surface: #1b1b1b, surface-2: #292929, text: #f5eedc
- **Secondary:** text-muted: #c9c0ac, primary: #e8dfc9, accent: #bb342f, smoke: #78736a

## Visual Effects

High-contrast black, smoke, and cream, Venetian-blind stripes and hard pools of light, Editorial crime-file typography and precise red evidence marks, shadow, blur

## AI Visual Direction

Film Noir, High-contrast black, smoke, and cream, Venetian-blind stripes and hard pools of light, Editorial crime-file typography and precise red evidence marks, The Third Man, Double Indemnity, and Saul Bass-inspired title treatments.

## CSS Technical

```css
/* Film Noir — design tokens (generated from style_catalog.json) */
/* 1940s-1950s revival | Postwar American crime cinema shaped by German Expressionist lighting, hard-boiled fiction, and urban shadows. */
:root {
/* color */
--color-bg: #111111;
--color-surface: #1b1b1b;
--color-surface-2: #292929;
--color-text: #f5eedc;
--color-text-muted: #c9c0ac;
--color-primary: #e8dfc9;
--color-accent: #bb342f;
--color-smoke: #78736a;
/* radius */
--radius-sm: 0;
--radius-md: 2px;
--radius-lg: 4px;
--radius-pill: 999px;
/* shadow */
--shadow-hard: 8px 8px 0 #050505;
--shadow-light: 0 0 0 1px rgba(245,238,220,.28);
/* font */
--font-sans: Arial, Helvetica, sans-serif;
--font-display: Georgia, 'Times New Roman', serif;
--font-mono: 'Courier New', monospace;
/* text */
--text-xs: .75rem;
--text-sm: .875rem;
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
--ease-standard: cubic-bezier(.2,.8,.2,1);
/* extra (signature gradients, composite borders, filters) */
--blind-stripes: repeating-linear-gradient(145deg, transparent 0 15px, rgba(245,238,220,.08) 16px 18px);
}

/* Reusable component primitives: Film Noir. */
body { margin:0; min-height:100vh; color:var(--color-text); background:var(--color-bg); font-family:var(--font-sans); }
.wrap { max-width:880px; margin:0 auto; padding:var(--space-16) var(--space-6); display:grid; gap:var(--space-8); }
.nav { display:flex; align-items:center; gap:var(--space-4); padding:var(--space-4) var(--space-6); background:var(--color-surface); position:relative; z-index:1; }
.nav a { color:var(--color-text-muted); text-decoration:none; font-size:var(--text-sm); }.nav a:hover { color:var(--color-text); }
.btn { appearance:none; border:1px solid var(--color-text); border-radius:var(--radius-md); background:var(--color-surface-2); color:var(--color-text); padding:var(--space-3) var(--space-6); font:700 var(--text-sm)/1 var(--font-sans); cursor:pointer; transition:transform .18s var(--ease-standard),background .18s var(--ease-standard); }
.btn:hover { transform:translateY(-2px); background:var(--color-accent); }.btn:active { transform:translateY(0); }.btn:focus-visible,.input:focus-visible { outline:3px solid var(--color-accent); outline-offset:3px; }.btn[disabled] { opacity:.5; cursor:not-allowed; transform:none; }
.input { width:min(100%,500px); box-sizing:border-box; padding:var(--space-3) var(--space-4); border:1px solid var(--color-text-muted); border-radius:var(--radius-sm); background:var(--color-surface); color:var(--color-text); font:var(--text-base) var(--font-sans); }
.grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:var(--space-4); }.card { background:var(--color-surface); padding:var(--space-6); position:relative; z-index:1; }.card h3 { margin:0 0 var(--space-2); font:700 var(--text-xl)/1.15 var(--font-display); }.card p { margin:0; color:var(--color-text-muted); }.row { display:flex; flex-wrap:wrap; align-items:center; gap:var(--space-3); position:relative; z-index:1; }.badge { display:inline-flex; align-items:center; padding:var(--space-2) var(--space-3); border-radius:var(--radius-pill); background:var(--color-surface-2); font-size:var(--text-xs); }
@media (max-width:620px){.wrap{padding:var(--space-8) var(--space-4)}.nav{flex-wrap:wrap}.nav strong{width:100%}}
@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:.01ms!important;transition-duration:.01ms!important}}
.wrap{position:relative}.wrap::before{content:"";position:fixed;inset:0;pointer-events:none;background:var(--blind-stripes)}.card,.nav{border:1px solid rgba(245,238,220,.3);box-shadow:var(--shadow-hard)}.btn--primary{background:var(--color-accent);color:var(--color-text);text-transform:uppercase;letter-spacing:.08em}.badge{border-left:4px solid var(--color-accent)}

/* Especificação de referência: references/00-flagship-implementation-specs/film-noir.md */
```

## Design System Variables

```css
--bg: #111111, --fg: #f5eedc, --accent: #e8dfc9, --surface: #1b1b1b, --radius: 2px, --spacing: 16px, --font-display: Georgia, 'Times New Roman', serif, --font-body: Arial, Helvetica, sans-serif
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

[![Dark Academia](https://designmd.app/images/library/617.png) Claude Artisan · Subculturas & estéticas de nicho ### Dark Academia](https://designmd.app/library/dark-academia)[![Linear Style](https://designmd.app/images/library/670.png) Claude Artisan · Flat, material & plataformas ### Linear Style](https://designmd.app/library/linear-dark)[![Goth / Gothic](https://designmd.app/images/library/650.png) Claude Artisan · Subculturas & estéticas de nicho ### Goth / Gothic](https://designmd.app/library/goth)

Last synced: 8/30/2026
