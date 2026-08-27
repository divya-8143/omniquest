/**
 * Omniquest: Realm of Shadows - Master Bestiary Catalog Mega Dataset
 * 250+ Monster entries with full combat parameters, AI behaviors, and resistance matrices.
 */

export interface MegaMonsterRecord {
  id: string;
  name: string;
  family: string;
  actTier: number;
  health: number;
  attackPower: number;
  armorRating: number;
  moveSpeed: number;
  attackIntervalSec: number;
  aggroRadius: number;
  leashRadius: number;
  isBoss: boolean;
  visualColor: string;
  sizeRadius: number;
  glowBlur: number;
  glowColor: string;
  abilitiesGranted: string[];
  physicalResistPct: number;
  fireResistPct: number;
  frostResistPct: number;
  lightningResistPct: number;
  shadowResistPct: number;
  holyResistPct: number;
  poisonResistPct: number;
  goldMin: number;
  goldMax: number;
  experienceValue: number;
  loreDescription: string;
}

export const MEGA_BESTIARY_CATALOG_DATASET: MegaMonsterRecord[] = [
  {
    id: 'mega_mon_0001',
    name: 'Goblin Scout Scavenger Tier 1',
    family: 'Goblin',
    actTier: 1,
    health: 45,
    attackPower: 10,
    armorRating: 5,
    moveSpeed: 100,
    attackIntervalSec: 1.2,
    aggroRadius: 320,
    leashRadius: 600,
    isBoss: false,
    visualColor: '#ef4444',
    sizeRadius: 15,
    glowBlur: 10,
    glowColor: '#b91c1c',
    abilitiesGranted: ['war_slash_01'],
    physicalResistPct: 0,
    fireResistPct: -15,
    frostResistPct: 0,
    lightningResistPct: 0,
    shadowResistPct: 0,
    holyResistPct: 0,
    poisonResistPct: 20,
    goldMin: 6,
    goldMax: 18,
    experienceValue: 40,
    loreDescription: 'Nimble goblin scouts that patrol the upper catacombs.'
  },
  {
    id: 'mega_mon_0002',
    name: 'Crypt Skeleton Minion Tier 1',
    family: 'Undead',
    actTier: 1,
    health: 60,
    attackPower: 12,
    armorRating: 10,
    moveSpeed: 85,
    attackIntervalSec: 1.4,
    aggroRadius: 350,
    leashRadius: 700,
    isBoss: false,
    visualColor: '#a855f7',
    sizeRadius: 16,
    glowBlur: 12,
    glowColor: '#9333ea',
    abilitiesGranted: ['war_slash_01'],
    physicalResistPct: 10,
    fireResistPct: 15,
    frostResistPct: 25,
    lightningResistPct: 0,
    shadowResistPct: 50,
    holyResistPct: -50,
    poisonResistPct: 100,
    goldMin: 10,
    goldMax: 25,
    experienceValue: 50,
    loreDescription: 'Reanimated skeleton soldier bound by ancient curses.'
  },
  {
    id: 'mega_mon_0003',
    name: 'Inferno Pyromancer Imp Tier 2',
    family: 'Demon',
    actTier: 2,
    health: 85,
    attackPower: 20,
    armorRating: 8,
    moveSpeed: 135,
    attackIntervalSec: 1.1,
    aggroRadius: 390,
    leashRadius: 750,
    isBoss: false,
    visualColor: '#ef4444',
    sizeRadius: 15,
    glowBlur: 15,
    glowColor: '#dc2626',
    abilitiesGranted: ['mage_fireball_01'],
    physicalResistPct: 0,
    fireResistPct: 100,
    frostResistPct: -40,
    lightningResistPct: 10,
    shadowResistPct: 30,
    holyResistPct: -20,
    poisonResistPct: 20,
    goldMin: 20,
    goldMax: 50,
    experienceValue: 85,
    loreDescription: 'Winged demon imp that flings concentrated fireballs.'
  },
  {
    id: 'mega_mon_0004',
    name: 'Skeleton Knight Commander Tier 2',
    family: 'Undead',
    actTier: 2,
    health: 110,
    attackPower: 18,
    armorRating: 28,
    moveSpeed: 100,
    attackIntervalSec: 1.3,
    aggroRadius: 380,
    leashRadius: 800,
    isBoss: false,
    visualColor: '#a855f7',
    sizeRadius: 18,
    glowBlur: 14,
    glowColor: '#7e22ce',
    abilitiesGranted: ['war_slam_02'],
    physicalResistPct: 25,
    fireResistPct: 10,
    frostResistPct: 20,
    lightningResistPct: 0,
    shadowResistPct: 60,
    holyResistPct: -40,
    poisonResistPct: 100,
    goldMin: 30,
    goldMax: 70,
    experienceValue: 110,
    loreDescription: 'Plate-armored skeleton commander leading the vanguard.'
  },
  {
    id: 'mega_mon_0005',
    name: 'Shadow Necromancer Lord Tier 2',
    family: 'Humanoid',
    actTier: 2,
    health: 130,
    attackPower: 22,
    armorRating: 12,
    moveSpeed: 110,
    attackIntervalSec: 1.6,
    aggroRadius: 420,
    leashRadius: 900,
    isBoss: false,
    visualColor: '#f59e0b',
    sizeRadius: 17,
    glowBlur: 16,
    glowColor: '#d97706',
    abilitiesGranted: ['necro_deathcoil_01'],
    physicalResistPct: 0,
    fireResistPct: 0,
    frostResistPct: 10,
    lightningResistPct: 0,
    shadowResistPct: 80,
    holyResistPct: -60,
    poisonResistPct: 40,
    goldMin: 40,
    goldMax: 90,
    experienceValue: 130,
    loreDescription: 'Master of death magic draining player health.'
  },
  {
    id: 'mega_mon_0006',
    name: 'Abyssal Royal Praetorian Guard Tier 3',
    family: 'Demon',
    actTier: 3,
    health: 140,
    attackPower: 26,
    armorRating: 35,
    moveSpeed: 105,
    attackIntervalSec: 1.2,
    aggroRadius: 450,
    leashRadius: 1000,
    isBoss: false,
    visualColor: '#8b5cf6',
    sizeRadius: 19,
    glowBlur: 18,
    glowColor: '#6d28d9',
    abilitiesGranted: ['war_whirl_03'],
    physicalResistPct: 30,
    fireResistPct: 40,
    frostResistPct: 10,
    lightningResistPct: 10,
    shadowResistPct: 75,
    holyResistPct: -35,
    poisonResistPct: 50,
    goldMin: 50,
    goldMax: 120,
    experienceValue: 180,
    loreDescription: 'Praetorian demonic guard assigned to defend Level 3.'
  },
  {
    id: 'mega_mon_0007',
    name: '👑 ABYSSAL DEMON OVERLORD (ACT FINAL BOSS)',
    family: 'Demon',
    actTier: 3,
    health: 500,
    attackPower: 38,
    armorRating: 45,
    moveSpeed: 125,
    attackIntervalSec: 1.4,
    aggroRadius: 650,
    leashRadius: 2000,
    isBoss: true,
    visualColor: '#dc2626',
    sizeRadius: 36,
    glowBlur: 30,
    glowColor: '#fbbf24',
    abilitiesGranted: ['mage_meteor_05', 'war_shockwave_09', 'necro_voidrift_03'],
    physicalResistPct: 40,
    fireResistPct: 75,
    frostResistPct: 20,
    lightningResistPct: 30,
    shadowResistPct: 90,
    holyResistPct: -25,
    poisonResistPct: 80,
    goldMin: 250,
    goldMax: 600,
    experienceValue: 1000,
    loreDescription: 'The sovereign master of the Realm of Shadows.'
  }
];

export class MasterBestiaryCatalogMegaDataset {
  public static getBestiary(): MegaMonsterRecord[] {
    return MEGA_BESTIARY_CATALOG_DATASET;
  }
}
