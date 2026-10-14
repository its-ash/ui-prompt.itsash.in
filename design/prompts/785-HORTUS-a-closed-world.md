# BUILD PROMPT — "HORTUS — a Closed World" · Neumorphic Landing Page

**Role:** You are a Senior Frontend Engineer and Expert UI Designer. Build the complete, production-ready landing page specified below **in a single attempt**. Do not ask clarifying questions — make expert decisions autonomously and deliver final, runnable code.

---

## 1. THEME & CREATIVE DIRECTION

**1.1 — Identity**
- Brand: **HORTUS — a closed world** — a premium brand for hand-sealed, self-sustaining terrariums (closed ecosystems that live for years without watering).
- Style: **Neumorphism (soft-UI)** with purposeful **gradient accents**.
- Keywords: terrarium, ecosystem, neumorphism, gradient. Era: 2020s digital.
- Mood: organic, calm, botanical luxury. Everything should feel like soft moss, glass, and pressed paper.

**1.2 — Color Palette (use exactly these hues)**
- Primary set: `#1c2418` (deep forest), `#10160c` (near-black forest), `#c9d8b8` (sage).
- Secondary set: `#6a5a3a`, `#4a3e28`, `#3a3020` (earth/soil browns).
- Light mode is the **default aesthetic**; dark mode is a fully token-swapped secondary theme (see 2.4).

**1.3 — Copy & Locale**
- Write **all user-facing copy in English**. No lorem ipsum anywhere.
- Write real, thematic marketing copy (sealed water cycles, zero maintenance, glass biomes). Suggested direction (adapt freely, stay on-theme): hero H1 "A world that waters itself."; CTAs "Build your world" / "How it works"; pricing tiers "Sprout / Canopy / Monolith"; FAQ about condensation, lifespan, placement.

---

## 2. MANDATORY ARCHITECTURE RULES

**2.1 — CSS-First, Zero Inline CSS**
- All styling lives in `style.css`. **The `style="..."` attribute is forbidden** anywhere in the HTML.
- Target every rule via class/ID selectors only. HTML stays semantic and style-agnostic: changing the theme must never require markup edits.

**2.2 — Design Tokens (CSS variables, required set)**
Define in `:root` (Light, default) and swap in dark themes. Required variables:

```css
:root {
  /* Surfaces & text (Light default) */
  --bg-primary: #c9d8b8;        /* page surface — mid-tone sage, NOT white */
  --bg-secondary: #1c2418;      /* dark panels (CTA band, footer) */
  --primary: #1c2418;  --primary-contrast: #c9d8b8;
  --secondary: #6a5a3a; --secondary-contrast: #fefefe;
  --text-primary: #10160c;      /* dark text on light bg */
  --text-secondary: #4a3e28;
  --text-on-dark: #c9d8b8;      /* light text on dark bg */
  --text-on-dark-muted: #a9bb93;
  --text-success: #35603a; --text-error: #97382a;  /* AA-verified on sage */
  --border-default: rgba(16,22,12,.2);
  --border-success / --border-error: derived from success/error hues;

  /* Neumorphic engine */
  --nm-shadow: rgba(110,128,88,.5);   --nm-highlight: rgba(254,254,254,.65);

  /* Structure */
  --radius-sm: 10px; --radius-md: 18px; --radius-lg: 28px; --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(16,22,12,.08); --shadow-md: 0 8px 24px rgba(16,22,12,.14);
  --spacing-gap: 1.5rem;
  --transition-fast: 150ms; --transition-normal: 300ms;
  --ease-standard: cubic-bezier(.4,0,.2,1);
  --z-dropdown: 100; --z-modal: 200; --z-toast: 300;

  /* Gradients */
  --gradient-forest: linear-gradient(150deg,#1c2418,#10160c);
  --gradient-earth: linear-gradient(150deg,#6a5a3a,#3a3020);
  --gradient-accent: linear-gradient(120deg,#1c2418,#6a5a3a);
}
```

- **Contrast pairing (enforced in every theme):** light backgrounds always carry dark text tokens and vice versa. In dark mode the pairing inverts: `--bg-primary: #10160c`, `--text-primary: #c9d8b8`, `--primary: #c9d8b8` with `--primary-contrast: #10160c`, and success/error shift to light variants (`#8fbf7f`, `#e08a72`). Dark-mode neumorphic tokens: `--nm-shadow: rgba(0,0,0,.6)`, `--nm-highlight: rgba(70,90,55,.28)`.
- Light mode must **never** use pure `#ffffff`; where a near-white is required, use `#fefefe` (glass highlights, text on brown).
- Verify every text/background pair in **both** themes meets WCAG AA (4.5:1; 3:1 for large display text). Adjust token values if needed — mood survives, contrast wins.

