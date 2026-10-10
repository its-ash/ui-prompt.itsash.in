# macOS Vibrancy / Translucency

- Source: <https://designmd.app/library/macos-vibrancy>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:35.313Z

Claude Artisan · Vidro & transparência2014–present

# macOS Vibrancy / Translucency

Reference for vidro & transparência macOS Vibrancy / Translucency. Apple OS X Yosemite (2014).

macOS Vibrancy / TranslucencyvibrancyNSVisualEffectViewSidebar/toolbar materials that sample and blur the desktopVibrant text/icons that adapt to backdropSubtle luminance blendingSystem-level material tiers (menu, sidebar, HUD)glass

Use case: superfície material com conteúdo em camadas; Sidebar/toolbar materials that sample and blur the desktop; Vibrant text/icons that adapt to backdrop

![macOS Vibrancy / Translucency](https://designmd.app/images/library/675.png)

## Historical Context

Apple OS X Yosemite (2014). Example: macOS Finder sidebar; Notification Center..

## Source & Provenance

Imported from [ara-mkr/claude-artisan](https://github.com/ara-mkr/claude-artisan) · MIT · commit `ae6d3ad` · 2026-08-30

## DESIGN.md

```
---
version: "alpha"
name: "macOS Vibrancy / Translucency"
description: "macOS Vibrancy / Translucency visual system, translated from the Claude Artisan catalog for use in digital products. Sidebar/toolbar materials that sample and blur the desktop; Vibrant text/icons that adapt to backdrop"
colors:
primary: "#007aff"
background: "#dfe6ee"
surface: "#dfe6ee"
text: "#1d1d1f"
accent: "#ff9f0a"
on-primary: "#000000"
on-surface: "#000000"
on-accent: "#000000"
typography:
h1:
fontFamily: "-apple-system, 'SF Pro Display', system-ui, sans-serif"
fontSize: "4rem"
fontWeight: "700"
lineHeight: "1.05"
body-md:
fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "1rem"
fontWeight: "400"
lineHeight: "1.6"
label-caps:
fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif"
fontSize: "0.75rem"
fontWeight: "600"
letterSpacing: "0.06em"
rounded:
sm: "8px"
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

macOS Vibrancy / Translucency visual system, translated from the Claude Artisan catalog for use in digital products. Sidebar/toolbar materials that sample and blur the desktop; Vibrant text/icons that adapt to backdrop

- **Category:** glass
- **Era:** 2014–present
- **Origin:** Apple OS X Yosemite (2014).
- **Reference:** macOS Finder sidebar; Notification Center.
- **Structural base:** superfície material com conteúdo em camadas

**Defining traits:**
- Sidebar/toolbar materials that sample and blur the desktop
- Vibrant text/icons that adapt to backdrop
- Subtle luminance blending
- System-level material tiers (menu, sidebar, HUD)

## Colors

- **bg** — #dfe6ee
- **surface** — rgba(255,255,255,0.55)
- **surface-strong** — rgba(255,255,255,0.78)
- **border** — rgba(0,0,0,0.08)
- **text** — #1d1d1f
- **text-muted** — rgba(29,29,31,0.6)
- **primary** — #007aff
- **accent** — #ff9f0a
- **scrim** — rgba(255,255,255,0.4)

## Typography

- Display: -apple-system, 'SF Pro Display', system-ui, sans-serif
- Body: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif
- Mono: 'SF Mono', ui-monospace, monospace

## Layout

- superfície material com conteúdo em camadas
- Use a responsive grid and preserve content hierarchy.
- Collapse columns below 768px without horizontal overflow.

## Elevation & Depth

- Sidebar/toolbar materials that sample and blur the desktop; Vibrant text/icons that adapt to backdrop; Subtle luminance blending; System-level material tiers (menu, sidebar, HUD); sombras e elevação; transparência e blur

## Shapes

- Radius scale: 8px, 10px, 14px.

## Components

- Buttons keep visible focus and predictable hover/pressed states.
- Cards use the surface and radius scale from the tokens.
- Forms expose persistent labels, textual errors, and keyboard focus.

## Do's and Don'ts

- Do: follow the tokens and the structural composition.
- Do: maintain WCAG AA contrast and `prefers-reduced-motion`.
- Avoid: using the style as decoration without functional hierarchy.
```

[Download DESIGN.md](https://designmd.app/library/macos-vibrancy/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
/* macOS Vibrancy / Translucency — design tokens */
/* 2014–present | Apple OS X Yosemite (2014), condensed */
:root {
/* color */
--color-bg: #dfe6ee;
--color-surface: rgba(255,255,255,0.55);
--color-surface-strong: rgba(255,255,255,0.78);
--color-border: rgba(0,0,0,0.08);
--color-text: #1d1d1f;
--color-text-muted: rgba(29,29,31,0.6);
--color-primary: #007aff;
--color-accent: #ff9f0a;
--color-scrim: rgba(255,255,255,0.4);
/* radius */
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 8px 24px rgba(0,0,0,0.10);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.14);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.6);
/* blur */
--blur-backdrop: 20px;
--blur-backdrop-strong: 30px;
/* font */
--font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif;
--font-display: -apple-system, 'SF Pro Display', system-ui, sans-serif;
--font-mono: 'SF Mono', ui-monospace, monospace;
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
/* extra: blur + saturate "vibrancy" material, sampling a soft wallpaper, is the signature move */
--bg-image: linear-gradient(160deg, #a7c6f2 0%, #dfe6ee 45%, #f3d9c4 100%);
--vibrancy: blur(var(--blur-backdrop)) saturate(1.8);
}

/* ============================================================
Base component classes — macOS vibrancy / translucency
Signature move: a light, neutral material that blurs AND saturates
(not just blurs) whatever sits behind it, with a crisp hairline border
and inner top highlight — repeated on nav (sidebar-like), card, and
input so every surface feels like a system material, not a color skin.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
-webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
-webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.card { background: var(--color-surface); -webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: rgba(255,255,255,0.4); -webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .btn, .card, .input { background: #f2f5f9; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .btn, .card, .input { background: #f2f5f9; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/macos-vibrancy.md */
```

### Variables

```
--bg: #dfe6ee, --fg: #1d1d1f, --accent: #007aff, --surface: #dfe6ee, --radius: 10px, --spacing: 16px, --font-display: -apple-system, 'SF Pro Display', system-ui, sans-serif, --font-body: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif
```

### Checklist

Contraste WCAG AA; foco visível; navegação por teclado; estados hover/pressed; responsividade; prefers-reduced-motion; Tailwind v4 via @theme.

## Colors

Primary

#dfe6ee

Secondary

#1d1d1f

#007aff

#ff9f0a

### Effects

Sidebar/toolbar materials that sample and blur the desktop, Vibrant text/icons that adapt to backdrop, Subtle luminance blending, System-level material tiers (menu, sidebar, HUD), shadow, blur

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

- **Name:** macOS Vibrancy / Translucency
- **Type:** claude-artisan/glass
- **Keywords:** macOS Vibrancy / Translucency, vibrancy, NSVisualEffectView, Sidebar/toolbar materials that sample and blur the desktop, Vibrant text/icons that adapt to backdrop, Subtle luminance blending, System-level material tiers (menu, sidebar, HUD), glass
- **Era:** 2014–present
- **Light/Dark:** Fonte não declara modos; validar em light e dark antes de publicar

## Color Palette

- **Primary:** bg: #dfe6ee, surface: rgba(255,255,255,0.55), surface-strong: rgba(255,255,255,0.78), border: rgba(0,0,0,0.08)
- **Secondary:** text: #1d1d1f, text-muted: rgba(29,29,31,0.6), primary: #007aff, accent: #ff9f0a, scrim: rgba(255,255,255,0.4)

## Visual Effects

Sidebar/toolbar materials that sample and blur the desktop, Vibrant text/icons that adapt to backdrop, Subtle luminance blending, System-level material tiers (menu, sidebar, HUD), shadow, blur

## AI Visual Direction

macOS Vibrancy / Translucency, Sidebar/toolbar materials that sample and blur the desktop, Vibrant text/icons that adapt to backdrop, Subtle luminance blending, System-level material tiers (menu, sidebar, HUD), macOS Finder sidebar; Notification Center.

## CSS Technical

```css
/* macOS Vibrancy / Translucency — design tokens */
/* 2014–present | Apple OS X Yosemite (2014), condensed */
:root {
/* color */
--color-bg: #dfe6ee;
--color-surface: rgba(255,255,255,0.55);
--color-surface-strong: rgba(255,255,255,0.78);
--color-border: rgba(0,0,0,0.08);
--color-text: #1d1d1f;
--color-text-muted: rgba(29,29,31,0.6);
--color-primary: #007aff;
--color-accent: #ff9f0a;
--color-scrim: rgba(255,255,255,0.4);
/* radius */
--radius-sm: 8px;
--radius-md: 10px;
--radius-lg: 14px;
--radius-pill: 999px;
/* shadow */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
--shadow-md: 0 8px 24px rgba(0,0,0,0.10);
--shadow-lg: 0 20px 48px rgba(0,0,0,0.14);
--shadow-inset-hi: inset 0 1px 0 rgba(255,255,255,0.6);
/* blur */
--blur-backdrop: 20px;
--blur-backdrop-strong: 30px;
/* font */
--font-sans: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif;
--font-display: -apple-system, 'SF Pro Display', system-ui, sans-serif;
--font-mono: 'SF Mono', ui-monospace, monospace;
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
/* extra: blur + saturate "vibrancy" material, sampling a soft wallpaper, is the signature move */
--bg-image: linear-gradient(160deg, #a7c6f2 0%, #dfe6ee 45%, #f3d9c4 100%);
--vibrancy: blur(var(--blur-backdrop)) saturate(1.8);
}

/* ============================================================
Base component classes — macOS vibrancy / translucency
Signature move: a light, neutral material that blurs AND saturates
(not just blurs) whatever sits behind it, with a crisp hairline border
and inner top highlight — repeated on nav (sidebar-like), card, and
input so every surface feels like a system material, not a color skin.
============================================================ */
body { margin: 0; color: var(--color-text); font-family: var(--font-sans);
background: var(--bg-image); background-attachment: fixed; min-height: 100vh; }
.nav { display: flex; gap: var(--space-4); align-items: center;
padding: var(--space-3) var(--space-6); background: var(--color-surface);
-webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-sm), var(--shadow-inset-hi); }
.btn { font: 500 var(--text-base)/1 var(--font-sans); color: var(--color-primary);
padding: var(--space-3) var(--space-6); border-radius: var(--radius-md);
background: var(--color-surface-strong); border: 1px solid var(--color-border);
-webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
box-shadow: var(--shadow-sm); cursor: pointer;
transition: background .15s var(--ease-standard), box-shadow .15s var(--ease-standard); }
.btn:hover { box-shadow: var(--shadow-md); }
.btn:active { box-shadow: var(--shadow-sm); }
.btn:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
.btn[disabled] { opacity: .5; cursor: not-allowed; }
.btn--primary { background: var(--color-primary); color: #ffffff; border-color: transparent; }
.card { background: var(--color-surface); -webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); border-radius: var(--radius-lg);
box-shadow: var(--shadow-md), var(--shadow-inset-hi); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--color-text); font: var(--text-base) var(--font-sans);
padding: var(--space-3) var(--space-4); border-radius: var(--radius-md);
background: rgba(255,255,255,0.4); -webkit-backdrop-filter: var(--vibrancy); backdrop-filter: var(--vibrancy);
border: 1px solid var(--color-border); }
.input::placeholder { color: var(--color-text-muted); }
.input:focus { outline: none; border-color: var(--color-primary);
box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 25%, transparent); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs); font-weight: 600;
padding: .3em .8em; border-radius: var(--radius-pill); background: var(--color-surface-strong);
color: var(--color-accent); border: 1px solid var(--color-border); }
@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
.nav, .btn, .card, .input { background: #f2f5f9; }
}
@media (prefers-reduced-transparency: reduce) {
.nav, .btn, .card, .input { background: #f2f5f9; backdrop-filter: none; -webkit-backdrop-filter: none; }
}
@media (prefers-reduced-motion: reduce) { .btn { transition: none; } }

/* Especificação de referência: references/00-flagship-implementation-specs/macos-vibrancy.md */
```

## Design System Variables

```css
--bg: #dfe6ee, --fg: #1d1d1f, --accent: #007aff, --surface: #dfe6ee, --radius: 10px, --spacing: 16px, --font-display: -apple-system, 'SF Pro Display', system-ui, sans-serif, --font-body: -apple-system, 'SF Pro Text', 'Helvetica Neue', system-ui, sans-serif
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

[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Liquid Glass](https://designmd.app/images/library/14.png) Flat & Soft UI ### Liquid Glass](https://designmd.app/library/liquid-glass)

Last synced: 8/30/2026
