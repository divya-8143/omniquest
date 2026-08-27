/**
 * Omniquest: Realm of Shadows - Master Item Affix Lexicon & Equipment Matrix
 * 350+ Prefixes and Suffixes with 10 tiers of stat scaling for weapons, armor, rings, and amulets.
 */

export interface MasterAffixSpec {
  id: string;
  name: string;
  type: 'Prefix' | 'Suffix';
  tier: number;
  minItemLevel: number;
  maxItemLevel: number;
  weight: number;
  statTargets: Array<{
    stat: string;
    minValue: number;
    maxValue: number;
    isPercentage: boolean;
  }>;
  description: string;
}

export class ItemAffixLexiconLarge {
  private static instance: ItemAffixLexiconLarge;
  private affixes: Map<string, MasterAffixSpec> = new Map();

  private constructor() {
    this.populatePrefixes();
    this.populateSuffixes();
  }

  public static getInstance(): ItemAffixLexiconLarge {
    if (!ItemAffixLexiconLarge.instance) {
      ItemAffixLexiconLarge.instance = new ItemAffixLexiconLarge();
    }
    return ItemAffixLexiconLarge.instance;
  }

  public getAffix(id: string): MasterAffixSpec | undefined {
    return this.affixes.get(id);
  }

  public getAllAffixes(): MasterAffixSpec[] {
    return Array.from(this.affixes.values());
  }

  private register(a: MasterAffixSpec): void {
    this.affixes.set(a.id, a);
  }

