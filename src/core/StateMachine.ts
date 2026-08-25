export interface State {
  name: string;
  onEnter?: () => void;
  onUpdate?: (dt: number) => void;
  onExit?: () => void;
}

export class StateMachine {
  private states: Map<string, State> = new Map();
  private currentState: State | null = null;

  addState(state: State): StateMachine {
    this.states.set(state.name, state);
    return this;
  }

  changeState(name: string): boolean {
    const nextState = this.states.get(name);
    if (!nextState) return false;

    if (this.currentState && this.currentState.onExit) {
      this.currentState.onExit();
    }

    this.currentState = nextState;
    if (this.currentState.onEnter) {
      this.currentState.onEnter();
    }
    return true;
  }

  update(dt: number): void {
    if (this.currentState && this.currentState.onUpdate) {
      this.currentState.onUpdate(dt);
    }
  }

  getCurrentStateName(): string | null {
    return this.currentState ? this.currentState.name : null;
  }
}
