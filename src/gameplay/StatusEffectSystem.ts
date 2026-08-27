export type StatusType = 'Poison' | 'Burn' | 'Stun' | 'Slow' | 'Freeze' | 'Bleed' | 'Shock' | 'Weakness' | 'Haste' | 'Invulnerability';

export interface StatusEffectInstance {
  id: string;
  type: StatusType;
  sourceEntityId?: number;
  durationRemaining: number;
  maxDuration: number;
  stacks: number;
  maxStacks: number;
  tickInterval: number;
  tickTimer: number;
  magnitude: number; // Damage per tick or percentage reduction
  dispelPriority: number; // 1 = low (regular buff), 5 = high (boss curse)
  colorTag: string;
  iconSymbol: string;
}

export interface StatusApplicationResult {
  applied: boolean;
  refreshed: boolean;
  stacked: boolean;
  currentStacks: number;
  immune: boolean;
}

export class StatusEffectSystem {
  private static instance: StatusEffectSystem;
  private entityStatuses: Map<number, Map<string, StatusEffectInstance>> = new Map();
  private immunities: Map<number, Set<StatusType>> = new Map();

  public static getInstance(): StatusEffectSystem {
    if (!StatusEffectSystem.instance) {
      StatusEffectSystem.instance = new StatusEffectSystem();
    }
    return StatusEffectSystem.instance;
  }

  public applyEffect(
    entityId: number,
    effect: Omit<StatusEffectInstance, 'durationRemaining' | 'stacks' | 'tickTimer'>
  ): StatusApplicationResult {
    // Check immunity
    const entityImmune = this.immunities.get(entityId);
    if (entityImmune && entityImmune.has(effect.type)) {
      return { applied: false, refreshed: false, stacked: false, currentStacks: 0, immune: true };
    }

    if (!this.entityStatuses.has(entityId)) {
      this.entityStatuses.set(entityId, new Map());
    }
    const statusMap = this.entityStatuses.get(entityId)!;
    const existing = statusMap.get(effect.id);

    if (existing) {
      existing.durationRemaining = effect.maxDuration; // Refresh duration
      let stacked = false;
      if (existing.stacks < existing.maxStacks) {
        existing.stacks++;
        stacked = true;
      }
      return { applied: true, refreshed: true, stacked, currentStacks: existing.stacks, immune: false };
    }

    const newInstance: StatusEffectInstance = {
      ...effect,
      durationRemaining: effect.maxDuration,
      stacks: 1,
      tickTimer: 0
    };
    statusMap.set(effect.id, newInstance);
    return { applied: true, refreshed: false, stacked: false, currentStacks: 1, immune: false };
  }

  public removeEffect(entityId: number, effectId: string): boolean {
    const statusMap = this.entityStatuses.get(entityId);
    if (!statusMap) return false;
    return statusMap.delete(effectId);
  }

  public clearAllEffects(entityId: number): void {
    this.entityStatuses.delete(entityId);
  }

  public addImmunity(entityId: number, type: StatusType): void {
    if (!this.immunities.has(entityId)) {
      this.immunities.set(entityId, new Set());
    }
    this.immunities.get(entityId)!.add(type);
  }

  public removeImmunity(entityId: number, type: StatusType): void {
    const set = this.immunities.get(entityId);
    if (set) {
      set.delete(type);
    }
  }

  public update(
    dt: number,
    onTickDamage?: (entityId: number, damage: number, type: StatusType, color: string) => void,
    onEffectExpired?: (entityId: number, effect: StatusEffectInstance) => void
  ): void {
    this.entityStatuses.forEach((statusMap, entityId) => {
      const expiredKeys: string[] = [];

      statusMap.forEach((effect, key) => {
        effect.durationRemaining -= dt;
        effect.tickTimer += dt;

        // Periodic tick processing
        if (effect.tickInterval > 0 && effect.tickTimer >= effect.tickInterval) {
          effect.tickTimer -= effect.tickInterval;
          const totalTickDamage = effect.magnitude * effect.stacks;

          if (onTickDamage && (effect.type === 'Poison' || effect.type === 'Burn' || effect.type === 'Bleed' || effect.type === 'Shock')) {
            onTickDamage(entityId, totalTickDamage, effect.type, effect.colorTag);
          }
        }

        if (effect.durationRemaining <= 0) {
          expiredKeys.push(key);
          if (onEffectExpired) {
            onEffectExpired(entityId, effect);
          }
        }
      });

      for (const key of expiredKeys) {
        statusMap.delete(key);
      }
    });
  }

  public getActiveEffects(entityId: number): StatusEffectInstance[] {
    const statusMap = this.entityStatuses.get(entityId);
    if (!statusMap) return [];
    return Array.from(statusMap.values());
  }

  public isStunnedOrFrozen(entityId: number): boolean {
    const effects = this.getActiveEffects(entityId);
    return effects.some(e => e.type === 'Stun' || e.type === 'Freeze');
  }

  public getMovementSpeedModifier(entityId: number): number {
    const effects = this.getActiveEffects(entityId);
    let speedMult = 1.0;

    for (const eff of effects) {
      if (eff.type === 'Freeze' || eff.type === 'Stun') {
        return 0; // completely immobilized
      }
      if (eff.type === 'Slow') {
        speedMult *= Math.max(0.1, 1.0 - (eff.magnitude * eff.stacks / 100));
      }
      if (eff.type === 'Haste') {
        speedMult *= (1.0 + (eff.magnitude * eff.stacks / 100));
      }
    }
    return speedMult;
  }
}
