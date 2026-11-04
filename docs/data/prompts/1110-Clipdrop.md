# Coding AI Prompt — Clipdrop-Style Landing Page (Fictional Brand)

Build a complete, responsive landing page for a **fictional** AI image-editing product. Do not use the real brand name "Clipdrop", "Jasper", or any real trademarks/logos/product names; invent an original brand name, product name, and all copy. Reuse only the visual style described below. Deliver three files: `index.html`, `style.css`, `script.js`. No inline CSS (`style="..."` forbidden); all styling lives in `style.css`. Use one consistent class-naming convention (BEM) throughout.

## 1. Architecture & Theme Rules

- **CSS-First, Zero Inline CSS:** All design properties, layout rules, and states via class/ID selectors in `style.css`. HTML stays semantic and styling-agnostic.
- **CSS Variables:** Define all tokens in `:root` (and a `.dark` class / `@media (prefers-color-scheme: dark)` override). Required tokens:
  - Colors: `--color-cobalt-signal: #1c60f6`, `--color-ember-vermillion: #fa4028`, `--color-midnight-ink: #24355c`, `--color-periwinkle-mist: #c9d7f5`, `--color-bone: #ededed`, `--color-ink-black: #000000`, `--color-charcoal: #2d2d2d`, `--color-graphite: #404040`, `--color-slate: #767676`, `--color-frost: #dddddd`, `--color-ash: #8f8f8f`, `--color-onyx: #171717`, `--color-paper-white: #ffffff`. Also map to generic tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
  - Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text in every theme.
  - Light mode background must not be pure white; use bone `#ededed` as canvas. Where near-white is needed use `#fefefe`.
  - Radius/shadow: `--radius-sm: 8px`, `--radius-md: 12px`, `--radius-lg: 16px`, `--shadow-sm`, `--shadow-md` (shadows defined but kept at `none` for flat system).
  - Spacing/transitions: `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`.
  - Elevation: `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Dark Mode Mandatory:** Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark`. Persist user choice via `localStorage`, falling back to `prefers-color-scheme` on first visit. Include a visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox Layout:** Default `align-items: center` on every flex container unless justified exception. Mobile-first, responsive, no horizontal scroll.
- **Tailwind CSS** (or clean custom CSS via `@layer`/`@apply`) unless another framework requested. Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Inter (400/500/600/700) bound to `--font-base`; editorial serif: Newsreader or GT Sectra substitute (weight 400) for headlines. Icons: Google Material Symbols only; no inline SVGs or local icon files.

## 2. Type Scale

- caption: 12px / 1.5
- body-sm: 14px / 1.5
- body: 16px / 1.4
- subheading: 20px / 1.2
- heading: 60px / 1.1 / -1.2px letter-spacing
- display: 96px / 1.1 / -1.92px letter-spacing

Editorial serif (weight 400) for all section/page headlines only; Inter for body, UI labels, buttons, captions. Never use serif for body/UI.

## 3. Spacing & Shapes

- Base unit 4px. Comfortable density.
- Spacing scale: 4, 8, 12, 16, 20, 24, 28, 32, 64px.
- Radius: tags/buttons/pills 9999px; cards/images/media 16px; links 8px; small buttons 12px.
- Page max-width 1200px centered; section gaps 64-80px; card padding 20-24px; element gap 8-12px.

## 4. Component Specifications

Enforce all states via CSS classes.

**Buttons:**
- Cobalt Primary: pill 9999px, `#1c60f6` bg, `#ffffff` text, Inter 500 14-16px, padding 12px vertical × 20px horizontal (or 14×24). Only filled CTA; one per section max.
- Ghost Outline: pill, 1px `#ededed` border on bone canvas, `#2d2d2d` text, 12×20 padding.
- Periwinkle Soft: pill, `#c9d7f5` bg, `#24355c` text.
- All buttons: flex `align-items: center; justify-content: center; gap: 0.5rem`, min 44×44px touch target, hover brightness/shadow + cursor pointer, focus ring via CSS vars, active `transform: scale(0.97)`, loading spinner (CSS or Material Icon, no dimension distortion, disables interaction), disabled opacity 0.5 + greyscale + not-allowed, success/error temporary states via `--text-success`/`--text-error`.

**Cards:**
- Tool Card: white `#ffffff` surface, 16px radius, no border/shadow, image-first full-bleed photo clipped to 16px radius, 20-24px padding on text block. Title Inter 600 16px `#2d2d2d` with small icon prefix (Midnight Ink `#24355c`); description Inter 400 14px `#404040`. Hover: `transform: translateY(-2px)`. Focus-within border highlight. Loading skeleton shimmer. Empty state with Material Icon + guidance text.
- Hero Visual Card: rounded 16px container with checkerboard transparency grid background, overlay text white 48-60px editorial serif, centered circular play button.

**Form/Input (if any):** empty, focused (outline ring), filled, valid, invalid (error border/text/icon), disabled, read-only. Flex wrapper label+input+error container.

