export interface QuestNode {
    id: string;
    title: string;
    prerequisites: string[];
    requiredLevel: number;
    worldFlagsRequired: string[];
    rewardXP: number;
    rewardGold: number;
}
export declare class QuestDependencyGraph {
    private nodes;
    private completedQuests;
    private activeWorldFlags;
    addQuest(quest: QuestNode): void;
    setWorldFlag(flag: string): void;
    completeQuest(questId: string): void;
    isQuestAvailable(questId: string, playerLevel: number): boolean;
}
