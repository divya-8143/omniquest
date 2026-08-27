"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestDependencyGraph = void 0;
class QuestDependencyGraph {
    nodes = new Map();
    completedQuests = new Set();
    activeWorldFlags = new Set();
    addQuest(quest) {
        this.nodes.set(quest.id, quest);
    }
    setWorldFlag(flag) {
        this.activeWorldFlags.add(flag);
    }
    completeQuest(questId) {
        this.completedQuests.add(questId);
    }
    isQuestAvailable(questId, playerLevel) {
        const quest = this.nodes.get(questId);
        if (!quest || this.completedQuests.has(questId))
            return false;
        if (playerLevel < quest.requiredLevel)
            return false;
        const prereqsMet = quest.prerequisites.every(p => this.completedQuests.has(p));
        const flagsMet = quest.worldFlagsRequired.every(f => this.activeWorldFlags.has(f));
        return prereqsMet && flagsMet;
    }
}
exports.QuestDependencyGraph = QuestDependencyGraph;
//# sourceMappingURL=QuestDependencyGraph.js.map