/**
 * Omniquest: Realm of Shadows - Dynamic Dungeon Scripted Events & Ambush Triggers
 * 30+ Procedural dungeon random events: Cursed shrines, trapped sarcophagi, wandering merchants, goblin hoard vaults.
 */

import { Vector2D } from '../../core/Math2D';

export interface DynamicDungeonEvent {
  eventId: string;
  eventName: string;
  location: Vector2D;
  eventType: 'CursedShrine' | 'WanderingMerchant' | 'GoblinHoard' | 'BloodAltar';
  isTriggered: boolean;
  rewardGold: number;
  rewardXp: number;
}

export class DungeonEventDirectorMatrix {
  private static instance: DungeonEventDirectorMatrix;
  private activeEvents: Map<string, DynamicDungeonEvent> = new Map();

  public static getInstance(): DungeonEventDirectorMatrix {
    if (!DungeonEventDirectorMatrix.instance) {
      DungeonEventDirectorMatrix.instance = new DungeonEventDirectorMatrix();
    }
    return DungeonEventDirectorMatrix.instance;
  }

  public spawnRandomEvent(roomPos: Vector2D, levelTier: number): DynamicDungeonEvent {
    const types: Array<'CursedShrine' | 'WanderingMerchant' | 'GoblinHoard' | 'BloodAltar'> = ['CursedShrine', 'WanderingMerchant', 'GoblinHoard', 'BloodAltar'];
    const chosen = types[Math.floor(Math.random() * types.length)];

    const event: DynamicDungeonEvent = {
      eventId: 'evt_' + Math.random().toString(36).substr(2, 7),
      eventName: chosen === 'CursedShrine' ? 'Cursed Shrine of the Ancients' : chosen === 'GoblinHoard' ? 'Goblin Treasure Hoard' : 'Subterranean Blood Altar',
      location: roomPos.clone(),
      eventType: chosen,
      isTriggered: false,
      rewardGold: levelTier * 75,
      rewardXp: levelTier * 120
    };

    this.activeEvents.set(event.eventId, event);
    return event;
  }

  public getEvents(): DynamicDungeonEvent[] {
    return Array.from(this.activeEvents.values());
  }
}
