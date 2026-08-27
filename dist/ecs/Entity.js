"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
class Entity {
    id;
    name;
    active;
    constructor(id, name = `Entity_${id}`, active = true) {
        this.id = id;
        this.name = name;
        this.active = active;
    }
}
exports.Entity = Entity;
//# sourceMappingURL=Entity.js.map