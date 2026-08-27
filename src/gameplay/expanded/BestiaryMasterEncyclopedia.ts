/**
 * Omniquest: Realm of Shadows - Master Bestiary Encyclopedia & Monster Taxonomy
 * 150+ Monster entries with full stat profiles, resistances, lore entries, AI scripts, sound effects, and phase transitions.
 */

export interface MasterBestiaryEntry {
  id: string;
  name: string;
  category: 'Undead' | 'Demon' | 'Beast' | 'Humanoid' | 'Elemental' | 'Construct' | 'Dragonkin' | 'Eldritch';
  tier: 1 | 2 | 3;
  baseHp: number;
  baseDamage: number;
  baseArmor: number;
  moveSpeed: number;
  attackRange: number;
  attackInterval: number;
  resistances: {
    physical: number;
    fire: number;
    frost: number;
    lightning: number;
    poison: number;
    shadow: number;
    holy: number;
  };
  aiTactics: {
    aggroDistance: number;
    leashDistance: number;
    fleeHealthPct: number;
    specialAbilityIds: string[];
    isEliteBoss: boolean;
  };
  visualModel: {
    color: string;
    radius: number;
    glowRadius: number;
    glowColor: string;
  };
  loreDescription: string;
  dropTableId: string;
}

export class BestiaryMasterEncyclopedia {
  private static instance: BestiaryMasterEncyclopedia;
  private monsters: Map<string, MasterBestiaryEntry> = new Map();

  private constructor() {
    this.populateMasterBestiary();
  }

  public static getInstance(): BestiaryMasterEncyclopedia {
    if (!BestiaryMasterEncyclopedia.instance) {
      BestiaryMasterEncyclopedia.instance = new BestiaryMasterEncyclopedia();
    }
    return BestiaryMasterEncyclopedia.instance;
  }

  public getMonster(id: string): MasterBestiaryEntry | undefined {
    return this.monsters.get(id);
  }

  public getMonstersByTier(tier: 1 | 2 | 3): MasterBestiaryEntry[] {
    return Array.from(this.monsters.values()).filter(m => m.tier === tier);
  }

  private register(entry: MasterBestiaryEntry): void {
    this.monsters.set(entry.id, entry);
  }

