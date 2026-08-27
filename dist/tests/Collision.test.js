"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const Math2D_1 = require("../core/Math2D");
const BoundingBox_1 = require("../physics/BoundingBox");
const SpatialHash_1 = require("../physics/SpatialHash");
(0, node_test_1.default)('AABB intersection logic', () => {
    const b1 = new BoundingBox_1.AABB(new Math2D_1.Vector2D(0, 0), new Math2D_1.Vector2D(10, 10));
    const b2 = new BoundingBox_1.AABB(new Math2D_1.Vector2D(5, 5), new Math2D_1.Vector2D(15, 15));
    const b3 = new BoundingBox_1.AABB(new Math2D_1.Vector2D(20, 20), new Math2D_1.Vector2D(30, 30));
    node_assert_1.default.strictEqual(b1.intersects(b2), true);
    node_assert_1.default.strictEqual(b1.intersects(b3), false);
});
(0, node_test_1.default)('SpatialHash indexing and query', () => {
    const hash = new SpatialHash_1.SpatialHash(32);
    const b1 = new BoundingBox_1.AABB(new Math2D_1.Vector2D(10, 10), new Math2D_1.Vector2D(20, 20));
    const b2 = new BoundingBox_1.AABB(new Math2D_1.Vector2D(100, 100), new Math2D_1.Vector2D(110, 110));
    hash.insert(1, b1);
    hash.insert(2, b2);
    const q1 = hash.query(b1);
    node_assert_1.default.strictEqual(q1.has(1), true);
    node_assert_1.default.strictEqual(q1.has(2), false);
});
//# sourceMappingURL=Collision.test.js.map