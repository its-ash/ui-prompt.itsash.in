# System Prompt for Coding AI: “Whiteboard” Landing Page

## 1. ARCHITECTURE & STRICT RULES

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file. The `style="..."` attribute is **forbidden** anywhere in the HTML.
- All design properties, layout rules, and states must be targeted via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling — changing the look must only require editing the CSS file.

**1.2 CSS Variables & Theme Tokens**
Define all visual tokens in `:root`:
- **Colors:** `--primary: #1565C0` (Marker Blue), `--secondary: #2C2C2C` (Marker Black), `--bg-primary: #FEFEFE` (Board White), `--bg-secondary: #FFF9C4` (Highlight Yellow, used for sticky notes/highlight areas), `--text-primary: #2C2C2C`, `--text-secondary: #5C5C5C`, `--text-success: #388E3C` (Marker Green), `--text-error: #D32F2F` (Marker Red), `--border-default: #2C2C2C`, `--border-error: #D32F2F`, `--border-success: #388E3C`.
- **Accent tokens:** `--marker-red: #D32F2F`, `--marker-green: #388E3C`, `--marker-orange: #F57C00`, `--marker-blue: #1565C0`, `--highlight: #FFF9C4`.
- **Contrast Pairing:** Every light background token must pair with dark text tokens and vice versa.
- **Light Mode Background:** Use `#FEFEFE` — never `#ffffff`.
- **Radius & Shadows:** `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 8px` (keep radii small — hand-drawn borders should look irregular, not rounded), `--shadow-sm: 2px 2px 5px rgba(0,0,0,0.1)`, `--shadow-md: 4px 6px 12px rgba(0,0,0,0.15)`.
- **Spacing & Transitions:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Elevation:** `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`.

