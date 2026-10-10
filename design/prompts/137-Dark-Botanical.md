# SYSTEM PROMPT — "DARK BOTANICAL" PREMIUM LANDING PAGE (Luxury & Editorial)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a **complete, production-ready landing page on the first attempt**. Every section, every component state, and all interactivity must be fully implemented — no partial builds, no "to be continued" sections.

**Objective:** A single-page landing page in the **Dark Botanical** style — elegant, sophisticated, artistic, and premium (2024–2026 Premium Elegant era, Luxury & Editorial category). The page must feel like a high-end editorial brand experience built entirely from typography, whitespace, and abstract CSS shapes.

---

## DESIGN BRIEF — "DARK BOTANICAL"

* **Mood:** Elegant, sophisticated, dark, artistic, premium, botanical warmth.
* **Palette:**
  * Deep Black `#0f0f0f` — page background
  * Warm Text `#e8e4df` — primary text
  * Muted Text `#9a9590` — secondary text
  * Warm Accent `#d4a574` — primary accent (buttons, links, accent lines)
  * Soft Pink `#e8b4b8`, Gold `#c9b896`, Terracotta `#c4856a` — gradient-circle accents and secondary highlights
* **Typography:** Cormorant (400, 600, italic 400) for display headings; IBM Plex Sans (300, 400) for body.
* **Visual language:** Abstract soft gradient circles (blurred, overlapping, warm colors), thin vertical accent lines, italic signature typography, **no illustrations and no images — abstract CSS shapes only**, smooth 350ms transitions.
* **Signature CSS (must be defined and used):**

```css
.abstract-circle { position: absolute; border-radius: 50%; filter: blur(60px); opacity: 0.3; pointer-events: none; }
.accent-line { width: 1px; height: 80px; background: var(--primary); }
.signature-text { font-family: var(--font-display); font-style: italic; font-weight: 400; }
```

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling must live in a dedicated `style.css` file. **Explicitly forbidden:** the `style="..."` attribute, inline `<style>` blocks, and inline event handlers (`onclick`, etc.).
* All design properties, layout rules, and states must be targeted via **class or ID selectors only**.
* HTML must remain clean, semantic, and agnostic of visual styling — restyling the site must require touching only `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store every visual token in `:root` using CSS variables. Minimum required set (suggested values — verify contrast before shipping):

```css
:root {
  --primary: #d4a574;            /* Warm Accent */
  --secondary: #e8b4b8;          /* Soft Pink */
  --accent-gold: #c9b896;
  --accent-terracotta: #c4856a;
  --bg-primary: #0f0f0f;         /* Deep Black */
  --bg-secondary: #171512;       /* warm-tinted elevated surface, derived from palette */
  --text-primary: #e8e4df;       /* Warm Text */
  --text-secondary: #9a9590;     /* Muted Text */
  --text-success: #9db98a;       /* muted sage — must hit ≥ 4.5:1 on --bg-primary */
  --text-error: #e08573;         /* warm terracotta-red — must hit ≥ 4.5:1 on --bg-primary */
  --border-default: rgba(232, 228, 223, 0.14);
  --border-error: rgba(224, 133, 115, 0.6);
  --border-success: rgba(157, 185, 138, 0.6);
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px;   /* subtle, editorial corners */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.35);
  --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.5);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms;
  --transition-normal: 350ms;    /* per style spec */
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  --font-display: 'Cormorant', serif;
  --font-base: 'IBM Plex Sans', sans-serif;
}
```

* **Contrast Pairing:** Every dark background token (`--bg-primary`, `--bg-secondary`) pairs exclusively with light text tokens (`--text-primary`, `--text-secondary`). The light accent button surface (`--primary`) pairs exclusively with dark text (`#0f0f0f`). Verify all pairings meet WCAG AA (≥ 4.5:1 for body text).
* **Light Mode Background rule:** Not applicable — see the dark-only exception in 1.3.

**1.3 Mandatory Dark Mode — Dark-Only Theme Exception**
* Dark mode is the default and only theme, per the style specification (Light: ✗ No / Dark: ✓ Full). Define the full dark palette in `:root`, and also map `.dark` and `@media (prefers-color-scheme: dark)` to the same tokens so dark is always honored regardless of OS setting.
* All colors must be token-driven so a future theme could be added by swapping variables in CSS alone — no HTML restructuring.
* **Explicit exception clause:** Per the Dark Botanical specification, do **not** build a light theme, a light/dark toggle, or theme-persistence logic. The light-mode background rule and the visible theme-toggle requirement are waived for this build.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container **must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment (e.g., equal-height card columns using `stretch`).
* Mobile-first: all flex rows must collapse to columns on small viewports; **zero horizontal scrolling at any breakpoint**. Abstract circles must be clipped inside `position: relative; overflow: hidden` section containers so they never cause overflow.

