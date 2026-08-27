# Omniquest: Realm of Shadows

**Omniquest** is a high-performance 2D Action RPG and Procedural Dungeon Crawler engine written in TypeScript with ECS (Entity Component System) architecture, custom WebAudio synthesizer, physics spatial hash matrix, dynamic particle lighting engine, 3-level campaign progression with final boss encounters, modding API, status effect system, and automated unit test suites.

---

## 📑 Table of Contents
- [Overview](#overview)
- [Architecture & Key Features](#architecture--key-features)
- [Codebase Structure & LOC Breakdown](#codebase-structure--loc-breakdown)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Build Instructions](#build-instructions)
- [Running the Game](#running-the-game)
- [Running Unit Tests](#running-unit-tests)
- [Game Controls](#game-controls)
- [3-Level Campaign Progression](#3-level-campaign-progression)
- [Modding & Custom Content API](#modding--custom-content-api)
- [License](#license)

---

## 🎮 Overview

Omniquest provides a complete browser-based Action RPG experience featuring procedural dungeons, diverse character classes (Warrior, Mage, Rogue), dynamic monster AI waves, particle visual effects, real-time audio synthesis, encrypted save-state security, and multi-tiered boss fights.

---

## 🏛️ Architecture & Key Features

- **Entity Component System (ECS)**: Decoupled architecture managing entities with Transform, Health, Physics, and Inventory components.
- **Status Effect & Stacking Engine**: Complete tick damage, stun/freeze immobilization, slow/haste modifiers, and dispel priorities (`StatusEffectSystem.ts`).
- **Crafting & Enchanting Engine**: Material consumption, recipe success rolls, and rune socketing (`CraftingEnchantingSystem.ts`).
- **Boss AI Behavior Trees**: Selector/Sequence decision trees, phase enrages, and visual ground telegraph warnings (`BossBehaviorTreeEngine.ts`).
- **Procedural Biome Director**: Multi-biome themes (Crypt, Inferno, Abyssal, Glacial) with prop scattering and trap corridors.
- **Dynamic Combat Audio & Ambient Layers**: Real-time intensity crossfading (Calm $\rightarrow$ Skirmish $\rightarrow$ Boss Enraged) and WebAudio procedural synthesis.
- **Modding & Community Content API**: Sandboxed JSON schema validator for custom items, monsters, and room blueprints.
- **Save Backup Rotation & Rollback**: Multi-slot timestamped save backup system with cryptographic verification.

---

## 📊 Codebase Structure & LOC Breakdown

| Directory / Subsystem | Files | LOC Count | Key Components |
|---|---|---|---|
| `src/core/` | 14 | ~4,500 LOC | Game loop, EventBus, EventScheduler, Math 2D/3D, PerformanceProfiler |
| `src/ecs/` | 10 | ~2,500 LOC | EntityManager, Entity, Component, Systems |
| `src/gameplay/` | 22 | ~6,500 LOC | Status effects, Crafting, Boss AI trees, Elemental affinity, Combat |
| `src/procgen/` | 12 | ~3,500 LOC | Biome theming, Prop scattering, Secret rooms, BSP generator, Pathfinding |
| `src/audio/` | 7 | ~2,200 LOC | AudioSynthesizer, Dynamic combat music, Biome ambience layers |
| `src/graphics/` | 8 | ~2,400 LOC | Canvas post-processor, Floating text animation, Telegraph renderer |
| `src/narrative/` | 7 | ~2,000 LOC | Branching side quests, Biome lore chronicles, World history |
| `src/modding/` | 2 | ~1,500 LOC | ModdingContentLoader, CustomBlueprintHookSystem |
| `src/storage/` | 5 | ~1,400 LOC | Encrypted save manager, Save backup rotation, Schema migrator |
| `src/gameplay/expanded/` | 48+ | ~22,000+ LOC | Comprehensive item, monster, spell, talent, and room catalog tables |
| `src/tests/` | 13 | ~1,800 LOC | Status effects, Crafting, Biome generation, Mod loader, ECS unit tests |
| **Total Production Codebase** | **150+** | **52,000+ LOC** | **100% Type-Safe TypeScript** |

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
# Clone repository
git clone https://github.com/divya-8143/omniquest.git

# Navigate to project directory
cd omniquest/Project

# Install dependencies
npm install
```

---

## 🔨 Build Instructions

Compile the TypeScript source code and build the production bundle:

```bash
npm run build
```

---

## 🚀 Running the Game

Launch the local web server to play Omniquest in your web browser:

```bash
# Option 1: Using npm start
npm start

# Option 2: Using Python HTTP server
python -m http.server 3000

# Option 3: Using npx serve
npx serve .
```

Open `http://localhost:3000` in your web browser.

---

## 🧪 Running Unit Tests

Execute the automated unit test suites:

```bash
npm test
```

---

## 🎮 Game Controls

- **WASD / Arrow Keys**: Move character
- **Left Mouse Click**: Primary weapon attack / cast ability
- **1, 2, 3 Keys**: Class special abilities (Whirlwind / Frost Nova / Meteor)
- **Spacebar**: Dash / Evade roll
- **I Key**: Toggle Inventory & Equipment
- **K Key**: Toggle Skill & Talent Tree
- **M Key**: Toggle Minimap & Dungeon Radar
- **Escape**: Pause game / settings menu

---

## ⚔️ 3-Level Campaign Progression

1. **Level 1: The Crypt of Shadows**
   - *Target*: Defeat Goblin Raiders and Crypt Skeletons to earn **150 Score**.
   - *Objective*: Master movement, test basic abilities, and locate the descent stairs.

2. **Level 2: The Inferno Caverns**
   - *Target*: Battle Infernal Imps, Skeleton Knights, and Shadow Necromancers to reach **350 Score**.
   - *Mechanic*: Continuous monster wave spawns and +25 bonus elixir pickups.

3. **Level 3: The Abyssal Throne**
   - *Target*: Slay the **👑 Abyssal Demon Overlord (Act Final Boss)**.
   - *Encounter*: Dodge cataclysmic meteor telegraphs, earthquake shockwaves, and gravitational void rifts.

---

## 🔌 Modding & Custom Content API

Omniquest includes a built-in JSON mod loader (`ModdingContentLoader`):

```json
{
  "modId": "community_dragon_blade",
  "name": "Dragon Blade Mod",
  "version": "1.0.0",
  "author": "Player1",
  "description": "Adds a fire-infused greatsword.",
  "items": [
    {
      "id": "item_mod_dragon_sword",
      "name": "Dragon Tooth Greatsword",
      "slot": "TwoHand",
      "rarity": "Legendary",
      "itemLevel": 3,
      "requiredLevel": 2,
      "attackPower": 75,
      "spellPower": 20,
      "armorRating": 10,
      "maxHealthBonus": 60,
      "maxEnergyBonus": 30,
      "critChancePct": 15,
      "critMultiplierBonus": 2.0,
      "movementSpeedBonusPct": 5,
      "lifeStealPct": 6,
      "fireResistancePct": 40,
      "frostResistancePct": -10,
      "shadowResistancePct": 10,
      "holyResistancePct": 0,
      "lightningResistancePct": 0,
      "poisonResistancePct": 0,
      "specialAffixDescription": "Burns targets for 25 fire damage over 4s.",
      "flavorLoreText": "Carved from an ancient red dragon skull.",
      "baseGoldValue": 450,
      "durabilityMax": 150
    }
  ]
}
```

---

## 📄 License

**Proprietary / All Rights Reserved.**
Copyright © 2026 Omniquest Game Development Team.
Distributed under `UNLICENSED` commercial terms. Unauthorized copying, redistribution, or modification is strictly prohibited.
