export interface QuestNode {
  id: string;
  title: string;
  prerequisites: string[]; // required quest IDs
  requiredLevel: number;
  worldFlagsRequired: string[];
  rewardXP: number;
  rewardGold: number;
}

export class QuestDependencyGraph {
  private nodes: Map<string, QuestNode> = new Map();
  private completedQuests: Set<string> = new Set();
  private activeWorldFlags: Set<string> = new Set();

  addQuest(quest: QuestNode): void {
    this.nodes.set(quest.id, quest);
  }

  setWorldFlag(flag: string): void {
    this.activeWorldFlags.add(flag);
  }

  completeQuest(questId: string): void {
    this.completedQuests.add(questId);
  }

  isQuestAvailable(questId: string, playerLevel: number): boolean {
    const quest = this.nodes.get(questId);
    if (!quest || this.completedQuests.has(questId)) return false;
    if (playerLevel < quest.requiredLevel) return false;

    const prereqsMet = quest.prerequisites.every(p => this.completedQuests.has(p));
    const flagsMet = quest.worldFlagsRequired.every(f => this.activeWorldFlags.has(f));

    return prereqsMet && flagsMet;
  }
}
