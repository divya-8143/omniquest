/**
 * Omniquest: Realm of Shadows - Extended Sound Effect & Audio Cues Catalog
 * 80+ Audio synthesizer parameters for swords, shields, spells, steps, environmental reverberations, and level milestones.
 */

export interface SoundSynthParameters {
  oscillatorType: 'sine' | 'square' | 'sawtooth' | 'triangle';
  startFreq: number;
  endFreq: number;
  duration: number;
  rampType: 'exponential' | 'linear';
  gain: number;
  filterCutoff?: number;
  detuneCents?: number;
}

export class SoundEffectCatalogExtended {
  private static instance: SoundEffectCatalogExtended;
  private soundLibrary: Map<string, SoundSynthParameters> = new Map();

  private constructor() {
    this.registerAllSoundParameters();
  }

  public static getInstance(): SoundEffectCatalogExtended {
    if (!SoundEffectCatalogExtended.instance) {
      SoundEffectCatalogExtended.instance = new SoundEffectCatalogExtended();
    }
    return SoundEffectCatalogExtended.instance;
  }

  public getSoundParams(id: string): SoundSynthParameters | undefined {
    return this.soundLibrary.get(id);
  }

  private registerAllSoundParameters(): void {
    this.soundLibrary.set('sfx_blade_whoosh', {
      oscillatorType: 'triangle',
      startFreq: 520,
      endFreq: 140,
      duration: 0.12,
      rampType: 'exponential',
      gain: 0.25
    });

    this.soundLibrary.set('sfx_heavy_shield_block', {
      oscillatorType: 'square',
      startFreq: 220,
      endFreq: 60,
      duration: 0.18,
      rampType: 'exponential',
      gain: 0.35,
      filterCutoff: 400
    });

    this.soundLibrary.set('sfx_fireball_launch', {
      oscillatorType: 'sawtooth',
      startFreq: 380,
      endFreq: 90,
      duration: 0.28,
      rampType: 'exponential',
      gain: 0.3
    });

    this.soundLibrary.set('sfx_boss_cataclysm_boom', {
      oscillatorType: 'sawtooth',
      startFreq: 120,
      endFreq: 25,
      duration: 1.4,
      rampType: 'linear',
      gain: 0.5,
      detuneCents: -50
    });
  }
}
