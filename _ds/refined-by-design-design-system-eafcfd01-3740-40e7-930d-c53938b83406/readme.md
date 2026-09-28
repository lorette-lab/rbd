# Refined by Design — Design System

The brand and interface system for **Refined by Design**, the online portfolio of a creative entrepreneur and interface designer with 14+ years in web interfaces. The positioning, in the owner's own words: a hunger to leave the world in a better state than we found it, and a belief that design principles are how you solve business problems and grow businesses.

One person, one voice, work in public. The system is small, quiet and typographic — a refined editorial object, not a corporate UI library.

## Sources given
- `uploads/RBD logo.svg` — the master logo artboard (multiple lockup studies plus six palette swatch rectangles).
  - **Important:** the file's `<defs><style>` block is **empty**. Every shape references classes (`st0`…`st14`) with no fill declarations, so the original brand colours and font names could not be recovered. The wordmark geometry was extracted losslessly; colour is derived. See Caveats.
- `uploads/photo.png` — supplied black-and-white cut-out portrait, used as the hero device (`assets/portrait.png`).
- **Style reference: <https://sevora.framer.website/>** — the user's chosen visual direction (a Framer portfolio template by Stylokit). The whole system was retuned to match its styling: cool light greys, soft grey gradient panels, serif display type with a grey headline tail, near-black small-radius buttons, pastel tint blocks, B&W cut-out portrait on a panel, dark glass overlay card. Styling only — no markup or assets were copied from it, and the copy is written in this brand's own voice.
- Company description + tone notes supplied in chat.
- No codebase, no Figma file, no decks, no font binaries were provided.

## Products / surfaces
1. **Portfolio website** — home, projects index, case study, about/contact. Recreated in `ui_kits/portfolio/`, plus a reusable `templates/portfolio-site/` one-pager.

---

## Content fundamentals

**Voice: first person, present tense, plain.** The site speaks as *I*, addresses the reader as *you*, never "we" — there is no team. "I design refined brands, websites and interfaces." Not "Refined by Design delivers digital solutions."

**Calm confidence, not volume.** The reference direction is restrained, so the copy is too: short declarative lines, specifics over adjectives, numbers wherever a number exists — "14 years", "+38% activation", "three steps, down from six".

**Casing**
- Headlines: sentence case, always. Never Title Case.
- Eyebrows, badges: UPPERCASE sans (Manrope 600, 11px, 0.12em) — the only shouty casing.
- Nav, buttons, tags, form labels: sentence case.
- Body: sentence case, Oxford comma, no exclamation marks.

**The headline move.** Every display line splits: the first half in near-black, the tail in `--text-faint` grey — "Design that solves *business problems*", "Projects with *clarity*". Use it on hero and section headings; never more than one grey tail per line.

**Words we use:** clarity, refined, craft, direction, outcome, interface, ship, evidence.
**Words we don't:** solutions, synergy, passionate, cutting-edge, leverage (verb), unlock, journey, seamless, world-class.

**Emoji: no.** Personality comes from type and space. `→ ↗ ·` are used as typographic marks; the Lucide `arrow-up-right` glyph does the rest.

**Examples (write like this):**
- Hero: "Design that solves business problems." + "I design refined brands, websites and interfaces for ambitious founders and creative teams."
- Availability badge: `AVAILABLE FOR PROJECTS`
- Glass card: "Share a few details and I'll come back with a clear direction."
- Section opener: eyebrow "Selected work", line "Projects with *clarity*".
- CTA: "Let's talk" / "View projects" / "Start a project" — three words max.
- Case-study opener: "The signup flow had six steps. Two of them existed because a database table did."
- 404: "This page moved on to better things."

---

## Visual foundations

### Motifs
Cool near-white page. Large soft-grey gradient **panels** with 28–36px radius holding almost every block. Serif display type with a grey tail. Near-black buttons at small radius. A black-and-white cut-out portrait grounded on the panel floor. One dark **glass** card floating over the imagery. Pastel tint blocks (butter, blush, pink) as the only colour. Nothing shouts.

