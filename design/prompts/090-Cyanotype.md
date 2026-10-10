# CODING AGENT BRIEF — Build a Complete "Cyanotype" Landing Page (Art & Illustration)

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page **in a single pass** for an original botanical cyanotype art & illustration studio (invent a fitting studio name — e.g., in the spirit of "Prussian & Fern" or "The Sunprint Annex"; do not copy real brands).

**Theme:** *Cyanotype* — Prussian-blue monochrome photographic prints, white silhouettes on deep blue, botanical/photogram subjects, antique handmade quality (era: 1842–present; reference: Anna Atkins botanical cyanotypes). Signature move: deep Prussian-blue monochrome with a soft photogram vignette bleed, repeated on `body`, cards, and nav for a print-emulsion feel.

**Required sections:** Sticky Nav, Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

**Copy mandate:** Write ALL user-facing copy in **English** — original, theme-appropriate, real copy (an atelier selling hand-coated, sun-exposed botanical prints and editions). No lorem ipsum. Placeholders are permitted only where content is genuinely unspecified.

---

## 1. ARCHITECTURE & STRICT RULES

### 1.1 CSS-First Architecture & Zero Inline CSS
* **No inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **No inline scripts or handlers:** No `<script>` blocks in the HTML beyond one `<script src="script.js" defer></script>`; no `onclick`/`on*` attributes. All behavior via `addEventListener` in `script.js`.
* **Class/ID selectors only:** All design properties, layout rules, and states are targeted via class or ID selectors in `style.css`.
* **Clean, semantic, style-agnostic HTML:** Changing the site's look must require editing only the CSS file.

