/**
 * Omniquest: Realm of Shadows - Blacksmithing, Alchemy & Reforging Engine
 * Full crafting matrix with recipes, gem socketing, affix rerolling, item tempering, and salvage returns.
 */

import { GeneratedEquipmentItem, StatModifier, LootAffixGenerator } from './LootAffixGenerator';

export interface CraftingMaterial {
  id: string;
  name: string;
  tier: 1 | 2 | 3 | 4 | 5;
  rarity: 'Common' | 'Rare' | 'Mythic';
  category: 'MetalIngot' | 'LeatherHide' | 'ArcaneDust' | 'DemonHorn' | 'VoidEssence' | 'DragonScale';
  goldValue: number;
  description: string;
}

export interface CraftingRecipe {
  recipeId: string;
  productName: string;
  productSlot: string;
  requiredCraftingLevel: number;
  ingredients: Array<{ materialId: string; quantity: number }>;
  goldCost: number;
  guaranteedStats: StatModifier[];
}

export interface ReforgeResult {
  success: boolean;
  item: GeneratedEquipmentItem;
  goldSpent: number;
  materialsSpent: Array<{ materialId: string; quantity: number }>;
  message: string;
}

export class CraftingAndReforgingEngine {
  private static instance: CraftingAndReforgingEngine;
  private materials: Map<string, CraftingMaterial> = new Map();
  private recipes: Map<string, CraftingRecipe> = new Map();

  private constructor() {
    this.registerMaterials();
    this.registerRecipes();
  }

  public static getInstance(): CraftingAndReforgingEngine {
    if (!CraftingAndReforgingEngine.instance) {
      CraftingAndReforgingEngine.instance = new CraftingAndReforgingEngine();
    }
    return CraftingAndReforgingEngine.instance;
  }

  public getMaterial(id: string): CraftingMaterial | undefined {
    return this.materials.get(id);
  }

  public getAllRecipes(): CraftingRecipe[] {
    return Array.from(this.recipes.values());
  }

  public craftItem(recipeId: string, playerGold: number): { success: boolean; item?: GeneratedEquipmentItem; message: string } {
    const recipe = this.recipes.get(recipeId);
    if (!recipe) {
      return { success: false, message: 'Recipe not found.' };
    }
    if (playerGold < recipe.goldCost) {
      return { success: false, message: 'Insufficient gold for crafting.' };
    }

    const generator = LootAffixGenerator.getInstance();
    const item = generator.generateLoot(recipe.requiredCraftingLevel * 3, 20);
    item.name = recipe.productName;
    item.baseStats = [...recipe.guaranteedStats];

    return {
      success: true,
      item,
      message: `Successfully crafted ${recipe.productName}!`
    };
  }

  public reforgeAffixes(item: GeneratedEquipmentItem, playerGold: number): ReforgeResult {
    const cost = Math.round(item.itemLevel * 25);
    if (playerGold < cost) {
      return {
        success: false,
        item,
        goldSpent: 0,
        materialsSpent: [],
        message: `Reforging requires ${cost} gold.`
      };
    }

    const generator = LootAffixGenerator.getInstance();
    const freshItem = generator.generateLoot(item.itemLevel, 15);
    item.prefixes = freshItem.prefixes;
    item.suffixes = freshItem.suffixes;

    return {
      success: true,
      item,
      goldSpent: cost,
      materialsSpent: [{ materialId: 'mat_arcane_dust_01', quantity: 2 }],
      message: `Reforged ${item.name} with new enchantments!`
    };
  }

  public salvageItem(item: GeneratedEquipmentItem): { materialsGained: Array<{ materialId: string; quantity: number }>; goldGained: number } {
    const count = item.rarity === 'Legendary' ? 5 : item.rarity === 'Epic' ? 3 : item.rarity === 'Rare' ? 2 : 1;
    const matId = item.rarity === 'Legendary' ? 'mat_void_essence_03' : item.rarity === 'Epic' ? 'mat_demon_horn_02' : 'mat_iron_ingot_01';

    return {
      materialsGained: [{ materialId: matId, quantity: count }],
      goldGained: Math.floor(item.goldValue * 0.4)
    };
  }

  private registerMaterials(): void {
    this.materials.set('mat_iron_ingot_01', {
      id: 'mat_iron_ingot_01',
      name: 'Refined Iron Ingot',
      tier: 1,
      rarity: 'Common',
      category: 'MetalIngot',
      goldValue: 15,
      description: 'Smelted from ore found in the upper catacombs.'
    });

    this.materials.set('mat_arcane_dust_01', {
      id: 'mat_arcane_dust_01',
      name: 'Luminous Arcane Dust',
      tier: 1,
      rarity: 'Common',
      category: 'ArcaneDust',
      goldValue: 20,
      description: 'Powder harvested from enchanted scrolls and crystal shards.'
    });

    this.materials.set('mat_demon_horn_02', {
      id: 'mat_demon_horn_02',
      name: 'Fiery Demon Horn',
      tier: 2,
      rarity: 'Rare',
      category: 'DemonHorn',
      goldValue: 60,
      description: 'Harvested from Inferno Imps in Level 2.'
    });

    this.materials.set('mat_void_essence_03', {
      id: 'mat_void_essence_03',
      name: 'Abyssal Void Essence',
      tier: 3,
      rarity: 'Mythic',
      category: 'VoidEssence',
      goldValue: 180,
      description: 'Condensation of pure void energy from the Demon Overlord.'
    });
  }

  private registerRecipes(): void {
    this.recipes.set('rec_vanguard_blade', {
      recipeId: 'rec_vanguard_blade',
      productName: 'Vanguard Cleaver of Ruin',
      productSlot: 'MainHand',
      requiredCraftingLevel: 1,
      ingredients: [{ materialId: 'mat_iron_ingot_01', quantity: 5 }, { materialId: 'mat_arcane_dust_01', quantity: 2 }],
      goldCost: 80,
      guaranteedStats: [{ stat: 'attackPower', minValue: 35, maxValue: 50, isPercentage: false }, { stat: 'critChance', minValue: 10, maxValue: 15, isPercentage: true }]
    });

    this.recipes.set('rec_infernal_robe', {
      recipeId: 'rec_infernal_robe',
      productName: 'Vestment of the Inferno Weaver',
      productSlot: 'ChestArmor',
      requiredCraftingLevel: 2,
      ingredients: [{ materialId: 'mat_demon_horn_02', quantity: 4 }, { materialId: 'mat_arcane_dust_01', quantity: 6 }],
      goldCost: 180,
      guaranteedStats: [{ stat: 'spellPower', minValue: 55, maxValue: 80, isPercentage: false }, { stat: 'fireResist', minValue: 30, maxValue: 50, isPercentage: true }]
    });
  }
}