### Colour
- **Ink** `--ink-1 #0B0B0C` → `--ink-5 #B9BABF`: type, buttons, borders, and the grey headline tail (`--ink-5` / `--text-faint`).
- **Grey** `--grey-2 #F7F7F8` page, `--grey-3 #F0F0F2` flat panel, `--grey-4 #E6E6E9` fills, `--grey-5 #D5D6DA` strong lines. White is for cards, fields and the raised active tab.
- **Panels:** `--panel-soft` (`#F5F5F7 → #EAEBEF`, 168°) is the signature surface; `--panel-dark` (`#1A1A1D → #0B0B0C`) is the footer and the featured pricing card.
- **Pastels:** `--butter #F6E7A8`, `--blush #F3DCD4`, `--pink #E9BDC9` — tint blocks and badge fills only. **Never as type colour, never as a button fill.**
- **Glass:** `--glass-dark` (ink 62% + 22px blur) for cards over photography; `--glass-light` for the scrolled nav pill.
- Ratio target: ~80% greys, ~15% ink, ~5% pastel. Status colours are desaturated and appear only in form validation.

### Type
- **Display:** Instrument Serif 400, `-0.02em`, line-height 0.98 — h1–h3, stats, prices, project titles. **Substitution — flagged** (the reference uses a licensed serif; this is the nearest Google match).
- **UI / body:** Manrope 400/500/600 — body 15px/1.62, lead 18px/1.4, labels 12–14px. **Substitution — flagged.**
- **Editorial italic:** Instrument Serif italic for pull quotes only.
- **Mono:** JetBrains Mono survives for token values and code specimens only — it is no longer a UI voice (that was the previous, warmer direction).
- Hierarchy is size + colour. No weight above 600 anywhere in the UI.

### Layout
1200px container, `--page-pad-x` clamped 18→56px. Content is **panel-based**: sections are grey blocks with generous inner padding rather than full-bleed bands. Section headings are **centre-aligned** by default (left only for FAQ/split layouts) — a change from the previous asymmetric direction. Prose maxes at 58ch. Sections breathe at `--section-y` (64→140px). Fixed elements: a floating nav pill that gains `--glass-light` + `--blur-veil` on scroll. Nothing else sticks.

### Backgrounds
Flat `--grey-2` page; everything structural is a panel. Gradients exist only as the two panel tokens, the two scrims and the image placeholder. No patterns, no textures, no hatches (the previous diagonal hatch is gone — placeholders are now a quiet grey wash labelled "image slot"). Grain: none.

### Imagery
Black-and-white, high contrast, cut out with transparency and **grounded on the panel floor** (bottom-aligned, no frame) — that is the hero device. Rectangular project imagery sits inset inside the panel at `--radius-lg` with 10px of panel showing as a mount. Colour photography, if it appears, is cool and desaturated. Never a full-bleed edge-to-edge photo band.

### Cards
Grey gradient panel, 28px radius, `--shadow-inset-hairline`, **no shadow at rest**. Hover: lift 3px + `--shadow-lift` (wide, faint, cool), media scales 1.035. Project cards do **not** invert any more — the arrow darkens and slides instead. White cards (`tone="card"`) are for forms and testimonials; `tone="glass"` for overlays.

### States
- **Hover:** ink lightens one step (`--ink-1` → `--ink-2`); grey fills darken one step; outline picks up a `--grey-2` wash; panels lift.
- **Press:** `scale(.985)` on buttons, `.95` on icon buttons. No ripple.
- **Focus:** 1.5px ink outline at 3px offset, plus a soft `--shadow-focus` grey ring on fields. No coloured focus rings.
- **Disabled:** `opacity:.38`, `cursor:not-allowed`, no colour change.
- **Active nav:** ink text against `--ink-4` siblings; active tab is a white raised chip; active tag is an ink pill.

### Borders & shadows
Hairlines at 7–12% ink; nothing heavier than 1px anywhere. Most "borders" are actually `--shadow-inset-hairline` so hover lift does not shift layout. Shadow ladder: `sm` (buttons, chips) → `md` → `lift` (hover only). Nothing is elevated at rest.

### Transparency & blur
Two places: the scrolled nav pill (`--glass-light` + `blur(18px)`) and the dark glass card over the portrait (`--glass-dark` + `blur(22px)`). Dialog scrim is ink 42% with a 4px blur. Nothing else is translucent.

### Motion
Slower and softer than the previous direction: 180ms UI feedback, 280ms state, 700ms `rbd-rise` (18px up + fade) for reveals, staggered ~70ms. `--ease-out` `cubic-bezier(.22,.61,.36,1)` everywhere; `--ease-spring` is nearly unused (no bounce in this aesthetic). Marquees run linear and pause on hover. All durations collapse to 0ms under `prefers-reduced-motion`.

