# SYSTEM PROMPT: LANDING PAGE — "VAULTKEY" (FICTIONAL BRAND)

**Role:** You are an Expert Front-End Engineer. Build a complete, production-ready landing page for a fictional password-manager brand called **VaultKey**. The visual language must strictly follow the "Dashlane — Style Reference" provided in the context (Midnight vault with mint keyholes), but **you must never use the real brand name "Dashlane", its logo, trademarks, or product names**. Invent all copy, metrics, and feature names for VaultKey.

**Output:** Three separate files: `index.html`, `style.css`, `script.js`. No inline CSS, no inline `<script>` blocks beyond a single deferred entry-point reference (`<script src="script.js" defer></script>`). Use BEM naming convention (`.block__element--modifier`) consistently across all files.

---

## 1. ARCHITECTURE & CORE RULES (NON-NEGOTIABLE)

### 1.1 CSS-First & Zero Inline CSS
- All styling lives in `style.css`. **Forbidden:** `style="..."` attributes in HTML.
- HTML remains semantic and styling-agnostic. Visual changes require only CSS edits.

### 1.2 CSS Variables (Design Tokens) — `:root` & `.dark`
Define **every** token below in `:root`. Duplicate the full color set under `@media (prefers-color-scheme: dark)` **and** a `.dark` class selector so the theme toggle works via JS class toggle + OS fallback.  
**Contrast Pairing Rule:** Every background token must have a matching text token (light bg → dark text, dark bg → light text) for **both** light and dark modes.

```css
:root {
  /* Color Tokens (Dashlane Spec) */
  --color-cocoa-black: #200f0a;
  --color-cream-mist: #fcfaf9;
  --color-warm-sand: #e3ccc0;
  --color-ash-gray: #e5e7eb;
  --color-stone: #a69f9d;
  --color-deep-plum: #2b2538;
  --color-aubergine: #4d3f3b;
  --color-mint-keyhole: #a2f6f5;
  --color-iris: #858df9;
  --color-periwinkle: #6c74df;
  --color-lavender-mist: #b6bbfb;

  /* Semantic Aliases (use these in component rules) */
  --bg-page: var(--color-cocoa-black);
  --bg-card: var(--color-deep-plum);
  --bg-card-elevated: var(--color-aubergine);
  --text-primary: var(--color-cream-mist);
  --text-secondary: var(--color-stone);
  --text-on-primary: var(--color-cocoa-black);       /* for mint-filled buttons */
  --text-on-secondary: var(--color-iris);             /* for violet-outlined buttons */
  --border-hairline: var(--color-warm-sand);
  --border-secondary: var(--color-ash-gray);
  --accent-primary: var(--color-mint-keyhole);
  --accent-secondary: var(--color-iris);
  --accent-tertiary: var(--color-lavender-mist);

  /* Typography */
  --font-base: 'Inter', system-ui, sans-serif;        /* Google Font substitute for Saans */
  --font-mono: 'JetBrains Mono', monospace;           /* Google Font substitute for SaansMono */
  --font-weight-light: 300;
  --font-weight-medium: 500;

  /* Type Scale (clamp for fluidity) */
  --text-caption: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-body-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);
  --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-subheading: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);
  --text-heading-sm: clamp(1.75rem, 1.5rem + 1.25vw, 2.5rem);
  --text-heading: clamp(2.25rem, 1.875rem + 1.875vw, 3.5rem);
  --text-heading-lg: clamp(3rem, 2.5rem + 2.5vw, 4.5rem);
  --text-display: clamp(4.5rem, 3.5rem + 5vw, 7rem);
  --text-display-xl: clamp(6.25rem, 5rem + 6.25vw, 9rem);

  /* Line Heights */
  --lh-display: 1.10;
  --lh-heading: 1.17;
  --lh-subheading: 1.20;
  --lh-body: 1.50;

  /* Spacing (4px base) */
  --space-4: 4px; --space-8: 8px; --space-12: 12px; --space-16: 16px;
  --space-20: 20px; --space-24: 24px; --space-32: 32px; --space-36: 36px;
  --space-40: 40px; --space-44: 44px; --space-56: 56px; --space-64: 64px;
  --space-80: 80px; --space-120: 120px;

  /* Border Radius */
  --radius-pill: 9999px;
  --radius-card: 8px;
  --radius-input: 4px;
  --radius-img: 8px;

  /* Shadows / Elevation */
  --shadow-floating: 0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(227,204,192,0.1);
  --shadow-card: none; /* Flat cards per spec */

  /* Transitions */
  --transition-fast: 150ms var(--ease-standard);
  --transition-normal: 250ms var(--ease-standard);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);

  /* Z-Index */
  --z-nav: 100;
  --z-modal: 200;
  --z-toast: 300;
  --z-chat: 400;

  /* Layout */
  --container-max: 1200px;
  --section-gap: var(--space-80);
  --card-padding: var(--space-40);
  --element-gap: var(--space-24);
}
```

