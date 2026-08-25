export type GlobalGameState = 
  | 'Initializing'
  | 'MainMenu'
  | 'Exploring'
  | 'InCombat'
  | 'Cinematic'
  | 'Paused'
  | 'Saving';

export interface StateChangeObserver {
  onStateChange(previousState: GlobalGameState, newState: GlobalGameState): void;
}

export class GlobalStateEngine {
  private static instance: GlobalStateEngine;
  private currentState: GlobalGameState = 'Initializing';
  private observers: StateChangeObserver[] = [];

  static getInstance(): GlobalStateEngine {
    if (!GlobalStateEngine.instance) {
      GlobalStateEngine.instance = new GlobalStateEngine();
    }
    return GlobalStateEngine.instance;
  }

  getState(): GlobalGameState {
    return this.currentState;
  }

  setState(newState: GlobalGameState): void {
    if (this.currentState === newState) return;
    const oldState = this.currentState;
    this.currentState = newState;
    console.log(`[StateEngine] Transitioned: ${oldState} -> ${newState}`);
    this.notifyObservers(oldState, newState);
  }

  subscribe(observer: StateChangeObserver): void {
    this.observers.push(observer);
  }

  private notifyObservers(oldState: GlobalGameState, newState: GlobalGameState): void {
    this.observers.forEach(obs => obs.onStateChange(oldState, newState));
  }
}
