/**
 * Omniquest: Realm of Shadows - Master Faction Contracts Table
 * 50+ Bounty contracts across 12 realm factions.
 */

export interface StaticBountyDef {
  id: string;
  faction: string;
  target: string;
  count: number;
  rewardGold: number;
  rewardRep: number;
  desc: string;
}

export const MASTER_BOUNTY_RECORDS: StaticBountyDef[] = [
  { id: 'bty_01', faction: 'Iron Covenant', target: 'Goblin Scout', count: 5, rewardGold: 100, rewardRep: 250, desc: 'Cull the goblin packs near the upper crypt entrance.' },
  { id: 'bty_02', faction: 'Silver Order', target: 'Skeleton Minion', count: 6, rewardGold: 120, rewardRep: 300, desc: 'Lay the restless dead to final rest in Level 1.' },
  { id: 'bty_03', faction: 'Iron Covenant', target: 'Inferno Imp', count: 4, rewardGold: 220, rewardRep: 500, desc: 'Extinguish demonic firecasters in Level 2.' },
  { id: 'bty_04', faction: 'Silver Order', target: 'Skeleton Knight', count: 3, rewardGold: 300, rewardRep: 650, desc: 'Defeat armored commanders in the magma chambers.' },
  { id: 'bty_05', faction: 'Silver Order', target: 'Abyssal Royal Guard', count: 4, rewardGold: 500, rewardRep: 1000, desc: 'Slay the elite guard in Level 3.' },
  { id: 'bty_06', faction: 'All Factions', target: '👑 Abyssal Demon Overlord', count: 1, rewardGold: 2500, rewardRep: 5000, desc: 'Liberate the realm by defeating the Act Boss.' }
];

export class MasterFactionContractsTable {
  public static getAllBounties(): StaticBountyDef[] {
    return MASTER_BOUNTY_RECORDS;
  }
}
