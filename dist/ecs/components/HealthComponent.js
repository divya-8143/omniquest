"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthComponent = void 0;
class HealthComponent {
    current;
    max;
    armor;
    shield;
    type = 'Health';
    constructor(current = 100, max = 100, armor = 0, shield = 0) {
        this.current = current;
        this.max = max;
        this.armor = armor;
        this.shield = shield;
    }
    takeDamage(amount) {
        const effectiveDamage = Math.max(1, amount - this.armor);
        this.current = Math.max(0, this.current - effectiveDamage);
        return effectiveDamage;
    }
    heal(amount) {
        this.current = Math.min(this.max, this.current + amount);
    }
    isDead() { return this.current <= 0; }
}
exports.HealthComponent = HealthComponent;
//# sourceMappingURL=HealthComponent.js.map