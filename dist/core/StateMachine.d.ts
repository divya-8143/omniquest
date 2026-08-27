export interface State {
    name: string;
    onEnter?: () => void;
    onUpdate?: (dt: number) => void;
    onExit?: () => void;
}
export declare class StateMachine {
    private states;
    private currentState;
    addState(state: State): StateMachine;
    changeState(name: string): boolean;
    update(dt: number): void;
    getCurrentStateName(): string | null;
}
