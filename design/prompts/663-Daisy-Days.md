**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality **"Daisy Days"** landing page — an illustrated, cheerful, pastel, hand-drawn 2020s-modern experience — on the first attempt. Follow every rule below exactly.

**Objective:** Deliver a single-page landing site with these sections in order: **Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.** All user-facing copy must be written in **English** (cheerful, wholesome, on-brand; no lorem ipsum).

---

### **1. STRICT RULES & ARCHITECTURE (MANDATORY)**

**1.1 CSS-First Architecture & Zero Inline CSS**
* Keep all styling strictly inside a dedicated `style.css` file.
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors.
* **Minimal HTML Modifications:** HTML must remain clean, semantic, and agnostic of visual styling so that changing the site's look requires modifying only the CSS file, not the markup.

**1.2 CSS Variables (`var(--...)`) & Theme Tokens**
Store all visual tokens in `:root` (light theme) and override them under a `.dark` class and `@media (prefers-color-scheme: dark)`. Required tokens:

* **Colors:** `--primary: #7ECDC0` (turquoise), `--secondary: #F7C8D4` (soft pink), `--bg-primary: #F5F0E6` (cream), `--bg-secondary: #FEFEFE` (never `#ffffff`), `--text-primary: #2D2D2D`, `--text-secondary: #5F574B`, `--text-success: #1F7A5C`, `--text-error: #C7463F`, `--border-default: #2D2D2D`, `--border-success: #1F7A5C`, `--border-error: #C7463F`.
* **Daisy Days Extras:** `--ink: #2D2D2D`, `--pastel-butter: #FDE68A`, `--pastel-mint: #A8E6CF`, `--pastel-lavender: #D4A5E8`, `--pastel-peach: #FFCBA4`, `--border-ink: 3px solid var(--ink)`, `--shadow-chunky: 6px 6px 0 var(--shadow-color)`.
* **Contrast Pairing:** Every light/pastel fill must pair with `#2D2D2D` ink text; every dark surface must pair with cream `#F5F0E6` text. Pastel-filled buttons and badges keep dark ink text in BOTH themes. Enforce this pairing for every theme.
* **Dark Mode Tokens ("Daisy Night"):** `--bg-primary: #2B2536`, `--bg-secondary: #372F45`, `--text-primary: #F5F0E6`, `--text-secondary: #BFB3C9`, `--ink: #F5F0E6` (chalk-style outlines), `--shadow-color: #14101F`, `--text-success: #7BD8B0`, `--text-error: #F58E88`. Pastel accent tokens stay unchanged.
* **Border Radius & Shadows:** `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 24px`, `--shadow-sm`, `--shadow-md`, plus the signature `--shadow-chunky` (6px solid offset, no blur) used on cards and buttons.
* **Spacing & Transitions:** `--spacing-gap: 1.5rem`, `--transition-fast: 200ms`, `--transition-normal: 300ms`, `--ease-standard`, `--ease-bouncy: cubic-bezier(0.34, 1.56, 0.64, 1)` for playful click feedback.
* **Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 1100`.

**1.3 Mandatory Dark Mode Support**
* **Implementation:** Define all dark tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`/`<body>`; background and text variables must switch seamlessly with no HTML restructuring.
* **Persistence:** Store the user's choice in `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle button (Google Material Symbol `light_mode`/`dark_mode`) with correct `aria-pressed` and `aria-label` states.
* **Exception Clause:** The source style spec listed Dark Mode as "None" — dark mode remains mandatory per this architecture; implement it as a "Daisy Night" variant that preserves the pastel illustrated identity with fully compliant contrast.

**1.4 Flexbox Layout & Mobile-First Alignment**
* Build all layout structures with Flexbox (`display: flex` / Tailwind flex utilities).
* **Default Alignment Rule:** Every flex container must default to `align-items: center` (`items-center`) unless an exception is explicitly justified in a CSS comment (e.g., `.input-group` stacks and stretches; feature/pricing card rows use `stretch` for equal heights).
* **Mobile-Friendly First:** All flex rows (Features, Steps, Pricing, Footer columns, nav) convert to columns on small viewports; prevent horizontal scrolling at every width; decorative absolutely-positioned artwork must be clipped by its `position: relative` parent.

**1.5 Framework Default & Tailwind CSS Integration**
* Use Tailwind CSS (Play CDN or compiled) with custom styles driven by `@layer` / `@apply` directives.
* Tailwind utilities are allowed only for structural layout (`flex`, `items-center`, `gap-*`, `flex-wrap`, breakpoints). All colors, radii, shadows, borders, and fonts must come from the CSS variables — never hardcode hex values in utilities or components.
* Define reusable component classes in `style.css`: `.btn` (with variants), `.card`, `.input-group`, `.section`, `.container`, `.nav`, `.footer`.

