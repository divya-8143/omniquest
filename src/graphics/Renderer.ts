import { Vector2D } from '../core/Math2D';

export class Canvas2DRenderer {
  private ctx: CanvasRenderingContext2D | null = null;
  public width: number = 1280;
  public height: number = 720;

  constructor(canvasId?: string) {
    if (typeof document !== 'undefined' && canvasId) {
      const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      if (canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
      }
    }
  }

  clear(color: string = '#050608'): void {
    if (!this.ctx) return;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  drawRect(position: Vector2D, size: Vector2D, color: string): void {
    if (!this.ctx) return;
    this.ctx.fillStyle = color;
    this.ctx.fillRect(position.x, position.y, size.x, size.y);
  }

  drawCircle(position: Vector2D, radius: number, color: string): void {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  drawText(text: string, position: Vector2D, font: string = '16px Segoe UI', color: string = '#ffffff'): void {
    if (!this.ctx) return;
    this.ctx.font = font;
    this.ctx.fillStyle = color;
    this.ctx.fillText(text, position.x, position.y);
  }
}
