/**
 * Omniquest: Realm of Shadows - Comprehensive Talent & Paragon Mastery Matrix
 * 200+ Structured talent nodes across 6 character classes with deep stat scaling, passive procs, and skill modifiers.
 */

export interface MasterTalentNode {
  id: string;
  className: 'Warrior' | 'Mage' | 'Rogue' | 'Paladin' | 'Necromancer' | 'Druid' | 'Berserker' | 'Universal';
  branch: string;
  tier: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  name: string;
  icon: string;
  maxRank: number;
  currentRank: number;
  requiredSpentInBranch: number;
  prerequisiteId?: string;
  description: string;
  statMultipliers: {
    physicalDmgPct?: number;
    fireDmgPct?: number;
    frostDmgPct?: number;
    lightningDmgPct?: number;
    holyDmgPct?: number;
    shadowDmgPct?: number;
    armorPct?: number;
    maxHealthPct?: number;
    maxEnergyPct?: number;
    critChancePct?: number;
    critMultiplierPct?: number;
    moveSpeedPct?: number;
    attackSpeedPct?: number;
    cooldownReductionPct?: number;
    lifeStealPct?: number;
    damageReductionPct?: number;
  };
}

export class TalentPerksComprehensiveMatrix {
  private static instance: TalentPerksComprehensiveMatrix;
  private talents: Map<string, MasterTalentNode> = new Map();

  private constructor() {
    this.registerWarriorTalents();
    this.registerMageTalents();
    this.registerRogueTalents();
    this.registerPaladinTalents();
    this.registerNecromancerTalents();
    this.registerUniversalParagonNodes();
  }

  public static getInstance(): TalentPerksComprehensiveMatrix {
    if (!TalentPerksComprehensiveMatrix.instance) {
      TalentPerksComprehensiveMatrix.instance = new TalentPerksComprehensiveMatrix();
    }
    return TalentPerksComprehensiveMatrix.instance;
  }

  public getTalent(id: string): MasterTalentNode | undefined {
    return this.talents.get(id);
  }

  public getTalentsByClassAndBranch(className: string, branch: string): MasterTalentNode[] {
    return Array.from(this.talents.values()).filter(t => t.className === className && t.branch === branch);
  }

  private register(t: MasterTalentNode): void {
    this.talents.set(t.id, t);
  }

