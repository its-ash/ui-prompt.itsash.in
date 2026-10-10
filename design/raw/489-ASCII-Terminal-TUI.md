# ASCII / Terminal / TUI

- Source: <https://designmd.app/library/ascii-terminal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:13:26.305Z

Claude Artisan · Textura, material & renderização1970s–present

# ASCII / Terminal / TUI

Reference for textura, material & renderização ASCII / Terminal / TUI. Text-only terminals; revived as retro/hacker aesthetic.

ASCII / Terminal / TUIterminal UITUIANSI artgreen screenMonospace text-only layouts, box-drawing charsGreen/amber phosphor on blackBlinking cursor, ASCII art, command-line framingUtilitarian, hacker, nostalgictexture

Use case: hero, superfície, conteúdo e grade responsiva; Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black

![ASCII / Terminal / TUI](https://designmd.app/images/library/579.png)

## Historical Context

Text-only terminals; revived as retro/hacker aesthetic. Example: Old DOS/Unix terminals; modern TUIs; hacker movie UIs..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "ASCII / Terminal / TUI"
description: "ASCII / Terminal / TUI visual system, translated from the Claude Artisan catalog for use in digital products. Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black"
colors:
primary: "#33ff66"
background: "#0a0e0a"
surface: "#0f150f"
text: "#33ff66"
accent: "#ffb000"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'IBM Plex Mono', monospace"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'IBM Plex Mono', 'Courier New', monospace"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "0px"
md: "0px"
lg: "0px"
spacing:
sm: "1ch"
md: "2ch"
lg: "4ch"
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.on-primary}"
rounded: "{rounded.md}"
padding: "2ch"
button-secondary:
backgroundColor: "{colors.accent}"
textColor: "{colors.on-accent}"
rounded: "{rounded.md}"
padding: "2ch"
card:
backgroundColor: "{colors.surface}"
textColor: "{colors.on-surface}"
rounded: "{rounded.lg}"
padding: "3ch"
page:
backgroundColor: "{colors.background}"
textColor: "{colors.text}"
padding: "2ch"
---
## Overview

ASCII / Terminal / TUI visual system, translated from the Claude Artisan catalog for use in digital products. Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black

- **Category:** texture
- **Era:** 1970s–present
- **Origin:** Text-only terminals; revived as retro/hacker aesthetic.
- **Reference:** Old DOS/Unix terminals; modern TUIs; hacker movie UIs.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Monospace text-only layouts, box-drawing chars
- Green/amber phosphor on black
- Blinking cursor, ASCII art, command-line framing
- Utilitarian, hacker, nostalgic

## Colors

- **bg** — #0a0e0a
- **surface** — #0f150f
- **text** — #33ff66
- **text-muted** — #1f9940
- **primary** — #33ff66
- **accent** — #ffb000
- **amber** — #ffb000
- **cursor** — #33ff66
- **dim** — #0a3d1a

## Typography

- Display: 'IBM Plex Mono', monospace
- Body: 'IBM Plex Mono', 'Courier New', monospace
- Mono: 'IBM Plex Mono', 'Courier New', monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Monospace text-only layouts, box-drawing chars; Green/amber phosphor on black; Blinking cursor, ASCII art, command-line framing; Utilitarian, hacker, nostalgic; sombras e elevação; transparência e blur

## Shapes

- Radius scale: 0px, 0px, 0px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/ascii-terminal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* ASCII / Terminal / TUI — design tokens (generated from style_catalog.json) */
/* 1970s–present | Text-only terminals; revived as retro/hacker aesthetic. */
:root {
/* color */
--color-bg: #0a0e0a;
--color-surface: #0f150f;
--color-text: #33ff66;
--color-text-muted: #1f9940;
--color-primary: #33ff66;
--color-accent: #ffb000;
--color-amber: #ffb000;
--color-cursor: #33ff66;
--color-dim: #0a3d1a;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-glow: 0 0 4px rgba(51,255,102,0.7);
/* font */
--font-sans: 'IBM Plex Mono', 'Courier New', monospace;
--font-display: 'IBM Plex Mono', monospace;
--font-mono: 'IBM Plex Mono', 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3rem;
/* space */
--space-1: 0.5ch;
--space-2: 1ch;
--space-3: 1.5ch;
--space-4: 2ch;
--space-6: 3ch;
--space-8: 4ch;
--space-12: 6ch;
--space-16: 8ch;
/* ease */
--ease-standard: steps(1, end);
/* extra (signature gradients, composite borders, filters) */
--scanline: repeating-linear-gradient(0deg, rgba(51,255,102,0.08) 0 1px, transparent 1px 2px);
--border: 1px solid #33ff66;
}

/* ============================================================
Base component classes — ASCII / Terminal / TUI (token-driven).
Signature move lives in references/00-flagship-implementation-specs/ascii-terminal.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-glow);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-glow); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ascii-terminal.md */
```

### Variables

```
--bg: #0a0e0a, --fg: #33ff66, --accent: #33ff66, --surface: #0f150f, --radius: 0px, --spacing: 2ch, --font-display: 'IBM Plex Mono', monospace, --font-body: 'IBM Plex Mono', 'Courier New', monospace
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0e0a

#0f150f

#33ff66

#1f9940

Secondary

#33ff66

#ffb000

#0a3d1a

### Effects

Monospace text-only layouts, box-drawing chars, Green/amber phosphor on black, Blinking cursor, ASCII art, command-line framing, Utilitarian, hacker, nostalgic, shadow, blur

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

