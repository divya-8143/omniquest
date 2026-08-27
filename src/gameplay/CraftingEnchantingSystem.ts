import { DetailedCatalogItem } from './expanded/ComprehensiveItemCatalogData';

export interface CraftingIngredient {
  itemId: string;
  count: number;
}

export interface EnchantmentRune {
  runeId: string;
  name: string;
  tier: number;
  statBonus: {
    stat: string;
    value: number;
    isPercentage: boolean;
  };
  requiredSocketColor: 'Red' | 'Blue' | 'Green' | 'Prismatic';
}

export interface ItemCraftingRecipe {
  recipeId: string;
  recipeName: string;
  category: 'Weapon' | 'Armor' | 'Accessory' | 'Alchemy';
  requiredLevel: number;
  ingredients: CraftingIngredient[];
  goldCost: number;
  baseSuccessRate: number; // 0.0 to 1.0
  resultItem: DetailedCatalogItem;
}

export class CraftingEnchantingSystem {
  private static instance: CraftingEnchantingSystem;
  private recipes: Map<string, ItemCraftingRecipe> = new Map();
  private runes: Map<string, EnchantmentRune> = new Map();

  constructor() {
    this.initializeDefaultRecipes();
    this.initializeDefaultRunes();
  }

  public static getInstance(): CraftingEnchantingSystem {
    if (!CraftingEnchantingSystem.instance) {
      CraftingEnchantingSystem.instance = new CraftingEnchantingSystem();
    }
    return CraftingEnchantingSystem.instance;
  }

  public getRecipe(id: string): ItemCraftingRecipe | undefined {
    return this.recipes.get(id);
  }

  public getAllRecipes(): ItemCraftingRecipe[] {
    return Array.from(this.recipes.values());
  }

  public getRune(id: string): EnchantmentRune | undefined {
    return this.runes.get(id);
  }

  public craftItem(
    recipeId: string,
    playerGold: number,
    inventory: Map<string, number>,
    playerLuckBonus: number = 0
  ): { success: boolean; item?: DetailedCatalogItem; message: string; remainingGold: number } {
    const recipe = this.recipes.get(recipeId);
    if (!recipe) {
      return { success: false, message: 'Recipe not found', remainingGold: playerGold };
    }

    if (playerGold < recipe.goldCost) {
      return { success: false, message: 'Insufficient gold for crafting cost', remainingGold: playerGold };
    }

    // Check ingredients
    for (const ing of recipe.ingredients) {
      const have = inventory.get(ing.itemId) || 0;
      if (have < ing.count) {
        return { success: false, message: `Missing required ingredient: ${ing.itemId} (${have}/${ing.count})`, remainingGold: playerGold };
      }
    }

    // Deduct ingredients and gold
    for (const ing of recipe.ingredients) {
      const have = inventory.get(ing.itemId) || 0;
      inventory.set(ing.itemId, have - ing.count);
    }
    const newGold = playerGold - recipe.goldCost;

    // Roll success
    const finalRate = Math.min(1.0, recipe.baseSuccessRate + playerLuckBonus);
    const roll = Math.random();

    if (roll <= finalRate) {
      return {
        success: true,
        item: { ...recipe.resultItem, id: `${recipe.resultItem.id}_${Date.now()}` },
        message: `Successfully forged ${recipe.resultItem.name}!`,
        remainingGold: newGold
      };
    } else {
      return {
        success: false,
        message: 'Crafting failed! Materials were shattered in the forging process.',
        remainingGold: newGold
      };
    }
  }

  public applyEnchantment(
    item: DetailedCatalogItem,
    runeId: string
  ): { success: boolean; modifiedItem?: DetailedCatalogItem; message: string } {
    const rune = this.runes.get(runeId);
    if (!rune) {
      return { success: false, message: 'Invalid rune ID' };
    }

    const modified: DetailedCatalogItem = { ...item };
    const statName = rune.statBonus.stat;
    const val = rune.statBonus.value;

    if (statName === 'attackPower') modified.attackPower += val;
    else if (statName === 'spellPower') modified.spellPower += val;
    else if (statName === 'armorRating') modified.armorRating += val;
    else if (statName === 'maxHealthBonus') modified.maxHealthBonus += val;
    else if (statName === 'critChancePct') modified.critChancePct += val;
    else if (statName === 'movementSpeedBonusPct') modified.movementSpeedBonusPct += val;
    else if (statName === 'lifeStealPct') modified.lifeStealPct += val;

    modified.specialAffixDescription = `${modified.specialAffixDescription} [Enchanted: +${val} ${statName}]`;
    return { success: true, modifiedItem: modified, message: `Applied Rune of ${rune.name} to ${item.name}!` };
  }

