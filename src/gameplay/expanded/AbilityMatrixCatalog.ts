/**
 * Omniquest: Realm of Shadows - Comprehensive Ability & Talent Matrix Catalog
 * Defines rich skill specs, elemental damage scaling, proc mechanics, and combo chains.
 */

export interface AbilityScalingFormula {
  baseDamage: number;
  attackPowerMultiplier: number;
  spellPowerMultiplier: number;
  critCoefficient: number;
  variancePct: number;
}

export interface StatusEffectSpec {
  id: string;
  name: string;
  durationSeconds: number;
  tickInterval: number;
  periodicDamage: number;
  periodicHeal: number;
  statModifiers: {
    armorReductionPct?: number;
    movementSpeedPct?: number;
    attackSpeedPct?: number;
    damageDealtPct?: number;
    critChanceBonusPct?: number;
    stunDuration?: number;
  };
  visualFxColor: string;
}

export interface ExpandedAbilityDefinition {
  id: string;
  name: string;
  school: 'Physical' | 'Fire' | 'Frost' | 'Lightning' | 'Holy' | 'Shadow' | 'Arcane' | 'Poison' | 'Void' | 'Chaos';
  classRequirement: string;
  requiredLevel: number;
  cooldownSeconds: number;
  energyCost: number;
  castTimeSeconds: number;
  rangePixels: number;
  areaRadiusPixels: number;
  targetType: 'Self' | 'SingleEnemy' | 'AreaEnemy' | 'ConeEnemy' | 'ChainTarget' | 'LineTarget' | 'GroundTarget';
  scaling: AbilityScalingFormula;
  statusEffectsApplied: StatusEffectSpec[];
  soundCue: string;
  description: string;
  comboPrecursorId?: string;
  comboFinisherMultiplier?: number;
  particleSpec: {
    count: number;
    color: string;
    speed: number;
    shape: 'circle' | 'spark' | 'ring' | 'star' | 'ray';
  };
}

export class AbilityMatrixCatalog {
  private static instance: AbilityMatrixCatalog;
  private abilities: Map<string, ExpandedAbilityDefinition> = new Map();

  private constructor() {
    this.registerAllAbilities();
  }

  public static getInstance(): AbilityMatrixCatalog {
    if (!AbilityMatrixCatalog.instance) {
      AbilityMatrixCatalog.instance = new AbilityMatrixCatalog();
    }
    return AbilityMatrixCatalog.instance;
  }

  public getAbility(id: string): ExpandedAbilityDefinition | undefined {
    return this.abilities.get(id);
  }

  public getAbilitiesForClass(className: string, maxLevel: number = 100): ExpandedAbilityDefinition[] {
    const list: ExpandedAbilityDefinition[] = [];
    this.abilities.forEach(ability => {
      if ((ability.classRequirement === 'All' || ability.classRequirement === className) && ability.requiredLevel <= maxLevel) {
        list.push(ability);
      }
    });
    return list;
  }

  public calculateDamage(
    abilityId: string,
    attackPower: number,
    spellPower: number,
    isCrit: boolean = false
  ): { damage: number; isCrit: boolean; school: string } {
    const ab = this.abilities.get(abilityId);
    if (!ab) return { damage: 10, isCrit: false, school: 'Physical' };

    const base = ab.scaling.baseDamage;
    const apContribution = attackPower * ab.scaling.attackPowerMultiplier;
    const spContribution = spellPower * ab.scaling.spellPowerMultiplier;
    let total = base + apContribution + spContribution;

    const variance = (Math.random() * 2 - 1) * (ab.scaling.variancePct / 100) * total;
    total += variance;

    if (isCrit) {
      total *= ab.scaling.critCoefficient;
    }

    return {
      damage: Math.max(1, Math.round(total)),
      isCrit,
      school: ab.school
    };
  }

  private register(ability: ExpandedAbilityDefinition): void {
    this.abilities.set(ability.id, ability);
  }

