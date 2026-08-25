import { Vector2D } from '../core/Math2D';

export class Camera {
  public position: Vector2D = new Vector2D();
  public viewportSize: Vector2D = new Vector2D(1280, 720);
  public zoom: number = 1.0;
  private shakeTimer: number = 0;
  private shakeIntensity: number = 0;

  follow(target: Vector2D, lerpFactor: number = 0.1): void {
    const desiredX = target.x - this.viewportSize.x / 2;
    const desiredY = target.y - this.viewportSize.y / 2;
    this.position.x += (desiredX - this.position.x) * lerpFactor;
    this.position.y += (desiredY - this.position.y) * lerpFactor;
  }

  triggerShake(intensity: number, duration: number): void {
    this.shakeIntensity = intensity;
    this.shakeTimer = duration;
  }

  update(dt: number): void {
    if (this.shakeTimer > 0) {
      this.shakeTimer -= dt;
      if (this.shakeTimer <= 0) {
        this.shakeIntensity = 0;
      }
    }
  }

  getOffset(): Vector2D {
    const offsetX = (Math.random() - 0.5) * 2 * this.shakeIntensity;
    const offsetY = (Math.random() - 0.5) * 2 * this.shakeIntensity;
    return new Vector2D(this.position.x + offsetX, this.position.y + offsetY);
  }
}
