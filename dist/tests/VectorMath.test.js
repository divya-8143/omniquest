"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const Math2D_1 = require("../core/Math2D");
(0, node_test_1.default)('Vector2D addition and scaling', () => {
    const v1 = new Math2D_1.Vector2D(3, 4);
    const v2 = new Math2D_1.Vector2D(1, 2);
    v1.add(v2);
    node_assert_1.default.strictEqual(v1.x, 4);
    node_assert_1.default.strictEqual(v1.y, 6);
    v1.scale(2);
    node_assert_1.default.strictEqual(v1.x, 8);
    node_assert_1.default.strictEqual(v1.y, 12);
});
(0, node_test_1.default)('Vector2D length and normalization', () => {
    const v = new Math2D_1.Vector2D(3, 4);
    node_assert_1.default.strictEqual(v.length(), 5);
    v.normalize();
    node_assert_1.default.strictEqual(Math.abs(v.length() - 1) < 0.0001, true);
    node_assert_1.default.strictEqual(Math.abs(v.x - 0.6) < 0.0001, true);
    node_assert_1.default.strictEqual(Math.abs(v.y - 0.8) < 0.0001, true);
});
(0, node_test_1.default)('Matrix3x3 translation', () => {
    const mat = new Math2D_1.Matrix3x3();
    mat.translate(10, 20);
    const pt = new Math2D_1.Vector2D(5, 5);
    const transformed = mat.transformVector(pt);
    node_assert_1.default.strictEqual(transformed.x, 15);
    node_assert_1.default.strictEqual(transformed.y, 25);
});
//# sourceMappingURL=VectorMath.test.js.map