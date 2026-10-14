# System Prompt: Build the "Claude Warm Parchment" Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-ready landing page on the first attempt. Do not ask clarifying questions — make decisive, tasteful design decisions within the constraints below.

**Project Brief:** A single-page marketing site themed **"Claude Warm Parchment"** — an editorial, literary, warm-parchment aesthetic inspired by Claude/Anthropic (2024–2026 "Literary AI" era). Premium paper background, serif headlines with book-title gravitas at weight 500, terracotta as the *sole* accent (deliberately earthy and anti-tech), warm-toned grays with yellow-brown undertones, ring-based shadows instead of drop shadows, and light/dark section alternation that reads like chapters of a book. Body text at 1.60 line-height for comfortable reading.

**Required sections (in this order):** Sticky Header (with theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ (accessible accordion), Final CTA (with email capture form), Footer with secondary links. Include one signup modal reachable from the Hero and Pricing CTAs.

---

## 1. ARCHITECTURE & STYLE RULES (MANDATORY)

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is strictly forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors defined in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling. Changing the site's look must require editing only `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
Store every visual token in `:root` (and the dark theme selectors) as CSS variables:

* **Colors (Light — default):**
  * `--primary: #c96442` (Terracotta — the sole accent for CTAs, links, highlights)
  * `--primary-hover: #b0563a`
  * `--primary-soft: rgba(201, 100, 66, 0.10)` (tinted fills)
  * `--secondary: #d97757` (Coral — soft highlight; becomes the dark-mode accent)
  * `--bg-primary: #f5f4ed` (Parchment — page background)
  * `--bg-secondary: #faf9f5` (Ivory — cards, elevated surfaces, alternate sections)
  * `--text-primary: #141413` (Near Black)
  * `--text-secondary: #5e5d59` (Olive Gray)
  * `--text-muted: #87867f` (Stone Gray — reserved for large text/metadata; must not be used for small body copy)
  * `--text-success` and `--text-error`: warm-tuned olive green (e.g., `#557153`) and warm red (e.g., `#a03426`). The error red must remain visually distinguishable from terracotta in both themes, and state must never be communicated by color alone.
  * `--border-default: #f0eee6` (Cream), `--border-strong: #e0ddd0` (deeper cream used by ring shadows), `--border-error`, `--border-success`.
* **Contrast Pairing:** Every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforce this pairing in both themes. Verify all body-size text reaches ≥ 4.5:1 contrast.
* **Light Mode Background:** Never pure white. The parchment `#f5f4ed` is the page background; if a near-white is ever needed, use `#fefefe`, never `#ffffff`.
* **Shape & Depth — ring shadows, never drop shadows:** `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 20px` (soft, organic corners); `--shadow-sm: 0px 0px 0px 1px var(--border-strong)`; `--shadow-md: 0px 0px 0px 1px var(--border-strong), 0px 1px 3px rgba(20, 20, 19, 0.05)`. Elevation is expressed as warm-gray rings (`0px 0px 0px 1px`), not soft drop shadows.
* **Spacing & Transitions:** `--spacing-gap: 1.5rem` (plus a consistent spacing scale), `--transition-fast: 150ms`, `--transition-normal: 250ms`, `--ease-standard` (a gentle ease-out curve).
* **Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300` — all layered components must consume these tokens.
* **Typography tokens:** `--font-headline` and `--font-base` (see 1.6), plus line-height rules: 1.10 for all headlines, 1.60 for body text.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define the dark token set under **both** `@media (prefers-color-scheme: dark)` (scoped so it does not apply when a `.light` class is present) **and** a `.dark` class selector, so system preference and manual override both work without any HTML restructuring.
* **Dark palette (warm, never blue-black):** `--bg-primary: #141413`, `--bg-secondary: #1c1b18`, `--text-primary: #faf9f5`, `--text-secondary: #b5b0a4`, `--border-default: #2b2925`, `--border-strong: #3a3730`, `--primary: #d97757` (coral — brighter terracotta for contrast on dark), `--primary-hover: #e08a6d`, plus dark-adjusted success/error tokens that pass contrast.
* **Section alternation continues in dark mode:** adjacent sections alternate between the two dark tones, preserving the "book chapters" rhythm.
* **Persistence:** Store the user's choice in `localStorage` (e.g., key `theme`), falling back to `prefers-color-scheme` on first visit. Render a visible toggle in the header with correct `aria-pressed` state and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode"), swapping the Google Material Symbol (`light_mode` / `dark_mode`).

### 1.4 Flexbox Layout & Mobile-First Alignment
* **Build all layout structures with Flexbox.** Every flex container defaults to `align-items: center` unless an exception is explicitly justified in these specs (justified exceptions: `.input-group` stacks and `.card` content columns use `align-items: stretch`/`flex-start` so labels and copy align to the reading edge).
* **Mobile-first:** All rows convert to columns on small viewports; use fluid sizing (`clamp()` for type) and a max-width container (~1120px). Horizontal scrolling must never occur.
* **Chapter alternation:** Alternate section backgrounds between `--bg-primary` and `--bg-secondary` (via a `.section--alt` modifier) so the page reads like book chapters; separate sections with generous whitespace and cream ring borders.

### 1.5 CSS Approach & Naming Convention
* Use **clean custom CSS in `style.css`**, organized with native `@layer` (base → components → utilities). Tailwind CDN is not required; if you use any utility classes, they must map back to the CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).
* **Naming:** BEM exclusively (`block__element--modifier`). Never mix conventions.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load Google Fonts via `<link>`: **Lora** (weights 500 and 600) for `--font-headline` and **Inter** (weights 400, 500, 600) for `--font-base`. *Exception clause: the source style spec named Georgia and Arial directly — per the Google Fonts mandate they are retained strictly as fallbacks in the stacks (`'Lora', Georgia, serif` and `'Inter', Arial, sans-serif`).*
* **Headlines:** All `h1–h3` use `--font-headline` at **weight 500**, line-height 1.10 — book-title gravitas, never bold-heavy.
* **Icons:** Google Material Symbols (**Rounded** variant), loaded via the Google Fonts link. Inline SVGs, local icon files, and emoji-as-icons are all forbidden. *Exception clause: the theme's "organic illustrations" must be composed purely in CSS (soft blob shapes via `border-radius`, terracotta/olive tints, `aria-hidden`, `pointer-events: none`) — no inline SVG.*

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.btn--danger`)
Style every state via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; terracotta background with ivory text for primary; transparent with cream ring border for secondary; transitions on `var(--transition-fast)`.
* **Hover:** Visible shift — darkened terracotta and/or intensified ring shadow, with `cursor: pointer`.
* **Focus:** Distinct `:focus-visible` ring built from CSS variables (e.g., double ring via `box-shadow`), never `outline: none` without replacement.
* **Active/Pressed:** `transform: scale(0.97)` tactile feedback.
* **Loading (`.is-loading`):** Disables interaction and double-clicks (`pointer-events: none; aria-busy="true"`), renders a spinning Google Material Symbol (`progress`) or CSS spinner **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, grayscale filter, `cursor: not-allowed`.
* **Success/Error (`.is-success`, `.is-error`):** Temporary feedback states driven by `--text-success` / `--text-error`, paired with an icon (never color alone).
* **Danger:** `.btn--danger` must be visually distinct from primary in both light and dark themes.

### 2.2 Card Component (`.card`)
* **Default:** Flexbox column layout, `--bg-secondary` background, cream border + `--shadow-sm` ring, `--radius-lg` corners, comfortable padding.
* **Hover (interactive cards only — features, pricing):** `transform: translateY(-2px)` plus ring-shadow shift to `--shadow-md`.
* **Focus-within:** Card border/ring highlights when a child link or button receives focus.
* **Loading (`.card--skeleton`):** Shimmer animation defined in CSS (gradient sweep) that preserves layout; degrades to a static tint under `prefers-reduced-motion`.
* **Empty state (`.card--empty`):** Centered Google Material Symbol plus clear guidance text.

### 2.3 Form & Input Requirements (`.input-group`)
Used in the Final CTA email capture and the modal signup form:
* **Structure:** Flex container wrapping a `<label>`, the input field, and a dedicated error feedback element with reserved min-height (no layout jumps).
* **States — all styled via classes/pseudo-classes:** empty, focused (terracotta ring via `box-shadow`), filled, valid (`.is-valid`: success border + check Material Symbol), invalid (`.is-invalid`: error border, error icon, error message text), disabled, read-only.
* **Behavior:** Vanilla-JS email validation; the error container uses `aria-live="polite"`; submit demonstrates loading → success/error button states.

### 2.4 Modal / Popup Requirements (`.modal`)
A "Start your free trial" dialog triggered from the Hero primary CTA and Pricing buttons:
* **States:** Opening (fade + subtle scale-in), Open, Loading (form submission), Success/Error, Closing — all animated via CSS transitions on modifier classes.
* **UX:** Centered with a flex container (`align-items: center`), dimmed backdrop overlay, Google Material Symbol `close` button (44px, `aria-label="Close dialog"`), keyboard focus trapping (Tab/Shift+Tab cycle), close via `Esc` and overlay click, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, focus returned to the triggering element, body scroll locked, stacked at `--z-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** Fluid type and spacing, standard breakpoints (~640/768/1024px), zero horizontal overflow.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable transforms, shimmer, and smooth scrolling).
* **Accessibility (a11y):** Sufficient contrast in both light and dark modes; never rely on color alone for state; semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); a skip-to-content link; logical DOM/focus order; full keyboard operability for the theme toggle, mobile menu, FAQ accordion, and modal; `aria-live` regions for all dynamic feedback (form errors, loading, success confirmations).
* **Mandatory visual feedback:** Every click, hover, and submission triggers a visible state change.
* **Destructive actions:** Any danger-styled action must be visually distinct in both themes.

