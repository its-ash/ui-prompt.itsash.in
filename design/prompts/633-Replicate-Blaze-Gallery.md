# BUILD PROMPT — "REPLICATE BLAZE GALLERY" LANDING PAGE

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-grade landing page specified below in a single pass, on the first attempt. Every rule in this document is mandatory unless explicitly marked as an exception clause.

**Product:** A Replicate-inspired, explosive AI-model-playground landing page for a developer community ("Replicate Blaze Gallery"), era 2024–2026. Signature style: explosive orange-red-magenta-pink gradient hero anchored on `#ea2804`, massive heavy display typography (up to 128px), exclusively pill-shaped geometry (9999px) on everything, high-contrast `#202020`/`#ffffff` palette, AI model gallery with generated imagery, dotted-underline links, green status badges, lowercase tags, and a 128px closing manifesto.

---

## 1. STRICT RULES & ARCHITECTURE

### 1.1 CSS-First Architecture & Zero Inline CSS
- **No inline CSS:** The `style="..."` attribute and `<style>` blocks in HTML are strictly forbidden. All styling lives in a dedicated `style.css` file.
- **Class/ID selectors only:** Every design property, layout rule, and state must be targeted via class or ID selectors defined in `style.css`.
- **Minimal HTML modifications:** HTML must remain clean, semantic, and styling-agnostic. Changing the site's look must require editing only `style.css`, never the markup.

### 1.2 CSS Variables & Theme Tokens
All visual tokens must be defined in `:root` and overridden per theme. Use exactly this token foundation (values are mandatory):

```css
:root {
  /* brand */
  --primary: #ea2804;
  --secondary: #dd4425;
  --gradient-hero: linear-gradient(115deg, #ffb03a 0%, #ea2804 38%, #d6249f 72%, #ff7ab8 100%);

  /* surfaces (light theme) */
  --bg-primary: #ffffff;      /* explicit brand exception — see note below */
  --bg-secondary: #f5f5f5;
  --bg-dark: #202020;         /* permanent dark sections — fixed in BOTH themes */
  --surface-dark: #24292e;

  /* text (light theme) */
  --text-primary: #202020;
  --text-secondary: #646464;
  --text-on-dark: #ffffff;
  --text-muted-dark: #bbbbbb;
  --text-success: #1f7a50;    /* AA-darkened from #2b9a66 for small text */
  --text-error: #c92102;      /* AA-darkened from #ea2804 for small text */

  /* borders & status */
  --border-default: #bbbbbb;
  --border-success: #2b9a66;
  --border-error: #ea2804;
  --status-green: #2b9a66;

  /* geometry — all-pill mandate */
  --radius-sm: 9999px;
  --radius-md: 9999px;
  --radius-lg: 9999px;

  /* elevation, motion, space, stacking */
  --shadow-sm: 0 2px 8px rgba(32, 32, 32, 0.08);
  --shadow-md: 0 10px 28px rgba(32, 32, 32, 0.16);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms;
  --transition-normal: 300ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 1100;

  /* type */
  --font-display: 'Archivo', system-ui, sans-serif;
  --font-base: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
}
```

- **Contrast pairing:** Every light background token must pair with a dark text token and every dark background token with a light text token, in every theme. `--bg-dark`/`--surface-dark` always pair with `--text-on-dark`/`--text-muted-dark`.
- **Pure white exception:** The default rule requires `#fefefe` instead of `#ffffff`; this theme's brand palette explicitly anchors on pure white, so `#ffffff` is permitted as `--bg-primary`. Reserve `#fefefe` for any softer near-white surface if needed.
- **Gradient under text:** White display text over `--gradient-hero` is permitted only for large text (≥3:1); small body text on the gradient must sit on a solid overlay pill (`--bg-dark` at ~85% opacity) to guarantee AA.

### 1.3 Mandatory Dark Mode Support
- **Implementation:** Define dark tokens under both a `.dark` class selector and `@media (prefers-color-scheme: dark)`; an explicit user choice (class) must always override the system preference.

```css
.dark {
  --primary: #ff4a26;         /* brightened for AA on #202020 */
  --secondary: #ff6b47;
  --bg-primary: #202020;
  --bg-secondary: #24292e;
  --text-primary: #ffffff;
  --text-secondary: #bbbbbb;
  --text-success: #4cc98a;
  --text-error: #ff6b4a;
  --border-default: #3d4247;
  --border-error: #ff4a26;
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 10px 28px rgba(0, 0, 0, 0.55);
}
```

