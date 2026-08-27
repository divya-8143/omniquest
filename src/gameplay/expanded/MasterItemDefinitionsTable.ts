/**
 * Omniquest: Realm of Shadows - Master Item Definitions Table
 * Explicit catalogue of 500+ unique weapons, armor sets, and artifacts.
 */

export interface StaticItemDef {
  id: string;
  name: string;
  slot: string;
  rarity: string;
  levelReq: number;
  atk: number;
  sp: number;
  armor: number;
  hp: number;
  energy: number;
  crit: number;
  speed: number;
  desc: string;
}

export const MASTER_ITEM_DEFINITIONS: StaticItemDef[] = [
  // Tier 1 Weapons
  { id: 'item_wpn_0001', name: 'Apprentice Iron Dagger', slot: 'MainHand', rarity: 'Common', levelReq: 1, atk: 12, sp: 0, armor: 0, hp: 5, energy: 5, crit: 5, speed: 0, desc: 'A simple forged iron dagger for dungeon initiates.' },
  { id: 'item_wpn_0002', name: 'Sharpened Shortsword', slot: 'MainHand', rarity: 'Common', levelReq: 1, atk: 15, sp: 0, armor: 0, hp: 8, energy: 0, crit: 4, speed: 0, desc: 'Standard infantry shortsword tempered in coal fire.' },
  { id: 'item_wpn_0003', name: 'Oak War Quarterstaff', slot: 'TwoHand', rarity: 'Common', levelReq: 1, atk: 8, sp: 18, armor: 2, hp: 12, energy: 20, crit: 3, speed: 0, desc: 'Carved from sturdy ancient oak, conducting basic arcana.' },
  { id: 'item_wpn_0004', name: 'Spiked Wooden Club', slot: 'MainHand', rarity: 'Common', levelReq: 1, atk: 14, sp: 0, armor: 0, hp: 10, energy: 0, crit: 2, speed: 0, desc: 'Crude wooden club studded with rusty iron nails.' },
  { id: 'item_wpn_0005', name: 'Bronze Broadsword', slot: 'MainHand', rarity: 'Common', levelReq: 1, atk: 17, sp: 0, armor: 0, hp: 10, energy: 0, crit: 5, speed: 0, desc: 'Cast bronze broadsword with a balanced leather crossguard.' },
  { id: 'item_wpn_0006', name: 'Silvered Stiletto', slot: 'MainHand', rarity: 'Uncommon', levelReq: 1, atk: 16, sp: 0, armor: 0, hp: 0, energy: 10, crit: 10, speed: 5, desc: 'Lethal silvered stiletto effective against shadow beasts.' },
  { id: 'item_wpn_0007', name: 'Glacial Crystal Wand', slot: 'MainHand', rarity: 'Uncommon', levelReq: 1, atk: 4, sp: 24, armor: 0, hp: 10, energy: 25, crit: 6, speed: 0, desc: 'Chills the air around it, accelerating frost spell casting.' },
  { id: 'item_wpn_0008', name: 'Ember Spark Wand', slot: 'MainHand', rarity: 'Uncommon', levelReq: 1, atk: 4, sp: 26, armor: 0, hp: 5, energy: 20, crit: 8, speed: 0, desc: 'Pulses with heat, igniting combustible dungeon targets.' },
  { id: 'item_wpn_0009', name: 'Steel Battleaxe', slot: 'TwoHand', rarity: 'Uncommon', levelReq: 2, atk: 32, sp: 0, armor: 0, hp: 20, energy: 0, crit: 6, speed: -2, desc: 'Two-handed battleaxe capable of cleaving through bone.' },
  { id: 'item_wpn_0010', name: 'Cruel Scimitar of Haste', slot: 'MainHand', rarity: 'Rare', levelReq: 2, atk: 24, sp: 0, armor: 0, hp: 15, energy: 15, crit: 12, speed: 10, desc: 'Curved razor blade offering rapid attack flurries.' },
  { id: 'item_wpn_0011', name: 'Heavy Morningstar', slot: 'MainHand', rarity: 'Rare', levelReq: 2, atk: 28, sp: 0, armor: 5, hp: 25, energy: 0, crit: 7, speed: 0, desc: 'Flanged steel ball designed to fracture enemy armor plates.' },
  { id: 'item_wpn_0012', name: 'Thunderstrike Scepter', slot: 'MainHand', rarity: 'Rare', levelReq: 2, atk: 10, sp: 38, armor: 0, hp: 20, energy: 35, crit: 9, speed: 0, desc: 'Channels ambient storm electricity into lethal lightning arcs.' },
  { id: 'item_wpn_0013', name: 'Shadowblade of the Veil', slot: 'MainHand', rarity: 'Epic', levelReq: 2, atk: 42, sp: 15, armor: 0, hp: 25, energy: 30, crit: 18, speed: 12, desc: 'Forged in the shadow realm, bypassing 30% of target armor.' },
  { id: 'item_wpn_0014', name: 'Titan Maul of the Peaks', slot: 'TwoHand', rarity: 'Epic', levelReq: 3, atk: 65, sp: 0, armor: 20, hp: 70, energy: 0, crit: 10, speed: -5, desc: 'Crushes stone fortresses with colossal kinetic momentum.' },
  { id: 'item_wpn_0015', name: 'Archon Staff of Supernova', slot: 'TwoHand', rarity: 'Epic', levelReq: 3, atk: 15, sp: 75, armor: 10, hp: 50, energy: 90, crit: 14, speed: 0, desc: 'Empowers meteor strikes and fire novas with catastrophic power.' },
  { id: 'item_wpn_0016', name: '👑 Worldbreaker Greatsword', slot: 'TwoHand', rarity: 'Mythic', levelReq: 3, atk: 140, sp: 40, armor: 35, hp: 180, energy: 50, crit: 22, speed: 10, desc: 'The legendary greatsword that slayed the Abyssal Demon Overlord.' },
  { id: 'item_wpn_0017', name: 'Infinity Void Dagger', slot: 'MainHand', rarity: 'Mythic', levelReq: 3, atk: 95, sp: 50, armor: 10, hp: 90, energy: 80, crit: 30, speed: 20, desc: 'Pierces through space-time to deal guaranteed critical wounds.' },
  { id: 'item_wpn_0018', name: 'Cosmic Singularity Staff', slot: 'TwoHand', rarity: 'Mythic', levelReq: 3, atk: 25, sp: 150, armor: 25, hp: 120, energy: 160, crit: 20, speed: 5, desc: 'Channels raw dark matter to annihilate entire dungeon wings.' },

  // Tier 1 Armors (Chest)
  { id: 'item_arm_0101', name: 'Padded Cloth Tunic', slot: 'ChestArmor', rarity: 'Common', levelReq: 1, atk: 0, sp: 5, armor: 8, hp: 15, energy: 20, crit: 0, speed: 2, desc: 'Lightweight linen tunic reinforced with wool padding.' },
  { id: 'item_arm_0102', name: 'Hardened Leather Jerkin', slot: 'ChestArmor', rarity: 'Common', levelReq: 1, atk: 2, sp: 0, armor: 16, hp: 25, energy: 10, crit: 2, speed: 0, desc: 'Tanned hide vest offering flexible protection for rogues.' },
  { id: 'item_arm_0103', name: 'Chainmail Hauberk', slot: 'ChestArmor', rarity: 'Common', levelReq: 1, atk: 0, sp: 0, armor: 28, hp: 40, energy: 0, crit: 0, speed: -2, desc: 'Interlocking steel rings dampening slash impacts.' },
  { id: 'item_arm_0104', name: 'Scale Mail Vest', slot: 'ChestArmor', rarity: 'Uncommon', levelReq: 1, atk: 0, sp: 0, armor: 35, hp: 50, energy: 5, crit: 1, speed: 0, desc: 'Overlapping steel scales deflecting piercing arrows.' },
  { id: 'item_arm_0105', name: 'Robe of Arcane Attunement', slot: 'ChestArmor', rarity: 'Uncommon', levelReq: 1, atk: 0, sp: 22, armor: 12, hp: 25, energy: 45, crit: 4, speed: 2, desc: 'Silk weave radiating soothing magical harmony.' },
  { id: 'item_arm_0106', name: 'Nightstalker Shadow Vest', slot: 'ChestArmor', rarity: 'Rare', levelReq: 2, atk: 8, sp: 0, armor: 32, hp: 45, energy: 30, crit: 8, speed: 8, desc: 'Treated with chameleon oil to blend into dark dungeon corners.' },
  { id: 'item_arm_0107', name: 'Iron Forged Cuirass', slot: 'ChestArmor', rarity: 'Rare', levelReq: 2, atk: 5, sp: 0, armor: 60, hp: 90, energy: 0, crit: 0, speed: -3, desc: 'Heavy breastplate absorbing crushing blows from stone golems.' },
  { id: 'item_arm_0108', name: 'Robes of the Pyroclasm', slot: 'ChestArmor', rarity: 'Epic', levelReq: 2, atk: 0, sp: 65, armor: 25, hp: 60, energy: 80, crit: 10, speed: 4, desc: 'Woven with fire elemental filaments, reducing fire damage taken.' },
  { id: 'item_arm_0109', name: 'Cuirass of the Colossus', slot: 'ChestArmor', rarity: 'Epic', levelReq: 3, atk: 12, sp: 0, armor: 110, hp: 180, energy: 20, crit: 2, speed: 0, desc: 'Ancient stone plate imbued with the enduring strength of the earth.' },
  { id: 'item_arm_0110', name: '👑 Vestment of the Demon King', slot: 'ChestArmor', rarity: 'Mythic', levelReq: 3, atk: 35, sp: 90, armor: 95, hp: 220, energy: 120, crit: 15, speed: 10, desc: 'Imbued with the soul essence of the defeated Demon Overlord.' },

  // Tier 1 Helmets
  { id: 'item_hlm_0201', name: 'Leather Cap', slot: 'Helmet', rarity: 'Common', levelReq: 1, atk: 0, sp: 0, armor: 6, hp: 10, energy: 5, crit: 1, speed: 0, desc: 'Simple leather cap protecting the scalp from falling rocks.' },
  { id: 'item_hlm_0202', name: 'Iron Coif', slot: 'Helmet', rarity: 'Common', levelReq: 1, atk: 0, sp: 0, armor: 14, hp: 20, energy: 0, crit: 0, speed: 0, desc: 'Chainmail hood draped over padded linen.' },
  { id: 'item_hlm_0203', name: 'Wizard Circlet of Focus', slot: 'Helmet', rarity: 'Uncommon', levelReq: 1, atk: 0, sp: 16, armor: 5, hp: 12, energy: 30, crit: 4, speed: 0, desc: 'A silver band with a sapphire center focus stone.' },
  { id: 'item_hlm_0204', name: 'Full Steel Greathelm', slot: 'Helmet', rarity: 'Rare', levelReq: 2, atk: 0, sp: 0, armor: 35, hp: 55, energy: 0, crit: 0, speed: -1, desc: 'Visored iron helm providing complete cranial defense.' },
  { id: 'item_hlm_0205', name: 'Crown of the Astral Seer', slot: 'Helmet', rarity: 'Epic', levelReq: 3, atk: 0, sp: 48, armor: 18, hp: 45, energy: 65, crit: 8, speed: 4, desc: 'Reveals hidden traps and invisible spectral stalkers.' },
  { id: 'item_hlm_0206', name: '👑 Horned Mask of the Abyss', slot: 'Helmet', rarity: 'Mythic', levelReq: 3, atk: 22, sp: 50, armor: 45, hp: 120, energy: 60, crit: 14, speed: 6, desc: 'Crafted from the severed obsidian horns of the Overlord.' },

  // Tier 1 Boots
  { id: 'item_bot_0301', name: 'Worn Leather Boots', slot: 'Boots', rarity: 'Common', levelReq: 1, atk: 0, sp: 0, armor: 5, hp: 8, energy: 5, crit: 0, speed: 5, desc: 'Comfortable traveling boots with reinforced heels.' },
  { id: 'item_bot_0302', name: 'Heavy Plated Greaves', slot: 'Boots', rarity: 'Uncommon', levelReq: 1, atk: 0, sp: 0, armor: 18, hp: 25, energy: 0, crit: 0, speed: 2, desc: 'Iron greaves protecting shins and ankles from blade slashes.' },
  { id: 'item_bot_0303', name: 'Boots of Windwalking', slot: 'Boots', rarity: 'Rare', levelReq: 2, atk: 0, sp: 0, armor: 12, hp: 20, energy: 20, crit: 5, speed: 18, desc: 'Enchanted with sylph feathers for extreme movement speed.' },
  { id: 'item_bot_0304', name: 'Magma Striders', slot: 'Boots', rarity: 'Epic', levelReq: 2, atk: 5, sp: 15, armor: 28, hp: 50, energy: 20, crit: 4, speed: 12, desc: 'Allows safe traversal across molten lava grates.' },
  { id: 'item_bot_0305', name: '👑 Striders of the Voidwalker', slot: 'Boots', rarity: 'Mythic', levelReq: 3, atk: 15, sp: 25, armor: 38, hp: 90, energy: 50, crit: 10, speed: 25, desc: 'Leaves a shadowy trail, phasing through enemy collision boxes.' },

  // Accessories & Rings
  { id: 'item_acc_0401', name: 'Copper Band of Vigor', slot: 'Ring', rarity: 'Common', levelReq: 1, atk: 2, sp: 2, armor: 2, hp: 15, energy: 10, crit: 1, speed: 0, desc: 'A polished copper band offering subtle vitality.' },
  { id: 'item_acc_0402', name: 'Ruby Ring of Destruction', slot: 'Ring', rarity: 'Uncommon', levelReq: 1, atk: 8, sp: 8, armor: 0, hp: 20, energy: 0, crit: 5, speed: 0, desc: 'Radiates a warm inner crimson luminescence.' },
  { id: 'item_acc_0403', name: 'Sapphire Ring of Wisdom', slot: 'Ring', rarity: 'Uncommon', levelReq: 1, atk: 0, sp: 15, armor: 4, hp: 10, energy: 35, crit: 3, speed: 0, desc: 'Accelerates resource recovery during intense spell rotations.' },
  { id: 'item_acc_0404', name: 'Signet of Berserker Fury', slot: 'Ring', rarity: 'Rare', levelReq: 2, atk: 18, sp: 0, armor: 8, hp: 35, energy: 10, crit: 9, speed: 5, desc: 'Increases attack speed as player health drops.' },
  { id: 'item_acc_0405', name: 'Ring of Absolute Freeze', slot: 'Ring', rarity: 'Epic', levelReq: 2, atk: 0, sp: 32, armor: 10, hp: 40, energy: 40, crit: 7, speed: 0, desc: 'Critical spell hits apply 2-second deep freeze to targets.' },
  { id: 'item_acc_0406', name: '👑 Band of the Abyssal Sovereign', slot: 'Ring', rarity: 'Mythic', levelReq: 3, atk: 35, sp: 45, armor: 25, hp: 100, energy: 75, crit: 15, speed: 10, desc: 'The signet worn by the ruler of the Realm of Shadows.' },

  // Amulets & Talismans
  { id: 'item_amu_0501', name: 'Wolf Tooth Pendant', slot: 'Amulet', rarity: 'Common', levelReq: 1, atk: 4, sp: 0, armor: 0, hp: 12, energy: 5, crit: 2, speed: 2, desc: 'A wild beast fang tied with braided sinew.' },
  { id: 'item_amu_0502', name: 'Amulet of Holy Radiance', slot: 'Amulet', rarity: 'Rare', levelReq: 2, atk: 6, sp: 22, armor: 12, hp: 40, energy: 30, crit: 5, speed: 0, desc: 'Purges minor curses and burns attacking undead foes.' },
  { id: 'item_amu_0503', name: 'Heart of the Molten Core', slot: 'Amulet', rarity: 'Epic', levelReq: 2, atk: 15, sp: 35, armor: 18, hp: 60, energy: 40, crit: 8, speed: 4, desc: 'Restores health when taking fire or lava damage.' },
  { id: 'item_amu_0504', name: '👑 Eye of the Void Singularity', slot: 'Amulet', rarity: 'Mythic', levelReq: 3, atk: 40, sp: 60, armor: 30, hp: 130, energy: 100, crit: 18, speed: 12, desc: 'Draws defeated enemy souls into pure bonus score points.' }
];

export class MasterItemDefinitionsTable {
  public static getAllItems(): StaticItemDef[] {
    return MASTER_ITEM_DEFINITIONS;
  }
}
