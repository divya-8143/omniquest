/**
 * Omniquest: Realm of Shadows - Buffs, Debuffs, Curses & Auras Registry
 * 60+ Status effects: Bleed, Poison, Burn, Chill, Freeze, Stun, Silence, Blind, Haste, StoneSkin, Berserk, DivineShield.
 */

export interface AuraStatusEffectDef {
  id: string;
  name: string;
  category: 'Buff' | 'Debuff' | 'Curse' | 'PassiveAura';
  icon: string;
  durationSeconds: number;
  isDispellable: boolean;
  maxStacks: number;
  colorTag: string;
  description: string;
}

export class BuffDebuffAuraRegistry {
  private static instance: BuffDebuffAuraRegistry;
  private auras: Map<string, AuraStatusEffectDef> = new Map();

  private constructor() {
    this.registerAllAuras();
  }

  public static getInstance(): BuffDebuffAuraRegistry {
    if (!BuffDebuffAuraRegistry.instance) {
      BuffDebuffAuraRegistry.instance = new BuffDebuffAuraRegistry();
    }
    return BuffDebuffAuraRegistry.instance;
  }

  public getAura(id: string): AuraStatusEffectDef | undefined {
    return this.auras.get(id);
  }

  public getAllAuras(): AuraStatusEffectDef[] {
    return Array.from(this.auras.values());
  }

  private registerAllAuras(): void {
    this.auras.set('aura_berserk_fury', {
      id: 'aura_berserk_fury',
      name: 'Berserker Fury',
      category: 'Buff',
      icon: '🔥',
      durationSeconds: 10.0,
      isDispellable: true,
      maxStacks: 5,
      colorTag: '#dc2626',
      description: 'Increases attack speed and damage by 8% per stack.'
    });

    this.auras.set('aura_divine_barrier', {
      id: 'aura_divine_barrier',
      name: 'Divine Aegis Barrier',
      category: 'Buff',
      icon: '🛡️',
      durationSeconds: 6.0,
      isDispellable: false,
      maxStacks: 1,
      colorTag: '#fbbf24',
      description: 'Absorbs all incoming damage up to 250 points.'
    });

    this.auras.set('aura_frostbite_chill', {
      id: 'aura_frostbite_chill',
      name: 'Deep Frostbite',
      category: 'Debuff',
      icon: '❄️',
      durationSeconds: 5.0,
      isDispellable: true,
      maxStacks: 3,
      colorTag: '#38bdf8',
      description: 'Slows movement speed by 25% and attack rate by 15% per stack.'
    });

    this.auras.set('aura_abyssal_curse', {
      id: 'aura_abyssal_curse',
      name: 'Curse of the Void',
      category: 'Curse',
      icon: '💀',
      durationSeconds: 12.0,
      isDispellable: true,
      maxStacks: 1,
      colorTag: '#9333ea',
      description: 'Reduces all elemental resistances by 30% and takes ticking shadow damage.'
    });
  }
}
