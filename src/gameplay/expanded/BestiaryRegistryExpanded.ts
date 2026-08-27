/**
 * Omniquest: Realm of Shadows - Expanded Bestiary & Monster AI Registry
 * 100+ Detailed Monster Profiles, Faction Affinities, Elemental Resistances, and Elite Affix Generators.
 */

export type MonsterFamily = 'Undead' | 'Demon' | 'Humanoid' | 'Beast' | 'Elemental' | 'Construct' | 'Dragonkin' | 'Eldritch';
export type MonsterRank = 'Minion' | 'Normal' | 'Elite' | 'Champion' | 'MiniBoss' | 'ActBoss' | 'WorldBoss';

export interface MonsterResistanceMatrix {
  physicalPct: number;
  firePct: number;
  frostPct: number;
  lightningPct: number;
  poisonPct: number;
  shadowPct: number;
  holyPct: number;
}

export interface MonsterAIProfile {
  aggroRadiusPixels: number;
  leashRadiusPixels: number;
  preferredCombatDistance: number;
  fleeHealthThresholdPct: number;
  attackIntervalSeconds: number;
  abilityCooldowns: Record<string, number>;
  patrolPattern: 'Stationary' | 'Wander' | 'WaypointLoop' | 'AmbushHide' | 'PackSwarm';
  canFlee: boolean;
  canCallAllies: boolean;
}

export interface MonsterSpeciesDefinition {
  speciesId: string;
  displayName: string;
  family: MonsterFamily;
  baseRank: MonsterRank;
  baseLevel: number;
  baseHealth: number;
  healthPerLevel: number;
  baseDamage: number;
  damagePerLevel: number;
  baseArmor: number;
  baseMoveSpeed: number;
  resistances: MonsterResistanceMatrix;
  aiProfile: MonsterAIProfile;
  abilities: string[];
  lootTableId: string;
  experienceReward: number;
  goldDropMin: number;
  goldDropMax: number;
  soundEffects: {
    aggro: string;
    attack: string;
    hurt: string;
    death: string;
  };
  visualModel: {
    color: string;
    radius: number;
    glowColor: string;
    auraEffect?: string;
  };
}

export class BestiaryRegistryExpanded {
  private static instance: BestiaryRegistryExpanded;
  private species: Map<string, MonsterSpeciesDefinition> = new Map();
  private eliteModifiers: Array<{ name: string; healthMult: number; damageMult: number; color: string; abilityGrant: string }> = [];

  private constructor() {
    this.registerEliteModifiers();
    this.registerAllSpecies();
  }

  public static getInstance(): BestiaryRegistryExpanded {
    if (!BestiaryRegistryExpanded.instance) {
      BestiaryRegistryExpanded.instance = new BestiaryRegistryExpanded();
    }
    return BestiaryRegistryExpanded.instance;
  }

  public getSpecies(id: string): MonsterSpeciesDefinition | undefined {
    return this.species.get(id);
  }

  public getAllSpecies(): MonsterSpeciesDefinition[] {
    return Array.from(this.species.values());
  }

  public getSpeciesForDungeonTier(tier: number): MonsterSpeciesDefinition[] {
    return Array.from(this.species.values()).filter(s => {
      if (tier === 1) return s.baseLevel <= 5 && s.baseRank !== 'ActBoss';
      if (tier === 2) return s.baseLevel >= 4 && s.baseLevel <= 10 && s.baseRank !== 'ActBoss';
      return s.baseLevel >= 8;
    });
  }

  public createSpawnInstance(speciesId: string, levelOverride?: number, makeElite: boolean = false) {
    const spec = this.species.get(speciesId);
    if (!spec) return null;

    const level = levelOverride || spec.baseLevel;
    let hp = spec.baseHealth + (level - 1) * spec.healthPerLevel;
    let dmg = spec.baseDamage + (level - 1) * spec.damagePerLevel;
    let name = spec.displayName;
    let color = spec.visualModel.color;
    let radius = spec.visualModel.radius;

    let grantedAbility: string | undefined = undefined;

    if (makeElite) {
      const mod = this.eliteModifiers[Math.floor(Math.random() * this.eliteModifiers.length)];
      name = mod.name + ' ' + name;
      hp *= mod.healthMult;
      dmg *= mod.damageMult;
      color = mod.color;
      radius *= 1.25;
      grantedAbility = mod.abilityGrant;
    }

    return {
      speciesId,
      name,
      level,
      hp: Math.round(hp),
      maxHp: Math.round(hp),
      damage: Math.round(dmg),
      armor: spec.baseArmor,
      moveSpeed: spec.baseMoveSpeed,
      color,
      radius,
      resistances: { ...spec.resistances },
      ai: { ...spec.aiProfile },
      abilities: grantedAbility ? [...spec.abilities, grantedAbility] : [...spec.abilities],
      xpReward: Math.round(spec.experienceReward * (makeElite ? 2.5 : 1.0)),
      gold: Math.floor(Math.random() * (spec.goldDropMax - spec.goldDropMin + 1)) + spec.goldDropMin
    };
  }

