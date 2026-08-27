/**
 * Omniquest: Realm of Shadows - Deterministic Level Seeds & Daily Challenge Engine
 * Seeded PRNG (Linear Congruential Generator / XorShift128+), daily seed rotations, and leaderboard hash locks.
 */

export class DungeonLevelSeedManager {
  private static instance: DungeonLevelSeedManager;
  private currentSeed: number = 1337;

  private constructor() {
    this.currentSeed = this.generateDailySeed();
  }

  public static getInstance(): DungeonLevelSeedManager {
    if (!DungeonLevelSeedManager.instance) {
      DungeonLevelSeedManager.instance = new DungeonLevelSeedManager();
    }
    return DungeonLevelSeedManager.instance;
  }

  public setSeed(seed: number): void {
    this.currentSeed = seed;
  }

  public getSeed(): number {
    return this.currentSeed;
  }

  public nextRandomFloat(): number {
    // Xorshift algorithm
    this.currentSeed ^= this.currentSeed << 13;
    this.currentSeed ^= this.currentSeed >> 17;
    this.currentSeed ^= this.currentSeed << 5;
    return Math.abs(this.currentSeed % 10000) / 10000.0;
  }

  public nextRandomInt(min: number, max: number): number {
    return Math.floor(this.nextRandomFloat() * (max - min + 1)) + min;
  }

  private generateDailySeed(): number {
    const today = new Date();
    const dateStr = `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}`;
    let hash = 0;
    for (let i = 0; i < dateStr.length; i++) {
      hash = (hash << 5) - hash + dateStr.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash) || 12345;
  }
}
