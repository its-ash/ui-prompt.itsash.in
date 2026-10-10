# Scatterbrain

- Source: <https://designmd.app/library/scatterbrain>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:43.335Z

Arte & Ilustracao2020s Modern

# Scatterbrain

Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Shrikhand typography. off-white paper with a full pastel sticky-note palette (yellow, blue, pink, gree. Best for brainstorm / workshop, creative agency credentials, design-thinking session. AI-ready design system.

Post-it sticky notesCaveatrotated cardspastelbrainstormworkshopplayfulwarm

Use case: brainstorm / workshop, creative agency credentials, design-thinking session, ideation pitch, art-direction review

![Scatterbrain](https://designmd.app/images/library/449.png)

## Historical Context

The sticky note is one of design's happiest accidents. Spencer Silver's failed superglue became Art Fry's bookmark, and by the mid-1980s every brainstorm wall in every agency looked like a Mondrian made of pastel squares. The physical act of scribbling on a Post-it — fast, impermanent, deliberately rough — gave teams permission to think badly before thinking well. Ideas didn't need to be precious when they cost three cents and could be crumpled in a fist. Digital tools spent years trying to replicate that energy and mostly failed. Miro boards and FigJam canvases feel clinical — too aligned, too pixel-perfect. What makes a real brainstorm wall work is the chaos: cards at odd angles, overlapping edges, handwriting that ranges from legible to hieroglyphic. Scatterbrain leans into that disorder on purpose. The Caveat typeface is the linchpin here. Its wobbly baseline and uneven letter spacing read as human thought captured mid-flight, not a font pretending to be handwriting. Pair it with slight card rotations — two to five degrees, never uniform — and you get a layout that feels like someone actually used it, not just designed it.

## When to Use

Reach for Scatterbrain when the interface needs to communicate that nothing is final yet. Ideation dashboards, brainstorming canvases, creative briefs in draft mode, retrospective boards — anywhere rigidity would kill the vibe. It works beautifully for note-taking apps that want to feel more analog than digital, and for planning tools where the mess IS the method. Avoid it for anything requiring hierarchy or scanability at speed. This pattern trades efficiency for creative permission.

## Design Principles

- Embrace controlled chaos — rotations should feel random but stay within a tight 2-5° range to avoid actual illegibility
- Caveat carries the personality; never substitute a geometric sans or the entire illusion collapses into a wireframe
- Overlap is information — cards that touch or stack imply relationship without needing explicit connectors or arrows
- Color should be Post-it-grade: saturated pastels, never pure white, never dark backgrounds that break the paper metaphor
- Resist the urge to snap-to-grid on interaction; if cards auto-align when dropped, you've killed the reason this pattern exists

## DESIGN.md

```
---
version: "alpha"
name: "Scatterbrain"
description: "Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Shrikhand typography. off-white paper with a full pastel sticky-note palette (yellow, blue, pink, gree. Best for brainstorm / workshop, creative agency credentials, design-thinking session. AI-ready design system."
colors:
primary: "#FFE066"
secondary: "#A5D8FF"
tertiary: "#FFC9C9"
neutral: "#B2F2BB"
surface: "#FFCC80"
accent: "#D0BFFF"
typography:
h1:
fontFamily: Caveat
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Caveat
fontSize: 1rem
fontWeight: 400
rounded:
sm: 4px
md: 8px
lg: 12px
spacing:
sm: 1.0rem
md: 2.0rem
lg: 4.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Scatterbrain — Post-it inspired: pastel sticky notes, Caveat handwriting, Shrikhand and Zilla Slab type stack. Shrikhand typography. off-white paper with a full pastel sticky-note palette (yellow, blue, pink, gree. Best for brainstorm / workshop, creative agency credentials, design-thinking session. AI-ready design system. The sticky note is one of design's happiest accidents. Spencer Silver's failed superglue became Art Fry's bookmark, and by the mid-1980s every brainstorm wall in every agency looked like a Mondrian made of pastel squares. The physical act of scribbling on a Post-it — fast, impermanent, deliberately rough — gave teams permission to think badly before thinking well. Ideas didn't need to be precious when they cost three cents and could be crumpled in a fist.

Digital tools spent years trying to replicate that energy and mostly failed. Miro boards and FigJam canvases feel clinical — too aligned, too pixel-perfect. What makes a real brainstorm wall work is the chaos: cards at odd angles, overlapping edges, handwriting that ranges from legible to hieroglyphic. Scatterbrain leans into that disorder on purpose.

The Caveat typeface is the linchpin here. Its wobbly baseline and uneven letter spacing read as human thought captured mid-flight, not a font pretending to be handwriting. Pair it with slight card rotations — two to five degrees, never uniform — and you get a layout that feels like someone actually used it, not just designed it.

- Density: 8/10 — Dense
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Brainstorm, Sticky-Note, Handwritten, Playful
- **Keywords:** Post-it sticky notes, Caveat, rotated cards, pastel, brainstorm, workshop, playful, warm
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Yellow** (#FFE066) — Primary surface or dominant color
- **Blue** (#A5D8FF) — Accent highlight, links and focus states
- **Pink** (#FFC9C9) — Secondary accent
- **Green** (#B2F2BB) — Accent color, emphasis elements
- **Orange** (#FFCC80) — Extended palette, decorative use
- **Purple** (#D0BFFF) — Background alternate
- **Paper** (#F7F5F0) — Muted text / borders
- **Ink** (#2D2A26) — Extended palette

## Typography

- **Display / Hero:** Shrikhand — Weight 700, tight tracking, used for headline impact
- **Body:** Zilla Slab — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Zilla Slab — 0.875rem, weight 500, slight letter-spacing
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

display font Shrikhand for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, rotated post-it cards (±3–6deg), Caveat handwriting, pastel sticky-note palette, dense grid, compact 1.2rem gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Shrikhand display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Hand-drawn / crafted SVG decorations present
- Do Mobile responsive layout (stack below 768px)

## Use Case

brainstorm / workshop, creative agency credentials, design-thinking session, ideation pitch, art-direction review
```

[Download DESIGN.md](https://designmd.app/library/scatterbrain/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Caveat', cursive; background: #F5F0E0; color: #2A2A2A; transform: rotate(-2deg); box-shadow: 3px 3px 8px rgba(0,0,0,0.15); border-radius: 4px
```

### Variables

```
--bg: #F7F5F0, --fg: #2D2A26, --accent: #FFE066, --font-display: 'Shrikhand', --font-body: 'Zilla Slab', --radius: 4px, --spacing: 1rem
```

### Checklist

☐ Shrikhand display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Hand-drawn / crafted SVG decorations present, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#FFE066

#A5D8FF

#FFC9C9

Secondary

#B2F2BB

#FFCC80

#D0BFFF

#F7F5F0

### Effects

display font Shrikhand for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, rotated post-it cards (±3–6deg), Caveat handwriting, pastel sticky-note palette, dense grid, compact 1.2rem gaps

### Light/Dark

✓ Full / ✗ None

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Scatterbrain
- **Type:** Brainstorm, Sticky-Note, Handwritten, Playful
- **Keywords:** Post-it sticky notes, Caveat, rotated cards, pastel, brainstorm, workshop, playful, warm
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Yellow #FFE066, Blue #A5D8FF, Pink #FFC9C9
- **Secondary:** Green #B2F2BB, Orange #FFCC80, Purple #D0BFFF, Paper #F7F5F0

## Visual Effects

display font Shrikhand for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, rotated post-it cards (±3–6deg), Caveat handwriting, pastel sticky-note palette, dense grid, compact 1.2rem gaps

## AI Visual Direction

Design a post-it brainstorm board layout. Use: warm cream (#F5F0E0), pastel sticky-note card colors, Caveat handwriting font, cards with slight CSS rotation (transform: rotate(-2deg) to rotate(3deg)), 3px offset shadows. Intentionally messy and warm.

## CSS Technical

```css
font-family: 'Caveat', cursive; background: #F5F0E0; color: #2A2A2A; transform: rotate(-2deg); box-shadow: 3px 3px 8px rgba(0,0,0,0.15); border-radius: 4px
```

## Design System Variables

```css
--bg: #F7F5F0, --fg: #2D2A26, --accent: #FFE066, --font-display: 'Shrikhand', --font-body: 'Zilla Slab', --radius: 4px, --spacing: 1rem
```

## Implementation Checklist

- ☐ Shrikhand display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Hand-drawn / crafted SVG decorations present
- ☐ Mobile responsive layout (stack below 768px)

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

[![Dark Mode (OLED)](https://designmd.app/images/library/7.png) Temas & Verticais ### Dark Mode (OLED)](https://designmd.app/library/dark-mode-oled)[![Flat Design](https://designmd.app/images/library/12.png) Flat & Soft UI ### Flat Design](https://designmd.app/library/flat-design)[![Interactive Product Demo](https://designmd.app/images/library/25.png) Editorial & Tipografia ### Interactive Product Demo](https://designmd.app/library/interactive-product-demo)[![Comparative Analysis Dashboard](https://designmd.app/images/library/33.png) Dados & Infografico ### Comparative Analysis Dashboard](https://designmd.app/library/comparative-analysis-dashboard)[![Retro Travel Poster](https://designmd.app/images/library/80.png) Retro & Pop ### Retro Travel Poster](https://designmd.app/library/retro-travel-poster)

Last synced: 5/6/2026
