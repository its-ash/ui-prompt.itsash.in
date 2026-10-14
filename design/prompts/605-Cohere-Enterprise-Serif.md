**SYSTEM PROMPT — SENIOR FRONTEND ENGINEER & EXPERT UI DESIGNER**
**Task: Build the complete "Cohere Enterprise Serif" landing page in a single attempt.**

Act as a Senior Frontend Engineer and Expert UI Designer. Produce the final, complete code for a production-quality enterprise AI landing page themed **"Cohere Enterprise Serif"** (2024–2026 Enterprise AI aesthetic: bright canvas, cool gray borders, signature 22px radius, serif display headlines, ghost buttons, deep purple full-width showcase bands, monospace uppercase labels, nearly colorless palette). Build all sections: **Sticky Header, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.** Deliver everything working on the first attempt — no TODOs, no partial builds.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and style-agnostic — changing the site's look must require editing only `style.css`, never the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store every visual token in `:root` (and theme overrides) — never hardcode values in component rules:

```css
:root {
  /* Color */
  --primary: #000000;            /* Black */
  --secondary: #212121;           /* Near Black */
  --accent: #1863dc;              /* Interaction Blue */
  --accent-tint: rgba(24, 99, 220, 0.08);
  --bg-primary: #fefefe;          /* Page canvas */
  --bg-secondary: #f2f2f2;        /* Light Gray */
  --bg-elevated: #ffffff;         /* Card surfaces only */
  --text-primary: #000000;
  --text-secondary: #93939f;      /* Slate */
  --text-success: #0f7b3d;
  --text-error: #c62828;
  --border-default: #d9d9dd;      /* Cool Gray — signature card border */
  --border-subtle: #e5e7eb;
  --border-hairline: #f2f2f2;
  --border-success: #0f7b3d;
  --border-error: #c62828;
  --band-purple: #2b1b4e;         /* Deep purple showcase band */
  --band-purple-deep: #1e1135;
  --text-on-band: #f2f2f2;
  --border-on-band: rgba(242, 242, 242, 0.18);
  /* Radius */
  --radius-sm: 8px; --radius-md: 14px; --radius-lg: 22px; --radius-pill: 9999px;
  /* Shadow */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 12px 32px rgba(0, 0, 0, 0.08);
  /* Spacing & motion */
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* Elevation */
  --z-dropdown: 100; --z-modal: 1000; --z-toast: 1100;
  /* Type */
  --font-display: "Source Serif 4", Georgia, serif;
  --font-base: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --tracking-display: -0.02em;   /* −1.44px at 72px */
  --tracking-label: 0.28px;
}
```

* **Contrast Pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token — enforce this in light mode, dark mode, and on the purple bands (`--band-purple` always pairs with `--text-on-band`).
* **Exception (white canvas):** The source spec's `#ffffff` page canvas is replaced with `#fefefe` per policy; reserve pure `#ffffff` for elevated card surfaces (`--bg-elevated`) only.

