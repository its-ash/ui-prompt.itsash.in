# CODING TASK — Landing Page: "Elegant Photographic Minimalism"

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Produce the complete, production-ready code for this landing page on the first attempt — no stubs, no TODOs, no partially built sections.

**Project Brief:**
- **Theme:** Elegant Photographic Minimalism — a fine-art photography studio/portfolio landing page.
- **Style:** Elegant, Minimalist, Visual (2026+ Visual Art era). Keywords: photography, portfolio, elegant, minimalist, visual, clean, artistic, sophisticated, focused, serene.
- **Design Direction:** Total focus on high-quality imagery; elegant serif typography for headings and sans-serif for body copy; discreet navigation; generous white space; smooth gallery transitions; image zoom micro-interactions. Apply Swiss/minimalist discipline: a strict grid, hairline rules, restrained ornamentation, and a strong typographic hierarchy.
- **Sections (in this order):** Discreet sticky navigation → Hero (with photo gallery grid) → Features (3 cards) → How It Works (3 steps) → Testimonials → Pricing (3 tiers) → FAQ → Final CTA → Footer with secondary links.
- **Copy:** Write ALL user-facing copy in English. Compose realistic, serene, sophisticated studio copy yourself — lorem ipsum is prohibited.

---

## 1. STRICT RULES & ARCHITECTURE

### **1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives exclusively in `style.css`. The `style="..."` attribute is forbidden anywhere in the HTML.
- Target every design property, layout rule, and state via class or ID selectors only.
- Keep HTML semantic and styling-agnostic (`header`, `nav`, `main`, `section`, `figure`, `footer`); changing the look must never require markup edits.

### **1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` and reference them everywhere — no hard-coded hex values in rules:

```css
:root {
  /* Color — Light (default) */
  --primary: #000000;         /* Black — primary buttons, wordmark */
  --secondary: #000080;       /* Navy — links, quiet accents */
  --bg-primary: #fefefe;      /* Page background */
  --bg-secondary: #F5F5DC;    /* Beige — alternating section bands */
  --text-primary: #333333;    /* Dark gray — headings, body */
  --text-secondary: #6b6b6b;  /* Mid gray — captions, meta, footer */
  --text-success: #006400;    /* Dark green */
  --text-error: #A52A2A;      /* Brick brown — errors, danger */
  --border-default: #E0E0E0;  /* Light gray — hairlines, card borders */
  --border-error: #A52A2A;
  --border-success: #006400;

  /* Shape, elevation, motion, space */
  --radius-sm: 2px; --radius-md: 4px; --radius-lg: 8px;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.10);
  --spacing-gap: 1.5rem;
  --transition-fast: 0.2s ease-in-out;
  --transition-normal: all 0.4s ease-in-out;
  --ease-standard: ease-in-out;
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;

  /* Type */
  --font-base: 'Inter', sans-serif;
  --font-heading: 'Lora', serif;
}
```

- **Contrast pairing:** every light background token pairs with a dark text token and vice versa — in every theme. Example: `.btn--primary { background: var(--primary); color: var(--bg-primary); }` so the pairing inverts automatically in dark mode.
- **Near-white rule:** wherever white is needed, use `#fefefe`, never `#ffffff`. *Exception clause: although the source palette lists `#FFFFFF`, this rule overrides it.*
- The source spec's anchors must appear verbatim in spirit: headings use `font-family: 'Lora', serif`; the nav uses `border-bottom: 1px solid var(--border-default)`; global state changes use `transition: var(--transition-normal)` (0.4s ease-in-out); the class names `.gallery-grid`, `.image-overlay`, and `.nav-discreet` must exist.

