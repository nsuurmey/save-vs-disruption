# Encounters in AI Leadership

A D&D-inspired random scenario generator for the AI Leadership session at AI 2030. Attendees at small tables use this mobile-first app to roll a D6 across multiple tables, generating discussion scenarios across 3 rounds.

## Live Site

[https://nsuurmey.github.io/save-vs-disruption/](https://nsuurmey.github.io/save-vs-disruption/)

## How It Works

1. **Landing** — Tap "Begin Encounter" to start
2. **Rolling** — Each round, roll on 3–4 tables (Problem, Complication, Tool/Constraint; Rounds 2–3 add an Industry Lens)
3. **Discuss** — Review your scenario card and discuss at your table
4. **Repeat** — 3 rounds total, each more complex than the last

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173/save-vs-disruption/](http://localhost:5173/save-vs-disruption/) in your browser.

## Building

```bash
npm run build
```

Output goes to `dist/`.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Deployed to GitHub Pages via GitHub Actions

## License

See [LICENSE](./LICENSE).
