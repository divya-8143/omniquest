/**
 * Omniquest: Realm of Shadows - Comprehensive Master Lore Catalog Data
 * Complete historical tomes, dialogue scripts, and dungeon archives.
 */

export interface DetailedCatalogLore {
  tomeId: string;
  volumeNumber: number;
  chapterNumber: number;
  bookTitle: string;
  authorName: string;
  historicalPeriod: string;
  textPassages: string[];
}

export const COMPREHENSIVE_LORE_CATALOG_DATA: DetailedCatalogLore[] = [
  {
    tomeId: 'tome_cat_0001',
    volumeNumber: 1,
    chapterNumber: 1,
    bookTitle: 'The Catacombs of the Forsaken',
    authorName: 'Archivist Vaelin the Blind',
    historicalPeriod: 'The Shadow Incursion',
    textPassages: [
      'In the first age before the dimensional collapse, Eldoria was a bastion of marble and sunlight.',
      'The catacombs beneath the city served as sanctified resting grounds for ancient kings and heroes.',
      'When the Abyssal Tear opened in the mantle, necrotic energy flooded the tombs, disturbing the dead.'
    ]
  },
  {
    tomeId: 'tome_cat_0002',
    volumeNumber: 2,
    chapterNumber: 1,
    bookTitle: 'The Magma Veins of Ignis',
    authorName: 'Pyromancer Kenneth of the Red Dawn',
    historicalPeriod: 'Age of Cataclysm',
    textPassages: [
      'Deep beneath the stone crypts lies the molten core of the Inferno Caverns in Level 2.',
      'Demons forged obsidian weapons in the magma lakes to prepare for the invasion of the surface.',
      'Only by braving the searing heat can heroes discover the gate leading down into the Abyssal Throne.'
    ]
  },
  {
    tomeId: 'tome_cat_0003',
    volumeNumber: 3,
    chapterNumber: 1,
    bookTitle: 'The Fall of the Demon Overlord',
    authorName: 'Grand Inquisitor Morzan',
    historicalPeriod: 'Era of the Ashen Throne',
    textPassages: [
      'The final chamber in Level 3 belongs to the 👑 Abyssal Demon Overlord.',
      'He wields meteoric chaos, void gravity rifts, and earthquake shockwaves.',
      'Whoever vanquisheth the Overlord frees the Realm of Shadows from eternal darkness.'
    ]
  }
];

export class ComprehensiveLoreCatalogData {
  public static getLore(): DetailedCatalogLore[] {
    return COMPREHENSIVE_LORE_CATALOG_DATA;
  }
}
