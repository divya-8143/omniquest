export interface SystemMetricSample {
  systemName: string;
  executionTimeMs: number;
  callCount: number;
  averageTimeMs: number;
  peakTimeMs: number;
  samples: number[];
}

export interface FrameProfileSnapshot {
  fps: number;
  frameTimeMs: number;
  renderTimeMs: number;
  updateTimeMs: number;
  ecsSystemTimings: Record<string, number>;
  activeEntityCount: number;
  activeParticleCount: number;
  timestamp: number;
}

export class PerformanceProfiler {
  private static instance: PerformanceProfiler;
  private metrics: Map<string, SystemMetricSample> = new Map();
  private sampleWindowSize: number = 60;
  private frameHistory: FrameProfileSnapshot[] = [];
  private lastFrameTimestamp: number = 0;
  private currentFps: number = 60;
  private activeTimers: Map<string, number> = new Map();

  public static getInstance(): PerformanceProfiler {
    if (!PerformanceProfiler.instance) {
      PerformanceProfiler.instance = new PerformanceProfiler();
    }
    return PerformanceProfiler.instance;
  }

  public startTimer(label: string): void {
    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    this.activeTimers.set(label, now);
  }

  public endTimer(label: string): number {
    const startTime = this.activeTimers.get(label);
    if (startTime === undefined) return 0;

    const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
    const elapsed = now - startTime;
    this.activeTimers.delete(label);
    this.recordSample(label, elapsed);
    return elapsed;
  }

  public profileFunction<T>(label: string, fn: () => T): T {
    this.startTimer(label);
    try {
      return fn();
    } finally {
      this.endTimer(label);
    }
  }

  public recordSample(systemName: string, timeMs: number): void {
    let metric = this.metrics.get(systemName);
    if (!metric) {
      metric = {
        systemName,
        executionTimeMs: timeMs,
        callCount: 0,
        averageTimeMs: timeMs,
        peakTimeMs: timeMs,
        samples: []
      };
      this.metrics.set(systemName, metric);
    }

    metric.callCount++;
    metric.executionTimeMs = timeMs;
    metric.peakTimeMs = Math.max(metric.peakTimeMs, timeMs);

    metric.samples.push(timeMs);
    if (metric.samples.length > this.sampleWindowSize) {
      metric.samples.shift();
    }

    const sum = metric.samples.reduce((acc, v) => acc + v, 0);
    metric.averageTimeMs = sum / metric.samples.length;
  }

  public recordFrame(snapshot: Omit<FrameProfileSnapshot, 'timestamp' | 'fps'>): void {
    const now = Date.now();
    if (this.lastFrameTimestamp > 0) {
      const delta = (now - this.lastFrameTimestamp) / 1000;
      if (delta > 0) {
        this.currentFps = Math.min(120, Math.round(1 / delta));
      }
    }
    this.lastFrameTimestamp = now;

    const fullSnapshot: FrameProfileSnapshot = {
      ...snapshot,
      fps: this.currentFps,
      timestamp: now
    };

    this.frameHistory.push(fullSnapshot);
    if (this.frameHistory.length > 100) {
      this.frameHistory.shift();
    }
  }

  public getMetric(systemName: string): SystemMetricSample | undefined {
    return this.metrics.get(systemName);
  }

  public getAllMetrics(): SystemMetricSample[] {
    return Array.from(this.metrics.values());
  }

  public getFps(): number {
    return this.currentFps;
  }

  public getLatestFrameSnapshot(): FrameProfileSnapshot | undefined {
    return this.frameHistory[this.frameHistory.length - 1];
  }

  public reset(): void {
    this.metrics.clear();
    this.activeTimers.clear();
    this.frameHistory = [];
  }
}
