/**
 * Omniquest: Realm of Shadows - Floating Combat Text (FCT) & Damage Number Physics Engine
 * Parabolic arching damage numbers, critical hit scales, status text, and color school differentiation.
 */

import { Vector2D } from '../../core/Math2D';

export interface FloatingTextElement {
  id: string;
  text: string;
  position: Vector2D;
  velocity: Vector2D;
  color: string;
  fontSize: number;
  alpha: number;
  life: number;
  maxLife: number;
  isCrit: boolean;
  scale: number;
}

export class CombatFloatingCombatTextEngine {
  private static instance: CombatFloatingCombatTextEngine;
  private elements: FloatingTextElement[] = [];

  private constructor() {}

  public static getInstance(): CombatFloatingCombatTextEngine {
    if (!CombatFloatingCombatTextEngine.instance) {
      CombatFloatingCombatTextEngine.instance = new CombatFloatingCombatTextEngine();
    }
    return CombatFloatingCombatTextEngine.instance;
  }

  public spawnDamageText(text: string, worldPos: Vector2D, color: string, isCrit: boolean = false): void {
    const angle = (Math.random() * 0.6 - 0.3) - Math.PI / 2; // arch upward
    const speed = isCrit ? 90 : 65;

    this.elements.push({
      id: 'fct_' + Math.random().toString(36).substr(2, 7),
      text,
      position: new Vector2D(worldPos.x + (Math.random() * 20 - 10), worldPos.y - 15),
      velocity: new Vector2D(Math.cos(angle) * speed, Math.sin(angle) * speed),
      color,
      fontSize: isCrit ? 22 : 14,
      alpha: 1.0,
      life: 0.9,
      maxLife: 0.9,
      isCrit,
      scale: isCrit ? 1.4 : 1.0
    });
  }

  public update(dt: number): void {
    for (let i = this.elements.length - 1; i >= 0; i--) {
      const el = this.elements[i];
      el.life -= dt;

      if (el.life <= 0) {
        this.elements.splice(i, 1);
        continue;
      }

      el.velocity.y += 120 * dt; // gravity deceleration
      el.position.addScaled(el.velocity, dt);
      el.alpha = Math.max(0, el.life / el.maxLife);
    }
  }

  public render(ctx: CanvasRenderingContext2D, camPos: Vector2D, canvasWidth: number, canvasHeight: number): void {
    ctx.save();
    for (const el of this.elements) {
      const screenX = el.position.x - camPos.x + canvasWidth / 2;
      const screenY = el.position.y - camPos.y + canvasHeight / 2;

      ctx.globalAlpha = el.alpha;
      ctx.fillStyle = el.color;
      ctx.font = `${el.isCrit ? 'bold ' : ''}${el.fontSize}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = '#000000';
      ctx.shadowBlur = el.isCrit ? 8 : 4;

      ctx.fillText(el.text, screenX, screenY);
    }
    ctx.restore();
  }
}
