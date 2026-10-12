# SYSTEM PROMPT — Build the "Terra Incognita" Landing Page (Complete, First Attempt)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page in a single pass. No partial output, no follow-up questions, no truncation, no TODOs.

**Project Brief:**

* **Theme:** *Terra Incognita* — an artistic/creative cartography & atlas aesthetic: aged parchment maps, compass roses, contour lines, latitude/longitude grids, ink-and-cream exploration mood, executed with 2020s contemporary polish.
* **Sections (in order):** Sticky Header/Nav → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA (email capture) → Footer with secondary link columns.
* **Palette (given):** Primary `#20180f`, `#2b2115`, `#3a2c1a`; Secondary `#211709`, `#5c3a1e`, `#e8d9b8`.
* **Visual Effects (given):** Glow, Neumorphism, Gradients, Hover Effects.
* **CSS Techniques (given):** CSS Grid, Flexbox, Keyframe Animations, Transitions, Transforms, Gradients, Box Shadows, Text Shadows, Border Radius.
* **Mode (given):** Light-first presentation (Dark mode is still mandatory — see §1.3 exception).
* **Language:** All user-facing copy, labels, comments, class names, variables, and file names in English.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**

* All styling lives exclusively in `style.css`. The `style="..."` attribute is **forbidden** anywhere in the HTML.
* Target all design properties, layout rules, and states via class or ID selectors only.
* HTML must remain clean, semantic, and style-agnostic: re-theming the site must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**

Store every visual token in `:root` (light/default) and override in `.dark` (see §1.3). Required tokens:

* **Colors:** `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`. You may add supporting tokens (e.g., `--accent-parchment`, `--glow`).
* **Suggested light values:** `--primary: #20180f`; `--secondary: #5c3a1e`; `--accent-parchment: #e8d9b8`; `--bg-primary: #f3ecdb` (warm parchment — never pure white; use `#fefefe` only if a near-white surface is genuinely required); `--bg-secondary: #faf5e7` (elevated cards); `--text-primary: #20180f`; `--text-secondary: #5c3a1e`; `--text-success: #3e6b35`; `--text-error: #a63d2a` (cartographic red ink); `--border-default: #d8c8a6`.
* **Suggested dark values:** `--bg-primary: #20180f`; `--bg-secondary: #2b2115`; `--text-primary: #e8d9b8`; `--text-secondary: #c9b489`; `--border-default: #3a2c1a`; success/error shifted to lighter variants (e.g., `#a8c98e`, `#e08a70`) for dark-mode contrast.
* **Contrast pairing is mandatory in every theme:** any light background token pairs with a dark text token; any dark background token pairs with a light text token. Verify ≥ 4.5:1 contrast for body text in **both** modes.
* **Radius & shadows:** `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--shadow-sm`, `--shadow-md`. Define neumorphic dual shadows (one dark, one light offset shadow per surface) per theme, and a warm `--glow` token (e.g., light mode: `0 0 24px rgba(92,58,30,0.25)`; dark mode: `0 0 24px rgba(232,217,184,0.35)`).
* **Spacing & transitions:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Elevation:** `--z-dropdown`, `--z-modal`, `--z-toast` — sticky header uses `--z-dropdown`; never hard-code z-index values.

**1.3 Mandatory Dark Mode Support**

* Dark mode **must always be fully defined**: all required tokens overridden under a `.dark` class selector applied to `<html>`, so backgrounds and text swap seamlessly with zero HTML restructuring.
* Provide a visible theme toggle in the header (sun/moon Google Icons) with correct `aria-pressed` and a dynamically updated `aria-label` ("Switch to dark mode" / "Switch to light mode"); it must be keyboard operable and cause no layout shift.
* Persist the user's explicit choice via `localStorage`.
* **Exception (user-specified Light-first build):** Light mode is the required default presentation — on first visit (no `localStorage` value), render Light mode and do **not** auto-apply a bare `@media (prefers-color-scheme: dark)` block that would override the Light default; dark mode applies exclusively via the `.dark` class. All other dark-mode obligations above remain fully in force.
* Dark mode must stay on-theme: espresso-ink backgrounds (`#20180f`, `#2b2115`), parchment-cream text, and glow/neumorphic effects re-tuned to remain visible on dark surfaces.

**1.4 Flexbox & CSS Grid Layout (Mobile-First)**

* Use **CSS Grid** for macro layouts: Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), and Footer columns — e.g., `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))`.
* Use **Flexbox** for all component internals (buttons, nav, card content, form rows, hero content). Every flex container must default to `align-items: center` unless an exception is explicitly justified in a CSS comment.
* Mobile-first and responsive by default: all grids collapse to one column below ~768px; the nav collapses to an accessible hamburger panel; no horizontal scrolling at any viewport ≥ 320px.

