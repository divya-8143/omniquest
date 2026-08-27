"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameLoop = void 0;
class GameLoop {
    updateFn;
    renderFn;
    isRunning = false;
    lastTime = 0;
    accumulator = 0;
    fixedStep = 1 / 60; // 60 FPS
    constructor(updateFn, renderFn) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
    }
    start() {
        if (this.isRunning)
            return;
        this.isRunning = true;
        this.lastTime = performance.now();
        this.tick(this.lastTime);
    }
    stop() {
        this.isRunning = false;
    }
    tick = (currentTime) => {
        if (!this.isRunning)
            return;
        const frameTime = Math.min((currentTime - this.lastTime) / 1000, 0.25);
        this.lastTime = currentTime;
        this.accumulator += frameTime;
        while (this.accumulator >= this.fixedStep) {
            this.updateFn(this.fixedStep);
            this.accumulator -= this.fixedStep;
        }
        const interpolation = this.accumulator / this.fixedStep;
        this.renderFn(interpolation);
        if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(this.tick);
        }
    };
}
exports.GameLoop = GameLoop;
//# sourceMappingURL=GameLoop.js.map