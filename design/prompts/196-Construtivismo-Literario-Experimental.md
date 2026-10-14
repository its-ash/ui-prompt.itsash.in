**ROLE:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete landing page specified below and deliver final, production-ready code on the first attempt. Every rule in this document is mandatory.

---

## 0. PROJECT BRIEF & ART DIRECTION

**0.1 Theme:** "Experimental Literary Constructivism" — an artistic, experimental, narrative-driven landing page for an independent experimental-literature book publisher. Era: 2026+ Visual Narratives. Tone: geometric, dynamic, unconventional, creative, engaging, modern.

**0.2 Sections (in this order):** Sticky header (brand + anchor nav + theme toggle) → Hero → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA (with email capture) → Footer with secondary links.

**0.3 Palette (map to tokens):**
- Core: Black `#000000`, White `#FFFFFF`, Dark Red `#8B0000` (primary brand color), Charcoal `#36454F`
- Accents: Ochre `#CC7722`, Teal `#008080`, Olive `#6B8E23`, Burnt Orange `#CC5500`

**0.4 Mandatory Visual Language:**
- Text-and-image collages with layered overlays — implement and use the class `.text-collage`.
- Geometric shapes framing content — implement and use the class `.geometric-frame`.
- Contrasting sans-serif + serif typography (PT Sans vs. PT Serif).
- Asymmetrical, narrative-driven layouts — each section visually continues a story; avoid uniform centered stacks.
- Hover micro-interactions that reveal hidden text (must also work on keyboard focus and touch — never hover-only).
- Abstract "page-turn" transition effect — implement and use the class `.page-turn-effect` for section entrances/CTA interactions.
- Signature CSS from the spec: `border-bottom: 3px solid #8B0000` (header, footer, geometric rules), `transform: skewX(2deg)` (decorative blocks and button shells only — never skew body copy; counter-skew inner content so text stays upright), and `transition: all 0.4s ease-in-out` (expose as tokens, see 1.2).
- Sharp corners and hard-edged offset shadows (e.g., `4px 4px 0` black) instead of soft blurs — this is the constructivist signature.

