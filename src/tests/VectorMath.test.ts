import test from 'node:test';
import assert from 'node:assert';
import { Vector2D, Matrix3x3, MathUtils } from '../core/Math2D';

test('Vector2D addition and scaling', () => {
  const v1 = new Vector2D(3, 4);
  const v2 = new Vector2D(1, 2);
  v1.add(v2);
  assert.strictEqual(v1.x, 4);
  assert.strictEqual(v1.y, 6);

  v1.scale(2);
  assert.strictEqual(v1.x, 8);
  assert.strictEqual(v1.y, 12);
});

test('Vector2D length and normalization', () => {
  const v = new Vector2D(3, 4);
  assert.strictEqual(v.length(), 5);

  v.normalize();
  assert.strictEqual(Math.abs(v.length() - 1) < 0.0001, true);
  assert.strictEqual(Math.abs(v.x - 0.6) < 0.0001, true);
  assert.strictEqual(Math.abs(v.y - 0.8) < 0.0001, true);
});

test('Matrix3x3 translation', () => {
  const mat = new Matrix3x3();
  mat.translate(10, 20);
  const pt = new Vector2D(5, 5);
  const transformed = mat.transformVector(pt);
  assert.strictEqual(transformed.x, 15);
  assert.strictEqual(transformed.y, 25);
});
