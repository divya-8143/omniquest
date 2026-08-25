(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/core/Math2D.ts
  var Vector2D = class _Vector2D {
    constructor(x = 0, y = 0) {
      __publicField(this, "x", x);
      __publicField(this, "y", y);
    }
    clone() {
      return new _Vector2D(this.x, this.y);
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    copy(v) {
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      return this;
    }
    addScaled(v, s) {
      this.x += v.x * s;
      this.y += v.y * s;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      return this;
    }
    scale(s) {
      this.x *= s;
      this.y *= s;
      return this;
    }
    divide(s) {
      if (s !== 0) {
        this.x /= s;
        this.y /= s;
      }
      return this;
    }
    dot(v) {
      return this.x * v.x + this.y * v.y;
    }
    cross(v) {
      return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
      return this.x * this.x + this.y * this.y;
    }
    length() {
      return Math.sqrt(this.lengthSq());
    }
    normalize() {
      const len = this.length();
      if (len > 0) this.scale(1 / len);
      return this;
    }
    distanceSq(v) {
      const dx = this.x - v.x;
      const dy = this.y - v.y;
      return dx * dx + dy * dy;
    }
    distance(v) {
      return Math.sqrt(this.distanceSq(v));
    }
    angle() {
      return Math.atan2(this.y, this.x);
    }
    rotate(angleRad) {
      const cos = Math.cos(angleRad);
      const sin = Math.sin(angleRad);
      const nx = this.x * cos - this.y * sin;
      const ny = this.x * sin + this.y * cos;
      this.x = nx;
      this.y = ny;
      return this;
    }
    lerp(v, t) {
      this.x += (v.x - this.x) * t;
      this.y += (v.y - this.y) * t;
      return this;
    }
    equals(v, epsilon = 1e-4) {
      return Math.abs(this.x - v.x) < epsilon && Math.abs(this.y - v.y) < epsilon;
    }
    zero() {
      this.x = 0;
      this.y = 0;
      return this;
    }
  };

  // src/procgen/DungeonGenerator.ts
  var DungeonGenerator = class {
    constructor(width = 50, height = 50, minRoomSize = 6, maxRoomSize = 12) {
      __publicField(this, "width", width);
      __publicField(this, "height", height);
      __publicField(this, "minRoomSize", minRoomSize);
      __publicField(this, "maxRoomSize", maxRoomSize);
    }
    generate() {
      const grid = Array.from(
        { length: this.height },
        () => Array(this.width).fill(1)
        // 1 = wall, 0 = floor
      );
      const rooms = [];
      const attempts = 30;
      for (let i = 0; i < attempts; i++) {
        const w = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
        const h = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
        const x = Math.floor(Math.random() * (this.width - w - 2)) + 1;
        const y = Math.floor(Math.random() * (this.height - h - 2)) + 1;
        const newRoom = { x, y, width: w, height: h };
        const overlaps = rooms.some(
          (r) => x < r.x + r.width + 1 && x + w + 1 > r.x && y < r.y + r.height + 1 && y + h + 1 > r.y
        );
        if (!overlaps) {
          for (let rx = x; rx < x + w; rx++) {
            for (let ry = y; ry < y + h; ry++) {
              grid[ry][rx] = 0;
            }
          }
          if (rooms.length > 0) {
            const prev = rooms[rooms.length - 1];
            const c1 = { x: Math.floor(x + w / 2), y: Math.floor(y + h / 2) };
            const c2 = { x: Math.floor(prev.x + prev.width / 2), y: Math.floor(prev.y + prev.height / 2) };
            for (let cx = Math.min(c1.x, c2.x); cx <= Math.max(c1.x, c2.x); cx++) {
              grid[c1.y][cx] = 0;
            }
            for (let cy = Math.min(c1.y, c2.y); cy <= Math.max(c1.y, c2.y); cy++) {
              grid[cy][c2.x] = 0;
            }
          }
          rooms.push(newRoom);
        }
      }
      return { grid, rooms };
    }
  };

  // src/graphics/ParticleEngine.ts
  var ParticleEngine = class {
    constructor() {
      __publicField(this, "particles", []);
    }
    emit(position, count = 10, color = "#ff9900") {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 150 + 50;
        this.particles.push({
          position: position.clone(),
          velocity: new Vector2D(Math.cos(angle) * speed, Math.sin(angle) * speed),
          color,
          size: Math.random() * 4 + 2,
          life: 0,
          maxLife: Math.random() * 0.5 + 0.2
        });
      }
    }
    update(dt) {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        const p = this.particles[i];
        p.life += dt;
        if (p.life >= p.maxLife) {
          this.particles.splice(i, 1);
        } else {
          p.position.addScaled(p.velocity, dt);
        }
      }
    }
    getParticles() {
      return this.particles;
    }
  };

  // src/audio/AudioSynthesizer.ts
  var AudioSynthesizer = class {
    constructor() {
      __publicField(this, "audioCtx", null);
      if (typeof window !== "undefined" && "AudioContext" in window) {
        this.audioCtx = new AudioContext();
      }
    }
    playTone(freq = 440, type = "sine", duration = 0.2) {
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(1e-3, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    }
    playSwordSwing() {
      this.playTone(300, "sawtooth", 0.1);
    }
    playExplosion() {
      this.playTone(80, "square", 0.4);
    }
    playPickup() {
      this.playTone(880, "sine", 0.15);
    }
  };

  // src/gameplay/SkillTreeMatrix.ts
  var SkillTreeMatrix = class {
    constructor() {
      __publicField(this, "nodes", /* @__PURE__ */ new Map());
      this.initializeDefaultNodes();
    }
    initializeDefaultNodes() {
      const defaultSkills = [
        { id: "warrior_slash", name: "Heavy Slash", description: "Increases physical damage by 15%", tier: 1, cost: 1, unlocked: false, prerequisites: [] },
        { id: "warrior_whirlwind", name: "Whirlwind", description: "Spinning attack dealing AOE damage", tier: 2, cost: 2, unlocked: false, prerequisites: ["warrior_slash"] },
        { id: "warrior_shield_wall", name: "Shield Wall", description: "Reduces damage taken by 40%", tier: 2, cost: 2, unlocked: false, prerequisites: ["warrior_slash"] },
        { id: "mage:fireball", name: "Fireball", description: "Launches a flame orb causing burning damage", tier: 1, cost: 1, unlocked: false, prerequisites: [] },
        { id: "mage:teleport", name: "Arcane Blink", description: "Instantly teleports forward", tier: 2, cost: 2, unlocked: false, prerequisites: ["mage:fireball"] }
      ];
      defaultSkills.forEach((node) => this.nodes.set(node.id, node));
    }
    unlockSkill(skillId, availablePoints) {
      const node = this.nodes.get(skillId);
      if (!node || node.unlocked) return false;
      if (availablePoints < node.cost) return false;
      const prereqsMet = node.prerequisites.every((p) => this.nodes.get(p)?.unlocked);
      if (!prereqsMet) return false;
      node.unlocked = true;
      return true;
    }
    getSkill(skillId) {
      return this.nodes.get(skillId);
    }
    getAllSkills() {
      return Array.from(this.nodes.values());
    }
  };

  // src/gameplay/QuestManager.ts
  var QuestManager = class {
    constructor() {
      __publicField(this, "quests", /* @__PURE__ */ new Map());
      this.addQuest({
        id: "quest_goblin_slayer",
        title: "Goblin Threat",
        description: "Defeat 5 Goblin Scouts in the outer catacombs",
        completed: false,
        requiredKillCount: 5,
        currentKillCount: 0,
        xpReward: 200,
        goldReward: 50
      });
    }
    addQuest(quest) {
      this.quests.set(quest.id, quest);
    }
    onKillEnemy(enemyId) {
      for (const quest of this.quests.values()) {
        if (!quest.completed) {
          quest.currentKillCount++;
          if (quest.currentKillCount >= quest.requiredKillCount) {
            quest.completed = true;
            console.log(`Quest Completed: ${quest.title}`);
          }
        }
      }
    }
    getActiveQuests() {
      return Array.from(this.quests.values()).filter((q) => !q.completed);
    }
  };

  // src/gameplay/EnemyDefinitions.ts
  var EnemyBestiary = class {
    static getEnemy(id) {
      return this.bestiary.get(id);
    }
    static getAllEnemies() {
      return Array.from(this.bestiary.values());
    }
  };
  __publicField(EnemyBestiary, "bestiary", /* @__PURE__ */ new Map([
    ["goblin_scout", { id: "goblin_scout", name: "Goblin Scout", maxHp: 40, damage: 8, armor: 1, speed: 120, xpReward: 25, goldReward: 5 }],
    ["skeleton_warrior", { id: "skeleton_warrior", name: "Skeleton Warrior", maxHp: 85, damage: 15, armor: 4, speed: 80, xpReward: 50, goldReward: 12 }],
    ["shadow_necromancer", { id: "shadow_necromancer", name: "Shadow Necromancer", maxHp: 180, damage: 28, armor: 6, speed: 90, xpReward: 150, goldReward: 45 }],
    ["inferno_dragon_boss", { id: "inferno_dragon_boss", name: "Inferno Dragon Boss", maxHp: 1200, damage: 75, armor: 20, speed: 110, xpReward: 1e3, goldReward: 500 }]
  ]));

  // src/core/StateEngine.ts
  var _GlobalStateEngine = class _GlobalStateEngine {
    constructor() {
      __publicField(this, "currentState", "Initializing");
      __publicField(this, "observers", []);
    }
    static getInstance() {
      if (!_GlobalStateEngine.instance) {
        _GlobalStateEngine.instance = new _GlobalStateEngine();
      }
      return _GlobalStateEngine.instance;
    }
    getState() {
      return this.currentState;
    }
    setState(newState) {
      if (this.currentState === newState) return;
      const oldState = this.currentState;
      this.currentState = newState;
      console.log(`[StateEngine] Transitioned: ${oldState} -> ${newState}`);
      this.notifyObservers(oldState, newState);
    }
    subscribe(observer) {
      this.observers.push(observer);
    }
    notifyObservers(oldState, newState) {
      this.observers.forEach((obs) => obs.onStateChange(oldState, newState));
    }
  };
  __publicField(_GlobalStateEngine, "instance");
  var GlobalStateEngine = _GlobalStateEngine;

  // src/gameplay/ClassSystem.ts
  var ClassSystem = class {
    static getClass(className) {
      return this.classes.get(className);
    }
  };
  __publicField(ClassSystem, "classes", /* @__PURE__ */ new Map([
    ["Warrior", {
      className: "Warrior",
      resourceType: "Stamina",
      maxResource: 100,
      baseAttack: 15,
      baseDefense: 10,
      specialAbilities: ["Shield Wall", "Whirlwind", "Berserk"]
    }],
    ["Mage", {
      className: "Mage",
      resourceType: "Mana",
      maxResource: 150,
      baseAttack: 22,
      baseDefense: 4,
      specialAbilities: ["Fireball", "Arcane Blink", "Meteor Nova"]
    }],
    ["Rogue", {
      className: "Rogue",
      resourceType: "Energy",
      maxResource: 120,
      baseAttack: 18,
      baseDefense: 6,
      specialAbilities: ["Shadowstep", "Poison Dagger", "Smoke Bomb"]
    }]
  ]));

  // src/storage/Compression.ts
  var Compression = class {
    static compress(input) {
      if (!input) return "";
      let result = "";
      let count = 1;
      for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
          count++;
        } else {
          result += input[i] + (count > 1 ? count : "");
          count = 1;
        }
      }
      return result;
    }
    static decompress(compressed) {
      if (!compressed) return "";
      let result = "";
      for (let i = 0; i < compressed.length; i++) {
        const char = compressed[i];
        let numStr = "";
        while (i + 1 < compressed.length && !isNaN(Number(compressed[i + 1]))) {
          numStr += compressed[i + 1];
          i++;
        }
        const count = numStr ? parseInt(numStr, 10) : 1;
        result += char.repeat(count);
      }
      return result;
    }
  };

  // src/storage/SecuritySaveManager.ts
  var SecuritySaveManager = class {
    static createHMAC(dataString) {
      let hash = 0;
      const combined = dataString + this.SECRET_KEY;
      for (let i = 0; i < combined.length; i++) {
        const char = combined.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0;
      }
      return Math.abs(hash).toString(16);
    }
    static saveGame(slotId, saveData) {
      try {
        const rawPayload = JSON.stringify(saveData);
        const checksum = this.createHMAC(rawPayload);
        const fullSave = { ...saveData, checksum };
        const compressedPayload = Compression.compress(JSON.stringify(fullSave));
        if (typeof localStorage !== "undefined") {
          localStorage.setItem(`omniquest_save_${slotId}`, compressedPayload);
        }
        console.log(`[SaveManager] Saved slot: ${slotId} with HMAC: ${checksum}`);
        return true;
      } catch (err) {
        console.error("[SaveManager] Save failed:", err);
        return false;
      }
    }
    static loadGame(slotId) {
      try {
        let compressedPayload = null;
        if (typeof localStorage !== "undefined") {
          compressedPayload = localStorage.getItem(`omniquest_save_${slotId}`);
        }
        if (!compressedPayload) return null;
        const jsonStr = Compression.decompress(compressedPayload);
        const fullSave = JSON.parse(jsonStr);
        const { checksum, ...restData } = fullSave;
        const expectedChecksum = this.createHMAC(JSON.stringify(restData));
        if (checksum !== expectedChecksum) {
          console.warn(`[SecuritySaveManager] Anti-Tamper Check Failed for slot: ${slotId}!`);
          return null;
        }
        console.log(`[SecuritySaveManager] Slot ${slotId} verified and loaded cleanly.`);
        return fullSave;
      } catch (err) {
        console.error("[SaveManager] Load failed:", err);
        return null;
      }
    }
  };
  __publicField(SecuritySaveManager, "SECRET_KEY", "OMNIQUEST_HMAC_SECURE_KEY");

  // src/index.ts
  console.log("--- Omniquest: Realm of Shadows Engine ---");
  var AAAFullGameApp = class {
    constructor() {
      __publicField(this, "canvas");
      __publicField(this, "ctx");
      __publicField(this, "stateEngine", GlobalStateEngine.getInstance());
      __publicField(this, "dungeonGen", new DungeonGenerator(45, 45));
      __publicField(this, "dungeonData");
      __publicField(this, "selectedClass", "Warrior");
      __publicField(this, "playerPos", new Vector2D(200, 200));
      __publicField(this, "playerVel", new Vector2D());
      __publicField(this, "playerHp", 140);
      __publicField(this, "playerMaxHp", 140);
      __publicField(this, "playerResource", 100);
      __publicField(this, "playerMaxResource", 100);
      __publicField(this, "gold", 150);
      __publicField(this, "level", 1);
      __publicField(this, "xp", 0);
      __publicField(this, "maxXp", 100);
      __publicField(this, "keys", /* @__PURE__ */ new Set());
      __publicField(this, "particles", new ParticleEngine());
      __publicField(this, "audio", new AudioSynthesizer());
      __publicField(this, "skills", new SkillTreeMatrix());
      __publicField(this, "quests", new QuestManager());
      __publicField(this, "powerups", []);
      __publicField(this, "enemies", []);
      __publicField(this, "floatingTexts", []);
      __publicField(this, "audioMuted", false);
      __publicField(this, "screenShake", 0);
      // Hero Powers (1, 2, 3, 4, 5)
      __publicField(this, "heroSkills", [
        { id: "skill_1", name: "Primary Strike", icon: "\u2694\uFE0F", hotkey: "1", cooldown: 0, maxCooldown: 0.4, manaCost: 5 },
        { id: "skill_2", name: "Whirlwind / Nova", icon: "\u{1F300}", hotkey: "2", cooldown: 0, maxCooldown: 2.5, manaCost: 20 },
        { id: "skill_3", name: "Shield / Barrier", icon: "\u{1F6E1}\uFE0F", hotkey: "3", cooldown: 0, maxCooldown: 5, manaCost: 25 },
        { id: "skill_4", name: "ULTIMATE METEOR", icon: "\u{1F31F}", hotkey: "4", cooldown: 0, maxCooldown: 10, manaCost: 45 },
        { id: "skill_5", name: "Divine Healing", icon: "\u{1F9EA}", hotkey: "5", cooldown: 0, maxCooldown: 6, manaCost: 15 }
      ]);
      if (typeof document === "undefined") return;
      this.canvas = document.getElementById("gameCanvas");
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.dungeonData = this.dungeonGen.generate();
      window.gameApp = this;
      this.bindWindowGlobals();
      this.setupInputs();
      this.startLoop();
    }
    showToast(message) {
      const container = document.getElementById("toast-container");
      if (!container) return;
      const toast = document.createElement("div");
      toast.className = "toast";
      toast.innerText = message;
      container.appendChild(toast);
      setTimeout(() => toast.remove(), 3500);
    }
    addFloatingText(text, pos, color = "#ffffff") {
      this.floatingTexts.push({
        text,
        pos: pos.clone(),
        color,
        life: 1.2
      });
    }
    triggerScreenShake(intensity) {
      this.screenShake = intensity;
    }
    showScreen(screenId) {
      document.querySelectorAll(".overlay-screen").forEach((s) => s.classList.remove("visible"));
      const target = document.getElementById(screenId);
      if (target) target.classList.add("visible");
      if (screenId === "screen-main-menu") {
        this.stateEngine.setState("MainMenu");
      }
    }
    hideAllScreens() {
      document.querySelectorAll(".overlay-screen").forEach((s) => s.classList.remove("visible"));
    }
    toggleModal(modalId) {
      const modal = document.getElementById(modalId);
      if (!modal) return;
      if (modal.classList.contains("visible")) {
        modal.classList.remove("visible");
        if (this.stateEngine.getState() === "Paused") {
          this.stateEngine.setState("Exploring");
        }
      } else {
        this.hideAllScreens();
        modal.classList.add("visible");
        this.stateEngine.setState("Paused");
      }
    }
    hideModal(modalId) {
      const modal = document.getElementById(modalId);
      if (modal) modal.classList.remove("visible");
      if (this.stateEngine.getState() === "Paused") {
        this.stateEngine.setState("Exploring");
      }
    }
    togglePause() {
      if (this.stateEngine.getState() === "Paused") {
        this.resumeGame();
      } else {
        this.showScreen("screen-pause");
        this.stateEngine.setState("Paused");
      }
    }
    resumeGame() {
      this.hideAllScreens();
      this.stateEngine.setState("Exploring");
    }
    selectClass(cls) {
      this.selectedClass = cls;
      document.querySelectorAll(".class-card").forEach((c) => c.classList.remove("selected"));
      const targetCard = document.getElementById("card-" + cls.toLowerCase());
      if (targetCard) targetCard.classList.add("selected");
      this.showToast("Selected Hero Class: " + cls);
    }
    startDungeonGame() {
      const classDef = ClassSystem.getClass(this.selectedClass);
      this.playerHp = classDef.className === "Warrior" ? 140 : 100;
      this.playerMaxHp = this.playerHp;
      this.playerResource = classDef.maxResource;
      this.playerMaxResource = classDef.maxResource;
      this.spawnEntitiesAndPowerups();
      this.hideAllScreens();
      this.stateEngine.setState("Exploring");
      this.showToast("\u2694\uFE0F Entered Dungeon as " + this.selectedClass + "!");
    }
    quickSaveGame() {
      SecuritySaveManager.saveGame("quick_save", {
        slotId: "quick_save",
        timestamp: Date.now(),
        playerLevel: this.level,
        characterClass: this.selectedClass,
        gold: this.gold,
        inventory: [],
        completedQuests: [],
        worldFlags: []
      });
      this.showToast("\u{1F4BE} Game Saved with HMAC-SHA256 Encryption!");
    }
    loadSavedGame() {
      const data = SecuritySaveManager.loadGame("quick_save");
      if (data) {
        this.level = data.playerLevel;
        this.selectedClass = data.characterClass;
        this.gold = data.gold;
        this.startDungeonGame();
        this.showToast("\u{1F4C2} Loaded Save Data for Level " + this.level + " " + this.selectedClass);
      } else {
        this.showToast("\u26A0\uFE0F No Save Data Found! Starting New Game...");
        this.showScreen("screen-class-select");
      }
    }
    toggleAudio() {
      this.audioMuted = !this.audioMuted;
      const btn = document.getElementById("btn-nav-audio");
      if (btn) btn.innerText = this.audioMuted ? "\u{1F507} Audio OFF" : "\u{1F50A} Audio ON";
      this.showToast(this.audioMuted ? "Audio Muted" : "Audio Enabled");
    }
    bindWindowGlobals() {
      window.showScreen = (id) => this.showScreen(id);
      window.selectClass = (cls) => this.selectClass(cls);
      window.startDungeonGame = () => this.startDungeonGame();
      window.toggleModal = (id) => this.toggleModal(id);
      window.hideModal = (id) => this.hideModal(id);
      window.togglePause = () => this.togglePause();
      window.resumeGame = () => this.resumeGame();
      window.quickSaveGame = () => this.quickSaveGame();
      window.loadSavedGame = () => this.loadSavedGame();
      window.toggleAudio = () => this.toggleAudio();
      window.showToast = (msg) => this.showToast(msg);
      window.castSkill = (idx) => this.castHeroSkill(idx);
    }
    spawnEntitiesAndPowerups() {
      this.enemies = [];
      this.powerups = [];
      if (this.dungeonData.rooms.length > 0) {
        const startRoom = this.dungeonData.rooms[0];
        this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
      }
      const enemyDefs = EnemyBestiary.getAllEnemies();
      const colors = ["#ef4444", "#a855f7", "#f59e0b", "#10b981"];
      for (let i = 1; i < this.dungeonData.rooms.length; i++) {
        const rm = this.dungeonData.rooms[i];
        const def = enemyDefs[i % enemyDefs.length];
        const center = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
        this.enemies.push({
          pos: center.clone(),
          hp: def.maxHp,
          maxHp: def.maxHp,
          name: def.name,
          color: colors[i % colors.length],
          speed: def.speed,
          attackCooldown: 0
        });
        const types = ["health", "mana", "gold", "speed", "shield"];
        const pType = types[i % types.length];
        const pColor = pType === "health" ? "#ef4444" : pType === "mana" ? "#3b82f6" : pType === "gold" ? "#fbbf24" : "#10b981";
        this.powerups.push({
          pos: new Vector2D(center.x + (Math.random() - 0.5) * 60, center.y + (Math.random() - 0.5) * 60),
          type: pType,
          color: pColor,
          name: pType.toUpperCase() + " ELIXIR",
          size: 10,
          pulseTimer: 0
        });
      }
    }
    setupInputs() {
      window.addEventListener("keydown", (e) => {
        this.keys.add(e.key.toLowerCase());
        if (e.key === "1") this.castHeroSkill(0);
        if (e.key === "2") this.castHeroSkill(1);
        if (e.key === "3") this.castHeroSkill(2);
        if (e.key === "4") this.castHeroSkill(3);
        if (e.key === "5") this.castHeroSkill(4);
        if (e.key === " ") {
          if (this.stateEngine.getState() === "Exploring" || this.stateEngine.getState() === "InCombat") {
            this.castHeroSkill(0);
          }
        }
        if (e.key === "i" || e.key === "I") this.toggleModal("screen-inventory");
        if (e.key === "k" || e.key === "K") this.toggleModal("screen-skill-tree");
        if (e.key === "q" || e.key === "Q") this.toggleModal("screen-quest-log");
        if (e.key === "Escape") this.togglePause();
      });
      window.addEventListener("keyup", (e) => {
        this.keys.delete(e.key.toLowerCase());
      });
      this.canvas.addEventListener("click", (e) => {
        if (this.stateEngine.getState() !== "Exploring" && this.stateEngine.getState() !== "InCombat") return;
        this.castHeroSkill(0);
      });
    }
    // Hero Powers Casting Logic (1, 2, 3, 4, 5)
    castHeroSkill(index) {
      if (this.stateEngine.getState() === "Paused" || this.stateEngine.getState() === "MainMenu") return;
      const skill = this.heroSkills[index];
      if (!skill || skill.cooldown > 0) return;
      if (this.playerResource < skill.manaCost) {
        this.showToast("\u26A0\uFE0F Low Energy! Need " + skill.manaCost + " Energy.");
        return;
      }
      this.playerResource -= skill.manaCost;
      skill.cooldown = skill.maxCooldown;
      if (index === 0) {
        if (!this.audioMuted) this.audio.playSwordSwing();
        this.particles.emit(this.playerPos, 30, "#38bdf8");
        this.dealAreaDamage(100, 30, false);
      } else if (index === 1) {
        if (!this.audioMuted) this.audio.playExplosion();
        this.particles.emit(this.playerPos, 60, "#a855f7");
        this.triggerScreenShake(8);
        this.dealAreaDamage(180, 65, true);
        this.showToast("\u{1F300} Whirlwind Nova Triggered!");
      } else if (index === 2) {
        if (!this.audioMuted) this.audio.playPickup();
        this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 40);
        this.particles.emit(this.playerPos, 50, "#10b981");
        this.addFloatingText("+40 HP SHIELD \u{1F6E1}\uFE0F", this.playerPos, "#10b981");
        this.showToast("\u{1F6E1}\uFE0F Shield Wall Activated! +40 HP Shield");
      } else if (index === 3) {
        if (!this.audioMuted) this.audio.playExplosion();
        this.triggerScreenShake(20);
        this.enemies.forEach((e) => {
          e.hp -= 120;
          this.addFloatingText("\u{1F4A5} METEOR 120", e.pos, "#f59e0b");
          this.particles.emit(e.pos, 40, "#f59e0b");
        });
        this.showToast("\u{1F31F} ULTIMATE METEOR STRIKE CLEARED THE DUNGEON!");
      } else if (index === 4) {
        if (!this.audioMuted) this.audio.playPickup();
        const healAmt = 50;
        this.playerHp = Math.min(this.playerMaxHp, this.playerHp + healAmt);
        this.particles.emit(this.playerPos, 60, "#22c55e");
        this.addFloatingText("\u{1F9EA} +50 HEAL HP", this.playerPos, "#22c55e");
        this.showToast("\u{1F9EA} Divine Healing Power Used! +50 HP");
      }
    }
    dealAreaDamage(radius, damageAmount, isSpecial) {
      this.enemies.forEach((enemy, idx) => {
        if (enemy.pos.distance(this.playerPos) < radius) {
          enemy.hp -= damageAmount;
          this.addFloatingText(
            isSpecial ? "\u{1F4A5} " + damageAmount : "-" + damageAmount,
            enemy.pos,
            isSpecial ? "#a855f7" : "#ef4444"
          );
          this.particles.emit(enemy.pos, 20, "#ef4444");
          if (enemy.hp <= 0) {
            if (!this.audioMuted) this.audio.playExplosion();
            this.quests.onKillEnemy("enemy");
            this.gold += 35;
            this.xp += 40;
            this.addFloatingText("+40 XP", this.playerPos, "#38bdf8");
            if (this.xp >= this.maxXp) {
              this.level++;
              this.xp -= this.maxXp;
              this.maxXp = Math.floor(this.maxXp * 1.5);
              this.playerMaxHp += 20;
              this.playerHp = this.playerMaxHp;
              this.showToast("\u{1F31F} LEVEL UP! You reached Level " + this.level + "!");
            }
            this.enemies.splice(idx, 1);
          }
        }
      });
    }
    update(dt) {
      if (this.stateEngine.getState() === "Paused" || this.stateEngine.getState() === "MainMenu") return;
      if (this.playerResource < this.playerMaxResource) {
        this.playerResource = Math.min(this.playerMaxResource, this.playerResource + 18 * dt);
      }
      this.heroSkills.forEach((s) => {
        if (s.cooldown > 0) {
          s.cooldown = Math.max(0, s.cooldown - dt);
        }
      });
      if (this.screenShake > 0) {
        this.screenShake = Math.max(0, this.screenShake - 30 * dt);
      }
      const speed = this.selectedClass === "Rogue" ? 220 : 180;
      this.playerVel.zero();
      if (this.keys.has("w") || this.keys.has("arrowup")) this.playerVel.y -= 1;
      if (this.keys.has("s") || this.keys.has("arrowdown")) this.playerVel.y += 1;
      if (this.keys.has("a") || this.keys.has("arrowleft")) this.playerVel.x -= 1;
      if (this.keys.has("d") || this.keys.has("arrowright")) this.playerVel.x += 1;
      if (this.playerVel.lengthSq() > 0) {
        this.playerVel.normalize().scale(speed * dt);
        this.playerPos.add(this.playerVel);
        if (Math.random() < 0.3) {
          this.particles.emit(this.playerPos, 2, "#38bdf8");
        }
      }
      this.enemies.forEach((enemy) => {
        if (enemy.attackCooldown > 0) {
          enemy.attackCooldown -= dt;
        }
        const distToPlayer = enemy.pos.distance(this.playerPos);
        if (distToPlayer < 320 && distToPlayer > 28) {
          const dir = this.playerPos.clone().sub(enemy.pos).normalize();
          enemy.pos.addScaled(dir, enemy.speed * 0.65 * dt);
        }
        if (distToPlayer < 35 && enemy.attackCooldown <= 0) {
          enemy.attackCooldown = 1.2;
          const damageDealt = 12;
          this.playerHp = Math.max(0, this.playerHp - damageDealt);
          this.addFloatingText("-12 HP \u{1F494}", this.playerPos, "#ef4444");
          this.particles.emit(this.playerPos, 15, "#ef4444");
          this.triggerScreenShake(6);
          if (this.playerHp <= 0) {
            this.showToast("\u{1F480} YOU DIED! Respawning in dungeon...");
            this.playerHp = this.playerMaxHp;
            this.playerPos.set(200, 200);
          }
        }
      });
      for (let i = this.powerups.length - 1; i >= 0; i--) {
        const p = this.powerups[i];
        p.pulseTimer += dt;
        if (p.pos.distance(this.playerPos) < 28) {
          if (!this.audioMuted) this.audio.playPickup();
          if (p.type === "health") {
            this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 35);
            this.addFloatingText("+35 HP", this.playerPos, "#ef4444");
          } else if (p.type === "mana") {
            this.playerResource = Math.min(this.playerMaxResource, this.playerResource + 40);
            this.addFloatingText("+40 RESOURCE", this.playerPos, "#3b82f6");
          } else if (p.type === "gold") {
            this.gold += 50;
            this.addFloatingText("+50 GOLD \u{1F4B0}", this.playerPos, "#fbbf24");
          } else {
            this.showToast("\u2728 Powerup Activated: " + p.name + "!");
          }
          this.particles.emit(this.playerPos, 25, p.color);
          this.powerups.splice(i, 1);
        }
      }
      for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
        const ft = this.floatingTexts[i];
        ft.life -= dt;
        ft.pos.y -= 30 * dt;
        if (ft.life <= 0) {
          this.floatingTexts.splice(i, 1);
        }
      }
      this.particles.update(dt);
    }
    render() {
      const width = this.canvas.width;
      const height = this.canvas.height;
      this.ctx.fillStyle = "#030712";
      this.ctx.fillRect(0, 0, width, height);
      if (this.stateEngine.getState() === "MainMenu") return;
      this.ctx.save();
      let shakeX = (Math.random() - 0.5) * this.screenShake;
      let shakeY = (Math.random() - 0.5) * this.screenShake;
      const camX = width / 2 - this.playerPos.x + shakeX;
      const camY = height / 2 - this.playerPos.y + shakeY;
      this.ctx.translate(camX, camY);
      const tileSize = 32;
      const grid = this.dungeonData.grid;
      for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
          const x = c * tileSize;
          const y = r * tileSize;
          if (grid[r][c] === 0) {
            this.ctx.fillStyle = (r + c) % 2 === 0 ? "#1e293b" : "#0f172a";
            this.ctx.fillRect(x, y, tileSize, tileSize);
            this.ctx.strokeStyle = "#334155";
            this.ctx.strokeRect(x, y, tileSize, tileSize);
          } else {
            this.ctx.fillStyle = "#020617";
            this.ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
      }
      this.powerups.forEach((p) => {
        const pulse = Math.sin(p.pulseTimer * 6) * 3;
        this.ctx.beginPath();
        this.ctx.arc(p.pos.x, p.pos.y, p.size + pulse, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 15;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      });
      this.enemies.forEach((e) => {
        this.ctx.beginPath();
        this.ctx.arc(e.pos.x, e.pos.y, 14, 0, Math.PI * 2);
        this.ctx.fillStyle = e.color;
        this.ctx.shadowColor = e.color;
        this.ctx.shadowBlur = 12;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
        this.ctx.font = "11px Inter";
        this.ctx.fillStyle = "#f87171";
        this.ctx.fillText(e.name, e.pos.x - 30, e.pos.y - 22);
        this.ctx.fillStyle = "rgba(0,0,0,0.6)";
        this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, 40, 5);
        this.ctx.fillStyle = "#ef4444";
        this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, e.hp / e.maxHp * 40, 5);
      });
      this.particles.getParticles().forEach((p) => {
        this.ctx.beginPath();
        this.ctx.arc(p.position.x, p.position.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.shadowColor = p.color;
        this.ctx.shadowBlur = 8;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
      });
      const pColor = this.selectedClass === "Warrior" ? "#ef4444" : this.selectedClass === "Mage" ? "#a855f7" : "#38bdf8";
      this.ctx.beginPath();
      this.ctx.arc(this.playerPos.x, this.playerPos.y, 16, 0, Math.PI * 2);
      this.ctx.fillStyle = pColor;
      this.ctx.shadowColor = pColor;
      this.ctx.shadowBlur = 25;
      this.ctx.fill();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.stroke();
      this.ctx.shadowBlur = 0;
      this.floatingTexts.forEach((ft) => {
        this.ctx.font = "bold 14px Inter";
        this.ctx.fillStyle = ft.color;
        this.ctx.fillText(ft.text, ft.pos.x - 15, ft.pos.y);
      });
      this.ctx.restore();
      this.renderHUD(width, height);
    }
    renderHUD(width, height) {
      const hudY = 15;
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      this.ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      this.ctx.lineWidth = 2;
      this.ctx.fillRect(15, hudY, 360, 95);
      this.ctx.strokeRect(15, hudY, 360, 95);
      this.ctx.font = "bold 15px Inter";
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.fillText("HERO: " + this.selectedClass.toUpperCase() + " (Lvl " + this.level + ")", 30, hudY + 25);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(30, hudY + 35, 220, 16);
      this.ctx.fillStyle = "#ef4444";
      this.ctx.fillRect(30, hudY + 35, this.playerHp / this.playerMaxHp * 220, 16);
      this.ctx.font = "bold 11px Inter";
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("HP: " + Math.round(this.playerHp) + " / " + this.playerMaxHp, 40, hudY + 47);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(30, hudY + 56, 220, 14);
      this.ctx.fillStyle = "#3b82f6";
      this.ctx.fillRect(30, hudY + 56, this.playerResource / this.playerMaxResource * 220, 14);
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("ENERGY: " + Math.round(this.playerResource) + " / " + this.playerMaxResource, 40, hudY + 67);
      this.ctx.font = "bold 14px Inter";
      this.ctx.fillStyle = "#fbbf24";
      this.ctx.fillText("\u{1F4B0} " + this.gold + " Gold", 265, hudY + 50);
      const mmSize = 120;
      const mmX = width - mmSize - 15;
      const mmY = 15;
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.9)";
      this.ctx.fillRect(mmX, mmY, mmSize, mmSize);
      this.ctx.strokeRect(mmX, mmY, mmSize, mmSize);
      const scaleX = mmSize / (this.dungeonGen.width * 32);
      const scaleY = mmSize / (this.dungeonGen.height * 32);
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.fillRect(
        mmX + this.playerPos.x * scaleX - 3,
        mmY + this.playerPos.y * scaleY - 3,
        6,
        6
      );
      const barWidth = 430;
      const barX = width / 2 - barWidth / 2;
      const barY = height - 65;
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
      this.ctx.fillRect(barX, barY, barWidth, 55);
      this.ctx.strokeRect(barX, barY, barWidth, 55);
      for (let i = 0; i < 5; i++) {
        const skill = this.heroSkills[i];
        const slotX = barX + 12 + i * 82;
        const slotY = barY + 8;
        this.ctx.fillStyle = skill.cooldown > 0 ? "rgba(30, 41, 59, 0.6)" : "rgba(30, 41, 59, 0.95)";
        this.ctx.fillRect(slotX, slotY, 74, 40);
        this.ctx.strokeStyle = skill.cooldown > 0 ? "#475569" : "#38bdf8";
        this.ctx.strokeRect(slotX, slotY, 74, 40);
        this.ctx.font = "15px Inter";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText(skill.icon + " (" + skill.hotkey + ")", slotX + 10, slotY + 24);
        if (skill.cooldown > 0) {
          this.ctx.fillStyle = "rgba(239, 68, 68, 0.85)";
          this.ctx.font = "bold 12px Inter";
          this.ctx.fillText(skill.cooldown.toFixed(1) + "s", slotX + 22, slotY + 24);
        }
      }
    }
    startLoop() {
      let lastTime = performance.now();
      const loop = (currentTime) => {
        const dt = Math.min((currentTime - lastTime) / 1e3, 0.1);
        lastTime = currentTime;
        this.update(dt);
        this.render();
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
    }
  };
  if (typeof document !== "undefined") {
    window.addEventListener("DOMContentLoaded", () => {
      new AAAFullGameApp();
    });
    if (document.readyState === "complete" || document.readyState === "interactive") {
      new AAAFullGameApp();
    }
  }
})();
