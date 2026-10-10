# Tiki / Tropical

- Source: <https://designmd.app/library/tiki-tropical>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:34.301Z

Claude Artisan · Subculturas & estéticas de nicho1930s–1960s revival

# Tiki / Tropical

Reference for subculturas & estéticas de nicho Tiki / Tropical. Mid-century Polynesian pop fantasy.

Tiki / Tropicaltropicalexoticatiki barBamboo, palms, hibiscus, tiki masksSunset oranges, teal, wood tonesExotica lounge vibeEscapist, kitschy, warmniche

Use case: superfície material com conteúdo em camadas; Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones

![Tiki / Tropical](https://designmd.app/images/library/741.png)

## Historical Context

Mid-century Polynesian pop fantasy. Example: Tiki bars; Trader Vic's; exotica album covers..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Tiki / Tropical"
description: "Tiki / Tropical visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones"
colors:
primary: "#e0631f"
background: "#f2d9a8"
surface: "#f8e6c4"
text: "#2e1a0f"
accent: "#1f7a6c"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#FFFFFF"
typography:
h1:
fontFamily: "'Bungee', 'Baloo 2', cursive"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Poppins', 'Futura', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Poppins', 'Futura', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "6px"
md: "12px"
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

Tiki / Tropical visual system, translated from the Claude Artisan catalog for use in digital products. Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones

- **Category:** niche
- **Era:** 1930s–1960s revival
- **Origin:** Mid-century Polynesian pop fantasy.
- **Reference:** Tiki bars; Trader Vic's; exotica album covers.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Bamboo, palms, hibiscus, tiki masks
- Sunset oranges, teal, wood tones
- Exotica lounge vibe
- Escapist, kitschy, warm

## Colors

- **bg** — #f2d9a8
- **surface** — #f8e6c4
- **surface-strong** — #eccb92
- **border** — #a9631f
- **text** — #2e1a0f
- **text-muted** — #6b4526
- **primary** — #e0631f
- **accent** — #1f7a6c
- **hibiscus** — #d92b52

## Typography

- Display: 'Bungee', 'Baloo 2', cursive
- Body: 'Poppins', 'Futura', system-ui, sans-serif
- Mono: ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Bamboo, palms, hibiscus, tiki masks; Sunset oranges, teal, wood tones; Exotica lounge vibe; Escapist, kitschy, warm; sombras e elevação

## Shapes

- Radius scale: 6px, 12px, 20px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/tiki-tropical/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Tiki / Tropical — design tokens */
/* 1930s–1960s revival | Mid-century Polynesian pop fantasy, condensed */
:root {
/* color */
--color-bg: #f2d9a8;
--color-surface: #f8e6c4;
--color-surface-strong: #eccb92;
--color-border: #a9631f;
--color-text: #2e1a0f;
--color-text-muted: #6b4526;
--color-primary: #e0631f;
--color-accent: #1f7a6c;
--color-hibiscus: #d92b52;
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(46,26,15,0.18);
--shadow-md: 0 6px 18px rgba(46,26,15,0.24);
--shadow-lg: 0 14px 36px rgba(46,26,15,0.30);
/* font */
--font-sans: 'Poppins', 'Futura', system-ui, sans-serif;
--font-display: 'Bungee', 'Baloo 2', cursive;
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
/* extra: bamboo-stripe border — repeating vertical wood-tone stripes standing
in for lashed bamboo poles, plus a sunset gradient for hero surfaces */
--bamboo-stripe: repeating-linear-gradient(90deg, #a9631f 0 6px, #7a4515 6px 8px, #c17a30 8px 14px);
--sunset-fade: linear-gradient(180deg, #e0631f 0%, #d92b52 60%, #7a1f4a 100%);
}

/* ============================================================
Base component classes — tiki-tropical
Signature move: a bamboo-stripe border band (repeating wood-tone lashings)
runs along the top of every raised surface — nav, card, and primary button —
like bamboo trim on a lounge bar.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-top: 6px solid; border-image: var(--bamboo-stripe) 1;
box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px) rotate(-0.5deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff3df; border-color: #a9421a; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
border-top: 8px solid; border-image: var(--bamboo-stripe) 1;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(224,99,31,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-hibiscus);
color: #fff3df; font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/tiki-tropical.md */
```

### Variables

```
--bg: #f2d9a8, --fg: #2e1a0f, --accent: #e0631f, --surface: #f8e6c4, --radius: 12px, --spacing: 16px, --font-display: 'Bungee', 'Baloo 2', cursive, --font-body: 'Poppins', 'Futura', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#f2d9a8

#f8e6c4

#eccb92

#a9631f

Secondary

#2e1a0f

#6b4526

#e0631f

#1f7a6c

#d92b52

### Effects

Bamboo, palms, hibiscus, tiki masks, Sunset oranges, teal, wood tones, Exotica lounge vibe, Escapist, kitschy, warm, shadow

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

- **Name:** Tiki / Tropical
- **Type:** claude-artisan/niche
- **Keywords:** Tiki / Tropical, tropical, exotica, tiki bar, Bamboo, palms, hibiscus, tiki masks, Sunset oranges, teal, wood tones, Exotica lounge vibe, Escapist, kitschy, warm, niche
- **Era:** 1930s–1960s revival
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #f2d9a8, surface: #f8e6c4, surface-strong: #eccb92, border: #a9631f
- **Secondary:** text: #2e1a0f, text-muted: #6b4526, primary: #e0631f, accent: #1f7a6c, hibiscus: #d92b52

## Visual Effects

Bamboo, palms, hibiscus, tiki masks, Sunset oranges, teal, wood tones, Exotica lounge vibe, Escapist, kitschy, warm, shadow

## AI Visual Direction

Tiki / Tropical, Bamboo, palms, hibiscus, tiki masks, Sunset oranges, teal, wood tones, Exotica lounge vibe, Escapist, kitschy, warm, Tiki bars; Trader Vic's; exotica album covers.

## CSS Technical

```css
/* Tiki / Tropical — design tokens */
/* 1930s–1960s revival | Mid-century Polynesian pop fantasy, condensed */
:root {
/* color */
--color-bg: #f2d9a8;
--color-surface: #f8e6c4;
--color-surface-strong: #eccb92;
--color-border: #a9631f;
--color-text: #2e1a0f;
--color-text-muted: #6b4526;
--color-primary: #e0631f;
--color-accent: #1f7a6c;
--color-hibiscus: #d92b52;
/* radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(46,26,15,0.18);
--shadow-md: 0 6px 18px rgba(46,26,15,0.24);
--shadow-lg: 0 14px 36px rgba(46,26,15,0.30);
/* font */
--font-sans: 'Poppins', 'Futura', system-ui, sans-serif;
--font-display: 'Bungee', 'Baloo 2', cursive;
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
/* extra: bamboo-stripe border — repeating vertical wood-tone stripes standing
in for lashed bamboo poles, plus a sunset gradient for hero surfaces */
--bamboo-stripe: repeating-linear-gradient(90deg, #a9631f 0 6px, #7a4515 6px 8px, #c17a30 8px 14px);
--sunset-fade: linear-gradient(180deg, #e0631f 0%, #d92b52 60%, #7a1f4a 100%);
}

/* ============================================================
Base component classes — tiki-tropical
Signature move: a bamboo-stripe border band (repeating wood-tone lashings)
runs along the top of every raised surface — nav, card, and primary button —
like bamboo trim on a lounge bar.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-top: 6px solid; border-image: var(--bamboo-stripe) 1;
box-shadow: var(--shadow-sm); }
.btn {
font: 700 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--color-surface); border: 2px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .2s var(--ease-standard), box-shadow .2s var(--ease-standard);
}
.btn:hover { transform: translateY(-1px) rotate(-0.5deg); box-shadow: var(--shadow-md); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #fff3df; border-color: #a9421a; }
.card {
background: var(--color-surface); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md); padding: var(--space-6);
border-top: 8px solid; border-image: var(--bamboo-stripe) 1;
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 2px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px rgba(224,99,31,0.3); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
padding: .3em .9em; border-radius: var(--radius-pill); background: var(--color-hibiscus);
color: #fff3df; font-weight: 700; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/tiki-tropical.md */
```

## Design System Variables

```css
--bg: #f2d9a8, --fg: #2e1a0f, --accent: #e0631f, --surface: #f8e6c4, --radius: 12px, --spacing: 16px, --font-display: 'Bungee', 'Baloo 2', cursive, --font-body: 'Poppins', 'Futura', system-ui, sans-serif
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

[![Mid-Century Modern](https://designmd.app/images/library/327.png) Retro & Pop ### Mid-Century Modern](https://designmd.app/library/mid-century-modern)[![Googie](https://designmd.app/images/library/648.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Googie](https://designmd.app/library/googie)

Last synced: 8/30/2026
