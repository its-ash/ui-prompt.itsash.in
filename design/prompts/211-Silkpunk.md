# BUILD PROMPT — SILKPUNK LANDING PAGE

**Your Role:** You are a Senior Frontend Engineer and Expert UI Designer. Your task is to code a complete, production-quality landing page on the first attempt, following every rule in this specification without exception.

---

## 1. Project Brief & Theme Direction

**Theme:** "Silkpunk" — East-Asian retrofuturism in the lineage of Ken Liu's *The Grace of Kings*. Visual language: bamboo, silk, washi paper, and lacquer materials; organic bio-mechanical technology (kites, airships); classical Chinese/Asian motifs; elegant, flowing, nature-integrated tech. Era: 2015–present.

**Signature moves (mandatory, repeated across the page):**
- A lacquer-red vertical bar (`--lacquer-bar`) on the leading edge of the nav, every card, every button, and every input.
- A diagonal silk-sheen gradient (`--silk-sheen`) layered over surfaces.
- Asymmetric, brush-stroke corner radii (`--radius-lg: 32px 8px 32px 8px`) — never uniform rounding.

**Product concept:** Invent one coherent fictional product (suggested: a workflow-automation platform branded around kite/airship engineering, e.g., "Silkwind"). All copy must be real, polished marketing copy written in **English** — lorem ipsum is prohibited. Suggested thematic vocabulary: *unfurl, chart the winds, bamboo frame, lacquer finish, ride the current*.

**Sections required (in this order):** Hero; Features (3 cards); How It Works (3 steps); Testimonials; Pricing (3 tiers); FAQ; Final CTA; Footer with secondary links.

**Copy locale note:** The source specification contains non-English guidance; all user-facing copy, labels, ARIA attributes, and code comments must be written in English. The source's mode directive translates to: *"The source does not declare light/dark modes; validate in both light and dark before publishing"* — treat this as a mandatory QA gate (see §2.3 and §5).

---

## 2. Strict Rules & Architecture

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Style exclusively via class/ID selectors.
- HTML must remain semantic and visually agnostic — changing the theme must never require touching markup.

**2.2 Design Tokens**
- The provided Silkpunk `:root` token block is **canonical**. Include it verbatim as the foundation of `style.css`, then extend it with these mandatory additions:

```css
:root {
  /* semantic aliases */
  --bg-primary: var(--color-bg);
  --bg-secondary: var(--color-surface);
  --text-primary: var(--color-text);
  --text-secondary: var(--color-text-muted);
  --primary: var(--color-primary);
  --secondary: var(--color-accent);
  --border-default: var(--color-border);
  /* feedback */
  --text-success: #3d6b52;
  --text-error: #a3282c;
  --border-success: #4f7a67;
  --border-error: #a3282c;
  /* motion */
  --transition-fast: 150ms var(--ease-standard);
  --transition-normal: 300ms var(--ease-standard);
  /* layout */
  --spacing-gap: var(--space-4);
  /* elevation */
  --z-dropdown: 100;
  --z-modal: 200;
  --z-toast: 300;
}
```

- **Contrast pairing:** every light surface token must pair with dark text tokens and every dark surface with light text tokens — enforced in both themes, not only the default.
- The light background is warm paper `#f3ead9` (never pure white; use `#fefefe` if a near-white is ever required).

**2.3 Mandatory Dark Mode**
- Define dark token overrides **twice**: once under a `.dark` class on `<html>`, and once under `@media (prefers-color-scheme: dark) { :root:not(.light) { … } }` — so system-preference users receive the correct theme with zero flash and zero HTML restructuring.
- Suggested starting dark palette (verify ≥ 4.5:1 text contrast; adjust lightness as needed):
  - `--color-bg: #191410; --color-surface: #221c15; --color-surface-strong: #2d251b; --color-border: #4a3e2c; --color-text: #f3ead9; --color-text-muted: #c2b394; --color-primary: #d05a54; --color-accent: #8fbfa6; --color-lacquer: #c44b42;`
  - Dark feedback tokens: `--text-success: #9cc9ac; --text-error: #e8837c; --border-success: #8fbfa6; --border-error: #e8837c;`
  - Dark silk-sheen: same diagonal gradient with white overlays reduced to 0.04–0.08 alpha.
- **Persistence:** store the user's choice in `localStorage` (key `silkpunk-theme`, values `"light"`/`"dark"`); absent a stored value, defer to `prefers-color-scheme`.
- **Toggle:** a visible button in the nav with a Material Symbol (`dark_mode`/`light_mode`), correct `aria-pressed` state, and a dynamic `aria-label` ("Switch to dark mode" / "Switch to light mode").

