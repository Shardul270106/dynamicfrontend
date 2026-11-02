# Senitel — Style Reference

> Midnight terminal with violet beacons

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

dope.security is a midnight terminal aesthetic: near-black canvas, a single vivid violet signal flare, and typography that borrows from luxury travel editorial. The system pairs a geometric sans (Whyte Inktrap) with an italic display serif (GrandSlang) for hero drama and a monospaced inktrap with extreme tracking for the section labels that feel stamped from a boarding pass. Surfaces are flat and borderless; elevation comes from hairline strokes and translucent washes, never shadows. Color is rationed — the violet only appears as a glow, a fill on a single feature, and accent strokes — while the rest of the interface stays in a tight achromatic scale from #f7f9fa down to #090909. The result reads as confident, expensive, and slightly secretive, like a premium lounge at 2am with a single neon sign.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Near Black | `#090909` | `--color-near-black` | Page canvas, card surfaces, filled button backgrounds — the default void everything else floats in |
| Almost White | `#f7f9fa` | `--color-almost-white` | Primary text, icon strokes, nav labels, and 1px borders — the paper-white that does all the talking against the void |
| Soft White | `#f0f0f0` | `--color-soft-white` | Section label text in the stamped uppercase style — same family as Almost White but slightly dimmer for hierarchy |
| Steel | `#828384` | `--color-steel` | Muted secondary text, inactive button surfaces, subdued borders |
| Graphite | `#474747` | `--color-graphite` | Card internal text and subtle dividers — readable on the near-black without competing with the primary text |
| Iron | `#423738` | `--color-iron` | Dark borders and separators for elevated surfaces and inverted UI. Do not promote it to the primary CTA color |
| Ash | `#6b6b6b` | `--color-ash` | Nav border dividers, helper text, low-emphasis body copy |
| Signal Violet | `#af50ff` | `--color-signal-violet` | The only chromatic voice: feature card glow, primary action fill, and accent strokes — rationed like runway lighting, not decoration |
| Lavender Mist | `#e1bdff` | `--color-lavender-mist` | Soft tint paired with Signal Violet for contrast-safe text and washed background accents |

## Tokens — Typography

### Whyte Inktrap — Primary workhorse

Body, nav, buttons, links, and most headings. The inktrap corners give the geometry warmth without losing precision. Weight 300 carries larger sizes and creates editorial lightness beside the GrandSlang italic. · `--font-whyte-inktrap`

- **Substitute:** Inter, General Sans
- **Weights:** 300, 400, 500, 700
- **Sizes:** 10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 50, 64, 80, 88
- **Line height:** 1.0–1.6
- **Letter spacing:** Tight on display: -0.04em at 64px, -0.03em at 48px, -0.01em at 20px, 0 at 16px; wide on labels: 0.07em at 12px uppercase, 0.18em at 10px uppercase
- **Role:** Primary workhorse — body, nav, buttons, links, and most headings.

### Whyte Inktrap Mono — The stamped-letterhead voice

74px uppercase sections such as “SSL INSPECTION” and “URL FILTERING”, with 0.2em tracking. The mono is intentionally mechanical against the humanist Whyte to create the boarding-pass rhythm. · `--font-whyte-inktrap-mono`

- **Substitute:** JetBrains Mono, IBM Plex Mono
- **Weights:** 400
- **Sizes:** 14, 74
- **Line height:** 0.9–1.5
- **Letter spacing:** 0.2em constant
- **OpenType features:** `"ss01"` on, if available
- **Role:** Section signposting and stamped labels.

### GrandSlang — The italic display serif

Reserved for the hero and its echoes. Its warm brush-italic swells make the brand feel human and confident where the rest of the system is clinical. Never use it for body or nav. · `--font-grandslang`

- **Substitute:** Tiempos Headline, Lora Italic
- **Weights:** 300, 400
- **Sizes:** 32, 50, 64, 88, 146
- **Line height:** 0.8–1.5
- **Letter spacing:** -0.03em
- **OpenType features:** `"liga"` on, `"dlig"` on
- **Role:** Hero display emphasis and large editorial echoes.

