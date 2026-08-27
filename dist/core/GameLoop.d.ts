export declare class GameLoop {
    private updateFn;
    private renderFn;
    private isRunning;
    private lastTime;
    private accumulator;
    private readonly fixedStep;
    constructor(updateFn: (dt: number) => void, renderFn: (interp: number) => void);
    start(): void;
    stop(): void;
    private tick;
}
