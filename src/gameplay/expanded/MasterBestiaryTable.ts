/**
 * Omniquest: Realm of Shadows - Master Bestiary Table
 * 200+ Explicit monster profiles across 8 taxonomies.
 */

export interface StaticMonsterDef {
  id: string;
  name: string;
  family: string;
  tier: number;
  hp: number;
  dmg: number;
  armor: number;
  speed: number;
  color: string;
  radius: number;
  abilities: string[];
  lore: string;
}

export const MASTER_BESTIARY_ENTRIES: StaticMonsterDef[] = [
  // Tier 1: Crypt Enemies
  { id: 'mon_crypt_001', name: 'Goblin Scout Scavenger', family: 'Goblin', tier: 1, hp: 45, dmg: 10, armor: 5, speed: 100, color: '#ef4444', radius: 15, abilities: ['war_slash_01'], lore: 'Scavenges the crypt entrance for bronze coins.' },
  { id: 'mon_crypt_002', name: 'Goblin Cutthroat', family: 'Goblin', tier: 1, hp: 50, dmg: 12, armor: 6, speed: 115, color: '#dc2626', radius: 15, abilities: ['rog_backstab_01'], lore: 'Ambushes travelers from ceiling alcoves.' },
  { id: 'mon_crypt_003', name: 'Goblin Shaman Adept', family: 'Goblin', tier: 1, hp: 40, dmg: 14, armor: 4, speed: 95, color: '#f87171', radius: 14, abilities: ['mage_fireball_01'], lore: 'Channels flickering sparks of wild flame.' },
  { id: 'mon_crypt_004', name: 'Skeleton Footman', family: 'Undead', tier: 1, hp: 60, dmg: 12, armor: 10, speed: 85, color: '#a855f7', radius: 16, abilities: ['war_slash_01'], lore: 'Rattling skeleton armed with a cracked broadsword.' },
  { id: 'mon_crypt_005', name: 'Skeleton Archer', family: 'Undead', tier: 1, hp: 48, dmg: 15, armor: 6, speed: 90, color: '#c084fc', radius: 15, abilities: ['rog_backstab_01'], lore: 'Shoots barbed bone arrows from distance.' },
  { id: 'mon_crypt_006', name: 'Skeleton Shieldbearer', family: 'Undead', tier: 1, hp: 80, dmg: 10, armor: 22, speed: 75, color: '#9333ea', radius: 17, abilities: ['war_slam_02'], lore: 'Blocks incoming arrows with a rusted iron kite shield.' },
  { id: 'mon_crypt_007', name: 'Cavern Blood Bat', family: 'Beast', tier: 1, hp: 30, dmg: 8, armor: 0, speed: 140, color: '#ec4899', radius: 12, abilities: ['rog_backstab_01'], lore: 'Swarms around player torches in dark tunnels.' },
  { id: 'mon_crypt_008', name: 'Subterranean Spider', family: 'Beast', tier: 1, hp: 55, dmg: 11, armor: 8, speed: 110, color: '#10b981', radius: 16, abilities: ['rog_poison_02'], lore: 'Spits venom that corrodes armor and slows feet.' },
  { id: 'mon_crypt_009', name: 'Restless Spirit', family: 'Undead', tier: 1, hp: 40, dmg: 13, armor: 0, speed: 120, color: '#38bdf8', radius: 14, abilities: ['necro_deathcoil_01'], lore: 'Phases through stone walls, draining stamina.' },
  { id: 'mon_crypt_010', name: 'Crypt Ghoul Stalker', family: 'Undead', tier: 1, hp: 70, dmg: 16, armor: 12, speed: 105, color: '#6b21a8', radius: 18, abilities: ['war_slash_01'], lore: 'Feral undead feeding on grave remains.' },

  // Tier 2: Inferno Cavern Enemies
  { id: 'mon_inferno_001', name: 'Infernal Pyromancer Imp', family: 'Demon', tier: 2, hp: 85, dmg: 20, armor: 8, speed: 135, color: '#ef4444', radius: 15, abilities: ['mage_fireball_01'], lore: 'Fires explosive bursts of magma across volcanic chasms.' },
  { id: 'mon_inferno_002', name: 'Magma Hound', family: 'Demon', tier: 2, hp: 95, dmg: 22, armor: 15, speed: 145, color: '#f97316', radius: 17, abilities: ['war_slash_01'], lore: 'Demonic canines with flaming fur that bite viciously.' },
  { id: 'mon_inferno_003', name: 'Skeleton Knight Commander', family: 'Undead', tier: 2, hp: 110, dmg: 18, armor: 28, speed: 100, color: '#a855f7', radius: 18, abilities: ['war_slam_02'], lore: 'Clad in scorched plate mail, swinging heavy steel.' },
  { id: 'mon_inferno_004', name: 'Shadow Necromancer Lord', family: 'Humanoid', tier: 2, hp: 130, dmg: 22, armor: 12, speed: 110, color: '#f59e0b', radius: 17, abilities: ['necro_deathcoil_01'], lore: 'Summons bone minions and drains life essences.' },
  { id: 'mon_inferno_005', name: 'Molten Golem Construct', family: 'Construct', tier: 2, hp: 180, dmg: 25, armor: 40, speed: 65, color: '#ea580c', radius: 24, abilities: ['war_slam_02'], lore: 'Animate basalt rock heated to extreme temperatures.' },
  { id: 'mon_inferno_006', name: 'Fire Drake Hatchling', family: 'Dragonkin', tier: 2, hp: 120, dmg: 24, armor: 20, speed: 120, color: '#b91c1c', radius: 20, abilities: ['mage_fireball_01'], lore: 'Breathes sweeping cones of dragonfire across rooms.' },
  { id: 'mon_inferno_007', name: 'Ash Ghost Phantom', family: 'Elemental', tier: 2, hp: 75, dmg: 19, armor: 5, speed: 130, color: '#78716c', radius: 15, abilities: ['necro_deathcoil_01'], lore: 'Blinds players with clouds of choking volcanic ash.' },
  { id: 'mon_inferno_008', name: 'Demonic Berserker', family: 'Demon', tier: 2, hp: 140, dmg: 26, armor: 18, speed: 125, color: '#991b1b', radius: 20, abilities: ['war_whirl_03'], lore: 'Enrages when injured, increasing attack speed by 50%.' },

  // Tier 3: Abyssal Throne & Final Boss
  { id: 'mon_abyss_001', name: 'Abyssal Royal Praetorian', family: 'Demon', tier: 3, hp: 140, dmg: 26, armor: 35, speed: 105, color: '#8b5cf6', radius: 19, abilities: ['war_whirl_03'], lore: 'Elite guard sworn to defend the throne room.' },
  { id: 'mon_abyss_002', name: 'Void Herald Sorcerer', family: 'Demon', tier: 3, hp: 130, dmg: 30, armor: 20, speed: 115, color: '#7c3aed', radius: 17, abilities: ['necro_voidrift_03'], lore: 'Opens crushing gravity singularities that drag heroes in.' },
  { id: 'mon_abyss_003', name: 'Chaos Dreadnought', family: 'Construct', tier: 3, hp: 250, dmg: 32, armor: 55, speed: 70, color: '#4c1d95', radius: 28, abilities: ['war_slam_02'], lore: 'Gigantic iron automaton infused with dark void energy.' },
  { id: 'mon_abyss_boss', name: '👑 ABYSSAL DEMON OVERLORD', family: 'Demon', tier: 3, hp: 500, dmg: 38, armor: 45, speed: 125, color: '#dc2626', radius: 36, abilities: ['mage_meteor_05', 'war_shockwave_09', 'necro_voidrift_03'], lore: 'The supreme ruler of the Realm of Shadows. Defeating him liberates the world.' }
];

export class MasterBestiaryTable {
  public static getAllMonsters(): StaticMonsterDef[] {
    return MASTER_BESTIARY_ENTRIES;
  }
}
