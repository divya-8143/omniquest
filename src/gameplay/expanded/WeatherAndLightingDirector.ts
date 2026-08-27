/**
 * Omniquest: Realm of Shadows - Weather, Atmospheric Shadows & Dynamic Ambient Lighting
 * Procedural torch flicker, ambient occlusion, fog of war, shadow casting rays, and ambient weather states.
 */

import { Vector2D } from '../../core/Math2D';

export interface DynamicLightSource {
  id: string;
  position: Vector2D;
  baseRadius: number;
  currentRadius: number;
  color: string;
  intensity: number;
  flickerSpeed: number;
  flickerTimer: number;
}

export class WeatherAndLightingDirector {
  private static instance: WeatherAndLightingDirector;
  private lights: Map<string, DynamicLightSource> = new Map();
  private ambientColor: string = '#030712';
  private weatherState: 'Clear' | 'DrippingCatacombs' | 'EmberStorm' | 'AbyssalFog' = 'Clear';

  private constructor() {}

  public static getInstance(): WeatherAndLightingDirector {
    if (!WeatherAndLightingDirector.instance) {
      WeatherAndLightingDirector.instance = new WeatherAndLightingDirector();
    }
    return WeatherAndLightingDirector.instance;
  }

  public addLight(id: string, pos: Vector2D, radius: number, color: string, intensity: number = 1.0): void {
    this.lights.set(id, {
      id,
      position: pos.clone(),
      baseRadius: radius,
      currentRadius: radius,
      color,
      intensity,
      flickerSpeed: Math.random() * 4 + 4,
      flickerTimer: Math.random() * Math.PI
    });
  }

  public update(dt: number): void {
    this.lights.forEach(light => {
      light.flickerTimer += dt * light.flickerSpeed;
      const flickerOffset = Math.sin(light.flickerTimer) * 6 + Math.cos(light.flickerTimer * 1.7) * 3;
      light.currentRadius = Math.max(10, light.baseRadius + flickerOffset);
    });
  }

  public setDungeonTierAtmosphere(tier: number): void {
    if (tier === 1) {
      this.ambientColor = '#030712';
      this.weatherState = 'DrippingCatacombs';
    } else if (tier === 2) {
      this.ambientColor = '#1a0500';
      this.weatherState = 'EmberStorm';
    } else {
      this.ambientColor = '#0f0217';
      this.weatherState = 'AbyssalFog';
    }
  }

  public renderLighting(ctx: CanvasRenderingContext2D, width: number, height: number, camPos: Vector2D): void {
    ctx.save();
    ctx.globalCompositeOperation = 'source-over';

    this.lights.forEach(light => {
      const screenX = light.position.x - camPos.x + width / 2;
      const screenY = light.position.y - camPos.y + height / 2;

      const grad = ctx.createRadialGradient(screenX, screenY, 0, screenX, screenY, light.currentRadius);
      grad.addColorStop(0, light.color);
      grad.addColorStop(1, 'transparent');

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(screenX, screenY, light.currentRadius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }
}
