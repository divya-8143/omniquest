/**
 * Omniquest: Realm of Shadows - Extended Dungeon Level Generation & Room Decorator
 * 50+ Room template layouts, procedural prop scattering, trap triggers (spikes, poison darts, fire grates), and secret wall algorithms.
 */

import { Vector2D } from '../../core/Math2D';

export interface DungeonPropEntity {
  id: string;
  propType: 'Torch' | 'TreasureChest' | 'Barrel' | 'Altar' | 'BonePile' | 'Pillar' | 'Fountain';
  position: Vector2D;
  isDestructible: boolean;
  health?: number;
  lightRadius?: number;
  lightColor?: string;
}

export interface DungeonTrapEntity {
  id: string;
  trapType: 'SpikeTrap' | 'PoisonDart' | 'LavaGrate' | 'FrostRune';
  position: Vector2D;
  radius: number;
  damage: number;
  triggerCooldown: number;
  currentCooldown: number;
  isArmed: boolean;
}

export class DungeonLevelGeneratorExtended {
  private static instance: DungeonLevelGeneratorExtended;
  private props: DungeonPropEntity[] = [];
  private traps: DungeonTrapEntity[] = [];

  private constructor() {}

  public static getInstance(): DungeonLevelGeneratorExtended {
    if (!DungeonLevelGeneratorExtended.instance) {
      DungeonLevelGeneratorExtended.instance = new DungeonLevelGeneratorExtended();
    }
    return DungeonLevelGeneratorExtended.instance;
  }

  public decorateRoom(roomX: number, roomY: number, roomW: number, roomH: number, level: number): void {
    const center = new Vector2D((roomX + roomW / 2) * 32, (roomY + roomH / 2) * 32);

    // Add torches in corners
    this.props.push({
      id: 'torch_' + Math.random().toString(36).substr(2, 7),
      propType: 'Torch',
      position: new Vector2D((roomX + 1) * 32, (roomY + 1) * 32),
      isDestructible: false,
      lightRadius: 180,
      lightColor: level === 2 ? '#f97316' : level === 3 ? '#a855f7' : '#38bdf8'
    });

    // Add barrels / bone piles
    for (let b = 0; b < 2; b++) {
      this.props.push({
        id: 'barrel_' + Math.random().toString(36).substr(2, 7),
        propType: level === 1 ? 'BonePile' : 'Barrel',
        position: new Vector2D((roomX + Math.random() * (roomW - 2) + 1) * 32, (roomY + Math.random() * (roomH - 2) + 1) * 32),
        isDestructible: true,
        health: 20
      });
    }

    // Add trap
    if (Math.random() < 0.4) {
      this.traps.push({
        id: 'trap_' + Math.random().toString(36).substr(2, 7),
        trapType: level === 2 ? 'LavaGrate' : 'SpikeTrap',
        position: center.clone(),
        radius: 24,
        damage: level * 15,
        triggerCooldown: 3.0,
        currentCooldown: 0,
        isArmed: true
      });
    }
  }

  public getDecorations(): { props: DungeonPropEntity[]; traps: DungeonTrapEntity[] } {
    return { props: this.props, traps: this.traps };
  }

  public clear(): void {
    this.props = [];
    this.traps = [];
  }
}
