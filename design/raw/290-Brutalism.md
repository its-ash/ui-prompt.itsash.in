# Brutalism

- Source: <https://designmd.app/library/brutalism-4>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:08:16.306Z

Brutalismo1950s Brutalist

# Brutalism

Brutalist design with raw, unpolished, stark aesthetic. Ideal for creative portfolio, design agency, experimental blog, digital art. AI-ready template.

Rawunpolishedstarkhigh contrastplain textdefault fontsvisible bordersasymmetricanti-design

Use case: Creative portfolio, Design agency, Experimental blog, Digital art

![Brutalism](https://designmd.app/images/library/4.png)

## Historical Context

The name comes from béton brut — raw concrete. Le Corbusier wasn't trying to be ugly. He was trying to be honest. The Brutalist architects of the 1950s stripped buildings down to structure and material because they believed ornamentation was a lie. Agree or not, the conviction was real. Web brutalism hit its stride around 2016. Bloomberg's site redesign shocked people. Craigslist suddenly looked intentional rather than outdated. Designers started asking: what if we just... didn't polish things? What if the grid showed through? What if Times New Roman was a choice? Now in 2026 we're deep into Anti-Design 2.0 — a second wave that's less about shock value and more about rejecting the sameness of design systems that all converged on the same rounded corners and soft shadows. Designers keep returning to brutalism because the web got too comfortable. Every SaaS looks identical. Brutalism is the antidote to that specific boredom. It's not rebellion for its own sake anymore. It's a legitimate design position.

## When to Use

Brutalism works when your audience expects to be challenged — creative portfolios, design agencies, art publications, experimental projects. People in those spaces read rawness as confidence, not incompetence. But let's be honest: brutalism alienates most general audiences. Your mom's bakery website shouldn't look like a terminal dump. E-commerce with real conversion goals? Probably not. If your users need to feel safe handing over a credit card, brutalism is working against you. Use it when the aesthetic IS the message. Skip it when usability matters more than attitude.

## Design Principles

- Raw doesn't mean random — every exposed element should be a deliberate choice, not a missing stylesheet
- Typography carries the entire weight — when you strip decoration, type becomes architecture. Go bold or go home
- Contrast is your only tool for hierarchy — without shadows, gradients, or color ramps, you live and die by black against white
- Honor the medium — show the grid, show the markup logic, let the browser's native behavior be visible rather than overridden
- Restraint over chaos — the difference between intentional brutalism and a broken page is consistency. Pick your constraints and never break them

## DESIGN.md

```
---
version: "alpha"
name: "Brutalism"
description: "Brutalist design with raw, unpolished, stark aesthetic. Ideal for creative portfolio, design agency, experimental blog, digital art. AI-ready template."
colors:
primary: "#FF0000"
secondary: "#0000FF"
tertiary: "#FFFF00"
neutral: "#000000"
surface: "#FFFFFF"
accent: "#00FF00"

typography:
h1:
fontFamily: system-ui, monospace
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: system-ui, monospace
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: system-ui, monospace
fontSize: 0.75rem
fontWeight: 500
rounded:
sm: 2px
md: 4px
lg: 8px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
button-accent:
backgroundColor: "{colors.accent}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Brutalist design with raw, unpolished, stark aesthetic. Ideal for creative portfolio, design agency, experimental blog, digital art. AI-ready template. The name comes from béton brut — raw concrete. Le Corbusier wasn't trying to be ugly. He was trying to be honest. The Brutalist architects of the 1950s stripped buildings down to structure and material because they believed ornamentation was a lie. Agree or not, the conviction was real.

Web brutalism hit its stride around 2016. Bloomberg's site redesign shocked people. Craigslist suddenly looked intentional rather than outdated. Designers started asking: what if we just... didn't polish things? What if the grid showed through? What if Times New Roman was a choice?

Now in 2026 we're deep into Anti-Design 2.0 — a second wave that's less about shock value and more about rejecting the sameness of design systems that all converged on the same rounded corners and soft shadows. Designers keep returning to brutalism because the web got too comfortable. Every SaaS looks identical. Brutalism is the antidote to that specific boredom. It's not rebellion for its own sake anymore. It's a legitimate design position.

- Density: 5/10 — Balanced
- Variance: 7/10 — Dynamic
- Motion: 4/10 — Subtle

- **Style:** Raw, Unpolished, High-Contrast, Anti-Design
- **Keywords:** Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design
- **Era:** 1950s Brutalist
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Red** (#FF0000) — Error states, destructive actions
- **Blue** (#0000FF) — Accent highlight, links and focus states
- **Yellow** (#FFFF00) — Warning states, attention indicators
- **Black** (#000000) — Dark surface, primary background
- **White** (#FFFFFF) — Light surface, card backgrounds
- **Neon Green** (#00FF00) — Success states, positive indicators
- **Hot Pink** (#FF00FF) — Primary text color

## Typography

- **Display / Hero:** system-ui or monospace — Weight 700, tight tracking, used for headline impact
- **Body:** system-ui or monospace — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** system-ui or monospace — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** system-ui or monospace — Used for code, metadata, and technical values

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

No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 0px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** Sharp edges (0px) shape. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** Sharp edges (0px) corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do No border-radius (0px)
- Do No transitions (instant)
- Do Bold typography (700+)
- Do Pure primary colors used
- Do Visible grid/borders
- Do Asymmetric layout intentional

## Use Case

Creative portfolio, Design agency, Experimental blog, Digital art
```

[Download DESIGN.md](https://designmd.app/library/brutalism-4/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
border-radius: 0px, transition: none or 0s, font-family: system-ui or monospace, font-weight: 700+, border: visible 2-4px, colors: #FF0000, #0000FF, #FFFF00, #000000, #FFFFFF
```

### Variables

```
--border-radius: 0px, --transition-duration: 0s, --font-weight: 700-900, --colors: primary only, --border-style: visible, --grid-visible: true
```

### Checklist

☐ No border-radius (0px), ☐ No transitions (instant), ☐ Bold typography (700+), ☐ Pure primary colors used, ☐ Visible grid/borders, ☐ Asymmetric layout intentional

## Colors

Primary

#FF0000

#0000FF

#FFFF00

#000000

#FFFFFF

Secondary

#00FF00

#FF00FF

### Effects

No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks

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

- **Name:** Brutalism
- **Type:** Raw, Unpolished, High-Contrast, Anti-Design
- **Keywords:** Raw, unpolished, stark, high contrast, plain text, default fonts, visible borders, asymmetric, anti-design
- **Era:** 1950s Brutalist
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Primary: Red #FF0000, Blue #0000FF, Yellow #FFFF00, Black #000000, White #FFFFFF
- **Secondary:** Limited: Neon Green #00FF00, Hot Pink #FF00FF, minimal secondary

## Visual Effects

No smooth transitions (instant), sharp corners (0px), bold typography (700+), visible grid, large blocks

## AI Visual Direction

Create a brutalist design with raw, unpolished, stark aesthetic. Use pure primary colors (red, blue, yellow), black & white, no smooth transitions (instant), sharp corners, bold large typography, visible grid lines, default system fonts, intentional 'broken' design elements.

## CSS Technical

```css
border-radius: 0px, transition: none or 0s, font-family: system-ui or monospace, font-weight: 700+, border: visible 2-4px, colors: #FF0000, #0000FF, #FFFF00, #000000, #FFFFFF
```

## Design System Variables

```css
--border-radius: 0px, --transition-duration: 0s, --font-weight: 700-900, --colors: primary only, --border-style: visible, --grid-visible: true
```

## Implementation Checklist

- ☐ No border-radius (0px)
- ☐ No transitions (instant)
- ☐ Bold typography (700+)
- ☐ Pure primary colors used
- ☐ Visible grid/borders
- ☐ Asymmetric layout intentional

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

[![Brutalist Web Design](https://designmd.app/images/library/115.png) Brutalismo ### Brutalist Web Design](https://designmd.app/library/brutalist-web-design)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Inclusive Design](https://designmd.app/images/library/17.png) Temas & Verticais ### Inclusive Design](https://designmd.app/library/inclusive-design)[![Swiss Modernism 2.0](https://designmd.app/images/library/50.png) Minimalismo & Swiss ### Swiss Modernism 2.0](https://designmd.app/library/swiss-modernism-2-0)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)

Last synced: 4/1/2026
