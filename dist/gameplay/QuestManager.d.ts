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
export declare class QuestManager {
    private quests;
    constructor();
    addQuest(quest: Quest): void;
    onKillEnemy(enemyId: string): void;
    getActiveQuests(): Quest[];
}
