"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const Math2D_1 = require("../core/Math2D");
class Camera {
    position = new Math2D_1.Vector2D();
    viewportSize = new Math2D_1.Vector2D(1280, 720);
    zoom = 1.0;
    shakeTimer = 0;
    shakeIntensity = 0;
    follow(target, lerpFactor = 0.1) {
        const desiredX = target.x - this.viewportSize.x / 2;
        const desiredY = target.y - this.viewportSize.y / 2;
        this.position.x += (desiredX - this.position.x) * lerpFactor;
        this.position.y += (desiredY - this.position.y) * lerpFactor;
    }
    triggerShake(intensity, duration) {
        this.shakeIntensity = intensity;
        this.shakeTimer = duration;
    }
    update(dt) {
        if (this.shakeTimer > 0) {
            this.shakeTimer -= dt;
            if (this.shakeTimer <= 0) {
                this.shakeIntensity = 0;
            }
        }
    }
    getOffset() {
        const offsetX = (Math.random() - 0.5) * 2 * this.shakeIntensity;
        const offsetY = (Math.random() - 0.5) * 2 * this.shakeIntensity;
        return new Math2D_1.Vector2D(this.position.x + offsetX, this.position.y + offsetY);
    }
}
exports.Camera = Camera;
//# sourceMappingURL=Camera.js.map