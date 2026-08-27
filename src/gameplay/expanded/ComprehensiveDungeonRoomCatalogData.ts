/**
 * Omniquest: Realm of Shadows - Comprehensive Master Dungeon Room Catalog Data
 * Complete room blueprint tiles and layout configurations for procedural dungeons.
 */

export interface DetailedCatalogRoom {
  roomId: string;
  themeCategory: string;
  widthCells: number;
  heightCells: number;
  gridCells: number[][];
  enemyCount: number;
  hasChest: boolean;
}

export const COMPREHENSIVE_DUNGEON_ROOM_CATALOG_DATA: DetailedCatalogRoom[] = [
  {
    roomId: 'room_cat_0001',
    themeCategory: 'Crypt',
    widthCells: 8,
    heightCells: 8,
    gridCells: [
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 1]
    ],
    enemyCount: 2,
    hasChest: false
  },
  {
    roomId: 'room_cat_0002',
    themeCategory: 'Inferno',
    widthCells: 10,
    heightCells: 10,
    gridCells: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1]
    ],
    enemyCount: 3,
    hasChest: true
  },
  {
    roomId: 'room_cat_0003',
    themeCategory: 'Abyssal',
    widthCells: 14,
    heightCells: 14,
    gridCells: [
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1]
    ],
    enemyCount: 4,
    hasChest: true
  }
];

export class ComprehensiveDungeonRoomCatalogData {
  public static getRooms(): DetailedCatalogRoom[] {
    return COMPREHENSIVE_DUNGEON_ROOM_CATALOG_DATA;
  }
}
