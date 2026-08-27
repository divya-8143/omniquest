export interface LevelChunk {
    chunkX: number;
    chunkY: number;
    loaded: boolean;
    tiles: number[][];
}
export declare class LevelChunkingManager {
    private activeChunks;
    readonly chunkSize: number;
    updatePlayerPosition(playerWorldX: number, playerWorldY: number): void;
    private loadChunk;
    private unloadChunk;
    getActiveChunkCount(): number;
}
