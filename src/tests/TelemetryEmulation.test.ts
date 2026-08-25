import test from 'node:test';
import assert from 'node:assert';
import { CombatCalculator, EntityCombatStats } from '../gameplay/CombatCalculator';
import { GlobalStateEngine } from '../core/StateEngine';

test('Automated Telemetry Emulation: 1000 simulated combat cycles', () => {
  const attacker: EntityCombatStats = { attack: 25, defense: 10, critChance: 0.2, critMultiplier: 1.5, fireResist: 5, frostResist: 5 };
  const defender: EntityCombatStats = { attack: 15, defense: 8, critChance: 0.1, critMultiplier: 1.2, fireResist: 2, frostResist: 2 };

  const stateEngine = GlobalStateEngine.getInstance();
  stateEngine.setState('InCombat');

  let totalHits = 0;
  let totalCrits = 0;

  for (let cycle = 0; cycle < 1000; cycle++) {
    const res = CombatCalculator.calculateDamage(attacker, defender);
    totalHits++;
    if (res.isCrit) totalCrits++;
    assert.strictEqual(res.finalDamage > 0, true);
  }

  stateEngine.setState('Exploring');
  assert.strictEqual(totalHits, 1000);
  assert.strictEqual(totalCrits >= 0, true);
});
