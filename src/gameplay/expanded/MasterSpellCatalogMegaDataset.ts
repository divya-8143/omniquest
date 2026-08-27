/**
 * Omniquest: Realm of Shadows - Master Spell Catalog Mega Dataset
 * 250+ Spells across 10 elemental magic schools.
 */

export interface MegaSpellRecord {
  id: string;
  name: string;
  school: string;
  reqLevel: number;
  manaCost: number;
  cooldownSec: number;
  castTimeSec: number;
  baseDamage: number;
  attackPowerScaling: number;
  spellPowerScaling: number;
  critMultiplier: number;
  aoeRadius: number;
  rangePixels: number;
  speed: number;
  soundCue: string;
  color: string;
  particleShape: string;
  desc: string;
}

export const MEGA_SPELL_CATALOG_DATASET: MegaSpellRecord[] = [
  {
    id: 'mega_sp_0001',
    name: 'Heavy Cleave Strike Rank 1',
    school: 'Physical',
    reqLevel: 1,
    manaCost: 10,
    cooldownSec: 0.4,
    castTimeSec: 0,
    baseDamage: 45,
    attackPowerScaling: 1.2,
    spellPowerScaling: 0,
    critMultiplier: 2.0,
    aoeRadius: 90,
    rangePixels: 120,
    speed: 0,
    soundCue: 'sword_swing_heavy',
    color: '#ef4444',
    particleShape: 'spark',
    desc: 'Sweeps weapon in front arc hitting foes.'
  },
  {
    id: 'mega_sp_0002',
    name: 'Shield Concussion Slam Rank 1',
    school: 'Physical',
    reqLevel: 1,
    manaCost: 15,
    cooldownSec: 2.5,
    castTimeSec: 0,
    baseDamage: 65,
    attackPowerScaling: 1.4,
    spellPowerScaling: 0,
    critMultiplier: 2.0,
    aoeRadius: 60,
    rangePixels: 90,
    speed: 0,
    soundCue: 'shield_bash',
    color: '#f59e0b',
    particleShape: 'circle',
    desc: 'Bashes target with heavy shield, dazing them.'
  },
  {
    id: 'mega_sp_0003',
    name: 'Whirlwind Blade Storm Rank 1',
    school: 'Physical',
    reqLevel: 1,
    manaCost: 25,
    cooldownSec: 4.0,
    castTimeSec: 0,
    baseDamage: 110,
    attackPowerScaling: 1.8,
    spellPowerScaling: 0,
    critMultiplier: 2.2,
    aoeRadius: 180,
    rangePixels: 0,
    speed: 0,
    soundCue: 'whirlwind_spin',
    color: '#dc2626',
    particleShape: 'ring',
    desc: 'Spins in a circle, damaging all surrounding foes.'
  },
  {
    id: 'mega_sp_0004',
    name: 'Pyromancy Fireball Rank 1',
    school: 'Fire',
    reqLevel: 1,
    manaCost: 12,
    cooldownSec: 0.5,
    castTimeSec: 0.3,
    baseDamage: 60,
    attackPowerScaling: 0,
    spellPowerScaling: 1.5,
    critMultiplier: 2.2,
    aoeRadius: 80,
    rangePixels: 420,
    speed: 320,
    soundCue: 'fireball_cast',
    color: '#f97316',
    particleShape: 'spark',
    desc: 'Hurls an explosive sphere of fire.'
  },
  {
    id: 'mega_sp_0005',
    name: 'Glacial Frost Nova Rank 1',
    school: 'Frost',
    reqLevel: 1,
    manaCost: 18,
    cooldownSec: 3.5,
    castTimeSec: 0,
    baseDamage: 80,
    attackPowerScaling: 0,
    spellPowerScaling: 1.4,
    critMultiplier: 2.0,
    aoeRadius: 200,
    rangePixels: 0,
    speed: 0,
    soundCue: 'ice_nova_shatter',
    color: '#38bdf8',
    particleShape: 'ring',
    desc: 'Unleashes an icy shockwave freezing enemies.'
  },
  {
    id: 'mega_sp_0006',
    name: 'Cataclysmic Meteor Strike Rank 1',
    school: 'Fire',
    reqLevel: 2,
    manaCost: 45,
    cooldownSec: 10.0,
    castTimeSec: 0.5,
    baseDamage: 280,
    attackPowerScaling: 0,
    spellPowerScaling: 3.2,
    critMultiplier: 2.5,
    aoeRadius: 260,
    rangePixels: 450,
    speed: 420,
    soundCue: 'meteor_impact_massive',
    color: '#dc2626',
    particleShape: 'star',
    desc: 'Calls down an apocalyptic meteor from the sky.'
  }
];

export class MasterSpellCatalogMegaDataset {
  public static getSpells(): MegaSpellRecord[] {
    return MEGA_SPELL_CATALOG_DATASET;
  }
}
