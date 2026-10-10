# VHS / Analog Video

- Source: <https://designmd.app/library/vhs>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:20:44.310Z

Claude Artisan · Textura, material & renderizaçãoEvokes 1980s–90s

# VHS / Analog Video

Reference for textura, material & renderização VHS / Analog Video. Nostalgia for analog videotape artifacts.

VHS / Analog Videoretro videotracking linescamcorderTracking distortion, tape warble, timestamp overlayChromatic bleed, soft blur, grainDate/REC HUD, interlacingWarm nostalgic degradationtexture

Use case: hero, superfície, conteúdo e grade responsiva; Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain

![VHS / Analog Video](https://designmd.app/images/library/747.png)

## Historical Context

Nostalgia for analog videotape artifacts. Example: 80s home-video aesthetic; music videos; horror pastiche..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "VHS / Analog Video"
description: "VHS / Analog Video visual system, translated from the Claude Artisan catalog for use in digital products. Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain"
colors:
primary: "#ff3b5c"
background: "#0a0a0f"
surface: "#16161f"
text: "#f0ece0"
accent: "#2de2e6"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'VCR OSD Mono', 'Courier New', monospace"
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
sm: "2px"
md: "4px"
lg: "6px"
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

VHS / Analog Video visual system, translated from the Claude Artisan catalog for use in digital products. Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain

- **Category:** texture
- **Era:** Evokes 1980s–90s
- **Origin:** Nostalgia for analog videotape artifacts.
- **Reference:** 80s home-video aesthetic; music videos; horror pastiche.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Tracking distortion, tape warble, timestamp overlay
- Chromatic bleed, soft blur, grain
- Date/REC HUD, interlacing
- Warm nostalgic degradation

## Colors

- **bg** — #0a0a0f
- **surface** — #16161f
- **surface-strong** — #1e1e2a
- **border** — #3a3a4a
- **text** — #f0ece0
- **text-muted** — #a3a0ae
- **primary** — #ff3b5c
- **accent** — #2de2e6
- **tape-yellow** — #f5c518

## Typography

- Display: 'VCR OSD Mono', 'Courier New', monospace
- Body: 'Helvetica Neue', Arial, sans-serif
- Mono: 'VCR OSD Mono', 'Courier New', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Tracking distortion, tape warble, timestamp overlay; Chromatic bleed, soft blur, grain; Date/REC HUD, interlacing; Warm nostalgic degradation; sombras e elevação

## Shapes

- Radius scale: 2px, 4px, 6px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/vhs/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* VHS / Analog Video — design tokens (generated from style_catalog.json) */
/* Evokes 1980s–90s | Nostalgia for analog videotape artifacts. */
:root {
/* color */
--color-bg: #0a0a0f;
--color-surface: #16161f;
--color-surface-strong: #1e1e2a;
--color-border: #3a3a4a;
--color-text: #f0ece0;
--color-text-muted: #a3a0ae;
--color-primary: #ff3b5c;
--color-accent: #2de2e6;
--color-tape-yellow: #f5c518;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.5);
--shadow-md: 0 6px 18px rgba(0, 0, 0, 0.55);
--shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.6);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'VCR OSD Mono', 'Courier New', monospace;
--font-mono: 'VCR OSD Mono', 'Courier New', ui-monospace, monospace;
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
--ease-standard: steps(6, end);
/* extra: chromatic-aberration text bleed (cyan/magenta ghost offset) plus a
repeating scanline texture over every surface — the tracking-error look
of a dubbed VHS tape */
--chroma-shadow: -1.5px 0 var(--color-accent), 1.5px 0 var(--color-primary);
--scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px);
--tape-grain: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
}

/* ============================================================
Base component classes — VHS / Analog Video
Signature move: a repeating scanline overlay on every raised surface, plus
chromatic-aberration text bleed on headings/labels — cyan/magenta ghosting
like a mistracked tape. Repeats on nav, card, and heading text.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--tape-grain); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid var(--color-primary);
background-image: var(--scanlines); position: relative; }
.nav strong { font-family: var(--font-display); letter-spacing: .04em; text-shadow: var(--chroma-shadow); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), text-shadow .1s var(--ease-standard);
}
.btn:hover { transform: translateX(1px); text-shadow: var(--chroma-shadow); border-color: var(--color-accent); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; text-shadow: none; }
.btn--primary { background: var(--color-primary); color: #0a0a0f; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); border: 1px solid var(--color-border);
background-image: var(--scanlines); position: relative;
}
.card h3 { text-shadow: var(--chroma-shadow); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent) 35%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: #0a0a0f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vhs.md */
```

### Variables

```
--bg: #0a0a0f, --fg: #f0ece0, --accent: #ff3b5c, --surface: #16161f, --radius: 4px, --spacing: 16px, --font-display: 'VCR OSD Mono', 'Courier New', monospace, --font-body: 'Helvetica Neue', Arial, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0a0a0f

#16161f

#1e1e2a

#3a3a4a

Secondary

#f0ece0

#a3a0ae

#ff3b5c

#2de2e6

#f5c518

