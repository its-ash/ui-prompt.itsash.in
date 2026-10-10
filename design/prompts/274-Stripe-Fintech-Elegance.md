# CODING AGENT PROMPT — "Stripe Fintech Elegance" Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Generate the complete, production-quality code for a fintech landing page on the **first attempt** — no clarifying questions, no partial output.

**Objective:** Build a single-page landing page in the **"Stripe Fintech Elegance"** style — premium fintech aesthetic, weight-300 headlines, blue-tinted shadows, Stripe-purple accent, conservative radii — with **fully designed Light and Dark modes**.

**Required sections, in order:** Sticky Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary link columns.

**Copy:** Invent one coherent fictional fintech brand (e.g., payments infrastructure for modern platforms). All user-facing copy must be written in **English**, realistic and specific. Lorem ipsum is prohibited.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain semantic and style-agnostic — reskinning the site must only require editing the CSS file.

### 1.2 CSS Variables & Theme Tokens
Store every visual token in `:root` (light) and override in the dark theme (see 1.3). Use these exact values:

* **Brand & Accent:** `--primary: #533afd` (Stripe Purple — CTAs, links, icons); `--secondary: #ea2261` (Ruby — gradients, danger); `--accent-magenta: #f96bee`; `--gradient-accent: linear-gradient(135deg, #ea2261, #f96bee)` (decorative only, never for body text); `--brand-dark: #1c1e54` (dark brand sections — constant in both themes); `--navy-deep: #0d253d`.
* **Light Mode Surfaces & Text:** `--bg-primary: #fefefe` (**Exception:** the source palette lists `#ffffff`; per the white-token rule, substitute `#fefefe` wherever pure white is specified); `--bg-secondary: #f6f9fc` (subtle cool tint for cards/bands, harmonizing with the border color); `--text-primary: #061b31` (Deep Navy — **all headings, never black**); `--text-secondary: #64748d` (Body); `--border-default: #e5edf5`.
* **Feedback:** `--text-success: #0e9f6e`; `--text-error: #dc3556` (ruby-derived); `--border-success` / `--border-error` derived from these.
* **Dark Mode Overrides:** `--bg-primary: #061b31`; `--bg-secondary: #0d253d`; `--text-primary: #fefefe`; `--text-secondary: #9fb3c8` (lightened Body — must pass WCAG AA on `#061b31`); `--border-default: rgba(229,237,245,0.14)`; `--primary: #533afd` for filled CTAs with white text, brightened to `#7a5cff` for link text on dark surfaces; shadows deepened (e.g., `rgba(0,0,0,0.5)`).
* **Contrast Pairing (mandatory in both themes):** every light background token pairs with a dark text token and vice versa. White text on `#533afd` buttons; navy text on `#fefefe` surfaces; light text on `#1c1e54` / `#0d253d` sections.
* **Radius (conservative, 4–8px only — never larger):** `--radius-sm: 4px`; `--radius-md: 6px`; `--radius-lg: 8px`.
* **Shadows (blue-tinted, brand atmosphere):** `--shadow-md: rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px` (exact spec value); `--shadow-sm: rgba(50,50,93,0.12) 0px 8px 16px -8px`.
* **Motion & Spacing:** `--spacing-gap: 1.5rem`; `--transition-fast: 150ms`; `--transition-normal: 300ms`; `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Elevation:** `--z-dropdown: 100`; `--z-modal: 1000`; `--z-toast: 1100` — layered components must never conflict.

### 1.3 Mandatory Dark Mode Support
* Define dark tokens under **both** `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`.
* Theme switching must occur purely through CSS variable swaps — no HTML restructuring.
* **Persistence:** store the user's choice in `localStorage` (e.g., key `"theme"`), falling back to `prefers-color-scheme` on first visit. Apply the stored theme in `script.js` on load.
* **Toggle control:** visible in the header — Material Symbols sun/moon icon, correct `aria-pressed` state, `aria-label` ("Switch to dark theme" / "Switch to light theme"), keyboard operable, with a visible transition between modes.

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (Tailwind flex utilities or custom classes).
* **Default rule:** every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* **Mobile-first:** rows convert to columns on small viewports; nav collapses to a hamburger drawer; **no horizontal scrolling at any viewport ≥ 320px**.

### 1.5 Framework Default & Tailwind CSS Integration
* Use **Tailwind CSS via CDN** (`<script src="https://cdn.tailwindcss.com"></script>` — an external reference, permitted) for layout utilities, **plus** `style.css` for all tokens and component classes.
* Component styling must live in generic reusable classes — `.btn`, `.card`, `.input-group`, `.section`, `.container` — bound to the CSS variables. Never hardcode hex values outside `:root`/theme blocks.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text:** Load **Inter** (weights 300;400;500;600) via Google Fonts `<link>` and bind to `--font-base`. **Exception clause:** the source spec references Söhne with a `system-ui` stack; Söhne is not available on Google Fonts, so Inter is the mandated substitute, with `system-ui` retained only as a fallback in the font stack.
* **Headlines: weight 300 (light)** — authority through typographic lightness. Body: 400. Buttons/labels/eyebrows: 500.
* **Display tracking:** negative letter-spacing at display sizes — `-1.4px` at 56px, scaled proportionally (≈ `-0.025em` for sizes ≥ 48px). Never apply negative tracking below ~18px.
* **OpenType:** apply `font-feature-settings: "ss01" 1` to all text; `font-variant-numeric: tabular-nums` on every numeral in stats, prices, and step numbers.
* **Icons:** Google Material Symbols (Outlined) via Google Fonts. **Inline SVGs and local icon files are forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
* **Default:** `.btn` — `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px; `border-radius: var(--radius-md)`; font-weight 500; `transition: var(--transition-fast)`.
* **Variants:** `.btn-primary` (bg `--primary`, white text); `.btn-secondary` (transparent, 1px `--border-default`, `--text-primary` text; inverted border/text on dark sections); `.btn-danger` (bg `--secondary`, white text — visually distinct in both themes); `.btn-light` (white bg, `--primary` text — for dark brand sections).
* **Hover:** brightness shift + `--shadow-sm`; `cursor: pointer`.
* **Focus-visible:** distinct ring via `outline` (2px `--primary`, 2px offset) — clearly visible in both themes.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables interaction and double-clicks; swaps the label for a rotating Material `progress_activity` icon animated via CSS; button dimensions must not change.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error (`.is-success` / `.is-error`):** temporary feedback states driven by `--text-success` / `--text-error`, announced via an `aria-live` region.

