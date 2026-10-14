# ART NOUVEAU LANDING PAGE — FULL BUILD SPECIFICATION

You are a Senior Frontend Engineer building a complete, production-quality Art Nouveau landing page in a single attempt. Follow every rule below. Where a rule and a personal habit conflict, the rule wins.

---

## 0. PROJECT BRIEF & DESIGN DIRECTION

**0.1 Theme**
Art Nouveau (1890–1910 movement). Keywords: fluid lines, organic forms, floral motifs, nature-inspired, rounded flowing typography, handmade, romantic, whiplash curves. Illustration and typography must merge seamlessly. The atmosphere is romantic, handcrafted, and deeply botanical — never corporate, never geometric-minimal.

**0.2 Required Page Sections (in order)**
Sticky header nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ (accordion) → Final CTA → Footer with secondary links.

**0.3 Color Palette → Token Mapping (Light Mode, `:root`)**

| Token | Value | Source |
|---|---|---|
| `--primary` | `#4A6741` | Moss Green (buttons, links) |
| `--secondary` | `#B8860B` | Warm Gold (accents, highlights) |
| `--bg-primary` | `#FFF8DC` | Cream (page background — never pure white) |
| `--bg-secondary` | `#F4ECD3` | Aged parchment (cards, raised surfaces) |
| `--text-primary` | `#4A1942` | Deep Plum |
| `--text-secondary` | `#4A6741` | Moss Green |
| `--text-success` | `#3D5A34` | Deepened moss |
| `--text-error` | `#A34E2A` | Deepened terracotta |
| `--border-default` | `#D9C48E` | Soft aged gold |
| `--border-error` / `--border-success` | `#A34E2A` / `#3D5A34` | State borders |
| `--accent-gold` / `--accent-plum` / `--accent-terracotta` / `--accent-sky` / `--accent-rose` / `--accent-olive` | `#B8860B` / `#4A1942` / `#C67A4B` / `#87CEEB` / `#C9A0A0` / `#6B7B3A` | Secondary palette |

**0.4 Dark Mode Token Mapping (`.dark` and `@media (prefers-color-scheme: dark)`)**

| Token | Value |
|---|---|
| `--primary` | `#D4A017` (brightened gold; pairs with dark plum text) |
| `--secondary` | `#C9A0A0` (dusty rose) |
| `--bg-primary` | `#1F0D1C` (midnight plum — never pure black) |
| `--bg-secondary` | `#2C1330` (raised plum surface) |
| `--text-primary` | `#FFF8DC` (cream) |
| `--text-secondary` | `#C9A0A0` |
| `--text-success` / `--text-error` | `#A3C293` / `#E8A87C` |
| `--border-default` / `--border-error` / `--border-success` | `#5E3A5A` / `#E8A87C` / `#A3C293` |
| Accents | Brightened variants: gold `#D4A017`, terracotta `#E09A6B`, sky `#A8D8F0`, rose `#D9B3B3`, olive `#9DB36A`, orchid-plum `#B08BA8` |

**0.5 Contrast Pairing (Mandatory, Both Themes)**
Every light background token must pair with a dark text token and every dark background token with a light text token. Primary buttons in light mode: moss green background + cream text. Primary buttons in dark mode: gold background + deep plum (`#241020`) text. Verify ≥ 4.5:1 contrast for all body text in both modes.

**0.6 Typography**
Google Font **Cormorant Garamond** (weights 400, 500, 600, 700 + italics) is the sole typeface, bound to `--font-base`. Global body: `line-height: 1.7; letter-spacing: 0.03em`. Hierarchy comes from weight and size, not font changes. Headings: `clamp()` fluid sizing (H1 ≈ `clamp(2.75rem, 6vw, 4.5rem)`, weight 600). Use gold uppercase letter-spaced "eyebrow" kickers above section titles. Add a decorative SVG swash/flourish underline beneath one key word in the hero headline so illustration and typography merge.

**0.7 Decorative Visual Language**
- **Whiplash-curve SVG dividers** between every major section (alternate mirrored orientations for variety).
- **Floral motif corner ornaments** on the hero and Final CTA sections.
- **Organic blob shapes** via asymmetric `border-radius` (e.g., `58% 42% 55% 45% / 52% 48% 60% 40%`) and `border-radius: 50%` on medallions/decorative elements.
- **Warm gradient washes**: layered `radial-gradient` backgrounds (cream→rose→gold in light; plum→moss→orchid in dark).
- All decorative SVGs must use `fill="currentColor"` / `stroke="currentColor"` and inherit color from CSS classes so they re-theme in dark mode without duplicated assets. Mark every decorative SVG `aria-hidden="true"` and `focusable="false"`.

