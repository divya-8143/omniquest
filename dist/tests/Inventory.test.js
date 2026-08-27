"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const InventoryComponent_1 = require("../ecs/components/InventoryComponent");
(0, node_test_1.default)('InventoryComponent item addition and stacking', () => {
    const inv = new InventoryComponent_1.InventoryComponent();
    const sword = { id: 'iron_sword', name: 'Iron Sword', type: 'weapon', value: 50, quantity: 1 };
    const potion = { id: 'health_potion', name: 'Health Potion', type: 'potion', value: 10, quantity: 2 };
    node_assert_1.default.strictEqual(inv.addItem(sword), true);
    node_assert_1.default.strictEqual(inv.addItem(potion), true);
    node_assert_1.default.strictEqual(inv.items.length, 2);
    // Stack potion
    inv.addItem({ id: 'health_potion', name: 'Health Potion', type: 'potion', value: 10, quantity: 3 });
    node_assert_1.default.strictEqual(inv.items.length, 2);
    node_assert_1.default.strictEqual(inv.items[1].quantity, 5);
});
//# sourceMappingURL=Inventory.test.js.map