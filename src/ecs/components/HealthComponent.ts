import { Component } from '../Component';

export class HealthComponent implements Component {
  readonly type = 'Health';
  constructor(
    public current: number = 100,
    public max: number = 100,
    public armor: number = 0,
    public shield: number = 0
  ) {}

  takeDamage(amount: number): number {
    const effectiveDamage = Math.max(1, amount - this.armor);
    this.current = Math.max(0, this.current - effectiveDamage);
    return effectiveDamage;
  }

  heal(amount: number): void {
    this.current = Math.min(this.max, this.current + amount);
  }

  isDead(): boolean { return this.current <= 0; }
}
