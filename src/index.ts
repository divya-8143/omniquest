import { Vector2D } from './core/Math2D';
import { DungeonGenerator } from './procgen/DungeonGenerator';
import { ParticleEngine } from './graphics/ParticleEngine';
import { AudioSynthesizer } from './audio/AudioSynthesizer';
import { SkillTreeMatrix } from './gameplay/SkillTreeMatrix';
import { QuestManager } from './gameplay/QuestManager';
import { EnemyBestiary } from './gameplay/EnemyDefinitions';

console.log('--- Omniquest 2D Action RPG Engine ---');

class BrowserGameApp {
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private dungeonGen = new DungeonGenerator(40, 40);
  private dungeonData!: { grid: number[][]; rooms: any[] };
  private playerPos = new Vector2D(200, 200);
  private playerVel = new Vector2D();
  private playerHp = 100;
  private playerMaxHp = 100;
  private playerMana = 80;
  private playerMaxMana = 100;
  private gold = 350;
  private level = 5;

  private keys: Set<string> = new Set();
  private particles = new ParticleEngine();
  private audio = new AudioSynthesizer();
  private skills = new SkillTreeMatrix();
  private quests = new QuestManager();
  private enemies: Array<{ pos: Vector2D; hp: number; maxHp: number; name: string; color: string }> = [];

  constructor() {
    if (typeof document === 'undefined') return;
    
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d')!;

    this.dungeonData = this.dungeonGen.generate();
    this.spawnEntities();
    this.setupInputs();
    this.startLoop();
  }

