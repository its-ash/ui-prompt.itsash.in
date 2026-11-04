# Coding AI Prompt — Alejandro Mejias Landing Page

## 1. Role & Objective
You are a senior front-end engineer. Build a complete, production-ready landing page implementing the Alejandro Mejias visual style (acid-lit brutalist atelier). Invent a fictional brand name, product, and all copy. Never use the real brand name "Alejandro Mejias", its logo, trademarks, or product names anywhere in the deliverable.

## 2. Architecture & Rules (Mandatory)

### 2.1 CSS-First, Zero Inline CSS
- Keep all styling in `style.css`. No `style="..."` attributes. Target via classes/IDs only. HTML stays semantic and styling-agnostic.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` and `.dark` / `@media (prefers-color-scheme: dark)`:
- Colors: `--primary` (acid lime `#ebff00`), `--secondary` (`#080707` obsidian), `--bg-primary` (`#ffffff` bone canvas), `--bg-secondary` (`#c8c8c8` fog), `--text-primary` (`#080707`), `--text-secondary` (`#383838`), `--text-success`, `--text-error`, `--border-default` (`#000000`), `--border-error`, `--border-success`.
- Contrast pairing: light bg → dark text; dark bg → light text, in every theme.
- Light background must not be pure white; use `#fefefe` where near-white is needed (bone canvas stays `#ffffff` per spec).
- `--radius-sm: 4px`, `--radius-md: 24px`, `--radius-lg: 84px`, `--shadow-sm`, `--shadow-md`.
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography tokens: `--font-display` (FK Raster Grotesk substitute: Archivo Black at 90% width transform), `--font-mono` (IBM Plex Mono via Google Fonts), `--font-body` (Be Vietnam Pro), `--font-button` (Inter Medium).

### 2.3 Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Persist user choice via `localStorage`, fallback to `prefers-color-scheme`. Include a visible toggle with correct `aria-pressed`/`aria-label`.

### 2.4 Flexbox, Mobile-First
- `display: flex` with `align-items: center` default unless justified exception. Mobile-responsive, no horizontal scroll.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or `@layer`/`@apply` mapping to CSS variables). Utility classes map to reusable classes (`.btn`, `.card`, `.input-group`).

### 2.6 Google Fonts & Icons
- Text: Google Fonts (Archivo Black substitute, IBM Plex Mono, Be Vietnam Pro, Inter). Icons: Google Material Symbols. No inline SVGs or local icons.

## 3. Component Specifications

### 3.1 Buttons
Default (flex, center, gap 0.5rem, min 44x44px), Hover (brightness/shadow, pointer), Focus (ring via variables), Active (scale 0.97), Loading (spinner, no dimension change, disabled), Disabled (opacity 0.5, grayscale, not-allowed), Success/Error (temporary feedback via `--text-success`/`--text-error`).

### 3.2 Cards
Default (flex, subtle borders, elevation), Hover (translateY(-2px)), Focus-within (border highlight), Loading skeleton (shimmer), Empty state (icon + guidance text).

### 3.3 Forms & Inputs
States: empty, focused, filled, valid, invalid, disabled, read-only. Structure: flex container with label, input, error feedback.

### 3.4 Modal / Popup
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop, icon close button, focus trap, Esc/overlay close.

## 4. Global UX Rules
- Responsive by default, fluid sizing, no overflow.
- Smooth transitions (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 5. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline script blocks beyond single deferred entry-point.
- Consistent class-naming (BEM). No lorem-ipsum where real copy supplied; placeholders only where unspecified.

## 6. Edit Mode — N/A (from-scratch build)

## 7. Style Application — Alejandro Mejias

Apply these exact tokens and rules:

**Colors:** Acid Lime `#ebff00` (actions, status badges, CTAs only), Obsidian `#080707` (text, borders, dark canvas), Pure Black `#000000` (high-frequency borders/icons), Bone White `#ffffff` (light canvas, inverted text), Fog `#c8c8c8` (placeholders, muted bg), Slate `#383838` (dark surfaces, subdued text).

**Typography:** Display headings in Archivo Black (90% width transform) at 32/48px, weight 400, line-height 1.0, letter-spacing 0.042em, uppercase. Labels/tags/nav/metadata in IBM Plex Mono 500/600 at 10–11px, letter-spacing 0.086–0.109em, uppercase. Body in Be Vietnam Pro 400 at 16px, line-height 1.4. Button text in Inter 500 at 16px, letter-spacing -0.012em. System sans 12px fallback.

**Spacing & Shapes:** Compact density. Spacing: 4,8,10,16,20,24,48,80,100px. Radii: 4px (buttons/tags/outlined), 24px (images/cards), 72–84px (pills). Section gap 48px, card padding 16px, element gap 10px. No intermediate radii (8/12px). No soft shadows except specified elevations.

**Layout:** Full-bleed edge-to-edge, no centered max-width container. Sticky three-zone top bar (left brand label, center nav, right status pill). Section transitions immediate (canvas flip white↔black). Floating corner elements (Book a Call pill bottom-right, Honors tab right edge) as fixed chrome.

**Components to implement:**
- Top Bar: three zones, brand label `[BRAND]` in 10px mono 600, nav links, right status pill.
- Time Status Badge: acid lime pill, live time, radius 84px.
- Book a Call Floating CTA: acid lime pill, avatar 24px, label, arrow, fixed bottom-right.
- Section Display Headings: 48px display, uppercase.
- Metadata Bracket Tags: `[TAG]` in mono 600.
- Project Cards: full-width image 24px radius, 1px black border, name left + year right in 14px mono 500.
- Video Watch Card: ~180px, 4px radius, 1px border, thumbnail + bottom strip.
- Contact Row: two-column on dark canvas, label left, value right, 48px gap, hairline dividers.
- Outlined Action Button: transparent, 1px border, 4px radius.
- Social Link: icon + name mono 600.
- 3D Sculpture Element: glossy black abstract 'A' (use a CSS-styled placeholder shape or SVG-free representation) centered in hero at ~280–340px.
- Corner Tab (W. Honors): vertical rotated text, right edge.
- Scroll Indicator: `SCROLL ↓` centered bottom of hero.

**Do's:** IBM Plex Mono 500–600 at 10–11px with positive tracking for all labels/tags/metadata uppercase. Acid lime only on time badge, Book a Call CTA, avatar pills. 4px radius buttons/tags, 24px images, 72–84px pills. Three-zone top bar every page. Obsidian on bone (light), bone on obsidian (dark). 48px section padding.

**Don'ts:** No additional chromatic colors. No soft shadows/blurs/gradients except specified. No 16px+ radius on buttons/tags. No body type above 18px. No centered body copy. No radius below 4px or square corners. No more than two text weights per component.

**Surfaces:** Bone Canvas `#ffffff`, Acid Highlight `#ebff00`, Fog Plate `#c8c8c8`, Slate Card `#383838`, Obsidian Ground `#080707`.

**Elevation:** Floating CTA `0 4px 12px rgba(0,0,0,0.15)`, Video Watch Card `0 2px 8px rgba(0,0,0,0.08)`.

**Imagery:** Flat monochrome UI; project images as rectangular mockups on fog bg within 24px frames; small video thumbnail candid portrait. Contained, sharp/24px rounded, monochrome/desaturated. Icons mono-stroke 1.5–2px.

## 8. Page Sections Required
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 9. Output
Generate `index.html`, `style.css`, `script.js`. All user-facing copy in English. Fictional brand/product only. No real brand names, logos, trademarks. Ensure dark mode toggle, localStorage persistence, accessibility, and all component states. Return only the three files.