- **Theme switching:** Background and text variables must flip seamlessly with zero HTML restructuring. Permanent dark sections (hero, closing manifesto, footer) keep `--bg-dark` in both themes; in dark mode, differentiate them with `--surface-dark` panels or `--border-default` outlines.
- **Persistence:** Store the user's choice in `localStorage` (e.g., key `blaze-theme`), falling back to `prefers-color-scheme` on first visit. Provide a visible pill-shaped toggle in the navbar with a Material Symbols sun/dark-mode icon, correct `aria-pressed` state, and `aria-label` ("switch to dark theme" / "switch to light theme").
- **Exception clause:** The source design marks dark mode "not recommended" — light mode is the primary, default presentation; dark mode remains mandatory per architecture and must be fully contrast-tuned as specified above.

### 1.4 Flexbox Layout & Mobile-First Alignment
- **Flexbox only** for all layout structures (Tailwind flex utilities permitted). Card rows use `flex-wrap`; no CSS Grid for layout.
- **Default alignment rule:** Every flex container must default to `align-items: center` (`items-center`). The only permitted exceptions are text-heavy card bodies and footer link columns, which may use `items-start` — each exception requires a one-line CSS comment justifying it.
- **Mobile-first:** All rows collapse to columns on small viewports; sizing is fluid via `clamp()`. No horizontal page overflow — apply `overflow-x: clip` on `html`/`body` as a safety net; any horizontal scroller (model gallery strip) must contain its own `overflow-x: auto`.

### 1.5 Framework Default & Tailwind CSS Integration
- **Tailwind CSS via CDN** is the default for structural utilities only (flex, gap, padding, responsive `sm:`/`md:`/`lg:` prefixes). No inline `tailwind.config` script.
- **All visual styling** (color, font, radius, shadow, transition) must come from reusable component classes in `style.css` mapped to CSS variables — never arbitrary values like `bg-[#ea2804]` or `text-[13px]`.
- **Reusable classes:** `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.card`, `.card--featured`, `.input-group`, `.badge`, `.tag`, `.link-dotted`, `.code-card`, `.toast`.

### 1.6 Typography & Icons (Google Fonts Mandatory)
- **Google Fonts only**, loaded via `<link>` with `preconnect`: **Archivo** (display, weights 700/800/900), **Inter** (body, 400/500/600), **JetBrains Mono** (code, 400/500/700). Bind them to `--font-display`, `--font-base`, `--font-mono` with `system-ui`/`sans-serif`/`monospace` fallbacks.
- **Exception clause:** The source spec names `rb-freigeist` (display) and `basier-square` (body), which are not distributed on Google Fonts; per the mandatory Google Fonts rule, substitute the closest Google equivalents above while keeping the source's `system-ui` fallback stack.
- **Display type rules:** Weight 700 minimum (up to 900), hard cap `128px` via `clamp()` (e.g., `clamp(3rem, 9vw, 8rem)`), tight tracking (`-0.02em` to `-0.04em`), line-height 0.95–1.1.
- **Icons:** Google Material Symbols (Rounded variant) via Google Fonts. Raw inline SVGs, local icon files, and emoji-as-icons are explicitly forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### 2.1 Button Component
All states styled via CSS classes; every button is a pill (`--radius-md`), flex (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), minimum touch target 44×44px:
- **Default:** Filled `--bg-dark` with `--text-on-dark` (primary), or 1.5px `--border-default` outline (secondary).
- **Hover:** Brightness/elevation shift with `cursor: pointer`.
- **Focus:** Distinct ring via `outline: 2px solid var(--primary); outline-offset: 3px;` for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** Disables interaction, prevents double-clicks, renders a rotating Material "progress" icon; button dimensions must not change.
- **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** Temporary feedback states using `--text-success`/`--text-error` (icon + label, never color alone).
- **Danger:** `.btn--danger` = filled `--primary` red; because brand red doubles as the accent, danger buttons must be filled red (not outlined) to stay visually distinct in both themes.