**Light Mode Override (inside `@media (prefers-color-scheme: light)` and `.light` class):**
- Invert semantic aliases: `--bg-page: #fefefe` (not pure white), `--bg-card: #ffffff`, `--text-primary: #200f0a`, `--text-secondary: #4d3f3b`, `--border-hairline: #e3ccc0`, `--text-on-primary: #200f0a`, `--text-on-secondary: #858df9`. Keep accent colors identical. Ensure contrast ratios ≥ 4.5:1.

### 1.3 Mandatory Dark Mode & Persistence
- Default: Dark (matches spec).  
- Toggle: `<button id="theme-toggle" aria-pressed="false" aria-label="Switch to light mode">` with Google Material Symbol `dark_mode` / `light_mode`.  
- Persist choice in `localStorage.theme` (`'dark' | 'light' | 'system'`). On load: read storage → apply `.dark`/`.light` to `<html>` → update toggle `aria-pressed`.

### 1.4 Flexbox & Mobile-First
- Every flex container: `display: flex; align-items: center;` by default. Override only with explicit justification.
- Mobile-first breakpoints: `640px`, `1024px`, `1280px`. No horizontal overflow at any viewport.

### 1.5 Tailwind CSS via CDN (or `@layer`/`@apply` in `style.css`)
- Use Tailwind utility classes **mapped to CSS variables** via `@theme` (Tailwind v3.4+) or `@layer utilities` with `@apply`.  
- Example: `.btn { @apply flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-250; }`  
- **No arbitrary values** (`bg-[#a2f6f5]`) — use semantic aliases (`bg-[var(--accent-primary)]`).

### 1.6 Google Fonts & Icons
- `<link rel="preconnect" href="https://fonts.googleapis.com">` + `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` + `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500&family=JetBrains+Mono:wght@300&display=swap" rel="stylesheet">` in `<head>`.
- Icons: `<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=dark_mode,light_mode,arrow_forward,check,lock,shield,key,visibility,visibility_off,menu,close,chevron_down,chevron_up,star,person,business,email,phone,globe,lock_open" rel="stylesheet">`
- **Forbidden:** Inline SVGs, local icon files, Font Awesome, Heroicons, etc.

---

## 2. COMPONENT SPECIFICATIONS (ALL STATES REQUIRED)

### 2.1 Buttons (`.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost`)
| State | Visual Rule |
|-------|-------------|
| Default | `display: inline-flex; align-items: center; justify-content: center; gap: var(--space-8); min-height: 44px; min-width: 44px; border-radius: var(--radius-pill); font-family: var(--font-base); font-weight: var(--font-weight-medium); font-size: var(--text-body-sm); padding: var(--space-12) var(--space-24); transition: var(--transition-normal);` |
| Primary | `background: var(--accent-primary); color: var(--text-on-primary); border: none;` |
| Secondary | `background: transparent; color: var(--accent-secondary); border: 1px solid var(--accent-secondary);` |
| Ghost | `background: transparent; color: var(--text-primary); border: none; padding: var(--space-8) var(--space-16);` |
| Hover (Primary) | `filter: brightness(1.1); box-shadow: 0 4px 16px rgba(162,246,245,0.3);` |
| Hover (Secondary) | `background: rgba(133,141,249,0.1);` |
| Focus-Visible | `outline: 2px solid var(--accent-primary); outline-offset: 2px;` |
| Active | `transform: scale(0.97);` |
| Loading | `position: relative; color: transparent !important; pointer-events: none;` + `::after { content: ""; width: 20px; height: 20px; border: 2px solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spin 0.6s linear infinite; }` |
| Disabled | `opacity: 0.5; cursor: not-allowed; pointer-events: none;` |

