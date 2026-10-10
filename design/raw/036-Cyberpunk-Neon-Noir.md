# Cyberpunk Neon Noir

- Source: <https://designmd.app/library/cyberpunk-neon-noir>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:01:53.239Z

Futurista & TechFuture Synth

# Cyberpunk Neon Noir

Cyberpunk landing page, neon noir style, dark background, glowing neon colors, glitch effects, futuristic ui, high contrast. Ideal for landing pages, modern websites. AI-ready template.

cyberpunkneonnoirdarkfuturisticglitchhigh-techglowing

Use case: Landing pages, Modern websites

![Cyberpunk Neon Noir](https://designmd.app/images/library/170.png)

## Historical Context

Cyberpunk Neon Noir isn't just cyberpunk with the saturation cranked up. It's a deliberate collision — the moral ambiguity of 1940s film noir dragged through rain-slicked streets lit by kanji-covered holograms. Ridley Scott's Blade Runner didn't invent this fusion, but it crystallized it. That perpetual rain. Those neon reflections pooling on wet asphalt. Darkness as the default state, punctuated by artificial light that never quite reaches the corners. Where generic cyberpunk leans into chrome and information overload, Neon Noir strips back. It's reductive. The palette is constrained — deep blacks, electric magentas, cold cyans — and the mood is heavy. Think detective stories told in light pollution. There's loneliness baked into the aesthetic; single figures dwarfed by towering advertisements, faces half-lit by screens nobody's watching. The genre owes as much to Raymond Chandler as it does to William Gibson. That's the distinction most designers miss. It's not about technology worship — it's about alienation rendered beautiful through contrast. Light against void. Signal against noise.

## When to Use

Reach for Neon Noir when your product lives after dark. Gaming interfaces that need atmospheric weight. Sci-fi apps where mood matters more than minimalism. Music platforms, night-economy tools, anything that speaks to users at 2AM. It works beautifully for edgy tech brands that want presence without corporate sterility — but commit fully. Half-measures read as dated. This aesthetic demands confidence in darkness and restraint with color. If your brand can't own the shadows, pick something else.

## Design Principles

- Darkness is the canvas, not the absence — let black dominate and earn every photon of color
- Wet surfaces multiply light — use reflections, gloss, and pooling effects to stretch neon across compositions
- Constrain your palette brutally — two or three neon accents maximum against near-black, never a rainbow
- Atmosphere over information — rain, fog, particle effects create depth and emotional weight before content does
- Typography glows but doesn't shout — letterforms should feel like signage seen through condensation, not billboards

## DESIGN.md

```
---
version: "alpha"
name: "Cyberpunk Neon Noir"
description: "Cyberpunk landing page, neon noir style, dark background, glowing neon colors, glitch effects, futuristic ui, high contrast. Ideal for landing pages, modern websites. AI-ready template."
colors:
primary: "#050512"
secondary: "#FFFFFF"
tertiary: "#00FFFF"
neutral: "#FF00FF"
surface: "#BC13FE"
accent: "#020205"
typography:
h1:
fontFamily: Orbitron
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Orbitron
fontSize: 1rem
fontWeight: 400
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Cyberpunk landing page, neon noir style, dark background, glowing neon colors, glitch effects, futuristic ui, high contrast. Ideal for landing pages, modern websites. AI-ready template. Cyberpunk Neon Noir isn't just cyberpunk with the saturation cranked up. It's a deliberate collision — the moral ambiguity of 1940s film noir dragged through rain-slicked streets lit by kanji-covered holograms. Ridley Scott's Blade Runner didn't invent this fusion, but it crystallized it. That perpetual rain. Those neon reflections pooling on wet asphalt. Darkness as the default state, punctuated by artificial light that never quite reaches the corners.

Where generic cyberpunk leans into chrome and information overload, Neon Noir strips back. It's reductive. The palette is constrained — deep blacks, electric magentas, cold cyans — and the mood is heavy. Think detective stories told in light pollution. There's loneliness baked into the aesthetic; single figures dwarfed by towering advertisements, faces half-lit by screens nobody's watching.

The genre owes as much to Raymond Chandler as it does to William Gibson. That's the distinction most designers miss. It's not about technology worship — it's about alienation rendered beautiful through contrast. Light against void. Signal against noise.

- Density: 5/10 — Balanced
- Variance: 8/10 — Expressive
- Motion: 8/10 — Cinematic

- **Style:** Technological, Urgent, High-Contrast
- **Keywords:** cyberpunk, neon, noir, dark, futuristic, glitch, high-tech, glowing
- **Era:** Future Synth
- **Light/Dark:** ✗ No / ✓ Full

## Colors

- **Background** (#050512) — Primary background surface
- **Text** (#FFFFFF) — Primary text color
- **Accent** (#00FFFF) — Primary accent, CTAs and interactive elements
- **Neon Pink** (#FF00FF) — Primary text color
- **Neon Purple** (#BC13FE) — Accent color, emphasis elements
- **Dark City** (#020205) — Deep contrast surface

## Typography

- **Display / Hero:** Orbitron — Weight 700, tight tracking, used for headline impact
- **Body:** Orbitron — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Orbitron — 0.875rem, weight 500, slight letter-spacing
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
- **Hero layout:** Asymmetric composition.
- **Feature sections:** Asymmetric grid with varied card sizes. No 3-equal-columns.
- **Mobile collapse:** All multi-column layouts collapse below 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Elevation & Depth

Holographic wireframes, brain and gear iconography, hexagonal grid overlays, digital noise, CRT scanlines, luminescent neon emission.

- **Physics:** Spring — stiffness 120, damping 20. Confident, weighted transitions.
- **Entry animations:** Fade + translate-Y (16px → 0) over 540ms ease-out. Staggered cascades for lists: 120ms between items.
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
- No pure white (#FFFFFF) backgrounds — use off-white or dark surfaces
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Dark background (black/blue)
- Do Neon colors (Cyan/Magenta)
- Do Glitch/Scanline effects
- Do Angular/Tech shapes
- Do Glowing text and borders

## Use Case

Landing pages, Modern websites
```

[Download DESIGN.md](https://designmd.app/library/cyberpunk-neon-noir/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background-color: #050512; color: #FFFFFF; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 10px #00FFFF; border: 1px solid #00FFFF; box-shadow: 0 0 10px #00FFFF;
```

### Variables

```
--bg-cyber: #050512, --neon-cyan: #00FFFF, --neon-pink: #FF00FF, --glow-strength: 10px, --font-cyber: 'Orbitron', sans-serif
```

### Checklist

☐ Dark background (black/blue), ☐ Neon colors (Cyan/Magenta), ☐ Glitch/Scanline effects, ☐ Angular/Tech shapes, ☐ Glowing text and borders

## Colors

Primary

#050512

#FFFFFF

#00FFFF

Secondary

#FF00FF

#BC13FE

#020205

### Effects

Holographic wireframes, brain and gear iconography, hexagonal grid overlays, digital noise, CRT scanlines, luminescent neon emission.

### Light/Dark

✗ No / ✓ Full

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Cyberpunk Neon Noir
- **Type:** Technological, Urgent, High-Contrast
- **Keywords:** cyberpunk, neon, noir, dark, futuristic, glitch, high-tech, glowing
- **Era:** Future Synth
- **Light/Dark:** ✗ No / ✓ Full

## Color Palette

- **Primary:** Background #050512, Text #FFFFFF, Accent #00FFFF
- **Secondary:** Neon Pink #FF00FF, Neon Purple #BC13FE, Dark City #020205

## Visual Effects

Holographic wireframes, brain and gear iconography, hexagonal grid overlays, digital noise, CRT scanlines, luminescent neon emission.

## AI Visual Direction

cyberpunk landing page, neon noir style, dark background, glowing neon colors, glitch effects, futuristic ui, high contrast.

## CSS Technical

```css
background-color: #050512; color: #FFFFFF; font-family: 'Orbitron', sans-serif; text-shadow: 0 0 10px #00FFFF; border: 1px solid #00FFFF; box-shadow: 0 0 10px #00FFFF;
```

## Design System Variables

```css
--bg-cyber: #050512, --neon-cyan: #00FFFF, --neon-pink: #FF00FF, --glow-strength: 10px, --font-cyber: 'Orbitron', sans-serif
```

## Implementation Checklist

- ☐ Dark background (black/blue)
- ☐ Neon colors (Cyan/Magenta)
- ☐ Glitch/Scanline effects
- ☐ Angular/Tech shapes
- ☐ Glowing text and borders

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

[![Futuristic UI Glassmorphism](https://designmd.app/images/library/174.png) Futurista & Tech ### Futuristic UI Glassmorphism](https://designmd.app/library/futuristic-ui-glassmorphism)[![Cyberpunk Dark Mode Flow](https://designmd.app/images/library/177.png) Futurista & Tech ### Cyberpunk Dark Mode Flow](https://designmd.app/library/cyberpunk-dark-mode-flow)[![Thermal Insight Tech](https://designmd.app/images/library/173.png) Futurista & Tech ### Thermal Insight Tech](https://designmd.app/library/thermal-insight-tech)[![Fractal Bioluminescence](https://designmd.app/images/library/175.png) Futurista & Tech ### Fractal Bioluminescence](https://designmd.app/library/fractal-bioluminescence)[![Glitch UI Dystopian Terminal](https://designmd.app/images/library/176.png) Futurista & Tech ### Glitch UI Dystopian Terminal](https://designmd.app/library/glitch-ui-dystopian-terminal)

Last synced: 4/1/2026
