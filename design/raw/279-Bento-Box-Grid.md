# Bento Box Grid

- Source: <https://designmd.app/library/bento-box-grid>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:00.273Z

Flat & Soft UI2020s Apple

# Bento Box Grid

Bento Box grid layout. Ideal for landing pages, saas. AI-ready template.

Modular cardsasymmetric gridvaried sizesApple-styledashboard tilesnegative spaceclean hierarchycards

Use case: Landing pages, SaaS

![Bento Box Grid](https://designmd.app/images/library/39.png)

## Historical Context

Apple didn't invent the grid. But they made it sexy. WWDC 2020 rolls around and suddenly every slide deck is this gorgeous arrangement of rounded rectangles — different sizes, different weights, all breathing together. The Japanese bento box metaphor clicked instantly: compartments of varying proportion, each holding something distinct, the whole greater than its parts. It wasn't a new idea in layout theory, but Apple's execution — that specific combination of generous radius, flat color, and asymmetric sizing — turned it into a visual language overnight. Within months, every SaaS feature page looked like this. Linear did it. Raycast did it. Vercel did it. The bento grid became the default way to say "we have multiple features and they're all polished." It replaced the tired three-column icon grid that dominated the 2010s. Whether that's progress or just a new monoculture depends on your tolerance for trends — but the layout works because it creates visual hierarchy without requiring the viewer to read a single word.

## When to Use

Reach for bento when you have 4-8 features that aren't equal in importance. The varied card sizes let you editorialize — make the hero feature a double-wide, tuck secondary stuff into smaller cells. It's perfect for product marketing pages, feature announcements, and anything where you need to communicate breadth without overwhelming. Skip it for content that's genuinely uniform (pricing tiers, team members) — forced asymmetry on equal items just looks arbitrary.

## Design Principles

- Size encodes hierarchy — the biggest card carries the most weight, no exceptions. Don't make something large just to fill space.
- Consistent gap, inconsistent proportion. The gutter stays fixed; the cards breathe at different scales. This is what separates bento from chaos.
- Generous corner radius is load-bearing. Go too sharp and it reads as a data table. The softness signals editorial intent.
- Each cell is self-contained. A bento card should communicate its point without requiring context from neighbors — the grid is browsable in any order.
- Restrain the palette per card. One illustration, one stat, one short headline. The grid already creates complexity; individual cells need to stay dead simple.

## DESIGN.md

```
---
version: "alpha"
name: "Bento Box Grid"
description: "Bento Box grid layout. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#F5F5F5"
typography:
h1:
fontFamily: System UI stack
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: System UI stack
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: System UI stack
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 24px
md: 48px
lg: 72px
spacing:
sm: 16.0px
md: 32.0px
lg: 64.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Bento Box grid layout. Ideal for landing pages, saas. AI-ready template. Apple didn't invent the grid. But they made it sexy.

WWDC 2020 rolls around and suddenly every slide deck is this gorgeous arrangement of rounded rectangles — different sizes, different weights, all breathing together. The Japanese bento box metaphor clicked instantly: compartments of varying proportion, each holding something distinct, the whole greater than its parts. It wasn't a new idea in layout theory, but Apple's execution — that specific combination of generous radius, flat color, and asymmetric sizing — turned it into a visual language overnight.

Within months, every SaaS feature page looked like this. Linear did it. Raycast did it. Vercel did it. The bento grid became the default way to say "we have multiple features and they're all polished." It replaced the tired three-column icon grid that dominated the 2010s. Whether that's progress or just a new monoculture depends on your tolerance for trends — but the layout works because it creates visual hierarchy without requiring the viewer to read a single word.

- Density: 8/10 — Dense
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Modular, Grid, Organized, Apple-Inspired
- **Keywords:** Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards
- **Era:** 2020s Apple
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **#FFFFFF** (#FFFFFF) — Primary surface or dominant color
- **#F5F5F5** (#F5F5F5) — Secondary surface or text color

## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 24px. See rounded tokens in front matter for the full scale.

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

- Do Grid responsive (4→2→1 cols)
- Do Card spans varied
- Do Rounded corners consistent
- Do Shadows subtle
- Do Content fits cards
- Do Hover scale (1.02)

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/bento-box-grid/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: 200px, gap: 16px, border-radius: 24px, background: #FFFFFF, box-shadow: 0 4px 6px rgba(0,0,0,0.05)
```

### Variables

```
--grid-gap: 16px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: 0 4px 6px rgba(0,0,0,0.05), --hover-scale: 1.02
```

### Checklist

☐ Grid responsive (4→2→1 cols), ☐ Card spans varied, ☐ Rounded corners consistent, ☐ Shadows subtle, ☐ Content fits cards, ☐ Hover scale (1.02)

## Colors

Primary

#FFFFFF

#F5F5F5

### Effects

grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions

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

- **Name:** Bento Box Grid
- **Type:** Modular, Grid, Organized, Apple-Inspired
- **Keywords:** Modular cards, asymmetric grid, varied sizes, Apple-style, dashboard tiles, negative space, clean hierarchy, cards
- **Era:** 2020s Apple
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Neutral base + brand accent, #FFFFFF, #F5F5F5, brand primary
- **Secondary:** Subtle gradients, shadow variations, accent highlights for interactive cards

## Visual Effects

grid-template with varied spans, rounded-xl (16px), subtle shadows, hover scale (1.02), smooth transitions

## AI Visual Direction

Design a Bento Box grid layout. Use: modular cards with varied sizes (1x1, 2x1, 2x2), Apple-style aesthetic, rounded corners (16-24px), soft shadows, clean hierarchy, asymmetric grid, neutral backgrounds (#F5F5F7), hover effects.

## CSS Technical

```css
display: grid, grid-template-columns: repeat(4, 1fr), grid-auto-rows: 200px, gap: 16px, border-radius: 24px, background: #FFFFFF, box-shadow: 0 4px 6px rgba(0,0,0,0.05)
```

## Design System Variables

```css
--grid-gap: 16px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: 0 4px 6px rgba(0,0,0,0.05), --hover-scale: 1.02
```

## Implementation Checklist

- ☐ Grid responsive (4→2→1 cols)
- ☐ Card spans varied
- ☐ Rounded corners consistent
- ☐ Shadows subtle
- ☐ Content fits cards
- ☐ Hover scale (1.02)

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

[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Editorial Grid / Magazine](https://designmd.app/images/library/66.png) Editorial & Tipografia ### Editorial Grid / Magazine](https://designmd.app/library/editorial-grid-magazine)[![Bento Grids](https://designmd.app/images/library/53.png) Flat & Soft UI ### Bento Grids](https://designmd.app/library/bento-grids)[![Dimensional Layering](https://designmd.app/images/library/46.png) Futurista & Tech ### Dimensional Layering](https://designmd.app/library/dimensional-layering)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
