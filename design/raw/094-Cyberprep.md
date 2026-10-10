# Cyberprep

- Source: <https://designmd.app/library/cyberprep>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:45.307Z

Claude Artisan · Retrofuturismo & ficção especulativa1990s–present

# Cyberprep

Reference for retrofuturismo & ficção especulativa Cyberprep. Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent).

Cyberprepoptimistic cyberpunkClean, bright, safe high-tech futureWhite/aqua/green, glossy surfacesSeamless friendly tech integrationUtopian consumer sci-firetrofuturism

Use case: hero, superfície, conteúdo e grade responsiva; Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces

![Cyberprep](https://designmd.app/images/library/611.png)

## Historical Context

Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent). Example: Mirror's Edge; early 2000s tech ads..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Cyberprep"
description: "Cyberprep visual system, translated from the Claude Artisan catalog for use in digital products. Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces"
colors:
primary: "#0fb5c4"
background: "#eef9fb"
surface: "#ffffff"
text: "#0c3a3f"
accent: "#3ddc84"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Eurostile', 'Segoe UI', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Segoe UI', 'Frutiger', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Segoe UI', 'Frutiger', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
md: "16px"
lg: "28px"
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

Cyberprep visual system, translated from the Claude Artisan catalog for use in digital products. Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces

- **Category:** retrofuturism
- **Era:** 1990s–present
- **Origin:** Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent).
- **Reference:** Mirror's Edge; early 2000s tech ads.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Clean, bright, safe high-tech future
- White/aqua/green, glossy surfaces
- Seamless friendly tech integration
- Utopian consumer sci-fi

## Colors

- **bg** — #eef9fb
- **surface** — #ffffff
- **surface-strong** — #dcf3f6
- **border** — #b7e6ec
- **text** — #0c3a3f
- **text-muted** — #3f6c70
- **primary** — #0fb5c4
- **accent** — #3ddc84
- **glossy-hi** — rgba(255, 255, 255, 0.85)

## Typography

- Display: 'Eurostile', 'Segoe UI', sans-serif
- Body: 'Segoe UI', 'Frutiger', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Clean, bright, safe high-tech future; White/aqua/green, glossy surfaces; Seamless friendly tech integration; Utopian consumer sci-fi; sombras e elevação

## Shapes

- Radius scale: 8px, 16px, 28px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/cyberprep/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Cyberprep — design tokens */
/* 1990s–present | Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent), condensed */
:root {
/* color */
--color-bg: #eef9fb;
--color-surface: #ffffff;
--color-surface-strong: #dcf3f6;
--color-border: #b7e6ec;
--color-text: #0c3a3f;
--color-text-muted: #3f6c70;
--color-primary: #0fb5c4;
--color-accent: #3ddc84;
--color-glossy-hi: rgba(255, 255, 255, 0.85);
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(15, 181, 196, 0.18);
--shadow-md: 0 8px 20px rgba(15, 181, 196, 0.20);
--shadow-lg: 0 16px 36px rgba(15, 181, 196, 0.22);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.9);
/* font */
--font-sans: 'Segoe UI', 'Frutiger', system-ui, sans-serif;
--font-display: 'Eurostile', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: glossy aqua gradient sheen, signature of the utopian tech look */
--glossy-fill: linear-gradient(180deg, var(--color-glossy-hi) 0%, var(--color-surface) 45%, var(--color-surface-strong) 100%);
--aqua-gradient: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — Cyberprep
Signature move: a glossy top-lit gradient sheen (bright highlight
fading to aqua surface) repeated on nav, card, and primary btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--glossy-fill);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm), var(--shadow-inset-hi); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glossy-fill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--aqua-gradient); color: #ffffff; border-color: transparent; }
.card {
background: var(--glossy-fill); border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-inset-hi);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(15, 181, 196, 0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--aqua-gradient); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyberprep.md */
```

### Variables

```
--bg: #eef9fb, --fg: #0c3a3f, --accent: #0fb5c4, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Eurostile', 'Segoe UI', sans-serif, --font-body: 'Segoe UI', 'Frutiger', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#eef9fb

#ffffff

#dcf3f6

#b7e6ec

Secondary

