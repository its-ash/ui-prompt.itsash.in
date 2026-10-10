# Chalkboard

- Source: <https://designmd.app/library/chalkboard>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:51.292Z

Arte & IlustracaoTimeless / Educational

# Chalkboard

Chalkboard-style landing page. Ideal for education, tutoriais, restaurants, projetos nostálgicos, menus criativos. AI-ready template.

chalkboardchalkblackboardhand-drawnsketcheducationalclassroomtexturedustywhite on dark

Use case: Education, Tutorials, Restaurants, Nostalgic projects, Creative menus

![Chalkboard](https://designmd.app/images/library/281.png)

## Historical Context

Chalkboard lettering is one of the few typographic traditions that never fully migrated to digital — and that's precisely what makes it powerful. Before vinyl signage and LED menus, every café, schoolroom, and butcher shop communicated through chalk on slate. The medium forced economy: you wrote what mattered, erased what didn't, and the impermanence was the point. There's a reason blackboards survived the overhead projector, the whiteboard, and the smartboard in cultural memory. The craft revival of the 2010s turned chalkboard art into a full discipline — Dana Tanamachi's work for Google and Starbucks proved that hand-drawn chalk could hold its own against any polished brand system. But the aesthetic predates that moment by centuries. Victorian pub signs, French bistro menus, one-room schoolhouses — chalk was the original responsive medium. It adapted to whatever surface and whatever message the day demanded. What designers often miss: chalkboard isn't nostalgic decoration. It's a signal of impermanence, craft, and human presence. When you deploy it, you're telling people that this message was made by a hand, today, for them.

## When to Use

Reach for chalkboard when you need warmth without whimsy, and craft without preciousness. It works when the brand promise is handmade, local, or educational — places where polish would feel dishonest. Restaurants with rotating menus, workshop announcements, craft breweries, farm-to-table anything. It's also brutally effective in education contexts where you want to evoke learning without the sterility of institutional design. Avoid it for anything requiring permanence or corporate authority — chalk is inherently temporary, and fighting that reads as costume.

## Design Principles

- Embrace imperfection — uneven baselines, dust texture, and stroke variation aren't bugs, they're the entire point of the medium
- Dark ground is non-negotiable — true chalkboard works on deep greens, slate grays, or matte blacks; white or light backgrounds kill the illusion instantly
- Limit your palette to what actual chalk offers — white, pale yellow, dusty pink, muted blue; neon colors betray the physical reference
- Pair with restrained typography elsewhere — chalkboard elements need clean, modern surroundings to breathe, or the whole layout collapses into themed kitsch
- Respect the grid loosely — chalk lettering follows rhythm but not precision; overly uniform spacing makes hand-drawn work look like a font pretending

## DESIGN.md

```
---
version: "alpha"
name: "Chalkboard"
description: "Chalkboard-style landing page. Ideal for education, tutoriais, restaurants, projetos nostálgicos, menus criativos. AI-ready template."
colors:
primary: "#2D4A3E"
secondary: "#1A1A2E"
tertiary: "#F5F5DC"
neutral: "#FFF59D"
surface: "#F48FB1"
accent: "#81D4FA"
typography:
h1:
fontFamily: Caveat
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: Caveat
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: Caveat
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Chalkboard-style landing page. Ideal for education, tutoriais, restaurants, projetos nostálgicos, menus criativos. AI-ready template. Chalkboard lettering is one of the few typographic traditions that never fully migrated to digital — and that's precisely what makes it powerful. Before vinyl signage and LED menus, every café, schoolroom, and butcher shop communicated through chalk on slate. The medium forced economy: you wrote what mattered, erased what didn't, and the impermanence was the point. There's a reason blackboards survived the overhead projector, the whiteboard, and the smartboard in cultural memory.

The craft revival of the 2010s turned chalkboard art into a full discipline — Dana Tanamachi's work for Google and Starbucks proved that hand-drawn chalk could hold its own against any polished brand system. But the aesthetic predates that moment by centuries. Victorian pub signs, French bistro menus, one-room schoolhouses — chalk was the original responsive medium. It adapted to whatever surface and whatever message the day demanded.

What designers often miss: chalkboard isn't nostalgic decoration. It's a signal of impermanence, craft, and human presence. When you deploy it, you're telling people that this message was made by a hand, today, for them.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 8/10 — Cinematic

- **Style:** Hand-drawn, Educational, Textured, Nostalgic
- **Keywords:** chalkboard, chalk, blackboard, hand-drawn, sketch, educational, classroom, texture, dusty, white on dark
- **Era:** Timeless / Educational
- **Light/Dark:** ✗ No / ✓ Only

## Colors

- **Chalkboard Green** (#2D4A3E) — Primary surface or dominant color
- **Deep Slate** (#1A1A2E) — Secondary surface or text color
- **Chalk White** (#F5F5DC) — Light surface, card backgrounds
- **Pastel Chalk Yellow** (#FFF59D) — Warning states, attention indicators
- **Chalk Pink** (#F48FB1) — Primary text color
- **Chalk Blue** (#81D4FA) — Secondary accent
- **Chalk Orange** (#FFAB91) — Warm accent, call-to-action secondary

## Typography

- **Display / Hero:** Caveat — Weight 700, tight tracking, used for headline impact
- **Accent:** cursive or handwriting fonts — Used for decorative or emphasis text
- **Body:** Caveat — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Caveat — 0.875rem, weight 500, slight letter-spacing
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

Chalk-like text rendering with text-shadow glow, rough/grainy background texture via CSS noise, hand-drawn border style (dashed/irregular), subtle dust particle animation, sketch-style illustrations via SVG filters

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

- Do Dark chalkboard background
- Do Chalk-like white text with glow
- Do Hand-drawn dashed borders
- Do Grainy texture overlay
- Do Pastel chalk accent colors
- Do Handwriting-style typography

## Use Case

Education, Tutorials, Restaurants, Nostalgic projects, Creative menus
```

[Download DESIGN.md](https://designmd.app/library/chalkboard/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: dark green/slate with CSS noise texture overlay, color: #F5F5DC chalk white, text-shadow: 0 0 3px rgba(255,255,255,0.3) for chalk glow, border: 2px dashed for hand-drawn feel, font-family: cursive or handwriting fonts, filter: url(#chalk-texture) SVG filter
```

### Variables

```
--bg-chalkboard: #2D4A3E, --chalk-white: #F5F5DC, --chalk-glow: 0 0 3px rgba(255,255,255,0.3), --border-style: 2px dashed, --font-chalk: 'Caveat' or cursive, --texture-opacity: 0.15
```

### Checklist

☐ Dark chalkboard background, ☐ Chalk-like white text with glow, ☐ Hand-drawn dashed borders, ☐ Grainy texture overlay, ☐ Pastel chalk accent colors, ☐ Handwriting-style typography

## Colors

Primary

#2D4A3E

#1A1A2E

#F5F5DC

Secondary

#FFF59D

#F48FB1

#81D4FA

#FFAB91

### Effects

Chalk-like text rendering with text-shadow glow, rough/grainy background texture via CSS noise, hand-drawn border style (dashed/irregular), subtle dust particle animation, sketch-style illustrations via SVG filters

### Light/Dark

✗ No / ✓ Only

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Chalkboard
- **Type:** Hand-drawn, Educational, Textured, Nostalgic
- **Keywords:** chalkboard, chalk, blackboard, hand-drawn, sketch, educational, classroom, texture, dusty, white on dark
- **Era:** Timeless / Educational
- **Light/Dark:** ✗ No / ✓ Only

## Color Palette

- **Primary:** Chalkboard Green #2D4A3E, Deep Slate #1A1A2E, Chalk White #F5F5DC
- **Secondary:** Pastel Chalk Yellow #FFF59D, Chalk Pink #F48FB1, Chalk Blue #81D4FA, Chalk Orange #FFAB91

## Visual Effects

Chalk-like text rendering with text-shadow glow, rough/grainy background texture via CSS noise, hand-drawn border style (dashed/irregular), subtle dust particle animation, sketch-style illustrations via SVG filters

## AI Visual Direction

Design a chalkboard-style landing page. Dark green or slate background with chalk-like white text. Use hand-drawn aesthetic with rough edges, dashed borders, and sketch-style icons. Add subtle chalk dust texture overlay. Typography should look hand-written. Pastel chalk colors for accents. Include eraser smudge effects and chalk line decorations.

## CSS Technical

```css
background: dark green/slate with CSS noise texture overlay, color: #F5F5DC chalk white, text-shadow: 0 0 3px rgba(255,255,255,0.3) for chalk glow, border: 2px dashed for hand-drawn feel, font-family: cursive or handwriting fonts, filter: url(#chalk-texture) SVG filter
```

## Design System Variables

```css
--bg-chalkboard: #2D4A3E, --chalk-white: #F5F5DC, --chalk-glow: 0 0 3px rgba(255,255,255,0.3), --border-style: 2px dashed, --font-chalk: 'Caveat' or cursive, --texture-opacity: 0.15
```

## Implementation Checklist

- ☐ Dark chalkboard background
- ☐ Chalk-like white text with glow
- ☐ Hand-drawn dashed borders
- ☐ Grainy texture overlay
- ☐ Pastel chalk accent colors
- ☐ Handwriting-style typography

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

[![Doodle / Sketch Livre](https://designmd.app/images/library/98.png) Dados & Infografico ### Doodle / Sketch Livre](https://designmd.app/library/doodle-sketch-livre)[![Brutalismo Artístico Abstrato](https://designmd.app/images/library/196.png) Brutalismo ### Brutalismo Artístico Abstrato](https://designmd.app/library/brutalismo-artistico-abstrato)[![Anti-Polish / Raw Aesthetic](https://designmd.app/images/library/59.png) Brutalismo ### Anti-Polish / Raw Aesthetic](https://designmd.app/library/anti-polish-raw-aesthetic)[![Accessible & Ethical](https://designmd.app/images/library/8.png) Temas & Verticais ### Accessible & Ethical](https://designmd.app/library/accessible-ethical)[![EdTech Plataforma de Cursos](https://designmd.app/images/library/144.png) Temas & Verticais ### EdTech Plataforma de Cursos](https://designmd.app/library/edtech-plataforma-de-cursos)

Last synced: 4/1/2026
