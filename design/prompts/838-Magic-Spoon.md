You are a UI/UX coding agent. Build a complete, responsive landing page for a fictional high-protein snack brand (invent a fictional brand name, product names, and copy; never use the real brand name "Magic Spoon", its logo, trademarks, or product names). Deliver separate `index.html`, `style.css`, and `script.js` files. No inline CSS or inline script blocks beyond a single deferred entry-point reference. Use one consistent class-naming convention (BEM) throughout.

## 1. CSS-First Architecture & Zero Inline CSS
- All styling lives in `style.css`. No `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. Keep HTML clean, semantic, and styling-agnostic.
- Use Tailwind CSS utilities mapped to CSS variables where helpful, or clean custom CSS driven by `@layer`/`@apply`.

## 2. CSS Variables & Theme Tokens
Define in `:root` (light mode default) and `.dark` / `@media (prefers-color-scheme: dark)`:

Colors:
- `--color-electric-grape: linear-gradient(45deg, #e30ba6, #5b00ed)` (hero/promo fields)
- `--color-deep-concord: #3f0791` (headings, outlines, conversion buttons, product-link text)
- `--color-bubblegum-flash: #e30ba6` (gradient endpoint)
- `--color-sky-scoop: linear-gradient(0deg, #d4beff 50%, #bfedfe)` (pale blue bands)
- `--color-lilac-aisle: #dad9ff` (default canvas)
- `--color-soft-grape: #cac4f4` (category-control fills)
- `--color-marshmallow: #fefefe` (cards, controls, reversed text) — use `#fefefe` not `#ffffff`
- `--color-midnight-cereal: #000000` (footer, dark utility)
- `--bg-primary: #dad9ff`, `--bg-secondary: #fefefe`, `--text-primary: #3f0791`, `--text-secondary: #3f0791`, `--text-success`, `--text-error`, `--border-default: #3f0791`, `--border-error`, `--border-success`

Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in both themes.

Radius/shadows: `--radius-sm: 15px`, `--radius-md: 20px`, `--radius-lg: 25px`, `--radius-pill: 52px`, `--radius-full: 9999px`, `--shadow-sm`, `--shadow-md: rgba(0,0,0,0.08) 0px 15px 50px 0px`, `--shadow-lg: rgba(0,0,0,0.1) 0px 20px 60px 0px`.

Spacing/transitions: `--spacing-gap: 10px`, `--transition-fast`, `--transition-normal`, `--ease-standard`.

Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.

Typography: `--font-base: 'Poppins', sans-serif` (Google Fonts). Import Poppins (400,500,600,700,900) and Mabry Pro substitute (Arial Black) for review proof. Bind `--font-poppins` and `--font-mabry-pro`. Text tokens: `--text-body` (Poppins 400 16px/1), `--text-nav` (Poppins 700 16px/1), `--text-review-proof` (Mabry Pro/Arial Black 900 16px/1.2), `--text-price-label` (Poppins 700 24px/1.25), `--text-product-card-heading` (Poppins 700 32px/1.25), `--text-hero-heading` (Poppins 700 60px/1.05), `--text-section-heading` (Poppins 700 64px/1), `--text-display` (Poppins 700 80px/1).

Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Mandatory Dark Mode
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Seamless variable switching; persist choice via `localStorage`, fallback to `prefers-color-scheme` on first visit.
- Visible toggle control with correct `aria-pressed`/`aria-label`.

## 4. Flexbox Layout & Mobile-First
- All flex containers default to `align-items: center` unless justified exception.
- Mobile-responsive: rows become columns on small viewports; no horizontal scrolling.

## 5. Component States
Buttons: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow, pointer), focus (ring via variables), active (scale 0.97), loading (spinner, disabled interactions), disabled (opacity 0.5, greyscale, not-allowed), success/error (via `--text-success`/`--text-error`).

Cards: default (flex, subtle borders, elevation), hover (translateY(-2px)), focus-within (border highlight), loading skeleton (shimmer), empty state (icon + guidance).

Forms: empty, focused (ring), filled, valid, invalid (error border/text/icon), disabled, read-only. Flex container wrapping label, input, error feedback.

Modals: opening/open/loading/success-error/closing (CSS transitions), centered flex, backdrop, icon close button, focus trap, Esc/overlay close.

## 6. Core UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 7. Deliverables
- Sections: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.
- Hero: Electric Grape field, left dense product still-life placeholder, right Marshmallow Poppins 700 60px/63px headline, 2x2 grid of Marshmallow selector pills (Deep Concord 2px outline, 52px radius, Poppins 600 18px/27px).
- Features: 3 merchandise tiles (Marshmallow, 25px radius, product cutout, price, Poppins 700 32px/40px uppercase name, Mabry Pro 900 16px review proof, Deep Concord shop button).
- How It Works: 3 steps with icons and text.
- Testimonials: cards with review proof stamps.
- Pricing: 3 tiers with Deep Concord conversion buttons (20px radius).
- FAQ: accordion with expand/collapse.
- Final CTA: Electric Grape field with conversion button.
- Footer: Midnight Cereal ground, signup input (transparent fill, Marshmallow text/border, 30px radius, inset ring), secondary links.
- Navigation: compact bar over Electric Grape, Marshmallow Poppins 700 16px/16px uppercase labels, Marshmallow outlined 52px-radius bundle button right.

Do's: default canvas Lilac Aisle; alternate Lilac Aisle/Sky Scoop/Marshmallow/Electric Grape fields; Deep Concord for headings/outlines/buttons; Poppins 700 60px/63px or 64px/64px headlines; 52px outlined selectors, 20px filled buttons; 25px card corners; cut-corner 25px 25px 25px 0px for image/translucent panels; only specified shadows on elevated cards.

Don'ts: no black for headings/conversion; no 4/8/12px button radii; no display below 700; no pastel text; no heavy shadows on basic tiles; no neutral lifestyle photos; no single purple background.

Output only the finished prompt. No preamble or closing commentary. Mirror Sections 1–4 structure with numbered headers and bolded sub-rules. Translate all copy guidance to English. All user-facing copy must be in English. Keep CSS variable names, class names, file names in English/ASCII. If conflict with mandatory rules, keep mandatory rule and add one-line explicit exception clause.
