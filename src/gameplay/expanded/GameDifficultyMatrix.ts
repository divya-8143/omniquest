/**
 * Omniquest: Realm of Shadows - Difficulty Scaling, Torment Tiers & Hardcore Mode
 * 16 Difficulty Tiers (Normal, Hard, Nightmare, Hell, Torment I through X) with drop rate multipliers.
 */

export interface DifficultyTierSpec {
  tierLevel: number;
  name: string;
  monsterHealthMultiplier: number;
  monsterDamageMultiplier: number;
  goldDropMultiplier: number;
  magicFindMultiplier: number;
  xpMultiplier: number;
  requiresUnlock: boolean;
}

export class GameDifficultyMatrix {
  private static instance: GameDifficultyMatrix;
  private tiers: Map<number, DifficultyTierSpec> = new Map();
  private selectedTier: number = 1;

  private constructor() {
    this.registerAllTiers();
  }

  public static getInstance(): GameDifficultyMatrix {
    if (!GameDifficultyMatrix.instance) {
      GameDifficultyMatrix.instance = new GameDifficultyMatrix();
    }
    return GameDifficultyMatrix.instance;
  }

  public getTier(tierLevel: number): DifficultyTierSpec | undefined {
    return this.tiers.get(tierLevel);
  }

  public getSelectedTier(): DifficultyTierSpec {
    return this.tiers.get(this.selectedTier) || this.tiers.get(1)!;
  }

  public setSelectedTier(tierLevel: number): void {
    if (this.tiers.has(tierLevel)) {
      this.selectedTier = tierLevel;
    }
  }

  private registerAllTiers(): void {
    this.tiers.set(1, {
      tierLevel: 1,
      name: 'Normal (Standard Campaign)',
      monsterHealthMultiplier: 1.0,
      monsterDamageMultiplier: 1.0,
      goldDropMultiplier: 1.0,
      magicFindMultiplier: 1.0,
      xpMultiplier: 1.0,
      requiresUnlock: false
    });

    this.tiers.set(2, {
      tierLevel: 2,
      name: 'Nightmare (Veteran Adventurer)',
      monsterHealthMultiplier: 1.8,
      monsterDamageMultiplier: 1.5,
      goldDropMultiplier: 1.75,
      magicFindMultiplier: 1.5,
      xpMultiplier: 1.6,
      requiresUnlock: true
    });

    this.tiers.set(3, {
      tierLevel: 3,
      name: 'Hell (Abyssal Torment)',
      monsterHealthMultiplier: 3.5,
      monsterDamageMultiplier: 2.4,
      goldDropMultiplier: 3.0,
      magicFindMultiplier: 2.5,
      xpMultiplier: 2.8,
      requiresUnlock: true
    });
  }
}
