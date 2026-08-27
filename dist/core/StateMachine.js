"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = void 0;
class StateMachine {
    states = new Map();
    currentState = null;
    addState(state) {
        this.states.set(state.name, state);
        return this;
    }
    changeState(name) {
        const nextState = this.states.get(name);
        if (!nextState)
            return false;
        if (this.currentState && this.currentState.onExit) {
            this.currentState.onExit();
        }
        this.currentState = nextState;
        if (this.currentState.onEnter) {
            this.currentState.onEnter();
        }
        return true;
    }
    update(dt) {
        if (this.currentState && this.currentState.onUpdate) {
            this.currentState.onUpdate(dt);
        }
    }
    getCurrentStateName() {
        return this.currentState ? this.currentState.name : null;
    }
}
exports.StateMachine = StateMachine;
//# sourceMappingURL=StateMachine.js.map