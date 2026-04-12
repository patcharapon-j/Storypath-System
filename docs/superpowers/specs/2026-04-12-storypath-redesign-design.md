# Storypath System — Complete Redesign Spec

A comprehensive visual and UX overhaul of the Storypath character creation wizard, adapting the Iron Roll design language into a dark, atmospheric fantasy identity.

---

## Table of Contents

- [Design Direction](#design-direction)
- [Color System](#color-system)
- [Typography](#typography)
- [Panel System](#panel-system)
- [Atmospheric Effects](#atmospheric-effects)
- [Motion & Easing](#motion--easing)
- [Screen Flow](#screen-flow)
- [Card Interaction — Promote & Dim](#card-interaction--promote--dim)
- [Progress Bar — Collected Cards](#progress-bar--collected-cards)
- [Screen-by-Screen Breakdown](#screen-by-screen-breakdown)
- [Summary & PDF — Dossier Layout](#summary--pdf--dossier-layout)
- [Responsive Behavior](#responsive-behavior)
- [Technical Constraints](#technical-constraints)

---

## Design Direction

**Adapted fusion** of the Iron Roll design system with a fantasy identity:

- Structural principles from Iron Roll: one easing curve, panel system, sharp borders, layered atmosphere, monospace UI chrome, corner bracket accents, diamond pips
- Re-themed for Storypath: mystical purple accent instead of tactical gold, display font for titles, fantasy language instead of military language, warm dark backgrounds
- The fantasy card art is the star — the UI frames it, never competes with it

---

## Color System

All colors as CSS custom properties on `:root`.

### Backgrounds (dark, near-black — warmer than Iron Roll)

```css
--bg-primary:   #0a0a10;  /* Page/body background */
--bg-surface:   #10101a;  /* Input fields, surface panels */
--bg-elevated:  #181824;  /* Lifted panels, modals */
--bg-card:      #13131e;  /* Card faces, compact containers */
```

### Borders

```css
--border-subtle: rgba(255, 255, 255, 0.08);
--border-medium: rgba(255, 255, 255, 0.14);
```

### Text

```css
--text-primary:   #ededf4;  /* Main readable text */
--text-secondary: #8e8ea3;  /* Supporting/label text */
--text-muted:     #555568;  /* Inactive/disabled/decorative */
```

### Accent

```css
--accent-purple:      #9b6dff;  /* Primary — CTAs, active states, all accents */
--accent-purple-dim:  rgba(155, 109, 255, 0.35);  /* Borders, subtle highlights */
--accent-purple-glow: rgba(155, 109, 255, 0.15);  /* Box shadows, glows */
--accent-secondary:   #c9a96e;  /* Rare use — gold for special emphasis (PDF header, etc.) */
```

### Path-specific colors (for card selection glows)

```css
--path-legacy:   #9b6dff;  /* Purple — default accent */
--path-bond:     #6b9df5;  /* Blue — trust, connection */
--path-catalyst: #e05555;  /* Red — change, conflict */
```

---

## Typography

Three-tier system balancing fantasy identity with Iron Roll's tactical feel.

### Font Stack

```css
--font-display: 'Cinzel', serif;           /* Major headings, path titles */
--font-body:    'Montserrat', sans-serif;   /* Card descriptions, narrative text */
--font-mono:    'Geist Mono', monospace;    /* UI chrome, labels, buttons */
```

Load Geist Mono via Google Fonts or CDN. Cinzel and Montserrat are already in use.

### Typography Scale

| Role | Font | Style | Size |
|---|---|---|---|
| App title | `--font-display` | `font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase` | `2rem` |
| Path heading (e.g. "Legacy Path") | `--font-display` | `font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase` | `1.5rem` |
| Card title | `--font-display` | `font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase` | `1.1rem` |
| Section/group label | `--font-mono` | `font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent-purple)` | `9px` |
| Button text | `--font-mono` | `font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase` | `11px` |
| Card description / narrative | `--font-body` | `font-weight: 400; line-height: 1.7` | `0.95rem` |
| Muted/decorative labels | `--font-mono` | `letter-spacing: 0.2em; text-transform: uppercase; color: var(--text-muted)` | `8px` |

---

## Panel System

Adapted from Iron Roll's `ark-panel` with purple theming.

### Base Panel

```css
.sp-panel {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

/* Purple top-edge accent line */
.sp-panel::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-purple), transparent);
  opacity: 0.3;
}
```

### Corner Brackets

Four L-shaped bracket marks at panel corners, purple-tinted:

```css
.sp-corners { position: relative; }

.sp-corners::before {
  content: "";
  position: absolute;
  top: 4px; left: 4px;
  width: 8px; height: 8px;
  border-top: 1.5px solid rgba(155, 109, 255, 0.25);
  border-left: 1.5px solid rgba(155, 109, 255, 0.25);
  z-index: 1;
  pointer-events: none;
}

.sp-corners::after {
  content: "";
  position: absolute;
  top: 4px; right: 4px;
  width: 8px; height: 8px;
  border-top: 1.5px solid rgba(155, 109, 255, 0.25);
  border-right: 1.5px solid rgba(155, 109, 255, 0.25);
  z-index: 1;
  pointer-events: none;
}

/* Bottom corners via a child element .sp-corners-bottom with matching ::before/::after */
```

### Dividers

```css
.sp-divider {
  display: flex;
  align-items: center;
  gap: 12px;
}
.sp-divider::before,
.sp-divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--accent-purple), transparent);
  opacity: 0.15;
}
```

### Diamond Pips

Small rotated squares used before headings and as decorative markers:

```css
.sp-diamond {
  width: 6px;
  height: 6px;
  transform: rotate(45deg);
  border: 1px solid var(--text-muted);
  display: inline-block;
}

.sp-diamond-active {
  border-color: var(--accent-purple);
  background: var(--accent-purple);
}
```

### Buttons

```css
.sp-btn {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 10px 24px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.22, 1, 0.36, 1);
}

/* Primary */
.sp-btn-primary {
  border-color: var(--accent-purple-dim);
  background: rgba(155, 109, 255, 0.08);
  color: var(--accent-purple);
}
.sp-btn-primary:hover {
  background: rgba(155, 109, 255, 0.15);
  border-color: rgba(155, 109, 255, 0.5);
  box-shadow: 0 0 20px var(--accent-purple-glow);
}
.sp-btn-primary:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Secondary */
.sp-btn-secondary {
  border-color: var(--border-subtle);
  background: var(--bg-surface);
  color: var(--text-secondary);
}
.sp-btn-secondary:hover {
  background: var(--bg-elevated);
  color: var(--text-primary);
}
```

---

## Atmospheric Effects

All layers adapted from Iron Roll with purple theming.

### 1. Noise Texture Overlay

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* SVG fractalNoise, baseFrequency 0.9, octaves 4 */
  opacity: 0.025;
  z-index: 9999;
  pointer-events: none;
}
```

### 2. Dot Grid Canvas Background

A fixed `<canvas>` at `z-index: 0`, pointer-events disabled:

- Grid: 22px spacing, dots 0.8px radius at 7% opacity
- Elliptical mask: dots fade at screen edges, full density in center 45%x42%
- Mouse proximity (140px radius): dots brighten to 38% opacity, grow to 2.4px, purple glow halo
- Click wave: purple pulse ring, speed 380px/s, max radius 350px
- Card flip wave: path-colored pulse (legacy=purple, bond=blue, catalyst=red), max radius 650px

### 3. Click Ripple Effect

Every click spawns a radial gradient circle:

```css
.click-ripple {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(155, 109, 255, 0.12), transparent 70%);
  animation: ripple-expand 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  z-index: 9998;
  pointer-events: none;
}
```

Card flips spawn a larger 600px path-colored ripple.

### 4. Custom Scrollbar

```css
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-thumb {
  background: var(--border-medium);
  border-radius: 2px;
}
::-webkit-scrollbar-track { background: transparent; }
```

---

## Motion & Easing

### Universal Easing

```css
--ease-default: cubic-bezier(0.22, 1, 0.36, 1);
```

Applied to all interactive elements globally. Fast start, sharp deceleration — things arrive with authority.

### Card Flip Easing (overshoot)

```css
--ease-flip: cubic-bezier(0.34, 1.56, 0.64, 1);
```

The card slightly over-rotates past 180deg then settles back. Physical.

### Standard Entrance

```css
/* Elements fade in from below */
opacity: 0 → 1;
transform: translateY(20px) → translateY(0);
duration: 0.5s;
easing: var(--ease-default);
```

### Staggered Card Entrance

Each card in a grid enters with `delay: index * 0.04s`.

### Card Effects

- **Flip burst**: expanding 1px border ring, `scale(0.95)` → `scale(1.08)`, 0.5s ease-out
- **Shimmer sweep**: white light stripe sweeps left→right across flipped face, 0.7s + 0.15s delay
- **Selection glow pulse**: breathing purple glow, 2s infinite ease-in-out
- **Scan line**: 1px purple gradient line sweeping top→bottom across panels, 4s infinite

### Hover States

All use `var(--ease-default)`:

1. Border: `--border-subtle` → `--accent-purple` at 30% opacity
2. Background: `--bg-card` → `--bg-elevated`
3. Cards: `translateY(-2px)` + `scale(1.02)`
4. Glow: `box-shadow: 0 8px 32px rgba(0,0,0,0.4), 0 0 24px -8px var(--accent-purple-glow)`

---

## Screen Flow

Six screens total (condensed from 9):

```
Intro → Legacy Path → Bond Path → Catalyst Path → Catalyst Options → Summary/PDF
```

All screens toggled via CSS (`display: none/flex`) with entrance animations on the incoming screen. The **collected cards progress bar** is persistent across screens 2-6.

---

## Card Interaction — Promote & Dim

Each path screen (Legacy, Bond, Catalyst) follows this pattern:

### Phase 1: Fan Selection (pick 3 of 20)

1. 20 cards dealt into an arc fan layout (existing polar-coordinate math, refined)
2. All cards start face-down with crosshatch card back texture
3. Hovering a card: straighten (`rotate(0)`), lift (`translateY(-30px)`), scale up (`scale(1.2)`)
4. Clicking a card: flip with overshoot easing, pop out of fan (`translateY(-50px)`, `scale(1.25)`), glow pulse begins
5. Clicking a selected card: deselect, return to fan position, flip back
6. Confirm button enables when exactly 3 selected: `CONFIRM SELECTION (3/3)`

### Phase 2: Promote & Dim (pick 1 of 3)

Triggered when user clicks confirm:

1. **Collapse**: remaining 17 cards fade out (`opacity: 0`, `scale: 0.8`) with staggered timing (0.02s per card), then `display: none`
2. **Promote**: the 3 selected cards animate from their fan positions to a centered horizontal row:
   - Target size: ~280px wide (aspect ratio 867:1431)
   - Each card wraps in an `sp-panel sp-corners` container
   - Entrance uses spring-like easing with slight overshoot
   - Cards are face-up (already flipped)
   - Glow pulse continues on all 3
3. **Choose**: hovering a promoted card shows its description in a panel below (slide up, 0.4s). Clicking selects it:
   - Chosen card: `scale(1.06)`, burst effect, intensified glow
   - Other 2 cards: `opacity: 0.35`, `scale: 0.94`
   - Description panel locks to the chosen card's text
4. **Proceed** button enables: `CONTINUE TO BOND PATH` (or next step)

### Deselection

During Phase 2, clicking the chosen card deselects it (restores all 3 to equal state). Clicking a different card switches selection. A "Back to Fan" button allows returning to Phase 1 (re-expands the fan with all 20).

---

## Progress Bar — Collected Cards

A persistent horizontal bar at the top of the page (below the header), visible on all screens except Intro.

### Structure

```
[ Legacy Slot ] ─── [ Bond Slot ] ─── [ Catalyst Slot ]
```

- **Empty slot**: outlined card silhouette (dashed border, `--border-subtle`) with a diamond pip centered inside. Label below in monospace: `LEGACY`, `BOND`, `CATALYST`.
- **Filled slot**: thumbnail of the chosen card image (~60px wide), inside an `sp-panel` with corner brackets. Subtle path-colored glow. Label updates to the card title.
- Slots are connected by a thin gradient line that fills with purple as paths are completed.
- **Clicking a filled slot**: opens a small popover/tooltip showing the card image larger + title + first ~100 chars of description. Dismisses on click outside.

### Animation

When a path is completed and the card "collects":
1. The chosen card shrinks from its position on the path screen
2. Flies to its slot in the progress bar (parabolic arc trajectory)
3. Lands with a small burst effect and glow pulse
4. The connecting line fills to the next slot
5. Brief pause, then auto-advance to the next path screen

**Graceful degradation**: if the parabolic arc flight is too complex in vanilla JS, fall back to: card shrinks in place → fades out → thumbnail fades into the progress slot. The visual reward is preserved even without the flight path.

---

## Screen-by-Screen Breakdown

### 1. Intro Screen

- Full-screen dark background with atmospheric canvas
- App title in Cinzel: `STORYPATH` with wide letter-spacing
- Subtitle in monospace: `CHARACTER CREATION SYSTEM`
- Brief description in Montserrat (3 lines about the 3 paths)
- Three small icon/label groups for Legacy, Bond, Catalyst with diamond pips
- Primary CTA button: `BEGIN YOUR JOURNEY`
- Entrance: title fades in first, then subtitle, then description, then button (staggered 0.15s)

### 2-4. Path Screens (Legacy, Bond, Catalyst)

- Progress bar at top (collected cards)
- Path heading in Cinzel with diamond pip prefix: `◇ LEGACY PATH`
- Instruction text in monospace: `SELECT 3 CARDS THAT REPRESENT YOUR CHARACTER'S ORIGIN`
- Card fan area (Phase 1) / Promoted cards area (Phase 2)
- Description panel (Phase 2, slides up when hovering/selecting a promoted card)
- Navigation: confirm button (Phase 1) or continue button (Phase 2) + back button
- All inside the atmospheric canvas background

### 5. Catalyst Options Screen

- Progress bar at top
- Heading: `◇ CATALYST — CHOOSE YOUR OUTCOME`
- The chosen catalyst card displayed at left in an `sp-panel`
- Two option panels side by side (or stacked on mobile):
  - **Destructive Outcome** — `sp-panel` with red-tinted top accent line, corner brackets
  - **Constructive Outcome** — `sp-panel` with purple top accent line
  - Each shows the outcome text and a selection button
- Clicking an option: panel border intensifies, other panel dims
- Continue button enables after choosing

### 6. Summary — Dossier Layout

See next section.

---

## Summary & PDF — Dossier Layout

### On-Screen Layout

Presented as a styled "dossier document" inside the atmospheric UI:

**Header section:**
- Title in Cinzel: `CHARACTER DOSSIER` or `YOUR CHARACTER'S STORY`
- The 3 collected cards displayed in a row (medium size), inside `sp-panel` containers
- Purple gradient divider below

**Path sections (3x, scrollable):**
Each path is an `sp-panel sp-corners` with:
- Left side (40%): card image, full height of the panel
- Right side (60%): 
  - Path label in monospace: `LEGACY`
  - Card title in Cinzel
  - Purple gradient divider
  - Description text in Montserrat
  - For catalyst: includes the chosen outcome type label (`DESTRUCTIVE` or `CONSTRUCTIVE`)

**Notes section:**
- `sp-panel` with monospace label: `CHARACTER NOTES`
- Dark-themed textarea (`sp-input` styling): dark background, purple focus border
- Placeholder: `ADD ADDITIONAL DETAILS ABOUT YOUR CHARACTER...`

**Actions:**
- `SAVE AS PDF` button (primary)
- `CREATE NEW CHARACTER` button (secondary)

### PDF Generation

The PDF mirrors the on-screen dossier layout:

- Dark background (`--bg-primary` equivalent in PDF)
- Title in bold at top
- Each path section: card image on left, text on right
- Purple accent lines as section dividers
- Character notes section at bottom
- Footer: `CREATED WITH STORYPATH CHARACTER SYSTEM` + page number
- Card images embedded (loaded via canvas, then drawn into jsPDF)

---

## Responsive Behavior

### Desktop (>768px)
- Progress bar: horizontal row, card thumbnails ~60px wide
- Path screens: fan fills full width, promoted cards in horizontal row
- Catalyst options: two panels side by side
- Summary: card image left + text right in each path section

### Mobile (<=768px)
- Progress bar: smaller thumbnails (~40px), labels hidden (show on tap)
- Fan layout: reduced card size, tighter arc
- Promoted cards: stacked vertically (one above the other) instead of horizontal row
- Catalyst options: stacked vertically
- Summary: card image above text (stacked) in each path section
- All buttons: full width

### Touch Considerations
- Card hover effects become tap-to-preview (tap once to preview, tap again to select)
- Click ripples work on `touchstart`
- Dot grid canvas: no mouse proximity effect on mobile (performance)

---

## Technical Constraints

- **No framework, no build system** — remains a static site (index.html, styles.css, script.js)
- **No new dependencies** beyond Google Fonts additions (Geist Mono) and existing jsPDF + html2canvas
- **All 60 cards and images preserved** — card data arrays and Images/ folder unchanged
- **CSS custom properties** for the entire color/typography system
- **Canvas API** for the dot grid background (new addition)
- **All class names** use `sp-` prefix (Storypath) instead of `ark-` (Arknights)
- Browser support: modern evergreen browsers (CSS `inset`, `backdrop-filter`, canvas 2D)
