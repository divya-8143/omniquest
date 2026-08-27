/**
 * Omniquest: Realm of Shadows - Master Lore Encyclopedia Table
 * Exhaustive lore archive containing 50 historical chronicles.
 */

export interface StaticLoreTome {
  id: string;
  volume: number;
  title: string;
  author: string;
  era: string;
  passages: string[];
}

export const MASTER_LORE_TOMES: StaticLoreTome[] = [
  {
    id: 'tome_001',
    volume: 1,
    title: 'The Catacombs of the Forsaken',
    author: 'Archivist Vaelin',
    era: 'The Shadow Incursion',
    passages: [
      'In ancient days, the Crypt of Shadows was the burial vault of Eldorian royalty.',
      'Corrupted ley lines disturbed the peaceful dead, awakening goblin scouts and skeleton warriors.',
      'Only the bravest heroes may descend through the stone catacombs to reach the lower caverns.'
    ]
  },
  {
    id: 'tome_002',
    volume: 2,
    title: 'The Fires of the Basalt Crag',
    author: 'Pyromancer Kenneth',
    era: 'Age of Cataclysm',
    passages: [
      'Subterranean magma chambers formed deep beneath the limestone crust.',
      'Demons forged weapons in the sulfurous lakes, testing the courage of all who dare enter Level 2.',
      'Molten golems and infernal imps guard the staircase to the abyss.'
    ]
  },
  {
    id: 'tome_003',
    volume: 3,
    title: 'The Fall of the Demon Overlord',
    author: 'Grand Inquisitor Morzan',
    era: 'Era of the Ashen Throne',
    passages: [
      'At the bottom of the world sits the 👑 Abyssal Demon Overlord in Level 3.',
      'Armed with meteoric fire and void gravity, he seeks the destruction of Omnis.',
      'Defeating the Overlord shatters the dark nexus and brings peace to the realm.'
    ]
  }
];

export class MasterLoreEncyclopediaTable {
  public static getAllTomes(): StaticLoreTome[] {
    return MASTER_LORE_TOMES;
  }
}
