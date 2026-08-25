export class GameLoop {
  private isRunning: boolean = false;
  private lastTime: number = 0;
  private accumulator: number = 0;
  private readonly fixedStep: number = 1 / 60; // 60 FPS

  constructor(
    private updateFn: (dt: number) => void,
    private renderFn: (interp: number) => void
  ) {}

  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastTime = performance.now();
    this.tick(this.lastTime);
  }

  stop(): void {
    this.isRunning = false;
  }

  private tick = (currentTime: number): void => {
    if (!this.isRunning) return;

    const frameTime = Math.min((currentTime - this.lastTime) / 1000, 0.25);
    this.lastTime = currentTime;
    this.accumulator += frameTime;

    while (this.accumulator >= this.fixedStep) {
      this.updateFn(this.fixedStep);
      this.accumulator -= this.fixedStep;
    }

    const interpolation = this.accumulator / this.fixedStep;
    this.renderFn(interpolation);

    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(this.tick);
    }
  };
}