**2.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout container with Flexbox. Default every flex container to `align-items: center` unless an exception is explicitly justified in a code comment.
- Mobile-first: rows convert to columns at small breakpoints; zero horizontal scrolling at any viewport ≥ 320px.
- Card rows (Features, Pricing, Testimonials) use `flex-wrap` with fluid flex growth (e.g., `flex: 1 1 280px`).

**2.5 CSS Approach**
- The provided custom-CSS design system **is** the framework for this build — extend it; never rename or replace its tokens or component classes.
- If you introduce Tailwind, do so only via `@layer`/`@apply` mapped back to these tokens; component styling must remain in `style.css`. Pure custom CSS is acceptable and preferred here.

**2.6 Typography & Icons (Google Only)**
- Load `Noto Serif SC` (display, weights 600/700) and `Noto Sans SC` (body, 400/500/700) via Google Fonts `<link>` tags with `preconnect`; bind them to `--font-display` and `--font-sans`.
- Icons: Google Material Symbols (Rounded variant preferred) loaded via the Google Fonts stylesheet. **Inline SVGs and local icon files are forbidden.** Use only valid symbol names (e.g., `air`, `sailing`, `explore`, `precision_manufacturing`, `check`, `star`, `expand_more`, `menu`, `close`, `dark_mode`, `light_mode`, `send`, `error`, `check_circle`, `progress_activity`). Note: `send` (paper plane) works beautifully as a kite motif.

---

## 3. Component Design Specifications

