"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioSynthesizer = void 0;
class AudioSynthesizer {
    audioCtx = null;
    constructor() {
        if (typeof window !== 'undefined' && 'AudioContext' in window) {
            this.audioCtx = new AudioContext();
        }
    }
    playTone(freq = 440, type = 'sine', duration = 0.2) {
        if (!this.audioCtx)
            return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = type;
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start();
        osc.stop(this.audioCtx.currentTime + duration);
    }
    playSwordSwing() {
        this.playTone(300, 'sawtooth', 0.1);
    }
    playExplosion() {
        this.playTone(80, 'square', 0.4);
    }
    playPickup() {
        this.playTone(880, 'sine', 0.15);
    }
}
exports.AudioSynthesizer = AudioSynthesizer;
//# sourceMappingURL=AudioSynthesizer.js.map