"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const EntityManager_1 = require("../ecs/EntityManager");
const TransformComponent_1 = require("../ecs/components/TransformComponent");
const HealthComponent_1 = require("../ecs/components/HealthComponent");
const Math2D_1 = require("../core/Math2D");
(0, node_test_1.default)('EntityManager create and query entities', () => {
    const em = new EntityManager_1.EntityManager();
    const e1 = em.createEntity('Player');
    const e2 = em.createEntity('Monster');
    em.addComponent(e1.id, new TransformComponent_1.TransformComponent(new Math2D_1.Vector2D(10, 20)));
    em.addComponent(e1.id, new HealthComponent_1.HealthComponent(100, 100));
    em.addComponent(e2.id, new TransformComponent_1.TransformComponent(new Math2D_1.Vector2D(50, 50)));
    const withHealth = em.getEntitiesWithComponents(['Transform', 'Health']);
    node_assert_1.default.strictEqual(withHealth.length, 1);
    node_assert_1.default.strictEqual(withHealth[0], e1.id);
});
(0, node_test_1.default)('HealthComponent damage logic', () => {
    const health = new HealthComponent_1.HealthComponent(100, 100, 5);
    const dealt = health.takeDamage(20);
    node_assert_1.default.strictEqual(dealt, 15);
    node_assert_1.default.strictEqual(health.current, 85);
    node_assert_1.default.strictEqual(health.isDead(), false);
});
//# sourceMappingURL=ECS.test.js.map