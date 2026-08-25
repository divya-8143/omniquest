export interface ItemAffix {
  name: string;
  stat: 'attack' | 'defense' | 'health' | 'speed' | 'critChance';
  modifier: number;
}

export interface ItemDef {
  id: string;
  name: string;
  slot: 'head' | 'chest' | 'hands' | 'legs' | 'weapon' | 'ring' | 'amulet';
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
  baseStat: number;
  affixes: ItemAffix[];
}

export class ItemCatalog {
  private static catalog: Map<string, ItemDef> = new Map();

  static initialize(): void {
    this.catalog.set('item_1', {
      id: 'item_1',
      name: 'Omni Gear 1',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 15,
      affixes: [
        { name: 'Prefix_1', stat: 'attack', modifier: 2 },
        { name: 'Suffix_1', stat: 'defense', modifier: 1 }
      ]
    });
    this.catalog.set('item_2', {
      id: 'item_2',
      name: 'Omni Gear 2',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 20,
      affixes: [
        { name: 'Prefix_2', stat: 'attack', modifier: 4 },
        { name: 'Suffix_2', stat: 'defense', modifier: 2 }
      ]
    });
    this.catalog.set('item_3', {
      id: 'item_3',
      name: 'Omni Gear 3',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 25,
      affixes: [
        { name: 'Prefix_3', stat: 'attack', modifier: 6 },
        { name: 'Suffix_3', stat: 'defense', modifier: 3 }
      ]
    });
    this.catalog.set('item_4', {
      id: 'item_4',
      name: 'Omni Gear 4',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 30,
      affixes: [
        { name: 'Prefix_4', stat: 'attack', modifier: 8 },
        { name: 'Suffix_4', stat: 'defense', modifier: 4 }
      ]
    });
    this.catalog.set('item_5', {
      id: 'item_5',
      name: 'Omni Gear 5',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 35,
      affixes: [
        { name: 'Prefix_5', stat: 'attack', modifier: 10 },
        { name: 'Suffix_5', stat: 'defense', modifier: 5 }
      ]
    });
    this.catalog.set('item_6', {
      id: 'item_6',
      name: 'Omni Gear 6',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 40,
      affixes: [
        { name: 'Prefix_6', stat: 'attack', modifier: 12 },
        { name: 'Suffix_6', stat: 'defense', modifier: 6 }
      ]
    });
    this.catalog.set('item_7', {
      id: 'item_7',
      name: 'Omni Gear 7',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 45,
      affixes: [
        { name: 'Prefix_7', stat: 'attack', modifier: 14 },
        { name: 'Suffix_7', stat: 'defense', modifier: 7 }
      ]
    });
    this.catalog.set('item_8', {
      id: 'item_8',
      name: 'Omni Gear 8',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 50,
      affixes: [
        { name: 'Prefix_8', stat: 'attack', modifier: 16 },
        { name: 'Suffix_8', stat: 'defense', modifier: 8 }
      ]
    });
    this.catalog.set('item_9', {
      id: 'item_9',
      name: 'Omni Gear 9',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 55,
      affixes: [
        { name: 'Prefix_9', stat: 'attack', modifier: 18 },
        { name: 'Suffix_9', stat: 'defense', modifier: 9 }
      ]
    });
    this.catalog.set('item_10', {
      id: 'item_10',
      name: 'Omni Gear 10',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 60,
      affixes: [
        { name: 'Prefix_10', stat: 'attack', modifier: 20 },
        { name: 'Suffix_10', stat: 'defense', modifier: 10 }
      ]
    });
    this.catalog.set('item_11', {
      id: 'item_11',
      name: 'Omni Gear 11',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 65,
      affixes: [
        { name: 'Prefix_11', stat: 'attack', modifier: 22 },
        { name: 'Suffix_11', stat: 'defense', modifier: 11 }
      ]
    });
    this.catalog.set('item_12', {
      id: 'item_12',
      name: 'Omni Gear 12',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 70,
      affixes: [
        { name: 'Prefix_12', stat: 'attack', modifier: 24 },
        { name: 'Suffix_12', stat: 'defense', modifier: 12 }
      ]
    });
    this.catalog.set('item_13', {
      id: 'item_13',
      name: 'Omni Gear 13',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 75,
      affixes: [
        { name: 'Prefix_13', stat: 'attack', modifier: 26 },
        { name: 'Suffix_13', stat: 'defense', modifier: 13 }
      ]
    });
    this.catalog.set('item_14', {
      id: 'item_14',
      name: 'Omni Gear 14',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 80,
      affixes: [
        { name: 'Prefix_14', stat: 'attack', modifier: 28 },
        { name: 'Suffix_14', stat: 'defense', modifier: 14 }
      ]
    });
    this.catalog.set('item_15', {
      id: 'item_15',
      name: 'Omni Gear 15',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 85,
      affixes: [
        { name: 'Prefix_15', stat: 'attack', modifier: 30 },
        { name: 'Suffix_15', stat: 'defense', modifier: 15 }
      ]
    });
    this.catalog.set('item_16', {
      id: 'item_16',
      name: 'Omni Gear 16',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 90,
      affixes: [
        { name: 'Prefix_16', stat: 'attack', modifier: 32 },
        { name: 'Suffix_16', stat: 'defense', modifier: 16 }
      ]
    });
    this.catalog.set('item_17', {
      id: 'item_17',
      name: 'Omni Gear 17',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 95,
      affixes: [
        { name: 'Prefix_17', stat: 'attack', modifier: 34 },
        { name: 'Suffix_17', stat: 'defense', modifier: 17 }
      ]
    });
    this.catalog.set('item_18', {
      id: 'item_18',
      name: 'Omni Gear 18',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 100,
      affixes: [
        { name: 'Prefix_18', stat: 'attack', modifier: 36 },
        { name: 'Suffix_18', stat: 'defense', modifier: 18 }
      ]
    });
    this.catalog.set('item_19', {
      id: 'item_19',
      name: 'Omni Gear 19',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 105,
      affixes: [
        { name: 'Prefix_19', stat: 'attack', modifier: 38 },
        { name: 'Suffix_19', stat: 'defense', modifier: 19 }
      ]
    });
    this.catalog.set('item_20', {
      id: 'item_20',
      name: 'Omni Gear 20',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 110,
      affixes: [
        { name: 'Prefix_20', stat: 'attack', modifier: 40 },
        { name: 'Suffix_20', stat: 'defense', modifier: 20 }
      ]
    });
    this.catalog.set('item_21', {
      id: 'item_21',
      name: 'Omni Gear 21',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 115,
      affixes: [
        { name: 'Prefix_21', stat: 'attack', modifier: 42 },
        { name: 'Suffix_21', stat: 'defense', modifier: 21 }
      ]
    });
    this.catalog.set('item_22', {
      id: 'item_22',
      name: 'Omni Gear 22',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 120,
      affixes: [
        { name: 'Prefix_22', stat: 'attack', modifier: 44 },
        { name: 'Suffix_22', stat: 'defense', modifier: 22 }
      ]
    });
    this.catalog.set('item_23', {
      id: 'item_23',
      name: 'Omni Gear 23',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 125,
      affixes: [
        { name: 'Prefix_23', stat: 'attack', modifier: 46 },
        { name: 'Suffix_23', stat: 'defense', modifier: 23 }
      ]
    });
    this.catalog.set('item_24', {
      id: 'item_24',
      name: 'Omni Gear 24',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 130,
      affixes: [
        { name: 'Prefix_24', stat: 'attack', modifier: 48 },
        { name: 'Suffix_24', stat: 'defense', modifier: 24 }
      ]
    });
    this.catalog.set('item_25', {
      id: 'item_25',
      name: 'Omni Gear 25',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 135,
      affixes: [
        { name: 'Prefix_25', stat: 'attack', modifier: 50 },
        { name: 'Suffix_25', stat: 'defense', modifier: 25 }
      ]
    });
    this.catalog.set('item_26', {
      id: 'item_26',
      name: 'Omni Gear 26',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 140,
      affixes: [
        { name: 'Prefix_26', stat: 'attack', modifier: 52 },
        { name: 'Suffix_26', stat: 'defense', modifier: 26 }
      ]
    });
    this.catalog.set('item_27', {
      id: 'item_27',
      name: 'Omni Gear 27',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 145,
      affixes: [
        { name: 'Prefix_27', stat: 'attack', modifier: 54 },
        { name: 'Suffix_27', stat: 'defense', modifier: 27 }
      ]
    });
    this.catalog.set('item_28', {
      id: 'item_28',
      name: 'Omni Gear 28',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 150,
      affixes: [
        { name: 'Prefix_28', stat: 'attack', modifier: 56 },
        { name: 'Suffix_28', stat: 'defense', modifier: 28 }
      ]
    });
    this.catalog.set('item_29', {
      id: 'item_29',
      name: 'Omni Gear 29',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 155,
      affixes: [
        { name: 'Prefix_29', stat: 'attack', modifier: 58 },
        { name: 'Suffix_29', stat: 'defense', modifier: 29 }
      ]
    });
    this.catalog.set('item_30', {
      id: 'item_30',
      name: 'Omni Gear 30',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 160,
      affixes: [
        { name: 'Prefix_30', stat: 'attack', modifier: 60 },
        { name: 'Suffix_30', stat: 'defense', modifier: 30 }
      ]
    });
    this.catalog.set('item_31', {
      id: 'item_31',
      name: 'Omni Gear 31',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 165,
      affixes: [
        { name: 'Prefix_31', stat: 'attack', modifier: 62 },
        { name: 'Suffix_31', stat: 'defense', modifier: 31 }
      ]
    });
    this.catalog.set('item_32', {
      id: 'item_32',
      name: 'Omni Gear 32',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 170,
      affixes: [
        { name: 'Prefix_32', stat: 'attack', modifier: 64 },
        { name: 'Suffix_32', stat: 'defense', modifier: 32 }
      ]
    });
    this.catalog.set('item_33', {
      id: 'item_33',
      name: 'Omni Gear 33',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 175,
      affixes: [
        { name: 'Prefix_33', stat: 'attack', modifier: 66 },
        { name: 'Suffix_33', stat: 'defense', modifier: 33 }
      ]
    });
    this.catalog.set('item_34', {
      id: 'item_34',
      name: 'Omni Gear 34',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 180,
      affixes: [
        { name: 'Prefix_34', stat: 'attack', modifier: 68 },
        { name: 'Suffix_34', stat: 'defense', modifier: 34 }
      ]
    });
    this.catalog.set('item_35', {
      id: 'item_35',
      name: 'Omni Gear 35',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 185,
      affixes: [
        { name: 'Prefix_35', stat: 'attack', modifier: 70 },
        { name: 'Suffix_35', stat: 'defense', modifier: 35 }
      ]
    });
    this.catalog.set('item_36', {
      id: 'item_36',
      name: 'Omni Gear 36',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 190,
      affixes: [
        { name: 'Prefix_36', stat: 'attack', modifier: 72 },
        { name: 'Suffix_36', stat: 'defense', modifier: 36 }
      ]
    });
    this.catalog.set('item_37', {
      id: 'item_37',
      name: 'Omni Gear 37',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 195,
      affixes: [
        { name: 'Prefix_37', stat: 'attack', modifier: 74 },
        { name: 'Suffix_37', stat: 'defense', modifier: 37 }
      ]
    });
    this.catalog.set('item_38', {
      id: 'item_38',
      name: 'Omni Gear 38',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 200,
      affixes: [
        { name: 'Prefix_38', stat: 'attack', modifier: 76 },
        { name: 'Suffix_38', stat: 'defense', modifier: 38 }
      ]
    });
    this.catalog.set('item_39', {
      id: 'item_39',
      name: 'Omni Gear 39',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 205,
      affixes: [
        { name: 'Prefix_39', stat: 'attack', modifier: 78 },
        { name: 'Suffix_39', stat: 'defense', modifier: 39 }
      ]
    });
    this.catalog.set('item_40', {
      id: 'item_40',
      name: 'Omni Gear 40',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 210,
      affixes: [
        { name: 'Prefix_40', stat: 'attack', modifier: 80 },
        { name: 'Suffix_40', stat: 'defense', modifier: 40 }
      ]
    });
    this.catalog.set('item_41', {
      id: 'item_41',
      name: 'Omni Gear 41',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 215,
      affixes: [
        { name: 'Prefix_41', stat: 'attack', modifier: 82 },
        { name: 'Suffix_41', stat: 'defense', modifier: 41 }
      ]
    });
    this.catalog.set('item_42', {
      id: 'item_42',
      name: 'Omni Gear 42',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 220,
      affixes: [
        { name: 'Prefix_42', stat: 'attack', modifier: 84 },
        { name: 'Suffix_42', stat: 'defense', modifier: 42 }
      ]
    });
    this.catalog.set('item_43', {
      id: 'item_43',
      name: 'Omni Gear 43',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 225,
      affixes: [
        { name: 'Prefix_43', stat: 'attack', modifier: 86 },
        { name: 'Suffix_43', stat: 'defense', modifier: 43 }
      ]
    });
    this.catalog.set('item_44', {
      id: 'item_44',
      name: 'Omni Gear 44',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 230,
      affixes: [
        { name: 'Prefix_44', stat: 'attack', modifier: 88 },
        { name: 'Suffix_44', stat: 'defense', modifier: 44 }
      ]
    });
    this.catalog.set('item_45', {
      id: 'item_45',
      name: 'Omni Gear 45',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 235,
      affixes: [
        { name: 'Prefix_45', stat: 'attack', modifier: 90 },
        { name: 'Suffix_45', stat: 'defense', modifier: 45 }
      ]
    });
    this.catalog.set('item_46', {
      id: 'item_46',
      name: 'Omni Gear 46',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 240,
      affixes: [
        { name: 'Prefix_46', stat: 'attack', modifier: 92 },
        { name: 'Suffix_46', stat: 'defense', modifier: 46 }
      ]
    });
    this.catalog.set('item_47', {
      id: 'item_47',
      name: 'Omni Gear 47',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 245,
      affixes: [
        { name: 'Prefix_47', stat: 'attack', modifier: 94 },
        { name: 'Suffix_47', stat: 'defense', modifier: 47 }
      ]
    });
    this.catalog.set('item_48', {
      id: 'item_48',
      name: 'Omni Gear 48',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 250,
      affixes: [
        { name: 'Prefix_48', stat: 'attack', modifier: 96 },
        { name: 'Suffix_48', stat: 'defense', modifier: 48 }
      ]
    });
    this.catalog.set('item_49', {
      id: 'item_49',
      name: 'Omni Gear 49',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 255,
      affixes: [
        { name: 'Prefix_49', stat: 'attack', modifier: 98 },
        { name: 'Suffix_49', stat: 'defense', modifier: 49 }
      ]
    });
    this.catalog.set('item_50', {
      id: 'item_50',
      name: 'Omni Gear 50',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 260,
      affixes: [
        { name: 'Prefix_50', stat: 'attack', modifier: 100 },
        { name: 'Suffix_50', stat: 'defense', modifier: 50 }
      ]
    });
    this.catalog.set('item_51', {
      id: 'item_51',
      name: 'Omni Gear 51',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 265,
      affixes: [
        { name: 'Prefix_51', stat: 'attack', modifier: 102 },
        { name: 'Suffix_51', stat: 'defense', modifier: 51 }
      ]
    });
    this.catalog.set('item_52', {
      id: 'item_52',
      name: 'Omni Gear 52',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 270,
      affixes: [
        { name: 'Prefix_52', stat: 'attack', modifier: 104 },
        { name: 'Suffix_52', stat: 'defense', modifier: 52 }
      ]
    });
    this.catalog.set('item_53', {
      id: 'item_53',
      name: 'Omni Gear 53',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 275,
      affixes: [
        { name: 'Prefix_53', stat: 'attack', modifier: 106 },
        { name: 'Suffix_53', stat: 'defense', modifier: 53 }
      ]
    });
    this.catalog.set('item_54', {
      id: 'item_54',
      name: 'Omni Gear 54',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 280,
      affixes: [
        { name: 'Prefix_54', stat: 'attack', modifier: 108 },
        { name: 'Suffix_54', stat: 'defense', modifier: 54 }
      ]
    });
    this.catalog.set('item_55', {
      id: 'item_55',
      name: 'Omni Gear 55',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 285,
      affixes: [
        { name: 'Prefix_55', stat: 'attack', modifier: 110 },
        { name: 'Suffix_55', stat: 'defense', modifier: 55 }
      ]
    });
    this.catalog.set('item_56', {
      id: 'item_56',
      name: 'Omni Gear 56',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 290,
      affixes: [
        { name: 'Prefix_56', stat: 'attack', modifier: 112 },
        { name: 'Suffix_56', stat: 'defense', modifier: 56 }
      ]
    });
    this.catalog.set('item_57', {
      id: 'item_57',
      name: 'Omni Gear 57',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 295,
      affixes: [
        { name: 'Prefix_57', stat: 'attack', modifier: 114 },
        { name: 'Suffix_57', stat: 'defense', modifier: 57 }
      ]
    });
    this.catalog.set('item_58', {
      id: 'item_58',
      name: 'Omni Gear 58',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 300,
      affixes: [
        { name: 'Prefix_58', stat: 'attack', modifier: 116 },
        { name: 'Suffix_58', stat: 'defense', modifier: 58 }
      ]
    });
    this.catalog.set('item_59', {
      id: 'item_59',
      name: 'Omni Gear 59',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 305,
      affixes: [
        { name: 'Prefix_59', stat: 'attack', modifier: 118 },
        { name: 'Suffix_59', stat: 'defense', modifier: 59 }
      ]
    });
    this.catalog.set('item_60', {
      id: 'item_60',
      name: 'Omni Gear 60',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 310,
      affixes: [
        { name: 'Prefix_60', stat: 'attack', modifier: 120 },
        { name: 'Suffix_60', stat: 'defense', modifier: 60 }
      ]
    });
    this.catalog.set('item_61', {
      id: 'item_61',
      name: 'Omni Gear 61',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 315,
      affixes: [
        { name: 'Prefix_61', stat: 'attack', modifier: 122 },
        { name: 'Suffix_61', stat: 'defense', modifier: 61 }
      ]
    });
    this.catalog.set('item_62', {
      id: 'item_62',
      name: 'Omni Gear 62',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 320,
      affixes: [
        { name: 'Prefix_62', stat: 'attack', modifier: 124 },
        { name: 'Suffix_62', stat: 'defense', modifier: 62 }
      ]
    });
    this.catalog.set('item_63', {
      id: 'item_63',
      name: 'Omni Gear 63',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 325,
      affixes: [
        { name: 'Prefix_63', stat: 'attack', modifier: 126 },
        { name: 'Suffix_63', stat: 'defense', modifier: 63 }
      ]
    });
    this.catalog.set('item_64', {
      id: 'item_64',
      name: 'Omni Gear 64',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 330,
      affixes: [
        { name: 'Prefix_64', stat: 'attack', modifier: 128 },
        { name: 'Suffix_64', stat: 'defense', modifier: 64 }
      ]
    });
    this.catalog.set('item_65', {
      id: 'item_65',
      name: 'Omni Gear 65',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 335,
      affixes: [
        { name: 'Prefix_65', stat: 'attack', modifier: 130 },
        { name: 'Suffix_65', stat: 'defense', modifier: 65 }
      ]
    });
    this.catalog.set('item_66', {
      id: 'item_66',
      name: 'Omni Gear 66',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 340,
      affixes: [
        { name: 'Prefix_66', stat: 'attack', modifier: 132 },
        { name: 'Suffix_66', stat: 'defense', modifier: 66 }
      ]
    });
    this.catalog.set('item_67', {
      id: 'item_67',
      name: 'Omni Gear 67',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 345,
      affixes: [
        { name: 'Prefix_67', stat: 'attack', modifier: 134 },
        { name: 'Suffix_67', stat: 'defense', modifier: 67 }
      ]
    });
    this.catalog.set('item_68', {
      id: 'item_68',
      name: 'Omni Gear 68',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 350,
      affixes: [
        { name: 'Prefix_68', stat: 'attack', modifier: 136 },
        { name: 'Suffix_68', stat: 'defense', modifier: 68 }
      ]
    });
    this.catalog.set('item_69', {
      id: 'item_69',
      name: 'Omni Gear 69',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 355,
      affixes: [
        { name: 'Prefix_69', stat: 'attack', modifier: 138 },
        { name: 'Suffix_69', stat: 'defense', modifier: 69 }
      ]
    });
    this.catalog.set('item_70', {
      id: 'item_70',
      name: 'Omni Gear 70',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 360,
      affixes: [
        { name: 'Prefix_70', stat: 'attack', modifier: 140 },
        { name: 'Suffix_70', stat: 'defense', modifier: 70 }
      ]
    });
    this.catalog.set('item_71', {
      id: 'item_71',
      name: 'Omni Gear 71',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 365,
      affixes: [
        { name: 'Prefix_71', stat: 'attack', modifier: 142 },
        { name: 'Suffix_71', stat: 'defense', modifier: 71 }
      ]
    });
    this.catalog.set('item_72', {
      id: 'item_72',
      name: 'Omni Gear 72',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 370,
      affixes: [
        { name: 'Prefix_72', stat: 'attack', modifier: 144 },
        { name: 'Suffix_72', stat: 'defense', modifier: 72 }
      ]
    });
    this.catalog.set('item_73', {
      id: 'item_73',
      name: 'Omni Gear 73',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 375,
      affixes: [
        { name: 'Prefix_73', stat: 'attack', modifier: 146 },
        { name: 'Suffix_73', stat: 'defense', modifier: 73 }
      ]
    });
    this.catalog.set('item_74', {
      id: 'item_74',
      name: 'Omni Gear 74',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 380,
      affixes: [
        { name: 'Prefix_74', stat: 'attack', modifier: 148 },
        { name: 'Suffix_74', stat: 'defense', modifier: 74 }
      ]
    });
    this.catalog.set('item_75', {
      id: 'item_75',
      name: 'Omni Gear 75',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 385,
      affixes: [
        { name: 'Prefix_75', stat: 'attack', modifier: 150 },
        { name: 'Suffix_75', stat: 'defense', modifier: 75 }
      ]
    });
    this.catalog.set('item_76', {
      id: 'item_76',
      name: 'Omni Gear 76',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 390,
      affixes: [
        { name: 'Prefix_76', stat: 'attack', modifier: 152 },
        { name: 'Suffix_76', stat: 'defense', modifier: 76 }
      ]
    });
    this.catalog.set('item_77', {
      id: 'item_77',
      name: 'Omni Gear 77',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 395,
      affixes: [
        { name: 'Prefix_77', stat: 'attack', modifier: 154 },
        { name: 'Suffix_77', stat: 'defense', modifier: 77 }
      ]
    });
    this.catalog.set('item_78', {
      id: 'item_78',
      name: 'Omni Gear 78',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 400,
      affixes: [
        { name: 'Prefix_78', stat: 'attack', modifier: 156 },
        { name: 'Suffix_78', stat: 'defense', modifier: 78 }
      ]
    });
    this.catalog.set('item_79', {
      id: 'item_79',
      name: 'Omni Gear 79',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 405,
      affixes: [
        { name: 'Prefix_79', stat: 'attack', modifier: 158 },
        { name: 'Suffix_79', stat: 'defense', modifier: 79 }
      ]
    });
    this.catalog.set('item_80', {
      id: 'item_80',
      name: 'Omni Gear 80',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 410,
      affixes: [
        { name: 'Prefix_80', stat: 'attack', modifier: 160 },
        { name: 'Suffix_80', stat: 'defense', modifier: 80 }
      ]
    });
    this.catalog.set('item_81', {
      id: 'item_81',
      name: 'Omni Gear 81',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 415,
      affixes: [
        { name: 'Prefix_81', stat: 'attack', modifier: 162 },
        { name: 'Suffix_81', stat: 'defense', modifier: 81 }
      ]
    });
    this.catalog.set('item_82', {
      id: 'item_82',
      name: 'Omni Gear 82',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 420,
      affixes: [
        { name: 'Prefix_82', stat: 'attack', modifier: 164 },
        { name: 'Suffix_82', stat: 'defense', modifier: 82 }
      ]
    });
    this.catalog.set('item_83', {
      id: 'item_83',
      name: 'Omni Gear 83',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 425,
      affixes: [
        { name: 'Prefix_83', stat: 'attack', modifier: 166 },
        { name: 'Suffix_83', stat: 'defense', modifier: 83 }
      ]
    });
    this.catalog.set('item_84', {
      id: 'item_84',
      name: 'Omni Gear 84',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 430,
      affixes: [
        { name: 'Prefix_84', stat: 'attack', modifier: 168 },
        { name: 'Suffix_84', stat: 'defense', modifier: 84 }
      ]
    });
    this.catalog.set('item_85', {
      id: 'item_85',
      name: 'Omni Gear 85',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 435,
      affixes: [
        { name: 'Prefix_85', stat: 'attack', modifier: 170 },
        { name: 'Suffix_85', stat: 'defense', modifier: 85 }
      ]
    });
    this.catalog.set('item_86', {
      id: 'item_86',
      name: 'Omni Gear 86',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 440,
      affixes: [
        { name: 'Prefix_86', stat: 'attack', modifier: 172 },
        { name: 'Suffix_86', stat: 'defense', modifier: 86 }
      ]
    });
    this.catalog.set('item_87', {
      id: 'item_87',
      name: 'Omni Gear 87',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 445,
      affixes: [
        { name: 'Prefix_87', stat: 'attack', modifier: 174 },
        { name: 'Suffix_87', stat: 'defense', modifier: 87 }
      ]
    });
    this.catalog.set('item_88', {
      id: 'item_88',
      name: 'Omni Gear 88',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 450,
      affixes: [
        { name: 'Prefix_88', stat: 'attack', modifier: 176 },
        { name: 'Suffix_88', stat: 'defense', modifier: 88 }
      ]
    });
    this.catalog.set('item_89', {
      id: 'item_89',
      name: 'Omni Gear 89',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 455,
      affixes: [
        { name: 'Prefix_89', stat: 'attack', modifier: 178 },
        { name: 'Suffix_89', stat: 'defense', modifier: 89 }
      ]
    });
    this.catalog.set('item_90', {
      id: 'item_90',
      name: 'Omni Gear 90',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 460,
      affixes: [
        { name: 'Prefix_90', stat: 'attack', modifier: 180 },
        { name: 'Suffix_90', stat: 'defense', modifier: 90 }
      ]
    });
    this.catalog.set('item_91', {
      id: 'item_91',
      name: 'Omni Gear 91',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 465,
      affixes: [
        { name: 'Prefix_91', stat: 'attack', modifier: 182 },
        { name: 'Suffix_91', stat: 'defense', modifier: 91 }
      ]
    });
    this.catalog.set('item_92', {
      id: 'item_92',
      name: 'Omni Gear 92',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 470,
      affixes: [
        { name: 'Prefix_92', stat: 'attack', modifier: 184 },
        { name: 'Suffix_92', stat: 'defense', modifier: 92 }
      ]
    });
    this.catalog.set('item_93', {
      id: 'item_93',
      name: 'Omni Gear 93',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 475,
      affixes: [
        { name: 'Prefix_93', stat: 'attack', modifier: 186 },
        { name: 'Suffix_93', stat: 'defense', modifier: 93 }
      ]
    });
    this.catalog.set('item_94', {
      id: 'item_94',
      name: 'Omni Gear 94',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 480,
      affixes: [
        { name: 'Prefix_94', stat: 'attack', modifier: 188 },
        { name: 'Suffix_94', stat: 'defense', modifier: 94 }
      ]
    });
    this.catalog.set('item_95', {
      id: 'item_95',
      name: 'Omni Gear 95',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 485,
      affixes: [
        { name: 'Prefix_95', stat: 'attack', modifier: 190 },
        { name: 'Suffix_95', stat: 'defense', modifier: 95 }
      ]
    });
    this.catalog.set('item_96', {
      id: 'item_96',
      name: 'Omni Gear 96',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 490,
      affixes: [
        { name: 'Prefix_96', stat: 'attack', modifier: 192 },
        { name: 'Suffix_96', stat: 'defense', modifier: 96 }
      ]
    });
    this.catalog.set('item_97', {
      id: 'item_97',
      name: 'Omni Gear 97',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 495,
      affixes: [
        { name: 'Prefix_97', stat: 'attack', modifier: 194 },
        { name: 'Suffix_97', stat: 'defense', modifier: 97 }
      ]
    });
    this.catalog.set('item_98', {
      id: 'item_98',
      name: 'Omni Gear 98',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 500,
      affixes: [
        { name: 'Prefix_98', stat: 'attack', modifier: 196 },
        { name: 'Suffix_98', stat: 'defense', modifier: 98 }
      ]
    });
    this.catalog.set('item_99', {
      id: 'item_99',
      name: 'Omni Gear 99',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 505,
      affixes: [
        { name: 'Prefix_99', stat: 'attack', modifier: 198 },
        { name: 'Suffix_99', stat: 'defense', modifier: 99 }
      ]
    });
    this.catalog.set('item_100', {
      id: 'item_100',
      name: 'Omni Gear 100',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 510,
      affixes: [
        { name: 'Prefix_100', stat: 'attack', modifier: 200 },
        { name: 'Suffix_100', stat: 'defense', modifier: 100 }
      ]
    });
    this.catalog.set('item_101', {
      id: 'item_101',
      name: 'Omni Gear 101',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 515,
      affixes: [
        { name: 'Prefix_101', stat: 'attack', modifier: 202 },
        { name: 'Suffix_101', stat: 'defense', modifier: 101 }
      ]
    });
    this.catalog.set('item_102', {
      id: 'item_102',
      name: 'Omni Gear 102',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 520,
      affixes: [
        { name: 'Prefix_102', stat: 'attack', modifier: 204 },
        { name: 'Suffix_102', stat: 'defense', modifier: 102 }
      ]
    });
    this.catalog.set('item_103', {
      id: 'item_103',
      name: 'Omni Gear 103',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 525,
      affixes: [
        { name: 'Prefix_103', stat: 'attack', modifier: 206 },
        { name: 'Suffix_103', stat: 'defense', modifier: 103 }
      ]
    });
    this.catalog.set('item_104', {
      id: 'item_104',
      name: 'Omni Gear 104',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 530,
      affixes: [
        { name: 'Prefix_104', stat: 'attack', modifier: 208 },
        { name: 'Suffix_104', stat: 'defense', modifier: 104 }
      ]
    });
    this.catalog.set('item_105', {
      id: 'item_105',
      name: 'Omni Gear 105',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 535,
      affixes: [
        { name: 'Prefix_105', stat: 'attack', modifier: 210 },
        { name: 'Suffix_105', stat: 'defense', modifier: 105 }
      ]
    });
    this.catalog.set('item_106', {
      id: 'item_106',
      name: 'Omni Gear 106',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 540,
      affixes: [
        { name: 'Prefix_106', stat: 'attack', modifier: 212 },
        { name: 'Suffix_106', stat: 'defense', modifier: 106 }
      ]
    });
    this.catalog.set('item_107', {
      id: 'item_107',
      name: 'Omni Gear 107',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 545,
      affixes: [
        { name: 'Prefix_107', stat: 'attack', modifier: 214 },
        { name: 'Suffix_107', stat: 'defense', modifier: 107 }
      ]
    });
    this.catalog.set('item_108', {
      id: 'item_108',
      name: 'Omni Gear 108',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 550,
      affixes: [
        { name: 'Prefix_108', stat: 'attack', modifier: 216 },
        { name: 'Suffix_108', stat: 'defense', modifier: 108 }
      ]
    });
    this.catalog.set('item_109', {
      id: 'item_109',
      name: 'Omni Gear 109',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 555,
      affixes: [
        { name: 'Prefix_109', stat: 'attack', modifier: 218 },
        { name: 'Suffix_109', stat: 'defense', modifier: 109 }
      ]
    });
    this.catalog.set('item_110', {
      id: 'item_110',
      name: 'Omni Gear 110',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 560,
      affixes: [
        { name: 'Prefix_110', stat: 'attack', modifier: 220 },
        { name: 'Suffix_110', stat: 'defense', modifier: 110 }
      ]
    });
    this.catalog.set('item_111', {
      id: 'item_111',
      name: 'Omni Gear 111',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 565,
      affixes: [
        { name: 'Prefix_111', stat: 'attack', modifier: 222 },
        { name: 'Suffix_111', stat: 'defense', modifier: 111 }
      ]
    });
    this.catalog.set('item_112', {
      id: 'item_112',
      name: 'Omni Gear 112',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 570,
      affixes: [
        { name: 'Prefix_112', stat: 'attack', modifier: 224 },
        { name: 'Suffix_112', stat: 'defense', modifier: 112 }
      ]
    });
    this.catalog.set('item_113', {
      id: 'item_113',
      name: 'Omni Gear 113',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 575,
      affixes: [
        { name: 'Prefix_113', stat: 'attack', modifier: 226 },
        { name: 'Suffix_113', stat: 'defense', modifier: 113 }
      ]
    });
    this.catalog.set('item_114', {
      id: 'item_114',
      name: 'Omni Gear 114',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 580,
      affixes: [
        { name: 'Prefix_114', stat: 'attack', modifier: 228 },
        { name: 'Suffix_114', stat: 'defense', modifier: 114 }
      ]
    });
    this.catalog.set('item_115', {
      id: 'item_115',
      name: 'Omni Gear 115',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 585,
      affixes: [
        { name: 'Prefix_115', stat: 'attack', modifier: 230 },
        { name: 'Suffix_115', stat: 'defense', modifier: 115 }
      ]
    });
    this.catalog.set('item_116', {
      id: 'item_116',
      name: 'Omni Gear 116',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 590,
      affixes: [
        { name: 'Prefix_116', stat: 'attack', modifier: 232 },
        { name: 'Suffix_116', stat: 'defense', modifier: 116 }
      ]
    });
    this.catalog.set('item_117', {
      id: 'item_117',
      name: 'Omni Gear 117',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 595,
      affixes: [
        { name: 'Prefix_117', stat: 'attack', modifier: 234 },
        { name: 'Suffix_117', stat: 'defense', modifier: 117 }
      ]
    });
    this.catalog.set('item_118', {
      id: 'item_118',
      name: 'Omni Gear 118',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 600,
      affixes: [
        { name: 'Prefix_118', stat: 'attack', modifier: 236 },
        { name: 'Suffix_118', stat: 'defense', modifier: 118 }
      ]
    });
    this.catalog.set('item_119', {
      id: 'item_119',
      name: 'Omni Gear 119',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 605,
      affixes: [
        { name: 'Prefix_119', stat: 'attack', modifier: 238 },
        { name: 'Suffix_119', stat: 'defense', modifier: 119 }
      ]
    });
    this.catalog.set('item_120', {
      id: 'item_120',
      name: 'Omni Gear 120',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 610,
      affixes: [
        { name: 'Prefix_120', stat: 'attack', modifier: 240 },
        { name: 'Suffix_120', stat: 'defense', modifier: 120 }
      ]
    });
    this.catalog.set('item_121', {
      id: 'item_121',
      name: 'Omni Gear 121',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 615,
      affixes: [
        { name: 'Prefix_121', stat: 'attack', modifier: 242 },
        { name: 'Suffix_121', stat: 'defense', modifier: 121 }
      ]
    });
    this.catalog.set('item_122', {
      id: 'item_122',
      name: 'Omni Gear 122',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 620,
      affixes: [
        { name: 'Prefix_122', stat: 'attack', modifier: 244 },
        { name: 'Suffix_122', stat: 'defense', modifier: 122 }
      ]
    });
    this.catalog.set('item_123', {
      id: 'item_123',
      name: 'Omni Gear 123',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 625,
      affixes: [
        { name: 'Prefix_123', stat: 'attack', modifier: 246 },
        { name: 'Suffix_123', stat: 'defense', modifier: 123 }
      ]
    });
    this.catalog.set('item_124', {
      id: 'item_124',
      name: 'Omni Gear 124',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 630,
      affixes: [
        { name: 'Prefix_124', stat: 'attack', modifier: 248 },
        { name: 'Suffix_124', stat: 'defense', modifier: 124 }
      ]
    });
    this.catalog.set('item_125', {
      id: 'item_125',
      name: 'Omni Gear 125',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 635,
      affixes: [
        { name: 'Prefix_125', stat: 'attack', modifier: 250 },
        { name: 'Suffix_125', stat: 'defense', modifier: 125 }
      ]
    });
    this.catalog.set('item_126', {
      id: 'item_126',
      name: 'Omni Gear 126',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 640,
      affixes: [
        { name: 'Prefix_126', stat: 'attack', modifier: 252 },
        { name: 'Suffix_126', stat: 'defense', modifier: 126 }
      ]
    });
    this.catalog.set('item_127', {
      id: 'item_127',
      name: 'Omni Gear 127',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 645,
      affixes: [
        { name: 'Prefix_127', stat: 'attack', modifier: 254 },
        { name: 'Suffix_127', stat: 'defense', modifier: 127 }
      ]
    });
    this.catalog.set('item_128', {
      id: 'item_128',
      name: 'Omni Gear 128',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 650,
      affixes: [
        { name: 'Prefix_128', stat: 'attack', modifier: 256 },
        { name: 'Suffix_128', stat: 'defense', modifier: 128 }
      ]
    });
    this.catalog.set('item_129', {
      id: 'item_129',
      name: 'Omni Gear 129',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 655,
      affixes: [
        { name: 'Prefix_129', stat: 'attack', modifier: 258 },
        { name: 'Suffix_129', stat: 'defense', modifier: 129 }
      ]
    });
    this.catalog.set('item_130', {
      id: 'item_130',
      name: 'Omni Gear 130',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 660,
      affixes: [
        { name: 'Prefix_130', stat: 'attack', modifier: 260 },
        { name: 'Suffix_130', stat: 'defense', modifier: 130 }
      ]
    });
    this.catalog.set('item_131', {
      id: 'item_131',
      name: 'Omni Gear 131',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 665,
      affixes: [
        { name: 'Prefix_131', stat: 'attack', modifier: 262 },
        { name: 'Suffix_131', stat: 'defense', modifier: 131 }
      ]
    });
    this.catalog.set('item_132', {
      id: 'item_132',
      name: 'Omni Gear 132',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 670,
      affixes: [
        { name: 'Prefix_132', stat: 'attack', modifier: 264 },
        { name: 'Suffix_132', stat: 'defense', modifier: 132 }
      ]
    });
    this.catalog.set('item_133', {
      id: 'item_133',
      name: 'Omni Gear 133',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 675,
      affixes: [
        { name: 'Prefix_133', stat: 'attack', modifier: 266 },
        { name: 'Suffix_133', stat: 'defense', modifier: 133 }
      ]
    });
    this.catalog.set('item_134', {
      id: 'item_134',
      name: 'Omni Gear 134',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 680,
      affixes: [
        { name: 'Prefix_134', stat: 'attack', modifier: 268 },
        { name: 'Suffix_134', stat: 'defense', modifier: 134 }
      ]
    });
    this.catalog.set('item_135', {
      id: 'item_135',
      name: 'Omni Gear 135',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 685,
      affixes: [
        { name: 'Prefix_135', stat: 'attack', modifier: 270 },
        { name: 'Suffix_135', stat: 'defense', modifier: 135 }
      ]
    });
    this.catalog.set('item_136', {
      id: 'item_136',
      name: 'Omni Gear 136',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 690,
      affixes: [
        { name: 'Prefix_136', stat: 'attack', modifier: 272 },
        { name: 'Suffix_136', stat: 'defense', modifier: 136 }
      ]
    });
    this.catalog.set('item_137', {
      id: 'item_137',
      name: 'Omni Gear 137',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 695,
      affixes: [
        { name: 'Prefix_137', stat: 'attack', modifier: 274 },
        { name: 'Suffix_137', stat: 'defense', modifier: 137 }
      ]
    });
    this.catalog.set('item_138', {
      id: 'item_138',
      name: 'Omni Gear 138',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 700,
      affixes: [
        { name: 'Prefix_138', stat: 'attack', modifier: 276 },
        { name: 'Suffix_138', stat: 'defense', modifier: 138 }
      ]
    });
    this.catalog.set('item_139', {
      id: 'item_139',
      name: 'Omni Gear 139',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 705,
      affixes: [
        { name: 'Prefix_139', stat: 'attack', modifier: 278 },
        { name: 'Suffix_139', stat: 'defense', modifier: 139 }
      ]
    });
    this.catalog.set('item_140', {
      id: 'item_140',
      name: 'Omni Gear 140',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 710,
      affixes: [
        { name: 'Prefix_140', stat: 'attack', modifier: 280 },
        { name: 'Suffix_140', stat: 'defense', modifier: 140 }
      ]
    });
    this.catalog.set('item_141', {
      id: 'item_141',
      name: 'Omni Gear 141',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 715,
      affixes: [
        { name: 'Prefix_141', stat: 'attack', modifier: 282 },
        { name: 'Suffix_141', stat: 'defense', modifier: 141 }
      ]
    });
    this.catalog.set('item_142', {
      id: 'item_142',
      name: 'Omni Gear 142',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 720,
      affixes: [
        { name: 'Prefix_142', stat: 'attack', modifier: 284 },
        { name: 'Suffix_142', stat: 'defense', modifier: 142 }
      ]
    });
    this.catalog.set('item_143', {
      id: 'item_143',
      name: 'Omni Gear 143',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 725,
      affixes: [
        { name: 'Prefix_143', stat: 'attack', modifier: 286 },
        { name: 'Suffix_143', stat: 'defense', modifier: 143 }
      ]
    });
    this.catalog.set('item_144', {
      id: 'item_144',
      name: 'Omni Gear 144',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 730,
      affixes: [
        { name: 'Prefix_144', stat: 'attack', modifier: 288 },
        { name: 'Suffix_144', stat: 'defense', modifier: 144 }
      ]
    });
    this.catalog.set('item_145', {
      id: 'item_145',
      name: 'Omni Gear 145',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 735,
      affixes: [
        { name: 'Prefix_145', stat: 'attack', modifier: 290 },
        { name: 'Suffix_145', stat: 'defense', modifier: 145 }
      ]
    });
    this.catalog.set('item_146', {
      id: 'item_146',
      name: 'Omni Gear 146',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 740,
      affixes: [
        { name: 'Prefix_146', stat: 'attack', modifier: 292 },
        { name: 'Suffix_146', stat: 'defense', modifier: 146 }
      ]
    });
    this.catalog.set('item_147', {
      id: 'item_147',
      name: 'Omni Gear 147',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 745,
      affixes: [
        { name: 'Prefix_147', stat: 'attack', modifier: 294 },
        { name: 'Suffix_147', stat: 'defense', modifier: 147 }
      ]
    });
    this.catalog.set('item_148', {
      id: 'item_148',
      name: 'Omni Gear 148',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 750,
      affixes: [
        { name: 'Prefix_148', stat: 'attack', modifier: 296 },
        { name: 'Suffix_148', stat: 'defense', modifier: 148 }
      ]
    });
    this.catalog.set('item_149', {
      id: 'item_149',
      name: 'Omni Gear 149',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 755,
      affixes: [
        { name: 'Prefix_149', stat: 'attack', modifier: 298 },
        { name: 'Suffix_149', stat: 'defense', modifier: 149 }
      ]
    });
    this.catalog.set('item_150', {
      id: 'item_150',
      name: 'Omni Gear 150',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 760,
      affixes: [
        { name: 'Prefix_150', stat: 'attack', modifier: 300 },
        { name: 'Suffix_150', stat: 'defense', modifier: 150 }
      ]
    });
    this.catalog.set('item_151', {
      id: 'item_151',
      name: 'Omni Gear 151',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 765,
      affixes: [
        { name: 'Prefix_151', stat: 'attack', modifier: 302 },
        { name: 'Suffix_151', stat: 'defense', modifier: 151 }
      ]
    });
    this.catalog.set('item_152', {
      id: 'item_152',
      name: 'Omni Gear 152',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 770,
      affixes: [
        { name: 'Prefix_152', stat: 'attack', modifier: 304 },
        { name: 'Suffix_152', stat: 'defense', modifier: 152 }
      ]
    });
    this.catalog.set('item_153', {
      id: 'item_153',
      name: 'Omni Gear 153',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 775,
      affixes: [
        { name: 'Prefix_153', stat: 'attack', modifier: 306 },
        { name: 'Suffix_153', stat: 'defense', modifier: 153 }
      ]
    });
    this.catalog.set('item_154', {
      id: 'item_154',
      name: 'Omni Gear 154',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 780,
      affixes: [
        { name: 'Prefix_154', stat: 'attack', modifier: 308 },
        { name: 'Suffix_154', stat: 'defense', modifier: 154 }
      ]
    });
    this.catalog.set('item_155', {
      id: 'item_155',
      name: 'Omni Gear 155',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 785,
      affixes: [
        { name: 'Prefix_155', stat: 'attack', modifier: 310 },
        { name: 'Suffix_155', stat: 'defense', modifier: 155 }
      ]
    });
    this.catalog.set('item_156', {
      id: 'item_156',
      name: 'Omni Gear 156',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 790,
      affixes: [
        { name: 'Prefix_156', stat: 'attack', modifier: 312 },
        { name: 'Suffix_156', stat: 'defense', modifier: 156 }
      ]
    });
    this.catalog.set('item_157', {
      id: 'item_157',
      name: 'Omni Gear 157',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 795,
      affixes: [
        { name: 'Prefix_157', stat: 'attack', modifier: 314 },
        { name: 'Suffix_157', stat: 'defense', modifier: 157 }
      ]
    });
    this.catalog.set('item_158', {
      id: 'item_158',
      name: 'Omni Gear 158',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 800,
      affixes: [
        { name: 'Prefix_158', stat: 'attack', modifier: 316 },
        { name: 'Suffix_158', stat: 'defense', modifier: 158 }
      ]
    });
    this.catalog.set('item_159', {
      id: 'item_159',
      name: 'Omni Gear 159',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 805,
      affixes: [
        { name: 'Prefix_159', stat: 'attack', modifier: 318 },
        { name: 'Suffix_159', stat: 'defense', modifier: 159 }
      ]
    });
    this.catalog.set('item_160', {
      id: 'item_160',
      name: 'Omni Gear 160',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 810,
      affixes: [
        { name: 'Prefix_160', stat: 'attack', modifier: 320 },
        { name: 'Suffix_160', stat: 'defense', modifier: 160 }
      ]
    });
    this.catalog.set('item_161', {
      id: 'item_161',
      name: 'Omni Gear 161',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 815,
      affixes: [
        { name: 'Prefix_161', stat: 'attack', modifier: 322 },
        { name: 'Suffix_161', stat: 'defense', modifier: 161 }
      ]
    });
    this.catalog.set('item_162', {
      id: 'item_162',
      name: 'Omni Gear 162',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 820,
      affixes: [
        { name: 'Prefix_162', stat: 'attack', modifier: 324 },
        { name: 'Suffix_162', stat: 'defense', modifier: 162 }
      ]
    });
    this.catalog.set('item_163', {
      id: 'item_163',
      name: 'Omni Gear 163',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 825,
      affixes: [
        { name: 'Prefix_163', stat: 'attack', modifier: 326 },
        { name: 'Suffix_163', stat: 'defense', modifier: 163 }
      ]
    });
    this.catalog.set('item_164', {
      id: 'item_164',
      name: 'Omni Gear 164',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 830,
      affixes: [
        { name: 'Prefix_164', stat: 'attack', modifier: 328 },
        { name: 'Suffix_164', stat: 'defense', modifier: 164 }
      ]
    });
    this.catalog.set('item_165', {
      id: 'item_165',
      name: 'Omni Gear 165',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 835,
      affixes: [
        { name: 'Prefix_165', stat: 'attack', modifier: 330 },
        { name: 'Suffix_165', stat: 'defense', modifier: 165 }
      ]
    });
    this.catalog.set('item_166', {
      id: 'item_166',
      name: 'Omni Gear 166',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 840,
      affixes: [
        { name: 'Prefix_166', stat: 'attack', modifier: 332 },
        { name: 'Suffix_166', stat: 'defense', modifier: 166 }
      ]
    });
    this.catalog.set('item_167', {
      id: 'item_167',
      name: 'Omni Gear 167',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 845,
      affixes: [
        { name: 'Prefix_167', stat: 'attack', modifier: 334 },
        { name: 'Suffix_167', stat: 'defense', modifier: 167 }
      ]
    });
    this.catalog.set('item_168', {
      id: 'item_168',
      name: 'Omni Gear 168',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 850,
      affixes: [
        { name: 'Prefix_168', stat: 'attack', modifier: 336 },
        { name: 'Suffix_168', stat: 'defense', modifier: 168 }
      ]
    });
    this.catalog.set('item_169', {
      id: 'item_169',
      name: 'Omni Gear 169',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 855,
      affixes: [
        { name: 'Prefix_169', stat: 'attack', modifier: 338 },
        { name: 'Suffix_169', stat: 'defense', modifier: 169 }
      ]
    });
    this.catalog.set('item_170', {
      id: 'item_170',
      name: 'Omni Gear 170',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 860,
      affixes: [
        { name: 'Prefix_170', stat: 'attack', modifier: 340 },
        { name: 'Suffix_170', stat: 'defense', modifier: 170 }
      ]
    });
    this.catalog.set('item_171', {
      id: 'item_171',
      name: 'Omni Gear 171',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 865,
      affixes: [
        { name: 'Prefix_171', stat: 'attack', modifier: 342 },
        { name: 'Suffix_171', stat: 'defense', modifier: 171 }
      ]
    });
    this.catalog.set('item_172', {
      id: 'item_172',
      name: 'Omni Gear 172',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 870,
      affixes: [
        { name: 'Prefix_172', stat: 'attack', modifier: 344 },
        { name: 'Suffix_172', stat: 'defense', modifier: 172 }
      ]
    });
    this.catalog.set('item_173', {
      id: 'item_173',
      name: 'Omni Gear 173',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 875,
      affixes: [
        { name: 'Prefix_173', stat: 'attack', modifier: 346 },
        { name: 'Suffix_173', stat: 'defense', modifier: 173 }
      ]
    });
    this.catalog.set('item_174', {
      id: 'item_174',
      name: 'Omni Gear 174',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 880,
      affixes: [
        { name: 'Prefix_174', stat: 'attack', modifier: 348 },
        { name: 'Suffix_174', stat: 'defense', modifier: 174 }
      ]
    });
    this.catalog.set('item_175', {
      id: 'item_175',
      name: 'Omni Gear 175',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 885,
      affixes: [
        { name: 'Prefix_175', stat: 'attack', modifier: 350 },
        { name: 'Suffix_175', stat: 'defense', modifier: 175 }
      ]
    });
    this.catalog.set('item_176', {
      id: 'item_176',
      name: 'Omni Gear 176',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 890,
      affixes: [
        { name: 'Prefix_176', stat: 'attack', modifier: 352 },
        { name: 'Suffix_176', stat: 'defense', modifier: 176 }
      ]
    });
    this.catalog.set('item_177', {
      id: 'item_177',
      name: 'Omni Gear 177',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 895,
      affixes: [
        { name: 'Prefix_177', stat: 'attack', modifier: 354 },
        { name: 'Suffix_177', stat: 'defense', modifier: 177 }
      ]
    });
    this.catalog.set('item_178', {
      id: 'item_178',
      name: 'Omni Gear 178',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 900,
      affixes: [
        { name: 'Prefix_178', stat: 'attack', modifier: 356 },
        { name: 'Suffix_178', stat: 'defense', modifier: 178 }
      ]
    });
    this.catalog.set('item_179', {
      id: 'item_179',
      name: 'Omni Gear 179',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 905,
      affixes: [
        { name: 'Prefix_179', stat: 'attack', modifier: 358 },
        { name: 'Suffix_179', stat: 'defense', modifier: 179 }
      ]
    });
    this.catalog.set('item_180', {
      id: 'item_180',
      name: 'Omni Gear 180',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 910,
      affixes: [
        { name: 'Prefix_180', stat: 'attack', modifier: 360 },
        { name: 'Suffix_180', stat: 'defense', modifier: 180 }
      ]
    });
    this.catalog.set('item_181', {
      id: 'item_181',
      name: 'Omni Gear 181',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 915,
      affixes: [
        { name: 'Prefix_181', stat: 'attack', modifier: 362 },
        { name: 'Suffix_181', stat: 'defense', modifier: 181 }
      ]
    });
    this.catalog.set('item_182', {
      id: 'item_182',
      name: 'Omni Gear 182',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 920,
      affixes: [
        { name: 'Prefix_182', stat: 'attack', modifier: 364 },
        { name: 'Suffix_182', stat: 'defense', modifier: 182 }
      ]
    });
    this.catalog.set('item_183', {
      id: 'item_183',
      name: 'Omni Gear 183',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 925,
      affixes: [
        { name: 'Prefix_183', stat: 'attack', modifier: 366 },
        { name: 'Suffix_183', stat: 'defense', modifier: 183 }
      ]
    });
    this.catalog.set('item_184', {
      id: 'item_184',
      name: 'Omni Gear 184',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 930,
      affixes: [
        { name: 'Prefix_184', stat: 'attack', modifier: 368 },
        { name: 'Suffix_184', stat: 'defense', modifier: 184 }
      ]
    });
    this.catalog.set('item_185', {
      id: 'item_185',
      name: 'Omni Gear 185',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 935,
      affixes: [
        { name: 'Prefix_185', stat: 'attack', modifier: 370 },
        { name: 'Suffix_185', stat: 'defense', modifier: 185 }
      ]
    });
    this.catalog.set('item_186', {
      id: 'item_186',
      name: 'Omni Gear 186',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 940,
      affixes: [
        { name: 'Prefix_186', stat: 'attack', modifier: 372 },
        { name: 'Suffix_186', stat: 'defense', modifier: 186 }
      ]
    });
    this.catalog.set('item_187', {
      id: 'item_187',
      name: 'Omni Gear 187',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 945,
      affixes: [
        { name: 'Prefix_187', stat: 'attack', modifier: 374 },
        { name: 'Suffix_187', stat: 'defense', modifier: 187 }
      ]
    });
    this.catalog.set('item_188', {
      id: 'item_188',
      name: 'Omni Gear 188',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 950,
      affixes: [
        { name: 'Prefix_188', stat: 'attack', modifier: 376 },
        { name: 'Suffix_188', stat: 'defense', modifier: 188 }
      ]
    });
    this.catalog.set('item_189', {
      id: 'item_189',
      name: 'Omni Gear 189',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 955,
      affixes: [
        { name: 'Prefix_189', stat: 'attack', modifier: 378 },
        { name: 'Suffix_189', stat: 'defense', modifier: 189 }
      ]
    });
    this.catalog.set('item_190', {
      id: 'item_190',
      name: 'Omni Gear 190',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 960,
      affixes: [
        { name: 'Prefix_190', stat: 'attack', modifier: 380 },
        { name: 'Suffix_190', stat: 'defense', modifier: 190 }
      ]
    });
    this.catalog.set('item_191', {
      id: 'item_191',
      name: 'Omni Gear 191',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 965,
      affixes: [
        { name: 'Prefix_191', stat: 'attack', modifier: 382 },
        { name: 'Suffix_191', stat: 'defense', modifier: 191 }
      ]
    });
    this.catalog.set('item_192', {
      id: 'item_192',
      name: 'Omni Gear 192',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 970,
      affixes: [
        { name: 'Prefix_192', stat: 'attack', modifier: 384 },
        { name: 'Suffix_192', stat: 'defense', modifier: 192 }
      ]
    });
    this.catalog.set('item_193', {
      id: 'item_193',
      name: 'Omni Gear 193',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 975,
      affixes: [
        { name: 'Prefix_193', stat: 'attack', modifier: 386 },
        { name: 'Suffix_193', stat: 'defense', modifier: 193 }
      ]
    });
    this.catalog.set('item_194', {
      id: 'item_194',
      name: 'Omni Gear 194',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 980,
      affixes: [
        { name: 'Prefix_194', stat: 'attack', modifier: 388 },
        { name: 'Suffix_194', stat: 'defense', modifier: 194 }
      ]
    });
    this.catalog.set('item_195', {
      id: 'item_195',
      name: 'Omni Gear 195',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 985,
      affixes: [
        { name: 'Prefix_195', stat: 'attack', modifier: 390 },
        { name: 'Suffix_195', stat: 'defense', modifier: 195 }
      ]
    });
    this.catalog.set('item_196', {
      id: 'item_196',
      name: 'Omni Gear 196',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 990,
      affixes: [
        { name: 'Prefix_196', stat: 'attack', modifier: 392 },
        { name: 'Suffix_196', stat: 'defense', modifier: 196 }
      ]
    });
    this.catalog.set('item_197', {
      id: 'item_197',
      name: 'Omni Gear 197',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 995,
      affixes: [
        { name: 'Prefix_197', stat: 'attack', modifier: 394 },
        { name: 'Suffix_197', stat: 'defense', modifier: 197 }
      ]
    });
    this.catalog.set('item_198', {
      id: 'item_198',
      name: 'Omni Gear 198',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 1000,
      affixes: [
        { name: 'Prefix_198', stat: 'attack', modifier: 396 },
        { name: 'Suffix_198', stat: 'defense', modifier: 198 }
      ]
    });
    this.catalog.set('item_199', {
      id: 'item_199',
      name: 'Omni Gear 199',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 1005,
      affixes: [
        { name: 'Prefix_199', stat: 'attack', modifier: 398 },
        { name: 'Suffix_199', stat: 'defense', modifier: 199 }
      ]
    });
    this.catalog.set('item_200', {
      id: 'item_200',
      name: 'Omni Gear 200',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 1010,
      affixes: [
        { name: 'Prefix_200', stat: 'attack', modifier: 400 },
        { name: 'Suffix_200', stat: 'defense', modifier: 200 }
      ]
    });
    this.catalog.set('item_201', {
      id: 'item_201',
      name: 'Omni Gear 201',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 1015,
      affixes: [
        { name: 'Prefix_201', stat: 'attack', modifier: 402 },
        { name: 'Suffix_201', stat: 'defense', modifier: 201 }
      ]
    });
    this.catalog.set('item_202', {
      id: 'item_202',
      name: 'Omni Gear 202',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 1020,
      affixes: [
        { name: 'Prefix_202', stat: 'attack', modifier: 404 },
        { name: 'Suffix_202', stat: 'defense', modifier: 202 }
      ]
    });
    this.catalog.set('item_203', {
      id: 'item_203',
      name: 'Omni Gear 203',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 1025,
      affixes: [
        { name: 'Prefix_203', stat: 'attack', modifier: 406 },
        { name: 'Suffix_203', stat: 'defense', modifier: 203 }
      ]
    });
    this.catalog.set('item_204', {
      id: 'item_204',
      name: 'Omni Gear 204',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 1030,
      affixes: [
        { name: 'Prefix_204', stat: 'attack', modifier: 408 },
        { name: 'Suffix_204', stat: 'defense', modifier: 204 }
      ]
    });
    this.catalog.set('item_205', {
      id: 'item_205',
      name: 'Omni Gear 205',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 1035,
      affixes: [
        { name: 'Prefix_205', stat: 'attack', modifier: 410 },
        { name: 'Suffix_205', stat: 'defense', modifier: 205 }
      ]
    });
    this.catalog.set('item_206', {
      id: 'item_206',
      name: 'Omni Gear 206',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 1040,
      affixes: [
        { name: 'Prefix_206', stat: 'attack', modifier: 412 },
        { name: 'Suffix_206', stat: 'defense', modifier: 206 }
      ]
    });
    this.catalog.set('item_207', {
      id: 'item_207',
      name: 'Omni Gear 207',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 1045,
      affixes: [
        { name: 'Prefix_207', stat: 'attack', modifier: 414 },
        { name: 'Suffix_207', stat: 'defense', modifier: 207 }
      ]
    });
    this.catalog.set('item_208', {
      id: 'item_208',
      name: 'Omni Gear 208',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 1050,
      affixes: [
        { name: 'Prefix_208', stat: 'attack', modifier: 416 },
        { name: 'Suffix_208', stat: 'defense', modifier: 208 }
      ]
    });
    this.catalog.set('item_209', {
      id: 'item_209',
      name: 'Omni Gear 209',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 1055,
      affixes: [
        { name: 'Prefix_209', stat: 'attack', modifier: 418 },
        { name: 'Suffix_209', stat: 'defense', modifier: 209 }
      ]
    });
    this.catalog.set('item_210', {
      id: 'item_210',
      name: 'Omni Gear 210',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 1060,
      affixes: [
        { name: 'Prefix_210', stat: 'attack', modifier: 420 },
        { name: 'Suffix_210', stat: 'defense', modifier: 210 }
      ]
    });
    this.catalog.set('item_211', {
      id: 'item_211',
      name: 'Omni Gear 211',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 1065,
      affixes: [
        { name: 'Prefix_211', stat: 'attack', modifier: 422 },
        { name: 'Suffix_211', stat: 'defense', modifier: 211 }
      ]
    });
    this.catalog.set('item_212', {
      id: 'item_212',
      name: 'Omni Gear 212',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 1070,
      affixes: [
        { name: 'Prefix_212', stat: 'attack', modifier: 424 },
        { name: 'Suffix_212', stat: 'defense', modifier: 212 }
      ]
    });
    this.catalog.set('item_213', {
      id: 'item_213',
      name: 'Omni Gear 213',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 1075,
      affixes: [
        { name: 'Prefix_213', stat: 'attack', modifier: 426 },
        { name: 'Suffix_213', stat: 'defense', modifier: 213 }
      ]
    });
    this.catalog.set('item_214', {
      id: 'item_214',
      name: 'Omni Gear 214',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 1080,
      affixes: [
        { name: 'Prefix_214', stat: 'attack', modifier: 428 },
        { name: 'Suffix_214', stat: 'defense', modifier: 214 }
      ]
    });
    this.catalog.set('item_215', {
      id: 'item_215',
      name: 'Omni Gear 215',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 1085,
      affixes: [
        { name: 'Prefix_215', stat: 'attack', modifier: 430 },
        { name: 'Suffix_215', stat: 'defense', modifier: 215 }
      ]
    });
    this.catalog.set('item_216', {
      id: 'item_216',
      name: 'Omni Gear 216',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 1090,
      affixes: [
        { name: 'Prefix_216', stat: 'attack', modifier: 432 },
        { name: 'Suffix_216', stat: 'defense', modifier: 216 }
      ]
    });
    this.catalog.set('item_217', {
      id: 'item_217',
      name: 'Omni Gear 217',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 1095,
      affixes: [
        { name: 'Prefix_217', stat: 'attack', modifier: 434 },
        { name: 'Suffix_217', stat: 'defense', modifier: 217 }
      ]
    });
    this.catalog.set('item_218', {
      id: 'item_218',
      name: 'Omni Gear 218',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 1100,
      affixes: [
        { name: 'Prefix_218', stat: 'attack', modifier: 436 },
        { name: 'Suffix_218', stat: 'defense', modifier: 218 }
      ]
    });
    this.catalog.set('item_219', {
      id: 'item_219',
      name: 'Omni Gear 219',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 1105,
      affixes: [
        { name: 'Prefix_219', stat: 'attack', modifier: 438 },
        { name: 'Suffix_219', stat: 'defense', modifier: 219 }
      ]
    });
    this.catalog.set('item_220', {
      id: 'item_220',
      name: 'Omni Gear 220',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 1110,
      affixes: [
        { name: 'Prefix_220', stat: 'attack', modifier: 440 },
        { name: 'Suffix_220', stat: 'defense', modifier: 220 }
      ]
    });
    this.catalog.set('item_221', {
      id: 'item_221',
      name: 'Omni Gear 221',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 1115,
      affixes: [
        { name: 'Prefix_221', stat: 'attack', modifier: 442 },
        { name: 'Suffix_221', stat: 'defense', modifier: 221 }
      ]
    });
    this.catalog.set('item_222', {
      id: 'item_222',
      name: 'Omni Gear 222',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 1120,
      affixes: [
        { name: 'Prefix_222', stat: 'attack', modifier: 444 },
        { name: 'Suffix_222', stat: 'defense', modifier: 222 }
      ]
    });
    this.catalog.set('item_223', {
      id: 'item_223',
      name: 'Omni Gear 223',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 1125,
      affixes: [
        { name: 'Prefix_223', stat: 'attack', modifier: 446 },
        { name: 'Suffix_223', stat: 'defense', modifier: 223 }
      ]
    });
    this.catalog.set('item_224', {
      id: 'item_224',
      name: 'Omni Gear 224',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 1130,
      affixes: [
        { name: 'Prefix_224', stat: 'attack', modifier: 448 },
        { name: 'Suffix_224', stat: 'defense', modifier: 224 }
      ]
    });
    this.catalog.set('item_225', {
      id: 'item_225',
      name: 'Omni Gear 225',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 1135,
      affixes: [
        { name: 'Prefix_225', stat: 'attack', modifier: 450 },
        { name: 'Suffix_225', stat: 'defense', modifier: 225 }
      ]
    });
    this.catalog.set('item_226', {
      id: 'item_226',
      name: 'Omni Gear 226',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 1140,
      affixes: [
        { name: 'Prefix_226', stat: 'attack', modifier: 452 },
        { name: 'Suffix_226', stat: 'defense', modifier: 226 }
      ]
    });
    this.catalog.set('item_227', {
      id: 'item_227',
      name: 'Omni Gear 227',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 1145,
      affixes: [
        { name: 'Prefix_227', stat: 'attack', modifier: 454 },
        { name: 'Suffix_227', stat: 'defense', modifier: 227 }
      ]
    });
    this.catalog.set('item_228', {
      id: 'item_228',
      name: 'Omni Gear 228',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 1150,
      affixes: [
        { name: 'Prefix_228', stat: 'attack', modifier: 456 },
        { name: 'Suffix_228', stat: 'defense', modifier: 228 }
      ]
    });
    this.catalog.set('item_229', {
      id: 'item_229',
      name: 'Omni Gear 229',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 1155,
      affixes: [
        { name: 'Prefix_229', stat: 'attack', modifier: 458 },
        { name: 'Suffix_229', stat: 'defense', modifier: 229 }
      ]
    });
    this.catalog.set('item_230', {
      id: 'item_230',
      name: 'Omni Gear 230',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 1160,
      affixes: [
        { name: 'Prefix_230', stat: 'attack', modifier: 460 },
        { name: 'Suffix_230', stat: 'defense', modifier: 230 }
      ]
    });
    this.catalog.set('item_231', {
      id: 'item_231',
      name: 'Omni Gear 231',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 1165,
      affixes: [
        { name: 'Prefix_231', stat: 'attack', modifier: 462 },
        { name: 'Suffix_231', stat: 'defense', modifier: 231 }
      ]
    });
    this.catalog.set('item_232', {
      id: 'item_232',
      name: 'Omni Gear 232',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 1170,
      affixes: [
        { name: 'Prefix_232', stat: 'attack', modifier: 464 },
        { name: 'Suffix_232', stat: 'defense', modifier: 232 }
      ]
    });
    this.catalog.set('item_233', {
      id: 'item_233',
      name: 'Omni Gear 233',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 1175,
      affixes: [
        { name: 'Prefix_233', stat: 'attack', modifier: 466 },
        { name: 'Suffix_233', stat: 'defense', modifier: 233 }
      ]
    });
    this.catalog.set('item_234', {
      id: 'item_234',
      name: 'Omni Gear 234',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 1180,
      affixes: [
        { name: 'Prefix_234', stat: 'attack', modifier: 468 },
        { name: 'Suffix_234', stat: 'defense', modifier: 234 }
      ]
    });
    this.catalog.set('item_235', {
      id: 'item_235',
      name: 'Omni Gear 235',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 1185,
      affixes: [
        { name: 'Prefix_235', stat: 'attack', modifier: 470 },
        { name: 'Suffix_235', stat: 'defense', modifier: 235 }
      ]
    });
    this.catalog.set('item_236', {
      id: 'item_236',
      name: 'Omni Gear 236',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 1190,
      affixes: [
        { name: 'Prefix_236', stat: 'attack', modifier: 472 },
        { name: 'Suffix_236', stat: 'defense', modifier: 236 }
      ]
    });
    this.catalog.set('item_237', {
      id: 'item_237',
      name: 'Omni Gear 237',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 1195,
      affixes: [
        { name: 'Prefix_237', stat: 'attack', modifier: 474 },
        { name: 'Suffix_237', stat: 'defense', modifier: 237 }
      ]
    });
    this.catalog.set('item_238', {
      id: 'item_238',
      name: 'Omni Gear 238',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 1200,
      affixes: [
        { name: 'Prefix_238', stat: 'attack', modifier: 476 },
        { name: 'Suffix_238', stat: 'defense', modifier: 238 }
      ]
    });
    this.catalog.set('item_239', {
      id: 'item_239',
      name: 'Omni Gear 239',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 1205,
      affixes: [
        { name: 'Prefix_239', stat: 'attack', modifier: 478 },
        { name: 'Suffix_239', stat: 'defense', modifier: 239 }
      ]
    });
    this.catalog.set('item_240', {
      id: 'item_240',
      name: 'Omni Gear 240',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 1210,
      affixes: [
        { name: 'Prefix_240', stat: 'attack', modifier: 480 },
        { name: 'Suffix_240', stat: 'defense', modifier: 240 }
      ]
    });
    this.catalog.set('item_241', {
      id: 'item_241',
      name: 'Omni Gear 241',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 1215,
      affixes: [
        { name: 'Prefix_241', stat: 'attack', modifier: 482 },
        { name: 'Suffix_241', stat: 'defense', modifier: 241 }
      ]
    });
    this.catalog.set('item_242', {
      id: 'item_242',
      name: 'Omni Gear 242',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 1220,
      affixes: [
        { name: 'Prefix_242', stat: 'attack', modifier: 484 },
        { name: 'Suffix_242', stat: 'defense', modifier: 242 }
      ]
    });
    this.catalog.set('item_243', {
      id: 'item_243',
      name: 'Omni Gear 243',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 1225,
      affixes: [
        { name: 'Prefix_243', stat: 'attack', modifier: 486 },
        { name: 'Suffix_243', stat: 'defense', modifier: 243 }
      ]
    });
    this.catalog.set('item_244', {
      id: 'item_244',
      name: 'Omni Gear 244',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 1230,
      affixes: [
        { name: 'Prefix_244', stat: 'attack', modifier: 488 },
        { name: 'Suffix_244', stat: 'defense', modifier: 244 }
      ]
    });
    this.catalog.set('item_245', {
      id: 'item_245',
      name: 'Omni Gear 245',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 1235,
      affixes: [
        { name: 'Prefix_245', stat: 'attack', modifier: 490 },
        { name: 'Suffix_245', stat: 'defense', modifier: 245 }
      ]
    });
    this.catalog.set('item_246', {
      id: 'item_246',
      name: 'Omni Gear 246',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 1240,
      affixes: [
        { name: 'Prefix_246', stat: 'attack', modifier: 492 },
        { name: 'Suffix_246', stat: 'defense', modifier: 246 }
      ]
    });
    this.catalog.set('item_247', {
      id: 'item_247',
      name: 'Omni Gear 247',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 1245,
      affixes: [
        { name: 'Prefix_247', stat: 'attack', modifier: 494 },
        { name: 'Suffix_247', stat: 'defense', modifier: 247 }
      ]
    });
    this.catalog.set('item_248', {
      id: 'item_248',
      name: 'Omni Gear 248',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 1250,
      affixes: [
        { name: 'Prefix_248', stat: 'attack', modifier: 496 },
        { name: 'Suffix_248', stat: 'defense', modifier: 248 }
      ]
    });
    this.catalog.set('item_249', {
      id: 'item_249',
      name: 'Omni Gear 249',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 1255,
      affixes: [
        { name: 'Prefix_249', stat: 'attack', modifier: 498 },
        { name: 'Suffix_249', stat: 'defense', modifier: 249 }
      ]
    });
    this.catalog.set('item_250', {
      id: 'item_250',
      name: 'Omni Gear 250',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 1260,
      affixes: [
        { name: 'Prefix_250', stat: 'attack', modifier: 500 },
        { name: 'Suffix_250', stat: 'defense', modifier: 250 }
      ]
    });
    this.catalog.set('item_251', {
      id: 'item_251',
      name: 'Omni Gear 251',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 1265,
      affixes: [
        { name: 'Prefix_251', stat: 'attack', modifier: 502 },
        { name: 'Suffix_251', stat: 'defense', modifier: 251 }
      ]
    });
    this.catalog.set('item_252', {
      id: 'item_252',
      name: 'Omni Gear 252',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 1270,
      affixes: [
        { name: 'Prefix_252', stat: 'attack', modifier: 504 },
        { name: 'Suffix_252', stat: 'defense', modifier: 252 }
      ]
    });
    this.catalog.set('item_253', {
      id: 'item_253',
      name: 'Omni Gear 253',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 1275,
      affixes: [
        { name: 'Prefix_253', stat: 'attack', modifier: 506 },
        { name: 'Suffix_253', stat: 'defense', modifier: 253 }
      ]
    });
    this.catalog.set('item_254', {
      id: 'item_254',
      name: 'Omni Gear 254',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 1280,
      affixes: [
        { name: 'Prefix_254', stat: 'attack', modifier: 508 },
        { name: 'Suffix_254', stat: 'defense', modifier: 254 }
      ]
    });
    this.catalog.set('item_255', {
      id: 'item_255',
      name: 'Omni Gear 255',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 1285,
      affixes: [
        { name: 'Prefix_255', stat: 'attack', modifier: 510 },
        { name: 'Suffix_255', stat: 'defense', modifier: 255 }
      ]
    });
    this.catalog.set('item_256', {
      id: 'item_256',
      name: 'Omni Gear 256',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 1290,
      affixes: [
        { name: 'Prefix_256', stat: 'attack', modifier: 512 },
        { name: 'Suffix_256', stat: 'defense', modifier: 256 }
      ]
    });
    this.catalog.set('item_257', {
      id: 'item_257',
      name: 'Omni Gear 257',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 1295,
      affixes: [
        { name: 'Prefix_257', stat: 'attack', modifier: 514 },
        { name: 'Suffix_257', stat: 'defense', modifier: 257 }
      ]
    });
    this.catalog.set('item_258', {
      id: 'item_258',
      name: 'Omni Gear 258',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 1300,
      affixes: [
        { name: 'Prefix_258', stat: 'attack', modifier: 516 },
        { name: 'Suffix_258', stat: 'defense', modifier: 258 }
      ]
    });
    this.catalog.set('item_259', {
      id: 'item_259',
      name: 'Omni Gear 259',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 1305,
      affixes: [
        { name: 'Prefix_259', stat: 'attack', modifier: 518 },
        { name: 'Suffix_259', stat: 'defense', modifier: 259 }
      ]
    });
    this.catalog.set('item_260', {
      id: 'item_260',
      name: 'Omni Gear 260',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 1310,
      affixes: [
        { name: 'Prefix_260', stat: 'attack', modifier: 520 },
        { name: 'Suffix_260', stat: 'defense', modifier: 260 }
      ]
    });
    this.catalog.set('item_261', {
      id: 'item_261',
      name: 'Omni Gear 261',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 1315,
      affixes: [
        { name: 'Prefix_261', stat: 'attack', modifier: 522 },
        { name: 'Suffix_261', stat: 'defense', modifier: 261 }
      ]
    });
    this.catalog.set('item_262', {
      id: 'item_262',
      name: 'Omni Gear 262',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 1320,
      affixes: [
        { name: 'Prefix_262', stat: 'attack', modifier: 524 },
        { name: 'Suffix_262', stat: 'defense', modifier: 262 }
      ]
    });
    this.catalog.set('item_263', {
      id: 'item_263',
      name: 'Omni Gear 263',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 1325,
      affixes: [
        { name: 'Prefix_263', stat: 'attack', modifier: 526 },
        { name: 'Suffix_263', stat: 'defense', modifier: 263 }
      ]
    });
    this.catalog.set('item_264', {
      id: 'item_264',
      name: 'Omni Gear 264',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 1330,
      affixes: [
        { name: 'Prefix_264', stat: 'attack', modifier: 528 },
        { name: 'Suffix_264', stat: 'defense', modifier: 264 }
      ]
    });
    this.catalog.set('item_265', {
      id: 'item_265',
      name: 'Omni Gear 265',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 1335,
      affixes: [
        { name: 'Prefix_265', stat: 'attack', modifier: 530 },
        { name: 'Suffix_265', stat: 'defense', modifier: 265 }
      ]
    });
    this.catalog.set('item_266', {
      id: 'item_266',
      name: 'Omni Gear 266',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 1340,
      affixes: [
        { name: 'Prefix_266', stat: 'attack', modifier: 532 },
        { name: 'Suffix_266', stat: 'defense', modifier: 266 }
      ]
    });
    this.catalog.set('item_267', {
      id: 'item_267',
      name: 'Omni Gear 267',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 1345,
      affixes: [
        { name: 'Prefix_267', stat: 'attack', modifier: 534 },
        { name: 'Suffix_267', stat: 'defense', modifier: 267 }
      ]
    });
    this.catalog.set('item_268', {
      id: 'item_268',
      name: 'Omni Gear 268',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 1350,
      affixes: [
        { name: 'Prefix_268', stat: 'attack', modifier: 536 },
        { name: 'Suffix_268', stat: 'defense', modifier: 268 }
      ]
    });
    this.catalog.set('item_269', {
      id: 'item_269',
      name: 'Omni Gear 269',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 1355,
      affixes: [
        { name: 'Prefix_269', stat: 'attack', modifier: 538 },
        { name: 'Suffix_269', stat: 'defense', modifier: 269 }
      ]
    });
    this.catalog.set('item_270', {
      id: 'item_270',
      name: 'Omni Gear 270',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 1360,
      affixes: [
        { name: 'Prefix_270', stat: 'attack', modifier: 540 },
        { name: 'Suffix_270', stat: 'defense', modifier: 270 }
      ]
    });
    this.catalog.set('item_271', {
      id: 'item_271',
      name: 'Omni Gear 271',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 1365,
      affixes: [
        { name: 'Prefix_271', stat: 'attack', modifier: 542 },
        { name: 'Suffix_271', stat: 'defense', modifier: 271 }
      ]
    });
    this.catalog.set('item_272', {
      id: 'item_272',
      name: 'Omni Gear 272',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 1370,
      affixes: [
        { name: 'Prefix_272', stat: 'attack', modifier: 544 },
        { name: 'Suffix_272', stat: 'defense', modifier: 272 }
      ]
    });
    this.catalog.set('item_273', {
      id: 'item_273',
      name: 'Omni Gear 273',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 1375,
      affixes: [
        { name: 'Prefix_273', stat: 'attack', modifier: 546 },
        { name: 'Suffix_273', stat: 'defense', modifier: 273 }
      ]
    });
    this.catalog.set('item_274', {
      id: 'item_274',
      name: 'Omni Gear 274',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 1380,
      affixes: [
        { name: 'Prefix_274', stat: 'attack', modifier: 548 },
        { name: 'Suffix_274', stat: 'defense', modifier: 274 }
      ]
    });
    this.catalog.set('item_275', {
      id: 'item_275',
      name: 'Omni Gear 275',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 1385,
      affixes: [
        { name: 'Prefix_275', stat: 'attack', modifier: 550 },
        { name: 'Suffix_275', stat: 'defense', modifier: 275 }
      ]
    });
    this.catalog.set('item_276', {
      id: 'item_276',
      name: 'Omni Gear 276',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 1390,
      affixes: [
        { name: 'Prefix_276', stat: 'attack', modifier: 552 },
        { name: 'Suffix_276', stat: 'defense', modifier: 276 }
      ]
    });
    this.catalog.set('item_277', {
      id: 'item_277',
      name: 'Omni Gear 277',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 1395,
      affixes: [
        { name: 'Prefix_277', stat: 'attack', modifier: 554 },
        { name: 'Suffix_277', stat: 'defense', modifier: 277 }
      ]
    });
    this.catalog.set('item_278', {
      id: 'item_278',
      name: 'Omni Gear 278',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 1400,
      affixes: [
        { name: 'Prefix_278', stat: 'attack', modifier: 556 },
        { name: 'Suffix_278', stat: 'defense', modifier: 278 }
      ]
    });
    this.catalog.set('item_279', {
      id: 'item_279',
      name: 'Omni Gear 279',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 1405,
      affixes: [
        { name: 'Prefix_279', stat: 'attack', modifier: 558 },
        { name: 'Suffix_279', stat: 'defense', modifier: 279 }
      ]
    });
    this.catalog.set('item_280', {
      id: 'item_280',
      name: 'Omni Gear 280',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 1410,
      affixes: [
        { name: 'Prefix_280', stat: 'attack', modifier: 560 },
        { name: 'Suffix_280', stat: 'defense', modifier: 280 }
      ]
    });
    this.catalog.set('item_281', {
      id: 'item_281',
      name: 'Omni Gear 281',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 1415,
      affixes: [
        { name: 'Prefix_281', stat: 'attack', modifier: 562 },
        { name: 'Suffix_281', stat: 'defense', modifier: 281 }
      ]
    });
    this.catalog.set('item_282', {
      id: 'item_282',
      name: 'Omni Gear 282',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 1420,
      affixes: [
        { name: 'Prefix_282', stat: 'attack', modifier: 564 },
        { name: 'Suffix_282', stat: 'defense', modifier: 282 }
      ]
    });
    this.catalog.set('item_283', {
      id: 'item_283',
      name: 'Omni Gear 283',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 1425,
      affixes: [
        { name: 'Prefix_283', stat: 'attack', modifier: 566 },
        { name: 'Suffix_283', stat: 'defense', modifier: 283 }
      ]
    });
    this.catalog.set('item_284', {
      id: 'item_284',
      name: 'Omni Gear 284',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 1430,
      affixes: [
        { name: 'Prefix_284', stat: 'attack', modifier: 568 },
        { name: 'Suffix_284', stat: 'defense', modifier: 284 }
      ]
    });
    this.catalog.set('item_285', {
      id: 'item_285',
      name: 'Omni Gear 285',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 1435,
      affixes: [
        { name: 'Prefix_285', stat: 'attack', modifier: 570 },
        { name: 'Suffix_285', stat: 'defense', modifier: 285 }
      ]
    });
    this.catalog.set('item_286', {
      id: 'item_286',
      name: 'Omni Gear 286',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 1440,
      affixes: [
        { name: 'Prefix_286', stat: 'attack', modifier: 572 },
        { name: 'Suffix_286', stat: 'defense', modifier: 286 }
      ]
    });
    this.catalog.set('item_287', {
      id: 'item_287',
      name: 'Omni Gear 287',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 1445,
      affixes: [
        { name: 'Prefix_287', stat: 'attack', modifier: 574 },
        { name: 'Suffix_287', stat: 'defense', modifier: 287 }
      ]
    });
    this.catalog.set('item_288', {
      id: 'item_288',
      name: 'Omni Gear 288',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 1450,
      affixes: [
        { name: 'Prefix_288', stat: 'attack', modifier: 576 },
        { name: 'Suffix_288', stat: 'defense', modifier: 288 }
      ]
    });
    this.catalog.set('item_289', {
      id: 'item_289',
      name: 'Omni Gear 289',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 1455,
      affixes: [
        { name: 'Prefix_289', stat: 'attack', modifier: 578 },
        { name: 'Suffix_289', stat: 'defense', modifier: 289 }
      ]
    });
    this.catalog.set('item_290', {
      id: 'item_290',
      name: 'Omni Gear 290',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 1460,
      affixes: [
        { name: 'Prefix_290', stat: 'attack', modifier: 580 },
        { name: 'Suffix_290', stat: 'defense', modifier: 290 }
      ]
    });
    this.catalog.set('item_291', {
      id: 'item_291',
      name: 'Omni Gear 291',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 1465,
      affixes: [
        { name: 'Prefix_291', stat: 'attack', modifier: 582 },
        { name: 'Suffix_291', stat: 'defense', modifier: 291 }
      ]
    });
    this.catalog.set('item_292', {
      id: 'item_292',
      name: 'Omni Gear 292',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 1470,
      affixes: [
        { name: 'Prefix_292', stat: 'attack', modifier: 584 },
        { name: 'Suffix_292', stat: 'defense', modifier: 292 }
      ]
    });
    this.catalog.set('item_293', {
      id: 'item_293',
      name: 'Omni Gear 293',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 1475,
      affixes: [
        { name: 'Prefix_293', stat: 'attack', modifier: 586 },
        { name: 'Suffix_293', stat: 'defense', modifier: 293 }
      ]
    });
    this.catalog.set('item_294', {
      id: 'item_294',
      name: 'Omni Gear 294',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 1480,
      affixes: [
        { name: 'Prefix_294', stat: 'attack', modifier: 588 },
        { name: 'Suffix_294', stat: 'defense', modifier: 294 }
      ]
    });
    this.catalog.set('item_295', {
      id: 'item_295',
      name: 'Omni Gear 295',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 1485,
      affixes: [
        { name: 'Prefix_295', stat: 'attack', modifier: 590 },
        { name: 'Suffix_295', stat: 'defense', modifier: 295 }
      ]
    });
    this.catalog.set('item_296', {
      id: 'item_296',
      name: 'Omni Gear 296',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 1490,
      affixes: [
        { name: 'Prefix_296', stat: 'attack', modifier: 592 },
        { name: 'Suffix_296', stat: 'defense', modifier: 296 }
      ]
    });
    this.catalog.set('item_297', {
      id: 'item_297',
      name: 'Omni Gear 297',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 1495,
      affixes: [
        { name: 'Prefix_297', stat: 'attack', modifier: 594 },
        { name: 'Suffix_297', stat: 'defense', modifier: 297 }
      ]
    });
    this.catalog.set('item_298', {
      id: 'item_298',
      name: 'Omni Gear 298',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 1500,
      affixes: [
        { name: 'Prefix_298', stat: 'attack', modifier: 596 },
        { name: 'Suffix_298', stat: 'defense', modifier: 298 }
      ]
    });
    this.catalog.set('item_299', {
      id: 'item_299',
      name: 'Omni Gear 299',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 1505,
      affixes: [
        { name: 'Prefix_299', stat: 'attack', modifier: 598 },
        { name: 'Suffix_299', stat: 'defense', modifier: 299 }
      ]
    });
    this.catalog.set('item_300', {
      id: 'item_300',
      name: 'Omni Gear 300',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 1510,
      affixes: [
        { name: 'Prefix_300', stat: 'attack', modifier: 600 },
        { name: 'Suffix_300', stat: 'defense', modifier: 300 }
      ]
    });
    this.catalog.set('item_301', {
      id: 'item_301',
      name: 'Omni Gear 301',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 1515,
      affixes: [
        { name: 'Prefix_301', stat: 'attack', modifier: 602 },
        { name: 'Suffix_301', stat: 'defense', modifier: 301 }
      ]
    });
    this.catalog.set('item_302', {
      id: 'item_302',
      name: 'Omni Gear 302',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 1520,
      affixes: [
        { name: 'Prefix_302', stat: 'attack', modifier: 604 },
        { name: 'Suffix_302', stat: 'defense', modifier: 302 }
      ]
    });
    this.catalog.set('item_303', {
      id: 'item_303',
      name: 'Omni Gear 303',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 1525,
      affixes: [
        { name: 'Prefix_303', stat: 'attack', modifier: 606 },
        { name: 'Suffix_303', stat: 'defense', modifier: 303 }
      ]
    });
    this.catalog.set('item_304', {
      id: 'item_304',
      name: 'Omni Gear 304',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 1530,
      affixes: [
        { name: 'Prefix_304', stat: 'attack', modifier: 608 },
        { name: 'Suffix_304', stat: 'defense', modifier: 304 }
      ]
    });
    this.catalog.set('item_305', {
      id: 'item_305',
      name: 'Omni Gear 305',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 1535,
      affixes: [
        { name: 'Prefix_305', stat: 'attack', modifier: 610 },
        { name: 'Suffix_305', stat: 'defense', modifier: 305 }
      ]
    });
    this.catalog.set('item_306', {
      id: 'item_306',
      name: 'Omni Gear 306',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 1540,
      affixes: [
        { name: 'Prefix_306', stat: 'attack', modifier: 612 },
        { name: 'Suffix_306', stat: 'defense', modifier: 306 }
      ]
    });
    this.catalog.set('item_307', {
      id: 'item_307',
      name: 'Omni Gear 307',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 1545,
      affixes: [
        { name: 'Prefix_307', stat: 'attack', modifier: 614 },
        { name: 'Suffix_307', stat: 'defense', modifier: 307 }
      ]
    });
    this.catalog.set('item_308', {
      id: 'item_308',
      name: 'Omni Gear 308',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 1550,
      affixes: [
        { name: 'Prefix_308', stat: 'attack', modifier: 616 },
        { name: 'Suffix_308', stat: 'defense', modifier: 308 }
      ]
    });
    this.catalog.set('item_309', {
      id: 'item_309',
      name: 'Omni Gear 309',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 1555,
      affixes: [
        { name: 'Prefix_309', stat: 'attack', modifier: 618 },
        { name: 'Suffix_309', stat: 'defense', modifier: 309 }
      ]
    });
    this.catalog.set('item_310', {
      id: 'item_310',
      name: 'Omni Gear 310',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 1560,
      affixes: [
        { name: 'Prefix_310', stat: 'attack', modifier: 620 },
        { name: 'Suffix_310', stat: 'defense', modifier: 310 }
      ]
    });
    this.catalog.set('item_311', {
      id: 'item_311',
      name: 'Omni Gear 311',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 1565,
      affixes: [
        { name: 'Prefix_311', stat: 'attack', modifier: 622 },
        { name: 'Suffix_311', stat: 'defense', modifier: 311 }
      ]
    });
    this.catalog.set('item_312', {
      id: 'item_312',
      name: 'Omni Gear 312',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 1570,
      affixes: [
        { name: 'Prefix_312', stat: 'attack', modifier: 624 },
        { name: 'Suffix_312', stat: 'defense', modifier: 312 }
      ]
    });
    this.catalog.set('item_313', {
      id: 'item_313',
      name: 'Omni Gear 313',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 1575,
      affixes: [
        { name: 'Prefix_313', stat: 'attack', modifier: 626 },
        { name: 'Suffix_313', stat: 'defense', modifier: 313 }
      ]
    });
    this.catalog.set('item_314', {
      id: 'item_314',
      name: 'Omni Gear 314',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 1580,
      affixes: [
        { name: 'Prefix_314', stat: 'attack', modifier: 628 },
        { name: 'Suffix_314', stat: 'defense', modifier: 314 }
      ]
    });
    this.catalog.set('item_315', {
      id: 'item_315',
      name: 'Omni Gear 315',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 1585,
      affixes: [
        { name: 'Prefix_315', stat: 'attack', modifier: 630 },
        { name: 'Suffix_315', stat: 'defense', modifier: 315 }
      ]
    });
    this.catalog.set('item_316', {
      id: 'item_316',
      name: 'Omni Gear 316',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 1590,
      affixes: [
        { name: 'Prefix_316', stat: 'attack', modifier: 632 },
        { name: 'Suffix_316', stat: 'defense', modifier: 316 }
      ]
    });
    this.catalog.set('item_317', {
      id: 'item_317',
      name: 'Omni Gear 317',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 1595,
      affixes: [
        { name: 'Prefix_317', stat: 'attack', modifier: 634 },
        { name: 'Suffix_317', stat: 'defense', modifier: 317 }
      ]
    });
    this.catalog.set('item_318', {
      id: 'item_318',
      name: 'Omni Gear 318',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 1600,
      affixes: [
        { name: 'Prefix_318', stat: 'attack', modifier: 636 },
        { name: 'Suffix_318', stat: 'defense', modifier: 318 }
      ]
    });
    this.catalog.set('item_319', {
      id: 'item_319',
      name: 'Omni Gear 319',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 1605,
      affixes: [
        { name: 'Prefix_319', stat: 'attack', modifier: 638 },
        { name: 'Suffix_319', stat: 'defense', modifier: 319 }
      ]
    });
    this.catalog.set('item_320', {
      id: 'item_320',
      name: 'Omni Gear 320',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 1610,
      affixes: [
        { name: 'Prefix_320', stat: 'attack', modifier: 640 },
        { name: 'Suffix_320', stat: 'defense', modifier: 320 }
      ]
    });
    this.catalog.set('item_321', {
      id: 'item_321',
      name: 'Omni Gear 321',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 1615,
      affixes: [
        { name: 'Prefix_321', stat: 'attack', modifier: 642 },
        { name: 'Suffix_321', stat: 'defense', modifier: 321 }
      ]
    });
    this.catalog.set('item_322', {
      id: 'item_322',
      name: 'Omni Gear 322',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 1620,
      affixes: [
        { name: 'Prefix_322', stat: 'attack', modifier: 644 },
        { name: 'Suffix_322', stat: 'defense', modifier: 322 }
      ]
    });
    this.catalog.set('item_323', {
      id: 'item_323',
      name: 'Omni Gear 323',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 1625,
      affixes: [
        { name: 'Prefix_323', stat: 'attack', modifier: 646 },
        { name: 'Suffix_323', stat: 'defense', modifier: 323 }
      ]
    });
    this.catalog.set('item_324', {
      id: 'item_324',
      name: 'Omni Gear 324',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 1630,
      affixes: [
        { name: 'Prefix_324', stat: 'attack', modifier: 648 },
        { name: 'Suffix_324', stat: 'defense', modifier: 324 }
      ]
    });
    this.catalog.set('item_325', {
      id: 'item_325',
      name: 'Omni Gear 325',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 1635,
      affixes: [
        { name: 'Prefix_325', stat: 'attack', modifier: 650 },
        { name: 'Suffix_325', stat: 'defense', modifier: 325 }
      ]
    });
    this.catalog.set('item_326', {
      id: 'item_326',
      name: 'Omni Gear 326',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 1640,
      affixes: [
        { name: 'Prefix_326', stat: 'attack', modifier: 652 },
        { name: 'Suffix_326', stat: 'defense', modifier: 326 }
      ]
    });
    this.catalog.set('item_327', {
      id: 'item_327',
      name: 'Omni Gear 327',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 1645,
      affixes: [
        { name: 'Prefix_327', stat: 'attack', modifier: 654 },
        { name: 'Suffix_327', stat: 'defense', modifier: 327 }
      ]
    });
    this.catalog.set('item_328', {
      id: 'item_328',
      name: 'Omni Gear 328',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 1650,
      affixes: [
        { name: 'Prefix_328', stat: 'attack', modifier: 656 },
        { name: 'Suffix_328', stat: 'defense', modifier: 328 }
      ]
    });
    this.catalog.set('item_329', {
      id: 'item_329',
      name: 'Omni Gear 329',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 1655,
      affixes: [
        { name: 'Prefix_329', stat: 'attack', modifier: 658 },
        { name: 'Suffix_329', stat: 'defense', modifier: 329 }
      ]
    });
    this.catalog.set('item_330', {
      id: 'item_330',
      name: 'Omni Gear 330',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 1660,
      affixes: [
        { name: 'Prefix_330', stat: 'attack', modifier: 660 },
        { name: 'Suffix_330', stat: 'defense', modifier: 330 }
      ]
    });
    this.catalog.set('item_331', {
      id: 'item_331',
      name: 'Omni Gear 331',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 1665,
      affixes: [
        { name: 'Prefix_331', stat: 'attack', modifier: 662 },
        { name: 'Suffix_331', stat: 'defense', modifier: 331 }
      ]
    });
    this.catalog.set('item_332', {
      id: 'item_332',
      name: 'Omni Gear 332',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 1670,
      affixes: [
        { name: 'Prefix_332', stat: 'attack', modifier: 664 },
        { name: 'Suffix_332', stat: 'defense', modifier: 332 }
      ]
    });
    this.catalog.set('item_333', {
      id: 'item_333',
      name: 'Omni Gear 333',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 1675,
      affixes: [
        { name: 'Prefix_333', stat: 'attack', modifier: 666 },
        { name: 'Suffix_333', stat: 'defense', modifier: 333 }
      ]
    });
    this.catalog.set('item_334', {
      id: 'item_334',
      name: 'Omni Gear 334',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 1680,
      affixes: [
        { name: 'Prefix_334', stat: 'attack', modifier: 668 },
        { name: 'Suffix_334', stat: 'defense', modifier: 334 }
      ]
    });
    this.catalog.set('item_335', {
      id: 'item_335',
      name: 'Omni Gear 335',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 1685,
      affixes: [
        { name: 'Prefix_335', stat: 'attack', modifier: 670 },
        { name: 'Suffix_335', stat: 'defense', modifier: 335 }
      ]
    });
    this.catalog.set('item_336', {
      id: 'item_336',
      name: 'Omni Gear 336',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 1690,
      affixes: [
        { name: 'Prefix_336', stat: 'attack', modifier: 672 },
        { name: 'Suffix_336', stat: 'defense', modifier: 336 }
      ]
    });
    this.catalog.set('item_337', {
      id: 'item_337',
      name: 'Omni Gear 337',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 1695,
      affixes: [
        { name: 'Prefix_337', stat: 'attack', modifier: 674 },
        { name: 'Suffix_337', stat: 'defense', modifier: 337 }
      ]
    });
    this.catalog.set('item_338', {
      id: 'item_338',
      name: 'Omni Gear 338',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 1700,
      affixes: [
        { name: 'Prefix_338', stat: 'attack', modifier: 676 },
        { name: 'Suffix_338', stat: 'defense', modifier: 338 }
      ]
    });
    this.catalog.set('item_339', {
      id: 'item_339',
      name: 'Omni Gear 339',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 1705,
      affixes: [
        { name: 'Prefix_339', stat: 'attack', modifier: 678 },
        { name: 'Suffix_339', stat: 'defense', modifier: 339 }
      ]
    });
    this.catalog.set('item_340', {
      id: 'item_340',
      name: 'Omni Gear 340',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 1710,
      affixes: [
        { name: 'Prefix_340', stat: 'attack', modifier: 680 },
        { name: 'Suffix_340', stat: 'defense', modifier: 340 }
      ]
    });
    this.catalog.set('item_341', {
      id: 'item_341',
      name: 'Omni Gear 341',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 1715,
      affixes: [
        { name: 'Prefix_341', stat: 'attack', modifier: 682 },
        { name: 'Suffix_341', stat: 'defense', modifier: 341 }
      ]
    });
    this.catalog.set('item_342', {
      id: 'item_342',
      name: 'Omni Gear 342',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 1720,
      affixes: [
        { name: 'Prefix_342', stat: 'attack', modifier: 684 },
        { name: 'Suffix_342', stat: 'defense', modifier: 342 }
      ]
    });
    this.catalog.set('item_343', {
      id: 'item_343',
      name: 'Omni Gear 343',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 1725,
      affixes: [
        { name: 'Prefix_343', stat: 'attack', modifier: 686 },
        { name: 'Suffix_343', stat: 'defense', modifier: 343 }
      ]
    });
    this.catalog.set('item_344', {
      id: 'item_344',
      name: 'Omni Gear 344',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 1730,
      affixes: [
        { name: 'Prefix_344', stat: 'attack', modifier: 688 },
        { name: 'Suffix_344', stat: 'defense', modifier: 344 }
      ]
    });
    this.catalog.set('item_345', {
      id: 'item_345',
      name: 'Omni Gear 345',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 1735,
      affixes: [
        { name: 'Prefix_345', stat: 'attack', modifier: 690 },
        { name: 'Suffix_345', stat: 'defense', modifier: 345 }
      ]
    });
    this.catalog.set('item_346', {
      id: 'item_346',
      name: 'Omni Gear 346',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 1740,
      affixes: [
        { name: 'Prefix_346', stat: 'attack', modifier: 692 },
        { name: 'Suffix_346', stat: 'defense', modifier: 346 }
      ]
    });
    this.catalog.set('item_347', {
      id: 'item_347',
      name: 'Omni Gear 347',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 1745,
      affixes: [
        { name: 'Prefix_347', stat: 'attack', modifier: 694 },
        { name: 'Suffix_347', stat: 'defense', modifier: 347 }
      ]
    });
    this.catalog.set('item_348', {
      id: 'item_348',
      name: 'Omni Gear 348',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 1750,
      affixes: [
        { name: 'Prefix_348', stat: 'attack', modifier: 696 },
        { name: 'Suffix_348', stat: 'defense', modifier: 348 }
      ]
    });
    this.catalog.set('item_349', {
      id: 'item_349',
      name: 'Omni Gear 349',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 1755,
      affixes: [
        { name: 'Prefix_349', stat: 'attack', modifier: 698 },
        { name: 'Suffix_349', stat: 'defense', modifier: 349 }
      ]
    });
    this.catalog.set('item_350', {
      id: 'item_350',
      name: 'Omni Gear 350',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 1760,
      affixes: [
        { name: 'Prefix_350', stat: 'attack', modifier: 700 },
        { name: 'Suffix_350', stat: 'defense', modifier: 350 }
      ]
    });
    this.catalog.set('item_351', {
      id: 'item_351',
      name: 'Omni Gear 351',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 1765,
      affixes: [
        { name: 'Prefix_351', stat: 'attack', modifier: 702 },
        { name: 'Suffix_351', stat: 'defense', modifier: 351 }
      ]
    });
    this.catalog.set('item_352', {
      id: 'item_352',
      name: 'Omni Gear 352',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 1770,
      affixes: [
        { name: 'Prefix_352', stat: 'attack', modifier: 704 },
        { name: 'Suffix_352', stat: 'defense', modifier: 352 }
      ]
    });
    this.catalog.set('item_353', {
      id: 'item_353',
      name: 'Omni Gear 353',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 1775,
      affixes: [
        { name: 'Prefix_353', stat: 'attack', modifier: 706 },
        { name: 'Suffix_353', stat: 'defense', modifier: 353 }
      ]
    });
    this.catalog.set('item_354', {
      id: 'item_354',
      name: 'Omni Gear 354',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 1780,
      affixes: [
        { name: 'Prefix_354', stat: 'attack', modifier: 708 },
        { name: 'Suffix_354', stat: 'defense', modifier: 354 }
      ]
    });
    this.catalog.set('item_355', {
      id: 'item_355',
      name: 'Omni Gear 355',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 1785,
      affixes: [
        { name: 'Prefix_355', stat: 'attack', modifier: 710 },
        { name: 'Suffix_355', stat: 'defense', modifier: 355 }
      ]
    });
    this.catalog.set('item_356', {
      id: 'item_356',
      name: 'Omni Gear 356',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 1790,
      affixes: [
        { name: 'Prefix_356', stat: 'attack', modifier: 712 },
        { name: 'Suffix_356', stat: 'defense', modifier: 356 }
      ]
    });
    this.catalog.set('item_357', {
      id: 'item_357',
      name: 'Omni Gear 357',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 1795,
      affixes: [
        { name: 'Prefix_357', stat: 'attack', modifier: 714 },
        { name: 'Suffix_357', stat: 'defense', modifier: 357 }
      ]
    });
    this.catalog.set('item_358', {
      id: 'item_358',
      name: 'Omni Gear 358',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 1800,
      affixes: [
        { name: 'Prefix_358', stat: 'attack', modifier: 716 },
        { name: 'Suffix_358', stat: 'defense', modifier: 358 }
      ]
    });
    this.catalog.set('item_359', {
      id: 'item_359',
      name: 'Omni Gear 359',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 1805,
      affixes: [
        { name: 'Prefix_359', stat: 'attack', modifier: 718 },
        { name: 'Suffix_359', stat: 'defense', modifier: 359 }
      ]
    });
    this.catalog.set('item_360', {
      id: 'item_360',
      name: 'Omni Gear 360',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 1810,
      affixes: [
        { name: 'Prefix_360', stat: 'attack', modifier: 720 },
        { name: 'Suffix_360', stat: 'defense', modifier: 360 }
      ]
    });
    this.catalog.set('item_361', {
      id: 'item_361',
      name: 'Omni Gear 361',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 1815,
      affixes: [
        { name: 'Prefix_361', stat: 'attack', modifier: 722 },
        { name: 'Suffix_361', stat: 'defense', modifier: 361 }
      ]
    });
    this.catalog.set('item_362', {
      id: 'item_362',
      name: 'Omni Gear 362',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 1820,
      affixes: [
        { name: 'Prefix_362', stat: 'attack', modifier: 724 },
        { name: 'Suffix_362', stat: 'defense', modifier: 362 }
      ]
    });
    this.catalog.set('item_363', {
      id: 'item_363',
      name: 'Omni Gear 363',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 1825,
      affixes: [
        { name: 'Prefix_363', stat: 'attack', modifier: 726 },
        { name: 'Suffix_363', stat: 'defense', modifier: 363 }
      ]
    });
    this.catalog.set('item_364', {
      id: 'item_364',
      name: 'Omni Gear 364',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 1830,
      affixes: [
        { name: 'Prefix_364', stat: 'attack', modifier: 728 },
        { name: 'Suffix_364', stat: 'defense', modifier: 364 }
      ]
    });
    this.catalog.set('item_365', {
      id: 'item_365',
      name: 'Omni Gear 365',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 1835,
      affixes: [
        { name: 'Prefix_365', stat: 'attack', modifier: 730 },
        { name: 'Suffix_365', stat: 'defense', modifier: 365 }
      ]
    });
    this.catalog.set('item_366', {
      id: 'item_366',
      name: 'Omni Gear 366',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 1840,
      affixes: [
        { name: 'Prefix_366', stat: 'attack', modifier: 732 },
        { name: 'Suffix_366', stat: 'defense', modifier: 366 }
      ]
    });
    this.catalog.set('item_367', {
      id: 'item_367',
      name: 'Omni Gear 367',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 1845,
      affixes: [
        { name: 'Prefix_367', stat: 'attack', modifier: 734 },
        { name: 'Suffix_367', stat: 'defense', modifier: 367 }
      ]
    });
    this.catalog.set('item_368', {
      id: 'item_368',
      name: 'Omni Gear 368',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 1850,
      affixes: [
        { name: 'Prefix_368', stat: 'attack', modifier: 736 },
        { name: 'Suffix_368', stat: 'defense', modifier: 368 }
      ]
    });
    this.catalog.set('item_369', {
      id: 'item_369',
      name: 'Omni Gear 369',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 1855,
      affixes: [
        { name: 'Prefix_369', stat: 'attack', modifier: 738 },
        { name: 'Suffix_369', stat: 'defense', modifier: 369 }
      ]
    });
    this.catalog.set('item_370', {
      id: 'item_370',
      name: 'Omni Gear 370',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 1860,
      affixes: [
        { name: 'Prefix_370', stat: 'attack', modifier: 740 },
        { name: 'Suffix_370', stat: 'defense', modifier: 370 }
      ]
    });
    this.catalog.set('item_371', {
      id: 'item_371',
      name: 'Omni Gear 371',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 1865,
      affixes: [
        { name: 'Prefix_371', stat: 'attack', modifier: 742 },
        { name: 'Suffix_371', stat: 'defense', modifier: 371 }
      ]
    });
    this.catalog.set('item_372', {
      id: 'item_372',
      name: 'Omni Gear 372',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 1870,
      affixes: [
        { name: 'Prefix_372', stat: 'attack', modifier: 744 },
        { name: 'Suffix_372', stat: 'defense', modifier: 372 }
      ]
    });
    this.catalog.set('item_373', {
      id: 'item_373',
      name: 'Omni Gear 373',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 1875,
      affixes: [
        { name: 'Prefix_373', stat: 'attack', modifier: 746 },
        { name: 'Suffix_373', stat: 'defense', modifier: 373 }
      ]
    });
    this.catalog.set('item_374', {
      id: 'item_374',
      name: 'Omni Gear 374',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 1880,
      affixes: [
        { name: 'Prefix_374', stat: 'attack', modifier: 748 },
        { name: 'Suffix_374', stat: 'defense', modifier: 374 }
      ]
    });
    this.catalog.set('item_375', {
      id: 'item_375',
      name: 'Omni Gear 375',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 1885,
      affixes: [
        { name: 'Prefix_375', stat: 'attack', modifier: 750 },
        { name: 'Suffix_375', stat: 'defense', modifier: 375 }
      ]
    });
    this.catalog.set('item_376', {
      id: 'item_376',
      name: 'Omni Gear 376',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 1890,
      affixes: [
        { name: 'Prefix_376', stat: 'attack', modifier: 752 },
        { name: 'Suffix_376', stat: 'defense', modifier: 376 }
      ]
    });
    this.catalog.set('item_377', {
      id: 'item_377',
      name: 'Omni Gear 377',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 1895,
      affixes: [
        { name: 'Prefix_377', stat: 'attack', modifier: 754 },
        { name: 'Suffix_377', stat: 'defense', modifier: 377 }
      ]
    });
    this.catalog.set('item_378', {
      id: 'item_378',
      name: 'Omni Gear 378',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 1900,
      affixes: [
        { name: 'Prefix_378', stat: 'attack', modifier: 756 },
        { name: 'Suffix_378', stat: 'defense', modifier: 378 }
      ]
    });
    this.catalog.set('item_379', {
      id: 'item_379',
      name: 'Omni Gear 379',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 1905,
      affixes: [
        { name: 'Prefix_379', stat: 'attack', modifier: 758 },
        { name: 'Suffix_379', stat: 'defense', modifier: 379 }
      ]
    });
    this.catalog.set('item_380', {
      id: 'item_380',
      name: 'Omni Gear 380',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 1910,
      affixes: [
        { name: 'Prefix_380', stat: 'attack', modifier: 760 },
        { name: 'Suffix_380', stat: 'defense', modifier: 380 }
      ]
    });
    this.catalog.set('item_381', {
      id: 'item_381',
      name: 'Omni Gear 381',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 1915,
      affixes: [
        { name: 'Prefix_381', stat: 'attack', modifier: 762 },
        { name: 'Suffix_381', stat: 'defense', modifier: 381 }
      ]
    });
    this.catalog.set('item_382', {
      id: 'item_382',
      name: 'Omni Gear 382',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 1920,
      affixes: [
        { name: 'Prefix_382', stat: 'attack', modifier: 764 },
        { name: 'Suffix_382', stat: 'defense', modifier: 382 }
      ]
    });
    this.catalog.set('item_383', {
      id: 'item_383',
      name: 'Omni Gear 383',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 1925,
      affixes: [
        { name: 'Prefix_383', stat: 'attack', modifier: 766 },
        { name: 'Suffix_383', stat: 'defense', modifier: 383 }
      ]
    });
    this.catalog.set('item_384', {
      id: 'item_384',
      name: 'Omni Gear 384',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 1930,
      affixes: [
        { name: 'Prefix_384', stat: 'attack', modifier: 768 },
        { name: 'Suffix_384', stat: 'defense', modifier: 384 }
      ]
    });
    this.catalog.set('item_385', {
      id: 'item_385',
      name: 'Omni Gear 385',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 1935,
      affixes: [
        { name: 'Prefix_385', stat: 'attack', modifier: 770 },
        { name: 'Suffix_385', stat: 'defense', modifier: 385 }
      ]
    });
    this.catalog.set('item_386', {
      id: 'item_386',
      name: 'Omni Gear 386',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 1940,
      affixes: [
        { name: 'Prefix_386', stat: 'attack', modifier: 772 },
        { name: 'Suffix_386', stat: 'defense', modifier: 386 }
      ]
    });
    this.catalog.set('item_387', {
      id: 'item_387',
      name: 'Omni Gear 387',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 1945,
      affixes: [
        { name: 'Prefix_387', stat: 'attack', modifier: 774 },
        { name: 'Suffix_387', stat: 'defense', modifier: 387 }
      ]
    });
    this.catalog.set('item_388', {
      id: 'item_388',
      name: 'Omni Gear 388',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 1950,
      affixes: [
        { name: 'Prefix_388', stat: 'attack', modifier: 776 },
        { name: 'Suffix_388', stat: 'defense', modifier: 388 }
      ]
    });
    this.catalog.set('item_389', {
      id: 'item_389',
      name: 'Omni Gear 389',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 1955,
      affixes: [
        { name: 'Prefix_389', stat: 'attack', modifier: 778 },
        { name: 'Suffix_389', stat: 'defense', modifier: 389 }
      ]
    });
    this.catalog.set('item_390', {
      id: 'item_390',
      name: 'Omni Gear 390',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 1960,
      affixes: [
        { name: 'Prefix_390', stat: 'attack', modifier: 780 },
        { name: 'Suffix_390', stat: 'defense', modifier: 390 }
      ]
    });
    this.catalog.set('item_391', {
      id: 'item_391',
      name: 'Omni Gear 391',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 1965,
      affixes: [
        { name: 'Prefix_391', stat: 'attack', modifier: 782 },
        { name: 'Suffix_391', stat: 'defense', modifier: 391 }
      ]
    });
    this.catalog.set('item_392', {
      id: 'item_392',
      name: 'Omni Gear 392',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 1970,
      affixes: [
        { name: 'Prefix_392', stat: 'attack', modifier: 784 },
        { name: 'Suffix_392', stat: 'defense', modifier: 392 }
      ]
    });
    this.catalog.set('item_393', {
      id: 'item_393',
      name: 'Omni Gear 393',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 1975,
      affixes: [
        { name: 'Prefix_393', stat: 'attack', modifier: 786 },
        { name: 'Suffix_393', stat: 'defense', modifier: 393 }
      ]
    });
    this.catalog.set('item_394', {
      id: 'item_394',
      name: 'Omni Gear 394',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 1980,
      affixes: [
        { name: 'Prefix_394', stat: 'attack', modifier: 788 },
        { name: 'Suffix_394', stat: 'defense', modifier: 394 }
      ]
    });
    this.catalog.set('item_395', {
      id: 'item_395',
      name: 'Omni Gear 395',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 1985,
      affixes: [
        { name: 'Prefix_395', stat: 'attack', modifier: 790 },
        { name: 'Suffix_395', stat: 'defense', modifier: 395 }
      ]
    });
    this.catalog.set('item_396', {
      id: 'item_396',
      name: 'Omni Gear 396',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 1990,
      affixes: [
        { name: 'Prefix_396', stat: 'attack', modifier: 792 },
        { name: 'Suffix_396', stat: 'defense', modifier: 396 }
      ]
    });
    this.catalog.set('item_397', {
      id: 'item_397',
      name: 'Omni Gear 397',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 1995,
      affixes: [
        { name: 'Prefix_397', stat: 'attack', modifier: 794 },
        { name: 'Suffix_397', stat: 'defense', modifier: 397 }
      ]
    });
    this.catalog.set('item_398', {
      id: 'item_398',
      name: 'Omni Gear 398',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 2000,
      affixes: [
        { name: 'Prefix_398', stat: 'attack', modifier: 796 },
        { name: 'Suffix_398', stat: 'defense', modifier: 398 }
      ]
    });
    this.catalog.set('item_399', {
      id: 'item_399',
      name: 'Omni Gear 399',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 2005,
      affixes: [
        { name: 'Prefix_399', stat: 'attack', modifier: 798 },
        { name: 'Suffix_399', stat: 'defense', modifier: 399 }
      ]
    });
    this.catalog.set('item_400', {
      id: 'item_400',
      name: 'Omni Gear 400',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 2010,
      affixes: [
        { name: 'Prefix_400', stat: 'attack', modifier: 800 },
        { name: 'Suffix_400', stat: 'defense', modifier: 400 }
      ]
    });
    this.catalog.set('item_401', {
      id: 'item_401',
      name: 'Omni Gear 401',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 2015,
      affixes: [
        { name: 'Prefix_401', stat: 'attack', modifier: 802 },
        { name: 'Suffix_401', stat: 'defense', modifier: 401 }
      ]
    });
    this.catalog.set('item_402', {
      id: 'item_402',
      name: 'Omni Gear 402',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 2020,
      affixes: [
        { name: 'Prefix_402', stat: 'attack', modifier: 804 },
        { name: 'Suffix_402', stat: 'defense', modifier: 402 }
      ]
    });
    this.catalog.set('item_403', {
      id: 'item_403',
      name: 'Omni Gear 403',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 2025,
      affixes: [
        { name: 'Prefix_403', stat: 'attack', modifier: 806 },
        { name: 'Suffix_403', stat: 'defense', modifier: 403 }
      ]
    });
    this.catalog.set('item_404', {
      id: 'item_404',
      name: 'Omni Gear 404',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 2030,
      affixes: [
        { name: 'Prefix_404', stat: 'attack', modifier: 808 },
        { name: 'Suffix_404', stat: 'defense', modifier: 404 }
      ]
    });
    this.catalog.set('item_405', {
      id: 'item_405',
      name: 'Omni Gear 405',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 2035,
      affixes: [
        { name: 'Prefix_405', stat: 'attack', modifier: 810 },
        { name: 'Suffix_405', stat: 'defense', modifier: 405 }
      ]
    });
    this.catalog.set('item_406', {
      id: 'item_406',
      name: 'Omni Gear 406',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 2040,
      affixes: [
        { name: 'Prefix_406', stat: 'attack', modifier: 812 },
        { name: 'Suffix_406', stat: 'defense', modifier: 406 }
      ]
    });
    this.catalog.set('item_407', {
      id: 'item_407',
      name: 'Omni Gear 407',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 2045,
      affixes: [
        { name: 'Prefix_407', stat: 'attack', modifier: 814 },
        { name: 'Suffix_407', stat: 'defense', modifier: 407 }
      ]
    });
    this.catalog.set('item_408', {
      id: 'item_408',
      name: 'Omni Gear 408',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 2050,
      affixes: [
        { name: 'Prefix_408', stat: 'attack', modifier: 816 },
        { name: 'Suffix_408', stat: 'defense', modifier: 408 }
      ]
    });
    this.catalog.set('item_409', {
      id: 'item_409',
      name: 'Omni Gear 409',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 2055,
      affixes: [
        { name: 'Prefix_409', stat: 'attack', modifier: 818 },
        { name: 'Suffix_409', stat: 'defense', modifier: 409 }
      ]
    });
    this.catalog.set('item_410', {
      id: 'item_410',
      name: 'Omni Gear 410',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 2060,
      affixes: [
        { name: 'Prefix_410', stat: 'attack', modifier: 820 },
        { name: 'Suffix_410', stat: 'defense', modifier: 410 }
      ]
    });
    this.catalog.set('item_411', {
      id: 'item_411',
      name: 'Omni Gear 411',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 2065,
      affixes: [
        { name: 'Prefix_411', stat: 'attack', modifier: 822 },
        { name: 'Suffix_411', stat: 'defense', modifier: 411 }
      ]
    });
    this.catalog.set('item_412', {
      id: 'item_412',
      name: 'Omni Gear 412',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 2070,
      affixes: [
        { name: 'Prefix_412', stat: 'attack', modifier: 824 },
        { name: 'Suffix_412', stat: 'defense', modifier: 412 }
      ]
    });
    this.catalog.set('item_413', {
      id: 'item_413',
      name: 'Omni Gear 413',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 2075,
      affixes: [
        { name: 'Prefix_413', stat: 'attack', modifier: 826 },
        { name: 'Suffix_413', stat: 'defense', modifier: 413 }
      ]
    });
    this.catalog.set('item_414', {
      id: 'item_414',
      name: 'Omni Gear 414',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 2080,
      affixes: [
        { name: 'Prefix_414', stat: 'attack', modifier: 828 },
        { name: 'Suffix_414', stat: 'defense', modifier: 414 }
      ]
    });
    this.catalog.set('item_415', {
      id: 'item_415',
      name: 'Omni Gear 415',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 2085,
      affixes: [
        { name: 'Prefix_415', stat: 'attack', modifier: 830 },
        { name: 'Suffix_415', stat: 'defense', modifier: 415 }
      ]
    });
    this.catalog.set('item_416', {
      id: 'item_416',
      name: 'Omni Gear 416',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 2090,
      affixes: [
        { name: 'Prefix_416', stat: 'attack', modifier: 832 },
        { name: 'Suffix_416', stat: 'defense', modifier: 416 }
      ]
    });
    this.catalog.set('item_417', {
      id: 'item_417',
      name: 'Omni Gear 417',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 2095,
      affixes: [
        { name: 'Prefix_417', stat: 'attack', modifier: 834 },
        { name: 'Suffix_417', stat: 'defense', modifier: 417 }
      ]
    });
    this.catalog.set('item_418', {
      id: 'item_418',
      name: 'Omni Gear 418',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 2100,
      affixes: [
        { name: 'Prefix_418', stat: 'attack', modifier: 836 },
        { name: 'Suffix_418', stat: 'defense', modifier: 418 }
      ]
    });
    this.catalog.set('item_419', {
      id: 'item_419',
      name: 'Omni Gear 419',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 2105,
      affixes: [
        { name: 'Prefix_419', stat: 'attack', modifier: 838 },
        { name: 'Suffix_419', stat: 'defense', modifier: 419 }
      ]
    });
    this.catalog.set('item_420', {
      id: 'item_420',
      name: 'Omni Gear 420',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 2110,
      affixes: [
        { name: 'Prefix_420', stat: 'attack', modifier: 840 },
        { name: 'Suffix_420', stat: 'defense', modifier: 420 }
      ]
    });
    this.catalog.set('item_421', {
      id: 'item_421',
      name: 'Omni Gear 421',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 2115,
      affixes: [
        { name: 'Prefix_421', stat: 'attack', modifier: 842 },
        { name: 'Suffix_421', stat: 'defense', modifier: 421 }
      ]
    });
    this.catalog.set('item_422', {
      id: 'item_422',
      name: 'Omni Gear 422',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 2120,
      affixes: [
        { name: 'Prefix_422', stat: 'attack', modifier: 844 },
        { name: 'Suffix_422', stat: 'defense', modifier: 422 }
      ]
    });
    this.catalog.set('item_423', {
      id: 'item_423',
      name: 'Omni Gear 423',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 2125,
      affixes: [
        { name: 'Prefix_423', stat: 'attack', modifier: 846 },
        { name: 'Suffix_423', stat: 'defense', modifier: 423 }
      ]
    });
    this.catalog.set('item_424', {
      id: 'item_424',
      name: 'Omni Gear 424',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 2130,
      affixes: [
        { name: 'Prefix_424', stat: 'attack', modifier: 848 },
        { name: 'Suffix_424', stat: 'defense', modifier: 424 }
      ]
    });
    this.catalog.set('item_425', {
      id: 'item_425',
      name: 'Omni Gear 425',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 2135,
      affixes: [
        { name: 'Prefix_425', stat: 'attack', modifier: 850 },
        { name: 'Suffix_425', stat: 'defense', modifier: 425 }
      ]
    });
    this.catalog.set('item_426', {
      id: 'item_426',
      name: 'Omni Gear 426',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 2140,
      affixes: [
        { name: 'Prefix_426', stat: 'attack', modifier: 852 },
        { name: 'Suffix_426', stat: 'defense', modifier: 426 }
      ]
    });
    this.catalog.set('item_427', {
      id: 'item_427',
      name: 'Omni Gear 427',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 2145,
      affixes: [
        { name: 'Prefix_427', stat: 'attack', modifier: 854 },
        { name: 'Suffix_427', stat: 'defense', modifier: 427 }
      ]
    });
    this.catalog.set('item_428', {
      id: 'item_428',
      name: 'Omni Gear 428',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 2150,
      affixes: [
        { name: 'Prefix_428', stat: 'attack', modifier: 856 },
        { name: 'Suffix_428', stat: 'defense', modifier: 428 }
      ]
    });
    this.catalog.set('item_429', {
      id: 'item_429',
      name: 'Omni Gear 429',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 2155,
      affixes: [
        { name: 'Prefix_429', stat: 'attack', modifier: 858 },
        { name: 'Suffix_429', stat: 'defense', modifier: 429 }
      ]
    });
    this.catalog.set('item_430', {
      id: 'item_430',
      name: 'Omni Gear 430',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 2160,
      affixes: [
        { name: 'Prefix_430', stat: 'attack', modifier: 860 },
        { name: 'Suffix_430', stat: 'defense', modifier: 430 }
      ]
    });
    this.catalog.set('item_431', {
      id: 'item_431',
      name: 'Omni Gear 431',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 2165,
      affixes: [
        { name: 'Prefix_431', stat: 'attack', modifier: 862 },
        { name: 'Suffix_431', stat: 'defense', modifier: 431 }
      ]
    });
    this.catalog.set('item_432', {
      id: 'item_432',
      name: 'Omni Gear 432',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 2170,
      affixes: [
        { name: 'Prefix_432', stat: 'attack', modifier: 864 },
        { name: 'Suffix_432', stat: 'defense', modifier: 432 }
      ]
    });
    this.catalog.set('item_433', {
      id: 'item_433',
      name: 'Omni Gear 433',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 2175,
      affixes: [
        { name: 'Prefix_433', stat: 'attack', modifier: 866 },
        { name: 'Suffix_433', stat: 'defense', modifier: 433 }
      ]
    });
    this.catalog.set('item_434', {
      id: 'item_434',
      name: 'Omni Gear 434',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 2180,
      affixes: [
        { name: 'Prefix_434', stat: 'attack', modifier: 868 },
        { name: 'Suffix_434', stat: 'defense', modifier: 434 }
      ]
    });
    this.catalog.set('item_435', {
      id: 'item_435',
      name: 'Omni Gear 435',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 2185,
      affixes: [
        { name: 'Prefix_435', stat: 'attack', modifier: 870 },
        { name: 'Suffix_435', stat: 'defense', modifier: 435 }
      ]
    });
    this.catalog.set('item_436', {
      id: 'item_436',
      name: 'Omni Gear 436',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 2190,
      affixes: [
        { name: 'Prefix_436', stat: 'attack', modifier: 872 },
        { name: 'Suffix_436', stat: 'defense', modifier: 436 }
      ]
    });
    this.catalog.set('item_437', {
      id: 'item_437',
      name: 'Omni Gear 437',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 2195,
      affixes: [
        { name: 'Prefix_437', stat: 'attack', modifier: 874 },
        { name: 'Suffix_437', stat: 'defense', modifier: 437 }
      ]
    });
    this.catalog.set('item_438', {
      id: 'item_438',
      name: 'Omni Gear 438',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 2200,
      affixes: [
        { name: 'Prefix_438', stat: 'attack', modifier: 876 },
        { name: 'Suffix_438', stat: 'defense', modifier: 438 }
      ]
    });
    this.catalog.set('item_439', {
      id: 'item_439',
      name: 'Omni Gear 439',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 2205,
      affixes: [
        { name: 'Prefix_439', stat: 'attack', modifier: 878 },
        { name: 'Suffix_439', stat: 'defense', modifier: 439 }
      ]
    });
    this.catalog.set('item_440', {
      id: 'item_440',
      name: 'Omni Gear 440',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 2210,
      affixes: [
        { name: 'Prefix_440', stat: 'attack', modifier: 880 },
        { name: 'Suffix_440', stat: 'defense', modifier: 440 }
      ]
    });
    this.catalog.set('item_441', {
      id: 'item_441',
      name: 'Omni Gear 441',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 2215,
      affixes: [
        { name: 'Prefix_441', stat: 'attack', modifier: 882 },
        { name: 'Suffix_441', stat: 'defense', modifier: 441 }
      ]
    });
    this.catalog.set('item_442', {
      id: 'item_442',
      name: 'Omni Gear 442',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 2220,
      affixes: [
        { name: 'Prefix_442', stat: 'attack', modifier: 884 },
        { name: 'Suffix_442', stat: 'defense', modifier: 442 }
      ]
    });
    this.catalog.set('item_443', {
      id: 'item_443',
      name: 'Omni Gear 443',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 2225,
      affixes: [
        { name: 'Prefix_443', stat: 'attack', modifier: 886 },
        { name: 'Suffix_443', stat: 'defense', modifier: 443 }
      ]
    });
    this.catalog.set('item_444', {
      id: 'item_444',
      name: 'Omni Gear 444',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 2230,
      affixes: [
        { name: 'Prefix_444', stat: 'attack', modifier: 888 },
        { name: 'Suffix_444', stat: 'defense', modifier: 444 }
      ]
    });
    this.catalog.set('item_445', {
      id: 'item_445',
      name: 'Omni Gear 445',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 2235,
      affixes: [
        { name: 'Prefix_445', stat: 'attack', modifier: 890 },
        { name: 'Suffix_445', stat: 'defense', modifier: 445 }
      ]
    });
    this.catalog.set('item_446', {
      id: 'item_446',
      name: 'Omni Gear 446',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 2240,
      affixes: [
        { name: 'Prefix_446', stat: 'attack', modifier: 892 },
        { name: 'Suffix_446', stat: 'defense', modifier: 446 }
      ]
    });
    this.catalog.set('item_447', {
      id: 'item_447',
      name: 'Omni Gear 447',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 2245,
      affixes: [
        { name: 'Prefix_447', stat: 'attack', modifier: 894 },
        { name: 'Suffix_447', stat: 'defense', modifier: 447 }
      ]
    });
    this.catalog.set('item_448', {
      id: 'item_448',
      name: 'Omni Gear 448',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 2250,
      affixes: [
        { name: 'Prefix_448', stat: 'attack', modifier: 896 },
        { name: 'Suffix_448', stat: 'defense', modifier: 448 }
      ]
    });
    this.catalog.set('item_449', {
      id: 'item_449',
      name: 'Omni Gear 449',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 2255,
      affixes: [
        { name: 'Prefix_449', stat: 'attack', modifier: 898 },
        { name: 'Suffix_449', stat: 'defense', modifier: 449 }
      ]
    });
    this.catalog.set('item_450', {
      id: 'item_450',
      name: 'Omni Gear 450',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 2260,
      affixes: [
        { name: 'Prefix_450', stat: 'attack', modifier: 900 },
        { name: 'Suffix_450', stat: 'defense', modifier: 450 }
      ]
    });
    this.catalog.set('item_451', {
      id: 'item_451',
      name: 'Omni Gear 451',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 2265,
      affixes: [
        { name: 'Prefix_451', stat: 'attack', modifier: 902 },
        { name: 'Suffix_451', stat: 'defense', modifier: 451 }
      ]
    });
    this.catalog.set('item_452', {
      id: 'item_452',
      name: 'Omni Gear 452',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 2270,
      affixes: [
        { name: 'Prefix_452', stat: 'attack', modifier: 904 },
        { name: 'Suffix_452', stat: 'defense', modifier: 452 }
      ]
    });
    this.catalog.set('item_453', {
      id: 'item_453',
      name: 'Omni Gear 453',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 2275,
      affixes: [
        { name: 'Prefix_453', stat: 'attack', modifier: 906 },
        { name: 'Suffix_453', stat: 'defense', modifier: 453 }
      ]
    });
    this.catalog.set('item_454', {
      id: 'item_454',
      name: 'Omni Gear 454',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 2280,
      affixes: [
        { name: 'Prefix_454', stat: 'attack', modifier: 908 },
        { name: 'Suffix_454', stat: 'defense', modifier: 454 }
      ]
    });
    this.catalog.set('item_455', {
      id: 'item_455',
      name: 'Omni Gear 455',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 2285,
      affixes: [
        { name: 'Prefix_455', stat: 'attack', modifier: 910 },
        { name: 'Suffix_455', stat: 'defense', modifier: 455 }
      ]
    });
    this.catalog.set('item_456', {
      id: 'item_456',
      name: 'Omni Gear 456',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 2290,
      affixes: [
        { name: 'Prefix_456', stat: 'attack', modifier: 912 },
        { name: 'Suffix_456', stat: 'defense', modifier: 456 }
      ]
    });
    this.catalog.set('item_457', {
      id: 'item_457',
      name: 'Omni Gear 457',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 2295,
      affixes: [
        { name: 'Prefix_457', stat: 'attack', modifier: 914 },
        { name: 'Suffix_457', stat: 'defense', modifier: 457 }
      ]
    });
    this.catalog.set('item_458', {
      id: 'item_458',
      name: 'Omni Gear 458',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 2300,
      affixes: [
        { name: 'Prefix_458', stat: 'attack', modifier: 916 },
        { name: 'Suffix_458', stat: 'defense', modifier: 458 }
      ]
    });
    this.catalog.set('item_459', {
      id: 'item_459',
      name: 'Omni Gear 459',
      slot: 'weapon' as any,
      rarity: 'epic' as any,
      baseStat: 2305,
      affixes: [
        { name: 'Prefix_459', stat: 'attack', modifier: 918 },
        { name: 'Suffix_459', stat: 'defense', modifier: 459 }
      ]
    });
    this.catalog.set('item_460', {
      id: 'item_460',
      name: 'Omni Gear 460',
      slot: 'ring' as any,
      rarity: 'legendary' as any,
      baseStat: 2310,
      affixes: [
        { name: 'Prefix_460', stat: 'attack', modifier: 920 },
        { name: 'Suffix_460', stat: 'defense', modifier: 460 }
      ]
    });
    this.catalog.set('item_461', {
      id: 'item_461',
      name: 'Omni Gear 461',
      slot: 'amulet' as any,
      rarity: 'mythic' as any,
      baseStat: 2315,
      affixes: [
        { name: 'Prefix_461', stat: 'attack', modifier: 922 },
        { name: 'Suffix_461', stat: 'defense', modifier: 461 }
      ]
    });
    this.catalog.set('item_462', {
      id: 'item_462',
      name: 'Omni Gear 462',
      slot: 'head' as any,
      rarity: 'common' as any,
      baseStat: 2320,
      affixes: [
        { name: 'Prefix_462', stat: 'attack', modifier: 924 },
        { name: 'Suffix_462', stat: 'defense', modifier: 462 }
      ]
    });
    this.catalog.set('item_463', {
      id: 'item_463',
      name: 'Omni Gear 463',
      slot: 'chest' as any,
      rarity: 'uncommon' as any,
      baseStat: 2325,
      affixes: [
        { name: 'Prefix_463', stat: 'attack', modifier: 926 },
        { name: 'Suffix_463', stat: 'defense', modifier: 463 }
      ]
    });
    this.catalog.set('item_464', {
      id: 'item_464',
      name: 'Omni Gear 464',
      slot: 'hands' as any,
      rarity: 'rare' as any,
      baseStat: 2330,
      affixes: [
        { name: 'Prefix_464', stat: 'attack', modifier: 928 },
        { name: 'Suffix_464', stat: 'defense', modifier: 464 }
      ]
    });
    this.catalog.set('item_465', {
      id: 'item_465',
      name: 'Omni Gear 465',
      slot: 'legs' as any,
      rarity: 'epic' as any,
      baseStat: 2335,
      affixes: [
        { name: 'Prefix_465', stat: 'attack', modifier: 930 },
        { name: 'Suffix_465', stat: 'defense', modifier: 465 }
      ]
    });
    this.catalog.set('item_466', {
      id: 'item_466',
      name: 'Omni Gear 466',
      slot: 'weapon' as any,
      rarity: 'legendary' as any,
      baseStat: 2340,
      affixes: [
        { name: 'Prefix_466', stat: 'attack', modifier: 932 },
        { name: 'Suffix_466', stat: 'defense', modifier: 466 }
      ]
    });
    this.catalog.set('item_467', {
      id: 'item_467',
      name: 'Omni Gear 467',
      slot: 'ring' as any,
      rarity: 'mythic' as any,
      baseStat: 2345,
      affixes: [
        { name: 'Prefix_467', stat: 'attack', modifier: 934 },
        { name: 'Suffix_467', stat: 'defense', modifier: 467 }
      ]
    });
    this.catalog.set('item_468', {
      id: 'item_468',
      name: 'Omni Gear 468',
      slot: 'amulet' as any,
      rarity: 'common' as any,
      baseStat: 2350,
      affixes: [
        { name: 'Prefix_468', stat: 'attack', modifier: 936 },
        { name: 'Suffix_468', stat: 'defense', modifier: 468 }
      ]
    });
    this.catalog.set('item_469', {
      id: 'item_469',
      name: 'Omni Gear 469',
      slot: 'head' as any,
      rarity: 'uncommon' as any,
      baseStat: 2355,
      affixes: [
        { name: 'Prefix_469', stat: 'attack', modifier: 938 },
        { name: 'Suffix_469', stat: 'defense', modifier: 469 }
      ]
    });
    this.catalog.set('item_470', {
      id: 'item_470',
      name: 'Omni Gear 470',
      slot: 'chest' as any,
      rarity: 'rare' as any,
      baseStat: 2360,
      affixes: [
        { name: 'Prefix_470', stat: 'attack', modifier: 940 },
        { name: 'Suffix_470', stat: 'defense', modifier: 470 }
      ]
    });
    this.catalog.set('item_471', {
      id: 'item_471',
      name: 'Omni Gear 471',
      slot: 'hands' as any,
      rarity: 'epic' as any,
      baseStat: 2365,
      affixes: [
        { name: 'Prefix_471', stat: 'attack', modifier: 942 },
        { name: 'Suffix_471', stat: 'defense', modifier: 471 }
      ]
    });
    this.catalog.set('item_472', {
      id: 'item_472',
      name: 'Omni Gear 472',
      slot: 'legs' as any,
      rarity: 'legendary' as any,
      baseStat: 2370,
      affixes: [
        { name: 'Prefix_472', stat: 'attack', modifier: 944 },
        { name: 'Suffix_472', stat: 'defense', modifier: 472 }
      ]
    });
    this.catalog.set('item_473', {
      id: 'item_473',
      name: 'Omni Gear 473',
      slot: 'weapon' as any,
      rarity: 'mythic' as any,
      baseStat: 2375,
      affixes: [
        { name: 'Prefix_473', stat: 'attack', modifier: 946 },
        { name: 'Suffix_473', stat: 'defense', modifier: 473 }
      ]
    });
    this.catalog.set('item_474', {
      id: 'item_474',
      name: 'Omni Gear 474',
      slot: 'ring' as any,
      rarity: 'common' as any,
      baseStat: 2380,
      affixes: [
        { name: 'Prefix_474', stat: 'attack', modifier: 948 },
        { name: 'Suffix_474', stat: 'defense', modifier: 474 }
      ]
    });
    this.catalog.set('item_475', {
      id: 'item_475',
      name: 'Omni Gear 475',
      slot: 'amulet' as any,
      rarity: 'uncommon' as any,
      baseStat: 2385,
      affixes: [
        { name: 'Prefix_475', stat: 'attack', modifier: 950 },
        { name: 'Suffix_475', stat: 'defense', modifier: 475 }
      ]
    });
    this.catalog.set('item_476', {
      id: 'item_476',
      name: 'Omni Gear 476',
      slot: 'head' as any,
      rarity: 'rare' as any,
      baseStat: 2390,
      affixes: [
        { name: 'Prefix_476', stat: 'attack', modifier: 952 },
        { name: 'Suffix_476', stat: 'defense', modifier: 476 }
      ]
    });
    this.catalog.set('item_477', {
      id: 'item_477',
      name: 'Omni Gear 477',
      slot: 'chest' as any,
      rarity: 'epic' as any,
      baseStat: 2395,
      affixes: [
        { name: 'Prefix_477', stat: 'attack', modifier: 954 },
        { name: 'Suffix_477', stat: 'defense', modifier: 477 }
      ]
    });
    this.catalog.set('item_478', {
      id: 'item_478',
      name: 'Omni Gear 478',
      slot: 'hands' as any,
      rarity: 'legendary' as any,
      baseStat: 2400,
      affixes: [
        { name: 'Prefix_478', stat: 'attack', modifier: 956 },
        { name: 'Suffix_478', stat: 'defense', modifier: 478 }
      ]
    });
    this.catalog.set('item_479', {
      id: 'item_479',
      name: 'Omni Gear 479',
      slot: 'legs' as any,
      rarity: 'mythic' as any,
      baseStat: 2405,
      affixes: [
        { name: 'Prefix_479', stat: 'attack', modifier: 958 },
        { name: 'Suffix_479', stat: 'defense', modifier: 479 }
      ]
    });
    this.catalog.set('item_480', {
      id: 'item_480',
      name: 'Omni Gear 480',
      slot: 'weapon' as any,
      rarity: 'common' as any,
      baseStat: 2410,
      affixes: [
        { name: 'Prefix_480', stat: 'attack', modifier: 960 },
        { name: 'Suffix_480', stat: 'defense', modifier: 480 }
      ]
    });
    this.catalog.set('item_481', {
      id: 'item_481',
      name: 'Omni Gear 481',
      slot: 'ring' as any,
      rarity: 'uncommon' as any,
      baseStat: 2415,
      affixes: [
        { name: 'Prefix_481', stat: 'attack', modifier: 962 },
        { name: 'Suffix_481', stat: 'defense', modifier: 481 }
      ]
    });
    this.catalog.set('item_482', {
      id: 'item_482',
      name: 'Omni Gear 482',
      slot: 'amulet' as any,
      rarity: 'rare' as any,
      baseStat: 2420,
      affixes: [
        { name: 'Prefix_482', stat: 'attack', modifier: 964 },
        { name: 'Suffix_482', stat: 'defense', modifier: 482 }
      ]
    });
    this.catalog.set('item_483', {
      id: 'item_483',
      name: 'Omni Gear 483',
      slot: 'head' as any,
      rarity: 'epic' as any,
      baseStat: 2425,
      affixes: [
        { name: 'Prefix_483', stat: 'attack', modifier: 966 },
        { name: 'Suffix_483', stat: 'defense', modifier: 483 }
      ]
    });
    this.catalog.set('item_484', {
      id: 'item_484',
      name: 'Omni Gear 484',
      slot: 'chest' as any,
      rarity: 'legendary' as any,
      baseStat: 2430,
      affixes: [
        { name: 'Prefix_484', stat: 'attack', modifier: 968 },
        { name: 'Suffix_484', stat: 'defense', modifier: 484 }
      ]
    });
    this.catalog.set('item_485', {
      id: 'item_485',
      name: 'Omni Gear 485',
      slot: 'hands' as any,
      rarity: 'mythic' as any,
      baseStat: 2435,
      affixes: [
        { name: 'Prefix_485', stat: 'attack', modifier: 970 },
        { name: 'Suffix_485', stat: 'defense', modifier: 485 }
      ]
    });
    this.catalog.set('item_486', {
      id: 'item_486',
      name: 'Omni Gear 486',
      slot: 'legs' as any,
      rarity: 'common' as any,
      baseStat: 2440,
      affixes: [
        { name: 'Prefix_486', stat: 'attack', modifier: 972 },
        { name: 'Suffix_486', stat: 'defense', modifier: 486 }
      ]
    });
    this.catalog.set('item_487', {
      id: 'item_487',
      name: 'Omni Gear 487',
      slot: 'weapon' as any,
      rarity: 'uncommon' as any,
      baseStat: 2445,
      affixes: [
        { name: 'Prefix_487', stat: 'attack', modifier: 974 },
        { name: 'Suffix_487', stat: 'defense', modifier: 487 }
      ]
    });
    this.catalog.set('item_488', {
      id: 'item_488',
      name: 'Omni Gear 488',
      slot: 'ring' as any,
      rarity: 'rare' as any,
      baseStat: 2450,
      affixes: [
        { name: 'Prefix_488', stat: 'attack', modifier: 976 },
        { name: 'Suffix_488', stat: 'defense', modifier: 488 }
      ]
    });
    this.catalog.set('item_489', {
      id: 'item_489',
      name: 'Omni Gear 489',
      slot: 'amulet' as any,
      rarity: 'epic' as any,
      baseStat: 2455,
      affixes: [
        { name: 'Prefix_489', stat: 'attack', modifier: 978 },
        { name: 'Suffix_489', stat: 'defense', modifier: 489 }
      ]
    });
    this.catalog.set('item_490', {
      id: 'item_490',
      name: 'Omni Gear 490',
      slot: 'head' as any,
      rarity: 'legendary' as any,
      baseStat: 2460,
      affixes: [
        { name: 'Prefix_490', stat: 'attack', modifier: 980 },
        { name: 'Suffix_490', stat: 'defense', modifier: 490 }
      ]
    });
    this.catalog.set('item_491', {
      id: 'item_491',
      name: 'Omni Gear 491',
      slot: 'chest' as any,
      rarity: 'mythic' as any,
      baseStat: 2465,
      affixes: [
        { name: 'Prefix_491', stat: 'attack', modifier: 982 },
        { name: 'Suffix_491', stat: 'defense', modifier: 491 }
      ]
    });
    this.catalog.set('item_492', {
      id: 'item_492',
      name: 'Omni Gear 492',
      slot: 'hands' as any,
      rarity: 'common' as any,
      baseStat: 2470,
      affixes: [
        { name: 'Prefix_492', stat: 'attack', modifier: 984 },
        { name: 'Suffix_492', stat: 'defense', modifier: 492 }
      ]
    });
    this.catalog.set('item_493', {
      id: 'item_493',
      name: 'Omni Gear 493',
      slot: 'legs' as any,
      rarity: 'uncommon' as any,
      baseStat: 2475,
      affixes: [
        { name: 'Prefix_493', stat: 'attack', modifier: 986 },
        { name: 'Suffix_493', stat: 'defense', modifier: 493 }
      ]
    });
    this.catalog.set('item_494', {
      id: 'item_494',
      name: 'Omni Gear 494',
      slot: 'weapon' as any,
      rarity: 'rare' as any,
      baseStat: 2480,
      affixes: [
        { name: 'Prefix_494', stat: 'attack', modifier: 988 },
        { name: 'Suffix_494', stat: 'defense', modifier: 494 }
      ]
    });
    this.catalog.set('item_495', {
      id: 'item_495',
      name: 'Omni Gear 495',
      slot: 'ring' as any,
      rarity: 'epic' as any,
      baseStat: 2485,
      affixes: [
        { name: 'Prefix_495', stat: 'attack', modifier: 990 },
        { name: 'Suffix_495', stat: 'defense', modifier: 495 }
      ]
    });
    this.catalog.set('item_496', {
      id: 'item_496',
      name: 'Omni Gear 496',
      slot: 'amulet' as any,
      rarity: 'legendary' as any,
      baseStat: 2490,
      affixes: [
        { name: 'Prefix_496', stat: 'attack', modifier: 992 },
        { name: 'Suffix_496', stat: 'defense', modifier: 496 }
      ]
    });
    this.catalog.set('item_497', {
      id: 'item_497',
      name: 'Omni Gear 497',
      slot: 'head' as any,
      rarity: 'mythic' as any,
      baseStat: 2495,
      affixes: [
        { name: 'Prefix_497', stat: 'attack', modifier: 994 },
        { name: 'Suffix_497', stat: 'defense', modifier: 497 }
      ]
    });
    this.catalog.set('item_498', {
      id: 'item_498',
      name: 'Omni Gear 498',
      slot: 'chest' as any,
      rarity: 'common' as any,
      baseStat: 2500,
      affixes: [
        { name: 'Prefix_498', stat: 'attack', modifier: 996 },
        { name: 'Suffix_498', stat: 'defense', modifier: 498 }
      ]
    });
    this.catalog.set('item_499', {
      id: 'item_499',
      name: 'Omni Gear 499',
      slot: 'hands' as any,
      rarity: 'uncommon' as any,
      baseStat: 2505,
      affixes: [
        { name: 'Prefix_499', stat: 'attack', modifier: 998 },
        { name: 'Suffix_499', stat: 'defense', modifier: 499 }
      ]
    });
    this.catalog.set('item_500', {
      id: 'item_500',
      name: 'Omni Gear 500',
      slot: 'legs' as any,
      rarity: 'rare' as any,
      baseStat: 2510,
      affixes: [
        { name: 'Prefix_500', stat: 'attack', modifier: 1000 },
        { name: 'Suffix_500', stat: 'defense', modifier: 500 }
      ]
    });
  }

  static getItem(id: string): ItemDef | undefined {
    if (this.catalog.size === 0) this.initialize();
    return this.catalog.get(id);
  }

  static getCount(): number {
    if (this.catalog.size === 0) this.initialize();
    return this.catalog.size;
  }
}
