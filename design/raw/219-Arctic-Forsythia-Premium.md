# Arctic Forsythia Premium

- Source: <https://designmd.app/library/arctic-forsythia-premium>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:24.308Z

Temas & Verticais2020s Scandinavian Minimal

# Arctic Forsythia Premium

Fresh, minimal, and luminous UI inspired by Scandinavian design. Ideal for saas moderno, fintechs, apps de produtividade, startups de tecnologia, plataformas de saúde digital. AI-ready template.

FreshminimalluminouscleanairybrighttealyellowmodernspaciouscrispScandinavian

Use case: Modern SaaS, Fintechs, Productivity apps, Tech startups, Digital health platforms

![Arctic Forsythia Premium](https://designmd.app/images/library/335.png)

## Historical Context

The pairing of icy blue and forsythia yellow isn't decorative coincidence — it's rooted in the Nordic tradition of designing against darkness. Scandinavian modernists understood that when daylight is scarce for half the year, you engineer luminosity into surfaces. The yellow isn't warm; it's electric, the way forsythia blooms hit against late-March snow. That tension — frozen ground, defiant color — became a visual shorthand for renewal in Nordic graphic design from the 1960s onward. This palette gained commercial traction through Scandinavian cosmetics and fresh-goods packaging in the 1990s, where brands needed to signal purity without sterility. Pure white felt clinical. But white cut with glacial blue and punctuated by botanical yellow? That read as alive. Clean but not dead. The combination works because it borrows from observable nature rather than from trend forecasting — it's what spring actually looks like at 60° latitude. Arctic Forsythia codifies that specific moment: the forty-eight hours when ice recedes and the first yellow appears. It's not pastel spring. It's sharp, bright, and unapologetically cold.

## When to Use

Reach for this when the brief says 'fresh' and you need to deliver without falling into generic mint-and-white territory. It's purpose-built for Scandinavian brand identities, clean beauty packaging, sparkling water labels, spring campaign hero sections, and any context where luminosity needs to do the heavy lifting. Works exceptionally well at large scale — full-bleed photography with these tones feels expensive. Avoid it for anything that needs to feel cozy or approachable; this palette has edges.

## Design Principles

- Luminosity over warmth — light should feel reflected off snow, never filtered through amber
- Yellow as punctuation, never as background — forsythia appears in bursts, not floods
- Negative space is structural, not decorative — let the cold breathe
- Typography stays thin and upright — no rounded faces, no friendly gestures
- Contrast through temperature, not value — the blue and yellow can share similar lightness if their thermal distance is maintained

## DESIGN.md

```
---
version: "alpha"
name: "Arctic Forsythia Premium"
description: "Fresh, minimal, and luminous UI inspired by Scandinavian design. Ideal for saas moderno, fintechs, apps de produtividade, startups de tecnologia, plataformas de saúde digital. AI-ready template."
colors:
primary: "#F1F6F4"
secondary: "#FFC801"
tertiary: "#114C5A"
neutral: "#D9E8E2"
surface: "#FF9932"
accent: "#172B36"
typography:
h1:
fontFamily: Inter
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Inter
fontSize: 1rem
fontWeight: 400
rounded:
sm: 8px
md: 16px
lg: 24px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Fresh, minimal, and luminous UI inspired by Scandinavian design. Ideal for saas moderno, fintechs, apps de produtividade, startups de tecnologia, plataformas de saúde digital. AI-ready template. The pairing of icy blue and forsythia yellow isn't decorative coincidence — it's rooted in the Nordic tradition of designing against darkness. Scandinavian modernists understood that when daylight is scarce for half the year, you engineer luminosity into surfaces. The yellow isn't warm; it's electric, the way forsythia blooms hit against late-March snow. That tension — frozen ground, defiant color — became a visual shorthand for renewal in Nordic graphic design from the 1960s onward.

This palette gained commercial traction through Scandinavian cosmetics and fresh-goods packaging in the 1990s, where brands needed to signal purity without sterility. Pure white felt clinical. But white cut with glacial blue and punctuated by botanical yellow? That read as alive. Clean but not dead. The combination works because it borrows from observable nature rather than from trend forecasting — it's what spring actually looks like at 60° latitude.

Arctic Forsythia codifies that specific moment: the forty-eight hours when ice recedes and the first yellow appears. It's not pastel spring. It's sharp, bright, and unapologetically cold.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Fresh Minimal & Luminous
- **Keywords:** Fresh, minimal, luminous, clean, airy, bright, teal, yellow, modern, spacious, crisp, Scandinavian
- **Era:** 2020s Scandinavian Minimal
- **Light/Dark:** ✓ Full

## Colors

- **Arctic Powder** (#F1F6F4) — Primary surface or dominant color
- **Forsythia Yellow** (#FFC801) — Warning states, attention indicators
- **Nocturnal Teal** (#114C5A) — Accent highlight, links and focus states
- **Mystic Mint** (#D9E8E2) — Extended palette, decorative use
- **Deep Saffron** (#FF9932) — Extended palette, decorative use
- **Oceanic Noir** (#172B36) — Extended palette, decorative use

## Typography

- **Display / Hero:** Inter — Weight 700, tight tracking, used for headline impact
- **Accent:** Outfit — Used for decorative or emphasis text
- **Body:** Inter — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Inter — 0.875rem, weight 500, slight letter-spacing
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

Generous white space, crisp thin borders (1px), luminous yellow accent pops against cool neutrals, clean geometric layouts, subtle mint-tinted card backgrounds, minimal shadows (2-4px blur), precise grid alignment, smooth 250ms transitions, focus on breathing room and clarity

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Rounded (8px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Rounded (8px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
- **Inputs:** Label above input. 1px border stroke. Focus ring: 2px accent color offset 2px. Error text below in semantic red. No floating labels.
- **Navigation:** Primary surface background. Active item: accent color indicator. Font weight 500 when active.
- **Skeletons:** Shimmer animation matching component dimensions. No circular spinners.
- **Empty States:** Icon-based composition with descriptive text and action button.

## Do's and Don'ts

- No emojis in UI — use icon system only (Lucide, Heroicons)
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Arctic Powder #F1F6F4 background
- Do Forsythia Yellow #FFC801 accent
- Do Nocturnal Teal #114C5A headings
- Do Generous white space
- Do Crisp thin borders
- Do Clean geometric grid
- Do Minimal shadows
- Do Mystic Mint card backgrounds
- Do Responsive layout

## Use Case

Modern SaaS, Fintechs, Productivity apps, Tech startups, Digital health platforms
```

[Download DESIGN.md](https://designmd.app/library/arctic-forsythia-premium/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Inter', sans-serif; --font-display: 'Outfit', sans-serif; background-color: #F1F6F4; color: #172B36; --accent: #FFC801; --teal: #114C5A; border-radius: 8px; border: 1px solid rgba(17,76,90,0.1); box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: all 0.25s ease;
```

### Variables

```
--color-arctic: #F1F6F4; --color-forsythia: #FFC801; --color-nocturnal: #114C5A; --color-mint: #D9E8E2; --color-saffron: #FF9932; --color-oceanic: #172B36; --font-display: 'Outfit', sans-serif; --font-body: 'Inter', sans-serif; --radius-md: 8px; --shadow-subtle: 0 2px 8px rgba(0,0,0,0.04); --border-light: 1px solid rgba(17,76,90,0.1);
```

### Checklist

☐ Arctic Powder #F1F6F4 background, ☐ Forsythia Yellow #FFC801 accent, ☐ Nocturnal Teal #114C5A headings, ☐ Generous white space, ☐ Crisp thin borders, ☐ Clean geometric grid, ☐ Minimal shadows, ☐ Mystic Mint card backgrounds, ☐ Responsive layout

## Colors

Primary

#F1F6F4

#FFC801

#114C5A

Secondary

#D9E8E2

#FF9932

#172B36

### Effects

Generous white space, crisp thin borders (1px), luminous yellow accent pops against cool neutrals, clean geometric layouts, subtle mint-tinted card backgrounds, minimal shadows (2-4px blur), precise grid alignment, smooth 250ms transitions, focus on breathing room and clarity

### Light/Dark

✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Arctic Forsythia Premium
- **Type:** Fresh Minimal & Luminous
- **Keywords:** Fresh, minimal, luminous, clean, airy, bright, teal, yellow, modern, spacious, crisp, Scandinavian
- **Era:** 2020s Scandinavian Minimal
- **Light/Dark:** ✓ Full

## Color Palette

- **Primary:** Arctic Powder #F1F6F4, Forsythia Yellow #FFC801, Nocturnal Teal #114C5A
- **Secondary:** Mystic Mint #D9E8E2, Deep Saffron #FF9932, Oceanic Noir #172B36

## Visual Effects

Generous white space, crisp thin borders (1px), luminous yellow accent pops against cool neutrals, clean geometric layouts, subtle mint-tinted card backgrounds, minimal shadows (2-4px blur), precise grid alignment, smooth 250ms transitions, focus on breathing room and clarity

## AI Visual Direction

Create a fresh, minimal, and luminous UI inspired by Scandinavian design. Use arctic powder (#F1F6F4) as the primary background with forsythia yellow (#FFC801) as a bright, energetic accent. Nocturnal teal (#114C5A) for headings and structural elements. Cards use mystic mint (#D9E8E2) tinted backgrounds. Deep saffron (#FF9932) for secondary CTAs. Oceanic noir (#172B36) for footer and dark sections. Prioritize generous white space, crisp thin borders, clean geometric layouts, and precise grid alignment. The feel should be airy, bright, and effortlessly modern.

## CSS Technical

```css
font-family: 'Inter', sans-serif; --font-display: 'Outfit', sans-serif; background-color: #F1F6F4; color: #172B36; --accent: #FFC801; --teal: #114C5A; border-radius: 8px; border: 1px solid rgba(17,76,90,0.1); box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: all 0.25s ease;
```

## Design System Variables

```css
--color-arctic: #F1F6F4; --color-forsythia: #FFC801; --color-nocturnal: #114C5A; --color-mint: #D9E8E2; --color-saffron: #FF9932; --color-oceanic: #172B36; --font-display: 'Outfit', sans-serif; --font-body: 'Inter', sans-serif; --radius-md: 8px; --shadow-subtle: 0 2px 8px rgba(0,0,0,0.04); --border-light: 1px solid rgba(17,76,90,0.1);
```

## Implementation Checklist

- ☐ Arctic Powder #F1F6F4 background
- ☐ Forsythia Yellow #FFC801 accent
- ☐ Nocturnal Teal #114C5A headings
- ☐ Generous white space
- ☐ Crisp thin borders
- ☐ Clean geometric grid
- ☐ Minimal shadows
- ☐ Mystic Mint card backgrounds
- ☐ Responsive layout

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Midnight Garden Premium](https://designmd.app/images/library/333.png) Temas & Verticais ### Midnight Garden Premium](https://designmd.app/library/midnight-garden-premium)[![Ember & Amethyst Premium](https://designmd.app/images/library/334.png) Temas & Verticais ### Ember & Amethyst Premium](https://designmd.app/library/ember-amethyst-premium)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)

Last synced: 4/1/2026