**1.3 Mandatory Dark Mode Support**
* **Implementation:** Define dark tokens both under `@media (prefers-color-scheme: dark)` (applied to `:root:not(.light)`) and a `.dark` class on `<html>` — the class must win over the media query. Dark tokens: `--bg-primary: #121212`, `--bg-secondary: #212121`, `--bg-elevated: #1a1a1f`, `--text-primary: #f2f2f2`, `--text-secondary: #93939f`, `--primary: #f2f2f2` (inverted ink for solid buttons), `--accent: #7aa5f5` (lightened Interaction Blue for AA contrast on dark), `--accent-tint: rgba(122, 165, 245, 0.12)`, `--border-default: #3a3a44`, `--border-subtle: #2c2c33`, lightened success/error tokens, deeper shadows. Purple band tokens stay unchanged.
* **Theme Switching:** Background and text variables must flip seamlessly with no HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`; fall back to `prefers-color-scheme` on first visit; provide a visible toggle button (Material icon `light_mode`/`dark_mode`) with correct `aria-pressed` and `aria-label` in the header.
* **Exception (spec conflict):** The source style spec marks dark mode as "Not Recommended" for this theme — dark mode remains mandatory, but implement it as a restrained monochrome adaptation of the light design (light mode is the canonical presentation).

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container must default to `align-items: center` unless a documented exception is justified (e.g., text blocks inside cards may use `flex-start`).
* Mobile-first: card rows wrap (`flex-wrap: wrap` with sensible `flex-basis`), rows convert to columns under ~768px, and horizontal scrolling is impossible at any viewport width. Use a max-width ~1200px container with fluid `clamp()` padding.

**1.5 Framework Default — Clean Custom CSS via `@layer`**
Use hand-authored custom CSS (no frameworks): organize `style.css` with `@layer tokens, base, layout, components, utilities`. All reusable patterns must be generic classes (`.btn`, `.card`, `.input-group`, `.section-label`) driven by the CSS variables — no one-off utility soup.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* **Text:** Load via Google Fonts `<link>`: **"Source Serif 4"** (display, weights 400/600), **"Inter"** (body, 400/500/600), **"JetBrains Mono"** (labels, 400/500). Bind to `--font-display`, `--font-base`, `--font-mono`.
* **Exception (spec conflict):** The source spec requests Georgia/system-ui; per the Google Fonts mandate, substitute the hosted metrically compatible fonts above.
* **Icons:** Use Google Material Symbols (Outlined) via the official `<link>`; raw inline SVGs and local icon files are forbidden.

---

## 2. THEME SPECIFICATION — "COHERE ENTERPRISE SERIF"

**2.1 Signature Visual Language**
* **22px radius everywhere primary:** all cards, containers, hero mock, pricing tiers, testimonial cards, step cards, and accordion items use `border-radius: var(--radius-lg)` (22px); buttons and pills use `var(--radius-pill)`.
* **Bright canvas + cool gray borders:** `--bg-primary` canvas, cards on `--bg-elevated` with `1px solid var(--border-default)`.
* **Serif display headlines:** `--font-display`, weight 600, hero at `clamp(40px, 7vw, 72px)` with `letter-spacing: var(--tracking-display)` (−1.44px at 72px), `line-height: 1.05`; section headings `clamp(30px, 4.5vw, 48px)` with the same negative tracking.
* **Ghost buttons:** transparent background, 1px border, that shift to Interaction Blue on hover (see 3.1).
* **Purple bands:** full-width deep purple sections (`linear-gradient(160deg, var(--band-purple), var(--band-purple-deep))`) for product showcases — apply to **How It Works** and **Final CTA**.
* **Monospace uppercase labels:** `--font-mono`, 12–13px, uppercase, `letter-spacing: var(--tracking-label)` (positive, 0.28px at default size), color `--text-secondary` (light sections) or `--text-on-band` at 80% opacity (purple bands). Use as section eyebrows ("FEATURES", "PRICING"), step numbers ("01 / 02 / 03"), and card kickers.
* **Nearly colorless palette:** black, white, cool grays only — Interaction Blue is the sole accent, reserved for hover/focus/CTA feedback.

**2.2 Body & Card Typography**
Body: Inter 16–18px, `line-height: 1.6`, `--text-secondary` for supporting copy. Card titles: Source Serif 4 at 20–22px, slight negative tracking.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Buttons**
* **Base `.btn`:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, pill radius, Inter 500, `transition: var(--transition-fast) var(--ease-standard)`.
* **`.btn--ghost` (signature):** transparent bg, `1px solid var(--text-primary)` border, `--text-primary` text; **hover:** border + text shift to `var(--accent)` with `var(--accent-tint)` background wash and `cursor: pointer`.
* **`.btn--solid`:** bg `var(--primary)` with `--bg-primary` text; hover fills `var(--accent)` with white text.
* **`.btn--on-band`:** ghost variant for purple bands — `1px solid var(--border-on-band)`, `--text-on-band` text; hover brightens to white border/text with `rgba(255,255,255,0.08)` fill.
* **Focus:** distinct keyboard ring via `outline: 2px solid var(--accent); outline-offset: 2px` on `:focus-visible`.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.is-loading`):** `aria-busy="true"`, pointer-events disabled to prevent double-clicks, animated Material `progress` icon; button dimensions must not change.
* **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
* **Success/Error (`.is-success` / `.is-error`):** temporary post-submit feedback styles driven by `--text-success` / `--text-error`, announced in an `aria-live` region.

**3.2 Cards**
* **Default `.card`:** flexbox layout, `--bg-elevated` surface, `1px solid var(--border-default)`, `var(--radius-lg)`, generous padding, subtle `--shadow-sm`.
* **Hover:** `transform: translateY(-2px)` + shadow shift to `--shadow-md`.
* **Focus-within:** border highlights to `var(--accent)` when a child link/button receives focus.
* **Loading (skeleton):** `.card--skeleton` shimmer animation (gradient sweep) defined in CSS to prevent layout jumps.
* **Empty State:** `.card--empty` fallback layout with a Material icon and clear guidance text.

