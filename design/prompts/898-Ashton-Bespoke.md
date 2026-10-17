# Landing Page Build Prompt — Fictional Brand, "Ashton Bespoke" Editorial Style

You are a senior front-end engineer. Build a complete, production-ready landing page as three separate files: `index.html`, `style.css`, and `script.js`. Do NOT use any framework beyond Tailwind CSS utility classes (loaded via CDN) layered over a dedicated `style.css`. No inline `style="..."` attributes anywhere in the HTML. All visual styling must live in `style.css` using class/ID selectors only.

## 1. Brand & Content Rules
- Invent a fictional brand name, product, and all copy. Never use "Ashton Bespoke" or any real trademark, logo, or product name from the source style reference.
- All user-facing copy must be in English.
- No lorem-ipsum-only submissions where real copy is expected; use plausible, original fictional copy for headlines, features, testimonials, pricing, and FAQ.

## 2. CSS-First Architecture
- All styling lives in `style.css`. HTML must remain semantic and agnostic of visual styling.
- No inline CSS. Class/ID selectors only.
- One consistent class-naming convention (BEM) across the entire deliverable.

## 3. CSS Variables & Theme Tokens
Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)`):

Colors:
- `--color-burnt-wine: #38141b` (footer, dark bands, atmospheric accent — used sparingly)
- `--color-ink-stone: #262626` (primary text, hairlines, borders, nav links)
- `--color-warm-parchment: #e0ded8` (dominant canvas, section backgrounds, cards)
- `--color-white: #ffffff` (elevated surfaces, inverted text on dark)
- `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success` mapped to the palette above with correct contrast pairing (light bg → dark text, dark bg → light text).

Typography:
- `--font-base` bound to a Google Font substitute for the serif display voice: Cormorant Garamond (weight 500) as the substitute for the custom serif. Load via Google Fonts `<link>`.
- `--font-sans` bound to Inter (substitute for Basis Grotesque Pro) loaded via Google Fonts.
- `--font-body-fallback` bound to system-ui / Helvetica / Arial stack.
- Type scale tokens: `--text-body-sm` (15px, lh 1.1, tracking 0.32px), `--text-subheading` (18px, lh 1.3), `--text-heading` (32px, lh 1.1, tracking 0.54px), `--text-heading-lg` (46px, lh 1.1, tracking 1.01px), `--text-display` (60px, lh 1.1, tracking 1.86px).

Spacing & Shapes:
- Base unit 4px. Spacing scale: `--spacing-4` (4px), `--spacing-8` (8px), `--spacing-12` (12px), `--spacing-16` (16px), `--spacing-20` (20px), `--spacing-24` (24px), `--spacing-32` (32px), `--spacing-40` (40px), `--spacing-48` (48px), `--spacing-60` (60px).
- `--spacing-gap` (24px), `--section-gap` (120px).
- `--radius-sm` (4px), `--radius-md` (4px), `--radius-lg` (4px). No radius larger than 4px anywhere.
- `--shadow-sm`, `--shadow-md`: defined but must resolve to `none` — this design forbids shadows.
- `--transition-fast`, `--transition-normal`, `--ease-standard`.
- `--z-dropdown`, `--z-modal`, `--z-toast`.

