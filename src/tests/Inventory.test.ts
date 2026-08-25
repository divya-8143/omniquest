import test from 'node:test';
import assert from 'node:assert';
import { InventoryComponent } from '../ecs/components/InventoryComponent';

test('InventoryComponent item addition and stacking', () => {
  const inv = new InventoryComponent();
  const sword = { id: 'iron_sword', name: 'Iron Sword', type: 'weapon' as const, value: 50, quantity: 1 };
  const potion = { id: 'health_potion', name: 'Health Potion', type: 'potion' as const, value: 10, quantity: 2 };

  assert.strictEqual(inv.addItem(sword), true);
  assert.strictEqual(inv.addItem(potion), true);
  assert.strictEqual(inv.items.length, 2);

  // Stack potion
  inv.addItem({ id: 'health_potion', name: 'Health Potion', type: 'potion' as const, value: 10, quantity: 3 });
  assert.strictEqual(inv.items.length, 2);
  assert.strictEqual(inv.items[1].quantity, 5);
});