### 2.2 Cards (`.card`, `.card--stat`, `.card--testimonial`, `.card--feature`, `.card--pricing`)
- Base: `background: var(--bg-card); border-radius: var(--radius-card); padding: var(--card-padding); border: 1px solid color-mix(in srgb, var(--border-hairline) 30%, transparent); transition: var(--transition-normal);`
- Hover (interactive): `transform: translateY(-4px); box-shadow: var(--shadow-floating); border-color: color-mix(in srgb, var(--border-hairline) 60%, transparent);`
- Focus-Within: `border-color: var(--accent-primary);`
- Skeleton (Loading): `background: linear-gradient(90deg, var(--bg-card) 25%, var(--bg-card-elevated) 50%, var(--bg-card) 75%); background-size: 200% 100%; animation: shimmer 1.5s infinite;`
- Empty State: Centered flex column with Material Symbol (48px, `var(--text-secondary)`), `var(--text-body)` guidance text, `var(--space-16)` gap.

### 2.3 Form Inputs (`.form-group`, `.input`, `.label`, `.error-message`)
- Structure: `<div class="form-group"><label class="label" for="...">...</label><input class="input" id="..." ...><div class="error-message" aria-live="polite"></div></div>`
- Input: `background: var(--bg-page); border: 1px solid var(--border-hairline); border-radius: var(--radius-input); color: var(--text-primary); font-family: var(--font-base); font-weight: var(--font-weight-medium); font-size: var(--text-body); padding: var(--space-12) var(--space-16); width: 100%; transition: var(--transition-fast);`
- Placeholder: `color: var(--text-secondary);`
- Focus: `border-color: var(--accent-primary); outline: none; box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-primary) 20%, transparent);`
- Valid: `border-color: var(--color-mint-keyhole);` + success icon (Material Symbol `check_circle`).
- Invalid: `border-color: var(--color-iris);` + error icon + `.error-message` visible with `color: var(--color-iris);`.
- Disabled/Readonly: `opacity: 0.5; cursor: not-allowed; background: var(--bg-card-elevated);`

### 2.4 Modal / Popup (`.modal`, `.modal__backdrop`, `.modal__content`, `.modal__close`)
- Backdrop: `position: fixed; inset: 0; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); opacity: 0; visibility: hidden; transition: var(--transition-normal); z-index: var(--z-modal);`
- Content: `position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.95); background: var(--bg-card); border-radius: var(--radius-card); padding: var(--space-32); max-width: 90vw; max-height: 80vh; overflow: auto; box-shadow: var(--shadow-floating); z-index: calc(var(--z-modal) + 1); transition: var(--transition-normal);`
- Open State (`.modal--open`): Backdrop `opacity: 1; visibility: visible;` Content `opacity: 1; transform: translate(-50%, -50%) scale(1);`
- Close Button: Ghost button, top-right, Material Symbol `close`, `aria-label="Close modal"`.
- Focus Trap: JS must trap `Tab`/`Shift+Tab` inside `.modal__content` when open.
- Close on `Esc`, backdrop click, close button.

### 2.5 Navigation (`.nav`, `.nav__logo`, `.nav__links`, `.nav__actions`, `.nav__toggle`)
- Sticky: `position: sticky; top: 0; z-index: var(--z-nav); background: var(--bg-page); border-bottom: 1px solid color-mix(in srgb, var(--border-hairline) 20%, transparent);`
- Logo: `.nav__logo { display: flex; align-items: center; gap: var(--space-8); font-family: var(--font-base); font-weight: var(--font-weight-medium); font-size: var(--text-body-sm); text-transform: uppercase; letter-spacing: 0.02em; color: var(--text-primary); }` + Material Symbol `lock` (24px) as D-icon substitute.
- Links: `font-weight: var(--font-weight-medium); font-size: var(--text-body-sm); color: var(--text-primary); gap: var(--space-24);` (desktop). Mobile: drawer panel animated from right.
- Actions: Language selector (ghost button) + `.btn--ghost` "Log in" + `.btn--primary` "Start Free" + `.btn--secondary` "Contact Sales".
- Mobile Toggle: Hamburger button (Material Symbol `menu`/`close`), `aria-expanded`, `aria-controls="nav-drawer"`.

