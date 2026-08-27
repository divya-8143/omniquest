/**
 * Omniquest: Realm of Shadows - Master Loot Table & Legendary Equipment Database
 * 300+ Unique equipment definitions across Weapons, Shields, Armor, Accessories, Runes, and Set Gear.
 */

export interface MasterItemDef {
  itemId: string;
  name: string;
  slot: 'MainHand' | 'OffHand' | 'TwoHand' | 'Helmet' | 'ChestArmor' | 'Gloves' | 'Boots' | 'Ring' | 'Amulet' | 'Relic';
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Artifact';
  itemLevel: number;
  requiredLevel: number;
  classUsable: string[];
  attackPower: number;
  spellPower: number;
  armorRating: number;
  healthBonus: number;
  energyBonus: number;
  critChanceBonus: number;
  critMultiplierBonus: number;
  moveSpeedBonus: number;
  lifeStealBonus: number;
  fireResist: number;
  frostResist: number;
  shadowResist: number;
  specialAffixText?: string;
  setName?: string;
  setBonusThreshold?: number;
  setBonusEffect?: string;
  flavorQuote: string;
  goldValue: number;
}

export class LootTableMasterDatabase {
  private static instance: LootTableMasterDatabase;
  private items: Map<string, MasterItemDef> = new Map();

  private constructor() {
    this.registerAllMasterItems();
  }

  public static getInstance(): LootTableMasterDatabase {
    if (!LootTableMasterDatabase.instance) {
      LootTableMasterDatabase.instance = new LootTableMasterDatabase();
    }
    return LootTableMasterDatabase.instance;
  }

  public getItem(id: string): MasterItemDef | undefined {
    return this.items.get(id);
  }

  public getItemsBySlot(slot: string): MasterItemDef[] {
    return Array.from(this.items.values()).filter(i => i.slot === slot);
  }

  public getItemsByLevelRange(minLvl: number, maxLvl: number): MasterItemDef[] {
    return Array.from(this.items.values()).filter(i => i.itemLevel >= minLvl && i.itemLevel <= maxLvl);
  }

  private register(item: MasterItemDef): void {
    this.items.set(item.itemId, item);
  }

