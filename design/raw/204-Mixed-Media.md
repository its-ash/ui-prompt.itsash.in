# Mixed Media

- Source: <https://designmd.app/library/mixed-media>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:02.323Z

Arte & Ilustracao20th Century Collage Art to Modern Digital

# Mixed Media

Mixed media landing page combining collage, painting and photography aesthetics. Ideal for spreads de revistas, capas de álbuns, publicidade criativa, portfólios artísticos. AI-ready template.

Mixed mediacollagepaintingphotographylayeredjuxtapositioneclecticunexpectedmulti-mediumtexturedartistic

Use case: Magazine spreads, Album covers, Creative advertising, Artistic portfolios

![Mixed Media](https://designmd.app/images/library/321.png)

## Historical Context

Mixed media isn't a style — it's a refusal to pick one. Its roots sit somewhere between Cubist papier collé, Dada photomontage, and the ripped-poster walls of 1960s Paris. Schwitters was gluing bus tickets to canvas before anyone had a word for it. Rauschenberg's Combines blew the door open: painting could hold photographs, fabric, found objects, whatever served the idea. The point was never decoration. It was confrontation — forcing unlike materials into dialogue until something unexpected emerged. Digitally, mixed media found new legs in the zine explosion of the '90s and the early-web collage aesthetic that treated the screen like a light table. David Carson's Ray Gun layouts proved that layering photography over paint textures over torn paper could communicate feeling faster than clean typography ever would. Today the approach lives in editorial design, album art, fashion campaigns, and any context where polish feels dishonest. The tension between analog texture and digital precision is the whole point — it signals that a human hand was here, making decisions that no grid system would sanction.

## When to Use

When the brief demands rawness, personality, or cultural credibility that polished vector work can't deliver. Mixed media shines for creative agencies building identity systems that need to feel handmade, art platforms showcasing process over product, experimental brands rejecting corporate sterility, and zines or independent publications where imperfection is the aesthetic contract with the reader. If your audience values authenticity over cleanliness, this is your language.

## Design Principles

- Embrace material tension — let photography argue with paint, let paper texture interrupt digital gradients. The friction is the design.
- Layer with intention, not decoration. Every collaged element must earn its place through contrast, narrative, or compositional necessity.
- Preserve analog artifacts — scan marks, torn edges, ink bleed, grain. These imperfections carry more information than any filter can simulate.
- Establish a tonal hierarchy despite the chaos. Mixed media without clear focal points is just a mess. Controlled disorder requires more discipline than minimalism.
- Let negative space breathe between dense collage zones. The eye needs rest stops — silence makes the noise legible.

## DESIGN.md

```
---
version: "alpha"
name: "Mixed Media"
description: "Mixed media landing page combining collage, painting and photography aesthetics. Ideal for spreads de revistas, capas de álbuns, publicidade criativa, portfólios artísticos. AI-ready template."
colors:
primary: "#B5854B"
secondary: "#F5F0E8"
tertiary: "#2C2C2C"
neutral: "#D94F4F"
surface: "#E8D5A0"
accent: "#2C3E6B"
typography:
h1:
fontFamily: mixed (
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: mixed (
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

Mixed media landing page combining collage, painting and photography aesthetics. Ideal for spreads de revistas, capas de álbuns, publicidade criativa, portfólios artísticos. AI-ready template. Mixed media isn't a style — it's a refusal to pick one. Its roots sit somewhere between Cubist papier collé, Dada photomontage, and the ripped-poster walls of 1960s Paris. Schwitters was gluing bus tickets to canvas before anyone had a word for it. Rauschenberg's Combines blew the door open: painting could hold photographs, fabric, found objects, whatever served the idea. The point was never decoration. It was confrontation — forcing unlike materials into dialogue until something unexpected emerged.

Digitally, mixed media found new legs in the zine explosion of the '90s and the early-web collage aesthetic that treated the screen like a light table. David Carson's Ray Gun layouts proved that layering photography over paint textures over torn paper could communicate feeling faster than clean typography ever would. Today the approach lives in editorial design, album art, fashion campaigns, and any context where polish feels dishonest. The tension between analog texture and digital precision is the whole point — it signals that a human hand was here, making decisions that no grid system would sanction.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 4/10 — Subtle

- **Style:** Collage, Multi-Medium, Layered, Eclectic
- **Keywords:** Mixed media, collage, painting, photography, layered, juxtaposition, eclectic, unexpected, multi-medium, textured, artistic
- **Era:** 20th Century Collage Art to Modern Digital
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Kraft Brown** (#B5854B) — Primary surface or dominant color
- **Off-White** (#F5F0E8) — Light surface, card backgrounds
- **Charcoal** (#2C2C2C) — Dark surface, primary background
- **Accent Red** (#D94F4F) — Primary accent, CTAs and interactive elements
- **Tape Yellow** (#E8D5A0) — Warning states, attention indicators
- **Ink Blue** (#2C3E6B) — Primary text color
- **Torn Paper White** (#FAFAF5) — Secondary surface
- **Marker Green** (#4CAF50) — Success states, positive indicators

## Typography

- **Display / Hero:** Libre Baskerville — Weight 700, tight tracking, used for headline impact
- **Accent:** Caveat — Used for decorative or emphasis text
- **Body:** Libre Baskerville — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Libre Baskerville — 0.875rem, weight 500, slight letter-spacing
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

Layered overlapping elements with z-index stacking, torn paper edge effects via clip-path, tape/pin decorative SVG elements, mixed texture backgrounds (paper, canvas, photo), collage-style asymmetric layouts, washi tape borders, slight rotation on layered elements

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

- Do Layered overlapping elements
- Do Torn paper edge effects
- Do Tape/pin decorative elements
- Do Mixed texture backgrounds
- Do Asymmetric collage layout
- Do Mixed typography styles
- Do Eclectic artistic atmosphere
- Do Responsive with maintained collage feel

## Use Case

Magazine spreads, Album covers, Creative advertising, Artistic portfolios
```

[Download DESIGN.md](https://designmd.app/library/mixed-media/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: mixed ('Libre Baskerville', 'Caveat', 'Inter'), background: #F5F0E8 with paper texture, color: #2C2C2C, clip-path: polygon() for torn edges, transform: rotate(-2deg to 3deg), z-index layering, box-shadow: 2px 2px 5px rgba(0,0,0,0.1), border: none (use tape/pin decorations)
```

### Variables

```
--color-kraft: #B5854B, --color-paper: #F5F0E8, --color-charcoal: #2C2C2C, --color-accent: #D94F4F, --font-serif: 'Libre Baskerville', --font-handwritten: 'Caveat', --font-sans: 'Inter', --rotation-range: -2deg to 3deg, --spacing: 1.5rem
```

### Checklist

☐ Layered overlapping elements, ☐ Torn paper edge effects, ☐ Tape/pin decorative elements, ☐ Mixed texture backgrounds, ☐ Asymmetric collage layout, ☐ Mixed typography styles, ☐ Eclectic artistic atmosphere, ☐ Responsive with maintained collage feel

## Colors

Primary

#B5854B

#F5F0E8

#2C2C2C

#D94F4F

Secondary

#E8D5A0

#2C3E6B

#FAFAF5

#4CAF50

### Effects

Layered overlapping elements with z-index stacking, torn paper edge effects via clip-path, tape/pin decorative SVG elements, mixed texture backgrounds (paper, canvas, photo), collage-style asymmetric layouts, washi tape borders, slight rotation on layered elements

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

- **Name:** Mixed Media
- **Type:** Collage, Multi-Medium, Layered, Eclectic
- **Keywords:** Mixed media, collage, painting, photography, layered, juxtaposition, eclectic, unexpected, multi-medium, textured, artistic
- **Era:** 20th Century Collage Art to Modern Digital
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Kraft Brown #B5854B, Off-White #F5F0E8, Charcoal #2C2C2C, Accent Red #D94F4F
- **Secondary:** Tape Yellow #E8D5A0, Ink Blue #2C3E6B, Torn Paper White #FAFAF5, Marker Green #4CAF50

## Visual Effects

Layered overlapping elements with z-index stacking, torn paper edge effects via clip-path, tape/pin decorative SVG elements, mixed texture backgrounds (paper, canvas, photo), collage-style asymmetric layouts, washi tape borders, slight rotation on layered elements

## AI Visual Direction

Design a mixed media landing page combining collage, painting and photography aesthetics. Use kraft brown, off-white, charcoal with accent red. Apply layered overlapping elements, torn paper edge clip-paths, tape/pin SVG decorations, mixed texture backgrounds (paper, canvas), asymmetric collage layouts, washi tape borders. Typography should mix handwritten, serif and sans-serif. Eclectic, textured, artistically layered.

## CSS Technical

```css
font-family: mixed ('Libre Baskerville', 'Caveat', 'Inter'), background: #F5F0E8 with paper texture, color: #2C2C2C, clip-path: polygon() for torn edges, transform: rotate(-2deg to 3deg), z-index layering, box-shadow: 2px 2px 5px rgba(0,0,0,0.1), border: none (use tape/pin decorations)
```

## Design System Variables

```css
--color-kraft: #B5854B, --color-paper: #F5F0E8, --color-charcoal: #2C2C2C, --color-accent: #D94F4F, --font-serif: 'Libre Baskerville', --font-handwritten: 'Caveat', --font-sans: 'Inter', --rotation-range: -2deg to 3deg, --spacing: 1.5rem
```

## Implementation Checklist

- ☐ Layered overlapping elements
- ☐ Torn paper edge effects
- ☐ Tape/pin decorative elements
- ☐ Mixed texture backgrounds
- ☐ Asymmetric collage layout
- ☐ Mixed typography styles
- ☐ Eclectic artistic atmosphere
- ☐ Responsive with maintained collage feel

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

[![Scrapbook / Collage](https://designmd.app/images/library/328.png) Arte & Ilustracao ### Scrapbook / Collage](https://designmd.app/library/scrapbook-collage)[![Conceptual Sketch / Doodle Art](https://designmd.app/images/library/296.png) Arte & Ilustracao ### Conceptual Sketch / Doodle Art](https://designmd.app/library/conceptual-sketch-doodle-art)[![Bohemian (Boho)](https://designmd.app/images/library/300.png) Arte & Ilustracao ### Bohemian (Boho)](https://designmd.app/library/bohemian-boho)[![Mixed Media](https://designmd.app/images/library/321.png) Arte & Ilustracao ### Mixed Media](https://designmd.app/library/mixed-media)[![Pointillism / Stipple Art](https://designmd.app/images/library/320.png) Arte & Ilustracao ### Pointillism / Stipple Art](https://designmd.app/library/pointillism-stipple-art)

Last synced: 4/1/2026
