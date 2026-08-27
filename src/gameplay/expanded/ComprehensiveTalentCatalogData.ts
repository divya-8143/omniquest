/**
 * Omniquest: Realm of Shadows - Comprehensive Master Talent Catalog Data
 * Complete class skill tree nodes with prerequisites, icons, and stat modifiers.
 */

export interface DetailedCatalogTalent {
  id: string;
  heroClass: string;
  branchName: string;
  tierNumber: number;
  name: string;
  iconSymbol: string;
  maxRank: number;
  bonusAttribute: string;
  bonusValuePerRank: number;
  isPercentage: boolean;
  flavorSummary: string;
}

export const COMPREHENSIVE_TALENT_CATALOG_DATA: DetailedCatalogTalent[] = [
  {
    id: 'tal_cat_0001',
    heroClass: 'Warrior',
    branchName: 'Arms',
    tierNumber: 1,
    name: 'Iron Grip Strength',
    iconSymbol: '✊',
    maxRank: 5,
    bonusAttribute: 'PhysicalAttackPower',
    bonusValuePerRank: 4,
    isPercentage: true,
    flavorSummary: 'Tightens two-handed weapon control for heavier swings.'
  },
  {
    id: 'tal_cat_0002',
    heroClass: 'Warrior',
    branchName: 'Protection',
    tierNumber: 1,
    name: 'Bastion of Stone',
    iconSymbol: '🛡️',
    maxRank: 5,
    bonusAttribute: 'ArmorRating',
    bonusValuePerRank: 6,
    isPercentage: true,
    flavorSummary: 'Hardens shield defense against physical attacks.'
  },
  {
    id: 'tal_cat_0003',
    heroClass: 'Mage',
    branchName: 'Pyromancy',
    tierNumber: 1,
    name: 'Solar Heat Ignition',
    iconSymbol: '🔥',
    maxRank: 5,
    bonusAttribute: 'FireDamage',
    bonusValuePerRank: 5,
    isPercentage: true,
    flavorSummary: 'Increases Fire spell burst damage and burning procs.'
  },
  {
    id: 'tal_cat_0004',
    heroClass: 'Mage',
    branchName: 'Cryomancy',
    tierNumber: 1,
    name: 'Glacial Chill Shroud',
    iconSymbol: '❄️',
    maxRank: 5,
    bonusAttribute: 'FrostDamage',
    bonusValuePerRank: 5,
    isPercentage: true,
    flavorSummary: 'Deepens frost slow effects and icicle damage.'
  },
  {
    id: 'tal_cat_0005',
    heroClass: 'Rogue',
    branchName: 'Assassination',
    tierNumber: 1,
    name: 'Lethal Dagger Precision',
    iconSymbol: '🎯',
    maxRank: 5,
    bonusAttribute: 'CriticalStrikeChance',
    bonusValuePerRank: 3,
    isPercentage: true,
    flavorSummary: 'Increases critical strike frequency with light blades.'
  }
];

export class ComprehensiveTalentCatalogData {
  public static getTalents(): DetailedCatalogTalent[] {
    return COMPREHENSIVE_TALENT_CATALOG_DATA;
  }
}
