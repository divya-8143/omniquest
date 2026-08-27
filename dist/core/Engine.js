"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OmniquestEngine = void 0;
const EventBus_1 = require("./EventBus");
const StateMachine_1 = require("./StateMachine");
const GameLoop_1 = require("./GameLoop");
class OmniquestEngine {
    eventBus;
    stateMachine;
    gameLoop;
    initialized = false;
    constructor() {
        this.eventBus = EventBus_1.EventBus.getInstance();
        this.stateMachine = new StateMachine_1.StateMachine();
        this.gameLoop = new GameLoop_1.GameLoop((dt) => this.update(dt), (interp) => this.render(interp));
    }
    init() {
        if (this.initialized)
            return;
        this.setupStates();
        this.initialized = true;
        console.log('Omniquest Engine Initialized.');
    }
    start() {
        this.init();
        this.gameLoop.start();
        this.stateMachine.changeState('GAMEPLAY');
    }
    stop() {
        this.gameLoop.stop();
    }
    setupStates() {
        this.stateMachine.addState({
            name: 'MENU',
            onEnter: () => console.log('Entered Main Menu State'),
            onUpdate: (dt) => { }
        });
        this.stateMachine.addState({
            name: 'GAMEPLAY',
            onEnter: () => console.log('Entered Gameplay State'),
            onUpdate: (dt) => { }
        });
    }
    update(dt) {
        this.stateMachine.update(dt);
    }
    render(interp) {
        // Render pipeline trigger
    }
    getEventBus() { return this.eventBus; }
    getStateMachine() { return this.stateMachine; }
}
exports.OmniquestEngine = OmniquestEngine;
//# sourceMappingURL=Engine.js.map