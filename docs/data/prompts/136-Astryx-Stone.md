**ROLE:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-quality Landing Page on the first attempt, following this specification exactly. Do not ask clarifying questions — make expert decisions and deliver the final code.

**THEME:** **"Astryx Stone"** — an elegant mineral design language with bold geometric typography and stone-toned surfaces. Keywords: stone, slate, gray, mineral, Montserrat, corporate, solid, elegant, warm-gray. Era: 2026 meta-modern (oversized display type, generous whitespace, subtle depth). Output category: Nature & Organic — the visual voice must feel natural and mineral, yet executive and sophisticated, like an architecture portfolio.

**SECTIONS (in this order):** Sticky Header/Nav · Hero · Features (3 cards) · How It Works (3 steps) · Testimonials · Pricing (3 tiers) · FAQ · Final CTA · Footer with secondary links.

**LANGUAGE:** All user-facing copy must be written in **English**. Write realistic, on-brand copy for the fictional corporate brand "Astryx" — no lorem ipsum.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives strictly inside `style.css`. **Explicitly forbidden:** the `style="..."` attribute anywhere in the HTML.
* All design properties, layout rules, and states are targeted via class or ID selectors only.
* HTML must remain clean, semantic, and style-agnostic — changing the look requires touching only the CSS file, never the markup.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` and override per theme. Use this exact palette:

*Light mode — "Warm Stone" (default):*
* `--bg-primary: #F4F2EF` (Warm White) · `--bg-secondary: #FEFEFE` (card surfaces — never `#ffffff`) · `--bg-tertiary: #E9E5E0` (alternating section bands)
* `--text-primary: #2C3640` (Warm Dark) · `--text-secondary: #647685` (Stone Gray)
* `--primary: #647685` (Stone Gray) · `--primary-hover: #556673` · `--secondary: #8494A3` (Slate)
* `--border-default: #B8C4CE` (Light Stone) · `--text-success: #4E7A5A` · `--border-success: #4E7A5A` · `--text-error: #B0493F` · `--border-error: #B0493F`

*Dark mode — "Charcoal Slate":*
* `--bg-primary: #1E272F` (Charcoal) · `--bg-secondary: #2C3640` (Warm Dark) · `--bg-tertiary: #242E37`
* `--text-primary: #F4F2EF` · `--text-secondary: #B8C4CE`
* `--primary: #8494A3` (Slate — primary buttons in dark mode pair this background with `#1E272F` text) · `--border-default: #46545F` · success/error tokens adjusted for dark contrast.

*Shared tokens:*
* **Contrast pairing (mandatory in both themes):** every light background token pairs with a dark text token and every dark background token pairs with a light text token — no exceptions.
* `--radius-sm: 8px` · `--radius-md: 12px` (component default) · `--radius-lg: 20px`
* Slate-toned shadows: `--shadow-sm: 0 1px 3px rgba(44,54,64,0.10)` · `--shadow-md: 0 10px 30px rgba(44,54,64,0.14)` (dark mode: `rgba(0,0,0,0.45)`)
* `--spacing-gap: 1.5rem` plus a modular spacing scale
* `--transition-fast: 175ms` · `--transition-normal: 410ms` · `--ease-standard: cubic-bezier(0.24, 1, 0.4, 1)` — compose as `transition: all var(--transition-normal) var(--ease-standard)`; hovers, icon rotations, and micro-feedback use the fast token.
* `--z-dropdown: 100` · `--z-modal: 200` · `--z-toast: 300`
* `--font-base: 'Figtree', sans-serif` · `--display-font: 'Montserrat', sans-serif`

**1.3 Mandatory Dark Mode**
* Define dark tokens under a `.dark` class on `<html>` **and** provide `@media (prefers-color-scheme: dark)` as the no-JS fallback. Switching themes must require zero HTML restructuring.
* Include a visible theme toggle in the header: Google Material Symbols `light_mode` / `dark_mode`, correct `aria-pressed` state, and a descriptive `aria-label` that updates with the state.
* Persist the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Apply the stored theme as early as possible in `script.js` to minimize flash.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox. **Default rule:** every flex container uses `align-items: center` unless an exception is explicitly justified in CSS comments.
* Mobile-first: rows convert to columns on small viewports, typography uses fluid `clamp()` sizing, and horizontal scrolling is impossible at any viewport width.

**1.5 Framework Default**
* Use Tailwind CSS (CDN) or clean custom CSS structured with `@layer`/`@apply`. All utilities must map back to the CSS variables and to generic reusable component classes: `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`, `.card`, `.input-group`, etc.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Figtree** (weights 400/500/600) as the base font and **Montserrat** (weights 600/700/800) as the display font for all headings, via Google Fonts `<link>`.
* All icons come from **Google Material Symbols Rounded**. **Explicitly forbidden:** raw inline SVGs, emoji icons, and local icon files.
* Headings use Montserrat with bold, tight letter-spacing; body uses Figtree.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
Style every state via CSS classes — never inline:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, `--radius-md` radius.
* **Hover:** brightness/shift with `cursor: pointer` and a shadow change.
* **Focus-visible:** distinct ring built from CSS variables (`outline`/`box-shadow`) for keyboard navigation.
* **Active:** `transform: scale(0.97)` click feedback.
* **Loading:** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material Symbol without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.
* Variants: `.btn--primary` (stone fill), `.btn--secondary` (outlined), `.btn--ghost` (text-only). If any destructive action exists, `.btn-danger` must be visually distinct in both themes.