**2.3 — Neumorphic Surface System**
- Extruded: `box-shadow: 8px 8px 18px var(--nm-shadow), -8px -8px 18px var(--nm-highlight);` (also define a `--nm-out-sm` 4px variant).
- Pressed/inset: `box-shadow: inset 5px 5px 12px var(--nm-shadow), inset -5px -5px 12px var(--nm-highlight);`
- Neumorphic elements sit on `--bg-primary` (same hue as the page — shadows create the depth, never gradients on interactive surfaces). Gradients are reserved for: hero accent word, dark CTA/footer bands, featured pricing ring, the terrarium illustration, and subtle background washes.
- Neumorphism is contrast-hostile: every interactive element must therefore also carry a visible border (`--border-default`) or strong affordance so it is discoverable, plus a high-contrast focus ring.

**2.4 — Dark Mode (mandatory — explicit exception clause)**
- The source spec marks this theme Light ✓ / Dark ○; Light is the default aesthetic, but the mandatory dark mode is **not waived** — it must be fully implemented, toggleable, and token-swapped.
- Implement dark tokens twice for no-flash, no-JS correctness: once under `@media (prefers-color-scheme: dark)` scoped to `:root:not(.light)` and once under the `.dark` class on `<html>`. The JS explicitly sets `.dark` or `.light` per stored preference.
- Provide a **visible theme toggle** in the header: icon-only `<button>` with `aria-pressed` reflecting dark-active state, an `aria-label` that updates ("Switch to dark mode" / "Switch to light mode"), and Material Symbols `light_mode`/`dark_mode` swapping with a gentle rotation transition. Persist choice via `localStorage` ("hortus-theme"); first visit falls back to `prefers-color-scheme`; follow live OS changes when no explicit choice is stored.

**2.5 — Flexbox & Mobile-First**
- Build **every** layout structure with Flexbox — **do not use CSS Grid**. Card rows use `flex-wrap` with `flex: 1 1 320px` children so they flow 1-up → 3-up naturally.
- Every flex container defaults to `align-items: center`. Only three justified exceptions are permitted, each declared with a CSS comment: (a) `.input-group` uses column + `stretch`; (b) card rows use `stretch` for equal heights; (c) multi-line text stacks use `flex-start`. No others.
- Mobile-first: base styles are single-column; layer desktop layout at `min-width: 768px` and `1024px`. **Zero horizontal scrolling at any width** — fluid `clamp()` sizing, wrapping flex, and capped container (`max-width: 1200px`). Never "fix" overflow with hidden scrollbars.

**2.6 — Styling Stack (explicit exception clause)**
- The source spec requests raw CSS techniques (Flexbox, Transitions, Transforms, Gradients, Box Shadows, Border Radius), so the **clean custom CSS** option applies: no Tailwind, no frameworks, no CDN scripts. Write hand-crafted CSS with generic reusable component classes (`.btn`, `.card`, `.input-group`, `.section`, `.container`) and consistent **BEM** naming throughout (`.hero__title`, `.plan--featured`). Never mix conventions.

**2.7 — Typography & Icons (Google-only, mandatory)**
- Google Fonts via `<link ... display=swap>`: **Fraunces** (600/700) for display headings bound to `--font-display`; **Nunito Sans** (400/600/700) for body bound to `--font-base`. Nunito Sans's rounded terminals harmonize with the soft-UI system.
- Icons: **Google Material Symbols Rounded** only (`<span class="material-symbols-rounded">eco</span>`). **Inline SVGs, local icon fonts, and emoji icons are forbidden.** Use `font-variation-settings: 'FILL' 1` for filled icons (stars, checks, avatar glyphs). Decorative icons get `aria-hidden="true"`; meaningful icons get accessible text.

---

## 3. COMPONENT SPECIFICATIONS & STATES

