# System Prompt: Build "Portfolio Dev Full-Stack" Landing Page (Dark Tech & Cyber Theme)

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready Landing Page on the first attempt. Follow every rule below without exception.

**Theme:** Portfolio Dev Full-Stack — Minimal, Dark, Professional, 2020s Developer aesthetic.
**Keywords:** developer portfolio, full-stack, projects gallery, clean layout, minimal, dark and cyan, code, tech stack, personal brand.
**Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling lives in `style.css`. The `style="..."` attribute is **forbidden** in HTML.
* Target all design properties, layout rules, and states via class or ID selectors only.
* Keep HTML semantic and styling-agnostic: changing the look must require editing only the CSS file.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:

* **Colors:** `--primary: #00BCD4` (cyan accent), `--secondary`, `--bg-primary: #1A1A1A`, `--bg-secondary: #000000`, `--text-primary: #FFFFFF`, `--text-secondary: #E0E0E0`, `--text-success`, `--text-error`, `--border-default: #333333`, `--border-error`, `--border-success`.
* **Radius/Shadows:** `--radius-sm: 4px`, `--radius-md: 8px`, `--radius-lg: 16px`, `--shadow-sm`, `--shadow-md: 0 2px 10px rgba(0,0,0,0.3)`.
* **Spacing/Transitions:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Dark Mode**
* This theme is **dark-first**: `#1A1A1A` background with `#FFFFFF` text is the default token set.
* Additionally define a light-mode token set under `@media (prefers-color-scheme: light)` and a `.light` class override, using `#fefefe` (never `#ffffff`) as the light background paired with dark text (`#333333`). Enforce contrast pairing in both themes.
* Provide a visible theme toggle button with correct `aria-pressed` and `aria-label` states; persist the choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.

**1.4 Flexbox Layout & Mobile-First**
* Build all layout structures with Flexbox (and CSS Grid for the projects/features/testimonials galleries).
* Every flex container defaults to `align-items: center` unless an explicitly justified exception is documented in a CSS comment.
* Desktop uses a two-column layout (bio/projects); all rows collapse to a single column below `768px`. No horizontal scrolling at any viewport width.

**1.5 Framework**
* Use plain CSS with a fixed utility/class set (`.btn`, `.card`, `.badge`, `.section`, `.container`). One consistent naming convention (BEM, e.g. `.hero__title`, `.pricing__card--featured`) across the entire deliverable — never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **JetBrains Mono** (headings/code accents) and **Inter** (body) from Google Fonts via `<link>`; bind to `--font-base` and `--font-mono`.
* Use **Google Material Symbols** for all icons. Raw inline SVGs and local icon files are **forbidden**.

---

## 2. COMPONENT SPECIFICATIONS

**2.1 Buttons**
* Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44x44px touch target.
* Hover: brightness/shadow shift, `cursor: pointer`. Focus: distinct focus ring via `outline`/`box-shadow` using `--primary`. Active: `transform: scale(0.97)`.
* Loading: disabled interaction, CSS spinner (Google Icon animation), no dimension distortion. Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* Primary CTA uses `--primary` (cyan) on dark background; `.btn-danger` (Final CTA destructive action, if any) must be visually distinct in both themes.

**2.2 Cards (Features, Pricing, Testimonials)**
* Default: Flexbox layout, `--bg-secondary`, `1px solid var(--border-default)`, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-md)`.
* Hover: `transform: translateY(-2px)` + shadow shift. `:focus-within` highlights the card border with `--primary`.
* Tech stack badges: bordered pill badges (`1px solid var(--border-default)`, JetBrains Mono, cyan text) — no background fill.
* Hover on links/cards: **animated underline** (pseudo-element scaling from 0 to 100% width) plus the soft scale.
* Skeleton shimmer styles defined in CSS for any async content.

**2.3 FAQ (Accordion)**
* Each FAQ item: `<button>` trigger with `aria-expanded`, collapsible answer panel animated via CSS `max-height`/grid transitions. Full keyboard operable. Never color-only state communication (icon rotates + border highlight).

**2.4 Forms & Dynamic Feedback**
* Final CTA email capture (if included): flex input group with label, input, and dedicated error container. States: empty, focused (cyan ring), valid (success border), invalid (`--border-error`, red text, error icon), disabled.
* All dynamic feedback (form errors, theme toggle confirmation, submission status) announced via an `aria-live="polite"` region.

---

## 3. CORE UX & MICRO-INTERACTIONS

* **Responsive by default:** fluid `clamp()` typography, breakpoints at 480/768/1024px, zero horizontal overflow.
* **Animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` (disable transforms/shimmer).
* **Accessibility:** WCAG-compliant contrast in dark and light themes (cyan `#00BCD4` on `#1A1A1A` passes; verify all pairs). Semantic HTML5 (`header`, `main`, `section`, `nav`, `footer`), logical focus order, skip-to-content link, ARIA labels on the FAQ accordion and theme toggle.
* **Visual feedback:** every click, hover, and submission triggers a visible state change.
* **Pricing:** middle tier marked "Most Popular" with cyan border and slight elevation — communicated by text label AND border, never color alone.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` (theme toggle, FAQ accordion, form validation only). No inline `<script>` beyond one deferred entry-point reference. No inline CSS.
* **Copy:** All user-facing copy in **English**. Write realistic, professional developer-portfolio copy (real project names, tech stacks like React/Node/PostgreSQL, testimonial names/roles, pricing tiers with features). No lorem ipsum.
* **Footer:** secondary links (Projects, Blog, GitHub, LinkedIn, Contact) plus copyright.
* **Hero:** two-column desktop layout — left: name, role ("Full-Stack Developer"), bio, primary + secondary CTA; right: code-block-styled card or terminal window mock with syntax-highlight-colored spans using theme tokens.

Build the complete landing page now, in one pass, following every rule above.
