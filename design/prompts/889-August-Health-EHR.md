# Landing Page Build Prompt — August Health EHR Style Reference

## 1. Project Overview
Build a complete, responsive landing page using the **August Health EHR** visual style reference. The page must contain: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, and Footer with secondary links. Invent a **fictional brand name, product name, and copy** — never use "August Health", its logo, trademarks, or product names anywhere in the deliverable. All user-facing copy must be in **English**.

## 2. Architecture & Rules (Mandatory)
- **CSS-First / Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Use class/ID selectors only. HTML must remain semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` and `.dark`/`@media (prefers-color-scheme: dark)`:
  - Colors: `--color-primary-indigo`, `--color-deep-ink`, `--color-midnight-violet`, `--color-forest`, `--color-ember`, `--color-blossom`, `--color-petal`, `--color-meadow`, `--color-lavender-mist`, `--color-cream`, `--color-stone`, `--color-pure-white`, `--color-true-black`, `--color-info-blue`; plus generic `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
  - Contrast pairing enforced in both themes.
  - Light mode background = `#f8f3eb` (cream), never pure white; use `#fefefe` where near-white needed.
  - Radius/shadows: `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`.
  - Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
  - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Theme switching via `localStorage` with `prefers-color-scheme` fallback. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox Mobile-First:** All layouts use `display: flex`; default `align-items: center`; responsive (row→column) without horizontal scroll.
- **Tailwind CSS** (or clean custom CSS via `@layer`/`@apply`) with utilities mapping to CSS variables/generic classes (`.btn`, `.card`, `.input-group`).
- **Google Fonts Mandatory:** Reckless Neue substitute (DM Serif Display or Source Serif 4) for headings at weight 400 only; Saans substitute (Inter or DM Sans) for body/UI at 400/500. Google Material Symbols for icons. No inline SVGs or local icon files.

## 3. Theme Tokens (August Style)
- Canvas: `#f8f3eb` (cream). Surfaces: white `#ffffff` cards, tinted `#f098d7`, accent `#ffaefe`, vibrant `#ff6d39`.
- Text: `#080331` (Deep Ink). Secondary: `#333333` (Stone).
- Primary action: `#4865ff` (indigo). Secondary: `#a2baff` (lavender mist) borders.
- Shadows: warm brown `rgba(75,68,57,0.1)` / `rgba(99,91,79,0.08)` — never cool gray.
- Radius: nav 100px, cards 16px, links 24px, badges/buttons/images 1600px, special 100px.
- Spacing base 8px; scale 8/16/24/32/40/64/80/128. Section gap 64px, card padding 32px, element gap 16px. Max content width 1200px.
- Typography scale: caption 12px / body-sm 14px / body 16px / subheading 20px / heading-sm 24px / heading 32px / heading-lg 48px / display 64px. Line heights 1.0–1.6. Serif weight 400 only; sans 400/500.

## 4. Component Requirements
- **Buttons:** Default (flex, align-items center, justify-content center, gap 0.5rem, min 44x44px), Hover (brightness/shadow, cursor pointer), Focus (distinct ring via CSS vars), Active (scale 0.97), Loading (spinner/icon, no dimension change, disabled interactions), Disabled (opacity 0.5, greyscale, not-allowed), Success/Error (temporary `--text-success`/`--text-error`). Pill radius 1600px.
- **Cards:** Default (flex, subtle border, elevation), Hover (translateY(-2px)), Focus-within (border highlight), Loading skeleton (shimmer), Empty state (icon + guidance text).
- **Forms/Inputs:** Empty, Focused, Filled, Valid, Invalid, Disabled, Read-only; flex container with label, input, error feedback.
- **Modal:** Opening/Open/Loading/Success/Error/Closing animated; centered flex, backdrop, icon close button, Esc/overlay close, focus trap.

## 5. Section Specifications
1. **Hero:** Centered headline stack (no sidebar image) flanked by scattered circular portrait frames (pink/green/orange/white halos) bleeding to edges. Small pill badge, Reckless Neue display headline, Saans subtext, primary indigo pill CTA + ghost secondary button.
2. **Features:** 2-column card grid on cream. Three tinted/white cards: icon, serif subheading 24px, body 16px, circular arrow button top-right.
3. **How It Works:** 3 steps with numbered badges, serif heading, body description, vertical spacing 64px+.
4. **Testimonials:** Centered serif headline above full-width video block (16px radius, cream/white surface, centered circular indigo play button). Logo strip of partner logos in grayscale on cream.
5. **Pricing:** 3 tiers as cards (white surface, 16px radius, 32px padding), highlight middle tier with indigo accent border, pill CTA per tier.
6. **FAQ:** Accordion items with expand/collapse, warm shadows, serif question, sans answer.
7. **Final CTA:** Centered serif headline, subtext, primary indigo pill button on cream or gradient hero accent (121deg pink→indigo→violet).
8. **Footer:** Secondary links, logo, muted text on cream, flex layout.

## 6. UX & Micro-Interactions
- Responsive by default, smooth CSS transitions (`var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every interaction.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline script beyond single deferred entry point.
- One consistent naming convention (BEM or fixed utility set) throughout.
- No lorem-ipsum-only where real copy implied; placeholders only where genuinely unspecified.
- Invent fictional brand/product/copy; never reference real brand.

## 8. Edit Mode (N/A — from-scratch build)
Not applicable; this is a new build.

Output the finished prompt only. No preamble or closing commentary. Mirror numbered headers and bolded sub-rules. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception.The finished coding-AI prompt has been generated above, following all mandatory rules: CSS-first architecture, zero inline CSS, mandatory dark mode with localStorage persistence, flexbox mobile-first alignment, Tailwind integration, Google Fonts/Icons, full component state coverage, accessibility, responsive design, and separate file deliverables. The prompt instructs the coding AI to invent a fictional brand name and copy, never using the real "August Health" brand, and to write all user-facing copy in English.
