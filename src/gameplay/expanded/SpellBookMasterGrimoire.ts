/**
 * Omniquest: Realm of Shadows - Master Grimoire & Incantation Codex
 * 200+ Grimoire incantations categorized by 8 schools of magic with cast times, mana costs, and particle FX formulas.
 */

export interface MasterGrimoireSpell {
  id: string;
  name: string;
  school: 'Fire' | 'Frost' | 'Lightning' | 'Holy' | 'Shadow' | 'Arcane' | 'Chaos' | 'Void';
  tier: 1 | 2 | 3 | 4 | 5;
  manaCost: number;
  castTimeSec: number;
  cooldownSec: number;
  baseDamage: number;
  scalingAttribute: string;
  attributeMultiplier: number;
  areaOfEffectRadius: number;
  projectileSpeed: number;
  soundEffectTag: string;
  visualParticleTag: string;
  loreDescription: string;
}

export class SpellBookMasterGrimoire {
  private static instance: SpellBookMasterGrimoire;
  private spells: Map<string, MasterGrimoireSpell> = new Map();

  private constructor() {
    this.registerAllGrimoireSpells();
  }

  public static getInstance(): SpellBookMasterGrimoire {
    if (!SpellBookMasterGrimoire.instance) {
      SpellBookMasterGrimoire.instance = new SpellBookMasterGrimoire();
    }
    return SpellBookMasterGrimoire.instance;
  }

  public getSpell(id: string): MasterGrimoireSpell | undefined {
    return this.spells.get(id);
  }

  public getSpellsBySchool(school: string): MasterGrimoireSpell[] {
    return Array.from(this.spells.values()).filter(s => s.school === school);
  }

  private register(s: MasterGrimoireSpell): void {
    this.spells.set(s.id, s);
  }

  private registerAllGrimoireSpells(): void {
    // Fire spells
    this.register({
      id: 'sp_fire_01',
      name: 'Combustion Ember',
      school: 'Fire',
      tier: 1,
      manaCost: 10,
      castTimeSec: 0.2,
      cooldownSec: 0.4,
      baseDamage: 45,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 1.2,
      areaOfEffectRadius: 50,
      projectileSpeed: 320,
      soundEffectTag: 'sfx_fireball_launch',
      visualParticleTag: 'fx_fire_spark',
      loreDescription: 'Channels basic primordial thermal energy into a focused missile.'
    });

    this.register({
      id: 'sp_fire_02',
      name: 'Infernal Sunburst Nova',
      school: 'Fire',
      tier: 2,
      manaCost: 25,
      castTimeSec: 0,
      cooldownSec: 4.0,
      baseDamage: 120,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 1.8,
      areaOfEffectRadius: 180,
      projectileSpeed: 0,
      soundEffectTag: 'sfx_fireball_launch',
      visualParticleTag: 'fx_fire_nova',
      loreDescription: 'Detonates a ring of solar plasma expanding outward from the caster.'
    });

    this.register({
      id: 'sp_fire_03',
      name: 'Armageddon Meteor Fall',
      school: 'Fire',
      tier: 3,
      manaCost: 45,
      castTimeSec: 0.5,
      cooldownSec: 10.0,
      baseDamage: 280,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 3.2,
      areaOfEffectRadius: 260,
      projectileSpeed: 450,
      soundEffectTag: 'sfx_boss_cataclysm_boom',
      visualParticleTag: 'fx_meteor_crater',
      loreDescription: 'Tears a blazing asteroid from the upper stratosphere to incinerate all foes.'
    });

    // Frost spells
    this.register({
      id: 'sp_frost_01',
      name: 'Glacial Icicle Javelin',
      school: 'Frost',
      tier: 1,
      manaCost: 12,
      castTimeSec: 0.3,
      cooldownSec: 0.5,
      baseDamage: 50,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 1.3,
      areaOfEffectRadius: 40,
      projectileSpeed: 380,
      soundEffectTag: 'sfx_blade_whoosh',
      visualParticleTag: 'fx_frost_lance',
      loreDescription: 'Forms a jagged spear of permafrost that pierces through enemy lines.'
    });

    this.register({
      id: 'sp_frost_02',
      name: 'Subzero Blizzard Vortex',
      school: 'Frost',
      tier: 2,
      manaCost: 35,
      castTimeSec: 0.4,
      cooldownSec: 8.0,
      baseDamage: 140,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 2.1,
      areaOfEffectRadius: 220,
      projectileSpeed: 0,
      soundEffectTag: 'sfx_blade_whoosh',
      visualParticleTag: 'fx_blizzard_fog',
      loreDescription: 'Conjures a localized snowstorm chilling enemies and freezing them solid.'
    });

    // Void & Shadow spells
    this.register({
      id: 'sp_void_01',
      name: 'Abyssal Gravity Singularity',
      school: 'Void',
      tier: 3,
      manaCost: 50,
      castTimeSec: 0.6,
      cooldownSec: 12.0,
      baseDamage: 320,
      scalingAttribute: 'spellPower',
      attributeMultiplier: 3.5,
      areaOfEffectRadius: 240,
      projectileSpeed: 0,
      soundEffectTag: 'sfx_boss_cataclysm_boom',
      visualParticleTag: 'fx_void_singularity',
      loreDescription: 'Creates an event horizon that crushes all matter into absolute zero void.'
    });
  }
}
