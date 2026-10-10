# CODING AGENT PROMPT — "ZAPIER WARM AUTOMATION" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready, single-page marketing site for a workflow-automation SaaS — in one attempt, with no follow-up questions. Category: Corporate & SaaS. Tone: professional, warm, trustworthy.

**Page Sections (in order):** Navigation, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in a dedicated `style.css` file.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and styling-agnostic — changing the site's look must only require editing `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
Store every visual token in `:root` (and theme classes). Required tokens:

```css
:root {
  /* Color — Light (primary experience) */
  --primary: #ff4f00;          /* Zapier Orange — CTAs, active tab underline, accents */
  --primary-hover: #e64700;    /* darkened orange for hover/active */
  --secondary: #201515;        /* Warm Black */
  --bg-primary: #fffefb;       /* Warm Cream canvas — never #ffffff */
  --bg-secondary: #eceae3;     /* Light Sand */
  --bg-tertiary: #36342e;      /* Charcoal — inverted bands (Final CTA, Footer) */
  --text-primary: #201515;     /* Warm Black text */
  --text-secondary: #36342e;   /* Charcoal body text */
  --text-muted: #939084;       /* Warm Gray — captions, meta */
  --text-on-dark: #fffefb;     /* cream text on dark bands */
  --border-default: #c5c0b1;   /* Sand — the primary structural element */
  --border-strong: #939084;
  --text-success: #1a7f37;  --text-error: #b3261e;
  --border-success: #1a7f37; --border-error: #b3261e;

  /* Radius — theme-specific mapping */
  --radius-sm: 4px;    /* orange primary CTA */
  --radius-md: 8px;    /* dark/outline buttons, cards, panels */
  --radius-lg: 12px;   /* large panels */
  --radius-pill: 20px; /* pills, tags, badges */

  /* Shadows — defined but used sparingly (border-forward design) */
  --shadow-sm: 0 1px 2px rgba(32, 21, 21, 0.06);
  --shadow-md: 0 4px 12px rgba(32, 21, 21, 0.10);

  /* Spacing, motion, elevation */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 250ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;

  /* Typography */
  --font-base: 'Inter', sans-serif;
  --font-display: 'Archivo', sans-serif;   /* substitutes Degular Display */
  --font-serif: 'Newsreader', serif;       /* substitutes GT Alpina */
}
```

* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this in Light AND Dark themes.
* **No Pure White:** The canvas is warm cream `#fffefb` (unbleached-paper feel); where a near-white is needed, use `#fefefe`, never `#ffffff`.

### 1.3 Mandatory Dark Mode Support
* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`; all backgrounds, text, and border variables must swap seamlessly with zero HTML restructuring.
* **Warm-Dark Exception Clause:** This theme recommends Light mode as the primary experience; Dark mode remains mandatory but must be a **warm dark variant** — backgrounds in Warm Black `#201515` / Charcoal `#36342e`, cream text `#fffefb`, muted text in Mid Warm `#b5b2aa`, borders darkened to a warm umber (e.g., `#4a443c`), orange accent preserved (brighten to `#ff5c14` if contrast requires) — never cold blue-black.
* **Persistence:** Store the user's choice in `localStorage`, fall back to `prefers-color-scheme` on first visit, and render a visible toggle (in the nav and repeated in the footer) with correct `aria-pressed` and `aria-label` state.

### 1.4 Flexbox Layout & Mobile-First Alignment
* **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless an explicitly justified exception exists (document the exception in a CSS comment).
* **Mobile-Friendly First:** All layouts must be responsive out of the box — multi-column rows collapse to single columns on small viewports; horizontal scrolling is forbidden at any breakpoint.

### 1.5 Framework Default
* Use Tailwind CSS **or** clean custom CSS driven by `@layer`/`@apply` — either way, every utility must map back to the CSS variables above or to generic reusable classes (`.btn`, `.card`, `.input-group`). Do not hardcode hex values outside `:root`/theme classes.

### 1.6 Typography & Icons (Google Fonts Mandatory)
* **Text Fonts:** Load via Google Fonts `<link>`: **Inter** (400/500/600 — all functional UI), **Archivo** (500 — display headlines), **Newsreader** (300 + italic — editorial serif moments).
* **Licensed-Font Exception Clause:** Degular Display and GT Alpina are licensed fonts unavailable on Google Fonts; substitute **Archivo** and **Newsreader** respectively as the closest free matches, and note the substitution in a CSS comment.
* **Icons:** Use Google Material Symbols exclusively. Raw inline SVGs and local icon files are forbidden.

