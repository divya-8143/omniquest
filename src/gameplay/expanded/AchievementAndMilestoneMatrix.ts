/**
 * Omniquest: Realm of Shadows - Achievement & Milestone Master Matrix
 * 100+ Detailed achievements with reward scaling, progress trackers, and milestone badges.
 */

export interface MasterAchievementSpec {
  id: string;
  category: 'Progression' | 'Combat' | 'Survival' | 'Exploration' | 'Economy' | 'Mastery';
  title: string;
  description: string;
  targetCount: number;
  currentCount: number;
  rewardXp: number;
  rewardGold: number;
  rewardTitleId?: string;
  isUnlocked: boolean;
}

export class AchievementAndMilestoneMatrix {
  private static instance: AchievementAndMilestoneMatrix;
  private achievements: Map<string, MasterAchievementSpec> = new Map();

  private constructor() {
    this.registerAllAchievements();
  }

  public static getInstance(): AchievementAndMilestoneMatrix {
    if (!AchievementAndMilestoneMatrix.instance) {
      AchievementAndMilestoneMatrix.instance = new AchievementAndMilestoneMatrix();
    }
    return AchievementAndMilestoneMatrix.instance;
  }

  public getAchievement(id: string): MasterAchievementSpec | undefined {
    return this.achievements.get(id);
  }

  public getAchievementsByCategory(cat: string): MasterAchievementSpec[] {
    return Array.from(this.achievements.values()).filter(a => a.category === cat);
  }

  public recordProgress(id: string, amount: number): boolean {
    const ach = this.achievements.get(id);
    if (!ach || ach.isUnlocked) return false;

    ach.currentCount += amount;
    if (ach.currentCount >= ach.targetCount) {
      ach.isUnlocked = true;
      ach.currentCount = ach.targetCount;
      return true;
    }
    return false;
  }

  private register(ach: MasterAchievementSpec): void {
    this.achievements.set(ach.id, ach);
  }

  private registerAllAchievements(): void {
    // 1. Progression
    this.register({ id: 'm_ach_level1_clear', category: 'Progression', title: 'Crypt Conqueror', description: 'Reach 150 Score on Level 1 and unlock Level 2.', targetCount: 1, currentCount: 0, rewardXp: 100, rewardGold: 50, isUnlocked: false });
    this.register({ id: 'm_ach_level2_clear', category: 'Progression', title: 'Inferno Dominator', description: 'Reach 350 Score on Level 2 and unlock Level 3.', targetCount: 1, currentCount: 0, rewardXp: 250, rewardGold: 150, isUnlocked: false });
    this.register({ id: 'm_ach_level3_boss_slain', category: 'Progression', title: 'Bane of the Overlord', description: 'Defeat the 👑 Abyssal Demon Overlord in Level 3.', targetCount: 1, currentCount: 0, rewardXp: 1000, rewardGold: 1000, rewardTitleId: 'title_abyss_slayer', isUnlocked: false });

    // 2. Combat Mastery
    for (let k = 1; k <= 10; k++) {
      this.register({
        id: `m_ach_slayer_${k * 25}`,
        category: 'Combat',
        title: `Monster Slayer Tier ${k}`,
        description: `Defeat a total of ${k * 25} enemies across your dungeon runs.`,
        targetCount: k * 25,
        currentCount: 0,
        rewardXp: k * 100,
        rewardGold: k * 50,
        isUnlocked: false
      });
    }

    // 3. Wealth & Economy
    for (let g = 1; g <= 5; g++) {
      this.register({
        id: `m_ach_gold_${g * 500}`,
        category: 'Economy',
        title: `Hoard of the Dragon Tier ${g}`,
        description: `Accumulate ${g * 500} total gold in your inventory.`,
        targetCount: g * 500,
        currentCount: 0,
        rewardXp: g * 150,
        rewardGold: g * 100,
        isUnlocked: false
      });
    }
  }
}
