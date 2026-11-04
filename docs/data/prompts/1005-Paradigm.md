You are an expert frontend engineer. Build a complete, production-quality landing page for a fictional B2B data/research product using the **Paradigm** visual style. Reuse the style only: invent a fictional brand name, product name, and all copy. Never use “Paradigm,” real company names, logos, trademarks, or product names anywhere in the page.

## 1. CSS-First Architecture & Zero Inline CSS

- Put all styling in `style.css`. Do not use `style="..."` attributes in HTML.
- Target all design properties through class or ID selectors only.
- Keep HTML semantic, clean, and visually agnostic so the entire look can change by editing CSS alone.
- Do not use inline event-handler attributes; attach behavior in `script.js`.

## 2. CSS Variables & Theme Tokens

Define all tokens in `:root` and override semantic tokens for dark mode. Preserve these source color tokens exactly:

- `--color-midnight-ink: #080b12`
- `--color-paper: #fefefe` (light-mode rule replacement for the source `#ffffff`; true `#ffffff` is allowed only for the hero primary button fill and product mockup card surface as an explicit exception)
- `--color-fog: #f6f7f8`
- `--color-pearl: #edeef1`
- `--color-stone: #d9d9d9`
- `--color-lavender-mist: #dbdbee`
- `--color-mist: #b5b9c4`
- `--color-pewter: #9898ae`
- `--color-steel: #848a9c`
- `--color-smoke: #acacae`
- `--color-ash: #9d9ea1`
- `--color-iron: #606167`
- `--color-graphite: #6c6d73`
- `--color-slate: #4f535e`
- `--color-charcoal: #2b2b2c`
- `--color-electric-iris: #0a33ff`
- `--color-periwinkle: #7f90ce`
- `--color-hero-dawn: linear-gradient(180deg, #010b18 0%, #010818 16%, #103b91 49%, #4c7de8 78%, #bad0ff 97%)`
- `--color-sky-whisper: #e2efff`
- `--color-sapphire-ink: #061353`
- `--color-mint-whisper: #e4f3e2`
- `--color-forest-ink: #03350f`
- `--color-sprout-whisper: #d6ffe0`
- `--color-saffron-whisper: #faeed1`
- `--color-amber-ink: #423301`
- `--color-blossom-whisper: #ffe6f7`
- `--color-mulberry-ink: #600537`
- `--color-plum-ink: #21034d`
- `--color-crimson-ink: #580101`
- `--color-apricot-whisper: #fee8dd`
- `--color-russet-ink: #581c01`

Also define the required semantic tokens:

- `--primary: var(--color-electric-iris)`
- `--secondary: var(--color-periwinkle)`
- `--bg-primary: var(--color-paper)`
- `--bg-secondary: var(--color-fog)`
- `--bg-tertiary: var(--color-pearl)`
- `--text-primary: var(--color-midnight-ink)`
- `--text-secondary: var(--color-graphite)`
- `--text-success: var(--color-forest-ink)`
- `--text-error: var(--color-crimson-ink)`
- `--border-default: var(--color-mist)`
- `--border-error: var(--color-crimson-ink)`
- `--border-success: var(--color-forest-ink)`

Spacing, radius, shadows, motion, and stacking tokens:

- `--spacing-4: 4px; --spacing-5: 5px; --spacing-6: 6px; --spacing-7: 7px; --spacing-8: 8px; --spacing-9: 9px; --spacing-10: 10px; --spacing-12: 12px; --spacing-14: 14px; --spacing-16: 16px; --spacing-24: 24px; --spacing-32: 32px; --spacing-40: 40px; --spacing-60: 60px; --spacing-120: 120px; --spacing-188: 188px`
- `--spacing-gap: 8px`
- `--radius-sm: 4px; --radius-md: 4px; --radius-lg: 16px; --radius-pill: 100px`
- `--shadow-sm: rgba(0, 0, 0, 0.04) 0px 1px 3px 0px`
- `--shadow-md: rgba(0, 0, 0, 0.06) 0px 1px 3px 0px`
- `--shadow-lg: rgb(255, 255, 255) 0px 0px 24px 0px inset`
- `--shadow-xl: rgba(0, 0, 0, 0.09) 0px 4px 40px 0px`
- `--shadow-focus: rgba(76, 120, 250, 0.14) 0px 0px 0px 3px`
- `--transition-fast: 150ms ease`
- `--transition-normal: 250ms ease`
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`
- `--z-dropdown: 100; --z-modal: 1000; --z-toast: 1100`

Typography tokens:

- `--font-display: "Lora", Georgia, serif`
- `--font-base: "Inter", system-ui, sans-serif`
- `--font-mono: "Inter", ui-monospace, monospace`
- Type scale variables: `--text-caption: 12px`, `--text-body-sm: 14px`, `--text-body: 16px`, `--text-subheading: 18px`, `--text-heading-sm: 21px`, `--text-heading-lg: 44px`, `--text-display: 54px`, with companion line-height and letter-spacing variables where needed.

Enforce contrast pairing in every theme: light background tokens pair with dark text tokens, and dark background tokens pair with light text tokens.

## 3. Mandatory Dark Mode Support

- Implement dark mode under both `@media (prefers-color-scheme: dark)` and `.dark`.
- Override semantic background, text, border, surface, and muted tokens without changing HTML structure.
- Dark mode palette: `--bg-primary: #0b0f17`, `--bg-secondary: #121826`, `--bg-tertiary: #1a2130`, `--text-primary: #f4f6fa`, `--text-secondary: #a9b0bf`, `--text-muted: #7f8696`, `--border-default: #2a3142`, `--border-subtle: #1f2533`, `--primary: #0a33ff`, `--primary-hover: #4c7de8`.
- Keep the hero surface dark in both themes.
- Persist the user’s theme choice in `localStorage`, falling back to `prefers-color-scheme` on first visit.
- Provide a visible theme toggle with correct `aria-pressed` and `aria-label` states.
- Respect `prefers-reduced-motion`.

