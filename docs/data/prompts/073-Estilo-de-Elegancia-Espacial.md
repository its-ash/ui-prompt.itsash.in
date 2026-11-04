# CODING PROMPT — "Spatial Elegance" Landing Page
### Premium Spatial Computing Device · Minimalism & Swiss · Full Light/Dark

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-quality landing page below in a single attempt. Do not ask clarifying questions — where copy or content is unspecified, invent realistic, on-brand English copy.

---

## 0. PROJECT BRIEF & DESIGN DIRECTION

- **Theme:** "Spatial Elegance" — a minimalist, premium, futuristic landing page for a spatial computing device (era: 2026+ spatial computing). All source concepts are translated to English; every user-facing string, class name, and comment must be in English/ASCII.
- **Keywords:** spatial computing, elegance, innovation, seamless, intuitive, premium, minimalist, futuristic, immersive, sleek.
- **Aesthetic:** Frosted glass (backdrop blur), soft parallax, tactile micro-interactions, clean and generously spaced typography, floating elements, fluid transitions, subtle depth, immersive and sleek — executed through a **Minimalism & Swiss** lens: strict grid, generous negative space, strong typographic hierarchy, flush-left sans-serif type, restrained color, objective clarity, minimal ornamentation.
- **Sections (in order):** Sticky header/nav · Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links.
- **Light/Dark:** Full theming with adaptive elements. Dark mode is the theme's signature presentation; light mode is a fully designed counterpart — never an afterthought.

**Source CSS directives → token mapping (mandatory):**
- `background: linear-gradient(135deg, #1C1C1E, #000000)` → hero/dark background gradient token.
- `backdrop-filter: blur(20px) saturate(1.5)` (with `-webkit-` prefix) + `transform: translateZ(0)` → frosted-glass surface tokens.
- `transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)` → `--transition-normal` / `--ease-standard`.
- `border-radius: 12px` → `--radius-md`; `box-shadow: 0 10px 30px rgba(0,0,0,0.3)` → `--shadow-md`.
- System font stack → fallback chain only (see §1.6 exception clause).

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks in HTML, inline event handlers.
- All design properties, layout rules, and states are targeted via **class or ID selectors only**.
- HTML stays semantic and style-agnostic: changing the site's look must require editing only `style.css`, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` (light) and override in `.dark`. Required contract:

*Colors (Light — default token set):*
- `--bg-primary: #F0EAD6` (Starlight — never pure white), `--bg-secondary: #fefefe` (use `#fefefe` instead of `#ffffff` wherever near-white is needed), `--bg-hero: linear-gradient(135deg, #F0EAD6, #E0E0E0)`
- `--text-primary: #1C1C1E` (Space Grey), `--text-secondary: #581845` (Deep Purple, muted usage)
- `--primary: #000080` (Midnight Blue — actions) paired with `--primary-contrast: #fefefe`
- `--accent-soft: #E8C3BA` (Rose Sand), `--accent-rich: #581845` (Deep Purple)
- `--text-error: #D70015`, `--border-error: #FF3B30` (Product Red), `--border-default: rgba(28,28,30,0.12)`
- `--text-success: #1B7A3D`, `--border-success: #34C759` — *exception clause: the source palette contains no success hue; add this system green as a semantic-only token extension.*

*Colors (Dark — `.dark` overrides):*
- `--bg-primary: #1C1C1E`, `--bg-secondary: #2C2C2E`, `--bg-hero: linear-gradient(135deg, #1C1C1E, #000000)`
- `--text-primary: #E0E0E0` (Silver), `--text-secondary: rgba(224,224,224,0.65)`
- `--primary: #000080` paired with `--primary-contrast: #E0E0E0`; `--accent-soft: #F0EAD6` (Starlight highlights)
- `--text-error: #FF3B30`, `--text-success: #34C759`, `--border-default: rgba(224,224,224,0.14)`

