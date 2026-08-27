export interface Room {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare class DungeonGenerator {
    width: number;
    height: number;
    minRoomSize: number;
    maxRoomSize: number;
    constructor(width?: number, height?: number, minRoomSize?: number, maxRoomSize?: number);
    generate(): {
        grid: number[][];
        rooms: Room[];
    };
}
