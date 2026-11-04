# BUILD PROMPT — "Creative AI Style" Landing Page (Generative AI Art & Illustration Tool)

**Role:** Act as a Senior Frontend Engineer and Expert UI Designer. Build a complete, production-ready landing page for a generative AI art & illustration platform (invent a fitting brand name). Deliver the entire page on the first attempt — no TODOs, no truncation, no lorem ipsum. All user-facing copy must be written in English.

**Design Brief:**
- **Theme:** "Creative AI Style" — artistic, innovative, user-empowering. Era: 2026+ Creative AI Revolution.
- **Keywords:** creative, AI, generative, design, art, innovation, intuitive, powerful, vibrant, seamless.
- **Visual effects to implement:** AI image-transformation animations, creative gradients, drag-and-drop micro-interactions, artistic sans-serif typography, customizable UI elements, before/after visualizations, fluid transitions.
- **Light/Dark:** full support with theme options (visible toggle + accent customization).

**Required Sections (in this order):**
1. **Hero** — headline + subheadline, dual CTAs ("Start Creating" primary / "See How It Works" secondary), an interactive **before/after comparison slider** (CSS-generated artwork: grayscale "Before" vs. vibrant "After"), a "Generate" demo trigger, and a trust strip (e.g., "10M+ artworks created").
2. **Features** — 3 cards: Text-to-Art Generation, Style Transfer Studio, Drag-and-Drop Sketch Upgrade — each with a Google Material Symbols icon, title, and real copy.
3. **How It Works** — 3 numbered steps (Drop your sketch or type a prompt → AI transforms it → Export & share) with connector visuals, stacking vertically on mobile.
4. **Testimonials** — 3 cards with quotes, CSS gradient initials avatars (no external images), names, and roles.
5. **Pricing** — 3 tiers (e.g., Free / Pro / Studio) with prices, check-icon feature lists, CTAs; middle tier featured with a "Most Popular" badge.
6. **FAQ** — accordion with at least 5 real questions about the product.
7. **Final CTA** — `.creative-gradient` panel with headline and email capture form.
8. **Footer** — brand + tagline, secondary link columns (Product, Company, Legal), social icon links, copyright, back-to-top link.

---

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- **No Inline CSS:** the `style="..."` attribute is forbidden anywhere in the HTML.
- **Class/ID Selectors Only:** all design properties, layout rules, and states live in `style.css`, targeted via class/ID selectors.
- **Minimal HTML Modifications:** HTML stays clean and semantic; changing the look must require editing only `style.css`.

**1.2 CSS Variables & Theme Tokens**
Store all tokens in `:root` and override per theme. Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--primary` | `#FF0000` (Creative Red) | `#FF0000` |
| `--secondary` | `#800080` (Purple) | `#B366B3` (lightened for contrast) |
| `--bg-primary` | `#fefefe` | `#161616` |
| `--bg-secondary` | `#F8F8F8` | `#2D2D2D` |
| `--text-primary` | `#2D2D2D` (Dark Gray) | `#F5F5F5` |
| `--text-secondary` | `#5C5C5C` | `#A9A9A9` |
| `--border-default` | `#E0E0E0` (Light Gray) | `#3D3D3D` |

- **Contrast Pairing:** every light background pairs with dark text and every dark background with light text — enforced in both themes.
- **Exception:** the source palette explicitly specifies `#FFFFFF`; permit it only for small accent surfaces (button labels, logo marks on dark surfaces) — never as a page or section background; large light surfaces use `#fefefe`.
- **Neon accents** (`--accent-cyan: #00FFFF`, `--accent-green: #00FF00`, `--accent-orange: #FFA500`) are decorative on light surfaces (gradient stops, glows, borders) and may be used directly on dark surfaces; when needed as text/icons on light backgrounds, define accessible darkened variants (`--accent-cyan-text: #007A8A`, `--accent-green-text: #008A00`, `--accent-orange-text: #B87500`).
- **Source technical mapping:** `--shadow-md: 0 5px 15px rgba(0,0,0,0.1)`; `--radius-md: 8px`; `--transition-normal: all 0.3s ease-in-out`; hero/section light background uses `linear-gradient(to bottom right, #F8F8F8, #fefefe)`; shadows deepen in dark mode.
- **Required global utility classes (verbatim):** `.creative-gradient` (animated multi-stop gradient: red → purple → cyan, `background-size: 200%` with keyframed position) and `.ai-transform-animation` (keyframed AI "generation" effect on the hero visual — shimmer sweep + hue-rotate/gradient shift).

**1.3 Mandatory Dark Mode**
- Provide dark mode tokens under a `.dark` class selector and/or `@media (prefers-color-scheme: dark)`; background/text variables must swap seamlessly with no HTML restructuring.
- **Persistence:** user choice saved to `localStorage`, falling back to `prefers-color-scheme` on first visit; visible header toggle using Google Material Symbols (`dark_mode`/`light_mode`) with correct `aria-pressed` and `aria-label`, announced via an `aria-live` region.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures with Flexbox; every flex container defaults to `align-items: center` unless an exception is justified (document it in a CSS comment).
- Mobile-first: rows convert to columns at breakpoints, card grids use `flex-wrap`, no horizontal scrolling at any viewport (test down to 320px), minimum 44×44px touch targets.

**1.5 Framework Default**
- Use clean custom CSS (no framework) with one fixed convention: **BEM** (`block__element--modifier`). The only non-BEM globals allowed are `.creative-gradient`, `.ai-transform-animation`, `.is-*` state hooks, and the `.dark` theme class. Reusable patterns must exist as classes: `.btn`, `.card`, `.input-group`, `.section`, `.container`. Never mix conventions.