**Modal (if any):** opening/open/loading/success-error/closing animated; centered flex, backdrop, Material Icon close, focus trap, Esc/overlay close.

**FAQ Accordion Row:** full-width, no bg, 1px `#ededed` bottom border. Question Inter 500 16px `#2d2d2d`, chevron Material Icon `#767676` left. Expanded answers 12-16px vertical padding.

**Header Nav Bar:** sticky, bone `#ededed` bg, no border, 64-80px height. Logo left (fictional brand name with accent word in Ember Vermillion `#fa4028`), nav links Inter 500 14px `#2d2d2d` centered/right, Sign-in/Sign-up as Ghost Outline Button far right.

**Editorial Section Heading:** serif 60px weight 400 letter-spacing -1.2px `#2d2d2d`, centered.

**Icon Prefix Tag:** Inter 600 16px, 4-8px gap, icon Midnight Ink `#24355c` 16-20px.

## 5. Page Sections (in order)

1. **Header** — sticky nav as above.
2. **Hero** — centered editorial serif headline at 96px weight 400 letter-spacing -1.92px `#2d2d2d`; subheadline body; one Cobalt primary CTA; full-width Hero Visual Card below with checkerboard bg, white overlay text 60px, centered play button.
3. **Features** — Editorial section heading "Tools" (or fictional equivalent); 3-column Tool Card grid with generous gutters 24-32px. Each card: full-bleed photo, icon prefix, title, description.
4. **How It Works** — 3 steps; each step: number/icon, title, description; flex layout, responsive (stack on mobile).
5. **Testimonials** — 2-3 quote cards on white surface, 16px radius, attribution with name/role.
6. **Pricing** — 3 tiers; cards white surface 16px radius; tier name, price, feature list, CTA (one Cobalt primary for recommended tier, Ghost for others).
7. **FAQ** — Editorial section heading; single-column centered stack of FAQ Accordion Rows.
8. **Final CTA** — centered editorial serif headline; one Cobalt primary button.
9. **Footer** — secondary links (Product, Company, Resources, Legal), social icons via Material Symbols, copyright. Bone canvas bg, no border.

## 6. UX & Micro-interactions

- Responsive by default; fluid sizing; no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never rely on color alone; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes (use cobalt/neutral extensions, no green/red semantic colors per Do's/Don'ts).
- No drop shadows on cards/buttons/nav; flat system. Hairline 1px `#ededed` borders for dividers.

## 7. Do's & Don'ts (enforce)

- Use editorial serif 60-96px for all section/page headlines; never sans-serif for these.
- Cobalt `#1c60f6` is the only filled button bg; one CTA per section max.
- 16px radius on all cards/images/media; 9999px on buttons/tags/pills only.
- Bone `#ededed` dominant canvas; white only for cards that lift.
- Ember Vermillion `#fa4028` exclusively with brand wordmark or single-point accents.
- 1px `#ededed` hairline borders for dividers; no shadows.
- Don't use serif for body/UI/buttons. Don't introduce green/red semantic colors. Don't add drop shadows. Don't use 9999px on cards/images. Don't fill large surfaces with Periwinkle Mist. Don't set body copy in pure black (use `#404040`/`#2d2d2d`). Don't stack more than one Cobalt primary per viewport.

## 8. Imagery

Photography is dominant visual content — lifestyle/product photography (people, fashion, objects, food) demonstrating AI capabilities. Full-bleed within 16px-radius card containers, no internal padding. Hero uses checkerboard transparency grid as signature graphic. No illustrations/3D renders/abstract decorative graphics. Icons minimal outlined/duotone in Midnight Ink or Slate, 16-20px, single-stroke.

Use placeholder image URLs (e.g., `https://picsum.photos/...`) for photos; checkerboard via CSS (repeating-linear-gradient).

## 9. Deliverables

- `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point reference.
- BEM naming throughout; never mix conventions.
- No lorem-ipsum-only submissions where real copy supplied; invent fictional brand/product/copy (no real brand names/trademarks).
- All user-facing copy in English.

## 10. Dark Mode Tokens

Under `.dark` and `@media (prefers-color-scheme: dark)`: invert canvas to deep dark (e.g., `#171717`/`#0f0f12`), card surface to `#242424`, text to `#ededed`/`#ffffff`, borders to `#333333`, cobalt stays `#1c60f6` (adjust if contrast), ember stays `#fa4028`. Ensure contrast pairing for every token.

## 11. JavaScript (script.js)

- Theme toggle with localStorage persistence + prefers-color-scheme fallback.
- FAQ accordion expand/collapse with ARIA attributes.
- Mobile nav toggle (if hamburger).
- Pricing toggle (monthly/annual) optional.
- No form validation/popup/utility logic beyond what's needed for UI state; if additional logic requested, ask user.

Output only the finished three-file deliverable structure described above. No preamble.