### Corner radii
6 / 10 / 14 / 20 / 28 / 36 + pill. Buttons 10px (14px at lg) — **never pills**; fields 10px; inset media 20px; panels and cards 28px; dialogs and hero/footer blocks 36px; badges, tags and the nav pill are pills.

---

## Iconography

**No icon set was supplied**, so the system standardises on **Lucide** (MIT, CDN) — geometric, single-weight, round-capped, which matches the reference's line quality. **Flagged substitution.**

- `components/core/Icon.jsx` inlines `https://cdn.jsdelivr.net/npm/lucide-static@0.539.0/icons/<name>.svg` and inherits `currentColor`.
- **Stroke 1.75px, 15–20px box** in UI, 20px in nav. Never filled, never two-tone, never in a coloured badge.
- Small vocabulary: `arrow-up-right` (the workhorse — every CTA and project tile), `arrow-right`, `arrow-down`, `x`, `menu`, `check`, `mail`, `chevron-down`, `play`.
- **Emoji: never.** Unicode `→ · ↗` are typographic marks.

### Logo usage
`assets/logo.svg` (currentColor), `assets/logo-ink.svg` (near-black wordmark, grey "by design"), `assets/logo-paper.svg` (white wordmark for dark panels). The vermilion accent inside the lockup is gone — the mark is monochrome in this direction. Minimum width 118px. Clear space = cap height of the "R". Never stretch, re-space or reset the lockup in another typeface.

---

## Intentional additions
No component inventory was supplied. The primitive set was authored from the reference site's own inventory, which defines: buttons (primary / secondary / outline / ghost), icon buttons, badges, tags, panels, project tiles, stats, testimonials, pricing cards, FAQ accordion, tabs, form fields, toast, tooltip, dialog, marquee. Additions beyond that:
- **Icon** — a mask wrapper for the Lucide glyph set (no icon font was supplied).
- **SectionHeading** — the eyebrow + serif line + grey tail + sub-line appears on every section; codifying it keeps rhythm identical.
- **Switch / Checkbox / Select** — needed by the contact form; the reference only shows a subset of form controls.

---

## Index

| Path | What |
|---|---|
| `styles.css` | Global entry point — `@import`s only |
| `tokens/fonts.css` | Instrument Serif + Manrope + JetBrains Mono (substituted) |
| `tokens/colors.css` | Ink/grey scales, pastels, panel gradients, glass, semantic aliases, `.rbd-invert` |
| `tokens/typography.css` | Serif display + sans UI scale, tracking, measures, `.rbd-*` utilities |
| `tokens/spacing.css` | 4px ramp, 1200px container, section rhythm |
| `tokens/effects.css` | Radii, hairlines, soft shadows, scrims, blur, placeholder |
| `tokens/motion.css` | Durations, easings, keyframes, reduced-motion |
| `tokens/base.css` | Reset + brand defaults (incl. link colours) |
| `assets/` | Logo lockups (3 colourways), B&W cut-out portrait |
| `guidelines/` | 24 foundation specimen cards (Design System tab) |
| `components/core/` | Icon, Button, IconButton, Card, Badge, Tag |
| `components/forms/` | Input, Select, Checkbox, Switch |
| `components/navigation/` | Tabs |
| `components/feedback/` | Dialog, Toast, Tooltip, Accordion |
| `components/portfolio/` | ProjectCard, Marquee, SectionHeading, StatBlock, TestimonialCard, PricingCard |
| `ui_kits/portfolio/` | Click-through recreation: home, projects, case study, about + contact |
| `templates/portfolio-site/` | Reusable one-page portfolio Design Component |
| `thumbnail.html` | Homepage tile |
| `SKILL.md` | Agent-skill entry point |

## Caveats
1. **Colour palette is derived, not extracted** — the logo SVG's style block was empty, and the greys/pastels here come from the Sevora reference rather than from a brand definition. Send the real hex values and they will be swapped in one pass.
2. **Fonts are substituted** — Instrument Serif (display) and Manrope (UI) are the nearest Google matches to the reference; the logotype's real typeface is still unknown.
3. **Icons are substituted** — Lucide via CDN.
4. **Photography** — only the supplied portrait exists. Every project image is a grey "image slot" wash. Client names, metrics, prices and the email address are stand-ins.
5. **Styling reference only** — the direction is modelled on <https://sevora.framer.website/> (a commercial Framer template). Layout patterns and visual treatment were rebuilt from scratch here; do not treat this as a licensed copy of that template.