**1.6 Typography & Icons (Google Fonts Mandatory)**
- **Text:** load Google Fonts — **Space Grotesk** for display/headings and **Inter** for body — bound to `--font-display` and `--font-base`.
- **Exception:** the source spec names `"Helvetica Neue, Arial, sans-serif"`; keep it only as the fallback stack after the Google Fonts.
- **Icons:** Google Material Symbols (Outlined) exclusively. Inline SVGs and local icon files are forbidden.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Buttons**
- `.btn` base: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;` minimum 44×44px. Variants: `.btn--primary` (red gradient, white label), `.btn--secondary` (dark gray/purple), `.btn--ghost` (outline).
- **Hover:** brightness/shift + `cursor: pointer`. **Focus:** distinct ring from CSS variables. **Active:** `transform: scale(0.97)`. **Loading (`.is-loading`):** CSS spinner, interactions blocked to prevent double-clicks, dimensions stable. **Disabled:** `opacity: 0.5`, greyscale, `cursor: not-allowed`. **Success/Error (`.is-success` / `.is-error`):** temporary feedback via `--text-success` / `--text-error` with icon swap.
- Define `.btn--danger` visually distinct in both themes, even if unused on this page.

**2.2 Cards**
- `.card` base: `--bg-secondary`, `--border-default`, `--radius-md`, `--shadow-sm`, flex layout. **Hover:** `translateY(-2px)` + shadow shift. **Focus-within:** border highlight when a child link/button is focused.
- **Skeleton (`.card--skeleton`):** shimmer keyframes used in the hero "Generate" demo (skeleton → transform sweep → reveal) to prevent layout jumps.
- **Empty state (`.empty-state`):** Google icon + clear guidance text, used in the drag-and-drop zone.

**2.3 Forms & Inputs**
- Email capture in the Final CTA built as a `.input-group` flex container wrapping a label, input, and a dedicated error feedback container.
- **States:** empty, focused (outline ring), filled, valid (success border + check icon), invalid (error border, red text, error icon, message in the error container), disabled, read-only. Errors announced via `aria-live="polite"`. Never rely on color alone — pair icons and text.

**2.4 Modal (Conditional)**
- No modal is required; if one is added (e.g., demo or plan comparison), it must implement opening/open/loading/success-error/closing states animated via CSS, a centered flex overlay with backdrop, Google icon close button, keyboard focus trap, and close via `Esc` or overlay click, stacked at `--z-modal`.

**2.5 Landing-Specific Interactive Widgets**
- **Before/After slider:** draggable divider revealing the "After" art over the "Before" art; handle has `role="slider"` with `aria-valuemin="0"`, `aria-valuemax="100"`, live-updated `aria-valuenow`; operable by pointer drag and keyboard arrows (±5%, Home/End); handle ≥44px; "Before"/"After" labels visible.
- **Drag-and-drop zone:** dashed border; states: default → dragover (highlight + icon change) → valid drop (preview + success border) → invalid (error border + message); click/Enter/Space opens the file picker; all status changes announced in an `aria-live` region.
- **FAQ accordion:** button triggers + panels with `aria-expanded`/`aria-controls`, rotating chevron Google icon, CSS height/opacity transition, fully keyboard operable.
- **Customizable UI elements:** header theme toggle (per 1.3) plus an accent switcher (4 swatch buttons: red, cyan, purple, orange) that remaps `--primary`, persists to `localStorage`, with `aria-label` per swatch, `aria-pressed` on the active swatch, and a toast confirmation at `--z-toast`.
- **Sticky header + mobile nav:** backdrop blur, smooth-scroll nav links, hamburger panel on mobile with `aria-expanded`, `Esc` to close, stacked at `--z-dropdown`.
- **Scroll reveal:** sections animate in via IntersectionObserver adding `.is-visible`; disabled under reduced motion.

## 3. CORE UX & MICRO-INTERACTION RULES

- **Responsive by default:** fluid `clamp()` typography, no horizontal overflow.
- **Smooth animations:** `transition: var(--transition-normal)` on all state changes; every keyframe animation (`.creative-gradient`, `.ai-transform-animation`, shimmer, reveals) is disabled under `prefers-reduced-motion`.
- **Accessibility:** WCAG AA contrast in both modes; semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`), exactly one `h1`, logical heading hierarchy; ARIA roles/labels on all custom widgets; logical DOM/focus order; full keyboard operability — no mouse-only interactions; `aria-live` regions for form errors, drop status, generation status, and toasts.
- **Mandatory visual feedback:** every click, hover, and submission triggers a visible state change.
- **Imagery:** all showcase visuals (before/after art, avatars, step graphics) are generated with pure CSS (gradients, blend modes, clip-path) — the page must be fully self-contained with no image files.

## 4. DELIVERABLE & OUTPUT FORMAT

- **Files:** separate `index.html`, `style.css`, and `script.js`, runnable by opening `index.html`. No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`); no inline styles.
- **Naming:** BEM consistently across the entire deliverable (only exceptions listed in 1.5).
- **Copy:** real, on-theme English copy for the invented product across all 8 sections — plausible testimonials, pricing, and FAQ answers; placeholders only where content was genuinely unspecified.
- **First attempt:** output the complete HTML, complete CSS, and complete JS in one response — no TODOs, no "rest of the code" truncation.
