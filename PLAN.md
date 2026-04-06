# Encounters in AI Leadership — Plan

## App Overview

A mobile-first, D&D-inspired random scenario generator for the "AI Leadership" session at AI 2030. Attendees at small tables roll a D6 across multiple tables to generate discussion scenarios across 3 rounds.

## User Flow

1. **Landing Screen** — Title, flavor text, "Begin Encounter" button. RPG sourcebook aesthetic.
2. **Round Progression** — 3 rounds total. Round 1 skips Table 0. Rounds 2–3 include Table 0 (Industry Lens).
3. **Rolling Sequence** (per round):
   - [Rounds 2–3 only] Roll Table 0: Industry Lens → show result → tap "Next"
   - Roll Table 1: The Problem → animated D6 → card reveal
   - Roll Table 2: The Complication → same pattern
   - Roll Table 3: The Tool / Constraint → same pattern
   - Scenario Summary — all results displayed as a complete scenario card with a "Discuss This" prompt
4. **After Discussion** — "Next Round" advances. After Round 3, wrap-up screen.
5. **Facilitator Mode (stretch)** — Toggle for facilitator notes, timing, report-back prompts.

## Component Tree

```
App
├── LandingScreen
├── RoundTracker (persistent header showing round progress)
└── RollSequence
    ├── DiceRoller (animated D6)
    ├── ResultCard (styled card for each roll result)
    └── ScenarioSummary (all results combined)
```

## Data Model

```typescript
type RollEntry = {
  id: string;
  roll: number;        // 1–6
  title: string;
  description: string;
  characterPrompt?: string; // Table 0 only
};

type RollTable = {
  id: string;
  name: string;
  flavorText: string;
  entries: RollEntry[];
};

type EncounterData = {
  tables: RollTable[];
  rounds: number;      // 3
  discussionPrompt: string;
};
```

All data stored in `src/data/encounters.ts` as a typed constant.

## Tech Stack

| Choice | Rationale |
|--------|-----------|
| **React 18 + TypeScript** | Type-safe components, great DX |
| **Vite** | Fast builds, simple config, easy GitHub Pages deploy |
| **Tailwind CSS v3 (PostCSS)** | Utility-first, rapid styling, purged in production for tiny bundles |
| **No router** | Single-page app with state-driven screens — no URL routing needed |
| **No backend** | All content is static, embedded in the bundle |

## File Structure

```
save-vs-disruption/
├── PLAN.md
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── data/
│   │   └── encounters.ts
│   └── components/
│       ├── LandingScreen.tsx
│       ├── RollSequence.tsx
│       ├── DiceRoller.tsx
│       ├── ResultCard.tsx
│       ├── ScenarioSummary.tsx
│       └── RoundTracker.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── .gitignore
```

## Deployment

- Vite `base` set to `'/save-vs-disruption/'` (matches repo name)
- GitHub Actions workflow triggers on push to `main`
- Builds with `npm run build`, deploys `dist/` to GitHub Pages
- Site available at `https://nsuurmey.github.io/save-vs-disruption/`

## Design Tokens

- **Palette:** Parchment (#F5F0E8), Dark leather (#2C1810), Ink (#1A1A2E), Gold accent (#C9A84C), Danger red (#8B2500)
- **Fonts:** Serif headers (system serif stack), sans body (system sans stack)
- **Dark mode:** Auto-detect via `prefers-color-scheme`, darker parchment tones
- **Cards:** Subtle border, slight shadow, rounded corners
- **Dice animation:** CSS keyframe cycling numbers 1–6 rapidly, easing to final value over ~1s
