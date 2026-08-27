import { Entity, EntityId } from './Entity';
import { Component } from './Component';
export declare class EntityManager {
    private nextId;
    private entities;
    private components;
    createEntity(name?: string): Entity;
    destroyEntity(id: EntityId): void;
    addComponent(id: EntityId, component: Component): void;
    removeComponent(id: EntityId, componentType: string): void;
    getComponent<T extends Component>(id: EntityId, componentType: string): T | undefined;
    hasComponent(id: EntityId, componentType: string): boolean;
    getEntitiesWithComponents(types: string[]): EntityId[];
    getEntityCount(): number;
}
