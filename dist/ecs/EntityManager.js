"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityManager = void 0;
const Entity_1 = require("./Entity");
class EntityManager {
    nextId = 1;
    entities = new Map();
    components = new Map();
    createEntity(name) {
        const id = this.nextId++;
        const entity = new Entity_1.Entity(id, name);
        this.entities.set(id, entity);
        this.components.set(id, new Map());
        return entity;
    }
    destroyEntity(id) {
        this.entities.delete(id);
        this.components.delete(id);
    }
    addComponent(id, component) {
        const map = this.components.get(id);
        if (map) {
            map.set(component.type, component);
        }
    }
    removeComponent(id, componentType) {
        const map = this.components.get(id);
        if (map) {
            map.delete(componentType);
        }
    }
    getComponent(id, componentType) {
        const map = this.components.get(id);
        return map ? map.get(componentType) : undefined;
    }
    hasComponent(id, componentType) {
        const map = this.components.get(id);
        return map ? map.has(componentType) : false;
    }
    getEntitiesWithComponents(types) {
        const result = [];
        for (const [id, map] of this.components.entries()) {
            if (types.every(t => map.has(t))) {
                result.push(id);
            }
        }
        return result;
    }
    getEntityCount() {
        return this.entities.size;
    }
}
exports.EntityManager = EntityManager;
//# sourceMappingURL=EntityManager.js.map