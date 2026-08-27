/**
 * Omniquest: Realm of Shadows - 2D Vector Tile & Prop Rendering Vector Geometry Catalog
 * Procedural canvas paths for chests, altars, fountains, pillars, bone piles, and torches.
 */

export interface PropVectorModel {
  propType: string;
  renderInstructions: Array<{
    type: 'rect' | 'circle' | 'polygon' | 'glow' | 'strokeRect';
    color: string;
    offsetX: number;
    offsetY: number;
    width?: number;
    height?: number;
    radius?: number;
    points?: Array<{ x: number; y: number }>;
  }>;
}

export class DungeonPropModelCatalog {
  private static instance: DungeonPropModelCatalog;
  private models: Map<string, PropVectorModel> = new Map();

  private constructor() {
    this.registerAllPropModels();
  }

  public static getInstance(): DungeonPropModelCatalog {
    if (!DungeonPropModelCatalog.instance) {
      DungeonPropModelCatalog.instance = new DungeonPropModelCatalog();
    }
    return DungeonPropModelCatalog.instance;
  }

  public getModel(propType: string): PropVectorModel | undefined {
    return this.models.get(propType);
  }

  public renderProp(ctx: CanvasRenderingContext2D, propType: string, screenX: number, screenY: number): void {
    const model = this.models.get(propType);
    if (!model) return;

    ctx.save();
    ctx.translate(screenX, screenY);

    for (const instr of model.renderInstructions) {
      ctx.fillStyle = instr.color;
      ctx.strokeStyle = instr.color;

      if (instr.type === 'rect' && instr.width && instr.height) {
        ctx.fillRect(instr.offsetX, instr.offsetY, instr.width, instr.height);
      } else if (instr.type === 'strokeRect' && instr.width && instr.height) {
        ctx.strokeRect(instr.offsetX, instr.offsetY, instr.width, instr.height);
      } else if (instr.type === 'circle' && instr.radius) {
        ctx.beginPath();
        ctx.arc(instr.offsetX, instr.offsetY, instr.radius, 0, Math.PI * 2);
        ctx.fill();
      } else if (instr.type === 'glow' && instr.radius) {
        ctx.shadowColor = instr.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(instr.offsetX, instr.offsetY, instr.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    ctx.restore();
  }

  private registerAllPropModels(): void {
    this.models.set('TreasureChest', {
      propType: 'TreasureChest',
      renderInstructions: [
        { type: 'rect', color: '#78350f', offsetX: -12, offsetY: -8, width: 24, height: 16 },
        { type: 'strokeRect', color: '#fbbf24', offsetX: -12, offsetY: -8, width: 24, height: 16 },
        { type: 'rect', color: '#f59e0b', offsetX: -3, offsetY: -2, width: 6, height: 6 }
      ]
    });

    this.models.set('Altar', {
      propType: 'Altar',
      renderInstructions: [
        { type: 'rect', color: '#334155', offsetX: -16, offsetY: -12, width: 32, height: 24 },
        { type: 'strokeRect', color: '#64748b', offsetX: -16, offsetY: -12, width: 32, height: 24 },
        { type: 'glow', color: '#38bdf8', offsetX: 0, offsetY: -4, radius: 8 }
      ]
    });

    this.models.set('Torch', {
      propType: 'Torch',
      renderInstructions: [
        { type: 'rect', color: '#451a03', offsetX: -2, offsetY: -6, width: 4, height: 14 },
        { type: 'glow', color: '#f97316', offsetX: 0, offsetY: -8, radius: 6 }
      ]
    });
  }
}