### 1.2 CSS Variables & Theme Tokens (Canonical Foundation)
Store all visual tokens in `:root` and the light-theme class. Use **exactly this refactored foundation** (the source spec's tokens renamed to canonical names; values preserved):

```css
/* ============================================================
   Cyanotype — design tokens (canonical naming)
   Era: 1842–present | Sir John Herschel's photographic process
   Reference specification: references/00-flagship-implementation-specs/cyanotype.md
   ============================================================ */
:root {
  /* color — DARK theme (native Cyanotype, default) */
  --bg-primary: #0d2c61;
  --bg-secondary: #123a7a;
  --surface-strong: #17458f;
  --border-default: #6f92d1;
  --text-primary: #eaf1ff;
  --text-secondary: #b6c9ec;
  --primary: #ffffff;
  --secondary: #a9c4f5;
  --bleed: rgba(255, 255, 255, 0.10);
  --text-success: #9fe8c6;
  --text-error: #ffb3a7;
  --border-success: rgba(159, 232, 198, 0.55);
  --border-error: rgba(255, 179, 167, 0.55);
  /* radius */
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 6px; --radius-pill: 999px;
  /* shadow */
  --shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.30);
  --shadow-md: 0 6px 16px rgba(0, 0, 0, 0.34);
  --shadow-lg: 0 12px 28px rgba(0, 0, 0, 0.38);
  /* font */
  --font-base: 'Cormorant Garamond', 'EB Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', 'Playfair Display', serif;
  --font-mono: 'Courier Prime', ui-monospace, monospace;
  /* text scale */
  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-lg: 1.125rem;
  --text-xl: 1.375rem; --text-2xl: 1.75rem; --text-3xl: 2.25rem;
  --text-4xl: 3rem; --text-5xl: 4rem;
  /* space */
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px; --space-6: 24px;
  --space-8: 32px; --space-12: 48px; --space-16: 64px; --space-24: 96px;
  --spacing-gap: 16px;
  /* motion */
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  /* stacking */
  --z-dropdown: 1000; --z-modal: 1100; --z-toast: 1200;
  /* signature: photogram silhouette vignette + emulsion grain edge */
  --emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(0,0,0,0.28) 100%);
  --botanical-border: 1px solid rgba(255,255,255,0.35);
}

/* Base components — extend, do not dilute */
body { margin: 0; color: var(--text-primary); font-family: var(--font-base);
  background: var(--bg-primary); background-image: var(--emulsion-vignette); }
.nav { display: flex; gap: var(--space-4); align-items: center;
  padding: var(--space-3) var(--space-6); background: var(--bg-secondary);
  border-bottom: var(--botanical-border); }
.btn { display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  font: 500 var(--text-base)/1 var(--font-base); letter-spacing: .03em;
  color: var(--text-primary); padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-sm); background: var(--bleed);
  border: var(--botanical-border); box-shadow: var(--shadow-sm); cursor: pointer;
  transition: transform var(--transition-fast) var(--ease-standard),
              box-shadow var(--transition-fast) var(--ease-standard); }
.btn:hover { transform: translateY(-1px); box-shadow: var(--shadow-md); filter: brightness(1.06); }
.btn:active { transform: scale(0.97); }
.btn:focus-visible { outline: 2px solid var(--primary); outline-offset: 2px; }
.btn[disabled] { opacity: .45; filter: grayscale(0.6); cursor: not-allowed; }
.btn--primary { background: var(--primary); color: var(--bg-primary); border-color: var(--primary); }
.card { background: var(--bg-secondary); background-image: var(--emulsion-vignette);
  border: var(--botanical-border); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md); padding: var(--space-6); }
.input { width: 100%; box-sizing: border-box; color: var(--text-primary);
  font: var(--text-base) var(--font-base); padding: var(--space-3) var(--space-4);
  border-radius: var(--radius-sm); background: var(--bleed); border: var(--botanical-border); }
.input::placeholder { color: var(--text-secondary); }
.input:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(255,255,255,0.20); }
.badge { display: inline-flex; align-items: center; gap: .4em; font-size: var(--text-xs);
  padding: .3em .8em; border-radius: var(--radius-pill); background: var(--bleed);
  color: var(--text-primary); border: var(--botanical-border); }
```

**Token rules:**
* **Contrast pairing:** Every light background token must pair with a dark text token and vice versa — enforced in **both** themes, not just the default.
* **Light-mode background:** Never pure white. Where a near-white is genuinely needed, use `#fefefe`, never `#ffffff` as a page background.
* You may fine-tune the suggested success/error values **only** if required to pass WCAG AA; never leave the Prussian-blue hue family or break the light/dark pairing.

### 1.3 Mandatory Dual-Theme Support (Dark + Light)
The source specification does not declare modes — therefore you must **define and validate both before publishing.**
* **Dark theme (default):** The native Cyanotype palette above (deep Prussian blue + light text).
* **Light theme ("Faded Print"):** Invert within the same hue family — pale blueprint-paper backgrounds with deep Prussian-blue silhouettes and text. Define under `[data-theme="light"]` on `<html>`:
  * `--bg-primary: #eaf1ff; --bg-secondary: #d9e4f7; --surface-strong: #c9d8f0;`
  * `--text-primary: #0d2c61; --text-secondary: #3d5a8a; --primary: #17458f; --secondary: #123a7a;`
  * `--border-default: #6f92d1; --bleed: rgba(13,44,97,0.08);`
  * `--text-success: #0f7a5c; --text-error: #b3261e; --border-success: rgba(15,122,92,0.55); --border-error: rgba(179,38,30,0.55);`
  * `--emulsion-vignette: radial-gradient(120% 100% at 50% 0%, transparent 55%, rgba(13,44,97,0.14) 100%);`
  * `--botanical-border: 1px solid rgba(13,44,97,0.35);` and lighter `--shadow-*` variants.
* **Switching logic:** On load, apply `localStorage` value (key: `cyanotype-theme`); if absent, fall back to `prefers-color-scheme`; if that is unavailable, default to dark. Theme changes must require **zero HTML restructuring** — only variable swaps.
* **Toggle control:** A visible button in the nav with a Google Material Symbols icon (`dark_mode` / `light_mode`), correct `aria-pressed` state, and a dynamically updated `aria-label` ("Switch to light theme" / "Switch to dark theme").

### 1.4 Flexbox Layout & Mobile-First Alignment
* Build all layout structures with **Flexbox** (`display: flex`).
* **Every flex container defaults to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* **Mobile-first:** All rows convert to columns on small viewports via `flex-wrap` / `flex-direction` changes. No horizontal scrolling at any width down to 320px. All interactive targets ≥ 44×44px.

### 1.5 Styling Approach — Clean Custom CSS *(explicit exception to the Tailwind default)*
This project ships a custom CSS foundation (Section 1.2); therefore use **clean custom CSS only** — no frameworks, no utility-class soup. All styles must map to CSS variables and generic reusable class names (`.btn`, `.card`, `.input`, `.badge`, `.nav`).

### 1.6 Typography & Icons — Google Only
* **Text fonts (Google Fonts, via `<link>`):** `Cormorant Garamond` (body + display), `Playfair Display` (display fallback), `Courier Prime` (mono — use for specimen captions, step numbers, prices, footer small print, like handwritten annotations on antique plates). Bind to `--font-base`, `--font-display`, `--font-mono`.
* **Icons:** Google **Material Symbols (Filled)** only — rendered as white silhouettes on deep blue (dark) / Prussian silhouettes on paper (light) to evoke photograms. **Explicitly forbidden:** raw inline SVGs, local icon files, emoji icons. Suggested set: `local_florist`, `grass`, `eco`, `spa`, `filter_vintage`, `water_drop`, `wb_sunny`, `check`, `check_circle`, `cancel`, `error`, `close`, `menu`, `dark_mode`, `light_mode`, `arrow_forward`, `star`, `mail`.
* **Antique grain:** Achieve paper/emulsion texture with CSS only (layered gradients, blend modes). No image files, no data-URI SVGs.

---

## 2. COMPONENT & SECTION SPECIFICATIONS

### 2.1 Buttons — All States via CSS Classes
* **Default:** Flex, centered, `gap: 0.5rem`, min 44×44px (per foundation).
* **Hover:** Lift + `--shadow-md` + brightness shift; `cursor: pointer`.
* **Focus:** Visible `:focus-visible` ring using `--primary` (keyboard navigation).
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading (`.btn--loading` + `aria-busy="true"`):** Disables interaction and prevents double-clicks; renders a CSS spinner ring (border-based) that does **not** change button dimensions.
* **Disabled:** `opacity ≤ 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback classes driven by `--text-success` / `--text-error` (used by the newsletter form).
* **Variants:** `.btn--primary` (the foundation's inverted pairing works in both themes automatically), `.btn--secondary`, `.btn--danger` (visually distinct in **both** themes, for any destructive action).

### 2.2 Cards
* **Default:** Foundation `.card` — `--bg-secondary` + emulsion vignette + botanical border + `--shadow-md`.
* **Hover (interactive cards only):** `transform: translateY(-2px)` + `--shadow-lg`.
* **Focus-within:** Border highlights (`border-color: var(--primary)`) when a child link/button receives focus.
* **Loading (`.card--skeleton`):** Shimmer animation keyframes in CSS, dimension-stable to prevent layout jumps.
* **Empty (`.card--empty`):** Structured fallback layout — Material icon + clear guidance text.
* **Featured (`.card--featured`):** `--surface-strong` background, badge, elevated shadow (used by the middle pricing tier).

### 2.3 Forms & Inputs (Newsletter Signup in Final CTA)
* **Structure:** `.input-group` flex container wrapping `<label>`, `<input class="input" type="email">`, and a dedicated error-feedback container (`aria-live="polite"`, wired via `aria-describedby`).
* **States:** Empty, Focused (foundation ring), Filled, Valid (`--border-success` + `check_circle` icon + message), Invalid (`--border-error` + error icon + error text + `aria-invalid="true"`), Disabled, Read-only.
* **Behavior:** Validate on submit and blur; never rely on color alone (always icon + text). Simulated async submit: button enters loading state (~900ms) → success confirmation in an `aria-live` region; double-submission prevented.

### 2.4 Modal — "Reserve Your Edition" (triggered by Pricing CTAs)
* **States:** Opening (fade + scale CSS transition), Open, Loading (skeleton/spinner in content area), Success (`check_circle` + confirmation), Closing — all animated via CSS transitions.
* **UX:** Centered flex container (`align-items: center`), backdrop overlay, Material icon close button, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, keyboard **focus trap**, focus returned to trigger on close, close via `Esc` or backdrop click, body scroll locked, stacked at `--z-modal`.

### 2.5 Page Sections
* **Nav (sticky):** Brand wordmark, anchor links (Features, Process, Editions, FAQ), theme toggle (1.3), CTA button scrolling to Final CTA. Mobile: hamburger (`menu` icon, `aria-expanded`, column panel at `--z-dropdown`, closes on `Esc`/link click).
* **Hero:** `h1` display headline (e.g., in the spirit of "Sunlight, pressed into Prussian blue."), subcopy, `.badge`, two CTAs (`.btn--primary` → `#pricing`, `.btn` → `#process`), and a **photogram composition**: a flex cluster of large white botanical Material Symbols at varying sizes/opacities over the vignette, plus a `--font-mono` specimen caption (e.g., "Plate I — Papaver rhoeas, 1842").
* **Features (3 cards):** e.g., Hand-Coated Emulsion (`water_drop`), Exposed by Sunlight (`wb_sunny`), Archival Botanical Plates (`local_florist`) — icon, `h3`, copy each.
* **How It Works (3 steps):** Coat → Expose → Rinse & Reveal; mono "Step 01/02/03" captions, connecting rule/border line, flex row → column on mobile.
* **Testimonials (3 cards):** Quotes from a curator, a collector, an illustrator; name + role in `--font-mono`; optional `star` icons.
* **Pricing (3 tiers):** e.g., Single Plate / Herbarium Set (featured, `.card--featured` + badge) / Master Edition; mono prices, `check`-icon feature lists, each CTA opens the Reserve modal (2.4).
* **FAQ:** Accessible accordion, 5–6 items (process, care, framing, shipping, commissions); `<button>` + panel pattern with `aria-expanded`/`aria-controls`, keyboard operable, animated open/close (CSS grid-rows or max-height technique), reduced-motion respected.
* **Final CTA:** Display headline + newsletter form (2.3) + `.btn--primary`.
* **Footer:** Secondary links that **must resolve to real in-page anchors** (`#features`, `#process`, `#pricing`, `#faq`, `#contact`) — no dead `#` links; social presence as text links or generic Material icons with `aria-label`s; mono copyright line.

---

## 3. UX, ACCESSIBILITY & MICRO-INTERACTION RULES
* **Responsive by default:** Fluid sizing; breakpoints ~640/768/1024px; zero horizontal overflow.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; **`prefers-reduced-motion` disables transforms, animations, and smooth scrolling.**
* **Accessibility:** Skip-to-content link; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`); one `h1` with logical heading order; WCAG AA contrast in **both** themes; never color-only state communication; full keyboard operability for menu, accordion, modal, toggle; `aria-live` regions for all dynamic feedback (form errors, submit status, modal status).
* **Mandatory visual feedback:** Every click, hover, and submission triggers a visible state change.
* **Anchor navigation:** Smooth-scroll to sections (reduced-motion aware); optional IntersectionObserver fade-up reveals as progressive enhancement only.

---

## 4. DELIVERABLES & OUTPUT REQUIREMENTS
* **Files:** Separate `index.html`, `style.css`, `script.js`. One deferred `<script>` entry point; zero inline styles, scripts, or handlers.
* **Naming:** BEM only, consistently (`.card--featured`, `.nav__link`, `.input-group__error`) — never mix conventions.
* **Meta:** `lang="en"`, viewport meta, descriptive `<title>`, meta description.
* **Copy:** Real English copy throughout; placeholders only where content is genuinely unspecified.
* **Pre-delivery QA (mandatory):** Toggle and visually validate **both light and dark themes** (the source spec declares neither — you must verify both before publishing); complete a keyboard-only pass; check 320px width; spot-check contrast on text, borders, success/error states, and `.btn--primary` in both themes.
* **Output:** Deliver the complete, functional code in one response.
