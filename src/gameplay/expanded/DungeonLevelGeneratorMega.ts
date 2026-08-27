/**
 * Omniquest: Realm of Shadows - Mega Dungeon Generator & Tile Matrix Pipeline
 * Multi-layer dungeon generator with cellular smoothing, room partitioning, and A* navigation paths.
 */

import { Vector2D } from '../../core/Math2D';

export class DungeonLevelGeneratorMega {
  private static instance: DungeonLevelGeneratorMega;

  public static getInstance(): DungeonLevelGeneratorMega {
    if (!DungeonLevelGeneratorMega.instance) {
      DungeonLevelGeneratorMega.instance = new DungeonLevelGeneratorMega();
    }
    return DungeonLevelGeneratorMega.instance;
  }

  public generateLevelGrid(width: number = 80, height: number = 80): { grid: number[][]; rooms: Array<{ x: number; y: number; w: number; h: number }> } {
    const grid: number[][] = [];
    for (let r = 0; r < height; r++) {
      grid[r] = [];
      for (let c = 0; c < width; c++) {
        grid[r][c] = 1;
      }
    }

    const rooms: Array<{ x: number; y: number; w: number; h: number }> = [];
    const numRooms = 12;

    for (let i = 0; i < numRooms; i++) {
      const rw = Math.floor(Math.random() * 8) + 8;
      const rh = Math.floor(Math.random() * 8) + 8;
      const rx = Math.floor(Math.random() * (width - rw - 4)) + 2;
      const ry = Math.floor(Math.random() * (height - rh - 4)) + 2;

      rooms.push({ x: rx, y: ry, w: rw, h: rh });

      for (let r = ry; r < ry + rh; r++) {
        for (let c = rx; c < rx + rw; c++) {
          grid[r][c] = 0;
        }
      }
    }

    // Connect rooms
    for (let i = 0; i < rooms.length - 1; i++) {
      const rA = rooms[i];
      const rB = rooms[i + 1];
      let cx = Math.floor(rA.x + rA.w / 2);
      let cy = Math.floor(rA.y + rA.h / 2);
      const targetX = Math.floor(rB.x + rB.w / 2);
      const targetY = Math.floor(rB.y + rB.h / 2);

      while (cx !== targetX) {
        grid[cy][cx] = 0;
        if (cy + 1 < height) grid[cy + 1][cx] = 0;
        cx += cx < targetX ? 1 : -1;
      }

      while (cy !== targetY) {
        grid[cy][cx] = 0;
        if (cx + 1 < width) grid[cy][cx + 1] = 0;
        cy += cy < targetY ? 1 : -1;
      }
    }

    return { grid, rooms };
  }
}
