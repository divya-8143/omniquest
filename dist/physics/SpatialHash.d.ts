import { AABB } from './BoundingBox';
export declare class SpatialHash {
    readonly cellSize: number;
    private grid;
    constructor(cellSize?: number);
    private getKey;
    insert(id: number, bounds: AABB): void;
    clear(): void;
    query(bounds: AABB): Set<number>;
}
