# Chromatic Aberration / RGB Split

- Source: <https://designmd.app/library/chromatic-aberration-rgb-split>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:18:26.330Z

Futurista & Tech2020s Retro-Tech

# Chromatic Aberration / RGB Split

Design with chromatic aberration RGB split effect. Ideal for landing pages, saas. AI-ready template.

RGB splitcolor fringingglitchretro techVHSanalog errordistortionlens effect

Use case: Landing pages, SaaS

![Chromatic Aberration / RGB Split](https://designmd.app/images/library/67.png)

## Historical Context

Chromatic aberration was never supposed to be beautiful. It's a lens failure — light refracting at slightly different wavelengths, producing those telltale red-cyan fringes at the edges of an image. Photographers spent decades engineering it out. Then somewhere around 2012, glitch artists started engineering it back in. The glitch art movement treated digital errors as raw material. Datamoshing, pixel sorting, signal corruption — all fair game. RGB channel splitting fit right in: take an image, offset the red and blue channels by a few pixels, and suddenly you've got something that feels unstable. Dangerous. Alive. It wasn't decoration. It was a statement about the fragility of digital media. By the late 2010s, the aesthetic had been fully absorbed by mainstream design. Gaming brands, music platforms, tech startups — everyone wanted that split-channel energy. The effect became shorthand for 'we're technical, we're edgy, we don't play it safe.' Sometimes that's earned. Sometimes it's a crutch. The line between intentional disruption and lazy signaling is thinner than a one-pixel offset.

## When to Use

RGB split works when your brand actually lives in that space between precision and chaos. Gaming interfaces, electronic music visuals, cyberpunk aesthetics, experimental portfolios — contexts where visual instability reinforces the message. It's also effective for hover states and transitions where you want momentary disruption without permanent noise. Don't use it on healthcare sites. Don't use it on banking apps. And please — don't apply it to body text and call it a design decision.

## Design Principles

- Subtlety over spectacle — 1-3px offsets read as intentional; 10px reads as broken. Restraint is the difference between a designer who understands the reference and one who just discovered a Photoshop filter.
- Animate with purpose — Static RGB split is a poster. Animated RGB split is an experience. Use it on interaction states (hover, focus, glitch-in transitions) where the motion reinforces a narrative of digital instability.
- Limit the surface area — Apply to headlines, hero imagery, or UI accents. Never to entire layouts. The effect needs negative space to breathe, otherwise it's just visual noise competing with itself.
- Respect readability thresholds — If users squint, you've gone too far. The channel offset should create atmosphere without sacrificing legibility. Test at every viewport size.
- Pair with clean geometry — RGB split gains power from contrast. Set it against rigid grids, monospace type, and minimal color palettes. Chaos needs structure to feel intentional rather than accidental.

## DESIGN.md

```
---
version: "alpha"
name: "Chromatic Aberration / RGB Split"
description: "Design with chromatic aberration RGB split effect. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#FF0000"
secondary: "#00FF00"
tertiary: "#0000FF"
neutral: "#000000"
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

Design with chromatic aberration RGB split effect. Ideal for landing pages, saas. AI-ready template. Chromatic aberration was never supposed to be beautiful. It's a lens failure — light refracting at slightly different wavelengths, producing those telltale red-cyan fringes at the edges of an image. Photographers spent decades engineering it out. Then somewhere around 2012, glitch artists started engineering it back in.

The glitch art movement treated digital errors as raw material. Datamoshing, pixel sorting, signal corruption — all fair game. RGB channel splitting fit right in: take an image, offset the red and blue channels by a few pixels, and suddenly you've got something that feels unstable. Dangerous. Alive. It wasn't decoration. It was a statement about the fragility of digital media.

By the late 2010s, the aesthetic had been fully absorbed by mainstream design. Gaming brands, music platforms, tech startups — everyone wanted that split-channel energy. The effect became shorthand for 'we're technical, we're edgy, we don't play it safe.' Sometimes that's earned. Sometimes it's a crutch. The line between intentional disruption and lazy signaling is thinner than a one-pixel offset.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 6/10 — Expressive

- **Style:** Glitchy, RGB-Split, Retro-Tech, Dynamic
- **Keywords:** RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect
- **Era:** 2020s Retro-Tech
- **Light/Dark:** ✓ Full / ✓ Dark preferred

## Colors

- **Red** (#FF0000) — Error states, destructive actions
- **Green** (#00FF00) — Secondary surface or text color
- **Blue** (#0000FF) — Accent highlight, links and focus states
- **Black** (#000000) — Dark surface, primary background

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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover

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

- Do RGB split visible
- Do Glitch effect controlled
- Do Scan lines subtle
- Do Performance ok
- Do Readability maintained
- Do Reduced motion option

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/chromatic-aberration-rgb-split/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
filter: drop-shadow with offset colors, text-shadow: RGB offset (-2px 0 red, 2px 0 cyan), animation: glitch (random offset), ::before for scanlines, mix-blend-mode: screen for overlays
```

### Variables

```
--rgb-offset: 2px, --red-channel: #FF0000, --green-channel: #00FF00, --blue-channel: #0000FF, --glitch-duration: 0.3s, --scanline-opacity: 0.1
```

### Checklist

☐ RGB split visible, ☐ Glitch effect controlled, ☐ Scan lines subtle, ☐ Performance ok, ☐ Readability maintained, ☐ Reduced motion option

## Colors

Primary

#FF0000

#00FF00

#0000FF

#000000

### Effects

RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover

### Light/Dark

✓ Full / ✓ Dark preferred

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Chromatic Aberration / RGB Split
- **Type:** Glitchy, RGB-Split, Retro-Tech, Dynamic
- **Keywords:** RGB split, color fringing, glitch, retro tech, VHS, analog error, distortion, lens effect
- **Era:** 2020s Retro-Tech
- **Light/Dark:** ✓ Full / ✓ Dark preferred

## Color Palette

- **Primary:** Offset RGB: Red #FF0000, Green #00FF00, Blue #0000FF, Black #000000
- **Secondary:** Neon accents, scan lines, noise overlays, error colors

## Visual Effects

RGB offset animation, glitch timing, scan line movement, noise flicker, distortion on hover

## AI Visual Direction

Design with chromatic aberration RGB split effect. Use: color channel offset (R/G/B), glitch aesthetic, retro tech feel, VHS error look, lens distortion, scan lines, noise overlay, analog imperfection.

## CSS Technical

```css
filter: drop-shadow with offset colors, text-shadow: RGB offset (-2px 0 red, 2px 0 cyan), animation: glitch (random offset), ::before for scanlines, mix-blend-mode: screen for overlays
```

## Design System Variables

```css
--rgb-offset: 2px, --red-channel: #FF0000, --green-channel: #00FF00, --blue-channel: #0000FF, --glitch-duration: 0.3s, --scanline-opacity: 0.1
```

## Implementation Checklist

- ☐ RGB split visible
- ☐ Glitch effect controlled
- ☐ Scan lines subtle
- ☐ Performance ok
- ☐ Readability maintained
- ☐ Reduced motion option

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

[![Vintage Analog / Retro Film](https://designmd.app/images/library/68.png) Retro & Pop ### Vintage Analog / Retro Film](https://designmd.app/library/vintage-analog-retro-film)[![Vaporwave](https://designmd.app/images/library/45.png) Retro & Pop ### Vaporwave](https://designmd.app/library/vaporwave-45)[![Cyberpunk UI](https://designmd.app/images/library/41.png) Futurista & Tech ### Cyberpunk UI](https://designmd.app/library/cyberpunk-ui)[![Cassette Futurism](https://designmd.app/images/library/113.png) Retro & Pop ### Cassette Futurism](https://designmd.app/library/cassette-futurism)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