- **Name:** ASCII / Terminal / TUI
- **Type:** claude-artisan/texture
- **Keywords:** ASCII / Terminal / TUI, terminal UI, TUI, ANSI art, green screen, Monospace text-only layouts, box-drawing chars, Green/amber phosphor on black, Blinking cursor, ASCII art, command-line framing, Utilitarian, hacker, nostalgic, texture
- **Era:** 1970s–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0e0a, surface: #0f150f, text: #33ff66, text-muted: #1f9940
- **Secondary:** primary: #33ff66, accent: #ffb000, amber: #ffb000, cursor: #33ff66, dim: #0a3d1a

## Visual Effects

Monospace text-only layouts, box-drawing chars, Green/amber phosphor on black, Blinking cursor, ASCII art, command-line framing, Utilitarian, hacker, nostalgic, shadow, blur

## AI Visual Direction

ASCII / Terminal / TUI, Monospace text-only layouts, box-drawing chars, Green/amber phosphor on black, Blinking cursor, ASCII art, command-line framing, Utilitarian, hacker, nostalgic, Old DOS/Unix terminals; modern TUIs; hacker movie UIs.

## CSS Technical

```css
/* ASCII / Terminal / TUI — design tokens (generated from style_catalog.json) */
/* 1970s–present | Text-only terminals; revived as retro/hacker aesthetic. */
:root {
/* color */
--color-bg: #0a0e0a;
--color-surface: #0f150f;
--color-text: #33ff66;
--color-text-muted: #1f9940;
--color-primary: #33ff66;
--color-accent: #ffb000;
--color-amber: #ffb000;
--color-cursor: #33ff66;
--color-dim: #0a3d1a;
/* radius */
--radius-sm: 0px;
--radius-md: 0px;
--radius-lg: 0px;
--radius-pill: 0px;
/* shadow */
--shadow-glow: 0 0 4px rgba(51,255,102,0.7);
/* font */
--font-sans: 'IBM Plex Mono', 'Courier New', monospace;
--font-display: 'IBM Plex Mono', monospace;
--font-mono: 'IBM Plex Mono', 'Courier New', monospace;
/* text */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 2rem;
--text-4xl: 2.5rem;
--text-5xl: 3rem;
/* space */
--space-1: 0.5ch;
--space-2: 1ch;
--space-3: 1.5ch;
--space-4: 2ch;
--space-6: 3ch;
--space-8: 4ch;
--space-12: 6ch;
--space-16: 8ch;
/* ease */
--ease-standard: steps(1, end);
/* extra (signature gradients, composite borders, filters) */
--scanline: repeating-linear-gradient(0deg, rgba(51,255,102,0.08) 0 1px, transparent 1px 2px);
--border: 1px solid #33ff66;
}

/* ============================================================
Base component classes — ASCII / Terminal / TUI (token-driven).
Signature move lives in references/00-flagship-implementation-specs/ascii-terminal.md;
these are accessible, token-wired starting points. */
body { margin: 0; background: var(--color-bg); color: var(--color-text); font-family: var(--font-sans); }
.card { background: var(--color-surface, var(--color-bg)); color: var(--color-text);
border-radius: var(--radius-md); box-shadow: var(--shadow-glow);
padding: var(--space-6, 24px); border: 2px solid var(--color-text); }
.nav { display: flex; gap: var(--space-4, 16px); align-items: center;
padding: var(--space-3, 12px) var(--space-6, 24px); background: var(--color-surface, var(--color-bg));
border-bottom: 2px solid var(--color-text); }
.btn { font: 700 var(--text-base, 1rem)/1 var(--font-display, var(--font-sans)); color: var(--color-text);
background: var(--color-surface, var(--color-bg)); border-radius: var(--radius-md);
padding: var(--space-3, 12px) var(--space-6, 24px); box-shadow: var(--shadow-glow); cursor: pointer; border: 2px solid var(--color-text);
transition: transform .12s var(--ease-standard, ease), box-shadow .12s var(--ease-standard, ease), filter .12s; }
.btn:hover { transform: translateY(-1px); filter: brightness(0.96); }
.btn:active { transform: translateY(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent, var(--color-primary)); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; }
.btn--primary { background: var(--color-primary); color: #111111; border-color: var(--color-text); }
.input { width: 100%; box-sizing: border-box; font: var(--text-base, 1rem) var(--font-sans); color: var(--color-text);
background: var(--color-surface, #fff); border-radius: var(--radius-sm);
padding: var(--space-3, 12px) var(--space-4, 16px); border: 2px solid var(--color-text); }
.input:focus { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.input::placeholder { color: var(--color-text-muted, currentColor); opacity: .7; }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs, .75rem) var(--font-sans);
color: #111111; background: var(--color-primary); border-radius: var(--radius-pill, 999px); padding: .3em .8em; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/ascii-terminal.md */
```

## Design System Variables

```css
--bg: #0a0e0a, --fg: #33ff66, --accent: #33ff66, --surface: #0f150f, --radius: 0px, --spacing: 2ch, --font-display: 'IBM Plex Mono', monospace, --font-body: 'IBM Plex Mono', 'Courier New', monospace
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

[![CRT / Scanline / Retro Monitor](https://designmd.app/images/library/606.png) Claude Artisan · Textura, material & renderização ### CRT / Scanline / Retro Monitor](https://designmd.app/library/crt)[![Cassette Futurism](https://designmd.app/images/library/113.png) Retro & Pop ### Cassette Futurism](https://designmd.app/library/cassette-futurism)[![Cyberpunk](https://designmd.app/images/library/612.png) Claude Artisan · Retrofuturismo & ficção especulativa ### Cyberpunk](https://designmd.app/library/cyberpunk)

Last synced: 8/30/2026