### 2.2 Card Component
* **Default:** flexible flexbox layout, `--bg-secondary`, 1px `--border-default`, `--radius-lg`, `--shadow-sm`.
* **Hover (interactive cards):** `transform: translateY(-2px)` + `--shadow-md` (blue-tinted).
* **Focus-within:** border highlights to `--primary` when a child link/button receives focus.
* **Loading (`.card--skeleton`):** shimmer keyframe animation defined in CSS; no layout jumps.
* **Empty state (`.card--empty`):** structured fallback — Material icon + clear guidance text.

### 2.3 Form & Input Requirements (Footer newsletter signup)
* **Structure:** `.input-group` — flex container wrapping a `<label>`, the input, and a dedicated error-feedback element.
* **States — all styled via CSS classes:** Empty; Focused (2px `--primary` ring); Filled; Valid (`--border-success` + check icon); Invalid (`--border-error`, error text, error icon, message in an `aria-live` region); Disabled; Read-only.
* Input: min-height 44px, `--radius-md`, `--bg-primary`, `--border-default`.

### 2.4 Modal / Popup Requirements (Hero "Watch the demo" CTA)
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX:** centered flex container (`align-items: center`), backdrop overlay `rgba(6,27,49,0.55)`, Material `close` icon button (`aria-label="Close dialog"`), keyboard **focus trapping**, return focus to the trigger on close, body scroll locked, closable via `Esc` and overlay click. `role="dialog"`, `aria-modal="true"`. Demo media content may be a styled empty state (`.card--empty` pattern) since it is genuinely unspecified.

### 2.5 FAQ Accordion
* Each item: trigger `<button>` with `aria-expanded` + `aria-controls`, paired region with `role="region"` + `aria-labelledby`.
* Expand/collapse animated purely via CSS (class toggle only — no JS height math); Material `expand_more` chevron rotates 180° on open.
* Fully keyboard operable with visible focus rings; smooth `--transition-normal` animation.

---

## 3. PAGE SECTION REQUIREMENTS

### 3.1 Header (Sticky)
* Flex row: brand wordmark (weight 300, `--text-primary`), anchor nav links (Features, How It Works, Pricing, FAQ), theme toggle (per 1.3), `.btn-primary` CTA.
* Sticky with backdrop blur and a `--border-default` bottom edge on scroll; `--z-dropdown`.
* Mobile: Material `menu` icon toggles a flex-column drawer — `aria-expanded`, `aria-controls`, animated, keyboard operable.

