# System Prompt: Build "Cyber Core" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready **Cyber Core** landing page on the first attempt. Follow every rule below strictly.

## 1. Architecture & File Structure

**Deliverables:** Separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference to `script.js`.

**1.1 CSS-First & Zero Inline CSS**
- **No Inline CSS:** The `style="..."` attribute is forbidden in HTML.
- **Class/ID Selectors Only:** All styling, layout, and state rules must live in `style.css` via class or ID selectors.
- **Minimal HTML Modifications:** HTML stays semantic and styling-agnostic; changing the theme must only require editing CSS.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and a `.dark` theme class):

- **Colors:** `--primary: #00FFFF` (Neon Cyan), `--secondary: #00FF41` (Matrix Green), `--accent-pink: #FF00FF`, `--accent-blue: #0066FF`, `--bg-primary: #0A0A0A` (Deep Black), `--bg-secondary: #1A1A2E` (Dark Grey), `--text-primary: #00FFFF`, `--text-secondary: #C0C0C0` (Chrome Silver), `--text-success: #00FF41`, `--text-error: #FF3333` (Warning Red), `--border-default: rgba(0,255,255,0.4)`, `--border-error: #FF3333`, `--border-success: #00FF41`.
- **Contrast Pairing:** Every dark background token pairs with a light/neon text token in both themes. If a light mode is defined, its light background must pair with dark text — never pure white; use `#fefefe` where near-white is required.
- **Radius/Shadow:** `--radius-sm: 2px`, `--radius-md: 4px`, `--radius-lg: 8px`, `--shadow-sm`, `--shadow-md` (heavy drop shadows: `0 8px 24px rgba(0,0,0,0.8)`).
- **Spacing/Transitions:** `--spacing-gap: 1rem`, `--transition-fast: 150ms`, `--transition-normal: 300ms`, `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`.
- **Stacking:** `--z-dropdown: 1000`, `--z-modal: 2000`, `--z-toast: 3000`.

**1.3 Mandatory Dark Mode**
- Dark mode is the **default** theme for this design. Also define a light/partial theme under `@media (prefers-color-scheme: light)` and a `.light` class toggle.
- Provide a visible theme toggle button in the header with correct `aria-pressed` and `aria-label` states.
- Persist user choice via `localStorage`; fall back to `prefers-color-scheme` on first visit.
- Theme switching must only swap CSS variables — no HTML restructuring.

**1.4 Flexbox Layout & Mobile-First**
- Build all layout structures with Flexbox (`display: flex`).
- **Every flex container defaults to `align-items: center`** unless an explicitly justified exception exists (document any exception in a CSS comment).
- All layouts must be mobile-responsive out of the box: multi-column rows (features, pricing, steps) collapse to a single column on small viewports. No horizontal scrolling at any width.

**1.5 Framework**
- Use Tailwind CSS via CDN **or** clean custom CSS driven by Tailwind's `@layer`/`@apply` directives. All utility classes must map to CSS variables or reusable generic classes (`.btn`, `.card`, `.window-frame`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** Load `Share Tech Mono` (and a display tech font such as `Orbitron` for headings) via Google Fonts `<link>`; bind to `--font-base`.
- **Icons:** Use Google Material Symbols only. **Raw inline SVGs and local icon files are forbidden.**

## 2. Cyber Core Visual Effects (CSS-Only)

Implement in `style.css`:
- **Neon glow borders:** `border: 1px solid var(--primary); box-shadow: 0 0 15px rgba(0,255,255,0.5);`
- **Neon text glow:** `text-shadow: 0 0 10px rgba(0,255,255,0.5)` on headings and key copy.
- **Circuit board background:** Pure-CSS repeating linear/radial gradient pattern on section backgrounds.
- **Metallic gradient text:** `background: linear-gradient(...chrome silver...); -webkit-background-clip: text; color: transparent;` on hero headline.
- **OS-style window frames:** Sections/cards styled as OS windows — a title bar (with three dot "window controls" as pure CSS circles and a Google Material Symbol), a content area with inset border, and heavy drop shadows.
- **Scanline overlay:** A fixed pseudo-element (`body::after`) with a repeating horizontal line gradient at low opacity, `pointer-events: none`.
- **Glitch animation:** On hover of headings/buttons, a CSS keyframe glitch (RGB-split via `text-shadow` offsets in cyan/pink, 0.3s duration), respecting `prefers-reduced-motion`.
- **Glitch exception clause:** If a glitch effect cannot be achieved purely with CSS pseudo-elements on existing markup, use a CSS-only alternative (clip-path animation) — never add extra DOM nodes for it.

