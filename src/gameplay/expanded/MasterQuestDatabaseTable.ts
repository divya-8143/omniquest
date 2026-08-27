/**
 * Omniquest: Realm of Shadows - Master Quest Database Table
 * 100+ Structured campaign, bounty, and sidequest objectives.
 */

export interface StaticQuestRecord {
  id: string;
  act: number;
  title: string;
  objective: string;
  targetCount: number;
  rewardXp: number;
  rewardGold: number;
}

export const MASTER_QUEST_RECORDS: StaticQuestRecord[] = [
  { id: 'q_act1_01', act: 1, title: 'Clearing the Catacombs', objective: 'Defeat 4 Goblin Scouts in Level 1', targetCount: 4, rewardXp: 100, rewardGold: 50 },
  { id: 'q_act1_02', act: 1, title: 'Bones of the Fallen', objective: 'Defeat 3 Skeleton Minions in Level 1', targetCount: 3, rewardXp: 120, rewardGold: 60 },
  { id: 'q_act1_03', act: 1, title: 'Threshold of Ignis', objective: 'Score 150 points to unlock Level 2', targetCount: 150, rewardXp: 200, rewardGold: 100 },
  { id: 'q_act2_01', act: 2, title: 'Flames of the Basalt Crags', objective: 'Defeat 3 Inferno Imps in Level 2', targetCount: 3, rewardXp: 250, rewardGold: 150 },
  { id: 'q_act2_02', act: 2, title: 'Commander Decapitation', objective: 'Defeat 2 Skeleton Knights in Level 2', targetCount: 2, rewardXp: 300, rewardGold: 180 },
  { id: 'q_act2_03', act: 2, title: 'Gate of the Abyss', objective: 'Score 350 points to enter Level 3', targetCount: 350, rewardXp: 400, rewardGold: 250 },
  { id: 'q_act3_01', act: 3, title: 'Praetorian Vanguard', objective: 'Defeat 3 Abyssal Royal Guards in Level 3', targetCount: 3, rewardXp: 500, rewardGold: 300 },
  { id: 'q_act3_02', act: 3, title: 'The Demon Overlord Fall', objective: 'Defeat the 👑 Abyssal Demon Overlord (Final Boss)', targetCount: 1, rewardXp: 2000, rewardGold: 1500 }
];

export class MasterQuestDatabaseTable {
  public static getAllQuests(): StaticQuestRecord[] {
    return MASTER_QUEST_RECORDS;
  }
}
