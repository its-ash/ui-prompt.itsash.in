# CODING AGENT PROMPT — "TERMINAL GREEN" LANDING PAGE

**Role & Mission:** Act as a Senior Frontend Engineer and Expert UI Designer. Code a complete, production-quality landing page in a single attempt — fully functional, responsive, and accessible on the first pass, with no follow-up questions. Aesthetic category: **Dark Tech & Cyber**. Invent one coherent fictional developer product (e.g., a zero-config CLI deployment tool) and keep all copy consistent with it across every section. Write all user-facing copy in English, in a confident developer/CLI voice (`$` prompts, `//` comments, command examples). No lorem ipsum anywhere.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives exclusively in `style.css`. **Forbidden:** `style="..."` attributes, `<style>` blocks in HTML, and inline `<script>` blocks beyond a single deferred `<script src="script.js" defer>` entry point.
* All design properties, layout rules, and states are applied via class/ID selectors only.
* HTML remains clean, semantic, and style-agnostic: re-theming the page must require editing `style.css` only, never the markup.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`, mapping the palette exactly:
* **Colors:** `--primary: #39d353` (Terminal Green), `--secondary: #238636` (Muted Green), `--bg-primary: #0d1117` (GitHub Dark), `--bg-secondary: #161b22` (Code BG), `--text-primary: #e6edf3`, `--text-secondary: #8b949e`, `--text-success: #39d353`, `--text-error: #f85149`, `--border-default: #30363d`, `--border-error: #f85149`, `--border-success: #238636`.
* **Syntax tokens (GitHub Dark syntax palette):** `--syntax-keyword: #ff7b72`, `--syntax-string: #a5d6ff`, `--syntax-function: #d2a8ff`, `--syntax-comment: #8b949e`, `--syntax-variable: #79c0ff`.
* **Shape, elevation, motion:** `--radius-sm: 4px`, `--radius-md: 6px`, `--radius-lg: 12px`, `--shadow-sm`, `--shadow-md` (dark-appropriate shadows), `--spacing-gap: 1rem`, `--transition-fast: 150ms` (the theme standard for ALL state changes), `--transition-normal: 250ms` (large reveals only), `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Stacking:** `--z-header`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--z-scanlines` — ordered to prevent overlap conflicts between layered components.
* **Contrast pairing:** every dark background token pairs with a light text token and vice versa (e.g., `.btn--primary` = `background: var(--primary)` + `color: var(--bg-primary)`). Where a near-white surface is ever needed, use `#fefefe`, never `#ffffff`.
* No hardcoded hex values anywhere outside `:root`.

**1.3 Dark Mode Architecture**
* All theming must be token-driven so any future scheme can be swapped by redefining variables alone — zero HTML restructuring, zero markup changes.
* **Exception (dark-only theme):** "Terminal Green" is dark-only by spec — do not define a light palette, do not add a theme toggle, and no `localStorage` persistence is needed; the dark tokens in `:root` are the single source of truth.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build every layout structure with Flexbox.
* Every flex container **must default to `align-items: center`** unless an exception is explicitly justified in a CSS comment.
* Mobile-first: rows collapse to columns on small viewports; zero horizontal scrolling at any width from 320px up; fluid type and spacing via `clamp()`.

**1.5 CSS Approach & Reusable Classes**
* Hand-written custom CSS in `style.css` (no framework required for this theme); optionally organize with `@layer` (reset, tokens, components, utilities).
* Reusable patterns must be generic classes — `.btn`, `.card`, `.input-group`, `.terminal-border`, `.scan-lines`, `.green-accent`, `.cursor-blink` — never duplicated one-off styles.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **JetBrains Mono** from Google Fonts (weights 400/500/700) and bind it to `--font-base`. It is the ONLY font: headings, body, buttons, inputs, code, footer — everything is monospace.
* Icons: Google Material Symbols (Rounded or Outlined) via the official stylesheet. **Forbidden:** raw inline SVGs, emoji as icons, local icon files, or any other icon set.
* Code blocks: `pre code { background: var(--bg-secondary); padding: 16px; border-radius: var(--radius-md); }` with syntax-colored tokens driven by the `--syntax-*` variables.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component** — all states via CSS classes:
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Variants: `.btn--primary` (green background, dark text), `.btn--secondary` (transparent, `--border-default` border, green text on hover), `.btn--danger` if any destructive action exists (distinct red treatment readable in dark mode).
* **Hover:** brightness/shadow shift + `cursor: pointer`.
* **Focus:** visible ring from variables (`outline: 2px solid var(--primary); outline-offset: 2px`) — never remove focus styles without replacement.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** `aria-busy="true"`, pointer-events disabled, dimension-stable CSS spinner or animated Material Symbol `progress` icon — button must not change size.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback driven by `--text-success`/`--text-error` (e.g., copy button swaps `content_copy` → `check` + "Copied"), announced via an `aria-live="polite"` region.

