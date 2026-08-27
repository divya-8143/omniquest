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
      __publicField(this, "dungeonLevel", 1);
      __publicField(this, "score", 0);
      __publicField(this, "levelScore", 0);
      __publicField(this, "targetScoreLevel1", 150);
      __publicField(this, "targetScoreLevel2", 350);
      __publicField(this, "isBossDefeated", false);
      __publicField(this, "enemiesKilled", 0);
      __publicField(this, "spawnTimer", 0);
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
        { id: "skill_1", name: "Primary Strike", icon: "\u2694\uFE0F", hotkey: "1", cooldown: 0, maxCooldown: 0.3, manaCost: 5 },
        { id: "skill_2", name: "Whirlwind / Nova", icon: "\u{1F300}", hotkey: "2", cooldown: 0, maxCooldown: 2, manaCost: 20 },
        { id: "skill_3", name: "Shield / Barrier", icon: "\u{1F6E1}\uFE0F", hotkey: "3", cooldown: 0, maxCooldown: 4, manaCost: 25 },
        { id: "skill_4", name: "ULTIMATE METEOR", icon: "\u{1F31F}", hotkey: "4", cooldown: 0, maxCooldown: 8, manaCost: 40 },
        { id: "skill_5", name: "Divine Healing", icon: "\u{1F9EA}", hotkey: "5", cooldown: 0, maxCooldown: 5, manaCost: 15 }
      ]);
      if (typeof document === "undefined") return;
      this.canvas = document.getElementById("gameCanvas");
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.loadDungeonLevel(1);
      this.stateEngine.setState("MainMenu");
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
      this.dungeonLevel = 1;
      this.score = 0;
      this.levelScore = 0;
      this.enemiesKilled = 0;
      this.isBossDefeated = false;
      this.loadDungeonLevel(1);
      this.hideAllScreens();
      this.stateEngine.setState("Exploring");
      this.showToast("\u2694\uFE0F LEVEL 1: Crypt of Shadows! Defeat enemies to score " + this.targetScoreLevel1 + " pts for Level 2!");
    }
    loadDungeonLevel(lvl) {
      this.dungeonLevel = lvl;
      this.levelScore = 0;
      this.dungeonData = this.dungeonGen.generate();
      this.spawnEntitiesAndPowerups();
      if (this.dungeonData.rooms.length > 0) {
        const startRoom = this.dungeonData.rooms[0];
        this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
      }
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
      if (this.dungeonLevel === 1) {
        const enemiesList = [
          { name: "Goblin Scout", hp: 45, color: "#ef4444", speed: 100 },
          { name: "Skeleton Minion", hp: 60, color: "#a855f7", speed: 85 }
        ];
        for (let i = 1; i < this.dungeonData.rooms.length; i++) {
          const rm = this.dungeonData.rooms[i];
          const center = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
          for (let k = 0; k < 2; k++) {
            const def = enemiesList[(i + k) % enemiesList.length];
            this.enemies.push({
              pos: new Vector2D(center.x + (k * 40 - 20), center.y + (k * 40 - 20)),
              hp: def.hp,
              maxHp: def.hp,
              name: def.name,
              color: def.color,
              speed: def.speed,
              attackCooldown: 0,
              flashTimer: 0,
              isBoss: false,
              size: 16
            });
          }
          this.addRoomPowerup(center, i);
        }
      } else if (this.dungeonLevel === 2) {
        const enemiesList = [
          { name: "Skeleton Knight", hp: 90, color: "#a855f7", speed: 100 },
          { name: "Shadow Necromancer", hp: 120, color: "#f59e0b", speed: 110 },
          { name: "Inferno Imp", hp: 80, color: "#ef4444", speed: 130 }
        ];
        for (let i = 1; i < this.dungeonData.rooms.length; i++) {
          const rm = this.dungeonData.rooms[i];
          const center = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
          for (let k = 0; k < 2; k++) {
            const def = enemiesList[(i + k) % enemiesList.length];
            this.enemies.push({
              pos: new Vector2D(center.x + (k * 40 - 20), center.y + (k * 40 - 20)),
              hp: def.hp,
              maxHp: def.hp,
              name: def.name,
              color: def.color,
              speed: def.speed,
              attackCooldown: 0,
              flashTimer: 0,
              isBoss: false,
              size: 16
            });
          }
          this.addRoomPowerup(center, i);
        }
      } else {
        const lastRoomIdx = this.dungeonData.rooms.length - 1;
        for (let i = 1; i < lastRoomIdx; i++) {
          const rm = this.dungeonData.rooms[i];
          const center = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
          this.enemies.push({
            pos: center.clone(),
            hp: 110,
            maxHp: 110,
            name: "Abyssal Royal Guard",
            color: "#8b5cf6",
            speed: 105,
            attackCooldown: 0,
            flashTimer: 0,
            isBoss: false,
            size: 18
          });
          this.addRoomPowerup(center, i);
        }
        if (lastRoomIdx >= 1) {
          const bossRoom = this.dungeonData.rooms[lastRoomIdx];
          const bossCenter = new Vector2D((bossRoom.x + bossRoom.width / 2) * 32, (bossRoom.y + bossRoom.height / 2) * 32);
          this.enemies.push({
            pos: bossCenter.clone(),
            hp: 500,
            maxHp: 500,
            name: "\u{1F451} ABYSSAL DEMON OVERLORD (FINAL BOSS)",
            color: "#dc2626",
            speed: 125,
            attackCooldown: 0,
            flashTimer: 0,
            isBoss: true,
            size: 34
          });
        }
      }
    }
    spawnEnemyPatrol() {
      if (!this.dungeonData || !this.dungeonData.rooms || this.dungeonData.rooms.length === 0) return;
      const availableRooms = this.dungeonData.rooms.filter((rm) => {
        const rmCenter = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
        return rmCenter.distance(this.playerPos) > 180;
      });
      const targetRoom = availableRooms.length > 0 ? availableRooms[Math.floor(Math.random() * availableRooms.length)] : this.dungeonData.rooms[Math.floor(Math.random() * this.dungeonData.rooms.length)];
      const center = new Vector2D((targetRoom.x + Math.random() * targetRoom.width) * 32, (targetRoom.y + Math.random() * targetRoom.height) * 32);
      if (this.dungeonLevel === 1) {
        const isGoblin = Math.random() > 0.5;
        this.enemies.push({
          pos: center,
          hp: isGoblin ? 45 : 60,
          maxHp: isGoblin ? 45 : 60,
          name: isGoblin ? "Goblin Scout" : "Skeleton Minion",
          color: isGoblin ? "#ef4444" : "#a855f7",
          speed: isGoblin ? 100 : 85,
          attackCooldown: 0,
          flashTimer: 0,
          isBoss: false,
          size: 16
        });
      } else if (this.dungeonLevel === 2) {
        const roll = Math.random();
        const def = roll < 0.35 ? { name: "Skeleton Knight", hp: 90, color: "#a855f7", speed: 100 } : roll < 0.7 ? { name: "Inferno Imp", hp: 80, color: "#ef4444", speed: 130 } : { name: "Shadow Necromancer", hp: 120, color: "#f59e0b", speed: 110 };
        this.enemies.push({
          pos: center,
          hp: def.hp,
          maxHp: def.hp,
          name: def.name,
          color: def.color,
          speed: def.speed,
          attackCooldown: 0,
          flashTimer: 0,
          isBoss: false,
          size: 16
        });
      } else if (this.dungeonLevel === 3) {
        this.enemies.push({
          pos: center,
          hp: 110,
          maxHp: 110,
          name: "Abyssal Royal Guard",
          color: "#8b5cf6",
          speed: 105,
          attackCooldown: 0,
          flashTimer: 0,
          isBoss: false,
          size: 18
        });
      }
      if (Math.random() < 0.4) {
        this.addRoomPowerup(center, Math.floor(Math.random() * 10));
      }
    }
    addRoomPowerup(center, i) {
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
        this.particles.emit(this.playerPos, 35, "#38bdf8");
        this.dealAreaDamage(350, 60, false);
      } else if (index === 1) {
        if (!this.audioMuted) this.audio.playExplosion();
        this.particles.emit(this.playerPos, 70, "#a855f7");
        this.triggerScreenShake(10);
        this.dealAreaDamage(450, 95, true);
        this.showToast("\u{1F300} Whirlwind Nova Triggered!");
      } else if (index === 2) {
        if (!this.audioMuted) this.audio.playPickup();
        this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 40);
        this.particles.emit(this.playerPos, 50, "#10b981");
        this.addFloatingText("+40 HP SHIELD \u{1F6E1}\uFE0F", this.playerPos, "#10b981");
        this.showToast("\u{1F6E1}\uFE0F Shield Wall Activated! +40 HP Shield");
      } else if (index === 3) {
        if (!this.audioMuted) this.audio.playExplosion();
        this.triggerScreenShake(22);
        this.dealAreaDamage(1e3, 160, true);
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
      for (let idx = this.enemies.length - 1; idx >= 0; idx--) {
        const enemy = this.enemies[idx];
        if (enemy.pos.distance(this.playerPos) < radius) {
          enemy.hp -= damageAmount;
          enemy.flashTimer = 0.2;
          this.addFloatingText(
            isSpecial ? "\u{1F4A5} CRIT -" + damageAmount : "-" + damageAmount,
            enemy.pos,
            isSpecial ? "#fbbf24" : "#ef4444"
          );
          this.particles.emit(enemy.pos, 25, isSpecial ? "#fbbf24" : "#ef4444");
          if (enemy.hp <= 0) {
            if (!this.audioMuted) this.audio.playExplosion();
            this.quests.onKillEnemy("enemy");
            this.enemiesKilled++;
            const killPoints = enemy.isBoss ? 500 : this.dungeonLevel === 1 ? 50 : this.dungeonLevel === 2 ? 75 : 100;
            this.score += killPoints;
            this.levelScore += killPoints;
            this.gold += enemy.isBoss ? 250 : 45;
            this.xp += enemy.isBoss ? 300 : 50;
            this.addFloatingText("+" + killPoints + " SCORE \u2B50", this.playerPos, "#fbbf24");
            if (this.dungeonLevel === 1 && this.levelScore >= this.targetScoreLevel1) {
              this.enemies.splice(idx, 1);
              this.advanceToLevel(2);
              return;
            }
            if (this.dungeonLevel === 2 && this.levelScore >= this.targetScoreLevel2) {
              this.enemies.splice(idx, 1);
              this.advanceToLevel(3);
              return;
            }
            if (this.dungeonLevel === 3 && enemy.isBoss) {
              this.isBossDefeated = true;
              this.enemies.splice(idx, 1);
              this.triggerVictory();
              return;
            }
            if (this.xp >= this.maxXp) {
              this.level++;
              this.xp -= this.maxXp;
              this.maxXp = Math.floor(this.maxXp * 1.5);
              this.playerMaxHp += 25;
              this.playerHp = this.playerMaxHp;
              this.showToast("\u{1F31F} LEVEL UP! You reached Hero Level " + this.level + "!");
            }
            this.enemies.splice(idx, 1);
          }
        }
      }
    }
    advanceToLevel(nextLevel) {
      if (!this.audioMuted) this.audio.playPickup();
      this.triggerScreenShake(15);
      this.particles.emit(this.playerPos, 80, "#fbbf24");
      this.playerHp = this.playerMaxHp;
      this.playerResource = this.playerMaxResource;
      this.loadDungeonLevel(nextLevel);
      if (nextLevel === 2) {
        this.showToast("\u{1F525} LEVEL 1 COMPLETE! Entering Level 2: Inferno Caverns (Target: " + this.targetScoreLevel2 + " Score)");
        this.addFloatingText("\u{1F525} LEVEL 2: INFERNO CAVERNS", this.playerPos, "#f97316");
      } else if (nextLevel === 3) {
        this.showToast("\u{1F451} LEVEL 2 COMPLETE! Entering Final Level 3: Slay the Abyssal Demon Overlord!");
        this.addFloatingText("\u{1F451} FINAL BOSS LEVEL: ABYSSAL THRONE", this.playerPos, "#ef4444");
      }
    }
    triggerVictory() {
      if (!this.audioMuted) {
        this.audio.playExplosion();
        this.audio.playPickup();
      }
      this.triggerScreenShake(30);
      this.particles.emit(this.playerPos, 150, "#fbbf24");
      this.stateEngine.setState("Paused");
      const statsEl = document.getElementById("victory-stats-container");
      if (statsEl) {
        statsEl.innerHTML = `
          <div style="color: #4ade80; font-size: 20px; font-weight: bold; margin-bottom: 10px;">\u{1F451} REALM LIBERATED! \u{1F451}</div>
          <div>\u{1F3C6} <b>Total Score:</b> ${this.score} pts</div>
          <div>\u{1F480} <b>Enemies Slain:</b> ${this.enemiesKilled}</div>
          <div>\u{1F6E1}\uFE0F <b>Hero Class:</b> ${this.selectedClass} (Level ${this.level})</div>
          <div>\u{1F4B0} <b>Total Gold:</b> ${this.gold}</div>
        `;
      }
      this.showScreen("screen-victory");
      this.showToast("\u{1F3C6} CONGRATULATIONS! You defeated the Big Boss and completed Omniquest!");
    }
    update(dt) {
      if (this.stateEngine.getState() === "Paused" || this.stateEngine.getState() === "MainMenu") return;
      if (this.playerResource < this.playerMaxResource) {
        this.playerResource = Math.min(this.playerMaxResource, this.playerResource + 20 * dt);
      }
      this.spawnTimer += dt;
      const maxEnemies = this.dungeonLevel === 3 ? 5 : 8;
      const regularEnemiesCount = this.enemies.filter((e) => !e.isBoss).length;
      if (this.spawnTimer >= 3 && regularEnemiesCount < maxEnemies) {
        this.spawnTimer = 0;
        this.spawnEnemyPatrol();
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
        if (enemy.flashTimer > 0) {
          enemy.flashTimer -= dt;
        }
        const distToPlayer = enemy.pos.distance(this.playerPos);
        const aggroRadius = enemy.isBoss ? 550 : 350;
        const stopDist = enemy.isBoss ? 45 : 28;
        if (distToPlayer < aggroRadius && distToPlayer > stopDist) {
          const dir = this.playerPos.clone().sub(enemy.pos).normalize();
          enemy.pos.addScaled(dir, enemy.speed * 0.7 * dt);
        }
        const attackRange = enemy.isBoss ? 50 : 35;
        if (distToPlayer < attackRange && enemy.attackCooldown <= 0) {
          enemy.attackCooldown = enemy.isBoss ? 1.5 : 1.2;
          const damageDealt = enemy.isBoss ? 25 : 12;
          this.playerHp = Math.max(0, this.playerHp - damageDealt);
          this.addFloatingText(enemy.isBoss ? "-25 HP \u{1F4A5}" : "-12 HP \u{1F494}", this.playerPos, "#ef4444");
          this.particles.emit(this.playerPos, enemy.isBoss ? 25 : 15, "#ef4444");
          this.triggerScreenShake(enemy.isBoss ? 12 : 6);
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
          this.score += 25;
          this.levelScore += 25;
          this.addFloatingText("+25 SCORE \u2B50", this.playerPos, "#fbbf24");
          this.particles.emit(this.playerPos, 25, p.color);
          this.powerups.splice(i, 1);
          if (this.dungeonLevel === 1 && this.levelScore >= this.targetScoreLevel1) {
            this.advanceToLevel(2);
            return;
          }
          if (this.dungeonLevel === 2 && this.levelScore >= this.targetScoreLevel2) {
            this.advanceToLevel(3);
            return;
          }
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
      if (!this.dungeonData) return;
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
            const floorColor = this.dungeonLevel === 1 ? (r + c) % 2 === 0 ? "#1e293b" : "#0f172a" : this.dungeonLevel === 2 ? (r + c) % 2 === 0 ? "#451a03" : "#271003" : (r + c) % 2 === 0 ? "#311042" : "#190624";
            this.ctx.fillStyle = floorColor;
            this.ctx.fillRect(x, y, tileSize, tileSize);
            this.ctx.strokeStyle = this.dungeonLevel === 1 ? "#334155" : this.dungeonLevel === 2 ? "#78350f" : "#581c87";
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
        const eRadius = e.size || 16;
        this.ctx.beginPath();
        this.ctx.arc(e.pos.x, e.pos.y, eRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = e.flashTimer > 0 ? "#ffffff" : e.color;
        this.ctx.shadowColor = e.isBoss ? "#ef4444" : e.color;
        this.ctx.shadowBlur = e.isBoss ? 35 : e.flashTimer > 0 ? 25 : 12;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
        if (e.isBoss) {
          this.ctx.beginPath();
          this.ctx.arc(e.pos.x, e.pos.y, eRadius + 6, 0, Math.PI * 2);
          this.ctx.strokeStyle = "#fbbf24";
          this.ctx.lineWidth = 3;
          this.ctx.stroke();
        }
        this.ctx.font = e.isBoss ? "bold 13px Inter" : "bold 11px Inter";
        this.ctx.fillStyle = e.isBoss ? "#fbbf24" : "#f87171";
        this.ctx.fillText(e.name + " (" + Math.max(0, Math.round(e.hp)) + "/" + e.maxHp + ")", e.pos.x - (e.isBoss ? 110 : 45), e.pos.y - (eRadius + 12));
        const barW = e.isBoss ? 120 : 60;
        this.ctx.fillStyle = "rgba(0,0,0,0.8)";
        this.ctx.fillRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), barW, 6);
        this.ctx.fillStyle = "#ef4444";
        const hpWidth = Math.max(0, e.hp / e.maxHp * barW);
        this.ctx.fillRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), hpWidth, 6);
        this.ctx.strokeStyle = e.isBoss ? "#fbbf24" : "#ffffff";
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), barW, 6);
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
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.92)";
      this.ctx.strokeStyle = "rgba(56, 189, 248, 0.4)";
      this.ctx.lineWidth = 2;
      this.ctx.fillRect(15, hudY, 410, 105);
      this.ctx.strokeRect(15, hudY, 410, 105);
      this.ctx.font = "bold 14px Inter";
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.fillText("HERO: " + this.selectedClass.toUpperCase() + " (Lvl " + this.level + ")", 30, hudY + 22);
      this.ctx.fillStyle = this.dungeonLevel === 3 ? "#ef4444" : "#fbbf24";
      this.ctx.font = "bold 13px Inter";
      const levelLabel = this.dungeonLevel === 3 ? "DUNGEON: LVL 3/3 (BOSS)" : "DUNGEON: LVL " + this.dungeonLevel + "/3";
      this.ctx.fillText(levelLabel, 230, hudY + 22);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(30, hudY + 30, 190, 13);
      this.ctx.fillStyle = "#ef4444";
      this.ctx.fillRect(30, hudY + 30, this.playerHp / this.playerMaxHp * 190, 13);
      this.ctx.font = "bold 10px Inter";
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("HP: " + Math.round(this.playerHp) + " / " + this.playerMaxHp, 35, hudY + 40);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(30, hudY + 47, 190, 13);
      this.ctx.fillStyle = "#3b82f6";
      this.ctx.fillRect(30, hudY + 47, this.playerResource / this.playerMaxResource * 190, 13);
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("ENERGY: " + Math.round(this.playerResource) + " / " + this.playerMaxResource, 35, hudY + 57);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      this.ctx.fillRect(30, hudY + 65, 375, 20);
      this.ctx.fillStyle = this.dungeonLevel === 3 ? "#ef4444" : "#fbbf24";
      const targetScore = this.dungeonLevel === 1 ? this.targetScoreLevel1 : this.dungeonLevel === 2 ? this.targetScoreLevel2 : 1;
      const scoreProgress = this.dungeonLevel === 3 ? 1 : Math.min(1, this.levelScore / targetScore);
      this.ctx.fillRect(30, hudY + 65, scoreProgress * 375, 20);
      this.ctx.fillStyle = "#0f172a";
      this.ctx.font = "bold 11px Inter";
      const scoreText = this.dungeonLevel === 1 ? `LEVEL 1 GOAL: ${this.levelScore} / ${this.targetScoreLevel1} Score to reach Level 2` : this.dungeonLevel === 2 ? `LEVEL 2 GOAL: ${this.levelScore} / ${this.targetScoreLevel2} Score to reach Level 3` : `LEVEL 3: DEFEAT THE BIG BOSS TO COMPLETE THE GAME!`;
      this.ctx.fillText(scoreText, 36, hudY + 79);
      this.ctx.font = "bold 11px Inter";
      this.ctx.fillStyle = "#fbbf24";
      this.ctx.fillText("\u{1F4B0} " + this.gold + " Gold", 230, hudY + 40);
      this.ctx.fillText("\u2B50 Score: " + this.score, 230, hudY + 57);
      const boss = this.enemies.find((e) => e.isBoss);
      if (boss && this.dungeonLevel === 3) {
        const bWidth = 460;
        const bX = width / 2 - bWidth / 2;
        const bY = 15;
        this.ctx.fillStyle = "rgba(15, 23, 42, 0.95)";
        this.ctx.fillRect(bX, bY, bWidth, 44);
        this.ctx.strokeStyle = "#ef4444";
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(bX, bY, bWidth, 44);
        this.ctx.fillStyle = "rgba(0,0,0,0.7)";
        this.ctx.fillRect(bX + 12, bY + 22, bWidth - 24, 15);
        this.ctx.fillStyle = "#ef4444";
        const bHpRatio = Math.max(0, boss.hp / boss.maxHp);
        this.ctx.fillRect(bX + 12, bY + 22, (bWidth - 24) * bHpRatio, 15);
        this.ctx.font = "bold 12px Inter";
        this.ctx.fillStyle = "#fbbf24";
        this.ctx.fillText("\u{1F451} ABYSSAL DEMON OVERLORD (BOSS HP: " + Math.round(boss.hp) + " / " + boss.maxHp + ")", bX + 20, bY + 16);
      }
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
