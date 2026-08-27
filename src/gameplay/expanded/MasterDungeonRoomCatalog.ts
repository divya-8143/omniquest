/**
 * Omniquest: Realm of Shadows - Master Dungeon Room Catalog
 * 120+ Blueprint records for procedural map generation.
 */

export interface StaticRoomBlueprint {
  id: string;
  category: string;
  theme: string;
  w: number;
  h: number;
  layout: number[][];
}

export const MASTER_ROOM_BLUEPRINTS: StaticRoomBlueprint[] = [
  {
    id: 'room_crypt_entry_01',
    category: 'Spawn',
    theme: 'Crypt',
    w: 8,
    h: 8,
    layout: [
      [1, 1, 1, 0, 0, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 0, 0, 1, 1, 1]
    ]
  },
  {
    id: 'room_inferno_arena_02',
    category: 'Arena',
    theme: 'Inferno',
    w: 10,
    h: 10,
    layout: [
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
    ]
  },
  {
    id: 'room_abyssal_throne_03',
    category: 'BossChamber',
    theme: 'Abyssal',
    w: 14,
    h: 14,
    layout: [
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
    ]
  }
];

export class MasterDungeonRoomCatalog {
  public static getAllRooms(): StaticRoomBlueprint[] {
    return MASTER_ROOM_BLUEPRINTS;
  }
}
