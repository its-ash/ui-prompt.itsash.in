# Landing Page Build Prompt — "Persian Miniature" Theme

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt using only the specification below. Do not ask clarifying questions; make reasonable, on-theme decisions where unspecified.

## 1. PROJECT OVERVIEW

- **Deliverable:** A single-page Landing Page themed **Persian Miniature** (13th–17th century Persianate manuscript painting tradition: Timurid/Safavid miniature, Shahnameh/Behzad court-scene aesthetics).
- **Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Visual identity:** Dense, intricate detail across flattened, multi-perspective compositions; jewel-toned mineral pigments (lapis blue, vermillion, gold leaf); ornamental floral (islimi) borders framing every panel; fine, precise linework; subtle shadow and blur effects.
- **All user-facing copy must be written in English.** Write real, thematic copy (no lorem ipsum) — e.g., a fictional product/brand with a Persianate manuscript aesthetic (such as a digital art/storytelling platform). Name the brand yourself; keep it evocative and consistent.

## 2. ARCHITECTURE RULES (MANDATORY)

**2.1 CSS-First, Zero Inline CSS**
- Deliver three separate files: `index.html`, `style.css`, `script.js`. No `style="..."` attributes anywhere in the HTML. No inline `<script>` blocks beyond one deferred `<script src="script.js" defer></script>` reference.
- All styling via class/ID selectors in `style.css`. HTML stays semantic and clean.

**2.2 Design Tokens (use exactly these, from the reference spec)**
Store all tokens in `:root`:
- Colors: `--color-bg: #f6ecd2`, `--color-surface: #fbf5e4`, `--color-surface-2: #ecdcb0`, `--color-text: #2a1a3d`, `--color-text-muted: #5c4a70`, `--color-primary: #1c398e`, `--color-accent: #a61b29`, `--color-gold-leaf: #c9972c`, `--color-turquoise: #2f7d6b`.
- Radius: `--radius-sm: 4px`, `--radius-md: 10px`, `--radius-lg: 20px`, `--radius-pill: 999px`.
- Shadows: `--shadow-gilt-frame: 0 0 0 3px #c9972c, 0 4px 14px rgba(42,26,61,0.25)`, `--shadow-panel: 0 2px 10px rgba(42,26,61,0.18)`.
- Fonts: `--font-sans: 'Cormorant Garamond', 'Scheherazade New', serif`, `--font-display: 'Scheherazade New', 'Cormorant Garamond', serif`.
- Text scale: `--text-xs` through `--text-5xl` per the reference spec.
- Spacing: `--space-1` through `--space-24` per the reference spec.
- Ease: `--ease-standard: cubic-bezier(0.4, 0.0, 0.2, 1)`; transitions `--transition-fast: .15s`, `--transition-normal: .25s`.
- Signature effects: `--islimi-border: repeating-linear-gradient(90deg, #c9972c 0 3px, transparent 3px 14px)` and `--lapis-vermillion-wash: linear-gradient(135deg, rgba(28,57,142,0.08), rgba(166,27,41,0.08))`.
- Elevation: `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300`.

**2.3 Mandatory Dark Mode**
- The source spec does not declare modes — you must therefore define and validate both light and dark before publishing.
- Define dark tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class on `<html>`/`<body>`. Dark palette suggestion (keep jewel-toned, manuscript-night mood): bg `#1a1028`, surface `#241a38`, surface-2 `#2f2247`, text `#f6ecd2`, text-muted `#c4b2d6`; keep primary `#4a6fd4` (lightened lapis for contrast), accent `#d44553`, gold-leaf `#d9ab3f`, turquoise `#4fa38d`. Every light background token must pair with a dark text token and vice versa — verify contrast in both modes.
- Provide a visible theme toggle in the nav (Google Material Icons sun/moon icon) with `aria-pressed` and `aria-label`. Persist choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Switching must not require HTML restructuring.

**2.4 Flexbox & Mobile-First**
- Build all layouts with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a CSS comment.
- Mobile-first: multi-column rows (features, pricing, steps) collapse to single column on small viewports. No horizontal scrolling at any breakpoint.

**2.5 Typography & Icons (Google only)**
- Load **Google Fonts** via `<link>`: Cormorant Garamond and Scheherazade New. Bind to `--font-sans` / `--font-display`.
- Icons: **Google Material Symbols** only. No inline SVGs, no local icon files, no emoji as icons.

