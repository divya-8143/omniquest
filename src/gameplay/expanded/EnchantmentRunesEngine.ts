/**
 * Omniquest: Realm of Shadows - Ancient Rune Words & Gem Socketing Engine
 * 33 Ancient Runes (El, Eld, Tir, Nef, Ith, Tal, Ral, Ort, Thul, Amn, Sol, Shael, Dol, Hel, Io, Lum, Ko, Fal, Lem, Pul, Um, Mal, Ist, Gul, Vex, Ohm, Lo, Sur, Ber, Jah, Cham, Zod).
 */

export interface RuneStone {
  id: string;
  name: string;
  tier: number;
  weaponBonus: string;
  armorBonus: string;
  goldValue: number;
}

export interface RuneWordRecipe {
  name: string;
  requiredRunes: string[];
  applicableSlots: string[];
  grantedBonuses: string[];
}

export class EnchantmentRunesEngine {
  private static instance: EnchantmentRunesEngine;
  private runes: Map<string, RuneStone> = new Map();
  private runeWords: Map<string, RuneWordRecipe> = new Map();

  private constructor() {
    this.registerAllRunes();
    this.registerRuneWords();
  }

  public static getInstance(): EnchantmentRunesEngine {
    if (!EnchantmentRunesEngine.instance) {
      EnchantmentRunesEngine.instance = new EnchantmentRunesEngine();
    }
    return EnchantmentRunesEngine.instance;
  }

  public getRune(id: string): RuneStone | undefined {
    return this.runes.get(id);
  }

  public getRuneWord(name: string): RuneWordRecipe | undefined {
    return this.runeWords.get(name);
  }

  private registerAllRunes(): void {
    this.runes.set('rune_ral', {
      id: 'rune_ral',
      name: 'Ral Rune',
      tier: 8,
      weaponBonus: '+15 to Fire Damage',
      armorBonus: '+30% Fire Resistance',
      goldValue: 120
    });

    this.runes.set('rune_ort', {
      id: 'rune_ort',
      name: 'Ort Rune',
      tier: 9,
      weaponBonus: '+1 to 50 Lightning Damage',
      armorBonus: '+30% Lightning Resistance',
      goldValue: 140
    });

    this.runes.set('rune_thul', {
      id: 'rune_thul',
      name: 'Thul Rune',
      tier: 10,
      weaponBonus: '+20 Frost Damage and 2s Freeze',
      armorBonus: '+30% Frost Resistance',
      goldValue: 160
    });

    this.runes.set('rune_amn', {
      id: 'rune_amn',
      name: 'Amn Rune',
      tier: 11,
      weaponBonus: '7% Life Stolen per Hit',
      armorBonus: 'Attacker takes 14 Physical Damage',
      goldValue: 200
    });
  }

  private registerRuneWords(): void {
    this.runeWords.set('rw_ancients_pledge', {
      name: "Ancient's Pledge",
      requiredRunes: ['rune_ral', 'rune_ort', 'rune_thul'],
      applicableSlots: ['OffHand', 'Shield'],
      grantedBonuses: [
        '+50% Enhanced Defense',
        '+48% Fire Resistance',
        '+48% Lightning Resistance',
        '+48% Frost Resistance',
        '10% Damage Taken Goes to Energy Pool'
      ]
    });
  }
}
