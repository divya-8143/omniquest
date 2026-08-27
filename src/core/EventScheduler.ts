import { EventBus } from './EventBus';

export interface ScheduledEvent {
  id: string;
  eventName: string;
  payload: any;
  delaySeconds: number;
  timeRemaining: number;
  isRecurring: boolean;
  intervalSeconds: number;
  maxIterations: number;
  iterationsCompleted: number;
  isCancelled: boolean;
}

export class EventScheduler {
  private static instance: EventScheduler;
  private eventBus: EventBus;
  private scheduledEvents: Map<string, ScheduledEvent> = new Map();
  private nextEventId: number = 1;

  constructor(eventBus?: EventBus) {
    this.eventBus = eventBus || EventBus.getInstance();
  }

  public static getInstance(eventBus?: EventBus): EventScheduler {
    if (!EventScheduler.instance) {
      EventScheduler.instance = new EventScheduler(eventBus);
    }
    return EventScheduler.instance;
  }

  public scheduleOnce(eventName: string, payload: any, delaySeconds: number): string {
    const id = `sched_once_${this.nextEventId++}_${Date.now()}`;
    const event: ScheduledEvent = {
      id,
      eventName,
      payload,
      delaySeconds: Math.max(0, delaySeconds),
      timeRemaining: Math.max(0, delaySeconds),
      isRecurring: false,
      intervalSeconds: 0,
      maxIterations: 1,
      iterationsCompleted: 0,
      isCancelled: false
    };
    this.scheduledEvents.set(id, event);
    return id;
  }

  public scheduleRecurring(
    eventName: string,
    payload: any,
    intervalSeconds: number,
    initialDelaySeconds: number = 0,
    maxIterations: number = Infinity
  ): string {
    const id = `sched_recur_${this.nextEventId++}_${Date.now()}`;
    const initialDelay = Math.max(0, initialDelaySeconds);
    const interval = Math.max(0.01, intervalSeconds);
    const event: ScheduledEvent = {
      id,
      eventName,
      payload,
      delaySeconds: initialDelay,
      timeRemaining: initialDelay > 0 ? initialDelay : interval,
      isRecurring: true,
      intervalSeconds: interval,
      maxIterations,
      iterationsCompleted: 0,
      isCancelled: false
    };
    this.scheduledEvents.set(id, event);
    return id;
  }

  public cancel(eventId: string): boolean {
    const event = this.scheduledEvents.get(eventId);
    if (!event) return false;
    event.isCancelled = true;
    this.scheduledEvents.delete(eventId);
    return true;
  }

  public cancelAllForEvent(eventName: string): number {
    let count = 0;
    this.scheduledEvents.forEach((ev, id) => {
      if (ev.eventName === eventName) {
        ev.isCancelled = true;
        this.scheduledEvents.delete(id);
        count++;
      }
    });
    return count;
  }

  public update(dt: number): void {
    if (dt <= 0) return;

    const expiredIds: string[] = [];

    this.scheduledEvents.forEach(event => {
      if (event.isCancelled) {
        expiredIds.push(event.id);
        return;
      }

      event.timeRemaining -= dt;

      if (event.timeRemaining <= 0) {
        // Emit payload to EventBus
        this.eventBus.emit(event.eventName, event.payload);
        event.iterationsCompleted++;

        if (event.isRecurring && event.iterationsCompleted < event.maxIterations) {
          event.timeRemaining = event.intervalSeconds;
        } else {
          expiredIds.push(event.id);
        }
      }
    });

    for (const id of expiredIds) {
      this.scheduledEvents.delete(id);
    }
  }

  public getPendingCount(): number {
    return this.scheduledEvents.size;
  }

  public clear(): void {
    this.scheduledEvents.clear();
  }
}
