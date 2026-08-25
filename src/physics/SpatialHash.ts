import { AABB } from './BoundingBox';

export class SpatialHash {
  private grid: Map<string, number[]> = new Map();

  constructor(public readonly cellSize: number = 64) {}

  private getKey(x: number, y: number): string {
    const cx = Math.floor(x / this.cellSize);
    const cy = Math.floor(y / this.cellSize);
    return `${cx},${cy}`;
  }

  insert(id: number, bounds: AABB): void {
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
        this.grid.get(key)!.push(id);
      }
    }
  }

  clear(): void {
    this.grid.clear();
  }

  query(bounds: AABB): Set<number> {
    const result = new Set<number>();
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
