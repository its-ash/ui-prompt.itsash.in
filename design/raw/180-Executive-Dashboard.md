# Executive Dashboard

- Source: <https://designmd.app/library/executive-dashboard>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:05:23.303Z

Dados & Infografico2020s Modern

# Executive Dashboard

Design an executive dashboard. Ideal for landing pages, modern websites. AI-ready template.

High-level KPIslarge key metricsminimal detailsummary viewtrend indicatorsat-a-glance insightsexecutive summary

Use case: Landing pages, Modern websites

![Executive Dashboard](https://designmd.app/images/library/30.png)

## Historical Context

Executive dashboards exist because CEOs don't analyze data — they consume signals. The distinction matters. An analyst dashboard is a workspace: filters, drill-downs, forty charts competing for attention. An executive dashboard is a verdict. Three numbers. Maybe five. Green or red. Done. This pattern crystallized in the 2010s when mobile-first thinking forced designers to ask: what if the viewer has exactly six seconds? Turns out, that's generous for most C-suite interactions. The 'glanceable' philosophy isn't dumbing things down — it's respecting that a CEO's job is decision-making, not data exploration. They need the answer, not the journey. The best executive dashboards borrow more from editorial design than from BI tools. Think magazine covers, not spreadsheets. A single dominant metric anchors the hierarchy. Supporting figures provide context without demanding attention. Everything else lives one tap away, for the rare moment someone actually wants to dig deeper.

## When to Use

When your audience makes decisions but doesn't build queries. Board meetings where you have ninety seconds to communicate company health. Monday morning standups where leadership needs a pulse check, not a deep dive. Investor updates. Status walls in offices. Anywhere the viewer's next action is 'got it' or 'let's talk about this one number' — never 'let me filter by region.' If someone needs to slice the data, this isn't their screen.

## Design Principles

- One dominant metric per view — if everything is big, nothing is big
- Color as status, not decoration — green/amber/red should be the fastest read on screen
- Negative space is information — crowding signals that you don't know what matters
- Trend over snapshot — a number without direction is trivia, not intelligence
- Progressive disclosure, not progressive overload — detail exists one interaction away, never competing with the headline

## DESIGN.md

```
---
version: "alpha"
name: "Executive Dashboard"
description: "Design an executive dashboard. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#1A1A1A"
secondary: "#4A4A4A"
tertiary: "#0066FF"
neutral: "#FFFFFF"
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
---

## Overview

Design an executive dashboard. Ideal for landing pages, modern websites. AI-ready template. Executive dashboards exist because CEOs don't analyze data — they consume signals. The distinction matters. An analyst dashboard is a workspace: filters, drill-downs, forty charts competing for attention. An executive dashboard is a verdict. Three numbers. Maybe five. Green or red. Done.

This pattern crystallized in the 2010s when mobile-first thinking forced designers to ask: what if the viewer has exactly six seconds? Turns out, that's generous for most C-suite interactions. The 'glanceable' philosophy isn't dumbing things down — it's respecting that a CEO's job is decision-making, not data exploration. They need the answer, not the journey.

The best executive dashboards borrow more from editorial design than from BI tools. Think magazine covers, not spreadsheets. A single dominant metric anchors the hierarchy. Supporting figures provide context without demanding attention. Everything else lives one tap away, for the rare moment someone actually wants to dig deeper.

- Density: 8/10 — Dense
- Variance: 3/10 — Restrained
- Motion: 6/10 — Expressive

- **Style:** BI/Analytics
- **Keywords:** High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- Palette derived from style keywords and era context

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

KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 480ms ease-out. Staggered cascades for lists: 100ms between items.
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
- No decorative gradients — flat color only
- No shadows heavier than 0 2px 8px rgba(0,0,0,0.08)
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do KPIs 4-6 maximum
- Do Trends visible
- Do Status colors clear
- Do One-page view
- Do Mobile simplified
- Do Print-friendly layout

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/executive-dashboard/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
display: flex for KPI row, large font-size (24-48px) for metrics, sparkline SVG inline, status indicators (border-left color), card shadows for hierarchy, responsive breakpoints
```

### Variables

```
--kpi-font-size: 48px, --sparkline-height: 32px, --status-green: #22C55E, --status-yellow: #F59E0B, --status-red: #EF4444, --card-min-width: 280px
```

### Checklist

☐ KPIs 4-6 maximum, ☐ Trends visible, ☐ Status colors clear, ☐ One-page view, ☐ Mobile simplified, ☐ Print-friendly layout

## Colors

### Effects

KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect

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

- **Name:** Executive Dashboard
- **Type:** BI/Analytics
- **Keywords:** High-level KPIs, large key metrics, minimal detail, summary view, trend indicators, at-a-glance insights, executive summary
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Brand colors, professional palette (blue/grey/white), accent for KPIs, red for alerts/concerns
- **Secondary:** KPI highlight colors: positive (green), negative (red), neutral (grey), trend arrow colors

## Visual Effects

KPI value animations (count-up), trend arrow direction animations, metric card hover lift, alert pulse effect

## AI Visual Direction

Design an executive dashboard. Use: large KPI cards (4-6 max), trend sparklines, high-level summary only, clean layout with white space, traffic light indicators (red/yellow/green), at-a-glance insights, minimal detail.

## CSS Technical

```css
display: flex for KPI row, large font-size (24-48px) for metrics, sparkline SVG inline, status indicators (border-left color), card shadows for hierarchy, responsive breakpoints
```

## Design System Variables

```css
--kpi-font-size: 48px, --sparkline-height: 32px, --status-green: #22C55E, --status-yellow: #F59E0B, --status-red: #EF4444, --card-min-width: 280px
```

## Implementation Checklist

- ☐ KPIs 4-6 maximum
- ☐ Trends visible
- ☐ Status colors clear
- ☐ One-page view
- ☐ Mobile simplified
- ☐ Print-friendly layout

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

[![Data-Dense Dashboard](https://designmd.app/images/library/28.png) Dados & Infografico ### Data-Dense Dashboard](https://designmd.app/library/data-dense-dashboard)[![Heat Map & Heatmap Style](https://designmd.app/images/library/29.png) Dados & Infografico ### Heat Map & Heatmap Style](https://designmd.app/library/heat-map-heatmap-style)[![Real-Time Monitoring](https://designmd.app/images/library/31.png) Dados & Infografico ### Real-Time Monitoring](https://designmd.app/library/real-time-monitoring)[![Drill-Down Analytics](https://designmd.app/images/library/32.png) Dados & Infografico ### Drill-Down Analytics](https://designmd.app/library/drill-down-analytics)[![Comparative Analysis Dashboard](https://designmd.app/images/library/33.png) Dados & Infografico ### Comparative Analysis Dashboard](https://designmd.app/library/comparative-analysis-dashboard)

Last synced: 4/1/2026
