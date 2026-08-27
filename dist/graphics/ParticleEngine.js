"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleEngine = void 0;
const Math2D_1 = require("../core/Math2D");
class ParticleEngine {
    particles = [];
    emit(position, count = 10, color = '#ff9900') {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 150 + 50;
            this.particles.push({
                position: position.clone(),
                velocity: new Math2D_1.Vector2D(Math.cos(angle) * speed, Math.sin(angle) * speed),
                color,
                size: Math.random() * 4 + 2,
                life: 0,
                maxLife: Math.random() * 0.5 + 0.2
            });
        }
    }
    update(dt) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life += dt;
            if (p.life >= p.maxLife) {
                this.particles.splice(i, 1);
            }
            else {
                p.position.addScaled(p.velocity, dt);
            }
        }
    }
    getParticles() {
        return this.particles;
    }
}
exports.ParticleEngine = ParticleEngine;
//# sourceMappingURL=ParticleEngine.js.map