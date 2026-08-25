export interface LevelChunk {
  chunkX: number;
  chunkY: number;
  loaded: boolean;
  tiles: number[][];
}

export class LevelChunkingManager {
  private activeChunks: Map<string, LevelChunk> = new Map();
  public readonly chunkSize: number = 16;

  updatePlayerPosition(playerWorldX: number, playerWorldY: number): void {
    const currentChunkX = Math.floor(playerWorldX / (this.chunkSize * 32));
    const currentChunkY = Math.floor(playerWorldY / (this.chunkSize * 32));

    // Keep 3x3 surrounding chunks loaded
    const neededKeys = new Set<string>();
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const cx = currentChunkX + dx;
        const cy = currentChunkY + dy;
        const key = `${cx},${cy}`;
        neededKeys.add(key);

        if (!this.activeChunks.has(key)) {
          this.loadChunk(cx, cy);
        }
      }
    }

    // Unload far chunks
    for (const [key, chunk] of this.activeChunks.entries()) {
      if (!neededKeys.has(key)) {
        this.unloadChunk(key);
      }
    }
  }

  private loadChunk(cx: number, cy: number): void {
    const key = `${cx},${cy}`;
    const tiles = Array.from({ length: this.chunkSize }, () => Array(this.chunkSize).fill(0));
    this.activeChunks.set(key, { chunkX: cx, chunkY: cy, loaded: true, tiles });
  }

  private unloadChunk(key: string): void {
    this.activeChunks.delete(key);
  }

  getActiveChunkCount(): number {
    return this.activeChunks.size;
  }
}