## 4. Flexbox Layout & Mobile-First Alignment

- Use Flexbox for all layout structures.
- Every flex container must default to `align-items: center` unless a documented exception is required.
- Build mobile-first, convert rows to columns on small viewports, and prevent horizontal scrolling.
- Use a 1200px maximum content width, 80px section gaps on desktop, 16px card padding, and 8px element gaps.

## 5. Framework Default & Tailwind CSS Integration

- Use Tailwind CSS for layout, spacing, and responsive helpers, with all custom visual rules in `style.css`.
- Use `@layer components` and reusable classes such as `.btn`, `.card`, `.badge`, `.input-group`, `.table`.
- Map all utility usage back to CSS variables or generic reusable class names.
- Use one consistent BEM naming convention for custom component classes, e.g. `.card__title`, `.btn--primary`.

## 6. Typography & Icons (Google Fonts Mandatory)

- Load Google Fonts in HTML: Lora, Inter, and Material Symbols Outlined.
- Use Lora as the display serif substitute for Atacama VAR at 44px and above, weights 400–500, tracking `-0.06em` to `-0.05em`, line height 1.0–1.1.
- Use Inter for all UI text, weights 400, 500, 600, and 700, with tabular numerals enabled for numeric data.
- Use Material Symbols Outlined for all icons.
- The only permitted icon exception is thin-stroke outlined SVG list markers (X and check) with stroke width ~1.5px in `#080b12` or `#6c6d73`; no other inline SVGs or local icon files.

## 7. Component Design Specifications

### Buttons

Implement all states via CSS classes:

- Base: `display: flex; align-items: center; justify-content: center; gap: 0.5rem;`, minimum 44x44px touch target, 4px radius, transition on all state changes.
- Variants: hero primary (white fill, midnight text), hero secondary (transparent fill, white text), outlined (slate border, midnight text), danger (crimson emphasis), accent blue (only for in-product actions such as table “Enrich,” active tabs, active steps, and selected-row checks).
- Hover: brightness/shadow shift and `cursor: pointer`.
- Focus: visible focus ring using `--shadow-focus`.
- Active: `transform: scale(0.97)`.
- Loading: disable interaction, prevent double-clicks, render a CSS spinner or animated Material Symbol without changing button dimensions.
- Disabled: `opacity: 0.5`, greyscale, `cursor: not-allowed`.
- Success/Error: temporary feedback styles using `--text-success` or `--text-error`.
- Do not use blue filled buttons as landing-page CTAs; reserve blue for in-product actions and active states.

### Cards

- Base: flexible flex column, 4px radius, 16px padding, subtle border, `--bg-primary` surface, `--shadow-sm`.
- Hover: `transform: translateY(-2px)` and `--shadow-md`.
- Focus-within: highlight border for keyboard users.
- Loading: CSS shimmer skeleton without layout jumps.
- Empty state: Material Symbol plus clear guidance text.
- Product mockup card: 4px radius, white surface, signature `rgb(255, 255, 255) 0 0 24px 0 inset` inner glow, optional `linear-gradient(135deg, #7b95c4, #dfecff)` backdrop at low opacity, 16px interior padding around the screenshot.

### Forms & Inputs

If a newsletter, contact, or search input is included:

- Implement `.input-group` with label, input, and dedicated error feedback container.
- Support empty, focused, filled, valid, invalid, disabled, and read-only states.
- Use success/error border and icon feedback, never color alone.

