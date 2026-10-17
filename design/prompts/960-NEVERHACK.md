# Landing Page Build Prompt — Fictional Brand, NEVERHACK Visual Theme

You are building a complete, production-grade landing page in a fictional brand voice. **Do not use the name "NEVERHACK", its logo, monogram, trademarks, or product names anywhere in the deliverable.** Invent an original fictional brand name, product name, and copy. Reuse only the visual style system described below.

## 1. File Structure & Architecture
- Deliver three separate files: `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- **Zero inline CSS.** No `style="..."` attributes anywhere in the HTML. All styling lives in `style.css` via class/ID selectors only.
- HTML must stay semantic and styling-agnostic: changing the look requires editing only `style.css`.
- Use one consistent class-naming convention throughout (BEM recommended). Never mix conventions.
- Use Tailwind CSS via CDN utility classes where helpful, but every utility must map back to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`). Prefer clean custom CSS driven by Tailwind's `@layer` / `@apply` directives for component styling.
- No lorem-ipsum-only submissions where real copy is expected; invent realistic fictional copy for all sections.

## 2. CSS Variables & Theme Tokens
Define all tokens in `:root` (light theme) and provide a `.dark` class plus `@media (prefers-color-scheme: dark)` override. Enforce contrast pairing for every theme (light bg → dark text; dark bg → light text).

Color tokens (light theme):
- `--color-sovereign-ink: #0a0f1f` (primary text, headlines, nav, core UI)
- `--color-signal-white: #ffffff` (card surfaces, elevated panels, button text on dark fills)
- `--color-mist-surface: #f6f7fc` (page canvas, soft card backgrounds, subtle wash sections)
- `--color-cool-hairline: #e5e7eb` (borders, dividers, input outlines)
- `--color-shadow-lichen: #d8d7e2` (card inset shadow tint)
- `--color-carbon-gray: #4e4e4e` (secondary text, supporting copy, muted labels)
- `--color-ash-gray: #999999` (disabled affordances, tertiary text)
- `--color-sovereign-violet: #6b2bea` (brand accent, AI surface highlights, chat response fills, badge dots, icon accents)
- `--color-violet-wash: #afa9fd` (tinted backgrounds for AI-adjacent surfaces, capability tags)
- `--color-cyber-cyan: #28d3fe` (decorative accent, single use per page max)
- `--color-alert-crimson: #dc2626` (critical/emergency state only — CERT, crisis, hazard)
- `--color-crimson-glow: #f4baba` (red supporting accent for decorative details)
- `--color-info-blue: #2563eb` (informational badges, neutral data callouts)

Where a white/near-white is needed, use `#fefefe` instead of `#ffffff` for the page canvas alternative; keep `#ffffff` for card surfaces as specified.

Shadows (purple-tinted signature):
- `--shadow-subtle: rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.08) 0px 4px 8px 0px`
- `--shadow-md: rgba(40,30,93,0.04) 0px 4px 12px -4px, rgba(0,0,0,0.03) 0px 1px 2px 0px`
- `--shadow-xl: rgba(40,30,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px`
- `--shadow-lg: rgba(220,38,38,0.32) 0px 12px 24px -10px, rgba(0,0,0,0.08) 0px 4px 8px 0px` (emergency only)

Spacing: base unit 4px. Provide `--spacing-4` through `--spacing-144` per the 4/8/12/16/20/24/28/32/40/48/56/64/80/96/128/144 scale.

Border radius:
- `--radius-sm: 6px` (small elements)
- `--radius-md: 10px` (inner cards)
- `--radius-lg: 14px` (cards)
- `--radius-pill: 9999px` (buttons, badges, chat input)
- `--radius-nav-pill: 18px` (nav pills)

Typography tokens: bind Google Font (Inter as the free substitute for Roobert) to `--font-base`. Provide type-scale tokens `--text-caption` (11px), `--text-body-sm` (14px), `--text-body` (16px), `--text-body-lg` (18px), `--text-subheading` (22px), `--text-heading-sm` (24px), `--text-heading` (32px), `--text-heading-lg` (40px), `--text-display` (52px), `--text-display-xl` (72px) with matching line-height and letter-spacing per the spec (tighten aggressively at large sizes; open +0.08–0.12em on ALL-CAPS badges/eyebrows).

Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`. Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

Dark mode: provide tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle control with correct `aria-pressed`/`aria-label`.

## 3. Typography & Icons
- Load Google Fonts via `<link>` or `@import`: Inter (weights 400, 500) for text; Google Material Symbols/Icons for all icons. No raw inline SVGs or local icon files.
- Body text color is Sovereign Ink `#0a0f1f` — never pure black `#000000`.

## 4. Layout & Responsiveness
- Flexbox for all layout structures. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-first, responsive breakpoints, no horizontal scrolling. Convert rows to columns on small viewports.
- Page max-width 1200px centered. Section gap 80px. Card padding 32px. Element gap 12px.
- Hero: two-column split — left: eyebrow + 52–72px display headline + body + two-button group; right: floating AI chat widget, vertically centered against headline.
- Sections alternate full-width white bands and Mist Surface washes, separated by hairline borders.
- Feature sections: 3-column card grid, equal-width, 12–24px gutters.
- Principle sections: borderless 3-column typographic grid.
- Sector ticker: single full-width borderless row between hero and content.

