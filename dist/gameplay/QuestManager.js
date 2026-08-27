"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestManager = void 0;
class QuestManager {
    quests = new Map();
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
    addQuest(quest) {
        this.quests.set(quest.id, quest);
    }
    onKillEnemy(enemyId) {
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
    getActiveQuests() {
        return Array.from(this.quests.values()).filter(q => !q.completed);
    }
}
exports.QuestManager = QuestManager;
//# sourceMappingURL=QuestManager.js.map