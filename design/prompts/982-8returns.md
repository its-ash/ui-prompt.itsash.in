# Coding-AI Prompt: 8returns-Style Landing Page

## 1. STRICT RULES & ARCHITECTURE

**1.1 CSS-First Architecture & Zero Inline CSS**
- Keep all styling strictly inside `style.css`. No `style="..."` attributes in HTML.
- Target all design properties, layout rules, and states via class or ID selectors only.
- HTML must remain clean, semantic, and agnostic of visual styling so the look can change by editing CSS alone.

**1.2 CSS Variables & Theme Tokens**
Store all visual tokens in `:root` (and theme classes) using CSS variables:
- Colors: `--primary` (#cfff69), `--secondary` (#6289ff), `--bg-primary` (#eef0f2), `--bg-secondary` (#ffffff), `--bg-dark` (#051923), `--bg-dark-card` (#004853), `--text-primary` (#051923), `--text-secondary` (#525252), `--text-tertiary` (#a1a1aa), `--text-on-dark` (#ffffff), `--text-success`, `--text-error`, `--border-default` (#e0e0e0), `--border-strong` (#051923), `--border-on-dark` (#ffffff), `--border-hero-frame` (#1e3039), `--accent-lime` (#cfff69), `--accent-cobalt` (#6289ff).
- Contrast pairing: light backgrounds pair with dark text; dark backgrounds pair with light text — enforce for every theme.
- Light mode background must not be pure white; use #eef0f2 (Steel Mist) as the page canvas. Where a near-white is needed, use #fefefe.
- Border radius: `--radius-tag` (6px), `--radius-input` (12px), `--radius-card` (16px), `--radius-hero-frame` (24px), `--radius-pill` (32px).
- Shadows: `--shadow-xl` (rgba(0,0,0,0.25) 0px 25px 50px -12px), `--shadow-subtle` (rgba(0,0,0,0.07) 0px 1px 2px 0px), `--shadow-subtle-2` (rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.06) 0px 1px 2px 0px).
- Spacing: `--spacing-4`, `--spacing-8`, `--spacing-12`, `--spacing-16`, `--spacing-20`, `--spacing-24`, `--spacing-32`, `--spacing-40`, `--spacing-48`, `--spacing-64`, `--spacing-80`, `--spacing-96`, `--spacing-120`, `--spacing-128`, `--spacing-160` (4px base unit).
- Transitions: `--transition-fast`, `--transition-normal`, `--ease-standard`.
- Elevation/stacking: `--z-dropdown`, `--z-modal`, `--z-toast`.

**1.3 Mandatory Dark Mode Support**
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and/or a `.dark` class selector.
- Background and text CSS variables must switch seamlessly without HTML restructuring.
- User theme choice must persist via `localStorage`, falling back to `prefers-color-scheme` on first visit; provide a visible toggle control with correct `aria-pressed`/`aria-label` state.

**1.4 Flexbox Layout & Mobile-First Alignment**
- Build all layout structures using Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All flex layouts must be mobile-responsive out of the box (rows become columns on small viewports). Prevent horizontal scrolling.

