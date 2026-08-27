export type GlobalGameState = 'Initializing' | 'MainMenu' | 'Exploring' | 'InCombat' | 'Cinematic' | 'Paused' | 'Saving';
export interface StateChangeObserver {
    onStateChange(previousState: GlobalGameState, newState: GlobalGameState): void;
}
export declare class GlobalStateEngine {
    private static instance;
    private currentState;
    private observers;
    static getInstance(): GlobalStateEngine;
    getState(): GlobalGameState;
    setState(newState: GlobalGameState): void;
    subscribe(observer: StateChangeObserver): void;
    private notifyObservers;
}
