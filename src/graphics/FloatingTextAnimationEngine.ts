import { Vector2D } from '../core/Math2D';

export interface FloatingTextParticle {
  id: string;
  text: string;
  position: Vector2D;
  velocity: Vector2D;
  color: string;
  fontSize: number;
  alpha: number;
  lifetime: number;
  maxLifetime: number;
  isCrit: boolean;
}

export class FloatingTextAnimationEngine {
  private static instance: FloatingTextAnimationEngine;
  private particles: FloatingTextParticle[] = [];

  public static getInstance(): FloatingTextAnimationEngine {
    if (!FloatingTextAnimationEngine.instance) {
      FloatingTextAnimationEngine.instance = new FloatingTextAnimationEngine();
    }
    return FloatingTextAnimationEngine.instance;
  }

  public spawnDamageText(
    pos: Vector2D,
    damage: number,
    isCrit: boolean = false,
    color: string = '#ffffff'
  ): void {
    const text = isCrit ? `💥 ${damage}!` : `${damage}`;
    this.particles.push({
      id: `ftext_${Date.now()}_${Math.random()}`,
      text,
      position: pos.clone().add(new Vector2D((Math.random() - 0.5) * 20, -10)),
      velocity: new Vector2D((Math.random() - 0.5) * 40, isCrit ? -110 : -75),
      color: isCrit ? '#fbbf24' : color,
      fontSize: isCrit ? 22 : 15,
      alpha: 1.0,
      lifetime: 0.0,
      maxLifetime: isCrit ? 1.4 : 0.9,
      isCrit
    });
  }

  public update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.lifetime += dt;
      p.position.add(p.velocity.clone().scale(dt));
      p.velocity.y += 60 * dt; // gravity arc

      const progress = p.lifetime / p.maxLifetime;
      p.alpha = Math.max(0, 1.0 - progress);

      if (p.lifetime >= p.maxLifetime) {
        this.particles.splice(i, 1);
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D, cameraOffset: Vector2D): void {
    ctx.save();
    for (const p of this.particles) {
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `bold ${p.fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = 4;
      ctx.fillText(p.text, p.position.x - cameraOffset.x, p.position.y - cameraOffset.y);
    }
    ctx.restore();
  }

  public clear(): void {
    this.particles = [];
  }
}