**2.2 Card Component** (features, testimonials, pricing):
* **Default:** flexbox layout, `background: var(--bg-secondary)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-md)`, `--shadow-sm`.
* **Hover:** `transform: translateY(-2px)` + shadow elevation shift.
* **Focus-within:** border highlights `var(--primary)` when a child button/link receives focus.
* No skeleton/empty states required (all content is static) — but no card may be visually inert on interaction.

**2.3 Form & Input Component** (Final CTA email capture):
* **Structure:** `.input-group` flex container wrapping `<label>`, `<input>`, and a dedicated error feedback element wired via `aria-describedby` and `aria-live="polite"`.
* **States via classes:** empty, focused (green ring), filled, valid (`--border-success` + check icon), invalid (`--border-error`, red helper text + error icon — never color alone), disabled, read-only.
* Submit button implements the full 2.1 state machine, including loading and a success confirmation message.

**2.4 FAQ Accordion Component:**
* Each item: `<button aria-expanded>` controlling a panel (`aria-controls`, `role="region"`), Material Symbol chevron rotating 180° on open.
* Panels animate height via CSS transition; fully keyboard operable; `prefers-reduced-motion` collapses instantly.

**2.5 Terminal Window & Signature Effects:**
* Hero contains a terminal window: `.terminal-border` (`border: 1px solid var(--border-default)`), title bar with three CSS-drawn dots, and a `pre code` session showing prompt, command, and syntax-colored output.
* `.scan-lines`: fixed full-viewport overlay, `background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`, `pointer-events: none`, `aria-hidden="true"`, `z-index: var(--z-scanlines)` — it must never intercept clicks or create scrollbars.
* `.cursor-blink`: `animation: blink 1s step-end infinite` with `@keyframes blink { 50% { opacity: 0 } }` — used in the hero headline and/or terminal prompt.
* Optional typing animation for the hero command — must respect `prefers-reduced-motion`, and the full text must exist in the DOM for screen readers regardless of animation.

**2.6 Header, Navigation & Footer:**
* Sticky header: text-based logo, anchor links to every section, primary CTA. Anchor targets get `scroll-margin-top`; CSS smooth scrolling (disabled under reduced motion).
* Mobile: hamburger (Material Symbol `menu`) toggles a dropdown panel — `aria-expanded`, `aria-controls`, Esc closes, focus managed, `z-index: var(--z-dropdown)`.
* Footer: 3–4 columns of secondary links, Material Symbol social icons, copyright line; every link has hover + focus-visible states.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow from 320px up.
* **Smooth animations:** all state changes transition with `var(--transition-fast)` and `var(--ease-standard)`; large reveals use `var(--transition-normal)`.
* **Reduced motion:** `prefers-reduced-motion: reduce` disables blink, typing, transforms, and smooth scroll — content stays fully readable.
* **Accessibility:** semantic landmarks (`header`/`nav`/`main`/`section`/`footer`), one `h1` with logical heading order, skip-to-content link, visible focus on every interactive element, contrast ≥ 4.5:1, never color-only state (pair icons with text), `aria-live` regions for all dynamic feedback (form errors, copy confirmation, loading).
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive actions** (if any): `.btn--danger`, visually distinct in the dark theme.

---

## 4. PAGE SECTIONS — BUILD REQUIREMENTS

1. **Hero:** headline ending in a blinking cursor, subheadline, primary + secondary CTA, the terminal window (per 2.5), and a copy-install-command button with success feedback.
2. **Features (3 cards):** Material Symbol icon, title, and description each; full card states per 2.2.
3. **How It Works (3 steps):** numbered terminal-style steps (`$ step 01` or `01.`), icon + copy each, visually connected as a sequence.
4. **Testimonials (3):** quote, name, role/company; CSS-drawn initials avatar (no external images); terminal-comment styling (`//`) encouraged.
5. **Pricing (3 tiers):** middle tier featured — green border, `[RECOMMENDED]` badge, elevated; per-tier feature checklist using Material Symbol `check`/`close`; one CTA button per tier.
6. **FAQ (5–6 items):** accordion per 2.4.
7. **Final CTA:** bold statement + email capture form per 2.3 + primary button.
8. **Footer:** secondary link columns, social icons, copyright, and a terminal sign-off line (e.g., `$ connection closed`).

---

## 5. DELIVERABLE & OUTPUT FORMAT

* **Files:** separate `index.html`, `style.css`, `script.js`. No inline styles; no inline scripts beyond the single deferred entry point.
* **Naming:** BEM throughout (`block__element--modifier`); the generic primitives listed in 1.5/2.5 are the only non-BEM classes and must keep those exact names. Never mix conventions.
* **Output:** the complete, runnable code for all three files in one response — the page must work on the first attempt with no external assets beyond Google Fonts and Material Symbols.
* **No placeholders:** no lorem ipsum, no TODO stubs; every listed section fully built with realistic themed copy.
