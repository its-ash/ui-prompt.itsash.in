# Indie Sleaze

- Source: <https://designmd.app/library/indie-sleaze>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:11.280Z

Claude Artisan · Subculturas & estéticas de nicho2006–2012 (revived 2021)

# Indie Sleaze

Reference for subculturas & estéticas de nicho Indie Sleaze. Late-2000s hipster party aesthetic.

Indie Sleazehipster 2008blog-houseHarsh on-camera flash photographyGrainy, messy, American Apparel eraNeon-on-black party gritIronic, hedonistic, lo-finiche

Use case: shell de aplicação com navegação e cartões; Harsh on-camera flash photography; Grainy, messy, American Apparel era

![Indie Sleaze](https://designmd.app/images/library/661.png)

## Historical Context

Late-2000s hipster party aesthetic. Example: Cobrasnake party photos; blog-house era..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Indie Sleaze"
description: "Indie Sleaze visual system, translated from the Claude Artisan catalog for use in digital products. Harsh on-camera flash photography; Grainy, messy, American Apparel era"
colors:
primary: "#ff2d9c"
background: "#0c0c0c"
surface: "#161616"
text: "#f5f5f2"
accent: "#ccff00"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Impact', 'Arial Black', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', Arial, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "1px"
md: "2px"
lg: "3px"
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

Indie Sleaze visual system, translated from the Claude Artisan catalog for use in digital products. Harsh on-camera flash photography; Grainy, messy, American Apparel era

- **Category:** niche
- **Era:** 2006–2012 (revived 2021)
- **Origin:** Late-2000s hipster party aesthetic.
- **Reference:** Cobrasnake party photos; blog-house era.
- **Structural base:** shell de aplicação com navegação e cartões

**Defining traits:**
- Harsh on-camera flash photography
- Grainy, messy, American Apparel era
- Neon-on-black party grit
- Ironic, hedonistic, lo-fi

## Colors

- **bg** — #0c0c0c
- **surface** — #161616
- **surface-strong** — #1f1f1f
- **border** — #3a3a3a
- **text** — #f5f5f2
- **text-muted** — #b8b3ad
- **primary** — #ff2d9c
- **accent** — #ccff00
- **flash** — #ffffff

## Typography

- Display: 'Impact', 'Arial Black', sans-serif
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'Courier New', ui-monospace, monospace

## Layout

- shell de aplicação com navegação e cartões
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Harsh on-camera flash photography; Grainy, messy, American Apparel era; Neon-on-black party grit; Ironic, hedonistic, lo-fi; sombras e elevação

## Shapes

- Radius scale: 1px, 2px, 3px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/indie-sleaze/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Indie Sleaze — design tokens */
/* 2006–2012 (revived 2021) | Late-2000s hipster party aesthetic, condensed */
:root {
/* color */
--color-bg: #0c0c0c;
--color-surface: #161616;
--color-surface-strong: #1f1f1f;
--color-border: #3a3a3a;
--color-text: #f5f5f2;
--color-text-muted: #b8b3ad;
--color-primary: #ff2d9c;
--color-accent: #ccff00;
--color-flash: #ffffff;
/* radius: nothing designed on purpose, snapshots have no rounding logic */
--radius-sm: 1px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow: a blown-out on-camera flash halo instead of a soft drop shadow */
--shadow-sm: 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.6);
--shadow-md: 0 0 24px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.7);
--shadow-lg: 0 0 40px rgba(255,255,255,0.18), 0 16px 40px rgba(0,0,0,0.75);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Impact', 'Arial Black', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.85rem;
--text-3xl: 2.5rem;
--text-4xl: 3.4rem;
--text-5xl: 4.6rem;
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
--ease-standard: cubic-bezier(0.3, 0, 0.4, 1);
/* extra: a harsh camera-flash grain overlay plus a crooked "taped collage"
tilt — the two signature moves of blog-house party photography,
repeated on nav, card and btn so the whole page feels shot on a
point-and-shoot at 1am, not laid out on a grid */
--flash-grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--collage-tilt: rotate(-1.5deg);
--collage-tilt-alt: rotate(1deg);
}

/* ============================================================
Base component classes — indie-sleaze
Signature move: a harsh grain overlay (--flash-grain) simulating on-camera
flash photography, plus a crooked collage tilt (--collage-tilt) applied
to raised surfaces — repeated on nav, card and btn for DIY party-photo
energy instead of a polished grid.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--flash-grain);
background-size: 140px 140px;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--flash-grain); border-bottom: 1px solid var(--color-border);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); background-image: var(--flash-grain);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
text-transform: uppercase; letter-spacing: .02em; transform: var(--collage-tilt-alt);
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: rotate(0deg) translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #0c0c0c; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--flash-grain);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); transform: var(--collage-tilt);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(255,45,156,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #0c0c0c;
text-transform: uppercase; }
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn, .card { transform: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/indie-sleaze.md */
```

### Variables

```
--bg: #0c0c0c, --fg: #f5f5f2, --accent: #ff2d9c, --surface: #161616, --radius: 2px, --spacing: 16px, --font-display: 'Impact', 'Arial Black', sans-serif, --font-body: 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0c0c0c

#161616

#1f1f1f

#3a3a3a

Secondary

#f5f5f2

#b8b3ad

#ff2d9c

