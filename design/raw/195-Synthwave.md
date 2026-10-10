# Synthwave

- Source: <https://designmd.app/library/synthwave>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:47.315Z

Retro & Pop1980s Retro-Futurism Revival

# Synthwave

Synthwave landing page with dramatic neon sunset gradients and retro-futuristic 80s aesthetics. Ideal for capas de álbuns, promoções de marca, visuais neon, eventos de música eletrônica. AI-ready template.

Synthwaveneon sunsetretro-futuristicgrid linespalm treesarcade80s electronicoutrunmonoline neonchrome

Use case: Album covers, Brand promotions, Neon visuals, Electronic music events

![Synthwave](https://designmd.app/images/library/313.png)

## Historical Context

Synthwave didn't emerge from a vacuum — it crawled out of late-2000s internet culture, where bedroom producers on Bandcamp and SoundCloud started obsessively reconstructing the sonic palette of 1980s film scores. Vangelis, Tangerine Dream, Jan Hammer — these were the patron saints. But the visual language mattered just as much as the music. The aesthetic crystallized around VHS tracking lines, chrome typography, and that impossibly saturated magenta-to-cyan gradient sky that never existed in any real sunset. What makes Synthwave interesting as a design movement is its relationship with nostalgia for something most practitioners never experienced firsthand. It's a fantasy of the '80s filtered through Drive (2011), Kavinsky's "Nightcall," and the pixel art of early Hotline Miami. The grid receding into a horizon line, the palm tree silhouettes, the DeLorean — these aren't memories, they're constructed mythology. The palette is deceptively narrow but emotionally potent. Deep navy and black backgrounds create depth. Neon pinks, electric blues, and hot magentas provide the energy. Chrome and holographic accents add that crucial sense of expensive futurism. When it works, it feels like driving through a city that only exists at 2 AM.

## When to Use

Synthwave earns its place when your product lives after dark. Music platforms, gaming interfaces, nightlife brands, retro-themed launches — anywhere the audience already associates neon with identity. It's killer for album art generators, streaming UI dark modes, and anything targeting the 25-40 demographic that grew up on Tron Legacy and Far Cry: Blood Dragon. Avoid it for anything requiring daytime credibility — healthcare, finance, children's products. The aesthetic has one gear: cool, nocturnal, slightly dangerous.

## Design Principles

- Darkness is your canvas — start with near-black backgrounds and let neon elements earn their luminosity through contrast, never flood the layout with competing light sources
- Restrict your glow palette to 2-3 neon accents maximum; the power of Synthwave comes from restraint against void, not from saturating every surface
- Embrace the grid as both literal motif and structural backbone — perspective grids, scan lines, and horizontal striping create depth without requiring complex illustration
- Typography should feel machined and precise: extended sans-serifs, chrome effects, and generous letter-spacing evoke the era without resorting to novelty display faces
- Motion follows light physics — elements should pulse, flicker, and bloom like actual neon gas, not bounce or slide like generic UI transitions

## DESIGN.md

```
---
version: "alpha"
name: "Synthwave"
description: "Synthwave landing page with dramatic neon sunset gradients and retro-futuristic 80s aesthetics. Ideal for capas de álbuns, promoções de marca, visuais neon, eventos de música eletrônica. AI-ready template."
colors:
primary: "#FF6B35"
secondary: "#FF1493"
tertiary: "#2D1B69"
neutral: "#1B1464"
surface: "#00FFFF"
accent: "#C0C0C0"
typography:
h1:
fontFamily: Orbitron
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Orbitron
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

Synthwave landing page with dramatic neon sunset gradients and retro-futuristic 80s aesthetics. Ideal for capas de álbuns, promoções de marca, visuais neon, eventos de música eletrônica. AI-ready template. Synthwave didn't emerge from a vacuum — it crawled out of late-2000s internet culture, where bedroom producers on Bandcamp and SoundCloud started obsessively reconstructing the sonic palette of 1980s film scores. Vangelis, Tangerine Dream, Jan Hammer — these were the patron saints. But the visual language mattered just as much as the music. The aesthetic crystallized around VHS tracking lines, chrome typography, and that impossibly saturated magenta-to-cyan gradient sky that never existed in any real sunset.

What makes Synthwave interesting as a design movement is its relationship with nostalgia for something most practitioners never experienced firsthand. It's a fantasy of the '80s filtered through Drive (2011), Kavinsky's "Nightcall," and the pixel art of early Hotline Miami. The grid receding into a horizon line, the palm tree silhouettes, the DeLorean — these aren't memories, they're constructed mythology.

The palette is deceptively narrow but emotionally potent. Deep navy and black backgrounds create depth. Neon pinks, electric blues, and hot magentas provide the energy. Chrome and holographic accents add that crucial sense of expensive futurism. When it works, it feels like driving through a city that only exists at 2 AM.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Neon Sunset, Retro-Futuristic, Grid, Arcade
- **Keywords:** Synthwave, neon sunset, retro-futuristic, grid lines, palm trees, arcade, 80s electronic, outrun, monoline neon, chrome
- **Era:** 1980s Retro-Futurism Revival
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Colors

- **Sunset Orange** (#FF6B35) — Warm accent, call-to-action secondary
- **Neon Pink** (#FF1493) — Primary text color
- **Deep Purple** (#2D1B69) — Accent color, emphasis elements
- **Horizon Blue** (#1B1464) — Accent highlight, links and focus states
- **Neon Cyan** (#00FFFF) — Secondary accent
- **Chrome Silver** (#C0C0C0) — Extended palette, decorative use
- **Hot Magenta** (#FF00FF) — Decorative accent, highlight elements
- **Dark Navy** (#0A0A2E) — Deep contrast surface

## Typography

- **Display / Hero:** Orbitron — Weight 700, tight tracking, used for headline impact
- **Body:** Orbitron — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Orbitron — 0.875rem, weight 500, slight letter-spacing
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

Neon grid perspective floor (CSS 3D transform), sunset gradient sky backgrounds, neon monoline borders (1-2px with glow), palm tree silhouette SVG decorations, chrome text effects, retro scanline overlay, pulsing neon glow animations

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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

- Do Sunset gradient sky background
- Do Neon perspective grid floor
- Do Neon monoline borders with glow
- Do Palm tree SVG silhouettes
- Do Chrome/metallic text effects
- Do Retro scanline overlay
- Do Bold futuristic typography
- Do Responsive with maintained neon atmosphere

## Use Case

Album covers, Brand promotions, Neon visuals, Electronic music events
```

[Download DESIGN.md](https://designmd.app/library/synthwave/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Orbitron', sans-serif, background: linear-gradient(to bottom, #FF6B35, #FF1493, #2D1B69, #0A0A2E), color: #00FFFF, border: 2px solid #FF1493, box-shadow: 0 0 20px rgba(255,20,147,0.5), text-shadow: 0 0 15px rgba(0,255,255,0.5), perspective: 500px for grid floor, transform: rotateX(60deg)
```

### Variables

```
--color-sunset: #FF6B35, --color-pink: #FF1493, --color-purple: #2D1B69, --color-blue: #1B1464, --color-cyan: #00FFFF, --font-display: 'Orbitron', --glow-pink: rgba(255,20,147,0.5), --glow-cyan: rgba(0,255,255,0.5), --spacing: 2rem
```

### Checklist

☐ Sunset gradient sky background, ☐ Neon perspective grid floor, ☐ Neon monoline borders with glow, ☐ Palm tree SVG silhouettes, ☐ Chrome/metallic text effects, ☐ Retro scanline overlay, ☐ Bold futuristic typography, ☐ Responsive with maintained neon atmosphere

## Colors

Primary

#FF6B35

#FF1493

#2D1B69

#1B1464

Secondary

#00FFFF

#C0C0C0

#FF00FF

#0A0A2E

### Effects

Neon grid perspective floor (CSS 3D transform), sunset gradient sky backgrounds, neon monoline borders (1-2px with glow), palm tree silhouette SVG decorations, chrome text effects, retro scanline overlay, pulsing neon glow animations

### Light/Dark

✗ Not Recommended / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Synthwave
- **Type:** Neon Sunset, Retro-Futuristic, Grid, Arcade
- **Keywords:** Synthwave, neon sunset, retro-futuristic, grid lines, palm trees, arcade, 80s electronic, outrun, monoline neon, chrome
- **Era:** 1980s Retro-Futurism Revival
- **Light/Dark:** ✗ Not Recommended / ✓ Full

## Color Palette

- **Primary:** Sunset Orange #FF6B35, Neon Pink #FF1493, Deep Purple #2D1B69, Horizon Blue #1B1464
- **Secondary:** Neon Cyan #00FFFF, Chrome Silver #C0C0C0, Hot Magenta #FF00FF, Dark Navy #0A0A2E

## Visual Effects

Neon grid perspective floor (CSS 3D transform), sunset gradient sky backgrounds, neon monoline borders (1-2px with glow), palm tree silhouette SVG decorations, chrome text effects, retro scanline overlay, pulsing neon glow animations

## AI Visual Direction

Design a synthwave landing page with dramatic neon sunset gradients and retro-futuristic 80s aesthetics. Use sunset orange, neon pink, deep purple, horizon blue. Apply neon perspective grid floor, sunset gradient sky, neon monoline borders with glow, palm tree SVG silhouettes, chrome text effects, retro scanlines. Typography should be bold and futuristic. Outrun arcade atmosphere.

## CSS Technical

```css
font-family: 'Orbitron', sans-serif, background: linear-gradient(to bottom, #FF6B35, #FF1493, #2D1B69, #0A0A2E), color: #00FFFF, border: 2px solid #FF1493, box-shadow: 0 0 20px rgba(255,20,147,0.5), text-shadow: 0 0 15px rgba(0,255,255,0.5), perspective: 500px for grid floor, transform: rotateX(60deg)
```

## Design System Variables

```css
--color-sunset: #FF6B35, --color-pink: #FF1493, --color-purple: #2D1B69, --color-blue: #1B1464, --color-cyan: #00FFFF, --font-display: 'Orbitron', --glow-pink: rgba(255,20,147,0.5), --glow-cyan: rgba(0,255,255,0.5), --spacing: 2rem
```

## Implementation Checklist

- ☐ Sunset gradient sky background
- ☐ Neon perspective grid floor
- ☐ Neon monoline borders with glow
- ☐ Palm tree SVG silhouettes
- ☐ Chrome/metallic text effects
- ☐ Retro scanline overlay
- ☐ Bold futuristic typography
- ☐ Responsive with maintained neon atmosphere

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

[![Vaporwave](https://designmd.app/images/library/314.png) Retro & Pop ### Vaporwave](https://designmd.app/library/vaporwave-314)[![Cyber Core](https://designmd.app/images/library/312.png) Futurista & Tech ### Cyber Core](https://designmd.app/library/cyber-core)[![Y2K](https://designmd.app/images/library/309.png) Retro & Pop ### Y2K](https://designmd.app/library/y2k)[![Pixel Art 8-bit](https://designmd.app/images/library/295.png) Retro & Pop ### Pixel Art 8-bit](https://designmd.app/library/pixel-art-8-bit)[![Synthwave](https://designmd.app/images/library/313.png) Retro & Pop ### Synthwave](https://designmd.app/library/synthwave)

Last synced: 4/1/2026
