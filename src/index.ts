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

console.log('--- Omniquest: Realm of Shadows Engine (3-Level Campaign) ---');

interface PowerUp {
  pos: Vector2D;
  type: 'health' | 'mana' | 'gold' | 'speed' | 'shield';
  color: string;
  name: string;
  size: number;
  pulseTimer: number;
}

interface ActiveSkill {
  id: string;
  name: string;
  icon: string;
  hotkey: string;
  cooldown: number;
  maxCooldown: number;
  manaCost: number;
}

interface DungeonEnemy {
  pos: Vector2D;
  hp: number;
  maxHp: number;
  name: string;
  color: string;
  speed: number;
  attackCooldown: number;
  flashTimer: number;
  isBoss?: boolean;
  size?: number;
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

  // 3-Level Progression Campaign
  public dungeonLevel: number = 1; // 1, 2, or 3
  public score: number = 0;
  public levelScore: number = 0;
  public targetScoreLevel1: number = 150;
  public targetScoreLevel2: number = 350;
  public isBossDefeated: boolean = false;
  public enemiesKilled: number = 0;
  private spawnTimer: number = 0;

  private keys: Set<string> = new Set();
  private particles = new ParticleEngine();
  private audio = new AudioSynthesizer();
  private skills = new SkillTreeMatrix();
  private quests = new QuestManager();
  private powerups: PowerUp[] = [];
  private enemies: DungeonEnemy[] = [];

  private floatingTexts: Array<{ text: string; pos: Vector2D; color: string; life: number }> = [];
  public audioMuted: boolean = false;
  private screenShake: number = 0;

  // Hero Powers (1, 2, 3, 4, 5)
  private heroSkills: ActiveSkill[] = [
    { id: 'skill_1', name: 'Primary Strike', icon: '⚔️', hotkey: '1', cooldown: 0, maxCooldown: 0.3, manaCost: 5 },
    { id: 'skill_2', name: 'Whirlwind / Nova', icon: '🌀', hotkey: '2', cooldown: 0, maxCooldown: 2.0, manaCost: 20 },
    { id: 'skill_3', name: 'Shield / Barrier', icon: '🛡️', hotkey: '3', cooldown: 0, maxCooldown: 4.0, manaCost: 25 },
    { id: 'skill_4', name: 'ULTIMATE METEOR', icon: '🌟', hotkey: '4', cooldown: 0, maxCooldown: 8.0, manaCost: 40 },
    { id: 'skill_5', name: 'Divine Healing', icon: '🧪', hotkey: '5', cooldown: 0, maxCooldown: 5.0, manaCost: 15 }
  ];

