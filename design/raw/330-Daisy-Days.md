# Daisy Days

- Source: <https://designmd.app/library/daisy-days>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:20.304Z

Arte & Ilustracao2020s Modern

# Daisy Days

Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Fredoka One typography. warm cream base with a full pastel rainbow (mint, lavender, peach, sky, soft pin. Best for education / classroom, kids product launch, wellness program. AI-ready design system.

Hand-drawn daisiespastel rainbowFredoka Onechunky offset shadowscheerfulwholesomeillustrated

Use case: education / classroom, kids product launch, wellness program, community workshop, creator portfolio (craft / illustration), team kickoff, wedding / baby shower planning

![Daisy Days](https://designmd.app/images/library/435.png)

## Historical Context

Hand-drawn florals have anchored children's visual culture since the Arts and Crafts movement rejected industrial sterility in favor of organic, imperfect linework. The daisy — simple enough for a child to draw, universal enough to transcend language — became shorthand for innocence across decades of picture books, nursery textiles, and educational materials. The pastel rainbow palette here isn't arbitrary nostalgia. It descends directly from the soft chromatic ranges popularized by Japanese kawaii culture in the 1970s and later absorbed into Western children's branding through Sanrio's global expansion. That specific intersection — Western botanical illustration meets Eastern color sensibility — created the visual language we now instinctively read as 'gentle, playful, safe.' Fredoka One anchors the typography with rounded terminals that echo the petal shapes themselves. It's a deliberate rejection of the geometric sans-serifs that dominated children's branding in the 2010s. The font says: we're not trying to look modern, we're trying to feel warm. That distinction matters when you're designing for audiences who process emotion before information.

## When to Use

Reach for Daisy Days when the brief demands warmth without infantilizing the product. It works beautifully for spring campaign hero graphics, children's stationery lines, and playful packaging where you need visual softness that still holds structure. Avoid it for anything requiring authority or minimalism — this system has opinions and they're all about joy. Best deployed at larger scales where the hand-drawn texture reads clearly rather than collapsing into visual noise.

## Design Principles

- Imperfection is intentional — every wobbly line signals human touch over algorithmic precision
- Color stays soft but never washed out; pastels should feel saturated enough to pop on white substrates
- Typography and illustration share formal DNA — rounded letterforms mirror petal geometry to unify the system
- Whitespace is generous; hand-drawn elements need breathing room or they read as clutter rather than charm
- Scale hierarchy matters more here than in geometric systems — delicate linework disappears below 24px

## DESIGN.md

```
---
version: "alpha"
name: "Daisy Days"
description: "Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Fredoka One typography. warm cream base with a full pastel rainbow (mint, lavender, peach, sky, soft pin. Best for education / classroom, kids product launch, wellness program. AI-ready design system."
colors:
primary: "#F5F0E6"
secondary: "#7ECDC0"
tertiary: "#F7C8D4"
neutral: "#FDE68A"
surface: "#A8E6CF"
accent: "#D4A5E8"
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
sm: 12px
md: 24px
lg: 36px
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

Daisy Days — Cheerful pastel deck with hand-drawn daisies, stars, and rainbows. Friendly, soft, and warm. Fredoka One typography. warm cream base with a full pastel rainbow (mint, lavender, peach, sky, soft pin. Best for education / classroom, kids product launch, wellness program. AI-ready design system. Hand-drawn florals have anchored children's visual culture since the Arts and Crafts movement rejected industrial sterility in favor of organic, imperfect linework. The daisy — simple enough for a child to draw, universal enough to transcend language — became shorthand for innocence across decades of picture books, nursery textiles, and educational materials.

The pastel rainbow palette here isn't arbitrary nostalgia. It descends directly from the soft chromatic ranges popularized by Japanese kawaii culture in the 1970s and later absorbed into Western children's branding through Sanrio's global expansion. That specific intersection — Western botanical illustration meets Eastern color sensibility — created the visual language we now instinctively read as 'gentle, playful, safe.'

Fredoka One anchors the typography with rounded terminals that echo the petal shapes themselves. It's a deliberate rejection of the geometric sans-serifs that dominated children's branding in the 2010s. The font says: we're not trying to look modern, we're trying to feel warm. That distinction matters when you're designing for audiences who process emotion before information.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 4/10 — Subtle

- **Style:** Illustrated, Cheerful, Pastel, Hand-Drawn
- **Keywords:** Hand-drawn daisies, pastel rainbow, Fredoka One, chunky offset shadows, cheerful, wholesome, illustrated
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Colors

- **Cream** (#F5F0E6) — Primary surface or dominant color
- **Turquoise** (#7ECDC0) — Accent highlight, links and focus states
- **Soft Pink** (#F7C8D4) — Secondary accent
- **Butter** (#FDE68A) — Accent color, emphasis elements
- **Mint** (#A8E6CF) — Extended palette, decorative use
- **Lavender** (#D4A5E8) — Background alternate
- **Peach** (#FFCBA4) — Muted text / borders
- **Sky** (#A8D8F0) — Extended palette
- **Coral** (#F8635F) — Extended palette, decorative use
- **Ink** (#2D2D2D) — Extended palette, decorative use

## Typography

- **Display / Hero:** Fredoka One — Weight 700, tight tracking, used for headline impact
- **Body:** Quicksand — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Quicksand — 0.875rem, weight 500, slight letter-spacing
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

display font Fredoka One for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, hand-drawn SVG daisy/star decorations, 6px chunky offset shadows, rounded sans

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 12px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 12px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Fredoka One display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Hand-drawn / crafted SVG decorations present
- Do Mobile responsive layout (stack below 768px)

## Use Case

education / classroom, kids product launch, wellness program, community workshop, creator portfolio (craft / illustration), team kickoff, wedding / baby shower planning
```

[Download DESIGN.md](https://designmd.app/library/daisy-days/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Fredoka One', sans-serif; background: #F5F0E6; color: #2D2D2D; border: 3px solid #2D2D2D; box-shadow: 6px 6px 0 #2D2D2D; border-radius: 12px
```

### Variables

```
--bg: #F5F0E6, --fg: #2D2D2D, --accent: #F8635F, --font-display: 'Fredoka One', --font-body: 'Quicksand', --radius: 12px, --spacing: 1.5rem
```

### Checklist

☐ Fredoka One display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Hand-drawn / crafted SVG decorations present, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#F5F0E6

#7ECDC0

#F7C8D4

Secondary

#FDE68A

#A8E6CF

#D4A5E8

#FFCBA4

### Effects

display font Fredoka One for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, hand-drawn SVG daisy/star decorations, 6px chunky offset shadows, rounded sans

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

- **Name:** Daisy Days
- **Type:** Illustrated, Cheerful, Pastel, Hand-Drawn
- **Keywords:** Hand-drawn daisies, pastel rainbow, Fredoka One, chunky offset shadows, cheerful, wholesome, illustrated
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✗ None

## Color Palette

- **Primary:** Cream #F5F0E6, Turquoise #7ECDC0, Soft Pink #F7C8D4
- **Secondary:** Butter #FDE68A, Mint #A8E6CF, Lavender #D4A5E8, Peach #FFCBA4

## Visual Effects

display font Fredoka One for hero headlines, playful hover animations (scale 1.03, 200ms), bouncy click states, hand-drawn SVG daisy/star decorations, 6px chunky offset shadows, rounded sans

## AI Visual Direction

Design a cheerful pastel layout with hand-drawn character. Use: warm cream (#F5F0E6), full pastel rainbow palette, Fredoka One for display, Quicksand for body, 3px ink outlines on cards, 6px chunky offset shadows, SVG daisy/star/rainbow decorations. Friendly and wholesome.

## CSS Technical

```css
font-family: 'Fredoka One', sans-serif; background: #F5F0E6; color: #2D2D2D; border: 3px solid #2D2D2D; box-shadow: 6px 6px 0 #2D2D2D; border-radius: 12px
```

## Design System Variables

```css
--bg: #F5F0E6, --fg: #2D2D2D, --accent: #F8635F, --font-display: 'Fredoka One', --font-body: 'Quicksand', --radius: 12px, --spacing: 1.5rem
```

## Implementation Checklist

- ☐ Fredoka One display font loaded via Google Fonts
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
