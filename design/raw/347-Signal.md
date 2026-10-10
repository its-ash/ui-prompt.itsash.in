# Signal

- Source: <https://designmd.app/library/signal>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:09:45.316Z

Minimalismo & SwissTimeless Classic

# Signal

Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Source Serif 4 typography. deep navy primary with warm bone paper alternate and a single muted-gold accent. Best for investor deck, consulting deliverable, board presentation. AI-ready design system.

Deep navymuted goldSource Serif 4institutionalweightypolishedtrustworthyscholarly

Use case: investor deck, consulting deliverable, board presentation, legal / policy brief, academic deck, advisory pitch, bilingual EN/CN deck

![Signal](https://designmd.app/images/library/450.png)

## Historical Context

Signal draws from the Swiss International Style's most restrained impulse — the belief that typography and negative space alone can carry authority. But where mid-century Swiss design operated in black and white newsprint, Signal reinterprets that discipline through the lens of private banking communications and premium editorial publishing. The deep navy ground isn't decorative; it's structural. It creates the same psychological weight that leather-bound reports and engraved stationery once carried in financial institutions. The pairing of Source Serif 4 with muted gold accents is deliberately anachronistic. Source Serif 4 has the optical refinement of a Plantin or a Times, but with contemporary spacing metrics that breathe on screen. The gold isn't aspirational — it's earned. Used sparingly, as a typographic accent or rule, it signals institutional confidence without the vulgarity of excess. This is design for contexts where trust is built through restraint, where every element present must justify its existence against the alternative of simply not being there.

## When to Use

Deploy Signal when the content itself is the product — long-form financial analysis, investment prospectuses, premium newsletters, or editorial platforms where readers pay for insight. It works when your audience expects sophistication without explanation, when the brand's credibility depends on visual quietness rather than visual noise. Avoid it for anything requiring warmth, approachability, or high-energy conversion. This system assumes the reader already trusts you enough to stay.

## Design Principles

- Negative space is load-bearing structure, not leftover emptiness — every margin is a deliberate decision about hierarchy and breathing room
- Color operates as punctuation, never as decoration — deep navy establishes gravity, muted gold marks emphasis the way an editor marks a pull quote
- Typography carries the entire emotional register — weight, size, and spacing do the work that imagery does in lesser systems
- Restraint compounds trust — each element you remove strengthens the authority of what remains
- Density is earned through information architecture, not visual compression — let content breathe at the cost of vertical space, never at the cost of legibility

## DESIGN.md

```
---
version: "alpha"
name: "Signal"
description: "Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Source Serif 4 typography. deep navy primary with warm bone paper alternate and a single muted-gold accent. Best for investor deck, consulting deliverable, board presentation. AI-ready design system."
colors:
primary: "#1c2644"
secondary: "#232f55"
tertiary: "#e2dcd0"
neutral: "#c8a870"
surface: "#f0ece3"
typography:
h1:
fontFamily: Source Serif 4
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Source Serif 4
fontSize: 1rem
fontWeight: 400
spacing:
sm: 1.0rem
md: 2.0rem
lg: 4.0rem
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Signal — Deep navy canvas with bone paper and a single muted-gold accent; institutional with quiet weight. Source Serif 4 typography. deep navy primary with warm bone paper alternate and a single muted-gold accent. Best for investor deck, consulting deliverable, board presentation. AI-ready design system. Signal draws from the Swiss International Style's most restrained impulse — the belief that typography and negative space alone can carry authority. But where mid-century Swiss design operated in black and white newsprint, Signal reinterprets that discipline through the lens of private banking communications and premium editorial publishing. The deep navy ground isn't decorative; it's structural. It creates the same psychological weight that leather-bound reports and engraved stationery once carried in financial institutions.

The pairing of Source Serif 4 with muted gold accents is deliberately anachronistic. Source Serif 4 has the optical refinement of a Plantin or a Times, but with contemporary spacing metrics that breathe on screen. The gold isn't aspirational — it's earned. Used sparingly, as a typographic accent or rule, it signals institutional confidence without the vulgarity of excess. This is design for contexts where trust is built through restraint, where every element present must justify its existence against the alternative of simply not being there.

- Density: 8/10 — Dense
- Variance: 8/10 — Complex
- Motion: 2/10 — Minimal

- **Style:** Institutional, Weighty, Classical-Serif, Polished
- **Keywords:** Deep navy, muted gold, Source Serif 4, institutional, weighty, polished, trustworthy, scholarly
- **Era:** Timeless Classic
- **Light/Dark:** ✓ Full / ◐ Partial

## Colors

- **Bg** (#1c2644) — Primary surface or dominant color
- **Bg Alt** (#232f55) — Accent highlight, links and focus states
- **Fg** (#e2dcd0) — Secondary accent
- **Accent** (#c8a870) — Accent color, emphasis elements
- **Bg Light** (#f0ece3) — Extended palette, decorative use

## Typography

- **Display / Hero:** Source Serif 4 — Weight 700, tight tracking, used for headline impact
- **Body:** DM Sans — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** DM Sans — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** IBM Plex Mono — Used for code, metadata, and technical values

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

display font Source Serif 4 for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, alternating light/dark sections for rhythm, deep navy full-bleed sections, muted-gold rule accents, bone paper cards, dense grid, compact 1.2rem gaps

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

## Components

- **Primary Button:** 4px border-radius. Accent color fill. Hover: 8% darken + subtle lift shadow. Active: -1px translate tactile press. Font weight 600. No outer glows.
- **Secondary / Ghost Button:** Outline variant. 1.5px border in muted color. Text in primary color. Hover: subtle background fill.
- **Cards:** 4px corners. Surface background. Subtle shadow (0 2px 12px rgba(0,0,0,0.06)). 1px border stroke.
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

- Do Source Serif 4 display font loaded via Google Fonts
- Do Color palette variables applied consistently
- Do Typography scale: hero clamp(2.5rem,5vw,4rem)
- Do H1 2.25rem
- Do body 1rem/1.6
- Do WCAG AA contrast ratio verified (4.5:1 body text)
- Do Serif typography hierarchy clear (display vs body)
- Do Whitespace generous — section gaps ≥ 5rem
- Do Mobile responsive layout (stack below 768px)

## Use Case

investor deck, consulting deliverable, board presentation, legal / policy brief, academic deck, advisory pitch, bilingual EN/CN deck
```

[Download DESIGN.md](https://designmd.app/library/signal/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Source Serif 4', serif; background: #1c2644; color: #e2dcd0; --accent: #c8a870; border-top: 1px solid #c8a870
```

### Variables

```
--bg: #1c2644, --fg: #e2dcd0, --accent: #c8a870, --font-display: 'Source Serif 4', --font-body: 'DM Sans', --radius: 4px, --spacing: 1rem
```

### Checklist

☐ Source Serif 4 display font loaded via Google Fonts, ☐ Color palette variables applied consistently, ☐ Typography scale: hero clamp(2.5rem,5vw,4rem), H1 2.25rem, body 1rem/1.6, ☐ WCAG AA contrast ratio verified (4.5:1 body text), ☐ Serif typography hierarchy clear (display vs body), ☐ Whitespace generous — section gaps ≥ 5rem, ☐ Mobile responsive layout (stack below 768px)

## Colors

Primary

#1c2644

#232f55

#e2dcd0

Secondary

#c8a870

#f0ece3

### Effects

display font Source Serif 4 for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, alternating light/dark sections for rhythm, deep navy full-bleed sections, muted-gold rule accents, bone paper cards, dense grid, compact 1.2rem gaps

### Light/Dark

✓ Full / ◐ Partial

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Signal
- **Type:** Institutional, Weighty, Classical-Serif, Polished
- **Keywords:** Deep navy, muted gold, Source Serif 4, institutional, weighty, polished, trustworthy, scholarly
- **Era:** Timeless Classic
- **Light/Dark:** ✓ Full / ◐ Partial

## Color Palette

- **Primary:** Bg #1c2644, Bg Alt #232f55, Fg #e2dcd0
- **Secondary:** Accent #c8a870, Bg Light #f0ece3

## Visual Effects

display font Source Serif 4 for hero headlines, smooth hover transitions (200-250ms), subtle lift shadows, alternating light/dark sections for rhythm, deep navy full-bleed sections, muted-gold rule accents, bone paper cards, dense grid, compact 1.2rem gaps

## AI Visual Direction

Design an institutional weighty layout on deep navy (#1c2644). Use: bone paper alternate slides (#f0ece3), muted gold accent (#c8a870) ONLY for rules and highlights, Source Serif 4 for display, DM Sans for body, IBM Plex Mono for data. Restrained and authoritative.

## CSS Technical

```css
font-family: 'Source Serif 4', serif; background: #1c2644; color: #e2dcd0; --accent: #c8a870; border-top: 1px solid #c8a870
```

## Design System Variables

```css
--bg: #1c2644, --fg: #e2dcd0, --accent: #c8a870, --font-display: 'Source Serif 4', --font-body: 'DM Sans', --radius: 4px, --spacing: 1rem
```

## Implementation Checklist

- ☐ Source Serif 4 display font loaded via Google Fonts
- ☐ Color palette variables applied consistently
- ☐ Typography scale: hero clamp(2.5rem,5vw,4rem)
- H1 2.25rem
- body 1rem/1.6
- ☐ WCAG AA contrast ratio verified (4.5:1 body text)
- ☐ Serif typography hierarchy clear (display vs body)
- ☐ Whitespace generous — section gaps ≥ 5rem
- ☐ Mobile responsive layout (stack below 768px)

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

[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)[![Bossa Nova Lounge](https://designmd.app/images/library/240.png) Brasil ### Bossa Nova Lounge](https://designmd.app/library/bossa-nova-lounge)[![Happy Art Tropical](https://designmd.app/images/library/236.png) Brasil ### Happy Art Tropical](https://designmd.app/library/happy-art-tropical)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)

Last synced: 5/6/2026
