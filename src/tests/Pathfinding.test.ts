import test from 'node:test';
import assert from 'node:assert';
import { PathfindingAStar } from '../procgen/PathfindingAStar';

test('AStar pathfinding finds shortest path', () => {
  const grid = [
    [0, 0, 0, 0],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 0, 0, 0]
  ];

  const path = PathfindingAStar.findPath(grid, { x: 0, y: 0 }, { x: 3, y: 4 });
  assert.strictEqual(path.length > 0, true);
  assert.strictEqual(path[0].x, 0);
  assert.strictEqual(path[0].y, 0);
  assert.strictEqual(path[path.length - 1].x, 3);
  assert.strictEqual(path[path.length - 1].y, 4);
});