### system-ui

Detected in extracted data but not described by AI · `--font-system-ui`

- **Weights:** 600
- **Sizes:** 16px
- **Line height:** 1.5

### Karla

Detected in extracted data but not described by AI · `--font-karla`

- **Weights:** 700
- **Sizes:** 16px
- **Line height:** 1, 1.2

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 10px | 1 | 1.8px | `--text-caption` |
| body-sm | — | — | 14px | 1.5 | 0px | `--text-body-sm` |
| body | — | — | 16px | 1.5 | 0px | `--text-body` |
| subheading | — | — | 20px | 1 | -0.2px | `--text-subheading` |
| heading-sm | — | — | 32px | 1.2 | -0.32px | `--text-heading-sm` |
| heading | — | — | 48px | 1.2 | -0.48px | `--text-heading` |
| heading-lg | — | — | 64px | 1.2 | -0.64px | `--text-heading-lg` |
| section-stamp | — | — | 74px | 0.9 | 14.8px | `--text-section-stamp` |
| display | — | — | 88px | 0.8 | -2.64px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px  
**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 136 | 136px | `--spacing-136` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 19.2px |
| pills | 1584px |
| buttons | 8px |
| smallControls | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 120px
- **Card padding:** 40px
- **Element gap:** 16px

## Components

### Hero Boarding Pass

**Role:** Full-bleed hero panel with a translucent glass card on the right

Full-viewport dark hero on an atmospheric sky photograph. Left column: GrandSlang italic at 146px for the opening phrase, Whyte Inktrap weight 400 at 64px for the main heading, and GrandSlang italic again for its closing phrase. Body subhead in Whyte Inktrap 20px weight 300, muted Almost White. Right column: 19.2px radius card with translucent fill, 1px white border, boarding-pass label, origin/destination line, and a vertical barcode. Two pill CTA buttons inside: 1584px radius, 20px 32px padding, white text on a faint wash.

### Senitel Face Scan Image Overlay

**Role:** Interactive portrait treatment that reveals the robotic portrait through a moving circular scan.

The portrait shown in the landing page is composed from two aligned image layers, not a flattened split-image asset. The human portrait sits at the bottom; the robot portrait is placed directly above it using the same stage dimensions and crop. Both assets are in `public/assets/face-human.webp` and `public/assets/face-robot.webp`.

The robot layer is hidden by default with a CSS radial mask. The mask uses `--scan-x` and `--scan-y` for its center and `--scan-radius` for its size. Opaque pixels in the center reveal the robot; a transparent, feathered edge blends it into the human image. A separate thin circular ring and faint violet glow use those same coordinates and radius, creating the visible scanner outline shown in the image.

Pointer movement within the portrait stage is converted to percentage coordinates and written to the CSS variables. The interaction uses `requestAnimationFrame` to ease the scan center and radius toward their targets. The scan radius is capped at 145px, or 26% of the stage width when that is smaller. When the pointer leaves or is cancelled, the target radius returns to zero and the human portrait is visible again.

The portrait stage is keyboard-focusable. Arrow keys move the scan center in 5% steps, and Enter toggles the scan radius. A visible focus outline identifies the stage when navigating by keyboard. The ring and glow are decorative and marked `aria-hidden`; the portrait stage provides the accessible label.

The CSS includes both standard and WebKit mask declarations. If CSS masks are unsupported, the robot layer and scan decorations are hidden, leaving the human image as a fallback. Keep both source images aligned, identically sized, and similarly cropped so the reveal reads as one face transforming into another.

### Stamped Section Heading

**Role:** Full-width section signpost that replaces ordinary headings on feature blocks

Whyte Inktrap Mono 74px weight 400, uppercase, 0.2em letter-spacing, Soft White (`#f0f0f0`). Rendered as a single line that fills the container. No underline or decoration; the tracking is the design. Example: “SSL INSPECTION”.

