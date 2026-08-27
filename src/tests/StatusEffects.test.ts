import { StatusEffectSystem } from '../gameplay/StatusEffectSystem';

describe('StatusEffectSystem', () => {
  let statusSys: StatusEffectSystem;

  beforeEach(() => {
    statusSys = StatusEffectSystem.getInstance();
    statusSys.clearAllEffects(101);
  });

  test('applies and stacks status effect', () => {
    const res1 = statusSys.applyEffect(101, {
      id: 'poison_cloud',
      type: 'Poison',
      maxDuration: 5.0,
      maxStacks: 3,
      tickInterval: 1.0,
      magnitude: 10,
      dispelPriority: 1,
      colorTag: '#22c55e',
      iconSymbol: '🧪'
    });

    expect(res1.applied).toBe(true);
    expect(res1.currentStacks).toBe(1);

    const res2 = statusSys.applyEffect(101, {
      id: 'poison_cloud',
      type: 'Poison',
      maxDuration: 5.0,
      maxStacks: 3,
      tickInterval: 1.0,
      magnitude: 10,
      dispelPriority: 1,
      colorTag: '#22c55e',
      iconSymbol: '🧪'
    });

    expect(res2.stacked).toBe(true);
    expect(res2.currentStacks).toBe(2);
  });

  test('calculates movement speed modifier during slow and freeze', () => {
    statusSys.applyEffect(101, {
      id: 'frost_slow',
      type: 'Slow',
      maxDuration: 4.0,
      maxStacks: 1,
      tickInterval: 0,
      magnitude: 30,
      dispelPriority: 1,
      colorTag: '#38bdf8',
      iconSymbol: '❄️'
    });

    expect(statusSys.getMovementSpeedModifier(101)).toBeCloseTo(0.7);

    statusSys.applyEffect(101, {
      id: 'deep_freeze',
      type: 'Freeze',
      maxDuration: 2.0,
      maxStacks: 1,
      tickInterval: 0,
      magnitude: 100,
      dispelPriority: 2,
      colorTag: '#0284c7',
      iconSymbol: '🧊'
    });

    expect(statusSys.getMovementSpeedModifier(101)).toBe(0);
    expect(statusSys.isStunnedOrFrozen(101)).toBe(true);
  });
});
