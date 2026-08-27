import { Vector2D } from '../core/Math2D';

export interface BossTelegraphSpec {
  id: string;
  type: 'Circle' | 'Cone' | 'Line';
  origin: Vector2D;
  target?: Vector2D;
  radius: number;
  chargeDuration: number;
  timeElapsed: number;
  color: string;
  onDetonate?: () => void;
}

export class TelegraphRenderPipeline {
  private static instance: TelegraphRenderPipeline;
  private activeTelegraphs: BossTelegraphSpec[] = [];

  public static getInstance(): TelegraphRenderPipeline {
    if (!TelegraphRenderPipeline.instance) {
      TelegraphRenderPipeline.instance = new TelegraphRenderPipeline();
    }
    return TelegraphRenderPipeline.instance;
  }

  public addTelegraph(spec: Omit<BossTelegraphSpec, 'timeElapsed'>): void {
    this.activeTelegraphs.push({
      ...spec,
      timeElapsed: 0
    });
  }

  public update(dt: number): void {
    for (let i = this.activeTelegraphs.length - 1; i >= 0; i--) {
      const t = this.activeTelegraphs[i];
      t.timeElapsed += dt;

      if (t.timeElapsed >= t.chargeDuration) {
        if (t.onDetonate) {
          t.onDetonate();
        }
        this.activeTelegraphs.splice(i, 1);
      }
    }
  }

  public render(ctx: CanvasRenderingContext2D, cameraOffset: Vector2D): void {
    ctx.save();
    for (const t of this.activeTelegraphs) {
      const fillProgress = Math.min(1.0, t.timeElapsed / t.chargeDuration);
      const cx = t.origin.x - cameraOffset.x;
      const cy = t.origin.y - cameraOffset.y;

      if (t.type === 'Circle') {
        // Outline ring
        ctx.strokeStyle = t.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, t.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Expanding fill warning
        ctx.fillStyle = t.color;
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(cx, cy, t.radius * fillProgress, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    }
    ctx.restore();
  }

  public clear(): void {
    this.activeTelegraphs = [];
  }
}