### 2.6 Announcement Bar (`.announcement`)
- `background: var(--bg-page); border-bottom: 1px solid color-mix(in srgb, var(--border-hairline) 20%, transparent); padding: var(--space-8) var(--space-16); text-align: center; font-size: var(--text-body-sm); font-weight: var(--font-weight-medium); color: var(--text-primary);`
- Close button: Ghost, right, Material Symbol `close`, `aria-label="Dismiss announcement"`.

### 2.7 Hero Headline (`.hero__headline`)
- `font-family: var(--font-base); font-weight: var(--font-weight-light); font-size: var(--text-display-xl); line-height: var(--lh-display); letter-spacing: 0.01em; color: var(--text-primary);`
- **First Word Mint Rule:** Wrap first word in `<span class="hero__headline--accent">` styled `color: var(--accent-primary);`.

### 2.8 Stat Card (`.stat-card`)
- Extends `.card--stat`. Content: `.stat-card__value` (100px / `var(--text-display-xl)`, weight 300, `var(--text-primary)`), `.stat-card__unit` (1/3 size, `var(--accent-primary)`), `.stat-card__caption` (`var(--text-body)`, `var(--text-secondary)`), `.stat-card__progress` (4px height, `background: color-mix(in srgb, var(--border-hairline) 30%, transparent); border-radius: 9999px; overflow: hidden;`), `.stat-card__progress-fill` (`height: 100%; background: var(--accent-primary); width: 40%; border-radius: inherit; transition: width 1s var(--ease-standard);`).

### 2.9 Testimonial Card (`.testimonial-card`)
- Extends `.card--testimonial`. `.testimonial-card__logo` (top-left, `filter: brightness(0) invert(1); opacity: 0.8;`), `.testimonial-card__quote` (`font-weight: var(--font-weight-light); font-size: var(--text-subheading); line-height: var(--lh-subheading); color: var(--text-primary); margin-bottom: var(--space-24);`), `.testimonial-card__author` (flex, gap `var(--space-12)`, items-center), `.testimonial-card__avatar` (40px circle, `object-fit: cover;`), `.testimonial-card__name` (`font-weight: var(--font-weight-medium); font-size: var(--text-body-sm); color: var(--text-primary);`), `.testimonial-card__role` (`font-weight: var(--font-weight-medium); font-size: var(--text-body-sm); color: var(--text-secondary);`).

### 2.10 Trust Logo Strip (`.trust-strip`)
- `.trust-strip__label` (`.font-mono`, weight 300, `var(--text-caption)`, `letter-spacing: 0.06em`, `text-transform: uppercase`, `color: var(--text-secondary)`, `text-align: center`, `margin-bottom: var(--space-24);`).
- `.trust-strip__logos` (flex, `justify-content: center; align-items: center; gap: var(--space-48); flex-wrap: wrap;`).
- Logo items: `filter: brightness(0) invert(1); opacity: 0.5; height: 24px; width: auto; transition: var(--transition-fast);` → Hover: `opacity: 1;`.

### 2.11 Chat Widget (`.chat-widget`)
- Fixed bottom-right: `position: fixed; bottom: var(--space-24); right: var(--space-24); z-index: var(--z-chat);`
- Panel: `background: var(--color-cream-mist); color: var(--color-cocoa-black); border-radius: var(--radius-card); padding: var(--space-16) var(--space-20); width: 320px; box-shadow: var(--shadow-floating);`
- Toggle Button: `.chat-widget__toggle` (pill, `background: var(--color-cocoa-black); color: var(--color-cream-mist); padding: var(--space-12) var(--space-16); display: flex; align-items: center; gap: var(--space-8); box-shadow: var(--shadow-floating);`)
- Panel States: Closed (hidden), Open (animate `opacity` + `transform: translateY(10px)`).