**1.5 Framework & Styling Approach**
* Use clean, hand-written custom CSS in `style.css` — the theme's CSS Technical specification defines raw CSS classes, which takes precedence as the requested approach. If you choose Tailwind instead, every utility must map back to the CSS variables above and to generic reusable classes (`.btn`, `.card`, `.input-group`). Vanilla JS only — no external JS libraries.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Cormorant** (400, 600, italic 400) and **IBM Plex Sans** (300, 400) via Google Fonts `<link>` tags with `preconnect`. Bind them to `--font-display` and `--font-base`.
* Load **Google Material Symbols (Rounded, weight 300)** via its official stylesheet. **Explicitly forbidden:** raw inline SVGs, local icon files, emoji-as-icons, and any other icon font.
* Decorative icons get `aria-hidden="true"`; meaningful icons get `aria-label`. Icons appear in: feature cards, step markers, testimonial quote marks, FAQ chevrons, form valid/invalid indicators, footer social links, and the mobile menu button.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component (`.btn`, `.btn--primary`, `.btn--ghost`, `.btn--danger`)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px, IBM Plex Sans 400 with refined letter-spacing, `border-radius: var(--radius-sm)`, `transition: all var(--transition-normal) var(--ease-standard)`.
* **Primary:** background `var(--primary)`, color `#0f0f0f` (dark-on-light pairing). **Ghost:** transparent background, 1px `var(--border-default)` border, `var(--text-primary)` text.
* **Hover:** brightness/elevation shift with `cursor: pointer`.
* **Focus:** distinct visible ring (`outline: 2px solid var(--primary); outline-offset: 3px;`) — must be clearly visible on the black background.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** disables pointer events to prevent double-clicks, sets `aria-busy="true"`, and renders a CSS border-spinner or animated Material Symbol **without changing button dimensions**.
* **Disabled:** `opacity: 0.5`, greyscale filter, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error` (used by the Final CTA form submission).
* **Danger (`.btn--danger`):** terracotta-based styling that remains visually distinct on the dark background.

**2.2 Card Component (`.card` — features, testimonials, pricing tiers)**
* **Default:** Flexbox layout, `background: var(--bg-secondary)`, 1px `var(--border-default)` border, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-sm)`.
* **Hover (interactive cards only):** `transform: translateY(-2px)` plus `--shadow-md` and a border-color shift toward the warm accent.
* **Focus-within:** card border highlights when a child link/button receives keyboard focus.
* **Loading (Skeleton):** define a shimmer `@keyframes` animation in CSS as a reusable pattern so async content never causes layout jumps.
* **Empty State:** define a reusable fallback pattern — Material Symbol plus short guidance text — even if not triggered on this page.

**2.3 Form & Input Component (`.input-group`)**
* Used for the Final CTA email capture. Structure: flex-column wrapper containing a `<label>`, the input, and a dedicated error-feedback element (`aria-live="polite"`, wired via `aria-describedby`).
* **States, all styled via CSS classes:** Empty, Focused (accent outline ring), Filled, Valid (success border + check Material Symbol), Invalid (error border, `--text-error` message, error icon), Disabled, Read-only.
* Client-side email validation on submit; the submit button enters the loading state, then shows success/error feedback with an `aria-live` announcement. No page reload; use `addEventListener` in `script.js` and simulate the async request (~1200ms) to demonstrate the states.

**2.4 Modal / Dialog Component (Conditional)**
* If any dialog is implemented (optional — e.g., a "View full plan details" dialog in Pricing), it must cover: **Opening, Open, Loading, Success/Error, Closing** — all animated with `var(--transition-normal)`.
* Centered flex container (`align-items: center`), dimmed backdrop overlay, Material Symbol close button, keyboard **focus trapping**, `role="dialog"` + `aria-modal="true"`, closing via `Esc` and overlay click, and focus returned to the triggering element. Layered at `var(--z-modal)`.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** fluid sizing, container max-width (~72rem) centered, breakpoints without horizontal overflow; `scroll-margin-top` on sections to offset the sticky header.
* **Smooth Animations:** every state change transitions with `var(--transition-normal)` (350ms). Fully respect `prefers-reduced-motion`: disable transforms, circle float animations, and shimmer; keep opacity-only fades.
* **Accessibility (a11y):** all text pairings ≥ 4.5:1 contrast; never rely on color alone — pair every state with an icon, text, or shape change. Use semantic HTML5 (`header`, `nav`, `main`, `section` with `aria-labelledby`, `footer`), a skip-to-content link, correct ARIA roles/labels on custom widgets (mobile menu, accordion), logical DOM/focus order, and full keyboard operability — no mouse-only interactions.
* **Mandatory Visual Feedback:** every click, hover, and submission triggers a visible state change.
* **Decorative Shapes:** all `.abstract-circle` and `.accent-line` elements are `aria-hidden="true"` and `pointer-events: none`, layered behind content (content wrappers get `position: relative; z-index: 1`). Limit circles to ~4 per section for performance; keep them subtle enough that text remains fully legible.
* **Destructive Actions:** any `.btn--danger` usage must be visually distinct in the dark theme.
* **Progressive Enhancement:** if you add scroll-reveal animations via IntersectionObserver, all content must be fully visible with JavaScript disabled — reveal classes are added by JS only.

