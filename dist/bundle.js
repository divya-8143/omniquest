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

  // src/index.ts
  console.log("--- Omniquest 2D Action RPG Engine ---");
  var BrowserGameApp = class {
    constructor() {
      __publicField(this, "canvas");
      __publicField(this, "ctx");
      __publicField(this, "dungeonGen", new DungeonGenerator(40, 40));
      __publicField(this, "dungeonData");
      __publicField(this, "playerPos", new Vector2D(200, 200));
      __publicField(this, "playerVel", new Vector2D());
      __publicField(this, "playerHp", 100);
      __publicField(this, "playerMaxHp", 100);
      __publicField(this, "playerMana", 80);
      __publicField(this, "playerMaxMana", 100);
      __publicField(this, "gold", 350);
      __publicField(this, "level", 5);
      __publicField(this, "keys", /* @__PURE__ */ new Set());
      __publicField(this, "particles", new ParticleEngine());
      __publicField(this, "audio", new AudioSynthesizer());
      __publicField(this, "skills", new SkillTreeMatrix());
      __publicField(this, "quests", new QuestManager());
      __publicField(this, "enemies", []);
      if (typeof document === "undefined") return;
      this.canvas = document.getElementById("gameCanvas");
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext("2d");
      this.dungeonData = this.dungeonGen.generate();
      this.spawnEntities();
      this.setupInputs();
      this.startLoop();
    }
    spawnEntities() {
      if (this.dungeonData.rooms.length > 0) {
        const startRoom = this.dungeonData.rooms[0];
        this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
      }
      const enemyDefs = EnemyBestiary.getAllEnemies();
      const colors = ["#ef4444", "#a855f7", "#f59e0b", "#10b981"];
      for (let i = 1; i < this.dungeonData.rooms.length; i++) {
        const rm = this.dungeonData.rooms[i];
        const def = enemyDefs[i % enemyDefs.length];
        this.enemies.push({
          pos: new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32),
          hp: def.maxHp,
          maxHp: def.maxHp,
          name: def.name,
          color: colors[i % colors.length]
        });
      }
    }
    setupInputs() {
      window.addEventListener("keydown", (e) => {
        this.keys.add(e.key.toLowerCase());
        if (e.key === " ") {
          this.playerAttack();
        }
        if (e.key === "e" || e.key === "E") {
          this.audio.playPickup();
          this.particles.emit(this.playerPos, 25, "#38bdf8");
        }
      });
      window.addEventListener("keyup", (e) => {
        this.keys.delete(e.key.toLowerCase());
      });
      this.canvas.addEventListener("click", (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const clickPos = new Vector2D(e.clientX - rect.left, e.clientY - rect.top);
        this.particles.emit(clickPos, 30, "#f59e0b");
        this.audio.playSwordSwing();
      });
    }
    playerAttack() {
      this.audio.playSwordSwing();
      this.particles.emit(this.playerPos, 40, "#ef4444");
      this.enemies.forEach((enemy, idx) => {
        if (enemy.pos.distance(this.playerPos) < 80) {
          enemy.hp -= 35;
          this.particles.emit(enemy.pos, 20, "#fbbf24");
          if (enemy.hp <= 0) {
            this.audio.playExplosion();
            this.quests.onKillEnemy("enemy");
            this.gold += 25;
            this.enemies.splice(idx, 1);
          }
        }
      });
    }
    update(dt) {
      const speed = 180;
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
      if (Math.random() < 0.05) {
        const randomPos = new Vector2D(
          this.playerPos.x + (Math.random() - 0.5) * 600,
          this.playerPos.y + (Math.random() - 0.5) * 400
        );
        this.particles.emit(randomPos, 1, "#10b981");
      }
      this.particles.update(dt);
    }
    render() {
      const width = this.canvas.width;
      const height = this.canvas.height;
      this.ctx.fillStyle = "#050608";
      this.ctx.fillRect(0, 0, width, height);
      this.ctx.save();
      const camX = width / 2 - this.playerPos.x;
      const camY = height / 2 - this.playerPos.y;
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
      this.enemies.forEach((e) => {
        this.ctx.beginPath();
        this.ctx.arc(e.pos.x, e.pos.y, 14, 0, Math.PI * 2);
        this.ctx.fillStyle = e.color;
        this.ctx.shadowColor = e.color;
        this.ctx.shadowBlur = 12;
        this.ctx.fill();
        this.ctx.shadowBlur = 0;
        this.ctx.font = "11px Segoe UI";
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
      this.ctx.beginPath();
      this.ctx.arc(this.playerPos.x, this.playerPos.y, 16, 0, Math.PI * 2);
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.shadowColor = "#38bdf8";
      this.ctx.shadowBlur = 20;
      this.ctx.fill();
      this.ctx.lineWidth = 3;
      this.ctx.strokeStyle = "#ffffff";
      this.ctx.stroke();
      this.ctx.shadowBlur = 0;
      this.ctx.beginPath();
      this.ctx.moveTo(this.playerPos.x, this.playerPos.y);
      this.ctx.lineTo(this.playerPos.x + 22, this.playerPos.y);
      this.ctx.strokeStyle = "#60a5fa";
      this.ctx.lineWidth = 4;
      this.ctx.stroke();
      this.ctx.restore();
      this.renderHUD(width, height);
    }
    renderHUD(width, height) {
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      this.ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
      this.ctx.lineWidth = 2;
      this.ctx.fillRect(20, 20, 360, 95);
      this.ctx.strokeRect(20, 20, 360, 95);
      this.ctx.font = "bold 18px Segoe UI";
      this.ctx.fillStyle = "#38bdf8";
      this.ctx.fillText("OMNIQUEST - Lvl " + this.level + " Hero", 35, 45);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(35, 55, 220, 16);
      this.ctx.fillStyle = "#ef4444";
      this.ctx.fillRect(35, 55, this.playerHp / this.playerMaxHp * 220, 16);
      this.ctx.font = "bold 11px Segoe UI";
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("HP: " + this.playerHp + " / " + this.playerMaxHp, 45, 67);
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(35, 76, 220, 14);
      this.ctx.fillStyle = "#3b82f6";
      this.ctx.fillRect(35, 76, this.playerMana / this.playerMaxMana * 220, 14);
      this.ctx.fillStyle = "#ffffff";
      this.ctx.fillText("Mana: " + this.playerMana + " / " + this.playerMaxMana, 45, 87);
      this.ctx.font = "bold 14px Segoe UI";
      this.ctx.fillStyle = "#fbbf24";
      this.ctx.fillText("\u{1F4B0} " + this.gold + " Gold", 270, 70);
      const mmSize = 120;
      const mmX = width - mmSize - 20;
      const mmY = 20;
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
      this.ctx.fillStyle = "rgba(15, 23, 42, 0.85)";
      this.ctx.fillRect(20, height - 50, width - 40, 35);
      this.ctx.strokeRect(20, height - 50, width - 40, 35);
      this.ctx.font = "13px Segoe UI";
      this.ctx.fillStyle = "#94a3b8";
      this.ctx.fillText(
        "\u{1F3AE} Controls: WASD / Arrow Keys = Move | SPACE = Attack | E = Special SFX / Pickup | Click = Swing Weapon & Emit Particles",
        35,
        height - 28
      );
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
      new BrowserGameApp();
    });
    if (document.readyState === "complete" || document.readyState === "interactive") {
      new BrowserGameApp();
    }
  }
})();