**1.5 Framework Default & Tailwind CSS Integration**
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply` directives) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).

**1.6 Typography & Icons (Google Fonts Mandatory)**
- Strictly use Google Fonts for text and icons. No raw inline SVGs or local icon files.
- Text: bind Google Font (Inter as substitute for roobert) to `--font-base`. Weights 400, 500, 600, 700.
- Icons: use Google Material Symbols/Icons.

## 2. COMPONENT DESIGN SPECIFICATIONS

**2.1 Button Component**
- Default: flex layout (`display: flex; align-items: center; justify-content: center; gap: 0.5rem;`), min touch target 44x44px.
- Hover: visual shift (brightness/shadow) with `cursor: pointer`.
- Focus: distinct focus ring using CSS variables.
- Active/Pressed: `transform: scale(0.97)`.
- Loading: disables interactions, prevents double-clicks, renders CSS spinner or animated Google Icon without distorting dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback states driven by `--text-success` / `--text-error`.
- Primary CTA: #cfff69 fill, #051923 text, 32px pill radius, 12px/24px padding, roobert 600 14px. Use sparingly — one per viewport maximum.
- Ghost Outline: transparent bg, 1px border (#ffffff on dark / #051923 on light), matching text color, 32px radius, 12px/20px padding.

**2.2 Card Component**
- Default: flexible Flexbox layout, styled with subtle borders and elevation using CSS variables.
- Hover: elevation/shadow shift or subtle transform (`transform: translateY(-2px)`).
- Focus-within: highlights card borders when a child link/button receives focus.
- Loading (Skeleton): shimmer animation in CSS to prevent layout jumps.
- Empty State: structured fallback with Google Icon and clear guidance text.
- Feature Card: #ffffff bg, 16px radius, 1px #e0e0e0 border, 32px padding. No shadow.
- Testimonial Card: full-bleed image, 16px radius, no border. Overlaid bottom-left: large number (roobert 700, 48–60px, white) + caption (roobert 400, 14px, white). Brand logo top-left in white.

**2.3 Form & Input**
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: flex container wrapping label, input field, and dedicated error feedback container.
- Inputs: 12px border-radius.

**2.4 Modal / Popup**
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- UX: centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 3. CORE UX & MICRO-INTERACTION RULES

- Responsive by default: fluid sizing and responsive breakpoints without horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility (a11y): sufficient contrast in both Light and Dark modes. Never rely solely on color for state. Semantic HTML5, correct ARIA roles/labels, logical DOM/focus order, full keyboard operability, `aria-live` regions for dynamic feedback.
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: visually distinct in both light and dark themes.

## 4. DELIVERABLE & OUTPUT FORMAT

- File structure: separate `index.html`, `style.css`, `script.js`. No inline `<script>` blocks beyond a single deferred entry-point reference.
- Naming convention: enforce one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No unrequested placeholders: prohibit lorem-ipsum-only submissions where real copy/labels are supplied; placeholders allowed only where content was genuinely unspecified.

## 5. THEME-SPECIFIC DESIGN RULES (8returns Style)

- Hero: full-bleed #051923 background. Headline at 56px roobert 600, #ffffff, line-height 1.12. Subtitle at 18px roobert 400, #ffffff at 70% opacity. Primary CTA: #cfff69 fill, #051923 text, 32px radius, 12px/24px padding, roobert 600 14px. Below headline, product demo frame: 24px radius, 1px #1e3039 border, shadow rgba(0,0,0,0.25) 0px 25px 50px -12px, showing a white return-portal mockup over a muted landscape painting.
- Page canvas: #eef0f2 (Steel Mist). Cards: #ffffff. Dark cards: #004853. Hero/dark sections: #051923.
- Text: #051923 (primary), #525252 (secondary), #a1a1aa (tertiary), #ffffff (on dark).
- Borders: #e0e0e0 (default), #051923 (strong), #ffffff (on dark).
- Accent: #cfff69 (lime — CTAs and highlights only). Secondary accent: #6289ff (cobalt iris — tags and icons only).
- Tab nav item: roobert 14px 500. Inactive: #051923 at ~60% opacity. Active: #051923 with 2px lime (#cfff69) underline. Active label slightly bolder.
- Section pill tab: inactive transparent bg, #525252 text, roobert 500 14px. Active: #051923 bg, #ffffff text, 24px pill radius, 8px/20px padding. 8px gap between tabs.
- Highlight chip/tag: #6289ff at ~15% opacity bg or solid #6289ff with white text, 6px radius, 4px/10px padding, roobert 500 12px.
- Brand logo strip: monochrome logos in #051923 at ~50–60% opacity, evenly spaced, ~120px wide each. No dividers, no animation.
- Header nav: transparent on hero. Logo in roobert 700 18px white. Nav links roobert 400 14px white with dropdown chevrons. Right: 'Log in' plain white text, 'Book a demo' ghost outline button.
- Dark section tab bar: full-width #051923 band, 16px vertical padding. Tabs inline with active 2px lime underline.
- Product return item card: white surface, 12px radius, 1px #eef0f2 border, 16px padding. Left: 48px square thumbnail (8px radius). Middle: product name (roobert 500 14px) + variant (roobert 400 12px #525252). Right: price (roobert 600 14px). Status indicator above with colored dot.
- Gradients: dark teal radial (radial-gradient(80% 80%, rgb(0,102,112) 0%, rgb(0,72,83) 50%, rgb(0,56,64) 100%)) on dark hero sections; navy diagonal (linear-gradient(135deg, rgb(5,25,35) 0%, rgb(10,42,56) 100%)) on dark cards; cobalt diagonal (linear-gradient(135deg, rgb(98,137,255) 0%, rgb(74,111,224) 100%)) on cobalt accent surfaces. Never on text, primary CTAs, or spanning more than one component.
- Typography: Inter (Google Font substitute for roobert). Sizes: 10, 11, 13, 14, 16, 18, 20, 22, 26, 48, 56, 60, 64px. Line heights: 1.07–1.63. Letter spacing: 0.0050em to 0.0360em (positive, strongest at smallest sizes). Type scale tokens: caption (11px/1.5/0.31px), body (16px/1.56/0.58px), body-lg (18px/1.5/0.58px), subheading (20px/1.45/0.1px), heading-sm (26px/1.27/0.1px), heading (48px/1.16/0.1px), heading-lg (56px/1.12/0.1px), display (64px/1.07/0.1px).
- Do NOT use pure #000000 anywhere. Do NOT use pure #ffffff as page background. Do NOT apply shadows to feature cards. Do NOT mix radius values within a component type. Do NOT use more than one font family. Do NOT place lime or cobalt on white canvas without dark canvas behind. Do NOT use multiple vivid accent colors together.

## 6. PAGE STRUCTURE (Landing Page)

Build a complete landing page with these sections, in order:

1. **Header Navigation** — transparent top bar on hero. Logo, nav links (Platform, Pricing, Integrations, Resources, Company) with dropdown chevrons, 'Log in' text, 'Book a demo' ghost outline button.
2. **Hero** — full-bleed dark band. Centered text stack (headline + subtitle + lime CTA) + product demo frame below. Dark tab nav band below hero (full-bleed) listing product modules.
3. **Brand Logo Strip** — monochrome logos on white, centered max-width.
4. **Features** — 3 feature cards in a grid on Steel Mist canvas. Each: white card, 16px radius, 1px border, 32px padding, heading + body + small product UI mockup.
5. **How It Works** — 3 steps. Centered text stack + numbered steps with icons (Material Symbols) and descriptions.
6. **Testimonials** — horizontal carousel with left/right arrow controls. Testimonial cards with full-bleed photo, large statistic overlay, brand logo.
7. **Pricing** — 3 tiers. Cards with feature lists, price, CTA button. Highlight recommended tier.
8. **FAQ** — accordion-style Q&A. Expand/collapse with CSS transitions.
9. **Final CTA** — dark band (#051923) with headline + lime CTA button.
10. **Footer** — secondary links, logo, copyright. On Steel Mist or dark canvas.

## 7. BRANDING & COPY RULES

- Invent a completely fictional brand name, product name, and all copy. Never use the real brand name "8returns", its logo, trademarks, or product names anywhere in the page.
- All user-facing copy must be in English.
- Use realistic placeholder content for features, testimonials, pricing tiers, and FAQ items that fits a fictional SaaS/returns-management product.

## 8. EDIT MODE

Not applicable — this is a from-scratch build.

---

Output only the finished prompt. No preamble, no closing commentary. Mirror the structure of Sections 1–4 above with numbered headers and bolded sub-rules. Keep all CSS variable names, class names, and file names in English/ASCII. Translate any non-English copy guidance to English. If the user's request conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause rather than silently dropping the rule.
