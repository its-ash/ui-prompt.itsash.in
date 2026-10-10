# Bento Grid

- Source: <https://designmd.app/library/bento-grid>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:52.301Z

Editorial & Tipografia2020s Apple Design Language

# Bento Grid

Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Ideal for ui/ux, dashboards, portfólios, web design limpo, branding de produtos apple. AI-ready template.

Bento gridbento boxmodularorganizedcompartmentsApple-stylecleandedicated spacesdashboardtidy

Use case: UI/UX, Dashboards, Portfolios, Clean web design, Apple-style product branding

![Bento Grid](https://designmd.app/images/library/316.png)

## Historical Context

The bento grid didn't emerge from some design system committee. It came from Japanese lunch boxes — compartmentalized, purposeful, every section earning its space. Apple's marketing pages around 2020-2022 made the pattern unavoidable: asymmetric cards of varying heights and widths, each one a self-contained story. Suddenly every SaaS landing page wanted that same energy. What makes bento work where traditional grids feel rigid is the deliberate breaking of uniformity. A 2×2 card sits next to a 1×1. A tall vertical piece anchors the left while three small squares stack on the right. The asymmetry isn't random — it's editorial hierarchy expressed through spatial proportion. The bigger the card, the bigger the idea. The pattern matured quickly. Early implementations were just CSS Grid with span tricks. The good ones today treat each cell as a micro-composition — its own typographic hierarchy, its own breathing room, its own moment. The grid is the scaffolding, not the design.

## When to Use

Bento grids shine when you have 4-8 features of unequal importance and need to communicate hierarchy without numbering things. Perfect for product marketing pages where one hero feature deserves twice the visual weight. Use them for SaaS feature overviews, product showcases, and any layout where you'd otherwise resort to a boring alternating left-right section pattern. Skip them for content that's genuinely equal in weight — that's what uniform grids are for.

## Design Principles

- Size encodes importance — the largest cell carries the primary message, never waste a 2×2 on secondary content
- Each cell is a self-contained composition with its own internal typographic hierarchy, padding, and focal point
- Maintain consistent gap values across the entire grid; the whitespace between cells is what makes the pattern read as unified rather than chaotic
- Limit your grid to 2-3 distinct cell sizes maximum — too many proportions destroy the rhythm and make the layout feel accidental rather than designed
- Content density must vary with cell size: large cells get breathing room and illustration, small cells get tight copy and an icon at most

## DESIGN.md

```
---
version: "alpha"
name: "Bento Grid"
description: "Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Ideal for ui/ux, dashboards, portfólios, web design limpo, branding de produtos apple. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#F5F5F7"
tertiary: "#1D1D1F"
neutral: "#0071E3"
surface: "#E8E8ED"
accent: "#86868B"
typography:
h1:
fontFamily: SF Pro
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: SF Pro
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: SF Pro
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 20px
md: 40px
lg: 60px
spacing:
sm: 16.0px
md: 32.0px
lg: 64.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Ideal for ui/ux, dashboards, portfólios, web design limpo, branding de produtos apple. AI-ready template. The bento grid didn't emerge from some design system committee. It came from Japanese lunch boxes — compartmentalized, purposeful, every section earning its space. Apple's marketing pages around 2020-2022 made the pattern unavoidable: asymmetric cards of varying heights and widths, each one a self-contained story. Suddenly every SaaS landing page wanted that same energy.

What makes bento work where traditional grids feel rigid is the deliberate breaking of uniformity. A 2×2 card sits next to a 1×1. A tall vertical piece anchors the left while three small squares stack on the right. The asymmetry isn't random — it's editorial hierarchy expressed through spatial proportion. The bigger the card, the bigger the idea.

The pattern matured quickly. Early implementations were just CSS Grid with span tricks. The good ones today treat each cell as a micro-composition — its own typographic hierarchy, its own breathing room, its own moment. The grid is the scaffolding, not the design.

- Density: 8/10 — Dense
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Modular, Organized, Compartmentalized, Apple-Inspired
- **Keywords:** Bento grid, bento box, modular, organized, compartments, Apple-style, clean, dedicated spaces, dashboard, tidy
- **Era:** 2020s Apple Design Language
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Light Grey** (#F5F5F7) — Secondary text, borders, muted elements
- **Dark Grey** (#1D1D1F) — Dark surface, primary background
- **Accent Blue** (#0071E3) — Primary accent, CTAs and interactive elements
- **Soft Grey** (#E8E8ED) — Secondary text, borders, muted elements
- **Medium Grey** (#86868B) — Secondary text, borders, muted elements
- **Black** (#000000) — Deep contrast surface
- **Accent Green** (#34C759) — Primary accent, CTAs and interactive elements

## Typography

- **Display / Hero:** SF Pro — Weight 700, tight tracking, used for headline impact
- **Body:** SF Pro — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** SF Pro — 0.875rem, weight 500, slight letter-spacing
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

CSS grid with varying span sizes (1x1, 2x1, 1x2, 2x2), uniform gap (12-16px), subtle rounded corners (16-20px), very soft shadows (0 2px 8px rgba(0,0,0,0.04)), smooth hover lift (translateY -2px), clean compartment borders

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 20px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Generously rounded (1.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Generously rounded (1.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do CSS grid with varying span sizes
- Do Uniform gap spacing (16px)
- Do Rounded corners (16-20px)
- Do Very soft shadows
- Do Each compartment with dedicated content
- Do Clean Apple-inspired aesthetic
- Do Responsive: 4→2→1 columns on breakpoints

## Use Case

UI/UX, Dashboards, Portfolios, Clean web design, Apple-style product branding
```

[Download DESIGN.md](https://designmd.app/library/bento-grid/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: minmax(200px, auto), gap: 16px, background: #F5F5F7, color: #1D1D1F, border-radius: 20px, box-shadow: 0 2px 8px rgba(0,0,0,0.04), padding: 24px per compartment, transition: transform 200ms
```

### Variables

```
--color-white: #FFFFFF, --color-light-grey: #F5F5F7, --color-dark: #1D1D1F, --color-accent: #0071E3, --font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro', --border-radius: 20px, --gap: 16px, --shadow: 0 2px 8px rgba(0,0,0,0.04), --padding: 24px
```

### Checklist

☐ CSS grid with varying span sizes, ☐ Uniform gap spacing (16px), ☐ Rounded corners (16-20px), ☐ Very soft shadows, ☐ Each compartment with dedicated content, ☐ Clean Apple-inspired aesthetic, ☐ Responsive: 4→2→1 columns on breakpoints

## Colors

Primary

#FFFFFF

#F5F5F7

#1D1D1F

#0071E3

Secondary

#E8E8ED

#86868B

#000000

#34C759

### Effects

CSS grid with varying span sizes (1x1, 2x1, 1x2, 2x2), uniform gap (12-16px), subtle rounded corners (16-20px), very soft shadows (0 2px 8px rgba(0,0,0,0.04)), smooth hover lift (translateY -2px), clean compartment borders

### Light/Dark

✓ Full / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Bento Grid
- **Type:** Modular, Organized, Compartmentalized, Apple-Inspired
- **Keywords:** Bento grid, bento box, modular, organized, compartments, Apple-style, clean, dedicated spaces, dashboard, tidy
- **Era:** 2020s Apple Design Language
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Pure White #FFFFFF, Light Grey #F5F5F7, Dark Grey #1D1D1F, Accent Blue #0071E3
- **Secondary:** Soft Grey #E8E8ED, Medium Grey #86868B, Black #000000, Accent Green #34C759

## Visual Effects

CSS grid with varying span sizes (1x1, 2x1, 1x2, 2x2), uniform gap (12-16px), subtle rounded corners (16-20px), very soft shadows (0 2px 8px rgba(0,0,0,0.04)), smooth hover lift (translateY -2px), clean compartment borders

## AI Visual Direction

Design a Bento Grid landing page inspired by Japanese bento boxes and Apple's design language. Use CSS grid with varying compartment sizes (1x1, 2x1, 1x2, 2x2 spans). White, light grey, dark grey with single accent blue. Each compartment has dedicated content with generous padding. Rounded corners (16-20px), very soft shadows, clean borders. Organized, modular, tidy aesthetic.

## CSS Technical

```css
display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: minmax(200px, auto), gap: 16px, background: #F5F5F7, color: #1D1D1F, border-radius: 20px, box-shadow: 0 2px 8px rgba(0,0,0,0.04), padding: 24px per compartment, transition: transform 200ms
```

## Design System Variables

```css
--color-white: #FFFFFF, --color-light-grey: #F5F5F7, --color-dark: #1D1D1F, --color-accent: #0071E3, --font-primary: -apple-system, BlinkMacSystemFont, 'SF Pro', --border-radius: 20px, --gap: 16px, --shadow: 0 2px 8px rgba(0,0,0,0.04), --padding: 24px
```

## Implementation Checklist

- ☐ CSS grid with varying span sizes
- ☐ Uniform gap spacing (16px)
- ☐ Rounded corners (16-20px)
- ☐ Very soft shadows
- ☐ Each compartment with dedicated content
- ☐ Clean Apple-inspired aesthetic
- ☐ Responsive: 4→2→1 columns on breakpoints

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

[![3x3 Grid Design](https://designmd.app/images/library/308.png) Editorial & Tipografia ### 3x3 Grid Design](https://designmd.app/library/3x3-grid-design)[![Japandi](https://designmd.app/images/library/298.png) Minimalismo & Swiss ### Japandi](https://designmd.app/library/japandi)[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)[![Bento Grid](https://designmd.app/images/library/316.png) Editorial & Tipografia ### Bento Grid](https://designmd.app/library/bento-grid)[![Utilitarian](https://designmd.app/images/library/326.png) Minimalismo & Swiss ### Utilitarian](https://designmd.app/library/utilitarian)

Last synced: 4/1/2026