---

## 2. THEME DESIGN SYSTEM — "ZAPIER WARM AUTOMATION"

### 2.1 Canvas & Mood
* Warm cream canvas `#fffefb` like unbleached paper; near-black text `#201515` with a reddish undertone.
* **Border-Forward:** 1px solid `#c5c0b1` sand borders are the primary structural element — cards, section dividers, nav, footer, step panels, pricing tiers all defined by borders, not shadows. Elevation is expressed through border-color shifts and Light Sand `#eceae3` background fills, not drop shadows.
* Orange `#ff4f00` is reserved for primary CTAs, active tab underlines, small indicators, and icon accents — never for body text on cream.

### 2.2 Typography Scale
* **Hero headline:** `--font-display`, `clamp(40px, 7vw, 80px)`, weight 500, `line-height: 0.90` (ultra-compressed), `letter-spacing: -0.02em`, color `#201515`.
* **Section headings:** display font, 32–48px, `line-height: 1.05`.
* **Eyebrow labels:** Inter 600, 12–13px, uppercase, `letter-spacing: 0.08em`, Warm Gray or Orange.
* **Body:** Inter 400/500, 16–18px, `line-height: 1.6`, Charcoal `#36342e`.
* **Editorial serif:** Newsreader 300 italic for testimonial pull-quotes and one FAQ intro line.

### 2.3 Signature Details (Non-Negotiable)
* **Tab underline:** active tabs and active nav links use `box-shadow: rgb(255, 79, 0) 0px -4px 0px 0px inset`.
* **Button radii:** orange primary CTA = 4px; dark and outline buttons = 8px; pills/badges/tags = 20px.
* **Button padding:** generous `20px 24px` on all buttons.
* **Pills:** Light Sand background, sand border, 20px radius, Inter 500 13px.

---

## 3. SECTION-BY-SECTION BUILD SPECIFICATION

### 3.1 Navigation
Sticky header, cream background, 1px sand bottom border. Text wordmark logo, anchor links (Features, How It Works, Pricing, FAQ) using the inset-box-shadow orange underline on hover/active, theme toggle, and an orange "Start free" CTA. Mobile: Material Symbol `menu` button toggling an accessible disclosure panel.

### 3.2 Hero
Eyebrow pill ("Workflow automation" style), display headline at 56–80px / weight 500 / line-height 0.90, Inter subcopy, and two CTAs: primary orange "Start free" + dark 8px-radius "See how it works". Include a border-forward visual panel: a bordered card mock of an automation workflow (trigger app → action app) built with Material Symbols, pills, and sand-bordered connector elements — pure CSS, no images. Add a muted trust line beneath.

### 3.3 Features (3 Cards)
Three-column layout (collapses to one column on mobile). Each card: cream or Light Sand background, 1px sand border, 8px radius, orange Material Symbol icon, display-font title, Inter body. Hover: border darkens to `--border-strong` + `transform: translateY(-2px)` (border-forward hover — no shadow change). `:focus-within` highlights the border when a child link is focused.

### 3.4 How It Works (3 Steps) — Tab Pattern
Render as an accessible tab component: three tabs ("Pick a trigger", "Choose an action", "Automate it") with the active tab marked by `box-shadow: rgb(255,79,0) 0px -4px 0px 0px inset`. Each tabpanel shows a numbered step, display-font title, Inter description, and a bordered visual mock. Implement `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls`, arrow-key navigation, and proper `tabindex` management in `script.js`.

### 3.5 Testimonials
Three bordered quote cards (or one featured + two supporting). Pull-quotes in Newsreader 300 italic; author name in Inter 600, role in Warm Gray; avatar as a CSS circle with initials (no external images). Border-forward styling consistent with Features cards.

### 3.6 Pricing (3 Tiers)
Three cards: Starter, Pro (featured — 2px orange border + "Most popular" pill), Team. Prices in the display font. Feature lists with orange Material Symbol `check_circle` icons. Featured tier gets the orange primary CTA; other tiers get dark or outline 8px CTAs. Add a Monthly/Annual segmented pill toggle (20px radius) with `aria-pressed` state that updates prices via JS and announces changes in an `aria-live="polite"` region.

### 3.7 FAQ
Accordion of 5–6 realistic questions. Each item: 1px sand border, Inter 600 question, Material Symbol `expand_more` that rotates 180° when open. Buttons carry `aria-expanded` + `aria-controls`; panels animate open/closed via CSS (grid-rows or max-height technique). State is never communicated by color alone — icon rotation and border emphasis accompany every change.

