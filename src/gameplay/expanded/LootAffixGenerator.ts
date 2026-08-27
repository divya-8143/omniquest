/**
 * Omniquest: Realm of Shadows - Procedural Itemization & Loot Affix Matrix
 * Comprehensive ARPG equipment rolling engine with prefixes, suffixes, gem sockets, and rune words.
 */

export type ItemRarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Artifact';
export type EquipmentSlot = 'MainHand' | 'OffHand' | 'TwoHand' | 'Helmet' | 'ChestArmor' | 'Gloves' | 'Boots' | 'Ring1' | 'Ring2' | 'Amulet' | 'Relic';

export interface StatModifier {
  stat: 'attackPower' | 'spellPower' | 'armor' | 'maxHp' | 'maxEnergy' | 'critChance' | 'critMultiplier' | 'moveSpeed' | 'fireResist' | 'frostResist' | 'shadowResist' | 'lifeSteal' | 'goldFind' | 'magicFind';
  minValue: number;
  maxValue: number;
  isPercentage: boolean;
}

export interface ItemAffix {
  id: string;
  name: string;
  type: 'Prefix' | 'Suffix';
  tier: number;
  requiredItemLevel: number;
  weight: number;
  modifiers: StatModifier[];
}

export interface ItemSocket {
  type: 'Prismatic' | 'Ruby' | 'Sapphire' | 'Emerald' | 'Topaz' | 'Amethyst' | 'Rune';
  insertedGemId?: string;
  bonusModifiers: StatModifier[];
}

export interface GeneratedEquipmentItem {
  uid: string;
  baseItemId: string;
  name: string;
  rarity: ItemRarity;
  slot: EquipmentSlot;
  itemLevel: number;
  baseStats: StatModifier[];
  prefixes: ItemAffix[];
  suffixes: ItemAffix[];
  sockets: ItemSocket[];
  uniqueEffectDescription?: string;
  goldValue: number;
  durability: { current: number; max: number };
  flavorText: string;
}

export class LootAffixGenerator {
  private static instance: LootAffixGenerator;
  private prefixes: ItemAffix[] = [];
  private suffixes: ItemAffix[] = [];
  private baseItems: Map<string, { name: string; slot: EquipmentSlot; baseStats: StatModifier[]; levelReq: number }> = new Map();

  private constructor() {
    this.registerPrefixes();
    this.registerSuffixes();
    this.registerBaseItems();
  }

  public static getInstance(): LootAffixGenerator {
    if (!LootAffixGenerator.instance) {
      LootAffixGenerator.instance = new LootAffixGenerator();
    }
    return LootAffixGenerator.instance;
  }

  public generateLoot(itemLevel: number, magicFindBonus: number = 0): GeneratedEquipmentItem {
    const rarity = this.rollRarity(magicFindBonus);
    const baseKeys = Array.from(this.baseItems.keys());
    const randomBaseId = baseKeys[Math.floor(Math.random() * baseKeys.length)];
    const baseDef = this.baseItems.get(randomBaseId)!;

    const numPrefixes = rarity === 'Common' ? 0 : rarity === 'Uncommon' ? 1 : rarity === 'Rare' ? 2 : rarity === 'Epic' ? 3 : 4;
    const numSuffixes = rarity === 'Common' ? 0 : rarity === 'Uncommon' ? 1 : rarity === 'Rare' ? 2 : rarity === 'Epic' ? 3 : 4;

    const rolledPrefixes = this.rollAffixes(this.prefixes, numPrefixes, itemLevel);
    const rolledSuffixes = this.rollAffixes(this.suffixes, numSuffixes, itemLevel);

    let fullName = baseDef.name;
    if (rolledPrefixes.length > 0) {
      fullName = rolledPrefixes[0].name + ' ' + fullName;
    }
    if (rolledSuffixes.length > 0) {
      fullName = fullName + ' ' + rolledSuffixes[0].name;
    }

    const socketsCount = (rarity === 'Epic' || rarity === 'Legendary' || rarity === 'Mythic') ? Math.floor(Math.random() * 3) + 1 : 0;
    const sockets: ItemSocket[] = [];
    for (let s = 0; s < socketsCount; s++) {
      sockets.push({
        type: 'Prismatic',
        bonusModifiers: []
      });
    }

    const goldVal = Math.max(10, Math.round(itemLevel * 15 * this.getRarityMultiplier(rarity)));

    return {
      uid: 'item_' + Math.random().toString(36).substr(2, 9),
      baseItemId: randomBaseId,
      name: fullName,
      rarity,
      slot: baseDef.slot,
      itemLevel,
      baseStats: baseDef.baseStats,
      prefixes: rolledPrefixes,
      suffixes: rolledSuffixes,
      sockets,
      uniqueEffectDescription: rarity === 'Legendary' || rarity === 'Mythic' ? this.getLegendaryPower(randomBaseId) : undefined,
      goldValue: goldVal,
      durability: { current: 100, max: 100 },
      flavorText: this.getFlavorText(rarity)
    };
  }