**1.3 Dark Mode (Mandatory)**
- The source specification requested light-only. **Exception clause:** Dark mode is still mandatory per project standards, but must be designed as a “chalkboard at night” variant: `--bg-primary: #1E1E1E`, `--bg-secondary: #2C2C2C`, `--text-primary: #FEFEFE`, `--text-secondary: #B0B0B0`, borders switch to light strokes, sticky notes become muted dark yellows (`#4E4A2E` with light text), and marker colors are lightened for contrast (e.g., `--marker-blue: #64B5F6`).
- Implement via `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle button with correct `aria-pressed` and `aria-label` states, styled as a small hand-drawn “moon/sun” note.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an explicit exception is justified in a CSS comment.
- All layouts must be mobile-responsive out of the box: card grids, pricing tiers, and step rows convert from rows to columns on small viewports. No horizontal scrolling at any breakpoint.

**1.5 Framework**
- Use clean custom CSS (no Tailwind required for this theme, since hand-drawn effects demand bespoke styling). All component styles must be defined as reusable generic classes: `.btn`, `.card`, `.sticky-note`, `.input-group`, `.section`, `.connector`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Load `Patrick Hand` (body) and `Architects Daughter` (headings) via Google Fonts `<link>` tags; bind to `--font-base` and `--font-heading`.
- **Icons:** Use Google Material Symbols only. Raw inline SVGs and local icon files are **forbidden**.
- **Exception clause:** The hand-drawn irregular border effect requires an SVG *filter* definition (`<filter id="sketch-border">` with `feTurbulence`/`feDisplacementMap`) placed once in the document `<head>`-adjacent hidden SVG block. This filter is referenced only from CSS (`filter: url(#sketch-border)`); it is not an icon and does not violate the icon rule.

## 2. WHITEBOARD-SPECIFIC VISUAL SYSTEM

- **Board Background:** `#FEFEFE` with a subtle radial-gradient dot pattern (`radial-gradient(circle, #D0D0D0 1px, transparent 1px)` at ~24px intervals) — define it on `body` via CSS only.
- **Hand-Drawn Borders:** All card, button, and note borders use `2px–3px solid var(--border-default)` with the SVG sketch filter applied for slight irregularity. Vary border thickness (2px vs 3px) between components to simulate marker weight variation.
- **Sticky Notes:** `.sticky-note` elements use `background-color: var(--highlight)`, `transform: rotate(1deg)` / `rotate(-2deg)` / `rotate(3deg)` variants (`.sticky-note--tilt-1`, `--tilt-2`, `--tilt-3`), and `box-shadow: var(--shadow-sm)` for the pinned effect. Add a CSS-drawn “tape” strip or pin dot via `::before` pseudo-elements only.
- **Connector Lines:** Between the “How It Works” steps, draw hand-drawn connector lines using CSS borders/curves (e.g., dashed `border-top` with the sketch filter) — no images.
- **Whiteboard Shadow:** The main page container gets an edge shadow (`box-shadow: var(--shadow-md)`) to read as a physical board.
- **Marker Typography:** Headings alternate marker colors (`--marker-blue`, `--marker-red`, `--marker-green`, `--marker-black`) per section; use `text-decoration: underline wavy` for hand-underlined emphasis on key phrases.

## 3. SECTIONS TO BUILD

1. **Hero:** Headline in Architects Daughter with marker-colored accent words, subheadline, primary CTA button, and a small cluster of tilted sticky notes as decorative/feature callouts.
2. **Features (3 cards):** Cards styled as pinned notes with Google Material Symbols icons, alternating tilts and marker-colored borders.
3. **How It Works (3 steps):** Numbered steps (hand-drawn circled numbers via CSS) connected by sketch-style connector lines; stack vertically on mobile.
4. **Testimonials:** Quote cards as sticky notes with varied rotations and marker-color accents.
5. **Pricing (3 tiers):** Middle tier visually highlighted (highlight-yellow background, thicker border, slight scale/tilt); each tier card contains a feature list with Material Symbols check icons and a CTA button.
6. **FAQ:** Use native `<details>`/`<summary>` elements styled with hand-drawn borders; animate open/close via CSS transitions; include a visible marker-style expand indicator.
7. **Final CTA:** Full-width highlight section with bold marker headline and primary button.
8. **Footer:** Secondary links, social icon row (Material Symbols), and copyright — styled as the bottom edge of the whiteboard.

## 4. COMPONENT STATE REQUIREMENTS

**4.1 Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`)**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, hand-drawn border.
- Hover: shadow shift + slight brightness change, `cursor: pointer`.
- Focus: distinct focus ring using `outline` with `--marker-blue`, visible in both themes.
- Active: `transform: scale(0.97)`.
- Loading: disabled interaction, CSS spinner that doesn’t distort dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles driven by `--text-success` / `--text-error`.

**4.2 Cards (`.card`, `.sticky-note`)**
- Default: flex layout, `--bg-secondary` or `--highlight` background, sketch borders, `--shadow-sm`.
- Hover: `transform: translateY(-2px)` and shadow shift to `--shadow-md` (keep the sticky-note rotation — combine transforms).
- Focus-within: border color shifts to `--marker-blue` when a child link/button is focused.
- Loading: shimmer skeleton animation defined in CSS.
- Empty state: Material Symbol icon + guidance text fallback.

**4.3 Forms (newsletter signup in footer or CTA)**
- States: empty, focused (outline ring), filled, valid (green border + check icon), invalid (red border, error text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and a dedicated error feedback container with `aria-live="polite"`.

**4.4 Modal (FAQ “contact us” or pricing details — optional but if present)**
- States: opening, open, loading, success/error, closing — all CSS-animated.
- Centered flex container, backdrop overlay, Material Symbol close button, keyboard focus trapping, close via `Esc` and overlay click.

## 5. UX & ACCESSIBILITY RULES

- **Responsive by default:** fluid sizing, no horizontal overflow at any viewport width.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` by disabling tilts, transforms, and shimmer.
- **Accessibility:** sufficient contrast in both light and dark modes (verify marker colors against both backgrounds); never rely on color alone — pair marker colors with icons or text labels; semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`); correct ARIA roles/labels on the theme toggle, FAQ, and any custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for form feedback and toasts.
- **Visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn-danger` must be visually distinct (marker-red border + tint) in both themes.

## 6. DELIVERABLES & OUTPUT FORMAT

- **Files:** Separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS anywhere.
- **Naming convention:** BEM (`.card`, `.card__title`, `.card--highlighted`) consistently across the entire deliverable — never mix conventions.
- **Copy:** Write all user-facing copy in English, themed around collaborative brainstorming/whiteboarding (e.g., “Sketch ideas together”, “From sticky note to shipped plan”). No lorem ipsum — write real, contextual copy for every section.
- **No unrequested placeholders:** every section listed in Section 3 must be fully built and populated on the first attempt.
