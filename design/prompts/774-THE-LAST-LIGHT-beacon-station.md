**SYSTEM PROMPT — CODING AGENT BUILD ORDER: "THE LAST LIGHT — Beacon Station" Complete Landing Page**

**Role & Mission:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-quality landing page described below in a single attempt. Do not ask clarifying questions — make expert decisions strictly within these constraints and output the final code immediately.

**Theme Specification:**
- **Name:** THE LAST LIGHT — beacon station
- **Style:** Glassmorphism · Era: 2020s Digital
- **Keywords:** lighthouse, beacon, glassmorphism, animated, glass, translucent, gradient, blur
- **Effects:** Blur, Glow, Glass Effect, Gradients, Hover Effects
- **Mandatory CSS Techniques:** Flexbox, Backdrop Filter, CSS Filters, Keyframe Animations, Transitions, Transforms, Gradients, Box Shadows, Border Radius
- **Source Palette:** Primary `#040814`, `#081226`, `#0a1a30` · Secondary `#d8e2f0`, `#e8eef8`, `#6a82a8`
- **Default Mode:** Light (per source spec) — Dark Mode remains mandatory (see 1.3)
- **Required Sections, in order:** Glass Header/Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links

**Visual Narrative:** A lone beacon station guiding vessels through dark waters. Every panel is translucent glass floating over an animated glow field — pulsing beacon light, drifting fog, soft aur orbs. Light mode reads as dawn haze over the station; dark mode reads as the night sea itself.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in a dedicated `style.css`. **The `style="..."` attribute is forbidden anywhere in the HTML.**
- All design properties, layout rules, and states are targeted exclusively via class or ID selectors.
- HTML stays semantic and clean: `header`, `nav`, `main`, `section` (with `aria-labelledby`), `footer`. Changing the look must never require markup edits.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root`, overridden per theme. Required names and values:

*Light (default, `:root`):* `--primary: #0a1a30` · `--secondary: #6a82a8` · `--bg-primary: #e8eef8` · `--bg-secondary: #d8e2f0` · `--text-primary: #081226` · `--text-secondary: #3e5a7a` (darkened derivative of `#6a82a8` to guarantee 4.5:1) · `--text-success: #146c43` · `--text-error: #b3261e` · `--border-default: rgba(8,18,38,0.12)` · `--border-error` / `--border-success` (tinted variants) · `--glass-bg: rgba(255,255,255,0.42)` · `--glass-border: rgba(255,255,255,0.65)` · `--glow-soft: rgba(106,130,168,0.35)`.

*Dark:* `--primary: #d8e2f0` · `--secondary: #6a82a8` · `--bg-primary: #040814` · `--bg-secondary: #081226` (use `#0a1a30` for deeper panels) · `--text-primary: #e8eef8` · `--text-secondary: #a9bfd9` · `--text-success` / `--text-error` (lightened for dark backgrounds, e.g. `#5bc98a` / `#ff9b93`) · `--border-default: rgba(216,226,240,0.16)` · `--glass-bg: rgba(10,26,48,0.45)` · `--glass-border: rgba(216,226,240,0.18)` · glow tokens intensified.

*Shared:* `--radius-sm: 8px`, `--radius-md: 14px`, `--radius-lg: 24px`, `--shadow-sm`, `--shadow-md`, `--spacing-gap: 1.25rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`, `--z-dropdown: 1000`, `--z-modal: 1100`, `--z-toast: 1200`, `--font-display` and `--font-base` (see 1.6).

