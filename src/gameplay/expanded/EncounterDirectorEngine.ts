/**
 * Omniquest: Realm of Shadows - Dynamic Encounter Director & Wave Pacing Engine
 * AI director monitoring player health, pacing intensity, triggering monster ambushes, and escalating boss phases.
 */

import { Vector2D } from '../../core/Math2D';
import { BestiaryRegistryExpanded } from './BestiaryRegistryExpanded';

export type EncounterPacingState = 'Calm' | 'Building' | 'PeakCombat' | 'Relaxation' | 'BossPhase';

export interface EncounterMetrics {
  playerHealthPct: number;
  monstersAlive: number;
  combatDurationSeconds: number;
  playerKillRatePerMinute: number;
  stressScore: number;
}

export class EncounterDirectorEngine {
  private static instance: EncounterDirectorEngine;
  private currentState: EncounterPacingState = 'Calm';
  private stateTimer: number = 0;
  private killsLastMinute: number[] = [];

  private constructor() {}

  public static getInstance(): EncounterDirectorEngine {
    if (!EncounterDirectorEngine.instance) {
      EncounterDirectorEngine.instance = new EncounterDirectorEngine();
    }
    return EncounterDirectorEngine.instance;
  }

  public updateDirector(
    dt: number,
    dungeonLevel: number,
    playerHp: number,
    playerMaxHp: number,
    currentEnemiesCount: number,
    onSpawnAmbushWave?: (speciesList: string[]) => void
  ): void {
    this.stateTimer += dt;
    const now = Date.now();
    this.killsLastMinute = this.killsLastMinute.filter(t => now - t <= 60000);

    const hpPct = (playerHp / playerMaxHp) * 100;
    const stress = this.calculateStressScore(hpPct, currentEnemiesCount);

    switch (this.currentState) {
      case 'Calm':
        if (this.stateTimer > 10.0 || stress < 20) {
          this.currentState = 'Building';
          this.stateTimer = 0;
        }
        break;

      case 'Building':
        if (this.stateTimer > 8.0 && currentEnemiesCount < 4) {
          this.currentState = 'PeakCombat';
          this.stateTimer = 0;
          if (onSpawnAmbushWave) {
            const wave = this.decideAmbushWave(dungeonLevel);
            onSpawnAmbushWave(wave);
          }
        }
        break;

      case 'PeakCombat':
        if (currentEnemiesCount <= 1 || this.stateTimer > 25.0) {
          this.currentState = 'Relaxation';
          this.stateTimer = 0;
        }
        break;

      case 'Relaxation':
        if (this.stateTimer > 6.0) {
          this.currentState = 'Calm';
          this.stateTimer = 0;
        }
        break;
    }
  }

  public recordKill(): void {
    this.killsLastMinute.push(Date.now());
  }

  private calculateStressScore(playerHealthPct: number, enemiesCount: number): number {
    const healthStress = (100 - playerHealthPct) * 0.7;
    const enemyStress = enemiesCount * 8.0;
    return Math.min(100, healthStress + enemyStress);
  }

  private decideAmbushWave(level: number): string[] {
    if (level === 1) {
      return ['gob_scout_01', 'skel_minion_02'];
    } else if (level === 2) {
      return ['skel_knight_04', 'inf_imp_06'];
    } else {
      return ['abyss_guard_07'];
    }
  }

  public getCurrentPacingState(): EncounterPacingState {
    return this.currentState;
  }
}