### 2.2 Card Component
- **Default:** Flexbox layout, pill radius, `--bg-secondary` (or `#ffffff` + `--border-default`) with `--shadow-sm`, padding via tokens.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md` shift.
- **Focus-within:** Border highlights to `--primary` when a child link/button receives focus.
- **Loading (skeleton):** Define a `.skeleton` shimmer class in CSS; required only if any card loads async content.
- **Empty state:** Gallery/feature media must degrade gracefully — every image sits on a `--gradient-hero` placeholder tile with `alt` text, so a failed image still shows a gradient tile plus the model name.

### 2.3 Form & Input Requirements
Applied to the Final CTA email capture:
- **States:** Empty, Focused (outline ring), Filled, Valid (`--border-success` + check icon), Invalid (`--border-error` + error icon + message text), Disabled, Read-only.
- **Structure:** `.input-group` flex container wrapping `<label>`, pill `<input>` (with ≥1.25rem horizontal padding so text never clips at 9999px radius), and a dedicated error container with `aria-live="polite"`. Errors must never rely on color alone.

### 2.4 Modal / Popup Requirements
No modals are part of this deliverable — do not add any. If an overlay ever becomes genuinely necessary, it must satisfy: animated open/close via CSS transitions, backdrop overlay, Material icon close button, keyboard focus trapping, `Esc` and overlay-click closing, and `--z-modal` stacking.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** Fluid `clamp()` sizing, no horizontal overflow at any viewport from 320px up.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; every animation must respect `prefers-reduced-motion` (disable transforms, parallax, and shimmer; keep opacity fades).
- **Accessibility (a11y):** AA contrast in both themes; semantic HTML5 landmarks (`header`, `main`, `section` with `aria-labelledby`, `footer`); a skip-to-content link; logical focus order; full keyboard operability (navbar, accordion, forms); `aria-live` regions for form errors and the toast; state never communicated by color alone.
- **Mandatory visual feedback:** Every click, hover, and submission triggers a visible state change.
- **Destructive actions:** `.btn--danger` visually distinct in both themes.
- **Micro-interactions:** Sticky navbar gains `--shadow-md` on scroll; anchor links smooth-scroll; optional subtle IntersectionObserver reveal-on-scroll (opacity/translate only, disabled under reduced motion).

---

## 4. DELIVERABLE & OUTPUT FORMAT

- **File structure:** Separate `index.html`, `style.css`, `script.js`. The only permitted `<script>` tags are external references: the Tailwind CDN and a single `<script src="script.js" defer>`. Zero inline JS, zero inline CSS.
- **Naming convention:** BEM only, everywhere (`.btn--primary`, `.card--featured`, `.faq__summary`, `.nav__link`). Never mix conventions.
- **No unrequested placeholders:** Write real English copy for every label, headline, and description — lorem ipsum is prohibited.
- **script.js scope (vanilla JS only):** theme toggle + `localStorage` persistence, mobile nav toggle, FAQ accordion behavior, smooth anchor scrolling, email form validation + simulated async submit (loading → success + toast), optional gallery strip scroll. No other libraries.

---

## 5. THEME VISUAL LANGUAGE — MANDATORY SIGNATURE RULES

- **Explosive gradient:** `--gradient-hero` (orange → brand red `#ea2804` anchor → magenta → pink) fills the hero and accents the "most popular" pricing badge and the manifesto gradient text (`background-clip: text`).
- **All-pill geometry:** `9999px` radius on everything — buttons, cards, inputs, badges, tags, avatars, navbar container, code card, image frames. Zero sharp corners anywhere in the design.
- **Dotted-underline links:** `.link-dotted` = `text-decoration: underline dotted; text-decoration-color: var(--primary); text-underline-offset: 4px;` with hover shifting to a solid underline. Apply to nav links, footer links, inline text links, and testimonial handles.
- **Green status badges:** Pill with a `--status-green` dot + lowercase text (e.g., "all systems operational", "live"); text uses `--text-success` for AA; the dot + text pair ensures state is never color-alone.
- **Lowercase:** Write tags, badges, kickers, nav links, and footer column labels in lowercase in the DOM, and enforce `text-transform: lowercase` on `.tag`, `.badge`, and kicker classes as a safety net.
- **Code blocks:** JetBrains Mono on `--bg-dark` pill cards with `--text-on-dark`/`--text-muted-dark` syntax accents and a green prompt dot; include a copy button with full button state matrix.
- **Model gallery imagery:** Pill-framed thumbnails from seeded `https://picsum.photos/seed/<model-id>/600/400` URLs, `loading="lazy"`, each labeled with a model id (mono, lowercase, e.g., `blaze/flux-pro`), a lowercase tag, and a green status badge.

---

## 6. PAGE SECTIONS & CONTENT REQUIREMENTS

