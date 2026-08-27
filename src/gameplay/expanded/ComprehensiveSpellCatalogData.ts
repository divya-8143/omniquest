/**
 * Omniquest: Realm of Shadows - Comprehensive Master Spell Catalog Data
 * Detailed spell models across all elemental schools with damage formulas and casting parameters.
 */

export interface DetailedCatalogSpell {
  id: string;
  name: string;
  school: 'Physical' | 'Fire' | 'Frost' | 'Lightning' | 'Holy' | 'Shadow' | 'Arcane' | 'Poison' | 'Void' | 'Chaos';
  classUsable: string[];
  requiredLevel: number;
  manaCost: number;
  cooldownSec: number;
  castTimeSec: number;
  baseDamage: number;
  attackPowerScaling: number;
  spellPowerScaling: number;
  critMultiplier: number;
  aoeRadiusPixels: number;
  rangePixels: number;
  projectileSpeedPixelsPerSec: number;
  soundCueTag: string;
  visualColor: string;
  particleShape: string;
  descriptionText: string;
}

export const COMPREHENSIVE_SPELL_CATALOG_DATA: DetailedCatalogSpell[] = [
  {
    id: 'spell_cat_0001',
    name: 'Cleave Strike',
    school: 'Physical',
    classUsable: ['Warrior', 'Paladin'],
    requiredLevel: 1,
    manaCost: 10,
    cooldownSec: 0.4,
    castTimeSec: 0,
    baseDamage: 45,
    attackPowerScaling: 1.2,
    spellPowerScaling: 0,
    critMultiplier: 2.0,
    aoeRadiusPixels: 90,
    rangePixels: 120,
    projectileSpeedPixelsPerSec: 0,
    soundCueTag: 'sword_swing_heavy',
    visualColor: '#ef4444',
    particleShape: 'spark',
    descriptionText: 'Sweeps weapon in front arc hitting multiple foes.'
  },
  {
    id: 'spell_cat_0002',
    name: 'Shield Slam',
    school: 'Physical',
    classUsable: ['Warrior', 'Paladin'],
    requiredLevel: 1,
    manaCost: 15,
    cooldownSec: 2.5,
    castTimeSec: 0,
    baseDamage: 65,
    attackPowerScaling: 1.4,
    spellPowerScaling: 0,
    critMultiplier: 2.0,
    aoeRadiusPixels: 60,
    rangePixels: 90,
    projectileSpeedPixelsPerSec: 0,
    soundCueTag: 'shield_bash',
    visualColor: '#f59e0b',
    particleShape: 'circle',
    descriptionText: 'Bashes target with shield, dazing and slowing their movement.'
  },
  {
    id: 'spell_cat_0003',
    name: 'Whirlwind Nova',
    school: 'Physical',
    classUsable: ['Warrior'],
    requiredLevel: 1,
    manaCost: 25,
    cooldownSec: 4.0,
    castTimeSec: 0,
    baseDamage: 110,
    attackPowerScaling: 1.8,
    spellPowerScaling: 0,
    critMultiplier: 2.2,
    aoeRadiusPixels: 180,
    rangePixels: 0,
    projectileSpeedPixelsPerSec: 0,
    soundCueTag: 'whirlwind_spin',
    visualColor: '#dc2626',
    particleShape: 'ring',
    descriptionText: 'Spins in a lethal circle, damaging all surrounding foes.'
  },
  {
    id: 'spell_cat_0004',
    name: 'Arcane Fireball',
    school: 'Fire',
    classUsable: ['Mage'],
    requiredLevel: 1,
    manaCost: 12,
    cooldownSec: 0.5,
    castTimeSec: 0.3,
    baseDamage: 60,
    attackPowerScaling: 0,
    spellPowerScaling: 1.5,
    critMultiplier: 2.2,
    aoeRadiusPixels: 80,
    rangePixels: 420,
    projectileSpeedPixelsPerSec: 320,
    soundCueTag: 'fireball_cast',
    visualColor: '#f97316',
    particleShape: 'spark',
    descriptionText: 'Hurls an explosive sphere of fire that ignites targets.'
  },
  {
    id: 'spell_cat_0005',
    name: 'Glacial Frost Nova',
    school: 'Frost',
    classUsable: ['Mage'],
    requiredLevel: 1,
    manaCost: 18,
    cooldownSec: 3.5,
    castTimeSec: 0,
    baseDamage: 80,
    attackPowerScaling: 0,
    spellPowerScaling: 1.4,
    critMultiplier: 2.0,
    aoeRadiusPixels: 200,
    rangePixels: 0,
    projectileSpeedPixelsPerSec: 0,
    soundCueTag: 'ice_nova_shatter',
    visualColor: '#38bdf8',
    particleShape: 'ring',
    descriptionText: 'Unleashes an icy shockwave freezing nearby enemies solid.'
  },
  {
    id: 'spell_cat_0006',
    name: 'Cataclysmic Meteor Strike',
    school: 'Fire',
    classUsable: ['Mage'],
    requiredLevel: 2,
    manaCost: 45,
    cooldownSec: 10.0,
    castTimeSec: 0.5,
    baseDamage: 280,
    attackPowerScaling: 0,
    spellPowerScaling: 3.2,
    critMultiplier: 2.5,
    aoeRadiusPixels: 260,
    rangePixels: 450,
    projectileSpeedPixelsPerSec: 420,
    soundCueTag: 'meteor_impact_massive',
    visualColor: '#dc2626',
    particleShape: 'star',
    descriptionText: 'Calls down an apocalyptic meteor from the heavens.'
  },
  {
    id: 'spell_cat_0007',
    name: 'Shadow Backstab',
    school: 'Physical',
    classUsable: ['Rogue'],
    requiredLevel: 1,
    manaCost: 15,
    cooldownSec: 0.4,
    castTimeSec: 0,
    baseDamage: 75,
    attackPowerScaling: 1.9,
    spellPowerScaling: 0,
    critMultiplier: 2.8,
    aoeRadiusPixels: 50,
    rangePixels: 80,
    projectileSpeedPixelsPerSec: 0,
    soundCueTag: 'dagger_stab_flesh',
    visualColor: '#ef4444',
    particleShape: 'spark',
    descriptionText: 'Lethal thrust into enemy vitals with high critical damage.'
  },
  {
    id: 'spell_cat_0008',
    name: 'Fan of Razor Knives',
    school: 'Physical',
    classUsable: ['Rogue'],
    requiredLevel: 1,
    manaCost: 25,
    cooldownSec: 3.0,
    castTimeSec: 0,
    baseDamage: 95,
    attackPowerScaling: 1.6,
    spellPowerScaling: 0,
    critMultiplier: 2.2,
    aoeRadiusPixels: 220,
    rangePixels: 0,
    projectileSpeedPixelsPerSec: 350,
    soundCueTag: 'knives_spray',
    visualColor: '#94a3b8',
    particleShape: 'spark',
    descriptionText: 'Hurls an outward burst of blades in 360 degrees.'
  }
];

export class ComprehensiveSpellCatalogData {
  public static getSpells(): DetailedCatalogSpell[] {
    return COMPREHENSIVE_SPELL_CATALOG_DATA;
  }
}
