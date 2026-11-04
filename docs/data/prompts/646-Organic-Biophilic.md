**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Landing Page** in a single attempt. Follow every rule below exactly. Anything not explicitly permitted is forbidden.

**Project:** "Organic Biophilic" Landing Page — a nature-inspired, sustainable, calming marketing site (2020s Sustainable aesthetic) for a fictional eco-wellness/plant-care brand (invent one cohesive brand name, logo wordmark, and voice). Full **Light + Dark** themes required.

**Required Sections (in this exact order):**
1. Sticky Header — brand logo, anchor nav links, theme toggle, primary CTA, accessible mobile menu
2. Hero — eyebrow badge, headline, subcopy, dual CTAs, organic blob visual composition
3. Features — exactly **3 cards**
4. How It Works — exactly **3 numbered steps**
5. Testimonials — 3 testimonial cards
6. Pricing — 3 tiers (middle tier featured)
7. FAQ — accessible accordion (minimum 5 items)
8. Final CTA — banner with newsletter email form
9. Footer — secondary link columns, social icons, copyright/legal line

---

## 1. STRICT RULES & ARCHITECTURE

### **1.1 CSS-First Architecture & Zero Inline CSS**
* **No Inline CSS:** The `style="..."` attribute is forbidden anywhere in the HTML.
* **Class/ID Selectors Only:** All design properties, layout rules, and states must be targeted via class or ID selectors in `style.css`.
* **Minimal HTML Modifications:** HTML must remain semantic and visually agnostic — changing the site's look must only require editing `style.css`, never the markup.
* **No Inline Event Handlers:** `onclick="..."` and similar attributes are forbidden; all JS behavior uses `addEventListener` in `script.js`.

### **1.2 CSS Variables & Theme Tokens**
All visual tokens must live in `:root` (light) and `.dark` (dark), using these names and values:

