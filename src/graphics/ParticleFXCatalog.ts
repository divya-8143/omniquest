/**
 * Omniquest: Realm of Shadows - Particle FX & Dynamic Spell Visuals Catalog
 * Procedural emitters, vortex spirals, meteor blast waves, and particle physics matrices.
 */

import { Vector2D } from '../core/Math2D';

export interface VisualParticle {
  pos: Vector2D;
  vel: Vector2D;
  accel: Vector2D;
  color: string;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  shape: 'circle' | 'spark' | 'ring' | 'star' | 'ray' | 'ember' | 'smoke';
  glowBlur: number;
}

export class ParticleFXCatalog {
  private particles: VisualParticle[] = [];

  public emitBurst(
    origin: Vector2D,
    count: number,
    color: string,
    speedMax: number = 100,
    shape: 'circle' | 'spark' | 'ring' | 'star' | 'ray' | 'ember' | 'smoke' = 'spark'
  ): void {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 0.7 + 0.3) * speedMax;
      const life = Math.random() * 0.4 + 0.4;

      this.particles.push({
        pos: origin.clone(),
        vel: new Vector2D(Math.cos(angle) * speed, Math.sin(angle) * speed),
        accel: new Vector2D(0, 40), // gravity
        color,
        size: Math.random() * 3 + 2,
        alpha: 1.0,
        life,
        maxLife: life,
        shape,
        glowBlur: 10
      });
    }
  }

  public emitVortex(origin: Vector2D, count: number, color: string): void {
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 60;
      const pPos = new Vector2D(origin.x + Math.cos(angle) * radius, origin.y + Math.sin(angle) * radius);
      const tangentVel = new Vector2D(-Math.sin(angle) * 120, Math.cos(angle) * 120);

      this.particles.push({
        pos: pPos,
        vel: tangentVel,
        accel: origin.clone().sub(pPos).normalize().scale(80), // inward pull
        color,
        size: 3.5,
        alpha: 1.0,
        life: 0.8,
        maxLife: 0.8,
        shape: 'star',
        glowBlur: 15
      });
    }
  }

  public update(dt: number): void {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      p.vel.addScaled(p.accel, dt);
      p.pos.addScaled(p.vel, dt);
      p.alpha = Math.max(0, p.life / p.maxLife);
    }
  }

  public render(ctx: CanvasRenderingContext2D): void {
    for (const p of this.particles) {
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = p.glowBlur;

      ctx.beginPath();
      ctx.arc(p.pos.x, p.pos.y, p.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }
  }

  public getParticleCount(): number {
    return this.particles.length;
  }
}
