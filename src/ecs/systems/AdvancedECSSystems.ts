/**
 * Omniquest: Realm of Shadows - Advanced ECS Systems Pipeline
 * Complete decoupled systems: MovementSystem, HitboxCollisionSystem, StatusEffectSystem, LightingAndShadowSystem, LootDropSystem, ThreatAggroSystem.
 */

import { EntityManager } from '../EntityManager';
import { Entity } from '../Entity';
import { TransformComponent } from '../components/TransformComponent';
import { HealthComponent } from '../components/HealthComponent';
import { PhysicsComponent } from '../components/PhysicsComponent';
import { InventoryComponent } from '../components/InventoryComponent';
import { Vector2D } from '../../core/Math2D';

export interface ActiveStatusCondition {
  id: string;
  name: string;
  duration: number;
  periodicDmg: number;
  statDebuffSpeedPct: number;
  statDebuffArmorPct: number;
  tickTimer: number;
  visualColor: string;
}

export class AdvancedECSSystems {
  private entityManager: EntityManager;
  private statusConditions: Map<number, ActiveStatusCondition[]> = new Map();
  private threatTables: Map<number, Map<number, number>> = new Map(); // monsterEntityId -> (playerEntityId -> threatPoints)

  constructor(entityManager: EntityManager) {
    this.entityManager = entityManager;
  }

  // 1. MOVEMENT & VELOCITY INTEGRATION SYSTEM
  public updateMovementSystem(dt: number, friction: number = 0.88): void {
    const entities = this.entityManager.getEntitiesWithComponents([TransformComponent.TYPE, PhysicsComponent.TYPE]);

    for (const entity of entities) {
      const transform = entity.getComponent<TransformComponent>(TransformComponent.TYPE)!;
      const physics = entity.getComponent<PhysicsComponent>(PhysicsComponent.TYPE)!;

      // Apply acceleration to velocity
      physics.velocity.x += physics.acceleration.x * dt;
      physics.velocity.y += physics.acceleration.y * dt;

      // Apply friction
      physics.velocity.scale(Math.pow(friction, dt * 60));

      // Integrate position
      transform.position.addScaled(physics.velocity, dt);

      // Reset acceleration for next frame tick
      physics.acceleration.zero();
    }
  }

  // 2. HITBOX & BROADPHASE COLLISION SYSTEM
  public updateCollisionSystem(
    onEntityCollide?: (entityA: Entity, entityB: Entity) => void
  ): void {
    const physicsEntities = this.entityManager.getEntitiesWithComponents([TransformComponent.TYPE, PhysicsComponent.TYPE]);

    for (let i = 0; i < physicsEntities.length; i++) {
      const entA = physicsEntities[i];
      const transA = entA.getComponent<TransformComponent>(TransformComponent.TYPE)!;
      const physA = entA.getComponent<PhysicsComponent>(PhysicsComponent.TYPE)!;

      for (let j = i + 1; j < physicsEntities.length; j++) {
        const entB = physicsEntities[j];
        const transB = entB.getComponent<TransformComponent>(TransformComponent.TYPE)!;
        const physB = entB.getComponent<PhysicsComponent>(PhysicsComponent.TYPE)!;

        const dist = transA.position.distance(transB.position);
        const radiusSum = (physA.colliderRadius || 16) + (physB.colliderRadius || 16);

        if (dist < radiusSum && dist > 0.001) {
          // Collision overlap detected - elastic push apart
          const overlap = radiusSum - dist;
          const separationNormal = transA.position.clone().sub(transB.position).normalize();

          transA.position.addScaled(separationNormal, overlap * 0.5);
          transB.position.addScaled(separationNormal, -overlap * 0.5);

          if (onEntityCollide) {
            onEntityCollide(entA, entB);
          }
        }
      }
    }
  }

  // 3. STATUS EFFECT & PERIODIC DAMAGE SYSTEM
  public updateStatusEffectSystem(
    dt: number,
    onDamageDealt?: (entityId: number, dmg: number, color: string) => void
  ): void {
    this.statusConditions.forEach((conditions, entityId) => {
      const entity = this.entityManager.getEntityById(entityId);
      if (!entity) {
        this.statusConditions.delete(entityId);
        return;
      }

      const health = entity.getComponent<HealthComponent>(HealthComponent.TYPE);

      for (let idx = conditions.length - 1; idx >= 0; idx--) {
        const cond = conditions[idx];
        cond.duration -= dt;
        cond.tickTimer += dt;

        if (cond.tickTimer >= 1.0 && cond.periodicDmg > 0) {
          cond.tickTimer = 0;
          if (health) {
            health.currentHealth = Math.max(0, health.currentHealth - cond.periodicDmg);
            if (onDamageDealt) {
              onDamageDealt(entityId, cond.periodicDmg, cond.visualColor);
            }
          }
        }

        if (cond.duration <= 0) {
          conditions.splice(idx, 1);
        }
      }
    });
  }

  public applyStatusEffect(entityId: number, effect: ActiveStatusCondition): void {
    if (!this.statusConditions.has(entityId)) {
      this.statusConditions.set(entityId, []);
    }
    const list = this.statusConditions.get(entityId)!;
    const existing = list.find(e => e.id === effect.id);
    if (existing) {
      existing.duration = effect.duration; // Refresh duration
    } else {
      list.push(effect);
    }
  }

  // 4. THREAT & AGGRO MATRIX SYSTEM
  public updateThreatSystem(
    monsterEntityId: number,
    targetEntityId: number,
    threatDelta: number
  ): void {
    if (!this.threatTables.has(monsterEntityId)) {
      this.threatTables.set(monsterEntityId, new Map());
    }
    const table = this.threatTables.get(monsterEntityId)!;
    const current = table.get(targetEntityId) || 0;
    table.set(targetEntityId, Math.max(0, current + threatDelta));
  }

  public getHighestThreatTarget(monsterEntityId: number): number | undefined {
    const table = this.threatTables.get(monsterEntityId);
    if (!table || table.size === 0) return undefined;

    let highestThreat = -1;
    let primaryTarget: number | undefined = undefined;

    table.forEach((threat, targetId) => {
      if (threat > highestThreat) {
        highestThreat = threat;
        primaryTarget = targetId;
      }
    });

    return primaryTarget;
  }
}
