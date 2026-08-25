import { Vector2D } from './core/Math2D';
import { DungeonGenerator } from './procgen/DungeonGenerator';
import { ParticleEngine } from './graphics/ParticleEngine';
import { AudioSynthesizer } from './audio/AudioSynthesizer';
import { SkillTreeMatrix } from './gameplay/SkillTreeMatrix';
import { QuestManager } from './gameplay/QuestManager';
import { EnemyBestiary } from './gameplay/EnemyDefinitions';
import { GlobalStateEngine } from './core/StateEngine';
import { ClassSystem, CharacterClass } from './gameplay/ClassSystem';
import { SecuritySaveManager } from './storage/SecuritySaveManager';
import { CombatCalculator, EntityCombatStats } from './gameplay/CombatCalculator';

console.log('--- Omniquest: Realm of Shadows Engine ---');

interface PowerUp {
  pos: Vector2D;
  type: 'health' | 'mana' | 'gold' | 'speed' | 'shield';
  color: string;
  name: string;
  size: number;
  pulseTimer: number;
}

class AAAFullGameApp {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private stateEngine = GlobalStateEngine.getInstance();
  private dungeonGen = new DungeonGenerator(45, 45);
  private dungeonData!: { grid: number[][]; rooms: any[] };

  public selectedClass: CharacterClass = 'Warrior';
  private playerPos = new Vector2D(200, 200);
  private playerVel = new Vector2D();
  private playerHp = 140;
  private playerMaxHp = 140;
  private playerResource = 100;
  private playerMaxResource = 100;
  private gold = 150;
  private level = 1;
  private xp = 0;
  private maxXp = 100;

  private keys: Set<string> = new Set();
  private particles = new ParticleEngine();
  private audio = new AudioSynthesizer();
  private skills = new SkillTreeMatrix();
  private quests = new QuestManager();
  private powerups: PowerUp[] = [];
  private enemies: Array<{ pos: Vector2D; hp: number; maxHp: number; name: string; color: string; speed: number }> = [];

  private floatingTexts: Array<{ text: string; pos: Vector2D; color: string; life: number }> = [];
  public audioMuted: boolean = false;

  constructor() {
    if (typeof document === 'undefined') return;

    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;

    this.dungeonData = this.dungeonGen.generate();
    this.bindWindowGlobals();
    this.setupInputs();
    this.startLoop();
  }

  public showToast(message: string): void {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }

  public addFloatingText(text: string, pos: Vector2D, color: string = '#ffffff'): void {
    this.floatingTexts.push({
      text,
      pos: pos.clone(),
      color,
      life: 1.2
    });
  }

  public showScreen(screenId: string): void {
    document.querySelectorAll('.overlay-screen').forEach(s => s.classList.remove('visible'));
    const target = document.getElementById(screenId);
    if (target) target.classList.add('visible');
    if (screenId === 'screen-main-menu') {
      this.stateEngine.setState('MainMenu');
    }
  }

  public hideAllScreens(): void {
    document.querySelectorAll('.overlay-screen').forEach(s => s.classList.remove('visible'));
  }

