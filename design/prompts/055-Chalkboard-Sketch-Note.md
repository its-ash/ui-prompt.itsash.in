# System Prompt: Build a "Chalkboard Sketch-Note" Landing Page

You are an Expert Frontend Engineer. Build a complete, production-ready Landing Page in a single attempt. All user-facing copy must be written in **English**.

**Theme:** Chalkboard Sketch-Note — Educational, Approachable, Structured (Classic Classroom era).
**Visual Direction:** Chalkboard landing page, blackboard background, hand-drawn chalk style, white sketch on dark, educational aesthetic, doodle icons, ribbon banners, schematic arrows, matte slate surface, grainy chalk dust.

**Sections (in order):** Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
* All styling must live in a dedicated `style.css` file. **The `style="..."` attribute is forbidden anywhere in the HTML.**
* Target all design properties, layout rules, and states via class or ID selectors only.
* Keep HTML semantic and clean (header, main, section, footer, nav, article) so restyling requires only CSS changes.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root`:
* **Colors:** `--primary: #F4D03F` (chalk yellow accent), `--secondary: #FFCC80` (pastel), `--bg-primary: #263238` (slate board), `--bg-secondary: #37474F` (raised panel), `--text-primary: #F5F5F5` (chalk white), `--text-secondary: #B0BEC5`, `--text-success: #A5D6A7`, `--text-error: #EF9A9A`, `--border-default: #546E7A` (eraser grey), `--border-error`, `--border-success`.
* **Contrast Pairing:** Dark backgrounds pair with light text tokens; any light/pastel surface must pair with dark text (`#263238`). Enforce this everywhere.
* **Radius & Shadows:** `--radius-sm: 2px`, `--radius-md: 6px`, `--radius-lg: 12px`, `--shadow-sm`, `--shadow-md`.
* **Spacing & Transitions:** `--spacing-gap`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Stacking:** `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
* The theme is dark-first (`#263238` slate board), but a **light mode must still be defined** (light "paper/notebook" variant: near-white `#fefefe` paper background, dark `#263238` chalk-ink text, accent `#F4D03F` preserved with darkened contrast pairing).
* Implement tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector; switching must require no HTML restructuring.
* Persist theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible theme toggle with correct `aria-pressed` / `aria-label` states.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
* Mobile-first: all rows convert to columns on small viewports. No horizontal scrolling at any breakpoint.

**1.5 Framework Default**
* Use Tailwind CSS (CDN or build) or clean custom CSS with `@layer`/`@apply`; all utilities must map back to the CSS variables above and generic reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Kalam** (Google Fonts) as the hand-drawn chalk base font, bound to `--font-base`. Use a second Google Font (e.g., Patrick Hand or Caveat) for headings if needed for hierarchy.
* Use **Google Material Symbols** for all icons. **Raw inline SVGs and local icon files are forbidden.**
* Recreate the chalk texture via CSS only: `background-color: #263238` with the grain overlay `background-image: url('https://www.transparenttextures.com/patterns/black-scales.png')` on the board surface, plus a wood-frame border `border: 10px solid #5D4037` on the main board container.
* Hand-drawn feel via CSS only: dashed/sketchy borders (`border: 2px dashed var(--border-default)`), slightly rotated cards (`transform: rotate(-0.5deg)` alternating), underline "marker" highlights on headings using `background: linear-gradient(...)` pastel strokes.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` — min touch target 44×44px. Primary CTA styled as a hand-drawn chalk-outline button; secondary CTA as filled pastel.
* **Hover:** brightness/shadow shift, `cursor: pointer`.
* **Focus:** distinct chalk-style focus ring (`outline` or `box-shadow` using `--primary`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)`.
* **Loading:** disables interaction, prevents double-clicks, shows an animated Google Icon spinner without distorting button dimensions.
* **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.
* **Danger:** `.btn-danger` visually distinct in both themes.

**2.2 Cards (Features, Pricing, Testimonials)**
* **Default:** Flexbox layout, `--bg-secondary` panel on the slate board, dashed chalk borders, subtle grain.
* **Hover:** `transform: translateY(-2px)` with shadow shift.
* **Focus-within:** highlight chalk borders when a child link/button gains focus.
* **Loading (Skeleton):** shimmer animation defined in CSS to prevent layout jumps.
* **Empty State:** fallback layout with a Google Icon and guidance text.
* Pricing tier cards: highlight the recommended tier with a hand-drawn ribbon banner ("Most Popular") and `--primary` accent border.

**2.3 Forms & Inputs (Final CTA / newsletter signup, FAQ search if any)**
* States: Empty, Focused (chalk outline ring), Filled, Valid (success border + icon), Invalid (error border, error text, error icon), Disabled, Read-only.
* Structure: flex container wrapping a label, input styled as a hand-drawn chalk underline field, and a dedicated error feedback container.

**2.4 FAQ Accordion / Modal behavior**
* FAQ items: keyboard-operable (`button` triggers, `aria-expanded`, `aria-controls`), animated open/close via CSS transitions.
* Any modal/popup: opening/open/loading/success/closing states animated via CSS; centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via `Esc` or overlay click.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by default:** fluid sizing, no horizontal overflow at any viewport.
* **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion`.
* **Accessibility:** sufficient contrast in both modes; never rely on color alone to communicate state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading).
* **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
* **Destructive actions:** visually distinct in both themes.

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **Files:** `index.html`, `style.css`, `script.js` — separate files. No inline `<script>` blocks beyond a single deferred entry-point reference.
* **Naming:** one consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions.
* **Copy:** Write all real, themed, English copy for every section (hero headline, feature descriptions, step titles, testimonial quotes with names, pricing tier details, FAQ questions/answers, CTA text, footer links). No lorem ipsum.
* **Icons:** Google Material Symbols only — no inline SVGs, no local icon files.

Produce the complete final code now, on the first attempt.
