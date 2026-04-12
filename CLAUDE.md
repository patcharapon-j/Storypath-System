# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Storypath System is a single-page character creation wizard for a storytelling/RPG system. Users pick cards from three narrative paths (Legacy, Bond, Catalyst) to build a character backstory, then export it as a PDF dossier.

## Development

This is a static site with no build system. To run locally, open `index.html` in a browser. No server, bundler, or package manager is needed.

- **No tests, linter, or build commands exist.**
- PDF generation uses jsPDF + html2canvas loaded from CDN.
- All images are in `Images/` with naming convention `[path]_[title].jpg` (lowercase).

## Architecture

**Files:** `index.html` (markup + 6-screen layout), `script.js` (all application logic, ~900 lines), `styles.css` (dark theme design system + animations).

**State:** A single global `app` object holds all state — card data arrays, selection arrays, final picks, phase tracking per path, and current screen ID. There is no framework or module system.

**Screen flow:** The app has 6 screens toggled via `showScreen(screenId)` which sets `.active` class. The flow is:
1. Intro → Legacy (pick 3 from fan → confirm → pick 1 from promoted)
2. → Bond (same flow) → Catalyst (same flow)
3. → Catalyst Options (destructive/constructive) → Character Summary → PDF export

Each path screen combines Phase 1 (fan of 20 cards) and Phase 2 (3 promoted cards) in a single view with the "promote-and-dim" transition.

**Card rendering:** `createCard()` builds card DOM elements with 3D flip animation (`rotateY`, `backface-visibility`). The fan uses a polar-coordinate arc layout via `applyFanLayout()`. Phase 2 uses `renderPromotedCards()` with panel containers.

**Progress bar:** A sticky progress bar shows collected cards as thumbnails with connector lines between them. Filled slots support click-to-popover for card details.

**Atmospheric effects:** Canvas-based dot grid background (`initDotGrid()`) with mouse proximity glow and click wave propagation. CSS click ripples on every interaction. Card flips trigger path-colored ripple waves.

**Catalyst cards are special:** They have dual outcomes (`destructive`/`constructive` fields) unlike Legacy/Bond cards. A `catalystImageMap` object maps catalyst titles to filenames because their titles don't follow the simple naming pattern.

**PDF generation:** `generatePDF()` creates a dark-themed A4 dossier with card images embedded via canvas, purple accent lines, and paginated layout.

## Design System

- **Theme:** Dark atmospheric with purple accent, adapted from Iron Roll design language
- **CSS prefix:** All custom classes use `sp-` prefix (e.g., `sp-panel`, `sp-btn`, `sp-label`)
- **Panel system:** `sp-panel` (card background + top glow), `sp-corners`/`sp-corners-bottom` (bracket decorations), `sp-divider` (gradient line), `sp-diamond` (pip indicators)
- **Typography:** Three tiers — Cinzel (display/titles), Montserrat (body text), Geist Mono (UI chrome/labels/buttons)
- **Colors:** CSS variables with `--bg-*`, `--border-*`, `--text-*`, `--accent-*`, `--path-*` naming
- **Easing:** `--ease-default: cubic-bezier(0.22, 1, 0.36, 1)` for most transitions, `--ease-flip: cubic-bezier(0.34, 1.56, 0.64, 1)` for card flips

## Key Conventions

- JS: camelCase. CSS: kebab-case with `sp-` prefix. IDs follow `[path]-[purpose]` pattern (e.g., `legacy-confirm`, `bond-grid`).
- Card data is hardcoded in `script.js` (20 cards per path, 60 total).
- Event listeners are attached in JS via `DOMContentLoaded` (no inline HTML handlers).
- Card shuffling uses Fisher-Yates algorithm in `shuffleArray()`.

## Contributors

Multiple contributors (patcharapon-j, Chiibi, srpthemangoeater). Feature branches merged via PRs.