### 2.12 Accordion (FAQ) (`.accordion`, `.accordion__item`, `.accordion__trigger`, `.accordion__content`)
- Trigger: `width: 100%; display: flex; justify-content: space-between; align-items: center; padding: var(--space-16) 0; font-family: var(--font-base); font-weight: var(--font-weight-medium); font-size: var(--text-subheading); color: var(--text-primary); background: none; border: none; border-bottom: 1px solid color-mix(in srgb, var(--border-hairline) 20%, transparent); cursor: pointer; text-align: left;`
- Icon: Material Symbol `chevron_down` (24px), `transition: transform var(--transition-fast);` → `[aria-expanded="true"]` rotates 180deg.
- Content: `overflow: hidden; max-height: 0; transition: max-height var(--transition-normal) ease-out;` → Open: `max-height: 500px;` (sufficiently large).
- Inner: `.accordion__panel` (`padding-top: var(--space-16); color: var(--text-secondary); line-height: var(--lh-body);`).

### 2.13 Pricing Card (`.pricing-card`, `.pricing-card--popular`)
- Base: `.card--pricing` + `display: flex; flex-direction: column;`
- Popular: `border-color: var(--accent-primary); box-shadow: 0 0 0 1px var(--accent-primary);` + `.pricing-card__badge` (pill, `background: var(--accent-primary); color: var(--text-on-primary); font-size: var(--text-caption); padding: var(--space-4) var(--space-12);`).
- Price: `.pricing-card__price` (`font-weight: var(--font-weight-light); font-size: var(--text-display); color: var(--text-primary);`), `.pricing-card__period` (`color: var(--text-secondary);`).
- Features List: `.pricing-card__features` (flex column, gap `var(--space-12)`, `margin-top: auto;`). Item: `display: flex; align-items: center; gap: var(--space-10); color: var(--text-secondary);` + Material Symbol `check` (20px, `color: var(--accent-primary);`).
- CTA: `.btn` full-width at bottom.

### 2.14 Feature Card (`.feature-card`)
- `.card--feature` + `text-align: left;`
- Icon Wrapper: `.feature-card__icon` (48px circle, `background: color-mix(in srgb, var(--accent-primary) 15%, transparent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: var(--space-16);`), Icon: Material Symbol 24px, `color: var(--accent-primary);`.
- Title: `.feature-card__title` (`font-weight: var(--font-weight-medium); font-size: var(--text-heading-sm); color: var(--text-primary); margin-bottom: var(--space-8);`).
- Description: `.feature-card__desc` (`font-size: var(--text-body); color: var(--text-secondary); line-height: var(--lh-body);`).

### 2.15 Step Card (`.step-card`)
- `.card` + `position: relative; padding-top: var(--space-64); text-align: center;`
- Number: `.step-card__number` (`position: absolute; top: calc(-1 * var(--space-32)); left: 50%; transform: translateX(-50%); width: 64px; height: 64px; border-radius: 50%; background: var(--accent-primary); color: var(--text-on-primary); font-family: var(--font-base); font-weight: var(--font-weight-light); font-size: var(--text-heading-lg); display: flex; align-items: center; justify-content: center;`)
- Title/Desc same as Feature Card.

### 2.16 Footer (`.footer`)
- `background: var(--bg-card); border-top: 1px solid color-mix(in srgb, var(--border-hairline) 20%, transparent); padding: var(--space-80) var(--space-24) var(--space-32);`
- Grid: 4 columns (Brand, Product, Company, Legal) on desktop, 2 on tablet, 1 on mobile.
- Links: `font-size: var(--text-body-sm); color: var(--text-secondary); transition: var(--transition-fast);` → Hover: `color: var(--accent-primary);`.
- Social: Flex gap `var(--space-16)`, Material Symbols 24px.
- Bottom Bar: `border-top: 1px solid color-mix(in srgb, var(--border-hairline) 15%, transparent); margin-top: var(--space-48); padding-top: var(--space-24); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: var(--space-16);` → Copyright + Legal links.

