# Azione-Style Complete Landing Page — Coding AI Prompt

## 1. Role & Objective

You are an expert front-end developer. Build a **complete, production-ready landing page** using the **Azione** visual style: a sunlit editorial diptych aesthetic that pairs warm, imperfect campaign imagery with gallery-like typography and rust-colored information blocks. The page must be fully responsive, accessible, and ship as three separate files: `index.html`, `style.css`, and `script.js`.

**Fictional Brand Requirement:** This spec describes the visual style of a real brand. You must **invent a completely fictional brand name, product, and copy**. Never use the real brand name "Azione," its logo, trademarks, or product names anywhere in the page. All user-facing copy must be in **English**.

---

## 2. Strict Rules & Architecture

### 2.1 CSS-First Architecture & Zero Inline CSS
- All styling lives strictly in `style.css`. No `style="..."` attributes in HTML.
- Target all design properties via class or ID selectors only.
- Keep HTML semantic, clean, and agnostic of visual styling.

### 2.2 CSS Variables & Theme Tokens
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):

**Colors:**
- `--color-gallery-black: #000000`
- `--color-paper-cream: #fbfaf6`
- `--color-ink-charcoal: #222222`
- `--color-mist-gray: #e3e3e9`
- `--color-input-ash: #dadbdd`
- `--color-card-white: #ffffff`
- `--color-azione-rust: #813413`

Map these to semantic tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.

**Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.

**Light Mode Background:** Use `#fbfaf6` (Paper Cream) as the primary canvas, not pure white. Where white/near-white is needed, use `#fefefe`.

**Border Radius & Shadows:** `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`.

**Spacing & Transitions:** `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

**Elevation/Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

### 2.3 Mandatory Dark Mode Support
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and/or `.dark` class.
- Background and text variables switch seamlessly without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label`.

### 2.4 Flexbox Layout & Mobile-First Alignment
- Use Flexbox (`display: flex`) for all layout structures.
- Every flex container must default to `align-items: center` unless an explicitly justified exception exists.
- All flex layouts must be mobile-responsive; prevent horizontal scrolling.

### 2.5 Tailwind CSS Integration
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`) unless another framework is requested.
- All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

### 2.6 Typography & Icons (Google Fonts Mandatory)
- Use Google Fonts for text and icons. Include `<link>` or `@import` tags.
- Text fonts: PP Editorial Old → substitute **Cormorant Garamond** (weight 400); Saans TRIAL → substitute **Archivo** (weight 400); Favorit Mono → substitute **IBM Plex Mono** (weight 400); system-ui → substitute **Arial** (weights 100, 400).
- Icons: Google Material Symbols/Icons only. No raw inline SVGs or local icon files.

---

## 3. Typography Scale (enforce exactly)

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| mono-label | IBM Plex Mono | 400 | 14px | 1.2 | 0.42px | `--text-mono-label` |
| nav | IBM Plex Mono | 400 | 14px | 1.5 | 0.42px | `--text-nav` |
| footer-meta | IBM Plex Mono | 400 | 16px | 1.5 | 0px | `--text-footer-meta` |
| input | Archivo | 400 | 20px | 1.2 | 0px | `--text-input` |
| hero-positioning | Archivo | 400 | 28px | 1.1 | 0px | `--text-hero-positioning` |
| display | Cormorant Garamond | 400 | 72px | 1 | 0px | `--text-display` |
| marquee-display | Cormorant Garamond | 400 | 78px | 1.5 | 0px | `--text-marquee-display` |
| navigation-display | Cormorant Garamond | 400 | 100px | 1.11 | 0px | `--text-navigation-display` |

---

## 4. Spacing & Shapes

**Density:** compact

**Spacing Scale:** 5, 8, 10, 11, 12, 16, 20, 24, 28, 30, 32, 40, 48, 50, 60 (px) — define as `--spacing-5` through `--spacing-60`.

**Border Radius:**
- cards: 16px
- links: 6px
- pills: 9999px
- badges: 16px
- images: 24px
- inputs: 0px
- buttons: 9999px
- utilityButtons: 50%

**Layout:** Section gap 24px, Card padding 16px, Element gap 10px.

---

## 5. Component Specifications

### 5.1 Cinematic Hero
- Full-bleed warm-toned lifestyle/movement photograph.
- Oversized cream brand wordmark (Cormorant Garamond, 72–100px) over the image.
- Centered 28px Archivo positioning line in Paper Cream.
- Outlined pill: transparent fill, Paper Cream text, 1px Paper Cream border, 1000px radius, 16px 40px padding, IBM Plex Mono 14px with 0.42px tracking. Include a small diagonal-arrow glyph before the label.

### 5.2 Hero Client Marquee
- Oversized client names in 78px Cormorant Garamond, weight 400, line-height 117px, Paper Cream.
- Horizontal marquee across the lower edge of the hero; 20s linear marquee motion.

### 5.3 Split Editorial Feature Panel
- Equal visual split inside a 16px rounded container: tightly cropped campaign photograph on one side, Azione Rust `#813413` copy panel on the other.
- Panel headline in Paper Cream Cormorant Garamond; paragraph in light Archivo. No card shadow, both halves flush.

