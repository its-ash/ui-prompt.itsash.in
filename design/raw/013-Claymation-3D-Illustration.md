# Claymation 3D Illustration

- Source: <https://designmd.app/library/claymation-3d-illustration>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:14:47.337Z

Retro & PopDigital Craft

# Claymation 3D Illustration

Claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic. Ideal for landing pages, modern websites. AI-ready template.

clayclaymation3dplasticinesoftroundedcutehandmade

Use case: Landing pages, Modern websites

![Claymation 3D Illustration](https://designmd.app/images/library/180.png)

## Historical Context

Claymation didn't start as a design trend — it started as a craft. Will Vinton's Californian Raisins, Aardman's Wallace & Gromit, Art Clokey's Gumby. These were physical objects under hot lights, moved frame by frame by people with sore thumbs. The aesthetic carried weight because it literally had weight. Gravity pulled on those little clay bodies. When 3D software matured enough to fake subsurface scattering and fingerprint impressions, designers started borrowing the language without the labor. Around 2018-2020, the style exploded in UI and branding — partly as a reaction against flat design's sterility, partly because rendering engines finally made it cheap. Blender democratized it completely. What makes it stick: imperfection is baked into the DNA. The slightly lumpy forms, the visible tool marks, the matte surfaces that absorb light instead of bouncing it. It reads as handmade even when it's procedural. That tension — digital craft pretending to be analog craft — gives it a warmth that geometric 3D never achieves.

## When to Use

When your product needs to feel approachable before it feels sophisticated. Children's brands, obviously — but also creative tools, onboarding flows, empty states, anything where you're asking someone to start something new and potentially intimidating. The tactile quality lowers psychological barriers. It says: this is play, not work. Avoid it for anything requiring authority or precision. A banking app in claymation is a banking app nobody trusts.

## Design Principles

- Embrace imperfection deliberately — fingerprints, tool marks, slightly uneven surfaces. Perfected clay looks like plastic, and plastic is the opposite of what you want here.
- Keep lighting soft and diffused. Harsh shadows kill the toy-like quality. Think overcast day, not studio strobe.
- Limit your palette to 4-5 saturated colors per scene. Clay works in bold, confident chunks — gradients and subtle tones fight the medium's nature.
- Scale matters: make objects feel holdable. The magic of claymation is that everything looks like it could fit in your palm. Lose that, lose the charm.
- Animate with intention — clay moves slowly, squashes broadly, settles with weight. If your motion feels snappy and digital, you've broken the illusion entirely.

## DESIGN.md

```
---
version: "alpha"
name: "Claymation 3D Illustration"
description: "Claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#AEE2F6"
secondary: "#4A3B32"
tertiary: "#FF8A5B"
neutral: "#FFE082"
surface: "#AED581"
accent: "#FFFFFF"
typography:
h1:
fontFamily: Fredoka One
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Fredoka One
fontSize: 1rem
fontWeight: 400
rounded:
sm: 25px
md: 50px
lg: 75px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic. Ideal for landing pages, modern websites. AI-ready template. Claymation didn't start as a design trend — it started as a craft. Will Vinton's Californian Raisins, Aardman's Wallace & Gromit, Art Clokey's Gumby. These were physical objects under hot lights, moved frame by frame by people with sore thumbs. The aesthetic carried weight because it literally had weight. Gravity pulled on those little clay bodies.

When 3D software matured enough to fake subsurface scattering and fingerprint impressions, designers started borrowing the language without the labor. Around 2018-2020, the style exploded in UI and branding — partly as a reaction against flat design's sterility, partly because rendering engines finally made it cheap. Blender democratized it completely.

What makes it stick: imperfection is baked into the DNA. The slightly lumpy forms, the visible tool marks, the matte surfaces that absorb light instead of bouncing it. It reads as handmade even when it's procedural. That tension — digital craft pretending to be analog craft — gives it a warmth that geometric 3D never achieves.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Whimsical, Approachable, Warm
- **Keywords:** clay, claymation, 3d, plasticine, soft, rounded, cute, handmade
- **Era:** Digital Craft
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#AEE2F6) — Primary background surface
- **Text** (#4A3B32) — Primary text color
- **Accent** (#FF8A5B) — Primary accent, CTAs and interactive elements
- **Soft Yellow** (#FFE082) — Warning states, attention indicators
- **Grass Green** (#AED581) — Success states, positive indicators
- **Cloud White** (#FFFFFF) — Secondary surface

## Typography

- **Display / Hero:** Fredoka One — Weight 700, tight tracking, used for headline impact
- **Body:** Fredoka One — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Fredoka One — 0.875rem, weight 500, slight letter-spacing
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

Stop-motion aesthetic, plasticine characters, button embellishments, speech bubbles, soft matte clay, surface imperfections, soft global illumination.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 25px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (25px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (25px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Soft rounded shapes (everything)
- Do Pastel/Friendly colors
- Do Shadows indicating depth/thickness
- Do Clay/Plasticine texture
- Do Playful topography

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/claymation-3d-illustration/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background-color: #AEE2F6; color: #4A3B32; font-family: 'Fredoka One', cursive; border-radius: 25px; box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
```

### Variables

```
--sky-blue: #AEE2F6, --clay-orange: #FF8A5B, --clay-brown: #4A3B32, --radius-soft: 30px, --font-round: 'Fredoka One', cursive
```

### Checklist

☐ Soft rounded shapes (everything), ☐ Pastel/Friendly colors, ☐ Shadows indicating depth/thickness, ☐ Clay/Plasticine texture, ☐ Playful topography

## Colors

Primary

#AEE2F6

#4A3B32

#FF8A5B

Secondary

#FFE082

#AED581

#FFFFFF

### Effects

Stop-motion aesthetic, plasticine characters, button embellishments, speech bubbles, soft matte clay, surface imperfections, soft global illumination.

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

- **Name:** Claymation 3D Illustration
- **Type:** Whimsical, Approachable, Warm
- **Keywords:** clay, claymation, 3d, plasticine, soft, rounded, cute, handmade
- **Era:** Digital Craft
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Background #AEE2F6, Text #4A3B32, Accent #FF8A5B
- **Secondary:** Soft Yellow #FFE082, Grass Green #AED581, Cloud White #FFFFFF

## Visual Effects

Stop-motion aesthetic, plasticine characters, button embellishments, speech bubbles, soft matte clay, surface imperfections, soft global illumination.

## AI Visual Direction

claymation landing page, plasticine style, 3d clay illustration, soft lighting, rounded shapes, cute and friendly, stop motion aesthetic.

## CSS Technical

```css
background-color: #AEE2F6; color: #4A3B32; font-family: 'Fredoka One', cursive; border-radius: 25px; box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
```

## Design System Variables

```css
--sky-blue: #AEE2F6, --clay-orange: #FF8A5B, --clay-brown: #4A3B32, --radius-soft: 30px, --font-round: 'Fredoka One', cursive
```

## Implementation Checklist

- ☐ Soft rounded shapes (everything)
- ☐ Pastel/Friendly colors
- ☐ Shadows indicating depth/thickness
- ☐ Clay/Plasticine texture
- ☐ Playful topography

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

[![Kawaii Pastel Pop](https://designmd.app/images/library/184.png) Retro & Pop ### Kawaii Pastel Pop](https://designmd.app/library/kawaii-pastel-pop)[![Voxel Gamified Isometric](https://designmd.app/images/library/187.png) Retro & Pop ### Voxel Gamified Isometric](https://designmd.app/library/voxel-gamified-isometric)[![Retro-Comic Action Blueprint](https://designmd.app/images/library/178.png) Retro & Pop ### Retro-Comic Action Blueprint](https://designmd.app/library/retro-comic-action-blueprint)[![Manga Instructional Comic](https://designmd.app/images/library/179.png) Retro & Pop ### Manga Instructional Comic](https://designmd.app/library/manga-instructional-comic)[![Risograph Zine Aesthetic](https://designmd.app/images/library/181.png) Retro & Pop ### Risograph Zine Aesthetic](https://designmd.app/library/risograph-zine-aesthetic)

Last synced: 4/1/2026
