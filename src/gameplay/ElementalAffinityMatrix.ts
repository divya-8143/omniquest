export type ElementType = 'Physical' | 'Fire' | 'Frost' | 'Lightning' | 'Holy' | 'Shadow' | 'Poison' | 'Void' | 'Chaos';

export interface ElementalReactionResult {
  hasReaction: boolean;
  reactionName?: string;
  damageMultiplier: number;
  bonusEffect?: string;
  fxColorTag?: string;
}

export class ElementalAffinityMatrix {
  private static instance: ElementalAffinityMatrix;

  public static getInstance(): ElementalAffinityMatrix {
    if (!ElementalAffinityMatrix.instance) {
      ElementalAffinityMatrix.instance = new ElementalAffinityMatrix();
    }
    return ElementalAffinityMatrix.instance;
  }

  public calculateDamage(
    baseDamage: number,
    elementType: ElementType,
    targetResistancePct: number,
    targetVulnerabilities: ElementType[] = [],
    activeElementAura?: ElementType
  ): { finalDamage: number; reaction: ElementalReactionResult } {
    // Check resistance (capped at 80% reduction, minimum 0 damage)
    const effectiveResist = Math.max(-100, Math.min(80, targetResistancePct));
    let mult = 1.0 - (effectiveResist / 100);

    // Weakness bonus
    if (targetVulnerabilities.includes(elementType)) {
      mult *= 1.5;
    }

    // Check elemental reactions
    let reaction: ElementalReactionResult = { hasReaction: false, damageMultiplier: 1.0 };

    if (activeElementAura) {
      reaction = this.evaluateReaction(activeElementAura, elementType);
      mult *= reaction.damageMultiplier;
    }

    const finalDamage = Math.max(1, Math.round(baseDamage * mult));
    return { finalDamage, reaction };
  }

  private evaluateReaction(aura: ElementType, incoming: ElementType): ElementalReactionResult {
    // Fire + Frost = Melt (2.0x dmg)
    if ((aura === 'Fire' && incoming === 'Frost') || (aura === 'Frost' && incoming === 'Fire')) {
      return {
        hasReaction: true,
        reactionName: 'Melt',
        damageMultiplier: 2.0,
        bonusEffect: 'Thermal shock doubles damage and removes aura.',
        fxColorTag: '#f97316'
      };
    }

    // Lightning + Fire = Overload (1.75x dmg + AoE explosion)
    if ((aura === 'Lightning' && incoming === 'Fire') || (aura === 'Fire' && incoming === 'Lightning')) {
      return {
        hasReaction: true,
        reactionName: 'Overload',
        damageMultiplier: 1.75,
        bonusEffect: 'Electromagnetic burst stuns targets for 0.5s.',
        fxColorTag: '#eab308'
      };
    }

    // Holy + Shadow = Annihilation (2.2x dmg)
    if ((aura === 'Holy' && incoming === 'Shadow') || (aura === 'Shadow' && incoming === 'Holy')) {
      return {
        hasReaction: true,
        reactionName: 'Annihilation',
        damageMultiplier: 2.2,
        bonusEffect: 'Light and Dark collision causes gravitational implosion.',
        fxColorTag: '#a855f7'
      };
    }

    return { hasReaction: false, damageMultiplier: 1.0 };
  }
}
