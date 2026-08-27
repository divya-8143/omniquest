"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas2DRenderer = void 0;
class Canvas2DRenderer {
    ctx = null;
    width = 1280;
    height = 720;
    constructor(canvasId) {
        if (typeof document !== 'undefined' && canvasId) {
            const canvas = document.getElementById(canvasId);
            if (canvas) {
                this.ctx = canvas.getContext('2d');
                this.width = canvas.width;
                this.height = canvas.height;
            }
        }
    }
    clear(color = '#050608') {
        if (!this.ctx)
            return;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    drawRect(position, size, color) {
        if (!this.ctx)
            return;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(position.x, position.y, size.x, size.y);
    }
    drawCircle(position, radius, color) {
        if (!this.ctx)
            return;
        this.ctx.beginPath();
        this.ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = color;
        this.ctx.fill();
    }
    drawText(text, position, font = '16px Segoe UI', color = '#ffffff') {
        if (!this.ctx)
            return;
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, position.x, position.y);
    }
}
exports.Canvas2DRenderer = Canvas2DRenderer;
//# sourceMappingURL=Renderer.js.map