**1.5 CSS Approach & Reusable Classes**

* Because the style spec enumerates raw CSS techniques, write clean, hand-organized custom CSS in `style.css` structured with `@layer` (tokens → base → components → utilities). If you introduce any Tailwind-style utilities, every utility must map back to the CSS variables or generic reusable classes.
* Define reusable components as generic classes: `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.card`, `.input-group`, `.section`, `.container`, `.accordion__item`, etc.

**1.6 Typography & Icons (Google Fonts Mandatory)**

* **Text fonts (Google Fonts only):** Fraunces (display/headings — its vintage-serif character fits the atlas mood) and Inter (body). Load via `<link>` tags and bind them to tokens: `--font-display: 'Fraunces', serif` and `--font-base: 'Inter', sans-serif`. Apply fluid sizing with `clamp()`.
* **Icons:** Google Material Symbols (Outlined) only. Suggested glyphs: `explore`, `travel_explore`, `map`, `terrain`, `layers`, `navigation`, `route`, `auto_stories`, `workspace_premium`, `check_circle`, `expand_more`, `arrow_forward`, `close`, `menu`, `mail`, `alternate_email`, `light_mode`, `dark_mode`.
* **Raw inline SVGs, local icon files, and emoji-as-icons are explicitly forbidden.**

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**

Style all states via CSS classes; never inline:

* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — minimum touch target 44×44px.
* **Primary variant:** ink `--primary` background with `--accent-parchment`/cream text and the warm `--glow` on hover.
* **Secondary variant:** outlined/ghost on parchment with `--secondary` border.
* **Hover:** brightness shift and/or glow intensification with `cursor: pointer`.
* **Focus-visible:** distinct ring built from CSS variables (`outline` + `box-shadow`) for keyboard navigation.
* **Active/pressed:** `transform: scale(0.97)`.
* **Loading:** disables interaction (prevents double-clicks), preserves button dimensions, renders a CSS-animated spinner or rotating Google Icon; set `aria-busy="true"` via JS.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styling driven by `--text-success` / `--text-error` (used by the Final CTA form submit flow).
* **Danger:** define `.btn--danger` in the stylesheet with visually distinct styling that holds up in both light and dark themes, even if unused on this page.

**2.2 Card Component** (Features, How It Works steps, Testimonials, Pricing tiers)

* **Default:** Grid/Flexbox layout, `--bg-secondary` surface, visible `--border-default`, neumorphic `--shadow-sm` (keep visible borders — never delineate interactive cards by soft shadows alone).
* **Hover:** `transform: translateY(-2px)` plus a shadow/glow shift.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Loading (skeleton):** define a shimmer keyframe animation and skeleton classes; apply them to any asynchronously rendered content (e.g., a simulated content fetch) without layout jumps.
* **Empty state:** structured fallback layout (Material Symbol + guidance text) defined in the stylesheet for any dynamic region that can render empty.

**2.3 Form & Input Requirements** (Final CTA email capture; optional footer newsletter)

* **Structure:** Flex container wrapping a `<label>`, the input field, and a dedicated error-feedback element with `aria-live="polite"`.
* **States (all styled in CSS):** Empty, Focused (outline ring via tokens), Filled, Valid (success border + `check_circle` icon), Invalid (error border + error icon + error text — never color alone), Disabled, Read-only.
* **Behavior (in `script.js`):** validate on blur and on submit (required + email pattern); toggle `aria-invalid`; on submit show the button's loading state, then render a success message into the `aria-live` region (simulated with `setTimeout` — comment clearly that no backend exists).

**2.4 Modal / Popup Requirements** (if any modal is used, e.g., "View full plan details" from a pricing tier)

* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions.
* **UX:** centered flex overlay (`align-items: center`) with backdrop, Material Symbol close button, focus trapping, close via `Esc` and overlay click, `role="dialog"` + `aria-modal`, focus restored to the trigger on close, layered via `--z-modal` (any toast uses `--z-toast`). If you ship no modal, the z-index tokens must still be defined.

**2.5 FAQ Accordion**

* Each item: a heading containing a `<button>` with `aria-expanded` + `aria-controls`, controlling a region with `aria-labelledby`.
* Toggle via click and keyboard (Enter/Space); animate open/close height with the `grid-template-rows: 0fr → 1fr` technique (no `max-height` hacks); rotate the `expand_more` chevron; visible focus ring on the toggle; animations respect `prefers-reduced-motion`.

**2.6 Landing Page Section Composition**

