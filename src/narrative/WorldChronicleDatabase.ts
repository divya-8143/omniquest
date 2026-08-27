/**
 * Omniquest: Realm of Shadows - Comprehensive World Chronicle & Realm Encyclopedia
 * Exhaustive database of realm geographies, historical battles, arcane dynasties, and elder deity pantheons.
 */

export interface ChronicleChapter {
  chapterId: string;
  volumeNumber: number;
  chapterTitle: string;
  historicalPeriod: string;
  author: string;
  recordedYear: number;
  paragraphs: string[];
}

export class WorldChronicleDatabase {
  private static instance: WorldChronicleDatabase;
  private chapters: Map<string, ChronicleChapter> = new Map();

  private constructor() {
    this.populateAllChapters();
  }

  public static getInstance(): WorldChronicleDatabase {
    if (!WorldChronicleDatabase.instance) {
      WorldChronicleDatabase.instance = new WorldChronicleDatabase();
    }
    return WorldChronicleDatabase.instance;
  }

  public getChapter(chapterId: string): ChronicleChapter | undefined {
    return this.chapters.get(chapterId);
  }

  public getAllChapters(): ChronicleChapter[] {
    return Array.from(this.chapters.values());
  }

  private populateAllChapters(): void {
    this.chapters.set('chronicle_ch1_creation', {
      chapterId: 'chronicle_ch1_creation',
      volumeNumber: 1,
      chapterTitle: 'Genesis of the Prime Meridian and the Fractured Core',
      historicalPeriod: 'The Dawn of Creation',
      author: 'Chronicler Aurelius the Elder',
      recordedYear: 104,
      paragraphs: [
        'In the beginning before geometry and sound took definite form, there existed only the primeval expanse known as the Astral Sea.',
        'Seven celestial architects forged the bedrock of Omnis, infusing tectonic strata with radiant mana crystals.',
        'For three thousand cycles, harmony reigned across the fertile valleys and glowing crystal spires of the ancient elders.',
        'Yet beneath the crust, dormant forces of entropy gathered in the deep mantle, awaiting a singular fracture.'
      ]
    });

    this.chapters.set('chronicle_ch2_incursion', {
      chapterId: 'chronicle_ch2_incursion',
      volumeNumber: 1,
      chapterTitle: 'The Shattering of the Veil and the Rise of Shadows',
      historicalPeriod: 'The First Abyssal Incursion',
      author: 'Archivist Kenneth of Redshore',
      recordedYear: 612,
      paragraphs: [
        'When the arcane towers of the high magi pushed the limits of dimensional manipulation, the cosmic barrier ruptured.',
        'From the void between stars poured forth demonic hordes led by the Abyssal Overlords, turning grand marble palaces into ash.',
        'The Crypt of Shadows was originally built as a fortress refuge for surviving citizens before it succumbed to necrotic corruption.',
        'Today, only the bravest champions descend into its depths to reclaim ancient artifacts and purge the demon lords.'
      ]
    });

    this.chapters.set('chronicle_ch3_three_paths', {
      chapterId: 'chronicle_ch3_three_paths',
      volumeNumber: 2,
      chapterTitle: 'The Three Orders: Steel, Arcana, and Shadow',
      historicalPeriod: 'Era of the Ashen Vanguard',
      author: 'High Marshal Vane',
      recordedYear: 890,
      paragraphs: [
        'To combat the unending demon tide, mortal civilizations organized their champions into three distinct disciplines.',
        'The Warriors, armored in enchanted steel and wielding titanic broadswords, form the unbreakable shield line against demonic beasts.',
        'The Mages, harnessing solar fire, glacial frost, and lightning storms, eradicate whole battalions with cataclysmic incantations.',
        'The Rogues, masters of stealth, speed, and venomous blades, strike directly at demonic commanders in the darkness.'
      ]
    });
  }
}
