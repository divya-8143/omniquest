export declare class AdaptiveAudioMixer {
    private audioCtx;
    private currentMode;
    constructor();
    setMode(mode: 'exploring' | 'inCombat'): void;
    playCombatTransitionSound(): void;
}
