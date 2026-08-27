export class CanvasPostProcessor {
  private static instance: CanvasPostProcessor;
  private vignetteIntensity: number = 0.4;
  private heartbeatPhase: number = 0;

  public static getInstance(): CanvasPostProcessor {
    if (!CanvasPostProcessor.instance) {
      CanvasPostProcessor.instance = new CanvasPostProcessor();
    }
    return CanvasPostProcessor.instance;
  }

  public renderPostEffects(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    playerHpPct: number,
    dt: number
  ): void {
    // 1. Dark Vignette around screen edges
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, Math.min(width, height) * 0.3,
      width / 2, height / 2, Math.max(width, height) * 0.7
    );
    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, `rgba(0, 0, 0, ${this.vignetteIntensity})`);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 2. Low Health Heartbeat Pulsing Screen Edge
    if (playerHpPct < 0.35) {
      this.heartbeatPhase += dt * 6.0;
      const pulse = (Math.sin(this.heartbeatPhase) + 1.0) * 0.5;
      const alpha = (1.0 - (playerHpPct / 0.35)) * 0.45 * pulse;

      const dangerGradient = ctx.createRadialGradient(
        width / 2, height / 2, Math.min(width, height) * 0.4,
        width / 2, height / 2, Math.max(width, height) * 0.8
      );
      dangerGradient.addColorStop(0, 'rgba(220, 38, 38, 0)');
      dangerGradient.addColorStop(1, `rgba(220, 38, 38, ${alpha})`);

      ctx.fillStyle = dangerGradient;
      ctx.fillRect(0, 0, width, height);
    }
  }
}
