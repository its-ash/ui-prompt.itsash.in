# Coding-AI Prompt — Allier Ho Landing Page

You are a senior frontend engineer. Build a complete, production-ready landing page implementing the "Allier Ho" editorial creative-portfolio visual system. Output three separate files: `index.html`, `style.css`, and `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS anywhere in the HTML.

## 1. Architecture Rules (Mandatory)

**1.1 CSS-First & Zero Inline CSS**
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors. Keep HTML semantic, clean, and styling-agnostic so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode) using these exact names:

Colors:
- `--color-warm-paper: #fcfcfc`
- `--color-deep-ink: #000000`
- `--color-press-black: #1c1c1c`
- `--color-charcoal-trace: #262626`
- `--color-ash: #a8a8a8`
- `--color-dusty-mauve: #6c5f7d`
- `--color-pale-sage: #cee6cc`

Also expose the meta-prompt's standard aliases mapping to the above: `--primary` → `--color-dusty-mauve`, `--secondary` → `--color-pale-sage`, `--bg-primary` → `--color-warm-paper`, `--bg-secondary` → `--color-ash` (light) / `--color-charcoal-trace` (dark), `--text-primary` → `--color-deep-ink`, `--text-secondary` → `--color-charcoal-trace`, `--text-success` → `--color-pale-sage`, `--text-error` → `--color-deep-ink`, `--border-default` → `--color-press-black`, `--border-error` → `--color-deep-ink`, `--border-success` → `--color-pale-sage`.

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text — enforce in every theme including dark mode.

Light-mode background must be `#fcfcfc` (warm paper), never pure white. Where a near-white is needed use `#fefefe`.

Radius & shadows: `--radius-sm: 0px`, `--radius-md: 0px`, `--radius-lg: 200px`, `--shadow-sm: none`, `--shadow-md: none`. (Zero elevation — this system is flat.)

Spacing & transitions: `--spacing-gap: 10px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`. Plus the full spacing scale: `--spacing-4: 4px`, `--spacing-6: 6px`, `--spacing-8: 8px`, `--spacing-10: 10px`, `--spacing-18: 18px`, `--spacing-20: 20px`, `--spacing-40: 40px`, `--spacing-60: 60px`, `--spacing-100: 100px`, `--spacing-120: 120px`.

Elevation/stacking: `--z-dropdown: 10`, `--z-modal: 100`, `--z-toast: 200`.

Typography tokens: `--font-crimson-pro`, `--font-azeret-mono`, `--font-system-sans-serif`. Text scale: `--text-caption: 12px`, `--text-body: 18px`, `--text-heading: 44px`, `--text-display: 50px`. Bind `--font-base` to Azeret Mono.

**1.3 Mandatory Dark Mode**
- Provide dark-mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode: background becomes `#1c1c1c`/`#262626` (charcoal plane), text becomes `#fcfcfc`/`#ffffff`-adjacent warm light, dusty mauve and pale sage remain as accents but adjusted for contrast.
- Seamless variable switching, no HTML restructuring.
- Persist user choice via `localStorage`, fall back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- All layouts use Flexbox. Every flex container defaults to `align-items: center` unless explicitly justified otherwise.
- Mobile-responsive out of the box: rows collapse to columns on small viewports. No horizontal scrolling.

