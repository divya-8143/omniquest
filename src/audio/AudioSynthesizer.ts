export class AudioSynthesizer {
  private audioCtx: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      this.audioCtx = new AudioContext();
    }
  }

  playTone(freq: number = 440, type: OscillatorType = 'sine', duration: number = 0.2): void {
    if (!this.audioCtx) return;
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

  playSwordSwing(): void {
    this.playTone(300, 'sawtooth', 0.1);
  }

  playExplosion(): void {
    this.playTone(80, 'square', 0.4);
  }

  playPickup(): void {
    this.playTone(880, 'sine', 0.15);
  }
}