**Contrast Pairing (mandatory in every theme):** light background tokens pair exclusively with dark text tokens; dark background tokens pair exclusively with light text tokens. Primary buttons: light mode = navy `#0a1a30` fill + `#e8eef8` text; dark mode = beacon-light `#d8e2f0` fill + `#081226` text. Never use pure white `#ffffff`; where a near-white is unavoidable, use `#fefefe`.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; both themes swap seamlessly via variables only.
- **Persistence:** read `localStorage` on load; fall back to `prefers-color-scheme` on first visit. A visible toggle button in the header must expose correct `aria-pressed` and `aria-label` state and swap the `light_mode` / `dark_mode` Google icon.
- **Exception clause:** the source spec marks Light as primary, so Light is the *default* theme — but a fully designed, fully accessible Dark Mode is mandatory regardless.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox. **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified (one permitted exception: card rows may use `align-items: stretch` for equal heights).
- Mobile-first: rows collapse to columns below `768px`, type scales via `clamp()`, and horizontal scrolling is impossible (`overflow-x` controlled; decorative layers clipped).

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (Play CDN acceptable) or clean custom CSS driven by Tailwind `@layer` / `@apply` directives.
- All utilities must map back to the CSS variables above or to generic reusable classes: `.btn`, `.glass-card`, `.input-group`, `.section-shell`, `.nav-link`, `.badge`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Google Fonts via `<link>`: **Space Grotesk** bound to `--font-display` (headings) and **Inter** bound to `--font-base` (body). Include preconnect links.
- Icons: **Google Material Symbols (Outlined)** only. **Raw inline SVGs and local icon files are forbidden.** Use icons such as `flare`, `radar`, `waves`, `bolt`, `shield`, `check`, `close`, `menu`, `expand_more`, `star` (filled via `font-variation-settings: 'FILL' 1`), `arrow_upward`, `light_mode`, `dark_mode`.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component Requirements**
Build `.btn` base (flex; `align-items: center`; `justify-content: center`; `gap: 0.5rem`; minimum touch target 44×44px) with variants `.btn-primary` (solid beacon fill + glow shadow), `.btn-glass` (translucent + `backdrop-filter`), `.btn-ghost`, `.btn-danger`. Every state styled via CSS classes:
- **Hover:** brightness/shadow shift, `cursor: pointer`.
- **Focus:** distinct visible ring from CSS variables (`outline` + `box-shadow`).
- **Active:** `transform: scale(0.97)`.
- **Loading:** disables interaction, blocks double-clicks, renders a CSS spinner or rotating Material icon without changing button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** transient feedback styles using `--text-success` / `--text-error`.

**2.2 Card Component Requirements**
`.glass-card`: Flexbox layout, `--glass-bg` fill, `backdrop-filter: blur(16px) saturate(160%)` (with solid rgba fallback via `@supports`), `--glass-border`, `--radius-lg`, elevation via `--shadow-sm`.
- **Hover:** `transform: translateY(-4px)` + intensified glow shadow.
- **Focus-within:** border highlights when a child link/button is focused.
- **Skeleton:** shimmer keyframe styles defined for loading cards (no layout jumps).
- **Empty State:** fallback layout with a Google icon + guidance text, defined in CSS.

**2.3 Form & Input Requirements**
Newsletter capture in the Final CTA (`.input-group`: flex column wrapping label, input, and a dedicated error feedback container with `aria-live="polite"`). Style all states: **Empty, Focused** (outline ring), **Filled, Valid** (success border + check icon), **Invalid** (error border, error text, error icon), **Disabled, Read-only**. Validation logic lives in `script.js`; feedback is never color-only (icon + message).

**2.4 Modal / Popup Requirements**
Apply this pattern to the mandatory mobile navigation overlay and to any CTA-triggered dialog:
- **States:** Opening, Open, Loading, Success/Error, Closing — all via CSS transitions (fade + scale, blurred backdrop).
- **UX:** centered flex container (`align-items: center`), backdrop overlay, Google icon close button (`aria-label="Close"`), keyboard focus trap, close on `Esc` and overlay click, correct `role="dialog"` / `aria-modal`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by Default:** fluid `clamp()` sizing, wrap-friendly flex rows, zero horizontal overflow, `scroll-margin-top` on anchored sections so the fixed header never covers targets.
- **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; keyframes for beacon pulse, ripple rings, floating orbs, shimmer, icon rotation. `prefers-reduced-motion: reduce` disables drift/sweep/scale animations, keeping simple opacity fades.
- **Accessibility (a11y):** AA contrast in both modes; never color-only state signaling; semantic HTML5 landmarks; logical DOM/focus order; full keyboard operability (nav, accordion, toggle, forms); a skip-to-content link; `aria-live` regions for form feedback and any toast; `focus-visible` rings everywhere; decorative background layers `aria-hidden` with `pointer-events: none`. No `alert()` / `confirm()`.
- **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change (e.g., Final CTA button: default → loading → success, announced via `aria-live`).
- **Destructive Actions:** define `.btn-danger` with distinct styling in both themes even if no destructive action ships on this page.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks — a single `<script src="script.js" defer></script>` reference only.
- **Naming:** one consistent convention (BEM) across the entire deliverable — never mix conventions.
- **Copy:** all user-facing copy in **English**, written on-theme (lighthouse/beacon/monitoring-station narrative — e.g., "Keep your signal alive," "The last light never sleeps"). **Lorem ipsum is prohibited.** Avatars are CSS gradient circles with initials — no external image files. Placeholders only where content was genuinely unspecified.
- Output the complete code for all three files now, in one response, with no clarifying questions.

