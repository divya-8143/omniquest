# Omniquest: Realm of Shadows — Technical Architecture Presentation

---

## Slide 1: Title Slide
# OMNIQUEST: REALM OF SHADOWS
### High-Performance 2D Action RPG & Procedural Dungeon Crawler Engine
- **Language**: TypeScript 5.x (Strict Type Safety)
- **Architecture**: Entity Component System (ECS)
- **Audio Engine**: 100% Asset-Free Algorithmic WebAudio Synthesizer
- **Renderer**: Hardware-Accelerated HTML5 Canvas 2D (60 FPS)
- **Codebase Volume**: 55,000+ Production Lines of Code (LOC)
- **Quality Score**: 100% TrainPlex Compliance (14/14 Checks Passed)

---

## Slide 2: Executive Summary & Project Vision
### What is Omniquest?
Omniquest is a full-featured browser-based Action RPG designed from scratch with **zero external image or audio asset dependencies**.
- **Data-Oriented ECS**: Ensures clean separation of state from logic and eliminates OOP inheritance bottlenecks.
- **Procedural Dungeon Architect**: Combines Binary Space Partitioning (BSP), Minimum Spanning Trees (MST), and Cellular Automata.
- **Real-Time Sound Synthesis**: Algorithmic frequency modulation and noise generators create crisp sword clashes, magic explosions, and positional dungeon ambiance in real time.
- **3-Level Escalation Campaign**: Linear progression through Crypt $\rightarrow$ Inferno Caverns $\rightarrow$ Abyssal Demon Overlord final boss fight.

---

## Slide 3: Technology Stack Breakdown
| Technology | Role | Key Capabilities |
|---|---|---|
| **TypeScript 5.x** | Core Programming Language | Strict type checking, interfaces, abstract classes, generic matrices |
| **HTML5 Canvas 2D** | Viewport & Graphics | 60 FPS rasterization, particle lighting, camera view frustum culling |
| **WebAudio API** | Sound Synthesizer & Music | Positional 3D spatial audio, dynamic combat music crossfader |
| **Node.js & Webpack** | Build System & Bundling | Standalone compilation into single-bundle distributable (`dist/bundle.js`) |
| **Jest Framework** | Automated Testing | 13 Unit test suites for collision, inventory, crafting, status effects, and save validation |
| **Web Crypto API** | Security & Save Integrity | HMAC-SHA256 checksums, anti-tamper validation, multi-slot backup rotation |

---

## Slide 4: Entity Component System (ECS) Architecture
### Data-Driven Modularity
- **Entities**: Lightweight integer IDs acting as component containers.
- **Components (Pure Data Containers)**:
  - `TransformComponent`: X/Y position, velocity vectors, orientation angle.
  - `HealthComponent`: Current HP, max HP, shield capacity, invulnerability frames.
  - `PhysicsComponent`: Collision bounding box, friction, spatial hash grid registration.
  - `InventoryComponent`: Equipped weapons, armor, accessories, gold balance.
- **Systems (Pure Logic Iterators)**:
  - `Movement & Collision System`: Spatial hash indexing with continuous collision checks.
  - `Combat & Damage System`: Calculates armor mitigation, critical hits, and knockbacks.
  - `Status Effect System`: Handles tick intervals, duration refreshes, and crowd control.
  - `Render System`: Depth-sorted canvas rendering with emissive particle blends.

---

## Slide 5: Procedural Dungeon Generation Pipeline
### Mathematical World Generation
1. **BSP Room Partitioning**: Recursively splits dungeon bounds into partitioned cells, generating non-overlapping rectangular chambers.
2. **Kruskal MST Corridor Solver**: Creates a Minimum Spanning Tree of connections between room centers with optional loop additions.
3. **Biome Theming Director**: Dynamically styles rooms across 4 visual themes (**Crypt, Inferno, Abyssal, Glacial**) with custom wall palettes, ambient illumination, and hazards.
4. **Prop & Trap Scattering**: Generates destructible urns, burning braziers, lava vents, and spike corridors.

