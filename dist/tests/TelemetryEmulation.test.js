"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const CombatCalculator_1 = require("../gameplay/CombatCalculator");
const StateEngine_1 = require("../core/StateEngine");
(0, node_test_1.default)('Automated Telemetry Emulation: 1000 simulated combat cycles', () => {
    const attacker = { attack: 25, defense: 10, critChance: 0.2, critMultiplier: 1.5, fireResist: 5, frostResist: 5 };
    const defender = { attack: 15, defense: 8, critChance: 0.1, critMultiplier: 1.2, fireResist: 2, frostResist: 2 };
    const stateEngine = StateEngine_1.GlobalStateEngine.getInstance();
    stateEngine.setState('InCombat');
    let totalHits = 0;
    let totalCrits = 0;
    for (let cycle = 0; cycle < 1000; cycle++) {
        const res = CombatCalculator_1.CombatCalculator.calculateDamage(attacker, defender);
        totalHits++;
        if (res.isCrit)
            totalCrits++;
        node_assert_1.default.strictEqual(res.finalDamage > 0, true);
    }
    stateEngine.setState('Exploring');
    node_assert_1.default.strictEqual(totalHits, 1000);
    node_assert_1.default.strictEqual(totalCrits >= 0, true);
});
//# sourceMappingURL=TelemetryEmulation.test.js.map