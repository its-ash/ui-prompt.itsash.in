# Art Nouveau

- Source: <https://designmd.app/library/art-nouveau>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:33.301Z

Arte & Ilustracao1890-1910 Art Nouveau Movement

# Art Nouveau

Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Ideal for design de pôsteres, capas de livros, branding orgânico e romântico, ilustração editorial. AI-ready template.

Art Nouveaufluid linesorganic formsfloral motifsnature-inspiredrounded typographyillustrationhandmaderomanticwhiplash curves

Use case: Design de pôsteres, Capas de livros, Branding orgânico e romântico, Ilustração editorial

![Art Nouveau](https://designmd.app/images/library/305.png)

## Historical Context

Art Nouveau didn't just decorate surfaces — it fundamentally rejected the machine. Born in the 1890s across Brussels, Paris, and Vienna, the movement was a full-throated rebellion against industrial standardization. Architects like Horta and Guimard bent iron into whiplash curves. Mucha turned commercial posters into sacred geometry. The entire philosophy insisted that art belonged everywhere: door handles, metro entrances, perfume bottles. Nothing was too mundane to deserve beauty. What makes Art Nouveau endure isn't nostalgia — it's the underlying logic. Every curve follows botanical growth patterns. Every ornament serves a structural or compositional purpose. The movement understood something we keep rediscovering: nature's forms aren't decorative afterthoughts, they're engineering solutions. When you trace a Guimard railing or a Tiffany lamp, you're following the same mathematical progressions found in fern fronds and nautilus shells. The movement collapsed by 1910, crushed under its own production costs and the rising appetite for geometric simplicity. But its DNA persists in every brand that chooses organic flow over rigid grids — every time a designer reaches for a tendril instead of a straight line.

## When to Use

Art Nouveau belongs wherever a brand needs to signal craftsmanship, sensuality, and unhurried luxury. It's the right vocabulary for heritage wine labels, artisanal perfumery, fine jewelry, and cultural institutions that refuse to look like tech startups. Deploy it when your audience values provenance over disruption. Avoid it for anything that needs to feel fast, minimal, or utilitarian — this style demands space to breathe and rewards close inspection. It pairs exceptionally well with rich material textures: foil stamping, letterpress, textured paper stocks.

## Design Principles

- Let every line follow organic growth logic — no curve should exist without botanical or structural justification
- Treat negative space as living atmosphere, not empty real estate waiting to be filled
- Unify typography and ornament into a single compositional system — letterforms should feel grown, not set
- Anchor asymmetrical compositions with a dominant vertical flow, allowing secondary elements to cascade naturally
- Restrict your palette to muted, nature-derived tones — let material richness and line quality carry the visual weight

## DESIGN.md

```
---
version: "alpha"
name: "Art Nouveau"
description: "Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Ideal for design de pôsteres, capas de livros, branding orgânico e romântico, ilustração editorial. AI-ready template."
colors:
primary: "#4A6741"
secondary: "#B8860B"
tertiary: "#FFF8DC"
neutral: "#4A1942"
surface: "#C67A4B"
accent: "#87CEEB"
typography:
h1:
fontFamily: Cormorant Garamond
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Cormorant Garamond
fontSize: 1rem
fontWeight: 400
spacing:
sm: 2.0rem
md: 4.0rem
lg: 8.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Ideal for design de pôsteres, capas de livros, branding orgânico e romântico, ilustração editorial. AI-ready template. Art Nouveau didn't just decorate surfaces — it fundamentally rejected the machine. Born in the 1890s across Brussels, Paris, and Vienna, the movement was a full-throated rebellion against industrial standardization. Architects like Horta and Guimard bent iron into whiplash curves. Mucha turned commercial posters into sacred geometry. The entire philosophy insisted that art belonged everywhere: door handles, metro entrances, perfume bottles. Nothing was too mundane to deserve beauty.

What makes Art Nouveau endure isn't nostalgia — it's the underlying logic. Every curve follows botanical growth patterns. Every ornament serves a structural or compositional purpose. The movement understood something we keep rediscovering: nature's forms aren't decorative afterthoughts, they're engineering solutions. When you trace a Guimard railing or a Tiffany lamp, you're following the same mathematical progressions found in fern fronds and nautilus shells.

The movement collapsed by 1910, crushed under its own production costs and the rising appetite for geometric simplicity. But its DNA persists in every brand that chooses organic flow over rigid grids — every time a designer reaches for a tendril instead of a straight line.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 8/10 — Cinematic

- **Style:** Fluid, Organic, Floral, Nature-Inspired
- **Keywords:** Art Nouveau, fluid lines, organic forms, floral motifs, nature-inspired, rounded typography, illustration, handmade, romantic, whiplash curves
- **Era:** 1890-1910 Art Nouveau Movement
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Moss Green** (#4A6741) — Primary surface or dominant color
- **Warm Gold** (#B8860B) — Premium accent, decorative highlights
- **Cream** (#FFF8DC) — Light surface, card backgrounds
- **Deep Plum** (#4A1942) — Supporting palette color
- **Terracotta** (#C67A4B) — Extended palette, decorative use
- **Sky Blue** (#87CEEB) — Secondary accent
- **Dusty Rose** (#C9A0A0) — Extended palette, decorative use
- **Olive** (#6B7B3A) — Extended palette, decorative use

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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Flowing SVG organic borders (whiplash curves), floral motif corner decorations, nature-inspired section dividers, rounded flowing typography, gentle parallax on botanical elements, warm gradient backgrounds with organic shapes

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (organic/variable font-family: 'Cormorant Garamond') shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (organic/variable font-family: 'Cormorant Garamond') corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Flowing organic SVG borders
- Do Floral motif decorations
- Do Nature-inspired color palette
- Do Rounded flowing serif typography
- Do Illustration merged with type
- Do Romantic organic atmosphere
- Do Responsive with simplified organic elements on mobile

## Use Case

Design de pôsteres, Capas de livros, Branding orgânico e romântico, Ilustração editorial
```

[Download DESIGN.md](https://designmd.app/library/art-nouveau/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Cormorant Garamond', serif, background: #FFF8DC, color: #4A1942, border: none (use SVG organic borders), border-radius: 50% on decorative elements, box-shadow: 0 4px 16px rgba(74,25,66,0.1), line-height: 1.7, letter-spacing: 0.03em
```

### Variables

```
--color-green: #4A6741, --color-gold: #B8860B, --color-cream: #FFF8DC, --color-plum: #4A1942, --font-primary: 'Cormorant Garamond', --shadow-soft: 0 4px 16px rgba(74,25,66,0.1), --spacing: 2rem, --border-radius: organic/variable
```

### Checklist

☐ Flowing organic SVG borders, ☐ Floral motif decorations, ☐ Nature-inspired color palette, ☐ Rounded flowing serif typography, ☐ Illustration merged with type, ☐ Romantic organic atmosphere, ☐ Responsive with simplified organic elements on mobile

## Colors

Primary

#4A6741

#B8860B

#FFF8DC

#4A1942

Secondary

#C67A4B

#87CEEB

#C9A0A0

#6B7B3A

### Effects

Flowing SVG organic borders (whiplash curves), floral motif corner decorations, nature-inspired section dividers, rounded flowing typography, gentle parallax on botanical elements, warm gradient backgrounds with organic shapes

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

- **Name:** Art Nouveau
- **Type:** Fluid, Organic, Floral, Nature-Inspired
- **Keywords:** Art Nouveau, fluid lines, organic forms, floral motifs, nature-inspired, rounded typography, illustration, handmade, romantic, whiplash curves
- **Era:** 1890-1910 Art Nouveau Movement
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Moss Green #4A6741, Warm Gold #B8860B, Cream #FFF8DC, Deep Plum #4A1942
- **Secondary:** Terracotta #C67A4B, Sky Blue #87CEEB, Dusty Rose #C9A0A0, Olive #6B7B3A

## Visual Effects

Flowing SVG organic borders (whiplash curves), floral motif corner decorations, nature-inspired section dividers, rounded flowing typography, gentle parallax on botanical elements, warm gradient backgrounds with organic shapes

## AI Visual Direction

Design an Art Nouveau landing page with flowing organic lines and nature-inspired motifs. Use moss green, warm gold, cream, deep plum. Apply flowing SVG whiplash curve borders, floral corner decorations, nature-inspired dividers, rounded flowing typography. Illustration and typography should merge seamlessly. Romantic, handmade, deeply nature-inspired atmosphere.

## CSS Technical

```css
font-family: 'Cormorant Garamond', serif, background: #FFF8DC, color: #4A1942, border: none (use SVG organic borders), border-radius: 50% on decorative elements, box-shadow: 0 4px 16px rgba(74,25,66,0.1), line-height: 1.7, letter-spacing: 0.03em
```

## Design System Variables

```css
--color-green: #4A6741, --color-gold: #B8860B, --color-cream: #FFF8DC, --color-plum: #4A1942, --font-primary: 'Cormorant Garamond', --shadow-soft: 0 4px 16px rgba(74,25,66,0.1), --spacing: 2rem, --border-radius: organic/variable
```

## Implementation Checklist

- ☐ Flowing organic SVG borders
- ☐ Floral motif decorations
- ☐ Nature-inspired color palette
- ☐ Rounded flowing serif typography
- ☐ Illustration merged with type
- ☐ Romantic organic atmosphere
- ☐ Responsive with simplified organic elements on mobile

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

[![Art Deco](https://designmd.app/images/library/304.png) Arte & Ilustracao ### Art Deco](https://designmd.app/library/art-deco)[![Filigree](https://designmd.app/images/library/292.png) Arte & Ilustracao ### Filigree](https://designmd.app/library/filigree)[![Victorian](https://designmd.app/images/library/303.png) Arte & Ilustracao ### Victorian](https://designmd.app/library/victorian)[![Baroque](https://designmd.app/images/library/289.png) Arte & Ilustracao ### Baroque](https://designmd.app/library/baroque)[![Art Nouveau](https://designmd.app/images/library/305.png) Arte & Ilustracao ### Art Nouveau](https://designmd.app/library/art-nouveau)

Last synced: 4/1/2026
