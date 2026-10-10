# User Behavior Analytics

- Source: <https://designmd.app/library/user-behavior-analytics>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:06:48.359Z

Dados & Infografico2020s Modern

# User Behavior Analytics

User behavior analytics dashboard. Ideal for landing pages, modern websites. AI-ready template.

Funnel visualizationuser flow diagramsconversion trackingengagement metricsuser journey mappingcohort analysis

Use case: Landing pages, Modern websites

![User Behavior Analytics](https://designmd.app/images/library/35.png)

## Historical Context

The funnel is older than software. E. St. Elmo Lewis sketched AIDA — Attention, Interest, Desire, Action — in 1898 as a mental model for advertising. It took over a century for that metaphor to become a literal UI component. Early web analytics tools gave us raw numbers in tables. Then Mixpanel arrived and said: what if we actually showed the drop-off? That tapered shape, wide at the top and narrow at the bottom, became the canonical way product teams visualize intent decaying into action. Amplitude pushed it further. Suddenly you could break funnels by cohort, by device, by the weird edge case your PM swore didn't matter. The visual language solidified: horizontal bars shrinking left-to-right, or stacked trapezoids falling downward. Percentage labels between steps. Red for catastrophic drop-off. The aesthetic is utilitarian — nobody's winning design awards here — but it works because it maps directly to how growth teams think. Every step is a question: why did we lose 40% between signup and activation? Today funnels aren't just retrospective. Teams build them before shipping features, as hypotheses. The diagram becomes the spec. That's the real shift — from reporting tool to thinking tool.

## When to Use

Reach for funnel visualizations when you need to expose sequential drop-off in a user journey. They're essential for product analytics dashboards, onboarding flow audits, and any conversion tracking where stakeholders need to see where users bail. Growth teams live in these. Marketing uses them for campaign attribution. UX researchers use them to validate whether a redesigned flow actually reduced friction. If your data isn't sequential or doesn't have a clear start-to-end directionality, pick a different chart — funnels lie when the steps aren't truly linear.

## Design Principles

- Make drop-off the loudest signal — the gap between steps should be visually obvious without reading numbers
- Label conversion rates between steps, not just absolute counts — percentages tell the story faster
- Keep step count honest: 3-7 steps max before the visualization loses meaning and becomes decoration
- Use consistent directional flow (top-to-bottom or left-to-right) — never mix orientations within a single view
- Reserve color for anomalies, not decoration — highlight the step that's bleeding users, leave the rest neutral

## DESIGN.md

```
---
version: "alpha"
name: "User Behavior Analytics"
description: "User behavior analytics dashboard. Ideal for landing pages, modern websites. AI-ready template."
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

User behavior analytics dashboard. Ideal for landing pages, modern websites. AI-ready template. The funnel is older than software. E. St. Elmo Lewis sketched AIDA — Attention, Interest, Desire, Action — in 1898 as a mental model for advertising. It took over a century for that metaphor to become a literal UI component. Early web analytics tools gave us raw numbers in tables. Then Mixpanel arrived and said: what if we actually showed the drop-off? That tapered shape, wide at the top and narrow at the bottom, became the canonical way product teams visualize intent decaying into action.

Amplitude pushed it further. Suddenly you could break funnels by cohort, by device, by the weird edge case your PM swore didn't matter. The visual language solidified: horizontal bars shrinking left-to-right, or stacked trapezoids falling downward. Percentage labels between steps. Red for catastrophic drop-off. The aesthetic is utilitarian — nobody's winning design awards here — but it works because it maps directly to how growth teams think. Every step is a question: why did we lose 40% between signup and activation?

Today funnels aren't just retrospective. Teams build them before shipping features, as hypotheses. The diagram becomes the spec. That's the real shift — from reporting tool to thinking tool.

- Density: 8/10 — Dense
- Variance: 4/10 — Moderate
- Motion: 6/10 — Expressive

- **Style:** BI/Analytics
- **Keywords:** Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis
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

Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Funnel stages clear
- Do Flow diagram readable
- Do Conversions calculated
- Do Cohorts comparable
- Do Retention trends visible
- Do Privacy compliant

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/user-behavior-analytics/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
SVG funnel with gradients, Sankey diagram library, percentage labels, cohort grid cells, retention chart (line/area), click heatmap overlay, session timeline
```

### Variables

```
--funnel-width: 100%, --stage-colors: gradient, --flow-opacity: 0.6, --cohort-cell-size: 40px, --retention-line-color: #3B82F6, --engagement-scale: 5 levels
```

### Checklist

☐ Funnel stages clear, ☐ Flow diagram readable, ☐ Conversions calculated, ☐ Cohorts comparable, ☐ Retention trends visible, ☐ Privacy compliant

## Colors

### Effects

Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill

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

- **Name:** User Behavior Analytics
- **Type:** BI/Analytics
- **Keywords:** Funnel visualization, user flow diagrams, conversion tracking, engagement metrics, user journey mapping, cohort analysis
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Funnel stage colors: high engagement (green), drop-off (red), conversion (blue), user flow arrows (grey)
- **Secondary:** Stage completion colors (success), abandonment colors (warning), engagement levels (gradient), cohort colors

## Visual Effects

Funnel animation (fill-down), flow diagram animations (connection draw), conversion pulse, engagement bar fill

## AI Visual Direction

Design a user behavior analytics dashboard. Use: funnel visualization, user flow diagrams (Sankey), conversion metrics, engagement heatmaps, cohort tables, retention curves, session replay indicators.

## CSS Technical

```css
SVG funnel with gradients, Sankey diagram library, percentage labels, cohort grid cells, retention chart (line/area), click heatmap overlay, session timeline
```

## Design System Variables

```css
--funnel-width: 100%, --stage-colors: gradient, --flow-opacity: 0.6, --cohort-cell-size: 40px, --retention-line-color: #3B82F6, --engagement-scale: 5 levels
```

## Implementation Checklist

- ☐ Funnel stages clear
- ☐ Flow diagram readable
- ☐ Conversions calculated
- ☐ Cohorts comparable
- ☐ Retention trends visible
- ☐ Privacy compliant

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

[![Data-Dense Dashboard](https://designmd.app/images/library/28.png) Dados & Infografico ### Data-Dense Dashboard](https://designmd.app/library/data-dense-dashboard)[![Heat Map & Heatmap Style](https://designmd.app/images/library/29.png) Dados & Infografico ### Heat Map & Heatmap Style](https://designmd.app/library/heat-map-heatmap-style)[![Executive Dashboard](https://designmd.app/images/library/30.png) Dados & Infografico ### Executive Dashboard](https://designmd.app/library/executive-dashboard)[![Real-Time Monitoring](https://designmd.app/images/library/31.png) Dados & Infografico ### Real-Time Monitoring](https://designmd.app/library/real-time-monitoring)[![Drill-Down Analytics](https://designmd.app/images/library/32.png) Dados & Infografico ### Drill-Down Analytics](https://designmd.app/library/drill-down-analytics)

Last synced: 4/1/2026