---

## 3. PAGE SECTIONS & CONTENT (VAULTKEY COPY)

### 3.1 Announcement Bar
> "VaultKey 2.0 is here — faster autofill, passkey support, and team vaults. [Learn more](#)"

### 3.2 Navigation
- Logo: **VAULTKEY** (Material Symbol `lock` + wordmark).
- Links: Features, Security, Pricing, Enterprise, Resources.
- Actions: Language (EN ▼), Log in (ghost), Start Free (primary), Contact Sales (secondary).

### 3.3 Hero
- **Headline:** "Secure every password instantly" → First word "Secure" in mint.
- **Subheadline:** "VaultKey replaces fragile passwords with encrypted passkeys, biometric unlock, and zero-knowledge architecture — so your team signs in once and stays protected everywhere."
- **CTAs:** Primary "Start Free Trial", Secondary "Watch Demo (3 min)".
- **Illustration:** Right-side card (`.hero__illustration`) with abstract SVG radar: concentric circles in `var(--accent-primary)` with opacity gradients, rotating sweep arc (CSS animation `spin 4s linear infinite`), centered on `#2b2538` card (`var(--radius-card)`). Size: 400px×400px desktop, 280px mobile.

### 3.4 Trust Strip
- Label: "TRUSTED BY SECURITY-FIRST TEAMS"
- Logos: 7 fictional SaaS wordmarks (SVG text: "ApexCloud", "MeridianOps", "NexusFlow", "OrbitData", "PulseSecurity", "QuantumLeap", "VertexAI") — render as `<span class="trust-strip__logo">ApexCloud</span>` styled with `--font-base`, weight 500, `var(--text-body-lg)`, `filter: brightness(0) invert(1); opacity: 0.5;`.

### 3.5 Features (3 Cards)
1. **Passkey-First Auth** — "Replace passwords with cryptographic passkeys synced across devices. Phishing-resistant by design." (Icon: `key`)
2. **Zero-Knowledge Vault** — "Your data is encrypted locally before it ever leaves your device. We cannot see your secrets, even under subpoena." (Icon: `shield`)
3. **Team Vaults & Sharing** — "Share credentials without revealing them. Granular access controls, audit logs, and instant revocation." (Icon: `visibility`)

### 3.6 How It Works (3 Steps)
1. **Connect** — "Install the browser extension or mobile app. Sign in with your biometric or master password."
2. **Import** — "One-click import from any password manager, browser, or CSV. VaultKey detects duplicates and weak entries automatically."
3. **Autofill Everywhere** — "Log in to any site or app with a single tap. Passkeys work natively on iOS, Android, Windows, and macOS."

### 3.7 Testimonials (Carousel — 2 visible, 6 total)
| # | Quote | Author | Role | Company |
|---|-------|--------|------|---------|
| 1 | "VaultKey cut our credential reset tickets by 84% in the first month. The passkey rollout was seamless." | Sarah Chen | VP Engineering | ApexCloud |
| 2 | "Finally a password manager that doesn't fight our developers. The CLI and API are first-class citizens." | Marcus Webb | Staff Engineer | MeridianOps |
| 3 | "Compliance audits used to take weeks. With VaultKey's audit logs, we generate reports in minutes." | Priya Patel | Security Lead | NexusFlow |
| 4 | "Shared vaults eliminated our sticky-note problem. Temporary access for contractors is a game-changer." | James Okafor | IT Director | OrbitData |
| 5 | "The biometric unlock on mobile is instant. My team actually *uses* it — no more 'what's the wifi password?' Slack messages." | Lisa Tran | Product Manager | PulseSecurity |
| 6 | "Migration from LastPass took 20 minutes. Zero data loss, zero downtime. Best vendor switch I've ever seen." | David Kim | CTO | QuantumLeap |

- Carousel: Desktop 2-up, Mobile 1-up. Dot pagination (`.carousel__dots`, `.carousel__dot` — pill, `background: var(--border-hairline); opacity: 0.4;` → Active: `opacity: 1; background: var(--accent-primary);`). Auto-advance 6s, pause on hover. Prev/Next arrows (Material Symbol `chevron_left`/`right`, ghost buttons).

