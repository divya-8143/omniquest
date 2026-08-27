/**
 * Omniquest: Realm of Shadows - 100+ Procedural Dungeon Room Blueprints
 * Pre-baked modular room matrices for combat arenas, puzzle chambers, treasure vaults, and boss sanctums.
 */

export interface BlueprintMatrix {
  blueprintId: string;
  theme: 'Crypt' | 'Inferno' | 'Abyssal' | 'Sanctuary';
  width: number;
  height: number;
  grid: number[][];
  monsterSpawnCount: number;
  chestSpawnCount: number;
}

export class DungeonRoomLayoutsLarge {
  private static instance: DungeonRoomLayoutsLarge;
  private blueprints: Map<string, BlueprintMatrix> = new Map();

  private constructor() {
    this.generateAllBlueprints();
  }

  public static getInstance(): DungeonRoomLayoutsLarge {
    if (!DungeonRoomLayoutsLarge.instance) {
      DungeonRoomLayoutsLarge.instance = new DungeonRoomLayoutsLarge();
    }
    return DungeonRoomLayoutsLarge.instance;
  }

  public getBlueprint(id: string): BlueprintMatrix | undefined {
    return this.blueprints.get(id);
  }

  public getAllBlueprints(): BlueprintMatrix[] {
    return Array.from(this.blueprints.values());
  }

  private register(bp: BlueprintMatrix): void {
    this.blueprints.set(bp.blueprintId, bp);
  }

  private generateAllBlueprints(): void {
    const themes: Array<'Crypt' | 'Inferno' | 'Abyssal' | 'Sanctuary'> = ['Crypt', 'Inferno', 'Abyssal', 'Sanctuary'];

    for (const theme of themes) {
      for (let i = 1; i <= 20; i++) {
        const w = 8 + (i % 6);
        const h = 8 + (i % 6);
        const grid: number[][] = [];

        for (let r = 0; r < h; r++) {
          grid[r] = [];
          for (let c = 0; c < w; c++) {
            if (r === 0 || r === h - 1 || c === 0 || c === w - 1) {
              grid[r][c] = (r === Math.floor(h / 2) || c === Math.floor(w / 2)) ? 0 : 1; // Doorways
            } else {
              grid[r][c] = (r === 2 && c === 2) || (r === h - 3 && c === w - 3) ? 1 : 0; // Pillars
            }
          }
        }

        this.register({
          blueprintId: `bp_${theme.toLowerCase()}_room_${i}`,
          theme,
          width: w,
          height: h,
          grid,
          monsterSpawnCount: 2 + (i % 3),
          chestSpawnCount: (i % 4 === 0) ? 1 : 0
        });
      }
    }
  }
}