* **Light Mode:** `--primary: #228B22` (Forest Green), `--secondary: #8B4513` (Earth Brown), `--accent: #87CEEB` (Sky Blue), `--bg-primary: #F5F5DC` (Beige — never pure white), `--bg-secondary: #EDE8D3`, `--text-primary: #22301D`, `--text-secondary: #5A6650`, `--text-success: #1F6B24`, `--text-error: #A63D2F`, `--border-default: #D9D3BD`, `--border-success: #1F6B24`, `--border-error: #A63D2F`, `--on-primary: #FEFEFE`.
* **Dark Mode:** `--primary: #7FC97F` (light leaf green), `--secondary: #C89B7B` (lightened earth), `--accent: #87CEEB`, `--bg-primary: #10190F` (deep soil), `--bg-secondary: #1A2919`, `--text-primary: #F1EEDC`, `--text-secondary: #B7C2A5`, `--text-success: #8FE396`, `--text-error: #F2A08E`, `--border-default: #33422F`, `--on-primary: #14261A`.
* **Contrast Pairing (mandatory in every theme):** light background tokens pair with dark text tokens; dark background tokens pair with light text tokens. Button text always uses `var(--on-primary)` so pairing flips automatically between themes.
* **AA Contrast Fix:** `#228B22` with small white text is ~4.4:1 — for normal-size white text on green fills, darken fills to `#1E7A1E` (expose as `--primary-strong`); `#87CEEB` may only carry dark text. Never hardcode hex values outside `:root`/`.dark`.
* **Radius & Shadows:** `--radius-sm: 12px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--shadow-sm` and `--shadow-md` as soft, green-tinted natural shadows (e.g., `0 8px 24px rgba(34,139,34,0.12)` in light, deeper in dark).
* **Spacing & Transitions:** `--spacing-gap: 1.5rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
* **Elevation/Stacking:** `--z-dropdown: 100`, `--z-modal: 200`, `--z-toast: 300` — layered components must never conflict.

### **1.3 Mandatory Dark Mode Support**
* **Implementation:** Define dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class on `<html>`/`<body>` so system-preference users get a correct first paint before JS runs.
* **Theme Switching:** All backgrounds/text/controls must swap via CSS variables only — zero HTML restructuring.
* **Persistence:** Store user choice in `localStorage` (e.g., key `biophilic-theme`), falling back to `prefers-color-scheme` on first visit; apply the stored class as the first action in `script.js`.
* **Toggle Control:** A visible sun/moon toggle (Google Material Symbols) in the header with correct `aria-pressed` and `aria-label` states that update on toggle.

### **1.4 Flexbox Layout & Mobile-First Alignment**
* **Default Alignment Rule:** Every flex container defaults to `align-items: center` unless a specific, CSS-comment-justified exception exists (e.g., stretched card content columns).
* **Mobile-Friendly First:** All multi-column rows (hero, features, steps, pricing, footer) stack into single columns below `768px`; use fluid `clamp()` sizing; horizontal scrolling is prohibited (no fixed widths exceeding viewport).

### **1.5 Framework Default**
* Use **Tailwind CSS (Play CDN)** or an equivalently clean, token-driven custom stylesheet — pick one and stay consistent. All repeated patterns must live in reusable generic classes (`.btn`, `.card`, `.input-group`, `.faq-item`), with all colors/radii/shadows referencing the CSS variables from 1.2.

### **1.6 Typography & Icons (Google Fonts Mandatory)**
* **Text:** Load Google Fonts via `<link>`: **Quicksand** (headings, 500–700) and **Inter** (body); bind to `--font-base` and `--font-heading`. Body text ≥16px; fluid heading sizes via `clamp()`.
* **Icons:** Google **Material Symbols (Rounded variant)** exclusively — no raw inline SVG icons, no local icon files.
* **Sole exception:** decorative organic blob/background shapes may be inline SVG only as non-interactive, `aria-hidden="true"`, `focusable="false"` decoration — CSS `border-radius` blob technique (e.g., `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`) is preferred; icons remain exclusively Material Symbols.
* **Textures:** Subtle natural texture overlays (paper/stone) via CSS-only layered radial/repeating gradients; no external image assets of any kind.

---

## 2. COMPONENT DESIGN SPECIFICATIONS

### **2.1 Button Component**
Style every state via classes on `.btn` (variants: `.btn--primary`, `.btn--secondary`, `.btn--ghost`):
* **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px touch target, `border-radius: var(--radius-md)`.
* **Hover:** Brightness/shadow shift with `cursor: pointer`.
* **Focus:** Distinct visible ring (`box-shadow` using `--primary`) for keyboard navigation.
* **Active/Pressed:** `transform: scale(0.97)` click feedback.
* **Loading (`.btn--loading`):** Disables interaction, blocks double-clicks, shows a pure-CSS spinner that does not change button dimensions.
* **Disabled (`.btn--disabled` / `disabled`):** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
* **Success/Error:** Temporary feedback classes driven by `--text-success` / `--text-error` (used on form submission).

### **2.2 Card Component**
Applies to Features, How It Works, Testimonials, and Pricing cards:
* **Default:** Flexbox layout, `background: var(--bg-secondary)`, `border: 1px solid var(--border-default)`, `border-radius: var(--radius-lg)`, `box-shadow: var(--shadow-sm)`.
* **Hover:** Interactive cards elevate — `transform: translateY(-2px)` + `var(--shadow-md)`.
* **Focus-within:** Card border highlights when a child link/button receives focus.
* **Loading (Skeleton):** Define a `.card--skeleton` shimmer animation in CSS to prevent layout jumps.
* **Empty State:** Define a fallback pattern — Google Icon + short guidance text.

### **2.3 Form & Input (Final CTA newsletter form)**
* **Structure:** `.input-group` flex container wrapping a `<label>`, `<input type="email">`, and a dedicated error feedback container (`role="alert"` / `aria-live="polite"`).
* **States (all as CSS classes):** Empty, Focused (outline ring via `--primary`), Filled, Valid (success border + Material check icon), Invalid (error border + `--text-error` message + error icon — never color alone), Disabled, Read-only.
* **Behavior:** JS validates the email on submit, announces errors via the live region, shows `.btn--loading` on the submit button, then a success state and inline confirmation message.

### **2.4 Modal / Popup (Featured plan CTA)**
* **Trigger:** The featured pricing tier's CTA opens an accessible modal (plan name, price summary, confirm button with loading → success state); all other CTAs smooth-scroll to their targets.
* **States:** Opening, Open, Loading, Success/Error, Closing — all animated with `var(--transition-normal)`.
* **UX:** Centered flex container (`align-items: center`), backdrop overlay using `--z-modal`, Google Material Symbols close button, `role="dialog"` + `aria-modal="true"` + `aria-labelledby`, keyboard focus trap, close via `Esc` and overlay click, focus returns to the trigger.

### **2.5 Page Section Requirements**
* **Header:** Sticky, translucent backdrop-filter surface; anchor links with CSS `scroll-behavior: smooth` and `scroll-padding-top` for the sticky offset; mobile hamburger button toggles the nav with `aria-expanded`, animated open/close, and closes on link click or `Esc`.
* **Hero:** Two-column flex (stacks on mobile); eyebrow badge with leaf icon; H1/subcopy; primary CTA + ghost secondary CTA ("See how it works" → `#how`); decorative layered organic blobs (CSS gradients) marked `aria-hidden`.
* **Features:** 3 flex-wrapped cards, each with a Material Symbol icon inside a tinted blob-shaped container, title, and copy.
* **How It Works:** 3 numbered steps with organic circular number badges and a connecting curved/dashed CSS line (horizontal desktop, vertical mobile).
* **Testimonials:** 3 cards with quote, Material Symbols star rating + visually hidden text ("Rated 5 out of 5"), gradient initial-circle avatar (no images), name, and role.
* **Pricing:** 3 tiers; featured middle tier is elevated with `--border-success` ring, "Most Popular" text badge (never color alone), and its CTA per 2.4; each tier lists features with check icons.
* **FAQ:** Accordion of native `<button>` headers + panels with `aria-expanded`/`aria-controls`, CSS-animated open/close, full keyboard support.
* **Footer:** Multi-column flex (stacks on mobile): brand blurb, secondary link columns, Material Symbol social icon buttons with `aria-label`, and a copyright/legal line.

