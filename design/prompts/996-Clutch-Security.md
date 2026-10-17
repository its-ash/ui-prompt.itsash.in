# Landing Page Build Prompt — Clutch Security Style (Fictional Brand)

## 1. Project Overview

Build a complete, responsive landing page for a **fictional** B2B security/SaaS brand. Invent an original brand name, product name, tagline, and all copy. Never use "Clutch Security," its logo, trademarks, or product names anywhere in the markup, assets, or copy. Reuse only the visual style described below.

**Theme:** Light (gallery-white minimalism). Dark mode must also be fully defined per Section 3.

**Deliverables:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere. Use one consistent class-naming convention (BEM) across the entire deliverable. No lorem-ipsum where real copy is expected — write plausible, original marketing copy for every section.

## 2. Design Tokens (`:root`)

Define all tokens as CSS variables. Light mode is default; dark mode overrides under `@media (prefers-color-scheme: dark)` and a `.dark` class.

**Colors (Light):**
- `--color-electric-cobalt: #004dff` (primary action accent, single-use per page)
- `--color-periwinkle-wash: #d9e4ff`
- `--color-lavender-veil: #e6c5f7`
- `--color-obsidian: #000000` (primary text, button fills)
- `--color-graphite: #6e6e6e` (secondary text)
- `--color-stone: #c9c9c9`
- `--color-ash: #d9d9d9`
- `--color-pewter: #dfdfdf` (secondary borders)
- `--color-slate-mist: #e5e7eb` (primary hairline borders)
- `--color-fog: #f9fafb` (subtle section lift)
- `--color-canvas: #ffffff` (page/card background)

**Semantic aliases (required by meta-rules):** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. Map these to the palette above with correct contrast pairing (light bg → dark text; dark bg → light text).

**Dark mode:** Invert surfaces (canvas → near-black `#0a0a0a`, fog → `#141414`), keep Electric Cobalt as accent, switch text to `#f5f5f5`/`#a0a0a0`, borders to `#2a2a2a`. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Provide a visible toggle control with correct `aria-pressed`/`aria-label`.

**Light background rule:** Do not use pure `#ffffff` where a near-white is needed for secondary surfaces — use `#fefefe`. Reserve `#ffffff` for the dominant Canvas surface.

**Typography (Google Fonts mandatory):**
- Display/heading: Load **Space Grotesk** from Google Fonts as the substitute for PP Radio Grotesk (weights 400, 500, 600). Bind to `--font-display`.
- UI/body: Load **Inter** from Google Fonts (weights 400, 500, 700). Bind to `--font-base`.
- Icons: Google Material Symbols (outlined). Forbid raw inline SVGs or local icon files.

**Type scale tokens:** `--text-caption` (10px/1.3/0.16em), `--text-body` (16px/1.5/-0.02em), `--text-subheading` (20px/1.4/-0.01em), `--text-heading-sm` (26px/1.3/-0.01em), `--text-heading` (38px/1.2/-0.01em), `--text-heading-lg` (56px/1.1/-0.01em), `--text-display` (68px/1.1/-0.01em).

