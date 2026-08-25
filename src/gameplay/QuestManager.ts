export interface Quest {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  requiredKillCount: number;
  currentKillCount: number;
  xpReward: number;
  goldReward: number;
}

export class QuestManager {
  private quests: Map<string, Quest> = new Map();

  constructor() {
    this.addQuest({
      id: 'quest_goblin_slayer',
      title: 'Goblin Threat',
      description: 'Defeat 5 Goblin Scouts in the outer catacombs',
      completed: false,
      requiredKillCount: 5,
      currentKillCount: 0,
      xpReward: 200,
      goldReward: 50
    });
  }

  addQuest(quest: Quest): void {
    this.quests.set(quest.id, quest);
  }

  onKillEnemy(enemyId: string): void {
    for (const quest of this.quests.values()) {
      if (!quest.completed) {
        quest.currentKillCount++;
        if (quest.currentKillCount >= quest.requiredKillCount) {
          quest.completed = true;
          console.log(`Quest Completed: ${quest.title}`);
        }
      }
    }
  }

  getActiveQuests(): Quest[] {
    return Array.from(this.quests.values()).filter(q => !q.completed);
  }
}