### 3.2 Hero
* `#fefefe` canvas with a subtle Ruby→Magenta blurred gradient decoration (`aria-hidden`, non-interactive).
* Display headline: weight 300, `--text-primary` navy, ~56px desktop with `-1.4px` letter-spacing; one accent word may use `--primary` or gradient text.
* Subcopy in `--text-secondary`; dual CTAs: `.btn-primary` "Start now" + `.btn-secondary` "Watch the demo" (opens the modal per 2.4).
* Trust row: fictional customer wordmarks as styled text (no images) + one stat using tabular numerals.
* Product mock panel: right side on desktop, stacked on mobile — `--radius-lg` with the exact blue-tinted `--shadow-md`.

### 3.3 Features (3 cards)
* White section. Heading pattern: purple eyebrow (500 weight), weight-300 H2, `--text-secondary` subcopy.
* Grid: 3 columns → 1 on mobile. Each card: Material icon in a purple-tinted tile, weight-300 title, body copy, "Learn more" link (`--primary`, underline on hover, visible focus ring). Interactive card states per 2.2.

### 3.4 How It Works (3 steps) — Dark Brand Section
* Background `--brand-dark: #1c1e54` **in both themes**; light text (`#fefefe` weight-300 headings, light secondary copy).
* Three steps: oversized tabular-numeral markers (01 / 02 / 03) in `--gradient-accent` or `--primary`, Material icon, weight-300 title, copy; connecting line on desktop, hidden on mobile.

### 3.5 Testimonials
* White section; 3 quote cards (grid 3 → 1).
* Avatar: gradient-initial circles using `--gradient-accent`; name at 500 weight; role/company in `--text-secondary`; Material `format_quote` icon in `--primary`.

### 3.6 Pricing (3 tiers)
* `--bg-secondary` band; grid 3 → 1.
* **Billing toggle:** Monthly/Annual segmented control with `aria-pressed`, updating all prices (tabular numerals) with an `aria-live="polite"` announcement; Annual shows a savings badge.
* Each tier: name, large weight-300 price (tabular numerals), feature list with Material `check` icons in `--text-success`, CTA button (all states per 2.1).
* Middle "Recommended" tier: 2px `--primary` border or gradient ring, slight scale/elevation, badge chip. Hover/focus per 2.2.

### 3.7 FAQ
* White section; 4–6 realistic English Q&As about the fictional product; accordion per 2.5; max-width ~720px, centered.

### 3.8 Final CTA — Dark Brand Section
* `--brand-dark` background with Ruby→Magenta/purple gradient decoration.
* Weight-300 display headline in light text with negative letter-spacing, short copy, `.btn-light` or `.btn-primary` CTA with full state coverage per 2.1.

### 3.9 Footer
* Background `--navy-deep` (token-adjusted in dark mode); light text throughout.
* Columns: brand blurb + newsletter `.input-group` (per 2.3, with submit loading/success/error states and `aria-live` feedback); secondary link columns (**Product, Company, Resources, Legal**) with real hrefs and visible focus styles; social icons (Material Symbols) with `aria-label`s.
* Bottom bar: © current year (tabular numerals) + legal links.

---

## 4. CORE UX & MICRO-INTERACTION RULES
* **Responsive by default:** fluid type via `clamp()`; all breakpoints verified against horizontal overflow from 320px up.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable transforms, shimmer, and drawer slides; retain simple opacity fades).
* **Accessibility (a11y):** WCAG AA contrast in **both** Light and Dark modes. Never rely on color alone — pair every state with an icon, underline, or text. Semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); logical DOM/focus order; full keyboard operability for the nav drawer, modal, accordion, pricing toggle, and theme toggle; `aria-live` regions for form feedback, price changes, and loading states.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive actions:** define `.btn-danger` (per 2.1) so it is visually distinct in both themes, even if the landing page only references it in the design system.

---

## 5. DELIVERABLE & OUTPUT FORMAT
* **File structure:** three separate files — `index.html`, `style.css`, `script.js`. No inline `<script>` bodies and no inline styles; `script.js` is referenced exactly once with `defer`.
* **Naming convention:** **BEM** (`block__element--modifier`) consistently across all HTML classes, CSS selectors, and JS hooks. Tailwind utilities are permitted for layout only; component styling must come from BEM classes bound to CSS variables. Never mix conventions.
* **No unrequested placeholders:** write real, specific English fintech copy everywhere the brand story requires it; placeholders are allowed only for genuinely unspecified content (e.g., the modal's demo media).
* **Completeness:** deliver the entire page — all nine sections, both themes, every component state — fully wired and functional on the first attempt.