  constructor() {
    if (typeof document === 'undefined') return;

    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;

    this.loadDungeonLevel(1);
    this.stateEngine.setState('MainMenu');

    (window as any).gameApp = this;
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

  public triggerScreenShake(intensity: number): void {
    this.screenShake = intensity;
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

    this.dungeonLevel = 1;
    this.score = 0;
    this.levelScore = 0;
    this.enemiesKilled = 0;
    this.isBossDefeated = false;

    this.loadDungeonLevel(1);
    this.hideAllScreens();
    this.stateEngine.setState('Exploring');
    this.showToast('⚔️ LEVEL 1: Crypt of Shadows! Defeat enemies to score ' + this.targetScoreLevel1 + ' pts for Level 2!');
  }

  public loadDungeonLevel(lvl: number): void {
    this.dungeonLevel = lvl;
    this.levelScore = 0;
    this.dungeonData = this.dungeonGen.generate();
    this.spawnEntitiesAndPowerups();

    if (this.dungeonData.rooms.length > 0) {
      const startRoom = this.dungeonData.rooms[0];
      this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
    }
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
    (window as any).castSkill = (idx: number) => this.castHeroSkill(idx);
  }

  private spawnEntitiesAndPowerups(): void {
    this.enemies = [];
    this.powerups = [];

    if (this.dungeonData.rooms.length > 0) {
      const startRoom = this.dungeonData.rooms[0];
      this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
    }

    if (this.dungeonLevel === 1) {
      // LEVEL 1: Crypt of Shadows - Goblins & Skeletons
      const enemiesList = [
        { name: 'Goblin Scout', hp: 45, color: '#ef4444', speed: 100 },
        { name: 'Skeleton Minion', hp: 60, color: '#a855f7', speed: 85 }
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
      // LEVEL 2: Inferno Caverns - Skeleton Knights, Shadow Necromancers, Fire Imps
      const enemiesList = [
        { name: 'Skeleton Knight', hp: 90, color: '#a855f7', speed: 100 },
        { name: 'Shadow Necromancer', hp: 120, color: '#f59e0b', speed: 110 },
        { name: 'Inferno Imp', hp: 80, color: '#ef4444', speed: 130 }
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
      // LEVEL 3: Abyssal Throne - Elite Guards + FINAL BIG BOSS ENEMY
      const lastRoomIdx = this.dungeonData.rooms.length - 1;

      for (let i = 1; i < lastRoomIdx; i++) {
        const rm = this.dungeonData.rooms[i];
        const center = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);

        this.enemies.push({
          pos: center.clone(),
          hp: 110,
          maxHp: 110,
          name: 'Abyssal Royal Guard',
          color: '#8b5cf6',
          speed: 105,
          attackCooldown: 0,
          flashTimer: 0,
          isBoss: false,
          size: 18
        });
        this.addRoomPowerup(center, i);
      }

      // Final Big Boss
      if (lastRoomIdx >= 1) {
        const bossRoom = this.dungeonData.rooms[lastRoomIdx];
        const bossCenter = new Vector2D((bossRoom.x + bossRoom.width / 2) * 32, (bossRoom.y + bossRoom.height / 2) * 32);

        this.enemies.push({
          pos: bossCenter.clone(),
          hp: 500,
          maxHp: 500,
          name: '👑 ABYSSAL DEMON OVERLORD (FINAL BOSS)',
          color: '#dc2626',
          speed: 125,
          attackCooldown: 0,
          flashTimer: 0,
          isBoss: true,
          size: 34
        });
      }
    }
  }

  private spawnEnemyPatrol(): void {
    if (!this.dungeonData || !this.dungeonData.rooms || this.dungeonData.rooms.length === 0) return;

    const availableRooms = this.dungeonData.rooms.filter(rm => {
      const rmCenter = new Vector2D((rm.x + rm.width / 2) * 32, (rm.y + rm.height / 2) * 32);
      return rmCenter.distance(this.playerPos) > 180;
    });

    const targetRoom = availableRooms.length > 0
      ? availableRooms[Math.floor(Math.random() * availableRooms.length)]
      : this.dungeonData.rooms[Math.floor(Math.random() * this.dungeonData.rooms.length)];

    const center = new Vector2D(
      (targetRoom.x + Math.random() * targetRoom.width) * 32,
      (targetRoom.y + Math.random() * targetRoom.height) * 32
    );

    if (this.dungeonLevel === 1) {
      const isGoblin = Math.random() > 0.5;
      this.enemies.push({
        pos: center,
        hp: isGoblin ? 45 : 60,
        maxHp: isGoblin ? 45 : 60,
        name: isGoblin ? 'Goblin Scout' : 'Skeleton Minion',
        color: isGoblin ? '#ef4444' : '#a855f7',
        speed: isGoblin ? 100 : 85,
        attackCooldown: 0,
        flashTimer: 0,
        isBoss: false,
        size: 16
      });
    } else if (this.dungeonLevel === 2) {
      const roll = Math.random();
      const def = roll < 0.35 
        ? { name: 'Skeleton Knight', hp: 90, color: '#a855f7', speed: 100 }
        : roll < 0.70
        ? { name: 'Inferno Imp', hp: 80, color: '#ef4444', speed: 130 }
        : { name: 'Shadow Necromancer', hp: 120, color: '#f59e0b', speed: 110 };
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
        name: 'Abyssal Royal Guard',
        color: '#8b5cf6',
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

  private addRoomPowerup(center: Vector2D, i: number): void {
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

  private setupInputs(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      
      if (e.key === '1') this.castHeroSkill(0);
      if (e.key === '2') this.castHeroSkill(1);
      if (e.key === '3') this.castHeroSkill(2);
      if (e.key === '4') this.castHeroSkill(3);
      if (e.key === '5') this.castHeroSkill(4);

      if (e.key === ' ') {
        if (this.stateEngine.getState() === 'Exploring' || this.stateEngine.getState() === 'InCombat') {
          this.castHeroSkill(0);
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
      this.castHeroSkill(0);
    });
  }

  // Hero Powers Casting Logic (1, 2, 3, 4, 5)
  public castHeroSkill(index: number): void {
    if (this.stateEngine.getState() === 'Paused' || this.stateEngine.getState() === 'MainMenu') return;
    const skill = this.heroSkills[index];
    if (!skill || skill.cooldown > 0) return;

    if (this.playerResource < skill.manaCost) {
      this.showToast('⚠️ Low Energy! Need ' + skill.manaCost + ' Energy.');
      return;
    }

    this.playerResource -= skill.manaCost;
    skill.cooldown = skill.maxCooldown;

    if (index === 0) {
      // Skill 1: Primary Strike - 60 Damage, 350px Radius
      if (!this.audioMuted) this.audio.playSwordSwing();
      this.particles.emit(this.playerPos, 35, '#38bdf8');
      this.dealAreaDamage(350, 60, false);
    } else if (index === 1) {
      // Skill 2: Whirlwind Nova - 95 Damage, 450px Radius
      if (!this.audioMuted) this.audio.playExplosion();
      this.particles.emit(this.playerPos, 70, '#a855f7');
      this.triggerScreenShake(10);
      this.dealAreaDamage(450, 95, true);
      this.showToast('🌀 Whirlwind Nova Triggered!');
    } else if (index === 2) {
      // Skill 3: Shield Wall
      if (!this.audioMuted) this.audio.playPickup();
      this.playerHp = Math.min(this.playerMaxHp, this.playerHp + 40);
      this.particles.emit(this.playerPos, 50, '#10b981');
      this.addFloatingText('+40 HP SHIELD 🛡️', this.playerPos, '#10b981');
      this.showToast('🛡️ Shield Wall Activated! +40 HP Shield');
    } else if (index === 3) {
      // Skill 4: ULTIMATE METEOR STRIKE - 160 Damage All Enemies
      if (!this.audioMuted) this.audio.playExplosion();
      this.triggerScreenShake(22);
      this.dealAreaDamage(1000, 160, true);
      this.showToast('🌟 ULTIMATE METEOR STRIKE CLEARED THE DUNGEON!');
    } else if (index === 4) {
      // Skill 5: DIVINE HEALING POTION
      if (!this.audioMuted) this.audio.playPickup();
      const healAmt = 50;
      this.playerHp = Math.min(this.playerMaxHp, this.playerHp + healAmt);
      this.particles.emit(this.playerPos, 60, '#22c55e');
      this.addFloatingText('🧪 +50 HEAL HP', this.playerPos, '#22c55e');
      this.showToast('🧪 Divine Healing Power Used! +50 HP');
    }
  }

  private dealAreaDamage(radius: number, damageAmount: number, isSpecial: boolean): void {
    for (let idx = this.enemies.length - 1; idx >= 0; idx--) {
      const enemy = this.enemies[idx];
      if (enemy.pos.distance(this.playerPos) < radius) {
        enemy.hp -= damageAmount;
        enemy.flashTimer = 0.2; // Hit flash

        this.addFloatingText(
          isSpecial ? '💥 CRIT -' + damageAmount : '-' + damageAmount,
          enemy.pos,
          isSpecial ? '#fbbf24' : '#ef4444'
        );
        this.particles.emit(enemy.pos, 25, isSpecial ? '#fbbf24' : '#ef4444');

        if (enemy.hp <= 0) {
          if (!this.audioMuted) this.audio.playExplosion();
          this.quests.onKillEnemy('enemy');
          this.enemiesKilled++;

          const killPoints = enemy.isBoss ? 500 : (this.dungeonLevel === 1 ? 50 : this.dungeonLevel === 2 ? 75 : 100);
          this.score += killPoints;
          this.levelScore += killPoints;
          this.gold += enemy.isBoss ? 250 : 45;
          this.xp += enemy.isBoss ? 300 : 50;

          this.addFloatingText('+' + killPoints + ' SCORE ⭐', this.playerPos, '#fbbf24');

          // Check Level 1 -> Level 2 transition
          if (this.dungeonLevel === 1 && this.levelScore >= this.targetScoreLevel1) {
            this.enemies.splice(idx, 1);
            this.advanceToLevel(2);
            return;
          }

          // Check Level 2 -> Level 3 transition
          if (this.dungeonLevel === 2 && this.levelScore >= this.targetScoreLevel2) {
            this.enemies.splice(idx, 1);
            this.advanceToLevel(3);
            return;
          }

          // Check Level 3 Boss defeat -> Complete Game!
          if (this.dungeonLevel === 3 && enemy.isBoss) {
            this.isBossDefeated = true;
            this.enemies.splice(idx, 1);
            this.triggerVictory();
            return;
          }

          // Hero Level up progression
          if (this.xp >= this.maxXp) {
            this.level++;
            this.xp -= this.maxXp;
            this.maxXp = Math.floor(this.maxXp * 1.5);
            this.playerMaxHp += 25;
            this.playerHp = this.playerMaxHp;
            this.showToast('🌟 LEVEL UP! You reached Hero Level ' + this.level + '!');
          }

          this.enemies.splice(idx, 1);
        }
      }
    }
  }

  public advanceToLevel(nextLevel: number): void {
    if (!this.audioMuted) this.audio.playPickup();
    this.triggerScreenShake(15);
    this.particles.emit(this.playerPos, 80, '#fbbf24');
    
    // Heal player between levels
    this.playerHp = this.playerMaxHp;
    this.playerResource = this.playerMaxResource;

    this.loadDungeonLevel(nextLevel);

    if (nextLevel === 2) {
      this.showToast('🔥 LEVEL 1 COMPLETE! Entering Level 2: Inferno Caverns (Target: ' + this.targetScoreLevel2 + ' Score)');
      this.addFloatingText('🔥 LEVEL 2: INFERNO CAVERNS', this.playerPos, '#f97316');
    } else if (nextLevel === 3) {
      this.showToast('👑 LEVEL 2 COMPLETE! Entering Final Level 3: Slay the Abyssal Demon Overlord!');
      this.addFloatingText('👑 FINAL BOSS LEVEL: ABYSSAL THRONE', this.playerPos, '#ef4444');
    }
  }

  public triggerVictory(): void {
    if (!this.audioMuted) {
      this.audio.playExplosion();
      this.audio.playPickup();
    }
    this.triggerScreenShake(30);
    this.particles.emit(this.playerPos, 150, '#fbbf24');
    this.stateEngine.setState('Paused');

    const statsEl = document.getElementById('victory-stats-container');
    if (statsEl) {
      statsEl.innerHTML = `
        <div style="color: #4ade80; font-size: 20px; font-weight: bold; margin-bottom: 10px;">👑 REALM LIBERATED! 👑</div>
        <div>🏆 <b>Total Score:</b> ${this.score} pts</div>
        <div>💀 <b>Enemies Slain:</b> ${this.enemiesKilled}</div>
        <div>🛡️ <b>Hero Class:</b> ${this.selectedClass} (Level ${this.level})</div>
        <div>💰 <b>Total Gold:</b> ${this.gold}</div>
      `;
    }

    this.showScreen('screen-victory');
    this.showToast('🏆 CONGRATULATIONS! You defeated the Big Boss and completed Omniquest!');
  }

  private update(dt: number): void {
    if (this.stateEngine.getState() === 'Paused' || this.stateEngine.getState() === 'MainMenu') return;

    // Automatic Energy Regeneration (+20 Energy / sec)
    if (this.playerResource < this.playerMaxResource) {
      this.playerResource = Math.min(this.playerMaxResource, this.playerResource + 20 * dt);
    }

    // Continuous Enemy Spawning Wave System (Never run out of enemies!)
    this.spawnTimer += dt;
    const maxEnemies = this.dungeonLevel === 3 ? 5 : 8;
    const regularEnemiesCount = this.enemies.filter(e => !e.isBoss).length;

    if (this.spawnTimer >= 3.0 && regularEnemiesCount < maxEnemies) {
      this.spawnTimer = 0;
      this.spawnEnemyPatrol();
    }

    // Cooldown management for skills
    this.heroSkills.forEach(s => {
      if (s.cooldown > 0) {
        s.cooldown = Math.max(0, s.cooldown - dt);
      }
    });

    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - 30 * dt);
    }

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

    // ENEMY AI CHASE & ATTACK
    this.enemies.forEach(enemy => {
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
        this.addFloatingText(enemy.isBoss ? '-25 HP 💥' : '-12 HP 💔', this.playerPos, '#ef4444');
        this.particles.emit(this.playerPos, enemy.isBoss ? 25 : 15, '#ef4444');
        this.triggerScreenShake(enemy.isBoss ? 12 : 6);

        if (this.playerHp <= 0) {
          this.showToast('💀 YOU DIED! Respawning in dungeon...');
          this.playerHp = this.playerMaxHp;
          this.playerPos.set(200, 200);
        }
      }
    });

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

        this.score += 25;
        this.levelScore += 25;
        this.addFloatingText('+25 SCORE ⭐', this.playerPos, '#fbbf24');
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
    
    let shakeX = (Math.random() - 0.5) * this.screenShake;
    let shakeY = (Math.random() - 0.5) * this.screenShake;
    const camX = width / 2 - this.playerPos.x + shakeX;
    const camY = height / 2 - this.playerPos.y + shakeY;
    this.ctx.translate(camX, camY);

    // Dungeon floor
    const tileSize = 32;
    const grid = this.dungeonData.grid;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const x = c * tileSize;
        const y = r * tileSize;
        if (grid[r][c] === 0) {
          const floorColor = this.dungeonLevel === 1 
            ? ((r + c) % 2 === 0 ? '#1e293b' : '#0f172a')
            : this.dungeonLevel === 2
            ? ((r + c) % 2 === 0 ? '#451a03' : '#271003')
            : ((r + c) % 2 === 0 ? '#311042' : '#190624');
          this.ctx.fillStyle = floorColor;
          this.ctx.fillRect(x, y, tileSize, tileSize);
          this.ctx.strokeStyle = this.dungeonLevel === 1 ? '#334155' : this.dungeonLevel === 2 ? '#78350f' : '#581c87';
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

    // Enemies with clear hit flash & visible HP decrease
    this.enemies.forEach(e => {
      const eRadius = e.size || 16;
      this.ctx.beginPath();
      this.ctx.arc(e.pos.x, e.pos.y, eRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = e.flashTimer > 0 ? '#ffffff' : e.color;
      this.ctx.shadowColor = e.isBoss ? '#ef4444' : e.color;
      this.ctx.shadowBlur = e.isBoss ? 35 : (e.flashTimer > 0 ? 25 : 12);
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      if (e.isBoss) {
        // Glowing Boss Ring
        this.ctx.beginPath();
        this.ctx.arc(e.pos.x, e.pos.y, eRadius + 6, 0, Math.PI * 2);
        this.ctx.strokeStyle = '#fbbf24';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
      }

      // Enemy Name
      this.ctx.font = e.isBoss ? 'bold 13px Inter' : 'bold 11px Inter';
      this.ctx.fillStyle = e.isBoss ? '#fbbf24' : '#f87171';
      this.ctx.fillText(e.name + ' (' + Math.max(0, Math.round(e.hp)) + '/' + e.maxHp + ')', e.pos.x - (e.isBoss ? 110 : 45), e.pos.y - (eRadius + 12));

      // Enemy HP Bar Background & Red Bar
      const barW = e.isBoss ? 120 : 60;
      this.ctx.fillStyle = 'rgba(0,0,0,0.8)';
      this.ctx.fillRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), barW, 6);
      this.ctx.fillStyle = '#ef4444';
      const hpWidth = Math.max(0, (e.hp / e.maxHp) * barW);
      this.ctx.fillRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), hpWidth, 6);
      this.ctx.strokeStyle = e.isBoss ? '#fbbf24' : '#ffffff';
      this.ctx.lineWidth = 1;
      this.ctx.strokeRect(e.pos.x - barW / 2, e.pos.y - (eRadius + 6), barW, 6);
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
    const hudY = 15;

    // Main HUD Container
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(15, hudY, 410, 105);
    this.ctx.strokeRect(15, hudY, 410, 105);

    // Hero Name & Level
    this.ctx.font = 'bold 14px Inter';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText('HERO: ' + this.selectedClass.toUpperCase() + ' (Lvl ' + this.level + ')', 30, hudY + 22);

    // Dungeon Campaign Level Badge
    this.ctx.fillStyle = this.dungeonLevel === 3 ? '#ef4444' : '#fbbf24';
    this.ctx.font = 'bold 13px Inter';
    const levelLabel = this.dungeonLevel === 3 ? 'DUNGEON: LVL 3/3 (BOSS)' : 'DUNGEON: LVL ' + this.dungeonLevel + '/3';
    this.ctx.fillText(levelLabel, 230, hudY + 22);

    // HP Bar
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(30, hudY + 30, 190, 13);
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(30, hudY + 30, (this.playerHp / this.playerMaxHp) * 190, 13);
    this.ctx.font = 'bold 10px Inter';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('HP: ' + Math.round(this.playerHp) + ' / ' + this.playerMaxHp, 35, hudY + 40);

    // Energy Bar
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(30, hudY + 47, 190, 13);
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.fillRect(30, hudY + 47, (this.playerResource / this.playerMaxResource) * 190, 13);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('ENERGY: ' + Math.round(this.playerResource) + ' / ' + this.playerMaxResource, 35, hudY + 57);

    // Level Progress / Goal Bar
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.ctx.fillRect(30, hudY + 65, 375, 20);
    this.ctx.fillStyle = this.dungeonLevel === 3 ? '#ef4444' : '#fbbf24';
    const targetScore = this.dungeonLevel === 1 ? this.targetScoreLevel1 : this.dungeonLevel === 2 ? this.targetScoreLevel2 : 1;
    const scoreProgress = this.dungeonLevel === 3 ? 1 : Math.min(1, this.levelScore / targetScore);
    this.ctx.fillRect(30, hudY + 65, scoreProgress * 375, 20);
    
    this.ctx.fillStyle = '#0f172a';
    this.ctx.font = 'bold 11px Inter';
    const scoreText = this.dungeonLevel === 1 
      ? `LEVEL 1 GOAL: ${this.levelScore} / ${this.targetScoreLevel1} Score to reach Level 2`
      : this.dungeonLevel === 2
      ? `LEVEL 2 GOAL: ${this.levelScore} / ${this.targetScoreLevel2} Score to reach Level 3`
      : `LEVEL 3: DEFEAT THE BIG BOSS TO COMPLETE THE GAME!`;
    this.ctx.fillText(scoreText, 36, hudY + 79);

    // Gold & Total Score
    this.ctx.font = 'bold 11px Inter';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText('💰 ' + this.gold + ' Gold', 230, hudY + 40);
    this.ctx.fillText('⭐ Score: ' + this.score, 230, hudY + 57);

    // Boss Bar at Top Center if Boss exists in Level 3
    const boss = this.enemies.find(e => e.isBoss);
    if (boss && this.dungeonLevel === 3) {
      const bWidth = 460;
      const bX = width / 2 - bWidth / 2;
      const bY = 15;
      this.ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
      this.ctx.fillRect(bX, bY, bWidth, 44);
      this.ctx.strokeStyle = '#ef4444';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(bX, bY, bWidth, 44);

      this.ctx.fillStyle = 'rgba(0,0,0,0.7)';
      this.ctx.fillRect(bX + 12, bY + 22, bWidth - 24, 15);
      this.ctx.fillStyle = '#ef4444';
      const bHpRatio = Math.max(0, boss.hp / boss.maxHp);
      this.ctx.fillRect(bX + 12, bY + 22, (bWidth - 24) * bHpRatio, 15);

      this.ctx.font = 'bold 12px Inter';
      this.ctx.fillStyle = '#fbbf24';
      this.ctx.fillText('👑 ABYSSAL DEMON OVERLORD (BOSS HP: ' + Math.round(boss.hp) + ' / ' + boss.maxHp + ')', bX + 20, bY + 16);
    }

    // Minimap
    const mmSize = 120;
    const mmX = width - mmSize - 15;
    const mmY = 15;
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

    // Action Bar in Canvas
    const barWidth = 430;
    const barX = width / 2 - barWidth / 2;
    const barY = height - 65;

    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
    this.ctx.fillRect(barX, barY, barWidth, 55);
    this.ctx.strokeRect(barX, barY, barWidth, 55);

    for (let i = 0; i < 5; i++) {
      const skill = this.heroSkills[i];
      const slotX = barX + 12 + i * 82;
      const slotY = barY + 8;

      this.ctx.fillStyle = skill.cooldown > 0 ? 'rgba(30, 41, 59, 0.6)' : 'rgba(30, 41, 59, 0.95)';
      this.ctx.fillRect(slotX, slotY, 74, 40);
      this.ctx.strokeStyle = skill.cooldown > 0 ? '#475569' : '#38bdf8';
      this.ctx.strokeRect(slotX, slotY, 74, 40);

      this.ctx.font = '15px Inter';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(skill.icon + ' (' + skill.hotkey + ')', slotX + 10, slotY + 24);

      if (skill.cooldown > 0) {
        this.ctx.fillStyle = 'rgba(239, 68, 68, 0.85)';
        this.ctx.font = 'bold 12px Inter';
        this.ctx.fillText(skill.cooldown.toFixed(1) + 's', slotX + 22, slotY + 24);
      }
    }
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
