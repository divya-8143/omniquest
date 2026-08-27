import { Vector2D } from '../core/Math2D';

export interface TrapCorridor {
  trapId: string;
  type: 'SpikeTrap' | 'DartLauncher' | 'LavaGrate';
  triggerBounds: { x: number; y: number; width: number; height: number };
  damage: number;
  damageType: string;
  cooldownSec: number;
  timeUntilArmed: number;
  isActive: boolean;
}

export interface SecretRoomSpec {
  secretRoomId: string;
  wallDoorPos: Vector2D;
  isWallCracked: boolean;
  rewardTier: number;
}

export class SecretRoomTrapGenerator {
  private static instance: SecretRoomTrapGenerator;

  public static getInstance(): SecretRoomTrapGenerator {
    if (!SecretRoomTrapGenerator.instance) {
      SecretRoomTrapGenerator.instance = new SecretRoomTrapGenerator();
    }
    return SecretRoomTrapGenerator.instance;
  }

  public placeTrapsAlongCorridor(
    startX: number,
    startY: number,
    endX: number,
    endY: number,
    trapChance: number = 0.35
  ): TrapCorridor[] {
    const traps: TrapCorridor[] = [];
    const dist = Math.hypot(endX - startX, endY - startY);
    const steps = Math.floor(dist / 32);

    for (let s = 1; s < steps; s++) {
      if (Math.random() < trapChance) {
        const tx = startX + ((endX - startX) * s) / steps;
        const ty = startY + ((endY - startY) * s) / steps;

        traps.push({
          trapId: `trap_${Date.now()}_${s}`,
          type: Math.random() < 0.5 ? 'SpikeTrap' : 'DartLauncher',
          triggerBounds: { x: tx - 16, y: ty - 16, width: 32, height: 32 },
          damage: 25,
          damageType: 'Physical',
          cooldownSec: 2.0,
          timeUntilArmed: 0,
          isActive: true
        });
      }
    }

    return traps;
  }
}
