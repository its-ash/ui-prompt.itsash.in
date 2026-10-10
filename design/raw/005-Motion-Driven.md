# Motion-Driven

- Source: <https://designmd.app/library/motion-driven>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:14:34.285Z

Futurista & Tech2020s Modern

# Motion-Driven

Build an animation-heavy interface with scroll-triggered animations, microinteractions, parallax scrolling (3-5 layers), smooth transitions (300-400ms), entrance animations, page transitions. Ideal for landing pages, saas. AI-ready template.

Animation-heavymicrointeractionssmooth transitionsscroll effectsparallaxentrance animpage transitions

Use case: Landing pages, SaaS

![Motion-Driven](https://designmd.app/images/library/15.png)

## Historical Context

We've been here before. Flash gave us timeline-based animation in the early 2000s — entire sites that moved, morphed, played sound. It was intoxicating and completely inaccessible. When Flash died, the web went static for years. Then GSAP quietly kept the torch burning, giving developers a performant animation engine without the plugin dependency. Framer Motion arrived later and made React developers feel like animators overnight. The real inflection point was Apple. Their product pages — iPhone, AirPods, Mac Pro — turned scrolling into cinema. Suddenly every agency wanted scroll-triggered storytelling. The "scroll-telling" trend exploded: elements pinned, text fading in on cue, 3D objects rotating as you moved down the page. It became the new standard for premium. But here's the tension nobody talks about honestly: motion costs. Every animation is a performance bet. Every parallax layer is a compositing decision. The best motion-driven sites feel effortless precisely because someone spent weeks optimizing what looks like nothing. Delight without jank — that's the actual craft.

## When to Use

Motion-driven design earns its place when movement carries meaning — revealing a product's form factor, guiding attention through a narrative, creating emotional pacing. Agency portfolios, product launches, editorial storytelling. It works when the motion IS the content, not decoration on top of it. Skip it for dashboards, documentation, e-commerce catalogs — anywhere people need to scan and act fast. If your scroll animations make users wait to read the next paragraph, you've failed. Motion should feel like the page is breathing, not performing.

## Design Principles

- Purpose over spectacle — every animation must answer 'what does this help the user understand?' If you can't answer that, delete it.
- Scroll velocity awareness — animations should respect how fast someone is scrolling. Nobody wants to wait for your timeline to finish playing.
- Progressive enhancement as religion — the site works without motion. Animations layer on top for capable devices and willing users (prefers-reduced-motion is non-negotiable).
- Choreography over chaos — elements enter and exit with coordinated timing. Stagger intentionally. If everything moves at once, nothing moves.
- Performance budget per fold — set a hard limit on animated elements visible simultaneously. Composited transforms only. No layout thrashing, no paint storms.

## DESIGN.md

```
---
version: "alpha"
name: "Motion-Driven"
description: "Build an animation-heavy interface with scroll-triggered animations, microinteractions, parallax scrolling (3-5 layers), smooth transitions (300-400ms), entrance animations, page transitions. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#22C55E"
secondary: "#EF4444"
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
padding: 12px
---

## Overview

Build an animation-heavy interface with scroll-triggered animations, microinteractions, parallax scrolling (3-5 layers), smooth transitions (300-400ms), entrance animations, page transitions. Ideal for landing pages, saas. AI-ready template. We've been here before. Flash gave us timeline-based animation in the early 2000s — entire sites that moved, morphed, played sound. It was intoxicating and completely inaccessible. When Flash died, the web went static for years. Then GSAP quietly kept the torch burning, giving developers a performant animation engine without the plugin dependency. Framer Motion arrived later and made React developers feel like animators overnight.

The real inflection point was Apple. Their product pages — iPhone, AirPods, Mac Pro — turned scrolling into cinema. Suddenly every agency wanted scroll-triggered storytelling. The "scroll-telling" trend exploded: elements pinned, text fading in on cue, 3D objects rotating as you moved down the page. It became the new standard for premium.

But here's the tension nobody talks about honestly: motion costs. Every animation is a performance bet. Every parallax layer is a compositing decision. The best motion-driven sites feel effortless precisely because someone spent weeks optimizing what looks like nothing. Delight without jank — that's the actual craft.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 8/10 — Cinematic

- **Style:** Animated, Kinetic, Scroll-Driven, Dynamic
- **Keywords:** Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Colors

- **Green** (#22C55E) — Success states, positive indicators
- **Red** (#EF4444) — Error states, destructive actions

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

Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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

- Do Scroll animations active
- Do Parallax 3-5 layers
- Do Entrance animations smooth
- Do Page transitions fluid
- Do GPU accelerated
- Do Prefers-reduced-motion respected

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/motion-driven/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
animation: @keyframes scroll-reveal, transform: translateY/X, Intersection Observer API, will-change: transform, scroll-behavior: smooth, animation-duration: 300-400ms
```

### Variables

```
--animation-duration: 300-400ms, --parallax-layers: 5, --scroll-behavior: smooth, --gpu-accelerated: true, --entrance-animation: true, --page-transition: smooth
```

### Checklist

☐ Scroll animations active, ☐ Parallax 3-5 layers, ☐ Entrance animations smooth, ☐ Page transitions fluid, ☐ GPU accelerated, ☐ Prefers-reduced-motion respected

## Colors

Secondary

#22C55E

#EF4444

### Effects

Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions

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

- **Name:** Motion-Driven
- **Type:** Animated, Kinetic, Scroll-Driven, Dynamic
- **Keywords:** Animation-heavy, microinteractions, smooth transitions, scroll effects, parallax, entrance anim, page transitions
- **Era:** 2020s Modern
- **Light/Dark:** ✓ Full / ✓ Full

## Color Palette

- **Primary:** Bold colors emphasize movement, high contrast animated, dynamic gradients, accent action colors
- **Secondary:** Transitional states, success (Green #22C55E), error (Red #EF4444), neutral feedback

## Visual Effects

Scroll anim (Intersection Observer), hover (300-400ms), entrance, parallax (3-5 layers), page transitions

## AI Visual Direction

Build an animation-heavy interface with scroll-triggered animations, microinteractions, parallax scrolling (3-5 layers), smooth transitions (300-400ms), entrance animations, page transitions. Use Intersection Observer for scroll effects, transform for performance, GPU acceleration.

## CSS Technical

```css
animation: @keyframes scroll-reveal, transform: translateY/X, Intersection Observer API, will-change: transform, scroll-behavior: smooth, animation-duration: 300-400ms
```

## Design System Variables

```css
--animation-duration: 300-400ms, --parallax-layers: 5, --scroll-behavior: smooth, --gpu-accelerated: true, --entrance-animation: true, --page-transition: smooth
```

## Implementation Checklist

- ☐ Scroll animations active
- ☐ Parallax 3-5 layers
- ☐ Entrance animations smooth
- ☐ Page transitions fluid
- ☐ GPU accelerated
- ☐ Prefers-reduced-motion respected

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

[![Liquid Glass](https://designmd.app/images/library/14.png) Flat & Soft UI ### Liquid Glass](https://designmd.app/library/liquid-glass)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Neumorphism](https://designmd.app/images/library/2.png) Flat & Soft UI ### Neumorphism](https://designmd.app/library/neumorphism)[![Glassmorphism](https://designmd.app/images/library/3.png) Flat & Soft UI ### Glassmorphism](https://designmd.app/library/glassmorphism)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)

Last synced: 4/1/2026