#ccff00

#ffffff

### Effects

Harsh on-camera flash photography, Grainy, messy, American Apparel era, Neon-on-black party grit, Ironic, hedonistic, lo-fi, shadow

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

- **Name:** Indie Sleaze
- **Type:** claude-artisan/niche
- **Keywords:** Indie Sleaze, hipster 2008, blog-house, Harsh on-camera flash photography, Grainy, messy, American Apparel era, Neon-on-black party grit, Ironic, hedonistic, lo-fi, niche
- **Era:** 2006–2012 (revived 2021)
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0c0c0c, surface: #161616, surface-strong: #1f1f1f, border: #3a3a3a
- **Secondary:** text: #f5f5f2, text-muted: #b8b3ad, primary: #ff2d9c, accent: #ccff00, flash: #ffffff

## Visual Effects

Harsh on-camera flash photography, Grainy, messy, American Apparel era, Neon-on-black party grit, Ironic, hedonistic, lo-fi, shadow

## AI Visual Direction

Indie Sleaze, Harsh on-camera flash photography, Grainy, messy, American Apparel era, Neon-on-black party grit, Ironic, hedonistic, lo-fi, Cobrasnake party photos; blog-house era.

## CSS Technical

```css
/* Indie Sleaze — design tokens */
/* 2006–2012 (revived 2021) | Late-2000s hipster party aesthetic, condensed */
:root {
/* color */
--color-bg: #0c0c0c;
--color-surface: #161616;
--color-surface-strong: #1f1f1f;
--color-border: #3a3a3a;
--color-text: #f5f5f2;
--color-text-muted: #b8b3ad;
--color-primary: #ff2d9c;
--color-accent: #ccff00;
--color-flash: #ffffff;
/* radius: nothing designed on purpose, snapshots have no rounding logic */
--radius-sm: 1px;
--radius-md: 2px;
--radius-lg: 3px;
--radius-pill: 999px;
/* shadow: a blown-out on-camera flash halo instead of a soft drop shadow */
--shadow-sm: 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.6);
--shadow-md: 0 0 24px rgba(255,255,255,0.14), 0 8px 24px rgba(0,0,0,0.7);
--shadow-lg: 0 0 40px rgba(255,255,255,0.18), 0 16px 40px rgba(0,0,0,0.75);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'Impact', 'Arial Black', sans-serif;
--font-mono: 'Courier New', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.375rem;
--text-2xl: 1.85rem;
--text-3xl: 2.5rem;
--text-4xl: 3.4rem;
--text-5xl: 4.6rem;
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
--ease-standard: cubic-bezier(0.3, 0, 0.4, 1);
/* extra: a harsh camera-flash grain overlay plus a crooked "taped collage"
tilt — the two signature moves of blog-house party photography,
repeated on nav, card and btn so the whole page feels shot on a
point-and-shoot at 1am, not laid out on a grid */
--flash-grain: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>");
--collage-tilt: rotate(-1.5deg);
--collage-tilt-alt: rotate(1deg);
}

/* ============================================================
Base component classes — indie-sleaze
Signature move: a harsh grain overlay (--flash-grain) simulating on-camera
flash photography, plus a crooked collage tilt (--collage-tilt) applied
to raised surfaces — repeated on nav, card and btn for DIY party-photo
energy instead of a polished grid.
============================================================ */
body {
margin: 0; color: var(--color-text); font-family: var(--font-sans);
background-color: var(--color-bg); background-image: var(--flash-grain);
background-size: 140px 140px;
}
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
background-image: var(--flash-grain); border-bottom: 1px solid var(--color-border);
}
.btn {
font: 800 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); background-image: var(--flash-grain);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm); cursor: pointer;
text-transform: uppercase; letter-spacing: .02em; transform: var(--collage-tilt-alt);
transition: transform .15s var(--ease-standard), box-shadow .15s var(--ease-standard);
}
.btn:hover { transform: rotate(0deg) translateY(-1px); box-shadow: var(--shadow-md); }
.btn:active { transform: rotate(0deg) translateY(0); box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #0c0c0c; border-color: var(--color-primary); }
.card {
background: var(--color-surface); background-image: var(--flash-grain);
border: 1px solid var(--color-border); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); transform: var(--collage-tilt);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text);
font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(255,45,156,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 800 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-accent); color: #0c0c0c;
text-transform: uppercase; }
@media (prefers-reduced-motion: reduce) {
.btn { transition: none; }
.btn, .card { transform: none; }
.btn:hover { transform: none; }
}

/* Especificação de referência: references/00-flagship-implementation-specs/indie-sleaze.md */
```

## Design System Variables

```css
--bg: #0c0c0c, --fg: #f5f5f2, --accent: #ff2d9c, --surface: #161616, --radius: 2px, --spacing: 16px, --font-display: 'Impact', 'Arial Black', sans-serif, --font-body: 'Helvetica Neue', Arial, sans-serif
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

[![VHS / Analog Video](https://designmd.app/images/library/747.png) Claude Artisan · Textura, material & renderização ### VHS / Analog Video](https://designmd.app/library/vhs)[![Grunge Design](https://designmd.app/images/library/655.png) Claude Artisan · Brutalismo & anti-design ### Grunge Design](https://designmd.app/library/grunge)

Last synced: 8/30/2026
