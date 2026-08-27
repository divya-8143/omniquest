import { Component } from '../Component';
export declare class HealthComponent implements Component {
    current: number;
    max: number;
    armor: number;
    shield: number;
    readonly type = "Health";
    constructor(current?: number, max?: number, armor?: number, shield?: number);
    takeDamage(amount: number): number;
    heal(amount: number): void;
    isDead(): boolean;
}
