# Fraunces Typography

- Source: <https://designmd.app/library/fraunces-typography>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:35.306Z

Editorial & TipografiaClassic Editorial

# Fraunces Typography

Render a 2D isolated text on a solid background. Ideal for branding and logos, headlines, hero sections, and editorial layouts.. AI-ready template.

Frauncesclassic serifwarmoffbeat personalityheritagefintecheditorial

Use case: Branding and logos, headlines, hero sections, and editorial layouts.

![Fraunces Typography](https://designmd.app/images/library/271.png)

## Historical Context

Fraunces is one of those typefaces that feels like it shouldn't exist in a variable font format — and that's exactly why it works. Designed by Phaedra Charles and published through Google Fonts, it draws from the tradition of old-style serifs: the kind you'd find on a 1920s whiskey label or a hand-lettered bookplate. High contrast strokes, soft terminals, and a deliberate irregularity that refuses to feel mechanical. What makes Fraunces genuinely interesting is the WONK axis. Crank it up and the letterforms shift from conventional to expressive — optical sizes that feel hand-drawn without the pretense. The soft axis controls the curvature of terminals, letting you dial between sharp and pillowy. It's a typeface that rewards exploration rather than just picking a weight and moving on. In digital editorial, Fraunces brings something rare: actual warmth. Not the sterile elegance of a Didone, not the safe neutrality of a geometric serif. It feels human, slightly imperfect, like ink pressed into good paper. That quality is hard to manufacture and impossible to fake with a lesser typeface.

## When to Use

Reach for Fraunces when the brief calls for personality without sacrificing sophistication. It's ideal for editorial longform — magazine headers, pull quotes, feature article titles where you need presence without shouting. Heritage brands, wine labels, spirits packaging, luxury hospitality. Anywhere that needs to communicate craft and legacy without looking like a museum piece. Pair it with a clean grotesque for body copy and let Fraunces do the heavy lifting in display sizes.

## Design Principles

- Use display sizes generously — Fraunces reveals its character above 32px where the stroke contrast and soft terminals become legible design choices, not rendering artifacts
- Explore the WONK axis intentionally: low values for refined headlines, high values for editorial moments that need personality and visual tension
- Limit weight range per layout — pick two weights maximum. The variable axes give you enough expression without stacking Bold on Black on ExtraBold
- Pair with high x-height sans-serifs for body text. The contrast between Fraunces' old-style proportions and a modern grotesque creates hierarchy without effort
- Respect whitespace around Fraunces settings — it's a typeface that breathes. Tight leading and cramped margins kill the warmth that makes it worth choosing

## DESIGN.md

```
---
version: "alpha"
name: "Fraunces Typography"
description: "Render a 2D isolated text on a solid background. Ideal for branding and logos, headlines, hero sections, and editorial layouts.. AI-ready template."
colors:
primary: "#C4B773"
secondary: "#114A34"
typography:
h1:
fontFamily: Fraunces
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Fraunces
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
padding: 12px
---

## Overview

Render a 2D isolated text on a solid background. Ideal for branding and logos, headlines, hero sections, and editorial layouts.. AI-ready template. Fraunces is one of those typefaces that feels like it shouldn't exist in a variable font format — and that's exactly why it works. Designed by Phaedra Charles and published through Google Fonts, it draws from the tradition of old-style serifs: the kind you'd find on a 1920s whiskey label or a hand-lettered bookplate. High contrast strokes, soft terminals, and a deliberate irregularity that refuses to feel mechanical.

What makes Fraunces genuinely interesting is the WONK axis. Crank it up and the letterforms shift from conventional to expressive — optical sizes that feel hand-drawn without the pretense. The soft axis controls the curvature of terminals, letting you dial between sharp and pillowy. It's a typeface that rewards exploration rather than just picking a weight and moving on.

In digital editorial, Fraunces brings something rare: actual warmth. Not the sterile elegance of a Didone, not the safe neutrality of a geometric serif. It feels human, slightly imperfect, like ink pressed into good paper. That quality is hard to manufacture and impossible to fake with a lesser typeface.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Premium, Old money style
- **Keywords:** Fraunces, classic serif, warm, offbeat personality, heritage, fintech, editorial
- **Era:** Classic Editorial
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **#C4B773** (#C4B773) — Primary surface or dominant color
- **#114A34** (#114A34) — Extended palette, decorative use

## Typography

- **Display / Hero:** Fraunces — Weight 700, tight tracking, used for headline impact
- **Body:** Fraunces — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Fraunces — 0.875rem, weight 500, slight letter-spacing
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

Tight tracking (-2%), 90% leading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Subtly rounded (0.5rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Subtly rounded (0.5rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fraunces Font
- Do Color: #C4B773
- Do Tracking -2%
- Do Background #114A34

## Use Case

Branding and logos, headlines, hero sections, and editorial layouts.
```

[Download DESIGN.md](https://designmd.app/library/fraunces-typography/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Fraunces', serif; color: #C4B773; letter-spacing: -0.02em; line-height: 0.9;
```

### Variables

```
--font-family: 'Fraunces', --text-color: #C4B773, --bg-color: #114A34
```

### Checklist

☐ Fraunces Font, ☐ Color: #C4B773, ☐ Tracking -2%, ☐ Background #114A34

## Colors

Primary

#C4B773

Secondary

#114A34

### Effects

Tight tracking (-2%), 90% leading

### Light/Dark

✗ No / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Fraunces Typography
- **Type:** Premium, Old money style
- **Keywords:** Fraunces, classic serif, warm, offbeat personality, heritage, fintech, editorial
- **Era:** Classic Editorial
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** #C4B773
- **Secondary:** #114A34

## Visual Effects

Tight tracking (-2%), 90% leading

## AI Visual Direction

Render a 2D isolated text on a solid background. Font Family: @Fraunces Font, Color: Hex #C4B773, Background: #114A34, Tracking: Tight (-2%), Leading: 90%, Alignment: Strictly Left Aligned, Position: Center, Scale: 50%.

## CSS Technical

```css
font-family: 'Fraunces', serif; color: #C4B773; letter-spacing: -0.02em; line-height: 0.9;
```

## Design System Variables

```css
--font-family: 'Fraunces', --text-color: #C4B773, --bg-color: #114A34
```

## Implementation Checklist

- ☐ Fraunces Font
- ☐ Color: #C4B773
- ☐ Tracking -2%
- ☐ Background #114A34

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

Last synced: 4/1/2026
