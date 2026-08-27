"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialHash = void 0;
class SpatialHash {
    cellSize;
    grid = new Map();
    constructor(cellSize = 64) {
        this.cellSize = cellSize;
    }
    getKey(x, y) {
        const cx = Math.floor(x / this.cellSize);
        const cy = Math.floor(y / this.cellSize);
        return `${cx},${cy}`;
    }
    insert(id, bounds) {
        const startX = Math.floor(bounds.min.x / this.cellSize);
        const endX = Math.floor(bounds.max.x / this.cellSize);
        const startY = Math.floor(bounds.min.y / this.cellSize);
        const endY = Math.floor(bounds.max.y / this.cellSize);
        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                const key = `${x},${y}`;
                if (!this.grid.has(key)) {
                    this.grid.set(key, []);
                }
                this.grid.get(key).push(id);
            }
        }
    }
    clear() {
        this.grid.clear();
    }
    query(bounds) {
        const result = new Set();
        const startX = Math.floor(bounds.min.x / this.cellSize);
        const endX = Math.floor(bounds.max.x / this.cellSize);
        const startY = Math.floor(bounds.min.y / this.cellSize);
        const endY = Math.floor(bounds.max.y / this.cellSize);
        for (let x = startX; x <= endX; x++) {
            for (let y = startY; y <= endY; y++) {
                const key = `${x},${y}`;
                const list = this.grid.get(key);
                if (list) {
                    list.forEach(id => result.add(id));
                }
            }
        }
        return result;
    }
}
exports.SpatialHash = SpatialHash;
//# sourceMappingURL=SpatialHash.js.map