/**
 * Omniquest: Realm of Shadows - Quest Graph & Event Progression Engine
 * Directed Acyclic Graph (DAG) for campaign objectives, dynamic sidequests, reward matrices, and narrative triggers.
 */

export interface QuestObjectiveSpec {
  id: string;
  type: 'KillMonster' | 'CollectItem' | 'ReachDungeonLevel' | 'DefeatBoss' | 'SurviveTimeSeconds';
  targetEntityId: string;
  targetCount: number;
  currentCount: number;
  description: string;
  isCompleted: boolean;
}

export interface QuestNode {
  questId: string;
  title: string;
  actLevel: 1 | 2 | 3;
  prerequisiteQuestIds: string[];
  objectives: QuestObjectiveSpec[];
  rewardGold: number;
  rewardXp: number;
  rewardItemIds: string[];
  isStarted: boolean;
  isCompleted: boolean;
  isTurnedIn: boolean;
  dialogueOnStart: string;
  dialogueOnComplete: string;
}

export class DungeonQuestGraphEngine {
  private static instance: DungeonQuestGraphEngine;
  private quests: Map<string, QuestNode> = new Map();

  private constructor() {
    this.registerCampaignQuests();
  }

  public static getInstance(): DungeonQuestGraphEngine {
    if (!DungeonQuestGraphEngine.instance) {
      DungeonQuestGraphEngine.instance = new DungeonQuestGraphEngine();
    }
    return DungeonQuestGraphEngine.instance;
  }

  public getQuest(questId: string): QuestNode | undefined {
    return this.quests.get(questId);
  }

  public getActiveQuests(): QuestNode[] {
    return Array.from(this.quests.values()).filter(q => q.isStarted && !q.isTurnedIn);
  }

  public startQuest(questId: string): boolean {
    const quest = this.quests.get(questId);
    if (!quest || quest.isStarted) return false;

    // Check prerequisites
    for (const prereqId of quest.prerequisiteQuestIds) {
      const prereq = this.quests.get(prereqId);
      if (!prereq || !prereq.isCompleted) return false;
    }

    quest.isStarted = true;
    return true;
  }

  public recordObjectiveProgress(
    type: 'KillMonster' | 'CollectItem' | 'ReachDungeonLevel' | 'DefeatBoss' | 'SurviveTimeSeconds',
    targetId: string,
    amount: number = 1
  ): void {
    this.getActiveQuests().forEach(quest => {
      quest.objectives.forEach(obj => {
        if (!obj.isCompleted && obj.type === type && (obj.targetEntityId === 'any' || obj.targetEntityId === targetId)) {
          obj.currentCount = Math.min(obj.targetCount, obj.currentCount + amount);
          if (obj.currentCount >= obj.targetCount) {
            obj.isCompleted = true;
          }
        }
      });

      // Check if all objectives completed
      const allDone = quest.objectives.every(o => o.isCompleted);
      if (allDone && !quest.isCompleted) {
        quest.isCompleted = true;
        console.log(`[Quest Completed] 📜 ${quest.title}! Return for your rewards.`);
      }
    });
  }

  private registerCampaignQuests(): void {
    this.quests.set('quest_act1_main', {
      questId: 'quest_act1_main',
      title: 'Scourge of the Crypts',
      actLevel: 1,
      prerequisiteQuestIds: [],
      objectives: [
        { id: 'obj_kill_goblins', type: 'KillMonster', targetEntityId: 'gob_scout_01', targetCount: 4, currentCount: 0, description: 'Slay 4 Goblin Scouts in Level 1', isCompleted: false },
        { id: 'obj_reach_level2', type: 'ReachDungeonLevel', targetEntityId: '2', targetCount: 1, currentCount: 0, description: 'Accumulate 150 Score and advance to Level 2', isCompleted: false }
      ],
      rewardGold: 100,
      rewardXp: 150,
      rewardItemIds: ['base_sword_01'],
      isStarted: true,
      isCompleted: false,
      isTurnedIn: false,
      dialogueOnStart: 'Venture into the Crypt of Shadows and eradicate the goblin infestation.',
      dialogueOnComplete: 'The upper catacombs are secured. Prepare for the molten heat of the Inferno Caverns below.'
    });

    this.quests.set('quest_act2_main', {
      questId: 'quest_act2_main',
      title: 'Flames of the Inferno Caverns',
      actLevel: 2,
      prerequisiteQuestIds: ['quest_act1_main'],
      objectives: [
        { id: 'obj_kill_knights', type: 'KillMonster', targetEntityId: 'skel_knight_04', targetCount: 3, currentCount: 0, description: 'Slay 3 Skeleton Knight Commanders in Level 2', isCompleted: false },
        { id: 'obj_reach_level3', type: 'ReachDungeonLevel', targetEntityId: '3', targetCount: 1, currentCount: 0, description: 'Accumulate 350 Score and enter Level 3', isCompleted: false }
      ],
      rewardGold: 250,
      rewardXp: 350,
      rewardItemIds: ['base_chest_01'],
      isStarted: false,
      isCompleted: false,
      isTurnedIn: false,
      dialogueOnStart: 'Descend into the Inferno Caverns and vanquish the demonic vanguard.',
      dialogueOnComplete: 'The infernal gate is shattered. The final throne room of the Abyssal Overlord lies ahead.'
    });

    this.quests.set('quest_act3_main', {
      questId: 'quest_act3_main',
      title: 'The Abyssal Reckoning (Final Encounter)',
      actLevel: 3,
      prerequisiteQuestIds: ['quest_act2_main'],
      objectives: [
        { id: 'obj_kill_boss', type: 'DefeatBoss', targetEntityId: 'final_boss_overlord_08', targetCount: 1, currentCount: 0, description: 'Defeat the 👑 Abyssal Demon Overlord on Level 3', isCompleted: false }
      ],
      rewardGold: 1000,
      rewardXp: 2000,
      rewardItemIds: ['base_sword_02'],
      isStarted: false,
      isCompleted: false,
      isTurnedIn: false,
      dialogueOnStart: 'Enter the Abyssal Throne and destroy the Demon Overlord to liberate Omnis!',
      dialogueOnComplete: 'Victory! The Demon Overlord has fallen and the Realm of Shadows is liberated forever!'
    });
  }
}
