import { EventBus } from './EventBus';
import { StateMachine } from './StateMachine';
export declare class OmniquestEngine {
    private eventBus;
    private stateMachine;
    private gameLoop;
    private initialized;
    constructor();
    init(): void;
    start(): void;
    stop(): void;
    private setupStates;
    private update;
    private render;
    getEventBus(): EventBus;
    getStateMachine(): StateMachine;
}
