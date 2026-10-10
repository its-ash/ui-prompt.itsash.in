# BUILD SPECIFICATION — "DARK ACADEMIA" LANDING PAGE (CULTURAL & HERITAGE)

**Your role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page defined below in a single attempt — deliver the final code immediately, without clarifying questions. Where a detail is unspecified, make a tasteful decision consistent with this specification. All user-facing copy must be written in English.

---

## 0. PROJECT BRIEF & PAGE SPECIFICATION

**0.1 Theme & Voice.** The theme is **Dark Academia**: moody browns, oxblood, forest green, cream; serif typography; old books, candlelight, tweed, Gothic/Ivy-League architecture motifs; scholarly, nostalgic, melancholic — the mood of *Dead Poets Society* and *The Secret History*. Invent a fictional Cultural & Heritage product and name it (e.g., "The Athenaeum — a private digital society for classical study: a curated library of rare texts, annotated lectures, and weekly reading circles"). Write all headlines, body copy, testimonials, pricing labels, and FAQ entries yourself, in this voice. No lorem ipsum.

**0.2 Required sections, in order:**
- **Global frame:** sticky header (`.nav`) with wordmark, anchor links to each section, theme toggle, and a primary CTA ("Apply") anchoring to Pricing. On mobile, collapse links behind a Material Symbol `menu` button. Include a "Skip to content" link.
- **Hero:** mono eyebrow (e.g., "EST. MMXXIV · A SOCIETY OF READERS"), display headline in Cormorant Garamond, subcopy, two CTAs (primary + ghost). Decorate with CSS only: a candlelight radial glow (gold at low opacity), hairline rules, and an arched frame (`--radius-arch`) holding an oversized drop cap or Material Symbol. No external images.
- **Features (3 cards):** icons `auto_stories` (rare text collection), `history_edu` (annotated lectures), `forum` (reading circles); title + 2–3 sentence copy each.
- **How It Works (3 steps):** Courier Prime numerals "01 / 02 / 03" in gold, connected by a hairline rule; each step has number, title, copy. Row on desktop, column on mobile.
- **Testimonials:** three quote cards with `format_quote` icon, italic serif quote, attribution (name + epithet, e.g., "Fellow, Class of MMXIX").
- **Pricing (3 tiers):** Reader / Scholar / Fellow. Middle tier featured: gold border, `.badge` "Most Chosen", elevated shadow. Prices in Courier Prime; feature lists with `check` icons; one CTA per tier.
- **FAQ:** accessible accordion, 5 Q&As, `expand_more` icon rotating on toggle.
- **Final CTA:** panel with candlelight glow containing headline, copy, and a newsletter email form (see 2.3).
- **Footer:** wordmark + tagline, three columns of secondary links (Society / Library / Legal), bottom bar with "© MMXXV …" small print. Unspecified link destinations may use `href="#"`.

**0.3 Section rhythm.** Every section uses a consistent heading pattern (mono eyebrow + Cormorant H2 + optional intro), `--space-24` between sections, `--space-12` internal gaps, centered container max-width 72rem.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. **Never** use `style="..."` attributes.
- Target everything via class/ID selectors. Keep HTML semantic and visually agnostic (`header/nav/main/section/article/footer`, `aria-labelledby` on sections) so a re-theme requires CSS edits only.
- No inline `<script>` blocks; HTML references `script.js` once, with `defer`.

**1.2 CSS Variables & Theme Tokens**
Adopt the supplied base component CSS (`.btn`, `.card`, `.nav`, `.input`, `.badge`) as your foundation, re-pointed at the mandatory token set below. The source spec's token names (`--color-bg`, `--color-surface`, …) may be kept as supplementary aliases, but the mandatory set is required and must drive every component:

