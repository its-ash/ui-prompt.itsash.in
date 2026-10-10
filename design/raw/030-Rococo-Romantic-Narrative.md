# Rococo Romantic Narrative

- Source: <https://designmd.app/library/rococo-romantic-narrative>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:01:40.304Z

Arte & Ilustracao18th Century

# Rococo Romantic Narrative

Rococo landing page, romantic style, pastel colors, gold accents, floral decorations, soft and dreamy, ornate luxury. Ideal for landing pages, modern websites. AI-ready template.

rococoromanticpastelgoldfloralornatecherubssoftluxury

Use case: Landing pages, Modern websites

![Rococo Romantic Narrative](https://designmd.app/images/library/165.png)

## Historical Context

Rococo never really left. It just went underground — resurfacing in branding that refuses to be minimal, in interfaces that treat ornament as content rather than crime. The movement that gave us Fragonard's stolen glances and Boucher's impossible skies was always about narrative excess: every curl of gilding, every blush of rose, existed to pull you deeper into a story. That impulse translates directly into digital work that prioritizes atmosphere over efficiency. What makes Rococo relevant now isn't nostalgia — it's the counter-position. After a decade of flat design and geometric austerity, pastel ornament feels genuinely subversive. The palette alone does heavy lifting: dusty lavenders, champagne golds, powder blues that read as both delicate and deliberate. Layer in illustrative flourishes — cartouches, ribbons, botanical frames — and you're building worlds, not wireframes. The danger, obviously, is kitsch. The difference between Rococo romance and a greeting card is intentionality. Fragonard composed chaos. Every asymmetric swirl had counterweight. Digital Rococo demands the same discipline: ornament must serve narrative, not decorate emptiness.

## When to Use

Reach for this when the brand lives in emotion, not information. Wedding identities that need to feel heirloom. Perfume houses where the packaging IS the product story. Romance publishing covers. Luxury fashion editorials that want warmth without minimalism's coldness. It works when your audience expects to be seduced — slowly, with detail — and when the content itself is narrative rather than transactional. Avoid it for anything requiring speed, utility, or democratic access. This aesthetic is unapologetically indulgent.

## Design Principles

- Ornament as narrative vehicle — every decorative element must advance the story, never exist as filler
- Asymmetric balance over symmetry — Rococo composition thrives on controlled imbalance, weight shifted to create movement and intrigue
- Pastel palette with tonal depth — avoid flat candy colors; layer warm and cool pastels with muted metallics for dimensional richness
- Illustrative hierarchy — hand-drawn or painterly elements take precedence over photographic realism; the world should feel crafted, not captured
- Deliberate excess with structural restraint — maximalism in detail, minimalism in layout; let ornament breathe within generous negative space

## DESIGN.md

```
---
version: "alpha"
name: "Rococo Romantic Narrative"
description: "Rococo landing page, romantic style, pastel colors, gold accents, floral decorations, soft and dreamy, ornate luxury. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FDF6F0"
secondary: "#6B4C40"
tertiary: "#EBC97A"
neutral: "#FADADD"
surface: "#C6E2FF"
accent: "#D0F0C0"
typography:
h1:
fontFamily: Great Vibes
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Great Vibes
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Rococo landing page, romantic style, pastel colors, gold accents, floral decorations, soft and dreamy, ornate luxury. Ideal for landing pages, modern websites. AI-ready template. Rococo never really left. It just went underground — resurfacing in branding that refuses to be minimal, in interfaces that treat ornament as content rather than crime. The movement that gave us Fragonard's stolen glances and Boucher's impossible skies was always about narrative excess: every curl of gilding, every blush of rose, existed to pull you deeper into a story. That impulse translates directly into digital work that prioritizes atmosphere over efficiency.

What makes Rococo relevant now isn't nostalgia — it's the counter-position. After a decade of flat design and geometric austerity, pastel ornament feels genuinely subversive. The palette alone does heavy lifting: dusty lavenders, champagne golds, powder blues that read as both delicate and deliberate. Layer in illustrative flourishes — cartouches, ribbons, botanical frames — and you're building worlds, not wireframes.

The danger, obviously, is kitsch. The difference between Rococo romance and a greeting card is intentionality. Fragonard composed chaos. Every asymmetric swirl had counterweight. Digital Rococo demands the same discipline: ornament must serve narrative, not decorate emptiness.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Elegant, Dreamy, Whimsical
- **Keywords:** rococo, romantic, pastel, gold, floral, ornate, cherubs, soft, luxury
- **Era:** 18th Century
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Background** (#FDF6F0) — Primary background surface
- **Text** (#6B4C40) — Primary text color
- **Accent** (#EBC97A) — Primary accent, CTAs and interactive elements
- **Pale Pink** (#FADADD) — Primary text color
- **Sky Blue** (#C6E2FF) — Secondary accent
- **Mint Green** (#D0F0C0) — Success states, positive indicators

## Typography

- **Display / Hero:** Great Vibes — Weight 700, tight tracking, used for headline impact
- **Body:** Great Vibes — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Great Vibes — 0.875rem, weight 500, slight letter-spacing
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

Classical cherubs, blooming roses, flowing golden ribbons, soft watercolor wash, smooth gradients, ethereal glow.

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 12px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Moderately rounded (0.75rem) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Moderately rounded (0.75rem) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Pastel background (pink/blue/cream)
- Do Gold filigree details
- Do Soft script typography
- Do Floral and ribbon motifs
- Do Light and airy layout

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/rococo-romantic-narrative/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background-color: #FDF6F0; color: #6B4C40; font-family: 'Great Vibes', cursive; background-image: radial-gradient(circle, #FDF6F0 0%, #FADADD 100%);
```

### Variables

```
--bg-romance: #FDF6F0, --text-cocoa: #6B4C40, --gold-ribbon: #EBC97A, --pastel-pink: #FADADD, --font-script: 'Great Vibes', cursive
```

### Checklist

☐ Pastel background (pink/blue/cream), ☐ Gold filigree details, ☐ Soft script typography, ☐ Floral and ribbon motifs, ☐ Light and airy layout

## Colors

Primary

#FDF6F0

#6B4C40

#EBC97A

Secondary

#FADADD

#C6E2FF

#D0F0C0

### Effects

Classical cherubs, blooming roses, flowing golden ribbons, soft watercolor wash, smooth gradients, ethereal glow.

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

- **Name:** Rococo Romantic Narrative
- **Type:** Elegant, Dreamy, Whimsical
- **Keywords:** rococo, romantic, pastel, gold, floral, ornate, cherubs, soft, luxury
- **Era:** 18th Century
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Background #FDF6F0, Text #6B4C40, Accent #EBC97A
- **Secondary:** Pale Pink #FADADD, Sky Blue #C6E2FF, Mint Green #D0F0C0

## Visual Effects

Classical cherubs, blooming roses, flowing golden ribbons, soft watercolor wash, smooth gradients, ethereal glow.

## AI Visual Direction

rococo landing page, romantic style, pastel colors, gold accents, floral decorations, soft and dreamy, ornate luxury.

## CSS Technical

```css
background-color: #FDF6F0; color: #6B4C40; font-family: 'Great Vibes', cursive; background-image: radial-gradient(circle, #FDF6F0 0%, #FADADD 100%);
```

## Design System Variables

```css
--bg-romance: #FDF6F0, --text-cocoa: #6B4C40, --gold-ribbon: #EBC97A, --pastel-pink: #FADADD, --font-script: 'Great Vibes', cursive
```

## Implementation Checklist

- ☐ Pastel background (pink/blue/cream)
- ☐ Gold filigree details
- ☐ Soft script typography
- ☐ Floral and ribbon motifs
- ☐ Light and airy layout

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

[![Gatsby Art Deco Noir](https://designmd.app/images/library/163.png) Arte & Ilustracao ### Gatsby Art Deco Noir](https://designmd.app/library/gatsby-art-deco-noir)[![Ancient Egyptian Instructional Scroll](https://designmd.app/images/library/162.png) Arte & Ilustracao ### Ancient Egyptian Instructional Scroll](https://designmd.app/library/ancient-egyptian-instructional-scroll)[![Belle Époque Lithograph](https://designmd.app/images/library/164.png) Arte & Ilustracao ### Belle Époque Lithograph](https://designmd.app/library/belle-epoque-lithograph)[![Rococó Delicado](https://designmd.app/images/library/106.png) Arte & Ilustracao ### Rococó Delicado](https://designmd.app/library/rococo-delicado)[![Vintage Botanical Scientific Illustration](https://designmd.app/images/library/166.png) Arte & Ilustracao ### Vintage Botanical Scientific Illustration](https://designmd.app/library/vintage-botanical-scientific-illustration)

Last synced: 4/1/2026
