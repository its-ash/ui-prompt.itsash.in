# Electric Studio

- Source: <https://designmd.app/library/electric-studio>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:12.299Z

Temas & Verticais2024-2026 Studio Clean

# Electric Studio

Bold, clean professional landing page with a two-panel vertical split layout. Ideal for estúdios de design, digital agencies, portfolios profissionais, consultorias. AI-ready template.

split paneltwo-panelwhite topblue bottombrand marksManropehigh contrastprofessionalcleanquote typography

Use case: Design studios, Digital agencies, Professional portfolios, Consulting firms

![Electric Studio](https://designmd.app/images/library/259.png)

## Historical Context

The split panel didn't emerge from theory. It came from print — specifically from the Swiss poster tradition of dividing a surface into opposing fields of tension. Black ink on white stock, reversed out. When the web matured past single-column blogs, studios grabbed that same device: cleave the viewport in two, let contrast do the talking. What makes it stick is the violence of the join. A white upper half breathes — airy, typographic, restrained. Then the dark lower half absorbs. It's not decoration; it's pacing. The eye lands on lightness, reads the headline, then drops into density. Agencies figured this out early because their work demands theatrical framing. You don't present a rebrand inside a beige container. The convention solidified around 2016–2018 as studio sites competed for visual authority. Two panels, hard edge, no gradient softening the seam. It signals confidence. The layout says: we understand composition well enough to let negative space and darkness coexist without mediation.

## When to Use

When the page needs immediate visual hierarchy without relying on imagery alone. Split panels work best for hero sections where a studio name or tagline needs room to land before portfolio content takes over below. Ideal for sites that carry minimal navigation — the division itself becomes the architecture. Avoid it on content-heavy pages where the hard split fights readability. Best deployed when you want the layout to feel like a statement, not a container.

## Design Principles

- Commit to the hard edge — no gradients, no feathering. The contrast only works when the boundary is absolute.
- Let the white panel do less. Resist filling it. A single line of type in generous space outperforms a cluttered light section every time.
- Anchor typography to the split line. Headlines that sit near the boundary create gravitational pull between the two zones.
- Use the dark panel for weight, not just color. Dense imagery, solid blocks, or heavy type — it needs mass to counterbalance the emptiness above.
- Scale the split ratio intentionally. 50/50 is safe but static. A 60/40 or 70/30 division introduces asymmetry that feels more composed, less default.

## DESIGN.md

```
---
version: "alpha"
name: "Electric Studio"
description: "Bold, clean professional landing page with a two-panel vertical split layout. Ideal for estúdios de design, digital agencies, portfolios profissionais, consultorias. AI-ready template."
colors:
primary: "#0a0a0a"
secondary: "#ffffff"
tertiary: "#4361ee"
neutral: "#f5f5f5"
surface: "#888888"
accent: "#2d3abe"
typography:
h1:
fontFamily: Manrope
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Manrope
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Bold, clean professional landing page with a two-panel vertical split layout. Ideal for estúdios de design, digital agencies, portfolios profissionais, consultorias. AI-ready template. The split panel didn't emerge from theory. It came from print — specifically from the Swiss poster tradition of dividing a surface into opposing fields of tension. Black ink on white stock, reversed out. When the web matured past single-column blogs, studios grabbed that same device: cleave the viewport in two, let contrast do the talking.

What makes it stick is the violence of the join. A white upper half breathes — airy, typographic, restrained. Then the dark lower half absorbs. It's not decoration; it's pacing. The eye lands on lightness, reads the headline, then drops into density. Agencies figured this out early because their work demands theatrical framing. You don't present a rebrand inside a beige container.

The convention solidified around 2016–2018 as studio sites competed for visual authority. Two panels, hard edge, no gradient softening the seam. It signals confidence. The layout says: we understand composition well enough to let negative space and darkness coexist without mediation.

- Density: 3/10 — Airy
- Variance: 3/10 — Restrained
- Motion: 4/10 — Subtle

- **Style:** Bold, Clean, Professional, High Contrast
- **Keywords:** split panel, two-panel, white top, blue bottom, brand marks, Manrope, high contrast, professional, clean, quote typography
- **Era:** 2024-2026 Studio Clean
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Dark Black** (#0a0a0a) — Dark surface, primary background
- **Pure White** (#ffffff) — Light surface, card backgrounds
- **Accent Blue** (#4361ee) — Primary accent, CTAs and interactive elements
- **Light Grey** (#f5f5f5) — Secondary text, borders, muted elements
- **Medium Grey** (#888888) — Secondary text, borders, muted elements
- **Dark Blue** (#2d3abe) — Deep contrast surface

## Typography

- **Display / Hero:** Manrope — Weight 700, tight tracking, used for headline impact
- **Body:** Manrope — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Manrope — 0.875rem, weight 500, slight letter-spacing
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

Two-panel vertical split, accent bar on panel edge, quote typography as hero element, minimal confident spacing, smooth transitions 300ms

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

- Do Manrope font carregada
- Do Two-panel vertical split
- Do Accent bar em bordas
- Do Quote typography como hero
- Do Brand marks nos cantos
- Do Espaçamento confiante e mínimo
- Do Responsivo mobile/tablet/desktop

## Use Case

Design studios, Digital agencies, Professional portfolios, Consulting firms
```

[Download DESIGN.md](https://designmd.app/library/electric-studio/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Manrope', .split-top { background: #ffffff; color: #0a0a0a }, .split-bottom { background: #4361ee; color: #ffffff }, .accent-bar { width: 4px; background: #4361ee }, .quote-hero { font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; line-height: 1.1 }
```

### Variables

```
--bg-dark: #0a0a0a, --bg-white: #ffffff, --accent-blue: #4361ee, --text-dark: #0a0a0a, --text-light: #ffffff, --font-primary: 'Manrope', --font-weight-display: 800, --font-weight-body: 400
```

### Checklist

☐ Manrope font carregada, ☐ Two-panel vertical split, ☐ Accent bar em bordas, ☐ Quote typography como hero, ☐ Brand marks nos cantos, ☐ Espaçamento confiante e mínimo, ☐ Responsivo mobile/tablet/desktop

## Colors

Primary

#0a0a0a

#ffffff

#4361ee

Secondary

#f5f5f5

#888888

#2d3abe

### Effects

Two-panel vertical split, accent bar on panel edge, quote typography as hero element, minimal confident spacing, smooth transitions 300ms

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

- **Name:** Electric Studio
- **Type:** Bold, Clean, Professional, High Contrast
- **Keywords:** split panel, two-panel, white top, blue bottom, brand marks, Manrope, high contrast, professional, clean, quote typography
- **Era:** 2024-2026 Studio Clean
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Dark Black #0a0a0a, Pure White #ffffff, Accent Blue #4361ee
- **Secondary:** Light Grey #f5f5f5, Medium Grey #888888, Dark Blue #2d3abe

## Visual Effects

Two-panel vertical split, accent bar on panel edge, quote typography as hero element, minimal confident spacing, smooth transitions 300ms

## AI Visual Direction

Design a bold, clean professional landing page with a two-panel vertical split layout. White panel on top, blue/dark panel on bottom. Use Manrope font throughout (800 for display, 400/500 for body). Add accent bar on panel edges. Use quote typography as hero element. Brand marks in corners. Minimal, confident spacing.

## CSS Technical

```css
font-family: 'Manrope', .split-top { background: #ffffff; color: #0a0a0a }, .split-bottom { background: #4361ee; color: #ffffff }, .accent-bar { width: 4px; background: #4361ee }, .quote-hero { font-size: clamp(2rem, 5vw, 4rem); font-weight: 800; line-height: 1.1 }
```

## Design System Variables

```css
--bg-dark: #0a0a0a, --bg-white: #ffffff, --accent-blue: #4361ee, --text-dark: #0a0a0a, --text-light: #ffffff, --font-primary: 'Manrope', --font-weight-display: 800, --font-weight-body: 400
```

## Implementation Checklist

- ☐ Manrope font carregada
- ☐ Two-panel vertical split
- ☐ Accent bar em bordas
- ☐ Quote typography como hero
- ☐ Brand marks nos cantos
- ☐ Espaçamento confiante e mínimo
- ☐ Responsivo mobile/tablet/desktop

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Bold Signal](https://designmd.app/images/library/258.png) Temas & Verticais ### Bold Signal](https://designmd.app/library/bold-signal)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Dark Mode (OLED)](https://designmd.app/images/library/7.png) Temas & Verticais ### Dark Mode (OLED)](https://designmd.app/library/dark-mode-oled)

Last synced: 4/1/2026
