import { Vector2D } from '../core/Math2D';
export declare class Camera {
    position: Vector2D;
    viewportSize: Vector2D;
    zoom: number;
    private shakeTimer;
    private shakeIntensity;
    follow(target: Vector2D, lerpFactor?: number): void;
    triggerShake(intensity: number, duration: number): void;
    update(dt: number): void;
    getOffset(): Vector2D;
}