**2.6 Naming Convention**
- Use the BEM convention from the reference spec (`.btn`, `.btn--primary`, `.card`, `.input`, `.badge`, `.nav`) consistently across the entire deliverable. Never mix conventions.

## 3. SECTION & COMPONENT REQUIREMENTS

**3.1 Base Components (implement per the reference spec)**
- `.nav`: flex, gold bottom border plus islimi `::after` rule; contains brand name, nav links, theme toggle, and a `.btn--primary`.
- `.btn` / `.btn--primary` / `.btn--danger`: all states — default (flex, centered, gap, min 44×44px touch target), hover (gilt-frame shadow), focus-visible (gold outline ring), active (`transform: scale(0.97)`), loading (spinner via CSS animation, dimensions preserved, double-click prevented), disabled (`opacity: .45`, `cursor: not-allowed`), and success/error feedback states using turquoise/vermillion tokens.
- `.card`: surface background, islimi top rule via `::before`, panel shadow; hover lift (`translateY(-2px)` + shadow shift) when interactive; `:focus-within` gold border highlight; skeleton shimmer class for loading.
- `.input`: empty, focused (gilt-frame ring), filled, valid (turquoise border + check icon), invalid (vermillion border, error text, error icon), disabled, read-only. Wrap in a flex `.input-group` with label, field, and dedicated error container.
- `.badge`: turquoise pill with gold border, per spec.

**3.2 Sections**
- **Hero:** Full-width panel framed by an islimi ornamental border (CSS gradients only — no images required; if you use imagery, use only decorative CSS-drawn motifs). Display font headline, subcopy, primary + secondary CTA buttons, and a badge. Apply the lapis-vermillion wash. Include a subtle blurred-glow decorative layer behind the headline.
- **Features:** 3 `.card`s in a responsive flex row (column on mobile), each with a Material Symbol icon in a gold-framed medallion, title, and copy.
- **How It Works:** 3 numbered steps with gold numeral medallions, connected visually by an islimi dashed rule; vertical stack on mobile.
- **Testimonials:** 3 quote cards with attribution; use the `.card` pattern with turquoise accents.
- **Pricing:** 3 tier cards; middle tier visually elevated (gilt-frame shadow, badge "Most Illuminated"). Each card: tier name, price, feature list with Material Symbol check icons, and a `.btn`. Destructive/downgrade actions, if any, use `.btn--danger` styling distinct in both themes.
- **FAQ:** Use native `<details>/<summary>` (or accessible custom accordion with `aria-expanded`, keyboard operable) styled with gold borders and a rotating Material Symbol chevron.
- **Final CTA:** Full-width framed panel, display-font headline, email `.input-group` with valid/invalid state handling and a `.btn--primary` that shows a loading → success state on submit; feedback announced via an `aria-live="polite"` region.
- **Footer:** Secondary links in flex columns, brand mark, copyright, social links (Material Symbols icons), collapsing gracefully on mobile.

## 4. UX, A11Y & INTERACTION RULES

- Smooth CSS transitions (`var(--transition-normal)`) on all state changes; respect `prefers-reduced-motion: reduce` by disabling animations.
- Sufficient text contrast in **both light and dark modes**; never rely on color alone to communicate state (pair color with icons/text).
- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`), logical focus order, full keyboard operability, ARIA labels on the toggle and custom widgets, `aria-live` regions for form/toast feedback.
- Every click, hover, and submission triggers visible feedback. No dead links — footer/nav links may use `href="#section-id"` anchors to real sections.
- No horizontal overflow at any viewport width.

## 5. DELIVERABLE

- Exactly three files: `index.html`, `style.css`, `script.js` (script handles only: theme toggle + persistence, FAQ accordion behavior if custom, CTA form validation/loading/success demo, and smooth-scroll nav). No other JS.
- All copy in English, real and thematic. No lorem ipsum.
- Validate the final page in both light and dark mode before considering it complete.

**Exception clause:** The reference spec's token names (`--color-*`, `.btn--primary` BEM) take precedence over generic token names; map any generic requirement (e.g., `--primary`, `--text-success`) onto the spec's tokens rather than duplicating them.
