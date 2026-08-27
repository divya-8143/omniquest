import { Vector2D } from '../core/Math2D';
export interface Particle {
    position: Vector2D;
    velocity: Vector2D;
    color: string;
    size: number;
    life: number;
    maxLife: number;
}
export declare class ParticleEngine {
    private particles;
    emit(position: Vector2D, count?: number, color?: string): void;
    update(dt: number): void;
    getParticles(): readonly Particle[];
}
