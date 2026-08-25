import { Vector2D } from '../core/Math2D';

export interface Particle {
  position: Vector2D;
  velocity: Vector2D;
  color: string;
  size: number;
  life: number;
  maxLife: number;
}

export class ParticleEngine {
  private particles: Particle[] = [];

  emit(position: Vector2D, count: number = 10, color: string = '#ff9900'): void {
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

  update(dt: number): void {
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

  getParticles(): readonly Particle[] {
    return this.particles;
  }
}
