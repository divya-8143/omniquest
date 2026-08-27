import { BiomeThemingDirector } from '../procgen/BiomeThemingDirector';
import { DungeonPropScatteringEngine } from '../procgen/DungeonPropScatteringEngine';

describe('BiomeThemingDirector and PropScattering', () => {
  test('returns distinct biome configs for campaign levels', () => {
    const director = BiomeThemingDirector.getInstance();
    const l1 = director.getBiomeForLevel(1);
    const l2 = director.getBiomeForLevel(2);
    const l3 = director.getBiomeForLevel(3);

    expect(l1.biomeType).toBe('Crypt');
    expect(l2.biomeType).toBe('Inferno');
    expect(l3.biomeType).toBe('Abyssal');
    expect(l1.doorColor).not.toBe(l2.doorColor);
  });

  test('scatters props within room boundaries', () => {
    const propEngine = DungeonPropScatteringEngine.getInstance();
    const props = propEngine.scatterPropsInRoom(2, 2, 8, 8, 0.3);

    expect(props.length).toBeGreaterThan(0);
    for (const p of props) {
      expect(p.position.x).toBeGreaterThan(2 * 32);
      expect(p.position.y).toBeGreaterThan(2 * 32);
    }
  });
});