**3.3 Forms & Inputs**
* **Structure `.input-group`:** flex column wrapping `<label>`, the input, and a dedicated error feedback container with `aria-live="polite"`.
* **States:** Empty, Focused (accent outline ring), Filled, Valid (success border + Material `check` icon), Invalid (error border, red text, Material `error` icon, message in the feedback container), Disabled, Read-only — all styled via classes, never inline.
* Apply to the Final CTA email capture and any footer newsletter field.

**3.4 FAQ Accordion (and Modal, if used)**
* **Accordion:** each item is a `<button>` with `aria-expanded` + `aria-controls`, controlling a panel with `role="region"`; Material `expand_more` icon rotates 180° on open; panels animate via the CSS `grid-template-rows: 0fr → 1fr` technique with `transition: var(--transition-normal) var(--ease-standard)`; fully keyboard operable.
* **Modal (only if you add a dialog, e.g., "Watch demo"):** centered flex overlay (`align-items: center`), backdrop, Material `close` icon button, focus trapping, `Esc` and overlay-click closing, opening/closing animated via CSS transitions, loading and success/error states defined.

---

## 4. SECTION-BY-SECTION REQUIREMENTS

**4.1 Sticky Header:** wordmark (fictional enterprise AI brand — do not use "Cohere"), anchor nav links with hover underline feedback, theme toggle (per 1.3), ghost "Sign in" + solid "Get started" buttons; `rgba(254,254,254,0.85)` backdrop-blur with hairline bottom border (dark-mode aware); mobile hamburger (Material `menu`/`close`) toggling a dropdown panel with `aria-expanded`, closing on link click and `Esc`.

**4.2 Hero:** monospace uppercase eyebrow ("ENTERPRISE AI PLATFORM"), 72px serif display headline, supporting subcopy, one solid + one ghost CTA, and a CSS-built product mock card (chat/RAG interface or API snippet in `--font-mono`) with 22px radius, cool gray border, and `--shadow-md` — no external images.

**4.3 Features — 3 cards:** each with a Material icon in a bordered circle, monospace uppercase kicker ("01 SECURITY", "02 GROUNDING", "03 SCALE"), serif card title, body copy; topics: private/VPC deployment, grounded RAG answers, enterprise-scale throughput and governance.

**4.4 How It Works — deep purple full-width band:** section eyebrow and heading in `--text-on-band`; 3 step cards (`rgba(255,255,255,0.06)` bg, `--border-on-band` border, 22px radius) with monospace "01/02/03" labels — Connect your data, Customize the model, Deploy & govern.

**4.5 Testimonials — 3 cards:** Material `format_quote` icon, quote in serif italic, avatar circle (Material `person` icon or initials), name + role + fictional company in monospace small caps.

**4.6 Pricing — 3 tiers:** Developer ($0) / Scale (highlighted) / Enterprise (Custom); middle tier inverted (bg `var(--primary)`, `--text-on-band` copy, "MOST POPULAR" mono pill, accent CTA); feature lists with Material `check` icons; monthly/annual segmented toggle — two buttons with `aria-pressed`, prices updating with an `aria-live="polite"` announcement and visible active-pill styling.

**4.7 FAQ — 6 questions:** accordion per 3.4, covering security, deployment options, pricing, compliance, support, and data privacy.

**4.8 Final CTA — deep purple full-width band:** serif headline, short subcopy, email capture (`.input-group` + button) with full validation → loading → success/error flow, plus an on-band ghost secondary button.

**4.9 Footer with secondary links:** brand blurb, four link columns (Product, Company, Resources, Legal), text-based social links (no brand SVGs), hairline top border, monospace copyright line.

---

## 5. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid `clamp()` sizing, no horizontal overflow at any width.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; subtle scroll-reveal (opacity + 12px translate via IntersectionObserver) that is fully disabled under `prefers-reduced-motion` and degrades gracefully (content visible without JS).
* **Accessibility:** semantic HTML5 landmarks and heading hierarchy; skip link; AA contrast in both themes; never rely on color alone — pair icons/text with every state; correct ARIA on the toggle, mobile menu, accordion, and pricing control; logical focus order; full keyboard operability; `aria-live` regions for form feedback.
* **Mandatory visual feedback:** every click, hover, and submission produces a visible state change.
* **Destructive actions:** none expected; if any are added, they must be visually distinct in both themes.

---

## 6. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred `script.js` reference; no inline CSS; no unrequested placeholder elements.
* **Naming:** one consistent **BEM** convention (`block__element--modifier`) across all files — never mix conventions.
* **Copy:** author realistic, specific enterprise-AI copy in **English** (headlines, features, testimonials, pricing, FAQ answers) — lorem ipsum is prohibited.
* **Output:** deliver all three files complete in one response, fully working on the first attempt.