### Filled Action Button

**Role:** Primary dark button with white outline

Background `#090909`, 1px `#f7f9fa` border, 8px radius, 16px padding, white text in Whyte Inktrap 16px weight 400. The button is close to the page color; the border does the work.

### Ghost Pill Button

**Role:** Soft-tint pill used for secondary actions inside cards

Background `rgba(237,195,196,0.05)`, no border, 1584px radius, 20px 32px padding, white text. A small brand-color glyph may sit left of the label.

### Compact Outlined Button

**Role:** Small white-bordered control for inline actions

Background `rgba(247,249,250,0.08)`, 1px `#f7f9fa` border, 6px radius, 9px 15px padding. Use in compact toolbars and table rows.

### Text-Only Nav Link

**Role:** Unbordered link in the main navigation

Transparent background, 0px radius, 10.4px vertical padding, muted steel text. Underline appears on hover. Keep this the lightest-weight interactive in the system.

### Frosted Nav Bar

**Role:** Sticky top navigation with backdrop blur

Fixed top bar, background `rgba(51,50,72,0.7)` (`--nav-bg-color`), `backdrop-filter: blur(10px)`, and a 1px bottom border in `#6b6b6b`. Brand wordmark on the left in Whyte Inktrap weight 500. Nav items in Whyte Inktrap 12px uppercase with 0.07em tracking. The blur lets the atmospheric hero breathe through.

### Comparison Card

**Role:** Side-by-side competitive comparison tile

19.2px radius, full-bleed gradient or violet bloom background, 40px padding, no border, no shadow. Each card carries a faint oversized number (01–04) behind a small label and a link. The cards are connected by a horizontal line and circular node markers, like a flight route.

### Feature Row Card

**Role:** Single feature block with description and link

Transparent background, 19.2px radius, no internal padding. One side carries a “Learn More” link; the other has Whyte Inktrap 18px weight 400 body copy. Spacing creates the boundary instead of a visible container.

### Violet Bloom Card

**Role:** Accent card that breaks the monochrome

Background `#af50ff` or a radial violet bloom, 19.2px radius, 40px padding. Use sparingly — when violet appears, it should feel like a signal, not a theme.

### Coordinate Footer

**Role:** Minimal page footer with geographic stamp

Full-bleed dark band with no background fill. Left: small “+” icon and concise brand labels in Whyte Inktrap 14px. Right: a coordinate or status label and a small heart icon. Keep the footer quiet and signature-like.

### Hairline Divider

**Role:** Section separator with no weight

0.5px or 1px solid stroke in `#f7f9fa` at 10–20% opacity. Use instead of shadows and heavy borders. The system trusts line weight, not depth, to create rhythm.

## Do's and Don'ts

### Do

- Use Signal Violet (`#af50ff`) for a small number of feature glows, actions, and accent strokes.
- Set section headings in Whyte Inktrap Mono, uppercase, with generous tracking.
- Default cards to 19.2px radius and let spacing create the boundary.
- Use thin, low-opacity borders for separation instead of shadows or heavy fills.
- Reach for GrandSlang italic at 88–146px for the largest display moments; never use it for body or nav.
- Use the frosted nav pattern: `rgba(51,50,72,0.7)` background, 10px backdrop blur, and a 1px bottom border.
- Keep the portrait scan layers aligned and make the reveal usable by pointer and keyboard.
- End pages with a restrained footer signature.

### Don't

- Apply box-shadows beyond a subtle nav treatment; the system is shadowless by design.
- Use Signal Violet for large body backgrounds or routine body text.
- Use GrandSlang italic below 32px.
- Mix Whyte Inktrap Mono with GrandSlang on the same line.
- Introduce a new accent color without a clear product need.
- Center body copy or use dense multi-column text layouts.
- Use a mismatched crop for the human and robot portrait layers.
- Round buttons to 0px or 4px; use 8px for controls and pill radii for pill actions.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#090909` | Full-bleed page background — every section sits directly on this |
| 1 | Translucent Panel | `#333248b3` | Floating nav with backdrop blur — a frosted glass strip pinned to the top |
| 2 | Iron Wash | `#423738` | Ghost button fills and subtle card washes that stay close to the void |
| 3 | Violet Bloom | `#af50ff` | Feature backgrounds and radial glows — the one place the palette breaks monochrome |

