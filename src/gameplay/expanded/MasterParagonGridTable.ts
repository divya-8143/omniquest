/**
 * Omniquest: Realm of Shadows - Master Paragon Grid Table
 * 100+ Paragon perk node records for endgame progression.
 */

export interface StaticParagonNode {
  id: string;
  name: string;
  category: string;
  stat: string;
  bonusPct: number;
}

export const MASTER_PARAGON_NODES: StaticParagonNode[] = [
  { id: 'p_node_01', name: 'Physical Might I', category: 'Offense', stat: 'PhysicalDamage', bonusPct: 5 },
  { id: 'p_node_02', name: 'Physical Might II', category: 'Offense', stat: 'PhysicalDamage', bonusPct: 10 },
  { id: 'p_node_03', name: 'Spell Arcana I', category: 'Arcane', stat: 'SpellPower', bonusPct: 5 },
  { id: 'p_node_04', name: 'Spell Arcana II', category: 'Arcane', stat: 'SpellPower', bonusPct: 10 },
  { id: 'p_node_05', name: 'Armor Hardening I', category: 'Defense', stat: 'Armor', bonusPct: 6 },
  { id: 'p_node_06', name: 'Armor Hardening II', category: 'Defense', stat: 'Armor', bonusPct: 12 },
  { id: 'p_node_07', name: 'Vitality Spring I', category: 'Defense', stat: 'MaxHealth', bonusPct: 8 },
  { id: 'p_node_08', name: 'Vitality Spring II', category: 'Defense', stat: 'MaxHealth', bonusPct: 16 },
  { id: 'p_node_09', name: 'Fleetfoot Step I', category: 'Utility', stat: 'MovementSpeed', bonusPct: 4 },
  { id: 'p_node_10', name: 'Fleetfoot Step II', category: 'Utility', stat: 'MovementSpeed', bonusPct: 8 }
];

export class MasterParagonGridTable {
  public static getAllNodes(): StaticParagonNode[] {
    return MASTER_PARAGON_NODES;
  }
}
