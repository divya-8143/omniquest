/**
 * Omniquest: Realm of Shadows - Leaderboard, High Scores & Speedrun Analytics Matrix
 * Ranks dungeon speedruns, score multipliers, difficulty handicaps, and seasonal ladder placements.
 */

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  heroClass: 'Warrior' | 'Mage' | 'Rogue';
  clearTimeSeconds: number;
  totalScore: number;
  enemiesDefeated: number;
  deathCount: number;
  difficultyMode: 'Normal' | 'Hardcore' | 'MythicNightmare';
  completionTimestamp: number;
  checksumDigest: string;
}

export class LeaderboardMatrixEngine {
  private static instance: LeaderboardMatrixEngine;
  private entries: LeaderboardEntry[] = [];

  private constructor() {
    this.populateInitialLeaderboard();
  }

  public static getInstance(): LeaderboardMatrixEngine {
    if (!LeaderboardMatrixEngine.instance) {
      LeaderboardMatrixEngine.instance = new LeaderboardMatrixEngine();
    }
    return LeaderboardMatrixEngine.instance;
  }

  public getTopEntries(limit: number = 20): LeaderboardEntry[] {
    return this.entries
      .slice()
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, limit)
      .map((entry, idx) => ({ ...entry, rank: idx + 1 }));
  }

  public submitRun(
    playerName: string,
    heroClass: 'Warrior' | 'Mage' | 'Rogue',
    clearTimeSeconds: number,
    totalScore: number,
    enemiesDefeated: number,
    deathCount: number
  ): LeaderboardEntry {
    const entry: LeaderboardEntry = {
      rank: 0,
      playerName,
      heroClass,
      clearTimeSeconds,
      totalScore,
      enemiesDefeated,
      deathCount,
      difficultyMode: 'Normal',
      completionTimestamp: Date.now(),
      checksumDigest: 'run_' + Math.random().toString(36).substr(2, 9)
    };

    this.entries.push(entry);
    return entry;
  }

  private populateInitialLeaderboard(): void {
    this.entries.push(
      { rank: 1, playerName: 'ShadowSlayer99', heroClass: 'Rogue', clearTimeSeconds: 142, totalScore: 1850, enemiesDefeated: 28, deathCount: 0, difficultyMode: 'Normal', completionTimestamp: Date.now() - 86400000, checksumDigest: 'chk_001' },
      { rank: 2, playerName: 'ValiantThorne', heroClass: 'Warrior', clearTimeSeconds: 198, totalScore: 1620, enemiesDefeated: 32, deathCount: 0, difficultyMode: 'Normal', completionTimestamp: Date.now() - 172800000, checksumDigest: 'chk_002' },
      { rank: 3, playerName: 'ArcaneArchon', heroClass: 'Mage', clearTimeSeconds: 220, totalScore: 1540, enemiesDefeated: 35, deathCount: 1, difficultyMode: 'Normal', completionTimestamp: Date.now() - 259200000, checksumDigest: 'chk_003' }
    );
  }
}