**0.5 Language:** All user-facing copy must be written in English. Author original, thematic copy for the publisher (invent a fitting press name, hero headline, feature titles, step titles, testimonial quotes, tier names/prices, FAQ Q&As, CTA copy, footer labels). No lorem ipsum anywhere.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- Keep HTML semantic and styling-agnostic: restyling the site must require editing only the CSS file, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (values shown are the light-theme defaults):
- Colors: `--primary: #8B0000`, `--secondary: #36454F`, `--bg-primary: #fefefe`, `--bg-secondary: #F4F1EA` (paper-tinted surface), `--text-primary: #000000`, `--text-secondary: #36454F`, `--text-success: #6B8E23`, `--text-error: #CC5500`, `--border-default: #36454F`, `--border-error: #CC5500`, `--border-success: #6B8E23`.
- Accents: `--accent-ochre: #CC7722`, `--accent-teal: #008080`, `--accent-olive: #6B8E23`, `--accent-burnt: #CC5500`, plus `--ink-black: #000000` and `--paper-white: #FFFFFF`.
- Geometry: `--radius-sm: 0`, `--radius-md: 2px`, `--radius-lg: 4px` (sharp constructivist corners), `--shadow-sm` and `--shadow-md` as hard offset shadows (e.g., `4px 4px 0` / `8px 8px 0` in `--ink-black`).
- Motion & spacing: `--spacing-gap`, `--transition-fast: 0.15s`, `--transition-normal: 0.4s`, `--ease-standard: ease-in-out` (the spec's `all 0.4s ease-in-out` is expressed as `transition: var(--transition-normal) var(--ease-standard)`).
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast` (e.g., 1000 / 2000 / 3000).
- Typography: `--font-base: 'PT Sans', sans-serif`, `--font-serif: 'PT Serif', serif`.
- **Contrast pairing:** every light background token pairs with a dark text token and vice versa — enforce this in both themes.
- **Pure-white exception clause:** the page canvas must use `#fefefe`, not `#ffffff`; `#FFFFFF` is permitted only as the fill of collage cutout panels and geometric shapes, per the spec's `background: #FFFFFF`.

**1.3 Mandatory Dark Mode**
- Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class: e.g., `--bg-primary: #0D0D0D`, `--bg-secondary: #1C1C1C`, `--text-primary: #fefefe`, `--text-secondary: #B9C0C6`, `--border-default: #3A3F45`.
- Dark mode must lighten accent tokens used as text/borders so contrast stays ≥ 4.5:1 (starting points, to be verified: red `#E06650`, ochre `#E8934A`, teal `#3FA9A5`, olive `#A3B862`, burnt orange `#F07850`). Filled primary buttons may keep `#8B0000` with `#fefefe` text in both themes.
- Default first paint must come from the media query (no flash of wrong theme); the `.dark`/light class is layered by `script.js` for persisted overrides.
- Theme toggle button in the header: visible, keyboard operable, with correct `aria-pressed` and `aria-label` state. Persist choice in `localStorage`; fall back to `prefers-color-scheme` on first visit. Switching themes must require zero HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless there is an explicitly commented exception (e.g., `stretch` for collage columns).
- Mobile-first: rows convert to columns on small viewports; no horizontal scrolling at any width; minimum touch targets of 44×44px.

**1.5 Framework Default**
- Use clean, modern vanilla CSS (the spec supplies raw CSS), organized with `@layer` ordering: tokens → base → layout → components → utilities. No CSS frameworks.
- All repeated patterns must map to reusable classes: `.btn`, `.card`, `.input-group`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load PT Sans and PT Serif via Google Fonts `<link>` tags; bind to `--font-base` and `--font-serif`. Use the serif for display headlines, oversized numerals, and pull quotes; the sans for body, UI, and labels — the contrast between them is a core design device.
- All icons come from Google Material Symbols (Outlined), ligature-based. Raw inline SVGs and local icon files are forbidden. Decorative icons get `aria-hidden="true"`; meaningful icons are paired with text labels.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
Style all states via CSS classes; base layout: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px.
- **Default:** variant fills — `.btn--primary` (dark red), `.btn--secondary` (charcoal/outline), `.btn--ghost`. Constructivist touch: the button shell may carry `transform: skewX(2deg)` with an inner counter-skewed label; the skew straightens to `0deg` on hover.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct focus ring built from CSS variables (`outline`/`box-shadow`) for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)` click feedback.
- **Loading:** disables interaction, prevents double-clicks, renders a CSS spinner or animated Material Symbol without changing button dimensions; expose `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`, always paired with an icon and/or text (never color alone).
- **Danger:** `.btn--danger` must be visually distinct in both light and dark themes.

**2.2 Cards**
- **Default:** flexible Flexbox layout on `--bg-secondary` with subtle borders and hard offset elevation via tokens.
- **Hover:** `transform: translateY(-2px)` and/or skew shift plus shadow change.
- **Focus-within:** card border highlights when a child link/button receives focus.
- **Loading (Skeleton):** shimmer animation defined in CSS to prevent layout jumps.
- **Empty State:** fallback layout with a Material icon and clear guidance text.
- Variants required: `.card--feature`, `.card--pricing` (featured tier), `.card--testimonial`.

**2.3 Forms & Inputs (Final CTA email capture)**
- Structure: a flex `.input-group` wrapping a `<label>`, the input, and a dedicated error-feedback container.
- States: empty, focused (outline ring), filled, valid (success border + icon), invalid (error border, error text, error icon, `aria-invalid`, `aria-describedby`), disabled, read-only.
- Submit button implements the full loading → success/error cycle; feedback messages render in an `aria-live="polite"` region.

**2.4 FAQ Accordion**
- Build with semantic `<details>/<summary>` or a button + region pattern with `aria-expanded` / `aria-controls`.
- Fully keyboard operable; open/close animated via CSS transitions (tokens); Material icon chevron rotates on expand; the reveal may use the `.page-turn-effect` flavor.

**2.5 Overlays (conditional)**
Only include an overlay if the design genuinely needs one (e.g., a "look inside" preview). If included: opening/open/loading/success/closing states all animated via CSS; centered flex container (`align-items: center`); backdrop; Material icon close button; keyboard focus trap; closes via `Esc` and backdrop click; `aria-modal` and `role="dialog"`.

**2.6 Section-by-Section Requirements**
- **Header (sticky):** serif brand wordmark, anchor nav (flex; collapses to an accessible hamburger below the mobile breakpoint — `aria-expanded`, `aria-controls`, `Esc` closes, uses `--z-dropdown`), theme toggle; `border-bottom: 3px solid var(--primary)`.
- **Hero:** asymmetric `.text-collage` composition — overlapping text blocks and image panels inside `.geometric-frame` shapes; one `<h1>` mixing serif display type with sans accents; subcopy; primary + secondary CTAs; decorative geometric shapes (ochre/teal/charcoal) that never obscure text or cause overflow; scroll cue hinting at the page-turn motif.
- **Features (3 cards):** three `.card--feature` elements, each with a Material icon in a geometric chip, a title, and a hidden description revealed by hover **and** `:focus-within` **and** a tap/keyboard-accessible mechanism (never hover-only).
- **How It Works (3 steps):** oversized serif numerals 01/02/03, steps connected by a geometric rule, alternating asymmetric alignment, staggered entrance animation triggered on scroll (disabled under reduced motion).
- **Testimonials:** three `.card--testimonial` serif pull quotes with oversized quotation glyphs, subtle rotational offsets that straighten on hover/focus, attributions with names and roles.
- **Pricing (3 tiers):** three `.card--pricing` cards; the middle tier is featured with a `.geometric-frame`, a badge combining icon + text (e.g., "Editor's Choice" — never color alone), distinct styling in both themes; serif prices; feature lists with Material check icons; one CTA button per tier with full state support.
- **FAQ:** 5–6 authored Q&A items per 2.4.
- **Final CTA:** full-bleed dark red (`--primary`) geometric block with skewed edge dividers; serif headline; light text on the dark red (contrast pairing); email capture form per 2.3.
- **Footer:** multi-column flex layout that wraps to a single column on mobile; secondary links (About, Catalog, Submissions, Events, Contact, Privacy, Terms); social links as labeled Material icons; copyright line; `border-top: 3px solid var(--primary)` mirroring the header.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, defined breakpoints, zero horizontal overflow.
- **Smooth animations:** every state change transitions with `var(--transition-normal)` / `var(--transition-fast)` and `var(--ease-standard)`.
- **Reduced motion:** under `prefers-reduced-motion`, disable the page-turn effect, shimmer, skew transitions, entrance animations, and all transforms.
- **Accessibility:** ≥ 4.5:1 text contrast in both modes; never rely on color alone; semantic HTML5 (`header`, `nav`, `main`, `section`, `article`, `footer`) with a single `<h1>` and logical heading order; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; a skip-to-content link; `aria-live` regions for form and loading feedback.
- **Contrast guardrails:** ochre and teal on light backgrounds are reserved for large display type (≥ 24px / 18.66px bold), borders, and decorative shapes; small text uses black/charcoal.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Decorative imagery:** prefer CSS-only geometric compositions; if photos are used, load seeded `picsum.photos` images with meaningful `alt` text and `loading="lazy"`; purely decorative shapes are `aria-hidden`.

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, and `script.js`. The HTML contains exactly one `<script src="script.js" defer>` reference and no other inline script blocks; no inline styles anywhere.
- **Naming:** BEM convention throughout the deliverable — never mix conventions. The spec-mandated classes `.text-collage`, `.geometric-frame`, and `.page-turn-effect` are reserved block names and must be defined in `style.css` and used in the markup.
- **Copy:** all user-facing copy in English, authored to theme; no lorem ipsum, no TODOs, no unrequested placeholders.
- **Output:** deliver the complete, runnable code for all three files in a single response, on the first attempt, with no explanatory filler beyond the code.