  private rollRarity(magicFind: number): ItemRarity {
    const roll = Math.random() * 100 - (magicFind * 0.1);
    if (roll < 1.0) return 'Mythic';
    if (roll < 4.0) return 'Legendary';
    if (roll < 12.0) return 'Epic';
    if (roll < 35.0) return 'Rare';
    if (roll < 70.0) return 'Uncommon';
    return 'Common';
  }

  private getRarityMultiplier(rarity: ItemRarity): number {
    switch (rarity) {
      case 'Mythic': return 10.0;
      case 'Legendary': return 6.0;
      case 'Epic': return 3.5;
      case 'Rare': return 2.2;
      case 'Uncommon': return 1.4;
      default: return 1.0;
    }
  }

  private rollAffixes(affixPool: ItemAffix[], count: number, itemLevel: number): ItemAffix[] {
    const eligible = affixPool.filter(a => a.requiredItemLevel <= itemLevel);
    const chosen: ItemAffix[] = [];
    const usedIds = new Set<string>();

    for (let i = 0; i < count && eligible.length > 0; i++) {
      const idx = Math.floor(Math.random() * eligible.length);
      const affix = eligible[idx];
      if (!usedIds.has(affix.id)) {
        usedIds.add(affix.id);
        chosen.push(affix);
      }
    }
    return chosen;
  }

  private getLegendaryPower(baseId: string): string {
    const powers = [
      '⚡ Critical strikes trigger a Chain Lightning nova hitting up to 5 nearby targets.',
      '🔥 Dealing Fire damage leaves a permanent inferno trail dealing 40% DPS.',
      '🛡️ Taking fatal damage instantly restores 50% HP and triggers a 3-second Divine Barrier.',
      '❄️ Frost spells have a 25% chance to immediately shatter chilled enemies for 300% burst damage.',
      '🗡️ Rogue attacks execute non-boss enemies below 20% maximum health instantly.',
      '🌟 All energy costs reduced by 30% and skill cooldowns recharge 25% faster.'
    ];
    return powers[Math.floor(Math.random() * powers.length)];
  }

