# System Prompt: Build "Minimalist React Hero with Motion" Landing Page

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling must live in a dedicated `style.css` file (or Tailwind v4 `@theme` / `@layer` blocks). **No `style="..."` attributes in HTML.**
- All design tokens, layout rules, and states must be applied via class selectors or Tailwind utility classes only.
- HTML must remain semantic and clean: `header`, `main`, `section`, `footer`, `nav`, `form`, `label`, `input`, `button`.

**1.2 CSS Variables & Theme Tokens**
Define in `:root` (and mirror in Tailwind v4 `@theme`):
- Colors: `--primary: #ffffff`, `--text-primary: #373a46`, `--bg-primary: #fcfcfc`, `--bg-secondary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default: rgba(0,0,0,0.08)`, `--border-error`, `--border-success`.
- Contrast pairing: light backgrounds pair with dark text (`#373a46`), dark surfaces (CTA gradient `#1a1a1a → #2d2d2d`) pair with white text — enforced everywhere.
- Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, plus the exact soft shadow token `0px 10px 40px 5px rgba(194,194,194,0.25)`.
- Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Define dark tokens under `@media (prefers-color-scheme: dark)` **and** a `.dark` class toggle.
- Provide a visible theme toggle button (sun/moon Google Material Symbol) with correct `aria-pressed` and `aria-label`, persisting choice via `localStorage`, falling back to `prefers-color-scheme`.
- In dark mode, the hero gradient overlay and `#fcfcfc` surfaces must switch to dark equivalents with light text; the CTA gradient inverts to a light-on-dark treatment maintaining contrast.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- All sections stack to single-column on mobile; no horizontal scrolling at any viewport width. Heading scales down (80px → ~40px, accent word 100px → ~52px) via fluid `clamp()` or breakpoints.

**1.5 Framework**
- Use **Tailwind CSS v4** with the Motion library (`motion` package, e.g. `motion/react`) for animations. Custom values map to CSS variables where possible.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text fonts: **Geist** (headings, body, UI) and **Instrument Serif** italic (accent word only). Load via Google Fonts `<link>`.
- Icons: **Google Material Symbols** only. No inline SVGs, no local icon files. Exception clause: brand logos in the social-proof badge (e.g., star ratings) may use Material Symbols (`star`, `star_half`) — do not use any SVG icon library.

## 2. SECTION & COMPONENT SPECIFICATIONS

**2.1 Hero (per user's visual direction)**
- Container: `min-h-screen`, centered, `pt-[290px]` (reduce on mobile breakpoints), `max-w-[1200px]`, vertical gap `32px` (`gap-8`).
- Background video: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260302_085640_276ea93b-d7da-4418-a09b-2aa5b490e838.mp4` — full-bleed absolute layer, `object-cover`, `transform: scaleY(-1)`, `aria-hidden`, muted, autoplay, loop, playsinline.
- Overlay: absolute `inset-0`, `bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white` (dark-mode variant tokenized).
- Heading: Geist, weight 500, `letter-spacing: -0.04em`, 80px desktop. The word "management" rendered in Instrument Serif italic at 100px as the accent.
- Description: Geist 18px, 80% opacity, `#373a46`, `max-w-[554px]`.
- Email input block: `rounded-[40px]`, `bg-[#fcfcfc]`, thin `--border-default` border, `box-shadow: 0px 10px 40px 5px rgba(194,194,194,0.25)`. Flex row (input + CTA button), collapsing to column on mobile.
- CTA button: dark gradient `#1a1a1a → #2d2d2d`, white text, multi-layer inner shadow: `inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24)`. Min touch target 44x44px. All button states per §2.2 below.
- Social proof: "1,020+ Reviews" badge with Material Symbol stars, placed below the input block.
- Animations: Motion library **staggered fade-and-slide-up** for heading → description → email input block → social proof badge. Respect `prefers-reduced-motion` (Motion's `useReducedMotion`).

**2.2 Buttons (global)**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via `--primary`-derived outline/box-shadow for keyboard nav.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, CSS spinner or animated Material Symbol, no layout shift.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback via `--text-success` / `--text-error`, announced in an `aria-live` region.
- Destructive (`.btn-danger`): visually distinct in both themes.

**2.3 Cards — Features (3 cards) & Pricing (3 tiers)**
- Default: flexbox, `--bg-secondary` surface, thin `--border-default`, `--shadow-sm`, `--radius-lg`.
- Hover: `transform: translateY(-2px)` + shadow shift.
- Focus-within: border highlight when a child control focuses.
- Loading: skeleton shimmer animation (CSS keyframes) where content loads dynamically.
- Empty state: Material Symbol + guidance text fallback.
- Each Feature card: Material Symbol icon, title, description. Pricing cards: tier name, price, feature list (check icons), CTA; middle tier visually elevated as "recommended" — communicated with a text label, not color alone.

**2.4 Forms & Inputs**
- States: empty, focused (outline ring), filled, valid (success border + icon), invalid (error border, red text, error icon), disabled, read-only.
- Structure: flex container wrapping label, input, and dedicated error container. Errors announced via `aria-live="polite"` and `aria-describedby`.

**2.5 Modal / Popup**
- States: opening, open, loading, success/error, closing — all CSS/Motion transitions.
- Centered flex container, backdrop overlay, Material Symbol close button, focus trap, close via `Esc` and overlay click. Use for FAQ "more details" or newsletter confirmation if needed.

**2.6 Remaining Sections**
- **How It Works (3 steps):** numbered editorial layout, Material Symbol per step, staggered Motion entrance.
- **Testimonials:** quote cards with author name/role, star ratings via Material Symbols.
- **FAQ:** accessible `<details>`/`<summary>` or button-driven accordion with `aria-expanded`, animated open/close.
- **Final CTA:** full-width dark band, gradient button, repeating hero animation language.
- **Footer:** brand, secondary link columns, social icons (Material Symbols), copyright, theme toggle.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing, no horizontal overflow, mobile-first breakpoints.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; respect `prefers-reduced-motion` globally.
- **Accessibility:** WCAG-sufficient contrast in light **and** dark mode; never color-only state communication; semantic HTML5; correct ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback (form errors, toasts, loading).
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- All user-facing copy in **English**.

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` (React via CDN/JSX build acceptable if using React + Motion; otherwise vanilla JS with Motion's vanilla API). No inline `<script>` beyond one deferred entry point.
- **Naming:** one consistent convention (BEM or fixed Tailwind utility set) — never mixed.
- **No unrequested placeholders:** write real, polished English copy for every section; no lorem ipsum.
- Deliver complete, runnable code on the first attempt — no TODOs, no stubs.