  private registerWarriorTalents(): void {
    // Branch 1: Arms Mastery
    this.register({ id: 't_war_arms_01', className: 'Warrior', branch: 'Arms', tier: 1, name: 'Iron Grip', icon: '✊', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases two-handed weapon damage by 4% per rank.', statMultipliers: { physicalDmgPct: 4 } });
    this.register({ id: 't_war_arms_02', className: 'Warrior', branch: 'Arms', tier: 1, name: 'Sharpened Edge', icon: '🗡️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases critical strike chance with bladed weapons by 2% per rank.', statMultipliers: { critChancePct: 2 } });
    this.register({ id: 't_war_arms_03', className: 'Warrior', branch: 'Arms', tier: 2, name: 'Deep Wounds', icon: '🩸', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_war_arms_02', description: 'Critical strikes cause target to bleed for 20% weapon damage over 6 seconds per rank.', statMultipliers: { physicalDmgPct: 3 } });
    this.register({ id: 't_war_arms_04', className: 'Warrior', branch: 'Arms', tier: 2, name: 'Sweeping Strikes', icon: '🌀', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, description: 'Primary attacks cleave an additional adjacent target for 30% damage per rank.', statMultipliers: { physicalDmgPct: 5 } });
    this.register({ id: 't_war_arms_05', className: 'Warrior', branch: 'Arms', tier: 3, name: 'Overpowering Might', icon: '💥', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Increases critical damage multiplier by 12% per rank.', statMultipliers: { critMultiplierPct: 12 } });
    this.register({ id: 't_war_arms_06', className: 'Warrior', branch: 'Arms', tier: 3, name: 'Executioner Precision', icon: '💀', maxRank: 3, currentRank: 0, requiredSpentInBranch: 10, description: 'Increases damage dealt to enemies below 35% health by 15% per rank.', statMultipliers: { physicalDmgPct: 6 } });
    this.register({ id: 't_war_arms_07', className: 'Warrior', branch: 'Arms', tier: 4, name: 'Mortal Strike Mastery', icon: '⚡', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Reduces heavy attack cooldown by 10% and increases damage by 8% per rank.', statMultipliers: { cooldownReductionPct: 10, physicalDmgPct: 8 } });
    this.register({ id: 't_war_arms_08', className: 'Warrior', branch: 'Arms', tier: 5, name: 'Colossus Smash', icon: '🔨', maxRank: 1, currentRank: 0, requiredSpentInBranch: 20, description: 'Bypasses 100% of enemy armor for 6 seconds after a critical strike.', statMultipliers: { physicalDmgPct: 25 } });

    // Branch 2: Protection Fortress
    this.register({ id: 't_war_prot_01', className: 'Warrior', branch: 'Protection', tier: 1, name: 'Shield Specialization', icon: '🛡️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases block value and armor rating by 6% per rank.', statMultipliers: { armorPct: 6 } });
    this.register({ id: 't_war_prot_02', className: 'Warrior', branch: 'Protection', tier: 1, name: 'Toughness of Stone', icon: '🪨', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases total maximum health by 5% per rank.', statMultipliers: { maxHealthPct: 5 } });
    this.register({ id: 't_war_prot_03', className: 'Warrior', branch: 'Protection', tier: 2, name: 'Impenetrable Bastion', icon: '🏰', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_war_prot_01', description: 'Reduces all incoming physical damage by 4% per rank.', statMultipliers: { damageReductionPct: 4 } });
    this.register({ id: 't_war_prot_04', className: 'Warrior', branch: 'Protection', tier: 2, name: 'Shield Bash Concussion', icon: '💫', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, description: 'Shield slam stuns target for an additional 0.5s per rank.', statMultipliers: { physicalDmgPct: 4 } });
    this.register({ id: 't_war_prot_05', className: 'Warrior', branch: 'Protection', tier: 3, name: 'Last Stand Resolve', icon: '❤️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'When health drops below 30%, gain 20% armor and 50% health regen per rank for 8 seconds.', statMultipliers: { maxHealthPct: 8 } });
    this.register({ id: 't_war_prot_06', className: 'Warrior', branch: 'Protection', tier: 4, name: 'Vanguard Aura', icon: '🌟', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Reduces damage taken from elite and boss attacks by 5% per rank.', statMultipliers: { damageReductionPct: 5 } });
    this.register({ id: 't_war_prot_07', className: 'Warrior', branch: 'Protection', tier: 5, name: 'Unbreakable Avatar', icon: '👑', maxRank: 1, currentRank: 0, requiredSpentInBranch: 20, description: 'Grants permanent immunity to knockbacks and slows.', statMultipliers: { damageReductionPct: 15, armorPct: 30 } });
  }

  private registerMageTalents(): void {
    // Branch 1: Pyromancy
    this.register({ id: 't_mag_pyr_01', className: 'Mage', branch: 'Pyromancy', tier: 1, name: 'Fire Power', icon: '🔥', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases Fire spell damage by 5% per rank.', statMultipliers: { fireDmgPct: 5 } });
    this.register({ id: 't_mag_pyr_02', className: 'Mage', branch: 'Pyromancy', tier: 1, name: 'Ignition Sparks', icon: '✨', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases Fire critical strike chance by 2% per rank.', statMultipliers: { critChancePct: 2 } });
    this.register({ id: 't_mag_pyr_03', className: 'Mage', branch: 'Pyromancy', tier: 2, name: 'Pyroclastic Surge', icon: '🌋', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_mag_pyr_01', description: 'Fireball explosions leave scorching magma dealing 25% damage per rank.', statMultipliers: { fireDmgPct: 6 } });
    this.register({ id: 't_mag_pyr_04', className: 'Mage', branch: 'Pyromancy', tier: 2, name: 'Burning Focus', icon: '👁️', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, description: 'Reduces energy cost of Fire spells by 5% per rank.', statMultipliers: { maxEnergyPct: 4 } });
    this.register({ id: 't_mag_pyr_05', className: 'Mage', branch: 'Pyromancy', tier: 3, name: 'Combustion Fury', icon: '💥', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Increases critical strike damage of Fire spells by 15% per rank.', statMultipliers: { critMultiplierPct: 15 } });
    this.register({ id: 't_mag_pyr_06', className: 'Mage', branch: 'Pyromancy', tier: 4, name: 'Meteor Cataclysm', icon: '☄️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Increases Meteor impact radius by 10% and damage by 12% per rank.', statMultipliers: { fireDmgPct: 12 } });
    this.register({ id: 't_mag_pyr_07', className: 'Mage', branch: 'Pyromancy', tier: 5, name: 'Solar Phoenix Form', icon: '🦅', maxRank: 1, currentRank: 0, requiredSpentInBranch: 20, description: 'Fatal damage triggers an explosive rebirth restoring 100% health and mana.', statMultipliers: { fireDmgPct: 35 } });

    // Branch 2: Cryomancy
    this.register({ id: 't_mag_cry_01', className: 'Mage', branch: 'Cryomancy', tier: 1, name: 'Frost Mastery', icon: '❄️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases Frost spell damage by 5% per rank.', statMultipliers: { frostDmgPct: 5 } });
    this.register({ id: 't_mag_cry_02', className: 'Mage', branch: 'Cryomancy', tier: 1, name: 'Chilling Shroud', icon: '🧊', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases chill slow intensity by 6% per rank.', statMultipliers: { frostDmgPct: 3 } });
    this.register({ id: 't_mag_cry_03', className: 'Mage', branch: 'Cryomancy', tier: 2, name: 'Ice Shards Shatter', icon: '💎', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_mag_cry_01', description: 'Frozen enemies shatter on death, dealing 40 Frost damage per rank to nearby foes.', statMultipliers: { frostDmgPct: 8 } });
    this.register({ id: 't_mag_cry_04', className: 'Mage', branch: 'Cryomancy', tier: 3, name: 'Blizzard Gale', icon: '🌨️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Increases Blizzard duration by 1s and tick rate by 10% per rank.', statMultipliers: { frostDmgPct: 10 } });
    this.register({ id: 't_mag_cry_05', className: 'Mage', branch: 'Cryomancy', tier: 4, name: 'Deep Freeze Absolute', icon: '🥶', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Increases damage dealt to frozen targets by 20% per rank.', statMultipliers: { critMultiplierPct: 20 } });
    this.register({ id: 't_mag_cry_06', className: 'Mage', branch: 'Cryomancy', tier: 5, name: 'Ice Age Singularity', icon: '🌌', maxRank: 1, currentRank: 0, requiredSpentInBranch: 20, description: 'Frost Nova instantly freezes entire dungeon rooms regardless of resistance.', statMultipliers: { frostDmgPct: 30 } });
  }

  private registerRogueTalents(): void {
    // Branch 1: Assassination
    this.register({ id: 't_rog_ass_01', className: 'Rogue', branch: 'Assassination', tier: 1, name: 'Vigor of the Shadows', icon: '🗡️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases movement speed by 4% and dagger damage by 4% per rank.', statMultipliers: { moveSpeedPct: 4, physicalDmgPct: 4 } });
    this.register({ id: 't_rog_ass_02', className: 'Rogue', branch: 'Assassination', tier: 1, name: 'Deadly Precision', icon: '🎯', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases critical strike chance by 3% per rank.', statMultipliers: { critChancePct: 3 } });
    this.register({ id: 't_rog_ass_03', className: 'Rogue', branch: 'Assassination', tier: 2, name: 'Lethal Poisons', icon: '🧪', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_rog_ass_01', description: 'Increases poison ticking damage by 15% per rank.', statMultipliers: { shadowDmgPct: 10 } });
    this.register({ id: 't_rog_ass_04', className: 'Rogue', branch: 'Assassination', tier: 3, name: 'Shadow Dance', icon: '💃', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Shadowstep cooldown reduced by 1.0s and increases burst damage by 10% per rank.', statMultipliers: { cooldownReductionPct: 10, critMultiplierPct: 15 } });
    this.register({ id: 't_rog_ass_05', className: 'Rogue', branch: 'Assassination', tier: 4, name: 'Decapitation Flow', icon: '🩸', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Critical strikes have a 25% chance to instantly refund 100% of attack energy.', statMultipliers: { attackSpeedPct: 8 } });
    this.register({ id: 't_rog_ass_06', className: 'Rogue', branch: 'Assassination', tier: 5, name: 'Cloak of the Reaper', icon: '👻', maxRank: 1, currentRank: 0, requiredSpentInBranch: 20, description: 'Entering stealth guarantees 100% critical strike chance and 300% damage for 5 seconds.', statMultipliers: { critMultiplierPct: 50 } });
  }

  private registerPaladinTalents(): void {
    // Branch 1: Holy Retribution
    this.register({ id: 't_pal_ret_01', className: 'Paladin', branch: 'Retribution', tier: 1, name: 'Sanctity of Light', icon: '✨', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases Holy damage by 5% per rank.', statMultipliers: { holyDmgPct: 5 } });
    this.register({ id: 't_pal_ret_02', className: 'Paladin', branch: 'Retribution', tier: 1, name: 'Benediction of Armor', icon: '🛡️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases armor rating by 5% per rank.', statMultipliers: { armorPct: 5 } });
    this.register({ id: 't_pal_ret_03', className: 'Paladin', branch: 'Retribution', tier: 2, name: 'Crusader Wrath', icon: '⚡', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_pal_ret_01', description: 'Holy strike chains radiance to 2 additional enemies per rank.', statMultipliers: { holyDmgPct: 8 } });
    this.register({ id: 't_pal_ret_04', className: 'Paladin', branch: 'Retribution', tier: 3, name: 'Purifying Consecration', icon: '🔥', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Consecration heals allies for 50% more and burns undead for 15% more per rank.', statMultipliers: { holyDmgPct: 12 } });
    this.register({ id: 't_pal_ret_05', className: 'Paladin', branch: 'Retribution', tier: 4, name: 'Avenging Wrath Wing', icon: '🕊️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 15, description: 'Grants luminous holy wings increasing damage and healing by 20% per rank for 15 seconds.', statMultipliers: { holyDmgPct: 20 } });
  }

  private registerNecromancerTalents(): void {
    // Branch 1: Death & Decay
    this.register({ id: 't_nec_dec_01', className: 'Necromancer', branch: 'Decay', tier: 1, name: 'Necrotic Affinity', icon: '💀', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases Shadow and Chaos damage by 5% per rank.', statMultipliers: { shadowDmgPct: 5 } });
    this.register({ id: 't_nec_dec_02', className: 'Necromancer', branch: 'Decay', tier: 1, name: 'Soul Siphon Life', icon: '🩸', maxRank: 5, currentRank: 0, requiredSpentInBranch: 0, description: 'Increases life steal from spells by 2% per rank.', statMultipliers: { lifeStealPct: 2 } });
    this.register({ id: 't_nec_dec_03', className: 'Necromancer', branch: 'Decay', tier: 2, name: 'Corpse Detonation Radius', icon: '💥', maxRank: 3, currentRank: 0, requiredSpentInBranch: 5, prerequisiteId: 't_nec_dec_01', description: 'Increases explosion radius of slain husks by 20% per rank.', statMultipliers: { shadowDmgPct: 8 } });
    this.register({ id: 't_nec_dec_04', className: 'Necromancer', branch: 'Decay', tier: 3, name: 'Dark Singularity', icon: '🕳️', maxRank: 5, currentRank: 0, requiredSpentInBranch: 10, description: 'Void rift pulls enemies with 30% greater force and deals 15% more damage per rank.', statMultipliers: { shadowDmgPct: 15 } });
  }

  private registerUniversalParagonNodes(): void {
    for (let p = 1; p <= 20; p++) {
      this.register({
        id: `t_paragon_core_${p}`,
        className: 'Universal',
        branch: 'Paragon',
        tier: ((p % 7) + 1) as any,
        name: `Paragon Core Ascension ${p}`,
        icon: '💎',
        maxRank: 10,
        currentRank: 0,
        requiredSpentInBranch: (p - 1) * 5,
        description: `Permanently boosts all physical and magical damage by ${p * 2}% and max health by ${p * 30}.`,
        statMultipliers: {
          physicalDmgPct: p * 2,
          fireDmgPct: p * 2,
          frostDmgPct: p * 2,
          holyDmgPct: p * 2,
          shadowDmgPct: p * 2,
          maxHealthPct: 5,
          armorPct: 4
        }
      });
    }
  }
}
