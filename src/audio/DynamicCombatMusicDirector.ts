export type CombatIntensityState = 'CALM' | 'SKIRMISH' | 'BOSS_PHASE1' | 'BOSS_ENRAGED';

export class DynamicCombatMusicDirector {
  private static instance: DynamicCombatMusicDirector;
  private currentState: CombatIntensityState = 'CALM';
  private targetIntensity: number = 0.0;
  private currentIntensity: number = 0.0;
  private threatTimer: number = 0.0;

  public static getInstance(): DynamicCombatMusicDirector {
    if (!DynamicCombatMusicDirector.instance) {
      DynamicCombatMusicDirector.instance = new DynamicCombatMusicDirector();
    }
    return DynamicCombatMusicDirector.instance;
  }

  public registerPlayerThreat(threatLevel: number): void {
    this.threatTimer = 5.0; // Stay in combat for at least 5s after last threat
    if (threatLevel >= 10) {
      this.currentState = 'BOSS_ENRAGED';
      this.targetIntensity = 1.0;
    } else if (threatLevel >= 5) {
      this.currentState = 'BOSS_PHASE1';
      this.targetIntensity = 0.8;
    } else if (threatLevel > 0) {
      this.currentState = 'SKIRMISH';
      this.targetIntensity = 0.5;
    }
  }

  public update(dt: number): void {
    if (this.threatTimer > 0) {
      this.threatTimer -= dt;
      if (this.threatTimer <= 0 && this.currentState !== 'CALM') {
        this.currentState = 'CALM';
        this.targetIntensity = 0.1;
      }
    }

    // Smooth lerp to target intensity
    this.currentIntensity += (this.targetIntensity - this.currentIntensity) * Math.min(1.0, dt * 2.0);
  }

  public getState(): CombatIntensityState {
    return this.currentState;
  }

  public getIntensity(): number {
    return this.currentIntensity;
  }
}
