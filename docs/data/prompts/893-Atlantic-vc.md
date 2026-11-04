# Coding-AI Prompt: Atlantic.vc-Style Landing Page (Fictional Brand)

## 1. Project Overview & Brand Fictionalization
Build a complete, production-ready landing page for a **fictional** brand (invent a new name, product, and copy — never use "Atlantic.vc", its logo, trademarks, or product names). Apply the Atlantic.vc visual style system exactly: midnight observatory wireframe aesthetic, electric blue + ice-white type on layered charcoal, cool-white borders. Theme is **dark**. Deliverables: separate `index.html`, `style.css`, `script.js`. No inline CSS (`style="..."` forbidden). All styling via class/ID selectors in `style.css`.

## 2. CSS-First Architecture & Tokens
- Store all tokens in `:root` (and `.dark` / `prefers-color-scheme: dark`). Provide dark mode by default (this is a dark theme); still include `@media (prefers-color-scheme: dark)` and a `.dark` class toggle with `localStorage` persistence and a visible toggle (`aria-pressed`, `aria-label`).
- Colors: `--color-ice-white: #d8eaff`, `--color-void-black: #000000`, `--color-carbon: #0d0d0f`, `--color-graphite: #232529`, `--color-slate: #2b2f33`, `--color-iron: #41464c`, `--color-steel: #565e66`, `--color-fog: #6c757f`, `--color-iron-edge: #565657`, `--color-electric-cobalt: #1f58f2`, `--color-signal-orange: #ff4105`. Map to semantic tokens `--primary`, `--secondary`, `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--text-success`, `--text-error`, `--border-default`, etc. Light backgrounds pair with dark text and vice versa.
- Light-mode background must not be pure white; use `#fefefe` where near-white needed.
- Radius: `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 24px`. Shadows: none (depth via surface stepping). Spacing scale 4/8/12/16/20/24/32/80/100/148/200/240px. Transitions `--transition-fast`, `--transition-normal`, `--ease-standard`. Z-index `--z-dropdown`, `--z-modal`, `--z-toast`.
- Typography: Google Fonts only. Monument substitute = Inter (weight 400 only). Mono substitute = JetBrains Mono. Bind `--font-base` (Inter) and `--font-mono` (JetBrains Mono). Type scale: caption 10px/1.00/1.6px (mono uppercase), body 14px/1.5/0.84px, heading-sm 24px/1.24/-0.24px, heading 64px/1.06/-0.64px, display 96px/1.00/-2.88px. Monument weight 400 only; letter-spacing -0.03em at 96px, -0.01em at 64px and below. Mono 10-14px uppercase, tracking 0.06-0.16em.
- Icons: Google Material Symbols only. No inline SVGs or local icon files.
- Layout: Flexbox default `align-items: center`. Mobile-first, no horizontal scroll. Max content width 1400px. Section gap 100px. Card padding 32px. Element gap 16px. Tailwind CSS or clean custom CSS with `@layer`/`@apply`; utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`). BEM naming consistently.

## 3. Visual Style Rules (Atlantic.vc)
- Surfaces layer: `#000000` → `#0d0d0f` → `#232529` → `#2b2f33`. No shadows, no gradients.
- All borders/hairlines 1px `#d8eaff` (ice white). Wireframe-in-light treatment.
- `#1f58f2` electric cobalt ONLY for highlight words inside neutral `#d8eaff` headlines, decorative sparkle mark, particle canvas. Never body text/borders/fills.
- `#ff4105` signal orange ONLY for outlined action buttons and active nav state. Never backgrounds/body text/decoration.
- Monument 400 at 64-96px for headlines; never bold. Add size, not weight.
- Radii: 8px buttons/tags, 16px cards, 24px large cards, 40.798px pills only for specific badges.
- No filled buttons; all CTAs outlined with chromatic borders on transparent backgrounds.
- Particle canvas: full-bleed WebGL/Canvas rendering `#1f58f2` dots on `#0d0d0f`, hero section only.
- Decorative sparkle: 6/8-point star `#1f58f2`, ~40px, hand-drawn jitter, left of section headlines.
- No illustrations, 3D, product screenshots.

## 4. Sections Required
1. **Hero**: full-viewport, particle canvas background, 96px Monument headline (neutral words `#d8eaff`, accent words `#1f58f2`), no subheadline, scroll indicator (24px bordered square with chevron) ~50px above fold. Top nav: logo left, nav items (HOME, APPROACH, TEAM, PORTFOLIO, STORIES, JOBS) center-left in Mono 10-12px uppercase tracking 0.16em, color `#d8eaff` inactive / `#ff4105` active with marker dot, CTA (outlined orange) far right. 1400px max container.
2. **Features**: 3 cards, `#0d0d0f`/`#2b2f33` bg, 1px `#d8eaff` border 20% opacity, 16px radius, 32px gap, logos/icons centered, Mono labels above.
3. **How It Works**: 3 steps, numbered, Monument headings, Mono labels.
4. **Testimonials**: cards with quote, author, role.
5. **Pricing**: 3 tiers, outlined cards, outlined orange CTA on recommended tier.
6. **FAQ**: accordion, keyboard accessible, `aria-expanded`.
7. **Final CTA**: outlined orange button, headline.
8. **Footer**: secondary links, `#232529` border region, void black base.

## 5. Component States (enforce all)
- **Buttons**: default (flex, center, gap 0.5rem, min 44x44px), hover (brightness/shadow + cursor pointer), focus (ring via vars), active (scale 0.97), loading (spinner, disabled, no double-click), disabled (opacity 0.5, greyscale, not-allowed), success/error (temp states via `--text-success`/`--text-error`).
- **Cards**: default, hover (translateY -2px), focus-within, loading skeleton (shimmer), empty state (icon + text).
- **Forms/Inputs**: empty, focused (ring), filled, valid, invalid (error border/text/icon), disabled, read-only. Flex container with label, input, error feedback.
- **Modal**: opening/open/loading/success-error/closing animated; backdrop, close button (Material Icon), focus trap, Esc/overlay close.

## 6. UX & Accessibility
- Responsive, fluid, no overflow. Smooth transitions respecting `prefers-reduced-motion`. Sufficient contrast both modes. Semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback. Mandatory visual feedback on every interaction. Destructive actions visually distinct both themes.

## 7. Deliverables
- `index.html`, `style.css`, `script.js`. Deferred script entry point. BEM naming. No lorem-ipsum-only where real copy supplied; placeholders only where unspecified. All user-facing copy in English.

## 8. Edit Mode
N/A (from-scratch build). If any requested style needs new markup, stop and ask.

Output only the finished prompt. No preamble or closing commentary. Mirror numbered headers and bolded sub-rules. If conflict with mandatory rules, keep rule and add one-line exception. All output in English. Translate any non-English copy to English. All CSS vars, class names, file names in English/ASCII.
