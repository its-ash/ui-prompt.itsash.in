# Underwater / Aquático

- Source: <https://designmd.app/library/underwater-aquatico>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:38.302Z

Dados & InfograficoNature Aquatic

# Underwater / Aquático

Design an underwater aquatic infographic. Ideal for landing pages, modern websites. AI-ready template.

Underwater elementsaquatic lifewater plantswavesocean aestheticscalmingpeacefulexploratorymarinedeep sea

Use case: Landing pages, Modern websites

![Underwater / Aquático](https://designmd.app/images/library/95.png)

## Historical Context

Underwater aesthetics have fascinated designers since the Art Nouveau era — think Mucha's flowing forms, Lalique's jellyfish brooches. But the real shift happened when deep-sea photography became accessible in the mid-20th century. Suddenly we had a visual language for pressure, for darkness punctuated by bioluminescence, for color that disappears as depth increases. Red vanishes first. Then orange. By 200 meters, everything is blue and black. That gradient isn't decorative — it's physics, and it creates a natural visual hierarchy that data designers have been borrowing ever since. The ocean conservation movement of the 2000s accelerated aquatic design into mainstream consciousness. Brands needed to communicate urgency about coral bleaching, plastic pollution, microplastics — complex data stories that demanded infographic systems. Organizations like Ocean Conservancy and Surfrider Foundation pioneered visual frameworks where depth became a metaphor for severity, where layered transparency communicated ecosystem interconnection. Water brands followed, adopting these visual codes to signal environmental responsibility. Today, underwater design systems sit at the intersection of scientific visualization and emotional storytelling. The challenge is specific: how do you represent three-dimensional space, constant motion, and variable light conditions in flat, static infographics? The best solutions embrace the constraint rather than fighting it.

## When to Use

Reach for aquatic infographic systems when your data has natural layers or depth — ocean metrics, biodiversity counts, pollution tracking, water quality indices. They work beautifully for marine biology research presentations, aquarium educational displays, and conservation campaign materials. Also strong for water utility brands, surf and dive companies, or any context where you need to communicate volume, pressure, or environmental depth. Skip this style if your data is purely categorical with no spatial or hierarchical relationship — the depth metaphor will confuse rather than clarify.

## Design Principles

- Use depth as data axis — darker values and cooler temperatures should always mean deeper or more severe, never reverse the ocean's natural light gradient
- Layer transparency to show ecosystem relationships — overlapping translucent elements communicate interconnection better than isolated icons ever will
- Limit your palette to what water actually does to light — deep blues, teals, desaturated greens, with bioluminescent accents reserved exclusively for key data points
- Embrace fluid motion in transitions — aquatic data should never snap or jump; ease-in-out curves and gentle parallax respect the medium you're referencing
- Anchor every decorative element to real biology — stylized kelp, actual plankton shapes, real coral structures; invented sea creatures destroy credibility instantly

## DESIGN.md

```
---
version: "alpha"
name: "Underwater / Aquático"
description: "Design an underwater aquatic infographic. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#E0F6FF"
secondary: "#0B3C5D"
tertiary: "#006994"
neutral: "#0277BD"
surface: "#01579B"
accent: "#004D73"
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
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Design an underwater aquatic infographic. Ideal for landing pages, modern websites. AI-ready template. Underwater aesthetics have fascinated designers since the Art Nouveau era — think Mucha's flowing forms, Lalique's jellyfish brooches. But the real shift happened when deep-sea photography became accessible in the mid-20th century. Suddenly we had a visual language for pressure, for darkness punctuated by bioluminescence, for color that disappears as depth increases. Red vanishes first. Then orange. By 200 meters, everything is blue and black. That gradient isn't decorative — it's physics, and it creates a natural visual hierarchy that data designers have been borrowing ever since.

The ocean conservation movement of the 2000s accelerated aquatic design into mainstream consciousness. Brands needed to communicate urgency about coral bleaching, plastic pollution, microplastics — complex data stories that demanded infographic systems. Organizations like Ocean Conservancy and Surfrider Foundation pioneered visual frameworks where depth became a metaphor for severity, where layered transparency communicated ecosystem interconnection. Water brands followed, adopting these visual codes to signal environmental responsibility.

Today, underwater design systems sit at the intersection of scientific visualization and emotional storytelling. The challenge is specific: how do you represent three-dimensional space, constant motion, and variable light conditions in flat, static infographics? The best solutions embrace the constraint rather than fighting it.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Underwater elements, aquatic life, water plants, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea
- **Era:** Nature Aquatic
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Light Aqua** (#E0F6FF) — Primary surface or dominant color
- **Deep Navy** (#0B3C5D) — Secondary surface or text color
- **Ocean Blue** (#006994) — Accent highlight, links and focus states
- **Cerulean** (#0277BD) — Supporting palette color
- **Dark Blue** (#01579B) — Deep contrast surface
- **Teal** (#004D73) — Secondary accent
- **Steel Blue** (#005885) — Secondary accent
- **Cobalt** (#0D47A1) — Extended palette, decorative use

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

Cool blue illumination, underwater lighting effects, bubble floating animations, wave motion, fish swimming paths, coral sway, depth layering

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Ocean blue palette
- Do Marine elements present
- Do Bubble animations
- Do Wave patterns
- Do Depth layering
- Do Calming underwater feel

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/underwater-aquatico/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: linear-gradient(180deg, #E0F6FF, #006994), SVG marine elements, animation: bubble-rise (translateY), wave SVG (sine curve), layered z-index for depth, filter: blur for distance, cool blue palette
```

### Variables

```
--light-aqua: #E0F6FF, --deep-navy: #0B3C5D, --ocean-blue: #006994, --bubble-size: 8px, --bubble-duration: 4s, --wave-amplitude: 20px
```

### Checklist

☐ Ocean blue palette, ☐ Marine elements present, ☐ Bubble animations, ☐ Wave patterns, ☐ Depth layering, ☐ Calming underwater feel

## Colors

Primary

#E0F6FF

#0B3C5D

#006994

#0277BD

Secondary

#01579B

#004D73

#005885

#0D47A1

### Effects

Cool blue illumination, underwater lighting effects, bubble floating animations, wave motion, fish swimming paths, coral sway, depth layering

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

- **Name:** Underwater / Aquático
- **Type:** Infographic
- **Keywords:** Underwater elements, aquatic life, water plants, waves, ocean aesthetics, calming, peaceful, exploratory, marine, deep sea
- **Era:** Nature Aquatic
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Light Aqua #E0F6FF, Deep Navy #0B3C5D, Ocean Blue #006994, Cerulean #0277BD
- **Secondary:** Dark Blue #01579B, Teal #004D73, Steel Blue #005885, Cobalt #0D47A1, flowing liquid

## Visual Effects

Cool blue illumination, underwater lighting effects, bubble floating animations, wave motion, fish swimming paths, coral sway, depth layering

## AI Visual Direction

Design an underwater aquatic infographic. Use: underwater elements (fish, coral, plants, bubbles), ocean blue palette, wave patterns, layered depth suggesting ocean environment, cool blue illumination, flowing liquid aesthetic, marine life decorations.

## CSS Technical

```css
background: linear-gradient(180deg, #E0F6FF, #006994), SVG marine elements, animation: bubble-rise (translateY), wave SVG (sine curve), layered z-index for depth, filter: blur for distance, cool blue palette
```

## Design System Variables

```css
--light-aqua: #E0F6FF, --deep-navy: #0B3C5D, --ocean-blue: #006994, --bubble-size: 8px, --bubble-duration: 4s, --wave-amplitude: 20px
```

## Implementation Checklist

- ☐ Ocean blue palette
- ☐ Marine elements present
- ☐ Bubble animations
- ☐ Wave patterns
- ☐ Depth layering
- ☐ Calming underwater feel

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

[![Underwater Aquático Deep Sea](https://designmd.app/images/library/140.png) Temas & Verticais ### Underwater Aquático Deep Sea](https://designmd.app/library/underwater-aquatico-deep-sea)[![Radial Diagram / Donut Chart](https://designmd.app/images/library/87.png) Dados & Infografico ### Radial Diagram / Donut Chart](https://designmd.app/library/radial-diagram-donut-chart)[![Timeline Horizontal Corporativo](https://designmd.app/images/library/88.png) Dados & Infografico ### Timeline Horizontal Corporativo](https://designmd.app/library/timeline-horizontal-corporativo)[![Z-Shape](https://designmd.app/images/library/89.png) Dados & Infografico ### Z-Shape](https://designmd.app/library/z-shape)[![Natureza / Elementos Botânicos](https://designmd.app/images/library/90.png) Dados & Infografico ### Natureza / Elementos Botânicos](https://designmd.app/library/natureza-elementos-botanicos)

Last synced: 4/1/2026
