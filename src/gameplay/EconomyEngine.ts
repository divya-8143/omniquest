export class EconomyEngine {
  static getRequiredXP(level: number): number {
    return Math.floor(100 * Math.pow(level, 1.5));
  }

  static getGoldDrop(enemyLevel: number): number {
    const base = enemyLevel * 10;
    const variance = Math.random() * 0.4 + 0.8; // 80% to 120%
    return Math.floor(base * variance);
  }

  static getUpgradeCost(currentTier: number): number {
    return Math.floor(50 * Math.pow(currentTier, 2));
  }
}