**1.6 Typography & Icons (Google Fonts Mandatory)**
* Load **Fredoka One** (display: hero headline, section headings, buttons, prices) and **Quicksand** (body) from Google Fonts via `<link>` with `preconnect` and `display=swap`; bind them to `--font-display` and `--font-base`.
* Use Google Material Symbols for all functional icons (features, check marks, stars, chevrons, close, theme toggle, social). Raw inline SVGs are forbidden for icons.
* **Exception Clause:** Inline SVG is permitted exclusively for decorative hand-drawn daisy/star/rainbow artwork that defines this theme — every such SVG must carry `aria-hidden="true"` and `focusable="false"`, contain no text, and never serve as a functional icon.

---

### **2. COMPONENT DESIGN SPECIFICATIONS**

**2.1 Button Component (`.btn`, BEM variants)**
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` Fredoka One label, `var(--border-ink)`, `border-radius: var(--radius-md)`, `box-shadow: var(--shadow-chunky)`, minimum 44×44px touch target. Variants: `.btn--primary` (turquoise fill, ink text), `.btn--secondary` (pink fill), `.btn--butter`, `.btn--ghost` (transparent, ink border), `.btn--danger`.
* **Hover:** `transform: scale(1.03)` over `var(--transition-fast)` (200ms) with `cursor: pointer`; shadow grows to 8px 8px.
* **Focus:** Distinct `:focus-visible` ring — `outline: 3px solid var(--pastel-lavender); outline-offset: 3px;` visible in both themes.
* **Active/Pressed:** Bouncy chunky press: `transform: translate(3px, 3px) scale(0.97); box-shadow: 3px 3px 0 var(--shadow-color);` using `var(--ease-bouncy)`.
* **Loading (`.is-loading`):** Disables interaction, prevents double-clicks (`aria-busy="true"`), renders a CSS spinner (rotating bordered circle or animated Material Symbol `progress`) without changing button dimensions.
* **Disabled:** `opacity: 0.5`, `filter: grayscale(1)`, `cursor: not-allowed`, no hover transform.
* **Success/Error:** Temporary state classes swapping label to a Material Symbol (`check_circle` / `error`) plus text, colored by `--text-success` / `--text-error`, announced via an `aria-live="polite"` region.

**2.2 Card Component (`.card`, variants)**
* **Default:** Flex column layout, `background: var(--bg-secondary)`, `border: var(--border-ink)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-chunky)`, `padding: var(--spacing-gap)`. Pastel tint variants `.card--butter`, `.card--mint`, `.card--lavender`, `.card--peach` distribute the pastel rainbow across Features, Steps, and Pricing; all pastel cards keep `#2D2D2D` text.
* **Hover:** `transform: translateY(-4px)` (or `scale(1.03)` on icon badges) with shadow growth, 200ms transition.
* **Focus-within:** Border color shifts to `var(--primary)` and shadow tints turquoise when a child link/button receives focus.
* **Loading (Skeleton):** `.card--skeleton` shimmer animation (animated gradient, respects `prefers-reduced-motion`) with fixed `min-height` to prevent layout jumps — apply to testimonials if content loads dynamically.
* **Empty State:** `.card--empty` fallback with a large Google Material Symbol and clear guidance text if content is unavailable.

**2.3 Form & Input Requirements (`.input-group`)**
* **Structure:** Flex column wrapper (explicitly excepted from `align-items: center`; children stretch) containing a `<label>`, the input, and a dedicated error-feedback container.
* **States:** Empty, Focused (3px `var(--primary)` outline ring with offset), Filled, Valid (`--border-success` + `check_circle` icon), Invalid (`--border-error`, error icon, `--text-error` message, `aria-invalid="true"`, `aria-describedby`), Disabled (opacity + not-allowed cursor), Read-only.
* The error container must be an `aria-live="polite"` region. Style inputs with `var(--border-ink)`, `border-radius: var(--radius-md)`, and Quicksand text; height ≥ 44px.

**2.4 Modal / Popup Requirements (if any modal is used, e.g., pricing details or mobile menu)**
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated via CSS transitions (opacity + scale).
* **UX Features:** Centered flex container (`align-items: center; justify-content: center`), ink-tinted backdrop overlay, Material Symbol `close` button (44px target), keyboard focus trapping with restoration on close, close via `Esc` or overlay click, `role="dialog"` + `aria-modal="true"`.