**3.1 — Buttons (`.btn`)**
- Base: `display: flex; align-items: center; justify-content: center; gap: .5rem;` min touch target **44×44px**, `padding: .75rem 1.75rem`, `border-radius: var(--radius-pill)`, `cursor: pointer`, transitions on `transform/box-shadow/filter` at `var(--transition-fast)`.
- Variants: `.btn--primary` (forest gradient fill, `--primary-contrast` text), `.btn--secondary` (outline, `--border-default`), `.btn--neu` (sage surface with `--nm-out`), plus `.btn--danger` (terracotta-based, visually distinct in both themes — define even if unused).
- States, all via CSS classes/pseudo-classes: **hover** (brightness/shadow lift); **focus-visible** (double ring: `box-shadow: 0 0 0 3px var(--bg-primary), 0 0 0 5px var(--text-primary)` — must read on both themes); **active** (`transform: scale(0.97)`; `.btn--neu` switches to the inset `--nm-in` pressed look); **disabled** (`opacity: .5`, grayscale, `cursor: not-allowed`); **`.is-loading`** (locks dimensions, blocks double-clicks, `aria-busy="true"`, border-based CSS spinner via `::after` — no dimension shift); **`.is-success` / `.is-error`** (icon + `--text-success`/`--text-error`, never color alone — always pair with an icon and announced text).

**3.2 — Cards (`.card`)**
- Default: sage surface, `--nm-out` elevation, `--radius-lg`, generous padding, flex column, subtle `--border-default`.
- Hover: `translateY(-2px)` + deepened shadow (`var(--transition-normal)` ease). **Focus-within**: border/ring highlight when a child link or button is focused.
- Define (do not render) a `.skeleton` shimmer keyframe utility and an `.empty-state` pattern (Material Symbol + guidance text) so the system is complete.

**3.3 — Form & Input (`.input-group`)**
- Structure: `<label>` above `<input>`, plus a dedicated `.input-group__error` container (reserve its min-height to prevent layout jumps) with `aria-live="polite"`.
- Input surface: neumorphic **inset**. States: empty, focused (ring from 3.1), filled, `.is-valid` (success border + `check_circle` icon rendered via CSS `::after` using the Material Symbols font — no extra markup), `.is-invalid` (error border + `error` icon + visible message text), disabled, read-only. Never communicate validity by color alone.

**3.4 — Accordion (FAQ)**
- Each item: `<button class="accordion__trigger" aria-expanded="…" aria-controls="…">` containing the question text and a `expand_more` icon that rotates 180° when open; panel animated via the `grid-template-rows: 0fr → 1fr` transition technique. Fully keyboard operable (native buttons), single-open behavior synced with `aria-expanded`.

**3.5 — Scope boundary**
- No modals, toasts, carousels, or data fetching on this page — do not add them. The reserved `--z-modal`/`--z-toast` tokens still must be defined.

---

## 4. PAGE STRUCTURE — BUILD ALL OF THESE SECTIONS

**4.1 — Header / Navigation (sticky)**
- Neumorphic bar (`--nm-out-sm`) at `--z-dropdown`. Contents: brand (filled `eco` icon in an inset circle + "HORTUS" wordmark in Fraunces, letterspaced), anchor links (Features, How It Works, Testimonials, Pricing, FAQ) whose hover state is the **pressed inset look**, the mandatory theme toggle (2.4), and a `menu` hamburger below 768px that opens a stacked neumorphic panel (`aria-expanded`, closes on link click, `Escape`, and outside click). Set `scroll-padding-top` on `<html>` and `scroll-behavior: smooth` so anchors land correctly.

**4.2 — Hero**
- Two-column flex on desktop (text | visual), stacked on mobile, `align-items: center`.
- Text: eyebrow label "HORTUS — A CLOSED WORLD", H1 in Fraunces ("A world that waters itself." — the accent phrase uses `--gradient-accent` with `background-clip: text`), supporting paragraph, CTA pair (`Build your world` → `#pricing` as `.btn--primary`; `How it works` → `#how-it-works` as `.btn--neu`), and a trust row of three inset stat chips.
- Visual: a **pure-CSS terrarium** (no images, no SVG): a glass dome built from radial gradients + `#fefefe` highlight, layered soil strata from `--gradient-earth`, plants as large filled Material Symbols (`potted_plant`, `grass`, `eco`). Wrap in `role="img"` with a descriptive `aria-label`. Two floating neumorphic chips ("100% self-sustaining", "0 waterings") with a slow float keyframe. Add `aria-hidden` blurred gradient blobs behind the section using palette hues.

**4.3 — Features — exactly 3 cards**
- Section heading pattern (reuse everywhere): letterspaced uppercase eyebrow + Fraunces H2 ("Everything a world needs").
- Three `.card`s: sealed water cycle (`water_drop`), balanced light & humidity (`thermostat`), hand-blown glass (`bubble_chart`) — icon in an inset neumorphic circle, H3, two-sentence copy. Hover lift per 3.2.

