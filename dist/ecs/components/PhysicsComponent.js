"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsComponent = void 0;
const Math2D_1 = require("../../core/Math2D");
class PhysicsComponent {
    velocity;
    acceleration;
    mass;
    friction;
    isStatic;
    type = 'Physics';
    constructor(velocity = new Math2D_1.Vector2D(), acceleration = new Math2D_1.Vector2D(), mass = 1.0, friction = 0.9, isStatic = false) {
        this.velocity = velocity;
        this.acceleration = acceleration;
        this.mass = mass;
        this.friction = friction;
        this.isStatic = isStatic;
    }
}
exports.PhysicsComponent = PhysicsComponent;
//# sourceMappingURL=PhysicsComponent.js.map