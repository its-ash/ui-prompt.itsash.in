# Bento Grids

- Source: <https://designmd.app/library/bento-grids>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:12:02.312Z

Flat & Soft UI2020s Apple/Linear

# Bento Grids

Bento Grid layout. Ideal for landing pages, saas. AI-ready template.

Apple-stylemodularcardsorganizedcleanhierarchygridroundedsoft

Use case: Landing pages, SaaS

![Bento Grids](https://designmd.app/images/library/53.png)

## Historical Context

Apple didn't invent the bento grid. They just made everyone notice it. But the version that ate SaaS whole — the one you see on every startup's feature page now — that came from Linear and Vercel circa 2023. Where Apple's bento was theatrical (big keynote energy, hero moments surrounded by supporting tiles), the Linear interpretation was quieter. Flatter. Cards with generous padding, subtle borders or no borders at all, content that breathed. Vercel's marketing pages took it further: asymmetric columns, mixed aspect ratios, the occasional full-bleed tile breaking the rhythm. By mid-2024, bento was no longer a layout choice — it was the layout. Every SaaS marketing page defaulted to it. The pattern worked because it solved a real problem: how do you present twelve features without a twelve-item bullet list? You give each one a card, vary the sizes to imply hierarchy, and let the grid do the storytelling. The risk now is sameness. When every product page looks like a Linear clone, the grid stops communicating and starts blending. The best implementations in 2025-2026 push back — mixing media types, breaking alignment intentionally, using motion to reintroduce surprise.

## When to Use

When you need to present multiple features, capabilities, or product highlights without forcing a linear reading order. Bento grids shine on marketing pages where hierarchy matters but isn't strictly sequential — where a visitor should be able to scan, pick what interests them, and dive in. They work best when you have 4-12 items of varying importance. Fewer than four and you don't need a grid. More than twelve and you need a different information architecture entirely.

## Design Principles

- Size encodes importance — larger tiles get seen first, use them for your strongest story
- Consistent internal padding across all cards, even when card dimensions vary wildly
- Flat surfaces with minimal elevation — one shadow level maximum, prefer border or background differentiation
- Asymmetry with intent — break the grid where it serves hierarchy, not for decoration
- Breathing room between tiles matters more than the content inside them — generous gaps prevent visual fatigue

## DESIGN.md

```
---
version: "alpha"
name: "Bento Grids"
description: "Bento Grid layout. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#F5F5F7"
secondary: "#FFFFFF"
tertiary: "#1D1D1F"
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
sm: 20px
md: 40px
lg: 60px
spacing:
sm: 20.0px
md: 40.0px
lg: 80.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Bento Grid layout. Ideal for landing pages, saas. AI-ready template. Apple didn't invent the bento grid. They just made everyone notice it. But the version that ate SaaS whole — the one you see on every startup's feature page now — that came from Linear and Vercel circa 2023. Where Apple's bento was theatrical (big keynote energy, hero moments surrounded by supporting tiles), the Linear interpretation was quieter. Flatter. Cards with generous padding, subtle borders or no borders at all, content that breathed. Vercel's marketing pages took it further: asymmetric columns, mixed aspect ratios, the occasional full-bleed tile breaking the rhythm.

By mid-2024, bento was no longer a layout choice — it was the layout. Every SaaS marketing page defaulted to it. The pattern worked because it solved a real problem: how do you present twelve features without a twelve-item bullet list? You give each one a card, vary the sizes to imply hierarchy, and let the grid do the storytelling.

The risk now is sameness. When every product page looks like a Linear clone, the grid stops communicating and starts blending. The best implementations in 2025-2026 push back — mixing media types, breaking alignment intentionally, using motion to reintroduce surprise.

- Density: 3/10 — Airy
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Modular, Grid, Clean, Organized
- **Keywords:** Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft
- **Era:** 2020s Apple/Linear
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Off-white** (#F5F5F7) — Light surface, card backgrounds
- **Clean White** (#FFFFFF) — Light surface, card backgrounds
- **Text** (#1D1D1F) — Primary text color

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
- **Hero layout:** Split-screen (text left, visual right).
- **Feature sections:** Zig-zag alternating text+image rows. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal

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

- Do Grid layout (CSS Grid)
- Do Rounded corners 16-24px
- Do Varied card spans
- Do Content fits card size
- Do Responsive re-flow
- Do Apple-like aesthetic

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/bento-grids/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
display: grid, grid-template-columns: repeat(auto-fit, minmax(...)), gap: 1rem, border-radius: 20px, background: #FFF, box-shadow: subtle
```

### Variables

```
--grid-gap: 20px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: soft
```

### Checklist

☐ Grid layout (CSS Grid), ☐ Rounded corners 16-24px, ☐ Varied card spans, ☐ Content fits card size, ☐ Responsive re-flow, ☐ Apple-like aesthetic

## Colors

Primary

#F5F5F7

#FFFFFF

#1D1D1F

### Effects

Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal

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

- **Name:** Bento Grids
- **Type:** Modular, Grid, Clean, Organized
- **Keywords:** Apple-style, modular, cards, organized, clean, hierarchy, grid, rounded, soft
- **Era:** 2020s Apple/Linear
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Off-white #F5F5F7, Clean White #FFFFFF, Text #1D1D1F
- **Secondary:** Subtle accents, soft shadows, blurred backdrops

## Visual Effects

Hover scale (1.02), soft shadow expansion, smooth layout shifts, content reveal

## AI Visual Direction

Design a Bento Grid layout. Use: modular grid system, rounded corners (16-24px), different card sizes (1x1, 2x1, 2x2), card-based hierarchy, soft backgrounds (#F5F5F7), subtle borders, content-first, Apple-style aesthetic.

## CSS Technical

```css
display: grid, grid-template-columns: repeat(auto-fit, minmax(...)), gap: 1rem, border-radius: 20px, background: #FFF, box-shadow: subtle
```

## Design System Variables

```css
--grid-gap: 20px, --card-radius: 24px, --card-bg: #FFFFFF, --page-bg: #F5F5F7, --shadow: soft
```

## Implementation Checklist

- ☐ Grid layout (CSS Grid)
- ☐ Rounded corners 16-24px
- ☐ Varied card spans
- ☐ Content fits card size
- ☐ Responsive re-flow
- ☐ Apple-like aesthetic

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

[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)[![Swiss Design Gráfico](https://designmd.app/images/library/107.png) Minimalismo & Swiss ### Swiss Design Gráfico](https://designmd.app/library/swiss-design-grafico)[![Bento Grid Tech Minimalist](https://designmd.app/images/library/156.png) Futurista & Tech ### Bento Grid Tech Minimalist](https://designmd.app/library/bento-grid-tech-minimalist)[![Bento Box Grid](https://designmd.app/images/library/39.png) Flat & Soft UI ### Bento Box Grid](https://designmd.app/library/bento-box-grid)[![Organic Biophilic](https://designmd.app/images/library/42.png) Temas & Verticais ### Organic Biophilic](https://designmd.app/library/organic-biophilic)

Last synced: 4/1/2026