## 5. Color Rationing (Hard Contract)
95% of the rendered page is neutrals (Sovereign Ink, Signal White, Mist Surface, Cool Hairline). Remaining 5% splits: Sovereign Violet ~3.5% (AI surface), Alert Crimson ~1.5% (critical state only). Cyber Cyan <0.5% — single accent per page maximum. Never pair Sovereign Violet with Alert Crimson in the same component. Never use Alert Crimson for non-critical actions, marketing copy, or decorative emphasis.

## 6. Component Specifications

**Buttons (all states via CSS classes):**
- Primary Filled (Dark): pill 9999px, Sovereign Ink fill, Signal White text, 12px 24px padding, Roobert/Inter 15px weight 500, shadow `--shadow-subtle`. Min touch target 44x44px.
- Ghost Outlined: pill, transparent fill, 1px Sovereign Ink border, Sovereign Ink text, 12px 24px padding, 15px weight 500, no shadow.
- Nav Pill (Active): 18px radius, 8px 16px padding, Sovereign Ink fill, Signal White text, 13px weight 500.
- Alert Emergency: pill 9999px, Alert Crimson fill, Signal White text, 12px 24px padding, 15px weight 500, warm red shadow. Reserved for CERT/crisis only.
- States: hover (brightness/shadow shift, cursor pointer), focus (distinct focus ring via CSS variables), active/pressed (transform scale 0.97), loading (disabled interactions, CSS spinner or animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary feedback via `--text-success`/`--text-error`).

**Cards:**
- Capability Card: 14px radius, white surface, 1px Cool Hairline border, 32px padding, shadow `--shadow-md`. Contains eyebrow label (12px ALL-CAPS +0.08em), 22–24px heading, body copy, "Learn more →" link in Sovereign Violet.
- Highlight Card: 16–20px radius, Mist Surface or white fill, 1px Cool Hairline border, 32–40px padding. Violet dot indicator, heading, description, embedded sub-card (10px radius, lighter surface) with numbered list 01/02/03.
- Principle Card: no border/background, pure typographic. Short colored top-underline (violet/blue/cyan, 2–3px tall, ~24px wide), 24–32px heading, body copy.
- Hover: elevation/shadow shift or subtle transform translateY(-2px). Focus-within: highlight borders when child receives focus. Loading: CSS shimmer skeleton. Empty state: Google Icon + guidance text.

**Chat Surface (AI Interaction):**
- ~18px radius, white surface, shadow `--shadow-xl`. User message bubble: light gray `#e5e7eb` fill, Sovereign Ink text, ~14px radius, 14px. AI response bubble: Sovereign Violet `#6b2bea` fill, white text, ~14px radius, 14px weight 500. Input: pill ~999px radius, white fill, 1px Cool Hairline border, 12–16px padding, placeholder "Enter your message" in 14px Carbon Gray. Optional icon buttons (up-arrow submit, mic) at right edge, 32×32 hit targets.

**Eyebrow Label / Tag:** 12px weight 500, ALL-CAPS, +0.12em letter-spacing, Sovereign Violet or Carbon Gray. No background, no border.

**Category Badge:** inline pill, ~6px radius, 10px vertical / 12px horizontal padding, 11–12px weight 500, ALL-CAPS +0.08em. Color signals category: violet-tinted for AI (on Violet Wash), neutral for MSP, crimson-tinted for CRITICAL.

**Sector Ticker Bar:** borderless row on white, single 1px top + bottom hairline in Cool Hairline. Each label: 13–14px weight 400, Carbon Gray, 24–32px horizontal padding.

**Top Banner (Notification):** thin band ~40px, white or very light background, 1px bottom border. Centered text 12–13px, violet sparkle/dot icon, violet "Access the report →" link.

**Header / Navigation Bar:** white background, 1px bottom border Cool Hairline, ~64–72px height. Left: fictional wordmark + monogram. Center: 6–7 nav items 15px weight 500 Sovereign Ink. Right: ghost "Sign in" text, three text nav items, one dark "Cyber AI" pill (Nav Pill Active), "Contact" text. Logo mark: stylized letter in negative space within a square (fictional, not the real brand's).

**Input Field (Chat Input):** pill ~999px radius, white fill, 1px Cool Hairline border, 12–16px padding. States: empty, focused (outline ring), filled, valid, invalid, disabled, read-only. Flex container wrapping label, input, and dedicated error feedback container.

**Modal / Popup (if used):** opening/open/loading/success-error/closing states animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 7. UX & Micro-Interactions
- Smooth CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 8. Page Sections to Build
1. Top Banner (notification)
2. Header / Navigation Bar (sticky)
3. Hero (two-column: headline + AI chat widget)
4. Sector Ticker Bar
5. Features (3 Capability Cards)
6. How It Works (3 steps)
7. Testimonials
8. Pricing (3 tiers)
9. FAQ
10. Final CTA
11. Footer with secondary links

Invent realistic fictional copy for all sections. Use fictional brand/product names throughout. Never reference the source brand name, logo, trademarks, or product names.

## 9. Deliverable Notes
- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond the single deferred reference.
- Enforce BEM (or one fixed utility set) consistently.
- No unrequested placeholders where real copy is expected; invent copy where unspecified.
- Output only the finished code files' content structure as instructed; no preamble.
