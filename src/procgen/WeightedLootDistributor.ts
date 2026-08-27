import { BiomeType } from './BiomeThemingDirector';
import { COMPREHENSIVE_ITEM_CATALOG_DATA, DetailedCatalogItem } from '../gameplay/expanded/ComprehensiveItemCatalogData';

export interface LootSpawnCandidate {
  item: DetailedCatalogItem;
  dropProbability: number;
  minDepth: number;
}

export class WeightedLootDistributor {
  private static instance: WeightedLootDistributor;

  public static getInstance(): WeightedLootDistributor {
    if (!WeightedLootDistributor.instance) {
      WeightedLootDistributor.instance = new WeightedLootDistributor();
    }
    return WeightedLootDistributor.instance;
  }

  public rollChestLoot(
    biome: BiomeType,
    dungeonDepth: number,
    isRareChest: boolean = false
  ): DetailedCatalogItem[] {
    const pool = COMPREHENSIVE_ITEM_CATALOG_DATA.filter(item => {
      if (item.requiredLevel > dungeonDepth + 1) return false;
      return true;
    });

    if (pool.length === 0) return [];

    const dropCount = isRareChest ? Math.floor(Math.random() * 2) + 2 : 1;
    const results: DetailedCatalogItem[] = [];

    for (let i = 0; i < dropCount; i++) {
      // Weight selection towards higher rarity if rare chest or deep floor
      const selected = pool[Math.floor(Math.random() * pool.length)];
      results.push(selected);
    }

    return results;
  }

  public getGoldDropAmount(dungeonDepth: number, isBossRoom: boolean = false): number {
    const base = 25 * dungeonDepth;
    const variance = Math.floor(Math.random() * 20);
    const multiplier = isBossRoom ? 5 : 1;
    return (base + variance) * multiplier;
  }
}