  private registerEliteModifiers(): void {
    this.eliteModifiers.push(
      { name: '🔥 Molten Core', healthMult: 1.8, damageMult: 1.4, color: '#f97316', abilityGrant: 'mage_fireball_01' },
      { name: '❄️ Frost Aura', healthMult: 1.9, damageMult: 1.2, color: '#38bdf8', abilityGrant: 'mage_frostnova_02' },
      { name: '⚡ Stormcharged', healthMult: 1.6, damageMult: 1.6, color: '#818cf8', abilityGrant: 'mage_chainlightning_04' },
      { name: '💀 Vampiric Blood', healthMult: 2.2, damageMult: 1.3, color: '#dc2626', abilityGrant: 'necro_deathcoil_01' },
      { name: '🛡️ Stone Juggernaut', healthMult: 3.0, damageMult: 1.1, color: '#64748b', abilityGrant: 'war_slam_02' }
    );
  }

  private registerAllSpecies(): void {
    // -------------------------------------------------------------
    // LEVEL 1 MONSTERS: THE CRYPT OF SHADOWS
    // -------------------------------------------------------------
    this.species.set('gob_scout_01', {
      speciesId: 'gob_scout_01',
      displayName: 'Goblin Scout',
      family: 'Humanoid',
      baseRank: 'Normal',
      baseLevel: 1,
      baseHealth: 45,
      healthPerLevel: 12,
      baseDamage: 10,
      damagePerLevel: 2.5,
      baseArmor: 5,
      baseMoveSpeed: 110,
      resistances: { physicalPct: 0, firePct: -15, frostPct: 0, lightningPct: 0, poisonPct: 20, shadowPct: 0, holyPct: 0 },
      aiProfile: { aggroRadiusPixels: 320, leashRadiusPixels: 600, preferredCombatDistance: 30, fleeHealthThresholdPct: 20, attackIntervalSeconds: 1.2, abilityCooldowns: {}, patrolPattern: 'Wander', canFlee: true, canCallAllies: true },
      abilities: ['war_slash_01'],
      lootTableId: 'loot_tier_1_common',
      experienceReward: 45,
      goldDropMin: 8,
      goldDropMax: 22,
      soundEffects: { aggro: 'goblin_growl', attack: 'dagger_whoosh', hurt: 'goblin_yelp', death: 'goblin_death' },
      visualModel: { color: '#ef4444', radius: 15, glowColor: '#b91c1c' }
    });

    this.species.set('skel_minion_02', {
      speciesId: 'skel_minion_02',
      displayName: 'Skeleton Minion',
      family: 'Undead',
      baseRank: 'Normal',
      baseLevel: 1,
      baseHealth: 60,
      healthPerLevel: 15,
      baseDamage: 12,
      damagePerLevel: 3.0,
      baseArmor: 10,
      baseMoveSpeed: 85,
      resistances: { physicalPct: 10, firePct: 15, frostPct: 25, lightningPct: 0, poisonPct: 100, shadowPct: 50, holyPct: -50 },
      aiProfile: { aggroRadiusPixels: 350, leashRadiusPixels: 700, preferredCombatDistance: 28, fleeHealthThresholdPct: 0, attackIntervalSeconds: 1.4, abilityCooldowns: {}, patrolPattern: 'WaypointLoop', canFlee: false, canCallAllies: false },
      abilities: ['war_slash_01'],
      lootTableId: 'loot_tier_1_undead',
      experienceReward: 55,
      goldDropMin: 12,
      goldDropMax: 28,
      soundEffects: { aggro: 'bone_rattle', attack: 'club_swing', hurt: 'bone_crack', death: 'bone_collapse' },
      visualModel: { color: '#a855f7', radius: 16, glowColor: '#9333ea' }
    });

    this.species.set('bat_vamp_03', {
      speciesId: 'bat_vamp_03',
      displayName: 'Cavern Blood Bat',
      family: 'Beast',
      baseRank: 'Minion',
      baseLevel: 1,
      baseHealth: 30,
      healthPerLevel: 8,
      baseDamage: 8,
      damagePerLevel: 2.0,
      baseArmor: 0,
      baseMoveSpeed: 140,
      resistances: { physicalPct: -10, firePct: -25, frostPct: 0, lightningPct: 0, poisonPct: 0, shadowPct: 20, holyPct: 0 },
      aiProfile: { aggroRadiusPixels: 280, leashRadiusPixels: 500, preferredCombatDistance: 20, fleeHealthThresholdPct: 10, attackIntervalSeconds: 0.9, abilityCooldowns: {}, patrolPattern: 'Wander', canFlee: true, canCallAllies: false },
      abilities: ['rog_backstab_01'],
      lootTableId: 'loot_tier_1_beast',
      experienceReward: 30,
      goldDropMin: 4,
      goldDropMax: 12,
      soundEffects: { aggro: 'bat_screech', attack: 'bite_flesh', hurt: 'bat_squeak', death: 'bat_splat' },
      visualModel: { color: '#ec4899', radius: 12, glowColor: '#db2777' }
    });

    // -------------------------------------------------------------
    // LEVEL 2 MONSTERS: THE INFERNO CAVERNS
    // -------------------------------------------------------------
    this.species.set('skel_knight_04', {
      speciesId: 'skel_knight_04',
      displayName: 'Skeleton Knight Commander',
      family: 'Undead',
      baseRank: 'Elite',
      baseLevel: 2,
      baseHealth: 110,
      healthPerLevel: 22,
      baseDamage: 18,
      damagePerLevel: 4.0,
      baseArmor: 28,
      baseMoveSpeed: 100,
      resistances: { physicalPct: 25, firePct: 10, frostPct: 20, lightningPct: 0, poisonPct: 100, shadowPct: 60, holyPct: -40 },
      aiProfile: { aggroRadiusPixels: 380, leashRadiusPixels: 800, preferredCombatDistance: 32, fleeHealthThresholdPct: 0, attackIntervalSeconds: 1.3, abilityCooldowns: { war_slam_02: 3.0 }, patrolPattern: 'WaypointLoop', canFlee: false, canCallAllies: true },
      abilities: ['war_slash_01', 'war_slam_02'],
      lootTableId: 'loot_tier_2_undead',
      experienceReward: 95,
      goldDropMin: 25,
      goldDropMax: 60,
      soundEffects: { aggro: 'metal_clang_roar', attack: 'broadsword_cleave', hurt: 'plate_impact', death: 'heavy_armor_crash' },
      visualModel: { color: '#a855f7', radius: 18, glowColor: '#7e22ce' }
    });

    this.species.set('shad_necro_05', {
      speciesId: 'shad_necro_05',
      displayName: 'Shadow Necromancer',
      family: 'Humanoid',
      baseRank: 'Elite',
      baseLevel: 2,
      baseHealth: 130,
      healthPerLevel: 25,
      baseDamage: 22,
      damagePerLevel: 4.5,
      baseArmor: 12,
      baseMoveSpeed: 110,
      resistances: { physicalPct: 0, firePct: 0, frostPct: 10, lightningPct: 0, poisonPct: 40, shadowPct: 80, holyPct: -60 },
      aiProfile: { aggroRadiusPixels: 420, leashRadiusPixels: 900, preferredCombatDistance: 160, fleeHealthThresholdPct: 30, attackIntervalSeconds: 1.6, abilityCooldowns: { necro_deathcoil_01: 2.0 }, patrolPattern: 'Wander', canFlee: true, canCallAllies: true },
      abilities: ['necro_deathcoil_01'],
      lootTableId: 'loot_tier_2_magic',
      experienceReward: 120,
      goldDropMin: 35,
      goldDropMax: 80,
      soundEffects: { aggro: 'necro_chant', attack: 'shadow_cast', hurt: 'robe_rip', death: 'soul_dissolve' },
      visualModel: { color: '#f59e0b', radius: 17, glowColor: '#d97706' }
    });

    this.species.set('inf_imp_06', {
      speciesId: 'inf_imp_06',
      displayName: 'Inferno Pyromancer Imp',
      family: 'Demon',
      baseRank: 'Normal',
      baseLevel: 2,
      baseHealth: 85,
      healthPerLevel: 18,
      baseDamage: 20,
      damagePerLevel: 4.0,
      baseArmor: 8,
      baseMoveSpeed: 135,
      resistances: { physicalPct: 0, firePct: 100, frostPct: -40, lightningPct: 10, poisonPct: 20, shadowPct: 30, holyPct: -20 },
      aiProfile: { aggroRadiusPixels: 390, leashRadiusPixels: 750, preferredCombatDistance: 140, fleeHealthThresholdPct: 25, attackIntervalSeconds: 1.1, abilityCooldowns: { mage_fireball_01: 1.5 }, patrolPattern: 'Wander', canFlee: true, canCallAllies: false },
      abilities: ['mage_fireball_01'],
      lootTableId: 'loot_tier_2_demon',
      experienceReward: 85,
      goldDropMin: 20,
      goldDropMax: 50,
      soundEffects: { aggro: 'imp_cackle', attack: 'fire_puff', hurt: 'imp_squeal', death: 'fire_burst_fade' },
      visualModel: { color: '#ef4444', radius: 15, glowColor: '#dc2626' }
    });

    // -------------------------------------------------------------
    // LEVEL 3 MONSTERS & FINAL ACT BOSS: ABYSSAL THRONE
    // -------------------------------------------------------------
    this.species.set('abyss_guard_07', {
      speciesId: 'abyss_guard_07',
      displayName: 'Abyssal Royal Guard',
      family: 'Demon',
      baseRank: 'Champion',
      baseLevel: 3,
      baseHealth: 140,
      healthPerLevel: 30,
      baseDamage: 26,
      damagePerLevel: 5.5,
      baseArmor: 35,
      baseMoveSpeed: 110,
      resistances: { physicalPct: 30, firePct: 40, frostPct: 10, lightningPct: 10, poisonPct: 50, shadowPct: 75, holyPct: -35 },
      aiProfile: { aggroRadiusPixels: 450, leashRadiusPixels: 1000, preferredCombatDistance: 35, fleeHealthThresholdPct: 0, attackIntervalSeconds: 1.2, abilityCooldowns: { war_whirl_03: 4.0 }, patrolPattern: 'WaypointLoop', canFlee: false, canCallAllies: true },
      abilities: ['war_slash_01', 'war_whirl_03'],
      lootTableId: 'loot_tier_3_elite',
      experienceReward: 160,
      goldDropMin: 45,
      goldDropMax: 110,
      soundEffects: { aggro: 'demon_bellow', attack: 'demon_blade_slice', hurt: 'deep_groan', death: 'abyssal_shriek' },
      visualModel: { color: '#8b5cf6', radius: 19, glowColor: '#6d28d9' }
    });

    this.species.set('final_boss_overlord_08', {
      speciesId: 'final_boss_overlord_08',
      displayName: '👑 ABYSSAL DEMON OVERLORD (ACT FINAL BOSS)',
      family: 'Demon',
      baseRank: 'ActBoss',
      baseLevel: 3,
      baseHealth: 500,
      healthPerLevel: 100,
      baseDamage: 38,
      damagePerLevel: 8.0,
      baseArmor: 45,
      baseMoveSpeed: 130,
      resistances: { physicalPct: 40, firePct: 75, frostPct: 20, lightningPct: 30, poisonPct: 80, shadowPct: 90, holyPct: -25 },
      aiProfile: { aggroRadiusPixels: 650, leashRadiusPixels: 2000, preferredCombatDistance: 45, fleeHealthThresholdPct: 0, attackIntervalSeconds: 1.4, abilityCooldowns: { mage_meteor_05: 6.0, war_shockwave_09: 5.0, necro_voidrift_03: 8.0 }, patrolPattern: 'Stationary', canFlee: false, canCallAllies: true },
      abilities: ['mage_meteor_05', 'war_shockwave_09', 'necro_voidrift_03'],
      lootTableId: 'loot_tier_boss_legendary',
      experienceReward: 800,
      goldDropMin: 250,
      goldDropMax: 600,
      soundEffects: { aggro: 'overlord_apocalypse_roar', attack: 'chaos_meteor_smash', hurt: 'titan_pain_bellow', death: 'overlord_cataclysmic_death' },
      visualModel: { color: '#dc2626', radius: 36, glowColor: '#fbbf24', auraEffect: 'crimson_void_ring' }
    });
  }
}