## Elevation

- **Nav Bar:** `rgba(16, 24, 40, 0.05) 0px 1px 2px 0px`
- Avoid decorative shadows elsewhere; use hairlines and translucent washes for separation.

## Imagery

Photography is treated as a single dramatic hero asset: a wide-format twilight sky with purple and lavender clouds over a glowing horizon and a single light streak. The image fills the hero, with text sitting directly on it. After the hero, the page is primarily iconographic: no stock imagery or unnecessary screenshots. Comparison areas use soft radial gradient blooms as abstract color studies. Icons are minimal line glyphs in `#f7f9fa`. The overall ratio is text-and-rule dominant; imagery occupies less than 15% of the page outside the main hero.

For the Senitel face scan, use the paired human and robot portrait assets as a single aligned composition. The visible circular reveal is a CSS mask over the robot layer, with a separate scan ring and glow; do not flatten the interaction into a static half-face image.

## Layout

Full-bleed sections with a 1200px content max-width centered inside. The hero is a split composition: roughly 55/45 text-to-card, with a translucent boarding-pass card overlaying the right side of the atmospheric photograph. Below the hero, the system shifts to edge-to-edge dark bands; rhythm comes from generous section gaps (~120px) and stamped section labels. Feature content uses a stacked monospace heading above open rows. Comparison content may use a four-column card grid connected by a horizontal route line. Navigation is a single sticky frosted bar with brand left, links center, and actions right. Density is comfortable; the page never uses card grids denser than four across.

## Agent Prompt Guide

**Quick Color Reference**

- text: `#f7f9fa`
- background: `#090909`
- border: `rgba(247,249,250,0.2)`
- accent / brand signal: `#af50ff`
- muted text: `#828384`
- primary action: `#af50ff` (filled action)

**Example Component Prompts**

1. *Stamped Section Heading:* Render “SSL INSPECTION” as a single line in Whyte Inktrap Mono, 74px, weight 400, uppercase, letter-spacing 0.2em, color `#f0f0f0`, on a `#090909` background. No underline, no decoration.
2. *Hero Boarding Pass Card:* Create a right-aligned 19.2px-radius card on the hero with a translucent fill, 1px white border, 40px padding, a boarding-pass label, an origin/destination line, a 32px heading, and two pill actions.
3. *Filled Action Button:* Build an 8px-radius button with `#090909` background, 1px `#f7f9fa` border, 16px padding, and white 16px Whyte Inktrap text.
4. *Violet Bloom Feature Card:* A 19.2px-radius card filled with `#af50ff`, 40px padding, containing a 32px white heading and a 14px body line. One per page maximum.
5. *Coordinate Footer:* A full-width `#090909` band with a “+” icon and brand labels on the left, a coordinate or status on the right, and a small heart icon.

## Similar Brands

- **Linear** — Dark monochrome canvas with a single saturated accent color rationed across the interface.
- **Vercel** — Shadowless discipline: flat surfaces, hairline borders, and generous dark space.
- **Arc Browser** — Editorial display serif and geometric sans paired with product restraint.
- **Stripe Press** — Travel-coded editorial language and extreme letter-spacing on uppercase stamps.
- **Nothing.tech** — Mechanical mono typography with a monochrome-with-one-glow color strategy.