#0c3a3f

#3f6c70

#0fb5c4

#3ddc84

### Effects

Clean, bright, safe high-tech future, White/aqua/green, glossy surfaces, Seamless friendly tech integration, Utopian consumer sci-fi, shadow

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

- **Name:** Cyberprep
- **Type:** claude-artisan/retrofuturism
- **Keywords:** Cyberprep, optimistic cyberpunk, Clean, bright, safe high-tech future, White/aqua/green, glossy surfaces, Seamless friendly tech integration, Utopian consumer sci-fi, retrofuturism
- **Era:** 1990s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #eef9fb, surface: #ffffff, surface-strong: #dcf3f6, border: #b7e6ec
- **Secondary:** text: #0c3a3f, text-muted: #3f6c70, primary: #0fb5c4, accent: #3ddc84, glossy-hi: rgba(255, 255, 255, 0.85)

## Visual Effects

Clean, bright, safe high-tech future, White/aqua/green, glossy surfaces, Seamless friendly tech integration, Utopian consumer sci-fi, shadow

## AI Visual Direction

Cyberprep, Clean, bright, safe high-tech future, White/aqua/green, glossy surfaces, Seamless friendly tech integration, Utopian consumer sci-fi, Mirror's Edge; early 2000s tech ads.

## CSS Technical

```css
/* Cyberprep — design tokens */
/* 1990s–present | Optimistic counterpart to dystopian cyberpunk (Frutiger-adjacent), condensed */
:root {
/* color */
--color-bg: #eef9fb;
--color-surface: #ffffff;
--color-surface-strong: #dcf3f6;
--color-border: #b7e6ec;
--color-text: #0c3a3f;
--color-text-muted: #3f6c70;
--color-primary: #0fb5c4;
--color-accent: #3ddc84;
--color-glossy-hi: rgba(255, 255, 255, 0.85);
/* radius */
--radius-sm: 8px;
--radius-md: 16px;
--radius-lg: 28px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 8px rgba(15, 181, 196, 0.18);
--shadow-md: 0 8px 20px rgba(15, 181, 196, 0.20);
--shadow-lg: 0 16px 36px rgba(15, 181, 196, 0.22);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.9);
/* font */
--font-sans: 'Segoe UI', 'Frutiger', system-ui, sans-serif;
--font-display: 'Eurostile', 'Segoe UI', sans-serif;
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
--ease-standard: cubic-bezier(0.2, 0, 0, 1);
--ease-entrance: cubic-bezier(0, 0, 0, 1);
--ease-exit: cubic-bezier(0.3, 0, 1, 1);
/* extra: glossy aqua gradient sheen, signature of the utopian tech look */
--glossy-fill: linear-gradient(180deg, var(--color-glossy-hi) 0%, var(--color-surface) 45%, var(--color-surface-strong) 100%);
--aqua-gradient: linear-gradient(135deg, var(--color-primary), var(--color-accent));
}

/* ============================================================
Base component classes — Cyberprep
Signature move: a glossy top-lit gradient sheen (bright highlight
fading to aqua surface) repeated on nav, card, and primary btn.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--glossy-fill);
border-radius: var(--radius-pill); box-shadow: var(--shadow-sm), var(--shadow-inset-hi); }
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--glossy-fill); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi);
cursor: pointer; transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md), var(--shadow-inset-hi); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--aqua-gradient); color: #ffffff; border-color: transparent; }
.card {
background: var(--glossy-fill); border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface); border: 1px solid var(--color-border); box-shadow: var(--shadow-inset-hi);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(15, 181, 196, 0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--aqua-gradient); color: #ffffff; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/cyberprep.md */
```

## Design System Variables

```css
--bg: #eef9fb, --fg: #0c3a3f, --accent: #0fb5c4, --surface: #ffffff, --radius: 16px, --spacing: 16px, --font-display: 'Eurostile', 'Segoe UI', sans-serif, --font-body: 'Segoe UI', 'Frutiger', system-ui, sans-serif
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

[![Frutiger Aero](https://designmd.app/images/library/643.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Frutiger Aero](https://designmd.app/library/frutiger-aero)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)

Last synced: 8/30/2026