*Glass tokens (per theme):* `--glass-bg` (`rgba(254,254,254,0.55)` light / `rgba(255,255,255,0.08)` dark), `--glass-border`, `--glass-blur: blur(20px) saturate(1.5)` — always applied with the `-webkit-backdrop-filter` prefix and `transform: translateZ(0)` on glass layers.

*Shape, depth, motion, stacking:* `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 24px`; `--shadow-sm: 0 4px 12px rgba(0,0,0,0.12)`, `--shadow-md: 0 10px 30px rgba(0,0,0,0.3)`; `--spacing-gap: 1.5rem`; `--transition-fast: 0.2s`, `--transition-normal: 0.4s`, `--ease-standard: cubic-bezier(0.25, 0.8, 0.25, 1)`; `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

**Contrast pairing rule:** every light background token pairs with a dark text token and every dark background token pairs with a light text token — enforced in **both** themes, not just the default.

**1.3 Mandatory Dark Mode Support**
- Dark tokens defined under a `.dark` class **and** an `@media (prefers-color-scheme: dark)` no-JS fallback. Theme switching must never require HTML restructuring.
- Resolution order on load: `localStorage` → `prefers-color-scheme` → Dark (signature presentation). Persist the user's choice in `localStorage`.
- Visible toggle control in the header (Material Symbol sun/moon) with correct `aria-pressed` and `aria-label` state, announcing the current theme.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., card bodies stacking from the top).
- Mobile-first: multi-column rows collapse to columns on small viewports; fluid `clamp()` typography; a centered max-width container (~1200px) with side padding. **Zero horizontal scrolling at any viewport width.**

**1.5 Framework Default**
- Use Tailwind CSS (CDN or build) or clean custom CSS organized with `@layer`/`@apply` — the heavy glass/parallax effects justify a token-driven `style.css`. Whichever you choose, apply it consistently and map every utility back to the CSS variables and generic reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load **Google Fonts** via `<link>` with `preconnect`: **Space Grotesk** for display/headings (`--font-display`) and **Inter** for body (`--font-base`). Clean, spaced typography: uppercase eyebrows with `letter-spacing: 0.12em`, large display headings with tight leading, strong Swiss scale contrast.
- *Exception clause:* the source spec's system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`) may appear **only as fallbacks appended after** the Google Font families.
- Icons: **Google Material Symbols** only (e.g., `view_in_ar`, `progress_activity`). **Forbidden:** raw inline SVGs, local icon files, emoji as icons.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Base `.btn`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `--radius-md`, `transition: var(--transition-fast) var(--ease-standard)`. Variants: `.btn--primary` (Midnight Blue), `.btn--ghost` (frosted glass), `.btn--danger` (Product Red — visually distinct in both themes). All states via CSS classes:
- **Hover:** brightness/shift + `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring built from CSS variables for keyboard navigation.
- **Active:** `transform: scale(0.97)` press feedback.
- **Loading (`.is-loading`):** disables pointer events, prevents double-clicks/double submission, renders a CSS spinner or rotating `progress_activity` Material Symbol **without changing button dimensions** (reserve the label's space).
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states driven by `--text-success` / `--text-error`, never color-only (pair with icon + text).

**2.2 Card Component**
Base `.card`: frosted-glass surface (`--glass-bg`, `--glass-border`, `--glass-blur`), `--radius-lg`, `--shadow-sm`, flex column with top-aligned content (explicitly justified exception to the center rule). States:
- **Hover:** `transform: translateY(-2px)` + elevation shift to `--shadow-md`.
- **Focus-within:** accent border highlight when a child link/button receives focus.
- **Loading (`.card--skeleton`):** CSS shimmer keyframes that preserve layout dimensions.
- **Empty state:** structured fallback with a Material Symbol icon and guidance text.
Apply to Features cards, Testimonial cards, and Pricing tiers. Pricing's recommended tier uses `.card--featured`: accent border, "Recommended" badge, elevated scale/shadow.

**2.3 Form & Input Requirements**
Used in the Final CTA email capture and the pre-order modal. Structure `.input-group` as a flex column wrapping `<label>`, the field, and a dedicated error-feedback container. Account for every state: **Empty, Focused** (outline ring from variables), **Filled, Valid** (success border + check icon), **Invalid** (error border, red text, error icon + message), **Disabled, Read-only**. Validate on blur and submit; set `aria-invalid` and `aria-describedby`; never rely on color alone.

**2.4 Modal & FAQ Accordion**
- **Pre-order modal** (triggered from pricing CTAs): states **Opening** (fade + scale via CSS transitions), **Open**, **Loading** (on submit), **Success/Error**, **Closing**. Centered flex overlay (`align-items: center`) with blurred backdrop at `--z-modal`; Material Symbol close button (`aria-label="Close dialog"`); keyboard **focus trapping**; close via `Esc` and overlay click; focus returns to the trigger; `role="dialog"` + `aria-modal="true"`. Success confirmation announced via `aria-live`.
- **FAQ:** accessible accordion — `<button>` with `aria-expanded` / `aria-controls` + answer region; CSS height/opacity transition; chevron Material Symbol rotates 180°; fully keyboard operable; content present in the DOM.

**2.5 Section-by-Section Build Specifications**
- **Header (sticky):** frosted-glass bar; wordmark logo; anchor nav (Features, How It Works, Testimonials, Pricing, FAQ); theme toggle; compact CTA. Mobile: accessible hamburger (`aria-expanded`) converting nav to a column at `--z-dropdown`. Include a "Skip to main content" link.
- **Hero:** full viewport on `--bg-hero`; 2–3 floating abstract glass shapes with slow ambient float animation and soft scroll parallax (rAF or CSS scroll-driven; **disabled under `prefers-reduced-motion`**); eyebrow label, large display H1, subcopy, dual CTAs (primary "Pre-order" + ghost "Explore features"), scroll cue.
- **Features:** 3 glass cards (icon, title, copy) in a flex row → column on mobile.
- **How It Works:** 3 numbered steps (01/02/03) with hairline connectors, icons, and copy; row → column.
- **Testimonials:** 3 `<blockquote>` cards; monogram-initial avatars in glass circles; `<cite>` name + role.
- **Pricing:** 3 tiers with price, feature list (check Material Symbols), CTA opening the pre-order modal; middle tier featured.
- **FAQ:** 5 realistic Q&As in the accessible accordion pattern.
- **Final CTA:** full-width glass panel, headline, email-capture form with full §2.3 states, button success state, and an `aria-live` status message.
- **Footer:** secondary links (About, Support, Privacy, Terms, Contact), Material Symbol social icons, copyright, small print.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, standard breakpoints, no horizontal overflow anywhere.
- **Smooth animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; respect `prefers-reduced-motion` (disable parallax, floating, and shimmer; retain simple opacity fades).
- **Accessibility:** sufficient contrast (≥ 4.5:1) in **both** light and dark modes; never communicate state by color alone; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`, `blockquote`); correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability (no mouse-only interactions); `aria-live` regions for form feedback, loading, and confirmation messages.
- **Mandatory visual feedback:** every click, hover, focus, and submission triggers a visible state change.
- **Destructive/danger actions:** `.btn--danger` in Product Red, distinct in both themes.
- **Tactile micro-interactions:** button press scale, card lift, icon nudge on hover, ambient floating hero elements — all token-driven and motion-safe.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer>`).
- **Naming convention:** BEM consistently across the entire deliverable (`.card`, `.card__title`, `.card--featured`, `.btn--primary`, `.faq__question`) — never mix conventions.
- **Copy:** write realistic English product copy (invent the device name, tagline, feature descriptions, testimonial names/roles, prices, and FAQ answers). **No lorem ipsum.** No unrequested placeholder content.
- **`script.js` scope:** theme toggle + persistence, mobile nav, accordion, modal lifecycle + focus trap, form validation + states, parallax, smooth-scroll behavior — all as progressive enhancement.
- Deliver complete, runnable code on the **first attempt**, with all rules above verifiably satisfied.
