# Cassette Futurism

- Source: <https://designmd.app/library/cassette-futurism>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:58:10.300Z

Retro & Pop1970s-1980s Retrofuture

# Cassette Futurism

Cassette futurism landing page. Ideal for landing pages, saas. AI-ready template.

cassette futurismretro-futuristicanalogCRTscanlinesVHStape decklo-fi80s techcommand line

Use case: Landing pages, SaaS

![Cassette Futurism](https://designmd.app/images/library/113.png)

## Historical Context

Before touchscreens flattened everything, the future looked physical. Ridley Scott's Alien gave us interfaces you could punch — toggle switches, amber phosphor displays, keyboards with travel. Kubrick's 2001 had screens embedded in padded walls like instruments in a cockpit. The future wasn't sleek. It was engineered. Cassette futurism lives in that gap between what designers in the 1970s and 80s imagined tomorrow would look like and what actually arrived. It's the aesthetic of futures that never happened — where data still lived on magnetic tape, where monitors had scan lines, where you heard the machine thinking. The appeal is tactile. Every interaction had weight, friction, consequence. This became a deliberate design language around 2015, when indie game developers and digital artists started mining that visual vocabulary — not out of laziness, but because those chunky bezels and blinking LEDs communicate something flat design never could: that technology is a thing you operate, not a surface you passively consume.

## When to Use

Reach for cassette futurism when your project needs to feel handmade and mechanical in a world of frictionless glass. It works for indie games that want atmosphere without AAA budgets, retro tech brands building identity around craft and durability, nostalgia products targeting the 30-45 demographic, and sci-fi projects that reject the sterile Apple-store vision of the future. Skip it if your audience expects polish and speed — this aesthetic deliberately slows things down.

## Design Principles

- Physical metaphors over abstract ones — buttons should look like they depress, switches should toggle, screens should emit light rather than display it
- Imperfection is information — scan lines, noise, slight misalignment, and warm color drift all signal that a system is alive and analog
- Constrained color palettes — amber/green monochrome, limited RGB, or desaturated earth tones punctuated by single-color indicator lights
- Typography that respects the grid — monospaced, pixel-snapped, or dot-matrix letterforms that acknowledge the display medium
- Sound and motion carry weight — interactions click, hum, and whir; transitions feel mechanical rather than eased

## DESIGN.md

```
---
version: "alpha"
name: "Cassette Futurism"
description: "Cassette futurism landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#33FF00"
secondary: "#D2B48C"
tertiary: "#333333"
neutral: "#FFB000"
surface: "#CC0000"
accent: "#999999"
typography:
h1:
fontFamily: VT323
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: VT323
fontSize: 1rem
fontWeight: 400
spacing:
sm: 4.0px
md: 8.0px
lg: 16.0px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Cassette futurism landing page. Ideal for landing pages, saas. AI-ready template. Before touchscreens flattened everything, the future looked physical. Ridley Scott's Alien gave us interfaces you could punch — toggle switches, amber phosphor displays, keyboards with travel. Kubrick's 2001 had screens embedded in padded walls like instruments in a cockpit. The future wasn't sleek. It was engineered.

Cassette futurism lives in that gap between what designers in the 1970s and 80s imagined tomorrow would look like and what actually arrived. It's the aesthetic of futures that never happened — where data still lived on magnetic tape, where monitors had scan lines, where you heard the machine thinking. The appeal is tactile. Every interaction had weight, friction, consequence.

This became a deliberate design language around 2015, when indie game developers and digital artists started mining that visual vocabulary — not out of laziness, but because those chunky bezels and blinking LEDs communicate something flat design never could: that technology is a thing you operate, not a surface you passively consume.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 6/10 — Expressive

- **Style:** Retro-Futuristic, Analog-Digital, Nostalgic
- **Keywords:** cassette futurism, retro-futuristic, analog, CRT, scanlines, VHS, tape deck, lo-fi, 80s tech, command line
- **Era:** 1970s-1980s Retrofuture
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **CRT Green** (#33FF00) — Primary surface or dominant color
- **Warm Beige** (#D2B48C) — Secondary surface or text color
- **Charcoal** (#333333) — Dark surface, primary background
- **Phosphor Amber** (#FFB000) — Warning states, attention indicators
- **Tape Red** (#CC0000) — Error states, destructive actions
- **Static Grey** (#999999) — Secondary text, borders, muted elements
- **Deep Navy** (#1B2838) — Extended palette, decorative use
- **Off-White** (#E8E0D0) — Secondary surface

## Typography

- **Display / Hero:** VT323 — Weight 700, tight tracking, used for headline impact
- **Body:** VT323 — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** VT323 — 0.875rem, weight 500, slight letter-spacing
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

CRT scanline overlay, VHS tracking distortion, phosphor glow, chunky pixel borders, tape reel animations, analog meter gauges, command-line text effects, LED dot matrix displays

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

- Do CRT scanline overlay
- Do VHS tracking distortion
- Do Phosphor glow
- Do Chunky pixel borders
- Do Tape reel animations
- Do Command-line text effects

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/cassette-futurism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #1B2838, color: #33FF00, font-family: 'VT323', monospace, border: 3px solid #FFB000, box-shadow: 0 0 15px rgba(51,255,0,0.3), text-shadow: 0 0 5px #33FF00, animation: scanline 0.1s linear infinite, background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px), filter: brightness(1.1) contrast(1.2)
```

### Variables

```
--crt-green-cassette: #33FF00, --phosphor-amber-cassette: #FFB000, --charcoal-cassette: #333333, --deep-navy-cassette: #1B2838, --scanline-gap: 4px, --font-cassette: 'VT323', monospace
```

### Checklist

☐ CRT scanline overlay, ☐ VHS tracking distortion, ☐ Phosphor glow, ☐ Chunky pixel borders, ☐ Tape reel animations, ☐ Command-line text effects

## Colors

Primary

#33FF00

#D2B48C

#333333

#FFB000

Secondary

#CC0000

#999999

#1B2838

#E8E0D0

### Effects

CRT scanline overlay, VHS tracking distortion, phosphor glow, chunky pixel borders, tape reel animations, analog meter gauges, command-line text effects, LED dot matrix displays

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

- **Name:** Cassette Futurism
- **Type:** Retro-Futuristic, Analog-Digital, Nostalgic
- **Keywords:** cassette futurism, retro-futuristic, analog, CRT, scanlines, VHS, tape deck, lo-fi, 80s tech, command line
- **Era:** 1970s-1980s Retrofuture
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** CRT Green #33FF00, Warm Beige #D2B48C, Charcoal #333333, Phosphor Amber #FFB000
- **Secondary:** Tape Red #CC0000, Static Grey #999999, Deep Navy #1B2838, Off-White #E8E0D0

## Visual Effects

CRT scanline overlay, VHS tracking distortion, phosphor glow, chunky pixel borders, tape reel animations, analog meter gauges, command-line text effects, LED dot matrix displays

## AI Visual Direction

Design a cassette futurism landing page. Use: CRT green and phosphor amber, CRT scanline overlay, VHS tracking distortion, phosphor glow, chunky pixel borders, tape reel animations, analog meter gauges, command-line text effects.

## CSS Technical

```css
background: #1B2838, color: #33FF00, font-family: 'VT323', monospace, border: 3px solid #FFB000, box-shadow: 0 0 15px rgba(51,255,0,0.3), text-shadow: 0 0 5px #33FF00, animation: scanline 0.1s linear infinite, background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px), filter: brightness(1.1) contrast(1.2)
```

## Design System Variables

```css
--crt-green-cassette: #33FF00, --phosphor-amber-cassette: #FFB000, --charcoal-cassette: #333333, --deep-navy-cassette: #1B2838, --scanline-gap: 4px, --font-cassette: 'VT323', monospace
```

## Implementation Checklist

- ☐ CRT scanline overlay
- ☐ VHS tracking distortion
- ☐ Phosphor glow
- ☐ Chunky pixel borders
- ☐ Tape reel animations
- ☐ Command-line text effects

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

[![Chromatic Aberration / RGB Split](https://designmd.app/images/library/67.png) Futurista & Tech ### Chromatic Aberration / RGB Split](https://designmd.app/library/chromatic-aberration-rgb-split)[![Vintage Analog / Retro Film](https://designmd.app/images/library/68.png) Retro & Pop ### Vintage Analog / Retro Film](https://designmd.app/library/vintage-analog-retro-film)[![Vaporwave](https://designmd.app/images/library/45.png) Retro & Pop ### Vaporwave](https://designmd.app/library/vaporwave-45)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Neumorphism](https://designmd.app/images/library/2.png) Flat & Soft UI ### Neumorphism](https://designmd.app/library/neumorphism)

Last synced: 4/1/2026
