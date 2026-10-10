# Space Grotesk Typography

- Source: <https://designmd.app/library/space-grotesk-typography>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:43.310Z

Editorial & TipografiaRetro-Futuristic

# Space Grotesk Typography

Render a 2D isolated text on a solid background. Ideal for developer tools, web3/crypto, tech startups, and data-driven interfaces.. AI-ready template.

Space Grotesktechyretro-futuristicWeb3cryptodata-drivencode DNA

Use case: Developer tools, Web3/crypto, tech startups, and data-driven interfaces.

![Space Grotesk Typography](https://designmd.app/images/library/277.png)

## Historical Context

Space Grotesk emerged from Florian Karsten's 2018 reworking of Space Mono — itself a monospaced typeface commissioned by Google Fonts from Colophon Foundry. Where Space Mono was rigid and utilitarian, Karsten saw the bones of something more versatile. He stripped the monospacing constraint, opened up the proportions, and let the letterforms breathe into a proper proportional sans-serif. The result kept all the personality — those slightly squared curves, the geometric DNA, the subtle nod to 1950s space-age optimism — while becoming genuinely usable for body text and UI. What makes Space Grotesk interesting isn't novelty. It's restraint with character. The typeface sits in a lineage of geometric grotesks (think Eurostile, Bank Gothic, Microgramma) that defined mid-century techno-futurism, but it doesn't cosplay as vintage. The open apertures and generous x-height are thoroughly contemporary. It reads clean at small sizes on screens — a non-negotiable that many "character" typefaces fumble. The variable font axis (weight 300–700) shipped from day one, which tells you Karsten was thinking about systems, not specimens. This is a typeface built for interfaces, not posters hanging in design studios.

## When to Use

Reach for Space Grotesk when your product needs to signal technical credibility without the coldness of Inter or the ubiquity of SF Pro. It thrives in developer tools, aerospace dashboards, science communication, and any startup that wants to feel like it was founded in a garage with a soldering iron. Pair it with a high-contrast serif for editorial contrast, or run it solo across your entire type system — it has the weight range and optical clarity to handle both headlines and dense UI labels without breaking a sweat.

## Design Principles

- Let the geometric quirks do the talking — don't add decorative elements that compete with the typeface's inherent personality. Space Grotesk already has opinions; your layout should frame them, not fight them.
- Use tighter tracking at display sizes (–0.02em to –0.03em) to let the squared terminals create visual rhythm. At body sizes, leave tracking alone — the default metrics are already optimized for screen reading.
- Commit to the weight axis. The jump from Light (300) to Bold (700) is where Space Grotesk builds hierarchy. Avoid using only Medium — you'll flatten the typeface into generic territory.
- Pair with monospaced code blocks using Space Mono for genetic consistency. The shared skeleton means your code snippets won't feel like a foreign element dropped into the layout.
- Dark backgrounds are this typeface's natural habitat. The geometric forms gain definition against dark surfaces, and the retro-futuristic character amplifies when you're not fighting white-page conventions.

## DESIGN.md

```
---
version: "alpha"
name: "Space Grotesk Typography"
description: "Render a 2D isolated text on a solid background. Ideal for developer tools, web3/crypto, tech startups, and data-driven interfaces.. AI-ready template."
colors:
primary: "#FFE3C3"
secondary: "#73001C"
typography:
h1:
fontFamily: Space Grotesk
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Space Grotesk
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
padding: 12px
---

## Overview

Render a 2D isolated text on a solid background. Ideal for developer tools, web3/crypto, tech startups, and data-driven interfaces.. AI-ready template. Space Grotesk emerged from Florian Karsten's 2018 reworking of Space Mono — itself a monospaced typeface commissioned by Google Fonts from Colophon Foundry. Where Space Mono was rigid and utilitarian, Karsten saw the bones of something more versatile. He stripped the monospacing constraint, opened up the proportions, and let the letterforms breathe into a proper proportional sans-serif. The result kept all the personality — those slightly squared curves, the geometric DNA, the subtle nod to 1950s space-age optimism — while becoming genuinely usable for body text and UI.

What makes Space Grotesk interesting isn't novelty. It's restraint with character. The typeface sits in a lineage of geometric grotesks (think Eurostile, Bank Gothic, Microgramma) that defined mid-century techno-futurism, but it doesn't cosplay as vintage. The open apertures and generous x-height are thoroughly contemporary. It reads clean at small sizes on screens — a non-negotiable that many "character" typefaces fumble.

The variable font axis (weight 300–700) shipped from day one, which tells you Karsten was thinking about systems, not specimens. This is a typeface built for interfaces, not posters hanging in design studios.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Techy, retro‑futuristic sans
- **Keywords:** Space Grotesk, techy, retro-futuristic, Web3, crypto, data-driven, code DNA
- **Era:** Retro-Futuristic
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **#FFE3C3** (#FFE3C3) — Primary surface or dominant color
- **#73001C** (#73001C) — Extended palette, decorative use

## Typography

- **Display / Hero:** Space Grotesk — Weight 700, tight tracking, used for headline impact
- **Body:** Space Grotesk — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Space Grotesk — 0.875rem, weight 500, slight letter-spacing
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

Tight tracking (-3%), 90% leading

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
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

- Do Space Grotesk Font
- Do Color: #FFE3C3
- Do Tracking -3%
- Do Background #73001C

## Use Case

Developer tools, Web3/crypto, tech startups, and data-driven interfaces.
```

[Download DESIGN.md](https://designmd.app/library/space-grotesk-typography/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Space Grotesk', sans-serif; color: #FFE3C3; letter-spacing: -0.03em; line-height: 0.9;
```

### Variables

```
--font-family: 'Space Grotesk', --text-color: #FFE3C3, --bg-color: #73001C
```

### Checklist

☐ Space Grotesk Font, ☐ Color: #FFE3C3, ☐ Tracking -3%, ☐ Background #73001C

## Colors

Primary

#FFE3C3

Secondary

#73001C

### Effects

Tight tracking (-3%), 90% leading

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

- **Name:** Space Grotesk Typography
- **Type:** Techy, retro‑futuristic sans
- **Keywords:** Space Grotesk, techy, retro-futuristic, Web3, crypto, data-driven, code DNA
- **Era:** Retro-Futuristic
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** #FFE3C3
- **Secondary:** #73001C

## Visual Effects

Tight tracking (-3%), 90% leading

## AI Visual Direction

Render a 2D isolated text on a solid background. Font Family: @Space Grotesk Font, Color: Hex #FFE3C3, Background: #73001C, Tracking: Tight (-3%), Leading: 90%, Alignment: Strictly Left Aligned, Position: Center, Scale: 50%.

## CSS Technical

```css
font-family: 'Space Grotesk', sans-serif; color: #FFE3C3; letter-spacing: -0.03em; line-height: 0.9;
```

## Design System Variables

```css
--font-family: 'Space Grotesk', --text-color: #FFE3C3, --bg-color: #73001C
```

## Implementation Checklist

- ☐ Space Grotesk Font
- ☐ Color: #FFE3C3
- ☐ Tracking -3%
- ☐ Background #73001C

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

Last synced: 4/1/2026
