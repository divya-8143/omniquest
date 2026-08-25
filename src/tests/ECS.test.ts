import test from 'node:test';
import assert from 'node:assert';
import { EntityManager } from '../ecs/EntityManager';
import { TransformComponent } from '../ecs/components/TransformComponent';
import { HealthComponent } from '../ecs/components/HealthComponent';
import { Vector2D } from '../core/Math2D';

test('EntityManager create and query entities', () => {
  const em = new EntityManager();
  const e1 = em.createEntity('Player');
  const e2 = em.createEntity('Monster');

  em.addComponent(e1.id, new TransformComponent(new Vector2D(10, 20)));
  em.addComponent(e1.id, new HealthComponent(100, 100));
  em.addComponent(e2.id, new TransformComponent(new Vector2D(50, 50)));

  const withHealth = em.getEntitiesWithComponents(['Transform', 'Health']);
  assert.strictEqual(withHealth.length, 1);
  assert.strictEqual(withHealth[0], e1.id);
});

test('HealthComponent damage logic', () => {
  const health = new HealthComponent(100, 100, 5);
  const dealt = health.takeDamage(20);
  assert.strictEqual(dealt, 15);
  assert.strictEqual(health.current, 85);
  assert.strictEqual(health.isDead(), false);
});
