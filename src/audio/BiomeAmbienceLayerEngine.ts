import { BiomeType } from '../procgen/BiomeThemingDirector';

export class BiomeAmbienceLayerEngine {
  private static instance: BiomeAmbienceLayerEngine;
  private currentBiome: BiomeType = 'Crypt';
  private audioContext: AudioContext | null = null;
  private noiseNode: AudioNode | null = null;

  public static getInstance(): BiomeAmbienceLayerEngine {
    if (!BiomeAmbienceLayerEngine.instance) {
      BiomeAmbienceLayerEngine.instance = new BiomeAmbienceLayerEngine();
    }
    return BiomeAmbienceLayerEngine.instance;
  }

  public setBiome(biome: BiomeType): void {
    this.currentBiome = biome;
  }

  public getAmbienceConfig(): { toneFrequency: number; modulationRate: number; filterType: BiquadFilterType; volume: number } {
    switch (this.currentBiome) {
      case 'Inferno':
        return { toneFrequency: 110, modulationRate: 0.8, filterType: 'lowpass', volume: 0.25 };
      case 'Glacial':
        return { toneFrequency: 440, modulationRate: 0.2, filterType: 'bandpass', volume: 0.15 };
      case 'Abyssal':
        return { toneFrequency: 65, modulationRate: 0.1, filterType: 'lowpass', volume: 0.35 };
      case 'Crypt':
      default:
        return { toneFrequency: 180, modulationRate: 0.4, filterType: 'lowpass', volume: 0.20 };
    }
  }
}