**4.4 — How It Works — exactly 3 steps**
- Flex row (column on mobile) with dashed connector lines between steps on desktop: **01 Choose your ecosystem → 02 We plant & seal it → 03 Watch it thrive.** Inset number badges, H3 + copy per step, small filled icons.

**4.5 — Testimonials — 3 cards**
- Each: large `format_quote` glyph, quote text, 5 filled `star` icons with `aria-label="Rated 5 out of 5 stars"`, and an author row (`align-items: center`): CSS-only avatar circle (initials over `--gradient-earth`) + name and role.

**4.6 — Pricing — exactly 3 tiers**
- `Sprout $59` · `Canopy $129` (featured) · `Monolith $299`, one-time purchase, free sealed shipping. Each plan card: tier name, Fraunces price + billing note, 4–5 feature list items with filled `check` icons, CTA.
- Featured middle card: `.plan--featured` — gradient ring (two-background `padding-box/border-box` technique using `--gradient-accent`), subtle desktop-only `translateY(-8px)`, and a `Most popular` pill badge. No lift on mobile (avoid overflow).

**4.7 — FAQ**
- Five questions in the 3.4 accordion: opening the world, condensation, lifespan, placement, what's inside.

**4.8 — Final CTA**
- Full-width dark band (`--bg-secondary` + `--gradient-forest`, `--radius-lg` container, light text tokens). H2 "Close the loop. Open a world." plus the newsletter form: neumorphic-inset email input (dark-surface styling), `.btn--primary` submit (sage on dark via token inversion), and an `aria-live="polite"` feedback region. On submit: validate email → invalid: inline error per 3.3; valid: button `.is-loading` with spinner ~1.2s, then `.is-success` with `check_circle` + "You're on the list — welcome to the closed world." announced in the live region.

**4.9 — Footer (with secondary links)**
- Dark forest gradient footer. Flex-wrap columns: brand blurb + contact links; **Explore** (anchors to page sections); **Support** (Care Guide, Shipping, Warranty, Contact); **Legal** (Privacy, Terms) — use real anchor targets where they exist, `#` elsewhere. All links ≥44px touch targets. Bottom bar: "© {current year, set via JS} HORTUS" and a `arrow_upward` back-to-top icon button. Social/contact icons may only use available Material Symbols (e.g., `mail`, `public`, `rss_feed`) — brand logos are not in the icon set and inline SVGs are forbidden.

---

## 5. INTERACTIVITY — `script.js` (complete behavior list, nothing more)

1. **Theme manager** per 2.4 (localStorage, `prefers-color-scheme` fallback, OS-change listener, toggle `aria-pressed`/`aria-label`/icon sync).
2. **Mobile nav** toggle (aria-expanded, Escape, outside-click, close-on-navigate).
3. **Accordion** single-open controller syncing `aria-expanded`.
4. **Newsletter form** handler per 4.8 (validation, loading, success/error, double-submit prevention).
5. **Reveal-on-scroll**: IntersectionObserver adds `.in-view`; gate initial hidden styles behind a `.js` class added to `<html>` so content is fully visible if JS fails.
6. **Footer year**. One single `<script src="script.js" defer></script>` — **no inline script blocks**.

---

## 6. CORE UX, ACCESSIBILITY & MOTION

- **Semantic structure:** skip-to-content link, `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`; one H1, logical H2/H3 order, consistent section spacing (`clamp(4rem,8vw,6rem)`).
- **Keyboard:** full operability, visible focus rings everywhere, logical DOM/focus order, no mouse-only interactions.
- **Motion:** transitions on all state changes (`var(--transition-fast)` for micro, `var(--transition-normal)` for panels); **`prefers-reduced-motion: reduce`** kills float/reveal/accordion animations (transitions ≈ 0.01ms, content instantly visible).
- **Feedback:** every hover, click, and submission produces a visible state change; **never rely on color alone** for any state (pair color with icon + text); `aria-live` regions announce all dynamic feedback.
- **Responsive & a11y bar:** no horizontal overflow at any width, AA contrast in **both** themes, 44×44px minimum touch targets, ARIA states on all custom widgets (toggle, hamburger, accordion, form feedback).

---

## 7. DELIVERABLES & OUTPUT FORMAT

- Three files, output in full, labeled with paths: **`index.html`**, **`style.css`**, **`script.js`**. No build step — the page must run by opening `index.html`. External resources limited to Google Fonts and Material Symbols `<link>` tags.
- Consistent BEM naming across all files; zero inline styles (self-audit before delivering); zero inline SVGs; zero lorem ipsum; zero TODOs or placeholder comments.
- Deliver the complete final code immediately in one attempt — production quality, no explanations around the code.