## 3. Sections to Build

1. **Header/Nav:** Sticky, logo (text-based, metallic gradient), nav links, theme toggle, primary CTA button.
2. **Hero:** Full-viewport OS-style window frame containing the metallic gradient headline with neon glow, subheading, dual CTAs, and a circuit-pattern background.
3. **Features (3 cards):** Grid of 3 OS-window cards, each with a Google Material Symbol icon, title, and description.
4. **How It Works (3 steps):** Numbered steps connected visually (CSS connector lines), each with icon + copy.
5. **Testimonials:** At least 2 OS-window cards with quote, name, and role.
6. **Pricing (3 tiers):** Middle tier visually highlighted (neon glow border). Each tier: name, price, feature list (check icons), CTA button.
7. **FAQ:** `<details>`/`<summary>` accordion styled as OS windows; animated open/close via CSS.
8. **Final CTA:** Full-width section with glitch-on-hover headline and a large primary button.
9. **Footer:** Logo, secondary link groups, social icons (Google Material Symbols), copyright.

## 4. Component State Specifications (All via CSS Classes)

**Buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`):**
- Default: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` min touch target 44x44px.
- Hover: brightness shift + intensified neon glow, `cursor: pointer`.
- Focus: distinct focus ring (`outline` with `--primary`), keyboard navigable.
- Active: `transform: scale(0.97)`.
- Loading: disabled interactions, CSS spinner, no dimensional shift.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- `.btn-danger` (destructive tier actions): Warning Red styling, distinct in both themes.

**Cards:**
- Default: `--bg-secondary` background, neon border, heavy shadow.
- Hover: `transform: translateY(-2px)` + shadow/glow shift.
- `:focus-within`: highlighted neon border when a child link/button is focused.

**Forms (FAQ contact / newsletter if included):**
- Flex container wrapping label, input, and error feedback container.
- States: empty, focused (outline ring), filled, valid (green border + icon), invalid (red border, error text, error icon), disabled, read-only.
- Errors announced via `aria-live="polite"` regions.

**Modal/Popup (OS-style "system dialog" for CTA confirmation):**
- States: opening, open, loading, success/error, closing — all CSS-transitioned.
- Centered flex container, backdrop overlay, Google Material Symbol close button, focus trapping, closes via `Esc` and overlay click.

## 5. Core UX & Accessibility Rules

- **Responsive by default:** fluid sizing, no horizontal overflow at any breakpoint.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; all animations respect `prefers-reduced-motion: reduce`.
- **A11y:** Sufficient contrast in both themes. Never rely on color alone — pair every state color with an icon or text. Semantic HTML5 elements (`header`, `nav`, `main`, `section`, `footer`), correct ARIA roles/labels on custom widgets (toggle, accordion, modal), logical focus order, full keyboard operability.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Dynamic feedback** (form submits, theme toggle, modal) announced via `aria-live` regions.

## 6. Naming & Copy

- **Naming convention:** BEM (`block__element--modifier`) throughout — never mix conventions.
- **Copy:** Write all user-facing copy in **English**, tech/gaming flavored (e.g., "Initialize", "System Online", "Deploy Now"). No lorem ipsum — write real, on-theme copy for every section.

## 7. Output

Generate the complete `index.html`, `style.css`, and `script.js` immediately, in that order, each in a labeled code block. Do not ask clarifying questions. Do not use inline styles, inline SVGs, or non-Google fonts.
