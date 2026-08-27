# Omniquest: Realm of Shadows

**Omniquest** is a high-performance 2D Action RPG and Procedural Dungeon Crawler engine written in TypeScript with ECS (Entity Component System) architecture, custom WebAudio synthesizer, physics spatial hash matrix, dynamic particle lighting engine, 3-level campaign progression with final boss encounters, and automated unit test suites.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Architecture & Key Features](#architecture--key-features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Build Instructions](#build-instructions)
- [Running the Game](#running-the-game)
- [Running Unit Tests](#running-unit-tests)
- [Game Controls](#game-controls)
- [3-Level Campaign Progression](#3-level-campaign-progression)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [License](#license)

---

## 🎮 Overview

Omniquest provides a complete browser-based Action RPG experience featuring procedural dungeons, diverse character classes (Warrior, Mage, Rogue), dynamic monster AI waves, particle visual effects, real-time audio synthesis, encrypted save-state security, and multi-tiered boss fights.

---

## 🏛️ Architecture & Key Features

- **Entity Component System (ECS)**: Decoupled architecture managing entities with Transform, Health, Physics, and Inventory components.
- **Procedural Generation**: Multi-room and corridor dungeon layouts with cellular smoothing and A* pathfinding.
- **Wave Spawning System**: Continuous enemy spawning algorithm ensuring dynamic dungeon populations.
- **WebAudio Sound Synthesizer**: Custom algorithmic sound effect generation for swords, magic blasts, pickups, and boss explosions without external sound asset dependencies.
- **Combat Simulation Matrix**: Damage calculation pipeline with critical strikes, damage mitigation, stamina/mana resource loops, and screen shake feedback.
- **Encrypted Save System**: Security-first save manager with cryptographic checksums for persistent player progress.

---

## 📋 Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- Modern Web Browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari)

---

## 📦 Installation

Clone the repository and install all development dependencies:

```bash
# Clone the repository
git clone https://github.com/divya-8143/omniquest.git

# Navigate to the project directory
cd omniquest/Project

# Install development dependencies
npm install
```

---

## 🔨 Build Instructions

To compile TypeScript source files to the JavaScript distribution target:

```bash
# Compile TypeScript to dist/
npm run build
```

This compiles all files in `src/` to `dist/` with full source maps and declaration files.

---

## 🚀 Running the Game

You can run Omniquest using any of the following methods:

### Method 1: Local HTTP Development Server (Recommended)
```bash
# Start a local static file server
npx serve -l 3000 .
```
Then navigate to `http://localhost:3000` in your web browser.

### Method 2: Python Built-in HTTP Server
```bash
# Start server on port 3000
python -m http.server 3000
```
Then visit `http://localhost:3000`.

### Method 3: Direct Browser Launch
Open `index.html` directly in your favorite web browser:
```cmd
start "" "index.html"
```

---

## 🧪 Running Unit Tests

Run the built-in automated test suite covering vector math, ECS entity management, collision detection, inventory systems, pathfinding algorithms, and save security:

```bash
# Run unit test suite
npm test
```

---

## ⌨️ Game Controls

| Key | Action |
|---|---|
| <kbd>W</kbd> / <kbd>▲</kbd> | Move Up |
| <kbd>S</kbd> / <kbd>▼</kbd> | Move Down |
| <kbd>A</kbd> / <kbd>◄</kbd> | Move Left |
| <kbd>D</kbd> / <kbd>►</kbd> | Move Right |
| <kbd>Space</kbd> / Left Click | Primary Attack |
| <kbd>1</kbd> | Primary Strike |
| <kbd>2</kbd> | Whirlwind Nova AOE |
| <kbd>3</kbd> | Shield Wall / Barrier |
| <kbd>4</kbd> | Ultimate Meteor Strike |
| <kbd>5</kbd> | Divine Healing Potion |
| <kbd>I</kbd> | Open Hero Inventory |
| <kbd>K</kbd> | Open Talent & Skill Tree |
| <kbd>Q</kbd> | Open Quest Log |
| <kbd>Escape</kbd> | Pause Game / Return to Menu |

---

## 🏆 3-Level Campaign Progression

1. **Level 1: Crypt of Shadows**
   - Theme: Dark slate catacombs.
   - Enemies: Goblin Scouts, Skeleton Minions (+50 Score per kill).
   - Objective: Reach **150 Score** to advance to Level 2.

2. **Level 2: Inferno Caverns**
   - Theme: Ember-lit volcanic caverns.
   - Enemies: Skeleton Knights, Inferno Imps, Shadow Necromancers (+75 Score per kill).
   - Objective: Reach **350 Score** to advance to Level 3.

3. **Level 3: Abyssal Throne (Final Boss Encounter)**
   - Theme: Deep void fortress.
   - Enemies: Abyssal Royal Guards and the **👑 Abyssal Demon Overlord (500 HP Final Boss)**.
   - Objective: Defeat the Final Boss to complete the game and trigger the Victory screen!

---

## 📁 Project Structure

```text
Project/
├── dist/                      # Compiled JavaScript files & browser bundle
│   └── bundle.js              # Complete standalone game bundle
├── src/                       # TypeScript source codebase
│   ├── audio/                 # WebAudio synthesizer & adaptive audio mixer
│   ├── core/                  # Engine loop, State machine, EventBus, Math2D
│   ├── ecs/                   # Entity Component System core & components
│   ├── gameplay/              # Classes, Combat formulas, Abilities, Bestiary
│   ├── graphics/              # Renderer, Camera, Dynamic particle lighting
│   ├── narrative/             # Dialogue engines & Lore journals
│   ├── physics/               # Spatial hashing & Bounding box collisions
│   ├── procgen/               # Procedural dungeon & pathfinding generators
│   ├── storage/               # Serialization & HMAC security save manager
│   ├── tests/                 # Automated unit test suites
│   ├── ui/                    # HUD rendering & Action bar overlays
│   ├── utils/                 # Crash logging & debugging utilities
│   └── index.ts               # Main game application entry point
├── index.html                 # Main viewport HTML & UI screen overlays
├── package.json               # Node.js project manifest & scripts
├── package-lock.json          # Dependency lockfile
├── tsconfig.json              # TypeScript compiler configuration
└── README.md                  # Project documentation & execution guide
```

---

## 📦 Dependencies

- **Development Dependencies**:
  - `typescript`: `^5.9.3` - Static type system and compiler.
  - `@types/node`: `^20.19.43` - Type definitions for Node.js environments.

---

## 📄 License

Proprietary and Confidential. All rights reserved. (UNLICENSED)
