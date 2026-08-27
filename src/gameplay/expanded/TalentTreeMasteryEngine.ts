/**
 * Omniquest: Realm of Shadows - Talent Tree & Class Mastery Matrix
 * 3-branch skill specialization trees for Warrior, Mage, Rogue, Paladin, Necromancer.
 */

export interface TalentNode {
  id: string;
  name: string;
  icon: string;
  tier: 1 | 2 | 3 | 4 | 5;
  maxRank: number;
  currentRank: number;
  requiredTalentPoints: number;
  prerequisiteTalentId?: string;
  description: string;
  statBonusesPerRank: {
    attackPowerBonusPct?: number;
    spellPowerBonusPct?: number;
    critChanceBonusPct?: number;
    critDamageBonusPct?: number;
    armorBonusPct?: number;
    healthBonusPct?: number;
    resourceRegenBonusPct?: number;
    cooldownReductionPct?: number;
    moveSpeedBonusPct?: number;
  };
}

export interface ClassTalentTree {
  className: string;
  branchName: string;
  description: string;
  nodes: TalentNode[];
}

export class TalentTreeMasteryEngine {
  private static instance: TalentTreeMasteryEngine;
  private talentTrees: Map<string, ClassTalentTree> = new Map();
  private availableTalentPoints: number = 0;
  private spentTalentPoints: number = 0;

  private constructor() {
    this.registerWarriorTrees();
    this.registerMageTrees();
    this.registerRogueTrees();
  }

  public static getInstance(): TalentTreeMasteryEngine {
    if (!TalentTreeMasteryEngine.instance) {
      TalentTreeMasteryEngine.instance = new TalentTreeMasteryEngine();
    }
    return TalentTreeMasteryEngine.instance;
  }

  public getTalentTree(treeId: string): ClassTalentTree | undefined {
    return this.talentTrees.get(treeId);
  }

  public allocateTalentPoint(treeId: string, talentId: string): { success: boolean; message: string } {
    if (this.availableTalentPoints <= 0) {
      return { success: false, message: 'No talent points available.' };
    }

    const tree = this.talentTrees.get(treeId);
    if (!tree) return { success: false, message: 'Talent tree not found.' };

    const node = tree.nodes.find(n => n.id === talentId);
    if (!node) return { success: false, message: 'Talent node not found.' };

    if (node.currentRank >= node.maxRank) {
      return { success: false, message: 'Talent is already at maximum rank.' };
    }

    if (node.prerequisiteTalentId) {
      const prereq = tree.nodes.find(n => n.id === node.prerequisiteTalentId);
      if (!prereq || prereq.currentRank < prereq.maxRank) {
        return { success: false, message: `Requires maximum rank in ${prereq?.name || 'prerequisite talent'}.` };
      }
    }

    node.currentRank++;
    this.availableTalentPoints--;
    this.spentTalentPoints++;

    return {
      success: true,
      message: `Allocated point to ${node.name} (Rank ${node.currentRank}/${node.maxRank})`
    };
  }

  public awardTalentPoint(): void {
    this.availableTalentPoints++;
  }

  public getAvailablePoints(): number {
    return this.availableTalentPoints;
  }

  private registerWarriorTrees(): void {
    this.talentTrees.set('warrior_berserker', {
      className: 'Warrior',
      branchName: 'Berserker Fury',
      description: 'Focuses on devastating physical strikes, critical hits, and aggressive momentum.',
      nodes: [
        {
          id: 'tal_war_fury_01',
          name: 'Cruelty of Battle',
          icon: '⚔️',
          tier: 1,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 0,
          description: 'Increases critical strike chance by 2% per rank.',
          statBonusesPerRank: { critChanceBonusPct: 2 }
        },
        {
          id: 'tal_war_fury_02',
          name: 'Heavy Impact',
          icon: '💥',
          tier: 2,
          maxRank: 3,
          currentRank: 0,
          requiredTalentPoints: 5,
          prerequisiteTalentId: 'tal_war_fury_01',
          description: 'Increases critical strike multiplier by 15% per rank.',
          statBonusesPerRank: { critDamageBonusPct: 15 }
        },
        {
          id: 'tal_war_fury_03',
          name: 'Titan Blood',
          icon: '🩸',
          tier: 3,
          maxRank: 1,
          currentRank: 0,
          requiredTalentPoints: 10,
          prerequisiteTalentId: 'tal_war_fury_02',
          description: 'Killing an enemy grants 30% bonus movement speed and 20% attack power for 5 seconds.',
          statBonusesPerRank: { attackPowerBonusPct: 20, moveSpeedBonusPct: 30 }
        }
      ]
    });

    this.talentTrees.set('warrior_juggernaut', {
      className: 'Warrior',
      branchName: 'Iron Juggernaut',
      description: 'Focuses on maximum damage reduction, shield blocks, and unbreakable resolve.',
      nodes: [
        {
          id: 'tal_war_jug_01',
          name: 'Thickened Plate',
          icon: '🛡️',
          tier: 1,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 0,
          description: 'Increases total armor rating by 5% per rank.',
          statBonusesPerRank: { armorBonusPct: 5 }
        },
        {
          id: 'tal_war_jug_02',
          name: 'Vitality Core',
          icon: '❤️',
          tier: 2,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 5,
          prerequisiteTalentId: 'tal_war_jug_01',
          description: 'Increases maximum health pool by 8% per rank.',
          statBonusesPerRank: { healthBonusPct: 8 }
        }
      ]
    });
  }

  private registerMageTrees(): void {
    this.talentTrees.set('mage_pyromancy', {
      className: 'Mage',
      branchName: 'Solar Pyromancy',
      description: 'Harnesses raw thermonuclear fire to incinerate enemy hordes with massive burn procs.',
      nodes: [
        {
          id: 'tal_mage_pyro_01',
          name: 'Ignited Sparks',
          icon: '🔥',
          tier: 1,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 0,
          description: 'Increases Fire spell damage by 4% per rank.',
          statBonusesPerRank: { spellPowerBonusPct: 4 }
        },
        {
          id: 'tal_mage_pyro_02',
          name: 'Combustion Wave',
          icon: '🌟',
          tier: 2,
          maxRank: 3,
          currentRank: 0,
          requiredTalentPoints: 5,
          prerequisiteTalentId: 'tal_mage_pyro_01',
          description: 'Meteor strike cooldown reduced by 2.0s per rank.',
          statBonusesPerRank: { cooldownReductionPct: 10 }
        }
      ]
    });
  }

  private registerRogueTrees(): void {
    this.talentTrees.set('rogue_shadowcraft', {
      className: 'Rogue',
      branchName: 'Shadow Assassin',
      description: 'Mastery over lethal daggers, stealth ambushes, and deadly poisons.',
      nodes: [
        {
          id: 'tal_rogue_shad_01',
          name: 'Fleetfoot Agility',
          icon: '👟',
          tier: 1,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 0,
          description: 'Increases movement speed by 4% per rank.',
          statBonusesPerRank: { moveSpeedBonusPct: 4 }
        },
        {
          id: 'tal_rogue_shad_02',
          name: 'Lethal Precision',
          icon: '🎯',
          tier: 2,
          maxRank: 5,
          currentRank: 0,
          requiredTalentPoints: 5,
          prerequisiteTalentId: 'tal_rogue_shad_01',
          description: 'Increases critical strike chance by 3% per rank.',
          statBonusesPerRank: { critChanceBonusPct: 3 }
        }
      ]
    });
  }
}
