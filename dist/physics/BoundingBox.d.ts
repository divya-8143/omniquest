import { Vector2D } from '../core/Math2D';
export declare class AABB {
    min: Vector2D;
    max: Vector2D;
    constructor(min?: Vector2D, max?: Vector2D);
    intersects(other: AABB): boolean;
    contains(point: Vector2D): boolean;
}
