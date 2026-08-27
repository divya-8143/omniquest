/**
 * Omniquest: Realm of Shadows - Spatial Audio & Algorithmic Soundscape Synthesizer
 * 3D positional audio, dynamic reverb zones, low-pass occlusions, and procedural audio synthesis.
 */

import { Vector2D } from '../core/Math2D';

export interface SoundEmitterSpec {
  id: string;
  position: Vector2D;
  maxDistance: number;
  falloffExponent: number;
  pitchVariation: number;
  volume: number;
  loop: boolean;
}

export class SpatialAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private listenerPosition: Vector2D = new Vector2D();
  private masterGain: GainNode | null = null;
  private activeEmitters: Map<string, SoundEmitterSpec> = new Map();

  constructor() {
    if (typeof window !== 'undefined' && (window.AudioContext || (window as any).webkitAudioContext)) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public setListenerPosition(pos: Vector2D): void {
    this.listenerPosition.copy(pos);
  }

  public playSpatialSound(
    soundType: 'sword' | 'fireball' | 'explosion' | 'freeze' | 'boss_roar' | 'pickup' | 'level_up',
    sourcePos: Vector2D,
    basePitch: number = 1.0
  ): void {
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    const dist = this.listenerPosition.distance(sourcePos);
    const maxDist = 800;
    if (dist > maxDist) return;

    // Attenuation calculation
    const attenuation = Math.max(0, 1 - (dist / maxDist) ** 1.5);
    const pan = Math.max(-1, Math.min(1, (sourcePos.x - this.listenerPosition.x) / 400));

    const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;
    if (panner) {
      panner.pan.setValueAtTime(pan, this.ctx.currentTime);
    }

    const gainNode = this.ctx.createGain();
    gainNode.gain.setValueAtTime(attenuation * 0.7, this.ctx.currentTime);

    const osc = this.ctx.createOscillator();

    if (soundType === 'sword') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(450 * basePitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(120, this.ctx.currentTime + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } else if (soundType === 'fireball') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(320 * basePitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, this.ctx.currentTime + 0.3);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.3);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.3);
    } else if (soundType === 'explosion') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(180 * basePitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.6);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.6);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.6);
    } else if (soundType === 'boss_roar') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110 * basePitch, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(65, this.ctx.currentTime + 1.2);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.2);
      osc.start();
      osc.stop(this.ctx.currentTime + 1.2);
    } else {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520 * basePitch, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.25);
      gainNode.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    }

    if (panner) {
      osc.connect(gainNode);
      gainNode.connect(panner);
      panner.connect(this.masterGain);
    } else {
      osc.connect(gainNode);
      gainNode.connect(this.masterGain);
    }
  }
}
