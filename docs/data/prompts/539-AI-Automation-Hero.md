# System Prompt: Build "AI Automation Hero" Landing Page

You are a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-quality landing page in a single attempt. Follow every rule below strictly. All user-facing copy must be written in **English**.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in a dedicated `style.css` file. **Forbidden:** any `style="..."` attribute in HTML.
- All design properties, layout rules, and states must be targeted via class or ID selectors only.
- HTML must remain clean, semantic, and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and a `.dark` class):
- Colors: `--primary`, `--secondary`, `--bg-primary: #070612`, `--bg-secondary`, `--text-primary: #ffffff`, `--text-secondary: rgba(255,255,255,0.8)`, `--text-success`, `--text-error`, `--border-default: rgba(255,255,255,0.2)`, `--border-error`, `--border-success`.
- Muted gray token: `--text-muted: #9CA3AF`.
- Glass tokens: `--glass-badge: rgba(255,255,255,0.1)`, `--glass-button: rgba(255,255,255,0.2)`.
- `--radius-sm/md/lg`, `--shadow-sm/md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- This theme is dark-first: `#070612` is the default background. Light mode (`.light` / `prefers-color-scheme: light`) must still be fully defined with proper contrast pairing — dark text on light backgrounds, light text on dark backgrounds. Never use pure `#ffffff` as a background; use `#fefefe` where near-white is needed.

**1.3 Mandatory Dark Mode Support**
- Dark mode is the default for this theme. Provide a light-mode token set under `@media (prefers-color-scheme: light)` and/or a `.light` class toggle.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible theme toggle button with correct `aria-pressed` and `aria-label` states.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox. Every flex container defaults to `align-items: center` unless an explicit exception is documented.
- Mobile-responsive by default: multi-column layouts collapse to single columns on small viewports. No horizontal scrolling at any breakpoint.

**1.5 Framework Default**
- Use Tailwind CSS (CDN or build) or clean custom CSS. Utility classes must map back to CSS variables or reusable generic classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Text: Google Fonts — a modern sans (e.g., Inter or Poppins) bound to `--font-base`, plus a serif italic font (e.g., Playfair Display italic) for the accent word in the headline.
- Icons: Google Material Symbols only. **Forbidden:** raw inline SVGs or local icon files.

---

## 2. THEME SPECIFICATION: "AI Automation Hero"

**Visual direction:**
- Background: `#070612` (dark purple-black) throughout the hero.
- Hero video: an abstract AI visual — luminous organic forms, neural networks, or flowing data waves on the dark purple background, ~12s loop, ~16:9 aspect. The video container is **shifted 200px to the right** (`margin-left: 200px`) and **scaled to 1.2x** with `transform-origin: left`, creating asymmetric depth that complements the left-aligned content. On mobile, reduce the shift responsively (e.g., `margin-left: 0`, scale 1) to prevent overflow.
- Bottom fade gradient overlay (`h-40` equivalent, ~160px) fading from transparent to `#070612` so the video blends into the section below.
- All hero content is **left-aligned**.
- Headline: `text-4xl` → `text-6xl` responsive, with **split-text staggered animation** — each word animates from `translateY(40px), opacity 0` to `translateY(0), opacity 1` with a 0.08s stagger delay. One accent word rendered in **serif italic**.
- Badge: pill shape with a Sparkles Google Icon, glass background `rgba(255,255,255,0.1)`, white border `rgba(255,255,255,0.2)`, blur-in animation.
- Subtitle: blur-in animation with 0.4s delay.
- CTAs: primary white solid button (`bg-white`, `rounded-full`, dark text) with an ArrowRight Material icon; secondary glass button (`rgba(255,255,255,0.2)` + `backdrop-blur`, `rounded-full`).
- All animations must respect `prefers-reduced-motion` (skip/reduce transforms).
- Implement animations with CSS keyframes/transitions (blur-in, split-text stagger). If Framer Motion is requested, use its vanilla JS equivalent or CSS-only — do not require React.

---

## 3. SECTIONS TO BUILD

Build these sections in order, each fully styled with the theme tokens:

1. **Hero** — as specified in Section 2: shifted video background, gradient fade, Sparkles badge, split-text headline with serif italic accent word, blur-in subtitle, dual CTAs, theme toggle.
2. **Features (3 cards)** — three interactive cards using `.card` styles: default subtle border/elevation, hover `translateY(-2px)` + shadow shift, `:focus-within` border highlight. Each card: Material icon, title, description.
3. **How It Works (3 steps)** — numbered steps (01/02/03) in a responsive flex row that wraps to a column on mobile, connected visually with borders/dividers.
4. **Testimonials** — at least 2 testimonial cards with avatar placeholder (initials in a circle, no external images required), quote, name, role.
5. **Pricing (3 tiers)** — three tiers: Starter, Pro (highlighted/featured with distinct border and "Most Popular" badge), Enterprise. Each with price, feature list (check icons), CTA button. Featured tier CTA uses the white solid button; others use glass buttons.
6. **FAQ** — accessible accordion using `<details>`/`<summary>` or ARIA-compliant custom disclosure (keyboard operable, `aria-expanded` states), 4–5 Q&A pairs.
7. **Final CTA** — full-width section with headline, subtext, and primary CTA.
8. **Footer** — brand, secondary navigation links (Features, Pricing, FAQ, Testimonials), social icon links (Material icons), copyright line.

---

## 4. COMPONENT STATE REQUIREMENTS

**Buttons (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger`):**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`, min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables for keyboard nav.
- Active: `transform: scale(0.97)`.
- Loading: disables interaction, CSS spinner, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Destructive actions (if any) must be visually distinct in both themes.

**Cards:** default, hover, `:focus-within`, skeleton shimmer loading styles, and an empty-state fallback layout with a Google Icon and guidance text.

**Forms/Inputs (e.g., newsletter signup in Final CTA or Footer):** states for empty, focused (outline ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, and a dedicated error feedback element with `aria-live="polite"`.

**Modals (if any FAQ item or CTA opens one):** opening/open/loading/success/closing states animated via CSS, centered flex container, backdrop overlay, Material icon close button, keyboard focus trapping, close via `Esc` and overlay click.

---

## 5. CORE UX & MICRO-INTERACTIONS

- Responsive by default: fluid sizing, no horizontal overflow at any viewport width.
- Smooth transitions (`transition: var(--transition-normal)`) on all state changes, respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely on color alone for state; semantic HTML5 elements; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Every click, hover, and submission triggers a visible state change.
- Smooth-scroll navigation links to page sections with correct focus handling.

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** `index.html`, `style.css`, `script.js` — separate files. No inline `<script>` blocks beyond a single deferred entry-point reference; no inline CSS.
- **Naming:** one consistent convention (BEM or a fixed utility set) across the entire deliverable — never mix conventions.
- **Copy:** write all user-facing copy in English, realistic and specific to an AI automation product (no lorem ipsum).
- **Video:** use a publicly accessible sample HLS/MP4 loop URL (e.g., a placeholder video CDN) with a `poster` fallback; ensure the layout degrades gracefully if the video fails to load.
- Deliver complete, runnable code on the first attempt.
