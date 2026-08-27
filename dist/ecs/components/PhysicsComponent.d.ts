import { Component } from '../Component';
import { Vector2D } from '../../core/Math2D';
export declare class PhysicsComponent implements Component {
    velocity: Vector2D;
    acceleration: Vector2D;
    mass: number;
    friction: number;
    isStatic: boolean;
    readonly type = "Physics";
    constructor(velocity?: Vector2D, acceleration?: Vector2D, mass?: number, friction?: number, isStatic?: boolean);
}