### **1.3 Mandatory Dark Mode**
- Define dark tokens under both a `.dark` class selector and `@media (prefers-color-scheme: dark)`, e.g.: `--bg-primary: #0f0f0f; --bg-secondary: #1c1b17; --text-primary: #f2f2f2; --text-secondary: #a8a8a8; --border-default: #333333; --primary: #f2f2f2; --secondary: #a9b6e8; --text-success: #7fc98a; --text-error: #e59a9a;` (adjust lightness for WCAG AA while preserving hue). Set `color-scheme` accordingly.
- Background/text variables must switch with zero HTML restructuring. Persist choice in `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle with correct `aria-pressed` and dynamic `aria-label`.
- *Exception clause: the source style spec excluded dark mode; dark mode is nonetheless mandatory under these architecture rules — implement it fully, with light mode as the default presentation.*

### **1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities). Every flex container defaults to `align-items: center` unless an exception is explicitly justified in a code comment (e.g., card rows may use `stretch` for equal heights).
- Mobile-first: rows collapse to columns below ~768px; no horizontal scrolling at any width down to 320px.

### **1.5 Framework: Tailwind CSS**
- Load Tailwind via the Play CDN (`<script src="https://cdn.tailwindcss.com"></script>` — an external reference, permitted; it is not an inline script block). Use Tailwind utilities in markup **for layout only** (flex, items-center, gap, padding, responsive prefixes).
- All visual design — colors, typography, radii, shadows, states — lives in `style.css` as CSS variables and reusable component classes (`.btn`, `.card`, `.nav-discreet`, `.gallery-grid`, `.image-overlay`, `.input-group`). Never encode colors via Tailwind arbitrary values; reference `var(--...)`.

### **1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts — **Lora** (400/500/600 + italic) for all headings via `--font-heading`, **Inter** (400/500) for body via `--font-base`. Include via `<link>` tags.
- Icons: Google Material Symbols (Outlined, light weight). Raw inline SVGs and local icon files are forbidden.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### **2.1 Button (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`)**
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum touch target 44×44px. Primary = black fill / near-white text (inverted in dark); secondary = 1px `var(--border-default)` outline; danger uses `--text-error`/`#A52A2A` and must stay distinct in both themes.
- **Hover:** brightness/shadow shift, `cursor: pointer`. **Focus:** distinct ring via `outline`/`box-shadow` using tokens. **Active:** `transform: scale(0.97)`.
- **Loading:** disables interaction, blocks double-clicks, shows a CSS-animated spinner without changing button dimensions. **Disabled:** `opacity: 0.5`, grayscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback states using `--text-success` / `--text-error`.

### **2.2 Card (`.card`)**
- **Default:** flexible flexbox layout, `--bg-primary` surface, 1px `var(--border-default)` border, `--radius-md`.
- **Hover:** `transform: translateY(-2px)` + `--shadow-md`. **Focus-within:** border highlight when a child link/button is focused.
- **Loading (skeleton):** shimmer keyframes (`.is-skeleton`) applied to gallery/feature images and the lightbox stage while loading — no layout jumps.
- **Empty state:** `.card--empty` pattern with a Material icon (e.g., `photo_library`) and guidance text; apply wherever content could render empty (e.g., failed image loads).

### **2.3 Form & Input (`.input-group`)**
- Structure: flex container wrapping a visible `<label>`, the input, and a dedicated error-feedback element.
- **States:** empty, focused (outline ring), filled, valid (success border + check icon), invalid (error border, error icon, message announced in an `aria-live` region), disabled, read-only.

### **2.4 Modal / Lightbox (`.lightbox`)**
- **States:** opening (fade + scale in), open, loading (skeleton/spinner while the full image loads), error (Material `broken_image` icon + message if the image fails), closing (animated out) — all via CSS transitions using `--transition-normal`.
- **UX:** fixed backdrop (`rgba(0,0,0,0.8)`), centered flex container (`align-items: center; justify-content: center`), `z-index: var(--z-modal)`, `role="dialog"` + `aria-modal="true"`, Material `close` icon button with `aria-label`, focus trapped inside, focus returned to the trigger on close, body scroll locked, closes via `Esc` and overlay click. Include prev/next Material icon buttons with `aria-label`s and arrow-key support for smooth gallery transitions.

---

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid type via `clamp()`, breakpoints without overflow; set image dimensions/aspect-ratio to prevent layout shift.
- **Smooth animations:** every state change transitions with `transition: var(--transition-normal)`; fully disabled under `prefers-reduced-motion: reduce`.
- **Accessibility:** WCAG AA contrast in both light and dark modes; never communicate state by color alone (pair with icons/text); semantic HTML5; correct ARIA roles/labels on the accordion, lightbox, mobile menu, and theme toggle; logical focus order; complete keyboard operability; `aria-live` regions for form feedback and loading states.
- **Mandatory visual feedback:** every click, hover, and submission produces a visible change — image zoom on hover (`transform: scale(1.05)` inside `overflow: hidden` frames), card lifts, link underline reveals, button state shifts.
- **Destructive actions:** `.btn--danger` visually distinct in both themes.

---

## 4. PAGE SECTION REQUIREMENTS

### **4.1 Discreet Navigation (`.nav-discreet`)**
Sticky top bar (~64–72px), `background: var(--bg-primary)`, `border-bottom: 1px solid var(--border-default)`. Flex row, `align-items: center`, `justify-between`: serif wordmark; anchor links (Features, Process, Testimonials, Pricing, FAQ) in small uppercase sans-serif with letter-spacing and a subtle hover underline; theme toggle (Material `dark_mode`/`light_mode`, `aria-pressed`, dynamic `aria-label`); compact "Book a Session" `.btn--primary`. Mobile: hamburger button (`aria-expanded`, `aria-controls`) opens a dropdown panel (`var(--z-dropdown)`) with vertical links; closes on `Esc`, link click, and outside click; focus moves in on open and returns on close. Enable smooth scrolling with `scroll-margin-top` on sections.

