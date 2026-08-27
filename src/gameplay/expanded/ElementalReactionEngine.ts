/**
 * Omniquest: Realm of Shadows - Elemental Reaction, Resonance & Combo Fusion Matrix
 * Genshin/Divinity-style elemental combos: Vaporize (Fire+Water), Melt (Fire+Ice), Superconduct (Lightning+Ice), Overload (Fire+Lightning), Electro-Charged (Lightning+Water), Swirl, Crystallize.
 */

export interface ElementalReactionResult {
  reactionName: string;
  damageMultiplier: number;
  bonusAreaDamage: number;
  bonusStunDuration: number;
  visualEffectColor: string;
  reactionDescription: string;
}

export class ElementalReactionEngine {
  private static instance: ElementalReactionEngine;

  public static getInstance(): ElementalReactionEngine {
    if (!ElementalReactionEngine.instance) {
      ElementalReactionEngine.instance = new ElementalReactionEngine();
    }
    return ElementalReactionEngine.instance;
  }

  public triggerReaction(existingSchool: string, incomingSchool: string): ElementalReactionResult | null {
    if ((existingSchool === 'Fire' && incomingSchool === 'Frost') || (existingSchool === 'Frost' && incomingSchool === 'Fire')) {
      return {
        reactionName: 'MELT / THERMAL SHATTER',
        damageMultiplier: 2.0,
        bonusAreaDamage: 60,
        bonusStunDuration: 0,
        visualEffectColor: '#f97316',
        reactionDescription: 'Extreme thermal shock shatters enemy defenses for 200% burst damage!'
      };
    }

    if ((existingSchool === 'Fire' && incomingSchool === 'Lightning') || (existingSchool === 'Lightning' && incomingSchool === 'Fire')) {
      return {
        reactionName: 'OVERLOAD DETONATION',
        damageMultiplier: 1.5,
        bonusAreaDamage: 120,
        bonusStunDuration: 1.0,
        visualEffectColor: '#ef4444',
        reactionDescription: 'Unleashes a concussive blast knocking down all adjacent foes!'
      };
    }

    if ((existingSchool === 'Frost' && incomingSchool === 'Lightning') || (existingSchool === 'Lightning' && incomingSchool === 'Frost')) {
      return {
        reactionName: 'SUPERCONDUCT DISRUPTION',
        damageMultiplier: 1.4,
        bonusAreaDamage: 40,
        bonusStunDuration: 0.5,
        visualEffectColor: '#818cf8',
        reactionDescription: 'Reduces enemy physical armor by 40% for 8 seconds!'
      };
    }

    if ((existingSchool === 'Shadow' && incomingSchool === 'Holy') || (existingSchool === 'Holy' && incomingSchool === 'Shadow')) {
      return {
        reactionName: 'COSMIC ANNIHILATION',
        damageMultiplier: 2.5,
        bonusAreaDamage: 150,
        bonusStunDuration: 1.5,
        visualEffectColor: '#ffffff',
        reactionDescription: 'Radiance clashes with the void, creating an anti-matter collapse!'
      };
    }

    return null;
  }
}