```css
:root { /* DARK — the theme's native mode */
  --bg-primary: #1c1712;    --bg-secondary: #26201a;   --bg-tertiary: #332a20;
  --text-primary: #e8ddc7; --text-secondary: #a99a7f;
  --primary: #8b5e34;       --secondary: #5a6b4f;
  --text-success: #a3b78c;  --text-error: #d98c80;
  --border-default: #4a3f30; --border-success: #6d8159; --border-error: #a34a42;
  --accent-gold: #b89b5e;   --oxblood: #6e2b2b;        /* supplementary */
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 6px; --radius-pill: 999px;
  --radius-arch: 12rem 12rem 0 0;                      /* gothic arch motif */
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.5); --shadow-md: 0 8px 24px rgba(0,0,0,0.45);
  --spacing-gap: 1rem;  /* plus the --space-1 … --space-24 scale */
  --transition-fast: 120ms; --transition-normal: 240ms; --ease-standard: cubic-bezier(0.4,0,0.2,1);
  --z-header: 100; --z-dropdown: 1000; --z-modal: 2000; --z-toast: 3000;
  --font-base: 'EB Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', 'EB Garamond', serif;
  --font-mono: 'Courier Prime', monospace;
  /* plus the --text-xs … --text-5xl type scale */
}
```

- **Light "parchment" theme** overrides under `[data-theme="light"]`: `--bg-primary: #ece3cd; --bg-secondary: #f6f0e0; --bg-tertiary: #e0d3b4; --text-primary: #2b2117; --text-secondary: #6d5f49; --secondary: #4f5f45; --text-success: #4f6135; --text-error: #8a2f2a; --border-default: #c6b795; --border-success: #7d8f66; --border-error: #b0564d; --accent-gold: #9a7c3f;` with softer shadows `0 2px 8px rgba(43,33,23,0.12)` / `0 8px 24px rgba(43,33,23,0.16)`.
- **Contrast pairing is mandatory in every theme:** light backgrounds pair with dark text tokens, dark backgrounds with light text tokens. Never mix.
- Never use `#ffffff`; where a near-white is required (e.g., text on `.btn--primary`), use `#fefefe`.

**1.3 Mandatory Dual-Theme Support**
The source spec does not declare modes — you must define and validate both light and dark before publishing.
- Dark is the native default (`:root`). Also ship the parchment light theme above.
- First visit honors the OS: add `@media (prefers-color-scheme: light) { :root:not([data-theme]) { …parchment tokens… } }`.
- `script.js` reads `localStorage` on execution; if a stored choice exists, set `data-theme` on `<html>` immediately, otherwise leave the media query in charge.
- The header contains a visible toggle (Material Symbols `dark_mode` / `light_mode`) with `aria-pressed` reflecting the active dark state and an `aria-label` describing the action. Clicking it sets `data-theme`, persists to `localStorage`, and never requires HTML restructuring.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout with Flexbox. Every flex container defaults to `align-items: center` unless a specific exception is justified in a CSS comment.
- Mobile-first: single column by default; promote to rows at ~640px and ~960px. No horizontal scrolling at any width down to 320px.

