# Notebook Tabs

- Source: <https://designmd.app/library/notebook-tabs>
- Author: Fabricio Telles
- Saved: 2026-10-10T06:04:19.314Z

Editorial & Tipografia2024-2026 Editorial Tactile

# Notebook Tabs

Design an editorial, organized landing page that looks like a notebook. Ideal for blogs editoriais, digital magazines, portfolios criativos, educational platforms. AI-ready template.

editorialnotebooktabscream papercolorful tabsBodoni ModaDM Sansorganizedeleganttactilebinder holes

Use case: Blogs editoriais, Digital magazines, Portfolios criativos, Educational platforms

![Notebook Tabs](https://designmd.app/images/library/262.png)

## Historical Context

Notebook tabs didn't emerge from software. They're a direct lift from physical filing systems — those plastic dividers with printed labels that let you thumb through a binder without reading every page. The metaphor worked because everyone already understood it. Early HyperCard stacks and Apple's Newton used tab-like navigation to organize cards of information, treating each section as a discrete page you could flip to. What's interesting is how the pattern diverged once it hit digital. Browser tabs became about parallel contexts — multiple documents open simultaneously. But notebook tabs kept the original promise: sequential organization within a single document or workspace. They're closer to a table of contents made interactive. Notion, Obsidian, and Bear all use variations of this pattern, though they rarely call them "tabs" anymore. The language shifted to "pages" or "sections," but the interaction model — click a labeled edge to reveal its content — remains unchanged from those plastic binder dividers. The best implementations preserve that physicality. A slight overlap, a shadow suggesting depth, a sense that content exists behind the active surface rather than being conjured on demand.

## When to Use

When users manage multiple related sections within a single context and need fast, non-destructive switching between them. Notebook tabs work best when the sections are peer-level — none is more important than another — and when users build mental models around named categories they define themselves. If your content is hierarchical rather than lateral, use a sidebar tree instead. If sections exceed seven or eight, tabs collapse into meaninglessness; consider a different navigation pattern entirely.

## Design Principles

- Maintain spatial consistency — tab content areas must never shift position or resize when switching between tabs, or you destroy the user's spatial memory.
- Make the active tab physically connected to its content panel. Remove the bottom border, overlap it slightly, use elevation — whatever it takes to visually merge tab and content into one surface.
- Keep tab labels short and scannable. Two words maximum. If you need a sentence to describe a tab, your information architecture is broken.
- Support user-defined ordering. People organize by personal logic, not alphabetical or chronological defaults. Drag-to-reorder isn't a nice-to-have — it's the whole point of tabs over a fixed nav.
- Design for accumulation. Notebook tabs in real usage grow over time. Your layout must handle one tab and forty tabs without a redesign — overflow behavior, scrolling, and progressive disclosure need to be first-class concerns from day one.

## DESIGN.md

```
---
version: "alpha"
name: "Notebook Tabs"
description: "Design an editorial, organized landing page that looks like a notebook. Ideal for blogs editoriais, digital magazines, portfolios criativos, educational platforms. AI-ready template."
colors:
primary: "#2d2d2d"
secondary: "#f8f6f1"
tertiary: "#1a1a1a"
neutral: "#98d4bb"
surface: "#c7b8ea"
accent: "#f4b8c5"
typography:
h1:
fontFamily: Bodoni Moda
fontSize: 2.5rem
fontWeight: 700
body-md:
fontFamily: Bodoni Moda
fontSize: 1rem
fontWeight: 400
rounded:
sm: 8px
md: 16px
lg: 24px
components:
button-primary:
backgroundColor: "{colors.primary}"
textColor: "{colors.neutral}"
rounded: "{rounded.sm}"
padding: 12px
---

## Overview

Design an editorial, organized landing page that looks like a notebook. Ideal for blogs editoriais, digital magazines, portfolios criativos, educational platforms. AI-ready template. Notebook tabs didn't emerge from software. They're a direct lift from physical filing systems — those plastic dividers with printed labels that let you thumb through a binder without reading every page. The metaphor worked because everyone already understood it. Early HyperCard stacks and Apple's Newton used tab-like navigation to organize cards of information, treating each section as a discrete page you could flip to.

What's interesting is how the pattern diverged once it hit digital. Browser tabs became about parallel contexts — multiple documents open simultaneously. But notebook tabs kept the original promise: sequential organization within a single document or workspace. They're closer to a table of contents made interactive. Notion, Obsidian, and Bear all use variations of this pattern, though they rarely call them "tabs" anymore. The language shifted to "pages" or "sections," but the interaction model — click a labeled edge to reveal its content — remains unchanged from those plastic binder dividers.

The best implementations preserve that physicality. A slight overlap, a shadow suggesting depth, a sense that content exists behind the active surface rather than being conjured on demand.

- Density: 5/10 — Balanced
- Variance: 4/10 — Moderate
- Motion: 4/10 — Subtle

- **Style:** Editorial, Organized, Elegant, Tactile
- **Keywords:** editorial, notebook, tabs, cream paper, colorful tabs, Bodoni Moda, DM Sans, organized, elegant, tactile, binder holes
- **Era:** 2024-2026 Editorial Tactile
- **Light/Dark:** ✓ Full / ✗ No

## Colors

- **Outer Dark** (#2d2d2d) — Dark surface, primary background
- **Page Cream** (#f8f6f1) — Light surface, card backgrounds
- **Text Dark** (#1a1a1a) — Dark surface, primary background
- **Tab Mint** (#98d4bb) — Extended palette, decorative use
- **Tab Lavender** (#c7b8ea) — Extended palette, decorative use
- **Tab Pink** (#f4b8c5) — Primary text color
- **Tab Sky** (#a8d8ea) — Extended palette, decorative use
- **Tab Cream** (#ffe6a7) — Secondary surface

## Typography

- **Display / Hero:** Bodoni Moda — Weight 700, tight tracking, used for headline impact
- **Accent:** DM Sans — Used for decorative or emphasis text
- **Body:** Bodoni Moda — Weight 400, 16px/1.6 line-height, max 72ch per line
- **UI Labels / Captions:** Bodoni Moda — 0.875rem, weight 500, slight letter-spacing
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

Paper container with subtle shadow, colorful section tabs on right edge with vertical text, binder hole decorations on left, tab text scales with viewport clamp(), smooth page-turn transitions 300ms

- **Physics:** Ease-out curves, 200-300ms duration. Smooth and predictable.
- **Entry animations:** Fade + translate-Y (16px → 0) over 420ms ease-out. Staggered cascades for lists: 80ms between items.
- **Hover states:** Subtle color shift + shadow adjustment over 200ms.
- **Page transitions:** Fade only (200ms).
- **Performance:** Only transform and opacity animated. No layout-triggering properties.

## Shapes

Base corner radius: 8px. See rounded tokens in front matter for the full scale.

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
- No pure black (#000000) — use off-black or charcoal variants
- No oversaturated accent colors (saturation cap: 80%)
- No 3-column equal-width feature layouts — use zig-zag or asymmetric grid
- No `h-screen` — use `min-h-[100dvh]`
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen"
- No broken external image links — use picsum.photos or inline SVG
- No generic lorem ipsum in demos

- Do Bodoni Moda + DM Sans carregados
- Do Paper container cream #f8f6f1
- Do Dark outer background #2d2d2d
- Do Colorful tabs na borda direita
- Do Vertical text nos tabs
- Do Binder holes na esquerda
- Do Tab text com clamp()
- Do Responsivo mobile/tablet/desktop

## Use Case

Blogs editoriais, Digital magazines, Portfolios criativos, Educational platforms
```

[Download DESIGN.md](https://designmd.app/library/notebook-tabs/design.md) Copy DESIGN.md

## Technical Specs

### CSS

```
font-family: 'Bodoni Moda' for headings, 'DM Sans' for body, .page { background: #f8f6f1; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 8px }, .tab { writing-mode: vertical-rl; font-size: clamp(0.5rem, 1vh, 0.7rem); padding: 12px 6px; border-radius: 0 8px 8px 0 }, .binder-hole { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #ccc; background: #2d2d2d }
```

### Variables

```
--bg-outer: #2d2d2d, --bg-page: #f8f6f1, --text-primary: #1a1a1a, --tab-1: #98d4bb, --tab-2: #c7b8ea, --tab-3: #f4b8c5, --tab-4: #a8d8ea, --tab-5: #ffe6a7, --font-display: 'Bodoni Moda', --font-body: 'DM Sans', --tab-font-size: clamp(0.5rem, 1vh, 0.7rem)
```

### Checklist

☐ Bodoni Moda + DM Sans carregados, ☐ Paper container cream #f8f6f1, ☐ Dark outer background #2d2d2d, ☐ Colorful tabs na borda direita, ☐ Vertical text nos tabs, ☐ Binder holes na esquerda, ☐ Tab text com clamp(), ☐ Responsivo mobile/tablet/desktop

## Colors

Primary

#2d2d2d

#f8f6f1

#1a1a1a

Secondary

#98d4bb

#c7b8ea

#f4b8c5

#a8d8ea

#ffe6a7

### Effects

Paper container with subtle shadow, colorful section tabs on right edge with vertical text, binder hole decorations on left, tab text scales with viewport clamp(), smooth page-turn transitions 300ms

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

- **Name:** Notebook Tabs
- **Type:** Editorial, Organized, Elegant, Tactile
- **Keywords:** editorial, notebook, tabs, cream paper, colorful tabs, Bodoni Moda, DM Sans, organized, elegant, tactile, binder holes
- **Era:** 2024-2026 Editorial Tactile
- **Light/Dark:** ✓ Full / ✗ No

## Color Palette

- **Primary:** Outer Dark #2d2d2d, Page Cream #f8f6f1, Text Dark #1a1a1a
- **Secondary:** Tab Mint #98d4bb, Tab Lavender #c7b8ea, Tab Pink #f4b8c5, Tab Sky #a8d8ea, Tab Cream #ffe6a7

## Visual Effects

Paper container with subtle shadow, colorful section tabs on right edge with vertical text, binder hole decorations on left, tab text scales with viewport clamp(), smooth page-turn transitions 300ms

## AI Visual Direction

Design an editorial, organized landing page that looks like a notebook. Use cream paper card (#f8f6f1) on dark background (#2d2d2d). Add colorful section tabs on the right edge with vertical text (mint, lavender, pink, sky, cream). Include binder hole decorations on the left side. Use Bodoni Moda (400/700) for display and DM Sans (400/500) for body. Tab text must scale: font-size: clamp(0.5rem, 1vh, 0.7rem).

## CSS Technical

```css
font-family: 'Bodoni Moda' for headings, 'DM Sans' for body, .page { background: #f8f6f1; box-shadow: 0 4px 20px rgba(0,0,0,0.15); border-radius: 8px }, .tab { writing-mode: vertical-rl; font-size: clamp(0.5rem, 1vh, 0.7rem); padding: 12px 6px; border-radius: 0 8px 8px 0 }, .binder-hole { width: 12px; height: 12px; border-radius: 50%; border: 2px solid #ccc; background: #2d2d2d }
```

## Design System Variables

```css
--bg-outer: #2d2d2d, --bg-page: #f8f6f1, --text-primary: #1a1a1a, --tab-1: #98d4bb, --tab-2: #c7b8ea, --tab-3: #f4b8c5, --tab-4: #a8d8ea, --tab-5: #ffe6a7, --font-display: 'Bodoni Moda', --font-body: 'DM Sans', --tab-font-size: clamp(0.5rem, 1vh, 0.7rem)
```

## Implementation Checklist

- ☐ Bodoni Moda + DM Sans carregados
- ☐ Paper container cream #f8f6f1
- ☐ Dark outer background #2d2d2d
- ☐ Colorful tabs na borda direita
- ☐ Vertical text nos tabs
- ☐ Binder holes na esquerda
- ☐ Tab text com clamp()
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

[![Editorial Grid / Magazine](https://designmd.app/images/library/66.png) Editorial & Tipografia ### Editorial Grid / Magazine](https://designmd.app/library/editorial-grid-magazine)[![Vintage Editorial](https://designmd.app/images/library/265.png) Editorial & Tipografia ### Vintage Editorial](https://designmd.app/library/vintage-editorial)[![E-Ink / Paper](https://designmd.app/images/library/56.png) Minimalismo & Swiss ### E-Ink / Paper](https://designmd.app/library/e-ink-paper)[![Chalkboard / Hand-Drawn](https://designmd.app/images/library/76.png) Arte & Ilustracao ### Chalkboard / Hand-Drawn](https://designmd.app/library/chalkboard-hand-drawn)[![Minimalism & Swiss Style](https://designmd.app/images/library/1.png) Minimalismo & Swiss ### Minimalism & Swiss Style](https://designmd.app/library/minimalism-swiss-style)

Last synced: 4/1/2026
