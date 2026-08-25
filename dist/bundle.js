(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/core/EventBus.ts
  var _EventBus = class _EventBus {
    constructor() {
      __publicField(this, "listeners", /* @__PURE__ */ new Map());
    }
    static getInstance() {
      if (!_EventBus.instance) {
        _EventBus.instance = new _EventBus();
      }
      return _EventBus.instance;
    }
    on(event, callback) {
      if (!this.listeners.has(event)) {
        this.listeners.set(event, []);
      }
      this.listeners.get(event).push(callback);
    }
    off(event, callback) {
      const list = this.listeners.get(event);
      if (!list) return;
      const idx = list.indexOf(callback);
      if (idx !== -1) {
        list.splice(idx, 1);
      }
    }
    emit(event, payload) {
      const list = this.listeners.get(event);
      if (list) {
        list.forEach((cb) => cb(payload));
      }
    }
    clear() {
      this.listeners.clear();
    }
  };
  __publicField(_EventBus, "instance");
  var EventBus = _EventBus;

  // src/core/StateMachine.ts
  var StateMachine = class {
    constructor() {
      __publicField(this, "states", /* @__PURE__ */ new Map());
      __publicField(this, "currentState", null);
    }
    addState(state) {
      this.states.set(state.name, state);
      return this;
    }
    changeState(name) {
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
    update(dt) {
      if (this.currentState && this.currentState.onUpdate) {
        this.currentState.onUpdate(dt);
      }
    }
    getCurrentStateName() {
      return this.currentState ? this.currentState.name : null;
    }
  };

  // src/core/GameLoop.ts
  var GameLoop = class {
    // 60 FPS
    constructor(updateFn, renderFn) {
      __publicField(this, "updateFn", updateFn);
      __publicField(this, "renderFn", renderFn);
      __publicField(this, "isRunning", false);
      __publicField(this, "lastTime", 0);
      __publicField(this, "accumulator", 0);
      __publicField(this, "fixedStep", 1 / 60);
      __publicField(this, "tick", (currentTime) => {
        if (!this.isRunning) return;
        const frameTime = Math.min((currentTime - this.lastTime) / 1e3, 0.25);
        this.lastTime = currentTime;
        this.accumulator += frameTime;
        while (this.accumulator >= this.fixedStep) {
          this.updateFn(this.fixedStep);
          this.accumulator -= this.fixedStep;
        }
        const interpolation = this.accumulator / this.fixedStep;
        this.renderFn(interpolation);
        if (typeof requestAnimationFrame !== "undefined") {
          requestAnimationFrame(this.tick);
        }
      });
    }
    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      this.lastTime = performance.now();
      this.tick(this.lastTime);
    }
    stop() {
      this.isRunning = false;
    }
  };

  // src/core/Engine.ts
  var OmniquestEngine = class {
    constructor() {
      __publicField(this, "eventBus");
      __publicField(this, "stateMachine");
      __publicField(this, "gameLoop");
      __publicField(this, "initialized", false);
      this.eventBus = EventBus.getInstance();
      this.stateMachine = new StateMachine();
      this.gameLoop = new GameLoop(
        (dt) => this.update(dt),
        (interp) => this.render(interp)
      );
    }
    init() {
      if (this.initialized) return;
      this.setupStates();
      this.initialized = true;
      console.log("Omniquest Engine Initialized.");
    }
    start() {
      this.init();
      this.gameLoop.start();
      this.stateMachine.changeState("GAMEPLAY");
    }
    stop() {
      this.gameLoop.stop();
    }
    setupStates() {
      this.stateMachine.addState({
        name: "MENU",
        onEnter: () => console.log("Entered Main Menu State"),
        onUpdate: (dt) => {
        }
      });
      this.stateMachine.addState({
        name: "GAMEPLAY",
        onEnter: () => console.log("Entered Gameplay State"),
        onUpdate: (dt) => {
        }
      });
    }
    update(dt) {
      this.stateMachine.update(dt);
    }
    render(interp) {
    }
    getEventBus() {
      return this.eventBus;
    }
    getStateMachine() {
      return this.stateMachine;
    }
  };

  // src/index.ts
  console.log("--- Omniquest 2D Action RPG Engine ---");
  var engine = new OmniquestEngine();
  engine.init();
  console.log("Omniquest engine initialized successfully.");
})();
