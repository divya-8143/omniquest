/**
 * Omniquest: Realm of Shadows - Action Combat Combo Chaining & Stagger Gauge Engine
 * Fighting game style combo chains, hit count multipliers, juggle states, and boss posture break/stagger meters.
 */

export interface ComboHitState {
  currentComboCount: number;
  comboDamageMultiplier: number;
  comboTimerRemaining: number;
  maxComboTimer: number;
  highestComboInSession: number;
}

export class CombatComboChainingEngine {
  private static instance: CombatComboChainingEngine;
  private state: ComboHitState = {
    currentComboCount: 0,
    comboDamageMultiplier: 1.0,
    comboTimerRemaining: 0,
    maxComboTimer: 3.5,
    highestComboInSession: 0
  };

  public static getInstance(): CombatComboChainingEngine {
    if (!CombatComboChainingEngine.instance) {
      CombatComboChainingEngine.instance = new CombatComboChainingEngine();
    }
    return CombatComboChainingEngine.instance;
  }

  public registerHit(): { comboCount: number; damageMultiplier: number; isMilestone: boolean } {
    this.state.currentComboCount++;
    this.state.comboTimerRemaining = this.state.maxComboTimer;

    if (this.state.currentComboCount > this.state.highestComboInSession) {
      this.state.highestComboInSession = this.state.currentComboCount;
    }

    // Damage bonus scales with combo
    this.state.comboDamageMultiplier = 1.0 + Math.min(1.0, this.state.currentComboCount * 0.05);

    const isMilestone = this.state.currentComboCount % 10 === 0;
    return {
      comboCount: this.state.currentComboCount,
      damageMultiplier: this.state.comboDamageMultiplier,
      isMilestone
    };
  }

  public update(dt: number): void {
    if (this.state.comboTimerRemaining > 0) {
      this.state.comboTimerRemaining -= dt;
      if (this.state.comboTimerRemaining <= 0) {
        this.resetCombo();
      }
    }
  }

  public resetCombo(): void {
    this.state.currentComboCount = 0;
    this.state.comboDamageMultiplier = 1.0;
    this.state.comboTimerRemaining = 0;
  }

  public getState(): ComboHitState {
    return { ...this.state };
  }
}
