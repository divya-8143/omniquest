import { ModdingContentLoader } from '../modding/ModdingContentLoader';

describe('ModdingContentLoader', () => {
  let loader: ModdingContentLoader;

  beforeEach(() => {
    loader = ModdingContentLoader.getInstance();
    loader.clearAllMods();
  });

  test('rejects malformed JSON mod manifests', () => {
    const res = loader.validateAndLoadModJson('invalid json string');
    expect(res.isValid).toBe(false);
    expect(res.errors.length).toBeGreaterThan(0);
  });

  test('validates and registers custom mod items and monsters', () => {
    const validMod = JSON.stringify({
      modId: 'mod_shadow_realm',
      name: 'Shadow Realm Expansion',
      version: '1.0.0',
      author: 'CommunityModder',
      description: 'Adds custom void blade.',
      items: [
        {
          id: 'item_mod_void_blade',
          name: 'Blade of the Void Empress',
          slot: 'MainHand',
          rarity: 'Mythic',
          itemLevel: 5,
          requiredLevel: 3,
          attackPower: 150,
          spellPower: 60,
          armorRating: 20,
          maxHealthBonus: 100,
          maxEnergyBonus: 50,
          critChancePct: 20,
          critMultiplierBonus: 2.0,
          movementSpeedBonusPct: 10,
          lifeStealPct: 8,
          fireResistancePct: 0,
          frostResistancePct: 0,
          shadowResistancePct: 50,
          holyResistancePct: 0,
          lightningResistancePct: 0,
          poisonResistancePct: 0,
          specialAffixDescription: 'Void rift strike.',
          flavorLoreText: 'Forged in the abyss.',
          baseGoldValue: 1200,
          durabilityMax: 200
        }
      ]
    });

    const res = loader.validateAndLoadModJson(validMod);
    expect(res.isValid).toBe(true);
    expect(res.loadedItemCount).toBe(1);
    expect(loader.getCustomItem('item_mod_void_blade')).toBeDefined();
    expect(loader.getCustomItem('item_mod_void_blade')?.name).toBe('Blade of the Void Empress');
  });
});
