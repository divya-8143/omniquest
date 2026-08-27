"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombatCalculator = void 0;
class CombatCalculator {
    static calculateDamage(attacker, defender, element = 'physical') {
        const isCrit = Math.random() < attacker.critChance;
        let rawDamage = attacker.attack * (isCrit ? attacker.critMultiplier : 1.0);
        let armor = defender.defense;
        if (element === 'fire')
            armor += defender.fireResist * 0.5;
        if (element === 'frost')
            armor += defender.frostResist * 0.5;
        // Mitigation formula: Damage = Raw * (100 / (100 + Armor))
        const mitigationRatio = 100 / (100 + Math.max(0, armor));
        const finalDamage = Math.max(1, Math.round(rawDamage * mitigationRatio));
        const mitigated = Math.round(rawDamage - finalDamage);
        return { finalDamage, isCrit, mitigated };
    }
    static processStatusQueue(effects, dt) {
        let damageOverTime = 0;
        let stunActive = false;
        for (let i = effects.length - 1; i >= 0; i--) {
            const effect = effects[i];
            effect.duration -= dt;
            if (effect.type === 'poison' || effect.type === 'burn') {
                damageOverTime += effect.potency * dt;
            }
            else if (effect.type === 'stun') {
                stunActive = true;
            }
            if (effect.duration <= 0) {
                effects.splice(i, 1);
            }
        }
        return { damageOverTime: Math.round(damageOverTime), stunActive };
    }
}
exports.CombatCalculator = CombatCalculator;
//# sourceMappingURL=CombatCalculator.js.map