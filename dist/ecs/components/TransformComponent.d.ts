import { Component } from '../Component';
import { Vector2D } from '../../core/Math2D';
export declare class TransformComponent implements Component {
    position: Vector2D;
    rotation: number;
    scale: Vector2D;
    readonly type = "Transform";
    constructor(position?: Vector2D, rotation?: number, scale?: Vector2D);
}