### **4.2 Hero + Gallery Grid**
Two-column flex (`align-items: center`), collapsing to a column on mobile. Left: small uppercase overline, large serif `clamp()` headline, supporting paragraph, and a CTA row (primary "View the Gallery" + outlined "Book a Session"). Right: `.gallery-grid` — four photographs arranged 2×2 via flex-wrap, each a `<figure>` acting as a button that opens the lightbox (`aria-label="Open photograph: <title>"`). Each item has an `.image-overlay` (caption in serif italic + sans meta + Material `zoom_in` icon) that fades in on hover/focus while the image scales to 1.05. Gentle fade-in entrance animation, reduced-motion safe.

### **4.3 Features — 3 Cards**
Section header pattern (uppercase overline + serif `h2` + short intro), then three `.card` components in a flex row (documented `stretch` exception for equal heights) → column on mobile. Each card: photograph with zoom micro-interaction, Material icon, serif title, sans description, and a "Learn more" text link with arrow icon (drives `:focus-within`). Suggested services: Fine-Art Portraits, Editorial & Events, Print & Gallery Collections.

### **4.4 How It Works — 3 Steps**
Three steps in a flex row → column, separated by hairline rules. Each step: oversized serif numeral ("01", "02", "03") in `--text-secondary`, step title, description. Content: Book a Session → The Photoshoot → Receive Your Gallery.

### **4.5 Testimonials**
Full-width band on `--bg-secondary`. Three quote cards: large Lora italic quote, attribution (name + role in small sans), optional circular portrait. Cards follow the `.card` spec (hover lift, focus-within).

### **4.6 Pricing — 3 Tiers**
Three `.card` pricing tiers: "Essential", "Signature" (featured), "Collector". Featured tier: distinct border or `--shadow-md`, slight elevation, and a small uppercase "Most Popular" pill. Each tier: serif name, large serif USD price with period, feature list with Material `check` icons, and a CTA button (featured = `.btn--primary`, others = `.btn--secondary`). Clicking a CTA demonstrates loading → success feedback announced via `aria-live`.

### **4.7 FAQ Accordion**
5–6 realistic questions (sessions, delivery timelines, print licensing, rescheduling, travel). Each item: `h3` > button (`aria-expanded`, `aria-controls`) + panel (`role="region"`, `aria-labelledby`, hidden toggle). Material `expand_more` icon rotates 180° on open; height/opacity animates via CSS. Keyboard operable; one panel open at a time.

### **4.8 Final CTA**
Full-width band on `--bg-secondary` (or a full-bleed photo with dark overlay — text must keep AA contrast). Serif headline, short copy, and an email-capture `.input-group`: visible label, email input with all states from 2.3, `.btn--primary` submit. On submit: invalid email → error border + icon + `aria-live` message; valid → button loading (~1s) → success state with a `--text-success` confirmation message in the `aria-live` region. Add a secondary "write to hello@studio.com" mailto link.

### **4.9 Footer with Secondary Links**
`border-top: 1px solid var(--border-default)`. Flex-wrap layout: brand column (serif wordmark, one-line tagline, Material Symbol social icons with `aria-label`s) plus two columns of secondary links ("Explore": Features, Process, Pricing, FAQ; "Studio": About, Journal, Contact, Privacy, Terms). Bottom bar: © 2026 line in `--text-secondary` and a back-to-top link. All links show visible focus rings.

---

## 5. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js`. The HTML contains exactly one project script — `<script src="script.js" defer></script>` — plus external references only (Google Fonts, Material Symbols, Tailwind CDN). No inline `<style>` or `<script>` blocks.
- **script.js scope:** theme toggle with `localStorage` persistence + `prefers-color-scheme` fallback, mobile menu, FAQ accordion, lightbox with focus trap and keyboard navigation, form validation/feedback, skeleton toggles on image load.
- **Naming convention:** one consistent convention — BEM (`.nav-discreet__link`, `.gallery-grid__item`, `.card__title`, `.btn--primary`, `.input-group__error`, `.faq-item__panel`). Tailwind utilities are permitted for layout only and must never duplicate a component class.
- **Imagery:** no assets were supplied, so use `https://picsum.photos/seed/<seed>/<width>/<height>` placeholders with descriptive `alt` text and fixed aspect ratios. All copy must be real, elegant English — lorem ipsum is prohibited.
- **Definition of Done:** all nine sections fully built; both themes pass AA contrast; keyboard-only navigation works end to end; no horizontal scroll at 320px; every interactive element has hover, focus, and active feedback; reduced-motion respected; zero inline styles.
