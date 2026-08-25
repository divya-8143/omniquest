import { Vector2D } from '../core/Math2D';

export class AABB {
  constructor(
    public min: Vector2D = new Vector2D(),
    public max: Vector2D = new Vector2D()
  ) {}

  intersects(other: AABB): boolean {
    return !(
      this.max.x < other.min.x ||
      this.min.x > other.max.x ||
      this.max.y < other.min.y ||
      this.min.y > other.max.y
    );
  }

  contains(point: Vector2D): boolean {
    return (
      point.x >= this.min.x &&
      point.x <= this.max.x &&
      point.y >= this.min.y &&
      point.y <= this.max.y
    );
  }
}
