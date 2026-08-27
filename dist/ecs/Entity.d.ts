export type EntityId = number;
export declare class Entity {
    readonly id: EntityId;
    name: string;
    active: boolean;
    constructor(id: EntityId, name?: string, active?: boolean);
}
