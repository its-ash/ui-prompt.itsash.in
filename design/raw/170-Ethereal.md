# Ethereal

- Source: <https://designmd.app/library/ethereal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:07.308Z

Arte & IlustracaoTimeless Romantic

# Ethereal

Design an ethereal landing page with extremely soft, delicate tones. Ideal for lookbooks de alta-costura, arte conceitual, designs refinados, portfólios artísticos. AI-ready template.

Etherealsoft tonesdelicate layersdreamlikeotherworldlygentlerefinednostalgiclightairytranslucent

Use case: Haute couture lookbooks, Concept art, Refined designs, Artistic portfolios

![Ethereal](https://designmd.app/images/library/291.png)

## Historical Context

Ethereal as a visual language owes everything to the Symbolist painters — Odilon Redon, Gustave Moreau — who rejected realism in favor of suggestion. They understood that what you almost see is more powerful than what you fully render. The technique migrated into Art Nouveau illustration, where Alphonse Mucha layered translucent washes behind his figures, creating depth without weight. In the twentieth century, ethereal found its commercial footing through perfume advertising and fashion illustration. René Gruau's ink-and-wash work for Dior proved that luxury didn't need to shout — it could whisper through negative space and bleeding color. The Japanese concept of 'yūgen' (profound grace) runs parallel here: beauty implied rather than stated. Today's ethereal illustration draws from all of this but adds digital layering — multiply blends, grain textures at 3-5% opacity, color that feels like it was breathed onto the canvas rather than applied. It's maximally restrained. Every element earns its presence through absence of everything else.

## When to Use

Reach for ethereal when the brand needs to feel precious without feeling fragile. Wedding stationery, luxury skincare, high-end wellness, perfume — anywhere the audience expects beauty that doesn't try too hard. It works when you need emotional resonance over information density. Avoid it for anything requiring urgency, bold CTAs, or masculine energy. This style demands breathing room — cramped layouts kill it instantly. If your grid is tight and your content is dense, pick something else.

## Design Principles

- Layer transparency over opacity — build depth through stacked translucent elements at 5-20% opacity rather than solid fills
- Restrict your palette to three hues maximum, all desaturated by at least 30% from their pure values
- Embrace asymmetric negative space — ethereal compositions breathe from one side, never centered symmetrically
- Use grain and texture as atmosphere, not decoration — noise at 2-5% mimics the imperfection of handmade media
- Typography must be lightweight but never thin — opt for light-weight serifs with generous tracking over hairline sans-serifs that disappear

## DESIGN.md

```
---
version: "alpha"
name: "Ethereal"
description: "Design an ethereal landing page with extremely soft, delicate tones. Ideal for lookbooks de alta-costura, arte conceitual, designs refinados, portfólios artísticos. AI-ready template."
colors:
primary: "#F8E8E0"
secondary: "#F0F0F5"
tertiary: "#E6E0F3"
neutral: "#D8D8E0"
surface: "#C9A0A0"
accent: "#D4C5A0"
typography:
h1:
fontFamily: Cormorant Garamond
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Cormorant Garamond
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an ethereal landing page with extremely soft, delicate tones. Ideal for lookbooks de alta-costura, arte conceitual, designs refinados, portfólios artísticos. AI-ready template. Ethereal as a visual language owes everything to the Symbolist painters — Odilon Redon, Gustave Moreau — who rejected realism in favor of suggestion. They understood that what you almost see is more powerful than what you fully render. The technique migrated into Art Nouveau illustration, where Alphonse Mucha layered translucent washes behind his figures, creating depth without weight.

In the twentieth century, ethereal found its commercial footing through perfume advertising and fashion illustration. René Gruau's ink-and-wash work for Dior proved that luxury didn't need to shout — it could whisper through negative space and bleeding color. The Japanese concept of 'yūgen' (profound grace) runs parallel here: beauty implied rather than stated.

Today's ethereal illustration draws from all of this but adds digital layering — multiply blends, grain textures at 3-5% opacity, color that feels like it was breathed onto the canvas rather than applied. It's maximally restrained. Every element earns its presence through absence of everything else.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Soft, Delicate, Dreamlike, Otherworldly
- **Keywords:** Ethereal, soft tones, delicate layers, dreamlike, otherworldly, gentle, refined, nostalgic, light, airy, translucent
- **Era:** Timeless Romantic
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Soft Blush** (#F8E8E0) — Primary surface or dominant color
- **Mist White** (#F0F0F5) — Light surface, card backgrounds
- **Pale Lavender** (#E6E0F3) — Supporting palette color
- **Cloud Grey** (#D8D8E0) — Secondary text, borders, muted elements
- **Dusty Rose** (#C9A0A0) — Extended palette, decorative use
- **Soft Gold** (#D4C5A0) — Premium accent, decorative highlights
- **Pale Sky** (#B8D4E3) — Extended palette, decorative use
- **Whisper Pink** (#F5E0E8) — Primary text color

## Typography

- **Display / Hero:** Cormorant Garamond — Weight 700, tight tracking, used for headline impact
- **Body:** Cormorant Garamond — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Cormorant Garamond — 0.875rem, weight 500, slight letter-spacing
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

Very subtle opacity layers (0.3-0.6), soft gaussian blur backgrounds (5-10px), delicate thin borders (0.5px), gentle fade-in animations (800ms), light text shadows, feathered edges

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Ultra-soft color palette
- Do Translucent layered elements
- Do Thin elegant typography (weight 300)
- Do Gentle fade-in animations
- Do Dreamlike atmosphere maintained
- Do Responsive with preserved delicacy

## Use Case

Haute couture lookbooks, Concept art, Refined designs, Artistic portfolios
```

[Download DESIGN.md](https://designmd.app/library/ethereal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Cormorant Garamond', serif, font-weight: 300, background: #F0F0F5, color: #4A4A5A, border: 0.5px solid rgba(200,200,210,0.4), backdrop-filter: blur(8px), opacity layers, transition: all 800ms ease, letter-spacing: 0.08em
```

### Variables

```
--color-blush: #F8E8E0, --color-mist: #F0F0F5, --color-lavender: #E6E0F3, --font-primary: 'Cormorant Garamond', --font-weight: 300, --border-delicate: 0.5px solid rgba(200,200,210,0.4), --transition: 800ms ease, --blur: 8px
```

### Checklist

☐ Ultra-soft color palette, ☐ Translucent layered elements, ☐ Thin elegant typography (weight 300), ☐ Gentle fade-in animations, ☐ Dreamlike atmosphere maintained, ☐ Responsive with preserved delicacy

## Colors

Primary

#F8E8E0

#F0F0F5

#E6E0F3

#D8D8E0

Secondary

#C9A0A0

#D4C5A0

#B8D4E3

#F5E0E8

### Effects

Very subtle opacity layers (0.3-0.6), soft gaussian blur backgrounds (5-10px), delicate thin borders (0.5px), gentle fade-in animations (800ms), light text shadows, feathered edges

### Light/Dark

✓ Full / ◐ Partial

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Ethereal
- **Type:** Soft, Delicate, Dreamlike, Otherworldly
- **Keywords:** Ethereal, soft tones, delicate layers, dreamlike, otherworldly, gentle, refined, nostalgic, light, airy, translucent
- **Era:** Timeless Romantic
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Soft Blush #F8E8E0, Mist White #F0F0F5, Pale Lavender #E6E0F3, Cloud Grey #D8D8E0
- **Secondary:** Dusty Rose #C9A0A0, Soft Gold #D4C5A0, Pale Sky #B8D4E3, Whisper Pink #F5E0E8

## Visual Effects

Very subtle opacity layers (0.3-0.6), soft gaussian blur backgrounds (5-10px), delicate thin borders (0.5px), gentle fade-in animations (800ms), light text shadows, feathered edges

## AI Visual Direction

Design an ethereal landing page with extremely soft, delicate tones. Use pale blush, lavender, mist white and cloud grey. Apply translucent layers, soft blur backgrounds, thin delicate borders, and gentle fade-in animations. Create a dreamlike, otherworldly atmosphere that feels light, airy and nostalgic. Typography should be thin and elegant.

## CSS Technical

```css
font-family: 'Cormorant Garamond', serif, font-weight: 300, background: #F0F0F5, color: #4A4A5A, border: 0.5px solid rgba(200,200,210,0.4), backdrop-filter: blur(8px), opacity layers, transition: all 800ms ease, letter-spacing: 0.08em
```

## Design System Variables

```css
--color-blush: #F8E8E0, --color-mist: #F0F0F5, --color-lavender: #E6E0F3, --font-primary: 'Cormorant Garamond', --font-weight: 300, --border-delicate: 0.5px solid rgba(200,200,210,0.4), --transition: 800ms ease, --blur: 8px
```

## Implementation Checklist

- ☐ Ultra-soft color palette
- ☐ Translucent layered elements
- ☐ Thin elegant typography (weight 300)
- ☐ Gentle fade-in animations
- ☐ Dreamlike atmosphere maintained
- ☐ Responsive with preserved delicacy

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

[![Filigree](https://designmd.app/images/library/292.png) Arte & Ilustracao ### Filigree](https://designmd.app/library/filigree)[![Coquette](https://designmd.app/images/library/324.png) Arte & Ilustracao ### Coquette](https://designmd.app/library/coquette)[![Shabby Chic](https://designmd.app/images/library/301.png) Retro & Pop ### Shabby Chic](https://designmd.app/library/shabby-chic)[![Aurora](https://designmd.app/images/library/290.png) Futurista & Tech ### Aurora](https://designmd.app/library/aurora)[![Neoclassical Art](https://designmd.app/images/library/288.png) Arte & Ilustracao ### Neoclassical Art](https://designmd.app/library/neoclassical-art)

Last synced: 4/1/2026
