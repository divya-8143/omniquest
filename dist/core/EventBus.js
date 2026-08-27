"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventBus = void 0;
class EventBus {
    static instance;
    listeners = new Map();
    static getInstance() {
        if (!EventBus.instance) {
            EventBus.instance = new EventBus();
        }
        return EventBus.instance;
    }
    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
    }
    off(event, callback) {
        const list = this.listeners.get(event);
        if (!list)
            return;
        const idx = list.indexOf(callback);
        if (idx !== -1) {
            list.splice(idx, 1);
        }
    }
    emit(event, payload) {
        const list = this.listeners.get(event);
        if (list) {
            list.forEach(cb => cb(payload));
        }
    }
    clear() {
        this.listeners.clear();
    }
}
exports.EventBus = EventBus;
//# sourceMappingURL=EventBus.js.map