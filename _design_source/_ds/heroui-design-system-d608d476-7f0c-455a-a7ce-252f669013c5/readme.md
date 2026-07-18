# HeroUI Design System (v3.x)

A faithful recreation of **HeroUI 3.x** — a modern, open-source React UI library built on Tailwind tokens. This project packages HeroUI's theme tokens, Inter typography, a 252-glyph icon set, the brand mark, and a library of React component primitives so design agents can produce on-brand HeroUI interfaces, mocks, and prototypes.

## Sources

- **Figma:** "HeroUI Figma Kit V3 (Community)" — the source of truth for tokens, component specs, icons and the brand mark. Token values, the type scale, and component dimensions in this system were extracted directly from that file.
- **GitHub:** [`heroui-inc/heroui`](https://github.com/heroui-inc/heroui) — the official component library. Explore it for production component APIs, accessibility behavior, and the canonical Tailwind theme. (You can browse it further to build higher-fidelity recreations.)

> The Figma file — not generic knowledge of the public HeroUI brand — is authoritative here. It carries the exact theme (accent blue, neutral zinc scale, semantic soft colors) and custom variants used throughout.

---

## What HeroUI is

HeroUI is a **developer-first component library**: beautiful defaults, full keyboard accessibility (built on React Aria), and a Tailwind-native theming model with light + dark modes. The aesthetic is **clean, neutral, and friendly** — generous rounding (pill buttons), soft layered shadows instead of hard borders, a single confident accent blue, and Inter as the workhorse typeface. It is designed to "look great out of the box" while staying easy to theme.

Primary surface: **product UI and marketing** for web apps. The visual language is restrained and utilitarian — hierarchy comes from weight, spacing and a small semantic color set, not decoration.

---

## CONTENT FUNDAMENTALS

How HeroUI writes copy (observed across the kit's docs and component labels):

- **Voice:** plain, direct, second-person ("you"), present tense. Instructional, never salesy. e.g. *"Used for main section titles within a screen. Should be used sparingly."*
- **Casing:** **Sentence case** everywhere — buttons, headings, labels, menu items ("Get started", "Add to cart", "Body base medium"). Title Case is avoided.
- **Tone:** calm, functional, confident. Describes *what* and *when*, not hype. Favors short declarative sentences.
- **Buttons / CTAs:** verb-first and concise — "Get started", "Save changes", "Add", "Open". Default placeholder label in the kit is "Call to action".
- **Form copy:** labels are short nouns ("Email", "Role", "Card number"); descriptions are one helpful sentence; error messages are specific ("Invalid card number").
- **Emoji:** not used in the product UI. Iconography carries meaning instead.
- **Numbers/units:** tabular, terse ("Save 20%", "92% of your quota").

When writing for HeroUI: sentence case, "you", short and useful, no exclamation-heavy marketing tone.

---

## VISUAL FOUNDATIONS

**Color.** One accent — **blue `rgb(4,133,247)` / `#0485F7`** — used for primary actions, focus rings, links and active states. Neutrals are the **zinc** scale (`#18181B` foreground "eclipse", `#71717A` muted, `#E4E4E7` borders). Backgrounds are near-white (`#F5F5F5` page, `#FFFFFF` surface). Semantic colors: **success** `#17C964` (jade-green), **warning** `#F5A524` (coral-amber), **danger** `#FF383C` (red). Every semantic color ships **solid**, **soft** (≈12–15% tint fill) and **soft-foreground** variants, plus matching hover shades. A full Tailwind palette (slate→rose, 50→950) is available as raw tokens. Dark mode is a first-class, complete token set (`#060607` background, `#18181B` surface).

**Typography.** **Inter** for everything (no display/serif face). Tailwind-derived scale: body `16px/24`, sm `14px/20`, xs `12px/16`; headings use weight + size (H2 `24px/32` bold, H3 `20px/28` semibold, H4 `16px/24` semibold). Weights used: 400 / 500 / 600 / 700. Larger text gets slight negative tracking (`-0.01em`); button labels tighten to `-0.02em`. Medium (500) is the default UI weight for labels and buttons.

**Shape & rounding.** Generous and soft. Buttons are **pills** (radius 16–24px → fully rounded at control heights). Inputs, selects and small cards use **12px** radius; cards **16px**; panels/modals **24px**. Chips and switches are fully rounded. Almost nothing has a sharp corner.

**Borders & shadows.** HeroUI prefers **soft layered shadows over hard borders**. Inputs render with a faint multi-layer drop (`0 2px 4px rgba(0,0,0,.04), 0 1px 2px rgba(0,0,0,.06)`) and a near-transparent border — the field reads as a soft raised surface, not an outlined box. Cards use a light `shadow-sm`; overlays use progressively larger soft shadows. Separators are 1px hairlines in `#E4E4E7`.

**Focus.** A **4px accent ring at ~50% opacity**, offset 2px from the control (double box-shadow: inner background gap + outer translucent ring). Highly visible, always accent-blue.

**Backgrounds.** Flat, neutral. No gradients, no photographic hero washes, no textures or patterns in the core system. Depth comes from surface layering (`surface` / `surface-secondary` / `surface-tertiary`) and shadow — not color.

**Motion.** Quick and subtle. Transitions ~120–200ms ease on color/background/box-shadow; buttons **scale to 0.97 on press**; switches slide their thumb on a `cubic-bezier(.4,0,.2,1)`. Spinners rotate ~0.7s linear. No bounce, no flourish. Respects `prefers-reduced-motion`.

**Hover / press.** Hover = a step-darker fill (primary → `accent-hover`) or, for ghost/transparent controls, a soft neutral wash (`default-soft`). Press = slight scale-down. Disabled = 50% opacity, no pointer events.

**Layout.** 4px spacing base (Tailwind spacing scale, 4→384px). Comfortable but dense; controls share a 32/36/40px height rhythm (sm/md/lg). Cards and panels use 20px internal padding.

**Imagery.** The core kit is illustration-light; when product imagery appears it is neutral and unfiltered. Avatars fall back to soft-tinted initials.

---

## ICONOGRAPHY

HeroUI ships its **own custom icon set** (~700 glyphs in Figma; **252 normalized glyphs materialized here** in `assets/icons/`). They are **16×16, single-path, `currentColor`** icons in a **regular (outline) style** with a few **filled** variants (suffixed `-fill`, e.g. `circle-check-fill`). Stroke-and-fill hybrid geometry, rounded joins, optically balanced for small sizes.

- **Render:** `import { Icon } from 'assets/icons/Icon.jsx'` → `<Icon name="arrow-down" size={20} />`. Recolor with CSS `color`. Names are kebab-case; see `assets/icons/Icon.d.ts` for the full list.
- **Naming note:** some friendly names differ from generic libraries — search uses **`magnifier`**, the user/profile glyph is **`person`**, delete/backspace is **`delete`**, settings is **`gear`** / **`cog`**.
- **No emoji, no unicode-as-icon.** Use the icon set for all glyphs.
- This is a broad subset (arrows, chevrons, files/folders, charts, media, faces, status). The full ~700-glyph set can be expanded from the Figma file on request.

**Brand mark:** `assets/brand/` — `heroui-logo-{black,white}.svg` (wordmark) and `heroui-iso-{black,white}.svg` (the "H" iso mark). Both use `currentColor`, so recolor via CSS; use the black mark on light surfaces, white on dark.

---

## INDEX

**Root**
- `styles.css` — global entry point (import this). `@import`s everything below.
- `readme.md` — this guide. `SKILL.md` — agent-skill manifest.

**Tokens** (`tokens/`)
- `fig-tokens.css` — full Figma variable set (colors, theme, dimensions) + complete **dark mode**.
- `aliases.css` — friendly semantic names (`--color-accent`, `--color-surface`, `--radius-card`, `--space-4`, `--shadow-field`…).
- `typography.css` — Inter scale + `.hui-*` text-role helpers. `fonts.css` — Inter @import. `base.css` — light resets.

**Components** (`components/`) — React primitives, namespace `window.HeroUIDesignSystem_d608d4`:
- `buttons/` — Button, IconButton, ButtonGroup
- `forms/` — Input, Textarea, Select, Checkbox, Radio + RadioGroup, Switch, Slider, Label
- `data-display/` — Card (+Header/Body/Footer), Avatar + AvatarGroup, Chip, Badge, Kbd, Skeleton
- `feedback/` — Alert, Spinner, ProgressBar, ProgressCircle, Tooltip
- `navigation/` — Tabs, Breadcrumbs, Pagination, Link
- `overlays/` — Modal, Popover, Dropdown (+Item/Label/Separator), Accordion (+Item)
- `assets/icons/` — `Icon` component + `icon-data.js` (252 glyphs, monochrome line, paints with `currentColor`)
- `assets/duotone/` — `DuotoneIcon` + `duotone-icon-data.js` (500 glyphs, Streamline **Flex Flat — Free**, two tintable fills, CC BY 4.0)

**Foundations** (`guidelines/`) — specimen cards for the Design System tab: semantic & neutral colors, surfaces, type (headings / body / mono), spacing scale, radii & elevation, the brand mark.

**UI kits** (`ui_kits/`)
- `dashboard/` — **Console**, a SaaS admin shell (sidebar, topbar, data table, forms, modal, light/dark) built from the primitives. Doubles as the "App shells" starting point.

**Assets** (`assets/`) — `brand/` logos, `icons/` icon set.

---

## Caveats & roadmap

- **Fonts:** Inter loads from Google Fonts (`tokens/fonts.css`). For production, self-host Inter woff2. The Figma "Medium/Regular/Semi Bold" font tokens are weight names, not separate families — ignore the font-face warnings for them.
- **Coverage:** 32 component primitives + Icon, across buttons / forms / data-display / feedback / navigation / overlays. Foundation specimen cards and a dashboard UI kit are built. No sample slide template was provided, so none was created — ask if you want one.
- **Preview/Babel:** cards and kits transpile JSX in-browser via `@babel/standalone`. On very restricted networks that ~3MB script can be slow to fetch; precompile for production.
