# Acubi

- Source: <https://designmd.app/library/acubi>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:03.310Z

Claude Artisan · Subculturas & estéticas de nicho2022–present

# Acubi

Reference for subculturas & estéticas de nicho Acubi. Korean-origin sleek minimal-Y2K fashion aesthetic.

AcubiY2K minimalcyber-y2k fashionCool-toned grey, silver, black, whiteMinimal cyber-Y2K, low-rise sleekMetallic + muted, clean linesEdgy, futuristic, understatedniche

Use case: superfície material com conteúdo em camadas; Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek

![Acubi](https://designmd.app/images/library/565.png)

## Historical Context

Korean-origin sleek minimal-Y2K fashion aesthetic. Example: Acubi TikTok/Korean fashion..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Acubi"
description: "Acubi visual system, translated from the Claude Artisan catalog for use in digital products. Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek"
colors:
primary: "#c7ccd4"
background: "#121316"
surface: "#1c1e22"
text: "#f2f3f5"
accent: "#7dd3fc"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Helvetica Neue', 'Pretendard', sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Helvetica Neue', 'Pretendard', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Helvetica Neue', 'Pretendard', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "2px"
md: "4px"
lg: "8px"
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

Acubi visual system, translated from the Claude Artisan catalog for use in digital products. Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek

- **Category:** niche
- **Era:** 2022–present
- **Origin:** Korean-origin sleek minimal-Y2K fashion aesthetic.
- **Reference:** Acubi TikTok/Korean fashion.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Cool-toned grey, silver, black, white
- Minimal cyber-Y2K, low-rise sleek
- Metallic + muted, clean lines
- Edgy, futuristic, understated

## Colors

- **bg** — #121316
- **surface** — #1c1e22
- **surface-strong** — #26282d
- **border** — #35383f
- **text** — #f2f3f5
- **text-muted** — #a7abb3
- **primary** — #c7ccd4
- **accent** — #7dd3fc

## Typography

- Display: 'Helvetica Neue', 'Pretendard', sans-serif
- Body: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif
- Mono: 'IBM Plex Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Cool-toned grey, silver, black, white; Minimal cyber-Y2K, low-rise sleek; Metallic + muted, clean lines; Edgy, futuristic, understated; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 8px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/acubi/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Acubi — design tokens */
/* 2022–present | Korean-origin sleek minimal-Y2K fashion aesthetic, condensed */
:root {
/* color */
--color-bg: #121316;
--color-surface: #1c1e22;
--color-surface-strong: #26282d;
--color-border: #35383f;
--color-text: #f2f3f5;
--color-text-muted: #a7abb3;
--color-primary: #c7ccd4;
--color-accent: #7dd3fc;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
--shadow-md: 0 6px 20px rgba(0,0,0,0.5);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif;
--font-display: 'Helvetica Neue', 'Pretendard', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.85rem;
--text-base: 0.95rem;
--text-lg: 1.1rem;
--text-xl: 1.3rem;
--text-2xl: 1.7rem;
--text-3xl: 2.2rem;
--text-4xl: 2.9rem;
--text-5xl: 3.8rem;
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
/* extra: brushed-metal gradient border, hairline grid */
--metal-gradient: linear-gradient(135deg, #7d828c 0%, #dde1e6 22%, #6b6f78 48%, #c7ccd4 74%, #7d828c 100%);
--hairline: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Acubi
Signature move: a thin brushed-metal gradient hairline edge —
understated, cool-toned, cyber-Y2K minimal — repeated as the
single 1px border/underline on nav, card, and btn instead of
any heavier chrome. Clean lines, low-rise restraint.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; letter-spacing: 0.01em; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid transparent; border-image: var(--metal-gradient) 1;
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--hairline);
cursor: pointer; transition: border-color .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { border-image: var(--metal-gradient) 1; }
.btn:active { transform: scale(0.99); }
.btn:focus-visible { outline: 1px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--metal-gradient); color: #121316; border: none; font-weight: 600; }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); border-top: 1px solid transparent; border-image: var(--metal-gradient) 1;
box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 1px var(--color-accent); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: 0.04em; text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong); border: var(--hairline);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/acubi.md */
```

### Variables

```
--bg: #121316, --fg: #f2f3f5, --accent: #c7ccd4, --surface: #1c1e22, --radius: 4px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Pretendard', sans-serif, --font-body: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#121316

#1c1e22

#26282d

#35383f

Secondary

#f2f3f5

#a7abb3

#c7ccd4

#7dd3fc

### Effects

Cool-toned grey, silver, black, white, Minimal cyber-Y2K, low-rise sleek, Metallic + muted, clean lines, Edgy, futuristic, understated, shadow

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

- **Name:** Acubi
- **Type:** claude-artisan/niche
- **Keywords:** Acubi, Y2K minimal, cyber-y2k fashion, Cool-toned grey, silver, black, white, Minimal cyber-Y2K, low-rise sleek, Metallic + muted, clean lines, Edgy, futuristic, understated, niche
- **Era:** 2022–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #121316, surface: #1c1e22, surface-strong: #26282d, border: #35383f
- **Secondary:** text: #f2f3f5, text-muted: #a7abb3, primary: #c7ccd4, accent: #7dd3fc

## Visual Effects

Cool-toned grey, silver, black, white, Minimal cyber-Y2K, low-rise sleek, Metallic + muted, clean lines, Edgy, futuristic, understated, shadow

## AI Visual Direction

Acubi, Cool-toned grey, silver, black, white, Minimal cyber-Y2K, low-rise sleek, Metallic + muted, clean lines, Edgy, futuristic, understated, Acubi TikTok/Korean fashion.

## CSS Technical

```css
/* Acubi — design tokens */
/* 2022–present | Korean-origin sleek minimal-Y2K fashion aesthetic, condensed */
:root {
/* color */
--color-bg: #121316;
--color-surface: #1c1e22;
--color-surface-strong: #26282d;
--color-border: #35383f;
--color-text: #f2f3f5;
--color-text-muted: #a7abb3;
--color-primary: #c7ccd4;
--color-accent: #7dd3fc;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.4);
--shadow-md: 0 6px 20px rgba(0,0,0,0.5);
--shadow-lg: 0 16px 40px rgba(0,0,0,0.55);
/* font */
--font-sans: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif;
--font-display: 'Helvetica Neue', 'Pretendard', sans-serif;
--font-mono: 'IBM Plex Mono', ui-monospace, monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.85rem;
--text-base: 0.95rem;
--text-lg: 1.1rem;
--text-xl: 1.3rem;
--text-2xl: 1.7rem;
--text-3xl: 2.2rem;
--text-4xl: 2.9rem;
--text-5xl: 3.8rem;
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
/* extra: brushed-metal gradient border, hairline grid */
--metal-gradient: linear-gradient(135deg, #7d828c 0%, #dde1e6 22%, #6b6f78 48%, #c7ccd4 74%, #7d828c 100%);
--hairline: 1px solid var(--color-border);
}

/* ============================================================
Base component classes — Acubi
Signature move: a thin brushed-metal gradient hairline edge —
understated, cool-toned, cyber-Y2K minimal — repeated as the
single 1px border/underline on nav, card, and btn instead of
any heavier chrome. Clean lines, low-rise restraint.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg); min-height: 100vh; letter-spacing: 0.01em; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
border-bottom: 1px solid transparent; border-image: var(--metal-gradient) 1;
}
.btn {
font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--hairline);
cursor: pointer; transition: border-color .15s var(--ease-standard), transform .15s var(--ease-standard);
}
.btn:hover { border-image: var(--metal-gradient) 1; }
.btn:active { transform: scale(0.99); }
.btn:focus-visible { outline: 1px solid var(--color-accent); outline-offset: 3px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--metal-gradient); color: #121316; border: none; font-weight: 600; }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
padding: var(--space-6); border-top: 1px solid transparent; border-image: var(--metal-gradient) 1;
box-shadow: var(--shadow-md);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: var(--hairline);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 1px var(--color-accent); }
.badge {
display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); letter-spacing: 0.04em; text-transform: uppercase;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong); border: var(--hairline);
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/acubi.md */
```

## Design System Variables

```css
--bg: #121316, --fg: #f2f3f5, --accent: #c7ccd4, --surface: #1c1e22, --radius: 4px, --spacing: 16px, --font-display: 'Helvetica Neue', 'Pretendard', sans-serif, --font-body: 'Helvetica Neue', 'Pretendard', system-ui, sans-serif
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

[![Y2K Futurism](https://designmd.app/images/library/758.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Y2K Futurism](https://designmd.app/library/y2k-futurism)[![Chromecore](https://designmd.app/images/library/597.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Chromecore](https://designmd.app/library/chromecore)[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)

Last synced: 8/30/2026
