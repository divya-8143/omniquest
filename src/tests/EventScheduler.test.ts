import { EventScheduler } from '../core/EventScheduler';
import { EventBus } from '../core/EventBus';

describe('EventScheduler', () => {
  let scheduler: EventScheduler;
  let eventBus: EventBus;

  beforeEach(() => {
    eventBus = new EventBus();
    scheduler = new EventScheduler(eventBus);
  });

  test('fires delayed event after timer expires', () => {
    let triggered = false;
    let receivedPayload: any = null;

    eventBus.on('TEST_DELAYED_EVENT', payload => {
      triggered = true;
      receivedPayload = payload;
    });

    scheduler.scheduleOnce('TEST_DELAYED_EVENT', { value: 42 }, 1.0);

    scheduler.update(0.5);
    expect(triggered).toBe(false);

    scheduler.update(0.6);
    expect(triggered).toBe(true);
    expect(receivedPayload).toEqual({ value: 42 });
    expect(scheduler.getPendingCount()).toBe(0);
  });

  test('cancels scheduled events by id', () => {
    let fired = false;
    eventBus.on('CANCEL_TEST', () => { fired = true; });

    const id = scheduler.scheduleOnce('CANCEL_TEST', {}, 2.0);
    expect(scheduler.cancel(id)).toBe(true);

    scheduler.update(3.0);
    expect(fired).toBe(false);
  });
});
