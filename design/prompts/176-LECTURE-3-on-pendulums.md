# CODING AGENT BRIEF — "LECTURE 3 — on Pendulums" Landing Page

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page described below on the first attempt. Generate the final code immediately — no explanations, no partial output, no follow-up questions.

**Project Brief**

- **Theme:** *LECTURE 3 — on Pendulums* — an interactive/game landing page styled as a playful, modern chalkboard physics lecture about pendulums.
- **Output Category:** Playful & Youth — energetic, rounded, springy micro-interactions; never childish or cluttered.
- **Era:** 2020s Contemporary — generous whitespace, soft elevation, fluid typography, rounded geometry.
- **Sections (in order):** Sticky Header (hosts navigation + theme toggle), Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- **Visual Effects:** Neumorphism + Gradients, executed via Flexbox, Keyframe Animations, Transforms, Box Shadows, and Border Radius.
- **Copy:** All user-facing copy in English, written in a playful, youthful voice (a physics class students actually want to attend). Write real, complete copy — lorem ipsum is prohibited.

---

## 1. THEME DIRECTION & DESIGN TOKENS

**1.1 Design Language**
Deep chalkboard greens, warm chalk-tray browns, and pale chalk-cream surfaces. Neumorphic cards appear to float off the page using dual box-shadows derived from the background tone; chalkboard-green gradients add depth to the hero, featured pricing tier, and Final CTA band. Handwritten chalk annotations (equations, arrows, doodles) accent key moments.

**1.2 Color Palette & Token Mapping (Light Mode — default)**

| Token | Value | Usage |
|---|---|---|
| `--primary` | `#20301f` | Deep chalkboard green — primary buttons, headings, brand |
| `--primary-deep` | `#26381f` | Gradient partner and hover depth |
| `--secondary` | `#7a5a34` | Chalk-tray brown — accents, icons, badges |
| `--secondary-deep` | `#6a4a2a` | Darker brown — muted text |
| `--bg-primary` | `#e8ecd8` | Page background (pale chalk cream — never pure white) |
| `--bg-secondary` | `#f0f4e8` | Card and surface background |
| `--text-primary` | `#20301f` | Primary text on light surfaces |
| `--text-secondary` | `#6a4a2a` | Secondary text on light surfaces |

- Where a near-white is required, use `#fefefe` — never `#ffffff`.
- Define `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` with values that pass WCAG contrast on both themes.
- **Contrast pairing is mandatory for every theme:** light background tokens pair with dark text tokens; dark background tokens pair with light text tokens.

**1.3 Dark Mode Token Mapping (mandatory)**
`--bg-primary: #141f12`, `--bg-secondary: #20301f`, `--text-primary: #e8ecd8`, `--text-secondary: #cbbf9a`, `--secondary: #a8825a` (lightened for contrast). Fine-tuning is allowed; the contrast pairing rule is not.

**1.4 Typography & Icons (Google Fonts only)**
- **Display/headings:** Fredoka → bind to `--font-display`.
- **Body:** Nunito → bind to `--font-base`.
- **Chalk annotations** (equations, handwritten notes): Caveat → bind to `--font-chalk`.
- Load all fonts via Google Fonts `<link>` tags in `<head>`.
- **Icons:** Google Material Symbols (Rounded style) via `<link>`, using ligature names (e.g., `pendulum`, `science`, `tune`, `emoji_events`, `play_circle`, `school`, `star`, `check`, `close`, `menu`, `expand_more`, `dark_mode`, `light_mode`, `arrow_forward`, `send`). **Inline SVGs and local icon files are forbidden.**

**1.5 Signature Motion**
- **Hero pendulum:** a CSS-only swinging pendulum (frame + string + bob) animated with `@keyframes` using `transform: rotate()` around `transform-origin: top center`, alternating between negative and positive angles with `ease-in-out` timing. Clicking or keyboard-activating the bob "pushes" it — JavaScript swaps intensity classes (`.is-swinging` → `.is-brisk` → `.is-wild`), each defining `--swing-angle` and `--swing-duration` in CSS; a push counter updates in an `aria-live="polite"` readout.
- **Floating chalk equations** (e.g., `T = 2π√(L/g)`) in Caveat drift gently via keyframes in the hero.
- All motion respects `prefers-reduced-motion` (static fallbacks).

---

## 2. STRICT RULES & ARCHITECTURE

