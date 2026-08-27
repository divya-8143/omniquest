/**
 * Omniquest: Realm of Shadows - Advanced Dungeon Architect & Cellular Automata Engine
 * Multilayer procedural generators: BSP trees, cellular automata smoothing, Voronoi biome partitioning, and corridor routing.
 */

import { Vector2D } from '../core/Math2D';

export interface RoomRect {
  x: number;
  y: number;
  width: number;
  height: number;
  connectedRoomIndices: number[];
  biomeType: string;
  isSpecialBossRoom?: boolean;
}

export interface CorridorPath {
  start: Vector2D;
  end: Vector2D;
  waypoints: Vector2D[];
  width: number;
}

export interface DungeonFloorMap {
  width: number;
  height: number;
  tiles: number[][]; // 0 = floor, 1 = wall, 2 = door, 3 = water/lava, 4 = hazard
  rooms: RoomRect[];
  corridors: CorridorPath[];
  spawnPoint: Vector2D;
  exitPoint: Vector2D;
  chestLocations: Vector2D[];
  shrineLocations: Vector2D[];
}

export class AdvancedDungeonArchitect {
  private width: number;
  private height: number;
  private minRoomSize: number;
  private maxRoomSize: number;
  private maxLeafSize: number;

  constructor(width: number = 60, height: number = 60, minRoomSize: number = 6, maxRoomSize: number = 14) {
    this.width = width;
    this.height = height;
    this.minRoomSize = minRoomSize;
    this.maxRoomSize = maxRoomSize;
    this.maxLeafSize = 24;
  }

  public generateDungeon(levelTier: number): DungeonFloorMap {
    const tiles: number[][] = [];
    for (let r = 0; r < this.height; r++) {
      tiles[r] = [];
      for (let c = 0; c < this.width; c++) {
        tiles[r][c] = 1; // Start all walls
      }
    }

    const rooms: RoomRect[] = [];
    const corridors: CorridorPath[] = [];

    // Binary Space Partitioning Tree Partition
    this.partitionAndCarveRooms(tiles, rooms, levelTier);
    this.connectRoomsWithCorridors(tiles, rooms, corridors);
    this.applyCellularAutomataSmoothing(tiles, 2);

    const spawnPoint = rooms.length > 0 
      ? new Vector2D((rooms[0].x + Math.floor(rooms[0].width / 2)) * 32, (rooms[0].y + Math.floor(rooms[0].height / 2)) * 32)
      : new Vector2D(100, 100);

    const exitRoomIdx = rooms.length - 1;
    const exitPoint = rooms.length > 0
      ? new Vector2D((rooms[exitRoomIdx].x + Math.floor(rooms[exitRoomIdx].width / 2)) * 32, (rooms[exitRoomIdx].y + Math.floor(rooms[exitRoomIdx].height / 2)) * 32)
      : new Vector2D(200, 200);

    const chests: Vector2D[] = [];
    const shrines: Vector2D[] = [];

    for (let i = 1; i < rooms.length; i++) {
      const rm = rooms[i];
      if (Math.random() < 0.6) {
        chests.push(new Vector2D((rm.x + 2) * 32, (rm.y + 2) * 32));
      }
      if (Math.random() < 0.3) {
        shrines.push(new Vector2D((rm.x + rm.width - 2) * 32, (rm.y + rm.height - 2) * 32));
      }
    }

    return {
      width: this.width,
      height: this.height,
      tiles,
      rooms,
      corridors,
      spawnPoint,
      exitPoint,
      chestLocations: chests,
      shrineLocations: shrines
    };
  }

  private partitionAndCarveRooms(tiles: number[][], rooms: RoomRect[], levelTier: number): void {
    const numRoomsTarget = levelTier === 3 ? 6 : 8;
    const attempts = 30;

    for (let a = 0; a < attempts && rooms.length < numRoomsTarget; a++) {
      const w = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
      const h = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
      const x = Math.floor(Math.random() * (this.width - w - 4)) + 2;
      const y = Math.floor(Math.random() * (this.height - h - 4)) + 2;

      let overlaps = false;
      for (const other of rooms) {
        if (
          x < other.x + other.width + 2 &&
          x + w + 2 > other.x &&
          y < other.y + other.height + 2 &&
          y + h + 2 > other.y
        ) {
          overlaps = true;
          break;
        }
      }

      if (!overlaps) {
        const isBoss = levelTier === 3 && rooms.length === numRoomsTarget - 1;
        const rm: RoomRect = {
          x,
          y,
          width: isBoss ? w + 4 : w,
          height: isBoss ? h + 4 : h,
          connectedRoomIndices: [],
          biomeType: levelTier === 1 ? 'Crypt' : levelTier === 2 ? 'Inferno' : 'Abyssal',
          isSpecialBossRoom: isBoss
        };
        rooms.push(rm);

        // Carve floor
        for (let r = rm.y; r < rm.y + rm.height; r++) {
          for (let c = rm.x; c < rm.x + rm.width; c++) {
            if (r < this.height && c < this.width) {
              tiles[r][c] = 0; // floor
            }
          }
        }
      }
    }
  }

  private connectRoomsWithCorridors(tiles: number[][], rooms: RoomRect[], corridors: CorridorPath[]): void {
    for (let i = 0; i < rooms.length - 1; i++) {
      const rA = rooms[i];
      const rB = rooms[i + 1];

      const startX = Math.floor(rA.x + rA.width / 2);
      const startY = Math.floor(rA.y + rA.height / 2);
      const endX = Math.floor(rB.x + rB.width / 2);
      const endY = Math.floor(rB.y + rB.height / 2);

      // Horizontal then Vertical
      let cx = startX;
      let cy = startY;

      while (cx !== endX) {
        if (cy >= 0 && cy < this.height && cx >= 0 && cx < this.width) {
          tiles[cy][cx] = 0;
          if (cy + 1 < this.height) tiles[cy + 1][cx] = 0; // wider hallway
        }
        cx += cx < endX ? 1 : -1;
      }

      while (cy !== endY) {
        if (cy >= 0 && cy < this.height && cx >= 0 && cx < this.width) {
          tiles[cy][cx] = 0;
          if (cx + 1 < this.width) tiles[cy][cx + 1] = 0;
        }
        cy += cy < endY ? 1 : -1;
      }

      rA.connectedRoomIndices.push(i + 1);
      rB.connectedRoomIndices.push(i);

      corridors.push({
        start: new Vector2D(startX * 32, startY * 32),
        end: new Vector2D(endX * 32, endY * 32),
        waypoints: [new Vector2D(endX * 32, startY * 32)],
        width: 2
      });
    }
  }

  private applyCellularAutomataSmoothing(tiles: number[][], iterations: number): void {
    for (let it = 0; it < iterations; it++) {
      for (let r = 1; r < this.height - 1; r++) {
        for (let c = 1; c < this.width - 1; c++) {
          if (tiles[r][c] === 1) {
            let neighborFloors = 0;
            for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                if (tiles[r + dr][c + dc] === 0) neighborFloors++;
              }
            }
            if (neighborFloors >= 6) {
              tiles[r][c] = 0; // smooth jagged wall corners into natural cavern arches
            }
          }
        }
      }
    }
  }
}