  private registerAllAbilities(): void {
    // -------------------------------------------------------------
    // WARRIOR ABILITIES (001 - 040)
    // -------------------------------------------------------------
    this.register({
      id: 'war_slash_01',
      name: 'Heavy Cleave',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 1,
      cooldownSeconds: 0.4,
      energyCost: 10,
      castTimeSeconds: 0,
      rangePixels: 120,
      areaRadiusPixels: 90,
      targetType: 'AreaEnemy',
      scaling: { baseDamage: 45, attackPowerMultiplier: 1.2, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 10 },
      statusEffectsApplied: [],
      soundCue: 'sword_swing_heavy',
      description: 'Strikes all enemies in front for heavy physical cleave damage.',
      particleSpec: { count: 18, color: '#ef4444', speed: 80, shape: 'spark' }
    });

    this.register({
      id: 'war_slam_02',
      name: 'Shield Slam',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 2,
      cooldownSeconds: 2.5,
      energyCost: 15,
      castTimeSeconds: 0,
      rangePixels: 90,
      areaRadiusPixels: 60,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 65, attackPowerMultiplier: 1.4, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 8 },
      statusEffectsApplied: [
        {
          id: 'status_concussed',
          name: 'Concussion',
          durationSeconds: 2.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { movementSpeedPct: -50, attackSpeedPct: -25 },
          visualFxColor: '#fbbf24'
        }
      ],
      soundCue: 'shield_bash',
      description: 'Bashes target with heavy shield, dazing and slowing their movement.',
      particleSpec: { count: 15, color: '#f59e0b', speed: 70, shape: 'circle' }
    });

    this.register({
      id: 'war_whirl_03',
      name: 'Berserker Whirlwind',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 3,
      cooldownSeconds: 4.0,
      energyCost: 25,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 180,
      targetType: 'AreaEnemy',
      scaling: { baseDamage: 110, attackPowerMultiplier: 1.8, spellPowerMultiplier: 0, critCoefficient: 2.2, variancePct: 12 },
      statusEffectsApplied: [],
      soundCue: 'whirlwind_spin',
      description: 'Spins in a lethal circle, damaging all surrounding foes.',
      particleSpec: { count: 45, color: '#dc2626', speed: 120, shape: 'ring' }
    });

    this.register({
      id: 'war_shout_04',
      name: 'Battle Cry of Valor',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 4,
      cooldownSeconds: 8.0,
      energyCost: 20,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 300,
      targetType: 'Self',
      scaling: { baseDamage: 0, attackPowerMultiplier: 0, spellPowerMultiplier: 0, critCoefficient: 1.0, variancePct: 0 },
      statusEffectsApplied: [
        {
          id: 'buff_valor',
          name: 'Valor Might',
          durationSeconds: 10.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { damageDealtPct: 25, armorReductionPct: -20, critChanceBonusPct: 15 },
          visualFxColor: '#f97316'
        }
      ],
      soundCue: 'warrior_shout',
      description: 'Roars loudly, boosting attack power and critical strike chance.',
      particleSpec: { count: 30, color: '#f97316', speed: 90, shape: 'ring' }
    });

