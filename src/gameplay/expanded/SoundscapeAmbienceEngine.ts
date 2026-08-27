/**
 * Omniquest: Realm of Shadows - Subterranean Soundscape & Dynamic Audio Filter
 * Low-pass biquad audio filtering, cavern echoes, distance attenuation, and ambient wind sweeps.
 */

export class SoundscapeAmbienceEngine {
  private static instance: SoundscapeAmbienceEngine;

  public static getInstance(): SoundscapeAmbienceEngine {
    if (!SoundscapeAmbienceEngine.instance) {
      SoundscapeAmbienceEngine.instance = new SoundscapeAmbienceEngine();
    }
    return SoundscapeAmbienceEngine.instance;
  }

  public applyLowPassOcclusion(ctx: AudioContext, inputNode: AudioNode, cutoffFreq: number = 800): BiquadFilterNode {
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(cutoffFreq, ctx.currentTime);
    inputNode.connect(filter);
    return filter;
  }

  public createReverbImpulse(ctx: AudioContext, duration: number = 1.5, decay: number = 2.0): ConvolverNode {
    const rate = ctx.sampleRate;
    const length = rate * duration;
    const impulse = ctx.createBuffer(2, length, rate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
      left[i] = n;
      right[i] = n;
    }

    const convolver = ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
  }
}