### 6.0 Sticky Pill Navbar (page chrome — required to host the theme toggle)
Floating sticky pill container (`--bg-primary`, `--shadow-md`, `--z-dropdown`). Contents: lowercase wordmark ("blaze"), anchor links (features, how it works, pricing, faq) with dotted-underline hover, the theme toggle (per 1.3), and a primary pill CTA ("start building"). Mobile: links collapse into a pill hamburger button toggling a dropdown panel — `aria-expanded`, `Esc` closes, focus returns to the toggle.

### 6.1 Hero
Full-bleed `--gradient-hero` background, `min-height: 88vh`, centered flex column. Massive display headline (Archivo 800, `clamp(3rem, 9vw, 8rem)`, white, lowercase voice — e.g., "run the world's best ai models"). Subcopy in Inter on a translucent `--bg-dark` overlay pill for AA. CTA row: primary filled pill + secondary white-outlined pill. A `--bg-dark` code card in JetBrains Mono showing a one-line API example with copy button. A lowercase tag row ("text-to-image", "llms", "video", "audio"). A green "all systems operational" status badge. Bottom band: horizontally scrollable AI model gallery strip (per Section 5) — overflow contained per 1.4.

### 6.2 Features — 3 Cards
Flex-wrap row, 1 column mobile → 3 columns desktop, `--spacing-gap`. Each pill card: Material Symbols icon in a gradient-tinted pill chip, lowercase kicker tag, display-font title (~1.5rem), real copy. Suggested features: "one-line api", "scale to zero" (pay per second), "community models" (10k+ models). Full card state matrix per 2.2.

### 6.3 How It Works — 3 Steps
Stacked mobile → 3-column desktop, connected by a dotted CSS line on desktop. Each step: pill number chip (gradient fill, white numeral), lowercase step tag ("01 pick a model", "02 run one line", "03 ship it"), title, copy. Step 2 includes an inline mono code line (e.g., `replicate.run("blaze/flux-pro")`).

### 6.4 Testimonials
Three pill cards: circular (pill) avatar via seeded picsum, quote, name, and handle as a `.link-dotted`. Hover elevation per 2.2. Write three realistic fictional developer quotes.

### 6.5 Pricing — 3 Tiers
Flex-wrap row, 1 column mobile → 3 columns desktop. Tiers: "explorer / $0", "builder / from $9/mo + usage", "team / custom" (lowercase tags). Middle tier is `.card--featured`: inverted `--bg-dark` fill, `--text-on-dark`, gradient "most popular" pill badge. Price in heavy display font. Feature lists with Material check icons. Each tier CTA is a full-state-matrix button per 2.1 (featured tier gets the filled primary button).

### 6.6 FAQ
Accordion of 5–6 real questions (what is blaze, how pricing works, which gpus, commercial use of outputs, how to run a model, api access). Each item is a pill container; summaries use buttons with `aria-expanded`/`aria-controls`, a rotating Material chevron, and CSS-driven height animation; fully keyboard operable; focus-visible rings on every summary.

### 6.7 Final CTA — Closing Manifesto
Permanent `--bg-dark` full-bleed section. The mandatory manifesto headline, exactly: **"imagine what you can build."** — Archivo 800, `clamp(3rem, 9vw, 8rem)` (128px cap), rendered as `--gradient-hero` gradient text (large-text contrast rules apply). Below it: the email capture per 2.3 (pill input + pill submit). On submit: button enters loading state, then success; confirmation arrives via an `aria-live="polite"` pill toast pinned bottom-center at `--z-toast`, auto-dismissing after ~4s.

### 6.8 Footer
Permanent `--bg-dark`. Columns: brand + one-line description; link groups ("product", "resources", "company") with dotted-underline links; explicit secondary links (privacy, terms, status, security, github); green "all systems operational" badge; social icon buttons (Material Symbols) as accessible pills with `aria-label`s; lowercase copyright line.

---

## 7. COPY & LOCALE RULES

- **All user-facing copy must be written in English** — headlines, labels, buttons, FAQ answers, testimonials, footer text. No non-English copy anywhere.
- **Voice:** Developer-community tone — direct, plain, confident, lightly playful, lowercase-friendly. Realistic numbers and plausible fictional model ids in the `blaze/` namespace.
- **No lorem ipsum.** Every string is final, themed copy.

Build the complete page in one pass. Do not output partial code, and do not ask clarifying questions unless a mandatory rule above is genuinely impossible to satisfy.