    this.register({
      id: 'war_charge_05',
      name: 'Vanguard Charge',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 5,
      cooldownSeconds: 6.0,
      energyCost: 15,
      castTimeSeconds: 0,
      rangePixels: 350,
      areaRadiusPixels: 70,
      targetType: 'LineTarget',
      scaling: { baseDamage: 85, attackPowerMultiplier: 1.5, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'status_stun_charge',
          name: 'Stunned',
          durationSeconds: 1.5,
          tickInterval: 1.5,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { stunDuration: 1.5, movementSpeedPct: -100 },
          visualFxColor: '#ffffff'
        }
      ],
      soundCue: 'charge_impact',
      description: 'Rushes forward into enemy ranks, stunning the first target hit.',
      particleSpec: { count: 25, color: '#ffffff', speed: 140, shape: 'ray' }
    });

    this.register({
      id: 'war_rend_06',
      name: 'Deep Rend',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 6,
      cooldownSeconds: 3.0,
      energyCost: 12,
      castTimeSeconds: 0,
      rangePixels: 100,
      areaRadiusPixels: 60,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 50, attackPowerMultiplier: 1.1, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 5 },
      statusEffectsApplied: [
        {
          id: 'dot_bleed_rend',
          name: 'Deep Bleed',
          durationSeconds: 6.0,
          tickInterval: 1.0,
          periodicDamage: 22,
          periodicHeal: 0,
          statModifiers: { armorReductionPct: 15 },
          visualFxColor: '#991b1b'
        }
      ],
      soundCue: 'blade_bleed',
      description: 'Rips enemy armor causing profound bleeding over 6 seconds.',
      particleSpec: { count: 20, color: '#991b1b', speed: 60, shape: 'spark' }
    });

    this.register({
      id: 'war_sunder_07',
      name: 'Sunder Armor',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 7,
      cooldownSeconds: 2.0,
      energyCost: 10,
      castTimeSeconds: 0,
      rangePixels: 90,
      areaRadiusPixels: 50,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 40, attackPowerMultiplier: 0.9, spellPowerMultiplier: 0, critCoefficient: 1.8, variancePct: 5 },
      statusEffectsApplied: [
        {
          id: 'debuff_sunder',
          name: 'Sundered Armor',
          durationSeconds: 12.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { armorReductionPct: 30 },
          visualFxColor: '#78350f'
        }
      ],
      soundCue: 'armor_crack',
      description: 'Fractures enemy defenses, stripping 30% of their total armor.',
      particleSpec: { count: 12, color: '#78350f', speed: 50, shape: 'spark' }
    });

    this.register({
      id: 'war_execute_08',
      name: 'Mortal Execute',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 8,
      cooldownSeconds: 5.0,
      energyCost: 30,
      castTimeSeconds: 0,
      rangePixels: 100,
      areaRadiusPixels: 70,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 220, attackPowerMultiplier: 2.8, spellPowerMultiplier: 0, critCoefficient: 2.5, variancePct: 15 },
      statusEffectsApplied: [],
      soundCue: 'heavy_decapitate',
      description: 'Delivers a devastating finishing strike dealing colossal damage to weakened foes.',
      comboFinisherMultiplier: 1.6,
      particleSpec: { count: 50, color: '#b91c1c', speed: 160, shape: 'star' }
    });

    this.register({
      id: 'war_shockwave_09',
      name: 'Earthshatter Shockwave',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 9,
      cooldownSeconds: 7.5,
      energyCost: 25,
      castTimeSeconds: 0.2,
      rangePixels: 280,
      areaRadiusPixels: 140,
      targetType: 'ConeEnemy',
      scaling: { baseDamage: 140, attackPowerMultiplier: 1.9, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'status_knockdown',
          name: 'Knocked Down',
          durationSeconds: 2.0,
          tickInterval: 2.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { stunDuration: 2.0, movementSpeedPct: -100 },
          visualFxColor: '#eab308'
        }
      ],
      soundCue: 'earthquake_slam',
      description: 'Slams great hammer into ground, unleashing a directional earthquake wave.',
      particleSpec: { count: 40, color: '#ca8a04', speed: 130, shape: 'ray' }
    });

    this.register({
      id: 'war_avatar_10',
      name: 'Avatar of the Titan',
      school: 'Physical',
      classRequirement: 'Warrior',
      requiredLevel: 10,
      cooldownSeconds: 20.0,
      energyCost: 40,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 0,
      targetType: 'Self',
      scaling: { baseDamage: 0, attackPowerMultiplier: 0, spellPowerMultiplier: 0, critCoefficient: 1.0, variancePct: 0 },
      statusEffectsApplied: [
        {
          id: 'buff_titan_avatar',
          name: 'Titan Form',
          durationSeconds: 15.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { damageDealtPct: 50, armorReductionPct: -50, critChanceBonusPct: 20 },
          visualFxColor: '#fbbf24'
        }
      ],
      soundCue: 'titan_roar',
      description: 'Transforms into an unstoppable giant titan with massive offensive and defensive bonuses.',
      particleSpec: { count: 70, color: '#fbbf24', speed: 150, shape: 'ring' }
    });

    // -------------------------------------------------------------
    // MAGE ABILITIES (011 - 050)
    // -------------------------------------------------------------
    this.register({
      id: 'mage_fireball_01',
      name: 'Arcane Fireball',
      school: 'Fire',
      classRequirement: 'Mage',
      requiredLevel: 1,
      cooldownSeconds: 0.5,
      energyCost: 12,
      castTimeSeconds: 0.3,
      rangePixels: 420,
      areaRadiusPixels: 80,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 60, attackPowerMultiplier: 0, spellPowerMultiplier: 1.5, critCoefficient: 2.2, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'dot_ignite_burn',
          name: 'Ignite',
          durationSeconds: 4.0,
          tickInterval: 1.0,
          periodicDamage: 15,
          periodicHeal: 0,
          statModifiers: {},
          visualFxColor: '#ef4444'
        }
      ],
      soundCue: 'fireball_cast',
      description: 'Hurls an explosive sphere of concentrated fire that ignites targets.',
      particleSpec: { count: 28, color: '#f97316', speed: 110, shape: 'spark' }
    });

    this.register({
      id: 'mage_frostnova_02',
      name: 'Glacial Frost Nova',
      school: 'Frost',
      classRequirement: 'Mage',
      requiredLevel: 2,
      cooldownSeconds: 3.5,
      energyCost: 18,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 200,
      targetType: 'AreaEnemy',
      scaling: { baseDamage: 80, attackPowerMultiplier: 0, spellPowerMultiplier: 1.4, critCoefficient: 2.0, variancePct: 8 },
      statusEffectsApplied: [
        {
          id: 'status_deep_freeze',
          name: 'Frozen Solid',
          durationSeconds: 3.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { stunDuration: 3.0, movementSpeedPct: -100 },
          visualFxColor: '#38bdf8'
        }
      ],
      soundCue: 'ice_nova_shatter',
      description: 'Unleashes an icy shockwave, freezing all adjacent enemies solid in ice blocks.',
      particleSpec: { count: 45, color: '#38bdf8', speed: 95, shape: 'ring' }
    });

    this.register({
      id: 'mage_blink_03',
      name: 'Arcane Phase Blink',
      school: 'Arcane',
      classRequirement: 'Mage',
      requiredLevel: 3,
      cooldownSeconds: 5.0,
      energyCost: 20,
      castTimeSeconds: 0,
      rangePixels: 300,
      areaRadiusPixels: 60,
      targetType: 'Self',
      scaling: { baseDamage: 30, attackPowerMultiplier: 0, spellPowerMultiplier: 0.8, critCoefficient: 1.5, variancePct: 5 },
      statusEffectsApplied: [],
      soundCue: 'arcane_teleport',
      description: 'Teleports forward through the astral plane, disorienting nearby enemies.',
      particleSpec: { count: 35, color: '#c084fc', speed: 130, shape: 'star' }
    });

    this.register({
      id: 'mage_chainlightning_04',
      name: 'Stormcaller Chain Lightning',
      school: 'Lightning',
      classRequirement: 'Mage',
      requiredLevel: 4,
      cooldownSeconds: 4.0,
      energyCost: 25,
      castTimeSeconds: 0.2,
      rangePixels: 380,
      areaRadiusPixels: 150,
      targetType: 'ChainTarget',
      scaling: { baseDamage: 110, attackPowerMultiplier: 0, spellPowerMultiplier: 1.8, critCoefficient: 2.4, variancePct: 12 },
      statusEffectsApplied: [
        {
          id: 'debuff_electrified',
          name: 'Electrified',
          durationSeconds: 5.0,
          tickInterval: 1.0,
          periodicDamage: 18,
          periodicHeal: 0,
          statModifiers: { attackSpeedPct: -20 },
          visualFxColor: '#e0e7ff'
        }
      ],
      soundCue: 'thunder_crack',
      description: 'Discharges leaping lightning bolts arcing across multiple hostile enemies.',
      particleSpec: { count: 40, color: '#818cf8', speed: 170, shape: 'ray' }
    });

    this.register({
      id: 'mage_meteor_05',
      name: 'Cataclysmic Meteor Strike',
      school: 'Fire',
      classRequirement: 'Mage',
      requiredLevel: 5,
      cooldownSeconds: 10.0,
      energyCost: 45,
      castTimeSeconds: 0.5,
      rangePixels: 450,
      areaRadiusPixels: 260,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 280, attackPowerMultiplier: 0, spellPowerMultiplier: 3.2, critCoefficient: 2.5, variancePct: 15 },
      statusEffectsApplied: [
        {
          id: 'dot_magma_scorch',
          name: 'Scorched Ground',
          durationSeconds: 6.0,
          tickInterval: 1.0,
          periodicDamage: 35,
          periodicHeal: 0,
          statModifiers: { movementSpeedPct: -30 },
          visualFxColor: '#ef4444'
        }
      ],
      soundCue: 'meteor_impact_massive',
      description: 'Calls down an apocalyptic burning star from the heavens, annihilating all in its blast zone.',
      comboFinisherMultiplier: 1.8,
      particleSpec: { count: 90, color: '#dc2626', speed: 200, shape: 'star' }
    });

    this.register({
      id: 'mage_blizzard_06',
      name: 'Deep Winter Blizzard',
      school: 'Frost',
      classRequirement: 'Mage',
      requiredLevel: 6,
      cooldownSeconds: 8.0,
      energyCost: 35,
      castTimeSeconds: 0.4,
      rangePixels: 350,
      areaRadiusPixels: 220,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 130, attackPowerMultiplier: 0, spellPowerMultiplier: 2.1, critCoefficient: 2.0, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'status_chilled_slow',
          name: 'Chilled to the Bone',
          durationSeconds: 6.0,
          tickInterval: 1.0,
          periodicDamage: 20,
          periodicHeal: 0,
          statModifiers: { movementSpeedPct: -60, attackSpeedPct: -35 },
          visualFxColor: '#bae6fd'
        }
      ],
      soundCue: 'howling_blizzard',
      description: 'Summons a localized subzero vortex raining down razor-sharp icicles.',
      particleSpec: { count: 65, color: '#7dd3fc', speed: 100, shape: 'spark' }
    });

    this.register({
      id: 'mage_arcanepower_07',
      name: 'Overcharged Arcane Surge',
      school: 'Arcane',
      classRequirement: 'Mage',
      requiredLevel: 7,
      cooldownSeconds: 15.0,
      energyCost: 30,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 0,
      targetType: 'Self',
      scaling: { baseDamage: 0, attackPowerMultiplier: 0, spellPowerMultiplier: 0, critCoefficient: 1.0, variancePct: 0 },
      statusEffectsApplied: [
        {
          id: 'buff_arcane_surge',
          name: 'Arcane Mastery',
          durationSeconds: 12.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { damageDealtPct: 40, critChanceBonusPct: 25 },
          visualFxColor: '#a855f7'
        }
      ],
      soundCue: 'magic_hum_power',
      description: 'Taps into raw ley line energy, vastly increasing spell power and critical frequency.',
      particleSpec: { count: 50, color: '#c084fc', speed: 110, shape: 'ring' }
    });

    // -------------------------------------------------------------
    // ROGUE ABILITIES (051 - 090)
    // -------------------------------------------------------------
    this.register({
      id: 'rog_backstab_01',
      name: 'Shadow Backstab',
      school: 'Physical',
      classRequirement: 'Rogue',
      requiredLevel: 1,
      cooldownSeconds: 0.4,
      energyCost: 15,
      castTimeSeconds: 0,
      rangePixels: 80,
      areaRadiusPixels: 50,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 75, attackPowerMultiplier: 1.9, spellPowerMultiplier: 0, critCoefficient: 2.8, variancePct: 15 },
      statusEffectsApplied: [],
      soundCue: 'dagger_stab_flesh',
      description: 'Lethal thrust into enemy vital organs with extremely high critical damage potential.',
      particleSpec: { count: 20, color: '#ef4444', speed: 90, shape: 'spark' }
    });

    this.register({
      id: 'rog_poison_02',
      name: 'Viper Venom Coating',
      school: 'Poison',
      classRequirement: 'Rogue',
      requiredLevel: 2,
      cooldownSeconds: 2.0,
      energyCost: 10,
      castTimeSeconds: 0,
      rangePixels: 90,
      areaRadiusPixels: 50,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 35, attackPowerMultiplier: 0.8, spellPowerMultiplier: 0, critCoefficient: 1.8, variancePct: 5 },
      statusEffectsApplied: [
        {
          id: 'dot_viper_toxin',
          name: 'Viper Neurotoxin',
          durationSeconds: 8.0,
          tickInterval: 1.0,
          periodicDamage: 28,
          periodicHeal: 0,
          statModifiers: { attackSpeedPct: -25, movementSpeedPct: -20 },
          visualFxColor: '#22c55e'
        }
      ],
      soundCue: 'poison_apply_splash',
      description: 'Envenoms weapons with deadly reptilian neurotoxin that corrodes biological matter.',
      particleSpec: { count: 22, color: '#22c55e', speed: 70, shape: 'circle' }
    });

    this.register({
      id: 'rog_shadowstep_03',
      name: 'Shadowstep Teleport',
      school: 'Shadow',
      classRequirement: 'Rogue',
      requiredLevel: 3,
      cooldownSeconds: 4.5,
      energyCost: 15,
      castTimeSeconds: 0,
      rangePixels: 350,
      areaRadiusPixels: 40,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 40, attackPowerMultiplier: 1.0, spellPowerMultiplier: 0, critCoefficient: 2.0, variancePct: 5 },
      statusEffectsApplied: [
        {
          id: 'buff_shadow_haste',
          name: 'Shadow Sprint',
          durationSeconds: 4.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { movementSpeedPct: 60, critChanceBonusPct: 30 },
          visualFxColor: '#1e1b4b'
        }
      ],
      soundCue: 'shadow_vanish',
      description: 'Merges with darkness to instantly re-emerge directly behind target prey.',
      particleSpec: { count: 32, color: '#312e81', speed: 120, shape: 'ray' }
    });

    this.register({
      id: 'rog_fanofknives_04',
      name: 'Fan of Razor Daggers',
      school: 'Physical',
      classRequirement: 'Rogue',
      requiredLevel: 4,
      cooldownSeconds: 3.0,
      energyCost: 25,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 220,
      targetType: 'AreaEnemy',
      scaling: { baseDamage: 95, attackPowerMultiplier: 1.6, spellPowerMultiplier: 0, critCoefficient: 2.2, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'dot_knife_bleed',
          name: 'Lacerations',
          durationSeconds: 4.0,
          tickInterval: 1.0,
          periodicDamage: 16,
          periodicHeal: 0,
          statModifiers: {},
          visualFxColor: '#ef4444'
        }
      ],
      soundCue: 'knives_spray',
      description: 'Hurls an outward burst of sharpened silver blades in all 360 degrees.',
      particleSpec: { count: 50, color: '#94a3b8', speed: 150, shape: 'spark' }
    });

    this.register({
      id: 'rog_smokebomb_05',
      name: 'Alchemical Smoke Screen',
      school: 'Shadow',
      classRequirement: 'Rogue',
      requiredLevel: 5,
      cooldownSeconds: 9.0,
      energyCost: 20,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 240,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 0, attackPowerMultiplier: 0, spellPowerMultiplier: 0, critCoefficient: 1.0, variancePct: 0 },
      statusEffectsApplied: [
        {
          id: 'buff_invisibility_shroud',
          name: 'Stealth Cloak',
          durationSeconds: 6.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 0,
          statModifiers: { critChanceBonusPct: 50, movementSpeedPct: 30 },
          visualFxColor: '#475569'
        }
      ],
      soundCue: 'smoke_poof',
      description: 'Drops an impenetrable dense fog screen, granting invisibility and guaranteed critical strikes.',
      particleSpec: { count: 70, color: '#334155', speed: 60, shape: 'circle' }
    });

    // -------------------------------------------------------------
    // PALADIN & HOLY WARRIOR ABILITIES (091 - 130)
    // -------------------------------------------------------------
    this.register({
      id: 'pal_holystrike_01',
      name: 'Crusader Holy Strike',
      school: 'Holy',
      classRequirement: 'Paladin',
      requiredLevel: 1,
      cooldownSeconds: 0.5,
      energyCost: 12,
      castTimeSeconds: 0,
      rangePixels: 110,
      areaRadiusPixels: 70,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 55, attackPowerMultiplier: 1.1, spellPowerMultiplier: 0.9, critCoefficient: 2.0, variancePct: 8 },
      statusEffectsApplied: [],
      soundCue: 'holy_smite_ring',
      description: 'Infuses weapon with celestial radiance, dealing bonus damage to undead and demons.',
      particleSpec: { count: 24, color: '#fef08a', speed: 85, shape: 'star' }
    });

    this.register({
      id: 'pal_consecration_02',
      name: 'Sanctified Consecration',
      school: 'Holy',
      classRequirement: 'Paladin',
      requiredLevel: 2,
      cooldownSeconds: 6.0,
      energyCost: 25,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 220,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 120, attackPowerMultiplier: 0.8, spellPowerMultiplier: 1.6, critCoefficient: 2.0, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'dot_holy_burn',
          name: 'Consecrated Ground',
          durationSeconds: 8.0,
          tickInterval: 1.0,
          periodicDamage: 24,
          periodicHeal: 15,
          statModifiers: {},
          visualFxColor: '#facc15'
        }
      ],
      soundCue: 'consecration_hum',
      description: 'Sanctifies the dungeon floor with golden holy fire, burning demons and healing allies.',
      particleSpec: { count: 60, color: '#eab308', speed: 70, shape: 'ring' }
    });

    this.register({
      id: 'pal_layonhands_03',
      name: 'Divine Benediction',
      school: 'Holy',
      classRequirement: 'Paladin',
      requiredLevel: 3,
      cooldownSeconds: 14.0,
      energyCost: 35,
      castTimeSeconds: 0,
      rangePixels: 0,
      areaRadiusPixels: 0,
      targetType: 'Self',
      scaling: { baseDamage: 0, attackPowerMultiplier: 0, spellPowerMultiplier: 0, critCoefficient: 1.0, variancePct: 0 },
      statusEffectsApplied: [
        {
          id: 'heal_divine_grace',
          name: 'Divine Grace',
          durationSeconds: 1.0,
          tickInterval: 1.0,
          periodicDamage: 0,
          periodicHeal: 180,
          statModifiers: { armorReductionPct: -30 },
          visualFxColor: '#22c55e'
        }
      ],
      soundCue: 'divine_angel_chime',
      description: 'Invokes divine intervention to instantaneously restore huge chunks of health.',
      particleSpec: { count: 45, color: '#4ade80', speed: 90, shape: 'star' }
    });

    // -------------------------------------------------------------
    // NECROMANCER & VOID ABILITIES (131 - 160)
    // -------------------------------------------------------------
    this.register({
      id: 'necro_deathcoil_01',
      name: 'Abyssal Death Coil',
      school: 'Shadow',
      classRequirement: 'Necromancer',
      requiredLevel: 1,
      cooldownSeconds: 1.2,
      energyCost: 15,
      castTimeSeconds: 0.2,
      rangePixels: 360,
      areaRadiusPixels: 60,
      targetType: 'SingleEnemy',
      scaling: { baseDamage: 70, attackPowerMultiplier: 0, spellPowerMultiplier: 1.7, critCoefficient: 2.1, variancePct: 10 },
      statusEffectsApplied: [
        {
          id: 'debuff_death_leech',
          name: 'Life Siphon',
          durationSeconds: 4.0,
          tickInterval: 1.0,
          periodicDamage: 18,
          periodicHeal: 18,
          statModifiers: {},
          visualFxColor: '#10b981'
        }
      ],
      soundCue: 'soul_drain_scream',
      description: 'Fires an ethereal skull of shadow energy that drains enemy health back to the caster.',
      particleSpec: { count: 30, color: '#059669', speed: 100, shape: 'spark' }
    });

    this.register({
      id: 'necro_corpseexplosion_02',
      name: 'Macabre Corpse Explosion',
      school: 'Chaos',
      classRequirement: 'Necromancer',
      requiredLevel: 2,
      cooldownSeconds: 3.0,
      energyCost: 20,
      castTimeSeconds: 0,
      rangePixels: 300,
      areaRadiusPixels: 190,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 180, attackPowerMultiplier: 0, spellPowerMultiplier: 2.6, critCoefficient: 2.4, variancePct: 14 },
      statusEffectsApplied: [],
      soundCue: 'gore_splatter_boom',
      description: 'Detonates fallen enemy husks into shrapnel of bone and necrotic acid.',
      comboFinisherMultiplier: 1.7,
      particleSpec: { count: 80, color: '#84cc16', speed: 170, shape: 'spark' }
    });

    this.register({
      id: 'necro_voidrift_03',
      name: 'Singularity Void Rift',
      school: 'Void',
      classRequirement: 'Necromancer',
      requiredLevel: 3,
      cooldownSeconds: 12.0,
      energyCost: 40,
      castTimeSeconds: 0.3,
      rangePixels: 320,
      areaRadiusPixels: 240,
      targetType: 'GroundTarget',
      scaling: { baseDamage: 220, attackPowerMultiplier: 0, spellPowerMultiplier: 2.9, critCoefficient: 2.3, variancePct: 12 },
      statusEffectsApplied: [
        {
          id: 'status_gravity_pull',
          name: 'Gravity Crush',
          durationSeconds: 5.0,
          tickInterval: 0.5,
          periodicDamage: 30,
          periodicHeal: 0,
          statModifiers: { movementSpeedPct: -80 },
          visualFxColor: '#4c1d95'
        }
      ],
      soundCue: 'blackhole_gravity_roar',
      description: 'Tears open a gravity vortex that sucks all surrounding enemies into crushing void oblivion.',
      particleSpec: { count: 100, color: '#3b0764', speed: 160, shape: 'ring' }
    });
  }
}