### 5.4 Portfolio Image Tile
- Card White `#ffffff` surface, 16px radius, no shadow, 2px horizontal interior padding.
- Imagery dominates; reserve large lower space for project metadata (not a dense caption box).

### 5.5 Outlined Work Pill
- Transparent fill, Paper Cream text and 1px border, 1000px radius, 16px 40px padding.
- IBM Plex Mono 14px with 0.42px tracking; small diagonal-arrow glyph before label.

### 5.6 Service Arrow Link
- 24px circular Paper Cream icon field with small dark diagonal arrow.
- Paper Cream IBM Plex Mono label at 14px/21px with 0.42px tracking, unboxed, 10px gap from icon.

### 5.7 Mono Navigation Link
- Uppercase IBM Plex Mono 14px/21px with 0.42px tracking, Paper Cream text on dark/photographic surfaces.
- 8px vertical, 20px horizontal hit-area padding, no filled backgrounds.

### 5.8 Circular Utility Control
- `#e3e3e9` fill at 27% opacity, transparent icon, 50% radius, 0px padding, single centered icon.

### 5.9 Text-Only Utility Button
- Transparent fill, Ink Charcoal `#222222` text, 1px Ink Charcoal border, 0px radius and padding.

### 5.10 Underlined Contact Input
- Transparent background, 0px radius, 1px Input Ash `#dadbdd` bottom-rule.
- Input text in Paper Cream Archivo 20px/24px with 11px vertical padding. No white boxes.

### 5.11 Contact Submit Button
- Transparent fill, Paper Cream text, 7px radius, 8px 20px padding.
- Uppercase IBM Plex Mono 14px with 0.42px tracking.

### 5.12 Editorial Footer Contact Link
- Contact address in 40px Cormorant Garamond, weight 400, line-height 40px, Paper Cream on Gallery Black footer.
- Surrounding legal metadata in 16px IBM Plex Mono.

### 5.13 Main Navigation Overlay
- Gallery Black full navigation surface.
- 100px/111px Cormorant Garamond navigation heading: black on Paper Cream surfaces, inverted to Paper Cream on dark overlay.
- system-ui (Arial) close mark at 46px, weight 100, 69px line-height.

---

## 6. Button Component Requirements