### Data Table (Hero Mockup)

- Full-width table on white surface with 1px `#dbdbee` row dividers.
- Header: 13px Inter weight 500, `#6c6d73`, tabular numerals.
- Body cells: 14px weight 400, `#080b12`, tabular numerals, ~44px row height, 9–12px vertical padding.
- First selected row uses a `#0a33ff` square checkbox.
- Status cell uses a 4px pill: 4px/8px padding, 12px weight 500, Forest Ink text with 1px Forest Ink border for “Highest”/“High,” Crimson Ink for “Low.”
- Right-edge cell holds a filled blue “Enrich” button: 4px radius, 6px/12px padding, 13px weight 500, white text.
- Category tags use 4px radius, 2px/8px padding, 12px weight 500, pastel wash background with matching dark ink text and 1px border.

### Tabs

- 100px radius pills on a transparent bar.
- Inactive: 14px Inter 450, `#6c6d73`, 1px `#b5b9c4` border.
- Active: same dimensions, `#080b12` text, 1px `#080b12` border, white fill.
- Pills are reserved for tabs and step indicators only.

### Step Indicator

- 100px radius pills.
- Active: filled `#0a33ff`, white “Step 1” label.
- Inactive: white fill, 1px `#b5b9c4` border, `#2b2b2c` text.
- 13px Inter 500, 6px/12px padding.

### FAQ Accordion

- Use semantic disclosure markup (`details`/`summary`) or accessible button/panel pairs.
- Support open, closed, hover, focus, and transition states.
- Ensure full keyboard operability and correct ARIA states.

### Pricing Cards

- Three tiers with price, feature list, and CTA.
- Highlight the middle tier with a 1px `#0a33ff` border and a “Most popular” badge using a pastel wash and dark ink.
- Pricing CTAs should be outlined or secondary, not blue filled.

### Testimonials

- Card-based quotes with author name, role, and company.
- Do not use photographs of people; use initials in a circle or a Material Symbol avatar.

### Trust Logo Bar

- Full-width `#f6f7f8` band with 48px vertical padding.
- Centered eyebrow text: 14px Inter 400, `#6c6d73`.
- Single horizontal row of five monochrome fictional logo marks at uniform 24px height, 72px gap, centered as a group.

### Navigation & Footer

- Minimal top bar: brand mark left, four nav items center, “Log in” text and “Request a demo” outlined button right.
- Footer includes secondary links, brand mark, and copyright.
- All navigation must be keyboard accessible and responsive.

## 8. Core UX & Micro-Interaction Rules

- Make every layout responsive by default with fluid sizing and no horizontal overflow.
- Apply CSS transitions to all state changes using `--transition-normal`, respecting reduced motion.
- Ensure sufficient contrast in both light and dark modes.
- Never rely solely on color to communicate state.
- Use semantic HTML5 elements, correct ARIA roles/labels, logical focus order, and full keyboard operability.
- Include an `aria-live="polite"` region for dynamic status messages such as theme changes.
- Provide visible feedback for every hover, click, and submission.
- Make destructive actions visually distinct in both themes.

## 9. Deliverables & Output Format

- Produce separate `index.html`, `style.css`, and `script.js` files.
- Include only one deferred script entry point: `<script src="script.js" defer></script>`.
- Use one consistent BEM naming convention across the entire deliverable.
- Do not use lorem ipsum where realistic copy can be invented; use realistic invented copy for a B2B data/research product.
- Include realistic sample data in the hero table, three feature cards, three how-it-works steps, three testimonials, three pricing tiers, five FAQ items, and five trust logos.

## 10. Page Sections & Layout

Build these sections in order:

1. Hero: full-bleed `#080b12`, 1200px inner content, left-aligned 54px Lora headline in white, 18px Inter subhead in slate-equivalent muted gray, two CTAs side by side, then a tabs row and edge-to-edge data table mockup with `#dbdbee` tint.
2. Features: three cards with icon, heading, and description.
3. How It Works: centered heading over a horizontal row of three step pills with titles and descriptions.
4. Testimonials: three testimonial cards.
5. Pricing: three pricing cards.
6. FAQ: accessible accordion.
7. Final CTA: dark band with white primary button.
8. Footer: secondary links and brand.

## 11. Exceptions

- The source specifies `#ffffff` Paper; use `#fefefe` for near-white surfaces by default, with true `#ffffff` permitted only for the hero primary button fill and product mockup card surface.
- The source specifies thin-stroke outlined SVG icons; Google Material Symbols remain mandatory for all other icons, and thin-stroke SVGs are permitted only for X/check list markers and monochrome logo marks.
