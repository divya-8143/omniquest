"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptiveAudioMixer = void 0;
class AdaptiveAudioMixer {
    audioCtx = null;
    currentMode = 'exploring';
    constructor() {
        if (typeof window !== 'undefined' && 'AudioContext' in window) {
            this.audioCtx = new AudioContext();
        }
    }
    setMode(mode) {
        if (this.currentMode === mode)
            return;
        this.currentMode = mode;
        console.log(`[AdaptiveAudioMixer] Crossfaded track to: ${mode}`);
    }
    playCombatTransitionSound() {
        if (!this.audioCtx)
            return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, this.audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.3);
        gain.gain.setValueAtTime(0.2, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + 0.3);
    }
}
exports.AdaptiveAudioMixer = AdaptiveAudioMixer;
//# sourceMappingURL=AdaptiveAudioMixer.js.map