**2.2 Card Component** (Features, Testimonials, Pricing)
* **Default:** flexbox layout, `--bg-secondary` surface, `--border-default` border, `--radius-md`, `--shadow-sm`.
* **Hover:** `transform: translateY(-2px)` plus elevation shift to `--shadow-md`.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Featured variant:** the middle pricing card uses `.card--featured` with an accent border, elevation, and a "Most Popular" badge — it must remain clearly distinct in both light and dark themes.

**2.3 Form & Input Component** (Final CTA email capture)
* Structure: flex `.input-group` wrapping a label, the input, and a dedicated error-feedback container.
* **States:** Empty, Focused (outline ring), Filled, Valid (success border + check icon), Invalid (error border, error message, error icon — message announced via `aria-live="polite"`), Disabled, and post-submit Success.
* Never rely on color alone — always pair color with an icon and/or text.

**2.4 FAQ Accordion**
* Each item: `<h3><button>` with `aria-expanded` and `aria-controls`, plus a Material Symbol `expand_more` that rotates 180° on open.
* Panels animate open/closed using the standard easing tokens (CSS grid-rows or max-height technique).
* Fully keyboard operable, visible focus states, one-item-open-at-a-time behavior.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint.
* **Smooth animations:** every state change transitions via the motion tokens; wrap all motion in `@media (prefers-reduced-motion: reduce)` to disable transforms and transitions.
* **Accessibility:** WCAG-sufficient contrast in both modes; semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), a single `h1` in the Hero with a logical heading hierarchy, a skip-to-content link, correct ARIA on the theme toggle, mobile menu, and accordion, logical focus order, and full keyboard operability.
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Mineral texture:** apply a subtle stone-grain texture using CSS-only layered gradients at low opacity — no external image files; it must adapt tastefully to both themes.
* **Scroll behavior:** smooth anchor scrolling; optional subtle scroll-reveal via IntersectionObserver — content must remain fully visible if JavaScript fails, and reveals must be disabled under reduced motion.
* The page must be fully self-contained: no external images (use CSS gradients and initial-based avatar circles).

---

## 4. DELIVERABLES & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred `<script src="script.js" defer>` reference.
* **Naming:** one consistent BEM convention (`block__element--modifier`) across the entire deliverable — never mix conventions.
* **Copy:** realistic English copy for every label, heading, testimonial, tier, and FAQ answer — no lorem ipsum, no unrequested placeholders.

---

## 5. PAGE BLUEPRINT (SECTION-BY-SECTION)

**5.1 Sticky Header:** "Astryx" wordmark in Montserrat; nav links (Features, How It Works, Testimonials, Pricing, FAQ); primary "Get Started" button; theme toggle. On scroll, add a subtle backdrop blur and bottom border. On mobile, collapse into an accessible hamburger menu (`aria-expanded`, animated panel, Esc closes, focus managed).

**5.2 Hero:** eyebrow label, oversized Montserrat 800 headline using fluid `clamp()` sizing, supporting subcopy, dual CTAs (primary "Get Started", secondary "See How It Works"), and a 3-item trust-stat row with Montserrat numerals. Subtle mineral texture in the background.

**5.3 Features:** section heading + 3 cards, each with a Material Symbol icon in a stone-toned tile, a bold title, and a description. Full card spec from 2.2 applies.

**5.4 How It Works:** 3 numbered steps with large Montserrat numerals or badges, icons, titles, and descriptions, connected by a visual line that stacks gracefully on mobile.

**5.5 Testimonials:** 3 quote cards featuring a `format_quote` icon, the quote, a 5-star rating rendered with Material Symbol stars (contrast-safe in both themes), and an initial-based avatar circle with name and role.

**5.6 Pricing:** 3 tiers (e.g., Foundation, Bedrock, Summit) with price, billing note, feature lists using `check` icons, and per-tier CTA buttons. The middle tier uses `.card--featured` with a "Most Popular" badge.

**5.7 FAQ:** 5–6 realistic questions built as the accessible accordion from 2.4.

**5.8 Final CTA:** a full-width inverted band — Charcoal `#1E272F` background with Warm White text in light mode (and an elevated slate band in dark mode), honoring the contrast-pairing rule — containing a bold Montserrat headline, subcopy, and the email-capture form with every state from 2.3, including button loading and success feedback.

**5.9 Footer:** brand block (wordmark + short tagline), 3–4 columns of secondary links (Product, Company, Resources, Legal), social icons as Material Symbols, and a copyright line — all links keyboard-focusable with visible focus rings.

Deliver the complete, final code for all three files in a single response.