### 3.8 Pricing (3 Tiers)
| Tier | Price | Period | Badge | Features (6) | CTA |
|------|-------|--------|-------|--------------|-----|
| Personal | $0 | /month | — | Unlimited passwords, Passkeys on 2 devices, Biometric unlock, Security dashboard, 2FA codes, Email support | "Get Started Free" (Primary) |
| Teams | $4 | /user/mo | "Most Popular" | Everything in Personal, Unlimited shared vaults, Admin console, Audit logs, SSO (SAML/OIDC), Priority support | "Start 14-Day Trial" (Primary) |
| Enterprise | $8 | /user/mo | — | Everything in Teams, SCIM provisioning, SIEM integration, Custom policies, Dedicated success manager, SLA & DPA | "Contact Sales" (Secondary) |

### 3.9 FAQ (Accordion — 6 Items)
1. **What makes VaultKey different from other password managers?** — "VaultKey is built on passkeys, not passwords. Our zero-knowledge architecture means your vault is encrypted before it leaves your device — we literally cannot access your data. Plus, the CLI, API, and native passkey support make it the first choice for engineering teams."
2. **Can I import from 1Password, Bitwarden, or LastPass?** — "Yes. One-click importers for all major managers plus generic CSV/JSON. VaultKey flags weak, reused, or compromised credentials during import and suggests passkey upgrades where sites support them."
3. **How does sharing work without revealing the actual password?** — "When you share a credential, the recipient gets a cryptographic token that autofills the login but never displays the secret. You can set expiration, require re-authentication, and revoke instantly from the admin console."
4. **Is VaultKey compliant with SOC 2, GDPR, HIPAA?** — "SOC 2 Type II certified, GDPR-ready with EU data residency option, and HIPAA BAA available on Enterprise. Our security whitepaper and penetration test summaries are available on request."
5. **What happens if I lose my device or master password?** — "Account recovery uses a printed recovery kit (generated at setup) or an admin-initiated reset for Teams/Enterprise. Personal accounts without a recovery kit cannot be recovered — this is by design for zero-knowledge security."
6. **Do you offer discounts for non-profits, schools, or open-source projects?** — "Yes. Verified non-profits and educational institutions get 50% off Teams. Open-source maintainers get Personal Pro free. Apply from the pricing page with your organization email."

### 3.10 Final CTA
- Background: `var(--bg-card-elevated)` (Aubergine) full-bleed section.
- Headline: "Ready to kill passwords for good?" (Weight 300, `var(--text-display)`, first word "Ready" mint).
- Subheadline: "Join 10,000+ teams who've switched to passkey-first security. Free for personal use, 14-day trial for teams."
- Buttons: Primary "Start Free Trial", Secondary "Contact Sales" (side-by-side, centered).

