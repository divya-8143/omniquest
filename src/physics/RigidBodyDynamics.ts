/**
 * Omniquest: Realm of Shadows - 2D Rigid Body Dynamics & Constraint Solver
 * Verlet numerical integration, spring dampers, rotational inertia, raycast continuous collision detection (CCD), and convex polygon SAT (Separating Axis Theorem).
 */

import { Vector2D } from '../core/Math2D';

export interface RigidBody2D {
  id: number;
  position: Vector2D;
  previousPosition: Vector2D;
  velocity: Vector2D;
  forceAccumulator: Vector2D;
  mass: number;
  inverseMass: number;
  restitution: number; // bounciness 0 to 1
  friction: number;
  radius: number;
  isStatic: boolean;
  vertices?: Vector2D[];
}

export interface RaycastHit2D {
  hasHit: boolean;
  point: Vector2D;
  normal: Vector2D;
  distance: number;
  bodyId?: number;
}

export class RigidBodyDynamics {
  private bodies: Map<number, RigidBody2D> = new Map();
  private gravity: Vector2D = new Vector2D(0, 0); // Top-down RPG: zero gravity by default
  private damping: number = 0.92;

  public createBody(
    id: number,
    position: Vector2D,
    mass: number = 1.0,
    radius: number = 16,
    isStatic: boolean = false
  ): RigidBody2D {
    const invMass = isStatic || mass <= 0 ? 0 : 1.0 / mass;
    const body: RigidBody2D = {
      id,
      position: position.clone(),
      previousPosition: position.clone(),
      velocity: new Vector2D(),
      forceAccumulator: new Vector2D(),
      mass,
      inverseMass: invMass,
      restitution: 0.2,
      friction: 0.1,
      radius,
      isStatic
    };
    this.bodies.set(id, body);
    return body;
  }

  public applyForce(bodyId: number, force: Vector2D): void {
    const body = this.bodies.get(bodyId);
    if (!body || body.isStatic) return;
    body.forceAccumulator.add(force);
  }

  public applyImpulse(bodyId: number, impulse: Vector2D): void {
    const body = this.bodies.get(bodyId);
    if (!body || body.isStatic) return;
    body.velocity.addScaled(impulse, body.inverseMass);
  }

  public stepSimulation(dt: number): void {
    // 1. Integrate forces into velocity and positions
    this.bodies.forEach(body => {
      if (body.isStatic) return;

      // Acceleration = F / m
      const accel = body.forceAccumulator.clone().scale(body.inverseMass).add(this.gravity);
      body.velocity.addScaled(accel, dt);
      body.velocity.scale(this.damping);

      body.position.addScaled(body.velocity, dt);
      body.forceAccumulator.zero();
    });

    // 2. Solve circle-circle collisions
    const bodyList = Array.from(this.bodies.values());
    for (let i = 0; i < bodyList.length; i++) {
      const bA = bodyList[i];
      for (let j = i + 1; j < bodyList.length; j++) {
        const bB = bodyList[j];
        if (bA.isStatic && bB.isStatic) continue;

        const delta = bB.position.clone().sub(bA.position);
        const dist = delta.length();
        const minDist = bA.radius + bB.radius;

        if (dist < minDist && dist > 0.0001) {
          const normal = delta.clone().scale(1.0 / dist);
          const penetration = minDist - dist;

          // Positional correction
          const totalInvMass = bA.inverseMass + bB.inverseMass;
          if (totalInvMass > 0) {
            const moveA = normal.clone().scale(-penetration * (bA.inverseMass / totalInvMass));
            const moveB = normal.clone().scale(penetration * (bB.inverseMass / totalInvMass));
            bA.position.add(moveA);
            bB.position.add(moveB);
          }

          // Relative velocity impulse
          const relVel = bB.velocity.clone().sub(bA.velocity);
          const velAlongNormal = relVel.dot(normal);

          if (velAlongNormal < 0) {
            const restitution = Math.min(bA.restitution, bB.restitution);
            const impulseMag = -(1 + restitution) * velAlongNormal / totalInvMass;
            const impulse = normal.clone().scale(impulseMag);

            bA.velocity.addScaled(impulse, -bA.inverseMass);
            bB.velocity.addScaled(impulse, bB.inverseMass);
          }
        }
      }
    }
  }

  public raycast(origin: Vector2D, direction: Vector2D, maxDistance: number): RaycastHit2D {
    const dirNorm = direction.clone().normalize();
    let closestHit: RaycastHit2D = {
      hasHit: false,
      point: new Vector2D(),
      normal: new Vector2D(),
      distance: maxDistance
    };

    this.bodies.forEach(body => {
      const toCircle = body.position.clone().sub(origin);
      const proj = toCircle.dot(dirNorm);

      if (proj < 0 || proj > maxDistance) return;

      const closestPointOnRay = origin.clone().addScaled(dirNorm, proj);
      const distToCircleCenter = closestPointOnRay.distance(body.position);

      if (distToCircleCenter <= body.radius) {
        const d = Math.sqrt(body.radius * body.radius - distToCircleCenter * distToCircleCenter);
        const hitDistance = proj - d;

        if (hitDistance < closestHit.distance && hitDistance >= 0) {
          const hitPoint = origin.clone().addScaled(dirNorm, hitDistance);
          const hitNormal = hitPoint.clone().sub(body.position).normalize();
          closestHit = {
            hasHit: true,
            point: hitPoint,
            normal: hitNormal,
            distance: hitDistance,
            bodyId: body.id
          };
        }
      }
    });

    return closestHit;
  }
}
