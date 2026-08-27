import { Vector2D } from '../core/Math2D';

export type NodeStatus = 'SUCCESS' | 'FAILURE' | 'RUNNING';

export interface BehaviorContext {
  bossEntityId: number;
  bossPos: Vector2D;
  targetPos: Vector2D;
  currentHpPct: number;
  currentPhase: number;
  dt: number;
  cooldowns: Map<string, number>;
  telegraphTimer: number;
  activeTelegraph?: {
    type: 'Circle' | 'Cone' | 'Line';
    origin: Vector2D;
    radius: number;
    angle?: number;
    color: string;
  };
}

export abstract class BehaviorNode {
  abstract execute(context: BehaviorContext): NodeStatus;
}

export class SequenceNode extends BehaviorNode {
  constructor(private children: BehaviorNode[]) {
    super();
  }

  execute(context: BehaviorContext): NodeStatus {
    for (const child of this.children) {
      const status = child.execute(context);
      if (status !== 'SUCCESS') {
        return status;
      }
    }
    return 'SUCCESS';
  }
}

export class SelectorNode extends BehaviorNode {
  constructor(private children: BehaviorNode[]) {
    super();
  }

  execute(context: BehaviorContext): NodeStatus {
    for (const child of this.children) {
      const status = child.execute(context);
      if (status !== 'FAILURE') {
        return status;
      }
    }
    return 'FAILURE';
  }
}

export class ConditionNode extends BehaviorNode {
  constructor(private predicate: (context: BehaviorContext) => boolean) {
    super();
  }

  execute(context: BehaviorContext): NodeStatus {
    return this.predicate(context) ? 'SUCCESS' : 'FAILURE';
  }
}

export class ActionNode extends BehaviorNode {
  constructor(private action: (context: BehaviorContext) => NodeStatus) {
    super();
  }

  execute(context: BehaviorContext): NodeStatus {
    return this.action(context);
  }
}

export class BossBehaviorTreeEngine {
  private rootNode: BehaviorNode;
  private cooldowns: Map<string, number> = new Map();

  constructor() {
    this.rootNode = this.buildDemonOverlordTree();
  }

  public tick(
    bossId: number,
    bossPos: Vector2D,
    playerPos: Vector2D,
    currentHpPct: number,
    currentPhase: number,
    dt: number
  ): { status: NodeStatus; actionCue?: string; telegraph?: any } {
    // Update cooldowns
    this.cooldowns.forEach((time, key) => {
      if (time > 0) {
        this.cooldowns.set(key, Math.max(0, time - dt));
      }
    });

    const context: BehaviorContext = {
      bossEntityId: bossId,
      bossPos,
      targetPos: playerPos,
      currentHpPct,
      currentPhase,
      dt,
      cooldowns: this.cooldowns,
      telegraphTimer: 0
    };

    const status = this.rootNode.execute(context);
    return {
      status,
      telegraph: context.activeTelegraph
    };
  }

  private buildDemonOverlordTree(): BehaviorNode {
    return new SelectorNode([
      // Phase 3: Enrage Cataclysm (< 30% HP)
      new SequenceNode([
        new ConditionNode(ctx => ctx.currentHpPct <= 0.3),
        new ConditionNode(ctx => (ctx.cooldowns.get('cataclysm') || 0) <= 0),
        new ActionNode(ctx => {
          ctx.activeTelegraph = {
            type: 'Circle',
            origin: ctx.bossPos.clone(),
            radius: 260,
            color: '#dc2626'
          };
          ctx.cooldowns.set('cataclysm', 8.0);
          return 'SUCCESS';
        })
      ]),

      // Phase 2: Meteor Barrage (< 70% HP)
      new SequenceNode([
        new ConditionNode(ctx => ctx.currentHpPct <= 0.7),
        new ConditionNode(ctx => (ctx.cooldowns.get('meteor') || 0) <= 0),
        new ActionNode(ctx => {
          ctx.activeTelegraph = {
            type: 'Circle',
            origin: ctx.targetPos.clone(),
            radius: 120,
            color: '#f97316'
          };
          ctx.cooldowns.set('meteor', 5.0);
          return 'SUCCESS';
        })
      ]),

      // Default Melee Cleave
      new SequenceNode([
        new ConditionNode(ctx => ctx.bossPos.distance(ctx.targetPos) < 100),
        new ConditionNode(ctx => (ctx.cooldowns.get('cleave') || 0) <= 0),
        new ActionNode(ctx => {
          ctx.cooldowns.set('cleave', 1.8);
          return 'SUCCESS';
        })
      ])
    ]);
  }
}
