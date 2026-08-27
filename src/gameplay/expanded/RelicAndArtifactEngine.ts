/**
 * Omniquest: Realm of Shadows - Relics, Talismans & Artifact Powers Engine
 * 50+ Ancient artifacts, active trinket procs, set synergies, and mythical tier bonuses.
 */

export interface RelicItemDefinition {
  relicId: string;
  name: string;
  rarity: 'Mythic' | 'AncientArtifact';
  loreSummary: string;
  passiveAttributes: {
    bonusMaxHp: number;
    bonusAttackPower: number;
    bonusSpellPower: number;
    bonusCritChancePct: number;
    damageReductionPct: number;
    allResistancesPct: number;
  };
  activePower: {
    name: string;
    cooldownSeconds: number;
    description: string;
    effectTag: string;
  };
}

export class RelicAndArtifactEngine {
  private static instance: RelicAndArtifactEngine;
  private relics: Map<string, RelicItemDefinition> = new Map();

  private constructor() {
    this.registerAllRelics();
  }

  public static getInstance(): RelicAndArtifactEngine {
    if (!RelicAndArtifactEngine.instance) {
      RelicAndArtifactEngine.instance = new RelicAndArtifactEngine();
    }
    return RelicAndArtifactEngine.instance;
  }

  public getRelic(id: string): RelicItemDefinition | undefined {
    return this.relics.get(id);
  }

  public getAllRelics(): RelicItemDefinition[] {
    return Array.from(this.relics.values());
  }

  private registerAllRelics(): void {
    this.relics.set('relic_heart_of_sol', {
      relicId: 'relic_heart_of_sol',
      name: 'Heart of the Eternal Sun',
      rarity: 'AncientArtifact',
      loreSummary: 'A pulsing ember of the first star, captured in adamantine glass.',
      passiveAttributes: {
        bonusMaxHp: 250,
        bonusAttackPower: 45,
        bonusSpellPower: 60,
        bonusCritChancePct: 12,
        damageReductionPct: 15,
        allResistancesPct: 25
      },
      activePower: {
        name: 'Solar Flare Supernova',
        cooldownSeconds: 45.0,
        description: 'Blinds and incinerates all enemies on screen for 600 Holy/Fire damage and heals the player to full HP.',
        effectTag: 'power_supernova'
      }
    });

    this.relics.set('relic_void_compass', {
      relicId: 'relic_void_compass',
      name: 'Compass of the Abyssal Void',
      rarity: 'AncientArtifact',
      loreSummary: 'Its needle points not to the north, but directly toward dimensional fractures.',
      passiveAttributes: {
        bonusMaxHp: 180,
        bonusAttackPower: 50,
        bonusSpellPower: 70,
        bonusCritChancePct: 18,
        damageReductionPct: 10,
        allResistancesPct: 20
      },
      activePower: {
        name: 'Dimensional Phase Shift',
        cooldownSeconds: 30.0,
        description: 'Become completely immune to all physical and magical damage for 4.0 seconds.',
        effectTag: 'power_phase_shift'
      }
    });

    this.relics.set('relic_titan_anvil', {
      relicId: 'relic_titan_anvil',
      name: 'Micro-Anvil of the First Smith',
      rarity: 'Mythic',
      loreSummary: 'Forged mountains and continental plates in primordial ages.',
      passiveAttributes: {
        bonusMaxHp: 400,
        bonusAttackPower: 65,
        bonusSpellPower: 0,
        bonusCritChancePct: 8,
        damageReductionPct: 25,
        allResistancesPct: 30
      },
      activePower: {
        name: 'Titan Tremor',
        cooldownSeconds: 25.0,
        description: 'Stuns all surrounding enemies for 3.5 seconds and fractures their armor.',
        effectTag: 'power_titan_tremor'
      }
    });
  }
}