## Quick Start

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-near-black: #090909;
  --color-almost-white: #f7f9fa;
  --color-soft-white: #f0f0f0;
  --color-steel: #828384;
  --color-graphite: #474747;
  --color-iron: #423738;
  --color-ash: #6b6b6b;
  --color-signal-violet: #af50ff;
  --color-lavender-mist: #e1bdff;

  /* Typography — Font Families */
  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, sans-serif;
  --font-whyte-inktrap-mono: 'Whyte Inktrap Mono', ui-monospace, monospace;
  --font-grandslang: 'GrandSlang', ui-sans-serif, system-ui, sans-serif;
  --font-system-ui: system-ui, ui-sans-serif, sans-serif;
  --font-karla: 'Karla', ui-sans-serif, sans-serif;

  /* Typography — Scale */
  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: 1.8px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.32px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -0.48px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.64px;
  --text-section-stamp: 74px;
  --leading-section-stamp: 0.9;
  --tracking-section-stamp: 14.8px;
  --text-display: 88px;
  --leading-display: 0.8;
  --tracking-display: -2.64px;

  /* Typography — Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-160: 160px;

  /* Layout */
  --page-max-width: 1200px;
  --section-gap: 120px;
  --card-padding: 40px;
  --element-gap: 16px;

  /* Border Radius */
  --radius-lg: 8px;
  --radius-lg-2: 10.8px;
  --radius-2xl: 19.2px;
  --radius-full: 99px;
  --radius-full-2: 1584px;
  --radius-full-3: 10000px;

  /* Named Radii */
  --radius-cards: 19.2px;
  --radius-pills: 1584px;
  --radius-buttons: 8px;
  --radius-smallcontrols: 6px;

  /* Shadows */
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;

  /* Surfaces */
  --surface-void-canvas: #090909;
  --surface-translucent-panel: #333248b3;
  --surface-iron-wash: #423738;
  --surface-violet-bloom: #af50ff;
}
```

### Tailwind v4

```css
@theme {
  --color-near-black: #090909;
  --color-almost-white: #f7f9fa;
  --color-soft-white: #f0f0f0;
  --color-steel: #828384;
  --color-graphite: #474747;
  --color-iron: #423738;
  --color-ash: #6b6b6b;
  --color-signal-violet: #af50ff;
  --color-lavender-mist: #e1bdff;

  --font-whyte-inktrap: 'Whyte Inktrap', ui-sans-serif, system-ui, sans-serif;
  --font-whyte-inktrap-mono: 'Whyte Inktrap Mono', ui-monospace, monospace;
  --font-grandslang: 'GrandSlang', ui-sans-serif, system-ui, sans-serif;
  --font-system-ui: system-ui, ui-sans-serif, sans-serif;
  --font-karla: 'Karla', ui-sans-serif, sans-serif;

  --text-caption: 10px;
  --leading-caption: 1;
  --tracking-caption: 1.8px;
  --text-body-sm: 14px;
  --leading-body-sm: 1.5;
  --tracking-body-sm: 0px;
  --text-body: 16px;
  --leading-body: 1.5;
  --tracking-body: 0px;
  --text-subheading: 20px;
  --leading-subheading: 1;
  --tracking-subheading: -0.2px;
  --text-heading-sm: 32px;
  --leading-heading-sm: 1.2;
  --tracking-heading-sm: -0.32px;
  --text-heading: 48px;
  --leading-heading: 1.2;
  --tracking-heading: -0.48px;
  --text-heading-lg: 64px;
  --leading-heading-lg: 1.2;
  --tracking-heading-lg: -0.64px;
  --text-section-stamp: 74px;
  --leading-section-stamp: 0.9;
  --tracking-section-stamp: 14.8px;
  --text-display: 88px;
  --leading-display: 0.8;
  --tracking-display: -2.64px;

  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-48: 48px;
  --spacing-64: 64px;
  --spacing-72: 72px;
  --spacing-80: 80px;
  --spacing-96: 96px;
  --spacing-128: 128px;
  --spacing-136: 136px;
  --spacing-160: 160px;

  --radius-lg: 8px;
  --radius-lg-2: 10.8px;
  --radius-2xl: 19.2px;
  --radius-full: 99px;
  --radius-full-2: 1584px;
  --radius-full-3: 10000px;
  --shadow-subtle: rgba(16, 24, 40, 0.05) 0px 1px 2px 0px;
}
```