**3.1 Buttons** — base `.btn` and `.btn--primary` per the provided spec; extend with:
- **Default:** flex layout, centered content, `gap: 0.5rem`, minimum 44×44px touch target.
- **Hover:** the spec's brush-stroke nudge (`translateX(2px)`) plus `--shadow-md`, `cursor: pointer`.
- **Focus-visible:** 2px accent outline, 2px offset — distinct in both themes.
- **Active/Pressed:** `transform: scale(0.97)` (merge with the spec's active rule).
- **Loading:** `.btn--loading` / `aria-busy="true"` — block pointer events, prevent double submission, and render a rotating `progress_activity` symbol or CSS border spinner without shifting button dimensions.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** `.btn--success` / `.btn--error` temporary feedback states driven by `--text-success` / `--text-error`.
- **Danger:** define `.btn--danger` in the design system — visually distinct in both light and dark themes — even if unused on this page.

**3.2 Cards** — `.card` per the provided spec; extend with:
- **Hover:** `translateY(-2px)` plus an elevation shift (`--shadow-md` → `--shadow-lg`).
- **Focus-within:** border color shifts to the accent when any child control receives focus.
- **Skeleton:** define `.skeleton` shimmer keyframes in CSS (layout-stable, `--radius-lg`) as part of the design system, even though this page's content is static.
- **Empty state:** define an `.empty-state` pattern (Material Symbol + guidance text) in CSS.

**3.3 Forms & Inputs** — `.input` per the provided spec; extend with:
- **States:** empty, focused (accent ring per spec), filled, valid (`.input--valid`: success border + `check_circle` icon), invalid (`.input--invalid`: `--border-error`, red helper text + `error` icon), disabled, read-only.
- **Structure:** a flex `.form-group` wrapping a `<label>`, the input, and a dedicated feedback container (`.form__feedback`, `role="status"`, `aria-live="polite"`); wire `aria-describedby` and `aria-invalid` correctly.

**3.4 Accordion (FAQ)**
- Each item: an `<h3>` wrapping a `<button class="faq-item__toggle">` with `aria-expanded` and `aria-controls`; the panel carries `role="region"` and `aria-labelledby`.
- Animate open/close purely in CSS (prefer `grid-template-rows: 0fr → 1fr`); the `expand_more` symbol rotates 180°.
- Fully keyboard operable (Enter/Space); no mouse-only behavior.

**3.5 Modal (mandatory spec for any dialog you implement)** — e.g., a "Watch the demo" or plan-confirmation dialog:
- **States:** opening, open, loading, success/error, closing — all CSS-transitioned.
- **UX:** centered flex overlay (`align-items: center`) with backdrop, `--z-modal` stacking, a `close` symbol button, closing via `Esc` and overlay click, keyboard focus trapped inside, focus returned to the trigger on close, `role="dialog"`, `aria-modal="true"`, labelled by its heading.

**3.6 Navigation & Theme Toggle**
- Sticky `.nav` per the spec (lacquer bar + silk sheen).
- Brand: text wordmark + Material Symbol; nav links with visible `:focus-visible` rings; a primary CTA button.
- Theme toggle per §2.3.
- **Mobile:** a `menu` button with `aria-expanded` + `aria-controls` toggling a dropdown panel at `--z-dropdown`; closes on `Esc` and on link activation; entirely keyboard operable.

---

## 4. Page Section Requirements

**4.1 Hero** — spacious section on `--bg-primary` with a silk-sheen wash:
- `.badge` eyebrow (e.g., "Now unfurling"), a single `<h1>` in `--font-display` (largest type on the page, `--text-4xl`/`--text-5xl`), a supporting subhead in `--text-secondary`, and dual CTAs (`.btn--primary` + `.btn`).
- Decorative kite/airship motif built **purely from CSS** — layered gradients, the silk-sheen, borders, and an oversized translucent Material Symbol. No SVG, no images.
- Trust strip: three short stat lines (flex row → column on mobile).

**4.2 Features — 3 `.card`s** in a flex-wrap row (→ column on mobile):
- Each card: a Material Symbol inside a circular lacquer/jade badge, an `<h3>`, and a description. Thematic angles: wind-powered automation, bamboo-modular pipelines, lacquer-grade reliability.
- Card states per §3.2.

**4.3 How It Works — 3 steps** connected by a flowing CSS line (gradient border or pseudo-element):
- Each step: a number in `--font-display`, a Material Symbol, an `<h3>`, and copy.
- Desktop: horizontal flex row; mobile: vertical column with the connecting line continuing vertically.

**4.4 Testimonials — 3 quote cards:**
- Quote in `--font-display` (semantic `<blockquote>`/`<figure>` welcome), a five-star row (`star` symbols with `aria-label="Rated 5 out of 5 stars"`), a monogram avatar (circular badge with initials — no external images), name, and role.
- Hover/focus-within per §3.2.

**4.5 Pricing — 3 tiers** (suggested names: Paper / Bamboo / Lacquer):
- Middle tier highlighted: `.badge` "Most popular", stronger lacquer bar, `--shadow-lg`, subtle desktop `scale(1.02)`.
- Each tier: name, price in `--font-display`, feature list with `check` symbols, and a CTA button (highlighted tier gets `.btn--primary`).
- Buttons fully wired per §3.1 — a loading → success feedback simulation on click is acceptable.

**4.6 FAQ — 5–6 accordion items** per §3.4, with real themed Q&A copy.

**4.7 Final CTA — lacquer band:**
- Full-width section on `--color-lacquer` background (light text tokens — verify contrast pairing) with a silk-sheen overlay, an `<h2>`, short copy, and an email-capture form per §3.3: inline email validation, submit button with loading → success (`check_circle` + confirmation copy) / error states, and `aria-live` feedback.

**4.8 Footer — secondary links:**
- Multi-column flex layout (→ column on mobile): Product, Company, Resources, and Legal link groups; brand recap; copyright line with a dynamic year.
- Sits on `--color-surface-strong` with correct text pairing in both themes; all links have visible `:focus-visible` styles.

---

## 5. Core UX & Micro-Interaction Rules

- **Responsive by default:** fluid sizing, no horizontal overflow at any width ≥ 320px.
- **Smooth animations:** CSS transitions on all state changes using `--transition-fast` / `--transition-normal` with `--ease-standard`; extend the spec's `prefers-reduced-motion` block to disable **every** transform, shimmer, and accordion animation.
- **Accessibility:** semantic HTML5 landmarks (`header`/`nav`/`main`/`footer`), a skip link, a single `<h1>`, logical heading order, full keyboard operability, visible focus everywhere, ARIA per §3–4, `aria-live` regions for all dynamic feedback, and ≥ 4.5:1 text contrast (≥ 3:1 for large text) in **both** themes. Never rely on color alone — pair icons or text with every color-coded state.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **QA gate:** before publishing, validate the full page in light AND dark mode — the source specification explicitly requires this.

---

## 6. Deliverables & Output Format

- **Files:** exactly three — `index.html`, `style.css`, `script.js`. A single `<script src="script.js" defer></script>` reference; no inline script blocks; no inline styles.
- **Naming:** BEM throughout (`.block__element--modifier`), consistent with the spec's `.btn--primary`; never mix conventions.
- **`style.css` structure:** open with the provided Silkpunk token block (extended per §2.2–2.3), then base components, then section styles.
- **Copy:** all real English marketing copy; no lorem ipsum; no unrequested placeholders.
- **Assets:** no inline SVGs, no local icon or font files, no external images — all decoration via CSS and Google Material Symbols.
