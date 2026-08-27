"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStateEngine = void 0;
class GlobalStateEngine {
    static instance;
    currentState = 'Initializing';
    observers = [];
    static getInstance() {
        if (!GlobalStateEngine.instance) {
            GlobalStateEngine.instance = new GlobalStateEngine();
        }
        return GlobalStateEngine.instance;
    }
    getState() {
        return this.currentState;
    }
    setState(newState) {
        if (this.currentState === newState)
            return;
        const oldState = this.currentState;
        this.currentState = newState;
        console.log(`[StateEngine] Transitioned: ${oldState} -> ${newState}`);
        this.notifyObservers(oldState, newState);
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    notifyObservers(oldState, newState) {
        this.observers.forEach(obs => obs.onStateChange(oldState, newState));
    }
}
exports.GlobalStateEngine = GlobalStateEngine;
//# sourceMappingURL=StateEngine.js.map