**2.5 Section-Specific Specifications**
* **Global:** Cream background, scattered hand-drawn SVG daisies/stars as `aria-hidden` decorations near section edges, a skip-to-content link, single `<h1>` in the Hero, one `<h2>` per section, `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` landmarks.
* **Hero:** Large fluid Fredoka One headline (`clamp()` sizing), Quicksand subcopy, dual CTAs (`.btn--primary` + `.btn--ghost`), hand-drawn SVG rainbow/daisy cluster decorations that never overlap or obscure text in any viewport or theme.
* **Features:** Three `.card` components (butter / mint / lavender tints) in a wrapping flex row → column on mobile; each card has a pastel circular icon badge (Google Material Symbol), an `<h3>` in Fredoka One, and a short Quicksand description.
* **How It Works:** Three steps in a flex row → column; numbered Fredoka One badges ("1", "2", "3") in pastel circles with ink borders; a dashed ink connector line between steps (CSS pseudo-element) that rotates vertical on mobile.
* **Testimonials:** Three quote `.card`s with pastel avatar circles containing initials (ink text), quote, name + role, and a 5-star rating built from Material Symbols `star` (butter color with ink outline effect, visible on both themes).
* **Pricing:** Three tier cards; the middle card uses `.card--featured` (butter fill, "Most Popular" badge, slight `translateY(-8px)` lift on desktop), Fredoka One prices, feature lists with Material Symbol `check` per item, one `.btn` per tier (featured tier gets `.btn--primary`, others `.btn--ghost`).
* **FAQ:** Accordion built from semantic `<details>`/`<summary>` (or `button` + `aria-expanded`/`aria-controls`), Material Symbol `expand_more` chevron rotating 180° on open, CSS-animated expansion, fully keyboard operable.
* **Final CTA:** Full-width pastel rainbow gradient band (soft, low-contrast, ink text preserved), big Fredoka One headline, newsletter `.input-group` + `.btn--primary` with success/error feedback states after submission.
* **Footer:** `var(--bg-secondary)` or ink-bordered band; flex row → stacked columns; secondary links (About, Help, Privacy, Terms, Contact), Material Symbol social icons, copyright line; all links show `:focus-visible` rings.

---

### **3. CORE UX & MICRO-INTERACTION RULES**

* **Responsive by Default:** Mobile-first with standard breakpoints (640/768/1024px), fluid `clamp()` typography, no horizontal overflow anywhere.
* **Smooth Animations:** CSS transitions on all state changes using `var(--transition-fast)` / `var(--transition-normal)`; playful hovers (`scale(1.03)`, 200ms) and bouncy clicks (`var(--ease-bouncy)`); fully respect `prefers-reduced-motion` by disabling transforms, shimmer, and bounce.
* **Accessibility (a11y):** AA contrast in Light ("Daisy Days") and Dark ("Daisy Night") modes; never rely on color alone — pair every success/error with an icon and text; semantic HTML5, correct ARIA roles/labels on the theme toggle, accordion, mobile menu (`aria-expanded`, `aria-controls`), and modal; logical DOM/focus order; full keyboard operability for nav, accordion, toggle, and forms; `aria-live` regions for form errors and feedback messages.
* **Mandatory Visual Feedback:** Every click, hover, focus, and submission must trigger a visible state change.
* **Destructive Actions:** Define `.btn--danger` (error-red fill, cream text, ink border) and ensure it is visually distinct in both light and dark themes, even if unused in this landing page.

---

### **4. DELIVERABLE & OUTPUT FORMAT**

* **File Structure:** Separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single `<script src="script.js" defer></script>` entry point. No inline styles anywhere.
* **Naming Convention:** BEM (`block__element--modifier`) consistently across all custom classes — never mix conventions. Tailwind utilities appear only for structural layout and must never carry hardcoded colors.
* **Copy:** Write original, cheerful, wholesome English copy that fits the Daisy Days brand (hero headline, feature titles/descriptions, step titles, realistic testimonial names and quotes, tier names/prices/features, FAQ questions/answers, CTA text). Lorem ipsum is prohibited. Placeholders are allowed only for genuinely unspecified content.
* **Theme Toggle & JS Scope:** `script.js` handles only: theme toggle with `localStorage` persistence, mobile menu open/close, FAQ interactions (if not native `<details>`), modal behavior (if used), and form state feedback. Keep all visual styling in CSS.
* **Language:** All copy, comments, class names, variable names, and file names in English/ASCII.
