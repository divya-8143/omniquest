import { Component } from '../Component';
import { Vector2D } from '../../core/Math2D';

export class PhysicsComponent implements Component {
  readonly type = 'Physics';
  constructor(
    public velocity: Vector2D = new Vector2D(),
    public acceleration: Vector2D = new Vector2D(),
    public mass: number = 1.0,
    public friction: number = 0.9,
    public isStatic: boolean = false
  ) {}
}