---

## 4. DELIVERABLES & OUTPUT FORMAT

* **Files:** Separate `index.html`, `style.css`, and `script.js`. The only script tag permitted is a single deferred reference: `<script src="script.js" defer></script>`. All behavior (theme persistence, mobile menu, accordion, modal focus trap, form validation, smooth scrolling) lives in `script.js` as dependency-free vanilla JS.
* **Naming:** BEM consistently across the entire deliverable.
* **No unrequested placeholders:** Write real, polished English copy everywhere — lorem ipsum is prohibited.

---

## 5. PAGE SECTION SPECIFICATIONS

* **5.1 Header:** Sticky; parchment background with a cream bottom ring border (adapts in dark mode). Serif wordmark logo, anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ) with smooth scrolling and `scroll-margin-top` offsets, the theme toggle, and a compact primary CTA. On mobile, collapse the nav into an accessible hamburger disclosure (`aria-expanded`, `--z-dropdown`, closes on `Esc` and link click).
* **5.2 Hero:** Two-column flex layout on desktop (copy + CSS-only organic illustration composition), stacked on mobile. Small-caps terracotta eyebrow, serif H1 (weight 500, `clamp()` sizing), supporting copy in `--text-secondary`, primary CTA opening the modal, secondary CTA scrolling to How It Works, and a small trust line. Decorative CSS blob shapes in terracotta/olive tints, `aria-hidden`.
* **5.3 Features:** Serif section heading + lede, then 3 equal `.card`s (flex row wrapping to columns on mobile), each with a Material Symbol in a terracotta-tinted circle, serif card title, and body copy. Interactive hover lift.
* **5.4 How It Works:** 3 steps with oversized serif terracotta numerals (01 / 02 / 03), step titles, and copy, connected by a subtle rule that becomes vertical on mobile.
* **5.5 Testimonials:** 3 quote cards — serif italic quotation, `format_quote` Material Symbol accent, and an attribution row with an initials avatar circle (terracotta tint), name, and role in `--text-secondary`.
* **5.6 Pricing:** 3 tiers; the middle tier uses `.card--featured` with a terracotta ring, a "Most popular" badge (terracotta background, ivory text, fully rounded), and the primary button, while flanking tiers use secondary buttons. Each tier: serif name, large serif price, billing note, and a check-icon feature list.
* **5.7 FAQ:** 5–6 items in an accessible accordion — each toggle is a `<button>` with `aria-expanded` and `aria-controls`, panels with `role="region"`, animated expand/collapse (e.g., `grid-template-rows: 0fr → 1fr`), and a plus/minus Material Symbol that rotates.
* **5.8 Final CTA:** Centered panel on the alternate section tone with a cream ring border: serif H2, supporting copy, and the email capture `.input-group` with a primary submit button — full validation, loading, and an `aria-live` success confirmation.
* **5.9 Footer:** Alternate section tone with a top ring border; brand wordmark, grouped secondary link columns (Product, Company, Resources), copyright line, and a short warm sign-off. All links keyboard-focusable with visible hover/focus states.

---

## 6. CONTENT & COPY DIRECTION

* **Language:** Write all user-facing copy in **English**. Translate any non-English source terminology (the palette names were Portuguese — use Parchment, Near Black, Terracotta, Ivory, Coral, Olive Gray, Stone Gray, Cream Border).
* **Voice:** Warm, literary, editorial — evocative but clear. No tech jargon, no startup clichés. Terracotta is the only accent color; blues and purples are forbidden anywhere.
* **Product:** Invent one coherent fictional product — an AI writing companion — with a single consistent name used across header, hero, modal, and footer. Every headline, paragraph, feature description, testimonial, price, and FAQ answer must be finished, publication-quality copy.