**1.5 Tailwind / CSS**
- Use clean custom CSS driven by Tailwind `@layer`/`@apply` if Tailwind is included; otherwise pure CSS with reusable class names (`.btn`, `.card`, `.input-group`). All utility classes map back to CSS variables or generic reusable classes. Never mix naming conventions — use BEM throughout (e.g., `.hero__panel`, `.btn--pill`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Include Google Font links for Crimson Pro (weight 300), Azeret Mono (weight 400), and a system-sans substitute (Inter) for nav/labels.
- Use Google Material Symbols for all icons. No inline SVGs, no local icon files.

## 2. Component Specifications

**Buttons (Pill Text Button):** 200px radius, 10px vertical / 18px horizontal padding, transparent background, 1px black border (`#000000`), 12px system-sans text in black. No fill, no shadow. States: default (flex, center, gap 0.5rem, min 44x44px touch target), hover (brightness/shadow shift, cursor pointer), focus (distinct ring via CSS vars), active (transform scale 0.97), loading (disabled interactions, CSS spinner or animated Google Icon, no dimension distortion), disabled (opacity 0.5, greyscale, cursor not-allowed), success/error (temporary styles via `--text-success`/`--text-error`).

**Cards (Project Showcase Card):** full-bleed image, no border/radius/shadow, 20px top padding for caption. Caption: 12px Azeret Mono uppercase title in black, then 10px gap, 12px system-sans category tag in `#a8a8a8`. Interactive states: hover (translateY -2px), focus-within (border highlight), loading skeleton (shimmer), empty state (Google Icon + guidance text).

**Forms/Inputs:** states empty/focused/filled/valid/invalid/disabled/readonly. Flex container wrapping label, input, dedicated error feedback container. Include a contact or newsletter form in the Final CTA or Footer.

**Modal/Popup:** opening/open/loading/success-error/closing animated via CSS transitions. Centered flex container, backdrop overlay, Google Icon close button, focus trapping, close via Esc or overlay click. Use for FAQ expansion or pricing detail.

## 3. Core UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely solely on color; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables

- Files: `index.html`, `style.css`, `script.js`.
- Naming: BEM consistently.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified. Invent a fictional brand name, product, and copy — never use "Allier Ho" or any real trademark/logo/product name in the page. Use a fictional creative-studio brand (e.g., "NOVA ATELIER") with invented project names, testimonials, pricing tiers, and FAQ content.

## 5. Page Sections (in order)

1. **Top Nav (Minimal):** full-width row, 20px vertical padding, warm paper background. Brand wordmark left in 12px system sans uppercase. Three nav links (WORK, ABOUT, PLAYGROUND) right, same type, 40px gap. No borders/fill/shadow. Include theme toggle.
2. **Hero:** full-bleed 3D sculptural render placeholder (borderless, radius-free, edge-to-edge). Dusty mauve rectangular panel overlapping right third: Crimson Pro 44px weight 300 white headline, line-height 1.15, letter-spacing -1.5px. Below headline, pill outline button "LEARN MORE". Vertical service list (SERVICE, ART DIRECTION, BRANDING, CONCEPT IDEATION/DEVELOPMENT, INTERACTION DESIGN) in left margin, 12px Azeret Mono uppercase, dusty mauve, 10px row gap, no bullets/dividers.
3. **Features (3 cards):** three Project Showcase Cards in a row (collapse on mobile), each full-bleed image + caption (title + category tag). Section heading above: Crimson Pro 44px weight 300, "See the latest & greatest" with second clause italic, centered, followed by centered pill button "VIEW ALL WORK" at 40px gap.
4. **How It Works (3 steps):** three numbered steps, each with a 12px Azeret Mono step label, Crimson Pro heading, and body text. Use 100px section gap, 10px element gap.
5. **Testimonials:** 2–3 quote blocks with author name (Azeret Mono) and role. Flat, no cards/shadows.
6. **Pricing (3 tiers):** three columns, each with tier name (Crimson Pro), price, feature list (Azeret Mono), and pill outline CTA. Middle tier may use dusty mauve panel as highlight.
7. **FAQ:** accordion-style questions with expand/collapse (CSS-driven, keyboard accessible, `aria-expanded`). Use modal or inline disclosure.
8. **Final CTA:** centered Crimson Pro headline + pill button, with a small newsletter/email input form (validated states).
9. **Footer:** secondary links (Privacy, Terms, Contact, Social), page indicator number bottom-left ("1"), warm paper background, 12px system sans.

## 6. Style Fidelity Notes

- Crimson Pro weight 300 only for display headlines 44–50px, letter-spacing ~-1.5px. Never 400+.
- Border-radius 200px only on buttons/tags. Zero radius on cards/panels/images.
- No shadows, no glows, no elevation anywhere.
- `#fcfcfc` sole canvas; never `#ffffff` or cooler grays.
- Dusty mauve `#6c5f7d` is the only chromatic surface fill (hero panel, occasional heading tints). Pale sage `#cee6cc` as secondary accent border/tint.
- Serif headlines + Azeret Mono body. Sans-serif reserved for nav/labels only.
- Section gaps 100px, element gaps 10px.
- Imagery edge-to-edge, no borders/radius/shadow.
- Density compact in micro-typography (10px gaps, 12px labels) but wide between sections.

## 7. Output

Return only the three files' contents clearly separated with filenames as headers. No preamble, no closing commentary. Ensure all accessibility, responsiveness, dark mode, and state requirements above are fully implemented.