### Effects

Tracking distortion, tape warble, timestamp overlay, Chromatic bleed, soft blur, grain, Date/REC HUD, interlacing, Warm nostalgic degradation, shadow

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

- **Name:** VHS / Analog Video
- **Type:** claude-artisan/texture
- **Keywords:** VHS / Analog Video, retro video, tracking lines, camcorder, Tracking distortion, tape warble, timestamp overlay, Chromatic bleed, soft blur, grain, Date/REC HUD, interlacing, Warm nostalgic degradation, texture
- **Era:** Evokes 1980s–90s
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0a0a0f, surface: #16161f, surface-strong: #1e1e2a, border: #3a3a4a
- **Secondary:** text: #f0ece0, text-muted: #a3a0ae, primary: #ff3b5c, accent: #2de2e6, tape-yellow: #f5c518

## Visual Effects

Tracking distortion, tape warble, timestamp overlay, Chromatic bleed, soft blur, grain, Date/REC HUD, interlacing, Warm nostalgic degradation, shadow

## AI Visual Direction

VHS / Analog Video, Tracking distortion, tape warble, timestamp overlay, Chromatic bleed, soft blur, grain, Date/REC HUD, interlacing, Warm nostalgic degradation, 80s home-video aesthetic; music videos; horror pastiche.

## CSS Technical

```css
/* VHS / Analog Video — design tokens (generated from style_catalog.json) */
/* Evokes 1980s–90s | Nostalgia for analog videotape artifacts. */
:root {
/* color */
--color-bg: #0a0a0f;
--color-surface: #16161f;
--color-surface-strong: #1e1e2a;
--color-border: #3a3a4a;
--color-text: #f0ece0;
--color-text-muted: #a3a0ae;
--color-primary: #ff3b5c;
--color-accent: #2de2e6;
--color-tape-yellow: #f5c518;
/* radius */
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 6px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.5);
--shadow-md: 0 6px 18px rgba(0, 0, 0, 0.55);
--shadow-lg: 0 12px 32px rgba(0, 0, 0, 0.6);
/* font */
--font-sans: 'Helvetica Neue', Arial, sans-serif;
--font-display: 'VCR OSD Mono', 'Courier New', monospace;
--font-mono: 'VCR OSD Mono', 'Courier New', ui-monospace, monospace;
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
--ease-standard: steps(6, end);
/* extra: chromatic-aberration text bleed (cyan/magenta ghost offset) plus a
repeating scanline texture over every surface — the tracking-error look
of a dubbed VHS tape */
--chroma-shadow: -1.5px 0 var(--color-accent), 1.5px 0 var(--color-primary);
--scanlines: repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px);
--tape-grain: radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.06), transparent 70%);
}

/* ============================================================
Base component classes — VHS / Analog Video
Signature move: a repeating scanline overlay on every raised surface, plus
chromatic-aberration text bleed on headings/labels — cyan/magenta ghosting
like a mistracked tape. Repeats on nav, card, and heading text.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--color-bg) var(--tape-grain); }
.nav { display: flex; gap: var(--space-4); align-items: center; padding: var(--space-3) var(--space-6);
background: var(--color-surface); border-bottom: 2px solid var(--color-primary);
background-image: var(--scanlines); position: relative; }
.nav strong { font-family: var(--font-display); letter-spacing: .04em; text-shadow: var(--chroma-shadow); }
.btn {
font: 600 var(--text-base)/1 var(--font-display); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: transform .1s var(--ease-standard), text-shadow .1s var(--ease-standard);
}
.btn:hover { transform: translateX(1px); text-shadow: var(--chroma-shadow); border-color: var(--color-accent); }
.btn:active { transform: translateX(0); }
.btn:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; transform: none; text-shadow: none; }
.btn--primary { background: var(--color-primary); color: #0a0a0f; border-color: var(--color-primary); }
.card {
background: var(--color-surface); border-radius: var(--radius-md);
box-shadow: var(--shadow-md); padding: var(--space-6); border: 1px solid var(--color-border);
background-image: var(--scanlines); position: relative;
}
.card h3 { text-shadow: var(--chroma-shadow); }
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-mono);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-sm);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-accent);
box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-accent) 35%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font: 700 var(--text-xs) var(--font-display);
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-primary); color: #0a0a0f; }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover, .btn:active { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/vhs.md */
```

## Design System Variables

```css
--bg: #0a0a0f, --fg: #f0ece0, --accent: #ff3b5c, --surface: #16161f, --radius: 4px, --spacing: 16px, --font-display: 'VCR OSD Mono', 'Courier New', monospace, --font-body: 'Helvetica Neue', Arial, sans-serif
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

[![CRT / Scanline / Retro Monitor](https://designmd.app/images/library/606.png) Claude Artisan · Textura, material & renderização ### CRT / Scanline / Retro Monitor](https://designmd.app/library/crt)[![Glitch Art](https://designmd.app/images/library/646.png) Claude Artisan · Textura, material & renderização ### Glitch Art](https://designmd.app/library/glitch-art)

Last synced: 8/30/2026
