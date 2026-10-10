# Dark Mode (OLED)

- Source: <https://designmd.app/library/dark-mode-oled>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:19:20.292Z

Temas & Verticais2020s Modern

# Dark Mode (OLED)

Create an OLED-optimized dark interface with deep black (#000000), dark grey (#121212), midnight blue accents. Ideal for dashboards financeiros, apps criativas, mobile-first, gaming. AI-ready template.

Dark themelow lighthigh contrastdeep blackmidnight blueeye-friendlyOLEDnight modepower efficient

Use case: Financial dashboards, Creative apps, Mobile-first, Gaming

![Dark Mode (OLED)](https://designmd.app/images/library/7.png)

## Historical Context

OLED changed everything. When Samsung started shipping panels where black pixels literally turn off — zero power draw, zero light bleed — dark mode stopped being an aesthetic preference and became a hardware optimization. That's a fundamentally different conversation than "I like dark backgrounds." Spotify figured this out early. Their near-black UI wasn't just vibes; it was saving battery on every OLED phone in someone's pocket. Discord followed. GitHub shipped their dark mode in 2020 and then quietly added a "dark high contrast" option that pushes closer to true black. The pattern was clear: users on OLED screens wanted deeper blacks than the typical #1a1a1a dark theme could offer. Here's the distinction most people miss: regular dark mode uses dark grays (#121212, #1e1e1e) to avoid eye strain. OLED-optimized dark mode pushes backgrounds to #000000 or damn close to it, because on those panels, true black isn't just darker — it's literally off. Different technology, different design constraints, different rules.

## When to Use

Go full OLED dark when your audience is primarily mobile and you know they're on AMOLED screens. Financial dashboards where people stare for hours. Gaming interfaces. Creative tools used in dark studios. But here's the catch — pure #000000 backgrounds cause halation. White text on true black smears for people with astigmatism (that's like 30% of your users). So you need to be intentional. If your app is desktop-first or mixed-device, a standard dark gray is probably smarter. OLED dark is worth the extra effort when battery life and contrast ratio genuinely matter to your users.

## Design Principles

- Use #000000 for primary backgrounds but #0a0a0a or #0d0d0d for content surfaces — the 1-2% brightness difference eliminates halation while still triggering OLED pixel-off on most panels.
- Limit text-shadow glow effects to interactive elements and headings only. A subtle 10px spread looks premium on OLED but turns into visual noise if applied to body copy.
- Design elevation through subtle luminance steps, not shadows. On a true black background, box-shadows are invisible — use background-color shifts of 4-8% lightness per elevation level instead.
- Never place pure white (#fff) text directly on pure black (#000). Drop to #e0e0e0 or #ebebeb for body text. Reserve full white for headings and critical UI elements where the contrast punch is intentional.
- Build your dark-to-light transitions with a 150-200ms ease-out and transition background-color separately from text color. OLED pixels turning on/off have different response times than LCD, and staggering prevents the flash effect.

## DESIGN.md

```
---
version: "alpha"
name: "Dark Mode (OLED)"
description: "Create an OLED-optimized dark interface with deep black (#000000), dark grey (#121212), midnight blue accents. Ideal for dashboards financeiros, apps criativas, mobile-first, gaming. AI-ready template."
colors:
primary: "#000000"
secondary: "#121212"
tertiary: "#0A0E27"
neutral: "#39FF14"
surface: "#0080FF"
accent: "#FFD700"

typography:
h1:
fontFamily: -apple-system, sans-serif
fontSize: 2.25rem
fontWeight: 700
body-md:
fontFamily: -apple-system, sans-serif
fontSize: 1rem
fontWeight: 400
label-caps:
fontFamily: -apple-system, sans-serif
fontSize: 0.75rem
fontWeight: 500
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
padding: 12px
---

## Overview

Create an OLED-optimized dark interface with deep black (#000000), dark grey (#121212), midnight blue accents. Ideal for dashboards financeiros, apps criativas, mobile-first, gaming. AI-ready template. OLED changed everything. When Samsung started shipping panels where black pixels literally turn off — zero power draw, zero light bleed — dark mode stopped being an aesthetic preference and became a hardware optimization. That's a fundamentally different conversation than "I like dark backgrounds."

Spotify figured this out early. Their near-black UI wasn't just vibes; it was saving battery on every OLED phone in someone's pocket. Discord followed. GitHub shipped their dark mode in 2020 and then quietly added a "dark high contrast" option that pushes closer to true black. The pattern was clear: users on OLED screens wanted deeper blacks than the typical #1a1a1a dark theme could offer.

Here's the distinction most people miss: regular dark mode uses dark grays (#121212, #1e1e1e) to avoid eye strain. OLED-optimized dark mode pushes backgrounds to #000000 or damn close to it, because on those panels, true black isn't just darker — it's literally off. Different technology, different design constraints, different rules.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Dark, High-Contrast, Eye-Friendly, Power-Efficient
- **Keywords:** Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient
- **Era:** 2020s Modern
- **Light/Dark:** ✗ No / ✓ Only

## Colors

- **Deep Black** (#000000) — Dark surface, primary background
- **Dark Grey** (#121212) — Dark surface, primary background
- **Midnight Blue** (#0A0E27) — Dark surface, primary background
- **Neon Green** (#39FF14) — Success states, positive indicators
- **Electric Blue** (#0080FF) — Secondary accent
- **Gold** (#FFD700) — Premium accent, decorative highlights
- **Plasma Purple** (#BF00FF) — Accent color, emphasis elements

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

Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 4px. See rounded tokens in front matter for the full scale.

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

- Do Deep black #000000 or #121212
- Do Vibrant neon accents used
- Do Text contrast 7:1+
- Do Minimal glow effects
- Do OLED power optimization
- Do No white (#FFFFFF) background

## Use Case

Financial dashboards, Creative apps, Mobile-first, Gaming
```

[Download DESIGN.md](https://designmd.app/library/dark-mode-oled/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark
```

### Variables

```
--bg-black: #000000, --bg-dark-grey: #121212, --text-primary: #FFFFFF, --accent-neon: neon colors, --glow-effect: minimal, --oled-optimized: true
```

### Checklist

☐ Deep black #000000 or #121212, ☐ Vibrant neon accents used, ☐ Text contrast 7:1+, ☐ Minimal glow effects, ☐ OLED power optimization, ☐ No white (#FFFFFF) background

## Colors

Primary

#000000

#121212

#0A0E27

Secondary

#39FF14

#0080FF

#FFD700

#BF00FF

### Effects

Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus

### Light/Dark

✗ No / ✓ Only

## AI Prompt

```
Act as a Senior Frontend Engineer and Expert UI Designer.
Your task is to code a complete Landing Page on the first attempt.
- Landing Page Theme: <INSERT THEME>
- Sections to add: <INSERT SECTIONS>

Generate the final code immediately following these definitions:

## Style

- **Name:** Dark Mode (OLED)
- **Type:** Dark, High-Contrast, Eye-Friendly, Power-Efficient
- **Keywords:** Dark theme, low light, high contrast, deep black, midnight blue, eye-friendly, OLED, night mode, power efficient
- **Era:** 2020s Modern
- **Light/Dark:** ✗ No / ✓ Only

## Color Palette

- **Primary:** Deep Black #000000, Dark Grey #121212, Midnight Blue #0A0E27
- **Secondary:** Vibrant accents: Neon Green #39FF14, Electric Blue #0080FF, Gold #FFD700, Plasma Purple #BF00FF

## Visual Effects

Minimal glow (text-shadow: 0 0 10px), dark-to-light transitions, low white emission, high readability, visible focus

## AI Visual Direction

Create an OLED-optimized dark interface with deep black (#000000), dark grey (#121212), midnight blue accents. Use minimal glow effects, vibrant neon accents (green, blue, gold, purple), high contrast text. Optimize for eye comfort and OLED power saving.

## CSS Technical

```css
background: #000000 or #121212, color: #FFFFFF or #E0E0E0, text-shadow: 0 0 10px neon-color (sparingly), filter: brightness(0.8) if needed, color-scheme: dark
```

## Design System Variables

```css
--bg-black: #000000, --bg-dark-grey: #121212, --text-primary: #FFFFFF, --accent-neon: neon colors, --glow-effect: minimal, --oled-optimized: true
```

## Implementation Checklist

- ☐ Deep black #000000 or #121212
- ☐ Vibrant neon accents used
- ☐ Text contrast 7:1+
- ☐ Minimal glow effects
- ☐ OLED power optimization
- ☐ No white (#FFFFFF) background

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

[![Exaggerated Minimalism](https://designmd.app/images/library/47.png) Minimalismo & Swiss ### Exaggerated Minimalism](https://designmd.app/library/exaggerated-minimalism)[![Inclusive Design](https://designmd.app/images/library/17.png) Temas & Verticais ### Inclusive Design](https://designmd.app/library/inclusive-design)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Brutalism](https://designmd.app/images/library/4.png) Brutalismo ### Brutalism](https://designmd.app/library/brutalism-4)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
