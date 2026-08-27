export interface GridPoint {
    x: number;
    y: number;
}
export declare class PathfindingAStar {
    static findPath(grid: number[][], start: GridPoint, end: GridPoint): GridPoint[];
}
