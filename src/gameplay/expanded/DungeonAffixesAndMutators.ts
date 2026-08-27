/**
 * Omniquest: Realm of Shadows - Dungeon Affixes, Keystone Mutators & Nightmare Difficulty
 * Mythic Keystone dungeon modifiers, environmental affixes (Volcanic, Sanguine, Bolstering, Necrotic, Tyrannical, Fortified).
 */

export interface KeystoneAffixSpec {
  id: string;
  name: string;
  tier: 1 | 2 | 3 | 4;
  icon: string;
  description: string;
  monsterHealthMultiplier: number;
  monsterDamageMultiplier: number;
  scoreBonusPct: number;
  hazardEffectTag?: string;
}

export class DungeonAffixesAndMutators {
  private static instance: DungeonAffixesAndMutators;
  private affixes: Map<string, KeystoneAffixSpec> = new Map();

  private constructor() {
    this.registerAllAffixes();
  }

  public static getInstance(): DungeonAffixesAndMutators {
    if (!DungeonAffixesAndMutators.instance) {
      DungeonAffixesAndMutators.instance = new DungeonAffixesAndMutators();
    }
    return DungeonAffixesAndMutators.instance;
  }

  public getAffix(id: string): KeystoneAffixSpec | undefined {
    return this.affixes.get(id);
  }

  public getRandomAffixesForLevel(level: number, count: number = 2): KeystoneAffixSpec[] {
    const list = Array.from(this.affixes.values());
    const selected: KeystoneAffixSpec[] = [];
    const usedIds = new Set<string>();

    for (let i = 0; i < count && list.length > 0; i++) {
      const idx = Math.floor(Math.random() * list.length);
      const affix = list[idx];
      if (!usedIds.has(affix.id)) {
        usedIds.add(affix.id);
        selected.push(affix);
      }
    }
    return selected;
  }

  private registerAllAffixes(): void {
    this.affixes.set('affix_volcanic', {
      id: 'affix_volcanic',
      name: '🌋 Volcanic Plumes',
      tier: 1,
      icon: '🌋',
      description: 'While in combat, enemies cause jets of magma to periodically erupt beneath distant players.',
      monsterHealthMultiplier: 1.15,
      monsterDamageMultiplier: 1.2,
      scoreBonusPct: 25,
      hazardEffectTag: 'hazard_volcanic_plume'
    });

    this.affixes.set('affix_bolstering', {
      id: 'affix_bolstering',
      name: '💪 Bolstering Might',
      tier: 2,
      icon: '💪',
      description: 'When any non-boss enemy dies, its death cry empowers nearby allies, increasing maximum health and damage by 20%.',
      monsterHealthMultiplier: 1.25,
      monsterDamageMultiplier: 1.25,
      scoreBonusPct: 35
    });

    this.affixes.set('affix_sanguine', {
      id: 'affix_sanguine',
      name: '🩸 Sanguine Pools',
      tier: 2,
      icon: '🩸',
      description: 'When slain, non-boss enemies leave behind a lingering pool of blood that heals their allies and damages players.',
      monsterHealthMultiplier: 1.2,
      monsterDamageMultiplier: 1.15,
      scoreBonusPct: 30,
      hazardEffectTag: 'hazard_sanguine_pool'
    });

    this.affixes.set('affix_tyrannical', {
      id: 'affix_tyrannical',
      name: '👑 Tyrannical Overlords',
      tier: 3,
      icon: '👑',
      description: 'Boss enemies have 50% more health and inflict 30% increased damage.',
      monsterHealthMultiplier: 1.5,
      monsterDamageMultiplier: 1.3,
      scoreBonusPct: 50
    });
  }
}
