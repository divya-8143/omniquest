/**
 * Omniquest: Realm of Shadows - Faction Bounties, Treaties & Mercenary Contracts
 * 12 Factions with dynamic assassination contracts, diplomatic alliances, and reward caches.
 */

export interface FactionBountyContract {
  contractId: string;
  issuingFactionId: string;
  targetMonsterId: string;
  targetCount: number;
  currentKills: number;
  rewardGold: number;
  rewardReputation: number;
  rewardItemIds: string[];
  expirationTimestamp: number;
  isCompleted: boolean;
}

export class FactionBountiesAndDiplomacy {
  private static instance: FactionBountiesAndDiplomacy;
  private contracts: Map<string, FactionBountyContract> = new Map();

  private constructor() {
    this.generateBountyBoard();
  }

  public static getInstance(): FactionBountiesAndDiplomacy {
    if (!FactionBountiesAndDiplomacy.instance) {
      FactionBountiesAndDiplomacy.instance = new FactionBountiesAndDiplomacy();
    }
    return FactionBountiesAndDiplomacy.instance;
  }

  public getContracts(): FactionBountyContract[] {
    return Array.from(this.contracts.values());
  }

  public recordKill(monsterId: string): void {
    this.contracts.forEach(c => {
      if (!c.isCompleted && c.targetMonsterId === monsterId) {
        c.currentKills = Math.min(c.targetCount, c.currentKills + 1);
        if (c.currentKills >= c.targetCount) {
          c.isCompleted = true;
        }
      }
    });
  }

  private generateBountyBoard(): void {
    this.contracts.set('bounty_001', {
      contractId: 'bounty_001',
      issuingFactionId: 'fac_iron_covenant',
      targetMonsterId: 'best_gob_01',
      targetCount: 10,
      currentKills: 0,
      rewardGold: 120,
      rewardReputation: 350,
      rewardItemIds: ['wpn_sword_iron_01'],
      expirationTimestamp: Date.now() + 86400000,
      isCompleted: false
    });

    this.contracts.set('bounty_002', {
      contractId: 'bounty_002',
      issuingFactionId: 'fac_silver_order',
      targetMonsterId: 'best_knight_03',
      targetCount: 5,
      currentKills: 0,
      rewardGold: 300,
      rewardReputation: 600,
      rewardItemIds: ['arm_plate_titan_01'],
      expirationTimestamp: Date.now() + 86400000,
      isCompleted: false
    });

    this.contracts.set('bounty_003', {
      contractId: 'bounty_003',
      issuingFactionId: 'fac_silver_order',
      targetMonsterId: 'best_boss_overlord_07',
      targetCount: 1,
      currentKills: 0,
      rewardGold: 2000,
      rewardReputation: 2500,
      rewardItemIds: ['wpn_greatsword_demonbane_04'],
      expirationTimestamp: Date.now() + 86400000,
      isCompleted: false
    });
  }
}