**2.1 CSS-First Architecture & Zero Inline CSS**
- All styling lives in `style.css`. The `style="..."` attribute is forbidden in HTML.
- All design properties, layout rules, and states are targeted via class or ID selectors only.
- HTML stays clean, semantic, and styling-agnostic — changing the site's look must require editing only the CSS file, never the markup.

**2.2 CSS Variables & Theme Tokens**
- Store every token in `:root` and theme scopes: all colors from 1.2/1.3, plus `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- Add neumorphic tokens: `--shadow-neu` (e.g., light mode: `8px 8px 16px rgba(32,48,31,.18), -8px -8px 16px rgba(254,254,254,.85)`) and `--shadow-neu-inset` for pressed states and icon wells. Recalculate both for dark surfaces.

**2.3 Mandatory Dark Mode Support**
- **Exception clause:** the source specification marks Light as the primary mode — Light is the default on first visit — but a complete, accessible Dark Mode must still be implemented per this mandatory architecture.
- Provide dark tokens under both `@media (prefers-color-scheme: dark)` and a `.dark` class selector; switching themes must require zero HTML restructuring.
- Persist the user's choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. The header toggle must expose correct `aria-pressed` and `aria-label` state.

**2.4 Flexbox Layout & Mobile-First Alignment**
- Build every layout structure with Flexbox. Every flex container defaults to `align-items: center` unless an exception is explicitly justified (document it in a CSS comment).
- All flex layouts are mobile-responsive out of the box: rows convert to columns on small viewports; horizontal scrolling is never permitted; minimum touch targets are 44×44px.

**2.5 CSS Approach**
- The source specification's CSS Technical block (Flexbox, Keyframe Animations, Transforms, Gradients, Box Shadows, Border Radius) defines pure-CSS techniques: build with clean, hand-written custom CSS organized in clearly commented layers (tokens → base → components → sections → utilities). All component classes must be generic and reusable (`.btn`, `.card`, `.input-group`) and map back to CSS variables.

**2.6 Zero Inline SVG / Local Icons**
Reinforced from 1.4: every icon is a Google Material Symbol; no raw inline SVGs, no icon files, no emoji-as-icons.

---

## 3. COMPONENT DESIGN SPECIFICATIONS

**3.1 Button Component**
Style all states via CSS classes on `.btn` (+ variants `.btn--primary` chalkboard-green gradient, `.btn--secondary` neumorphic, `.btn--ghost`, `.btn--danger`):
- **Default:** `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px.
- **Hover:** brightness/shadow shift with `cursor: pointer`.
- **Focus:** distinct visible ring via `outline`/`box-shadow` using CSS variables, for keyboard navigation.
- **Active/Pressed:** `transform: scale(0.97)`.
- **Loading:** interactions blocked (prevents double-clicks), CSS spinner or animated Google Icon, button dimensions unchanged.
- **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- **Success/Error:** temporary feedback styles driven by `--text-success` / `--text-error`.
- `.btn--danger` must be visually distinct in both light and dark themes.

