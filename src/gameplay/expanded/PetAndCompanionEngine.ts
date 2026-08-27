/**
 * Omniquest: Realm of Shadows - Pet, Familiar & Companion AI Engine
 * AI Familiars (Arcane Phoenix, Shadow Wolf, Clockwork Automaton) with autonomous attack behaviors and passive auras.
 */

import { Vector2D } from '../../core/Math2D';

export interface PetFamiliarSpec {
  id: string;
  name: string;
  type: 'ArcanePhoenix' | 'ShadowWolf' | 'ClockworkGolem' | 'FrostFaerie';
  baseDamage: number;
  attackSpeed: number;
  auraEffect: {
    name: string;
    description: string;
    bonusPlayerDmgPct: number;
    bonusPlayerSpeedPct: number;
    bonusResourceRegen: number;
  };
  visualColor: string;
  radius: number;
}

export class PetAndCompanionEngine {
  private static instance: PetAndCompanionEngine;
  private pets: Map<string, PetFamiliarSpec> = new Map();
  private activePetPosition: Vector2D = new Vector2D();
  private activePetVelocity: Vector2D = new Vector2D();

  private constructor() {
    this.registerAllPets();
  }

  public static getInstance(): PetAndCompanionEngine {
    if (!PetAndCompanionEngine.instance) {
      PetAndCompanionEngine.instance = new PetAndCompanionEngine();
    }
    return PetAndCompanionEngine.instance;
  }

  public getPet(id: string): PetFamiliarSpec | undefined {
    return this.pets.get(id);
  }

  public updatePetPosition(playerPos: Vector2D, dt: number): Vector2D {
    const target = new Vector2D(playerPos.x - 30, playerPos.y - 30);
    const toTarget = target.clone().sub(this.activePetPosition);
    const dist = toTarget.length();

    if (dist > 15) {
      const dir = toTarget.normalize();
      this.activePetVelocity = dir.scale(160 * dt);
      this.activePetPosition.add(this.activePetVelocity);
    }
    return this.activePetPosition.clone();
  }

  private registerAllPets(): void {
    this.pets.set('pet_phoenix_01', {
      id: 'pet_phoenix_01',
      name: 'Solar Spark Phoenix',
      type: 'ArcanePhoenix',
      baseDamage: 25,
      attackSpeed: 1.5,
      auraEffect: {
        name: 'Radiant Warmth',
        description: 'Increases player damage by 15% and grants +5 resource per second.',
        bonusPlayerDmgPct: 15,
        bonusPlayerSpeedPct: 5,
        bonusResourceRegen: 5
      },
      visualColor: '#f97316',
      radius: 10
    });

    this.pets.set('pet_wolf_02', {
      id: 'pet_wolf_02',
      name: 'Spectral Shadow Wolf',
      type: 'ShadowWolf',
      baseDamage: 35,
      attackSpeed: 1.2,
      auraEffect: {
        name: 'Predator Haste',
        description: 'Increases player movement speed by 20% and critical strike chance by 8%.',
        bonusPlayerDmgPct: 8,
        bonusPlayerSpeedPct: 20,
        bonusResourceRegen: 0
      },
      visualColor: '#6366f1',
      radius: 12
    });
  }
}
