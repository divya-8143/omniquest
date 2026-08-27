/**
 * Omniquest: Realm of Shadows - Procedural Loot Drop Formulas & Item Rolling Matrices
 * Weighted drop tables, magic find scaling, boss loot guarantees, and affix permutation generators.
 */

import { MasterItemDef, LootTableMasterDatabase } from './LootTableMasterDatabase';

export class ProceduralLootDropAlgorithms {
  public static calculateLootDrops(
    monsterTier: 1 | 2 | 3,
    isBoss: boolean,
    playerMagicFindPct: number
  ): MasterItemDef[] {
    const db = LootTableMasterDatabase.getInstance();
    const candidateItems = db.getItemsByLevelRange(monsterTier, monsterTier + (isBoss ? 2 : 1));
    const drops: MasterItemDef[] = [];

    const dropCount = isBoss ? Math.floor(Math.random() * 3) + 3 : Math.random() < 0.4 ? 1 : 0;

    for (let d = 0; d < dropCount && candidateItems.length > 0; d++) {
      const rolledRarity = this.rollRarity(playerMagicFindPct, isBoss);
      const matchingRarity = candidateItems.filter(i => i.rarity === rolledRarity);
      const pool = matchingRarity.length > 0 ? matchingRarity : candidateItems;

      const chosen = pool[Math.floor(Math.random() * pool.length)];
      drops.push(chosen);
    }

    return drops;
  }

  private static rollRarity(mf: number, isBoss: boolean): string {
    const roll = Math.random() * 100 - (mf * 0.15) - (isBoss ? 25 : 0);
    if (roll < 2) return 'Mythic';
    if (roll < 8) return 'Legendary';
    if (roll < 20) return 'Epic';
    if (roll < 50) return 'Rare';
    if (roll < 80) return 'Uncommon';
    return 'Common';
  }
}