---

## 4. PAGE STRUCTURE & SECTION-BY-SECTION REQUIREMENTS

**4.1 Global Frame & Header**
* Skip link, then a sticky `.header`: brand wordmark in Cormorant, anchor nav links (Features, How It Works, Testimonials, Pricing, FAQ), and a primary CTA button. Header background stays legible over abstract circles (solid or subtle `backdrop-filter`), with a hairline bottom border.
* Mobile: hamburger button (Material Symbol `menu`/`close` swap) toggles a dropdown panel layered at `var(--z-dropdown)`, with `aria-expanded`/`aria-controls`, closing on `Esc`, outside click, and link selection.

**4.2 Hero**
* Near-full-viewport (`min-height: ~90vh`) flex column, centered. Layered, overlapping `.abstract-circle` cluster (pink, gold, terracotta) behind content. A thin `.accent-line` above and below the headline.
* Small-caps letter-spaced eyebrow label, H1 in Cormorant 600, an italic `.signature-text` subline in the warm accent, two CTAs (primary + ghost), and a short trust line. Optional slow float animation on the circles (reduced-motion safe).

**4.3 Features — 3 Cards**
* Section heading plus italic `.signature-text` intro. Flex row collapsing to a column on mobile; equal-height `.card`s.
* Each card: Material Symbol icon inside a thin-bordered circular holder (pure CSS shape), Cormorant title, IBM Plex Sans body. Full card hover/focus-within states per 2.2. Give each card one tasteful warm accent variation (pink / gold / terracotta) via icon color or top hairline.

**4.4 How It Works — 3 Steps**
* Three steps with oversized `01 / 02 / 03` numerals in Cormorant (muted or accent), step titles, and short bodies. Vertical `.accent-line` connectors between steps on desktop (hidden or reoriented on mobile). Optional Material Symbol per step.

**4.5 Testimonials**
* Three `.card` quote blocks in a responsive row→column grid. Quote text in Cormorant italic or IBM Plex Sans 300 with an oversized decorative quotation mark (CSS/Material Symbol). Attribution: initials-only avatar rendered as a CSS circle with a warm gradient border (**no photos**), plus name and role. Use `figure` / `blockquote` / `figcaption` semantics.

**4.6 Pricing — 3 Tiers**
* Middle tier highlighted: "Most popular" badge, accent border, slight elevation. Each tier: Cormorant name, large Cormorant price, billing note, feature list with Material Symbol check marks, and a CTA (primary on the featured tier, ghost on the others). Give tiers elegant, on-brand names (e.g., *The Cutting / The Collection / The Conservatory*). Include a fine-print/guarantee line. A monthly/yearly toggle is optional — if included, it must use `aria-pressed` and provide visible price-change feedback.

**4.7 FAQ**
* Accessible accordion with 5–6 real Q&As. Prefer native `<details>`/`<summary>` styled entirely via CSS (rotating Material Symbol chevron, visible focus state on `summary`), animated with a `grid-template-rows` or `max-height` technique at 350ms, reduced-motion safe. If button-based instead: `aria-expanded`, `aria-controls`, full keyboard support.

**4.8 Final CTA**
* Centered flex column with its own `.abstract-circle` backdrop and `.accent-line`. Cormorant headline plus italic `.signature-text` subline, then the email-capture `.input-group` with full validation, loading, success/error states, and `aria-live` feedback per 2.3.

**4.9 Footer**
* Hairline top border, muted text. Columns for: brand + one-line signature statement, secondary link groups (e.g., Company, Resources, Legal), and social icons as Material Symbols in circular hover targets ≥ 44px. Copyright line and an optional "back to top" link. All footer links have visible hover and focus states.

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). No inline styles, no inline event handlers.
* **Naming Convention:** BEM (`block__element--modifier`) for all components, consistently applied. The only permitted global utility classes are exactly `.abstract-circle`, `.accent-line`, and `.signature-text` as defined in the Design Brief — never mix in other conventions.
* **Copy:** author original, elegant English copy for one coherent premium botanical brand concept (e.g., a rare-plant atelier or botanical design studio) — refined, minimal, editorial tone. **Lorem ipsum is forbidden anywhere.** All user-facing copy in English.
* **No Unrequested Placeholders:** no stub links (`href="#"` without purpose), no TODO comments, no console errors, no unused CSS/JS. Every interactive element is fully wired.
* **Imagery:** none — abstract CSS shapes only, per the style specification.
* **Completeness:** deliver the entire landing page — all eight sections, header, footer, every component state, and all JavaScript behavior — working on the first attempt.
