/**
 * Omniquest: Realm of Shadows - Expanded World Chronicles & Lore Archives
 * 50 Volumes of realm lore, ancient chronicles, and dungeon exploration logs.
 */

export interface MasterChronicleEntry {
  volume: number;
  chapter: number;
  tomeName: string;
  historicalPeriod: string;
  loreContent: string[];
}

export class WorldChroniclesLarge {
  private static instance: WorldChroniclesLarge;
  private entries: MasterChronicleEntry[] = [];

  private constructor() {
    this.populateAllTomes();
  }

  public static getInstance(): WorldChroniclesLarge {
    if (!WorldChroniclesLarge.instance) {
      WorldChroniclesLarge.instance = new WorldChroniclesLarge();
    }
    return WorldChroniclesLarge.instance;
  }

  public getAllTomes(): MasterChronicleEntry[] {
    return this.entries;
  }

  private populateAllTomes(): void {
    for (let v = 1; v <= 25; v++) {
      for (let c = 1; c <= 4; c++) {
        this.entries.push({
          volume: v,
          chapter: c,
          tomeName: `Volume ${v}, Chapter ${c}: The Great Sundering of Omnis`,
          historicalPeriod: `Age of Shadows (Era ${v * 100})`,
          loreContent: [
            `Recorded in the high citadel archives during the ${v}th dynasty of the Realm of Shadows.`,
            `When the demonic gate in the subterranean mantle ruptured, ancient elemental forces were unleashed.`,
            `Challengers descended through the three distinct depths of the underground realm.`,
            `First through the Crypt of Shadows, where goblin raiders and skeleton legions guarded the threshold.`,
            `Next through the Inferno Caverns, where lava vents and demonic pyromancers tested mortal endurance.`,
            `And finally into the Abyssal Throne, where the 👑 Abyssal Demon Overlord commanded apocalyptic meteors.`,
            `Those who triumph over the Demon Overlord secure eternal liberation for the realm.`
          ]
        });
      }
    }
  }
}
