export type BiomeType = 'Crypt' | 'Inferno' | 'Glacial' | 'Abyssal' | 'DesertCatacomb';

export interface BiomeVisualConfig {
  biomeType: BiomeType;
  name: string;
  wallColor: string;
  floorColor: string;
  doorColor: string;
  accentColor: string;
  hazardColor: string;
  ambientLightColor: string;
  ambientBrightness: number;
  particlePreset: string;
  monsterSpawnPool: string[];
  hazardSpawnRate: number;
}

export class BiomeThemingDirector {
  private static instance: BiomeThemingDirector;
  private biomes: Map<BiomeType, BiomeVisualConfig> = new Map();

  private constructor() {
    this.registerBiomes();
  }

  public static getInstance(): BiomeThemingDirector {
    if (!BiomeThemingDirector.instance) {
      BiomeThemingDirector.instance = new BiomeThemingDirector();
    }
    return BiomeThemingDirector.instance;
  }

  public getBiomeConfig(type: BiomeType): BiomeVisualConfig {
    return this.biomes.get(type) || this.biomes.get('Crypt')!;
  }

  public getBiomeForLevel(levelNumber: number): BiomeVisualConfig {
    if (levelNumber === 1) return this.getBiomeConfig('Crypt');
    if (levelNumber === 2) return this.getBiomeConfig('Inferno');
    return this.getBiomeConfig('Abyssal');
  }

  private registerBiomes(): void {
    this.biomes.set('Crypt', {
      biomeType: 'Crypt',
      name: 'The Crypt of Shadows',
      wallColor: '#1e293b',
      floorColor: '#0f172a',
      doorColor: '#38bdf8',
      accentColor: '#64748b',
      hazardColor: '#22c55e',
      ambientLightColor: '#0284c7',
      ambientBrightness: 0.25,
      particlePreset: 'fog_particles',
      monsterSpawnPool: ['best_gob_01', 'best_skel_02'],
      hazardSpawnRate: 0.10
    });

    this.biomes.set('Inferno', {
      biomeType: 'Inferno',
      name: 'The Inferno Caverns',
      wallColor: '#450a0a',
      floorColor: '#1c1917',
      doorColor: '#f97316',
      accentColor: '#dc2626',
      hazardColor: '#ef4444',
      ambientLightColor: '#ea580c',
      ambientBrightness: 0.35,
      particlePreset: 'ember_sparks',
      monsterSpawnPool: ['best_knight_03', 'best_imp_04', 'best_necro_05'],
      hazardSpawnRate: 0.20
    });

    this.biomes.set('Abyssal', {
      biomeType: 'Abyssal',
      name: 'The Abyssal Throne',
      wallColor: '#2e1065',
      floorColor: '#09090b',
      doorColor: '#a855f7',
      accentColor: '#7c3aed',
      hazardColor: '#ec4899',
      ambientLightColor: '#6d28d9',
      ambientBrightness: 0.30,
      particlePreset: 'void_motes',
      monsterSpawnPool: ['best_guard_06', 'best_boss_overlord_07'],
      hazardSpawnRate: 0.15
    });

    this.biomes.set('Glacial', {
      biomeType: 'Glacial',
      name: 'Frozen Catacombs',
      wallColor: '#082f49',
      floorColor: '#030712',
      doorColor: '#38bdf8',
      accentColor: '#7dd3fc',
      hazardColor: '#bae6fd',
      ambientLightColor: '#0284c7',
      ambientBrightness: 0.40,
      particlePreset: 'snow_drift',
      monsterSpawnPool: ['best_skel_02', 'best_knight_03'],
      hazardSpawnRate: 0.15
    });
  }
}