  private getFlavorText(rarity: ItemRarity): string {
    const quotes = [
      '"Forged in the heart of Mount Blackrock by ancient master smiths."',
      '"The steel hums with an ethereal melody when drawn in pitch darkness."',
      '"Stained with the dried ichor of abyssal demon lords from eras long forgotten."',
      '"Its weight is deceptively light, balance perfected over centuries of battle."'
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  private registerPrefixes(): void {
    this.prefixes.push(
      { id: 'p_savage_01', name: 'Savage', type: 'Prefix', tier: 1, requiredItemLevel: 1, weight: 100, modifiers: [{ stat: 'attackPower', minValue: 10, maxValue: 25, isPercentage: false }] },
      { id: 'p_brutal_02', name: 'Brutal', type: 'Prefix', tier: 2, requiredItemLevel: 10, weight: 80, modifiers: [{ stat: 'attackPower', minValue: 26, maxValue: 55, isPercentage: false }] },
      { id: 'p_warlord_03', name: "Warlord's", type: 'Prefix', tier: 3, requiredItemLevel: 25, weight: 50, modifiers: [{ stat: 'attackPower', minValue: 56, maxValue: 110, isPercentage: false }, { stat: 'critMultiplier', minValue: 15, maxValue: 30, isPercentage: true }] },
      { id: 'p_mystic_04', name: 'Mystic', type: 'Prefix', tier: 1, requiredItemLevel: 1, weight: 100, modifiers: [{ stat: 'spellPower', minValue: 12, maxValue: 28, isPercentage: false }] },
      { id: 'p_sorcerer_05', name: "Sorcerer's", type: 'Prefix', tier: 2, requiredItemLevel: 12, weight: 75, modifiers: [{ stat: 'spellPower', minValue: 30, maxValue: 65, isPercentage: false }] },
      { id: 'p_archmage_06', name: "Archmage's", type: 'Prefix', tier: 3, requiredItemLevel: 30, weight: 40, modifiers: [{ stat: 'spellPower', minValue: 70, maxValue: 140, isPercentage: false }, { stat: 'maxEnergy', minValue: 25, maxValue: 50, isPercentage: false }] },
      { id: 'p_stalwart_07', name: 'Stalwart', type: 'Prefix', tier: 1, requiredItemLevel: 1, weight: 100, modifiers: [{ stat: 'armor', minValue: 15, maxValue: 35, isPercentage: false }] },
      { id: 'p_impenetrable_08', name: 'Impenetrable', type: 'Prefix', tier: 2, requiredItemLevel: 15, weight: 70, modifiers: [{ stat: 'armor', minValue: 40, maxValue: 90, isPercentage: false }] },
      { id: 'p_colossus_09', name: 'Colossal', type: 'Prefix', tier: 3, requiredItemLevel: 35, weight: 35, modifiers: [{ stat: 'armor', minValue: 100, maxValue: 220, isPercentage: false }, { stat: 'maxHp', minValue: 80, maxValue: 180, isPercentage: false }] },
      { id: 'p_vampiric_10', name: 'Vampiric', type: 'Prefix', tier: 2, requiredItemLevel: 18, weight: 45, modifiers: [{ stat: 'lifeSteal', minValue: 4, maxValue: 9, isPercentage: true }] }
    );
  }

  private registerSuffixes(): void {
    this.suffixes.push(
      { id: 's_bear_01', name: 'of the Bear', type: 'Suffix', tier: 1, requiredItemLevel: 1, weight: 100, modifiers: [{ stat: 'maxHp', minValue: 20, maxValue: 50, isPercentage: false }] },
      { id: 's_mammoth_02', name: 'of the Mammoth', type: 'Suffix', tier: 2, requiredItemLevel: 15, weight: 70, modifiers: [{ stat: 'maxHp', minValue: 60, maxValue: 130, isPercentage: false }] },
      { id: 's_leviathan_03', name: 'of the Leviathan', type: 'Suffix', tier: 3, requiredItemLevel: 30, weight: 35, modifiers: [{ stat: 'maxHp', minValue: 150, maxValue: 320, isPercentage: false }] },
      { id: 's_falcon_04', name: 'of the Falcon', type: 'Suffix', tier: 1, requiredItemLevel: 1, weight: 100, modifiers: [{ stat: 'moveSpeed', minValue: 5, maxValue: 12, isPercentage: true }] },
      { id: 's_cheetah_05', name: 'of the Cheetah', type: 'Suffix', tier: 2, requiredItemLevel: 14, weight: 65, modifiers: [{ stat: 'moveSpeed', minValue: 15, maxValue: 28, isPercentage: true }] },
      { id: 's_assassin_06', name: 'of the Assassin', type: 'Suffix', tier: 2, requiredItemLevel: 16, weight: 60, modifiers: [{ stat: 'critChance', minValue: 5, maxValue: 14, isPercentage: true }] },
      { id: 's_oblivion_07', name: 'of Oblivion', type: 'Suffix', tier: 3, requiredItemLevel: 32, weight: 30, modifiers: [{ stat: 'critMultiplier', minValue: 25, maxValue: 60, isPercentage: true }] },
      { id: 's_phoenix_08', name: 'of the Phoenix', type: 'Suffix', tier: 3, requiredItemLevel: 28, weight: 40, modifiers: [{ stat: 'fireResist', minValue: 20, maxValue: 45, isPercentage: true }] },
      { id: 's_glacier_09', name: 'of the Glacier', type: 'Suffix', tier: 3, requiredItemLevel: 28, weight: 40, modifiers: [{ stat: 'frostResist', minValue: 20, maxValue: 45, isPercentage: true }] },
      { id: 's_greed_10', name: 'of Infinite Greed', type: 'Suffix', tier: 2, requiredItemLevel: 10, weight: 50, modifiers: [{ stat: 'goldFind', minValue: 25, maxValue: 75, isPercentage: true }, { stat: 'magicFind', minValue: 15, maxValue: 40, isPercentage: true }] }
    );
  }

  private registerBaseItems(): void {
    this.baseItems.set('base_sword_01', { name: 'Broadsword', slot: 'MainHand', baseStats: [{ stat: 'attackPower', minValue: 18, maxValue: 24, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_sword_02', { name: 'Claymore', slot: 'TwoHand', baseStats: [{ stat: 'attackPower', minValue: 35, maxValue: 48, isPercentage: false }], levelReq: 5 });
    this.baseItems.set('base_dagger_01', { name: 'Stiletto Dagger', slot: 'MainHand', baseStats: [{ stat: 'attackPower', minValue: 12, maxValue: 16, isPercentage: false }, { stat: 'critChance', minValue: 8, maxValue: 12, isPercentage: true }], levelReq: 1 });
    this.baseItems.set('base_staff_01', { name: 'Oak Staff', slot: 'TwoHand', baseStats: [{ stat: 'spellPower', minValue: 22, maxValue: 30, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_wand_01', { name: 'Crystal Wand', slot: 'MainHand', baseStats: [{ stat: 'spellPower', minValue: 15, maxValue: 22, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_shield_01', { name: 'Kite Shield', slot: 'OffHand', baseStats: [{ stat: 'armor', minValue: 25, maxValue: 35, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_helm_01', { name: 'Iron Greathelm', slot: 'Helmet', baseStats: [{ stat: 'armor', minValue: 15, maxValue: 22, isPercentage: false }, { stat: 'maxHp', minValue: 15, maxValue: 25, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_chest_01', { name: 'Steel Cuirass', slot: 'ChestArmor', baseStats: [{ stat: 'armor', minValue: 30, maxValue: 45, isPercentage: false }, { stat: 'maxHp', minValue: 30, maxValue: 50, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_gloves_01', { name: 'Gauntlets of Might', slot: 'Gloves', baseStats: [{ stat: 'armor', minValue: 12, maxValue: 18, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_boots_01', { name: 'Plated Greaves', slot: 'Boots', baseStats: [{ stat: 'armor', minValue: 14, maxValue: 20, isPercentage: false }, { stat: 'moveSpeed', minValue: 5, maxValue: 10, isPercentage: true }], levelReq: 1 });
    this.baseItems.set('base_ring_01', { name: 'Ruby Signet Ring', slot: 'Ring1', baseStats: [{ stat: 'maxHp', minValue: 25, maxValue: 40, isPercentage: false }], levelReq: 1 });
    this.baseItems.set('base_amulet_01', { name: 'Talisman of Wisdom', slot: 'Amulet', baseStats: [{ stat: 'maxEnergy', minValue: 20, maxValue: 35, isPercentage: false }], levelReq: 1 });
  }
}
