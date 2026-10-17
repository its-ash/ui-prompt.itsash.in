# Coding-AI Prompt: Supahub-Style Landing Page (Fictional Brand)

## 1. Project Overview & Architecture

Build a complete, responsive landing page for a **fictional** feedback/SaaS product. Do NOT use the real brand name "Supahub", its logo, trademarks, or product names anywhere in the markup, copy, or assets. Invent an original fictional brand name, product name, and all user-facing copy. Reuse only the visual style described below.

Deliverables: separate `index.html`, `style.css`, and `script.js` files. No inline `<script>` blocks beyond a single deferred entry-point reference. No inline CSS (`style="..."`) anywhere. All styling lives in `style.css`. Use one consistent class-naming convention (BEM) across the entire deliverable.

## 2. CSS-First Architecture & Theme Tokens

Store all visual tokens inside `:root` using CSS variables. Provide dark mode under `@media (prefers-color-scheme: dark)` and a `.dark` class selector. Persist user theme choice via `localStorage`, falling back to `prefers-color-scheme` on first visit; include a visible toggle with correct `aria-pressed`/`aria-label`.

### Color Tokens (Light Mode)
- `--color-voltage-violet: #862fe7` (primary CTA, active nav, accent text)
- `--color-ultra-violet: #5f259e` (deeper violet, hover/emphasis)
- `--color-lavender-mist: #ad6df4` (card bg, icon tints, gradient mid-stop)
- `--color-orchid-wash: #bd8ff0` (lightest violet wash behind cards)
- `--color-magenta-spark: #ff5fe4` (pink wash, decorative only)
- `--color-hot-pink-ray: #e22ba4` (saturated pink gradient stop)
- `--color-amber-pulse: #dc5f05` (warm orange gradient accent)
- `--color-midnight-ink: #111827` (primary text, borders, dark CTA bg)
- `--color-graphite: #3f4654` (secondary text, nav borders)
- `--color-slate: #6b7589` (tertiary text, icons, helper copy)
- `--color-pure-white: #fefefe` (card/surface bg, inverted text) — use `#fefefe` not `#ffffff` where near-white is needed
- `--color-fog: #f1f5f9` (alternate section bg)
- `--color-mist: #d8e0ea` (hairline borders, input borders, focus rings)
- `--color-mint-wash: #d6fcf4` (highlighted feature panels, tag bg)
- `--color-lavender-field: #ebdafd` (feature section bg)

### Semantic Tokens (required by architecture)
- `--primary: var(--color-voltage-violet)`
- `--secondary: var(--color-ultra-violet)`
- `--bg-primary: var(--color-pure-white)`
- `--bg-secondary: var(--color-fog)`
- `--text-primary: var(--color-midnight-ink)`
- `--text-secondary: var(--color-graphite)`
- `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`
- `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`
- `--z-dropdown`, `--z-modal`, `--z-toast`

### Typography
- Google Fonts: Bricolage Grotesque (400, 600) and Inter (400, 500, 600, 700). Bind display to `--font-bricolage-grotesque`, body to `--font-inter`. Never use Bricolage below 20px. Letter-spacing -0.025em on Bricolage at 32px+. Inter uppercase labels use +0.1em tracking.
- Type scale tokens: `--text-caption` (12px), `--text-body-sm` (14px), `--text-body` (16px), `--text-subheading` (20px), `--text-heading-sm` (24px), `--text-heading` (32px), `--text-display` (56px).

### Spacing & Shapes
- Base unit 4px. Spacing scale tokens `--spacing-4` through `--spacing-240` per spec. Section gap 80px, card padding 24px, element gap 16px.
- Border radius: nav 8px, cards 24px, pills 9999px, images 16px, buttons 12px, featured-card 40px.
- Shadows: single inset ring `--shadow-subtle: inset 0 0 0 1px rgba(11,61,121,0.16)`. Minimal product-mockup depth shadow `0 20px 40px rgba(124,58,237,0.15)`.

### Dark Mode
Define dark color tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Maintain contrast pairing: light bg → dark text, dark bg → light text. Theme switch seamless, no HTML restructuring.

## 3. Layout & Component Rules

