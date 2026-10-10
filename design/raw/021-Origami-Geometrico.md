# Origami Geométrico

- Source: <https://designmd.app/library/origami-geometrico>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:59:05.299Z

Arte & IlustracaoContemporary Paper Art Meets Digital

# Origami Geométrico

Design an origami geometric landing page. Ideal for landing pages, saas. AI-ready template.

origamigeometricfoldedangularprecisepaper crafttessellationfacetedlow-polymathematical

Use case: Landing pages, SaaS

![Origami Geométrico](https://designmd.app/images/library/117.png)

## Historical Context

Paper folding has been whispering to designers for centuries. Long before screens existed, origami demonstrated something profound: a single flat sheet, through nothing but precise folds, becomes dimensional. That's not craft — that's mathematics made tangible. The Bauhaus crowd noticed. So did the Constructivists. But it was the Japanese tradition that kept the discipline pure — no cuts, no glue, just geometry and intention. When digital design matured enough to handle angular complexity, origami's visual language migrated naturally into interfaces, logos, and spatial branding. Those crisp valley folds and mountain folds? They translate directly into light, shadow, and the illusion of depth on flat screens. What makes origami geometry endlessly compelling is its constraint. Every fold follows mathematical rules — the Huzita-Hatori axioms aren't suggestions, they're laws. And constraint, as any designer worth their salt knows, is where creativity actually lives. The angular facets, the interplay of planes catching light differently — it's structured beauty that never feels arbitrary.

## When to Use

Reach for geometric origami when a project demands sophistication without softness. Architecture firms, paper manufacturers, Japanese cultural institutions, luxury stationery — these are obvious fits. But it works equally well for tech brands wanting to signal precision and craftsmanship simultaneously. The style carries inherent intelligence; it reads as considered. Avoid it when warmth or approachability is the primary goal. These forms are elegant, not friendly. They command respect, not hugs.

## Design Principles

- Honor the fold — every angular transition must feel like a deliberate crease, not a random intersection of planes
- Light defines form — use gradient shifts across facets to simulate how paper catches and rejects light at fold boundaries
- Constraint is the point — limit your palette and angles the way a single sheet limits the folder; abundance kills the elegance
- Preserve flatness in depth — the magic is dimensional illusion from a 2D medium, so never over-render into full 3D territory
- Let negative space breathe — origami is as much about the unfolded areas as the folded ones; don't fill every surface with detail

## DESIGN.md

```
---
version: "alpha"
name: "Origami Geométrico"
description: "Design an origami geometric landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#FAFAFA"
secondary: "#B0B0B0"
tertiary: "#1A1A1A"
neutral: "#FF6B6B"
surface: "#87CEEB"
accent: "#A8D5BA"
typography:
h1:
fontFamily: Poppins
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Poppins
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an origami geometric landing page. Ideal for landing pages, saas. AI-ready template. Paper folding has been whispering to designers for centuries. Long before screens existed, origami demonstrated something profound: a single flat sheet, through nothing but precise folds, becomes dimensional. That's not craft — that's mathematics made tangible.

The Bauhaus crowd noticed. So did the Constructivists. But it was the Japanese tradition that kept the discipline pure — no cuts, no glue, just geometry and intention. When digital design matured enough to handle angular complexity, origami's visual language migrated naturally into interfaces, logos, and spatial branding. Those crisp valley folds and mountain folds? They translate directly into light, shadow, and the illusion of depth on flat screens.

What makes origami geometry endlessly compelling is its constraint. Every fold follows mathematical rules — the Huzita-Hatori axioms aren't suggestions, they're laws. And constraint, as any designer worth their salt knows, is where creativity actually lives. The angular facets, the interplay of planes catching light differently — it's structured beauty that never feels arbitrary.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Folded, Angular, Precise
- **Keywords:** origami, geometric, folded, angular, precise, paper craft, tessellation, faceted, low-poly, mathematical
- **Era:** Contemporary Paper Art Meets Digital
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Paper White** (#FAFAFA) — Light surface, card backgrounds
- **Fold Shadow** (#B0B0B0) — Secondary surface or text color
- **Ink Black** (#1A1A1A) — Dark surface, primary background
- **Accent Coral** (#FF6B6B) — Primary accent, CTAs and interactive elements
- **Sky Fold** (#87CEEB) — Extended palette, decorative use
- **Sage Paper** (#A8D5BA) — Extended palette, decorative use
- **Warm Crease** (#F0C987) — Extended palette, decorative use
- **Steel Grey** (#4A4A4A) — Secondary text, borders, muted elements

## Typography

- **Display / Hero:** Poppins — Weight 700, tight tracking, used for headline impact
- **Body:** Poppins — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Poppins — 0.875rem, weight 500, slight letter-spacing
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

CSS polygon clip-paths, faceted card surfaces, paper fold shadows, tessellation backgrounds, angular section dividers, crease line borders, layered paper depth, geometric hover transforms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do CSS polygon clip-paths
- Do Faceted card surfaces
- Do Paper fold shadows
- Do Tessellation backgrounds
- Do Angular section dividers
- Do Geometric hover transforms

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/origami-geometrico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FAFAFA, color: #1A1A1A, font-family: 'Poppins', sans-serif, clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%), box-shadow: 4px 4px 0 #B0B0B0, -4px -4px 0 rgba(255,255,255,0.8), border: none, transform: perspective(800px) rotateY(2deg), transition: transform 0.4s ease, background-image: linear-gradient(135deg, #FAFAFA 25%, #F0F0F0 25%, #F0F0F0 50%, #FAFAFA 50%)
```

### Variables

```
--paper-white-origami: #FAFAFA, --fold-shadow-origami: #B0B0B0, --ink-black-origami: #1A1A1A, --accent-coral-origami: #FF6B6B, --fold-perspective: 800px, --font-origami: 'Poppins', sans-serif
```

### Checklist

☐ CSS polygon clip-paths, ☐ Faceted card surfaces, ☐ Paper fold shadows, ☐ Tessellation backgrounds, ☐ Angular section dividers, ☐ Geometric hover transforms

## Colors

Primary

#FAFAFA

#B0B0B0

#1A1A1A

#FF6B6B

Secondary

#87CEEB

#A8D5BA

#F0C987

#4A4A4A

### Effects

CSS polygon clip-paths, faceted card surfaces, paper fold shadows, tessellation backgrounds, angular section dividers, crease line borders, layered paper depth, geometric hover transforms

### Light/Dark

✓ Full / ✗ No

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Origami Geométrico
- **Type:** Folded, Angular, Precise
- **Keywords:** origami, geometric, folded, angular, precise, paper craft, tessellation, faceted, low-poly, mathematical
- **Era:** Contemporary Paper Art Meets Digital
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Paper White #FAFAFA, Fold Shadow #B0B0B0, Ink Black #1A1A1A, Accent Coral #FF6B6B
- **Secondary:** Sky Fold #87CEEB, Sage Paper #A8D5BA, Warm Crease #F0C987, Steel Grey #4A4A4A

## Visual Effects

CSS polygon clip-paths, faceted card surfaces, paper fold shadows, tessellation backgrounds, angular section dividers, crease line borders, layered paper depth, geometric hover transforms

## AI Visual Direction

Design an origami geometric landing page. Use: paper white and fold shadows, CSS polygon clip-paths, faceted card surfaces, paper fold shadows, tessellation backgrounds, angular section dividers, crease line borders, geometric hover transforms.

## CSS Technical

```css
background: #FAFAFA, color: #1A1A1A, font-family: 'Poppins', sans-serif, clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%), box-shadow: 4px 4px 0 #B0B0B0, -4px -4px 0 rgba(255,255,255,0.8), border: none, transform: perspective(800px) rotateY(2deg), transition: transform 0.4s ease, background-image: linear-gradient(135deg, #FAFAFA 25%, #F0F0F0 25%, #F0F0F0 50%, #FAFAFA 50%)
```

## Design System Variables

```css
--paper-white-origami: #FAFAFA, --fold-shadow-origami: #B0B0B0, --ink-black-origami: #1A1A1A, --accent-coral-origami: #FF6B6B, --fold-perspective: 800px, --font-origami: 'Poppins', sans-serif
```

## Implementation Checklist

- ☐ CSS polygon clip-paths
- ☐ Faceted card surfaces
- ☐ Paper fold shadows
- ☐ Tessellation backgrounds
- ☐ Angular section dividers
- ☐ Geometric hover transforms

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![De Stijl Abstrato](https://designmd.app/images/library/104.png) Arte & Ilustracao ### De Stijl Abstrato](https://designmd.app/library/de-stijl-abstrato)[![Azulejaria Digital Moderna](https://designmd.app/images/library/237.png) Brasil ### Azulejaria Digital Moderna](https://designmd.app/library/azulejaria-digital-moderna)[![Cordel Digital](https://designmd.app/images/library/239.png) Brasil ### Cordel Digital](https://designmd.app/library/cordel-digital)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)

Last synced: 4/1/2026
