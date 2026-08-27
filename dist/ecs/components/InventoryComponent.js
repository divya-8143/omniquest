"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryComponent = void 0;
class InventoryComponent {
    type = 'Inventory';
    items = [];
    maxSlots = 20;
    addItem(item) {
        if (this.items.length >= this.maxSlots)
            return false;
        const existing = this.items.find(i => i.id === item.id);
        if (existing) {
            existing.quantity += item.quantity;
        }
        else {
            this.items.push({ ...item });
        }
        return true;
    }
    removeItem(id, quantity = 1) {
        const idx = this.items.findIndex(i => i.id === id);
        if (idx === -1)
            return false;
        this.items[idx].quantity -= quantity;
        if (this.items[idx].quantity <= 0) {
            this.items.splice(idx, 1);
        }
        return true;
    }
}
exports.InventoryComponent = InventoryComponent;
//# sourceMappingURL=InventoryComponent.js.map