---

## 3. CORE UX & MICRO-INTERACTION RULES

* **Responsive by Default:** Breakpoints at ~480/768/1024px; fluid sizing; zero horizontal overflow anywhere.
* **Smooth Animations:** `transition: var(--transition-normal)` on all state changes; fully respect `prefers-reduced-motion` (disable transforms, parallax blobs, and smooth scrolling).
* **Accessibility (a11y):** WCAG AA contrast in both Light and Dark modes; never rely on color alone to communicate state; semantic HTML5 landmarks (`header`, `nav`, `main`, `section[aria-labelledby]`, `footer`); logical DOM/focus order; a visible skip-to-content link; full keyboard operability for nav, toggle, accordion, and modal; `aria-live` regions for form errors, loading, and success feedback.
* **Mandatory Visual Feedback:** Every click, hover, focus, and submission triggers a visible state change.
* **Destructive/Distinct Actions:** Any danger-styled control must use a `.btn-danger` class that is visually distinct in both themes (none expected on this page, but define it).

---

## 4. DELIVERABLE & OUTPUT FORMAT

* **File Structure:** Exactly three files — `index.html`, `style.css`, `script.js`. One single `<script src="script.js" defer></script>` reference; no other script blocks, no inline styles.
* **Naming Convention:** BEM throughout (`.card`, `.card--featured`, `.card__title`, `.btn__spinner`) — never mix conventions.
* **Copy:** All user-facing copy in **English** — purposeful, on-theme marketing copy for the invented biophilic brand; lorem ipsum is prohibited as final content. Placeholder `href="#"` destinations are acceptable only for footer/social links.
* **Assets:** No external images or icon files; all visuals are CSS gradients, blobs, and Google Material Symbols.
* **Definition of Done:** All 9 sections present and styled, both themes fully functional with a persisting toggle, all component states (2.1–2.4) defined and working, and the page fully keyboard-navigable — complete on the first attempt.