**1.5 Styling Approach — Clean Custom CSS**
*Exception clause:* the default framework is Tailwind, but the source specification supplies vanilla CSS component classes, so use framework-free custom CSS in `style.css` — no Tailwind, no build step — extending the supplied base classes with BEM.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Load via Google Fonts `<link>`: **EB Garamond** (body), **Cormorant Garamond** (display headings), **Courier Prime** (eyebrows, numerals, prices), bound to `--font-base`, `--font-display`, `--font-mono`.
- Icons are **Google Material Symbols (Outlined)** loaded from Google Fonts. **Inline SVGs and local icon files are forbidden.** Size icons with `font-size` and color with `currentColor` inside flex rows.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons** — base `.btn` is flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, minimum touch target 44×44px; all states via classes:
- **Default:** `.btn--primary` (leather brown, `#fefefe` text), `.btn--ghost` (transparent, hairline border), `.btn--danger` (oxblood — visually distinct in both themes).
- **Hover:** brightness/shadow shift, `cursor: pointer`.
- **Focus:** distinct `:focus-visible` ring (2px `--accent-gold` on dark / `--primary` on light, offset 2px).
- **Active:** `transform: scale(0.97)`.
- **Loading (`.is-loading`):** disables interaction and double-clicks, renders a CSS spinner or animated Material Symbol without changing button dimensions; set `aria-busy="true"`.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`, no transform.
- **Success/Error:** temporary feedback classes tinted by `--text-success` / `--text-error` (used by the newsletter submit).

**2.2 Cards**
- **Default:** `.card` — `--bg-secondary`, hairline `--border-default`, `--radius-md`, `--shadow-sm`, padding `--space-6`, flex column.
- **Hover (interactive cards):** `translateY(-2px)` + `--shadow-md`.
- **Focus-within:** gold border highlight when a child link/button is focused.
- **Loading (skeleton):** define a `.skeleton` shimmer keyframe utility for any asynchronously loaded content.
- **Empty state:** define a fallback layout (Material Symbol + guidance text) for any dynamic region.
- **Featured:** `.card--featured` for the middle pricing tier — gold border, `.badge`, `--shadow-md`.

**2.3 Forms & Inputs** — the Final CTA contains a newsletter `.input-group`: flex column wrapping `<label>`, `.input`, and a reserved error-feedback container (`aria-live="polite"`).
- **States:** empty; focused (2px `--primary` outline ring); filled; valid (`--border-success` + `check` icon); invalid (`--border-error`, `--text-error` message + error icon, `aria-invalid="true"`, `aria-describedby`); disabled; read-only if used.
- On submit: button enters loading, simulated async (~900ms), then success (check icon + confirmation in the live region) or error (inline validation message). Prevent double submissions.

**2.4 Modals & Overlays** — any dialog/drawer (e.g., a mobile nav overlay or detail dialog) must implement: opening/open/closing states animated via CSS transitions; a centered flex overlay (`align-items: center`) with dark backdrop + `backdrop-filter: blur(4px)` at `--z-modal`; a Material Symbol `close` button (`aria-label="Close"`); `role="dialog"`, `aria-modal`, keyboard focus trapping, closing via `Esc` and overlay clicks, and focus returned to the trigger. Content-level loading/success/error states where async.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` display type, breakpoints without overflow, `scroll-margin-top` on anchored sections for the sticky header.
- **Smooth animations:** transition all state changes with `var(--transition-normal)`; wrap `scroll-behavior: smooth` in `@media (prefers-reduced-motion: no-preference)`; under `prefers-reduced-motion: reduce`, disable transforms, decorative animation, and shimmer (swap the spinner for text such as "Enrolling…").
- **Accessibility:** AA contrast in both themes — validate light and dark before publishing. Never communicate state by color alone (pair icons + text). Semantic HTML5, correct ARIA (accordion `aria-expanded`/`aria-controls`, toggle `aria-pressed`, `aria-live` for form feedback), logical focus order, full keyboard operability — no mouse-only interactions.
- **Mandatory visual feedback:** every hover, click, toggle, and submission produces a visible change (chevron rotation, button press, glow/lift, live-region message).
- **Destructive actions:** `.btn--danger` in oxblood, distinct in both themes (define it even if unused on this page).

---

## 4. DELIVERABLES & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js`. HTML links Google Fonts, Material Symbols, and `style.css`, and references `script.js` once with `defer`. No inline styles, no inline scripts.
- **Naming:** one convention throughout — BEM (`block__element--modifier`), extending the supplied base classes. Never mix conventions.
- **Copy:** original English copy in the Dark Academia voice; placeholders only where content is genuinely unspecified (e.g., `href="#"` legal links). No lorem ipsum.
- **Definition of done:** complete page rendered in one attempt; both themes toggle and persist; keyboard-only pass; reduced motion respected; 320px viewport clean; zero inline CSS/JS.
