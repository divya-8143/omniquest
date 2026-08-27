import { Vector2D } from '../core/Math2D';

export type PropType = 'Sarcophagus' | 'BurningBrazier' | 'BrokenPillar' | 'TreasureUrn' | 'LavaVent' | 'BonePile';

export interface DungeonPropInstance {
  id: string;
  type: PropType;
  position: Vector2D;
  isDestructible: boolean;
  health: number;
  blocksMovement: boolean;
  lightEmissionRadius: number;
  lightColor: string;
}

export class DungeonPropScatteringEngine {
  private static instance: DungeonPropScatteringEngine;

  public static getInstance(): DungeonPropScatteringEngine {
    if (!DungeonPropScatteringEngine.instance) {
      DungeonPropScatteringEngine.instance = new DungeonPropScatteringEngine();
    }
    return DungeonPropScatteringEngine.instance;
  }

  public scatterPropsInRoom(
    roomX: number,
    roomY: number,
    roomW: number,
    roomH: number,
    density: number = 0.25
  ): DungeonPropInstance[] {
    const props: DungeonPropInstance[] = [];
    const maxProps = Math.max(1, Math.floor((roomW * roomH) * density * 0.1));

    for (let i = 0; i < maxProps; i++) {
      const px = (roomX + 1 + Math.floor(Math.random() * (roomW - 2))) * 32 + 16;
      const py = (roomY + 1 + Math.floor(Math.random() * (roomH - 2))) * 32 + 16;

      const types: PropType[] = ['BurningBrazier', 'BrokenPillar', 'TreasureUrn', 'BonePile'];
      const chosenType = types[Math.floor(Math.random() * types.length)];

      props.push({
        id: `prop_${Date.now()}_${i}`,
        type: chosenType,
        position: new Vector2D(px, py),
        isDestructible: chosenType === 'TreasureUrn' || chosenType === 'BonePile',
        health: chosenType === 'TreasureUrn' ? 10 : 30,
        blocksMovement: chosenType === 'BrokenPillar' || chosenType === 'Sarcophagus',
        lightEmissionRadius: chosenType === 'BurningBrazier' ? 120 : chosenType === 'LavaVent' ? 150 : 0,
        lightColor: chosenType === 'BurningBrazier' ? '#f97316' : '#ef4444'
      });
    }

    return props;
  }
}
