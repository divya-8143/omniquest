"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EconomyEngine = void 0;
class EconomyEngine {
    static getRequiredXP(level) {
        return Math.floor(100 * Math.pow(level, 1.5));
    }
    static getGoldDrop(enemyLevel) {
        const base = enemyLevel * 10;
        const variance = Math.random() * 0.4 + 0.8; // 80% to 120%
        return Math.floor(base * variance);
    }
    static getUpgradeCost(currentTier) {
        return Math.floor(50 * Math.pow(currentTier, 2));
    }
}
exports.EconomyEngine = EconomyEngine;
//# sourceMappingURL=EconomyEngine.js.map