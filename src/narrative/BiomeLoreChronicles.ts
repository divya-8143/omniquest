export interface BiomeLoreEntry {
  id: string;
  biome: string;
  volumeNumber: number;
  chapterTitle: string;
  chronicleText: string;
}

export const BIOME_LORE_CHRONICLES: BiomeLoreEntry[] = [
  {
    id: 'lore_crypt_01',
    biome: 'Crypt of Shadows',
    volumeNumber: 1,
    chapterTitle: 'The Desecration of Eldoria',
    chronicleText: 'When the ancient ward stones cracked, the kings of Eldoria were stripped of their peaceful slumber. Now their bones march under the necrotic will of the Nether Void.'
  },
  {
    id: 'lore_inferno_02',
    biome: 'The Inferno Caverns',
    volumeNumber: 2,
    chapterTitle: 'Furnaces of the Abyssal Forge',
    chronicleText: 'Subterranean lava rivers serve as the demonic crucibles where blades of dark iron are cooled in liquid sulfur.'
  },
  {
    id: 'lore_abyss_03',
    biome: 'The Abyssal Throne',
    volumeNumber: 3,
    chapterTitle: 'The Crown of the Overlord',
    chronicleText: 'Towering above the dark realm sits the Demon Overlord. His will alone holds the rift between realms open.'
  }
];

export class BiomeLoreChronicles {
  public static getAllLore(): BiomeLoreEntry[] {
    return BIOME_LORE_CHRONICLES;
  }
}
