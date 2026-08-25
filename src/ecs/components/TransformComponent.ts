import { Component } from '../Component';
import { Vector2D } from '../../core/Math2D';

export class TransformComponent implements Component {
  readonly type = 'Transform';
  constructor(
    public position: Vector2D = new Vector2D(),
    public rotation: number = 0,
    public scale: Vector2D = new Vector2D(1, 1)
  ) {}
}
