# Flappy W·Mautood

A pixel-art owl arcade game built with vanilla JavaScript, the Canvas API, and Vite.

Guide the owl through the gaps, keep it airborne, and chase a new high score.

## Features

- Six owl color palettes with three-frame flight animations
- Day and night scenes with matching blue and orange pipe themes
- Keyboard, mouse, and touch controls
- Local high-score persistence
- Global leaderboard support through a Cloudflare Worker
- Responsive canvas presentation for desktop and mobile

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` after starting the development server.

## Commands

```bash
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
src/
├── main.js
├── Game.js
├── Bird.js
├── Tubes.js
├── GameState.js
├── scenes/
├── ui/
└── utils/

public/
└── assets/
    ├── sprites/
    ├── flappy-font.ttf
    └── *.m4a

workers/
└── leaderboard-worker.js
```

## Leaderboard Setup

The optional global leaderboard uses a Cloudflare Worker to access a Turso database without exposing database credentials in the browser.

See [workers/README.md](workers/README.md) for deployment and configuration details.

## License

MIT. See [LICENSE](LICENSE).
