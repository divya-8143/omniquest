"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformComponent = void 0;
const Math2D_1 = require("../../core/Math2D");
class TransformComponent {
    position;
    rotation;
    scale;
    type = 'Transform';
    constructor(position = new Math2D_1.Vector2D(), rotation = 0, scale = new Math2D_1.Vector2D(1, 1)) {
        this.position = position;
        this.rotation = rotation;
        this.scale = scale;
    }
}
exports.TransformComponent = TransformComponent;
//# sourceMappingURL=TransformComponent.js.map