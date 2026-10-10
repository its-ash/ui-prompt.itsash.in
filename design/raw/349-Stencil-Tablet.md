# Stencil & Tablet

- Source: <https://designmd.app/library/stencil-tablet>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:49.312Z

Arte & IlustracaoMid-Century Modern

# Stencil & Tablet

Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Bowlby One typography. warm bone and paper neutrals with a saturated earthy palette (sienna, magenta, o. Best for museum / cultural institution, art / architecture brand, longform research. AI-ready design system.

Stencil displayearth palettefield manualarchivaltactilemuseumheritagegraphic

Use case: museum / cultural institution, art / architecture brand, longform research, heritage / craft brand, manifesto

![Stencil & Tablet](https://designmd.app/images/library/452.png)

## Historical Context

Stencil lettering wasn't designed to be beautiful. It was designed to survive — stamped onto ammunition crates, cargo containers, and field equipment where legibility under duress mattered more than elegance. The broken letterforms exist because of physical bridges holding the stencil plate together, not because some typographer thought disconnected strokes looked cool. That constraint became an aesthetic. The earth palette follows the same logic. Olive drab, raw umber, sand — these aren't mood board choices, they're camouflage doctrine translated into communication design. Field manuals from the 1940s through Vietnam established a visual language where information hierarchy was life-or-death: bold stencil headers, tight mono body text, diagrams with zero decoration. Every element earned its place or got cut. What makes this system compelling today is that same ruthless economy. When you strip a design system down to stencil display type and terrain colors, you're borrowing from a tradition where visual noise could literally get someone killed. That discipline reads as authenticity.

## When to Use

Reach for this when the brand needs to feel like it's been through something. Outdoor gear that actually gets used in the field, not just photographed at a trailhead. Military-adjacent brands that respect the source material without cosplaying it. Field guides, survival manuals, expedition documentation — anything where the design should communicate competence over polish. It works when your audience distrusts slickness and respects utility. Avoid it for anything precious or aspirational; this system has dirt under its fingernails.

## Design Principles

- Function dictates form — every element must solve an information problem before it earns visual space
- Constraint as identity — embrace the broken letterforms and limited palette as features, not limitations
- Hierarchy through weight, not decoration — use scale and density shifts instead of color or ornament to direct attention
- Material honesty — design as if it will be printed on rough stock, stamped on metal, or read in bad light
- Earned roughness — distress and texture must feel systematic, never randomly applied for aesthetic effect

## DESIGN.md

```
---
version: "alpha"
name: "Stencil & Tablet"
description: "Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Bowlby One typography. warm bone and paper neutrals with a saturated earthy palette (sienna, magenta, o. Best for museum / cultural institution, art / architecture brand, longform research. AI-ready design system."
colors:
primary: "#E2DCC9"
secondary: "#0A0A0A"
tertiary: "#F4EFE0"
neutral: "#A06A3C"
surface: "#C73B7A"
accent: "#EE7A2E"
typography:
h1:
fontFamily: Stencil
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Stencil
fontSize: 1rem
fontWeight: 400
spacing:
sm: 1.5rem
md: 3.0rem
lg: 6.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Stencil & Tablet — Bone paper with stencil-cut headlines and a six-color earth palette: archaeology meets brand. Bowlby One typography. warm bone and paper neutrals with a saturated earthy palette (sienna, magenta, o. Best for museum / cultural institution, art / architecture brand, longform research. AI-ready design system. Stencil lettering wasn't designed to be beautiful. It was designed to survive — stamped onto ammunition crates, cargo containers, and field equipment where legibility under duress mattered more than elegance. The broken letterforms exist because of physical bridges holding the stencil plate together, not because some typographer thought disconnected strokes looked cool. That constraint became an aesthetic.

The earth palette follows the same logic. Olive drab, raw umber, sand — these aren't mood board choices, they're camouflage doctrine translated into communication design. Field manuals from the 1940s through Vietnam established a visual language where information hierarchy was life-or-death: bold stencil headers, tight mono body text, diagrams with zero decoration. Every element earned its place or got cut.

What makes this system compelling today is that same ruthless economy. When you strip a design system down to stencil display type and terrain colors, you're borrowing from a tradition where visual noise could literally get someone killed. That discipline reads as authenticity.

- Density: 5/10 — Balanced
- Variance: 6/10 — Dynamic
- Motion: 2/10 — Minimal

- **Style:** Archival, Field-Manual, Graphic, Earth-Tone
- **Keywords:** Stencil display, earth palette, field manual, archival, tactile, museum, heritage, graphic
- **Era:** Mid-Century Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Bone** (#E2DCC9) — Primary surface or dominant color
- **Ink** (#0A0A0A) — Accent highlight, links and focus states
- **Paper** (#F4EFE0) — Secondary accent
- **Sienna** (#A06A3C) — Accent color, emphasis elements
- **Magenta** (#C73B7A) — Extended palette, decorative use
- **Orange** (#EE7A2E) — Background alternate
- **Teal** (#2D7E73) — Muted text / borders
- **Blue** (#3F73B7) — Extended palette
- **Olive** (#6F7A2E) — Extended palette, decorative use

## Typography

- **Display / Hero:** Bowlby One — Weight 700, tight tracking, used for headline impact
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** JetBrains Mono — Used for code, metadata, and technical values

Scale:
- Hero: clamp(2.5rem, 5vw, 4rem)
- H1: 2.25rem
- H2: 1.5rem
- Body: 1rem / 1.6
- Small: 0.875rem

## Layout

- **Grid:** CSS Grid primary. Max-width containment: 1280px centered with 1.5rem side padding.
- **Spacing rhythm:** Balanced. Base unit: 0.5rem (8px).
- **Section vertical gaps:** clamp(4rem, 8vw, 8rem).
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

display font Bowlby One for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, stencil-cut display headlines, six-color earth palette, field-manual grid

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 0px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 0px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Bowlby One display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Mobile responsive layout (stack below 768px)

## Use Case

museum / cultural institution, art / architecture brand, longform research, heritage / craft brand, manifesto
```

[Download DESIGN.md](https://designmd.app/library/stencil-tablet/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Stencil', 'Anton', sans-serif; background: #F0E8D0; color: #3A2A18; --rust: #A04820; --ochre: #C08820; text-transform: uppercase; letter-spacing: 0.1em
```

### Variables

```
--bg: #F4EFE0, --fg: #0A0A0A, --accent: #0A0A0A, --font-display: 'Bowlby One', --font-body: 'Inter', --radius: 0px, --spacing: 1.5rem
```

### Checklist

☐ Bowlby One display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#E2DCC9

#0A0A0A

#F4EFE0

Secondary

#A06A3C

#C73B7A

#EE7A2E

#2D7E73

### Effects

display font Bowlby One for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, stencil-cut display headlines, six-color earth palette, field-manual grid

### Light/Dark

✓ Full / ✗ None

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Stencil & Tablet
- **Type:** Archival, Field-Manual, Graphic, Earth-Tone
- **Keywords:** Stencil display, earth palette, field manual, archival, tactile, museum, heritage, graphic
- **Era:** Mid-Century Modern
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Bone #E2DCC9, Ink #0A0A0A, Paper #F4EFE0
- **Secondary:** Sienna #A06A3C, Magenta #C73B7A, Orange #EE7A2E, Teal #2D7E73

## Visual Effects

display font Bowlby One for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, stencil-cut display headlines, six-color earth palette, field-manual grid

## AI Visual Direction

Design an archival field-manual layout. Use: bone paper (#F0E8D0), stencil-cut display font (Anton or Stencil), earth palette (rust #A04820, ochre #C08820, olive, terracotta), uppercase letter-spacing 0.1em, ruled grid lines. Feels like a museum exhibit guide.

## CSS Technical

```css
font-family: 'Stencil', 'Anton', sans-serif; background: #F0E8D0; color: #3A2A18; --rust: #A04820; --ochre: #C08820; text-transform: uppercase; letter-spacing: 0.1em
```

## Design System Variables

```css
--bg: #F4EFE0, --fg: #0A0A0A, --accent: #0A0A0A, --font-display: 'Bowlby One', --font-body: 'Inter', --radius: 0px, --spacing: 1.5rem
```

## Implementation Checklist

- ☐ Bowlby One display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Mobile responsive layout (stack below 768px)

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

[![Dark Mode (OLED)](https://designmd.app/images/library/7.png) Temas & Verticais ### Dark Mode (OLED)](https://designmd.app/library/dark-mode-oled)[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)[![Interactive Product Demo](https://designmd.app/images/library/25.png) Editorial & Tipografia ### Interactive Product Demo](https://designmd.app/library/interactive-product-demo)[![Comparative Analysis Dashboard](https://designmd.app/images/library/33.png) Dados & Infografico ### Comparative Analysis Dashboard](https://designmd.app/library/comparative-analysis-dashboard)[![Retro Travel Poster](https://designmd.app/images/library/80.png) Retro & Pop ### Retro Travel Poster](https://designmd.app/library/retro-travel-poster)

Last synced: 5/6/2026