**3.2 Card Component**
Applies to feature cards, testimonial cards, and pricing tiers:
- **Default:** flexible Flexbox column layout, `--bg-secondary` surface, subtle border, neumorphic elevation.
- **Hover:** `transform: translateY(-2px)` plus shadow shift.
- **Focus-within:** border highlight when a child link/button receives focus.
- **Loading (Skeleton):** shimmer keyframe animation with reserved dimensions to prevent layout jumps (used in the modal's loading state).
- **Empty State:** structured fallback with a Google Icon and clear guidance text (defined in CSS; applied in the modal when no lesson content is available).

**3.3 Form & Input Component**
Used for the Final CTA email signup — a flex `.input-group` wrapping a label, input field, and a dedicated error feedback container. Account for all states: **Empty, Focused** (outline ring), **Filled, Valid** (success border + check icon), **Invalid** (error border, red text, error icon, message in the error container), **Disabled, Read-only**. Feedback is announced via `aria-live`.

**3.4 Modal / Popup**
The Hero's "Watch a Lesson" CTA opens a lesson-preview modal:
- **States:** Opening, Open, Loading (skeleton shimmer while a "Next lesson" swap initializes), Success/Error, Closing — all animated via CSS transitions.
- **UX:** centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via `Esc` and overlay click, stacking via `--z-modal`.
- **Content:** chalkboard-styled panel with Caveat annotations, a mini animated pendulum reusing the `.pendulum` component, lesson bullets, and a CTA that closes the modal and scrolls to Pricing.

**3.5 FAQ Accordion**
Native `<details>` / `<summary>` elements styled via CSS. The `expand_more` chevron rotates via `transform` + `transition` on the open state. Open/closed state must never be communicated by color alone; keyboard operability comes free from native semantics.

**3.6 Pricing Billing Toggle**
A Monthly/Annual toggle button with `aria-pressed` state; prices swap with a visible transition and an annual savings badge. Every toggle action produces visible feedback.

---

## 4. SECTION-BY-SECTION BUILD SPECIFICATION

**4.0 Sticky Header**
Logo (pendulum Material Symbol + wordmark), anchor navigation (Features, How It Works, Testimonials, Pricing, FAQ), theme toggle (per 2.3), and a mobile hamburger (`menu` icon, `aria-expanded` + `aria-controls`) opening a dropdown panel stacked via `--z-dropdown`. Header gains a subtle shadow on scroll.

**4.1 Hero**
Two-column flex layout (copy left, interactive pendulum rig right), stacking on mobile. Left: chalk-style badge "LECTURE 3 — INTERACTIVE PHYSICS", playful headline (e.g., "Physics class just got its swing back."), supporting subcopy, primary CTA "Start Swinging" (scrolls to Pricing) and secondary CTA "Watch a Lesson" (opens modal). Right: the neumorphic pendulum rig with push interaction and counter (per 1.5), surrounded by floating chalk equations, over a chalkboard-green gradient panel.

**4.2 Features — 3 Cards**
Neumorphic cards, each with a circular inset icon well (Material Symbol), playful title, and two-line description. Suggested: "Real Physics, Zero Naps" (`science`), "Tweak Every Variable" (`tune`), "Level Up Your Lectures" (`emoji_events`). Apply all Card states from 3.2.

**4.3 How It Works — 3 Steps**
Horizontal stepper on desktop, vertical on mobile. Steps 01/02/03 with icons (`play_circle` → `tune` → `school`), connected by a dashed chalk-style line (CSS border). Copy: "Pick your pendulum" → "Run the experiments" → "Ace the lecture."

**4.4 Testimonials — 3 Cards**
Five-star row (`star` icons), playful quote, neumorphic avatar circle containing initials (no external images), name + role (student/teacher personas).

**4.5 Pricing — 3 Tiers**
Student (free), Lab Pass (featured — "Most Popular" chalk badge, gradient fill with light text per contrast pairing, elevated scale, inverted button), Classroom (for schools). Each tier: name, price (wired to the 3.6 toggle), feature list with `check` icons, CTA button.

**4.6 FAQ — 5–6 Items**
Accordion per 3.5 with real questions (what it is, who it's for, devices, curriculum fit, free tier, cancellation).

**4.7 Final CTA**
Full-width chalkboard-green gradient band with light text (contrast enforced). Playful headline plus the email signup form per 3.3: submit triggers the button's loading state, then a success state and an `aria-live` toast confirmation stacked via `--z-toast`, auto-dismissing.

**4.8 Footer with Secondary Links**
Link columns (Product, Company, Support — e.g., About, Chalk Notes, Careers, Contact, Help Center, Privacy, Terms), social icon links (Material Symbols), copyright line, and a small pendulum motif. In-page anchors where possible; genuinely unspecified external destinations may use `href="#"`.

---

## 5. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid sizing (`clamp()` for type), standard breakpoints, zero horizontal overflow.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; `prefers-reduced-motion` disables the pendulum swing, floating equations, and shimmer.
- **Accessibility:** semantic HTML5 landmarks and `aria-labelledby` on every section; logical DOM/focus order; full keyboard operability for the pendulum push, accordion, modal, toggles, and form; visible focus rings everywhere; contrast ≥ 4.5:1 in both modes; never rely on color alone to communicate state; `aria-live` regions for form errors, toasts, and loading feedback.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Destructive/distinct actions:** `.btn--danger` is visually distinct in both themes.

---

## 6. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer>`). No inline CSS anywhere.
- **Naming:** BEM only, consistently — `.btn`, `.btn--primary`, `.card__icon`, `.pricing__tier--featured`. Never mix conventions.
- **JavaScript scope:** theme toggle + persistence, pendulum push interaction (class swapping only), modal open/close + focus trap, form validation + toast, billing toggle, mobile nav. No behavioral JS beyond this list.
- **Copy:** real, complete, playful English copy throughout; placeholders only where content is genuinely unspecified (footer external links).
- Generate the complete final code for all three files in one pass, immediately.
