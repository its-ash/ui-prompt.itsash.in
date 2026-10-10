# Glassmorphism

- Source: <https://designmd.app/library/glassmorphism>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:22.298Z

Flat & Soft UI2020s Modern

# Glassmorphism

Glassmorphic interface with frosted glass effect. Ideal for overlays, modal dialogs, card components, premium interfaces. AI-ready template.

Frosted glasstransparentblurred backgroundlayeredvibrant backgroundlight sourcedepthmulti-layer

Use case: Overlays, Modal dialogs, Card components, Premium interfaces

![Glassmorphism](https://designmd.app/images/library/3.png)

## Historical Context

Apple didn't invent frosted glass UI, but they made everyone care about it. iOS 7 dropped the skeuomorphism and introduced those translucent panels that let color bleed through from whatever sat behind them. It was polarizing. People hated it, then copied it. By Big Sur, the entire macOS chrome leaned into layered transparency as a spatial cue — and with visionOS, glass became the literal foundation of their spatial computing interface. It's not decoration there; it's architecture. Microsoft took a parallel path with Fluent Design's acrylic material around 2017. Windows 11 doubled down on it. Their approach was more systematic — defined noise textures, tint layers, luminosity blend modes. Less "pretty blur" and more "engineered material." What made glassmorphism actually viable for the web was backdrop-filter landing in all major browsers by 2020. Before that, you were faking it with duplicated backgrounds and clip paths — hacky, brittle, not worth the effort. Now it's a single CSS property. By 2026, it's a mature technique with solid browser support, though you still need to think about what happens when that blur can't render.

## When to Use

Glass works when there's something worth seeing through it. A vibrant gradient, a photo, dynamic content shifting underneath — that's when the translucency earns its keep. Slapping backdrop-filter on a card over a white background? That's just a slightly transparent box. You've added GPU cost for nothing. And it does cost. Backdrop-filter triggers compositing layers and can tank scroll performance on lower-end devices, especially with large blur radii. Use it on focused, contained elements — modals, floating toolbars, notification panels. Not on every card in a grid of forty.

## Design Principles

- Contrast is non-negotiable. Text over glass must hit WCAG AA minimums regardless of what's behind it. Add a semi-opaque tint layer or text shadow — don't rely on the background staying dark enough.
- Always provide a solid fallback. If backdrop-filter isn't supported or the OS has reduced transparency enabled, your UI should still look intentional, not broken.
- Keep blur radii between 10-20px. Below 10 looks like a rendering bug. Above 20 and you've lost the "seeing through" quality that makes glass feel like glass — it's just a colored overlay at that point.
- Use glass to communicate hierarchy, not to look fancy. A floating panel over content? Glass tells the user it's temporary, layered, dismissible. A primary content area? Use a solid surface.
- Mind the borders. A 1px border at rgba(255,255,255,0.15-0.25) sells the illusion of a physical edge catching light. Without it, glass elements bleed into their surroundings and lose definition.

## DESIGN.md

```
---
version: "alpha"
name: "Glassmorphism"
description: "Glassmorphic interface with frosted glass effect. Ideal for overlays, modal dialogs, card components, premium interfaces. AI-ready template."
colors:
primary: "#0080FF"
secondary: "#8B00FF"
tertiary: "#FF1493"
neutral: "#000000"

typography:
h1:
fontFamily: -apple-system, sans-serif
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: -apple-system, sans-serif
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: -apple-system, sans-serif
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Glassmorphic interface with frosted glass effect. Ideal for overlays, modal dialogs, card components, premium interfaces. AI-ready template. Apple didn't invent frosted glass UI, but they made everyone care about it. iOS 7 dropped the skeuomorphism and introduced those translucent panels that let color bleed through from whatever sat behind them. It was polarizing. People hated it, then copied it. By Big Sur, the entire macOS chrome leaned into layered transparency as a spatial cue — and with visionOS, glass became the literal foundation of their spatial computing interface. It's not decoration there; it's architecture.

Microsoft took a parallel path with Fluent Design's acrylic material around 2017. Windows 11 doubled down on it. Their approach was more systematic — defined noise textures, tint layers, luminosity blend modes. Less "pretty blur" and more "engineered material."

What made glassmorphism actually viable for the web was backdrop-filter landing in all major browsers by 2020. Before that, you were faking it with duplicated backgrounds and clip paths — hacky, brittle, not worth the effort. Now it's a single CSS property. By 2026, it's a mature technique with solid browser support, though you still need to think about what happens when that blur can't render.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Translucent, Layered, Vibrant, Blurred
- **Keywords:** Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **** (rgba(255,255,255,0.1-0.3)) — Primary surface or dominant color
- **Electric Blue** (#0080FF) — Secondary accent
- **Neon Purple** (#8B00FF) — Accent color, emphasis elements
- **Vivid Pink** (#FF1493) — Primary text color
- **Teal** (#20B2AA) — Secondary accent

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

Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

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

- Do Backdrop-filter blur 10-20px
- Do Translucent white 15-30% opacity
- Do Subtle border 1px light
- Do Vibrant background verified
- Do Text contrast 4.5:1 checked

## Use Case

Overlays, Modal dialogs, Card components, Premium interfaces
```

[Download DESIGN.md](https://designmd.app/library/glassmorphism/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth
```

### Variables

```
--blur-amount: 15px, --glass-opacity: 0.15, --border-color: rgba(255,255,255,0.2), --background: vibrant color, --text-color: light/dark based on BG
```

### Checklist

☐ Backdrop-filter blur 10-20px, ☐ Translucent white 15-30% opacity, ☐ Subtle border 1px light, ☐ Vibrant background verified, ☐ Text contrast 4.5:1 checked

## Colors

Secondary

#0080FF

#8B00FF

#FF1493

#20B2AA

### Effects

Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

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

- **Name:** Glassmorphism
- **Type:** Translucent, Layered, Vibrant, Blurred
- **Keywords:** Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Translucent white: rgba(255,255,255,0.1-0.3)
- **Secondary:** Vibrant: Electric Blue #0080FF, Neon Purple #8B00FF, Vivid Pink #FF1493, Teal #20B2AA

## Visual Effects

Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

## AI Visual Direction

Design a glassmorphic interface with frosted glass effect. Use backdrop blur (10-20px), translucent overlays (rgba 10-30% opacity), vibrant background colors, subtle borders, light source reflection, layered depth. Perfect for modern overlays and cards.

## CSS Technical

```css
backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth
```

## Design System Variables

```css
--blur-amount: 15px, --glass-opacity: 0.15, --border-color: rgba(255,255,255,0.2), --background: vibrant color, --text-color: light/dark based on BG
```

## Implementation Checklist

- ☐ Backdrop-filter blur 10-20px
- ☐ Translucent white 15-30% opacity
- ☐ Subtle border 1px light
- ☐ Vibrant background verified
- ☐ Text contrast 4.5:1 checked

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

[![Neumorphism](https://designmd.app/images/library/2.png) Flat & Soft UI ### Neumorphism](https://designmd.app/library/neumorphism)[![Spatial UI (VisionOS)](https://designmd.app/images/library/55.png) Futurista & Tech ### Spatial UI (VisionOS)](https://designmd.app/library/spatial-ui-visionos)[![Skeuomorphism](https://designmd.app/images/library/13.png) Flat & Soft UI ### Skeuomorphism](https://designmd.app/library/skeuomorphism)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)

Last synced: 4/1/2026
