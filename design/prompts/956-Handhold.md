# Coding AI Prompt — Handhold Editorial Landing Page

## 1. Project Overview
Build a complete, responsive landing page for a **fictional brand** (invent a name, product, and copy — never use the real "Handhold" brand name, logo, trademarks, or product names). The visual style must follow the "Handhold" editorial specification below. All user-facing copy must be in English.

## 2. File Structure & Naming
- Deliver three separate files: `index.html`, `style.css`, `script.js`.
- No inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`).
- No inline CSS (`style="..."` is forbidden). All styling lives in `style.css`.
- Use one consistent class-naming convention (BEM) across the entire deliverable — never mix conventions.
- No lorem-ipsum-only submissions; use realistic fictional copy for all sections.

## 3. CSS-First Architecture & Theme Tokens
Store all visual tokens in `:root` (and theme classes) using CSS variables. Required tokens:

**Colors (monochrome only — zero chromatic color):**
- `--color-ink-black: #000000` (primary text, headings, card borders, filled CTA backgrounds)
- `--color-paper-cream: #f2f1ed` (page canvas, default background)
- `--color-warm-border: #dbd7cd` (elevated surfaces, hairline dividers)
- `--color-stone-gray: #737373` (secondary body text, muted labels)
- `--color-ash-gray: #999999` (tertiary text, helper copy, disabled states)
- `--color-pure-white: #ffffff` (text on dark filled CTAs, card surfaces needing higher contrast)

**Standard tokens (mapped to Handhold values):**
- `--primary: #000000`, `--secondary: #737373`
- `--bg-primary: #f2f1ed`, `--bg-secondary: #ffffff`
- `--text-primary: #000000`, `--text-secondary: #737373`, `--text-success: #000000`, `--text-error: #000000`
- `--border-default: #dbd7cd`, `--border-error: #000000`, `--border-success: #000000`
- `--radius-sm: 8px`, `--radius-md: 24px`, `--radius-lg: 32px`
- `--shadow-sm: none`, `--shadow-md: none` (no shadows anywhere)
- `--spacing-gap: 16px`, `--transition-fast: 150ms ease`, `--transition-normal: 250ms ease`, `--ease-standard: ease`
- `--z-dropdown: 100`, `--z-modal: 1000`, `--z-toast: 2000`

**Fonts:**
- `--font-base: 'Inter', sans-serif` (Google Font, weight 400 only)
- `--font-display: 'Cormorant Garamond', serif` (Google Font substitute for bureauSerif at weight 300; closest whisper-weight serif available)
- Bind Google Font `<link>` tags in `<head>` for both Inter (400) and Cormorant Garamond (300).

**Typography tokens:**
- `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 16px`, `--text-subheading: 20px`, `--text-heading-sm: 28px`, `--text-heading: 40px`, `--text-display: 72px`
- Serif (display): weight 300, line-height 1.0, letter-spacing -0.03em, OpenType features `"liga" on, "kern" on`.
- Sans (body): weight 400, line-height 1.33 (12px), 1.43 (14px), 1.50 (16px); letter-spacing -0.013em (12px), -0.011em (14px), -0.009em (16px), 0em (16px+).

**Spacing tokens:** `--spacing-4: 4px`, `--spacing-8: 8px`, `--spacing-12: 12px`, `--spacing-16: 16px`, `--spacing-20: 20px`, `--spacing-24: 24px`, `--spacing-28: 28px`, `--spacing-32: 32px`, `--spacing-40: 40px`, `--spacing-48: 48px`, `--spacing-72: 72px`, `--spacing-80: 80px`, `--spacing-128: 128px`.

**Contrast pairing:** Every light background pairs with dark text; every dark background pairs with light text. Enforce for all themes.

**Light mode background:** Use `#f2f1ed` (warm cream), never pure white `#ffffff` for page backgrounds. Where near-white is needed, use `#fefefe`.

## 4. Mandatory Dark Mode
- Provide dark mode color tokens under `@media (prefers-color-scheme: dark)` and a `.dark` class selector.
- In dark mode, invert the palette: canvas becomes `#000000` or near-black, text becomes `#f2f1ed` or `#ffffff`, card surfaces become `#1a1a1a` or similar dark tone, borders become `#333333`. Maintain monochrome discipline.
- Theme choice persists via `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Include a visible toggle control with correct `aria-pressed` and `aria-label` state.
- Background and text CSS variables switch seamlessly without HTML restructuring.

## 5. Flexbox Layout & Mobile-First
- Build all layouts with Flexbox (`display: flex`).
- Every flex container must default to `align-items: center` unless there is an explicitly justified exception.
- All layouts must be mobile-responsive out of the box (rows convert to columns on small viewports). Prevent horizontal scrolling.
- Page max-width: 1200px, centered. Section gap: 48px. Card padding: 28-32px. Element gap: 16px.

## 6. Framework & Icons
- Use Tailwind CSS (or clean custom CSS driven by Tailwind's `@layer` / `@apply`) unless another framework is requested. All utility classes must map back to CSS variables or generic reusable class names (`.btn`, `.card`, `.input-group`).
- Use Google Material Symbols/Icons for all icons. Forbid raw inline SVGs or local icon files.
- Icons must be loaded via Google Fonts `<link>`.

## 7. Component Specifications

### 7.1 Button (Primary Filled CTA)
- Flex layout: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`
- Minimum touch target 44x44px.
- Background `#000000`, text `#ffffff`, Inter 14px weight 400, border-radius 9999px, padding 10px 18px, no border, no shadow.
- States: Hover (brightness/shadow shift, `cursor: pointer`), Focus (distinct focus ring via CSS variables), Active/Pressed (`transform: scale(0.97)`), Loading (disabled, spinner/animated icon, no dimension distortion), Disabled (opacity 0.5, greyscale, `cursor: not-allowed`), Success/Error (temporary feedback via `--text-success`/`--text-error`).

