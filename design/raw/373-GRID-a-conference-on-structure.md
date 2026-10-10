# GRID — a conference on structure

- Source: <https://designmd.app/library/swiss-grid-conference>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:10:27.243Z

Swiss/Grid1950s Swiss Modernism

# GRID — a conference on structure

Swiss/Grid style inspired by "GRID — a conference on structure". CSS Grid, Flexbox, Transitions.

swissgridconferencegradientgrid-layout

Use case: Swiss/Grid apps, Creative landing pages, Experimental projects

![GRID — a conference on structure](https://designmd.app/images/library/474.png)

## Historical Context

Contemporary style (1950s Swiss Modernism) combining CSS Grid and Flexbox with Neumorphism and Gradients.

## When to Use

Use for swiss/grid projects that need Neumorphism and Gradients effects.

## Design Principles

- Leverage CSS Grid for layout structure
- Apply Neumorphism consistently across components
- Maintain visual consistency

## DESIGN.md

```
---
version: "alpha"
name: "GRID — a conference on structure"
description: "Swiss/Grid style with CSS Grid and Flexbox."
colors:
primary: "#111111"
secondary: "#F7F7F5"
tertiary: "#E32219"
typography:
h1:
fontFamily: Helvetica Neue
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Helvetica Neue
fontSize: 1rem
fontWeight: 400
rounded:
sm: 4px
md: 8px
lg: 16px
spacing:
sm: 1rem
md: 2rem
lg: 4rem
---

## Overview

GRID — a conference on structure - Swiss/Grid style from the 1950s Swiss Modernism era.

- Density: 5/10
- Variance: 6/10
- Motion: 4/10 — Subtle

- **Style:** Swiss/Grid
- **Keywords:** swiss, grid, conference
- **Era:** 1950s Swiss Modernism
- **Light/Dark:** ✓ Light / ○ Dark

## Colors

- **#111111**
- **#F7F7F5**
- **#E32219**
- **#555**

## Typography

- **Helvetica Neue**

## Layout

- **Features:** CSS Grid, Flexbox, Transitions, Transforms, Gradients, Box Shadows

## Effects

- Neumorphism
- Gradients
- Hover Effects

## Use Case

Swiss/Grid apps, Landing pages, Experimental projects.
```

[Download DESIGN.md](https://designmd.app/library/swiss-grid-conference/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
CSS Grid, Flexbox, Transitions, Transforms, Gradients, Box Shadows
```

### Variables

```
--black: #111111, --white: #F7F7F5, --red: #E32219, --gutter: 1.2rem, --col-w: calc((100% - 11*var(--gutter))/12)
```

### Checklist

☐ CSS Grid ☐ Flexbox ☐ Transitions ☐ Responsive ☐ Acessibilidade

## Colors

Primary

#111111

#F7F7F5

#E32219

Secondary

#555

### Effects

Neumorphism, Gradients, Hover Effects

### Light/Dark

✓ Light / ○ Dark

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** GRID — a conference on structure
- **Type:** Swiss/Grid
- **Keywords:** swiss, grid, conference, gradient, grid-layout
- **Era:** 1950s Swiss Modernism
- **Light/Dark:** ✓ Light / ○ Dark

## Color Palette

- **Primary:** #111111, #F7F7F5, #E32219
- **Secondary:** #555

## Visual Effects

Neumorphism, Gradients, Hover Effects

## AI Visual Direction

Design a swiss/grid landing page inspired by "GRID — a conference on structure". Use: CSS Grid, Flexbox, Transitions, Transforms. Colors: #111111, #F7F7F5, #E32219. Effects: Neumorphism, Gradients, Hover Effects.

## CSS Technical

```css
CSS Grid, Flexbox, Transitions, Transforms, Gradients, Box Shadows
```

## Design System Variables

```css
--black: #111111, --white: #F7F7F5, --red: #E32219, --gutter: 1.2rem, --col-w: calc((100% - 11*var(--gutter))/12)
```

## Implementation Checklist

- ☐ CSS Grid ☐ Flexbox ☐ Transitions ☐ Responsive ☐ Acessibilidade

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

Last synced: 8/15/2026
