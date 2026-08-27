export interface ItemAffix {
    name: string;
    stat: 'attack' | 'defense' | 'health' | 'speed' | 'critChance';
    modifier: number;
}
export interface ItemDef {
    id: string;
    name: string;
    slot: 'head' | 'chest' | 'hands' | 'legs' | 'weapon' | 'ring' | 'amulet';
    rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary' | 'mythic';
    baseStat: number;
    affixes: ItemAffix[];
}
export declare class ItemCatalog {
    private static catalog;
    static initialize(): void;
    static getItem(id: string): ItemDef | undefined;
    static getCount(): number;
}
