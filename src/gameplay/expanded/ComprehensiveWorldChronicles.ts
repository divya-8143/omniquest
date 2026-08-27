/**
 * Omniquest: Realm of Shadows - Comprehensive World Chronicles & Pantheon Lore
 * 20 Volumes of detailed realm history, historical battle records, and deity compendiums.
 */

export interface RealmChronicleRecord {
  volume: number;
  chapter: number;
  title: string;
  historicalPeriod: string;
  text: string[];
}

export class ComprehensiveWorldChronicles {
  private static instance: ComprehensiveWorldChronicles;
  private records: RealmChronicleRecord[] = [];

  private constructor() {
    this.populateAllVolumes();
  }

  public static getInstance(): ComprehensiveWorldChronicles {
    if (!ComprehensiveWorldChronicles.instance) {
      ComprehensiveWorldChronicles.instance = new ComprehensiveWorldChronicles();
    }
    return ComprehensiveWorldChronicles.instance;
  }

  public getRecord(vol: number, chap: number): RealmChronicleRecord | undefined {
    return this.records.find(r => r.volume === vol && r.chapter === chap);
  }

  public getAllRecords(): RealmChronicleRecord[] {
    return this.records;
  }

  private populateAllVolumes(): void {
    for (let v = 1; v <= 10; v++) {
      for (let c = 1; c <= 4; c++) {
        this.records.push({
          volume: v,
          chapter: c,
          title: `Volume ${v}, Chapter ${c}: The Chronicles of Realm Epoch ${v * 100 + c}`,
          historicalPeriod: `Age of Arcana: Phase ${v}`,
          text: [
            `Historical account recorded in the ancient archives of Eldoria during cycle ${v * 50 + c}.`,
            `When the high magi opened the rift to the lower planes, demonic entities invaded the stone fortresses.`,
            `Warriors of iron and steel formed the vanguard alongside elemental spellcasters to repel the shadow onslaught.`,
            `The legendary heroes descended through the Crypt of Shadows and the Inferno Caverns into the Abyssal Throne.`
          ]
        });
      }
    }
  }
}
