import test from 'node:test';
import assert from 'node:assert';
import { Vector2D } from '../core/Math2D';
import { AABB } from '../physics/BoundingBox';
import { SpatialHash } from '../physics/SpatialHash';

test('AABB intersection logic', () => {
  const b1 = new AABB(new Vector2D(0, 0), new Vector2D(10, 10));
  const b2 = new AABB(new Vector2D(5, 5), new Vector2D(15, 15));
  const b3 = new AABB(new Vector2D(20, 20), new Vector2D(30, 30));

  assert.strictEqual(b1.intersects(b2), true);
  assert.strictEqual(b1.intersects(b3), false);
});

test('SpatialHash indexing and query', () => {
  const hash = new SpatialHash(32);
  const b1 = new AABB(new Vector2D(10, 10), new Vector2D(20, 20));
  const b2 = new AABB(new Vector2D(100, 100), new Vector2D(110, 110));

  hash.insert(1, b1);
  hash.insert(2, b2);

  const q1 = hash.query(b1);
  assert.strictEqual(q1.has(1), true);
  assert.strictEqual(q1.has(2), false);
});