  private spawnEntities(): void {
    if (this.dungeonData.rooms.length > 0) {
      const startRoom = this.dungeonData.rooms[0];
      this.playerPos.set((startRoom.x + startRoom.width / 2) * 32, (startRoom.y + startRoom.height / 2) * 32);
    }

    const enemyDefs = EnemyBestiary.getAllEnemies();
    const colors = ['#ef4444', '#a855f7', '#f59e0b', '#10b981'];

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

  private setupInputs(): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      if (e.key === ' ') {
        this.playerAttack();
      }
      if (e.key === 'e' || e.key === 'E') {
        this.audio.playPickup();
        this.particles.emit(this.playerPos, 25, '#38bdf8');
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.key.toLowerCase());
    });

    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickPos = new Vector2D(e.clientX - rect.left, e.clientY - rect.top);
      this.particles.emit(clickPos, 30, '#f59e0b');
      this.audio.playSwordSwing();
    });
  }

  private playerAttack(): void {
    this.audio.playSwordSwing();
    this.particles.emit(this.playerPos, 40, '#ef4444');
    
    // Damage nearby enemies
    this.enemies.forEach((enemy, idx) => {
      if (enemy.pos.distance(this.playerPos) < 80) {
        enemy.hp -= 35;
        this.particles.emit(enemy.pos, 20, '#fbbf24');
        if (enemy.hp <= 0) {
          this.audio.playExplosion();
          this.quests.onKillEnemy('enemy');
          this.gold += 25;
          this.enemies.splice(idx, 1);
        }
      }
    });
  }

  private update(dt: number): void {
    const speed = 180;
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

    if (Math.random() < 0.05) {
      const randomPos = new Vector2D(
        this.playerPos.x + (Math.random() - 0.5) * 600,
        this.playerPos.y + (Math.random() - 0.5) * 400
      );
      this.particles.emit(randomPos, 1, '#10b981');
    }

    this.particles.update(dt);
  }

  private render(): void {
    const width = this.canvas.width;
    const height = this.canvas.height;

    // Clear background
    this.ctx.fillStyle = '#050608';
    this.ctx.fillRect(0, 0, width, height);

    // Camera transform
    this.ctx.save();
    const camX = width / 2 - this.playerPos.x;
    const camY = height / 2 - this.playerPos.y;
    this.ctx.translate(camX, camY);

    // Render Dungeon Floor & Walls
    const tileSize = 32;
    const grid = this.dungeonData.grid;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        const x = c * tileSize;
        const y = r * tileSize;
        if (grid[r][c] === 0) {
          // Floor
          this.ctx.fillStyle = (r + c) % 2 === 0 ? '#1e293b' : '#0f172a';
          this.ctx.fillRect(x, y, tileSize, tileSize);
          this.ctx.strokeStyle = '#334155';
          this.ctx.strokeRect(x, y, tileSize, tileSize);
        } else {
          // Wall
          this.ctx.fillStyle = '#020617';
          this.ctx.fillRect(x, y, tileSize, tileSize);
        }
      }
    }

    // Render Enemies
    this.enemies.forEach(e => {
      this.ctx.beginPath();
      this.ctx.arc(e.pos.x, e.pos.y, 14, 0, Math.PI * 2);
      this.ctx.fillStyle = e.color;
      this.ctx.shadowColor = e.color;
      this.ctx.shadowBlur = 12;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;

      // Enemy Name & HP bar
      this.ctx.font = '11px Segoe UI';
      this.ctx.fillStyle = '#f87171';
      this.ctx.fillText(e.name, e.pos.x - 30, e.pos.y - 22);
      this.ctx.fillStyle = 'rgba(0,0,0,0.6)';
      this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, 40, 5);
      this.ctx.fillStyle = '#ef4444';
      this.ctx.fillRect(e.pos.x - 20, e.pos.y - 18, (e.hp / e.maxHp) * 40, 5);
    });

    // Render Particles
    this.particles.getParticles().forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.position.x, p.position.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.color;
      this.ctx.shadowColor = p.color;
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    });

    // Render Player Avatar
    this.ctx.beginPath();
    this.ctx.arc(this.playerPos.x, this.playerPos.y, 16, 0, Math.PI * 2);
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.shadowColor = '#38bdf8';
    this.ctx.shadowBlur = 20;
    this.ctx.fill();
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.stroke();
    this.ctx.shadowBlur = 0;

    // Player Direction Indicator
    this.ctx.beginPath();
    this.ctx.moveTo(this.playerPos.x, this.playerPos.y);
    this.ctx.lineTo(this.playerPos.x + 22, this.playerPos.y);
    this.ctx.strokeStyle = '#60a5fa';
    this.ctx.lineWidth = 4;
    this.ctx.stroke();

    this.ctx.restore();

    // Overlay UI
    this.renderHUD(width, height);
  }

  private renderHUD(width: number, height: number): void {
    // HUD Frame
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    this.ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
    this.ctx.lineWidth = 2;

    this.ctx.fillRect(20, 20, 360, 95);
    this.ctx.strokeRect(20, 20, 360, 95);

    // Title & Level
    this.ctx.font = 'bold 18px Segoe UI';
    this.ctx.fillStyle = '#38bdf8';
    this.ctx.fillText('OMNIQUEST - Lvl ' + this.level + ' Hero', 35, 45);

    // Health Bar
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(35, 55, 220, 16);
    this.ctx.fillStyle = '#ef4444';
    this.ctx.fillRect(35, 55, (this.playerHp / this.playerMaxHp) * 220, 16);
    this.ctx.font = 'bold 11px Segoe UI';
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('HP: ' + this.playerHp + ' / ' + this.playerMaxHp, 45, 67);

    // Mana Bar
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    this.ctx.fillRect(35, 76, 220, 14);
    this.ctx.fillStyle = '#3b82f6';
    this.ctx.fillRect(35, 76, (this.playerMana / this.playerMaxMana) * 220, 14);
    this.ctx.fillStyle = '#ffffff';
    this.ctx.fillText('Mana: ' + this.playerMana + ' / ' + this.playerMaxMana, 45, 87);

    // Gold
    this.ctx.font = 'bold 14px Segoe UI';
    this.ctx.fillStyle = '#fbbf24';
    this.ctx.fillText('💰 ' + this.gold + ' Gold', 270, 70);

    // Minimap
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

    // Controls Legend Footer
    this.ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    this.ctx.fillRect(20, height - 50, width - 40, 35);
    this.ctx.strokeRect(20, height - 50, width - 40, 35);
    this.ctx.font = '13px Segoe UI';
    this.ctx.fillStyle = '#94a3b8';
    this.ctx.fillText(
      '🎮 Controls: WASD / Arrow Keys = Move | SPACE = Attack | E = Special SFX / Pickup | Click = Swing Weapon & Emit Particles',
      35, height - 28
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
    new BrowserGameApp();
  });
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    new BrowserGameApp();
  }
}
