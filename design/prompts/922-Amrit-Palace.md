# Coding-AI Prompt: Amrit Palace Landing Page (Style Reuse Only)

## 1. Project Overview & Brand Handling
Build a complete, responsive landing page (Hero, Features (3 cards), How It Works (3 steps), Testimonials, Pricing (3 tiers), FAQ, Final CTA, Footer) using the "Amrit Palace" visual style as a reference only. **Invent a fictional brand name, product, and all copy. Never use the real brand name, logo, trademarks, or product names anywhere in the page.** All user-facing copy must be in English.

## 2. Strict Architecture Rules
- **CSS-First & Zero Inline CSS:** All styling in `style.css`. No `style="..."` attributes. Class/ID selectors only. Semantic, clean HTML.
- **CSS Variables:** Define all tokens in `:root` (and `.dark` / `@media (prefers-color-scheme: dark)` for dark mode) using `var(--...)`. Include: `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, `--border-error`, `--border-success`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--shadow-sm`, `--shadow-md`, `--spacing-gap`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`, `--font-base`.
- **Contrast Pairing:** Light backgrounds pair with dark text tokens and vice versa in every theme.
- **Light Mode Background:** Use `#d8cbb8` (parchment) as canvas, not pure white. Where near-white is needed use `#fefefe`.
- **Dark Mode:** Mandatory. Provide dark tokens under `@media (prefers-color-scheme: dark)` and `.dark` class. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with correct `aria-pressed`/`aria-label`.
- **Flexbox & Mobile-First:** Use Flexbox. Default `align-items: center` on every flex container unless justified. Mobile-responsive, no horizontal scroll.
- **Framework:** Tailwind CSS (or clean custom CSS with `@layer`/`@apply`). Utility classes map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts only. Text: Cormorant Garamond (display serif substitute) and Inter (sans substitute) via `<link>`/`@import`, bound to `--font-base`/`--font-display`. Icons: Google Material Symbols only. No inline SVGs or local icon files.

## 3. Theme Tokens (Amrit Palace Style)
Colors: `--color-parchment: #d8cbb8` (canvas), `--color-linen: #bfb4a3`, `--color-warm-stone: #b6ab9c` (hairlines), `--color-walnut: #978e81` (muted), `--color-espresso: #615b53`, `--color-onyx-warm: #2c2c2c` (primary text), `--color-midnight-roast: #292622` (dark overlays), `--color-saffron-glow: #d49653` (accent, stars/active only, 2-3 times per fold).

Typography: Display serif (Cormorant Garamond) weight 300, uppercase, sizes 22/26/50/65/69/115px, line-heights 0.80-1.20, letter-spacing -0.0400em (115/69/65), -0.0300em (50), -0.0350em (22), -0.0060em (26). Sans (Inter) weights 500/700, sizes 12/13/14/15/42/199px, letter-spacing -0.0160em (199), -0.0400em (42), -0.0100em (14/15), -0.0110em (13), -0.0120em (12). Type scale tokens: `--text-caption` (13px/1.3/-0.143px), `--text-body` (15px/1.4/-0.15px), `--text-body-lg` (26px/1.2/-0.156px), `--text-subheading` (42px/1/-1.68px), `--text-heading-sm` (50px/0.9/-1.5px), `--text-heading` (65px/0.85/-2.6px), `--text-heading-lg` (69px/0.9/-2.76px), `--text-display` (115px/0.8/-4.6px).

Spacing: compact density, scale 4/5/6/7/8/10/12/16/17/20/24/28/32/42/92/206px. Radius: tags 3px, cards 0px, inputs 3px, buttons 3px. Page max-width 1440px; section gap 120-160px; card padding 28px; element gap 12-16px.

