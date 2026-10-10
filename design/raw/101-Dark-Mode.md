# Dark Mode

- Source: <https://designmd.app/library/dark-mode>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:16:56.265Z

Claude Artisan · Minimal, maximal & orgânico2018–present

# Dark Mode

Reference for minimal, maximal & orgânico Dark Mode. Mainstreamed by iOS/Android/macOS dark themes (2018–2019).

Dark Modedark themenight modeDark neutral backgrounds (#0d0d12-ish, not pure black)Desaturated accent colors to avoid vibrationElevation via lighter surfaces, not shadowReduced eye strain, OLED-friendlyminimal-organic

Use case: hero, superfície, conteúdo e grade responsiva; Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration

![Dark Mode](https://designmd.app/images/library/618.png)

## Historical Context

Mainstreamed by iOS/Android/macOS dark themes (2018–2019). Example: System dark modes; Linear; developer tools..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "Dark Mode"
description: "Dark Mode visual system, translated from the Claude Artisan catalog for use in digital products. Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration"
colors:
primary: "#7c9cff"
background: "#0c0c10"
surface: "#16161c"
text: "#e8e8ec"
accent: "#7fd9c4"
on-primary: "#000000"
on-surface: "#FFFFFF"
on-accent: "#000000"
typography:
h1:
fontFamily: "'Inter', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "4px"
md: "8px"
lg: "16px"
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

Dark Mode visual system, translated from the Claude Artisan catalog for use in digital products. Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration

- **Category:** minimal-organic
- **Era:** 2018–present
- **Origin:** Mainstreamed by iOS/Android/macOS dark themes (2018–2019).
- **Reference:** System dark modes; Linear; developer tools.
- **Structural base:** hero, superfície, conteúdo e grade responsiva

**Defining traits:**
- Dark neutral backgrounds (#0d0d12-ish, not pure black)
- Desaturated accent colors to avoid vibration
- Elevation via lighter surfaces, not shadow
- Reduced eye strain, OLED-friendly

## Colors

- **bg** — #0c0c10
- **surface** — #16161c
- **surface-strong** — #1e1e26
- **border** — rgba(255,255,255,0.09)
- **text** — #e8e8ec
- **text-muted** — #9a9aa5
- **primary** — #7c9cff
- **accent** — #7fd9c4

## Typography

- Display: 'Inter', system-ui, sans-serif
- Body: 'Inter', -apple-system, system-ui, sans-serif
- Mono: 'JetBrains Mono', ui-monospace, monospace

## Layout

- hero, superfície, conteúdo e grade responsiva
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Dark neutral backgrounds (#0d0d12-ish, not pure black); Desaturated accent colors to avoid vibration; Elevation via lighter surfaces, not shadow; Reduced eye strain, OLED-friendly

## Shapes

- Radius scale: 0 1px 2px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.45), 0 12px 28px rgba(0,0,0,0.5).

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/dark-mode/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* Dark Mode — design tokens */
/* 2018–present | Mainstreamed by iOS/Android/macOS dark themes (2018–2019), condensed */
:root {
/* color: near-black neutrals (never pure #000), desaturated accents so
nothing vibrates against the dark field */
--color-bg: #0c0c10;
--color-surface: #16161c;
--color-surface-strong: #1e1e26;
--color-border: rgba(255,255,255,0.09);
--color-text: #e8e8ec;
--color-text-muted: #9a9aa5;
--color-primary: #7c9cff;
--color-accent: #7fd9c4;
/* radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: intentionally minimal — elevation comes from surface tint,
not cast shadow, per the OLED elevation system below */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 4px 10px rgba(0,0,0,0.45);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Inter', -apple-system, system-ui, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a refined OLED-black elevation system — each level is a flat
white-tint overlay (not a shadow), stacking from level 0 (bg) up to
level 3, so raised surfaces get lighter, never "shadowed" */
--elevation-0: var(--color-bg);
--elevation-1: var(--color-surface);
--elevation-2: var(--color-surface-strong);
--elevation-3: #26262f;
}

/* ============================================================
Base component classes — Dark Mode
Signature move: elevation via lighter surface tint, not drop shadow.
Each raised layer (nav, card, input) steps up one --elevation-* level
instead of gaining a cast shadow, and desaturated accent colors keep
the field from vibrating against the near-black background.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--elevation-0); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--elevation-1);
border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--elevation-2); border: 1px solid var(--color-border);
cursor: pointer; transition: background .18s var(--ease-standard), transform .18s var(--ease-standard);
}
.btn:hover { background: var(--elevation-3); transform: translateY(-1px); }
.btn:active { transform: translateY(0); background: var(--elevation-2); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 28%, var(--elevation-2)); border-color: color-mix(in srgb, var(--color-primary) 50%, transparent); }
.card {
background: var(--elevation-1); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--elevation-2); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--elevation-3);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dark-mode.md */
```

### Variables

```
--bg: #0c0c10, --fg: #e8e8ec, --accent: #7c9cff, --surface: #16161c, --radius: 0 4px 10px rgba(0,0,0,0.45), --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', -apple-system, system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#0c0c10

#16161c

#1e1e26

Secondary

#e8e8ec

#9a9aa5

#7c9cff

#7fd9c4

### Effects

Dark neutral backgrounds (#0d0d12-ish, not pure black), Desaturated accent colors to avoid vibration, Elevation via lighter surfaces, not shadow, Reduced eye strain, OLED-friendly

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

- **Name:** Dark Mode
- **Type:** claude-artisan/minimal-organic
- **Keywords:** Dark Mode, dark theme, night mode, Dark neutral backgrounds (#0d0d12-ish, not pure black), Desaturated accent colors to avoid vibration, Elevation via lighter surfaces, not shadow, Reduced eye strain, OLED-friendly, minimal-organic
- **Era:** 2018–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #0c0c10, surface: #16161c, surface-strong: #1e1e26, border: rgba(255,255,255,0.09)
- **Secondary:** text: #e8e8ec, text-muted: #9a9aa5, primary: #7c9cff, accent: #7fd9c4

## Visual Effects

Dark neutral backgrounds (#0d0d12-ish, not pure black), Desaturated accent colors to avoid vibration, Elevation via lighter surfaces, not shadow, Reduced eye strain, OLED-friendly

## AI Visual Direction

Dark Mode, Dark neutral backgrounds (#0d0d12-ish, not pure black), Desaturated accent colors to avoid vibration, Elevation via lighter surfaces, not shadow, Reduced eye strain, OLED-friendly, System dark modes; Linear; developer tools.

## CSS Technical

```css
/* Dark Mode — design tokens */
/* 2018–present | Mainstreamed by iOS/Android/macOS dark themes (2018–2019), condensed */
:root {
/* color: near-black neutrals (never pure #000), desaturated accents so
nothing vibrates against the dark field */
--color-bg: #0c0c10;
--color-surface: #16161c;
--color-surface-strong: #1e1e26;
--color-border: rgba(255,255,255,0.09);
--color-text: #e8e8ec;
--color-text-muted: #9a9aa5;
--color-primary: #7c9cff;
--color-accent: #7fd9c4;
/* radius */
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-pill: 999px;
/* shadow: intentionally minimal — elevation comes from surface tint,
not cast shadow, per the OLED elevation system below */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.4);
--shadow-md: 0 4px 10px rgba(0,0,0,0.45);
--shadow-lg: 0 12px 28px rgba(0,0,0,0.5);
/* font */
--font-sans: 'Inter', -apple-system, system-ui, sans-serif;
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
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
/* extra: a refined OLED-black elevation system — each level is a flat
white-tint overlay (not a shadow), stacking from level 0 (bg) up to
level 3, so raised surfaces get lighter, never "shadowed" */
--elevation-0: var(--color-bg);
--elevation-1: var(--color-surface);
--elevation-2: var(--color-surface-strong);
--elevation-3: #26262f;
}

/* ============================================================
Base component classes — Dark Mode
Signature move: elevation via lighter surface tint, not drop shadow.
Each raised layer (nav, card, input) steps up one --elevation-* level
instead of gaining a cast shadow, and desaturated accent colors keep
the field from vibrating against the near-black background.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans); background: var(--elevation-0); min-height: 100vh; }
.nav {
display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--elevation-1);
border-bottom: 1px solid var(--color-border);
}
.btn {
font: 600 var(--text-base)/1 var(--font-sans); color: var(--color-text);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-pill);
background: var(--elevation-2); border: 1px solid var(--color-border);
cursor: pointer; transition: background .18s var(--ease-standard), transform .18s var(--ease-standard);
}
.btn:hover { background: var(--elevation-3); transform: translateY(-1px); }
.btn:active { transform: translateY(0); background: var(--elevation-2); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .45; cursor: not-allowed; transform: none; }
.btn--primary { background: color-mix(in srgb, var(--color-primary) 28%, var(--elevation-2)); border-color: color-mix(in srgb, var(--color-primary) 50%, transparent); }
.card {
background: var(--elevation-1); color: var(--color-text);
border-radius: var(--radius-lg); padding: var(--space-6);
border: 1px solid var(--color-border); box-shadow: var(--shadow-sm);
}
.input {
width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: var(--elevation-2); border: 1px solid var(--color-border);
}
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--elevation-3);
color: var(--color-accent); border: 1px solid var(--color-border); }
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } .btn:hover { transform: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/dark-mode.md */
```

## Design System Variables

```css
--bg: #0c0c10, --fg: #e8e8ec, --accent: #7c9cff, --surface: #16161c, --radius: 0 4px 10px rgba(0,0,0,0.45), --spacing: 16px, --font-display: 'Inter', system-ui, sans-serif, --font-body: 'Inter', -apple-system, system-ui, sans-serif
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

[![Minimalism](https://designmd.app/images/library/684.png) Claude Artisan · Minimal, maximal & orgânico ### Minimalism](https://designmd.app/library/minimalism)[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)

Last synced: 8/30/2026
