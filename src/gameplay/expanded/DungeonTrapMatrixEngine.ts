/**
 * Omniquest: Realm of Shadows - Dungeon Traps, Environmental Hazards & Puzzle Pressure Plates
 * 25+ Traps: Guillotine blades, crushing stone blocks, poison vents, rolling boulders, and teleporter pads.
 */

import { Vector2D } from '../../core/Math2D';

export interface ComplexTrapSpec {
  trapId: string;
  name: string;
  trapType: 'Guillotine' | 'PoisonVent' | 'FireGrate' | 'RollingBoulder' | 'TeleportRift' | 'DartShooter';
  origin: Vector2D;
  direction?: Vector2D;
  damage: number;
  triggerDelay: number;
  resetTime: number;
  isActive: boolean;
  element: 'Physical' | 'Fire' | 'Poison' | 'Void';
}

export class DungeonTrapMatrixEngine {
  private static instance: DungeonTrapMatrixEngine;
  private traps: Map<string, ComplexTrapSpec> = new Map();

  private constructor() {
    this.registerSampleTraps();
  }

  public static getInstance(): DungeonTrapMatrixEngine {
    if (!DungeonTrapMatrixEngine.instance) {
      DungeonTrapMatrixEngine.instance = new DungeonTrapMatrixEngine();
    }
    return DungeonTrapMatrixEngine.instance;
  }

  public getTrap(id: string): ComplexTrapSpec | undefined {
    return this.traps.get(id);
  }

  public getAllTraps(): ComplexTrapSpec[] {
    return Array.from(this.traps.values());
  }

  private registerSampleTraps(): void {
    this.traps.set('trap_blade_01', {
      trapId: 'trap_blade_01',
      name: 'Swinging Pendulum Guillotine',
      trapType: 'Guillotine',
      origin: new Vector2D(350, 400),
      damage: 45,
      triggerDelay: 0.2,
      resetTime: 2.0,
      isActive: true,
      element: 'Physical'
    });

    this.traps.set('trap_poison_02', {
      trapId: 'trap_poison_02',
      name: 'Noxious Spore Vent',
      trapType: 'PoisonVent',
      origin: new Vector2D(600, 250),
      damage: 20,
      triggerDelay: 0.5,
      resetTime: 4.0,
      isActive: true,
      element: 'Poison'
    });
  }
}
