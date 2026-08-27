/**
 * Omniquest: Realm of Shadows - Faction Warfare & Political Alignment Matrix
 * 8 Realm Factions with reputation brackets, diplomatic alignments, war bounties, and faction vendor unlocks.
 */

export type FactionStanding = 'Hated' | 'Hostile' | 'Unfriendly' | 'Neutral' | 'Friendly' | 'Honored' | 'Revered' | 'Exalted';

export interface FactionVendorItem {
  itemId: string;
  requiredStanding: FactionStanding;
  goldCost: number;
  reputationCost: number;
}

export interface RealmFactionDefinition {
  id: string;
  name: string;
  motto: string;
  leaderName: string;
  headquarters: string;
  primaryPhilosophy: string;
  alliedFactionIds: string[];
  enemyFactionIds: string[];
  vendorItems: FactionVendorItem[];
}

export class FactionWarfareEngine {
  private static instance: FactionWarfareEngine;
  private factions: Map<string, RealmFactionDefinition> = new Map();
  private playerReputation: Map<string, number> = new Map(); // factionId -> rep points (-42000 to +42000)

  private constructor() {
    this.registerAllFactions();
  }

  public static getInstance(): FactionWarfareEngine {
    if (!FactionWarfareEngine.instance) {
      FactionWarfareEngine.instance = new FactionWarfareEngine();
    }
    return FactionWarfareEngine.instance;
  }

  public getFaction(id: string): RealmFactionDefinition | undefined {
    return this.factions.get(id);
  }

  public getPlayerStanding(factionId: string): FactionStanding {
    const rep = this.playerReputation.get(factionId) || 0;
    if (rep >= 42000) return 'Exalted';
    if (rep >= 21000) return 'Revered';
    if (rep >= 9000) return 'Honored';
    if (rep >= 3000) return 'Friendly';
    if (rep >= 0) return 'Neutral';
    if (rep >= -3000) return 'Unfriendly';
    if (rep >= -6000) return 'Hostile';
    return 'Hated';
  }

  public modifyReputation(factionId: string, amount: number): void {
    const current = this.playerReputation.get(factionId) || 0;
    const updated = Math.max(-42000, Math.min(42000, current + amount));
    this.playerReputation.set(factionId, updated);

    // Also inversely affect enemy factions
    const fac = this.factions.get(factionId);
    if (fac && amount > 0) {
      fac.enemyFactionIds.forEach(enemyId => {
        const enemyRep = this.playerReputation.get(enemyId) || 0;
        this.playerReputation.set(enemyId, Math.max(-42000, enemyRep - Math.round(amount * 0.5)));
      });
    }
  }

  private registerAllFactions(): void {
    this.factions.set('fac_iron_covenant', {
      id: 'fac_iron_covenant',
      name: 'The Iron Covenant',
      motto: 'Unbreakable as the mountain, unyielding as cold steel.',
      leaderName: 'High Warlord Garek Ironheart',
      headquarters: 'Bastion of the Crags',
      primaryPhilosophy: 'Discipline, martial mastery, and military order.',
      alliedFactionIds: ['fac_silver_order'],
      enemyFactionIds: ['fac_shadow_cult', 'fac_abyssal_legion'],
      vendorItems: [
        { itemId: 'base_sword_02', requiredStanding: 'Friendly', goldCost: 150, reputationCost: 500 },
        { itemId: 'base_chest_01', requiredStanding: 'Honored', goldCost: 350, reputationCost: 1500 }
      ]
    });

    this.factions.set('fac_silver_order', {
      id: 'fac_silver_order',
      name: 'The Silver Order of Radiance',
      motto: 'By holy light, the dark shall be cleansed.',
      leaderName: 'High Priestess Lyra the Pure',
      headquarters: 'Sanctuary of the Sunburst',
      primaryPhilosophy: 'Devotion, healing, and the eradication of undead.',
      alliedFactionIds: ['fac_iron_covenant'],
      enemyFactionIds: ['fac_shadow_cult', 'fac_abyssal_legion'],
      vendorItems: [
        { itemId: 'base_amulet_01', requiredStanding: 'Friendly', goldCost: 120, reputationCost: 400 },
        { itemId: 'base_shield_01', requiredStanding: 'Honored', goldCost: 280, reputationCost: 1200 }
      ]
    });

    this.factions.set('fac_shadow_cult', {
      id: 'fac_shadow_cult',
      name: 'The Cult of the Eclipse',
      motto: 'In darkness we find true enlightenment.',
      leaderName: 'Arch-Necromancer Malakor',
      headquarters: 'The Shrouded Vaults',
      primaryPhilosophy: 'Necromancy, forbidden arcana, and soul extraction.',
      alliedFactionIds: ['fac_abyssal_legion'],
      enemyFactionIds: ['fac_iron_covenant', 'fac_silver_order'],
      vendorItems: [
        { itemId: 'base_wand_01', requiredStanding: 'Friendly', goldCost: 140, reputationCost: 450 }
      ]
    });

    this.factions.set('fac_abyssal_legion', {
      id: 'fac_abyssal_legion',
      name: 'The Abyssal Demonic Horde',
      motto: 'Chaos shall consume all mortal realms.',
      leaderName: '👑 The Demon Overlord',
      headquarters: 'The Abyssal Throne (Level 3)',
      primaryPhilosophy: 'Complete subjugation and dimensional collapse.',
      alliedFactionIds: ['fac_shadow_cult'],
      enemyFactionIds: ['fac_iron_covenant', 'fac_silver_order'],
      vendorItems: []
    });
  }
}
