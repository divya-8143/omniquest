export interface BiomeTile {
    tileId: number;
    name: string;
    walkable: boolean;
    color: string;
    friction: number;
}
export declare class BiomeCatalog {
    private static tiles;
    static initialize(): void;
    static getTile(id: number): BiomeTile | undefined;
    static getCount(): number;
}