Style all states via CSS classes:
- **Default:** Flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`). Minimum 44x44px touch target.
- **Hover:** Visual shift (brightness/shadow) with `cursor: pointer`.
- **Focus:** Distinct focus ring using CSS variables.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disable interactions, prevent double-clicks, render CSS spinner or animated Google Icon without distorting dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback styles driven by `--text-success` / `--text-error`.

## 7. Card Component Requirements

For interactive cards:
- **Default:** Flexible Flexbox layout, subtle borders, elevation via `--bg-secondary` and CSS variables.
- **Hover:** Elevation/shadow shift or `transform: translateY(-2px)`.
- **Focus-within:** Highlight card borders when a child link/button receives focus.
- **Loading (Skeleton):** Shimmer animation in CSS to prevent layout jumps.
- **Empty State:** Structured fallback with Google Icon and clear guidance text.

## 8. Form & Input Requirements

Account for states: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only. Structure: flex container wrapping label, input field, and dedicated error feedback container.

## 9. Modal / Popup Requirements

Account for states: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions). UX: centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

---

## 10. Core UX & Micro-Interaction Rules

- **Responsive by Default:** Fluid sizing, responsive breakpoints, no horizontal overflow.
- **Smooth Animations:** CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- **Accessibility (a11y):** Sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- **Mandatory Visual Feedback:** Every click, hover, or submission triggers a visible state change.
- **Destructive Actions:** `.btn-danger` visually distinct in both light and dark themes.

---

## 11. Landing Page Sections to Build

1. **Hero** — Cinematic full-bleed hero with wordmark, positioning line, outlined pill, and client marquee.
2. **Features** — 3 cards (Portfolio Image Tile style) showcasing key capabilities.
3. **How It Works** — 3 steps using Service Arrow Links and editorial panels.
4. **Testimonials** — Editorial quotes in Cormorant Garamond with attribution in IBM Plex Mono.
5. **Pricing** — 3 tiers using Card White surfaces with 16px radius, no shadow.
6. **FAQ** — Accordion or expandable items using Underlined Contact Input styling for consistency.
7. **Final CTA** — Split Editorial Feature Panel with rust panel and outlined work pill.
8. **Footer** — Gallery Black field with Editorial Footer Contact Link, legal metadata, secondary links (Mono Navigation Links), and theme toggle.

---

## 12. Do's and Don'ts

**Do:**
- Use Paper Cream `#fbfaf6` as dominant light canvas and Gallery Black `#000000` for full-width nav/footer fields.
- Set display statements in Cormorant Garamond at 72px, 78px, or 100px; weight 400 only.
- Use IBM Plex Mono at 14px with 0.42px tracking for navigation, service links, button labels.
- Keep feature-card corners at 16px and image corners at 24px.
- Build outlined reversed pills with 1000px radius, 16px 40px padding, 1px Paper Cream border.
- Use Azione Rust `#813413` for large copy-bearing editorial panels with Paper Cream display type.
- Use 10px as default icon-to-label gap and 24px as compact section gap.

**Don't:**
- No gradients; all surfaces flat color or raw photography.
- No drop shadows on portfolio cards or editorial split panels.
- Never set Cormorant Garamond heavier than 400.
- Never replace IBM Plex Mono labels with generic bold sans-serif or remove 0.42px tracking at 14px.
- No square 0px corners for image-led feature panels; use 16px containers and 24px image corners.
- Don't turn every link into a filled button; preserve transparent text links and outlined Paper Cream hero pills.
- No saturated UI colors beyond Azione Rust `#813413`; campaign-photo color belongs inside imagery.

---

## 13. Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#fbfaf6` | Primary page background and light content field. |
| 1 | Card White | `#ffffff` | Portfolio tile surface. |
| 2 | Mist Utility Surface | `#e3e3e9` | Subtle circular utility-control fill. |
| 3 | Gallery Black Field | `#000000` | Navigation, footer, and dark overlay surface. |

Content is separated through cinematic cropping, hard color-field changes, and rounded boundaries — not shadows. Portfolio cards and editorial panels remain shadowless.

---

## 14. Deliverables

- **File Structure:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- **Naming Convention:** Enforce one consistent class-naming convention (BEM or fixed utility set) across the entire deliverable — never mix conventions.
- **No Unrequested Placeholders:** Prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely unspecified.
- **Imagery:** Use placeholder images (e.g., `https://picsum.photos/...`) with warm-toned, lifestyle-oriented descriptions in `alt` text. Images are tightly cropped, fill hero or half of diptych — never small decorative thumbnails.

---

## 15. Imagery & Layout Notes

- Photography is central: candid, movement-led lifestyle and product campaign scenes with warm, slightly hazy natural light or high-saturation color backdrops.
- Images fill the entire hero or occupy one half of a rounded editorial diptych.
- Large typography overlays photography directly in Paper Cream.
- Graphic elements sparse: small mono arrows, circular icons, giant wordmark.
- Page moves between immersive full-bleed photographic fields and inset editorial modules on Paper Cream canvas.
- Vertical rhythm compact at 24px between modules; photographs create large visual pauses.
- Navigation: shallow top bar expandable to full-screen overlay.
- Footer: dark contact field with oversized editorial email link.

---

**Output only the three files (`index.html`, `style.css`, `script.js`) implementing everything above. No preamble, no commentary.**