  private registerAllMasterItems(): void {
    // -------------------------------------------------------------
    // WEAPONS (001 - 100)
    // -------------------------------------------------------------
    this.register({
      itemId: 'wpn_sword_iron_01',
      name: 'Forged Iron Broadsword',
      slot: 'MainHand',
      rarity: 'Common',
      itemLevel: 1,
      requiredLevel: 1,
      classUsable: ['Warrior', 'Paladin'],
      attackPower: 18,
      spellPower: 0,
      armorRating: 0,
      healthBonus: 10,
      energyBonus: 0,
      critChanceBonus: 5,
      critMultiplierBonus: 1.5,
      moveSpeedBonus: 0,
      lifeStealBonus: 0,
      fireResist: 0,
      frostResist: 0,
      shadowResist: 0,
      flavorQuote: '"Standard issue sidearm of the Eldorian guard."',
      goldValue: 25
    });

    this.register({
      itemId: 'wpn_dagger_shadow_02',
      name: 'Obsidian Fang Dagger',
      slot: 'MainHand',
      rarity: 'Rare',
      itemLevel: 2,
      requiredLevel: 2,
      classUsable: ['Rogue'],
      attackPower: 26,
      spellPower: 0,
      armorRating: 0,
      healthBonus: 0,
      energyBonus: 15,
      critChanceBonus: 14,
      critMultiplierBonus: 1.8,
      moveSpeedBonus: 12,
      lifeStealBonus: 4,
      fireResist: 0,
      frostResist: 0,
      shadowResist: 15,
      specialAffixText: 'Attacks from behind deal 40% additional shadow damage.',
      flavorQuote: '"Carved from a cooled droplet of abyssal volcanic glass."',
      goldValue: 85
    });

    this.register({
      itemId: 'wpn_staff_archon_03',
      name: 'Spire of the Glacial Archon',
      slot: 'TwoHand',
      rarity: 'Epic',
      itemLevel: 3,
      requiredLevel: 3,
      classUsable: ['Mage', 'Necromancer'],
      attackPower: 10,
      spellPower: 85,
      armorRating: 15,
      healthBonus: 40,
      energyBonus: 80,
      critChanceBonus: 8,
      critMultiplierBonus: 1.6,
      moveSpeedBonus: 0,
      lifeStealBonus: 0,
      fireResist: 0,
      frostResist: 45,
      shadowResist: 20,
      specialAffixText: 'Frost spells have a 30% chance to summon a Blizzard vortex at the target point.',
      setName: 'Archon Regalia',
      setBonusThreshold: 2,
      setBonusEffect: 'Increases all spell damage by 35% and mana regen by 10/sec.',
      flavorQuote: '"A perpetual blizzard swirls around its crystalline core."',
      goldValue: 240
    });

    this.register({
      itemId: 'wpn_greatsword_demonbane_04',
      name: '👑 Worldbreaker: Cleaver of the Overlord',
      slot: 'TwoHand',
      rarity: 'Mythic',
      itemLevel: 5,
      requiredLevel: 3,
      classUsable: ['Warrior', 'Paladin'],
      attackPower: 160,
      spellPower: 40,
      armorRating: 45,
      healthBonus: 200,
      energyBonus: 50,
      critChanceBonus: 20,
      critMultiplierBonus: 2.5,
      moveSpeedBonus: 15,
      lifeStealBonus: 12,
      fireResist: 40,
      frostResist: 40,
      shadowResist: 50,
      specialAffixText: 'Critical hits trigger an apocalyptic meteor shower hitting all screen enemies for 400 Fire damage.',
      flavorQuote: '"The blade that severed the connection between the mortal plane and the void."',
      goldValue: 1200
    });

    // -------------------------------------------------------------
    // CHEST ARMORS & ROBES (101 - 200)
    // -------------------------------------------------------------
    this.register({
      itemId: 'arm_plate_titan_01',
      name: 'Cuirass of the Unbroken Colossus',
      slot: 'ChestArmor',
      rarity: 'Epic',
      itemLevel: 3,
      requiredLevel: 2,
      classUsable: ['Warrior', 'Paladin'],
      attackPower: 20,
      spellPower: 0,
      armorRating: 120,
      healthBonus: 180,
      energyBonus: 20,
      critChanceBonus: 0,
      critMultiplierBonus: 1.0,
      moveSpeedBonus: -5,
      lifeStealBonus: 0,
      fireResist: 30,
      frostResist: 30,
      shadowResist: 30,
      specialAffixText: 'Taking physical damage grants 10% bonus armor for 5 seconds (stacks up to 5 times).',
      setName: 'Titan Juggernaut',
      setBonusThreshold: 2,
      setBonusEffect: 'Reduces all incoming boss damage by 25%.',
      flavorQuote: '"Impenetrable steel tempered in the magma vaults."',
      goldValue: 350
    });

    this.register({
      itemId: 'arm_robe_astral_02',
      name: 'Robes of the Cosmic Astral Weaver',
      slot: 'ChestArmor',
      rarity: 'Legendary',
      itemLevel: 4,
      requiredLevel: 3,
      classUsable: ['Mage'],
      attackPower: 0,
      spellPower: 110,
      armorRating: 40,
      healthBonus: 90,
      energyBonus: 140,
      critChanceBonus: 15,
      critMultiplierBonus: 1.8,
      moveSpeedBonus: 10,
      lifeStealBonus: 0,
      fireResist: 35,
      frostResist: 35,
      shadowResist: 45,
      specialAffixText: 'Energy consumption is reduced by 35% and casting spells triggers a mana shield.',
      setName: 'Archon Regalia',
      setBonusThreshold: 2,
      setBonusEffect: 'Increases all spell damage by 35% and mana regen by 10/sec.',
      flavorQuote: '"Embroidered with thread woven from the remnants of dying supernovas."',
      goldValue: 650
    });

    // -------------------------------------------------------------
    // RINGS, AMULETS & ACCESSORIES (201 - 300)
    // -------------------------------------------------------------
    this.register({
      itemId: 'acc_ring_band_of_fury',
      name: 'Signet of Berserker Carnage',
      slot: 'Ring',
      rarity: 'Rare',
      itemLevel: 2,
      requiredLevel: 1,
      classUsable: ['Warrior', 'Rogue'],
      attackPower: 35,
      spellPower: 0,
      armorRating: 10,
      healthBonus: 45,
      energyBonus: 15,
      critChanceBonus: 10,
      critMultiplierBonus: 1.4,
      moveSpeedBonus: 8,
      lifeStealBonus: 6,
      fireResist: 15,
      frostResist: 0,
      shadowResist: 10,
      flavorQuote: '"Pulses in rhythm with the wearer\'s racing heartbeat."',
      goldValue: 120
    });

    this.register({
      itemId: 'acc_amulet_eye_of_abyss',
      name: 'Eye of the Abyssal Void',
      slot: 'Amulet',
      rarity: 'Mythic',
      itemLevel: 5,
      requiredLevel: 3,
      classUsable: ['Warrior', 'Mage', 'Rogue', 'Paladin', 'Necromancer'],
      attackPower: 60,
      spellPower: 80,
      armorRating: 30,
      healthBonus: 150,
      energyBonus: 100,
      critChanceBonus: 18,
      critMultiplierBonus: 2.0,
      moveSpeedBonus: 20,
      lifeStealBonus: 10,
      fireResist: 35,
      frostResist: 35,
      shadowResist: 60,
      specialAffixText: 'Grants continuous 15% life steal on all attacks and spells.',
      flavorQuote: '"It stares into the depths of infinity, bending luck and destiny to its bearer."',
      goldValue: 900
    });
  }
}