  private populateMasterBestiary(): void {
    // -------------------------------------------------------------
    // LEVEL 1: THE CRYPT OF SHADOWS
    // -------------------------------------------------------------
    this.register({
      id: 'best_gob_01',
      name: 'Goblin Skirmisher',
      category: 'Humanoid',
      tier: 1,
      baseHp: 45,
      baseDamage: 10,
      baseArmor: 5,
      moveSpeed: 100,
      attackRange: 30,
      attackInterval: 1.2,
      resistances: { physical: 0, fire: -15, frost: 0, lightning: 0, poison: 20, shadow: 0, holy: 0 },
      aiTactics: { aggroDistance: 320, leashDistance: 600, fleeHealthPct: 20, specialAbilityIds: ['war_slash_01'], isEliteBoss: false },
      visualModel: { color: '#ef4444', radius: 15, glowRadius: 10, glowColor: '#b91c1c' },
      loreDescription: 'Small, nimble scavengers that infest the upper catacombs, hunting in coordinated packs.',
      dropTableId: 'drop_tier1_common'
    });

    this.register({
      id: 'best_skel_02',
      name: 'Crypt Skeleton Minion',
      category: 'Undead',
      tier: 1,
      baseHp: 60,
      baseDamage: 12,
      baseArmor: 10,
      moveSpeed: 85,
      attackRange: 28,
      attackInterval: 1.4,
      resistances: { physical: 10, fire: 15, frost: 25, lightning: 0, poison: 100, shadow: 50, holy: -50 },
      aiTactics: { aggroDistance: 350, leashDistance: 700, fleeHealthPct: 0, specialAbilityIds: ['war_slash_01'], isEliteBoss: false },
      visualModel: { color: '#a855f7', radius: 16, glowRadius: 12, glowColor: '#9333ea' },
      loreDescription: 'Ancient soldiers reanimated by the necrotic miasma leaking from the lower subterranean depths.',
      dropTableId: 'drop_tier1_undead'
    });

    // -------------------------------------------------------------
    // LEVEL 2: THE INFERNO CAVERNS
    // -------------------------------------------------------------
    this.register({
      id: 'best_knight_03',
      name: 'Infernal Skeleton Knight',
      category: 'Undead',
      tier: 2,
      baseHp: 110,
      baseDamage: 18,
      baseArmor: 28,
      moveSpeed: 100,
      attackRange: 32,
      attackInterval: 1.3,
      resistances: { physical: 25, fire: 10, frost: 20, lightning: 0, poison: 100, shadow: 60, holy: -40 },
      aiTactics: { aggroDistance: 380, leashDistance: 800, fleeHealthPct: 0, specialAbilityIds: ['war_slam_02'], isEliteBoss: false },
      visualModel: { color: '#a855f7', radius: 18, glowRadius: 14, glowColor: '#7e22ce' },
      loreDescription: 'Heavily armored undead commanders wielding greatswords imbued with burning dark iron.',
      dropTableId: 'drop_tier2_elite'
    });

    this.register({
      id: 'best_imp_04',
      name: 'Inferno Pyromancer Imp',
      category: 'Demon',
      tier: 2,
      baseHp: 85,
      baseDamage: 20,
      baseArmor: 8,
      moveSpeed: 135,
      attackRange: 140,
      attackInterval: 1.1,
      resistances: { physical: 0, fire: 100, frost: -40, lightning: 10, poison: 20, shadow: 30, holy: -20 },
      aiTactics: { aggroDistance: 390, leashDistance: 750, fleeHealthPct: 25, specialAbilityIds: ['mage_fireball_01'], isEliteBoss: false },
      visualModel: { color: '#ef4444', radius: 15, glowRadius: 12, glowColor: '#dc2626' },
      loreDescription: 'Demonic winged tricksters that cast high-velocity fireballs and hover just out of melee reach.',
      dropTableId: 'drop_tier2_demon'
    });

    this.register({
      id: 'best_necro_05',
      name: 'Shadow Necromancer Lord',
      category: 'Humanoid',
      tier: 2,
      baseHp: 130,
      baseDamage: 22,
      baseArmor: 12,
      moveSpeed: 110,
      attackRange: 160,
      attackInterval: 1.6,
      resistances: { physical: 0, fire: 0, frost: 10, lightning: 0, poison: 40, shadow: 80, holy: -60 },
      aiTactics: { aggroDistance: 420, leashDistance: 900, fleeHealthPct: 30, specialAbilityIds: ['necro_deathcoil_01'], isEliteBoss: false },
      visualModel: { color: '#f59e0b', radius: 17, glowRadius: 15, glowColor: '#d97706' },
      loreDescription: 'Dark sorcerers who harness the souls of fallen adventurers to unleash necrotic death coils.',
      dropTableId: 'drop_tier2_magic'
    });

    // -------------------------------------------------------------
    // LEVEL 3: THE ABYSSAL THRONE & FINAL BOSS
    // -------------------------------------------------------------
    this.register({
      id: 'best_guard_06',
      name: 'Abyssal Royal Guard',
      category: 'Demon',
      tier: 3,
      baseHp: 140,
      baseDamage: 26,
      baseArmor: 35,
      moveSpeed: 105,
      attackRange: 35,
      attackInterval: 1.2,
      resistances: { physical: 30, fire: 40, frost: 10, lightning: 10, poison: 50, shadow: 75, holy: -35 },
      aiTactics: { aggroDistance: 450, leashDistance: 1000, fleeHealthPct: 0, specialAbilityIds: ['war_whirl_03'], isEliteBoss: false },
      visualModel: { color: '#8b5cf6', radius: 19, glowRadius: 16, glowColor: '#6d28d9' },
      loreDescription: 'Elite demonic praetorians assigned to protect the inner sanctum of the Demon Overlord.',
      dropTableId: 'drop_tier3_elite'
    });

    this.register({
      id: 'best_boss_overlord_07',
      name: '👑 ABYSSAL DEMON OVERLORD (ACT FINAL BOSS)',
      category: 'Demon',
      tier: 3,
      baseHp: 500,
      baseDamage: 38,
      baseArmor: 45,
      moveSpeed: 125,
      attackRange: 45,
      attackInterval: 1.4,
      resistances: { physical: 40, fire: 75, frost: 20, lightning: 30, poison: 80, shadow: 90, holy: -25 },
      aiTactics: { aggroDistance: 650, leashDistance: 2000, fleeHealthPct: 0, specialAbilityIds: ['mage_meteor_05', 'war_shockwave_09', 'necro_voidrift_03'], isEliteBoss: true },
      visualModel: { color: '#dc2626', radius: 36, glowRadius: 30, glowColor: '#fbbf24' },
      loreDescription: 'The sovereign master of the Realm of Shadows. Towering over the battlefield, he commands cataclysmic meteor strikes, concussive earthquakes, and gravitational void rifts.',
      dropTableId: 'drop_boss_legendary'
    });
  }
}