### 3.8 Final CTA
Full-width inverted band: Charcoal `#36342e` or Warm Black `#201515` background with cream `#fffefb` text (enforced contrast pairing). Display-font headline, Inter subcopy, orange 4px-radius CTA with cream text, plus a subtle secondary link. Top and bottom sand borders frame the band.

### 3.9 Footer with Secondary Links
Top sand border; brand column with wordmark + tagline, then link columns (Product, Company, Resources, Legal — realistic secondary links), a newsletter `.input-group` (see 4.3), social icons via Material Symbols, and a bottom legal bar. Links in Warm Gray; hover transitions to orange with the inset underline treatment.

---

## 4. COMPONENT DESIGN SPECIFICATIONS

### 4.1 Buttons
All states via CSS classes, never inline styles:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` padding `20px 24px`, minimum 44×44px touch target. Variants: `.btn--primary` (orange, 4px radius, cream text, Inter 600 at 18px to meet AA large-text contrast), `.btn--dark` (Warm Black, 8px radius, cream text), `.btn--outline` (transparent, sand border, 8px radius, charcoal text), `.btn--danger` (visually distinct in both themes).
* **Hover:** darkened orange / border-color shift with `cursor: pointer`.
* **Focus:** distinct ring using CSS variables (`outline: 2px solid var(--primary); outline-offset: 2px;`) for keyboard navigation.
* **Active:** `transform: scale(0.97)`.
* **Loading:** disables interaction, prevents double-clicks, shows an animated Material Symbol `progress_activity` spinner without changing button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.

### 4.2 Cards
* **Default:** flexible flexbox layout, 1px sand border, 8px radius, `--bg-secondary` or cream fill.
* **Hover:** border darkens + `translateY(-2px)`.
* **Focus-within:** border highlights when a child link/button receives focus.
* **Loading (Skeleton):** define a shimmer animation class in CSS to prevent layout jumps.
* **Empty State:** structured fallback with a Google Icon and clear guidance text.

### 4.3 Forms & Inputs (Newsletter Signup)
* **States:** Empty, Focused (orange outline ring), Filled, Valid (success border + `check_circle` icon), Invalid (error border, red text, `error` icon), Disabled, Read-only.
* **Structure:** flex `.input-group` wrapping a label, input field, and a dedicated error-feedback container announced via `aria-live="polite"`. Simulated submit: loading state → inline success message; never a browser-default alert.

### 4.4 Modal / Popup (Conditional)
If any modal is used (e.g., a demo modal triggered from the Hero), it must cover: Opening, Open, Loading, Success/Error, and Closing — all animated via CSS transitions; centered flex container (`align-items: center`), backdrop overlay, Material Symbol `close` button, keyboard focus trapping, and close via `Esc` or overlay click.

---

## 5. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** fluid `clamp()` sizing, standard breakpoints, zero horizontal overflow.
* **Smooth Animations:** `transition: var(--transition-normal) var(--ease-standard)` on all state changes; fully respect `prefers-reduced-motion`.
* **Accessibility (a11y):** WCAG AA contrast in Light and Dark modes; never rely on color alone to communicate state; semantic HTML5 elements; correct ARIA roles/labels on the tabs, accordion, billing toggle, and theme toggle; logical DOM/focus order; full keyboard operability; `aria-live` regions for form feedback and price changes.
* **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive Actions:** `.btn--danger` must be visually distinct in both themes.

---

## 6. DELIVERABLES & OUTPUT FORMAT

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference; no inline styles anywhere.
* **Naming Convention:** BEM throughout — `.nav__link`, `.card__title`, `.card--featured`, `.btn--primary`, `.faq__item`, `.pricing__toggle` — never mix conventions.
* **Script Behavior (`script.js`):** theme toggle with `localStorage` persistence + `prefers-color-scheme` fallback; accessible tab component; FAQ accordion; pricing billing toggle; newsletter form validation with `aria-live` feedback; mobile nav disclosure. No other behavioral JS.
* **Copy:** Write all user-facing copy in **English** — realistic, specific SaaS automation copy (headlines, feature titles, step descriptions, testimonial quotes, tier names/prices, FAQ Q&As, footer links). Lorem ipsum is forbidden.
* **No Unrequested Placeholders:** Do not invent sections, badges, or components beyond this specification; placeholders are permitted only where content was genuinely unspecified.

Generate the final code immediately.