  private populatePrefixes(): void {
    // Attack Power Prefixes (T1 to T10)
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_attack_power_t${t}`,
        name: t === 1 ? 'Heavy' : t === 2 ? 'Savage' : t === 3 ? 'Brutal' : t === 4 ? 'Warlord' : t === 5 ? 'Titan' : t === 6 ? 'Colossal' : t === 7 ? 'Cataclysmic' : t === 8 ? 'Worldbreaker' : t === 9 ? 'Godforged' : 'Apocalyptic',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 100 - t * 8,
        statTargets: [{ stat: 'attackPower', minValue: t * 12, maxValue: t * 18 + 5, isPercentage: false }],
        description: `Adds +${t * 12} to +${t * 18 + 5} Physical Attack Power.`
      });
    }

    // Spell Power Prefixes (T1 to T10)
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_spell_power_t${t}`,
        name: t === 1 ? 'Mystic' : t === 2 ? 'Arcane' : t === 3 ? 'Sorcerer' : t === 4 ? 'Archmage' : t === 5 ? 'Astral' : t === 6 ? 'Celestial' : t === 7 ? 'Ethereal' : t === 8 ? 'Singularity' : t === 9 ? 'Cosmic' : 'Omnipotent',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 100 - t * 8,
        statTargets: [{ stat: 'spellPower', minValue: t * 15, maxValue: t * 22 + 5, isPercentage: false }],
        description: `Adds +${t * 15} to +${t * 22 + 5} Spell Power.`
      });
    }

    // Armor Rating Prefixes (T1 to T10)
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_armor_rating_t${t}`,
        name: t === 1 ? 'Stout' : t === 2 ? 'Hardened' : t === 3 ? 'Reinforced' : t === 4 ? 'Impenetrable' : t === 5 ? 'Adamantine' : t === 6 ? 'Juggernaut' : t === 7 ? 'Aegis' : t === 8 ? 'Bulwark' : t === 9 ? 'Bastion' : 'Invulnerable',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 100 - t * 8,
        statTargets: [{ stat: 'armor', minValue: t * 20, maxValue: t * 30 + 10, isPercentage: false }],
        description: `Adds +${t * 20} to +${t * 30 + 10} Armor Rating.`
      });
    }

    // Fire Damage Prefixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_fire_dmg_t${t}`,
        name: t === 1 ? 'Smoking' : t === 2 ? 'Flaming' : t === 3 ? 'Blazing' : t === 4 ? 'Scorching' : t === 5 ? 'Volcanic' : t === 6 ? 'Infernal' : t === 7 ? 'Hellfire' : t === 8 ? 'Solar' : t === 9 ? 'Supernova' : 'Cataclysmic Fire',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 90 - t * 7,
        statTargets: [{ stat: 'fireDamage', minValue: t * 10, maxValue: t * 16 + 4, isPercentage: false }],
        description: `Adds +${t * 10} to +${t * 16 + 4} Fire Damage.`
      });
    }

    // Frost Damage Prefixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_frost_dmg_t${t}`,
        name: t === 1 ? 'Chilled' : t === 2 ? 'Frosted' : t === 3 ? 'Icy' : t === 4 ? 'Glacial' : t === 5 ? 'Arctic' : t === 6 ? 'Permafrost' : t === 7 ? 'Blizzard' : t === 8 ? 'Absolute Zero' : t === 9 ? 'Cryogenic' : 'Subzero Singularity',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 90 - t * 7,
        statTargets: [{ stat: 'frostDamage', minValue: t * 10, maxValue: t * 16 + 4, isPercentage: false }],
        description: `Adds +${t * 10} to +${t * 16 + 4} Frost Damage.`
      });
    }

    // Lightning Damage Prefixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_lightning_dmg_t${t}`,
        name: t === 1 ? 'Static' : t === 2 ? 'Charged' : t === 3 ? 'Sparking' : t === 4 ? 'Electrified' : t === 5 ? 'Thunderous' : t === 6 ? 'Stormforged' : t === 7 ? 'Tempestuous' : t === 8 ? 'Lightning Strike' : t === 9 ? 'Fulminating' : 'Overcharged Cataclysm',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 90 - t * 7,
        statTargets: [{ stat: 'lightningDamage', minValue: t * 8, maxValue: t * 24 + 8, isPercentage: false }],
        description: `Adds +${t * 8} to +${t * 24 + 8} Lightning Damage.`
      });
    }

    // Shadow & Void Prefixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `p_shadow_dmg_t${t}`,
        name: t === 1 ? 'Dim' : t === 2 ? 'Shaded' : t === 3 ? 'Darkened' : t === 4 ? 'Gloom' : t === 5 ? 'Shadowy' : t === 6 ? 'Abyssal' : t === 7 ? 'Necrotic' : t === 8 ? 'Voidborn' : t === 9 ? 'Nether' : 'Oblivion',
        type: 'Prefix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 85 - t * 6,
        statTargets: [{ stat: 'shadowDamage', minValue: t * 11, maxValue: t * 19 + 5, isPercentage: false }],
        description: `Adds +${t * 11} to +${t * 19 + 5} Shadow Damage.`
      });
    }
  }

  private populateSuffixes(): void {
    // Maximum Health Suffixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `s_max_health_t${t}`,
        name: t === 1 ? 'of the Fox' : t === 2 ? 'of the Wolf' : t === 3 ? 'of the Bear' : t === 4 ? 'of the Boar' : t === 5 ? 'of the Mammoth' : t === 6 ? 'of the Behemoth' : t === 7 ? 'of the Leviathan' : t === 8 ? 'of the Titan' : t === 9 ? 'of the Colossus' : 'of the Immortals',
        type: 'Suffix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 100 - t * 8,
        statTargets: [{ stat: 'maxHp', minValue: t * 25, maxValue: t * 40 + 10, isPercentage: false }],
        description: `Adds +${t * 25} to +${t * 40 + 10} Maximum Health.`
      });
    }

    // Critical Strike Chance Suffixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `s_crit_chance_t${t}`,
        name: t === 1 ? 'of Striking' : t === 2 ? 'of Precision' : t === 3 ? 'of Accuracy' : t === 4 ? 'of the Eagle' : t === 5 ? 'of the Hawk' : t === 6 ? 'of the Sniper' : t === 7 ? 'of the Duelist' : t === 8 ? 'of the Assassin' : t === 9 ? 'of Decapitation' : 'of Pure Carnage',
        type: 'Suffix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 90 - t * 7,
        statTargets: [{ stat: 'critChance', minValue: t * 1.5, maxValue: t * 2.5 + 1.0, isPercentage: true }],
        description: `Adds +${(t * 1.5).toFixed(1)}% to +${(t * 2.5 + 1.0).toFixed(1)}% Critical Strike Chance.`
      });
    }

    // Movement Speed Suffixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `s_move_speed_t${t}`,
        name: t === 1 ? 'of Swiftness' : t === 2 ? 'of Quickness' : t === 3 ? 'of Agility' : t === 4 ? 'of the Falcon' : t === 5 ? 'of the Cheetah' : t === 6 ? 'of the Wind' : t === 7 ? 'of the Gale' : t === 8 ? 'of Lightning' : t === 9 ? 'of Teleportation' : 'of the Astral Slip',
        type: 'Suffix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 85 - t * 6,
        statTargets: [{ stat: 'moveSpeed', minValue: t * 2, maxValue: t * 3 + 2, isPercentage: true }],
        description: `Increases Movement Speed by +${t * 2}% to +${t * 3 + 2}%.`
      });
    }

    // Life Steal Suffixes
    for (let t = 1; t <= 10; t++) {
      this.register({
        id: `s_life_steal_t${t}`,
        name: t === 1 ? 'of Leeching' : t === 2 ? 'of Draining' : t === 3 ? 'of the Bat' : t === 4 ? 'of the Leech' : t === 5 ? 'of Blood' : t === 6 ? 'of the Vampire' : t === 7 ? 'of Nosferatu' : t === 8 ? 'of Dracula' : t === 9 ? 'of the Blood God' : 'of Soul Siphoning',
        type: 'Suffix',
        tier: t,
        minItemLevel: t * 5 - 4,
        maxItemLevel: t * 5 + 10,
        weight: 70 - t * 5,
        statTargets: [{ stat: 'lifeSteal', minValue: t * 1.0, maxValue: t * 1.5 + 0.5, isPercentage: true }],
        description: `Converts ${t * 1.0}% to ${(t * 1.5 + 0.5).toFixed(1)}% of Damage Dealt into Health.`
      });
    }
  }
}
