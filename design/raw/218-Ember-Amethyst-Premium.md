# Ember & Amethyst Premium

- Source: <https://designmd.app/library/ember-amethyst-premium>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:22.796Z

Temas & Verticais2020s Expressive Premium

# Ember & Amethyst Premium

Vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Ideal for marcas de moda premium, gastronomia autoral, entretenimento e eventos, vinícolas e destilarias, creative agencies. AI-ready template.

Vibrantwarmboldfieryregalenergeticpassionateluxuriousdramaticexpressive

Use case: Brands de moda premium, Gastronomia autoral, Entretenimento e events, Vinícolas e destilarias, Creative agencies

![Ember & Amethyst Premium](https://designmd.app/images/library/334.png)

## Historical Context

Orange and purple sit opposite enough on the wheel to create tension, but share just enough red undertone to feel intentional rather than accidental. This pairing has roots in theatrical poster design of the 1960s and 70s — think Saul Bass meets psychedelia — where the goal was to arrest attention from across a street. The combination fell out of mainstream favor during the minimalism wave, dismissed as "too much." That dismissal was always wrong. What makes ember orange paired with amethyst purple genuinely premium is the temperature contrast. Ember reads as physical warmth — fire, copper, aged whiskey. Amethyst reads as cool depth — gemstone, twilight, velvet. Together they create a chromatic push-pull that feels expensive because it demands confidence to execute. Cheap brands don't attempt this palette because it punishes timidity. Every element needs to commit fully or the whole thing collapses into carnival territory. The recent resurgence in maximalist branding has given this combination new legitimacy. Brands tired of the same navy-and-white safety blanket are reaching for palettes that actually say something. Ember and amethyst says: we're not afraid of being remembered.

## When to Use

Deploy this palette when the brief calls for presence over subtlety. It works for creative studios that need their brand to feel as bold as their output, luxury event design where the space itself should feel like an experience, premium product packaging competing for shelf attention, and any context where "tastefully quiet" is the wrong answer. Avoid it for healthcare, finance, or anything requiring institutional trust — this palette is too opinionated for those verticals.

## Design Principles

- Commit fully to saturation — desaturated versions of these hues look muddy and indecisive, not refined
- Use ember as the action color and amethyst as the grounding color, never split them 50/50 or you lose hierarchy
- Dark backgrounds (near-black with purple undertone) let both colors breathe without competing with white space
- Typography should be bold-weight and confident — thin typefaces fight the palette's inherent energy
- Reserve pure white for critical contrast moments only; warm off-whites and cool lavender tints integrate better

## DESIGN.md

```
---
version: "alpha"
name: "Ember & Amethyst Premium"
description: "Vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Ideal for marcas de moda premium, gastronomia autoral, entretenimento e eventos, vinícolas e destilarias, creative agencies. AI-ready template."
colors:
primary: "#FFA102"
secondary: "#432E6F"
tertiary: "#DD5533"
neutral: "#F5F9CE"
surface: "#BC2D29"
accent: "#450E16"
typography:
h1:
fontFamily: Cormorant Garamond
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Cormorant Garamond
fontSize: 1rem
fontWeight: 400
rounded:
sm: 8px
md: 16px
lg: 24px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Ideal for marcas de moda premium, gastronomia autoral, entretenimento e eventos, vinícolas e destilarias, creative agencies. AI-ready template. Orange and purple sit opposite enough on the wheel to create tension, but share just enough red undertone to feel intentional rather than accidental. This pairing has roots in theatrical poster design of the 1960s and 70s — think Saul Bass meets psychedelia — where the goal was to arrest attention from across a street. The combination fell out of mainstream favor during the minimalism wave, dismissed as "too much." That dismissal was always wrong.

What makes ember orange paired with amethyst purple genuinely premium is the temperature contrast. Ember reads as physical warmth — fire, copper, aged whiskey. Amethyst reads as cool depth — gemstone, twilight, velvet. Together they create a chromatic push-pull that feels expensive because it demands confidence to execute. Cheap brands don't attempt this palette because it punishes timidity. Every element needs to commit fully or the whole thing collapses into carnival territory.

The recent resurgence in maximalist branding has given this combination new legitimacy. Brands tired of the same navy-and-white safety blanket are reaching for palettes that actually say something. Ember and amethyst says: we're not afraid of being remembered.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Vibrant & Bold Luxury
- **Keywords:** Vibrant, warm, bold, fiery, regal, energetic, passionate, luxurious, dramatic, expressive
- **Era:** 2020s Expressive Premium
- **Light/Dark:** ✓ Full

## Colors

- **Vivid Orange** (#FFA102) — Warm accent, call-to-action secondary
- **Her Highness Purple** (#432E6F) — Accent color, emphasis elements
- **Frozen Tomato Red** (#DD5533) — Error states, destructive actions
- **Yoghurt Cream** (#F5F9CE) — Secondary surface
- **Ginshu Crimson** (#BC2D29) — Extended palette, decorative use
- **Rum Chocolate** (#450E16) — Extended palette, decorative use

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

Bold gradient overlays (orange-to-purple diagonals), dramatic shadow depth, warm ambient glow on CTAs, expressive serif headlines with generous tracking, geometric accent shapes via clip-path, vibrant hover state color shifts, smooth 400ms transitions with ease-out

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

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

- Do Vivid Orange #FFA102 action color
- Do Her Highness Purple #432E6F structure
- Do Frozen Tomato #DD5533 emphasis
- Do Bold diagonal gradients
- Do Dramatic shadow depth
- Do Warm glow on CTAs
- Do Expressive serif headlines
- Do Geometric clip-path accents
- Do Responsive layout

## Use Case

Brands de moda premium, Gastronomia autoral, Entretenimento e events, Vinícolas e destilarias, Creative agencies
```

[Download DESIGN.md](https://designmd.app/library/ember-amethyst-premium/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Cormorant Garamond', serif; --font-body: 'Source Sans 3', sans-serif; --color-action: #FFA102; --color-structure: #432E6F; background: linear-gradient(135deg, #450E16, #432E6F); color: #F5F9CE; border-radius: 8px; box-shadow: 0 8px 24px rgba(69,14,22,0.35); transition: all 0.4s ease-out;
```

### Variables

```
--color-vivid-orange: #FFA102; --color-purple: #432E6F; --color-tomato: #DD5533; --color-yoghurt: #F5F9CE; --color-ginshu: #BC2D29; --color-rum: #450E16; --font-display: 'Cormorant Garamond', serif; --font-body: 'Source Sans 3', sans-serif; --radius-md: 8px; --shadow-warm: 0 8px 24px rgba(69,14,22,0.35); --glow-orange: 0 0 24px rgba(255,161,2,0.2);
```

### Checklist

☐ Vivid Orange #FFA102 action color, ☐ Her Highness Purple #432E6F structure, ☐ Frozen Tomato #DD5533 emphasis, ☐ Bold diagonal gradients, ☐ Dramatic shadow depth, ☐ Warm glow on CTAs, ☐ Expressive serif headlines, ☐ Geometric clip-path accents, ☐ Responsive layout

## Colors

Primary

#FFA102

#432E6F

#DD5533

Secondary

#F5F9CE

#BC2D29

#450E16

### Effects

Bold gradient overlays (orange-to-purple diagonals), dramatic shadow depth, warm ambient glow on CTAs, expressive serif headlines with generous tracking, geometric accent shapes via clip-path, vibrant hover state color shifts, smooth 400ms transitions with ease-out

### Light/Dark

✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Ember & Amethyst Premium
- **Type:** Vibrant & Bold Luxury
- **Keywords:** Vibrant, warm, bold, fiery, regal, energetic, passionate, luxurious, dramatic, expressive
- **Era:** 2020s Expressive Premium
- **Light/Dark:** ✓ Full

## Color Palette

- **Primary:** Vivid Orange #FFA102, Her Highness Purple #432E6F, Frozen Tomato Red #DD5533
- **Secondary:** Yoghurt Cream #F5F9CE, Ginshu Crimson #BC2D29, Rum Chocolate #450E16

## Visual Effects

Bold gradient overlays (orange-to-purple diagonals), dramatic shadow depth, warm ambient glow on CTAs, expressive serif headlines with generous tracking, geometric accent shapes via clip-path, vibrant hover state color shifts, smooth 400ms transitions with ease-out

## AI Visual Direction

Create a vibrant, bold, and luxurious UI that fuses fiery warmth with regal depth. Use vivid orange (#FFA102) as the primary action color, deep purple (#432E6F) for structural elements, and frozen tomato red (#DD5533) for emphasis. Background alternates between rum chocolate (#450E16) dark sections and yoghurt cream (#F5F9CE) light sections. Apply bold diagonal gradients, dramatic shadows, warm ambient glow on buttons, expressive serif headlines, and geometric clip-path accents. The feel should be passionate, energetic, and unmistakably premium.

## CSS Technical

```css
font-family: 'Cormorant Garamond', serif; --font-body: 'Source Sans 3', sans-serif; --color-action: #FFA102; --color-structure: #432E6F; background: linear-gradient(135deg, #450E16, #432E6F); color: #F5F9CE; border-radius: 8px; box-shadow: 0 8px 24px rgba(69,14,22,0.35); transition: all 0.4s ease-out;
```

## Design System Variables

```css
--color-vivid-orange: #FFA102; --color-purple: #432E6F; --color-tomato: #DD5533; --color-yoghurt: #F5F9CE; --color-ginshu: #BC2D29; --color-rum: #450E16; --font-display: 'Cormorant Garamond', serif; --font-body: 'Source Sans 3', sans-serif; --radius-md: 8px; --shadow-warm: 0 8px 24px rgba(69,14,22,0.35); --glow-orange: 0 0 24px rgba(255,161,2,0.2);
```

## Implementation Checklist

- ☐ Vivid Orange #FFA102 action color
- ☐ Her Highness Purple #432E6F structure
- ☐ Frozen Tomato #DD5533 emphasis
- ☐ Bold diagonal gradients
- ☐ Dramatic shadow depth
- ☐ Warm glow on CTAs
- ☐ Expressive serif headlines
- ☐ Geometric clip-path accents
- ☐ Responsive layout

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

[![Roxo Veludo Real](https://designmd.app/images/library/332.png) Temas & Verticais ### Roxo Veludo Real](https://designmd.app/library/roxo-veludo-real)[![Midnight Garden Premium](https://designmd.app/images/library/333.png) Temas & Verticais ### Midnight Garden Premium](https://designmd.app/library/midnight-garden-premium)[![Arctic Forsythia Premium](https://designmd.app/images/library/335.png) Temas & Verticais ### Arctic Forsythia Premium](https://designmd.app/library/arctic-forsythia-premium)[![Art Deco / Golden Age](https://designmd.app/images/library/69.png) Arte & Ilustracao ### Art Deco / Golden Age](https://designmd.app/library/art-deco-golden-age)[![Memphis Design](https://designmd.app/images/library/44.png) Retro & Pop ### Memphis Design](https://designmd.app/library/memphis-design)

Last synced: 4/1/2026