### 3.11 Footer
- Brand Column: Logo + "VaultKey — Passkey-first password management for modern teams." + Social icons (Twitter, GitHub, LinkedIn, Mastodon).
- Product: Features, Security, Pricing, Integrations, Changelog, Docs, API Reference.
- Company: About, Blog, Careers (We're hiring!), Press, Contact, Partners.
- Legal: Privacy, Terms, Security, Cookies, Subprocessors, DPA.
- Bottom: "© 2025 VaultKey, Inc. All rights reserved." + "Privacy · Terms · Security · Cookies"

---

## 4. JAVASCRIPT BEHAVIOR (`script.js`)

### 4.1 Theme Toggle
```js
function initTheme() {
  const html = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  html.classList.toggle('dark', initial === 'dark');
  html.classList.toggle('light', initial === 'light');
  toggle?.setAttribute('aria-pressed', initial === 'dark');
  toggle?.querySelector('.material-symbols-rounded').textContent = initial === 'dark' ? 'light_mode' : 'dark_mode';
  toggle?.setAttribute('aria-label', initial === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}
document.getElementById('theme-toggle')?.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  html.classList.toggle('light', !isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  const toggle = document.getElementById('theme-toggle');
  toggle.setAttribute('aria-pressed', isDark);
  toggle.querySelector('.material-symbols-rounded').textContent = isDark ? 'light_mode' : 'dark_mode';
  toggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});
```

### 4.2 Mobile Nav Drawer
- Toggle button `aria-expanded` ↔ drawer `hidden` attribute.
- Close on link click, `Esc`, overlay click.
- Focus trap inside drawer when open.

### 4.3 Testimonial Carousel
- State: `currentIndex`, `itemsPerView` (2 desktop, 1 mobile).
- `update()`: translateX, update dot `aria-current`, disable prev/next at bounds.
- Auto-advance `setInterval` (6s), clear on hover/focus.
- Touch swipe support (passive listeners).

### 4.4 FAQ Accordion
- Single-open: clicking one closes others.
- `aria-expanded` toggle, `max-height` animation.
- Keyboard: `Enter`/`Space` on trigger toggles.

### 4.5 Chat Widget
- Toggle panel visibility + `aria-expanded`.
- Close on `Esc`, outside click.
- Demo: "Start chat" button opens modal (`.modal`) with contact form (Name, Email, Message) — reuse Form Input + Button components.

### 4.6 Smooth Scroll & IntersectionObserver
- `document.querySelectorAll('a[href^="#"]').forEach(...)` → `scrollIntoView({behavior: 'smooth'})`.
- Reveal animations: `.reveal` class on sections → `opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;` → `.reveal--visible` → `opacity: 1; transform: none;`. Observer threshold 0.1.

### 4.7 Button Loading States (Demo)
- Any `.btn[data-loading]` click → add `.btn--loading`, `setTimeout(() => btn.classList.remove('btn--loading'), 2000)`.

---

## 5. ACCESSIBILITY CHECKLIST (ENFORCE IN CODE)
- [ ] Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- [ ] Heading hierarchy: `h1` (Hero) → `h2` (Section titles) → `h3` (Card titles).
- [ ] Color contrast ≥ 4.5:1 in both themes (verify with tool).
- [ ] Focus visible on all interactive elements (custom outline via `--accent-primary`).
- [ ] Keyboard operable: `Tab`, `Shift+Tab`, `Enter`, `Space`, `Esc`, Arrow keys (carousel).
- [ ] ARIA: `aria-label`, `aria-expanded`, `aria-controls`, `aria-current`, `aria-live="polite"` (errors, toasts), `role="dialog"` + `aria-modal="true"` (modal).
- [ ] `prefers-reduced-motion`: disable auto-advance carousel, reduce transition durations to 0.01ms.
- [ ] Lang attribute: `<html lang="en">`.
- [ ] Alt text for all images (illustration: "Abstract security radar visualization showing encrypted data flow").

---

## 6. FILE STRUCTURE & NAMING
```
/project-root
  index.html
  style.css
  script.js
```
- CSS: BEM blocks: `.announcement`, `.nav`, `.hero`, `.trust-strip`, `.features`, `.feature-card`, `.steps`, `.step-card`, `.testimonials`, `.testimonial-card`, `.carousel`, `.pricing`, `.pricing-card`, `.faq`, `.accordion`, `.cta-final`, `.footer`, `.chat-widget`, `.modal`, `.form-group`, `.btn`, `.stat-card`.
- JS: One IIFE or ES module with named init functions called on `DOMContentLoaded`.

---

## 7. QUALITY GATES (SELF-VERIFY BEFORE OUTPUT)
- [ ] No inline styles, no inline scripts (except deferred `script.js`).
- [ ] All colors via CSS variables — no hardcoded hex in component rules.
- [ ] Dark + Light mode both functional and tested.
- [ ] Mobile-first responsive: 375px, 768px, 1024px, 1440px.
- [ ] All component states implemented (hover, focus, active, loading, disabled, empty, skeleton).
- [ ] Google Fonts + Material Symbols only — zero other icon sources.
- [ ] Fictional brand "VaultKey" only — no Dashlane references anywhere.
- [ ] Valid HTML5, CSS3, ES2022.
- [ ] Console error-free.

---

**Deliver the three files now. Begin with `index.html`.**
