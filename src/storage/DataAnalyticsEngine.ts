/**
 * Omniquest: Realm of Shadows - Telemetry & Game Analytics Engine
 * Tracks DPS counters, combat logs, session timelines, achievement validators, and run telemetry.
 */

export interface CombatEventLog {
  timestamp: number;
  sourceEntityId: string;
  targetEntityId: string;
  abilityUsed: string;
  rawDamage: number;
  mitigatedDamage: number;
  isCritical: boolean;
  elementalSchool: string;
  overkillAmount: number;
}

export interface AchievementCriteria {
  id: string;
  title: string;
  description: string;
  category: 'Combat' | 'Exploration' | 'Progression' | 'Wealth' | 'Mastery';
  targetCount: number;
  currentCount: number;
  isUnlocked: boolean;
  rewardXp: number;
  rewardGold: number;
}

export interface PlayerSessionMetrics {
  sessionId: string;
  startTime: number;
  endTime?: number;
  totalDamageDealt: number;
  totalDamageTaken: number;
  totalHealingDone: number;
  monstersSlain: Record<string, number>;
  levelsCompleted: number[];
  bossesDefeated: string[];
  elixirsConsumed: number;
  goldEarned: number;
  peakDps: number;
}

export class DataAnalyticsEngine {
  private static instance: DataAnalyticsEngine;
  private combatLogs: CombatEventLog[] = [];
  private achievements: Map<string, AchievementCriteria> = new Map();
  private currentSession: PlayerSessionMetrics;
  private recentDamageWindow: Array<{ timestamp: number; damage: number }> = [];

  private constructor() {
    this.currentSession = {
      sessionId: 'session_' + Math.random().toString(36).substr(2, 9),
      startTime: Date.now(),
      totalDamageDealt: 0,
      totalDamageTaken: 0,
      totalHealingDone: 0,
      monstersSlain: {},
      levelsCompleted: [],
      bossesDefeated: [],
      elixirsConsumed: 0,
      goldEarned: 0,
      peakDps: 0
    };
    this.registerAchievements();
  }

  public static getInstance(): DataAnalyticsEngine {
    if (!DataAnalyticsEngine.instance) {
      DataAnalyticsEngine.instance = new DataAnalyticsEngine();
    }
    return DataAnalyticsEngine.instance;
  }

  public recordCombatEvent(event: Omit<CombatEventLog, 'timestamp'>): void {
    const fullLog: CombatEventLog = {
      ...event,
      timestamp: Date.now()
    };
    this.combatLogs.push(fullLog);
    this.currentSession.totalDamageDealt += event.rawDamage;

    // Track DPS rolling window
    const now = Date.now();
    this.recentDamageWindow.push({ timestamp: now, damage: event.rawDamage });
    this.recentDamageWindow = this.recentDamageWindow.filter(d => now - d.timestamp <= 5000);

    const rollingDamage = this.recentDamageWindow.reduce((sum, d) => sum + d.damage, 0);
    const currentDps = Math.round(rollingDamage / 5.0);
    if (currentDps > this.currentSession.peakDps) {
      this.currentSession.peakDps = currentDps;
    }

    if (this.combatLogs.length > 500) {
      this.combatLogs.shift();
    }

    this.updateAchievementProgress('ach_damage_10k', event.rawDamage);
  }

  public recordMonsterKill(monsterSpeciesId: string, isBoss: boolean = false): void {
    this.currentSession.monstersSlain[monsterSpeciesId] = (this.currentSession.monstersSlain[monsterSpeciesId] || 0) + 1;
    this.updateAchievementProgress('ach_slayer_100', 1);

    if (isBoss) {
      this.currentSession.bossesDefeated.push(monsterSpeciesId);
      this.updateAchievementProgress('ach_boss_overlord', 1);
    }
  }

  public recordLevelCompleted(level: number): void {
    if (!this.currentSession.levelsCompleted.includes(level)) {
      this.currentSession.levelsCompleted.push(level);
    }
    if (level === 3) {
      this.updateAchievementProgress('ach_campaign_win', 1);
    }
  }

  public getSessionMetrics(): PlayerSessionMetrics {
    return { ...this.currentSession };
  }

  public getAchievements(): AchievementCriteria[] {
    return Array.from(this.achievements.values());
  }

  private updateAchievementProgress(id: string, amount: number): void {
    const ach = this.achievements.get(id);
    if (!ach || ach.isUnlocked) return;

    ach.currentCount += amount;
    if (ach.currentCount >= ach.targetCount) {
      ach.isUnlocked = true;
      ach.currentCount = ach.targetCount;
      console.log(`[Achievement Unlocked] 🏆 ${ach.title}: ${ach.description}`);
    }
  }

  private registerAchievements(): void {
    this.achievements.set('ach_first_blood', {
      id: 'ach_first_blood',
      title: 'First Blood',
      description: 'Slay your first enemy in the crypts.',
      category: 'Combat',
      targetCount: 1,
      currentCount: 0,
      isUnlocked: false,
      rewardXp: 50,
      rewardGold: 25
    });

    this.achievements.set('ach_slayer_100', {
      id: 'ach_slayer_100',
      title: 'Dungeon Scourge',
      description: 'Defeat 100 monsters throughout your campaign.',
      category: 'Combat',
      targetCount: 100,
      currentCount: 0,
      isUnlocked: false,
      rewardXp: 500,
      rewardGold: 300
    });

    this.achievements.set('ach_damage_10k', {
      id: 'ach_damage_10k',
      title: 'Avatar of Destruction',
      description: 'Inflict a total of 10,000 damage across all battles.',
      category: 'Combat',
      targetCount: 10000,
      currentCount: 0,
      isUnlocked: false,
      rewardXp: 400,
      rewardGold: 250
    });

    this.achievements.set('ach_boss_overlord', {
      id: 'ach_boss_overlord',
      title: 'Bane of the Abyss',
      description: 'Defeat the Abyssal Demon Overlord in Level 3.',
      category: 'Progression',
      targetCount: 1,
      currentCount: 0,
      isUnlocked: false,
      rewardXp: 1000,
      rewardGold: 1000
    });

    this.achievements.set('ach_campaign_win', {
      id: 'ach_campaign_win',
      title: 'Realm Liberator',
      description: 'Complete all 3 levels of the Omniquest campaign.',
      category: 'Progression',
      targetCount: 1,
      currentCount: 0,
      isUnlocked: false,
      rewardXp: 2000,
      rewardGold: 2500
    });
  }
}
