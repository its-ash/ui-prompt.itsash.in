# Brutalist Web Design

- Source: <https://designmd.app/library/brutalist-web-design>
- Author: Fabricio Telles
- Saved: 2026-10-10T05:59:03.307Z

BrutalismoContemporary Anti-Design Movement

# Brutalist Web Design

Brutalist web landing page. Ideal for landing pages, saas. AI-ready template.

brutalistrawunpolishedconfrontationalmonospacedstark contrastanti-designutilitarianbold typographyexposed structure

Use case: Landing pages, SaaS

![Brutalist Web Design](https://designmd.app/images/library/115.png)

## Historical Context

Web brutalism borrowed the name but not the playbook. Architectural brutalism was about honest materials — raw concrete, exposed utilities, structural legibility. Web brutalism took that last part and ran with it. The movement crystallized around 2014–2016, when Pascal Deville's brutalistwebsites.com began archiving sites that rejected the polished sameness of Bootstrap-era design. Suddenly there was a canon: Craigslist, the Drudge Report, early Bloomberg, academic homepages that hadn't been touched since 1997. But here's the distinction that matters: web brutalism isn't just "ugly on purpose." It's a specific set of conventions. System fonts — Georgia, Times, Arial, or whatever the OS hands you. Default blue underlined links. Visible document structure where the HTML hierarchy *is* the design. No hero images. No smooth transitions. The page loads and it's done. You see the grid because there's nothing hiding it. The web-specific version also carries an implicit argument: that the browser's defaults were already a design system. A good one. Every layer of CSS you add is a choice to obscure that, and maybe you should justify each one.

## When to Use

When the content should feel unmediated. Art galleries where the work needs zero visual competition. Developer blogs where the writing is the interface. Independent publishers who want to signal "we spent the budget on journalism, not gradients." Experimental sites that treat the browser as material rather than canvas. Also works when you genuinely need speed — brutalist sites are fast by default because there's nothing to load. Not appropriate when users expect conventional wayfinding or when accessibility requires more visual hierarchy than raw HTML provides.

## Design Principles

- Use system fonts exclusively — the user's OS already made a typography decision, respect it
- Let HTML structure be visible — headings, lists, and links should look like what they are without cosmetic overrides
- Reject decorative layers that don't serve comprehension — every border, shadow, and gradient needs a functional justification
- Embrace the default stylesheet as a starting point, not a problem to solve
- Prioritize content density and immediacy over visual comfort — the page is a document, not a stage set

## DESIGN.md

```
---
version: "alpha"
name: "Brutalist Web Design"
description: "Brutalist web landing page. Ideal for landing pages, saas. AI-ready template."
colors:
primary: "#000000"
secondary: "#FFFFFF"
tertiary: "#FF0000"
neutral: "#0000FF"
surface: "#808080"
accent: "#FFFF00"
typography:
h1:
fontFamily: Courier New
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Courier New
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Brutalist web landing page. Ideal for landing pages, saas. AI-ready template. Web brutalism borrowed the name but not the playbook. Architectural brutalism was about honest materials — raw concrete, exposed utilities, structural legibility. Web brutalism took that last part and ran with it. The movement crystallized around 2014–2016, when Pascal Deville's brutalistwebsites.com began archiving sites that rejected the polished sameness of Bootstrap-era design. Suddenly there was a canon: Craigslist, the Drudge Report, early Bloomberg, academic homepages that hadn't been touched since 1997.

But here's the distinction that matters: web brutalism isn't just "ugly on purpose." It's a specific set of conventions. System fonts — Georgia, Times, Arial, or whatever the OS hands you. Default blue underlined links. Visible document structure where the HTML hierarchy *is* the design. No hero images. No smooth transitions. The page loads and it's done. You see the grid because there's nothing hiding it.

The web-specific version also carries an implicit argument: that the browser's defaults were already a design system. A good one. Every layer of CSS you add is a choice to obscure that, and maybe you should justify each one.

- Density: 7/10 — Compact
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Raw, Unpolished, Confrontational
- **Keywords:** brutalist, raw, unpolished, confrontational, monospaced, stark contrast, anti-design, utilitarian, bold typography, exposed structure
- **Era:** Contemporary Anti-Design Movement
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Pure Black** (#000000) — Dark surface, primary background
- **Pure White** (#FFFFFF) — Light surface, card backgrounds
- **Warning Red** (#FF0000) — Error states, destructive actions
- **System Blue** (#0000FF) — Accent highlight, links and focus states
- **Grey** (#808080) — Secondary text, borders, muted elements
- **Yellow Highlight** (#FFFF00) — Warning states, attention indicators

## Typography

- **Display / Hero:** Courier New — Weight 700, tight tracking, used for headline impact
- **Body:** Courier New — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Courier New — 0.875rem, weight 500, slight letter-spacing
- **Monospace:** Courier New — Used for code, metadata, and technical values

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

Visible grid structure, oversized typography, raw HTML aesthetic, thick harsh borders, no rounded corners, system fonts, deliberate misalignment, underlined links, monospace blocks, stark color blocks

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
- No rounded corners — sharp edges only
- No subtle shadows — use hard borders instead
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Visible grid structure
- Do Oversized typography
- Do Raw HTML aesthetic
- Do Thick harsh borders
- Do No rounded corners
- Do Deliberate misalignment

## Use Case

Landing pages, SaaS
```

[Download DESIGN.md](https://designmd.app/library/brutalist-web-design/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #FFFFFF, color: #000000, font-family: 'Courier New', monospace, border: 4px solid #000000, box-shadow: 8px 8px 0 #000000, border-radius: 0, text-decoration: underline, font-size: clamp(1rem, 3vw, 2.5rem), letter-spacing: -1px, .highlight { background: #FFFF00; padding: 2px 6px; }
```

### Variables

```
--pure-black-brutal: #000000, --pure-white-brutal: #FFFFFF, --warning-red-brutal: #FF0000, --system-blue-brutal: #0000FF, --brutal-border-width: 4px, --font-brutal: 'Courier New', monospace
```

### Checklist

☐ Visible grid structure, ☐ Oversized typography, ☐ Raw HTML aesthetic, ☐ Thick harsh borders, ☐ No rounded corners, ☐ Deliberate misalignment

## Colors

Primary

#000000

#FFFFFF

#FF0000

#0000FF

Secondary

#808080

#FFFF00

### Effects

Visible grid structure, oversized typography, raw HTML aesthetic, thick harsh borders, no rounded corners, system fonts, deliberate misalignment, underlined links, monospace blocks, stark color blocks

### Light/Dark

✓ Full / ✗ No

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Brutalist Web Design
- **Type:** Raw, Unpolished, Confrontational
- **Keywords:** brutalist, raw, unpolished, confrontational, monospaced, stark contrast, anti-design, utilitarian, bold typography, exposed structure
- **Era:** Contemporary Anti-Design Movement
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Pure Black #000000, Pure White #FFFFFF, Warning Red #FF0000, System Blue #0000FF
- **Secondary:** Grey #808080, Yellow Highlight #FFFF00

## Visual Effects

Visible grid structure, oversized typography, raw HTML aesthetic, thick harsh borders, no rounded corners, system fonts, deliberate misalignment, underlined links, monospace blocks, stark color blocks

## AI Visual Direction

Design a brutalist web landing page. Use: pure black and white, visible grid structure, oversized typography, raw HTML aesthetic, thick harsh borders, no rounded corners, system fonts, deliberate misalignment, monospace blocks.

## CSS Technical

```css
background: #FFFFFF, color: #000000, font-family: 'Courier New', monospace, border: 4px solid #000000, box-shadow: 8px 8px 0 #000000, border-radius: 0, text-decoration: underline, font-size: clamp(1rem, 3vw, 2.5rem), letter-spacing: -1px, .highlight { background: #FFFF00; padding: 2px 6px; }
```

## Design System Variables

```css
--pure-black-brutal: #000000, --pure-white-brutal: #FFFFFF, --warning-red-brutal: #FF0000, --system-blue-brutal: #0000FF, --brutal-border-width: 4px, --font-brutal: 'Courier New', monospace
```

## Implementation Checklist

- ☐ Visible grid structure
- ☐ Oversized typography
- ☐ Raw HTML aesthetic
- ☐ Thick harsh borders
- ☐ No rounded corners
- ☐ Deliberate misalignment

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

[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)[![Grunge Rock dos Anos 90](https://designmd.app/images/library/100.png) Brutalismo ### Grunge Rock dos Anos 90](https://designmd.app/library/grunge-rock-dos-anos-90)[![Gen Z Chaos / Maximalism](https://designmd.app/images/library/57.png) Temas & Verticais ### Gen Z Chaos / Maximalism](https://designmd.app/library/gen-z-chaos-maximalism)[![Reuso Criativo Disruptivo](https://designmd.app/images/library/249.png) Brasil ### Reuso Criativo Disruptivo](https://designmd.app/library/reuso-criativo-disruptivo)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