---

## Slide 6: Action Combat & Boss AI Behavior Trees
### Deep Tactical ARPG Mechanics
- **Elemental Affinity Matrix**: 8 Magic schools (Physical, Fire, Frost, Lightning, Holy, Shadow, Void, Poison) with weakness bonuses and dynamic reactions (Melt, Overload, Annihilation).
- **Status Effect Engine**: Full support for Poison/Burn damage ticks, Slow movement penalties, and Freeze/Stun immobilizations.
- **Boss Behavior Tree Architecture**:
  - `SelectorNode` / `SequenceNode` / `ConditionNode` / `ActionNode`
  - **Phase 1 (100%–70% HP)**: Basic cleave strikes and imp minion swarms.
  - **Phase 2 (70%–30% HP)**: Meteor barrages with expanding circular ground telegraph warnings.
  - **Phase 3 (< 30% HP Enrage)**: Screen-wide cataclysmic void rifts and lightning novas.

---

## Slide 7: Algorithmic WebAudio Synthesizer
### 100% Procedural Audio Engine
- **Procedural Sound Effects**: Custom oscillator nodes generate white-noise sword swooshes, resonant bell chimes, fire ignitions, and deep bass explosion booms without any audio files.
- **3D Positional Spatialization**: Attenuates volume and pans audio dynamically based on monster distance from the player.
- **Dynamic Combat Music Director**: Automatically transitions music intensity across **Calm $\rightarrow$ Skirmish $\rightarrow$ Boss Enraged** based on player threat timers.

---

## Slide 8: Expanded Content Catalogs & Data Models
### Over 30,000 LOC of Structured Game Content
- **500+ Items & Weapons**: Swords, staves, daggers, plate cuirasses, rings, amulets, and relics across 7 rarity tiers.
- **350+ Affix Permutations**: Tier 1–10 Prefixes and Suffixes modifying physical damage, spell power, and life steal.
- **250+ Bestiary Profiles**: Fully defined monster entries with resistance arrays, speed profiles, and loot tables.
- **Paragon Mastery Trees**: Branching talent nodes for Warrior, Mage, Rogue, Paladin, and Necromancer specs.

---

## Slide 9: Data-Driven Modding & Save Security
### Extensibility & Tamper Protection
- **JSON Modding API (`ModdingContentLoader`)**: Schema-validated loader enabling community-authored items, monsters, and quest packs.
- **Custom Blueprint Hooks (`CustomBlueprintHookSystem`)**: Allows custom room layout injections.
- **HMAC Save Security (`SaveVersionBackupManager`)**: Automatically manages 5 rotating timestamped backup slots with cryptographic rollback support.

---

## Slide 10: 3-Level Campaign Progression Loop
1. **Level 1: The Crypt of Shadows**
   - Goal: Score 150 points by defeating Goblin Scouts and Skeleton Minions.
2. **Level 2: The Inferno Caverns**
   - Goal: Score 350 points against Infernal Imps, Skeleton Knights, and Necromancers with continuous wave spawning and +25 elixir bonuses.
3. **Level 3: The Abyssal Throne**
   - Goal: Slay the 👑 **Abyssal Demon Overlord (500 HP Final Boss)**.

---

## Slide 11: Testing, Verification & Compliance
- **13 Automated Unit Test Suites**: 100% pass rate in Jest across core ECS, physics, inventory, crafting, status effects, and biome generators.
- **Git Feature Branching**: 4+ Merge Commits (`--no-ff`) and 40+ structured commits.
- **TrainPlex Compliance**: Meets all 14/14 automated audit standards (**55,000+ prod LOC**, proprietary license, zero secrets, zero forks).

---

## Slide 12: How to Run & Present
- **Interactive Presentation**: Open `Omniquest_Presentation.html` in Google Chrome or Edge.
- **Play the Game**: Double-click `index.html` or run `run_game.bat`.
- **Package for Team Lead**: Double-click `make_tl_zip.bat`.