  private initializeDefaultRecipes(): void {
    this.recipes.set('rcp_iron_gladius', {
      recipeId: 'rcp_iron_gladius',
      recipeName: 'Forge Iron Gladius',
      category: 'Weapon',
      requiredLevel: 1,
      ingredients: [{ itemId: 'mat_iron_bar', count: 3 }, { itemId: 'mat_leather_strap', count: 1 }],
      goldCost: 20,
      baseSuccessRate: 0.95,
      resultItem: {
        id: 'item_forged_gladius',
        name: 'Master-Forged Iron Gladius',
        slot: 'MainHand',
        rarity: 'Uncommon',
        itemLevel: 1,
        requiredLevel: 1,
        attackPower: 20,
        spellPower: 0,
        armorRating: 0,
        maxHealthBonus: 10,
        maxEnergyBonus: 0,
        critChancePct: 8.0,
        critMultiplierBonus: 1.6,
        movementSpeedBonusPct: 0,
        lifeStealPct: 0,
        fireResistancePct: 0,
        frostResistancePct: 0,
        shadowResistancePct: 0,
        holyResistancePct: 0,
        lightningResistancePct: 0,
        poisonResistancePct: 0,
        specialAffixDescription: 'Sharpened on dwarven whetstones.',
        flavorLoreText: 'Crafted with precision at the city anvil.',
        baseGoldValue: 40,
        durabilityMax: 100
      }
    });

    this.recipes.set('rcp_magma_cuirass', {
      recipeId: 'rcp_magma_cuirass',
      recipeName: 'Forge Magma Cuirass',
      category: 'Armor',
      requiredLevel: 2,
      ingredients: [{ itemId: 'mat_magma_ore', count: 5 }, { itemId: 'mat_obsidian_plate', count: 2 }],
      goldCost: 80,
      baseSuccessRate: 0.85,
      resultItem: {
        id: 'item_forged_magma_cuirass',
        name: 'Tempered Magma Cuirass',
        slot: 'ChestArmor',
        rarity: 'Rare',
        itemLevel: 2,
        requiredLevel: 2,
        attackPower: 5,
        spellPower: 15,
        armorRating: 55,
        maxHealthBonus: 75,
        maxEnergyBonus: 20,
        critChancePct: 0,
        critMultiplierBonus: 1.0,
        movementSpeedBonusPct: 0,
        lifeStealPct: 0,
        fireResistancePct: 35,
        frostResistancePct: -10,
        shadowResistancePct: 10,
        holyResistancePct: 0,
        lightningResistancePct: 0,
        poisonResistancePct: 0,
        specialAffixDescription: 'Radiates residual heat that burns melee attackers.',
        flavorLoreText: 'Quenched in subterranean sulfur pools.',
        baseGoldValue: 180,
        durabilityMax: 160
      }
    });
  }

  private initializeDefaultRunes(): void {
    this.runes.set('rune_fire_t1', {
      runeId: 'rune_fire_t1',
      name: 'Rune of Smoldering Flame',
      tier: 1,
      statBonus: { stat: 'attackPower', value: 8, isPercentage: false },
      requiredSocketColor: 'Red'
    });
    this.runes.set('rune_frost_t1', {
      runeId: 'rune_frost_t1',
      name: 'Rune of Glacier Shard',
      tier: 1,
      statBonus: { stat: 'spellPower', value: 12, isPercentage: false },
      requiredSocketColor: 'Blue'
    });
    this.runes.set('rune_life_t1', {
      runeId: 'rune_life_t1',
      name: 'Rune of Vitality Bloom',
      tier: 1,
      statBonus: { stat: 'maxHealthBonus', value: 35, isPercentage: false },
      requiredSocketColor: 'Green'
    });
  }
}
