# Coding AI Prompt — Henry-Themed Landing Page

You are an expert front-end engineer. Build a complete, production-ready landing page using the **Henry** visual theme: a near-monochrome dark editorial system — coal-black canvas, warm-gray (#d4d0c9) text/borders, whisper-light 300-weight headlines, pill-shaped CTAs, flat border-driven cards, and a single dramatic landscape hero photograph. Invent a fictional brand name, product, and all copy. Never use the real brand name "Henry", its logo, trademarks, or product names anywhere in the page.

## 1. Strict Architecture Rules

**1.1 CSS-First & Zero Inline CSS**
- Keep all styling in `style.css`. Forbid `style="..."` attributes in HTML.
- Target all design via class/ID selectors only. Keep HTML semantic and styling-agnostic.

**1.2 CSS Variables & Theme Tokens**
Define all tokens in `:root` (and `.dark`/`@media (prefers-color-scheme: dark)`). Required tokens:
- Colors: `--color-obsidian: #000000`, `--color-tar: #0c0c0c`, `--color-carbon: #141414`, `--color-bone: #d4d0c9`, `--color-ash: #878581`, `--color-smoke: #615f5c`, `--color-pearl: #d9d9d9`, `--color-graphite: #a1a1a1`, `--color-chalk: #fefefe` (use #fefefe, not #ffffff, where near-white is needed; reserve pure white for filled CTA and product mockup card only).
- Semantic aliases: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`.
- Radius: `--radius-sm: 6px`, `--radius-md: 10px`, `--radius-lg: 100px`.
- Shadows: `--shadow-sm: rgba(20,21,26,0.05) 0px 1px 2px 0px`.
- Spacing: `--spacing-4` … `--spacing-160` (4px base unit, compact density).
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Z-index: `--z-dropdown`, `--z-modal`, `--z-toast`.
- Enforce contrast pairing in both themes.

**1.3 Mandatory Dark Mode**
- Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class.
- Theme switching via `localStorage`, falling back to `prefers-color-scheme`; include a visible toggle with correct `aria-pressed`/`aria-label`.

**1.4 Flexbox & Mobile-First**
- Use Flexbox for all layouts. Default `align-items: center` unless justified.
- Mobile-responsive out of the box; no horizontal scroll.

**1.5 Tailwind CSS**
- Use Tailwind (or `@layer`/`@apply` driven custom CSS). Map utilities to CSS variables / reusable classes (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts)**
- Text: Google Fonts — Inter (300/400/500) as substitute for NB International Pro; JetBrains Mono for mono. Bind to `--font-base` / `--font-mono`.
- Icons: Google Material Symbols/Icons only. No inline SVGs or local icon files.

## 2. Component Specifications

**2.1 Buttons**
- Default: flex, `align-items: center`, `justify-content: center`, `gap: 0.5rem`; min 44x44px touch target.
- Hover: brightness/shadow shift, `cursor: pointer`.
- Focus: distinct focus ring via CSS variables.
- Active: `transform: scale(0.97)`.
- Loading: disable interactions, CSS spinner, no dimension distortion.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: feedback via `--text-success`/`--text-error`.
- Pill CTA (filled): white fill, black text, 100px radius, 8px 12px padding, weight 500, 12-14px.
- Ghost CTA: transparent, 1px #615f5c border, #d4d0c9 text, 100px radius, same padding.

**2.2 Cards (Skill, Stat, Product Mockup)**
- Default: flex layout, subtle borders, elevation via `--bg-secondary`.
- Hover: subtle `transform: translateY(-2px)` or shadow shift (whisper-soft only).
- Focus-within: highlight borders on child focus.
- Loading (skeleton): shimmer CSS animation, no layout jump.
- Empty state: Google Icon + guidance text.
- Skill card: #141414 bg, 10px radius, 1px border #d4d0c9 at ~12% opacity, 20px padding.
- Stat card: transparent/Carbon bg, no border; large number 32-48px weight 400; left vertical accent bar (green #1fe274 / blue #00a8f0 / orange #ff9634); label 16-20px Bone below.
- Product mockup card: #fefefe bg, 10px radius, 20px padding, max-width 480px, centered — the only light surface.

**2.3 Forms & Inputs**
- States: empty, focused (outline ring), filled, valid, invalid (error border/text/icon), disabled, read-only.
- Structure: flex container wrapping label, input, error feedback.

**2.4 Modal/Popup**
- States: opening, open, loading, success/error, closing (CSS transitions).
- Centered flex, backdrop overlay, Google Icon close button, focus trapping, close via Esc/overlay click.

## 3. Global UX & Micro-Interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- CSS transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes; never color-only state; semantic HTML5; ARIA roles/labels; logical focus order; full keyboard operability; `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 4. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond a single deferred entry-point reference.
- One consistent class-naming convention (BEM or fixed utility set) throughout — never mix.
- No lorem-ipsum-only submissions where real copy is supplied; placeholders only where content genuinely unspecified.

## 5. Page Sections Required

Build these sections in order: Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer with secondary links.

## 6. Henry Theme Specifics

- Near-monochrome dark: page bg #000000; cards #141414; nested #0c0c0c. No additional surface colors.
- Typography: Inter 300 for all headlines (whisper-light); 400 for body; never 600+ for display. Letter-spacing -0.02em body, -0.037em at 64px+. Type scale: caption 10px, body-sm 14px, body 16px, subheading 20px, heading-sm 24px, heading 32px, heading-lg 64px, display 96px (204px optional).
- Mono: JetBrains Mono 10px uppercase for section tags (e.g. "READY", "SKILL", "PROOF") — plain text, no chip styling.
- Borders: hairline #d4d0c9 at 10-15% opacity; lowest-emphasis #615f5c.
- Text: #d4d0c9 primary, #878581 secondary, #615f5c tertiary. Never cool blue-gray.
- Chromatic accents (green/blue/orange) only in stat cards.
- Navigation: transparent, flush to edges, logo lowercase ~14-16px weight 400, nav links 12px weight 400 white, ~24px gap, right side clusters secondary links + white pill CTA. No visible border/background.
- Integration logo chip row: transparent, brand logo + 12px name, Bone text, ~32-48px gaps, no containers.
- Section tags centered above headlines; 80px section gaps; centered headlines; max-width 1200px content frame after full-bleed hero.
- Hero: full-bleed landscape photograph (golden-hour mountains), headline 64-96px weight 300 white centered, subtext 16px weight 400 #d4d0c9 max-width 480px, two CTAs side by side (filled white pill + ghost pill), 80px padding.
- Do not use drop shadows beyond whisper-soft 1px lift; no card hover elevations.
- Do not break pill convention: 100px radius mandatory for all interactive elements.
- Responsive: 3-column grids collapse to 1 column on mobile; prevent horizontal scroll.

## 7. Output

Output only the finished prompt. No preamble or closing commentary. Mirror the numbered-header structure above. If any requested feature conflicts with a mandatory rule, keep the rule and add a one-line explicit exception clause rather than dropping the rule. Write all user-facing copy in English. Keep all CSS variable names, class names, and file names in English/ASCII.