**0.8 Copy Direction**
Invent a coherent brand (a botanical/atelier/craft concept fits the theme). Write ALL user-facing copy in **English** in a romantic, handcrafted, nature-inspired voice. **No lorem ipsum anywhere** — write real headlines, body copy, testimonial names/roles, and 5–6 genuine FAQ questions. Placeholder text is permitted only for genuinely unknowable data (e.g., a future launch date).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden in the HTML. Zero exceptions.**
- Target everything via class or ID selectors. HTML stays semantic and styling-agnostic — a full retheme must be possible by editing `style.css` alone.
- No inline `<script>` blocks. The only script tag is one deferred entry point: `<script src="script.js" defer></script>`.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and the `.dark` override exactly as mapped in Section 0. Additionally define: `--radius-sm: 10px`, `--radius-md: 22px`, `--radius-lg: 36px`, `--shadow-sm: 0 4px 16px rgba(74,25,66,0.1)`, `--shadow-md: 0 10px 32px rgba(74,25,66,0.16)` (dark mode: deeper black-plum shadows), `--spacing-gap: 1rem`, `--spacing-section: clamp(4rem, 8vw, 6.5rem)`, `--transition-fast: 160ms`, `--transition-normal: 320ms`, `--ease-standard: cubic-bezier(0.25, 0.8, 0.25, 1)`, `--z-dropdown: 10`, `--z-header: 40`, `--z-modal: 100`, `--z-toast: 200`. Never hardcode a color, radius, shadow, or duration that has a token.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>` (use `:not(.light)`-style logic or set an explicit `.light` class from JS so user choice overrides system preference).
- Persist choice in `localStorage` (key: `theme`), falling back to `prefers-color-scheme` on first visit. `script.js` must apply the stored theme as its **very first statement** to prevent a flash of the wrong theme.
- Provide a visible toggle (spec in 2.6) with correct `aria-pressed` and `aria-label` states. Background/text variables must switch with no HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a code comment.
- Mobile-first: all multi-column rows (features, steps, testimonials, pricing, footer columns) collapse to a single column on small viewports. **No horizontal scrolling at any width down to 320px.**

**1.5 Framework Default & Tailwind CSS Integration**
Use Tailwind CSS via the Play CDN for layout/spacing utilities. Define all themed component classes (`.btn`, `.card`, `.accordion-item`, etc.) as plain CSS in `style.css` referencing the CSS variables — do not use `@apply` or build tooling. Utilities handle layout; component classes handle identity. Never mix in a second naming convention (no BEM).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Fonts `<link>` tags for Cormorant Garamond and **Material Symbols Rounded** (the rounded variant suits the organic aesthetic). Configure icon fill via CSS `font-variation-settings`.
- **All functional icons must be Google Material Symbols** (suggested: `local_florist`, `eco`, `spa`, `format_quote`, `star`, `check`, `expand_more`, `dark_mode`, `light_mode`, `menu`, `close`, `mail`, `arrow_forward`). Raw inline SVGs and local icon files are forbidden as icons.
- **Explicit exception:** decorative Art Nouveau ornamentation — whiplash-curve dividers, floral corner motifs, botanical illustrations, and headline flourishes — is the *only* permitted inline SVG usage; it must be `aria-hidden`, non-interactive, and must never serve as a functional icon.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`)**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, pill-shaped (`border-radius: 999px`), Cormorant Garamond 600.
- Hover: brightness shift + soft gold shadow glow, `cursor: pointer`. Focus-visible: distinct 2px gold outline ring (offset 3px) via `--secondary`. Active: `transform: scale(0.97)`.
- Loading (`.is-loading`): disables interaction, blocks double-clicks, shows a CSS spinner or animated Material Symbol *without changing button dimensions*. Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success` / `--text-error` (used on form submissions).
- Destructive variants (`.btn-danger`): deepened terracotta, visually distinct in both themes (not used on this page's main flow, but define the class).

**2.2 Card (`.card`)**
- Default: flexbox column layout, `--bg-secondary` surface, `--radius-md`, `--shadow-sm`, generous padding.
- Hover: `transform: translateY(-2px)` + `--shadow-md` transition. Focus-within: gold border highlight when a child link/button receives focus.
- Define a `.skeleton` shimmer animation class (no layout jump) and an `.empty-state` pattern (Material Symbol + guidance text).

**2.3 Form & Input (`.input-group`)**
- Structure: flex column wrapping `<label>`, the input, and a dedicated error message container.
- States via classes: empty, focused (gold outline ring), filled, valid (success border + `check` icon), invalid (error border, error-colored message, `error` icon, wired with `aria-describedby` and an `aria-live="polite"` region), disabled, read-only.
- Used for the footer newsletter signup and the modal's mini-form.

**2.4 Modal (`.modal`)**
- Triggered by Pricing tier "Choose plan" buttons: shows the selected plan summary + an email input + confirm button.
- States: opening (fade + gentle scale), open, loading (submit), success (check icon, then auto-close + toast), closing — all via CSS transitions.
- Centered flex overlay (`align-items: center`), backdrop at `--z-modal`, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, Material Symbol `close` button, keyboard **focus trap**, closes on `Esc` and backdrop click, focus returns to the trigger.

**2.5 FAQ Accordion (`.accordion-item`)**
- Each item: `<h3><button aria-expanded aria-controls>` + a `role="region"` panel. JavaScript toggles one-open-at-a-time with a smooth height transition; the `expand_more` icon rotates 180°. Fully keyboard operable.

**2.6 Theme Toggle (`.theme-toggle`)**
- Icon button in the header (and repeated in the footer): Material Symbol `dark_mode`/`light_mode`, `aria-pressed` reflecting current theme, `aria-label` announcing the action ("Switch to dark mode"), visible gold focus ring.

**2.7 Toast (`.toast`)**
- Positioned bottom-center at `--z-toast`, `role="status"` / `aria-live`, used for newsletter and modal success feedback; auto-dismiss with a CSS transition.

---

## 3. PAGE SECTION BUILD SPECIFICATION

**3.1 Sticky Header** — Brand wordmark (left), anchor links to all sections (center/right), theme toggle + mobile menu `menu` button (right). On mobile, the menu button opens a dropdown panel at `--z-dropdown` with proper `aria-expanded`/`aria-controls`. Hairline `--border-default` bottom edge. `scroll-behavior: smooth` (inside a `prefers-reduced-motion: no-preference` media query) + `scroll-padding-top` for anchor offsets.

**3.2 Hero** — Full-viewport feel: eyebrow kicker, large Cormorant headline with an SVG gold swash flourish under a key word, romantic subcopy, dual CTAs (`.btn-primary` "Begin the Journey" + `.btn-ghost`). Background: layered warm radial-gradient washes + 2–3 organic blob shapes + a botanical inline-SVG composition (per 1.6 exception) with **gentle parallax** (Section 4.5). Floral corner ornaments on two corners.

**3.3 Features** — Section heading with a small floral divider ornament beneath it; 3 `.card`s in a responsive flex row, each with a circular (`border-radius: 50%`) gold-tinted Material Symbol medallion, title, copy. Cards carry hover elevation and focus-within states.

**3.4 How It Works** — 3 steps, each with a numbered organic medallion (`border-radius: 50%`, moss/gold/terracotta rotation), title, copy, laid out on a flowing SVG vine/whiplash connector that horizontally links the steps on desktop and is hidden (or reoriented) on mobile.

**3.5 Testimonials** — 3 quote cards: `format_quote` symbol, italic Cormorant quote, 5-star rating (filled `star` symbols in gold), and an avatar rendered as a gold initial-letter medallion (no external images). Names + roles in English.

**3.6 Pricing** — 3 tiers; the middle tier is featured: gold border glow, slight `translateY` elevation on desktop, an organic-shaped "Most Loved" ribbon. Each tier: name, price, feature list with `check` icons, and a `.btn` that opens the modal (2.4). Featured tier uses `.btn-primary`; others `.btn-secondary`.

**3.7 FAQ** — Accordion per 2.5, 5–6 genuine questions, wrapped in a card-like parchment panel.

**3.8 Final CTA** — Full-width band with plum-to-moss gradient (light) / gold-washed plum (dark), organic blob shapes, floral corner ornaments, one large centered headline + a single strong `.btn-primary`. All text on this band must satisfy the contrast pairing rule in both themes.

**3.9 Footer** — Brand blurb, 2–3 columns of secondary links (Company / Resources / Legal), the newsletter `.input-group` with submit button (loading → success states + toast), social icons as Material Symbols (`aria-label` each), theme toggle repeat, and a copyright line. Top edge finished with a whiplash-curve SVG divider.

---

## 4. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, flexible widths, no horizontal overflow at 320px.
- **Smooth animations:** every state change uses `transition: var(--transition-normal)` (or `--transition-fast` for micro-feedback). All animations and the parallax are disabled/minimized under `@media (prefers-reduced-motion: reduce)` — also check `matchMedia` in JS.
- **Accessibility:** semantic HTML5 landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`), logical focus order, full keyboard operability (nav menu, accordion, modal, toggle, forms), visible focus rings everywhere, never color-alone state communication (pair color with icon/text), `aria-live` regions for form errors, loading, and toasts.
- **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
- **Parallax (botanical elements only):** transform-only `translateY`, amplitude ≤ 40px, `requestAnimationFrame`-throttled with passive scroll listeners, applied via a `data-parallax` attribute with per-element speed; fully disabled under reduced motion.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — separate, complete, and runnable by opening `index.html`. Exactly one deferred `<script src="script.js" defer>` reference; no other script tags.
- **Naming:** Tailwind utilities for layout + the fixed component class set defined in Section 2; never mix conventions.
- **Content:** real on-theme English copy throughout (Section 0.8); no lorem ipsum.
- **Self-check before finishing:** zero `style=` attributes; dark mode toggles, persists, and passes contrast in both themes; every component state in Section 2 exists in the CSS; keyboard-only pass completes nav → sections → FAQ → modal → newsletter; no horizontal scroll at 320px; reduced-motion honored; all functional icons are Material Symbols and all decorative SVGs are `aria-hidden`.