## 4. Component Specifications
- **Ghost Outlined Button:** transparent bg, 1px solid `#2c2c2c` (light) / `#d8cbb8` (dark overlays), Satoshi 500 14px uppercase, letter-spacing -0.14px, padding 20px vertical/horizontal, radius 3px, no shadow. States: hover (brightness/shadow + cursor pointer), focus (ring via vars), active (scale 0.97), loading (spinner, disabled), disabled (opacity 0.5, greyscale, not-allowed), success/error (temp feedback).
- **Text Link Button:** no bg/border, underline on hover, Satoshi 500 13-15px uppercase, context color.
- **Editorial Section Heading:** serif 300, 50-115px, uppercase, line-height 0.8-0.9, letter-spacing -0.0400 to -0.0300em, color `#d8cbb8` on dark / `#2c2c2c` on light.
- **Card (Testimonial):** bg `#d8cbb8` (same as canvas), radius 0px, padding 52px top/28px sides/32px bottom, no shadow/border. Content: 5 saffron stars, review body Satoshi 500 14px `#2c2c2c`, source attribution micro caps top-right, author name `#978e81`.
- **Image Overlay Container:** full-viewport image, dark gradient overlay (transparent to rgba(41,38,34,0.7+)), text top-left/centered in `#d8cbb8`.
- **Star Rating Display:** 5 filled saffron stars 15px, score Satoshi 700 large, source label Satoshi 500 13px, white card with subtle border floating widget.
- **Menu Item Card:** transparent bg, no border, image + name (serif 300 or Satoshi 500) + description body-sm, container padding 0, internal spacing 16px.
- **Navigation Bar:** transparent over hero, left logo mark, center-left links (Home, Catering, Gift Cards, About, Contact) Satoshi 500 14px uppercase `#d8cbb8` letter-spacing -0.14px, right 'Menu' link, icon button (3px radius square), 'Order Now' with chevron, gift icon. No background bar.
- **Section Divider Rule:** 1px solid `#b6ab9c` full-width within max-width, no vertical padding.
- **Caption Label:** Satoshi 500 12px uppercase letter-spacing -0.144px, color `#978e81` or `#d8cbb8`.
- **Hero Meta Label:** Satoshi 500 12-14px uppercase letter-spacing -0.14px, flanks hero heading.

## 5. UX & Micro-Interactions
- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth transitions on state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.
- Motion: primary duration 0.4s ease, marquee 27s linear for signature dish scrolling only, cubic-bezier(0.25, 0.46, 0.45, 0.94) for interactive transitions. No parallax, scroll-triggered, or loading sequences.

## 6. Deliverables
- Separate `index.html`, `style.css`, `script.js`. No inline `<script>` beyond single deferred entry-point.
- One consistent class-naming convention (BEM) throughout.
- No lorem-ipsum-only where real copy supplied; placeholders only where unspecified.

## 7. Do/Don't Enforcement
- Do: serif 300 never bold; uppercase + tight tracking on headings 50px+; saffron only stars/active/decorative (2-3 per fold); 0px radius cards/sections/images, 3px buttons/tags/controls; 1px `#b6ab9c` hairline dividers; dark full-bleed hero + atmospheric sections then parchment canvas; body 14px Satoshi 500 -0.0100em; left-align body; marquee sparingly.
- Don't: round cards; box-shadows/elevation; second accent; body above 16/below 13; center body paragraphs; filled solid chromatic buttons; pure black text; gradients; bold serif (use Satoshi 700 for emphasis); additional serif/display faces.

## 8. Page Sections
Build: Hero (full-bleed dark photo overlay, hero wordmark 199px Satoshi 500, meta labels flanking, ghost CTA), Features (3 cards, sharp corners, flat, hairline), How It Works (3 steps), Testimonials (horizontal card row on parchment), Pricing (3 tiers), FAQ (accordion), Final CTA, Footer (secondary links). Layout: full-bleed sections, no centered max-width container, generous 120-160px section gaps, left-aligned editorial rhythm, floating transparent nav.

Output only the finished code files. No preamble.
