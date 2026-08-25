export interface StatusEffect {
  id: string;
  type: 'poison' | 'burn' | 'stun' | 'regeneration' | 'buff_attack';
  duration: number; // in seconds
  potency: number;
}

export interface EntityCombatStats {
  attack: number;
  defense: number;
  critChance: number;   // 0 to 1
  critMultiplier: number; // e.g. 1.5
  fireResist: number;
  frostResist: number;
}

export class CombatCalculator {
  static calculateDamage(
    attacker: EntityCombatStats,
    defender: EntityCombatStats,
    element: 'physical' | 'fire' | 'frost' = 'physical'
  ): { finalDamage: number; isCrit: boolean; mitigated: number } {
    const isCrit = Math.random() < attacker.critChance;
    let rawDamage = attacker.attack * (isCrit ? attacker.critMultiplier : 1.0);

    let armor = defender.defense;
    if (element === 'fire') armor += defender.fireResist * 0.5;
    if (element === 'frost') armor += defender.frostResist * 0.5;

    // Mitigation formula: Damage = Raw * (100 / (100 + Armor))
    const mitigationRatio = 100 / (100 + Math.max(0, armor));
    const finalDamage = Math.max(1, Math.round(rawDamage * mitigationRatio));
    const mitigated = Math.round(rawDamage - finalDamage);

    return { finalDamage, isCrit, mitigated };
  }

  static processStatusQueue(effects: StatusEffect[], dt: number): { damageOverTime: number; stunActive: boolean } {
    let damageOverTime = 0;
    let stunActive = false;

    for (let i = effects.length - 1; i >= 0; i--) {
      const effect = effects[i];
      effect.duration -= dt;

      if (effect.type === 'poison' || effect.type === 'burn') {
        damageOverTime += effect.potency * dt;
      } else if (effect.type === 'stun') {
        stunActive = true;
      }

      if (effect.duration <= 0) {
        effects.splice(i, 1);
      }
    }

    return { damageOverTime: Math.round(damageOverTime), stunActive };
  }
}
