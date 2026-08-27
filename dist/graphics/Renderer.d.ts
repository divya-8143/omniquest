import { Vector2D } from '../core/Math2D';
export declare class Canvas2DRenderer {
    private ctx;
    width: number;
    height: number;
    constructor(canvasId?: string);
    clear(color?: string): void;
    drawRect(position: Vector2D, size: Vector2D, color: string): void;
    drawCircle(position: Vector2D, radius: number, color: string): void;
    drawText(text: string, position: Vector2D, font?: string, color?: string): void;
}
