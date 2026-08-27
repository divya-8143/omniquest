"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const PathfindingAStar_1 = require("../procgen/PathfindingAStar");
(0, node_test_1.default)('AStar pathfinding finds shortest path', () => {
    const grid = [
        [0, 0, 0, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0],
        [0, 1, 1, 1],
        [0, 0, 0, 0]
    ];
    const path = PathfindingAStar_1.PathfindingAStar.findPath(grid, { x: 0, y: 0 }, { x: 3, y: 4 });
    node_assert_1.default.strictEqual(path.length > 0, true);
    node_assert_1.default.strictEqual(path[0].x, 0);
    node_assert_1.default.strictEqual(path[0].y, 0);
    node_assert_1.default.strictEqual(path[path.length - 1].x, 3);
    node_assert_1.default.strictEqual(path[path.length - 1].y, 4);
});
//# sourceMappingURL=Pathfinding.test.js.map