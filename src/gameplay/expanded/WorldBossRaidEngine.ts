/**
 * Omniquest: Realm of Shadows - World Boss & Multi-Phase Raid Encounter Engine
 * Complex boss telegraphs, phase state machines, enraged berserk timers, bullet-hell projectile rings, and room-wide wipe mechanics.
 */

import { Vector2D } from '../../core/Math2D';

export type BossPhaseType = 'Phase1_GroundAssault' | 'Phase2_MeteorRain' | 'Phase3_VoidSingularity' | 'Phase4_BerserkEnrage';

export interface BossAttackTelegraph {
  id: string;
  origin: Vector2D;
  radius: number;
  chargeTimeRemaining: number;
  totalChargeTime: number;
  damage: number;
  color: string;
  telegraphType: 'Circle' | 'Cone' | 'LineBeam' | 'RingExpanding';
}

export class WorldBossRaidEngine {
  private static instance: WorldBossRaidEngine;
  private currentPhase: BossPhaseType = 'Phase1_GroundAssault';
  private activeTelegraphs: BossAttackTelegraph[] = [];
  private phaseTimer: number = 0;
  private enrageTimerRemaining: number = 300.0; // 5 minute enrage

  private constructor() {}

  public static getInstance(): WorldBossRaidEngine {
    if (!WorldBossRaidEngine.instance) {
      WorldBossRaidEngine.instance = new WorldBossRaidEngine();
    }
    return WorldBossRaidEngine.instance;
  }

  public updateBossEncounter(
    dt: number,
    bossHp: number,
    bossMaxHp: number,
    bossPos: Vector2D,
    onTelegraphDetonate?: (damage: number, pos: Vector2D, radius: number) => void
  ): void {
    this.phaseTimer += dt;
    this.enrageTimerRemaining -= dt;

    const hpPct = (bossHp / bossMaxHp) * 100;

    // Phase transitions
    if (this.enrageTimerRemaining <= 0) {
      this.currentPhase = 'Phase4_BerserkEnrage';
    } else if (hpPct < 25) {
      this.currentPhase = 'Phase3_VoidSingularity';
    } else if (hpPct < 60) {
      this.currentPhase = 'Phase2_MeteorRain';
    } else {
      this.currentPhase = 'Phase1_GroundAssault';
    }

    // Update active telegraphs
    for (let i = this.activeTelegraphs.length - 1; i >= 0; i--) {
      const tel = this.activeTelegraphs[i];
      tel.chargeTimeRemaining -= dt;

      if (tel.chargeTimeRemaining <= 0) {
        if (onTelegraphDetonate) {
          onTelegraphDetonate(tel.damage, tel.origin, tel.radius);
        }
        this.activeTelegraphs.splice(i, 1);
      }
    }

    // Spawn periodic telegraphs based on phase
    if (this.currentPhase === 'Phase2_MeteorRain' && this.phaseTimer > 4.0) {
      this.phaseTimer = 0;
      this.createTelegraph(bossPos, 90, 1.5, 45, '#ef4444', 'Circle');
    } else if (this.currentPhase === 'Phase3_VoidSingularity' && this.phaseTimer > 6.0) {
      this.phaseTimer = 0;
      this.createTelegraph(bossPos, 220, 2.5, 80, '#9333ea', 'RingExpanding');
    }
  }

  public createTelegraph(
    origin: Vector2D,
    radius: number,
    chargeTime: number,
    damage: number,
    color: string,
    type: 'Circle' | 'Cone' | 'LineBeam' | 'RingExpanding' = 'Circle'
  ): void {
    this.activeTelegraphs.push({
      id: 'tel_' + Math.random().toString(36).substr(2, 9),
      origin: origin.clone(),
      radius,
      chargeTimeRemaining: chargeTime,
      totalChargeTime: chargeTime,
      damage,
      color,
      telegraphType: type
    });
  }

  public getActiveTelegraphs(): BossAttackTelegraph[] {
    return this.activeTelegraphs;
  }

  public getCurrentPhase(): BossPhaseType {
    return this.currentPhase;
  }
}
