/**
 * Omniquest: Realm of Shadows - Character Stat Attributes & Diminishing Returns Matrix
 * Primary attributes (Strength, Agility, Intelligence, Vitality, Wisdom, Luck) and secondary derivative ratings.
 */

export interface CharacterAttributes {
  strength: number;
  agility: number;
  intelligence: number;
  vitality: number;
  wisdom: number;
  luck: number;
}

export interface DerivedCombatStats {
  maxHealth: number;
  maxEnergy: number;
  physicalAttackPower: number;
  spellPower: number;
  armorRating: number;
  dodgeChancePct: number;
  critChancePct: number;
  critMultiplier: number;
  healthRegenPerSec: number;
  energyRegenPerSec: number;
  movementSpeedPixelsPerSec: number;
}

export class CharacterStatScalingMatrix {
  public static calculateDerivedStats(attrs: CharacterAttributes, heroClass: string, level: number): DerivedCombatStats {
    const baseHp = heroClass === 'Warrior' ? 120 : heroClass === 'Paladin' ? 110 : 80;
    const baseEnergy = heroClass === 'Mage' ? 120 : 80;

    const maxHealth = baseHp + (level * 15) + (attrs.vitality * 12) + (attrs.strength * 2);
    const maxEnergy = baseEnergy + (level * 10) + (attrs.wisdom * 8) + (attrs.intelligence * 4);

    const physicalAttackPower = (attrs.strength * 2.2) + (attrs.agility * 1.5);
    const spellPower = (attrs.intelligence * 2.5) + (attrs.wisdom * 1.2);
    const armorRating = (attrs.strength * 1.0) + (attrs.vitality * 0.8);

    // Diminishing returns on crit & dodge
    const rawCrit = (attrs.agility * 0.25) + (attrs.luck * 0.35);
    const critChancePct = Math.min(75, 5 + (rawCrit / (rawCrit + 100)) * 50);

    const rawDodge = (attrs.agility * 0.3);
    const dodgeChancePct = Math.min(50, (rawDodge / (rawDodge + 120)) * 40);

    const critMultiplier = 1.5 + (attrs.agility * 0.01) + (attrs.luck * 0.008);

    const healthRegenPerSec = 1.0 + (attrs.vitality * 0.15);
    const energyRegenPerSec = 5.0 + (attrs.wisdom * 0.4);

    const baseSpeed = heroClass === 'Rogue' ? 220 : 180;
    const movementSpeedPixelsPerSec = baseSpeed + (attrs.agility * 0.5);

    return {
      maxHealth: Math.round(maxHealth),
      maxEnergy: Math.round(maxEnergy),
      physicalAttackPower: Math.round(physicalAttackPower),
      spellPower: Math.round(spellPower),
      armorRating: Math.round(armorRating),
      dodgeChancePct: parseFloat(critChancePct.toFixed(1)),
      critChancePct: parseFloat(critChancePct.toFixed(1)),
      critMultiplier: parseFloat(critMultiplier.toFixed(2)),
      healthRegenPerSec: parseFloat(healthRegenPerSec.toFixed(1)),
      energyRegenPerSec: parseFloat(energyRegenPerSec.toFixed(1)),
      movementSpeedPixelsPerSec: Math.round(movementSpeedPixelsPerSec)
    };
  }
}
