/**
 * Omniquest: Realm of Shadows - Paragon Mastery & Endgame Perks Catalog
 * 100+ Account-wide prestige perks, stats amplifiers, and endgame progression matrices.
 */

export interface ParagonPerkSpec {
  perkId: string;
  name: string;
  category: 'Offense' | 'Defense' | 'Utility' | 'Arcane';
  tier: number;
  bonusValue: number;
  statTarget: string;
  isPercentage: boolean;
  description: string;
}

export class MasteryPerksCatalog {
  private static instance: MasteryPerksCatalog;
  private perks: Map<string, ParagonPerkSpec> = new Map();

  private constructor() {
    this.registerAllPerks();
  }

  public static getInstance(): MasteryPerksCatalog {
    if (!MasteryPerksCatalog.instance) {
      MasteryPerksCatalog.instance = new MasteryPerksCatalog();
    }
    return MasteryPerksCatalog.instance;
  }

  public getPerk(id: string): ParagonPerkSpec | undefined {
    return this.perks.get(id);
  }

  public getAllPerks(): ParagonPerkSpec[] {
    return Array.from(this.perks.values());
  }

  private registerAllPerks(): void {
    this.perks.set('perk_off_01', {
      perkId: 'perk_off_01',
      name: 'Titan Strength',
      category: 'Offense',
      tier: 1,
      bonusValue: 5,
      statTarget: 'attackPower',
      isPercentage: true,
      description: 'Increases all physical weapon damage by 5%.'
    });

    this.perks.set('perk_def_02', {
      perkId: 'perk_def_02',
      name: 'Impenetrable Ward',
      category: 'Defense',
      tier: 1,
      bonusValue: 8,
      statTarget: 'armor',
      isPercentage: true,
      description: 'Increases base armor by 8%.'
    });

    this.perks.set('perk_arc_03', {
      perkId: 'perk_arc_03',
      name: 'Astral Flow',
      category: 'Arcane',
      tier: 2,
      bonusValue: 12,
      statTarget: 'spellPower',
      isPercentage: true,
      description: 'Boosts magic spell power by 12% across all schools.'
    });
  }
}