## 4. Mandatory Dark Mode
- Provide dark mode tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- Seamless variable switching without HTML restructuring.
- Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed` / `aria-label` state.

## 5. Layout & Flexbox Standards
- All layout structures use Flexbox (`display: flex`). Default `align-items: center` unless explicitly justified.
- Mobile-first responsive: rows convert to columns on small viewports. No horizontal scrolling.
- No max-width container — full-bleed editorial layout.
- Section vertical rhythm: 80–120px between sections; 24–32px between text blocks.

## 6. Typography & Icons
- Google Fonts only: Cormorant Garamond (serif display, weight 500) and Inter (sans utility). Include `<link>` tags.
- Google Material Symbols/Icons only. No raw inline SVGs or local icon files.
- Serif display: 32–60px with tracking 0.017em–0.031em. Never below 24px or above 60px.
- Body copy: 16px, left-aligned, line-height 1.40. Never centered or justified.
- All navigation, labels, captions in Inter (tracked sans). Never slab or geometric sans.

## 7. Component States (Enforce for All Interactive Elements)
Buttons (text-only, no fills, no background colors — links are text with underlines):
- Default: flex, align-items center, justify-content center, gap 0.5rem, min touch target 44x44px.
- Hover: visual shift (brightness/underline weight), cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active/Pressed: transform scale(0.97).
- Loading: disables interactions, CSS spinner or animated Google Icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary feedback via `--text-success` / `--text-error`.

Cards (interactive where applicable):
- Default: flex layout, subtle 1px `--color-ink-stone` border, no shadow, no radius.
- Hover: subtle transform translateY(-2px).
- Focus-within: highlight border.
- Loading (Skeleton): shimmer animation in CSS.
- Empty State: Google Icon + guidance text.

Forms/Inputs:
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input, error feedback container.

Modals/Popups:
- States: Opening, Open, Loading, Success/Error, Closing (CSS transitions).
- Centered flex container, backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both modes; never rely solely on color for state; semantic HTML5; correct ARIA roles/labels; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback.
- Mandatory visual feedback on every click, hover, submission.
- Destructive actions visually distinct in both themes.

## 9. Design Constraints (Ashton Bespoke Editorial Style)
- Dominant canvas: `#e0ded8` (warm parchment) for at least 60% of the page.
- Reserve `#38141b` (burnt wine) exclusively for the footer or at most one dark section per page.
- Borderless UI or 1px solid `#262626` hairlines only. No shadows, gradients, or rounded corners larger than 4px.
- Photographs full-bleed or edge-to-edge with no decorative frame beyond 1px border. No radius, no masking.
- Generous vertical rhythm: 80–120px between sections, 24–32px between text blocks.
- Pair serif display with Inter for all nav, labels, captions.
- No icons, badges, tags, or decorative elements beyond Google Material Symbols where functionally required.
- No button fills or background colors on interactive elements. Links are text-only with 1px solid underlines offset 1–3px from baseline. No color change on hover.
- No centered body paragraphs or justified text.
- Flatness philosophy: no elevation, no depth cues beyond 1px hairline.

## 10. Required Sections (Landing Page)
1. **Hero** — Full-viewport (100vh) dark image/video background. No overlay chrome, no CTA, no eyebrow. Single centered headline at 60px serif, white, tracking 1.86px, line-height 1.10. Transparent nav floats above: fictional brand wordmark (tracked sans, 18px, tracking 0.022em) left; four text links right, white over imagery.
2. **Features** — 3 cards. Each: serif heading + short body paragraph. Hairline 1px border, no shadow, no radius. Parchment or white surface. Flex layout, mobile-responsive.
3. **How It Works** — 3 steps. Numbered editorial chapter marks (small tracked sans label). Serif heading + body text per step. Vertical rhythm.
4. **Testimonials** — 2–3 quotes. Serif quote text, sans attribution. Hairline dividers or parchment surface. No avatars/icons.
5. **Pricing** — 3 tiers. Text-only, no filled buttons. Hairline borders. Tier name (serif), price (serif display), feature list (sans). Highlight one tier via 1px border emphasis or parchment/white surface shift only.
6. **FAQ** — Accordion using details/summary or semantic markup. Hairline borders. Serif question, sans answer. Keyboard accessible, aria-expanded.
7. **Final CTA** — Centered statement block on parchment. Serif headline + single text link (underlined). No button fill.
8. **Footer** — Full-bleed `#38141b` band. White text. Small sans label + short serif sign-off. Secondary links in white tracked sans. No social icons, no forms.

## 11. Deliverables
- `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference.
- BEM naming convention throughout.
- No unrequested placeholders where real copy is supplied; placeholders only where content genuinely unspecified.

## 12. Edit Mode (Not Applicable — From-Scratch Build)
This is a from-scratch build; ignore edit-mode constraints.

## 13. Output
Produce the complete landing page now, following every rule above. Ensure all interactive components implement every state listed in Section 7. Ensure dark mode, persistence, accessibility, and responsive behavior are fully functional. Ensure no real brand name, logo, trademark, or product name from the source style reference appears anywhere.
