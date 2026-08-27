/**
 * Omniquest: Realm of Shadows - Mastery Perks Database Mega
 * Exhaustive talent specs, node multipliers, and mastery attributes.
 */

export interface MasterPerkDefinition {
  perkId: string;
  name: string;
  category: 'Offense' | 'Defense' | 'Utility' | 'Arcana' | 'Elemental' | 'Chaos';
  tierLevel: number;
  maxPoints: number;
  bonusValue: number;
  statTarget: string;
  isPercent: boolean;
  description: string;
}

export class MasteryPerksDatabaseMega {
  private static instance: MasteryPerksDatabaseMega;
  private perks: Map<string, MasterPerkDefinition> = new Map();

  private constructor() {
    this.populateAllMegaPerks();
  }

  public static getInstance(): MasteryPerksDatabaseMega {
    if (!MasteryPerksDatabaseMega.instance) {
      MasteryPerksDatabaseMega.instance = new MasteryPerksDatabaseMega();
    }
    return MasteryPerksDatabaseMega.instance;
  }

  public getPerk(id: string): MasterPerkDefinition | undefined {
    return this.perks.get(id);
  }

  public getAllPerks(): MasterPerkDefinition[] {
    return Array.from(this.perks.values());
  }

  private register(p: MasterPerkDefinition): void {
    this.perks.set(p.perkId, p);
  }

  private populateAllMegaPerks(): void {
    const categories: Array<'Offense' | 'Defense' | 'Utility' | 'Arcana' | 'Elemental' | 'Chaos'> = ['Offense', 'Defense', 'Utility', 'Arcana', 'Elemental', 'Chaos'];
    const stats = ['PhysicalAttackPower', 'SpellPower', 'ArmorRating', 'MaxHealth', 'MaxEnergy', 'CriticalStrikeChance', 'CriticalMultiplier', 'MovementSpeed', 'LifeSteal', 'FireDamage', 'FrostDamage', 'LightningDamage', 'ShadowDamage', 'HolyDamage'];

    for (let c = 0; c < categories.length; c++) {
      const cat = categories[c];
      for (let tier = 1; tier <= 50; tier++) {
        for (let idx = 1; idx <= 4; idx++) {
          const stat = stats[(c * 50 + tier * idx) % stats.length];
          const isPct = true;
          const val = tier * 2 + idx;
          this.register({
            perkId: `perk_mega_${cat.toLowerCase()}_t${tier}_n${idx}`,
            name: `${cat} Ascension Mastery ${tier}-${idx}`,
            category: cat,
            tierLevel: tier,
            maxPoints: 5,
            bonusValue: val,
            statTarget: stat,
            isPercent: isPct,
            description: `Permanently boosts ${stat} by ${val}% per allocated paragon level.`
          });
        }
      }
    }
  }
}
