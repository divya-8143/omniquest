"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AABB = void 0;
const Math2D_1 = require("../core/Math2D");
class AABB {
    min;
    max;
    constructor(min = new Math2D_1.Vector2D(), max = new Math2D_1.Vector2D()) {
        this.min = min;
        this.max = max;
    }
    intersects(other) {
        return !(this.max.x < other.min.x ||
            this.min.x > other.max.x ||
            this.max.y < other.min.y ||
            this.min.y > other.max.y);
    }
    contains(point) {
        return (point.x >= this.min.x &&
            point.x <= this.max.x &&
            point.y >= this.min.y &&
            point.y <= this.max.y);
    }
}
exports.AABB = AABB;
//# sourceMappingURL=BoundingBox.js.map