import { EventBus } from './EventBus';
import { StateMachine } from './StateMachine';
import { GameLoop } from './GameLoop';

export class OmniquestEngine {
  private eventBus: EventBus;
  private stateMachine: StateMachine;
  private gameLoop: GameLoop;
  private initialized: boolean = false;

  constructor() {
    this.eventBus = EventBus.getInstance();
    this.stateMachine = new StateMachine();
    this.gameLoop = new GameLoop(
      (dt) => this.update(dt),
      (interp) => this.render(interp)
    );
  }

  init(): void {
    if (this.initialized) return;
    this.setupStates();
    this.initialized = true;
    console.log('Omniquest Engine Initialized.');
  }

  start(): void {
    this.init();
    this.gameLoop.start();
    this.stateMachine.changeState('GAMEPLAY');
  }

  stop(): void {
    this.gameLoop.stop();
  }

  private setupStates(): void {
    this.stateMachine.addState({
      name: 'MENU',
      onEnter: () => console.log('Entered Main Menu State'),
      onUpdate: (dt) => {}
    });

    this.stateMachine.addState({
      name: 'GAMEPLAY',
      onEnter: () => console.log('Entered Gameplay State'),
      onUpdate: (dt) => {}
    });
  }

  private update(dt: number): void {
    this.stateMachine.update(dt);
  }

  private render(interp: number): void {
    // Render pipeline trigger
  }

  getEventBus(): EventBus { return this.eventBus; }
  getStateMachine(): StateMachine { return this.stateMachine; }
}