### 7.2 Ghost Navigation Link
- Inter 14px weight 400, text `#000000`, no underline by default. Radius 8px for any indicator treatment. Sits directly on canvas, no background.

### 7.3 Top Announcement Bar
- Full-width strip, Inter 12-14px weight 400, `#000000` text, transparent background, tight vertical padding (~8px), flush with page edges.

### 7.4 Editorial Display Headline
- bureauSerif (Cormorant Garamond 300) weight 300, sizes 40-72px, line-height 1.0, letter-spacing -0.03em, centered alignment.

### 7.5 Body Subtitle
- Inter 16px weight 400, color `#000000`, line-height 1.5, letter-spacing -0.009em, centered beneath display headlines. No muted color.

### 7.6 Partner Logo Strip
- Horizontal row of monochrome brand logos (invent fictional brand names), Inter 16px wordmarks or grayscale marks, evenly spaced (~32-40px gap), centered, logos in `#000000`.

### 7.7 Card Surface
- Background `#ffffff`, border-radius 24-32px, padding 28-32px, no shadow, no border.
- If interactive: Hover (elevation/shadow shift or `transform: translateY(-2px)`), Focus-within (highlighted border), Loading (skeleton shimmer), Empty State (Google Icon + guidance text).

### 7.8 Navigation Bar
- Transparent background over cream canvas. Logo left, nav links and sign-in right. Inter 14px weight 400, `#000000`. Minimal height (~56-64px), no bottom border, no background fill.

### 7.9 Sign In Link
- Inter 14px weight 400, `#000000`, no background, no border, right-aligned in nav. Equal visual weight to a nav link.

### 7.10 Form & Input (if used)
- States: Empty, Focused (outline ring), Filled, Valid (success border/icon), Invalid (error border, red text, error icon), Disabled, Read-only.
- Structure: Flex container wrapping label, input field, and dedicated error feedback container.

### 7.11 Modal / Popup (if used)
- States: Opening, Open, Loading, Success/Error, Closing (all animated via CSS transitions).
- Centered flex container (`align-items: center`), backdrop overlay, Google Icon close button, keyboard focus trapping, close via Esc or overlay click.

## 8. Page Sections to Build
1. **Hero** — centered single-column on cream canvas: announcement bar, nav bar, editorial display headline (72px), body subtitle (16px), primary CTA button (pill), decorative wave illustration placeholder (full-width, edge-to-edge).
2. **Partner Logo Strip** — 5 monochrome fictional logos, centered, 40px gap, 48px vertical padding.
3. **Features** — 3 cards (`#ffffff`, 32px radius, 32px padding): headline 28px serif, body 16px sans, 24px gap between headline and body.
4. **How It Works** — 3 steps with numbered indicators (Google Icons or numerals), serif subheadings, sans body text.
5. **Testimonials** — 2-3 testimonial cards with quote text (serif or sans), author name, role.
6. **Pricing** — 3 tiers with feature lists, price display, CTA buttons.
7. **FAQ** — accordion-style questions with expand/collapse (CSS-driven, keyboard accessible).
8. **Final CTA** — centered headline, subtitle, primary CTA button.
9. **Footer** — secondary links, logo, copyright, minimal layout.

## 9. Core UX & Micro-Interaction Rules
- Responsive by default: fluid sizing, responsive breakpoints, no horizontal overflow.
- Smooth animations: CSS transitions on all state changes (`transition: var(--transition-normal)`), respecting `prefers-reduced-motion`.
- Accessibility: sufficient contrast in both light and dark modes; never rely solely on color for state; semantic HTML5 elements; correct ARIA roles/labels on custom widgets; logical DOM/focus order; full keyboard operability; `aria-live` regions for dynamic feedback (form errors, toasts, loading states).
- Mandatory visual feedback: every click, hover, or submission triggers a visible state change.
- Destructive actions: `.btn-danger` visually distinct in both themes.
- No chromatic color anywhere — palette is strictly monochrome (0% colorfulness). The only chromatic element is the decorative wave illustration (blue/gold), which is a brand signature accent.
- No bold or semibold weights in either font family — emphasis comes from family switching, size stepping, and tracking adjustment only.
- No drop shadows, glows, or elevation effects. Structure via radius and whitespace.
- No `#ffffff` as page/section background — cream canvas is non-negotiable; white reserved for card surfaces and button text.
- Do not mix serif and sans within a single text block — headings are serif, body is sans, boundary is absolute.

## 10. Deliverables
- `index.html`: semantic HTML5, Google Font links, Material Symbols link, deferred script reference.
- `style.css`: all tokens, all component styles, dark mode, responsive breakpoints, animations.
- `script.js`: theme toggle with localStorage persistence, FAQ accordion, mobile nav toggle, any interactive state management. No form validation or modal logic unless explicitly requested — if needed, ask the user first.

## 11. Edit Mode (if modifying existing markup)
- Never introduce new HTML tags, components, or DOM nodes. Work only within existing element/class structure.
- Define CSS classes only for elements that already exist in markup.
- Do not write JavaScript for form validation, popups/modals, or utility/helper functions — ask the user how they want it handled.
- If a requested style change cannot be achieved without adding markup, stop and ask the user.

## 12. Output Format
Output only the finished prompt itself — no preamble, no closing commentary. Mirror the numbered header structure above. If any user request conflicts with a mandatory rule, keep the mandatory rule and add a one-line explicit exception clause rather than silently dropping the rule.