**Spacing & shapes:**
- Base unit 8px. Spacing scale: 8, 16, 24, 32, 40, 48, 64, 72, 80, 88, 96 → `--spacing-8` … `--spacing-96`.
- Border radius: cards/badges/inputs/buttons `6px` (`--radius-sm`/`--radius-md`), illustration `80px` (`--radius-lg`).
- Shadow: `--shadow-sm: rgba(0,0,0,0.16) 0px 2px 6px 0px`. No other shadows.
- `--spacing-gap: 16px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

## 3. Layout & Responsive Rules

- Centered, max-width `1200px` container. Section gap `80px` (`--spacing-80`).
- Flexbox for all layout. Every flex container defaults to `align-items: center` unless explicitly justified.
- Mobile-first: rows collapse to columns below 768px. No horizontal scrolling.
- Card padding `24px`, element gap `16px`.
- Smooth CSS transitions on all state changes, respecting `prefers-reduced-motion`.

## 4. Component Specifications

### 4.1 Navigation Header
Sticky top bar, Canvas background, no border/shadow. Left: fictional wordmark + mark in Obsidian. Center: Inter 14px nav links (Platform, Solutions, Use Cases, Resources, Company) in Obsidian with 24–32px gaps. Right: Primary CTA Button (Filled Black). Include dark-mode toggle with `aria-pressed`.

### 4.2 Hero
Full-bleed Canvas band. Centered display headline at 68px Space Grotesk, line-height 1.10, letter-spacing -0.01em, Obsidian. **Mixed-weight technique:** 1–2 key words at weight 600, supporting words at weight 400 — never bold an entire sentence. Create a fictional tagline sentence. Below: Inter 17px subtext in Graphite, centered, max-width ~640px. Then a single Electric Cobalt CTA button ("Book a demo" equivalent) and an Outlined Action Button ("See … in Action →"). Below the buttons: a 3D orbital illustration placeholder — a dark Obsidian sphere with a lavender brand mark and orbiting circular icon tokens on Canvas badges with Pewter borders. Use an 80px radius container. 80px top padding.

### 4.3 Features (3 cards)
Two-column comparison-style card grid (or 3-column on desktop collapsing to 1 on mobile). Each card: Canvas fill, Pewter 1px border, 6px radius, 24px padding. Top: a Google Material Symbol icon at ~48px in Obsidian. Heading: Space Grotesk 26px weight 600, Obsidian. Body: Inter 16px in Graphite. Bottom: a Status Badge pill — Fog background, Graphite text, 6px radius, 4px/10px padding, uppercase PP/Space Grotesk 12px weight 500, letter-spacing 0.12em. Invent 3 feature names and badge labels.

### 4.4 How It Works (3 steps)
Centered section headline (mixed-weight). Three steps in a horizontal flex row (stack on mobile). Each step: a numbered circle (Obsidian fill, Canvas text, 6px radius or pill), a Space Grotesk 20px heading, Inter 16px description. Connector lines between steps in Slate Mist 1px. Generous 80px section gap above.

### 4.5 Testimonials
Centered section headline. 2–3 testimonial cards in a flex row. Each: Canvas fill, Slate Mist 1px border, 6px radius, 24px padding. Quote in Inter 17px Graphite (not centered — left-aligned per rules). Attribution: name in Obsidian weight 500, role/company in Graphite 14px. No avatars (use initials in a 6px-radius Obsidian circle) — or omit avatars entirely.

### 4.6 Pricing (3 tiers)
Three pricing cards in a flex row. Middle card may use Periwinkle Wash background as the "highlighted" tier (the single brand-tinted surface). Each: 6px radius, 24px padding, Pewter 1px border (highlighted tier: Electric Cobalt 1px border). Tier name (Space Grotesk 20px weight 600), price (Space Grotesk 56px weight 600), period (Inter 14px Graphite), feature list with Material Symbol check icons, CTA button (Filled Black for standard, Electric Cobalt for highlighted). No shadows.

### 4.7 FAQ
Centered section headline. Accordion items: each a flex row with question (Space Grotesk 20px weight 500, Obsidian) and a Material Symbol expand/collapse icon. Answer revealed via CSS (max-height transition) or `<details>`/`<summary>`. Borders between items in Slate Mist 1px. No JS required for toggle if using `<details>`.

### 4.8 Final CTA
Centered Canvas band with 80px vertical padding. Mixed-weight headline (Space Grotesk 56px). Subtext in Graphite. Single Electric Cobalt CTA button. Optional outlined secondary button.

### 4.9 Footer
Canvas background, Slate Mist top border 1px. Multi-column flex layout: brand wordmark + tagline, link columns (Product, Company, Resources, Legal), secondary links. Inter 14px in Graphite, hover state Obsidian. Bottom row: copyright + social Material Symbol icons. No dark full-bleed sections.

## 5. Button Specifications

- **Filled Black (Primary):** Obsidian fill, Canvas text, Inter 14px weight 500, 6px radius, 10px/20px padding, min touch target 44x44px. Hover: brightness shift + `cursor: pointer`. Focus: distinct focus ring via CSS variables. Active: `transform: scale(0.97)`. Loading: spinner icon, disabled interactions. Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`. Success/Error: temporary feedback via `--text-success`/`--text-error`.
- **Electric Cobalt (Brand Accent):** Same dimensions, Cobalt fill, Canvas text. Used sparingly — one per page.
- **Outlined Action:** Transparent fill, Obsidian 1px border, Obsidian text, 6px radius, 10px/20px padding. Carries arrow glyph (→) for directional affordance.
- **Pill Connector:** Canvas fill, Pewter 1px border, Obsidian text, 6px radius, ~6px/14px padding, Inter 14px.

All button states (default, hover, focus, active, loading, disabled, success, error) must be styled via CSS classes.

## 6. Card Specifications

- Default: flex layout, Pewter 1px border, 6px radius, 24px padding, Canvas fill.
- Hover (if interactive): `transform: translateY(-2px)` + shadow shift.
- Focus-within: highlight border when child link/button receives focus.
- Loading (skeleton): shimmer animation in CSS, no layout jump.
- Empty state: Google Icon + guidance text.

## 7. Form & Input (if any newsletter signup in footer)

States: empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

## 8. Modal (if used for demo booking)

Opening/open/loading/success/error/closing animated via CSS transitions. Centered flex container, backdrop overlay, Material Symbol close button, focus trapping, close via Esc or overlay click.

## 9. Accessibility & UX

- Sufficient contrast in both light and dark modes. Never rely solely on color for state.
- Semantic HTML5 elements, correct ARIA roles/labels on custom widgets, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Every click/hover/submission triggers visible state change.
- Destructive actions visually distinct in both themes.
- `prefers-reduced-motion` respected.

## 10. Copy Locale

All user-facing copy must be written in **English**.

## 11. Final Notes

- No new HTML elements beyond what each section requires; keep markup semantic and styling-agnostic.
- Mixed-weight headlines are the brand's signature — apply consistently to every display headline.
- Electric Cobalt is a single-use accent per page: one CTA, one highlight, then retreat to monochrome.
- Section gaps at 80px; resist compacting.
- No full-bleed dark sections; system stays Canvas-white with only button fills going Obsidian.
