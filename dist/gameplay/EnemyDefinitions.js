"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnemyBestiary = void 0;
class EnemyBestiary {
    static bestiary = new Map([
        ['goblin_scout', { id: 'goblin_scout', name: 'Goblin Scout', maxHp: 40, damage: 8, armor: 1, speed: 120, xpReward: 25, goldReward: 5 }],
        ['skeleton_warrior', { id: 'skeleton_warrior', name: 'Skeleton Warrior', maxHp: 85, damage: 15, armor: 4, speed: 80, xpReward: 50, goldReward: 12 }],
        ['shadow_necromancer', { id: 'shadow_necromancer', name: 'Shadow Necromancer', maxHp: 180, damage: 28, armor: 6, speed: 90, xpReward: 150, goldReward: 45 }],
        ['inferno_dragon_boss', { id: 'inferno_dragon_boss', name: 'Inferno Dragon Boss', maxHp: 1200, damage: 75, armor: 20, speed: 110, xpReward: 1000, goldReward: 500 }]
    ]);
    static getEnemy(id) {
        return this.bestiary.get(id);
    }
    static getAllEnemies() {
        return Array.from(this.bestiary.values());
    }
}
exports.EnemyBestiary = EnemyBestiary;
//# sourceMappingURL=EnemyDefinitions.js.map