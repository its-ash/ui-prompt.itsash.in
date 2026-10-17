You are an Expert UI/UX Prompt Architect. Generate a complete landing page for a fictional brand using the AIUC visual style. Do NOT use the name "AIUC", its logo, trademarks, or product names anywhere in the output. Invent a fictional brand name, product, and copy.

## 1. Architecture & Rules

- **CSS-First Architecture:** All styling in `style.css`. Zero inline `style="..."` attributes. Class/ID selectors only. Clean, semantic HTML agnostic of visual styling.
- **CSS Variables:** Store all tokens in `:root` under `@media (prefers-color-scheme: dark)` and a `.dark` class. Required tokens: `--color-canvas`, `--color-ink`, `--color-obsidian`, `--color-graphite`, `--color-smoke`, `--color-ash`, `--color-fog`, `--color-mist`, `--color-glacier-tint`, `--font-almarai`, `--font-abc-diatype`, `--font-abc-diatype-semi-mono`, `--font-system-sans-serif`, `--text-caption`, `--text-body-sm`, `--text-body`, `--text-subheading`, `--text-small-heading`, `--text-heading`, `--text-display`, spacing scale `--spacing-4` through `--spacing-120`, `--radius-sm: 4px`, `--radius-md: 4px`, `--radius-lg: 4px`, `--shadow-sm: none`, `--shadow-md: none`, `--spacing-gap: 10px`, `--transition-fast`, `--transition-normal`, `--ease-standard`, `--z-dropdown`, `--z-modal`, `--z-toast`.
- **Contrast Pairing:** Light backgrounds pair with dark text; dark backgrounds (obsidian plates) pair with light text. Enforce in both themes.
- **Light Mode Background:** Use `#ffffff` canvas (not pure white override needed; spec mandates #ffffff). Where near-white needed, use `#fefefe`.
- **Dark Mode:** Mandatory. Define dark tokens under media query and `.dark` class. Background/text variables switch seamlessly. Persist choice via `localStorage`, fallback to `prefers-color-scheme`. Visible toggle with `aria-pressed`/`aria-label`.
- **Flexbox:** All layouts use `display: flex`. Default `align-items: center` unless justified exception. Mobile-first, responsive, no horizontal scroll.
- **Tailwind CSS:** Use Tailwind or clean custom CSS via `@layer`/`@apply`. Utilities map to CSS variables or reusable classes (`.btn`, `.card`, `.input-group`).
- **Typography & Icons:** Google Fonts mandatory. Text: Almarai (weight 300 only for headlines), ABC Diatype (400 body), ABC Diatype Semi-Mono (400 labels/links). Icons: Google Material Symbols only. No inline SVGs or local icons.

## 2. Theme Tokens (Light)

- Canvas: `#ffffff`
- Ink: `#000000`
- Obsidian: `#1a1a1a`
- Graphite: `#323232`
- Smoke: `#5f5f5f`
- Ash: `#707070`
- Fog: `#8d8d8d`
- Mist: `#979595`
- Glacier Tint: `#d3dfeb`

Fonts: Almarai (300, headlines, -0.02em tracking: -0.48px at 24px, -0.80px at 40px), ABC Diatype (400, body 14/16/18/20px, line-height 1.40-1.50), ABC Diatype Semi-Mono (400, labels/links 12/14/16/18px, line-height 1.10-1.30), System sans-serif (12px fallback only).

Type scale: caption 12px/1.2/0, body-sm 14px/1.4/0, body 16px/1.5/0, subheading 18px/1.5/0, small-heading 20px/1.4/0, heading 24px/1.3/-0.48px, display 40px/1.2/-0.8px.

Spacing: 4,6,7,8,10,12,16,20,24,32,40,42,64,72,100,120px. Radius: 4px everywhere. Max-width 1200px. Section gap 80px. Card padding 24px. Element gap 10px.

## 3. Component Requirements

**Buttons:** Default flex, align-items center, justify-content center, gap 0.5rem, min 44x44px. Hover: brightness/shadow shift, cursor pointer. Focus: distinct ring via CSS vars. Active: scale(0.97). Loading: disable, spinner/icon, no dimension change. Disabled: opacity 0.5, greyscale, not-allowed. Success/Error: temp styles via success/error tokens. Primary CTA: filled #1a1a1a bg, white text, 4px radius, 6px/16px padding, Semi-Mono 12-14px. Only filled button; others ghost/text.

**Cards:** Flex layout, subtle borders, elevation via bg-secondary + CSS vars. Hover: translateY(-2px) or shadow shift. Focus-within: highlight border. Loading skeleton: shimmer CSS. Empty state: Google Icon + guidance text. 4px radius, 1px #000000 border, 24px padding.

**Forms/Inputs:** States: empty, focused (ring), filled, valid (success border/icon), invalid (error border, red text, error icon), disabled, read-only. Flex container wrapping label, input, error feedback.

**Modals:** Opening/open/loading/success/error/closing animated via CSS. Centered flex, backdrop, Google Icon close, focus trap, Esc/overlay close.

## 4. UX & Micro-interactions

- Responsive by default, fluid sizing, no horizontal overflow.
- Smooth transitions on all state changes (`transition: var(--transition-normal)`), respect `prefers-reduced-motion`.
- Accessibility: sufficient contrast both themes, never color-only state, semantic HTML5, ARIA roles/labels, logical focus order, full keyboard operability, `aria-live` for dynamic feedback.
- Mandatory visual feedback on every click/hover/submission.
- Destructive actions visually distinct in both themes.

## 5. Deliverables

- Separate `index.html`, `style.css`, `script.js`. No inline script beyond single deferred entry-point.
- One consistent class-naming convention (BEM or fixed utility set) across entire deliverable.
- No lorem-ipsum-only where real copy supplied; placeholders only where content unspecified.
- All user-facing copy in English.

## 6. Sections to Build

1. **Announcement Bar:** Full-bleed #1a1a1a strip, 12px system sans white centered text.
2. **Site Header:** White bg, no border, 24px vertical padding. Brand mark left (serif-feeling wordmark stacked two lines), nav items below in Semi-Mono 12-14px #323232, CTA right-aligned.
3. **Hero:** Full-bleed pale-blue alpine mountain photo background with subtle #d3dfeb cool wash. Headline Almarai 300 40px #1a1a1a -0.80px tracking, left-aligned ~5% viewport margin. Subtext 16px ABC Diatype 400 #323232 line-height 1.50 max-width 480px.
4. **Features:** 3 cards. White, 4px radius, 1px #000000 border, 24px padding. Each: icon, title (Almarai 24px 300), body text (ABC Diatype 16px 400 #323232). Flat, no shadows.
5. **How It Works:** 3 steps. Section header with hairline rule. Dark feature cards (#1a1a1a, 4px radius, square, white icon upper third, Semi-Mono 12px uppercase label) connected by thin #323232 line with circular icon center. Origin card left, Destination card right with radial blue glow on right edge.
6. **Testimonials:** White cards, 4px radius, 1px border. Quote text ABC Diatype 16px #323232. Attribution Semi-Mono 12px #707070.
7. **Pricing:** 3 tiers. White cards, 4px radius, 1px border. Tier name Almarai 24px. Price display 40px. Feature list ABC Diatype 16px. CTA button per tier (primary filled for recommended, ghost for others).
8. **FAQ:** Accordion-style. Question Almarai 20px #1a1a1a. Answer ABC Diatype 16px #323232 max-width 400px. Hairline dividers #000000.
9. **Final CTA:** Centered. Headline Almarai 40px. Subtext ABC Diatype 16px. Filled CTA button.
10. **Footer:** White bg, hairline top border. Links in Semi-Mono 12px #323232. Secondary links grouped. No shadows.

## 7. Style Constraints (Do/Don't)

- Do: Almarai 300 exclusively for headlines. -0.02em tracking. 4px radius everywhere. Achromatic palette; only #d3dfeb as atmospheric wash. 1px borders #000000/#323232 instead of shadows. Semi-Mono for functional labels, Regular for body. Body line-height 1.50, max-width ~400px.
- Don't: No drop shadows, glows, elevated cards. No saturated colors/gradients beyond #d3dfeb. No bold/semibold Almarai. No radius >4px. No system font for visible UI. No pill buttons. No mixing typography systems.

## 8. Imagery

Sparse atmospheric: single full-bleed alpine mountain photo in hero (pale icy blues/whites, #d3dfeb wash). No lifestyle/product/people photos. Partner logos grayscale tightly cropped. Small line icons in dark cards. Radial blue glow as only decorative element.

## 9. Layout

Max-width ~1200px centered, generous left alignment. Hero full-bleed breaking content column. Single-column rhythm after hero: section header + hairline rule, then two-zone (narrow text ~400px left, wider visual right). Nav: top bar left brand, vertical nav stack, right CTA, no sticky. Partner grid 5 columns. Process diagram: two dark cards with thin connector centered. Section spacing ~80px.

## 10. Output

Generate `index.html`, `style.css`, `script.js`. Fictional brand name, product, and English copy. No real brand references. Ensure dark mode toggle, theme persistence, accessibility, and all component states.
