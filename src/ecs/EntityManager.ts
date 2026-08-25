import { Entity, EntityId } from './Entity';
import { Component } from './Component';

export class EntityManager {
  private nextId: EntityId = 1;
  private entities: Map<EntityId, Entity> = new Map();
  private components: Map<EntityId, Map<string, Component>> = new Map();

  createEntity(name?: string): Entity {
    const id = this.nextId++;
    const entity = new Entity(id, name);
    this.entities.set(id, entity);
    this.components.set(id, new Map());
    return entity;
  }

  destroyEntity(id: EntityId): void {
    this.entities.delete(id);
    this.components.delete(id);
  }

  addComponent(id: EntityId, component: Component): void {
    const map = this.components.get(id);
    if (map) {
      map.set(component.type, component);
    }
  }

  removeComponent(id: EntityId, componentType: string): void {
    const map = this.components.get(id);
    if (map) {
      map.delete(componentType);
    }
  }

  getComponent<T extends Component>(id: EntityId, componentType: string): T | undefined {
    const map = this.components.get(id);
    return map ? (map.get(componentType) as T) : undefined;
  }

  hasComponent(id: EntityId, componentType: string): boolean {
    const map = this.components.get(id);
    return map ? map.has(componentType) : false;
  }

  getEntitiesWithComponents(types: string[]): EntityId[] {
    const result: EntityId[] = [];
    for (const [id, map] of this.components.entries()) {
      if (types.every(t => map.has(t))) {
        result.push(id);
      }
    }
    return result;
  }

  getEntityCount(): number {
    return this.entities.size;
  }
}