  public toggleModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    if (modal.classList.contains('visible')) {
      modal.classList.remove('visible');
      if (this.stateEngine.getState() === 'Paused') {
        this.stateEngine.setState('Exploring');
      }
    } else {
      this.hideAllScreens();
      modal.classList.add('visible');
      this.stateEngine.setState('Paused');
    }
  }

  public hideModal(modalId: string): void {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('visible');
    if (this.stateEngine.getState() === 'Paused') {
      this.stateEngine.setState('Exploring');
    }
  }

  public togglePause(): void {
    if (this.stateEngine.getState() === 'Paused') {
      this.resumeGame();
    } else {
      this.showScreen('screen-pause');
      this.stateEngine.setState('Paused');
    }
  }

  public resumeGame(): void {
    this.hideAllScreens();
    this.stateEngine.setState('Exploring');
  }

  public selectClass(cls: CharacterClass): void {
    this.selectedClass = cls;
    document.querySelectorAll('.class-card').forEach(c => c.classList.remove('selected'));
    const targetCard = document.getElementById('card-' + cls.toLowerCase());
    if (targetCard) targetCard.classList.add('selected');
    this.showToast('Selected Hero Class: ' + cls);
  }

  public startDungeonGame(): void {
    const classDef = ClassSystem.getClass(this.selectedClass);
    this.playerHp = classDef.className === 'Warrior' ? 140 : 100;
    this.playerMaxHp = this.playerHp;
    this.playerResource = classDef.maxResource;
    this.playerMaxResource = classDef.maxResource;

    this.spawnEntitiesAndPowerups();
    this.hideAllScreens();
    this.stateEngine.setState('Exploring');
    this.showToast('⚔️ Entered Dungeon as ' + this.selectedClass + '!');
  }

  public quickSaveGame(): void {
    SecuritySaveManager.saveGame('quick_save', {
      slotId: 'quick_save',
      timestamp: Date.now(),
      playerLevel: this.level,
      characterClass: this.selectedClass,
      gold: this.gold,
      inventory: [],
      completedQuests: [],
      worldFlags: []
    });
    this.showToast('💾 Game Saved with HMAC-SHA256 Encryption!');
  }

  public loadSavedGame(): void {
    const data = SecuritySaveManager.loadGame('quick_save');
    if (data) {
      this.level = data.playerLevel;
      this.selectedClass = data.characterClass as CharacterClass;
      this.gold = data.gold;
      this.startDungeonGame();
      this.showToast('📂 Loaded Save Data for Level ' + this.level + ' ' + this.selectedClass);
    } else {
      this.showToast('⚠️ No Save Data Found! Starting New Game...');
      this.showScreen('screen-class-select');
    }
  }

  public toggleAudio(): void {
    this.audioMuted = !this.audioMuted;
    const btn = document.getElementById('btn-nav-audio');
    if (btn) btn.innerText = this.audioMuted ? '🔇 Audio OFF' : '🔊 Audio ON';
    this.showToast(this.audioMuted ? 'Audio Muted' : 'Audio Enabled');
  }

  private bindWindowGlobals(): void {
    (window as any).showScreen = (id: string) => this.showScreen(id);
    (window as any).selectClass = (cls: CharacterClass) => this.selectClass(cls);
    (window as any).startDungeonGame = () => this.startDungeonGame();
    (window as any).toggleModal = (id: string) => this.toggleModal(id);
    (window as any).hideModal = (id: string) => this.hideModal(id);
    (window as any).togglePause = () => this.togglePause();
    (window as any).resumeGame = () => this.resumeGame();
    (window as any).quickSaveGame = () => this.quickSaveGame();
    (window as any).loadSavedGame = () => this.loadSavedGame();
    (window as any).toggleAudio = () => this.toggleAudio();
    (window as any).showToast = (msg: string) => this.showToast(msg);
  }

  private spawnEntitiesAndPowerups(): void {
    this.enemies = [];
    this.powerups = [];

    if (this.dungeonData.rooms.length > 0) {
      const startRoom = this.dungeonData.rooms[0];
      this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
    }

    const enemyDefs = EnemyBestiary.getAllEnemies();
    const colors = ['#ef4444', '#a855f7', '#f59e0b', '#10b981'];

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
        speed: def.speed
      });

      const types: Array<'health' | 'mana' | 'gold' | 'speed' | 'shield'> = ['health', 'mana', 'gold', 'speed', 'shield'];
      const pType = types[i % types.length];
      const pColor = pType === 'health' ? '#ef4444' : pType === 'mana' ? '#3b82f6' : pType === 'gold' ? '#fbbf24' : '#10b981';
      this.powerups.push({
        pos: new Vector2D(center.x + (Math.random() - 0.5) * 60, center.y + (Math.random() - 0.5) * 60),
        type: pType,
        color: pColor,
        name: pType.toUpperCase() + ' ELIXIR',
        size: 10,
        pulseTimer: 0
      });
    }
  }

  private setupInputs(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') {
        if (this.stateEngine.getState() === 'Exploring' || this.stateEngine.getState() === 'InCombat') {
          this.playerAttack();
        }
      }
      if (e.key === 'i' || e.key === 'I') this.toggleModal('screen-inventory');
      if (e.key === 'k' || e.key === 'K') this.toggleModal('screen-skill-tree');
      if (e.key === 'q' || e.key === 'Q') this.toggleModal('screen-quest-log');
      if (e.key === 'Escape') this.togglePause();
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key.toLowerCase());
    });

    this.canvas.addEventListener('click', (e) => {
      if (this.stateEngine.getState() !== 'Exploring' && this.stateEngine.getState() !== 'InCombat') return;
      const rect = this.canvas.getBoundingClientRect();
      const clickPos = new Vector2D(e.clientX - rect.left, e.clientY - rect.top);
      this.particles.emit(clickPos, 30, '#f59e0b');
      if (!this.audioMuted) this.audio.playSwordSwing();
    });
  }

  private playerAttack(): void {
    if (!this.audioMuted) this.audio.playSwordSwing();
    this.particles.emit(this.playerPos, 40, '#ef4444');

    const attackerStats: EntityCombatStats = {
      attack: this.selectedClass === 'Mage' ? 35 : this.selectedClass === 'Rogue' ? 28 : 24,
      defense: 8,
      critChance: this.selectedClass === 'Rogue' ? 0.35 : 0.15,
      critMultiplier: 1.8,
      fireResist: 5,
      frostResist: 5
    };

    let hitAny = false;
    this.enemies.forEach((enemy, idx) => {
      if (enemy.pos.distance(this.playerPos) < 95) {
        hitAny = true;
        const defenderStats: EntityCombatStats = { attack: 10, defense: 4, critChance: 0.05, critMultiplier: 1.2, fireResist: 0, frostResist: 0 };
        const result = CombatCalculator.calculateDamage(attackerStats, defenderStats);

        enemy.hp -= result.finalDamage;
        this.addFloatingText(
          result.isCrit ? '💥 CRIT ' + result.finalDamage : '-' + result.finalDamage,
          enemy.pos,
          result.isCrit ? '#fbbf24' : '#ef4444'
        );
        this.particles.emit(enemy.pos, 20, result.isCrit ? '#fbbf24' : '#ef4444');

        if (enemy.hp <= 0) {
          if (!this.audioMuted) this.audio.playExplosion();
          this.quests.onKillEnemy('enemy');
          this.gold += 35;
          this.xp += 40;
          this.addFloatingText('+40 XP', this.playerPos, '#38bdf8');

          if (this.xp >= this.maxXp) {
            this.level++;
            this.xp -= this.maxXp;
            this.maxXp = Math.floor(this.maxXp * 1.5);
            this.playerMaxHp += 20;
            this.playerHp = this.playerMaxHp;
            this.showToast('🌟 LEVEL UP! You reached Level ' + this.level + '!');
          }

          this.enemies.splice(idx, 1);
        }
      }
    });

    if (hitAny) {
      this.stateEngine.setState('InCombat');
    }
  }

  private update(dt: number): void {
    if (this.stateEngine.getState() === 'Paused' || this.stateEngine.getState() === 'MainMenu') return;

    const speed = this.selectedClass === 'Rogue' ? 220 : 180;
    this.playerVel.zero();

    if (this.keys.has('w') || this.keys.has('arrowup')) this.playerVel.y -= 1;
    if (this.keys.has('s') || this.keys.has('arrowdown')) this.playerVel.y += 1;
    if (this.keys.has('a') || this.keys.has('arrowleft')) this.playerVel.x -= 1;
    if (this.keys.has('d') || this.keys.has('arrowright')) this.playerVel.x += 1;

    if (this.playerVel.lengthSq() > 0) {
      this.playerVel.normalize().scale(speed * dt);
      this.playerPos.add(this.playerVel);

      if (Math.random() < 0.3) {
        this.particles.emit(this.playerPos, 2, '#38bdf8');
      }
    }

    // Powerup collision
    for (let i = this.powerups.length - 1; i >= 0; i--) {
      const p = this.powerups[i];
      p.pulseTimer += dt;
      if (p.pos.distance(this.playerPos) < 28) {
        if (!this.audioMuted) this.audio.playPickup();
        if (p.type === 'health') {
          this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 35);
          this.addFloatingText('+35 HP', this.playerPos, '#ef4444');
        } else if (p.type === 'mana') {
          this.playerResource = Math.min(this.playerMaxResource, this.playerResource + 40);
          this.addFloatingText('+40 RESOURCE', this.playerPos, '#3b82f6');
        } else if (p.type === 'gold') {
          this.gold += 50;
          this.addFloatingText('+50 GOLD 💰', this.playerPos, '#fbbf24');
        } else {
          this.showToast('✨ Powerup Activated: ' + p.name + '!');
        }

        this.particles.emit(this.playerPos, 25, p.color);
        this.powerups.splice(i, 1);
      }
    }

    // Floating texts
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

  private render(): void {
    const width = this.canvas.width;
    const height = this.canvas.height;

    this.ctx.fillStyle = '#030712';
    this.ctx.fillRect(0, 0, width, height);

    if (this.stateEngine.getState() === 'MainMenu') return;

    this.ctx.save();
    const camX = width / 2 - this.playerPos.x;
    const camY = height / 2 - this.playerPos.y;
    this.ctx.translate(camX, camY);

    // Dungeon floor
    const tileSize = 32;
    const grid = this.dungeonData.grid;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const x = c * tileSize;
        const y = r * tileSize;
        if (grid[r][c] === 0) {
          this.ctx.fillStyle = (r + c) % 2 === 0 ? '#1e293b' : '#0f172a';
          this.ctx.fillRect(x, y, tileSize, tileSize);
          this.ctx.strokeStyle = '#334155';
          this.ctx.strokeRect(x, y, tileSize, tileSize);
        } else {
          this.ctx.fillStyle = '#020617';
          this.ctx.fillRect(x, y, tileSize, tileSize);
        }
      }
    }

    // Powerups
    this.powerups.forEach(p => {
      const pulse = Math.sin(p.pulseTimer * 6) * 3;
      this.ctx.beginPath();
      this.ctx.arc(p.pos.x, p.pos.y, p.size + pulse, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 15;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });

    // Enemies
    this.enemies.forEach(e => {
      this.ctx.beginPath();
      this.ctx.arc(e.pos.x, e.pos.y, 14, 0, Math.PI * 2);
      this.ctx.fillStyle = e.color;
      this.ctx.shadowColor = e.color;
      this.ctx.shadowBlur = 12;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      this.ctx.font = '11px Inter';
      this.ctx.fillStyle = '#f87171';
      this.ctx.fillText(e.name, e.pos.x - 30, e.pos.y - 22);
      this.ctx.fillStyle = 'rgba(0,0,0,0.6)';
      this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, 40, 5);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, (e.hp / e.maxHp) * 40, 5);
    });

    // Particles
    this.particles.getParticles().forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.position.x, p.position.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });

    // Player Avatar
    const pColor = this.selectedClass === 'Warrior' ? '#ef4444' : this.selectedClass === 'Mage' ? '#a855f7' : '#38bdf8';
    this.ctx.beginPath();
    this.ctx.arc(this.playerPos.x, this.playerPos.y, 16, 0, Math.PI * 2);
    this.ctx.fillStyle = pColor;
    this.ctx.shadowColor = pColor;
    this.ctx.shadowBlur = 25;
    this.ctx.fill();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
    this.ctx.shadowBlur = 0;

    // Floating text
    this.floatingTexts.forEach(ft => {
      this.ctx.font = 'bold 14px Inter';
      this.ctx.fillStyle = ft.color;
      this.ctx.fillText(ft.text, ft.pos.x - 15, ft.pos.y);
    });

    this.ctx.restore();

    this.renderHUD(width, height);
  }

  private renderHUD(width: number, height: number): void {
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    this.ctx.lineWidth = 2;

    this.ctx.fillRect(20, 20, 360, 95);
    this.ctx.strokeRect(20, 20, 360, 95);

    this.ctx.font = 'bold 16px Inter';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText('HERO: ' + this.selectedClass.toUpperCase() + ' (Lvl ' + this.level + ')', 35, 45);

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(35, 55, 220, 16);
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(35, 55, (this.playerHp / this.playerMaxHp) * 220, 16);
    this.ctx.font = 'bold 11px Inter';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('HP: ' + this.playerHp + ' / ' + this.playerMaxHp, 45, 67);

    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(35, 76, 220, 14);
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.fillRect(35, 76, (this.playerResource / this.playerMaxResource) * 220, 14);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('ENERGY: ' + this.playerResource + ' / ' + this.playerMaxResource, 45, 87);

    this.ctx.font = 'bold 14px Inter';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText('💰 ' + this.gold + ' Gold', 270, 70);

    const mmSize = 120;
    const mmX = width - mmSize - 20;
    const mmY = 20;
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    this.ctx.fillRect(mmX, mmY, mmSize, mmSize);
    this.ctx.strokeRect(mmX, mmY, mmSize, mmSize);

    const scaleX = mmSize / (this.dungeonGen.width * 32);
    const scaleY = mmSize / (this.dungeonGen.height * 32);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillRect(
      mmX + this.playerPos.x * scaleX - 3,
      mmY + this.playerPos.y * scaleY - 3,
      6, 6
    );
  }

  private startLoop(): void {
    let lastTime = performance.now();
    const loop = (currentTime: number) => {
      const dt = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      this.update(dt);
      this.render();
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}

if (typeof document !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    new AAAFullGameApp();
  });
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    new AAAFullGameApp();
  }
}
