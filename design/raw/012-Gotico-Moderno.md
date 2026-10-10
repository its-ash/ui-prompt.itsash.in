# Gótico Moderno

- Source: <https://designmd.app/library/gotico-moderno>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:58:04.304Z

Temas & VerticaisContemporary Gothic Revival

# Gótico Moderno

Modern gothic landing page. Ideal for landing pages, saas. AI-ready template.

modern gothicdarkelegantedgyromanticintricatehigh-contrastmoodysophisticatedarchitectural

Use case: Landing pages, SaaS

![Gótico Moderno](https://designmd.app/images/library/109.png)

## Historical Context

Modern gothic design has nothing to do with haunted houses. Let's get that out of the way. It descends from a lineage that runs through Bauhaus severity, post-punk album art, and the razor-sharp tailoring of Japanese avant-garde fashion. Rick Owens didn't invent darkness — he gave it architecture. Comme des Garçons gave it asymmetry. The movement treats black not as absence but as material, something with weight and texture and temperature. The fashion-music crossover is where this language solidified. Album packaging for bands like Bauhaus and Siouxsie, the typography of Factory Records, the brutalist stage design of industrial acts — these weren't aesthetic choices, they were philosophical ones. Restraint as rebellion. Elegance as aggression. This is categorically different from "dark mode." Dark mode is a preference toggle. Modern gothic is a worldview. Where dark mode reduces contrast to ease eye strain, gothic design weaponizes contrast. It uses negative space like silence in music — not empty, but loaded. The palette isn't just dark; it's considered. Charcoal against obsidian. Bone white as punctuation. Every element earns its presence or gets cut.

## When to Use

When the brand identity demands weight. Fashion editorials, music platforms, luxury goods that reject approachability as a value. Alternative culture projects where lightness would read as dishonest. Dark luxury — not dark convenience. Use it when your audience already lives in this world and would distrust anything that looks friendly. Not appropriate for products that need to feel accessible or warm. This is for brands that want to be respected before they're liked.

## Design Principles

- Black is a material, not a background — treat dark surfaces with the same intentionality as color, varying depth through texture, sheen, and subtle value shifts
- Contrast is violence — use it deliberately, sparingly, and always with purpose; a single white element on black should hit like a cymbal crash
- Typography carries the architecture — lean on sharp serifs, extreme weights, and generous tracking; the letterforms themselves become structural
- Negative space is tension — resist filling; the emptiness between elements creates the drama that decoration never could
- Restraint over ornamentation — every added element dilutes the power; if something doesn't intensify the composition, it weakens it

## DESIGN.md

```
---
version: "alpha"
name: "Gótico Moderno"
description: "Modern gothic landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#1A1A1A"
secondary: "#8B0000"
tertiary: "#C0C0C0"
neutral: "#F5F5F5"
surface: "#480048"
accent: "#228B22"
typography:
h1:
fontFamily: UnifrakturMaguntia
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: UnifrakturMaguntia
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Modern gothic landing page. Ideal for landing pages, saas. AI-ready template. Modern gothic design has nothing to do with haunted houses. Let's get that out of the way. It descends from a lineage that runs through Bauhaus severity, post-punk album art, and the razor-sharp tailoring of Japanese avant-garde fashion. Rick Owens didn't invent darkness — he gave it architecture. Comme des Garçons gave it asymmetry. The movement treats black not as absence but as material, something with weight and texture and temperature.

The fashion-music crossover is where this language solidified. Album packaging for bands like Bauhaus and Siouxsie, the typography of Factory Records, the brutalist stage design of industrial acts — these weren't aesthetic choices, they were philosophical ones. Restraint as rebellion. Elegance as aggression.

This is categorically different from "dark mode." Dark mode is a preference toggle. Modern gothic is a worldview. Where dark mode reduces contrast to ease eye strain, gothic design weaponizes contrast. It uses negative space like silence in music — not empty, but loaded. The palette isn't just dark; it's considered. Charcoal against obsidian. Bone white as punctuation. Every element earns its presence or gets cut.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** Dark, Elegant, Edgy
- **Keywords:** modern gothic, dark, elegant, edgy, romantic, intricate, high-contrast, moody, sophisticated, architectural
- **Era:** Contemporary Gothic Revival
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Onyx Black** (#1A1A1A) — Dark surface, primary background
- **Blood Red** (#8B0000) — Error states, destructive actions
- **Silver** (#C0C0C0) — Supporting palette color
- **Off-White** (#F5F5F5) — Light surface, card backgrounds
- **Deep Purple** (#480048) — Accent color, emphasis elements
- **Forest Green** (#228B22) — Success states, positive indicators
- **White** (#FFFFFF) — Secondary surface

## Typography

- **Display / Hero:** UnifrakturMaguntia — Weight 700, tight tracking, used for headline impact
- **Body:** UnifrakturMaguntia — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** UnifrakturMaguntia — 0.875rem, weight 500, slight letter-spacing
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

High-contrast typography, intricate line art, modern blackletter fonts, dramatic photography, subtle smoke effects, sharp architectural lines, romantic floral elements, elegant animations

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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do High-contrast typography
- Do Intricate line art
- Do Modern blackletter fonts
- Do Dramatic photography
- Do Subtle smoke effects
- Do Sharp architectural lines

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/gotico-moderno/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #1A1A1A, color: #F5F5F5, font-family: 'UnifrakturMaguntia', cursive, border: 1px solid #C0C0C0, box-shadow: 0 0 15px rgba(192,192,192,0.3), text-shadow: 0 0 5px #8B0000, animation: fade-in-out 4s infinite alternate, filter: contrast(1.2), background-image: url('gothic-pattern.svg'), background-blend-mode: overlay
```

### Variables

```
--onyx-black-gothic: #1A1A1A, --blood-red-gothic: #8B0000, --silver-gothic: #C0C0C0, --off-white-gothic: #F5F5F5, --line-art-thickness: 1px, --font-gothic: 'UnifrakturMaguntia', cursive
```

### Checklist

☐ High-contrast typography, ☐ Intricate line art, ☐ Modern blackletter fonts, ☐ Dramatic photography, ☐ Subtle smoke effects, ☐ Sharp architectural lines

## Colors

Primary

#1A1A1A

#8B0000

#C0C0C0

#F5F5F5

Secondary

#480048

#228B22

#FFFFFF

### Effects

High-contrast typography, intricate line art, modern blackletter fonts, dramatic photography, subtle smoke effects, sharp architectural lines, romantic floral elements, elegant animations

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

- **Name:** Gótico Moderno
- **Type:** Dark, Elegant, Edgy
- **Keywords:** modern gothic, dark, elegant, edgy, romantic, intricate, high-contrast, moody, sophisticated, architectural
- **Era:** Contemporary Gothic Revival
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Onyx Black #1A1A1A, Blood Red #8B0000, Silver #C0C0C0, Off-White #F5F5F5
- **Secondary:** Deep Purple #480048, Forest Green #228B22, White #FFFFFF

## Visual Effects

High-contrast typography, intricate line art, modern blackletter fonts, dramatic photography, subtle smoke effects, sharp architectural lines, romantic floral elements, elegant animations

## AI Visual Direction

Design a modern gothic landing page. Use: onyx black and blood red, high-contrast typography, intricate line art, modern blackletter fonts, dramatic photography, subtle smoke effects, sharp architectural lines, romantic floral elements.

## CSS Technical

```css
background: #1A1A1A, color: #F5F5F5, font-family: 'UnifrakturMaguntia', cursive, border: 1px solid #C0C0C0, box-shadow: 0 0 15px rgba(192,192,192,0.3), text-shadow: 0 0 5px #8B0000, animation: fade-in-out 4s infinite alternate, filter: contrast(1.2), background-image: url('gothic-pattern.svg'), background-blend-mode: overlay
```

## Design System Variables

```css
--onyx-black-gothic: #1A1A1A, --blood-red-gothic: #8B0000, --silver-gothic: #C0C0C0, --off-white-gothic: #F5F5F5, --line-art-thickness: 1px, --font-gothic: 'UnifrakturMaguntia', cursive
```

## Implementation Checklist

- ☐ High-contrast typography
- ☐ Intricate line art
- ☐ Modern blackletter fonts
- ☐ Dramatic photography
- ☐ Subtle smoke effects
- ☐ Sharp architectural lines

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

[![Art Deco / Golden Age](https://designmd.app/images/library/69.png) Arte & Ilustracao ### Art Deco / Golden Age](https://designmd.app/library/art-deco-golden-age)[![Art Nouveau Florido](https://designmd.app/images/library/101.png) Arte & Ilustracao ### Art Nouveau Florido](https://designmd.app/library/art-nouveau-florido)[![Steampunk Vitoriano](https://designmd.app/images/library/103.png) Futurista & Tech ### Steampunk Vitoriano](https://designmd.app/library/steampunk-vitoriano)[![Rococó Delicado](https://designmd.app/images/library/106.png) Arte & Ilustracao ### Rococó Delicado](https://designmd.app/library/rococo-delicado)[![Noir Detetive](https://designmd.app/images/library/118.png) Retro & Pop ### Noir Detetive](https://designmd.app/library/noir-detetive)

Last synced: 4/1/2026
