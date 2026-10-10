# Noir Detetive

- Source: <https://designmd.app/library/noir-detetive>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:58:17.309Z

Retro & Pop1940s-1950s Film Noir

# Noir Detetive

Noir detective landing page. Ideal for landing pages, saas. AI-ready template.

film noirdetectivemysteriouscinematicmoodyhigh contrastvenetian blindsshadowsraintrench coatcrime

Use case: Landing pages, SaaS

![Noir Detetive](https://designmd.app/images/library/118.png)

## Historical Context

Film noir didn't ask permission. It crawled out of post-war anxiety, German Expressionist cinematography, and cheap studio lighting rigs that turned limitations into style. The 1940s and 50s gave us a visual grammar built on chiaroscuro — hard light cutting through darkness, faces half-revealed, venetian blinds slicing scenes into horizontal wounds. Directors like Billy Wilder and Fritz Lang understood something fundamental: what you hide matters more than what you show. That tension translates beautifully to interface design. Noir's dramatic contrast ratios aren't decorative — they're hierarchical. Deep blacks push content forward. Harsh directional light (or its digital equivalent: strategic white space against dark surfaces) creates focal points without screaming for attention. The venetian blind motif becomes horizontal rule patterns, layered card shadows, striped data visualizations. What makes noir endure isn't the fedoras. It's the commitment to mood over clarity, atmosphere over explanation. Every shadow is a design decision.

## When to Use

Reach for this when your project needs tension. Mystery games, true crime podcasts, thriller book covers, detective fiction apps — anything where the user should feel slightly uneasy, slightly curious. It works for dark-mode entertainment platforms, noir-themed editorial sites, and brands that want sophistication without the corporate polish. Skip it for anything requiring warmth or approachability. This palette punishes half-measures — commit to the darkness or don't bother.

## Design Principles

- Conceal to reveal — use shadow and negative space as active design elements, not empty leftovers
- Contrast is hierarchy — let extreme light/dark ratios do the work that color usually handles
- Horizontal rhythm — channel venetian blind patterns through ruled lines, layered cards, and sliced compositions
- Mood over legibility (within reason) — atmosphere can bend readability rules, but never break accessibility
- Restrained palette, maximum drama — limit yourself to 2-3 values and force every element to earn its brightness

## DESIGN.md

```
---
version: "alpha"
name: "Noir Detetive"
description: "Noir detective landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#0F0F0F"
secondary: "#4A4A4A"
tertiary: "#E8C547"
neutral: "#D4D4D4"
surface: "#5C0A0A"
accent: "#FF2D2D"
typography:
h1:
fontFamily: Special Elite
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Special Elite
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Noir detective landing page. Ideal for landing pages, saas. AI-ready template. Film noir didn't ask permission. It crawled out of post-war anxiety, German Expressionist cinematography, and cheap studio lighting rigs that turned limitations into style. The 1940s and 50s gave us a visual grammar built on chiaroscuro — hard light cutting through darkness, faces half-revealed, venetian blinds slicing scenes into horizontal wounds. Directors like Billy Wilder and Fritz Lang understood something fundamental: what you hide matters more than what you show.

That tension translates beautifully to interface design. Noir's dramatic contrast ratios aren't decorative — they're hierarchical. Deep blacks push content forward. Harsh directional light (or its digital equivalent: strategic white space against dark surfaces) creates focal points without screaming for attention. The venetian blind motif becomes horizontal rule patterns, layered card shadows, striped data visualizations.

What makes noir endure isn't the fedoras. It's the commitment to mood over clarity, atmosphere over explanation. Every shadow is a design decision.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 8/10 — Cinematic

- **Style:** Mysterious, Cinematic, Moody
- **Keywords:** film noir, detective, mysterious, cinematic, moody, high contrast, venetian blinds, shadows, rain, trench coat, crime
- **Era:** 1940s-1950s Film Noir
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Noir Black** (#0F0F0F) — Dark surface, primary background
- **Smoke Grey** (#4A4A4A) — Secondary text, borders, muted elements
- **Streetlamp Yellow** (#E8C547) — Warning states, attention indicators
- **Fog White** (#D4D4D4) — Light surface, card backgrounds
- **Blood Wine** (#5C0A0A) — Extended palette, decorative use
- **Neon Sign Red** (#FF2D2D) — Error states, destructive actions
- **Rainy Blue** (#3A5F7C) — Secondary accent
- **Cigarette Orange** (#D4762C) — Warm accent, call-to-action secondary

## Typography

- **Display / Hero:** Special Elite — Weight 700, tight tracking, used for headline impact
- **Body:** Special Elite — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Special Elite — 0.875rem, weight 500, slight letter-spacing
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

Venetian blind shadow overlays, rain streak animations, film grain texture, spotlight cones, dramatic vignette borders, typewriter text animation, foggy background layers, high-contrast black and white photography style

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Venetian blind shadow overlays
- Do Rain streak animations
- Do Film grain texture
- Do Spotlight cones
- Do Dramatic vignette borders
- Do Typewriter text animation

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/noir-detetive/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #0F0F0F, color: #D4D4D4, font-family: 'Special Elite', cursive, border: 1px solid #4A4A4A, box-shadow: inset 0 0 80px rgba(0,0,0,0.8), text-shadow: 1px 1px 3px rgba(0,0,0,0.9), animation: typewriter 3s steps(40) forwards, background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px), filter: grayscale(0.3) contrast(1.3)
```

### Variables

```
--noir-black-detective: #0F0F0F, --smoke-grey-detective: #4A4A4A, --streetlamp-yellow-detective: #E8C547, --fog-white-detective: #D4D4D4, --typewriter-speed: 3s, --font-noir: 'Special Elite', cursive
```

### Checklist

☐ Venetian blind shadow overlays, ☐ Rain streak animations, ☐ Film grain texture, ☐ Spotlight cones, ☐ Dramatic vignette borders, ☐ Typewriter text animation

## Colors

Primary

#0F0F0F

#4A4A4A

#E8C547

#D4D4D4

Secondary

#5C0A0A

#FF2D2D

#3A5F7C

#D4762C

### Effects

Venetian blind shadow overlays, rain streak animations, film grain texture, spotlight cones, dramatic vignette borders, typewriter text animation, foggy background layers, high-contrast black and white photography style

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

- **Name:** Noir Detetive
- **Type:** Mysterious, Cinematic, Moody
- **Keywords:** film noir, detective, mysterious, cinematic, moody, high contrast, venetian blinds, shadows, rain, trench coat, crime
- **Era:** 1940s-1950s Film Noir
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Noir Black #0F0F0F, Smoke Grey #4A4A4A, Streetlamp Yellow #E8C547, Fog White #D4D4D4
- **Secondary:** Blood Wine #5C0A0A, Neon Sign Red #FF2D2D, Rainy Blue #3A5F7C, Cigarette Orange #D4762C

## Visual Effects

Venetian blind shadow overlays, rain streak animations, film grain texture, spotlight cones, dramatic vignette borders, typewriter text animation, foggy background layers, high-contrast black and white photography style

## AI Visual Direction

Design a noir detective landing page. Use: noir black and streetlamp yellow, venetian blind shadow overlays, rain streak animations, film grain texture, spotlight cones, dramatic vignette borders, typewriter text animation, foggy background layers.

## CSS Technical

```css
background: #0F0F0F, color: #D4D4D4, font-family: 'Special Elite', cursive, border: 1px solid #4A4A4A, box-shadow: inset 0 0 80px rgba(0,0,0,0.8), text-shadow: 1px 1px 3px rgba(0,0,0,0.9), animation: typewriter 3s steps(40) forwards, background-image: repeating-linear-gradient(90deg, transparent 0px, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 32px), filter: grayscale(0.3) contrast(1.3)
```

## Design System Variables

```css
--noir-black-detective: #0F0F0F, --smoke-grey-detective: #4A4A4A, --streetlamp-yellow-detective: #E8C547, --fog-white-detective: #D4D4D4, --typewriter-speed: 3s, --font-noir: 'Special Elite', cursive
```

## Implementation Checklist

- ☐ Venetian blind shadow overlays
- ☐ Rain streak animations
- ☐ Film grain texture
- ☐ Spotlight cones
- ☐ Dramatic vignette borders
- ☐ Typewriter text animation

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

[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Parallax Storytelling](https://designmd.app/images/library/49.png) Futurista & Tech ### Parallax Storytelling](https://designmd.app/library/parallax-storytelling)[![Inclusive Design](https://designmd.app/images/library/17.png) Temas & Verticais ### Inclusive Design](https://designmd.app/library/inclusive-design)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)

Last synced: 4/1/2026
