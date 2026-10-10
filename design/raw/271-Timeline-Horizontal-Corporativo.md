# Timeline Horizontal Corporativo

- Source: <https://designmd.app/library/timeline-horizontal-corporativo>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:21:27.280Z

Dados & InfograficoCorporate Modern

# Timeline Horizontal Corporativo

Horizontal corporate timeline. Ideal for landing pages, modern websites. AI-ready template.

Horizontal timelineflat vector iconographygeometric data modulescolor-coded categorizationmilestone markerscorporatestructured

Use case: Landing pages, Modern websites

![Timeline Horizontal Corporativo](https://designmd.app/images/library/88.png)

## Historical Context

Timelines went horizontal the moment screens got wide enough to justify it. For decades, the vertical stack dominated — annual reports, résumés, org charts — because print was portrait and scrolling was vertical. But widescreen monitors and landscape presentations flipped the default. Suddenly left-to-right meant forward, and the spatial metaphor clicked with how Western readers already parse progress. The real shift came from product tools. Linear's roadmap view, Notion's timeline databases, Gantt descendants in Monday and Asana — they all trained an entire generation of knowledge workers to expect horizontal time. Swimlanes. Color-coded phases. Hover states revealing scope. These tools didn't just display timelines; they made them interactive, filterable, zoomable. That raised the bar for what a static corporate timeline needs to feel like. So now when you drop a horizontal timeline into a company history page or a product changelog, you're competing with muscle memory from daily project tools. The component has to feel that fluid, that scannable — even if it's purely presentational. Flat vector icons and geometric modules help because they reduce cognitive load to shape recognition. No ornament, just signal.

## When to Use

Reach for this when time is the primary axis and the audience reads left-to-right. Company milestones across years. Sprint-level roadmaps in pitch decks. Product changelogs where sequence matters more than detail. Process flows with discrete, countable steps — onboarding, deployment pipelines, approval chains. Skip it when you have more than 12 nodes (it collapses), when mobile is the primary viewport, or when events overlap heavily in time. Vertical handles density better. Horizontal handles clarity.

## Design Principles

- Left-to-right equals forward — never reverse chronological order on a horizontal axis, it breaks spatial intuition.
- Geometric consistency over decorative variety — use a single icon style (flat vector, uniform stroke weight) so the eye tracks the line, not individual nodes.
- Whitespace is pacing — uneven spacing between nodes can imply duration; use it intentionally or keep it mathematically even. No in-between.
- Progressive disclosure over information density — show dates and titles at rest, reveal descriptions on interaction. The timeline is a map, not the territory.
- Anchor the baseline — the connecting line must be visually dominant enough to unify nodes but quiet enough to not compete with content. 1-2px, muted color, no gradients.

## DESIGN.md

```
---
version: "alpha"
name: "Timeline Horizontal Corporativo"
description: "Horizontal corporate timeline. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#FFFFFF"
secondary: "#333333"
tertiary: "#2E3B8F"
neutral: "#FBAF18"
surface: "#EC1C5F"
accent: "#00AEEF"
typography:
h1:
fontFamily: System UI stack
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: System UI stack
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: System UI stack
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Horizontal corporate timeline. Ideal for landing pages, modern websites. AI-ready template. Timelines went horizontal the moment screens got wide enough to justify it. For decades, the vertical stack dominated — annual reports, résumés, org charts — because print was portrait and scrolling was vertical. But widescreen monitors and landscape presentations flipped the default. Suddenly left-to-right meant forward, and the spatial metaphor clicked with how Western readers already parse progress.

The real shift came from product tools. Linear's roadmap view, Notion's timeline databases, Gantt descendants in Monday and Asana — they all trained an entire generation of knowledge workers to expect horizontal time. Swimlanes. Color-coded phases. Hover states revealing scope. These tools didn't just display timelines; they made them interactive, filterable, zoomable. That raised the bar for what a static corporate timeline needs to feel like.

So now when you drop a horizontal timeline into a company history page or a product changelog, you're competing with muscle memory from daily project tools. The component has to feel that fluid, that scannable — even if it's purely presentational. Flat vector icons and geometric modules help because they reduce cognitive load to shape recognition. No ornament, just signal.

- Density: 5/10 — Balanced
- Variance: 2/10 — Structured
- Motion: 6/10 — Expressive

- **Style:** Infographic
- **Keywords:** Horizontal timeline, flat vector iconography, geometric data modules, color-coded categorization, milestone markers, corporate, structured
- **Era:** Corporate Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **White** (#FFFFFF) — Light surface, card backgrounds
- **Dark Text** (#333333) — Dark surface, primary background
- **Navy** (#2E3B8F) — Supporting palette color
- **Amber** (#FBAF18) — Warning states, attention indicators
- **Pink** (#EC1C5F) — Primary text color
- **Cyan** (#00AEEF) — Secondary accent
- **Purple** (#6556DF) — Accent color, emphasis elements

## Typography

- **Display / Hero:** System UI stack (-apple-system, sans-serif) — Weight 700, tight tracking, used for headline impact
- **Body:** System UI stack (-apple-system, sans-serif) — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** System UI stack (-apple-system, sans-serif) — 0.875rem, weight 500, slight letter-spacing
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

Flat 2D illumination, no shadows/gradients, milestone pop-in animations, timeline draw animation, module slide-in, color-coded category reveals

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
- **Hover states:** Scale(1.03) + shadow lift over 200ms.
- **Page transitions:** Fade + slide (300ms).
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

- Do Timeline horizontal
- Do Milestones marked
- Do Color-coded sections
- Do Flat vector icons
- Do Responsive scroll
- Do Corporate aesthetic

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/timeline-horizontal-corporativo/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
display: flex for horizontal, SVG line for timeline, circle markers, rounded-rect labels, color-coded sections, font: geometric sans-serif bold, uppercase labels, sentence case descriptions
```

### Variables

```
--bg-white: #FFFFFF, --navy: #2E3B8F, --amber: #FBAF18, --pink: #EC1C5F, --timeline-height: 2px, --milestone-size: 32px
```

### Checklist

☐ Timeline horizontal, ☐ Milestones marked, ☐ Color-coded sections, ☐ Flat vector icons, ☐ Responsive scroll, ☐ Corporate aesthetic

## Colors

Primary

#FFFFFF

#333333

#2E3B8F

#FBAF18

Secondary

#EC1C5F

#00AEEF

#6556DF

### Effects

Flat 2D illumination, no shadows/gradients, milestone pop-in animations, timeline draw animation, module slide-in, color-coded category reveals

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

- **Name:** Timeline Horizontal Corporativo
- **Type:** Infographic
- **Keywords:** Horizontal timeline, flat vector iconography, geometric data modules, color-coded categorization, milestone markers, corporate, structured
- **Era:** Corporate Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** White #FFFFFF, Dark Text #333333, Navy #2E3B8F, Amber #FBAF18
- **Secondary:** Pink #EC1C5F, Cyan #00AEEF, Purple #6556DF, thin solid connectors, rounded rectangles

## Visual Effects

Flat 2D illumination, no shadows/gradients, milestone pop-in animations, timeline draw animation, module slide-in, color-coded category reveals

## AI Visual Direction

Design a horizontal corporate timeline. Use: flat vector iconography, horizontal timeline structure, geometric data modules, color-coded categorization, circular milestone markers, thin solid connectors, rounded rectangle labels, hierarchical grid system.

## CSS Technical

```css
display: flex for horizontal, SVG line for timeline, circle markers, rounded-rect labels, color-coded sections, font: geometric sans-serif bold, uppercase labels, sentence case descriptions
```

## Design System Variables

```css
--bg-white: #FFFFFF, --navy: #2E3B8F, --amber: #FBAF18, --pink: #EC1C5F, --timeline-height: 2px, --milestone-size: 32px
```

## Implementation Checklist

- ☐ Timeline horizontal
- ☐ Milestones marked
- ☐ Color-coded sections
- ☐ Flat vector icons
- ☐ Responsive scroll
- ☐ Corporate aesthetic

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

[![Radial Diagram / Donut Chart](https://designmd.app/images/library/87.png) Dados & Infografico ### Radial Diagram / Donut Chart](https://designmd.app/library/radial-diagram-donut-chart)[![Geometric](https://designmd.app/images/library/99.png) Dados & Infografico ### Geometric](https://designmd.app/library/geometric)[![Z-Shape](https://designmd.app/images/library/89.png) Dados & Infografico ### Z-Shape](https://designmd.app/library/z-shape)[![Natureza / Elementos Botânicos](https://designmd.app/images/library/90.png) Dados & Infografico ### Natureza / Elementos Botânicos](https://designmd.app/library/natureza-elementos-botanicos)[![Elementos Musicais](https://designmd.app/images/library/91.png) Dados & Infografico ### Elementos Musicais](https://designmd.app/library/elementos-musicais)

Last synced: 4/1/2026
