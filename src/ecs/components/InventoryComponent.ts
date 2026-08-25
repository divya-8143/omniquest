import { Component } from '../Component';

export interface Item {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'potion' | 'quest';
  value: number;
  quantity: number;
}

export class InventoryComponent implements Component {
  readonly type = 'Inventory';
  public items: Item[] = [];
  public maxSlots: number = 20;

  addItem(item: Item): boolean {
    if (this.items.length >= this.maxSlots) return false;
    const existing = this.items.find(i => i.id === item.id);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.items.push({ ...item });
    }
    return true;
  }

  removeItem(id: string, quantity: number = 1): boolean {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.items[idx].quantity -= quantity;
    if (this.items[idx].quantity <= 0) {
      this.items.splice(idx, 1);
    }
    return true;
  }
}
