"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillTreeMatrix = void 0;
class SkillTreeMatrix {
    nodes = new Map();
    constructor() {
        this.initializeDefaultNodes();
    }
    initializeDefaultNodes() {
        const defaultSkills = [
            { id: 'warrior_slash', name: 'Heavy Slash', description: 'Increases physical damage by 15%', tier: 1, cost: 1, unlocked: false, prerequisites: [] },
            { id: 'warrior_whirlwind', name: 'Whirlwind', description: 'Spinning attack dealing AOE damage', tier: 2, cost: 2, unlocked: false, prerequisites: ['warrior_slash'] },
            { id: 'warrior_shield_wall', name: 'Shield Wall', description: 'Reduces damage taken by 40%', tier: 2, cost: 2, unlocked: false, prerequisites: ['warrior_slash'] },
            { id: 'mage:fireball', name: 'Fireball', description: 'Launches a flame orb causing burning damage', tier: 1, cost: 1, unlocked: false, prerequisites: [] },
            { id: 'mage:teleport', name: 'Arcane Blink', description: 'Instantly teleports forward', tier: 2, cost: 2, unlocked: false, prerequisites: ['mage:fireball'] }
        ];
        defaultSkills.forEach(node => this.nodes.set(node.id, node));
    }
    unlockSkill(skillId, availablePoints) {
        const node = this.nodes.get(skillId);
        if (!node || node.unlocked)
            return false;
        if (availablePoints < node.cost)
            return false;
        const prereqsMet = node.prerequisites.every(p => this.nodes.get(p)?.unlocked);
        if (!prereqsMet)
            return false;
        node.unlocked = true;
        return true;
    }
    getSkill(skillId) {
        return this.nodes.get(skillId);
    }
    getAllSkills() {
        return Array.from(this.nodes.values());
    }
}
exports.SkillTreeMatrix = SkillTreeMatrix;
//# sourceMappingURL=SkillTreeMatrix.js.map