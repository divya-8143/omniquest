import { Component } from '../Component';
export interface Item {
    id: string;
    name: string;
    type: 'weapon' | 'armor' | 'potion' | 'quest';
    value: number;
    quantity: number;
}
export declare class InventoryComponent implements Component {
    readonly type = "Inventory";
    items: Item[];
    maxSlots: number;
    addItem(item: Item): boolean;
    removeItem(id: string, quantity?: number): boolean;
}
