# Memphis

- Source: <https://designmd.app/library/memphis>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:21.310Z

Retro & Pop1980s Memphis Group

# Memphis

Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Ideal for branding retro, peças editoriais, embalagens funky, campanhas jovens. AI-ready template.

Memphisvibrant colorsgeometric shapesboldpostmodern80splayfulsquigglestrianglescirclespatterns

Use case: Retro branding, Editorial pieces, Funky packaging, Youth campaigns

![Memphis](https://designmd.app/images/library/299.png)

## Historical Context

Memphis exploded out of Milan in 1981 when Ettore Sottsass gathered a crew of designers who were collectively sick of the beige rationalism that dominated everything. They named the group after a Bob Dylan track playing during their first meeting — "Stuck Inside of Mobile with the Memphis Blues Again" — and proceeded to violate every rule modernism held sacred. Clashing colors, plastic laminates, terrazzo patterns, and shapes that served no functional purpose whatsoever. The establishment hated it. That was the point. What Memphis understood, and what most design movements miss entirely, is that taste is political. By rejecting "good taste" as defined by the Bauhaus lineage, they exposed how much of modernist design was really about class signaling dressed up as universal truth. The squiggles and triangles weren't random — they were deliberate provocations against a design orthodoxy that had calcified into dogma. The movement burned hot and brief. By 1988 Sottsass dissolved the group, but the DNA persists everywhere — from 90s Nickelodeon to contemporary brand identities that refuse to take themselves seriously. Every time a designer reaches for a zigzag or an arbitrary geometric accent, they're channeling Memphis whether they know it or not.

## When to Use

Memphis works when your brand needs to signal irreverence, energy, and creative confidence. It's the right call for youth-facing campaigns, music and event branding, fashion editorials, and any creative studio that wants to communicate "we don't do boring." It falls apart instantly when applied timidly — half-committed Memphis just looks like a mistake. You either go full maximalist or you pick a different system. Also: if your audience skews corporate or conservative, Memphis will read as unserious rather than bold. Know your context.

## Design Principles

- Clash deliberately — combine colors that modernism says shouldn't coexist, but do it with conviction, not randomness
- Geometry as decoration, not structure — triangles, circles, and squiggles exist for visual energy, not to organize information
- Reject hierarchy when it serves you — Memphis flattens importance, letting pattern and shape compete equally with content
- Surface over depth — embrace flat, graphic, almost cartoonish treatments; drop shadows and gradients belong to other systems
- Asymmetry as default — centered, balanced compositions kill the Memphis energy; let elements collide off-grid

## DESIGN.md

```
---
version: "alpha"
name: "Memphis"
description: "Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Ideal for branding retro, peças editoriais, embalagens funky, campanhas jovens. AI-ready template."
colors:
primary: "#FF1493"
secondary: "#0066FF"
tertiary: "#FFD700"
neutral: "#FF3333"
surface: "#00E5A0"
accent: "#FF7F50"
typography:
h1:
fontFamily: Poppins
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Poppins
fontSize: 1rem
fontWeight: 400
rounded:
sm: 2px
md: 4px
lg: 8px
spacing:
sm: 1.5rem
md: 3.0rem
lg: 6.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Ideal for branding retro, peças editoriais, embalagens funky, campanhas jovens. AI-ready template. Memphis exploded out of Milan in 1981 when Ettore Sottsass gathered a crew of designers who were collectively sick of the beige rationalism that dominated everything. They named the group after a Bob Dylan track playing during their first meeting — "Stuck Inside of Mobile with the Memphis Blues Again" — and proceeded to violate every rule modernism held sacred. Clashing colors, plastic laminates, terrazzo patterns, and shapes that served no functional purpose whatsoever. The establishment hated it. That was the point.

What Memphis understood, and what most design movements miss entirely, is that taste is political. By rejecting "good taste" as defined by the Bauhaus lineage, they exposed how much of modernist design was really about class signaling dressed up as universal truth. The squiggles and triangles weren't random — they were deliberate provocations against a design orthodoxy that had calcified into dogma.

The movement burned hot and brief. By 1988 Sottsass dissolved the group, but the DNA persists everywhere — from 90s Nickelodeon to contemporary brand identities that refuse to take themselves seriously. Every time a designer reaches for a zigzag or an arbitrary geometric accent, they're channeling Memphis whether they know it or not.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Vibrant, Geometric, Bold, Postmodern
- **Keywords:** Memphis, vibrant colors, geometric shapes, bold, postmodern, 80s, playful, squiggles, triangles, circles, patterns
- **Era:** 1980s Memphis Group
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Hot Pink** (#FF1493) — Primary text color
- **Electric Blue** (#0066FF) — Accent highlight, links and focus states
- **Bright Yellow** (#FFD700) — Warning states, attention indicators
- **Vivid Red** (#FF3333) — Error states, destructive actions
- **Mint Green** (#00E5A0) — Success states, positive indicators
- **Coral** (#FF7F50) — Extended palette, decorative use
- **Purple** (#9B59B6) — Accent color, emphasis elements
- **Turquoise** (#1ABC9C) — Extended palette, decorative use

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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Bold geometric shapes as decorative elements (CSS triangles, circles), squiggly line borders via SVG, confetti-like scattered patterns, playful rotation on hover (5-15deg), pop-in animations, dotted and zigzag patterns as backgrounds

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Vibrant bold color palette (4+ colors)
- Do Geometric decorative shapes scattered
- Do Squiggly/zigzag pattern backgrounds
- Do Bold heavy typography
- Do Playful rotation on elements
- Do Anti-minimalist busy aesthetic
- Do Responsive with maintained energy

## Use Case

Retro branding, Editorial pieces, Funky packaging, Youth campaigns
```

[Download DESIGN.md](https://designmd.app/library/memphis/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Poppins', sans-serif, font-weight: 700-900, background: #FFFFFF with CSS pattern overlays, color: #0066FF or #FF1493, border: 3px solid, border-radius: 0px or 50%, transform: rotate(5deg) on decorative elements, clip-path: polygon() for geometric shapes
```

### Variables

```
--color-pink: #FF1493, --color-blue: #0066FF, --color-yellow: #FFD700, --font-primary: 'Poppins', --font-weight: 700, --border: 3px solid, --rotation: 5deg, --spacing: 1.5rem, --pattern-size: 20px
```

### Checklist

☐ Vibrant bold color palette (4+ colors), ☐ Geometric decorative shapes scattered, ☐ Squiggly/zigzag pattern backgrounds, ☐ Bold heavy typography, ☐ Playful rotation on elements, ☐ Anti-minimalist busy aesthetic, ☐ Responsive with maintained energy

## Colors

Primary

#FF1493

#0066FF

#FFD700

#FF3333

Secondary

#00E5A0

#FF7F50

#9B59B6

#1ABC9C

### Effects

Bold geometric shapes as decorative elements (CSS triangles, circles), squiggly line borders via SVG, confetti-like scattered patterns, playful rotation on hover (5-15deg), pop-in animations, dotted and zigzag patterns as backgrounds

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

- **Name:** Memphis
- **Type:** Vibrant, Geometric, Bold, Postmodern
- **Keywords:** Memphis, vibrant colors, geometric shapes, bold, postmodern, 80s, playful, squiggles, triangles, circles, patterns
- **Era:** 1980s Memphis Group
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Hot Pink #FF1493, Electric Blue #0066FF, Bright Yellow #FFD700, Vivid Red #FF3333
- **Secondary:** Mint Green #00E5A0, Coral #FF7F50, Purple #9B59B6, Turquoise #1ABC9C

## Visual Effects

Bold geometric shapes as decorative elements (CSS triangles, circles), squiggly line borders via SVG, confetti-like scattered patterns, playful rotation on hover (5-15deg), pop-in animations, dotted and zigzag patterns as backgrounds

## AI Visual Direction

Design a Memphis-style landing page with vibrant bold colors, geometric shapes (triangles, circles, squiggles), postmodern 80s aesthetic. Use hot pink, electric blue, bright yellow. Apply scattered geometric decorations, zigzag and dotted pattern backgrounds, playful rotation on elements, bold sans-serif typography. Energetic, fun and anti-minimalist.

## CSS Technical

```css
font-family: 'Poppins', sans-serif, font-weight: 700-900, background: #FFFFFF with CSS pattern overlays, color: #0066FF or #FF1493, border: 3px solid, border-radius: 0px or 50%, transform: rotate(5deg) on decorative elements, clip-path: polygon() for geometric shapes
```

## Design System Variables

```css
--color-pink: #FF1493, --color-blue: #0066FF, --color-yellow: #FFD700, --font-primary: 'Poppins', --font-weight: 700, --border: 3px solid, --rotation: 5deg, --spacing: 1.5rem, --pattern-size: 20px
```

## Implementation Checklist

- ☐ Vibrant bold color palette (4+ colors)
- ☐ Geometric decorative shapes scattered
- ☐ Squiggly/zigzag pattern backgrounds
- ☐ Bold heavy typography
- ☐ Playful rotation on elements
- ☐ Anti-minimalist busy aesthetic
- ☐ Responsive with maintained energy

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

[![Kitsch](https://designmd.app/images/library/307.png) Retro & Pop ### Kitsch](https://designmd.app/library/kitsch)[![Pop Art](https://designmd.app/images/library/315.png) Arte & Ilustracao ### Pop Art](https://designmd.app/library/pop-art)[![Memphis](https://designmd.app/images/library/299.png) Retro & Pop ### Memphis](https://designmd.app/library/memphis)[![Cyber Core](https://designmd.app/images/library/312.png) Futurista & Tech ### Cyber Core](https://designmd.app/library/cyber-core)[![Bauhaus](https://designmd.app/images/library/310.png) Arte & Ilustracao ### Bauhaus](https://designmd.app/library/bauhaus)

Last synced: 4/1/2026