- Flexbox for all layouts. Every flex container defaults to `align-items: center` unless explicitly justified. Mobile-first, responsive, no horizontal scroll. Page max-width 1200px centered.
- Tailwind CSS (or clean custom CSS via `@layer`/`@apply`) mapping utilities to CSS variables and reusable classes (`.btn`, `.card`, `.input-group`).
- Google Material Symbols/Icons only — no inline SVGs or local icon files.
- Accessibility: semantic HTML5, ARIA roles/labels, logical focus order, keyboard operability, `aria-live` for dynamic feedback, sufficient contrast both themes, never color-only state. Respect `prefers-reduced-motion`.
- Smooth transitions on all state changes via `var(--transition-normal)`.

## 4. Required Sections & Components

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

### Hero
Centered text stack over white. Eyebrow Inter 12px weight 700 uppercase +0.1em #862fe7. Headline Bricolage Grotesque 56px weight 600 #111827 -1.4px tracking, max-width 680–720px column. Supporting paragraph Inter 18px #6b7589. Button row: primary filled violet CTA + ghost outlined button. Below: avatar stack (4 overlapping 40px circles, -12px margin, 2px white border) + 5 gold stars + "loved by 300+ customers".

### Features (3 cards)
3-column grid of cards. White bg, 1px #d8e0ea border, 24px radius, 24px padding. Each: Google Icon, heading Bricolage 24px, body Inter 16px #6b7589.

### How It Works (3 steps)
3-column numbered steps. Numbered pill badge, heading, body copy.

### Testimonials
Masonry-style 4-column grid of testimonial cards. White bg, 1px #d8e0ea border, 24px radius, 24px padding. Avatar 48px circle, name Inter 16px weight 600, handle #6b7589 14px, quote Inter 15px #111827, ✕ icon top-right #d8e0ea, 5 gold stars #f59e0b bottom.

### Pricing (3 tiers)
3-column pricing cards. Middle tier highlighted with lavender #ebdafd bg and dark CTA. Each: plan name, price, feature list, CTA button.

### FAQ
Accordion list. Each item: question + expandable answer. Keyboard accessible.

### Final CTA
Full-width lavender #ebdafd band, 80px padding. Headline Bricolage 48px, dark filled CTA button.

### Footer
Secondary links grid, logo, copyright.

## 5. Component State Requirements

### Buttons (Primary Filled, Dark Filled, Ghost)
- Default: flex, align-items center, justify-content center, gap 0.5rem, min 44x44px touch target.
- Hover: brightness/shadow shift, cursor pointer.
- Focus: distinct focus ring via CSS variables.
- Active: transform scale(0.97).
- Loading: disabled, spinner/animated icon, no dimension distortion.
- Disabled: opacity 0.5, greyscale, cursor not-allowed.
- Success/Error: temporary feedback via --text-success/--text-error.

### Cards
Default flexible flexbox with subtle borders/elevation. Hover: translateY(-2px). Focus-within: highlight border. Loading skeleton shimmer. Empty state with icon + guidance text.

### Forms/Inputs
States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

### Modal/Popup
States: opening, open, loading, success/error, closing (CSS transitions). Centered flex, backdrop overlay, Google Icon close button, focus trap, Esc/overlay close.

## 6. Decorative Elements

- Gradient orbs behind product mockups only (never behind text/CTAs). Three recipes: violet radial, pink linear, amber radial at 0.2–0.4 opacity.
- Product preview cards: white surface, 16px radius, soft shadow, macOS traffic-light dots (red #ff5f57, amber #febc20, green #28c840) top-left 10px circles 4px gap, uppercase tracked section header #862fe7.
- Impact score badges: pill #1f2534 bg white text Inter 12px weight 700 9999px radius 2px/8px padding.

## 7. Do's and Don'ts (enforce)

- Bricolage Grotesque only for display/headings; Inter at 20px and below. Never mix at same size.
- Primary CTA #862fe7 on white; #111827 on lavender #ebdafd. Never reverse.
- Buttons 12px radius; 9999px pills only for avatars/tags/chips.
- -0.025em tracking on Bricolage at 32px+.
- Uppercase eyebrow Inter 12px weight 700 +0.1em, 16px above headline.
- Gradient orbs behind product mockups only, never behind text/CTAs.
- 80px section gap default; 48px between section header and first content block.
- No new sans-serif families. No #862fe7 on lavender. No sharp 0/4px radii on primary surfaces. No Bricolage below 20px. Max 3 gradient orbs per composition. Decorative pinks/amber only inside orbs. No heavy drop shadows.

## 8. Output

Output only the finished prompt content — no preamble, no closing commentary. Mirror the numbered-header structure above. If any request conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause. Write all user-facing copy in English. Keep all CSS variable names, class names, and file names in English/ASCII.
