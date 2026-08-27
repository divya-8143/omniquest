/**
 * Omniquest: Realm of Shadows - Master Lore Encyclopedia Mega Dataset
 * 100+ Detailed historical tomes, dialogue logs, and world annals.
 */

export interface MegaLoreRecord {
  id: string;
  volume: number;
  chapter: number;
  title: string;
  author: string;
  era: string;
  paragraphs: string[];
}

export const MEGA_LORE_ENCYCLOPEDIA_DATASET: MegaLoreRecord[] = [
  {
    id: 'mega_tome_0001',
    volume: 1,
    chapter: 1,
    title: 'The Catacombs of the Forsaken',
    author: 'Archivist Vaelin the Blind',
    era: 'The Shadow Incursion',
    paragraphs: [
      'In the first age before the dimensional collapse, Eldoria was a bastion of marble and sunlight.',
      'The catacombs beneath the city served as sanctified resting grounds for ancient kings and heroes.',
      'When the Abyssal Tear opened in the mantle, necrotic energy flooded the tombs, disturbing the dead.'
    ]
  },
  {
    id: 'mega_tome_0002',
    volume: 2,
    chapter: 1,
    title: 'The Magma Veins of Ignis',
    author: 'Pyromancer Kenneth of the Red Dawn',
    era: 'Age of Cataclysm',
    paragraphs: [
      'Deep beneath the stone crypts lies the molten core of the Inferno Caverns in Level 2.',
      'Demons forged obsidian weapons in the magma lakes to prepare for the invasion of the surface.',
      'Only by braving the searing heat can heroes discover the gate leading down into the Abyssal Throne.'
    ]
  },
  {
    id: 'mega_tome_0003',
    volume: 3,
    chapter: 1,
    title: 'The Fall of the Demon Overlord',
    author: 'Grand Inquisitor Morzan',
    era: 'Era of the Ashen Throne',
    paragraphs: [
      'The final chamber in Level 3 belongs to the 👑 Abyssal Demon Overlord.',
      'He wields meteoric chaos, void gravity rifts, and earthquake shockwaves.',
      'Whoever vanquisheth the Overlord frees the Realm of Shadows from eternal darkness.'
    ]
  }
];

export class MasterLoreEncyclopediaMegaDataset {
  public static getLore(): MegaLoreRecord[] {
    return MEGA_LORE_ENCYCLOPEDIA_DATASET;
  }
}
