import { CraftingEnchantingSystem } from '../gameplay/CraftingEnchantingSystem';

describe('CraftingEnchantingSystem', () => {
  let craftingSys: CraftingEnchantingSystem;

  beforeEach(() => {
    craftingSys = CraftingEnchantingSystem.getInstance();
  });

  test('fails crafting if player lacks materials', () => {
    const inventory = new Map<string, number>();
    inventory.set('mat_iron_bar', 1); // requires 3

    const res = craftingSys.craftItem('rcp_iron_gladius', 50, inventory, 1.0);
    expect(res.success).toBe(false);
    expect(res.message).toContain('Missing required ingredient');
  });

  test('successfully crafts item with sufficient materials and gold', () => {
    const inventory = new Map<string, number>();
    inventory.set('mat_iron_bar', 5);
    inventory.set('mat_leather_strap', 2);

    const res = craftingSys.craftItem('rcp_iron_gladius', 100, inventory, 1.0);
    expect(res.success).toBe(true);
    expect(res.item).toBeDefined();
    expect(res.item?.name).toBe('Master-Forged Iron Gladius');
    expect(res.remainingGold).toBe(80);
    expect(inventory.get('mat_iron_bar')).toBe(2);
  });
});