* **Header (sticky, `--z-dropdown`):** brand (compass `explore` icon + "Terra Incognita" wordmark in Fraunces), anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ) with animated underline hover, theme toggle, primary CTA. On mobile: hamburger button (`aria-expanded`, `aria-controls`) toggling a slide-down panel; header gains a solid/blurred backdrop on scroll.
* **Hero:** ~90vh centered composition over a layered background — a warm gradient blending `#3a2c1a → #5c3a1e → cream wash`, a contour-line/latitude-grid effect built from repeating gradients, and a slow keyframe glow pulse. Include a slowly rotating compass-rose Material Symbol (keyframe rotation), an eyebrow label, a Fraunces `<h1>` with a subtle glow `text-shadow`, supporting copy, two CTAs (primary "Begin the Expedition"; secondary "Explore the Atlas" that smooth-scrolls to Features), and a bouncing scroll cue. Pause all hero animation under reduced motion.
* **Features:** eyebrow + `<h2>` + lede heading pattern; 3-card grid; each card: Material Symbol icon (e.g., `travel_explore`, `terrain`, `layers`), Fraunces title, copy; card hover/focus-within per §2.2.
* **How It Works:** 3-step grid with large Fraunces numerals (01/02/03), step icons, titles, copy; a dashed connector line drawn with a CSS pseudo-element between steps, becoming a vertical connector when stacked on mobile.
* **Testimonials:** 3 quote cards; neumorphic medallion avatars built from styled initials (no external images); quote, name, and role in thematic English copy.
* **Pricing:** 3 tiers (e.g., Surveyor / Cartographer / Expedition); the middle tier is highlighted via a "Most Popular" badge + stronger border + slight scale/elevation — distinction must not rely on color alone; feature lists with `check_circle` icons; one CTA button per tier using full button states; static "per month" pricing with a small disclaimer line.
* **FAQ:** 5–6 themed Q&As using the §2.5 accordion.
* **Final CTA:** full-width gradient panel (ink → umber → cream glow), Fraunces headline, copy, and the §2.3 email-capture form with a "Join the Expedition" submit button demonstrating loading → success/error states.
* **Footer (secondary links):** multi-column grid — brand + tagline; Explore links (Features, Pricing, FAQ anchors); Company links (About, Journal, Careers, Contact); Legal links (Privacy, Terms, Sitemap); bottom bar with © line and Material Symbol contact/social glyphs; include an accessible back-to-top control that appears on scroll.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid type and spacing, no horizontal overflow, touch targets ≥ 44px, `scroll-margin-top` on anchored sections to offset the sticky header.
* **Smooth animations:** CSS transitions on all state changes using `transition: var(--transition-normal)`. Keyframes required: compass rotation, glow pulse, gradient drift, skeleton shimmer, scroll-cue bounce. Wrap all motion in `@media (prefers-reduced-motion: reduce)` — reduce to opacity-only or none, and disable smooth scrolling.
* **Accessibility (a11y):** skip-to-content link; semantic HTML5 landmarks (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`); exactly one `<h1>` with logical heading order; `aria-current="true"` on active nav state; ≥ 4.5:1 text contrast in both modes; never rely on color alone to communicate state; full keyboard operability with logical focus order; `aria-live` regions for dynamic feedback (form errors, toasts, loading).
* **Mandatory visual feedback:** every click, hover, focus, and submission must trigger a visible state change — nav underlines, card lifts, button state shifts, accordion motion, form validation feedback.
* **Destructive actions:** `.btn--danger` must be visually distinct in both light and dark themes.
* **Scroll-reveal animations (optional):** if used, implement via `IntersectionObserver` in `script.js`, fully disabled under reduced motion.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — separate and complete. No inline styles anywhere; no inline `<script>` blocks beyond the single deferred entry-point reference to `script.js`.
* **Naming convention:** BEM only (`.card`, `.card__title`, `.btn--primary`, `.pricing-card--featured`, `.accordion__item`) — never mix conventions. Section IDs in ASCII English (`#features`, `#how-it-works`, `#pricing`, `#faq`) for nav anchors.
* **Copy:** no lorem ipsum. The user supplied no final copy, so write coherent, on-theme English marketing copy in an exploration/cartography voice for every headline, card, step, testimonial (realistic names and roles), pricing tier, and FAQ answer. Real labels and buttons everywhere; placeholders only where content is genuinely unknowable.
* **Comments:** brief English comments in `style.css` marking token blocks and component groups; in `script.js` explaining the theme toggle, accordion, mobile menu, and form-validation logic.
* **First-attempt completeness:** output all three files fully written, end to end — no truncation, no "rest of the code," no unfinished sections.

**Definition of Done:** light/dark themes fully token-driven with a persisting, accessible toggle; zero inline styles; Google Fonts + Material Symbols only; all specified component states present; all 8 sections complete with themed copy; keyboard operable throughout; reduced-motion respected; no horizontal scroll at any width.
