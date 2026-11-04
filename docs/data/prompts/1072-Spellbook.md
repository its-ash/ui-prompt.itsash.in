# Landing Page Build Prompt — Midnight Editorial Theme

## 1. Project Overview
Build a complete, responsive landing page using a dark editorial visual system. The page must be delivered as three separate files: `index.html`, `style.css`, and `script.js`. Invent a fictional brand name, product name, and all user-facing copy. Do not use the name "Spellbook", its logo, trademarks, or product names anywhere in the deliverable. Treat the supplied measurements as the visual style only.

## 2. Mandatory Architecture Rules
- **CSS-First, Zero Inline CSS:** All styling lives in `style.css`. No `style="..."` attributes. Use class/ID selectors only. Keep HTML semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`). Required tokens: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`. Enforce light-on-dark / dark-on-light contrast pairing for every theme.
- **Light Mode Background:** Use `#fefefe`, not `#ffffff`, where a near-white is needed.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and/or `.dark`. Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox + Mobile-First:** Every flex container defaults to `align-items: center`. Convert rows to columns on small viewports. No horizontal scroll.
- **Tailwind or Clean CSS:** Use Tailwind or `@layer`/`@apply` driven custom CSS. All utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts Mandatory:** Use Google Fonts for text and Google Material Symbols/Icons for icons. No inline SVGs or local icon files. Bind fonts to `--font-base`.

## 3. Design Tokens (Spellbook Visual Style)

### Colors
- `--color-courtroom-ink: #121719` (canvas)
- `--color-lectern-surface: #222729` (card surface)
- `--color-document-drawer: #2b3133` (input background)
- `--color-manuscript-white: #ffffff` (primary text, ghost borders, inverted CTA text)
- `--color-parchment: #f1f3f4` (light surface)
- `--color-ashen-type: #909394` (borders, muted text)
- `--color-smoke: #acaeaf` (tertiary text, dividers)
- `--color-coral-verdict: #f94d1e` (primary action)
- `--color-indigo-statute: #7834b5` (accent, non-action)
- `--color-cyan-margin: #029cff` (links, logo gradient, icon strokes)

Map these into the standard token set (`--primary` = coral, `--bg-primary` = courtroom ink, etc.).

### Typography
- Display font: Arizona Mix substitute — use **Playfair Display** (Google Font) for display/section headings at 28px+, weight 500, letter-spacing -0.04em to -0.02em, line-height 1.0–1.15.
- UI font: **Inter** (Google Font) for all UI/body/buttons/inputs, weights 400/500/600/700, letter-spacing -0.01em.
- Type scale tokens: `--text-caption` 13px/1.4, `--text-body` 16px/1.5, `--text-subheading` 18px/1.6, `--text-heading-sm` 20px/1.5, `--text-heading` 24px/1.3, `--text-heading-lg` 28px/1.0, `--text-display` 51px/1.1, `--text-display-lg` 67px/1.0, `--text-display-xl` 77px/1.0.

### Spacing & Shapes
- Base unit 4px. Spacing tokens: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 60, 64, 112px.
- Border radius: cards/inputs 4px; badges 100px; buttons 1600px (pill). No values between 5px and 99px.
- Shadows: only one elevated card uses `rgba(0,0,0,0.05) -20px 20px 30px -13px, rgba(0,0,0,0.15) 5px 5px 35px 15px`. Standard cards have no shadow.
- Page max-width 1200px. Section gap 96px. Card padding 24px. Element gap 12px.

## 4. Component Specifications

### Buttons
- **Primary Coral CTA:** `#f94d1e` bg, `#ffffff` text (Inter 16px 500–600), padding 14px 20px/24px, radius 1600px, no border. Full pill.
- **Ghost Outline:** transparent bg, 1px `#ffffff` border (reduced opacity acceptable), `#ffffff` text, same radius/padding.
- **Inverted Light:** `#f1f3f4` bg, `#121719` text, pill radius, same padding.
- States: hover (brightness/shadow + cursor pointer), focus (visible ring via CSS vars), active (`transform: scale(0.97)`), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (temporary `--text-success`/`--text-error` feedback). Min touch target 44x44px. Flex layout with `align-items: center; justify-content: center; gap: 0.5rem`.

### Cards
- **Dark Card:** `#222729` bg, 4px radius, 24px padding, 1px `#ffffff` at ~10% opacity border, no shadow. Hover: subtle elevation/`translateY(-2px)`. Focus-within: highlight border. Skeleton shimmer loading state. Empty state with Google Icon + guidance text.
- **Light Inversion Card:** `#f1f3f4` bg, `#121719` text, 4px radius, 24px padding.

### Form Input
- `#2b3133` bg, 1px border `#acaeaf`/`#909394` at low opacity, 4px radius, padding 14px 16px. Text Inter 16px `#ffffff`. Placeholder `#909394`. Label above Inter 14px 500 `#ffffff`, margin-bottom 8px.
- States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex wrapper with label, input, error feedback container.

### Pill Badge
- Varying bg (`#222729` or tinted), Inter 13–14px 500, 100px radius, padding 6px 12px. Compact.

### Top Navigation Bar
- Transparent or `#121719` bg, no shadow. Logo left (fictional wordmark + cyan-to-violet diamond icon via gradient — the only gradient allowed), center nav links Inter 14px `#ffffff` with dropdown chevrons (Material Symbols), right side "Login" text link + coral "Book a Demo" pill CTA. Sticky on scroll.

### Trust Logo Grid
- 3×6 grid of monochrome white logos on `#121719`, no card containers, uniform ~24px height, 48px row spacing, even horizontal distribution. Caption above: Inter 16px `#909394` ("4,400+ in-house teams and law firms trust [Brand]").

### Hero Section
- Centered on `#121719`. Display headline Playfair Display 67–77px 500 `#ffffff`, letter-spacing -2.01 to -3.08px, line-height 1.0. Subhead Inter 18px `#909394`. Two-button stack: coral primary + ghost secondary, centered. ~120px top/bottom padding.

### Feature Card with Document Preview
- Dark card containing a mock document screenshot with annotation overlays (underlined blue phrases, floating white "Review Contract" pill and "26 suggestions..." counter badge). Demonstrates product visually.

### Footer / Closing Form
- Heading Playfair Display ~51px. Subtext Inter 16px `#909394`. Form with dark inputs (`#2b3133`), single coral CTA "Try [Brand] Free", legal disclaimer Inter 14px `#909394`. Thin low-opacity `#ffffff` divider.

## 5. Required Page Sections
Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 6. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both modes; never rely on color alone; semantic HTML5; correct ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions use distinct `.btn-danger` in both themes.

## 7. Modal/Popup (if used)
Opening/Open/Loading/Success/Error/Closing animated via CSS transitions. Centered flex container, backdrop overlay, Material Symbols close button, focus trapping, close via Esc or overlay click.

## 8. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy was supplied; placeholders only where content genuinely unspecified.
- All user-facing copy in English.

## 9. Edit Mode (not applicable — from-scratch build)
N/A.

## 10. Final Instruction
Output only the three files' content as specified. Do not include preamble or commentary. Invent all brand names, product names, and copy. Never use "Spellbook" or its trademarks. Apply the midnight editorial style throughout.
