"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelChunkingManager = void 0;
class LevelChunkingManager {
    activeChunks = new Map();
    chunkSize = 16;
    updatePlayerPosition(playerWorldX, playerWorldY) {
        const currentChunkX = Math.floor(playerWorldX / (this.chunkSize * 32));
        const currentChunkY = Math.floor(playerWorldY / (this.chunkSize * 32));
        // Keep 3x3 surrounding chunks loaded
        const neededKeys = new Set();
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
    loadChunk(cx, cy) {
        const key = `${cx},${cy}`;
        const tiles = Array.from({ length: this.chunkSize }, () => Array(this.chunkSize).fill(0));
        this.activeChunks.set(key, { chunkX: cx, chunkY: cy, loaded: true, tiles });
    }
    unloadChunk(key) {
        this.activeChunks.delete(key);
    }
    getActiveChunkCount() {
        return this.activeChunks.size;
    }
}
exports.LevelChunkingManager = LevelChunkingManager;
//# sourceMappingURL=LevelChunkingManager.js.map