---

## 5. PAGE ARCHITECTURE & SECTION-BY-SECTION SPECIFICATIONS

**5.1 Global Scene Layer:** fixed decorative layer behind all content — gradient wash from the bg tokens, 3–5 blurred glow orbs (radial gradients in `#6a82a8` / `#0a1a30` tones, `filter: blur`, keyframed drift), subtle animated fog gradient. Light = dawn haze; dark = night sea.

**5.2 Header:** fixed glass bar (`backdrop-filter`), flex `items-center`, logo (glowing `flare` icon + "THE LAST LIGHT" wordmark), anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ) with hover glow underline, theme toggle, primary CTA. Mobile: `menu` icon opens the full-screen glass overlay per 2.4.

**5.3 Hero:** near-full-viewport flex column, centered; glass status pill with pulsing dot; H1 in `--font-display` with gradient `background-clip: text`; subheadline; dual CTAs (`.btn-primary` + `.btn-glass`); animated beacon visual — central pulsing glow orb with expanding ripple rings and a rotating conic-gradient beam sweep behind glass; floating glass stat chips; scroll cue (`expand_more`) linking to Features; staggered entrance reveal via IntersectionObserver.

**5.4 Features:** section heading (eyebrow + H2 + lede), 3 equal `.glass-card`s (flex row → column on mobile): icon badge (e.g., `radar`, `bolt`, `shield`), title, description; hover lift + glow; scroll-reveal stagger.

**5.5 How It Works:** 3 numbered steps (01–03) joined by a glowing dashed connector (pseudo-element gradient); glass step circles with Material icons, titles, copy; connector turns vertical on mobile.

**5.6 Testimonials:** 3 glass quote cards: `format_quote` icon, quote text, gradient-circle avatar with initials, name + role, 5-star rating using filled `star` icons.

**5.7 Pricing:** 3 tiers ("Harbor" free, "Beacon" pro — highlighted with a "Most Popular" glass badge, stronger glow border, elevated scale, primary CTA, "Lighthouse" enterprise with `.btn-glass` CTA). Each: tier name, monthly price, blurb, check-icon feature list. Optional monthly/annual toggle must use `aria-pressed` + an `aria-live` price region.

**5.8 FAQ:** 4–6 accessible accordion items — full-question button targets (44px min) with `aria-expanded` / `aria-controls`, animated `expand_more` chevron rotation, smooth height/opacity transition; keyboard operable.

**5.9 Final CTA:** large glass panel with intensified beacon pulse behind it; H2, copy, inline email `.input-group` + submit button running the full 2.1/2.3 state cycle; small reassurance line ("No spam. Signal only.").

**5.10 Footer:** brand block (logo, one-line tagline, social icon buttons with `aria-label`s) + secondary link columns (Product: Features, Pricing, FAQ · Company: About, Careers, Contact · Support: Help Center, Privacy, Terms, Status); bottom row with copyright and a "Back to top" link (`arrow_upward`); all links show hover glow.

Build it now: complete `index.html`, `style.css`, and `script.js` — glassmorphism, dual-theme, fully interactive, in a single output.
